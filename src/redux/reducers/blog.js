import { createSlice } from '@reduxjs/toolkit';

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    selectedPost: {}
  },
  reducers: {
    addSelectedPost: (state,action) => {
        state.selectedPost = action.payload
    },
    resetSelectedPost: (state) => {
      state.selectedPost = {}
    }
  },
});

export const { addSelectedPost, resetSelectedPost } = blogSlice.actions;

export default blogSlice.reducer;