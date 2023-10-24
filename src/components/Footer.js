import { useTheme } from "@emotion/react";
import { Facebook, Instagram } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const paddingValue = isMdAndLg ? 10 : 5;
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? "#A9BDB1" : theme.palette.grey[800],
        p: paddingValue,
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Image
              alt="logo_pajaro_negro"
              src={"/assets/img/logos/logo_pajaro.png"}
              width={140}
              height={100}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contáctanos
            </Typography>
            <Typography variant="body2">
              Calle Ignacio Allende 300, Centro, 42080 Pachuca de Soto, Hgo.
            </Typography>
            <Typography variant="body2">Teléfono: 771 334 7733</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Siguenos en nuestras redes sociales
            </Typography>
            <Link
              href="https://www.facebook.com/p/Tlali-100076056152392/"
              color="inherit"
            >
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/tlali_fim/?hl=es-la"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://tlali.com/">
              Tlali.com
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
