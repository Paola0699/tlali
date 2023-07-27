import { useTheme } from "@emotion/react";
import { Grid, Link, Menu, MenuItem, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const paddingValue = isMdAndLg ? 20 : 4;
  return (
    <Grid
      container
      paddingRight={paddingValue}
      paddingLeft={paddingValue}
      paddingTop={5}
      paddingBottom={7}
      spacing={3}
      style={{ backgroundColor: "#A9BDB1", color: "white" }}
      marginTop={0}
    >
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Image
          alt="logo_pajaro_negro"
          src={"/assets/img/logos/logo_pajaro.png"}
          width={220}
          height={160}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={"row"}
      >
        <Link color={"#fff"} marginRight={3}>
          Contáctanos
        </Link>
        <Link color={"#fff"} marginRight={3}>
          Únete a Tlali
        </Link>
        <Link color={"#fff"} marginRight={3}>
          Nosotros
        </Link>
        <Link color={"#fff"} marginRight={3}>
          Términos y Codiciones
        </Link>
      </Grid>
    </Grid>
  );
};

export default Footer;
