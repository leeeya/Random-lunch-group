import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const middlewares = [ ReduxThunk ];

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger();

  middlewares.push(logger);
}

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
  devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;

export default store;
