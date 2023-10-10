import { useTheme } from "@emotion/react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

const LoginHeader = () => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const title = isMdAndLg ? "h2" : "h4";
  return (
    <Box padding={"3em"} textAlign={"center"}>
      <Image
        alt="logo_pajaro_negro"
        src={"/assets/img/logos/logo_pajaro_negro.png"}
        width={200}
        height={140}
      />
      <Typography variant={title} color={"#665959"}>
        Bienvenido administrador
      </Typography>
      <Typography variant="h5" color={"#665959"}>
        Es un gusto tenerte de vuelta
      </Typography>
      <Typography color={"#665959"}>
        Introduce tus credenciales e inicia sesión
      </Typography>
    </Box>
  );
};

export default LoginHeader;
