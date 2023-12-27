import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { deleteUser, signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { resetUserData } from "@/redux/reducers/user";
import { editUserStatus } from "@/services/userServices";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

const pages = [
  {
    id: "Inicio",
    name: "Inicio",
    path: "/",
  },
  {
    id: "Menu",
    name: "Menú",
    path: "/menu",
  },
];

function TopNavbar() {
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [openDialog, setOpenDialog] = React.useState(false);

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

  const handleRedirect = (path) => {
    router.push(path);
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
        handleRedirect("/login");
        dispatch(resetUserData());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteUserAccount = () => {
    const userAux = auth.currentUser;
    editUserStatus(userAux.uid, 'Cuenta Eliminada');
    deleteUser(userAux).then(() => {
      logOut();
    }).catch((error) => {
     console.error(error)
    });
  }
  const handleClose = () => {
    setOpenDialog(false);
  }

  return (
    <>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Image
              alt="logo_pajaro_negro"
              src={"/assets/img/logos/logo_pajaro_negro.png"}
              width={85}
              height={60}
            />
          </Typography>

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
                <MenuItem
                  key={page.id}
                  onClick={() => handleRedirect(page.path)}
                >
                  <Typography textAlign="center">{page.id}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Image
              alt="logo_pajaro_negro"
              src={"/assets/img/logos/logo_pajaro_negro.png"}
              width={100}
              height={70}
            />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={() => handleRedirect(page.path)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
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
              <MenuItem onClick={logOut}>
                <Typography textAlign="center">Cerrar Sesión</Typography>
              </MenuItem>
              <MenuItem onClick={()=>setOpenDialog(true)}>
                <Typography textAlign="center">Eliminar Cuenta</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
           <Dialog
           open={openDialog}
           onClose={handleClose}
           aria-labelledby="alert-dialog-title"
           aria-describedby="alert-dialog-description"
         >
           <DialogTitle id="alert-dialog-title">
             ¿Deseas eliminar tu cuenta?
           </DialogTitle>
           <DialogContent>
             <DialogContentText id="alert-dialog-description">
               Una vez que se elimine no podrás revertir la acción. Ni recuperar el historial de la cuenta.
             </DialogContentText>
           </DialogContent>
           <DialogActions>
             <Button onClick={handleClose}>Cancelar</Button>
             <Button onClick={deleteUserAccount} autoFocus>
               Eliminar
             </Button>
           </DialogActions>
         </Dialog>
    </>
  );
}
export default TopNavbar;
