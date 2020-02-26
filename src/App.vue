<template>
  <v-app>
    <core-toolbar />

    <core-drawer />

    <core-view />
  </v-app>
</template>

<style lang="scss">
@import "@/styles/index.scss";
@import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
@import "../node_modules/ag-grid-community/dist/styles/ag-theme-material.css";

/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
