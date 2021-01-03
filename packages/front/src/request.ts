import axios from 'axios';
import { history } from '../index';

export const request = axios.create({
  baseURL: '/api',
});

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response.status === 403) {
      history.push('/login?status=403');
    }
  },
);
