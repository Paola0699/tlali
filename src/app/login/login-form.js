import { Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import CurrencyFormat from "react-currency-format";

const LoginForm = ({ formik }) => {
  return (
    <form onSubmit={formik.handleSubmit}>
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
        Enviar código
      </Button>
      <Typography variant="body" color={"#665959"} textAlign={"center"}>
        ¿Aún no tienes cuenta?
        <Link href={"/signup"}>
          <b>Regístrate</b>
        </Link>{" "}
      </Typography>
    </form>
  );
};

export default LoginForm;
