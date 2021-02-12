import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../utils/api';
import { Person, PeopleInitState } from '../types';
import { THUNK_TYPE, NAME, STATE, MESSAGE } from '../constants';

const initialState: PeopleInitState = {
  people: [],
  loading: 'idle',
  groupingInputValues: {
    groupSize: 0,
    minMemberSize: 0,
  },
  randomGroupList: [],
  error: null,
};

export const getPeople = createAsyncThunk(
  THUNK_TYPE.GET_PEOPLE,
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
  THUNK_TYPE.CREATE_PERSON,
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
  THUNK_TYPE.DELETE_PERSON,
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
  name: NAME.PEOPLE,
  initialState,
  reducers: {
    setGroupingInputValues: (state, action) => {
      state.groupingInputValues = action.payload;
    },
    setRandomGroupList: (state, action) => {
      state.randomGroupList = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getPeople.pending, state => {
      if (state.loading === STATE.IDLE) {
        state.loading = STATE.PENDING;
      }
    });
    builder.addCase(getPeople.fulfilled, (state, { payload }: PayloadAction<Person[]>) => {
      state.loading = STATE.IDLE;
      state.people = payload;
    });
    builder.addCase(getPeople.rejected, state => {
      state.loading = STATE.IDLE;
      state.error = Error(MESSAGE.GET_PEOPLE_FAILED);
    });
    builder.addCase(createPerson.pending, state => {
      if (state.loading === STATE.IDLE) {
        state.loading = STATE.PENDING;
      }
    });
    builder.addCase(createPerson.fulfilled, (state, { payload }: PayloadAction<Person>) => {
      state.loading = STATE.IDLE;
      state.people.push(payload);
    });
    builder.addCase(createPerson.rejected, state => {
      state.loading = STATE.IDLE;
      state.error = Error(MESSAGE.CREATE_PERSON_FAILED);
    });
    builder.addCase(deletePerson.pending, state => {
      if (state.loading === STATE.IDLE) {
        state.loading = STATE.PENDING;
      }
    });
    builder.addCase(deletePerson.fulfilled, (state, { payload }: PayloadAction<Person>) => {
      state.loading = STATE.IDLE;
      state.people = state.people.filter(person => person._id !== payload._id);
    });
    builder.addCase(deletePerson.rejected, state => {
      state.loading = STATE.IDLE;
      state.error = Error(MESSAGE.DELETE_PERSON_FAILED);
    });
  },
});

export const { setGroupingInputValues, setRandomGroupList } = peopleSlice.actions;
export default peopleSlice.reducer;
