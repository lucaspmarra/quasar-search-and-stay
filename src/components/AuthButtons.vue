<script>
import { useAuthStore } from '../stores/auth-store';
import { useRouter } from 'vue-router';
  
export default {
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();
  
    const login = () => {
      router.push('/login');
    };
    const logout = () => {
      authStore.clearToken();
    };
  
    return {
      isLoggedIn: authStore.isLoggedIn,
      isLoading: authStore.isLoading,
      logout,
      login
    };
  }
};
</script>
  
<template>
  <div>
    <q-btn
      v-if="isLoggedIn"
      @click="login"
      label="Login" />
    
    <q-btn
      v-else
      @click="logout"
      label="Logout" />
  
    <q-dialog
      v-model="isLoading"
      no-backdrop
      dismissible
      persistent>
      <q-card>
        <q-card-section>
          <q-spinner color="primary" />
          <div class="q-mt-md">
            Logging out...
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
  