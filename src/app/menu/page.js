"use client";
import {
  BottomNavigation,
  BottomNavigationAction,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import MenuBody from "./menu-body";
import MenuDrawer from "./menu-drawer";

const Menu = () => {
  const categories = [
    {
      Nombre_categoria: "Desayunos",
      Icono: "",
    },
    {
      Nombre_categoria: "Comidas",
      Icono: "",
    },
    {
      Nombre_categoria: "Postres",
      Icono: "",
    },
    {
      Nombre_categoria: "Bebidas",
      Icono: "",
    },
  ]
  const [state, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  return (
    <Grid container style={{backgroundColor: 'white'}} >
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12}>
        <Paper
          elevation={0}
          sx={{
            height: "30rem",
            backgroundImage: `url(/assets/img/img_2.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            padding: "3rem",
            position: "relative",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          />
          <Typography variant={"h2"} color={"white"} style={{ zIndex: "2" }}>
            Explora nuestro Menú{" "}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} style={{minHeight: '50vh'}} padding={10}> 
        <MenuBody/>
        <MenuDrawer state={state} toggleDrawer={toggleDrawer}/>      
      </Grid>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 2 }} elevation={3}>
        <BottomNavigation
            showLabels
            onChange={toggleDrawer(true)}
          >
            {categories && categories.map((category) => (
                <BottomNavigationAction key={category.Nombre_categoria} label={category.Nombre_categoria}/>
            ))}
          </BottomNavigation>
      </Paper>
    </Grid>
  );
};

export default Menu;
