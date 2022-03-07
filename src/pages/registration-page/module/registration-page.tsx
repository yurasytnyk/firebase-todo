import { FC } from 'react';

import { RegistrationForm } from '../../../components/registration-form/component';
import {
  initialValues,
  registrationFormData,
  registrationFormFooterData,
} from '../../../components/registration-form/mocks/registration-form-mock';

export const RegistrationPage: FC = () => {
  return (
    <RegistrationForm
      initialValues={initialValues}
      data={registrationFormData}
      footerData={registrationFormFooterData}
    />
  );
};
