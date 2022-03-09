import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { addPopupRoutine } from '../routines/add-popup-routine';
import { FirebaseClient } from '../../../../firestore/firebase-client/firebase-client';
import { listsCollection } from '../../../../firestore/collections/lists-collection';
import { IAddPopup } from '../types/add-popup-types';

function* addPopupWorker(action: PayloadAction<IAddPopup>) {
  const {
    request,
    success,
    failure,
    fulfill,
  } = addPopupRoutine;

  const {
    userId,
    data,
  } = action.payload;

  try {
    const listsRef = listsCollection(userId);

    yield put(request());
    yield call(FirebaseClient.addDocument, listsRef, data);
    yield put(success());
  } catch (error) {
    console.error(error);
    yield put(failure());
  } finally {
    yield put(fulfill());
  }
}

export function* addPopupWatcher() {
  yield takeLatest(addPopupRoutine.TRIGGER, addPopupWorker);
}
