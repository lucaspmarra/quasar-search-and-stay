import { store } from 'quasar/wrappers';
import { createPinia } from 'pinia';
import { markRaw } from 'vue';
import { router } from '../router/routes';


export default store(({store}) => {
  const pinia = createPinia();
  store.router = markRaw(router);
  return pinia;
});
