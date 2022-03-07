export interface State {
  isAuth: IUserData;
}

export interface ICredentials {
  email: string;
  password: string;
}

export type IGoogleToken = string | undefined;

export interface IUserData {
  uuid: string;
  name: string;
  email: string;
}
