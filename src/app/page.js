"use client";
import { Grid, useMediaQuery } from "@mui/material";
import Navbar from "../components/Navbar";
import SeccionMembresias from "../components/secciones/membresias";
import SeccionReservaciones from "../components/secciones/reservaciones";
import SeccionFundador from "../components/secciones/fundador";
import SeccionFundacion from "../components/secciones/fundacion";
import SeccionBlog from "../components/secciones/blog";
import SeccionContacto from "../components/secciones/contacto";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import SeccionMembresiasTabla from "../components/secciones/membresias-tabla";
import { useTheme } from "@emotion/react";
import CarouselCover from "./carousel";
import CarouselMobileCover from "./carousel-mobile";
import { useEffect, useState } from "react";
import { getLastBlogs } from "@/services/blogServices";
import Footer from "@/components/Footer";

const Home = () => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const [blogPosts, setBlogPosts] = useState([]);
  const handleGetBlogPosts = async () => {
    const response = await getLastBlogs();
    setBlogPosts(response);
  };
  useEffect(() => {
    handleGetBlogPosts();
  }, []);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12}>
        {isMdAndLg ? <CarouselCover /> : <CarouselMobileCover />}
      </Grid>
      <SeccionReservaciones id={"reservaciones"} />
      <SeccionMembresias id="membresias" />
      <SeccionMembresiasTabla />
      <SeccionFundador id={"nosotros"} />
      <SeccionFundacion id={"fundacion"} />
      <SeccionBlog id={"blog"} data={blogPosts} />
      <SeccionContacto id={"contacto"} />
      <FloatingWhatsApp
        accountName={"Tlali"}
        phoneNumber={"7713347733"}
        chatMessage={"Hola! ¿Cómo podemos ayudarte?"}
        avatar="/assets/img/logos/logo_t.png"
      />
      <Footer />
    </Grid>
  );
};

export default Home;
