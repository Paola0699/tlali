"use client";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import TopNavbar from "../components/top-navbar";
import { useTheme } from "@emotion/react";
import BottomNavigationComponent from "../components/bottom-navigation";
import { useDispatch, useSelector } from "react-redux";
import { createCheckoutSession } from "@/stripe/createCheckoutSession";
import MembresiasCard from "@/components/membresias/membresias-card";
import { addSelectedSubcription } from "@/redux/reducers/user";

const products = [
  {
    id: "maya",
    price: "price_1OZ1NFHAhXq7aUmNuf7LwWqW",
    name: "maya",
    nombre: "Maya",
    descripcion: "Afiliciación $165",
    precio: "Mensualidad $550 (en consumo)",
    color: "#A9BDB1",
    beneficios: [
      "Beneficios de membresia Tlali",
      "Suscripción de waffles",
      "Pedidos anticipados",
    ],
    allowed: ["tlali"],
  },
  {
    id: "azteca",
    price: "price_1OZ1N9HAhXq7aUmNcj7wXZoZ",
    name: "azteca",
    nombre: "Azteca",
    descripcion: "Afiliciación $260",
    precio: "Mensualidad $800 (en consumo)",
    color: "#83948F",
    beneficios: [
      "Beneficios de membresia Maya",
      "Línea de crédito",
      "Chef a domicilio",
      "Cubiertos personalizados",
      "Plan de nutrición",
    ],
    allowed: ["tlali", "maya"],
  },
];
const Suscripciones = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const padding = isMdAndLg ? 10 : 5;
  const title = isMdAndLg ? "h2" : "h4";
  const userData = useSelector((state) => state.user.userData);
  const handleStartCheckout = (uid, subscription) => {
    createCheckoutSession(uid, subscription);
    dispatch(addSelectedSubcription(subscription))
  }
  return (
    <>
      <TopNavbar />
      <Grid
        container
        style={{
          backgroundColor: "#eff1ed",
          height: "100vh",
          width: "100vw",
          overflow: "scroll",
        }}
        direction={"row"}
        padding={padding}
      >
        <Grid
          item
          xs={12}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          marginBottom={1}
        >
          <Typography variant={title} color={"#665959"}>
            Suscripciones
          </Typography>
          <Typography variant="h5" color={"#665959"}>
            Obtén más beneficios
          </Typography>
          <Typography variant="h6" color={"#665959"}>
            Actualmente cuentas con la suscripción {userData.membership}
          </Typography>
          <Typography
            variant="h4"
            color={"#665959"}
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
          >
            Elige tu plan
          </Typography>
          <Grid container spacing={2}>
            {products.map((item) => {
              if (item.allowed.includes(userData.membership)) {
                return (
                  <Grid item xs={12} md={6} lg={6} key={item.id}>
                    <MembresiasCard
                      nombre={item.nombre}
                      descripción={item.descripcion}
                      precio={item.precio}
                      beneficios={item.beneficios}
                      width={"100%"}
                      color={item.color}
                      fontColor={"white"}
                      onClick={() => handleStartCheckout(userData.uid, item)}
                    />
                  </Grid>
                );
              }
            })}
          </Grid>
        </Grid>
        <BottomNavigationComponent />
      </Grid>
    </>
  );
};
export default Suscripciones;
