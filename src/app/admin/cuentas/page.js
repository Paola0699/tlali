"use client";
import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import TopNavigation from "../components/top-navigation";
import BoxTitle from "../components/box-title";
import CuentasTable from "./cuentas-table";
import { getAllAccounts } from "@/services/accountsServices";
import CuentasNewModal from "./cuentas-new-modal";

const Cuentas = () => {
  const [loading, setLoading] = useState(false);
  const [accountsList, setAccountsList] = useState([]);
  const [open, setOpen] = useState(false);

  const handleGetAccounts = async () => {
    setLoading(true);
    try {
      const response = await getAllAccounts();
      setAccountsList(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleOpenModal = () => {
    setOpen(true);
  };

  useEffect(() => {
    handleGetAccounts();
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
            title={"Cuentas"}
            subtitle={
              "En este apartado podrás crear y consultar las cuentas de administrador que actualmente existen"
            }
          />
          <Button
            variant="contained"
            style={{ marginBottom: "2rem", marginTop: "1rem" }}
            onClick={handleOpenModal}
          >
            Crear nueva cuenta
          </Button>
          <CuentasTable data={accountsList} loading={loading} />
        </Grid>
      </Grid>
      {open && <CuentasNewModal open={open} setOpen={setOpen} />}
    </>
  );
};

export default Cuentas;
