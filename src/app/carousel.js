import { useTheme } from "@emotion/react";
import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";

const CarouselCover = () => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const variantValue = isMdAndLg ? "h2" : "h4";
  const paddingValue = isMdAndLg ? "150px" : "50px";

  const carouselItems = [
    {
      videoUrl: "/assets/videos/video1.mp4",
      caption: "El restaurante de comida mexicana con el servicio más personalizado de hidalgo",
    },
    {
      videoUrl: "/assets/videos/video2.mp4",
      caption: "Creemos en fortalecer e impulsar el potencial mexicano. ",
      description: "Creemos en México",
    },
    {
      videoUrl: "/assets/videos/video3.mp4",
      caption: "Fortalecemos e impulsamos a México a través de la fundación FIM.",
      description:
        "Además de tener el servicio más personalizado de hidalgo",
    },
    {
      videoUrl: "/assets/videos/video4.mp4",
      caption: "Por cierto, preparamos una comida mexicana espectacular ",
      description: "¿quieres probarla?",
    },
  ];

  return (
    <Carousel
    indicators={false}
    navButtonsAlwaysVisible
    sx={{ backgroundColor: "black" }}
    autoPlay={false}
  >
    {carouselItems.map((item, index) => (
      <Paper
        key={index}
        elevation={0}
        sx={{
          height: "40rem",
          display: "flex",
          padding: paddingValue,
          position: "relative",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "left", // Ajuste para enfocar la parte izquierda
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <source src={item.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Box
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        />
        <Typography variant={variantValue} color={"white"} style={{ zIndex: "2" }}>
          {item.caption}
        </Typography>
        <Typography variant="h5" color={"white"} style={{ zIndex: "2" }}>
          {item.description}
        </Typography>
      </Paper>
    ))}
  </Carousel>
  );
};

export default CarouselCover;
