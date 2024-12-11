import axios from 'axios';
import { redirect } from 'next/navigation';

const baseURL = `${process.env.NEXT_PUBLIC_SERVER_URL}`;

export const defaultAxios = axios.create({
  baseURL,
  withCredentials: true,
});

let userRole: 'ROLE_CUSTOM' | 'ROLE_NAVER' = 'ROLE_NAVER';

export const setUserRole = (role: 'ROLE_CUSTOM' | 'ROLE_NAVER') => {
  userRole = role;
};

// Request Interceptor
defaultAxios.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
  if (userRole === 'ROLE_CUSTOM' && token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

// Response Interceptor
defaultAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('authToken');
        redirect('/');
      }
    }
    return Promise.reject(error);
  },
);
