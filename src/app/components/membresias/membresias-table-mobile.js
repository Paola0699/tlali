import { Grid } from "@mui/material";
import React from "react";
import MembresiasCard from "./membresias-card";

const MembresiasTableMobile = () => {
  const membresias = [
    {
      id: 1,
      nombre: "Tlali",
      descripcion: "Afiliciación $0",
      precio: "Mensualidad $250.00 (en consumo)",
      color: '#DBDCDA',
      beneficios: ['Bonificación de puntos','Prioridad a sus Platillos','Código de Referencia','Conferencias y eventos']
    },
    {
      id: 2,
      nombre: "Maya",
      descripcion: "Afiliciación $165",
      precio: "Mensualidad $550 (en consumo)",
      color: '#A9BDB1',
      beneficios: ['*Beneficios de membresia Tlali','Suscripción de waffles','Pedidos anticipados']
    },
    {
      id: 3,
      nombre: "Azteca",
      descripcion: "Afiliciación $260",
      precio: "Mensualidad $800 (en consumo)",
      color: '#D7C6A7',
      beneficios: ['*Beneficios de membresia Maya','Línea de crédito','Chef a domicilio', 'Cubiertos personalizados', 'Plan de nutrición']
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
            beneficios={membresia.beneficios}
            width={"100%"}
            color={membresia.color}
            fontColor='white'
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MembresiasTableMobile;
