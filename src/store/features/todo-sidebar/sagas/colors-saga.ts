import { CollectionReference } from 'firebase/firestore';
import { 
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import { colorsCollection } from '../../../../firestore/collections/colors-collection';
import { FirebaseClient } from '../../../../firestore/firebase-client/firebase-client';
import { colorsRoutine } from '../routines/colors-routine';

function* getColorsWorker() {
  const {
    success,
    failure,
    fulfill,
  } = colorsRoutine;
  
  try {
    const colors: CollectionReference = yield call(FirebaseClient.getDocuments, colorsCollection);
    yield put(success(colors));
  } catch (error) {
    console.error(error);
    yield failure();
  } finally {
    yield fulfill();
  }
}

export function* getColorsWatcher() {
  yield takeLatest(colorsRoutine.TRIGGER, getColorsWorker);
}
