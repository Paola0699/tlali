import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import CurrencyFormat from 'react-currency-format'

const MenuItem = ({item}) => {
    const rowSize = item.Precio_paquete  ? 6 : ( item.Precio_jarra || item.Precio_frio)  ? 8 :  10
    const rowSizeResponsive = item.Precio_paquete  ? 12 : ( item.Precio_jarra || item.Precio_frio)  ? 8 :  10
    const rowSizeResponsiveSmall = item.Precio_paquete  ? 4 : ( item.Precio_jarra || item.Precio_frio) ? 2 :  2

  return (
        <Card sx={{ width: 500 }} elevation={0}>
            <CardContent>
                <Grid container>
                    <Grid item md={rowSize} xs={rowSizeResponsive}>
                        <Typography color={'#665959'} fontSize={20}>{item.Platillo}</Typography>
                        <Typography color={'#665959'}>{item.Descripcion}</Typography>
                    </Grid>
                    <Grid item md={2} xs={rowSizeResponsiveSmall} >
                         {item.Precio_frio && <Typography color={'#665959'} variant='caption'>Caliente</Typography>}
                        {item.Precio_jarra && <Typography color={'#665959'} variant='caption'>Vaso</Typography>}
                        {item.Precio_paquete && <Typography color={'#665959'} variant='caption'>Sencillo</Typography>}
                        <Typography color={'#83948F'} fontSize={18}><CurrencyFormat value={item.Precio} displayType={'text'} thousandSeparator={true} prefix={'$'}/></Typography>
                    </Grid>
                    {item.Precio_paquete &&
                      <Grid item xs={rowSizeResponsiveSmall} md={2}>
                        <Typography color={'#665959'} variant='caption'>Paquete</Typography>
                        <Typography color={'#83948F'} fontSize={18}><CurrencyFormat value={item.Precio_paquete} displayType={'text'} thousandSeparator={true} prefix={'$'}/></Typography>
                      </Grid>
                    }
                    {item.Precio_jarra  &&
                    <Grid item xs={rowSizeResponsiveSmall} md={2}>
                        <Typography color={'#665959'} variant='caption'>Jarra</Typography>
                        <Typography color={'#83948F'} fontSize={18}><CurrencyFormat value={item.Precio_jarra} displayType={'text'} thousandSeparator={true} prefix={'$'}/></Typography>
                    </Grid>
                    }
                     {item.Precio_frio  &&
                    <Grid item xs={rowSizeResponsiveSmall} md={2}>
                        <Typography color={'#665959'} variant='caption'>Frío</Typography>
                        <Typography color={'#83948F'} fontSize={18}><CurrencyFormat value={item.Precio_frio} displayType={'text'} thousandSeparator={true} prefix={'$'}/></Typography>
                    </Grid>
                    }
                    {item.Precio_paquete_premium &&
                        <Grid item xs={rowSizeResponsiveSmall} md={2}>
                            <Typography color={'#665959'} variant='caption'>Premium</Typography>
                            <Typography color={'#83948F'} fontSize={18}><CurrencyFormat value={item.Precio_paquete_premium} displayType={'text'} thousandSeparator={true} prefix={'$'}/></Typography>
                        </Grid>
                    }
                </Grid>
            </CardContent>
        </Card>
  )
}

export default MenuItem