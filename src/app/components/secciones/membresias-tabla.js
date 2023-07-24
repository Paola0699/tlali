import { Grid, useMediaQuery } from "@mui/material";
import React from "react";
import MembresiasTable from "../membresias/membresias-table";
import { useTheme } from "@emotion/react";
import MembresiasTableMobile from "../membresias/membresias-table-mobile";

const SeccionMembresiasTabla = () => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const paddingValue = isMdAndLg ? 15 : 5;
  return (
    <Grid
      container
      style={{ backgroundColor: "white", borderBottom: "2px dotted #83948F" }}
      marginBottom={3}
    >
      <Grid item xs={12} padding={paddingValue}>
        <MembresiasTable />
        <MembresiasTableMobile />
      </Grid>
    </Grid>
  );
};

export default SeccionMembresiasTabla;
