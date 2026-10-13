// Axios Instance with request/response interceptors in TypeScript
import axios from 'axios';

const BASE_URL: string = import.meta.env.VITE_API_BASE_URL || 'https://api.arglobalinstitute.com/v1';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('ar_auth_token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('ar_auth_token');
    }
    return Promise.reject(error);
  }
);

export const mockDelay = (ms: number = 450): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default axiosInstance;
