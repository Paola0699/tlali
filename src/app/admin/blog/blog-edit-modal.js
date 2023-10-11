import { Alert, Box, Button, Modal, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import BoxTitle from "../components/box-title";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useSelector } from "react-redux";
import { putBlogPost } from "@/services/blogServices";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  maxHeight: "80%", // Ajusta la altura máxima según tus necesidades
  overflowY: "auto", // Permite el scroll vertical si el contenido excede la altura máxima
  bgcolor: "white",
  boxShadow: 24,
  p: 6,
};

const BlogEditModal = ({ open, setOpen }) => {
  const { selectedPost } = useSelector((state) => state.blog);
  const [editorData, setEditorData] = useState(selectedPost.description);
  const [successMessage, setSuccessMessage] = useState();

  const handleClose = () => {
    formik.handleSubmit();
    setSuccessMessage();
    setOpen(false);
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      TITULO: selectedPost && selectedPost.title,
      AUTOR: selectedPost && selectedPost.author,
    },
    onSubmit: async (values) => {
      const { TITULO, AUTOR } = values;
      await putBlogPost(selectedPost.id, {
        title: TITULO,
        author: AUTOR,
        description: editorData,
      });
      setSuccessMessage("Se ha actualizado el post con éxtito");
    },
  });
  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <BoxTitle
          title={"Editar post"}
          subtitle={"Edita los campos del blog post"}
        />
        <form
          style={{ color: "#665959", marginTop: "2rem" }}
          onSubmit={formik.handleSubmit}
        >
          {successMessage && <Alert severity="success">{successMessage}</Alert>}
          <TextField
            margin="dense"
            label="Título"
            size="small"
            InputLabelProps={{
              style: {
                color: "#665959", // Change the color of the label text
              },
              shrink: true,
            }}
            InputProps={{
              style: {
                color: "#665959", // Change the color of the input text
                borderColor: "#665959", // Change the color of the input border
              },
            }}
            fullWidth
            id="TITULO"
            name="TITULO"
            autoFocus={false}
            value={formik.values.TITULO}
            onChange={formik.handleChange}
            error={formik.touched.TITULO && Boolean(formik.errors.TITULO)}
            helperText={formik.touched.TITULO && formik.errors.TITULO}
          />
          <TextField
            margin="dense"
            label="Autor"
            size="small"
            InputLabelProps={{
              style: {
                color: "#665959", // Change the color of the label text
              },
              shrink: true,
            }}
            InputProps={{
              style: {
                color: "#665959", // Change the color of the input text
                borderColor: "#665959", // Change the color of the input border
              },
            }}
            fullWidth
            id="AUTOR"
            name="AUTOR"
            autoFocus={false}
            value={formik.values.AUTOR}
            onChange={formik.handleChange}
            error={formik.touched.AUTOR && Boolean(formik.errors.AUTOR)}
            helperText={formik.touched.AUTOR && formik.errors.AUTOR}
          />
          <CKEditor
            editor={ClassicEditor}
            data={editorData}
            onChange={handleEditorChange}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            style={{ marginTop: "1rem" }}
          >
            Editar post
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default BlogEditModal;
