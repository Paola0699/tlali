import React from "react";
import { Grid } from "@mui/material";
import MembresiaDescripcion from "../membresias/membresia-descripcion";
import MembresiaImagen from "../membresias/membresia-imagen";
import { useMediaQuery, useTheme } from "@mui/material";

const SeccionMembresias = ({ id }) => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const paddingValue = isMdAndLg ? 20 : 4;

  return (
    <Grid
      id={id}
      container
      paddingRight={paddingValue}
      paddingLeft={paddingValue}
      paddingTop={5}
      paddingBottom={7}
      spacing={3}
      style={{ backgroundColor: "#D7C6A7", color: "white" }}
      marginTop={0}
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
        display={"flex"}
        alignItems={"center"}
        justifyContent={'center'}
        flexDirection={"column"}
      >
        <MembresiaImagen />
      </Grid>
    </Grid>
  );
};
export default SeccionMembresias;
