import { 
  FC, 
  useContext, 
  useEffect,
} from 'react';
import { 
  FormikValues, 
  useFormik, 
} from 'formik';
import { useNavigate } from 'react-router-dom';

import { Props } from '../types/login-form-types';
import { loginSchema } from '../schemas/login-schema';
import { AuthContext } from '../../../contexts/auth-context/context';
import { FormHeader } from '../../form-header/component';
import { FormFooter } from '../../form-footer/component';
import { FormField } from '../../form-field/components';
import LockIconSvg from '../../../assets/img/lock.svg';

export const LoginForm: FC<Props> = (props) => {
  const { 
    data,
    initialValues,
    footerData, 
  } = props;

  const navigate = useNavigate();

  const {
    signIn,
    isAuth,
  } = useContext(AuthContext);

  const onFormSubmitHandler = (values: FormikValues) => {
    const { 
      email, 
      password, 
    } = values;

    signIn(email, password);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: onFormSubmitHandler,
  });

  useEffect(() => {
    if (isAuth.uuid.length) {
      navigate('/protected/all');
    }
  }, [isAuth]);

  return (
    <form
      onSubmit={formik.handleSubmit}
      autoComplete="off"
      noValidate
      className="form"
    >
      <FormHeader
        title="Sign In"
        icon={LockIconSvg}
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
        buttonText="Sign In"
        linkText={footerData.linkText}
        url={footerData.url}
      /> 
    </form>
  );
};
