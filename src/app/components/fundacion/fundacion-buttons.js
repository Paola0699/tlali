import { Button } from "@mui/material";
import { Rufina } from "next/font/google";
import React from "react";
const rufina = Rufina({ subsets: ["latin"], weight: "400" });

const FundacionButtons = () => {
  return (
    <Button
      className={rufina.className}
      style={{ borderColor: "#665959", color: "#665959", marginTop: "2rem" }}
      variant="outlined"
    >
      Más Información
    </Button>
  );
};

export default FundacionButtons;
