import { CheckCircle } from "@mui/icons-material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import MembresiasCard from "./membresias-card";

const MembresiasTable = () => {
  const membresias = [
    {
      id: 1,
      nombre: "Tlali",
      descripcion: "Afiliciación $0",
      precio: "Mensualidad $250.00 (en consumo)",
    },
    {
      id: 2,
      nombre: "Maya",
      descripcion: "Afiliciación $165",
      precio: "Mensualidad $550 (en consumo)",
    },
    {
      id: 3,
      nombre: "Azteca",
      descripcion: "Afiliciación $260",
      precio: "Mensualidad $800 (en consumo)",
    },
  ];
  const beneficiosMembresias = [
    {
      id: "Bonificación de puntos",
      title: "Bonificación de puntos",
      tlali: true, 
      maya: true, 
      azteca: true
    },
    {
      id: "Prioridad a sus Platillos",
      title: "Prioridad a sus Platillos",
      tlali: true, 
      maya: true, 
      azteca: true
    },
    {
      id: "Código de Referencia",
      title: "Código de Referencia",
      tlali: true, 
      maya: true, 
      azteca: true
    },
    {
      id: "Conferencias y eventos",
      title: "Conferencias y eventos",
      tlali: true, 
      maya: true, 
      azteca: true
    },
    {
      id: "Suscripción de waffles",
      title: "Suscripción de waffles",
      tlali: false, 
      maya: true, 
      azteca: true
    },
    {
      id: "Pedidos anticipados",
      title: "Pedidos anticipados",
      tlali: false, 
      maya: true, 
      azteca: true
    },
    {
      id: "Línea de crédito",
      title: "Línea de crédito",
      tlali: false, 
      maya: false, 
      azteca: true
    },
    {
      id: "Chef a domicilio",
      title: "Chef a domicilio",
      tlali: false, 
      maya: false, 
      azteca: true
    },
    {
      id: "Cubiertos personalizados",
      title: "Cubiertos personalizados",
      tlali: false, 
      maya: false, 
      azteca: true
    },
    {
      id: "Plan de nutrición",
      title: "Plan de nutrición",
      tlali: false, 
      maya: false, 
      azteca: true
    }
  ]
  return (
    <TableContainer sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            {membresias.map((membresia) => (
              <TableCell style={{ width: "20rem" }} key={membresia.id}>
                <MembresiasCard
                  nombre={membresia.nombre}
                  descripción={membresia.descripcion}
                  precio={membresia.precio}
                  width={"20rem"}
                />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ backgroundColor: "#E1E8E4" }}>
            <TableCell
              style={{
                color: "#665959",
                fontFamily: "Rufina",
                fontSize: "1.2rem",
              }}
            >
              Beneficios
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          {beneficiosMembresias.map((beneficio)=>(
             <TableRow key={beneficio.id}>
             <TableCell>{beneficio.title}</TableCell>
             <TableCell
               style={{
                 color: "rgba(131, 148, 143, 1)",
                 textAlign: "center",
               }}
             >
               {beneficio.tlali && <CheckCircle />}
             </TableCell>
             <TableCell
               style={{
                 color: "rgba(131, 148, 143, 1)",
                 textAlign: "center",
               }}
             >
               {beneficio.maya && <CheckCircle />}
             </TableCell>
             <TableCell
               style={{
                 color: "rgba(131, 148, 143, 1)",
                 textAlign: "center",
               }}
             >
               {beneficio.azteca && <CheckCircle />}
             </TableCell>
           </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MembresiasTable;
