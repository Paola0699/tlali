import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import moment from "moment";
import React, { useState } from "react";
import PlanAlimentacionModal from "./plan-alimentacion-modal";
import { addSelectedUser } from "@/redux/reducers/users";
import { useDispatch } from "react-redux";
import PlanAlimentacionEditarModal from "./plan-alimentacion-editar-modal";
import { editUserMembership } from "@/services/userServices";

const UsuariosTable = ({ data, loading, handleGetUsers }) => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState('');

  const handleClose = () => {
    setOpenDialog(false);
  }
  const handleEditUser = ( ) => {
      editUserMembership(selectedUser, "tlali").then(()=>{
      handleClose();
      handleGetUsers();

    })
  }
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 300,
    },
    {
      field: "membership",
      headerName: "Membresía",
      width: 150,
    },
    {
      field: "name",
      headerName: "Nombre",
      valueGetter: (params) => {
        return `${params.row.name} ${params.row.lastName}`;
      },
      width: 300,
    },
    {
      field: "phoneNumber",
      headerName: "Número Telefónico",
      width: 300,
    },
    {
      field: "email",
      headerName: "Correo Electrónico",
      width: 300,
    },
    {
      field: "birthDay",
      headerName: "Cumpleaños",
      valueGetter: (params) => {
        return moment.unix(params.row.birthDay.seconds).add(1, 'day').format("DD MMMM YYYY");
      },
      width: 300,
    },
    {
      field: "points",
      headerName: "Puntos Acumulados",
      width: 200,
    },
    {
      field: "Status de cuenta",
      headerName: "Status de cuenta",
      width: 200,
      valueGetter: (params) => {
        return params.row.status ? params.row.status : 'Cuenta Activa' ;
      },
    },
    {
      field: "Acciones",
      headerName: "Acciones",
      renderCell: (params) => {
        if (
          params.row.membership === "azteca" &&
          params.row.plan_alimentacion?.length > 0
        ) {
          return (
            <>
            <Button
              variant="contained"
              onClick={() => {
                setOpenEdit(true);
                dispatch(
                  addSelectedUser({
                    ...params.row,
                    birthDay: params.row.birthDay.seconds,
                  })
                );
              }}
            >
              Editar Plan de Alimentación
            </Button>
            <Button  variant="contained" style={{marginLeft: '.5rem'}} onClick={()=>{setOpenDialog(true); setSelectedUser(params.row.id)}}>Degradar Cuenta</Button>
            </>
          );
        }
        if (
          params.row.membership === "azteca" &&
          !params.row.plan_alimentacion
        ) {
          return (
            <>
            <Button
              variant="contained"
              onClick={() => {
                setOpen(true);
                dispatch(
                  addSelectedUser({
                    ...params.row,
                    birthDay: params.row.birthDay.seconds,
                  })
                );
              }}
            >
              Plan de Alimentación
            </Button>
            <Button  variant="contained" style={{marginLeft: '.5rem'}} onClick={()=>{setOpenDialog(true); setSelectedUser(params.row.id)}}>Degradar Cuenta</Button>
            </>
          );
        }
      },
      width: 400,
    },
  ];
  console.log(selectedUser);
  return (
    <>
      <DataGrid rows={data} columns={columns} loading={loading} 
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        />
      {open && <PlanAlimentacionModal open={open} setOpen={setOpen} />}
      {openEdit && (
        <PlanAlimentacionEditarModal open={openEdit} setOpen={setOpenEdit} />
      )}
       <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          ¿Deseas degradar esta cuenata membresía Tlali?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Al aceptar no podrás revertir este cambio.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleEditUser} autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UsuariosTable;
