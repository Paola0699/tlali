import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './reducers/menu';
import blogReducer from './reducers/blog';

const store = configureStore({
  reducer: {
    menu: menuReducer,
    blog: blogReducer
  },
});

export default store;