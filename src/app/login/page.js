"use client";
import { Alert, Button, Grid, Paper, useMediaQuery } from "@mui/material";
import LoginHeader from "./login-header";
import { useTheme } from "@emotion/react";
import LoginForm from "./login-form";
import {
  PhoneAuthProvider,
  RecaptchaVerifier,
  signInWithCredential,
  signInWithPhoneNumber,
} from "firebase/auth";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { auth } from "../firebase/firebase";
import LoginCodeVerification from "./login-code-verification";
import { getUser, postUser } from "../services/userServices";
import { useRouter } from "next/navigation";

const initializeRecaptcha = () => {
  return new RecaptchaVerifier(auth, "recaptcha-container", {
    size: "invisible",
  });
};

const Login = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const padding = isMdAndLg ? 10 : 0;
  const [sendMessageSuccess, setSendMessageSuccess] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState({});
  const [errorMessage, setErrorMessage] = useState();

  const formik = useFormik({
    initialValues: {
      NUMERO_TELEFONO: "",
    },
    validationSchema: yup.object({
      NUMERO_TELEFONO: yup.string().min(10).max(10).required(),
    }),
    onSubmit: (values) => {
      handleSendCode(values?.NUMERO_TELEFONO);
    },
  });

  const handleSendCode = async (phoneNumber) => {
    try {
      const recaptchaVerifier = initializeRecaptcha();
      const response = await signInWithPhoneNumber(
        auth,
        `+52${phoneNumber}`,
        recaptchaVerifier
      );
      setConfirmationResult(response);
      setSendMessageSuccess(true);
    } catch (error) {
      setErrorMessage({
        message: "Error sending code:",
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
      const response = await signInWithCredential(auth, credential);
      const user = response.user;
      const userDoc = await getUser(user.uid);
      if (!userDoc.exists()) {
        await postUser(user.uid);
      }
      handleRedirect();
    } catch (error) {
      console.error("Error verifying code:", error);
    }
  };

  const handleRedirect = () => {
    router.push("/usuario");
  };

  return (
    <Grid
      container
      style={{
        backgroundColor: "#eff1ed",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div id="recaptcha-container"></div>
      <Grid
        style={{ height: "100vh" }}
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
        {errorMessage && (
          <Alert style={{ marginBottom: "1rem" }} severity="error">
            {errorMessage.message}
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
