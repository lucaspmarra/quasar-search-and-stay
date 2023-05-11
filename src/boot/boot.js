/* eslint-disable no-unused-vars */
import { boot } from 'quasar/wrappers';
import { useAuthStore } from '../stores/auth-store';

export default boot(async ({router, store}) => {
  const authStore = useAuthStore(store);

  router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
      return {
        path: '/login',
        query: { redirect: to.fullPath },
      };
    }
  });

});
