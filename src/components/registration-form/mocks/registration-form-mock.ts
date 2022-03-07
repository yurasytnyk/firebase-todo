import { IRegistrationData } from '../types/registration-form-types';

export const registrationFormData: IRegistrationData[] = [
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

export const registrationFormFooterData = {
  text: 'Already have an account?',
  linkText: 'Sign In',
  url: '/login',
};

export const initialValues = {
  email: '',
  password: '',
};
