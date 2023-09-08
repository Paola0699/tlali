import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    selectedCategory: []
  },
  reducers: {
    addSelectedCategory: (state,action) => {
        state.selectedCategory = action.payload
    }
  },
});

export const { addSelectedCategory } = menuSlice.actions;

export default menuSlice.reducer;