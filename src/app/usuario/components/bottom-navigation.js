import { Chef, Home, Message, Veggie } from "@/assets/svgs";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";

const BottomNavigationComponent = () => {
  const router = useRouter();
  const navigationRoutes = [
    {
      key: "Inicio",
      name: "Inicio",
      icon: <Home style={{ fontSize: "2rem" }} />,
      url: "/usuario",
    },
    {
      key: "Plan de Nutrición",
      name: "Plan de Nutrición",
      icon: <Veggie style={{ fontSize: "2rem" }} />,
      url: "/usuario/nutricion",
    },
    {
      key: "Agendar Chef",
      name: "Agendar Chef",
      icon: <Chef style={{ fontSize: "2rem" }} />,
      url: "/usuario/chef",
    },
    {
      key: "Nuestro Blog",
      name: "Nuestro Blog",
      icon: <Message style={{ fontSize: "2rem" }} />,
      url: "/usuario/blog",
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
        {navigationRoutes.map((route) => (
          <BottomNavigationAction
            key={route.key}
            icon={route.icon}
            label={route.name}
            onClick={() => handleRedirect(route.url)}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavigationComponent;
