import { Box, Modal } from "@mui/material";
import React from "react";
import BoxTitle from "../components/box-title";
import BlogNewPostForm from "./blog-new-post-form";

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
  p: 6
};

const BlogNewPostModal = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
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
          title={"Crear post"}
          subtitle={
            "Ingresa todos los campos para crear un nuevo post del blog"
          }
        />
        <BlogNewPostForm handleClose={handleClose} />
      </Box>
    </Modal>
  );
};

export default BlogNewPostModal;
