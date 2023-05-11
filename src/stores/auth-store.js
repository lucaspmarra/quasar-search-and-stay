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
      console.log('store token: ', this.token);
    },
    clearToken() {
      this.loading = true;
      console.log('1 - loading: ', this.loading);
      console.log(this.loading);
      this.token = null;
      localStorage.removeItem('token');
      setTimeout(() => {
        this.loading = false;
        console.log('2 - loading: ', this.loading);
        this.router.push({name: 'Login'});
      }, 2000);
    },
  }
});