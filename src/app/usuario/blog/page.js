"use client";
import BlogItem from "@/components/blog/blog-item";
import { useTheme } from "@emotion/react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import BottomNavigationComponent from "../components/bottom-navigation";
import { getLastBlogs } from "@/services/blogServices";
import { useEffect, useState } from "react";
import TopNavbar from "../components/top-navbar";
import NoDataMessage from "../components/no-data-message";
import { useDispatch } from "react-redux";
import { addSelectedPost } from "@/redux/reducers/blog";

const Blog = () => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const padding = isMdAndLg ? 10 : 5;
  const title = isMdAndLg ? "h2" : "h4";
  const dispatch = useDispatch();
  const [blogPosts, setBlogPosts] = useState([]);
  const handleGetBlogPosts = async () => {
    const response = await getLastBlogs();
    setBlogPosts(response);
  };
  useEffect(() => {
    handleGetBlogPosts();
  }, []);

  const handleSelectPost = (blogPost) => {
    dispatch(addSelectedPost(blogPost));
  };
  return (
    <>
      {" "}
      <TopNavbar />
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
          flexDirection={"column"}
          marginBottom={10}
        >
          <Typography variant={title} color={"#665959"}>
            Nuestro Blog
          </Typography>
          <Typography variant="h6" color={"#665959"}>
            Conoce las últimas noticias que tenemos para ti.
          </Typography>
          <Grid container spacing={3} marginTop={1}>
            <Grid item xs={12} md={4} lg={4}>
              {blogPosts &&
                blogPosts.map((post) => (
                  <BlogItem
                    key={post.id}
                    blogPost={post}
                    handleSelectPost={handleSelectPost}
                  />
                ))}
            </Grid>
            <Grid item xs={12}>
              {blogPosts.length === 0 && (
                <NoDataMessage
                  title={"Aún no hay entradas del blog"}
                  subtitle={
                    "Vuelve más tarde y entérate de lo último en Tlali."
                  }
                />
              )}
            </Grid>
          </Grid>
        </Grid>
        <BottomNavigationComponent />
      </Grid>
    </>
  );
};

export default Blog;
