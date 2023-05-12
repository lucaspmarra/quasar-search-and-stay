import { defineStore } from 'pinia';


export const useAuthStore = defineStore('auth', {
  state:()=>({
    token: localStorage.getItem('token') || null,
    loading: false
  }),
  getters: {
    isAuthenticated: (state) => state.token !== null,
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
        this.router.push({name: 'Login'});
      }, 2000);
    },
  }
});