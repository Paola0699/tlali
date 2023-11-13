import { CheckCircle } from "@mui/icons-material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import MembresiasCard from "./membresias-card";
import { useRouter } from "next/navigation";

const MembresiasTable = () => {
  const router = useRouter();
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
      description: 'Te abonamos el 5% de tus compras', 
      tlali: true, 
      maya: true, 
      azteca: true
    },
    {
      id: "Prioridad a sus Platillos",
      title: "Prioridad a sus Platillos",
      description: "Priorizamos tu orden sobre las demás para que esté lista más rapido",
      tlali: true, 
      maya: true, 
      azteca: true
    },
    {
      id: "Código de Referencia",
      title: "Código de Referencia",
      description: "Si alguien tramita una membresía (excepto membresía Tlali) con tu código de cliente, tu siguiente compra tendrá un 50% de descuento.",
      tlali: true, 
      maya: true, 
      azteca: true
    },
    {
      id: "Conferencias y eventos",
      title: "Conferencias y eventos",
      description: 'Acceso preferencial a todas las conferencias y eventos que se imparten en el restaurante.',
      tlali: true, 
      maya: true, 
      azteca: true
    },
    {
      id: "Suscripción de waffles",
      title: "Suscripción de waffles",
      description: 'Agrega hasta 4 topings a tu waffle y solo paga la base.',
      tlali: false, 
      maya: true, 
      azteca: true
    },
    {
      id: "Pedidos anticipados",
      title: "Pedidos anticipados",
      description: 'Puedes marcar al restaurante. y con tu nombre y número de membresía te los vamos preparando, paque que cuando llegues al restaurante. tu comida esté lista.',
      tlali: false, 
      maya: true, 
      azteca: true
    },
    {
      id: "Línea de crédito",
      title: "Línea de crédito",
      description:'Tus consumos se van acumulando y solo los pagas al final del mes. Tal como funciona una tarjeta de crédito.',
      tlali: false, 
      maya: false, 
      azteca: true
    },
    {
      id: "Chef a domicilio",
      title: "Chef a domicilio",
      description: 'Uno de nuestros chefs pueden ir a cocinar el menú que tu quieras, hasta tu domicilio. Haznos saber el menú que quieres y cotizamos.',
      tlali: false, 
      maya: false, 
      azteca: true
    },
    {
      id: "Cubiertos personalizados",
      title: "Cubiertos personalizados",
      description: 'Cuchillo con nombre y apellido del comensal.',
      tlali: false, 
      maya: false, 
      azteca: true
    },
    {
      id: "Plan de nutrición",
      title: "Plan de nutrición",
      description: 'La membresía incluye un plan inicial de nutrición. (Primer consulta sin costo)',
      tlali: false, 
      maya: false, 
      azteca: true
    }
  ]

  const handleRedirect = (path) => {
    router.push(path);
  };
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
                  onClick={()=>handleRedirect('/signup')}
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
             <TableCell><Typography>{beneficio.title}</Typography><Typography>{beneficio.description}</Typography></TableCell>
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
