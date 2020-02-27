<template>
  <v-container :fluid="fluid" class="pl-0 pr-0">
    <v-row>
      <v-col md="5"></v-col>

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
      columnDefs: null,
      rowData: null,
      search: "",
      defaultColDef: null,
      pagination: true,
      rowAmount: 10,
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
        headerName: "CodCli",
        field: "clientCode"
      },
      {
        headerName: "Price",
        field: "price"
      },
      {
        headerName: "Enero",
        children: [
          {
            headerName: "Plan",
            field: "PlanJanuary"
          },
          {
            headerName: "Pico",
            field: "PlanPike"
          }
        ]
      },
      {
        headerName: "Enero",
        children: [
          {
            headerName: "Plan",
            field: "PlanJanuary"
          },
          {
            headerName: "Pico",
            field: "PlanPike"
          }
        ]
      },
      {
        headerName: "Enero",
        children: [
          {
            headerName: "Plan",
            field: "PlanJanuary"
          },
          {
            headerName: "Pico",
            field: "PlanPike"
          }
        ]
      },
      {
        headerName: "Enero",
        children: [
          {
            headerName: "Plan",
            field: "PlanJanuary"
          },
          {
            headerName: "Pico",
            field: "PlanPike"
          }
        ]
      },
      {
        headerName: "Enero",
        children: [
          {
            headerName: "Plan",
            field: "PlanJanuary"
          },
          {
            headerName: "Pico",
            field: "PlanPike"
          }
        ]
      },
      {
        headerName: "Enero",
        children: [
          {
            headerName: "Plan",
            field: "PlanJanuary"
          },
          {
            headerName: "Pico",
            field: "PlanPike"
          }
        ]
      },
      {
        headerName: "Enero",
        children: [
          {
            headerName: "Plan",
            field: "PlanJanuary"
          },
          {
            headerName: "Pico",
            field: "PlanPike"
          }
        ]
      },
      {
        headerName: "Enero",
        children: [
          {
            headerName: "Plan",
            field: "PlanJanuary"
          },
          {
            headerName: "Pico",
            field: "PlanPike"
          }
        ]
      },
      {
        headerName: "Enero",
        children: [
          {
            headerName: "Plan",
            field: "PlanJanuary"
          },
          {
            headerName: "Pico",
            field: "PlanPike"
          }
        ]
      },
      {
        headerName: "Enero",
        children: [
          {
            headerName: "Plan",
            field: "PlanJanuary"
          },
          {
            headerName: "Pico",
            field: "PlanPike"
          }
        ]
      },
      {
        headerName: "Enero",
        children: [
          {
            headerName: "Plan",
            field: "PlanJanuary"
          },
          {
            headerName: "Pico",
            field: "PlanPike"
          }
        ]
      },
      {
        headerName: "Enero",
        children: [
          {
            headerName: "Plan",
            field: "PlanJanuary"
          },
          {
            headerName: "Pico",
            field: "PlanPike"
          }
        ]
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
  },
  mounted() {
    this.gridApi = this.gridOptions.api;
  },
  watch: {
    rowAmount: function(val) {
      this.gridApi.paginationSetPageSize(Number(val));
    }
  }
};
</script>
