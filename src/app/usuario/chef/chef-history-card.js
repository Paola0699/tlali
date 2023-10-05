import { Card, CardContent, Chip, Grid, Typography } from "@mui/material";
import React from "react";

const ChefHistoryCard = () => {
  return (
    <Card elevation={0}>
      <CardContent>
        <Grid container>
          <Grid item xs={8}>
            <Typography>Reservación 24 de Septiembre 2023 19:30hrs</Typography>
            <Typography>Comida italiana</Typography>
          </Grid>
          <Grid item xs={4}>
            <Chip label="Status" />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ChefHistoryCard;
