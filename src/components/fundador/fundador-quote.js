import { useTheme } from '@emotion/react';
import { Typography, useMediaQuery } from '@mui/material'
import React from 'react'

const FundadorQuote = ({descripcion}) => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const fontSizeValue = isMdAndLg ? '1.3rem' : '.9rem';

  return (
    <Typography variant='body1' color={'#fff'} style={{fontSize:fontSizeValue}}><i>{descripcion}</i></Typography>
  )
}

export default FundadorQuote