<template>
  <v-container :fluid="fluid">
    <v-row>
      <v-col md="3"></v-col>

      <v-col md="2">
        <v-select v-model="rowAmount" :items="pageAmounts" label="Filas"></v-select>
      </v-col>

      <v-col md="5">
        <v-text-field
          v-model="search"
          label="Search"
          single-line
          hide-details
          append-icon="mdi-magnify"
        ></v-text-field>
      </v-col>
      <v-col md="2">
        <v-btn-toggle group mandatory v-model="rowHeight">
          <v-btn value="48">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
          <v-btn value="24">
            <v-icon>mdi-format-align-justify</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>
    <ag-grid-vue
      style="width: inherit; height: 500px;"
      class="ag-theme-material"
      :defaultColDef="defaultColDef"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :quickFilterText="search"
      :pagination="pagination"
      :paginationPageSize="rowAmount"
      :gridOptions="gridOptions"
    ></ag-grid-vue>
  </v-container>
</template>

<script>
export default {
  name: "ServiceTable",
  data() {
    return {
      search: "",
      defaultColDef: null,
      pagination: true,
      rowAmount: 10,
      rowHeight: 48,
      pageAmounts: [10, 50, 100],
      fluid: true,
      gridOptions: {},
      gridApi: null
    };
  },

  beforeMount() {
    (this.columnDefs = [
      {
        headerName: "Servicio",
        field: "service"
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
      { service: "C3", clientCode: "344", price: 12000 },
      { service: "C3", clientCode: "344", price: 12000 },
      { service: "C3", clientCode: "344", price: 12000 },
      { service: "C3", clientCode: "344", price: 12000 },
      { service: "C3", clientCode: "344", price: 12000 },
      { service: "C3", clientCode: "344", price: 12000 },
      { service: "C3", clientCode: "344", price: 12000 },
      { service: "C3", clientCode: "344", price: 12000 },
      { service: "C3", clientCode: "344", price: 12000 },
      { service: "C3", clientCode: "344", price: 12000 },
      { service: "C3", clientCode: "344", price: 12000 },
      { service: "C3", clientCode: "344", price: 12000 },
      { service: "C3", clientCode: "344", price: 12000 },
      { service: "C3", clientCode: "344", price: 12000 },
      { service: "C3", clientCode: "344", price: 12000 }
    ];
  },
  mounted() {
    this.gridApi = this.gridOptions.api;
  },
  watch: {
    rowAmount: function(val) {
      this.gridApi.paginationSetPageSize(Number(val));
    },
    rowHeight: function(val){
      this.gridOptions.rowHeight = Number(val);
      this.gridApi.resetRowHeights();
    }
  }
};
</script>