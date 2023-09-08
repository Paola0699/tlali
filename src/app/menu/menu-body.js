import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MenuItem from './menu-item';

const MenuBody = ({fontSize}) => {
  const {selectedCategory} = useSelector(state=>state.menu);
  const [menuItems, setMenuItems] = useState([]);

  const handleGetMenuItems = async(url) => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        setMenuItems(data);
    } catch(error){
        console.error('Error al cargar el archivo JSON:', error);
    }
    }
  useEffect(()=>{
    handleGetMenuItems(selectedCategory.API)
  },[selectedCategory])

  return (
    <>
        <Typography variant='h2' color={'#83948F'}>{selectedCategory.Nombre_categoria}</Typography>
        {selectedCategory.Descripcion && <Typography variant={fontSize} color={'#83948F'}>{selectedCategory.Descripcion}</Typography> }
        <Grid container marginTop={3}>
            {menuItems && menuItems.map((menuItem)=>(
                <MenuItem item={menuItem} key={menuItem.Platillo}/>
            ))}
        </Grid>
    </>
  )
}

export default MenuBody