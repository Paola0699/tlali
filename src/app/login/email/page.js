"use client";
import {
  Alert,
  Collapse,
  Grid,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import LoginHeader from "./login-header";
import { useTheme } from "@emotion/react";
import { useFormik } from "formik";
import LoginForm from "./login-form";
import * as yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { getUser } from "@/services/userServices";
import { useRouter } from "next/navigation";
import { CloseRounded } from "@mui/icons-material";

const LoginEmail = () => {
  const [errorMessage, setErrorMessage] = useState();
  const router = useRouter();
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const padding = isMdAndLg ? 10 : 5;

  const handleRedirect = (path) => {
    router.push(path);
  };

  const handleLogin = async (data) => {
    const { CORREO_ELECTRONICO, PASSWORD } = data;
    await signInWithEmailAndPassword(auth, CORREO_ELECTRONICO, PASSWORD)
      .then(() => {
        document.cookie = "userType=usuario";
        document.cookie = "isAuthenticated=true";
        handleRedirect("/usuario");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage({ errorCode, errorMessage });
      });
  };
  const formik = useFormik({
    initialValues: {
      CORREO_ELECTRONICO: "",
      PASSWORD: "",
    },
    validationSchema: yup.object({
      CORREO_ELECTRONICO: yup.string().email().required(),
      PASSWORD: yup.string().required(),
    }),
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

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
        handleRedirect("/login");
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
        <LoginHeader />
        <Collapse in={errorMessage?.errorMessage}>
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setErrorMessage();
                }}
              >
                <CloseRounded fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {errorMessage?.errorCode}
            {errorMessage?.errorMessage}
          </Alert>
        </Collapse>
        <LoginForm formik={formik} />
      </Grid>
    </Grid>
  );
};

export default LoginEmail;
