"use client";
import { useTheme } from "@emotion/react";
import { Star } from "@mui/icons-material";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import QRCode from "qrcode.react";
import BottomNavigationComponent from "./components/bottom-navigation";

const Usuario = () => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const padding = isMdAndLg ? 15 : 5;

  return (
    <Grid
      container
      style={{
        backgroundColor: "#eff1ed",
        height: "100vh",
        width: "100vw",
      }}
      direction={"row"}
      padding={padding}
    >
      <Grid
        item
        xs={12}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Image
          alt="logo_pajaro_negro"
          src={"/assets/img/logos/logo_pajaro_negro.png"}
          width={120}
          height={90}
        />
        <Typography variant="h2" color={"#665959"}>
          ¡Hola, Axel!
        </Typography>
        <Typography variant="h5" color={"#665959"}>
          Es un gusto tenerte de vuelta
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        marginBottom={10}
      >
        <Typography variant="h4" color={"#665959"} textAlign={"center"}>
          450 <Star style={{ color: "#f4c01e" }} />
        </Typography>
        <Button
          style={{
            borderColor: "#83948f",
            color: "#83948f",
            fontFamily: "Rufina",
            borderRadius: "20px",
            marginBottom: "2rem",
          }}
          variant="outlined"
        >
          Consultar Historial
        </Button>
        <div
          style={{
            backgroundColor: "white",
            padding: "1rem",
            borderRadius: "20px",
          }}
        >
          <QRCode
            size={200}
            fgColor="#665959"
            value={JSON.stringify({ Nombre: "Paola" })}
          />
        </div>
        <Typography
          color={"#665959"}
          style={{ marginTop: "2rem" }}
          textAlign={"center"}
        >
          Escanea tu código en cada compra para acumular puntos en consumo
        </Typography>
      </Grid>
      <BottomNavigationComponent />
    </Grid>
  );
};
export default Usuario;
