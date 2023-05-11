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
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu" />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>
        <AuthButtons />
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
      <LogoutDialog />
    </q-page-container>
  </q-layout>
</template>
