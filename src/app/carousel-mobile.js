import { useTheme } from "@emotion/react";
import { Box, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";

const CarouselMobileCover = () => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const variantValue = isMdAndLg ? "h2" : "h6";
  const paddingValue = isMdAndLg ? "150px" : "30px";

  const carouselItems = [
    {
      id: 'CAR_MOBILE_1',
      videoUrl: "/assets/videos/video1.mp4",
      caption: "El restaurante de comida mexicana con el servicio más personalizado de Hidalgo",
    },
    {
      id: 'CAR_MOBILE_2',
      videoUrl: "/assets/videos/video2.mp4",
      caption: "Creemos en fortalecer e impulsar el potencial mexicano. Creemos en México ",
    },
    {
      id: 'CAR_MOBILE_3',
      videoUrl: "/assets/videos/video3.mp4",
      caption: " Fortalecemos e impulsamos a México a través de la fundación FIM.",
      description:
        " Además de tener el servicio más personalizado de Hidalgo",
    },
    {
      id: 'CAR_MOBILE_4',
      videoUrl: "/assets/videos/video4.mp4",
      caption: "Por cierto, preparamos una comida mexicana espectacular ¿quieres probarla? "
    },
  ];

  return (
    <Carousel
    indicators={false}
    navButtonsAlwaysVisible
    sx={{ backgroundColor: "black" }}
    autoPlay={false}
  >
    {carouselItems.map((item) => (
        <Grid  key={item.id}>
      <Paper
        elevation={0}
        sx={{
          height: "15rem",
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
      </Paper>
       <Paper
       elevation={0}
       sx={{
         height: "10rem",
         display: "flex",
         padding: paddingValue,
         position: "relative",
         flexDirection: "column",
         justifyContent: "center",
         backgroundColor: "#A9BDB1", // Color de fondo
         borderRadius: '0px 0px 0px 0px',
       }}
     >
       <Typography variant={variantValue} color="white">
         {item.caption}
       </Typography>
     </Paper>
     </Grid>
    ))}
  </Carousel>
  );
};

export default CarouselMobileCover;
