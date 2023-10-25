import React from "react";
import { Grid } from "@mui/material";
import MembresiaDescripcion from "../membresias/membresia-descripcion";
import MembresiaImagen from "../membresias/membresia-imagen";
import { useMediaQuery, useTheme } from "@mui/material";

const SeccionMembresias = ({ id }) => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const paddingValue = isMdAndLg ? 10 : 8;
  const heightValue = isMdAndLg ? "600px" : "400px";

  return (
    <Grid
      id={id}
      container
      style={{ backgroundColor: "#83948F", color: "white" }}
    >
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
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
    </Grid>
  );
};

export default SeccionMembresias;
