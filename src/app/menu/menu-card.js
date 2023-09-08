import { Grid, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addSelectedCategory } from '../redux/reducers/menu';

const MenuCard = ({category}) => {
  const dispatch = useDispatch();
  const handleSetSelectedCategory = () => {
    dispatch(addSelectedCategory(category));
  }
  return (
    <Grid item xs={6} md={2} onClick={handleSetSelectedCategory} >
        <Typography color={'white'} variant='h6'>{category.Nombre_categoria}</Typography>
   </Grid>
  )
}

export default MenuCard