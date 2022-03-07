import { PayloadAction } from '@reduxjs/toolkit';
import { CollectionReference } from 'firebase/firestore';
import { 
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import { listsCollection } from '../../../../firestore/collections/lists-collection';
import { FirebaseClient } from '../../../../firestore/firebase-client/firebase-client';
import { 
  deleteListRoutine, 
  listRoutine, 
} from '../routines/tasks-list-routine';

function* getListsWorker() {
  const {
    success,
    failure,
    fulfill,
  } = listRoutine;
  
  try {
    const tasksList: CollectionReference = yield call(FirebaseClient.getDocuments, listsCollection);
    yield put(success(tasksList));
  } catch (error) {
    console.error(error);
    yield failure();
  } finally {
    yield fulfill();
  }
}

function* deleteListWorker(action: PayloadAction<string>) {
  const {
    failure,
    fulfill,
  } = deleteListRoutine;

  try {
    yield FirebaseClient.deleteDocument(listsCollection, action.payload);
  } catch (error) {
    console.error(error);
    yield failure();
  } finally {
    yield fulfill();
  }
}

export function* getListsWatcher() {
  yield takeLatest(listRoutine.TRIGGER, getListsWorker);
  yield takeLatest(deleteListRoutine.TRIGGER, deleteListWorker);
}
