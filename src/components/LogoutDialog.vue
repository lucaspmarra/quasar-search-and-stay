<script>
import { defineComponent } from 'vue';
import { useAuthStore } from '../stores/auth-store';
  
export default defineComponent({
  name: 'LogoutDialog',
  setup() {
    const authStore = useAuthStore();

    return {
      authStore
    };
  }
});
</script>
  
<template>
  <q-dialog
    v-model="authStore.loading"
    no-backdrop
    dismissible
    persistent
    title="Logout">
    <q-card>
      <q-card-section class="">
        <q-spinner color="primary" />
        <div class="q-mt-md">
          Logging out...
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>