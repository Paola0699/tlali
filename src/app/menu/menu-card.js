import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addSelectedCategory } from '../redux/reducers/menu';

const MenuCard = ({category}) => {
  const dispatch = useDispatch();
  const handleSetSelectedCategory = () => {
    dispatch(addSelectedCategory(category));
  }
  return (
    <Grid item xs={2}>
        <Card onClick={handleSetSelectedCategory}>
            <CardContent>
                <Typography>{category.Nombre_categoria}</Typography>
            </CardContent>
        </Card>
   </Grid>
  )
}

export default MenuCard