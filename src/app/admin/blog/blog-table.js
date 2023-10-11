import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment/moment";
import Image from "next/image";
import React, { useState } from "react";
import BlogEditModal from "./blog-edit-modal";
import { useDispatch } from "react-redux";
import { addSelectedPost } from "@/redux/reducers/blog";
import { deleteBlogPost } from "@/services/blogServices";

const BlogTable = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedDeletePost, setSelectedDeletePost] = useState();

  const dispatch = useDispatch();
  const handleClose = () => {
    setOpenDialog(false);
  };
  const handleSelectPost = (post) => {
    dispatch(addSelectedPost({ ...post, date: post.date.seconds }));
    setOpen(true);
  };

  const columns = [
    {
      field: "date",
      headerName: "Fecha",
      valueGetter: (params) => {
        return moment.unix(params.row.date.seconds).format("DD MMMM YYYY");
      },
      width: 250,
    },
    {
      field: "Imagen",
      headerName: "Imagen",
      renderCell: (params) => (
        <Image
          src={params.row.image}
          alt={params.row.id}
          width={80}
          height={40}
        />
      ),
      width: 250,
    },
    {
      field: "title",
      headerName: "Fecha",
    },
    {
      field: "author",
      headerName: "Autor",
    },
    {
      field: "Acciones",
      renderCell: (params) => (
        <Button
          variant="contained"
          onClick={() => {
            setOpenDialog(true);
            setSelectedDeletePost(params.row.id);
          }}
        >
          Eliminar
        </Button>
      ),
      width: 250,
    },
  ];
  const handleDeletePost = async () => {
    await deleteBlogPost(selectedDeletePost);
    handleClose();
  };
  return (
    <>
      <Typography color="#665959">
        Doble click sobre el post para editarlo
      </Typography>
      <DataGrid
        rows={data}
        columns={columns}
        onCellDoubleClick={(params) => {
          handleSelectPost(params.row);
        }}
      />
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          ¿Deseas eliminar este blog post?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Una vez que se elimine no podrás revertir la acción.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleDeletePost} autoFocus>
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
      {open && <BlogEditModal open={open} setOpen={setOpen} />}
    </>
  );
};

export default BlogTable;
