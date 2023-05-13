<script>
import { useAuthStore } from '../stores/auth-store';
import { useRouter } from 'vue-router';

export default {
  setup () {
    const authStore = useAuthStore();
    const router = useRouter();

    const login = () => {
      router.push('/login');
    };

    const logout = () => {
      authStore.clearToken();
    };
    
    return {
      logout,
      login,
      authStore
    };
  }
};
</script>
  
<template>
  <div>
    <q-btn
      class="q-ma-md"
      label="Dashboard"
      to="/" />

    <q-btn
      v-if="authStore.isAuthenticated"
      class="q-ma-md"
      @click="logout"
      label="Logout" />
      
    <q-btn
      v-else
      class="q-ma-md"
      @click="login"
      label="Login" />
  </div>
</template>
  