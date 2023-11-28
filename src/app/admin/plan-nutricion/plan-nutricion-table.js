import { DataGrid } from '@mui/x-data-grid'
import moment from 'moment';
import React from 'react'

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
    field: "userID",
    headerName: "Usuario",
    width: 250,
  },
]
const PlanNutricionTable = ({data}) => {
  return (
    <DataGrid rows={data} columns={columns}/>
  )
}

export default PlanNutricionTable