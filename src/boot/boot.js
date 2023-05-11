/* eslint-disable no-unused-vars */
import { boot } from 'quasar/wrappers';
import { useAuthStore } from '../stores/auth-store';

export default boot(async ({router, store}) => {
  const authStore = useAuthStore(store);

  router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !authStore.isLoggedIn) {
      return {
        path: '/login',
        query: { redirect: to.fullPath },
      };
    }
  });

/*   router.beforeEach((to, from, next) =>{
    if( to.name !== 'Login' && !authStore.isLoggedIn) next({name: 'Login'});
    else next();
  }); */
});
