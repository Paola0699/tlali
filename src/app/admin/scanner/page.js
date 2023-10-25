"use client";
import React, { useState } from "react";
import TopNavigation from "../components/top-navigation";
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import BoxTitle from "../components/box-title";
import { QrReader } from "react-qr-reader";
import { useTheme } from "@emotion/react";
import { Star } from "@mui/icons-material";
import { editUserPoints } from "@/services/userServices";

const Scanner = () => {
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const width = isMdAndLg ? "50%" : "100%";
  const [data, setData] = useState();
  const [option, setOption] = useState("abonar");
  const [userAddPoints, setUserAddPints] = useState(0);
  const [userSubsPoints, setUserSubsPoints] = useState(0);
  const [successMessage, setSuccessMessage] = useState();
  const handleEditPoints = async () => {
    let points = 0;
    if (option === "abonar") {
      points = Number(data.points + userAddPoints);
    } else {
      points = Number(data.points - userSubsPoints);
    }
    try {
      await editUserPoints(data.uid, points);
      setSuccessMessage(
        "Se han agregado los puntos con éxito, tardará un momento en actualizarse."
      );
      setUserAddPints(0);
      setUserSubsPoints(0);
    } catch (error) {
      console.log(error);
    }
  };
  const resetScanner = () => {
    window.location.reload();
  };
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
            title={"Scanner"}
            subtitle={"Aquí podrás escanear los códigos qr de los usuarios."}
          />
          <br></br>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {data?.name ? (
              <>
                <Box
                  style={{
                    border: "1px dashed #665959",
                    padding: "2rem",
                    borderRadius: "20px",
                  }}
                >
                  <Typography color={"#665959"} variant="h6">
                    Id de cliente: {data.uid}
                  </Typography>
                  <Typography color={"#665959"} variant="h5">
                    Nombre: {`${data.name} ${data.lastName}`}
                  </Typography>
                  <Typography color={"#665959"} variant="h6">
                    Membresia: {data.membership}
                  </Typography>
                  <Typography
                    variant="h4"
                    color={"#665959"}
                    textAlign={"center"}
                  >
                    {data?.points} <Star style={{ color: "#f4c01e" }} />
                  </Typography>
                  {successMessage && (
                    <Alert severity="success">{successMessage}</Alert>
                  )}
                  <FormControl style={{ marginTop: "1rem" }}>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      ¿Qué deseas hacer con los puntos del usuario?
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      style={{ color: "#665959" }}
                      value={option}
                      onChange={(e) => setOption(e.target.value)}
                    >
                      <FormControlLabel
                        value="abonar"
                        control={<Radio />}
                        label="Abonar puntos"
                      />
                      <FormControlLabel
                        value="utilizar"
                        control={<Radio />}
                        label="Utilizar Puntos del saldo"
                      />
                    </RadioGroup>
                  </FormControl>
                  {option === "abonar" && (
                    <Box>
                      <Typography color="#665959">
                        ¿Cuántos puntos deseas abonar?
                      </Typography>
                      <TextField
                        type="number"
                        size="small"
                        fullWidth
                        value={userAddPoints}
                        onChange={(e) => setUserAddPints(e.target.value)}
                      />
                      <Button
                        variant="outlined"
                        fullWidth
                        style={{ marginTop: ".5rem" }}
                        onClick={handleEditPoints}
                        disabled={userAddPoints === 0}
                      >
                        Abonar Puntos
                      </Button>
                    </Box>
                  )}
                  {option === "utilizar" && (
                    <Box>
                      {data?.points === 0 ? (
                        <Typography color="#665959" variant="h5">
                          Oooops! El usuario no cuenta con puntos, no puede
                          utilizar su saldo.
                        </Typography>
                      ) : (
                        <>
                          <Typography color="#665959">
                            ¿Cuántos puntos deseas utilizar?
                          </Typography>
                          <TextField
                            type="number"
                            size="small"
                            inputProps={{ max: data?.points }}
                            value={userSubsPoints}
                            onChange={(e) => setUserSubsPoints(e.target.value)}
                          />
                          <Button
                            variant="outlined"
                            fullWidth
                            style={{ marginTop: ".5rem" }}
                            onClick={handleEditPoints}
                            disabled={userSubsPoints === 0}
                          >
                            Utilizar Puntos
                          </Button>
                        </>
                      )}
                    </Box>
                  )}
                </Box>
                <Button
                  variant="contained"
                  style={{ marginTop: "1rem" }}
                  onClick={resetScanner}
                >
                  Escanear nuevo codigo
                </Button>
              </>
            ) : (
              <QrReader
                delay={500}
                containerStyle={{ width: width }}
                onResult={(result, error) => {
                  if (result) {
                    setData(JSON.parse(result?.text));
                  }

                  if (error) {
                  }
                }}
              />
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Scanner;
