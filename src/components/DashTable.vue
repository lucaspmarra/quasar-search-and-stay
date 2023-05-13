<!-- eslint-disable no-unused-vars -->
<script setup>
import { onMounted, reactive, computed, ref} from 'vue';
import { useHttpStore } from '../stores/http-store';
// import NewRuleDialog from './NewRuleDialog.vue';

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
  showAddDialog: false,
  showEditDialog: false,
});

const isChecked = ref(0);

const rows = computed(() => httpStore.getData.map(row => ({
  ...row,
  key: row.id
})));

const loading = computed(() => httpStore.isLoading);
const error = computed(() => httpStore.getError);

const columns = [
  { name: 'id', align: 'center', label: 'ID', field: 'id', sortable: true },
  { name: 'name', align: 'left', label: 'Name', field: 'name', sortable: true },
  { name: 'active', align: 'center', label: 'Active', field: 'active', sortable: true },
  { name: 'order', align: 'center', label: 'Order', field: 'order', sortable: true },
  { name: 'edit', align: 'center', label: 'Edit', field: 'edit', sortable: false },
  { name: 'delete', align: 'center', label: 'Delete', field: 'delete', sortable: false },
];
const addDialogVisible = computed(() => state.showAddDialog);
function openAddDialog () {
  console.log('Dialog shown');
  state.showAddDialog = true;
}


function editError() {
  alert('Sorry, this is not working at the moment!');
}

async function addData() {
  try {
    await httpStore.addData(state.name, isChecked.value);
    await httpStore.fetchData();
    state.name = '';
    isChecked.value = 0;
    state.showAddDialog = false;
  }
  catch (error) {
    alert(error);
  }
}

async function deleteRow (row) {
  try {
    await httpStore.deleteData(row.id);
    await httpStore.fetchData();
  }
  catch (error) {
    alert(error);
  }

}
</script>

<template>
  <q-dialog
    v-model="addDialogVisible"
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
          label="Active?"
          left-label />
      </q-card-section>
      <q-card-actions>
        <q-btn
          @click="addData"
          label="Add" />
        <q-btn
          flat
          label="Cancel"
          @click="state.showAddDialog = false"
          color="primary" />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <div class="q-pa-md table">
    <q-table
      title="Houses Rules"
      :grid="$q.screen.xs"
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
          <q-td
            key="edit"
            :props="props"
            auto-width>
            <q-btn
              @click="editError"
              icon="edit"
              size="sm"
              class="q-ml-sm" />
          </q-td>
          <q-td
            key="delete"
            :props="props"
            auto-width>
            <q-btn
              icon="delete"
              size="sm"
              @click="deleteRow(props.row)"
              class="q-ml-sm" />
          </q-td>
        </q-tr>
      </template>
      <template #top>
        <q-btn
          color="primary"
          :disable="loading"
          label="Add rule"
          @click="openAddDialog" />
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
        size="sm"
        input />
    </div>
  </div>
</template>
