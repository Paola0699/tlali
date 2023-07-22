import { Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { Rufina, Lato } from 'next/font/google'
import { useTheme } from '@emotion/react'
const rufina = Rufina({ subsets: ['latin'], weight: '400' })
const lato = Lato({ subsets: ['latin'], weight: '400' })

const MembresiaDescripcion = ({titulo, descripcion}) => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const variantValue = isMdAndLg ? 'h2' : 'h3';

  return (
    <>
        <Typography variant={variantValue} className={rufina.className}>{titulo}</Typography>
        <Typography variant='body1' className={lato.className}>{descripcion}</Typography>
    </>
  )
}

export default MembresiaDescripcion