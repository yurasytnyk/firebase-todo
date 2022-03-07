import { FormikProps } from 'formik';

export interface FormikValues {
  email: string;
  password: string;
}

export interface Props {
  id: string;
  formik: FormikProps<FormikValues>;
}
