import React from "react";
import { Grid } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import ReservacionesDescripcion from "../reservaciones/reservaciones-descripcion";
import ReservacionesImagen from "../reservaciones/reservaciones-imagen";

const SeccionReservaciones = ({ id }) => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const paddingValue = isMdAndLg ? 20 : 4;
  const heightValue = isMdAndLg ? "auto" : "400px";

  return (
    <Grid
    id={id}
    container
    style={{ backgroundColor: "white" }}
    >
      <Grid
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
      ></Grid>
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
            <ReservacionesDescripcion titulo={'Reservaciones'} descripcion={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. '}/>
      </Grid>
    </Grid>
  );
};
export default SeccionReservaciones;
