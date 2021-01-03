import { request } from '../request';

export const login = (name) => request.post('/auth/login', { name });
