import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material";
import React from "react";

const BlogItem = ({ titulo, descripcion, imagen }) => {
  return (
    <Card elevation={0}>
      <CardMedia
        component="img"
        height="120"
        image={imagen ? imagen : "/assets/img/bg_1.png"}
        alt="Paella dish"
      />
       <CardContent>
            <Typography variant="subtitle1">
              {titulo}
            </Typography>
            <Typography  variant="body2" marginBottom={1}>
              {descripcion}
            </Typography>
            <Link color={"#A9BDB1"}>
              Leer más
            </Link>
          </CardContent>
    </Card>
  );
};

export default BlogItem;
