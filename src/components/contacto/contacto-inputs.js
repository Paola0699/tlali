import { TextField, Typography } from "@mui/material";
import React from "react";

const ContactoInputs = ({ formik }) => {
  return (
    <div color="#665959">
      <Typography marginBottom={2} color={"#665959"}>
        *Campos Obligatorios
      </Typography>
      <TextField
        margin="dense"
        name="NOMBRE"
        label="NOMBRE*"
        size="small"
        variant="standard"
        fullWidth
        color="warning"
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
        focused={false}
        value={formik.values.NOMBRE}
        onChange={formik.handleChange}
        error={formik.touched.NOMBRE && Boolean(formik.errors.NOMBRE)}
        helperText={formik.touched.NOMBRE && formik.errors.NOMBRE}
      />
      <TextField
        margin="dense"
        name="APELLIDOS"
        label="APELLIDOS"
        variant="standard"
        fullWidth
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
        focused={false}
        value={formik.values.APELLIDOS}
        onChange={formik.handleChange}
        error={formik.touched.APELLIDOS && Boolean(formik.errors.APELLIDOS)}
        helperText={formik.touched.APELLIDOS && formik.errors.APELLIDOS}
      />
      <TextField
        name="CORREO_ELECTRONICO"
        margin="dense"
        label="CORREO ELECTRÓNICO*"
        size="small"
        variant="standard"
        fullWidth
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
        focused={false}
        value={formik.values.CORREO_ELECTRONICO}
        onChange={formik.handleChange}
        error={
          formik.touched.CORREO_ELECTRONICO &&
          Boolean(formik.errors.CORREO_ELECTRONICO)
        }
        helperText={
          formik.touched.CORREO_ELECTRONICO && formik.errors.CORREO_ELECTRONICO
        }
      />
      <TextField
        name="PASSWORD"
        margin="dense"
        label="CONTRASEÑA*"
        size="small"
        variant="standard"
        fullWidth
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
        type="password"
        focused={false}
        value={formik.values.PASSWORD}
        onChange={formik.handleChange}
        error={formik.touched.PASSWORD && Boolean(formik.errors.PASSWORD)}
        helperText={formik.touched.PASSWORD && formik.errors.PASSWORD}
      />
      <TextField
        name="PASSWORD_CONFIRM"
        margin="dense"
        label="CONFIMACIÓN DE CONTRASEÑA"
        size="small"
        variant="standard"
        fullWidth
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
        type="password"
        focused={false}
        value={formik.values.PASSWORD_CONFIRM}
        onChange={formik.handleChange}
        error={
          formik.touched.PASSWORD_CONFIRM &&
          Boolean(formik.errors.PASSWORD_CONFIRM)
        }
        helperText={
          formik.touched.PASSWORD_CONFIRM && formik.errors.PASSWORD_CONFIRM
        }
      />
      <TextField
        margin="dense"
        name="FECHA_NACIMIENTO"
        label="FECHA DE NACIMIENTO*"
        size="small"
        variant="standard"
        fullWidth
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
        focused={false}
        type="date"
        value={formik.values.FECHA_NACIMIENTO}
        onChange={formik.handleChange}
        error={
          formik.touched.FECHA_NACIMIENTO &&
          Boolean(formik.errors.FECHA_NACIMIENTO)
        }
        helperText={
          formik.touched.FECHA_NACIMIENTO && formik.errors.FECHA_NACIMIENTO
        }
      />
    </div>
  );
};

export default ContactoInputs;
