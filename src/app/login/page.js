"use client";
import { Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import { getUser } from "../../services/userServices";
import { useRouter } from "next/navigation";
import LoginTelefono from "./telefono/login-telefono";
import LoginEmail from "./email/login-email";

const Login = () => {
  const [loginMethod, setLoginMethod] = useState(false);
  const router = useRouter();
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const padding = isMdAndLg ? 10 : 5;
  const handleRedirect = (path) => {
    router.push(path);
  };
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userData = await getUser(user.uid);
        if (userData) {
          document.cookie = "userType=usuario";
        } else {
          document.cookie = "userType=admin";
        }
        document.cookie = "isAuthenticated=true";
      }
    });
  }, []);
  return (
    <Grid
      container
      style={{
        backgroundColor: "#eff1ed",
        height: "100vh",
        width: "100vw",
        overflow: "scroll",
      }}
    >
      <div id="recaptcha-container"></div>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        direction={"column"}
        padding={padding}
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
        container
      >
        {!loginMethod ? (
          <LoginTelefono
            handleRedirect={handleRedirect}
            loginMethod={loginMethod}
            setLoginMethod={setLoginMethod}
          />
        ) : (
          <LoginEmail
            handleRedirect={handleRedirect}
            loginMethod={loginMethod}
            setLoginMethod={setLoginMethod}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default Login;
