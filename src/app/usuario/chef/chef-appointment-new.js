import { postChefRequest } from "@/services/chefServices";
import { CloseRounded } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Collapse,
  IconButton,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import emailjs from "emailjs-com";

const ChefAppointmentNew = ({ user }) => {
  const [successMessage, setSuccessMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const formik = useFormik({
    initialValues: {
      FECHA: "",
      HORA: "",
      DIRECCION: "",
      NUMERO_PERSONAS: 0,
      PLATILLOS: "",
    },
    validationSchema: yup.object({
      FECHA: yup.string().required(),
      HORA: yup.string().required(),
      DIRECCION: yup.string().required(),
      NUMERO_PERSONAS: yup.string().required(),
      PLATILLOS: yup.string().required(),
    }),
    onSubmit: async (values) => {
      const { FECHA, HORA, DIRECCION, NUMERO_PERSONAS, PLATILLOS } = values;
      try {
        await postChefRequest({
          appointmentDate: FECHA,
          appointmentTime: HORA,
          address: DIRECCION,
          guestsNumber: NUMERO_PERSONAS,
          dishes: PLATILLOS,
          requestDate: new Date(),
          status: "Pendiente de confirmar",
          user: user.uid,
        });
        sendEmail({
          userID: user.uid,
          date: FECHA,
          time: HORA,
          address: DIRECCION,
          guests: NUMERO_PERSONAS,
          dishes: PLATILLOS,
        });
        setSuccessMessage(
          "Se ha enviado tu solicitud con éxito, espera a que el restaurante se ponga en contacto contigo"
        );
        formik.handleReset();
      } catch (error) {
        setErrorMessage({
          message: "Error, algo salió mal: ",
          error: error.message,
        });
      }
    },
  });

  const sendEmail = (data) => {
    const { userID, date, time, address, guests, dishes } = data;
    try {
      emailjs.send(
        "service_2r054pk",
        "template_8hs5uk6",
        {
          userID,
          date,
          time,
          address,
          guests,
          dishes,
        },
        "user_tT2FqNHM2wYy7GZQ6IhJP"
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      style={{
        backgroundColor: "#f9faf7",
        padding: "2rem",
        borderRadius: "20px",
        width: "100%",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
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

        <Collapse in={errorMessage?.message}>
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
            {errorMessage?.message}
            {errorMessage?.error}
          </Alert>
        </Collapse>

        <TextField
          fullWidth
          margin="dense"
          label="Fecha"
          type="date"
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
          id="FECHA"
          name="FECHA"
          autoFocus={false}
          value={formik.values.FECHA}
          onChange={formik.handleChange}
          error={formik.touched.FECHA && Boolean(formik.errors.FECHA)}
          helperText={formik.touched.FECHA && formik.errors.FECHA}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Hora"
          type="time"
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
          id="HORA"
          name="HORA"
          autoFocus={false}
          value={formik.values.HORA}
          onChange={formik.handleChange}
          error={formik.touched.HORA && Boolean(formik.errors.HORA)}
          helperText={formik.touched.HORA && formik.errors.HORA}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Dirección"
          type="text"
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
          multiline
          rows={3}
          id="DIRECCION"
          name="DIRECCION"
          autoFocus={false}
          value={formik.values.DIRECCION}
          onChange={formik.handleChange}
          error={formik.touched.DIRECCION && Boolean(formik.errors.DIRECCION)}
          helperText={formik.touched.DIRECCION && formik.errors.DIRECCION}
        />
        <TextField
          fullWidth
          margin="dense"
          label="Número de personas"
          type="number"
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
          id="NUMERO_PERSONAS"
          name="NUMERO_PERSONAS"
          autoFocus={false}
          value={formik.values.NUMERO_PERSONAS}
          onChange={formik.handleChange}
          error={
            formik.touched.NUMERO_PERSONAS &&
            Boolean(formik.errors.NUMERO_PERSONAS)
          }
          helperText={
            formik.touched.NUMERO_PERSONAS && formik.errors.NUMERO_PERSONAS
          }
        />
        <TextField
          fullWidth
          margin="dense"
          label="Platillos a preparar"
          type="text"
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
          multiline
          id="PLATILLOS"
          name="PLATILLOS"
          autoFocus={false}
          value={formik.values.PLATILLOS}
          onChange={formik.handleChange}
          error={formik.touched.PLATILLOS && Boolean(formik.errors.PLATILLOS)}
          helperText={formik.touched.PLATILLOS && formik.errors.PLATILLOS}
          rows={3}
        />
        <Button
          fullWidth
          variant="contained"
          style={{
            borderColor: "#83948f",
            backgroundColor: "#83948f",
            color: "white",
            marginTop: "2rem",
            fontFamily: "Rufina",
          }}
          type="subtmit"
        >
          Agendar
        </Button>
      </form>
    </Box>
  );
};

export default ChefAppointmentNew;
