'use client'
import React from 'react'
import TopNavigation from '../components/top-navigation'
import { Grid } from '@mui/material'
import BoxTitle from '../components/box-title'

const PlanNutricion = () => {
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
          title={"Plan de nutrición"}
          subtitle={
            "Aquí encontrarás las solicitudes de plan de nutrición de los usuarios."
          }
        />
        <br></br>
      </Grid>
    </Grid>
  </>
  )
}

export default PlanNutricion