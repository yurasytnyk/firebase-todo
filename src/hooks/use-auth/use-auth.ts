import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { useAppDispatch } from '../../store/hooks/use-dispatch/use-dispatch';
import { useAppSelector } from '../../store/hooks/use-app-selector/use-app-selector';
import { 
  login,
  loginWithGoogle,
} from '../../store/features/login-form/routines/login-form-routine';
import { logout } from '../../store/features/logout-icon/routines/logout-icon-routine';
import { registration } from '../../store/features/registration-form/routines/registration-form-routine';
import { FirebaseClient } from '../../firestore/firebase-client/firebase-client';
import { setUser } from '../../store/features/login-form/slices/login-form-slice';

export const useAuth = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const dispatch = useAppDispatch();
  
  const signIn = (email: string, password: string) => {
    dispatch(
      login({ email, password })
    );
  };

  const signInWithGoogle = () => {
    dispatch(
      loginWithGoogle()
    );
  };

  const signUp = (email: string, password: string) => {
    dispatch(registration({ email, password }));
  };

  const signOut = () => {
    dispatch(logout());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FirebaseClient.auth, (user) => {
      if (user) {
        const userData = {
          uuid: user.uid ? user.uid : '',
          name: user.displayName ? user.displayName : '',
          email: user.email ? user.email : '',
        };

        dispatch(setUser(userData));
      } else {
        dispatch(setUser({
          uuid: '',
          name: '',
          email: '',
        }));
      }
    });

    return () => unsubscribe();
  }, []);
  
  return {
    isAuth,
    signIn,
    signUp,
    signInWithGoogle,
    signOut,
  };
};
