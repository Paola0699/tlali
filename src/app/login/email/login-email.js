import {
  Alert,
  Collapse,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import LoginHeader from "./login-header";
import { useFormik } from "formik";
import LoginForm from "./login-form";
import * as yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { CloseRounded } from "@mui/icons-material";

const LoginEmail = ({handleRedirect, loginMethod, setLoginMethod}) => {
  const [errorMessage, setErrorMessage] = useState();
  const handleSetLoginMethod = () => {
    setLoginMethod(!loginMethod);
  }
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

  return (
    <>
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
        <LoginForm formik={formik} handleSetLoginMethod={handleSetLoginMethod} />
        </>
  );
};

export default LoginEmail;
