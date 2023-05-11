<script setup>
import { useAuthStore } from '../stores/auth-store';


const authStore = useAuthStore();


</script>

<template>
  <h4>Dashboard</h4>
  Token: {{ authStore.token }}
</template>

<style lang="scss" scoped>

</style>