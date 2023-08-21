import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const MembresiasCard = ({ nombre, descripción, precio, width, color, fontColor, headerColor }) => {
  return (
    <Card
      style={{
        width: width,
        borderRadius: "20px",
        padding: "2rem",
        backgroundColor: color
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
        <Typography variant="h4" color={fontColor ? fontColor : "#83948F"}>
          {nombre}
        </Typography>
        <Typography color={fontColor ? fontColor : "#665959"} variant="body2" textAlign={"center"}>
          {descripción}
        </Typography>
        <Typography color={fontColor ? fontColor : "#665959"} variant="h6" fontWeight={500} textAlign={"center"}>
          {precio}
        </Typography>
        <Button
          style={{
            borderColor: fontColor ? fontColor : "#665959",
            color: fontColor ? fontColor :"#665959",
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
