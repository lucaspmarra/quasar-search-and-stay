<script>
import { defineComponent } from 'vue';
import { useAuthStore } from '../stores/auth-store';
  
export default defineComponent({
  name: 'LogoutDialog',
  setup() {
    const authStore = useAuthStore();
  
    return {
      isLoading: authStore.isLoading
    };
  }
});
</script>
  
<template>
  <q-dialog
    v-model="isLoading"
    no-backdrop
    dismissible
    persistent
    title="Logout">
    <q-card>
      <q-card-section>
        <q-spinner color="primary" />
        <div class="q-mt-md">
          Logging out...
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>