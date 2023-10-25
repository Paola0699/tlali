import { putChefRequest } from "@/services/chefServices";
import { Chip, Menu, MenuItem } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import PopupState, { bindMenu, bindTrigger } from "material-ui-popup-state";
import moment from "moment";
import React, { Fragment } from "react";

const ChefTable = ({ data }) => {
  const handleEditRequest = async (requestId, requestData) => {
    await putChefRequest(requestId, requestData);
  };
  const columns = [
    {
      field: "requestDate",
      headerName: "Fecha de solicitud",
      valueGetter: (params) => {
        return moment
          .unix(params.row.requestDate.seconds)
          .format("DD MMMM YYYY");
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
      renderCell: (params) =>
        params.row.status === "Pendiente de confirmar" ? (
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <Fragment>
                <Chip
                  {...bindTrigger(popupState)}
                  size="small"
                  label={params.row.status}
                  color={
                    params.row.status === "Pendiente de confirmar"
                      ? "primary"
                      : params.row.status === "Cancelado"
                      ? "error"
                      : "success"
                  }
                />
                <Menu {...bindMenu(popupState)}>
                  <MenuItem
                    onClick={() =>
                      handleEditRequest(params.row.id, { status: "Cancelado" })
                    }
                  >
                    Cancelar Solicitud
                  </MenuItem>
                  <MenuItem
                    onClick={() =>
                      handleEditRequest(params.row.id, { status: "Aprobado" })
                    }
                  >
                    Aprobar Solicitud
                  </MenuItem>
                </Menu>
              </Fragment>
            )}
          </PopupState>
        ) : (
          <Chip
            size="small"
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
  return <DataGrid rows={data} columns={columns} />;
};

export default ChefTable;
