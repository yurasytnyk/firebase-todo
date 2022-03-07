import { 
  createSlice, 
  PayloadAction, 
} from '@reduxjs/toolkit';
import { 
  State, IUserData,
} from '../types/login-form-types';

const initialState: State = {
  isAuth: {
    uuid: '',
    name: '',
    email: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUserData>) {
      state.isAuth = action.payload;
    }
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
