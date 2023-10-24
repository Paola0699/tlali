import { CheckCircleOutline } from "@mui/icons-material";
import { Button, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import React from "react";

const MembresiasCard = ({ nombre, descripción, precio,  beneficios, width, color, fontColor, onClick }) => {
  return (
    <Card
      style={{
        width: width,
        borderRadius: "0px 30px 0px 30px",
        padding: "1.5rem",
        backgroundColor: color,
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

        {beneficios && ( <List dense={true}> {beneficios.map((beneficio)=>(
          <ListItem key={beneficio}>
            <ListItemIcon style={{color: 'white'}}><CheckCircleOutline/></ListItemIcon>
            <ListItemText style={{color: 'white'}}>{beneficio}</ListItemText></ListItem>
        ))}</List>)}
        <Button
          style={{
            borderColor: fontColor ? fontColor : "#665959",
            color: fontColor ? fontColor :"#665959",
            fontFamily: "Rufina",
          }}
          fullWidth
          variant="outlined"
          onClick={onClick}
        >
          Suscribirme
        </Button>
      </CardContent>
    </Card>
  );
};

export default MembresiasCard;
