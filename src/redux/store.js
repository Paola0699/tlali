import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage'; // You can choose the storage engine you prefer (local storage, AsyncStorage, etc.)
import rootReducer from './reducers/rootReducer';

const persistConfig = {
  key: 'root', // the key in local storage where your persisted state will be stored
  storage,
  whitelist: ['user'], // an array of the reducers you want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});
const persistor = persistStore(store);
export { store, persistor };
