import { useTheme } from "@emotion/react";
import { Typography, useMediaQuery } from "@mui/material";
import { Rufina } from "next/font/google";
import React from "react";
const rufina = Rufina({ subsets: ["latin"], weight: "400" });

const ContactoTitulo = ({ titulo }) => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const variantValue = isMdAndLg ? "h2" : "h3";
  return (
    <Typography
      color={"#83948F"}
      variant={variantValue}
      className={rufina.className}
    >
      {titulo}
    </Typography>
  );
};

export default ContactoTitulo;
