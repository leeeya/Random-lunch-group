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

export const getPeople = createAsyncThunk(
  'people/getPeople',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.getPeople();

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

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

export const deletePerson = createAsyncThunk(
  'people/deletePerson',
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await api.deletePerson(id);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPeople.fulfilled, (state, { payload }: PayloadAction<Person[]>) => {
      state.loading = 'idle';
      state.people = payload;
    });
    builder.addCase(getPeople.rejected, (state, { payload }) => {
      state.loading = 'idle';
      state.error = Error('get people failed');
    });
    builder.addCase(getPeople.pending, (state, { payload }) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    });
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
      state.error = Error('create person failed');
    });
    builder.addCase(deletePerson.pending, (state, { payload }) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    });
    builder.addCase(deletePerson.fulfilled, (state, { payload }: PayloadAction<Person>) => {
      state.loading = 'idle';
      state.people = state.people.filter(person => person._id !== payload._id);
    });
    builder.addCase(deletePerson.rejected, (state, { payload }) => {
      state.loading = 'idle';
      state.error = Error('delete person failed');
    });
  }
});

export default peopleSlice.reducer;
