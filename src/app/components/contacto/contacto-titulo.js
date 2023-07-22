import { useTheme } from "@emotion/react";
import { Typography, useMediaQuery } from "@mui/material";
import React from "react";

const ContactoTitulo = ({ titulo }) => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const variantValue = isMdAndLg ? "h2" : "h3";
  return (
    <Typography
      color={"#83948F"}
      variant={variantValue}
    >
      {titulo}
    </Typography>
  );
};

export default ContactoTitulo;
