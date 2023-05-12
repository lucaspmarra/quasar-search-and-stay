<!-- eslint-disable no-unused-vars -->
<script setup>
import { onMounted, reactive, computed, ref } from 'vue';
import { useHttpStore } from '../stores/http-store';
import NewRuleDialog from './NewRuleDialog.vue';

const httpStore = useHttpStore();

onMounted(() => {
  httpStore.fetchData();
});

const state = reactive({
  pagination: {
    sortBy: 'desc',
    descending: false,
    page: 1,
    rowsPerPage: 10,
    rowsNumber: 10,
  },
  filter: '',
  name: '',
  active: 0,
  showDialog: false,
});

const rows = computed(() => httpStore.getData);
const loading = computed(() => httpStore.isLoading);

const columns = [
  { name: 'id', align: 'left', label: 'ID', field: 'id', sortable: true },
  { name: 'name', align: 'left', label: 'Name', field: 'name', sortable: true },
  { name: 'active', align: 'left', label: 'Active', field: 'active', sortable: true },
  { name: 'order', align: 'left', label: 'Order', field: 'order', sortable: true },
];

function openDialog () {
  console.log('Dialog shown');
  state.showDialog = true;
}


const dialogVisible = computed(() => state.showDialog);

const isChecked = ref(false);


function addData () {
  httpStore.addData(state.name, isChecked.value);
  state.showDialog = false;
}
</script>

<template>
  <q-dialog
    v-model="dialogVisible"
    no-backdrop
    dismissible
    persistent>
    <q-card class="add-card">
      <q-card-section>
        <h5>Add a new rule</h5>
        <q-input
          v-model="state.name"
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
          @click="state.showDialog = false"
          color="primary" />
      </q-card-actions>
    </q-card>
  </q-dialog>


  <div class="q-pa-md">
    <q-table
      title="Houses Rules"
      :rows="rows"
      :columns="columns"
      row-key="id"
      :pagination="state.pagination"
      :loading="loading"
      :filter="state.filter"
      hide-pagination
      binary-state-sort>
      <template #body="props">
        <q-tr :props="props">
          <q-td
            key="id"
            :props="props"
            auto-width>
            {{ props.row.id }}
          </q-td>
          <q-td
            key="name"
            :props="props"
            auto-width>
            {{ props.row.name }}
          </q-td>
          <q-td
            key="active"
            :props="props"
            auto-width>
            {{ props.row.active }}
          </q-td>
          <q-td
            key="order"
            :props="props"
            auto-width>
            {{ props.row.order }}
          </q-td>
        </q-tr>
      </template>
      <template #top>
        <q-btn
          color="primary"
          :disable="loading"
          label="Add rule"
          @click="openDialog" />
        <q-space />
      </template>
      <template #top-right>
        <q-input
          borderless
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search">
          <template #append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>

    <div class="row justify-center q-mt-md">
      <q-pagination
        v-model="state.pagination.page"
        color="grey-8"
        :max="httpStore.getPagination ? httpStore.getPagination.total : 1"
        @input="httpStore.fetchData(state.pagination.page)"
        @next="httpStore.fetchNextPage"
        size="sm"
        input />
    </div>
  </div>
</template>
