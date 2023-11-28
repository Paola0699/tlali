"use client";
import React, { useEffect, useState } from "react";
import TopNavigation from "../components/top-navigation";
import { Grid } from "@mui/material";
import BoxTitle from "../components/box-title";
import { getUserPlanRequests } from "@/services/planNutricionServices";
import PlanNutricionTable from "./plan-nutricion-table";

const PlanNutricion = () => {
  const [userRequest, setUserRequests] = useState([]);
  const handleGetPlans = async () => {
    const response = await getUserPlanRequests();
    setUserRequests(response);
  };
  useEffect(() => {
    handleGetPlans();
  }, []);
  return (
    <>
      <TopNavigation />
      <Grid
        container
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "white",
          overflow: "scroll",
        }}
        padding={10}
      >
        <Grid item xs={12}>
          <BoxTitle
            title={"Plan de nutrición"}
            subtitle={
              "Aquí encontrarás las solicitudes de plan de nutrición de los usuarios."
            }
          />
          <PlanNutricionTable data={userRequest} />
          <br></br>
        </Grid>
      </Grid>
    </>
  );
};

export default PlanNutricion;
