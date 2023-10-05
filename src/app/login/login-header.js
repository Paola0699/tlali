import { Box, Typography } from "@mui/material";
import Image from "next/image";

const LoginHeader = () => {
  return (
    <Box padding={"3em"} textAlign={"center"}>
      <Image
        alt="logo_pajaro_negro"
        src={"/assets/img/logos/logo_pajaro_negro.png"}
        width={200}
        height={140}
      />
      <Typography variant="h2" color={"#665959"}>
        Bienvenido de nuevo
      </Typography>
      <Typography variant="h5" color={"#665959"}>
        Es un gusto tenerte de vuelta
      </Typography>
      <Typography color={"#665959"}>
        Para comenzar deberás ingresar tus credenciales
      </Typography>
    </Box>
  );
};

export default LoginHeader;
