import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Button, Link } from "@mui/material";
import Image from "next/image";
import { auth } from "@/firebase/firebase";
import { getUser } from "@/services/userServices";
import { useDispatch, useSelector } from "react-redux";
import { addUserData, resetUserData } from "@/redux/reducers/user";
import { signOut } from "firebase/auth";

const pages = [
  { title: "Membresias", link: "/#membresias" },
  { title: "Menú", link: "/menu" },
  { title: "Reservar", link: "/#reservaciones" },
  { title: "Nuestro Porqué", link: "/#nosotros" },
  { title: "Blog", link: "/#blog" },
];
const Navbar = () => {
  const { userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleGetUserData = async (uid) => {
    try {
      const response = await getUser(uid);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logOut = () => {
    signOut(auth)
      .then(async () => {
        document.cookie =
          "isAuthenticated=; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Path=/; Secure";
        document.cookie =
          "isAuthenticated=; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Path=/login; Secure";
        document.cookie =
          "isAuthenticated=; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Path=/admin; Secure";
        document.cookie =
          "userType=; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Path=/; Secure";
        document.cookie =
          "userType=; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Path=/login; Secure";
        document.cookie =
          "userType=; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Path=/admin; Secure";
        dispatch(resetUserData());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userData = await handleGetUserData(user.uid);
        if (userData) {
          dispatch(
            addUserData({
              uid: user.uid,
              ...userData,
              birthDay: userData.birthDay.seconds,
            })
          );
        }
      }
    });
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: isScrolled ? "#A9BDB1" : "transparent",
        transition: "background-color 0.3s ease",
      }}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <Image
              alt="Logo Pájaro"
              src={"/assets/img/logos/logo_pajaro.png"}
              width={140}
              height={100}
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} style={{ textDecoration: "none" }}>
                  <Link
                    href={page.link}
                    sx={{
                      my: 2,
                      color: "#665959",
                      display: "block",
                      textDecoration: "none",
                    }}
                  >
                    {page.title}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Image
              alt="Logo Pájaro"
              src={"/assets/img/logos/logo_pajaro.png"}
              width={120}
              height={80}
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <MenuItem key={page.link}>
                <Link
                  href={page.link}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  {page.title}
                </Link>
              </MenuItem>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {userData.uid ? (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={userData?.lastName}>
                      {userData?.lastName?.substr(0, 1)}{" "}
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem>
                    <Link
                      href="/usuario"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Typography textAlign="center">Mi Cuenta</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={logOut}>
                    <Typography textAlign="center">Cerrar Sesión</Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Link href={"/login"}>
                <Button variant="contained" style={{ boxShadow: "none" }}>
                  Iniciar Sesión
                </Button>{" "}
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
