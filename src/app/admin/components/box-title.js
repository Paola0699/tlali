import { Box, Typography } from '@mui/material'
import React from 'react'

const BoxTitle = ({title, subtitle}) => {
  return (
    <Box>
      <Typography variant='h2' color={"#665959"}>{title}</Typography>
      <Typography color={"#665959"}>{subtitle}</Typography>
    </Box>
  )
}

export default BoxTitle