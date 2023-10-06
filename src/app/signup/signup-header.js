import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const SignupHeader = () => {
  return (
    <Box padding={"3em"} textAlign={"center"}>
      <Image
        alt="logo_pajaro_negro"
        src={"/assets/img/logos/logo_pajaro_negro.png"}
        width={200}
        height={140}
      />
      <Typography variant="h5" color={"#665959"}>
        Regístrate y obtén beneficios
      </Typography>
      <Typography color={"#665959"}>
        Introduce el número de móvil para completar tu registro.
      </Typography>
    </Box>
  );
};

export default SignupHeader;
