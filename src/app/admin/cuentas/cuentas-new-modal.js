import { Alert, Box, Button, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import BoxTitle from "../components/box-title";
import { useFormik } from "formik";
import * as yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { postAdminAccount } from "@/services/accountsServices";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  maxHeight: "80%", // Ajusta la altura máxima según tus necesidades
  overflowY: "auto", // Permite el scroll vertical si el contenido excede la altura máxima
  bgcolor: "white",
  boxShadow: 24,
  p: 6,
};

const CuentasNewModal = ({ open, setOpen }) => {
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setSuccessMessage] = useState();

  const handleRegisterAdmin = (data) => {
    const { NOMBRE_ADMINISTRADOR, CORREO_ELECTRONICO, CONTRASENA } = data;
    createUserWithEmailAndPassword(auth, CORREO_ELECTRONICO, CONTRASENA)
      .then(async (userCredential) => {
        const user = userCredential.user;
        const adminData = {
          name: NOMBRE_ADMINISTRADOR,
          role: 'admin'
        };
        await postAdminAccount(user.uid, adminData);
        formik.handleReset();
        setSuccessMessage("Se ha creado el usuario con éxito.");
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
    initialValues: {
      NOMBRE_ADMINISTRADOR: "",
      CORREO_ELECTRONICO: "",
      CONTRASENA: "",
      CONFIRMACION_CONTRASENA: "",
    },
    validationSchema: yup.object({
      NOMBRE_ADMINISTRADOR: yup
        .string()
        .required("El nombre del administrador es ibligatorio"),
      CORREO_ELECTRONICO: yup
        .string()
        .email()
        .required("El correo electrónico es ibligatorio"),
      CONTRASENA: yup
        .string()
        .min(8)
        .max(15)
        .required("Debes ingresar una contraseña para continuar"),
      CONFIRMACION_CONTRASENA: yup
        .string()
        .min(8)
        .max(15)
        .oneOf([yup.ref("CONTRASENA"), null], "Las contraseñas no coinciden"),
    }),
    onSubmit: (values) => {
      handleRegisterAdmin(values);
    },
  });

  const handleClose = () => {
    setOpen(false);
    setSuccessMessage();
    setErrorMessage();
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <BoxTitle
          title={"Crear Nueva Cuenta"}
          subtitle={
            "Introduce los datos para crear una nueva cuenta de administrador"
          }
        />
        {successMessage && <Alert severity="success">{successMessage}</Alert>}
        {errorMessage?.errorCode && (
          <Alert
            severity="error"
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
          >
            {errorMessage.errorCode} {errorMessage.errorMessage}
          </Alert>
        )}
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            margin="dense"
            label="Nombre del Administrador"
            size="small"
            id="NOMBRE_ADMINISTRADOR"
            name="NOMBRE_ADMINISTRADOR"
            autoFocus={false}
            value={formik.values.NOMBRE_ADMINISTRADOR}
            onChange={formik.handleChange}
            error={
              formik.touched.NOMBRE_ADMINISTRADOR &&
              Boolean(formik.errors.NOMBRE_ADMINISTRADOR)
            }
            helperText={
              formik.touched.NOMBRE_ADMINISTRADOR &&
              formik.errors.NOMBRE_ADMINISTRADOR
            }
          />
          <TextField
            fullWidth
            margin="dense"
            label="Correo Electrónico"
            size="small"
            id="CORREO_ELECTRONICO"
            name="CORREO_ELECTRONICO"
            autoFocus={false}
            value={formik.values.CORREO_ELECTRONICO}
            onChange={formik.handleChange}
            error={
              formik.touched.CORREO_ELECTRONICO &&
              Boolean(formik.errors.CORREO_ELECTRONICO)
            }
            helperText={
              formik.touched.CORREO_ELECTRONICO &&
              formik.errors.CORREO_ELECTRONICO
            }
          />
          <TextField
            fullWidth
            margin="dense"
            label="Contraseña"
            type="password"
            size="small"
            id="CONTRASENA"
            name="CONTRASENA"
            autoFocus={false}
            value={formik.values.CONTRASENA}
            onChange={formik.handleChange}
            error={
              formik.touched.CONTRASENA && Boolean(formik.errors.CONTRASENA)
            }
            helperText={formik.touched.CONTRASENA && formik.errors.CONTRASENA}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Confirmación de Contraseña"
            type="password"
            size="small"
            id="CONFIRMACION_CONTRASENA"
            name="CONFIRMACION_CONTRASENA"
            autoFocus={false}
            value={formik.values.CONFIRMACION_CONTRASENA}
            onChange={formik.handleChange}
            error={
              formik.touched.CONFIRMACION_CONTRASENA &&
              Boolean(formik.errors.CONFIRMACION_CONTRASENA)
            }
            helperText={
              formik.touched.CONFIRMACION_CONTRASENA &&
              formik.errors.CONFIRMACION_CONTRASENA
            }
          />
          <Button
            type="submit"
            variant="contained"
            style={{ marginTop: "1rem" }}
          >
            Crear cuenta
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default CuentasNewModal;
