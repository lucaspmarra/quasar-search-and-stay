<script setup>
import { useAuthStore } from '../stores/auth-store';
import DashTable from 'src/components/DashTable.vue';

const authStore = useAuthStore();
</script>

<template>
  <h4>Dashboard</h4>
  Token: {{ authStore.token }}

  <DashTable />
</template>