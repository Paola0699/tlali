import React, { useState } from "react";
import ContactoButton from "./contacto-button";
import ContactoInputs from "./contacto-inputs";
import { useFormik } from "formik";
import * as yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { Alert, Collapse, IconButton } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";
import { postUser } from "@/services/userServices";

const ContactoFormulario = () => {
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setSuccessMessage] = useState();

  const handleRegisterUser = (data) => {
    const {
      NOMBRE,
      APELLIDOS,
      CORREO_ELECTRONICO,
      FECHA_NACIMIENTO,
      PASSWORD,
    } = data;
    createUserWithEmailAndPassword(auth, CORREO_ELECTRONICO, PASSWORD)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const userData = {
          points: 0,
          name: NOMBRE,
          lastName: APELLIDOS,
          membership: "tlali",
          email: CORREO_ELECTRONICO,
          birthDay: new Date(FECHA_NACIMIENTO),
          status: 'Activa'
        };
        await postUser(user.uid, userData);
        document.cookie = "userType=usuario";
        document.cookie = "isAuthenticated=true";
        formik.handleReset();
        setSuccessMessage(
          "Felicidades! Ya estás suscrito a Tlali, comienza a disfrutar de todos nuestros beneficios."
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage({
          errorCode,
          errorMessage,
        });
      });
  };

  const formik = useFormik({
    validationSchema: yup.object({
      CORREO_ELECTRONICO: yup
        .string()
        .email()
        .required("Debes ingresar un correo electrónico para continuar")
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
      PASSWORD: yup
        .string()
        .min(8)
        .max(15)
        .required("Debes ingresar una contraseña para continuar"),
      PASSWORD_CONFIRM: yup
        .string()
        .min(8)
        .max(15)
        .oneOf([yup.ref("PASSWORD"), null], "Las contraseñas no coinciden"),
    }),
    initialValues: {
      NOMBRE: "",
      APELLIDOS: "",
      CORREO_ELECTRONICO: "",
      FECHA_NACIMIENTO: "",
      PASSWORD: "",
      PASSWORD_CONFIRM: "",
    },
    onSubmit: (values) => {
      handleRegisterUser(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
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
      <Collapse in={successMessage}>
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setSuccessMessage();
              }}
            >
              <CloseRounded fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {successMessage}
        </Alert>
      </Collapse>
      <ContactoInputs formik={formik} />
      <ContactoButton />
    </form>
  );
};

export default ContactoFormulario;
