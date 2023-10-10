"use client";
import { useTheme } from "@emotion/react";
import { Alert, Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import SignupHeader from "./signup-header";
import SignupForm from "./signup-form";
import { useFormik } from "formik";
import * as yup from "yup";
import { formatPhoneNumber } from "@/utils/utils";
import {
  PhoneAuthProvider,
  RecaptchaVerifier,
  signInWithCredential,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { getUserByPhoneNumber, postUser } from "@/services/userServices";
import LoginCodeVerification from "../login/login-code-verification";
import { useRouter } from "next/navigation";

const initializeRecaptcha = () => {
  return new RecaptchaVerifier(auth, "recaptcha-container", {
    size: "invisible",
  });
};

const Signup = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const padding = isMdAndLg ? 10 : 5;
  const [errorMessage, setErrorMessage] = useState();
  const [confirmationResult, setConfirmationResult] = useState({});
  const [sendMessageSuccess, setSendMessageSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      NOMBRE: "",
      APELLIDOS: "",
      NUMERO_TELEFONO: "",
      FECHA_NACIMIENTO: "",
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
      NOMBRE: yup.string().required("Debes ingresar tu nombre para continuar"),
      APELLIDOS: yup
        .string()
        .required("Debes ingresar tus apellidos para continuar"),
      FECHA_NACIMIENTO: yup
        .string()
        .required("Debes ingresar tu fecha de nacimiento para continuar"),
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
      if (userDoc !== null) {
        setErrorMessage({
          message:
            "Ya existe una cuenta que está utilizando ese número telefónico",
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
      const response = await signInWithCredential(auth, credential);
      const { NOMBRE, APELLIDOS, NUMERO_TELEFONO, FECHA_NACIMIENTO } =
        formik.values;
      const user = response.user;
      const userData = {
        points: 0,
        name: NOMBRE,
        lastName: APELLIDOS,
        membership: "tlali",
        phoneNumber: formatPhoneNumber(NUMERO_TELEFONO),
        birthDay: new Date(FECHA_NACIMIENTO),
      };
      await postUser(user.uid, userData);
      handleRedirect('/usuario');
    } catch (error) {
      setErrorMessage({
        message: "Error verifying code: ",
        error,
      });
    }
  };
  const handleRedirect =  (path) => {
    router.push(path)
  }

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        document.cookie = "isAuthenticated=true";
        document.cookie = 'userType=usuario';
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
        overflow:'scroll'
      }}
    >
      <div id="recaptcha-container"></div>
      <Grid
        container
        item
        xs={12}
        sm={12}
        md={12}
        direction={"column"}
        padding={padding}
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
      >
        <SignupHeader />
        <Alert style={{ marginBottom: "1rem" }}>
          <Typography style={{ color: "#665959" }}>
            Recibirás un código de 6 dígitos para verificar tu cuenta a
            continuación.
          </Typography>
        </Alert>
        {errorMessage && (
          <Alert style={{ marginBottom: "1rem" }} severity="error">
            {errorMessage?.message} {errorMessage?.error?.message}
          </Alert>
        )}

        {!sendMessageSuccess ? (
          <SignupForm formik={formik} />
        ) : (
          <LoginCodeVerification handleVerifyCode={handleVerifyCode} />
        )}
      </Grid>
    </Grid>
  );
};

export default Signup;
