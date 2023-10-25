"use client";
import { useTheme } from "@emotion/react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import NutricionCard from "./nutricion-card";
import BottomNavigationComponent from "../components/bottom-navigation";
import { getUserPlan } from "@/services/planNutricionServices";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import TopNavbar from "../components/top-navbar";
import NoDataMessage from "../components/no-data-message";

const Nutricion = () => {
  const { userData } = useSelector((state) => state.user);
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const padding = isMdAndLg ? 10 : 5;
  const [plan, setPlan] = useState();

  const handleGetUserPlan = async () => {
    try {
      const response = await getUserPlan(userData.uid);
      setPlan(response[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleGetUserPlan();
  }, []);
  return (
    <>
      <TopNavbar />
      <Grid
        container
        style={{
          backgroundColor: "#eff1ed",
          height: "100vh",
          width: "100vw",
        }}
        direction={"row"}
        padding={padding}
        overflow={"scroll"}
      >
        <Grid
          item
          xs={12}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          marginBottom={10}
        >
          <Typography variant="h2" color={"#665959"}>
            Plan de nutrición
          </Typography>
          <Typography variant="h5" color={"#665959"}>
            En esta sección encontrarás tu plan de nutrición.
          </Typography>
          {plan && (
            <Grid item container xs={12} spacing={2} marginTop={2}>
              <NutricionCard
                color={"#c5c6c4"}
                title={"Desayuno"}
                data={plan?.breakfast}
              />
              <NutricionCard
                color={"#a9bdb1"}
                title={"Comida"}
                data={plan?.lunch}
              />
              <NutricionCard
                color={"#83948F"}
                title={"Cena"}
                data={plan?.dinner}
              />
            </Grid>
          )}
          {!plan && (
            <NoDataMessage
              title={"Oooops!"}
              subtitle={"Aún no cuentas con ningún plan de nutrición"}
            />
          )}
        </Grid>

        <BottomNavigationComponent />
      </Grid>
    </>
  );
};
export default Nutricion;
