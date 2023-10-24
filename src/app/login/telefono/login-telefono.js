import React from "react";
import LoginHeader from "./login-header";
import { Alert } from "@mui/material";
import LoginForm from "./login-form";
import LoginCodeVerification from "./login-code-verification";
import {
  PhoneAuthProvider,
  RecaptchaVerifier,
  signInWithCredential,
  signInWithPhoneNumber,
} from "firebase/auth";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { formatPhoneNumber } from "@/utils/utils";
import { auth } from "@/firebase/firebase";
import { getUserByPhoneNumber } from "@/services/userServices";

const initializeRecaptcha = () => {
  return new RecaptchaVerifier(auth, "recaptcha-container", {
    size: "invisible",
  });
};

const LoginTelefono = ({ handleRedirect, loginMethod, setLoginMethod }) => {
  const [sendMessageSuccess, setSendMessageSuccess] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState({});
  const [errorMessage, setErrorMessage] = useState();
  const handleSetLoginMethod = () => {
    setLoginMethod(!loginMethod);
  };
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

  const handleVerifyCode = async (verificationCode) => {
    try {
      const { verificationId } = confirmationResult;
      const credential = PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await signInWithCredential(auth, credential);
      document.cookie = "userType=usuario";
      document.cookie = "isAuthenticated=true";
      handleRedirect("/usuario");
    } catch (error) {
      setErrorMessage({
        message: "Error verifying code: ",
        error,
      });
    }
  };

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

  return (
    <>
      <LoginHeader />
      {errorMessage && (
        <Alert style={{ marginBottom: "1rem" }} severity="error">
          {errorMessage?.message} {errorMessage?.error?.message}
        </Alert>
      )}
      {!sendMessageSuccess ? (
        <LoginForm
          formik={formik}
          handleSetLoginMethod={handleSetLoginMethod}
        />
      ) : (
        <LoginCodeVerification handleVerifyCode={handleVerifyCode} />
      )}
    </>
  );
};

export default LoginTelefono;
