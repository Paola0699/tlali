"use client";
import { createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import SeccionMembresias from "./components/secciones/membresias";
import { ThemeProvider } from "@emotion/react";
import SeccionReservaciones from "./components/secciones/reservaciones";
import SeccionNosotros from "./components/secciones/nosotros";
import SeccionFundador from "./components/secciones/fundador";
import SeccionFundacion from "./components/secciones/fundacion";
import SeccionBlog from "./components/secciones/blog";
import SeccionContacto from "./components/secciones/contacto";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Font1", // Nombre de la primera fuente
      "Font2", // Nombre de la segunda fuente
      "Roboto", // Fuente por defecto de respaldo
      "Arial", // Fuente de respaldo
      "sans-serif", // Fuente genérica de respaldo
    ].join(","),
  },
  overrides: {
    // Agrega estilos específicos para las fuentes si es necesario
    // Ejemplo:
    MuiTypography: {
      root: {
        fontFamily: "Font1, sans-serif", // Usar la primera fuente para la mayoría de los elementos de tipografía
      },
      h1: {
        fontFamily: "Font2, serif", // Usar la segunda fuente para los títulos h1
      },
    },
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />

      <SeccionMembresias id="membresias" />
      <SeccionReservaciones id={"reservaciones"} />
      <SeccionNosotros id={"nosotros"} />
      <SeccionFundador id={"fundador"} />
      <SeccionFundacion id={"fundacion"} />
      <SeccionBlog id={"blog"} />
      <SeccionContacto id={"contacto"} />
      <FloatingWhatsApp
        accountName={"Tlali"}
        phoneNumber={"7712409254"}
        chatMessage={"Hola! ¿Cómo podemos ayudarte?"}
        avatar="/assets/img/logos/logo_t.png"
      />
    </ThemeProvider>
  );
};

export default Home;
