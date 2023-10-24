import { Chef, Home, Message, Veggie } from "@/assets/svgs";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { TrackChangesOutlined } from "@mui/icons-material";

const BottomNavigationComponent = () => {
  const userData = useSelector((state) => state.user.userData);

  const router = useRouter();
  const navigationRoutes = [
    {
      key: "Inicio",
      name: "Inicio",
      icon: <Home style={{ fontSize: "1.5rem" }} />,
      url: "/usuario",
      allowed: ["tlali", "maya", "azteca"],
    },
    {
      key: "Plan de Nutrición",
      name: "Plan de Nutrición",
      icon: <Veggie style={{ fontSize: "1.5rem" }} />,
      url: "/usuario/nutricion",
      allowed: ["azteca"],
    },
    {
      key: "Agendar Chef",
      name: "Agendar Chef",
      icon: <Chef style={{ fontSize: "1.5rem" }} />,
      url: "/usuario/chef",
      allowed: ["azteca"],
    },
    {
      key: "Nuestro Blog",
      name: "Nuestro Blog",
      icon: <Message style={{ fontSize: "1.5rem" }} />,
      url: "/usuario/blog",
      allowed: ["tlali", "maya", "azteca"],
    },
    {
      key: "Suscripciones",
      name: "Suscripciones",
      icon: (
        <TrackChangesOutlined
          style={{ fontSize: "1.5rem", color: "#83948f" }}
        />
      ),
      url: "/usuario/suscripciones",
      allowed: ["tlali", "maya"],
    },
  ];
  const handleRedirect = (path) => {
    router.push(path);
  };
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 2 }}
      elevation={3}
    >
      <BottomNavigation showLabels sx={{ height: "5rem" }}>
        {navigationRoutes.map((route) => {
          if (route.allowed.includes(userData.membership)) {
            return (
              <BottomNavigationAction
                key={route.key}
                icon={route.icon}
                label={route.name}
                onClick={() => handleRedirect(route.url)}
              />
            );
          }
        })}
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavigationComponent;
