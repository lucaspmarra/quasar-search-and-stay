<script>
import { defineComponent } from 'vue';

import AuthButtons from '../components/AuthButtons.vue';
import LogoutDialog from 'src/components/LogoutDialog.vue';


export default defineComponent({
  name: 'MainLayout',
  components: {
    AuthButtons,
    LogoutDialog
  }

});
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          House Rules
        </q-toolbar-title>
        <AuthButtons />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page padding>
        <router-view />
        <LogoutDialog />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
