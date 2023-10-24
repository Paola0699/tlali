import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";

const LoginForm = ({ formik }) => {
  return (
    <form onSubmit={formik.handleSubmit}>
    <TextField
        margin="dense"
        label="Correo electrónico"
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
          formik.touched.CORREO_ELECTRONICO && formik.errors.CORREO_ELECTRONICO
        }
      />

      <TextField
        margin="dense"
        label="Contraseña"
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
        type="password"
        id="CONTRASEÑA"
        name="CONTRASEÑA"
        autoFocus={false}
        value={formik.values.CONTRASEÑA}
        onChange={formik.handleChange}
        error={formik.touched.CONTRASEÑA && Boolean(formik.errors.CONTRASEÑA)}
        helperText={formik.touched.CONTRASEÑA && formik.errors.CONTRASEÑA}
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
        Enviar código
      </Button>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="body" color={"#665959"} textAlign={"center"}>
          <Link href={"/login"}>
            <b>Iniciar sesión con número telefónico</b>
          </Link>{" "}
        </Typography>
        <br />
        <Typography variant="body" color={"#665959"} textAlign={"center"}>
          ¿Aún no tienes cuenta?
          <Link href={"/signup"}>
            <b>Regístrate</b>
          </Link>{" "}
        </Typography>
      </Box>
    </form>
  );
};

export default LoginForm;
