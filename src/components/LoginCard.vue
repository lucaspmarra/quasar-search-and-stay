<script setup>
import { useAuthStore } from '../stores/auth-store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();
const getToken = ref('');
const loading = ref(false);
const isToken = ref(true);

function login() {
  authStore.setToken(getToken.value);
  router.push('/');
}
</script>

<template>
  <div class="card">
    <h1 class="text-center q-mb-lg card__header">
      Property Management Area
    </h1>
  
    <q-card class="q-pa-md">
      <q-card-section>
        <q-input
          v-model="getToken"
          :type="isToken ? 'password' : 'text'"
          hint="Please, enter your API Authentication Token"
          outlined
          label="API Token"
          @keyup.enter="login">
          <template #append>
            <q-icon
              :name="isToken ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isToken = !isToken" />
          </template>
        </q-input>
      </q-card-section>
      
      <q-card-actions align="right">
        <q-btn
          color="primary"
          label="Login"
          @click="login"
          :loading="loading" />
      </q-card-actions>
    </q-card>
  </div>
</template>
