import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';

export const useHttpStore = defineStore('http', {
  state: () => ({
    data: [],
    error: null,
    loading: false,
    pagination: null,
  }),

  getters: {
    getData (state) {
      return state.data;
    },

    getError (state) {
      return state.error;
    },

    isLoading (state) {
      return state.loading;
    },

    getPagination (state) {
      return state.pagination;
    }
  },

  actions: {
    async fetchData (page = 1) {
      this.loading = true;
      try {
        const response = await api.get(`/admin/house_rules?page=${page}`);
        console.log(response.data.data.entities);
        this.data = response.data.data.entities;

        console.log(response.data.data.pagination);
        this.pagination = response.data.data.pagination;
        this.error = null;
      }
      catch (error) {
        this.data = null;
        this.pagination = null;
        this.error = error.message;
      }
      finally {
        this.loading = false;
      }
    },

    async addData(name, isChecked) {
      this.loading = true;
      const payload = {
        house_rules: {
          name: name,
          active: isChecked,
        },
      };
      try {
        await api.post('/admin/house_rules', payload);
        this.error = null;
      }
      catch (error) {
        this.error = error.message;
      }
      finally {
        this.loading = false;
      }
    }
  }
}
);
