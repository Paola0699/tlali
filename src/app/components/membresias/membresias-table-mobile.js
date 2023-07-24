import { Grid } from "@mui/material";
import React from "react";
import MembresiasCard from "./membresias-card";

const MembresiasTableMobile = () => {
  const membresias = [
    {
      id: 1,
      nombre: "Tlali",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      precio: "$500",
    },
    {
      id: 2,
      nombre: "Maya",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      precio: "$600",
    },
    {
      id: 3,
      nombre: "Azteca",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      precio: "$700",
    },
  ];
  return (
    <Grid container sx={{ display: { xs: "flex", md: "none" } }} spacing={3}>
      {membresias.map((membresia) => (
        <Grid item xs={12} md={6} lg={6} key={membresia.id}>
          <MembresiasCard
            nombre={membresia.nombre}
            descripción={membresia.descripcion}
            precio={membresia.precio}
            width={"100%"}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MembresiasTableMobile;
