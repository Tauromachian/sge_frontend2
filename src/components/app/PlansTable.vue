<template>
  <ag-grid-vue
    style="width: inherit; height: 500px;"
    class="ag-theme-balham"
    :columnDefs="columnDefs"
    :rowData="rowData"
  ></ag-grid-vue>
</template>

<script>
export default {
  name: "ServiceTable",
  data() {
    return {
      columnDefs: null,
      rowData: null
    };
  },
  beforeMount() {
    this.columnDefs = [
      { headerName: "Servicio", field: "service", sortable: true, filter: true, resizable: true},
      { headerName: "CodCli", field: "clientCode", sortable: true, filter: true, resizable: true },
      { headerName: "Price", field: "price", sortable: true, filter: true, resizable: true },
      {
        headerName: "Enero",
        children: [
          { headerName: "Plan", field: "PlanJanuary", sortable: true, filter: true, resizable: true },
          { headerName: "Pico", field: "PlanPike", sortable: true, filter: true, resizable: true }
        ]
      },
      {
        headerName: "Enero",
        children: [
          { headerName: "Plan", field: "PlanJanuary", sortable: true, filter: true, resizable: true },
          { headerName: "Pico", field: "PlanPike", sortable: true, filter: true, resizable: true }
        ]
      },
      {
        headerName: "Enero",
        children: [
          { headerName: "Plan", field: "PlanJanuary", sortable: true, filter: true, resizable: true },
          { headerName: "Pico", field: "PlanPike", sortable: true, filter: true, resizable: true }
        ]
      },
      {
        headerName: "Enero",
        children: [
          { headerName: "Plan", field: "PlanJanuary", sortable: true, filter: true, resizable: true },
          { headerName: "Pico", field: "PlanPike", sortable: true, filter: true, resizable: true }
        ]
      },
      {
        headerName: "Enero",
        children: [
          { headerName: "Plan", field: "PlanJanuary", sortable: true, filter: true, resizable: true },
          { headerName: "Pico", field: "PlanPike", sortable: true, filter: true, resizable: true }
        ]
      },
      {
        headerName: "Enero",
        children: [
          { headerName: "Plan", field: "PlanJanuary", sortable: true, filter: true, resizable: true },
          { headerName: "Pico", field: "PlanPike", sortable: true, filter: true, resizable: true }
        ]
      },
      {
        headerName: "Enero",
        children: [
          { headerName: "Plan", field: "PlanJanuary", sortable: true, filter: true, resizable: true },
          { headerName: "Pico", field: "PlanPike", sortable: true, filter: true, resizable: true }
        ]
      },
      {
        headerName: "Enero",
        children: [
          { headerName: "Plan", field: "PlanJanuary", sortable: true, filter: true, resizable: true },
          { headerName: "Pico", field: "PlanPike", sortable: true, filter: true, resizable: true }
        ]
      },
      {
        headerName: "Enero",
        children: [
          { headerName: "Plan", field: "PlanJanuary", sortable: true, filter: true, resizable: true },
          { headerName: "Pico", field: "PlanPike", sortable: true, filter: true, resizable: true }
        ]
      },
      {
        headerName: "Enero",
        children: [
          { headerName: "Plan", field: "PlanJanuary", sortable: true, filter: true, resizable: true },
          { headerName: "Pico", field: "PlanPike", sortable: true, filter: true, resizable: true }
        ]
      },
      {
        headerName: "Enero",
        children: [
          { headerName: "Plan", field: "PlanJanuary", sortable: true, filter: true, resizable: true },
          { headerName: "Pico", field: "PlanPike", sortable: true, filter: true, resizable: true }
        ]
      },
      {
        headerName: "Enero",
        children: [
          { headerName: "Plan", field: "PlanJanuary", sortable: true, filter: true, resizable: true },
          { headerName: "Pico", field: "PlanPike", sortable: true, filter: true, resizable: true }
        ]
      }
    ];

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
