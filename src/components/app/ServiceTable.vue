<template>
  <v-card>
    <v-card-title>
      Servicios
      <v-spacer></v-spacer>

      <v-text-field
        v-model="search"
        label="Search"
        single-line
        hide-details
        append-icon="mdi-magnify"
      ></v-text-field>
    </v-card-title>
    <ag-grid-vue
      style="width: inherit; height: 500px;"
      class="ag-theme-material"
      :gridOptions="gridOptions"
      :defaultColDef="defaultColDef"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :quickFilterText="search"
      :rowHeight="rowHeight"
      :pagination="pagination"
    ></ag-grid-vue>
  </v-card>
</template>

<script>
export default {
  name: "ServiceTable",
  data() {
    return {
      search: "",
      rowHeight: 35,
      defaultColDef: null,
      pagination: true
    };
  },

  beforeMount() {
    (this.columnDefs = [
      {
        headerName: "Servicio",
        field: "service",
        rowHeight: 50
      },
      {
        headerName: "CRF",
        field: "clientCode"
      },
      {
        headerName: "Codigo",
        field: "price"
      },
      {
        headerName: "Codigo",
        field: "price"
      },
      {
        headerName: "Codigo",
        field: "price"
      }
    ]),
      (this.defaultColDef = {
        sortable: true,
        resizable: true,
        filter: true,
        editable: true
      });

    this.rowData = [
      { service: "Planta Piloto", clientCode: "330", price: 35000 },
      { service: "900", clientCode: "340", price: 32000 },
      { service: "C1", clientCode: "342", price: 71000 },
      { service: "C2", clientCode: "343", price: 52000 },
      { service: "C3", clientCode: "344", price: 12000 }
    ];
  }
};
</script>