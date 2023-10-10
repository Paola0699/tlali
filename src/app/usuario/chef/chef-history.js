import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ChefHistoryCard from './chef-history-card'
import { getLastChefRequest } from '@/services/chefServices'
import NoDataMessage from '../components/no-data-message'

const ChefHistory = ({user}) => {
  const [chefRequests, setChefRequests] = useState([]);

  const handleGetChefHistory = async() => {
    const response = await getLastChefRequest(user.uid)
    setChefRequests(response);
  }
  useEffect(()=>{
    if(user){
    handleGetChefHistory()
  }
  },[user])
  return (
    <Box marginTop={3} style={{width:'100%'}}>
        <Typography variant='h3' color={"#665959"} marginBottom={2}>Historial</Typography>
        {chefRequests.length === 0 && <NoDataMessage title={'Aún no hay registros'} subtitle={'Para crear una nueva solicitud llena el formulario de arriba'}/>}
        {chefRequests && chefRequests.length > 0 && chefRequests.map((request) => ( 
        <ChefHistoryCard key={request.id} request={request}/> 
        ))}
    </Box>
  )
}

export default ChefHistory