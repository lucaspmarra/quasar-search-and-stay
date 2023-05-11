import { defineStore } from 'pinia';


export const useAuthStore = defineStore('auth', {
  state:()=>({
    token: localStorage.getItem('token') || null,
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
      console.log(this.token);
    },
    clearToken() {
      this.loading = true;
      console.log(this.loading);
      this.token = null;
      localStorage.removeItem('token');
      setTimeout(() => {
        this.loading = false;
        console.log(this.loading);
        this.router.push({name: 'Login'});
      }, 2000);
    },
  }
});