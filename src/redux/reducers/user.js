import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: {},
    selectedSubscription: {}
  },
  reducers: {
    addUserData: (state,action) => {
        state.userData = action.payload
    },
    resetUserData: (state) => {
      state.userData = {}
    },
    addSelectedSubcription: (state, action) => {
      state.selectedSubscription = action.payload
    },
    resetSelectedSubcription: (state) => {
      state.selectedSubscription = {}
    }
  },
});

export const { addUserData, resetUserData, addSelectedSubcription, resetSelectedSubcription } = userSlice.actions;

export default userSlice.reducer;