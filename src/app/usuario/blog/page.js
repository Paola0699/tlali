"use client";
import BlogItem from "@/components/blog/blog-item";
import { useTheme } from "@emotion/react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import BottomNavigationComponent from "../components/bottom-navigation";

const Blog = () => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const padding = isMdAndLg ? 15 : 5;
  return (
    <Grid
      container
      style={{
        backgroundColor: "#eff1ed",
        height: "100vh",
        width: "100vw",
      }}
      direction={"row"}
      padding={padding}
      overflow={"scroll"}
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
      <BottomNavigationComponent />
    </Grid>
  );
};

export default Blog;
