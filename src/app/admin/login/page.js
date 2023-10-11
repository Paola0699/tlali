"use client";
import { Alert, Grid, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import LoginHeader from "./login-header";
import LoginForm from "./login-form";
import { useTheme } from "@emotion/react";
import { useFormik } from "formik";
import * as yup from "yup";
import { auth } from "@/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { getUser } from "@/services/userServices";
const Login = () => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const padding = isMdAndLg ? 10 : 5;
  const [errorMessage, setErrorMessage] = useState();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      CORREO_ELECTRONICO: "",
      CONTRASEÑA: "",
    },
    validationSchema: yup.object({
      CORREO_ELECTRONICO: yup.string().email().required(),
      CONTRASEÑA: yup.string().required(),
    }),
    onSubmit: (values) => {
      const { CORREO_ELECTRONICO, CONTRASEÑA } = values;
      signInWithEmailAndPassword(auth, CORREO_ELECTRONICO, CONTRASEÑA)
        .then((userCredential) => {
          handleRedirect("/admin/usuarios");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    },
  });
  const handleRedirect = (path) => {
    router.push(path);
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userData = await getUser(user.uid);
        if(userData){
          document.cookie = 'userType=usuario';
        }else{
          document.cookie = 'userType=admin';
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
        <LoginHeader />
        {errorMessage && (
          <Alert style={{ marginBottom: "1rem" }} severity="error">
            {errorMessage?.message} {errorMessage?.error?.message}
          </Alert>
        )}
        <LoginForm formik={formik} />
      </Grid>
    </Grid>
  );
};

export default Login;
