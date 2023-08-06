import { Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import FundadorQuote from '../fundador/fundador-quote'
import { useTheme } from '@emotion/react';
import FundadorInformacion from '../fundador/fundador-informacion';
import FundadorImagen from '../fundador/fundador-imagen';

const SeccionFundador = ({id}) => {
const theme = useTheme();
const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
const paddingValue = isMdAndLg ? 15 : 5;
  return (
    <Grid id={id} container style={{backgroundColor: 'white', borderBottom: '2px dotted #83948F'}} marginBottom={3}>
        <Grid item xs={12} padding={paddingValue}>
            <FundadorImagen/>
            <FundadorQuote descripcion={'“Tlali existe para fortalecer e impulsar el talento y cultura que México tiene para ofrecer al mundo. Estamos tan acostumbrados a Mexicano, que se nos olvida lo increíble que es nuestro país y queremos parecernos a los gringos o europeos, cuando nuestra cultura no le pide nada a nadie, solo nos falta un empujoncito, para tener el país que merecemos los mexicanos”'}/>
            <FundadorInformacion nombre={'Axel Farias'} puesto={'Fundador'} fotoPerfil={'/assets/img/img_7.jpg'} />
        </Grid>
    </Grid>
  )
}

export default SeccionFundador