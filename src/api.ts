import axios from 'axios';
import Cookie from 'js-cookie';
import { ILogInVariables } from './types';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1/',
  withCredentials: true,
});

export const getMe = () => instance.get('users/me/').then(response => response.data);

export const logIn = ({ username, password }: ILogInVariables) =>
  instance
    .post('users/log-in/', { username, password }, { headers: { 'X-CSRFToken': Cookie.get('csrftoken') || '' } })
    .then(response => response.data);

export const logOut = () =>
  instance
    .post('users/log-out/', null, { headers: { 'X-CSRFToken': Cookie.get('csrftoken') || '' } })
    .then(response => response.data);
