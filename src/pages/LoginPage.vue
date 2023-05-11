<script setup>
import { useAuthStore } from '../stores/auth-store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();
const getToken = ref('');
const loading = ref(false);

function login() {
  authStore.setToken(getToken.value);
  router.push('/dashboard');
}
</script>

<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md">
      <q-card-section>
        <q-input
          outlined
          v-model="getToken"
          label="API Token"
          @keyup.enter="login" />
      </q-card-section>

      <p>Token: {{ getToken }}</p>
      
      <q-card-actions align="right">
        <q-btn
          color="primary"
          label="Login"
          @click="login"
          :loading="loading" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>
