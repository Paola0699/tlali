"use client";
import { Grid, useMediaQuery } from "@mui/material";
import React from "react";
import LoginHeader from "./login-header";
import { useTheme } from "@emotion/react";
import { useFormik } from "formik";
import LoginForm from "./login-form";

const LoginEmail = () => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const padding = isMdAndLg ? 10 : 5;
  const formik = useFormik({
    initialValues: {
      CORREO_ELECTRONICO: "",
      PASSWORD: "",
    },
  });
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
        <LoginForm formik={formik} />
      </Grid>
    </Grid>
  );
};

export default LoginEmail;
