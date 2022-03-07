import { combineReducers } from '@reduxjs/toolkit';

import { authReducer } from '../features/login-form/reducers/login-form-reducer';
import { colorsReducer } from '../features/todo-sidebar/reducers/colors-reducer';
import { tasksListReducer } from '../features/todo-sidebar/reducers/tasks-list-reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  colors: colorsReducer,
  lists: tasksListReducer,
});
