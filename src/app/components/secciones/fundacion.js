import React from "react";
import { Grid } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import FundacionDescripcion from "../fundacion/fundacion-descripcion";
import FundacionImagen from "../fundacion/fundacion-imagen";

const SeccionFundacion = ({ id }) => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const paddingValue = isMdAndLg ? 20 : 4;

  return (
    <Grid
      id={id}
      container
      paddingRight={paddingValue}
      paddingLeft={paddingValue}
      paddingTop={10}
      paddingBottom={10}
      spacing={3}
      style={{ backgroundColor: "white" }}
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
        <FundacionImagen />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <FundacionDescripcion
          titulo={"Fundación FIM"}
          descripcion={
            "Conoce la Fundación FIM. Una fundación con la que Tlali trabaja de la mano, para fortalecer e impulsar a México, a través del apoyo a jóvenes de escasos recursos, para que puedan continuar con sus estudios medio-superiores."
          }
        />
      </Grid>
    </Grid>
  );
};
export default SeccionFundacion;
