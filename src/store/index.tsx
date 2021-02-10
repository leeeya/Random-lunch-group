import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const middlewares : any = [];

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});

export type AppDispatch = typeof store.dispatch;

export default store;
