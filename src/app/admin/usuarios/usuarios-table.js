import { Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import moment from "moment";
import React, { useState } from "react";
import PlanAlimentacionModal from "./plan-alimentacion-modal";
import { addSelectedUser } from "@/redux/reducers/users";
import { useDispatch } from "react-redux";
import PlanAlimentacionEditarModal from "./plan-alimentacion-editar-modal";

const UsuariosTable = ({ data, loading }) => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();
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
        return moment.unix(params.row.birthDay.seconds).format("DD MMMM YYYY");
      },
      width: 300,
    },
    {
      field: "points",
      headerName: "Puntos Acumulados",
      width: 200,
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
          );
        }
        if (
          params.row.membership === "azteca" &&
          !params.row.plan_alimentacion
        ) {
          return (
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
          );
        }
      },
      width: 250,
    },
  ];
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
    </>
  );
};

export default UsuariosTable;
