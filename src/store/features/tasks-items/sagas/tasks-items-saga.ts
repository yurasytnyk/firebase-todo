import { PayloadAction } from '@reduxjs/toolkit';
import { arrayRemove, doc, updateDoc } from 'firebase/firestore';
import {
  put,
  takeLatest,
} from 'redux-saga/effects';

import { FirebaseClient } from '../../../../firestore/firebase-client/firebase-client';
import { deleteTaskRoutine } from '../routines/tasks-items-routine';

function* tasksWorker(action: PayloadAction<{ list: string; task: number; }>) {
  const {
    failure,
    fulfill,
  } = deleteTaskRoutine;

  try {
    yield updateDoc(doc(FirebaseClient.db, 'lists', action.payload.list), {
      tasks: arrayRemove(action.payload.task),
    });
  } catch (error) {
    console.error(error);
    yield put(failure());
  } finally {
    yield put(fulfill());
  }
}

export function* tasksWatcher() {
  yield takeLatest(deleteTaskRoutine.TRIGGER, tasksWorker);
}
