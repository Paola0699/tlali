"use client";
import { useTheme } from "@emotion/react";
import { Star } from "@mui/icons-material";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import QRCode from "qrcode.react";
import BottomNavigationComponent from "./components/bottom-navigation";
import { auth } from "../../firebase/firebase";
import { useEffect, useState } from "react";
import { getUser } from "@/services/userServices";
import TopNavbar from "./components/top-navbar";

const Usuario = () => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const padding = isMdAndLg ? 10 : 5;
  const title = isMdAndLg ? 'h2' : 'h4';
  const [userData, setUserData] = useState();


  const handleGetUserData = async (uid) => {
    try {
      const response = await getUser(uid);
      setUserData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        document.cookie = "isAuthenticated=true";
        document.cookie = 'userType=usuario'
        handleGetUserData(user.uid);
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
        overflow:'scroll'
      }}
      direction={"row"}
      padding={padding}
    >
      <Grid
        item
        xs={12}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        marginBottom={1}
      >
        <Typography variant={title} color={"#665959"}>
          ¡Hola, {userData?.name}!
        </Typography>
        <Typography variant="h5" color={"#665959"}>
          Es un gusto tenerte de vuelta
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        marginBottom={10}
      >
        <Typography variant="h4" color={"#665959"} textAlign={"center"}>
          {userData?.points} <Star style={{ color: "#f4c01e" }} />
          {userData?.points === 0 && (
            <Typography>
              {" "}
              Aún no cuentas con ningún punto,realiza tu primera compra para
              comenzar a acumular
            </Typography>
          )}
        </Typography>
        <Button
          style={{
            borderColor: "#83948f",
            color: "#83948f",
            fontFamily: "Rufina",
            borderRadius: "20px",
            marginBottom: "2rem",
            marginTop: "1rem",
          }}
          variant="outlined"
        >
          Consultar Historial
        </Button>
        {userData && (
          <div
            style={{
              backgroundColor: "white",
              padding: "1rem",
              borderRadius: "20px",
            }}
          >
            <QRCode
              size={200}
              fgColor="#665959"
              value={JSON.stringify(userData)}
            />
          </div>
        )}

        <Typography
          color={"#665959"}
          style={{ marginTop: "2rem" }}
          textAlign={"center"}
        >
          Escanea tu código en cada compra para acumular puntos en consumo
        </Typography>
      </Grid>
      <BottomNavigationComponent />
    </Grid>
    </>
  );
};
export default Usuario;
