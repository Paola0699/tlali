import styled from "@emotion/styled";
import { TextField, Typography } from "@mui/material";
import { Lato } from "next/font/google";
import React from "react";
const lato = Lato({ subsets: ["latin"], weight: "400" });

const useStyles = styled((theme) => ({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "green", // Change the default border color
      },
      "&:hover fieldset": {
        borderColor: "blue", // Change the border color on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: "red", // Change the border color on focus
      },
    },
  },
}));

const ContactoInputs = () => {
  const classes = useStyles();
  return (
    <div className={lato.className} color="#665959">
      <Typography marginBottom={2} className={lato.className} color={"#665959"}>
        *Campos Obligatorios
      </Typography>
      <TextField
        margin="dense"
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
      />
      <TextField
        margin="dense"
        label="APELLIDO PATERNO"
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
      />
      <TextField
        margin="dense"
        label="APELLIDO MATERNO"
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
      />
      <TextField
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
      />
      <TextField
        margin="dense"
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
      />
    </div>
  );
};

export default ContactoInputs;
