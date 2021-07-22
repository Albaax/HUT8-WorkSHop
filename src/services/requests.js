import api from './api';

export const getUser = () => api.get('/user');
export const getCourses = () => api.get('/courses');

