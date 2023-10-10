"use client";
import { useTheme } from "@emotion/react";
import {
  Alert,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ChefAppointmentNew from "./chef-appointment-new";
import ChefHistory from "./chef-history";
import BottomNavigationComponent from "../components/bottom-navigation";
import TopNavbar from "../components/top-navbar";
import { auth } from "@/firebase/firebase";
import { useEffect, useState } from "react";

const Rewards = () => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const padding = isMdAndLg ? 10 : 5;
  const [user, setUser]= useState();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return (
    <>
    <TopNavbar/>
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
        flexDirection={"column"}
        marginBottom={10}
      >
        <Typography variant="h2" color={"#665959"}>
          Chef a domicilio
        </Typography>
        <Alert
          severity='success'
          style={{marginBottom: '1rem'}}
        >
          Una vez que envies tu solicitud de cita. El restaurante será
          notificado y se podrá en contacto contigo para confirmar la
          reservación.{" "}
        </Alert>
        <ChefAppointmentNew user={user} />
        <ChefHistory user={user} />
      </Grid>
      <BottomNavigationComponent />
    </Grid>
    </>
  );
};
export default Rewards;
