"use client";
import { useTheme } from "@emotion/react";
import { Alert, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import NutricionCard from "./nutricion-card";
import BottomNavigationComponent from "../components/bottom-navigation";
import { getUserPlan } from "@/services/planNutricionServices";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import TopNavbar from "../components/top-navbar";
import NoDataMessage from "../components/no-data-message";
import { editUserNutritionPlanRequest, getUser } from "@/services/userServices";
import { addUserData } from "@/redux/reducers/user";
import emailjs from "emailjs-com";

const Nutricion = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { userData } = useSelector((state) => state.user);
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const padding = isMdAndLg ? 10 : 5;
  const [plan, setPlan] = useState();
  const [successMessage, setSuccessMessage] = useState();

  const handleGetUserPlan = async () => {
    try {
      const response = await getUserPlan(userData.uid);
      setPlan(response[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetUserData = async (uid) => {
    try {
      const response = await getUser(uid);
      return(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateRequest = async() => {
    try{
    await editUserNutritionPlanRequest(userData.uid);
    sendEmail(userData.uid);
    const data = await handleGetUserData(userData.uid);
    if(data){
      dispatch(addUserData({uid:userData.uid,...data, birthDay: data.birthDay.seconds}));
    }
    setSuccessMessage('Se ha enviado su solicitud con éxito')
    }catch(error){
      console.log(error)
    }
  }

  const sendEmail = (userID) => {
    try {
      emailjs.send(
        "service_2r054pk",
        "template_m6vlelc",
        {
          userID,
        },
        "user_tT2FqNHM2wYy7GZQ6IhJP"
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetUserPlan(); 
  }, []);

  
  return (
    <>
      <TopNavbar />
      <Grid
        container
        style={{
          backgroundColor: "#eff1ed",
          height: "100vh",
          width: "100vw",
        }}
        direction={"row"}
        padding={padding}
        overflow={"scroll"}
      >
        <Grid
          item
          xs={12}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          marginBottom={10}
        >
          <Typography variant="h2" color={"#665959"}>
            Plan de nutrición
          </Typography>
          <Typography variant="h5" color={"#665959"}>
            En esta sección encontrarás tu plan de nutrición.
          </Typography>
          {plan && (
            <Grid item container xs={12} spacing={2} marginTop={2}>
              <NutricionCard
                color={"#c5c6c4"}
                title={"Desayuno"}
                data={plan?.breakfast}
              />
              <NutricionCard
                color={"#a9bdb1"}
                title={"Comida"}
                data={plan?.lunch}
              />
              <NutricionCard
                color={"#83948F"}
                title={"Cena"}
                data={plan?.dinner}
              />
            </Grid>
          )}
          {!plan && (
            <>
            {userData.nutritionRequest && <Alert style={{marginBottom: '1rem', marginTop: '1rem'}}>Ya se ha abierto una solicitud para el plan de nutrición</Alert>}
            {successMessage && <Alert style={{marginBottom: '1rem'}}>{successMessage}</Alert>}
            <NoDataMessage
              title={"Oooops!"}
              subtitle={"Aún no cuentas con ningún plan de nutrición"}
            />
            <Button onClick={handleCreateRequest} variant="contained" disabled={userData.nutritionRequest} style={{marginTop: '1rem'}}>Solicitar Plan</Button>
            </>
          )}
        </Grid>

        <BottomNavigationComponent />
      </Grid>
    </>
  );
};
export default Nutricion;
