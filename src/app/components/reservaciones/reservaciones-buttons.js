import { Button, Grid } from "@mui/material";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { WhatsApp } from "@mui/icons-material";

const ReservacionesButtons = () => {
  return (
    <Grid container spacing={1} marginTop={3}>
      <Grid item xs={6}>
        <Button
          style={{ borderColor: "#665959", color: "#665959", fontFamily:'Rufina' }}
          fullWidth
          variant="outlined"
          startIcon={<LocalPhoneIcon />}
        >
          Llamar
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          style={{ borderColor: "#665959", color: "#665959", fontFamily:'Rufina' }}
          fullWidth
          variant="outlined"
          startIcon={<WhatsApp />}
        >
          WhatsApp
        </Button>
      </Grid>
    </Grid>
  );
};

export default ReservacionesButtons;
