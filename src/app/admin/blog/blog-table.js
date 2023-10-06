import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment/moment";
import Image from "next/image";
import React from "react";
const columns = [
  {
    field: "date",
    headerName: "Fecha",
    valueGetter: (params) => {
      return moment.unix(params.row.date.seconds).format("DD MMMM YYYY");
    },
    width: 250,
  },
  {
    field: "Imagen",
    headerName: "Imagen",
    renderCell: (params) => (
      <Image
        src={params.row.image}
        alt={params.row.id}
        width={100}
        height={60}
      />
    ),
    width: 250,
  },
  {
    field: "title",
    headerName: "Fecha",
  },
  {
    field: "author",
    headerName: "Autor",
  },
  {
    field: "Acciones",
    renderCell: (params) => (
      <Box>
        <Button>Eliminar</Button>
        <Button>Editar</Button>
      </Box>
    ),
    width: 250,
  },
];
const BlogTable = ({ data }) => {
  console.log(data);
  return <DataGrid rows={data} columns={columns} />;
};

export default BlogTable;
