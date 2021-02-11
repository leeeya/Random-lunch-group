import { combineReducers } from '@reduxjs/toolkit';
import peopleReducer from './people';

const rootReducer = combineReducers({
  peopleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
