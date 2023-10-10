import { Card, CardContent, Chip, Grid, Typography } from "@mui/material";
import moment from "moment";
import React from "react";

const ChefHistoryCard = ({request}) => {
  return (
    <Card elevation={0}>
      <CardContent>
        <Grid container>
          <Grid item xs={8}>
            <Typography variant='body1'>Reservación {moment(request.appointmentDate).format('DD MMMM YYYY')} {request.appointmentTime}</Typography>
            <Typography variant='subtitle1'>Platillos: {request.dishes}</Typography>
            <Typography variant='caption'>Direccion: {request.address}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Chip label={request.status} color={request.status === 'Pendiente de confirmar' ? 'primary' : request.status === 'Cancelado' ? 'error': 'success'} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ChefHistoryCard;
