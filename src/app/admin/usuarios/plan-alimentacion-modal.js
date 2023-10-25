import { resetSelectedUser } from "@/redux/reducers/users";
import { postPlanNutricion } from "@/services/planNutricionServices";
import { CloseRounded } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Collapse,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";

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

const PlanAlimentacionModal = ({ open, setOpen }) => {
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setSuccessMessage] = useState();
  const { selectedUser } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
    dispatch(resetSelectedUser());
  };
  const formik = useFormik({
    initialValues: {
      DESAYUNO: "",
      COMIDA: "",
      CENA: "",
    },
    validationSchema: yup.object({
      DESAYUNO: yup.string().required(),
      COMIDA: yup.string().required(),
      CENA: yup.string().required(),
    }),
    onSubmit: async (values) => {
      const { DESAYUNO, COMIDA, CENA } = values;
      try {
        await postPlanNutricion(selectedUser.id, {
          breakfast: DESAYUNO,
          lunch: COMIDA,
          dinner: CENA,
        });
        setSuccessMessage("Se ha generado el plan de nutrición con éxito.");
        formik.handleReset();
      } catch (error) {
        console.log(error);
        setErrorMessage({
          errorMessage: error.message,
          errorCode: error.code,
        });
      }
    },
  });

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h4" color={"#665959"}>
          Asignar Plan de Nutrición
        </Typography>
        <Typography variant="body" color={"#665959"}>
          En este apartado podrás asignarle un plan de nutrición al usuario
        </Typography>

        <Collapse in={successMessage} style={{ marginTop: "1rem" }}>
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

        <Collapse in={errorMessage?.errorMessage} style={{ marginTop: "1rem" }}>
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
            {errorMessage?.errorMessage}
            {errorMessage?.errorCode}
          </Alert>
        </Collapse>

        <form onSubmit={formik.handleSubmit}>
          <TextField
            style={{ marginTop: "1rem" }}
            fullWidth
            size="small"
            multiline
            rows={4}
            margin="dense"
            label="Desayuno"
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
            name="DESAYUNO"
            autoFocus={false}
            value={formik.values.DESAYUNO}
            onChange={formik.handleChange}
            error={formik.touched.DESAYUNO && Boolean(formik.errors.DESAYUNO)}
            helperText={formik.touched.DESAYUNO && formik.errors.DESAYUNO}
          />
          <TextField
            fullWidth
            size="small"
            multiline
            rows={4}
            margin="dense"
            label="Comida"
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
            name="COMIDA"
            autoFocus={false}
            value={formik.values.COMIDA}
            onChange={formik.handleChange}
            error={formik.touched.COMIDA && Boolean(formik.errors.COMIDA)}
            helperText={formik.touched.COMIDA && formik.errors.COMIDA}
          />
          <TextField
            fullWidth
            size="small"
            multiline
            rows={4}
            margin="dense"
            label="Cena"
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
            name="CENA"
            autoFocus={false}
            value={formik.values.CENA}
            onChange={formik.handleChange}
            error={formik.touched.CENA && Boolean(formik.errors.CENA)}
            helperText={formik.touched.CENA && formik.errors.CENA}
          />
          <Button type="submit" variant="contained">
            Asignar Plan
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default PlanAlimentacionModal;
