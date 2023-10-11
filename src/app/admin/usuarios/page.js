'use client'
import React, { useEffect, useState } from 'react'
import TopNavigation from '../components/top-navigation'
import { Grid } from '@mui/material'
import BoxTitle from '../components/box-title'
import { getAllUsers } from '@/services/usersServices'
import UsuariosTable from './usuarios-table'

const Usuarios = () => {
  const [usersList, setUsersList] = useState([]);
  const handleGetUsers = async() => {
    const response = await getAllUsers();
    setUsersList(response);
  }
  useEffect(()=>{
    handleGetUsers();
  },[])
  return (
    <>
    <TopNavigation />
    <Grid
      container
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "white",
        overflow: "scroll",
      }}
      padding={10}
    >
      <Grid item xs={12}>
        <BoxTitle
          title={"Usuarios"}
          subtitle={
            "Aquí encontrarás los usuarios que se han registrado en la plataforma."
          }
        />
        <br></br>
        <UsuariosTable data={usersList}/>
      </Grid>
    </Grid>
  </>
  )
}

export default Usuarios