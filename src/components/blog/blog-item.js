import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import BlogDetailsModal from "./blog-details-modal";

const BlogItem = ({ handleSelectPost, blogPost }) => {
  const [open, setOpen] = useState(false);
  const handleOpenDetails = () => {
    handleSelectPost({ ...blogPost, date: blogPost.date.seconds });
    setOpen(true);
  };
  return (
    <>
      <Card elevation={0}>
        <CardMedia
          component="img"
          height="120"
          image={blogPost?.image ? blogPost.image : "/assets/img/bg_1.png"}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="subtitle1" style={{ lineHeight: "20px" }}>
            {blogPost.title}
          </Typography>
          <br></br>
          {ReactHtmlParser(blogPost.description.substr(0, 250))}
          <Button onClick={() => handleOpenDetails()}>Leer más</Button>
        </CardContent>
      </Card>
      {open && <BlogDetailsModal open={open} setOpen={setOpen} />}
    </>
  );
};

export default BlogItem;
