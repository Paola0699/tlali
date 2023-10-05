import { Box, Button, TextField } from "@mui/material";

const ChefAppointmentNew = () => {
  return (
    <Box
      style={{
        backgroundColor: "#f9faf7",
        padding: "2rem",
        borderRadius: "20px",
        width: "100%",
      }}
    >
      <form>
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
        >
          Agendar
        </Button>
      </form>
    </Box>
  );
};

export default ChefAppointmentNew;
