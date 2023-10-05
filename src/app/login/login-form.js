import { Alert, Button, TextField } from "@mui/material";

const LoginForm = ({ formik }) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <Alert style={{ marginBottom: "1rem" }}>
        Recibirás un código de 4 dígitos para verificar a continuación.
      </Alert>

      <TextField
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
        type="number"
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
        }}
      >
        Enviar código
      </Button>
    </form>
  );
};

export default LoginForm;
