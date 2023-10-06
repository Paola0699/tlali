import { Typography, useMediaQuery } from "@mui/material";
import React from "react";
import ReservacionesButtons from "./reservaciones-buttons";
import { useTheme } from "@emotion/react";

const ReservacionesDescripcion = ({ titulo, descripcion }) => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const variantValue = isMdAndLg ? "h2" : "h4";
  return (
    <>
      <Typography color={"#758580 "} variant={variantValue}>
        {titulo}
      </Typography>
      <Typography color={"#665959"} variant="body1">
        {descripcion}
      </Typography>
      <ReservacionesButtons />
    </>
  );
};

export default ReservacionesDescripcion;
