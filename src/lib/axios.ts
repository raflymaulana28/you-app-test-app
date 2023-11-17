import axios from 'axios';

import { baseURL } from '@/constant/env';

// const tokenSession = window.localStorage.getItem('token_session');

const axiosInstance = axios.create({
  baseURL: baseURL,
  // timeout: 5000, // Timeout untuk permintaan dalam milidetik
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': 'https://techtest.youapp.ai',
  },
});
axiosInstance.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem('token_session');
    if (token) {
      config.headers['x-access-token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axiosInstance;
