"use client";
import { useTheme } from "@emotion/react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import NutricionCard from "./nutricion-card";
import BottomNavigationComponent from "../components/bottom-navigation";

const Nutricion = () => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const padding = isMdAndLg ? 15 : 5;
  return (
    <Grid
      container
      style={{
        backgroundColor: "#eff1ed",
        height: "100vh",
        width: "100vw",
      }}
      direction={"row"}
      padding={padding}
    >
      <Grid
        item
        xs={12}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Image
          alt="logo_pajaro_negro"
          src={"/assets/img/logos/logo_pajaro_negro.png"}
          width={120}
          height={90}
        />
        <Typography variant="h2" color={"#665959"}>
          Plan de nutrición
        </Typography>
        <Typography variant="h5" color={"#665959"}>
          En esta sección encontrarás tu plan de nutrición.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <NutricionCard color={"#c5c6c4"} />
      </Grid>
      <BottomNavigationComponent />
    </Grid>
  );
};
export default Nutricion;
