"use client";
import React, { useEffect, useState } from "react";
import TopNavigation from "../components/top-navigation";
import { Grid } from "@mui/material";
import BoxTitle from "../components/box-title";
import ChefTable from "./chef-table";
import { getAllChefRequest } from "@/services/chefServices";

const ChefRequest = () => {
  const [chefRequests, setChefRequests] = useState([]);
  const handleGetChefRequests = async () => {
    const response = await getAllChefRequest();
    setChefRequests(response);
  };
  useEffect(() => {
    handleGetChefRequests();
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
            title={"Solicitudes de Chef"}
            subtitle={
              "Aquí encontrarás las solicitudes de chef privado de los clientes."
            }
          />
          <br></br>
          <ChefTable data={chefRequests} />
        </Grid>
      </Grid>
    </>
  );
};

export default ChefRequest;
