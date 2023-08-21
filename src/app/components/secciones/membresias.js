import React from "react";
import { Grid } from "@mui/material";
import MembresiaDescripcion from "../membresias/membresia-descripcion";
import MembresiaImagen from "../membresias/membresia-imagen";
import { useMediaQuery, useTheme } from "@mui/material";

const SeccionMembresias = ({ id }) => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const paddingValue = isMdAndLg ? 20 : 8;
  const heightValue = isMdAndLg ? "600px" : "400px";

  return (
    <Grid
      id={id}
      container
      style={{ backgroundColor: "#c5c6c4", color: "white" }}
    >
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        padding={paddingValue}
      >
        <MembresiaDescripcion
          titulo={"¿Qué es una membresía?"}
          descripcion={
            "Una membresía es tu acceso a disfrutar del servicio más personalizado de hidalgo, además de poder disfrutar de múltiples beneficios, dentro y fuera del restaurante. ¡Conócelos!"
          }
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        height={heightValue}
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          muted
          loop
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src="/assets/videos/video_6.mp4" type="video/mp4" />
        </video>
      </Grid>
    </Grid>
  );
};

export default SeccionMembresias;
