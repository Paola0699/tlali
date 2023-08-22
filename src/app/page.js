"use client";
import { Grid, createTheme, useMediaQuery } from "@mui/material";
import Navbar from "./components/Navbar";
import SeccionMembresias from "./components/secciones/membresias";
import { ThemeProvider } from "@emotion/react";
import SeccionReservaciones from "./components/secciones/reservaciones";
import SeccionFundador from "./components/secciones/fundador";
import SeccionFundacion from "./components/secciones/fundacion";
import SeccionBlog from "./components/secciones/blog";
import SeccionContacto from "./components/secciones/contacto";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import CarouselCover from "./carousel";
import SeccionMembresiasTabla from "./components/secciones/membresias-tabla";
import Footer from "./components/Footer";
import CarouselMobileCover from "./carousel-mobile";

const theme = createTheme({
  typography: {
    fontFamily: "Lato, sans-serif", // Fuente predeterminada para todo el texto
    h2: {
      fontFamily: "Rufina,  serif", // Fuente para los h2
    },
    h3: {
      fontFamily: "Rufina,  serif", // Fuente para los h2
    },
    h4: {
      fontFamily: "Rufina,  serif", // Fuente para los h2
    },
    subtitle1: {
      fontFamily: "Lato, sans-serif", // Fuente para los subtitle1 (los mantendremos como la fuente predeterminada)
    },
    body2: {
      fontFamily: "Lato, sans-serif", // Fuente para los subtitle1 (los mantendremos como la fuente predeterminada)
    },
  },
});

const Home = () => {
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12}>
          {isMdAndLg ? <CarouselCover /> : <CarouselMobileCover/>}
        </Grid>
        <SeccionReservaciones id={"reservaciones"} />
        <SeccionMembresias id="membresias" />
        <SeccionMembresiasTabla/>
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
        <Footer/>
      </Grid>
    </ThemeProvider>
  );
};

export default Home;
