import { FormikProps } from 'formik';

interface FormikValues {
  email: string;
  password: string;
}

export interface Props {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  formik: FormikProps<FormikValues>;
}
