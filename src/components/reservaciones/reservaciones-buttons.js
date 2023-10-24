import { Button, Grid } from "@mui/material";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { WhatsApp } from "@mui/icons-material";

const ReservacionesButtons = () => {
  const numeroDeTelefono = '7713347733'; // Reemplaza esto con el número de teléfono que deseas llamar

  const handleLlamarClick = () => {
    window.open(`tel:${numeroDeTelefono}`);
  };
  const handleWhatsAppClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${numeroDeTelefono}`;
    window.open(url);
  };
  
  return (
    <Grid container spacing={1} marginTop={3}>
      <Grid item xs={12} md={6}>
        <Button
          style={{ borderColor: "#665959", color: "#665959", fontFamily:'Rufina' }}
          fullWidth
          variant="outlined"
          startIcon={<LocalPhoneIcon />}
          onClick={handleLlamarClick}
        >
          Llamar
        </Button>
      </Grid>
      <Grid item xs={12}  md={6}>
        <Button
          style={{ borderColor: "#665959", color: "#665959", fontFamily:'Rufina' }}
          fullWidth
          variant="outlined"
          startIcon={<WhatsApp />}
          onClick={handleWhatsAppClick}
        >
          WhatsApp
        </Button>
      </Grid>
    </Grid>
  );
};

export default ReservacionesButtons;
