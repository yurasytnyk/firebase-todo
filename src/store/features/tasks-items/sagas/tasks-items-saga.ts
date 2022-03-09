import { PayloadAction } from '@reduxjs/toolkit';
import { arrayRemove } from 'firebase/firestore';
import {
  put,
  takeLatest,
} from 'redux-saga/effects';

import { FirebaseClient } from '../../../../firestore/firebase-client/firebase-client';
import { deleteTaskRoutine } from '../routines/tasks-items-routine';
import { ITaskWorkerPayload } from '../types/tasks-items-types';

function* tasksWorker(action: PayloadAction<ITaskWorkerPayload>) {
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
    yield FirebaseClient.updateDocument(`users/${userId}/lists/${list}`, {
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
