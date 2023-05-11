<script setup>
import { onMounted} from 'vue';
import { useAuthStore } from '../stores/auth-store';
import { useHttpStore } from '../stores/http-store';


const authStore = useAuthStore();
const httpStore = useHttpStore();

onMounted(() => {
  httpStore.fetchData();
});

</script>

<template>
  <h4>Dashboard</h4>
  Token: {{ authStore.token }}
  <pre>{{ httpStore.getData }}</pre>
</template>