"use client";
import React, { useEffect, useState } from "react";
import TopNavigation from "../components/top-navigation";
import { Button, Grid } from "@mui/material";
import BoxTitle from "../components/box-title";
import BlogTable from "./blog-table";
import { getAllBlogs } from "@/services/blogServices";

const Blog = () => {
  const [open, setOpen] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);

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
          <Button
            variant="contained"
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
            onClick={() => setOpen(true)}
          >
            Crear nuevo post
          </Button>
          <BlogTable data={blogPosts} />
        </Grid>{" "}
        <Grid item xs={12}></Grid>
      </Grid>
    </>
  );
};

export default Blog;
