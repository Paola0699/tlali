import React from "react";
import { Grid } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import ReservacionesDescripcion from "../reservaciones/reservaciones-descripcion";
import ReservacionesImagen from "../reservaciones/reservaciones-imagen";

const SeccionReservaciones = ({ id }) => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const paddingValue = isMdAndLg ? 20 : 8;
  const heightValue = isMdAndLg ? "auto" : "400px";

  return (
    <Grid
    id={id}
    container
    style={{ backgroundColor: "white" }}
    >
      {isMdAndLg && <Grid
        item
        xs={12}
        md={6}
        lg={6}
        height={heightValue}
        style={{
          backgroundImage: `url('/assets/img/img_8.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Grid> }
      
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
            <ReservacionesDescripcion titulo={'Reservaciones'} descripcion={'Reserva ahora la mejor mesa, con la mejor vista de pachuca y disfruta de un momento inolvidable.'}/>
      </Grid>

      {!isMdAndLg && <Grid
        item
        xs={12}
        md={6}
        lg={6}
        height={heightValue}
        style={{
          backgroundImage: `url('/assets/img/img_8.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Grid> }
    </Grid>
  );
};
export default SeccionReservaciones;
