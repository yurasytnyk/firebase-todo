import { 
  createSlice, 
  PayloadAction, 
} from '@reduxjs/toolkit';
import { IColors } from '../../../../components/add-popup/types/add-popup-types';
import { colorsRoutine } from '../routines/colors-routine';

import { IColorsState } from '../types/todo-sidebar-types';

const initialState: IColorsState = {
  data: [],
};

const colorsSlice = createSlice({
  name: 'colors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(colorsRoutine.SUCCESS, (state, action: PayloadAction<IColors[]>) => {
        state.data = action.payload;
      });
  },
});

export default colorsSlice.reducer;
