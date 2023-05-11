<script>
import { defineComponent } from 'vue';

import AuthButtons from '../components/AuthButtons.vue';


export default defineComponent({
  name: 'MainLayout',
  components:{
    AuthButtons
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

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>

      <AuthButtons />
      <router-link to="/">
        Home
      </router-link>
      <router-link to="/dashboard">
        Dashboard
      </router-link>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
