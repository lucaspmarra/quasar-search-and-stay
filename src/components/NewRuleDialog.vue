<script>
import { defineComponent, reactive, ref, computed } from 'vue';
import { useHttpStore } from '../stores/http-store';

export default defineComponent({
  name: 'NewRuleDialog',
  props: {
    visible: {
      type: Boolean,
      default: false,
    }},
  setup () {
    
    const httpStore = useHttpStore();
    const data = reactive({
      name: '',
      active: 0,
    });

    const isChecked = ref(false);
    const activeValue = computed(() => isChecked.value ? 1 : 0);

    function addData () {
      httpStore.addData(data.name, isChecked.value);
    }

    return {
      httpStore,
      data,
      addData,
      activeValue,
      isChecked,
    };
    
  }
});
</script>

<template>
  <q-dialog
    no-backdrop
    dismissible
    persistent>
    <q-card class="add-card">
      <q-card-section>
        <h5>Add a new rule</h5>
        <q-input
          v-model="data.name"
          class="q-mb-md"
          label="Name" />
        <q-checkbox
          v-model="isChecked"
          label="Active?" />
      </q-card-section>



      <q-card-actions>
        <q-btn
          @click="addData"
          label="Add" />
        <q-btn
          flat
          label="Cancel"
          color="primary" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
