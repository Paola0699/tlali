"use client";
import BlogItem from "@/components/blog/blog-item";
import { useTheme } from "@emotion/react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import BottomNavigationComponent from "../components/bottom-navigation";
import { getLastBlogs } from "@/services/blogServices";
import { useEffect, useState } from "react";

const Blog = () => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const padding = isMdAndLg ? 15 : 5;
  const [blogPosts, setBlogPosts] = useState([]);
  const handleGetBlogPosts = async () => {
    const response = await getLastBlogs();
    setBlogPosts(response);
  };
  useEffect(() => {
    handleGetBlogPosts();
  }, []);
  return (
    <Grid
      container
      style={{
        backgroundColor: "#eff1ed",
        height: "100vh",
        width: "100vw",
        overflow: "scroll",
      }}
      direction={"row"}
      padding={padding}
    >
      <Grid
        item
        xs={12}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        marginBottom={10}
      >
        <Image
          alt="logo_pajaro_negro"
          src={"/assets/img/logos/logo_pajaro_negro.png"}
          width={120}
          height={90}
        />
        <Typography variant="h2" color={"#665959"}>
          Nuestro Blog
        </Typography>
        <Grid container spacing={3} marginTop={1}>
          <Grid item xs={12} md={4} lg={4}>
            {blogPosts &&
              blogPosts.map((post) => (
                <BlogItem
                  key={post.id}
                  titulo={post.title}
                  descripcion={post.description.substr(0, 30)}
                  imagen={post.image}
                />
              ))}
          </Grid>
        </Grid>
      </Grid>
      <BottomNavigationComponent />
    </Grid>
  );
};

export default Blog;
