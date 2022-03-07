import { FC } from 'react';

import { Props } from '../types/form-field-types';
import { FieldText } from '../../field-text/component';
import '../styles/form-field-styles.scss';

export const FormField: FC<Props> = (props) => {
  const { 
    id, 
    formik,
    ...rest
  } = props;

  return (
    <>
      <div className="login__form-field">
        <input
          id={id}
          className="login__form-input"
          {...formik.getFieldProps(id)}
          {...rest}
        />
      </div>

      <FieldText 
        id={id}
        formik={formik}
      />
    </>
  );
};
