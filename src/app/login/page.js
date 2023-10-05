"use client";
import { Grid, Paper, useMediaQuery } from "@mui/material";
import LoginHeader from "./login-header";
import { useTheme } from "@emotion/react";
import LoginForm from "./login-form";
import { PhoneAuthProvider, RecaptchaVerifier, getAuth, signInWithCredential, signInWithPhoneNumber } from "firebase/auth";
import app from "../firebase/firebase";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from 'yup';
const auth = getAuth(app);


const Login = () => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const padding = isMdAndLg ? 10 : 0;
  const [verificationCode, setVerificationCode] = useState('');

  const formik = useFormik({
    initialValues: {
      NUMERO_TELEFONO: ''
    },
    validationSchema: yup.object({
      NUMERO_TELEFONO: yup.string().min(10).max(10).required(),
    }),    
    onSubmit: (values) => {
      console.log(values)
      handleSendCode(values.NUMERO_TELEFONO);
    }
  })

  const handleSendCode = async (phoneNumber) => {
    console.log(phoneNumber);
    try {
      const recaptchaVerifier = new RecaptchaVerifier(auth,'recaptcha-container', {
        size: 'invisible',
      });
      console.log(recaptchaVerifier);
      const confirmationResult = await signInWithPhoneNumber(auth,phoneNumber, recaptchaVerifier);
      console.log(confirmationResult);
      setVerificationCode('');
    } catch (error) {
      console.error('Error sending code:', error);
    }
  };

  const handleVerifyCode = async () => {
    try {
      const credential = PhoneAuthProvider.credential(confirmationResult.verificationId, verificationCode);
      console.log(credential);
      await signInWithCredential(credential);
    } catch (error) {
      console.error('Error verifying code:', error);
    }
  };

  return (
    <Grid
      container
      style={{ backgroundColor: "#eff1ed", height: "100vh", width: "100vw" }}
    >
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
        <div id="recaptcha-container"></div>
        <LoginForm formik={formik} />
      </Grid>
    </Grid>
  );
};
export default Login;
