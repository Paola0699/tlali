import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    selectedCategory:  {
      Nombre_categoria: "Platillos Insignia",
      Descripcion: "Si es tu primera vez en Tlali, conócenos con nuestros platillos insignia.",
      Icono: "",
      API: "/json/insignia.json",
      Categoria: "Platillos Insignia"
    },
    selectedMainCategory: {},

  },
  reducers: {
    addSelectedCategory: (state,action) => {
        state.selectedCategory = action.payload
    },
    addSelectedMainCategory: (state,action) => {
        state.selectedMainCategory = action.payload
    }
  },
});

export const { addSelectedCategory, addSelectedMainCategory } = menuSlice.actions;

export default menuSlice.reducer;