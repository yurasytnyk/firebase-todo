import { createContext } from 'react';

import { IUserData } from '../../../store/features/login-form/types/login-form-types';

interface AuthContextType {
  isAuth: IUserData;
  signIn: (email: string, password: string) => void;
  signUp: (email: string, password: string) => void;
  signInWithGoogle: () => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);
