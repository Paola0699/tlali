import { Button, Chip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import React from "react";

const columns = [
  {
    field: "requestDate",
    headerName: "Fecha de solicitud",
    valueGetter: (params) => {
      return moment.unix(params.row.requestDate.seconds).format("DD MMMM YYYY");
    },
    width: 200,
  },
  {
    field: "appointmentDate",
    headerName: "Fecha del evento",
    width: 200,
  },
  {
    field: "appointmentTime",
    headerName: "Hora del evento",
    width: 200,
  },
  {
    field: "address",
    headerName: "Dirección",
    width: 200,
  },
  {
    field: "dishes",
    headerName: "Platillos",
    width: 200,
  },
  {
    field: "guestsNumber",
    headerName: "Numero de personas",
    width: 200,
  },
  {
    field: "user",
    headerName: "Cliente",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    renderCell: (params) => (
      <Chip
        label={params.row.status}
        color={
          params.row.status === "Pendiente de confirmar"
            ? "primary"
            : params.row.status === "Cancelado"
            ? "error"
            : "success"
        }
      />
    ),
  },
];

const ChefTable = ({ data }) => {
  return <DataGrid rows={data} columns={columns} />;
};

export default ChefTable;
