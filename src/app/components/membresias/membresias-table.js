import { CheckCircle } from "@mui/icons-material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import MembresiasCard from "./membresias-card";

const MembresiasTable = () => {
  const membresias = [
    {
      id: 1,
      nombre: "Tlali",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      precio: "$500",
    },
    {
      id: 2,
      nombre: "Maya",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      precio: "$600",
    },
    {
      id: 3,
      nombre: "Azteca",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      precio: "$700",
    },
  ];
  return (
    <TableContainer sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            {membresias.map((membresia) => (
              <TableCell style={{ width: "20rem" }} key={membresia.id}>
                <MembresiasCard
                  nombre={membresia.nombre}
                  descripción={membresia.descripcion}
                  precio={membresia.precio}
                  width={"20rem"}
                />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ backgroundColor: "#E1E8E4" }}>
            <TableCell
              style={{
                color: "#665959",
                fontFamily: "Rufina",
                fontSize: "1.2rem",
              }}
            >
              Beneficios
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Lorem Ipsum</TableCell>
            <TableCell
              style={{
                color: "rgba(131, 148, 143, 1)",
                textAlign: "center",
              }}
            >
              <CheckCircle />
            </TableCell>
            <TableCell
              style={{
                color: "rgba(131, 148, 143, 1)",
                textAlign: "center",
              }}
            >
              <CheckCircle />
            </TableCell>
            <TableCell
              style={{
                color: "rgba(131, 148, 143, 1)",
                textAlign: "center",
              }}
            >
              <CheckCircle />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Lorem Ipsum</TableCell>
            <TableCell
              style={{
                color: "rgba(131, 148, 143, 1)",
                textAlign: "center",
              }}
            >
              <CheckCircle />
            </TableCell>
            <TableCell
              style={{
                color: "rgba(131, 148, 143, 1)",
                textAlign: "center",
              }}
            >
              <CheckCircle />
            </TableCell>
            <TableCell
              style={{
                color: "rgba(131, 148, 143, 1)",
                textAlign: "center",
              }}
            >
              <CheckCircle />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Lorem Ipsum</TableCell>
            <TableCell
              style={{
                color: "rgba(131, 148, 143, 1)",
                textAlign: "center",
              }}
            >
              <CheckCircle />
            </TableCell>
            <TableCell
              style={{
                color: "rgba(131, 148, 143, 1)",
                textAlign: "center",
              }}
            >
              <CheckCircle />
            </TableCell>
            <TableCell
              style={{
                color: "rgba(131, 148, 143, 1)",
                textAlign: "center",
              }}
            >
              <CheckCircle />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MembresiasTable;
