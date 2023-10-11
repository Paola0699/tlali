'use client'
import React from 'react'
import TopNavigation from '../components/top-navigation'
import { Grid } from '@mui/material'
import BoxTitle from '../components/box-title'

const Usuarios = () => {
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
      </Grid>
    </Grid>
  </>
  )
}

export default Usuarios