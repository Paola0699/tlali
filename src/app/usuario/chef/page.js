"use client";
import { useTheme } from "@emotion/react";
import {
  Alert,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import ChefAppointmentNew from "./chef-appointment-new";
import ChefHistory from "./chef-history";
import BottomNavigationComponent from "../components/bottom-navigation";

const Rewards = () => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const padding = isMdAndLg ? 15 : 5;
  return (
    <Grid
      container
      style={{
        backgroundColor: "#eff1ed",
        height: "100vh",
        width: "100vw",
      }}
      direction={"row"}
      padding={padding}
      overflow={"scroll"}
    >
      <Grid
        item
        xs={12}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        marginBottom={10}
      >
        <Image
          alt="logo_pajaro_negro"
          src={"/assets/img/logos/logo_pajaro_negro.png"}
          width={120}
          height={90}
        />
        <Typography variant="h2" color={"#665959"}>
          Chef a domicilio
        </Typography>
        <Alert
          icon={false}
          style={{
            marginBottom: "1rem",
            width: "100%",
            color: "#665959",
            border: "1px solid #665959",
            backgroundColor: "transparent",
          }}
        >
          Una vez que envies tu solicitud de cita. El restaurante será
          notificado y se podrá en contacto contigo para confirmar la
          reservación.{" "}
        </Alert>
        <ChefAppointmentNew />
        <ChefHistory />
      </Grid>
      <BottomNavigationComponent />
    </Grid>
  );
};
export default Rewards;
