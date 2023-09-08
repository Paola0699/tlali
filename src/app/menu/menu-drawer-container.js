import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MenuCard from './menu-card';

const MenuDrawerContainer = () => {
    const [categories, setCategories] = useState([]);
    const handleGetCategories = async() => {
        try{
            const response = await fetch('/json/categorias.json');
            const data = await response.json();
            setCategories(data);
        } catch(error){
            console.error('Error al cargar el archivo JSON:', error);
        }
    }
    useEffect(() => {
        handleGetCategories();
    }, []);
  return (
   <Grid container spacing={3} padding={5}>
    {categories && categories.map((category) => (
        <MenuCard key={category.Nombre_categoria} category={category}/>
    ))}
   </Grid>
  )
}

export default MenuDrawerContainer