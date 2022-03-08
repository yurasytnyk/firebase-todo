import { PayloadAction } from '@reduxjs/toolkit';
import { arrayRemove, doc, updateDoc } from 'firebase/firestore';
import {
  put,
  takeLatest,
} from 'redux-saga/effects';

import { FirebaseClient } from '../../../../firestore/firebase-client/firebase-client';
import { deleteTaskRoutine } from '../routines/tasks-items-routine';

function* tasksWorker(action: PayloadAction<{ userId: string; list: string; task: number; }>) {
  const {
    failure,
    fulfill,
  } = deleteTaskRoutine;

  const {
    userId,
    list,
    task,
  } = action.payload;

  try {
    yield updateDoc(doc(FirebaseClient.db, 'users', `${userId}`, 'lists', `${list}`), {
      tasks: arrayRemove(task),
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
