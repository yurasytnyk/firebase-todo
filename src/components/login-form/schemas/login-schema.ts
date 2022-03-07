import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Provide valid email')
    .required('Email is required field'),
  password: yup
    .string()
    .required('Password is required field')
    .min(4, 'Password is too short')
    .max(15, 'Password is too long'),
});
