import { createRoutine } from "redux-saga-routines";

export const listRoutine = createRoutine('lists');

export const deleteListRoutine = createRoutine('lists/delete-list');
