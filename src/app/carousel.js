import { useTheme } from "@emotion/react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";

const CarouselCover = () => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const variantValue = isMdAndLg ? "h2" : "h4";
  const paddingValue = isMdAndLg ? "150px" : "50px";

  const carouselItems = [
    {
      imageUrl: "/assets/img/img_4.png",
      caption:
        "El restaurante de comida mexicana con el servicio más personalizado de Hidalgo",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula. ",
    },
    {
      imageUrl: "/assets/img/img_5.png",
      caption: "Creemos en el potencial mexicano...",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula. ",
    },
    {
      imageUrl: "/assets/img/img_1.jpg",
      caption: "Cómo lo logramos",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula. ",
    },
    {
      imageUrl: "/assets/img/img_1.jpg",
      caption: "¿Quieres probarla?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula. ",
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
            height: "30rem",
            backgroundImage: `url(${item.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            padding: paddingValue,
            position: "relative", // Agregar posición relativa al Paper
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Capa con color de fondo y opacidad */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Utilizar rgba para agregar opacidad al color de fondo
            }}
          />
          <Typography
            variant={variantValue}
            color={"white"}
            style={{ zIndex: "2" }}
          >
            {item.caption}
          </Typography>
          <Typography
            variant="subtitle1"
            color={"white"}
            style={{ zIndex: "2" }}
          >
            {item.description}
          </Typography>
        </Paper>
      ))}
    </Carousel>
  );
};

export default CarouselCover;
