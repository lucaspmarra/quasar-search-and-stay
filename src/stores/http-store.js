import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';

export const useHttpStore = defineStore('http', {
  state: () => ({
    data: [],
    error: null,
    loading: false
  }),

  getters: {
    getData(state){
      return state.data;
    },

    getError(state) {
      return state.error;
    },

    isLoading(state) {
      return state.loading;
    }
  },

  actions: {
    async fetchData() {
      console.log('Fetching data...');
      this.loading = true;
      try {
        const response = await api.get('/admin/house_rules'); 
        console.log('Response:', response);
        this.data = response.data;
        this.error = null;
      }
      catch (error) {
        console.error('Error:', error);
        this.data = null;
        this.error = error.message;
      }
      finally {
        console.log('Finished fetching data.');
        this.loading = false;
      }
    }
  }
});
