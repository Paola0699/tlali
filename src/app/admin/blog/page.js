"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic"; // Importa la función dynamic
import TopNavigation from "../components/top-navigation";
import { Button, Grid } from "@mui/material";
import BoxTitle from "../components/box-title";
import BlogTable from "./blog-table";
import { getAllBlogs } from "@/services/blogServices";

// Usa dynamic para cargar dinámicamente BlogNewPostModal
const BlogNewPostModal = dynamic(() => import("./blog-new-post-modal"), {
  ssr: false, // Desactiva el prerenderizado del lado del servidor
});

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [open, setOpen] = useState(false);

  const handleGetBlogPosts = async () => {
    const response = await getAllBlogs();
    setBlogPosts(response);
  };

  useEffect(() => {
    handleGetBlogPosts();
  }, []);

  return (
    <>
      <TopNavigation />
      <Grid
        container
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "white",
          overflow: "scroll",
        }}
        padding={10}
      >
        <Grid item xs={12}>
          <BoxTitle title={"Blog"} subtitle={"Aquí encontrarás tus posts"} />
          <br></br>
          <Button
            variant="contained"
            style={{ marginBottom: "1rem" }}
            onClick={() => setOpen(true)}
          >
            Crear nuevo post
          </Button>
          <BlogTable data={blogPosts} />
          {open && <BlogNewPostModal open={open} setOpen={setOpen} />}
        </Grid>
      </Grid>
    </>
  );
};

export default Blog;
