import { combineReducers } from '@reduxjs/toolkit';
import people from './people';

const rootReducer = combineReducers({
  people,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
