import { Card, CardContent, Grid, Link, Typography } from "@mui/material";
import { Lato, Rufina } from "next/font/google";
import React from "react";

const rufina = Rufina({ subsets: ["latin"], weight: "400" });
const lato = Lato({ subsets: ["latin"], weight: "400" });

const BlogItem = ({ titulo, descripcion, imagen }) => {
  return (
    <Card elevation={0} sx={{ display: "flex", color: "#665959" }}>
      <Grid container>
        <Grid item xs={8}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography className={rufina.className} variant="subtitle1">
              {titulo}
            </Typography>
            <Typography className={lato.className} variant="body2">
              {descripcion}
            </Typography>
            <Link color={"#D7C6A7"} marginTop={1}>
              Leer más
            </Link>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            backgroundImage: `url('/assets/img/bg_1.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Grid>
      </Grid>
    </Card>
  );
};

export default BlogItem;
