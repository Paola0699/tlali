import { Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { useTheme } from '@emotion/react'

const MembresiaDescripcion = ({titulo, descripcion}) => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const variantValue = isMdAndLg ? "h2" : "h4";

  return (
    <>
        <Typography variant={variantValue}>{titulo}</Typography>
        <Typography variant='body1'>{descripcion}</Typography>
    </>
  )
}

export default MembresiaDescripcion