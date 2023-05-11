import { defineStore } from 'pinia';


export const useAuthStore = defineStore('auth', {
  state:()=>({
    token: localStorage.getItem('getToken') || null,
    loading: false
  }),
  getters: {
    isLoggedIn: (state) => state.token !== null,
    isLoading: (state) => state.loading
  },
  actions: {
    setToken(getToken) {
      this.token = getToken;
      localStorage.setItem('token', getToken);
    },
    clearToken() {
      this.loading = true;
      this.token = null;
      localStorage.removeItem('token');
      setTimeout(() => {
        this.loading = false;
        this.router.push({ name: 'login' });
      }, 2000);
    }
  }
});