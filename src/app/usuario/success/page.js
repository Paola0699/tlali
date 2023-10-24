"use client";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import BottomNavigationComponent from "../components/bottom-navigation";
import { useTheme } from "@emotion/react";
import TopNavbar from "../components/top-navbar";
import { editUserMembership } from "@/services/userServices";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { resetSelectedSubcription } from "@/redux/reducers/user";

const Success = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { uid } = useSelector((state) => state.user.userData);
  const { selectedSubscription } = useSelector((state) => state.user);
  const theme = useTheme();
  const isMdAndLg = useMediaQuery(theme.breakpoints.up("md"));
  const padding = isMdAndLg ? 15 : 5;
  const handleRedirect = (path) => {
    router.push(path);
  };
  const handleCheckoutSuccess =  () => {
     editUserMembership(uid, selectedSubscription.name).then(()=>{
      dispatch(resetSelectedSubcription());
     })
  };
  useEffect(() => {
    handleCheckoutSuccess();
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
          overflow: "scroll",
        }}
        direction={"row"}
        padding={padding}
      >
        <Grid
          item
          xs={12}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          marginBottom={1}
        >
          <Typography variant="h2" color={"#665959"}>
            Te has suscrito con éxito a tu plan.
          </Typography>
          <Typography variant="h5" color={"#665959"}>
            Ahora podrás gozar de todos los beneficios de tu membresía.
          </Typography>
          <Button
            style={{ marginTop: "1rem" }}
            variant="contained"
            onClick={() => handleRedirect("/usuario")}
          >
            Comenzar a Gozar de beneficios
          </Button>
        </Grid>
        <BottomNavigationComponent />
      </Grid>
    </>
  );
};
export default Success;
