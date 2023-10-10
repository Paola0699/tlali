import { resetSelectedPost } from "@/redux/reducers/blog";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactHtmlParser from "react-html-parser";
import moment from "moment";
import { useTheme } from "@emotion/react";

const BlogDetailsModal = ({ open, setOpen }) => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const padding = isMdAndLg ? 6 : 0;
  const width = isMdAndLg ? "70%" : "90%";
  const dispatch = useDispatch();
  const { selectedPost } = useSelector((state) => state.blog);
  const handleClose = () => {
    dispatch(resetSelectedPost());
    setOpen(false);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: width,
          maxHeight: "90%", // Ajusta la altura máxima según tus necesidades
          overflowY: "auto", // Permite el scroll vertical si el contenido excede la altura máxima
          bgcolor: "white",
          boxShadow: 24,
          p: padding,
        }}
      >
        <Card elevation={0}>
          <CardMedia
            sx={{ height: 250 }}
            image={selectedPost.image}
            title={selectedPost.title}
          />
          <CardContent>
            <Typography variant="h4" color={"#665959"}>
              {selectedPost.title}
            </Typography>
            <Typography color={"#665959"}>
              Autor: {selectedPost.author}
            </Typography>
            <Typography variant="caption" color={"#665959"}>
              {moment.unix(selectedPost.date).format("DD MMMM YYYY")}
            </Typography>
            <br></br>
            <br></br>
            <Typography color={"#665959"}>
              {ReactHtmlParser(selectedPost.description)}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" fullWidth onClick={handleClose}>
              Cerrar
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Modal>
  );
};

export default BlogDetailsModal;
