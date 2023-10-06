"use client";
import { Alert, Grid, Paper, Typography, useMediaQuery } from "@mui/material";
import LoginHeader from "./login-header";
import { useTheme } from "@emotion/react";
import LoginForm from "./login-form";
import {
  PhoneAuthProvider,
  RecaptchaVerifier,
  signInWithCredential,
  signInWithPhoneNumber,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { auth } from "../../firebase/firebase";
import LoginCodeVerification from "./login-code-verification";
import { getUserByPhoneNumber } from "../../services/userServices";
import { useRouter } from "next/navigation";
import { formatPhoneNumber } from "@/utils/utils";

const initializeRecaptcha = () => {
  return new RecaptchaVerifier(auth, "recaptcha-container", {
    size: "invisible",
  });
};

const Login = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const padding = isMdAndLg ? 10 : 5;

  const [sendMessageSuccess, setSendMessageSuccess] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState({});
  const [errorMessage, setErrorMessage] = useState();

  const formik = useFormik({
    initialValues: {
      NUMERO_TELEFONO: "",
    },
    validationSchema: yup.object({
      NUMERO_TELEFONO: yup
        .string()
        .required("Debes ingresar un número de teléfono para continuar")
        .test(
          "no-underscore",
          "El número de teléfono no es válido",
          (value) => {
            return value === undefined || !value.includes("_");
          }
        ),
    }),
    onSubmit: (values) => {
      handleSendCode(values);
    },
  });

  const handleSendCode = async (values) => {
    try {
      const recaptchaVerifier = initializeRecaptcha();
      const phoneNumber = formatPhoneNumber(values.NUMERO_TELEFONO);
      const userDoc = await getUserByPhoneNumber(phoneNumber);
      if (userDoc === null) {
        setErrorMessage({
          message:
            "No existe ningún usuario registrado con este número telefónico.",
        });
        return;
      }
      const response = await signInWithPhoneNumber(
        auth,
        `+${phoneNumber}`,
        recaptchaVerifier
      );
      setConfirmationResult(response);
      setSendMessageSuccess(true);
    } catch (error) {
      setErrorMessage({
        message: "Error sending code: ",
        error,
      });
    }
  };

  const handleVerifyCode = async (verificationCode) => {
    try {
      const { verificationId } = confirmationResult;
      const credential = PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await signInWithCredential(auth, credential);
    } catch (error) {
      setErrorMessage({
        message: "Error verifying code: ",
        error,
      });
    }
  };

  /*   auth.onAuthStateChanged((user) => {
    if (user) {
      document.cookie = "isAuthenticated=true";
    }
  }); */

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
        component={Paper}
        elevation={6}
        square
        container
        direction={"column"}
        padding={padding}
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
      >
        <LoginHeader />
        <Alert style={{ marginBottom: "1rem" }}>
          <Typography style={{ color: "#665959" }}>
            Recibirás un código de 4 dígitos para verificar a continuación.
          </Typography>
        </Alert>
        {errorMessage && (
          <Alert style={{ marginBottom: "1rem" }} severity="error">
            {errorMessage?.message} {errorMessage?.error?.message}
          </Alert>
        )}
        {!sendMessageSuccess ? (
          <LoginForm formik={formik} />
        ) : (
          <LoginCodeVerification handleVerifyCode={handleVerifyCode} />
        )}
      </Grid>
    </Grid>
  );
};

export default Login;