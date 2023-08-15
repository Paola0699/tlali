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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
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
