import { all } from 'redux-saga/effects';

import { getColorsWatcher } from '../features/todo-sidebar/sagas';
import { getListsWatcher } from '../features/todo-sidebar/sagas/lists-saga';
import { tasksWatcher } from '../features/tasks-items/sagas';
import { loginWatcher } from '../features/login-form/sagas';
import { registrationWatcher } from '../features/registration-form/sagas/registration-form-saga';
import { logoutWatcher } from '../features/logout-icon/sagas';
import { addPopupWatcher } from '../features/add-popup/sagas';

export function* rootSaga() {
  yield all([
    getColorsWatcher(),
    getListsWatcher(),
    tasksWatcher(),
    loginWatcher(),
    logoutWatcher(),
    registrationWatcher(),
    addPopupWatcher(),
  ]);
}
