import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MenuCard from './menu-card';
import { useSelector } from 'react-redux';

const MenuDrawerContainer = () => {
    const {selectedMainCategory} = useSelector((state) => state.menu)
    const [categories, setCategories] = useState([]);

    const handleGetCategories = async() => {
        try{
            const response = await fetch('/json/categorias.json');
            const data = await response.json();
            const filteredCategories = data.filter(category => category.Categoria === selectedMainCategory.Nombre_categoria);
            setCategories(filteredCategories);
        } catch(error){
            console.error('Error al cargar el archivo JSON:', error);
        }
    }
    useEffect(() => {
        handleGetCategories();
    }, []);

  return (
   <Grid container spacing={3} padding={5} direction={'column'} style={{backgroundColor: '#A9BDB1'}}>
        <Grid item>
            <Typography variant='h3' color={'white'}>{selectedMainCategory.Nombre_categoria}</Typography>
        </Grid>
        <Grid item>
            <Grid container spacing={3}>
                {categories && categories.map((category) => (
                    <MenuCard key={category.Nombre_categoria} category={category} />
                ))}
            </Grid>
        </Grid>
   </Grid>
  )
}

export default MenuDrawerContainer