export interface RegistrationValues {
  email: string;
  password: string;
}

export interface Props {
  initialValues: RegistrationValues;
  data: IRegistrationData[];
  footerData: IRegistrationFormFooterData;
}

export interface IRegistrationData {
  id: string;
  type: string;
  label: string;
  placeholder: string;
}

export interface IRegistrationFormFooterData {
  text: string;
  linkText: string;
  url: string;
}
