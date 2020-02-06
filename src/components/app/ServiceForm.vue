<template>
  <material-card color="primary" title="Formulario de servicio" text="Inserta un nuevo servicio">
    <v-form>
      <v-container py-0>
        <v-layout wrap>
          <v-flex xs12 md6>
            <v-text-field label="Nombre del Servicio" />
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field label="Demanda Contratada (kW)" />
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field label="CRF" />
          </v-flex>
          <v-flex xs12 md4>
            <v-switch label="Exclusivo" />
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field label="Tipo de tarifa" />
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field label="Turnos" />
          </v-flex>
          <v-flex xs12 md4>
            <v-select label="Alimentacion" v-model="alimentation" :items="alimentationItems" />
          </v-flex>
          <v-flex xs12 md4>
            <v-text-field label="Numero del metro" />
          </v-flex>
          <v-flex xs12 md4>
            <v-select label="Metraje" v-model="metrage" :items="metrageItems" />
          </v-flex>
          <v-flex xs12 md4>
            <v-text-field label="Capacidad" />
          </v-flex>

          <v-flex xs12 text-xs-right>
            <v-btn class="mx-0 font-weight-light" color="primary">Insertar</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </material-card>
</template>

<script>
export default {
  name: "ServiceForm",
  data: function() {
    return {
      alimentation: "Simple",
      metrage: "Alta",
      alimentationItems: ["Simple", "Doble"],
      metrageItems: ["Baja", "Alta"],

    };
  }
};
</script>