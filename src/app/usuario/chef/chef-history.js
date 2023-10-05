import { Box, Typography } from '@mui/material'
import React from 'react'
import ChefHistoryCard from './chef-history-card'

const ChefHistory = () => {
  return (
    <Box marginTop={3} style={{width:'100%'}}>
        <Typography variant='h3' color={"#665959"} marginBottom={2}>Historial</Typography>
        <ChefHistoryCard/>
    </Box>
  )
}

export default ChefHistory