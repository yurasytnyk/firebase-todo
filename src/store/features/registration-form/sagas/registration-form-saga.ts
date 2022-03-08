import { 
  call, 
  put, 
  takeLatest,
} from 'redux-saga/effects';
import { 
  addDoc, 
  collection, 
} from 'firebase/firestore';

import { registration } from '../routines/registration-form-routine';
import { IRegistrationCredentials } from '../types/registration-form-types';
import { FirebaseClient } from '../../../../firestore/firebase-client/firebase-client';
import { PayloadAction } from '@reduxjs/toolkit';
import { UserCredential } from 'firebase/auth';

function* registrationWorker(action: PayloadAction<IRegistrationCredentials>) {
  const { 
    success, 
    failure,
    fulfill, 
  } = registration;

  try {
    const {
      email,
      password,
    } = action.payload;
    const response: UserCredential = yield call(FirebaseClient.signUp, email, password);
    const userRef = collection(FirebaseClient.db, 'users', `${response.user.uid}`, 'lists');
    yield addDoc(userRef, {});

    yield localStorage.setItem('token', JSON.stringify(response.user.refreshToken));
    yield put(success());
  } catch (error) {
    console.error(error);
    yield put(failure());
  } finally {
    yield put(fulfill());
  }
}

export function* registrationWatcher() {
  yield takeLatest(registration.TRIGGER, registrationWorker);
}
