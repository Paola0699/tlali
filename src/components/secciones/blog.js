import { Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import { Rufina } from "next/font/google";
import BlogItem from "../blog/blog-item";
import { useDispatch } from "react-redux";
import { addSelectedPost } from "@/redux/reducers/blog";
const rufina = Rufina({ subsets: ["latin"], weight: "400" });

const SeccionBlog = ({ id, data }) => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const paddingValue = isMdAndLg ? 15 : 5;
  const variantValue = isMdAndLg ? "h2" : "h3";
  const containerPaddingValue = isMdAndLg ? "4rem" : "1.5rem";
  const dispatch = useDispatch();

  const handleSelectPost = (blogPost) => {
    dispatch(addSelectedPost(blogPost));
  };

  return (
    <Grid
      id={id}
      container
      style={{ backgroundColor: "#fff" }}
      marginBottom={3}
      padding={containerPaddingValue}
    >
      <Grid
        item
        xs={12}
        padding={paddingValue}
        style={{ backgroundColor: "#83948F" }}
      >
        <Typography
          className={rufina.className}
          variant={variantValue}
          color="white"
        >
          Nuestro blog
        </Typography>
        <Grid container spacing={3} marginTop={1}>
          <Grid item xs={12} md={4} lg={4}>
            {data &&
              data.map((post) => (
                <BlogItem
                  key={post.id}
                  blogPost={post}
                  handleSelectPost={handleSelectPost}
                />
              ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SeccionBlog;
