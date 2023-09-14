"use client";
import { Grid, ImageList, ImageListItem, useMediaQuery } from "@mui/material";
import Navbar from "./components/Navbar";
import SeccionMembresias from "./components/secciones/membresias";
import SeccionReservaciones from "./components/secciones/reservaciones";
import SeccionFundador from "./components/secciones/fundador";
import SeccionFundacion from "./components/secciones/fundacion";
import SeccionBlog from "./components/secciones/blog";
import SeccionContacto from "./components/secciones/contacto";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import SeccionMembresiasTabla from "./components/secciones/membresias-tabla";
import Footer from "./components/Footer";
import { useTheme } from "@emotion/react";
import CarouselCover from "./carousel";
import CarouselMobileCover from "./carousel-mobile";

const Home = () => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  
  return (
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
{/*         <Footer/>
 */}      </Grid>
  );
};

export default Home;
