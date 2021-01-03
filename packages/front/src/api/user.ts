import { request } from '../request';

export const fetchUser = () => request.get('/user');
