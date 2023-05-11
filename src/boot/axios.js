import { boot } from 'quasar/wrappers';
import axios from 'axios';
import { useAuthStore } from '../stores/auth-store';

const api = axios.create({ baseURL: 'https://sys-dev.searchandstay.com/api' });

api.interceptors.request.use((config) => {
  const token = useAuthStore.getters.token;
  console.log('Interceptor - Token:', token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } 
  return config;
});

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api };
