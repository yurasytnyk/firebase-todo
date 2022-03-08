import { PayloadAction } from '@reduxjs/toolkit';
import { CollectionReference } from 'firebase/firestore';
import { 
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import { FirebaseClient } from '../../../../firestore/firebase-client/firebase-client';
import { IListsCollection } from '../../../../firestore/types/lists-collection-types';
import { 
  deleteListRoutine, 
  listRoutine, 
} from '../routines/tasks-list-routine';
import { IPayloadIds } from '../types/todo-sidebar-types';

function* getListsWorker(action: PayloadAction<string>) {
  const {
    success,
    failure,
    fulfill,
  } = listRoutine;
  
  try {
    const listsCollection = FirebaseClient.createCollection<IListsCollection>(`users/${action.payload}/lists`);
    const tasksList: CollectionReference = yield call(FirebaseClient.getDocuments, listsCollection);

    yield put(success(tasksList));
  } catch (error) {
    console.error(error);
    yield failure();
  } finally {
    yield fulfill();
  }
}

function* deleteListWorker(action: PayloadAction<IPayloadIds>) {
  const {
    failure,
    fulfill,
  } = deleteListRoutine;

  const { 
    userId,
    listId,
  } = action.payload;

  try {
    const listsCollection = FirebaseClient.createCollection<IListsCollection>(`users/${userId}/lists`);

    yield FirebaseClient.deleteDocument(listsCollection, listId);
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
