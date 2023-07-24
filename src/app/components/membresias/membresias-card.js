import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const MembresiasCard = ({ nombre, descripción, precio, width }) => {
  return (
    <Card
      style={{
        width: width,
        borderRadius: "20px",
        padding: "2rem",
      }}
      elevation={0}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" color={"#83948F"}>
          {nombre}
        </Typography>
        <Typography color={"#665959"} variant="body2" textAlign={"center"}>
          {descripción}
        </Typography>
        <Typography color={"#665959"} variant="h5" fontWeight={800}>
          {precio}
        </Typography>
        <Button
          style={{
            borderColor: "#665959",
            color: "#665959",
            fontFamily: "Rufina",
          }}
          fullWidth
          variant="outlined"
        >
          Suscribirme
        </Button>
      </CardContent>
    </Card>
  );
};

export default MembresiasCard;
