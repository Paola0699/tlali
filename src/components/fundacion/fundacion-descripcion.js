import { Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import FundacionButtons from "./fundacion-buttons";

const FundacionDescripcion = ({ titulo, descripcion }) => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const variantValue = isMdAndLg ? "h2" : "h3";
  return (
    <>
      <Typography
        color={"#665959"}
        variant={variantValue}
      >
        {titulo}
      </Typography>
      <Typography color={"#665959"} variant="body1">
        {descripcion}
      </Typography>
      <FundacionButtons />
    </>
  );
};

export default FundacionDescripcion;
