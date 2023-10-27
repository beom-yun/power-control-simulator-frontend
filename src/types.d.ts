export interface IUser {
  id: number;
  last_login: string;
  username: string;
  email: string;
  name: string;
  avatar: string;
}

export interface ILogInVariables {
  username: string;
  password: string;
}
