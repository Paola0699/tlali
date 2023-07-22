import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";

const FundadorInformacion = ({ nombre, puesto, fotoPerfil }) => {
  return (
    <Grid container marginTop={5}>
      <Grid item xs={3} md={1} lg={1}>
        <Avatar sx={{ width: 60, height: 60 }} />
      </Grid>
      <Grid item xs={9} md={11} lg={11}>
        <Typography  color={"#665959"} variant="h6">
          {nombre}
        </Typography>
        <Typography
          color={"#665959"}
          variant="subtitle1"
        >
          {puesto}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FundadorInformacion;
