import React from "react";
import { Grid } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import ReservacionesDescripcion from "../reservaciones/reservaciones-descripcion";

const SeccionReservaciones = ({ id }) => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const paddingValue = isMdAndLg ? 20 : 6;
  const heightValue = isMdAndLg ? "auto" : "270px";
  const containerPaddingValue = isMdAndLg ? '4rem' : '1.5rem';


  return (
    <Grid
    id={id}
    container
    style={{ backgroundColor: "white", padding: containerPaddingValue }}
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
        style={{backgroundColor: '#F0F1F0'}}
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
