import { Typography } from '@mui/material'
import { Lato, Rufina } from 'next/font/google'
import React from 'react'
const rufina = Rufina({ subsets: ['latin'], weight: '400' })

const FundadorQuote = ({descripcion}) => {
  return (
    <Typography variant='body1' color={'#665959'} className={rufina.className}>{descripcion}</Typography>
  )
}

export default FundadorQuote