import {
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";

const NutricionCard = ({ color, title, data }) => {
  return (
    <Grid item xs={12} md={6}>
      <Card elevation={0} style={{ backgroundColor: color, padding: "2rem" }}>
        <CardContent>
          <Typography variant="h4" color={"white"}>
            {title}
          </Typography>
          <List style={{ color: "white" }}>
            <ListItem>{data}</ListItem>
          </List>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default NutricionCard;
