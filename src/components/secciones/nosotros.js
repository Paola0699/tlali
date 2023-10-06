import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import NosotrosDescripcion from "../nosotros/nosotros-descripcion";
import { useTheme } from "@emotion/react";

const SeccionNosotros = ({ id }) => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const paddingValue = isMdAndLg ? 15 : 7;
  const heightValue = isMdAndLg ? "auto" : "400px";

  return (
    <Grid
      id={id}
      container
      style={{ backgroundColor: "#A9BDB1", color: "white" }}
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
        padding={paddingValue}
      >
        <NosotrosDescripcion
          titulo={"Acerca de nuestra cocina "}
          descripcion={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        height={heightValue}
        style={{
          backgroundImage: `url('/assets/img/bg_1.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Grid>
    </Grid>
  );
};
export default SeccionNosotros;
