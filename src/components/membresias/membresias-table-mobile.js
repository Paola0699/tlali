import { Grid } from "@mui/material";
import React from "react";
import MembresiasCard from "./membresias-card";
import { useRouter } from "next/navigation";

const MembresiasTableMobile = () => {
  const router = useRouter();
  const membresias = [
    {
      id: 1,
      nombre: "Tlali",
      descripcion: "Afiliciación $0",
      precio: "Mensualidad $250.00 (en consumo)",
      color: '#C5C6C4',
      beneficios: ['Bonificación de puntos. Te abonamos el 5% de tus compras.','Prioridad a sus Platillos. Priorizamos tu orden sobre las demás para que esté lista más rapido.','Código de Referencia. Si alguien tramita una membresía (excepto membresía Tlali) con tu código de cliente, tu siguiente compra tendrá un 50% de descuento.','Conferencias y eventos. Acceso preferencial a todas las conferencias y eventos que se imparten en el restaurante.']
    },
    {
      id: 2,
      nombre: "Maya",
      descripcion: "Afiliciación $165",
      precio: "Mensualidad $550 (en consumo)",
      color: '#A9BDB1',
      beneficios: ['Beneficios de membresia Tlali','Suscripción de waffles. Agrega hasta 4 topings a tu waffle y solo paga la base.','Pedidos anticipados. Puedes marcar al restaurante. y con tu nombre y número de membresía te los vamos preparando, paque que cuando llegues al restaurante. tu comida esté lista.']
    },
    {
      id: 3,
      nombre: "Azteca",
      descripcion: "Afiliciación $260",
      precio: "Mensualidad $800 (en consumo)",
      color: '#83948F',
      beneficios: ['Beneficios de membresia Maya','Línea de crédito. Tus consumos se van acumulando y solo los pagas al final del mes. Tal como funciona una tarjeta de crédito.','Chef a domicilio. Uno de nuestros chefs pueden ir a cocinar el menú que tu quieras, hasta tu domicilio. Haznos saber el menú que quieres y cotizamos.', 'Cubiertos personalizados. Cuchillo con nombre y apellido del comensal.', 'Plan de nutrición. La membresía incluye un plan inicial de nutrición. (Primer consulta sin costo)']
    },

  ];
  const handleRedirect = (path) => {
    router.push(path);
  };
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
            onClick={()=>handleRedirect('/signup')}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MembresiasTableMobile;
