import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './reducers/menu';

const store = configureStore({
  reducer: {
    menu: menuReducer
  },
});

export default store;