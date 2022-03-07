import { ILoginData } from '../types/login-form-types';

export const initialValues = {
  email: '',
  password: '',
};

export const loginFormData: ILoginData[] = [
  {
    id: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter valid email',
  },
  {
    id: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Enter valid password',
  },
];

export const loginFormFooterData = {
  text: 'Don\'t have an account?',
  linkText: 'Sign Up',
  url: '/registration',
};
