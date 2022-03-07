import { FC } from 'react';

import { 
  Props,
  FormikValues,
} from '../types/field-text-types';
import '../styles/field-text-styles.scss';

export const FieldText: FC<Props> = (props) => {
  const { 
    id,
    formik, 
  } = props;

  const fieldId = id as keyof FormikValues;

  return (
    <>
      {formik.errors && formik.touched[fieldId] && (
        <span className="login__form-text">
          {formik.errors[fieldId]}
        </span>
      )}
    </>
  );
};
