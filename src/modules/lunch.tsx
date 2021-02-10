import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  people: [],
};

const lunchSlice = createSlice({
  name: 'lunch',
  initialState,
  reducers: {},
});

export default lunchSlice.reducer;
