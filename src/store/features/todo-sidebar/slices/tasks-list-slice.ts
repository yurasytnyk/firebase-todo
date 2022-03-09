import { 
  createSlice, 
  PayloadAction,
} from '@reduxjs/toolkit';

import { IListsCollection } from '../../../../firestore/types/lists-collection-types';
import { listRoutine } from '../routines/tasks-list-routine';
import { IListsState } from '../types/todo-sidebar-types';

const initialState: IListsState = {
  data: [],
  filteredData: [],
};

const tasksListSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    updateLists(state, action: PayloadAction<IListsCollection[]>) {
      state.data = action.payload;
    },
    setFilteredLists(state, action: PayloadAction<IListsCollection[]>) {
      state.filteredData = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(listRoutine.SUCCESS, (state, action: PayloadAction<IListsCollection[]>) => {
        state.data = action.payload;
      })
  },
});

export const { 
  updateLists, 
  setFilteredLists,
} = tasksListSlice.actions;

export default tasksListSlice.reducer;
