import { Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import CurrencyFormat from "react-currency-format";

const SignupForm = ({ formik }) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        margin="dense"
        label="Nombre"
        size="small"
        InputLabelProps={{
          style: {
            color: "#665959", // Change the color of the label text
          },
          shrink: true,
        }}
        InputProps={{
          style: {
            color: "#665959", // Change the color of the input text
            borderColor: "#665959", // Change the color of the input border
          },
        }}
        fullWidth
        id="NOMBRE"
        name="NOMBRE"
        value={formik.values.NOMBRE}
        onChange={formik.handleChange}
        error={formik.touched.NOMBRE && Boolean(formik.errors.NOMBRE)}
        helperText={formik.touched.NOMBRE && formik.errors.NOMBRE}
        autoFocus={false}
      />
      <TextField
        margin="dense"
        label="Apellidos"
        size="small"
        InputLabelProps={{
          style: {
            color: "#665959", // Change the color of the label text
          },
          shrink: true,
        }}
        InputProps={{
          style: {
            color: "#665959", // Change the color of the input text
            borderColor: "#665959", // Change the color of the input border
          },
        }}
        fullWidth
        id="APELLIDOS"
        name="APELLIDOS"
        value={formik.values.APELLIDOS}
        onChange={formik.handleChange}
        error={formik.touched.APELLIDOS && Boolean(formik.errors.APELLIDOS)}
        helperText={formik.touched.APELLIDOS && formik.errors.APELLIDOS}
        autoFocus={false}
      />
      <TextField
        margin="dense"
        label="Fecha de nacimiento"
        size="small"
        InputLabelProps={{
          style: {
            color: "#665959", // Change the color of the label text
          },
          shrink: true,
        }}
        InputProps={{
          style: {
            color: "#665959", // Change the color of the input text
            borderColor: "#665959", // Change the color of the input border
          },
        }}
        fullWidth
        id="FECHA_NACIMIENTO"
        name="FECHA_NACIMIENTO"
        value={formik.values.FECHA_NACIMIENTO}
        onChange={formik.handleChange}
        error={
          formik.touched.FECHA_NACIMIENTO &&
          Boolean(formik.errors.FECHA_NACIMIENTO)
        }
        helperText={
          formik.touched.FECHA_NACIMIENTO && formik.errors.FECHA_NACIMIENTO
        }
        autoFocus={false}
        type="date"
      />
      <CurrencyFormat
        format="+52 (###) ###-####"
        mask="_"
        customInput={TextField}
        margin="dense"
        label="Número Telefónico"
        size="small"
        InputLabelProps={{
          style: {
            color: "#665959", // Change the color of the label text
          },
          shrink: true,
        }}
        InputProps={{
          style: {
            color: "#665959", // Change the color of the input text
            borderColor: "#665959", // Change the color of the input border
          },
        }}
        fullWidth
        id="NUMERO_TELEFONO"
        name="NUMERO_TELEFONO"
        value={formik.values.NUMERO_TELEFONO}
        onChange={formik.handleChange}
        error={
          formik.touched.NUMERO_TELEFONO &&
          Boolean(formik.errors.NUMERO_TELEFONO)
        }
        helperText={
          formik.touched.NUMERO_TELEFONO && formik.errors.NUMERO_TELEFONO
        }
        autoFocus={false}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        style={{
          borderColor: "#83948f",
          backgroundColor: "#83948f",
          color: "white",
          marginTop: "2rem",
          fontFamily: "Rufina",
          marginBottom: "1rem",
        }}
      >
        Registrarme
      </Button>
      <Typography variant="body" color={"#665959"} textAlign={"center"}>
        ¿Ya tienes una cuenta?
        <Link href={"/login"}>
          <b>Iniciar Sesión</b>
        </Link>{" "}
      </Typography>
    </form>
  );
};

export default SignupForm;
