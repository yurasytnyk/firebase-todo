import { 
  call, 
  put, 
  takeLatest,
} from 'redux-saga/effects';

import { logout } from '../routines/logout-icon-routine';
import { FirebaseClient } from '../../../../firestore/firebase-client/firebase-client';

function* logoutWorker(): Generator {
  const { 
    success, 
    failure, 
    fulfill,
  } = logout;

  try {
    yield call(FirebaseClient.signOut);
    yield localStorage.removeItem('token');
    yield put(success());
  } catch (error) {
    console.error(error);
    yield put(failure());
  } finally {
    yield put(fulfill());
  }
}

export function* logoutWatcher() {
  yield takeLatest(logout.TRIGGER, logoutWorker);
}