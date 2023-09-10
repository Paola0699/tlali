import React from "react";
import { Grid } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import ReservacionesDescripcion from "../reservaciones/reservaciones-descripcion";
import ReservacionesImagen from "../reservaciones/reservaciones-imagen";
import FundacionDescripcion from "../fundacion/fundacion-descripcion";
import FundacionImagen from "../fundacion/fundacion-imagen";
import ContactoTitulo from "../contacto/contacto-titulo";
import ContactoFormulario from "../contacto/contacto-formulario";

const SeccionContacto = ({ id }) => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const paddingValue = isMdAndLg ? 20 : 4;

  return (
    <Grid
      id={id}
      container
      paddingRight={paddingValue}
      paddingLeft={paddingValue}
      paddingTop={15}
      paddingBottom={15}
      spacing={3}
      style={{ backgroundColor: "#F7F8F7" }}
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
        <ContactoTitulo titulo={'¡Recibe nuestros beneficios antes que nadie!'}/>
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
        <ContactoFormulario/>
      </Grid>
    </Grid>
  );
};
export default SeccionContacto;
