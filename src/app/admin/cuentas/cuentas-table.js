import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
const columns = [
    {
        field: "id",
        headerName: "ID Cienta",
        width: 250,
      },
    {
        field: "name",
        headerName: "Nombre",
        width: 250,
      },
]
const CuentasTable = ({data, loading}) => {
  return (
    <DataGrid columns={columns} rows={data} loading={loading}/>
  )
}

export default CuentasTable