import { Typography, useMediaQuery } from "@mui/material";
import React from "react";
import ReservacionesButtons from "./reservaciones-buttons";
import { Lato, Rufina } from "next/font/google";
import { useTheme } from "@emotion/react";
const rufina = Rufina({ subsets: ["latin"], weight: "400" });
const lato = Lato({ subsets: ["latin"], weight: "400" });

const ReservacionesDescripcion = ({ titulo, descripcion }) => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const variantValue = isMdAndLg ? "h2" : "h3";
  return (
    <>
      <Typography
        color={"#83948F"}
        variant={variantValue}
        className={rufina.className}
      >
        {titulo}
      </Typography>
      <Typography color={"#665959"} variant="body1" className={lato.className}>
        {descripcion}
      </Typography>
      <ReservacionesButtons />
    </>
  );
};

export default ReservacionesDescripcion;
