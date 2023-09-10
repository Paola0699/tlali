import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";

const FundadorInformacion = ({ nombre, puesto, fotoPerfil }) => {
  return (
    <Grid container marginTop={5}>
        <Avatar sx={{ width: 60, height: 60, marginRight:'1rem' }} src={fotoPerfil} />   
        <div>  
          <Typography  color={"#fff"} variant="h6" fontSize={26} fontWeight={500}>
            {nombre}
          </Typography>
          <Typography
            color={"#fff"}
            variant="subtitle1"
            style={{marginTop:'-.6rem'}}
          >
            {puesto}
          </Typography> 
        </div> 
    </Grid>
  );
};

export default FundadorInformacion;
