import { boot } from 'quasar/wrappers';
import axios from 'axios';

const api = axios.create({ baseURL: 'https://sys-dev.searchandstay.com/api/admin/house_rules' });

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;


});

export { api };
