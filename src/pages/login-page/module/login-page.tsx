import { FC } from 'react';

import { LoginForm } from '../../../components/login-form/component';
import { 
  loginFormData, 
  loginFormFooterData,
  initialValues,
} from '../../../components/login-form/mocks/login-form-mocks';

export const LoginPage: FC = () => {
  return (
    <LoginForm 
      data={loginFormData}
      initialValues={initialValues}
      footerData={loginFormFooterData} 
    />
  );
};
