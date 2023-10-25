import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import React from "react";

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
];

const UsuariosTable = ({ data }) => {
  return <DataGrid rows={data} columns={columns} />;
};

export default UsuariosTable;
