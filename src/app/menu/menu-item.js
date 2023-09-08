import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import CurrencyFormat from 'react-currency-format'

const MenuItem = ({item}) => {
  return (
        <Card sx={{ width: 500 }} elevation={0}>
            <CardContent>
                <Grid container>
                    <Grid item xs={10}>
                        <Typography color={'#665959'} fontSize={20}>{item.Platillo}</Typography>
                        <Typography color={'#665959'}>{item.Descripcion}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography color={'#83948F'} fontSize={18}><CurrencyFormat value={item.Precio} displayType={'text'} thousandSeparator={true} prefix={'$'}/></Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
  )
}

export default MenuItem