import { useTheme } from "@emotion/react";
import { Alert, Box, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

const LoginHeader = () => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const title = isMdAndLg ? 'h2' : 'h4';

  return (
    <Box padding={"3em"} textAlign={"center"}>
      <Image
        alt="logo_pajaro_negro"
        src={"/assets/img/logos/logo_pajaro_negro.png"}
        width={200}
        height={140}
      />
      <Typography variant={title} color={"#665959"}>
        Bienvenido de nuevo
      </Typography>
      <Typography variant="h5" color={"#665959"}>
        Es un gusto tenerte de vuelta
      </Typography>
      <Typography color={"#665959"}>
        Introduce tu número telefónico e inicia sesión
      </Typography>
      <Alert style={{ marginBottom: "1rem" }}>
          <Typography style={{ color: "#665959" }}>
            Recibirás un código de 6 dígitos para verificar a continuación.
          </Typography>
        </Alert>
    </Box>
  );
};

export default LoginHeader;
