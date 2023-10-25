import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    selectedUser: {}
  },
  reducers: {
    addSelectedUser: (state,action) => {
        state.selectedUser = action.payload
    },
    resetSelectedUser: (state) => {
      state.selectedUser = {}
    },
  },
});

export const { addSelectedUser, resetSelectedUser} = usersSlice.actions;

export default usersSlice.reducer;