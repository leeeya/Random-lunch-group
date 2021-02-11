import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../utils/api';
import { Person } from '../types';

interface PeopleInitState {
  people: Person[];
  loading: string;
  error: Error | null;
}

const initialState: PeopleInitState = {
  people: [],
  loading: 'idle',
  error: null,
};

export const createPerson = createAsyncThunk(
  'people/createPerson',
  async (name: string, { rejectWithValue }) => {
    try {
      const { data } = await api.createPerson(name);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    // getPeople: (state, { payload }: PayloadAction<Person[]>) => {
    //   state.people = payload;
    //   state.loading = 'idle';
    // },
    // addPerson: (state, { payload }: PayloadAction<Person>) => {
    //   state.people = [...state.people, payload];
    //   state.loading = 'idle';
    // },
    // deletePerson: (state, action) => {
    //   state.people = state.people.filter(person => person !== action.payload);
    //   state.loading = 'idle';
    // }
  },
  extraReducers: builder => {
    builder.addCase(createPerson.pending, (state, { payload }) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    });
    builder.addCase(createPerson.fulfilled, (state, { payload }: PayloadAction<Person>) => {
      state.loading = 'idle';
      state.people.push(payload);
    });
    builder.addCase(createPerson.rejected, (state, { payload }) => {
      state.loading = 'idle';
      state.error = Error('create failed');
    });
  }
});

export default peopleSlice.reducer;
