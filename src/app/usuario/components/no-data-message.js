import { Box, Typography } from '@mui/material'
import React from 'react'

const NoDataMessage = ({title, subtitle}) => {
  return (
    <Box style={{padding: '3rem', border: '2px dotted #665959'}}>
        <Typography variant='h4' color={'#665959'} textAlign={'center'}>{title}</Typography>
        <Typography variant='body2' color={'#665959'} textAlign={'center'}>{subtitle}</Typography>
    </Box>
  )
}

export default NoDataMessage