import { createRoutine } from 'redux-saga-routines';

export const login = createRoutine('auth/login');

export const loginWithGoogle = createRoutine('auth/login-with-google');
