"use client";
import {
  BottomNavigation,
  BottomNavigationAction,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Paper,
  Typography,
  useMediaQuery
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import MenuBody from "./menu-body";
import MenuDrawer from "./menu-drawer";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedMainCategory } from "../../redux/reducers/menu";
import { useTheme } from "@emotion/react";
import { Breakfast, Dessert, Drink, Food } from "../../assets/svgs";

const Menu = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const fontSize = isMdAndLg ? "h4" : "h6";
  const paddingValue = isMdAndLg ? 10 : 5;
  const {selectedCategory} = useSelector(state=>state.menu)
  const rowHeight = isMdAndLg ? 600 : 520;

  const categories = [
    {
      Nombre_categoria: "Desayunos",
      Icono: <Breakfast style={{fontSize: '2.5rem'}} />,
    },
    {
      Nombre_categoria: "Comidas",
      Icono: <Food style={{fontSize: '2.5rem'}}/>,
    },
    {
      Nombre_categoria: "Postres",
      Icono: <Dessert style={{fontSize: '2.5rem'}}/>,
    },
    {
      Nombre_categoria: "Bebidas",
      Icono: <Drink style={{fontSize: '2.5rem'}}/>
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
    dispatch(addSelectedMainCategory({ Nombre_categoria: categories[newValue].Nombre_categoria}));
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
        {selectedCategory.Images && <ImageList  sx={{ width: '100%', height: 'auto', overflow: 'hidden', marginTop: '5rem' }} cols={isMdAndLg ? selectedCategory.Images.length : 1} rowHeight={rowHeight} gap={0}>
            {selectedCategory.Images.map((item) => (
                  <ImageListItem key={item.id}>
                    <img
                      src={`${item.url}`}
                      srcSet={`${item.url}`}
                      alt={item.name}
                    />
                    <ImageListItemBar  title={item.name}/>
                  </ImageListItem>
                ))}
         </ImageList>}    
      </Grid>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 2 }} elevation={3}>
        <BottomNavigation
            showLabels
            onChange={(event, newValue) => handleOpenToggle(newValue) }
            sx={{ height: '5rem' }}
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
