import { 
  FC, 
  useEffect,
  useContext, 
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { 
  Props, 
  RegistrationValues, 
} from '../types/registration-form-types';
import { registrationSchema } from '../schemas/registration-form-schema';
import { AuthContext } from '../../../contexts/auth-context/context';
import { FormFooter } from '../../form-footer/component';
import { FormHeader } from '../../form-header/component';
import { FormField } from '../../form-field/components';
import PlusIconSvg from '../../../assets/img/plus.svg';

export const RegistrationForm: FC<Props> = (props) => {
  const { 
    initialValues, 
    data,
    footerData 
  } = props;
  
  const { 
    signUp, 
    isAuth,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleFormSubmit = (values: RegistrationValues) => {
    const {
      email,
      password,
    } = values;

    signUp(email, password);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: handleFormSubmit,
  });

  useEffect(() => {
    if (isAuth.uuid.length) {
      navigate('/protected/all');
    }
  }, [isAuth]);

  return (
    <form
      className="form"
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <FormHeader
        title="Sign Up"
        icon={PlusIconSvg}
      />

      {data.map((field, indx) => (
        <FormField
          key={indx}
          id={field.type}
          type={field.type}
          label={field.label}
          placeholder={field.placeholder}
          formik={formik}
        />
      ))}

      <FormFooter
        text={footerData.text}
        buttonText='Sign Up'
        linkText={footerData.linkText}
        url={footerData.url}
      />
    </form>
  );
};
