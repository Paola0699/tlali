import { useTheme } from "@emotion/react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Lato, Rufina } from "next/font/google";
import React from "react";

const rufina = Rufina({ subsets: ["latin"], weight: "400" });
const lato = Lato({ subsets: ["latin"], weight: "400" });

const NosotrosDescripcion = ({ titulo, descripcion }) => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const variantValue = isMdAndLg ? "h2" : "h3";

  return (
    <>
      <Typography variant={variantValue} className={rufina.className}>
        {titulo}
      </Typography>
      <Typography variant="body1" className={lato.className}>
        {descripcion}
      </Typography>
    </>
  );
};

export default NosotrosDescripcion;
