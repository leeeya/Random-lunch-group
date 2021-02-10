import { combineReducers } from '@reduxjs/toolkit';
import lunchReducer from './lunch';

const rootReducer = combineReducers({
  lunchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
