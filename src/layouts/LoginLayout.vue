<!-- <script>
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
</script> -->

<template>
    <q-layout view="lHh Lpr lFf">
        <q-page-container>
            <q-page>
                <router-view />
            </q-page>
        </q-page-container>
    </q-layout>
</template>
