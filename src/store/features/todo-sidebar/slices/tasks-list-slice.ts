import { 
  createSlice, 
  PayloadAction,
} from '@reduxjs/toolkit';

import { IListsCollection } from '../../../../firestore/types/lists-collection-types';
import { listRoutine } from '../routines/tasks-list-routine';
import { IListsState } from '../types/todo-sidebar-types';

const initialState: IListsState = {
  data: [],
};

const tasksListSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {
    updateLists(state, action: PayloadAction<IListsCollection[]>) {
      state.data = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(listRoutine.SUCCESS, (state, action: PayloadAction<IListsCollection[]>) => {
        state.data = action.payload;
      })
  },
});

export const { updateLists } = tasksListSlice.actions;

export default tasksListSlice.reducer;
