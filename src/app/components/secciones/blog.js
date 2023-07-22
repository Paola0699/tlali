import { Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import { Rufina } from "next/font/google";
import BlogItem from "../blog/blog-item";
const rufina = Rufina({ subsets: ["latin"], weight: "400" });

const SeccionBlog = ({ id }) => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const paddingValue = isMdAndLg ? 15 : 5;
  const variantValue = isMdAndLg ? "h2" : "h3";

  return (
    <Grid
      id={id}
      container
      style={{ backgroundColor: "#A9BDB1" }}
      marginBottom={3}
    >
      <Grid item xs={12} padding={paddingValue}>
        <Typography
          className={rufina.className}
          variant={variantValue}
          color="white"
        >
          Lo último
        </Typography>
        <Grid container spacing={3} marginTop={1}>
          <Grid item xs={12} md={4} lg={4}>
            <BlogItem
              titulo={"Lorem Ipsum"}
              descripcion={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet."
              }
              imagen={"/assets/img/img_1.jpg"}
            />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            {" "}
            <BlogItem
              titulo={"Lorem Ipsum"}
              descripcion={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet."
              }
              imagen={"/assets/img/img_1.jpg"}
            />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            {" "}
            <BlogItem
              titulo={"Lorem Ipsum"}
              descripcion={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet."
              }
              imagen={"/assets/img/img_1.jpg"}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SeccionBlog;
