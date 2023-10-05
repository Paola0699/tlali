import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";

const BottomNavigationComponent = () => {
  const navigationRoutes = [
    {
      key:'Inicio',
      name:'Inicio'
    },
    {
      key:'Plan de Nutrición',
      name:'Plan de Nutrición'
    },
    {
      key:'Agendar Chef',
      name:'Agendar Chef'
    },
    {
      key:'Nuestro Blog',
      name:'Nuestro Blog'
    }
  ]
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 2 }}
      elevation={3}
    >
      <BottomNavigation showLabels sx={{ height: "5rem" }}>
        {navigationRoutes.map((route)=>(
        <BottomNavigationAction key={route.key} label={route.name} />

        ))}        
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavigationComponent;
