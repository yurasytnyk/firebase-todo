export interface Props {
  data: ILoginData[];
  initialValues: {
    email: string;
    password: string;
  };
  footerData: ILoginFormFooterData;
}

export interface ILoginData {
  id: string;
  type: string;
  label: string;
  placeholder: string;
}

export interface ILoginFormFooterData {
  text: string;
  linkText: string;
  url: string;
  signInWithGoogle?: () => void;
}
