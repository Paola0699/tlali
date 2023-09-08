"use client";
import {
  BottomNavigation,
  BottomNavigationAction,
  Grid,
  Paper,
  Typography,
  useMediaQuery
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MenuBody from "./menu-body";
import MenuDrawer from "./menu-drawer";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedMainCategory } from "../redux/reducers/menu";
import { Cookie, DinnerDining, EmojiEvents, LightMode, WineBar } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const Menu = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const fontSize = isMdAndLg ? "h4" : "h6";
  const paddingValue = isMdAndLg ? 10 : 5;

  const {selectedCategory} = useSelector(state=>state.menu)
  const categories = [
    {
      Nombre_categoria: "Desayunos",
      Icono: <LightMode/>,
    },
    {
      Nombre_categoria: "Comidas",
      Icono: <DinnerDining/>,
    },
    {
      Nombre_categoria: "Postres",
      Icono: <Cookie/>,
    },
    {
      Nombre_categoria: "Bebidas",
      Icono: <WineBar/>
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
  const handleOpenToggle = (newValue) => {
    setState(true);
    dispatch(addSelectedMainCategory(categories[newValue]));
  }

  useEffect(()=>{
    setState(false);
  },[selectedCategory]);

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
      <Grid item xs={12} style={{minHeight: '70vh'}} padding={paddingValue} marginBottom={10}> 
        <MenuBody fontSize={fontSize}/>
        <MenuDrawer state={state} toggleDrawer={toggleDrawer}/>      
      </Grid>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 2 }} elevation={3}>
        <BottomNavigation
            showLabels
            onChange={(event, newValue) => handleOpenToggle(newValue) }
          >
            {categories && categories.map((category) => (
                <BottomNavigationAction icon={category.Icono} key={category.Nombre_categoria} label={category.Nombre_categoria}/>
            ))}
          </BottomNavigation>
      </Paper>
    </Grid>
  );
};

export default Menu;
