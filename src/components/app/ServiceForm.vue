<template>
  <material-card color="primary" title="Formulario de servicio" text="Inserta un nuevo servicio">
    <v-form>
      <v-container py-0>
        <v-layout wrap>
          <v-flex xs12 md6>
            <v-text-field label="Nombre del Servicio" v-model="serviceName" />
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field label="Codigo del servicio" v-model="serviceCode" />
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field label="CRF" v-model="crf" />
          </v-flex>
          <v-flex xs12 md3>
            <v-switch label="Exclusivo" v-model="exclusive" />
          </v-flex>
          <v-flex xs12 md3>
            <v-subheader class="pl-0">Turnos</v-subheader>
            <v-slider v-model="turn" :thumb-size="24" thumb-label="always" :max="3" :min="1"></v-slider>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field label="Tipo de tarifa" v-model="tarifType" />
          </v-flex>
          <v-flex xs12 md4>
            <v-select label="Alimentacion" v-model="alimentation" :items="alimentationItems" />
          </v-flex>
          <v-flex xs12 md4>
            <v-text-field label="Demanda Contratada (kW)" v-model="hiredDemand" />
          </v-flex>
          <v-flex xs12 md4>
            <v-text-field label="Numero del metro" v-model="meterNumber" />
          </v-flex>
          <v-flex xs12 md4>
            <v-select label="Metraje" v-model="metrage" :items="metrageItems" />
          </v-flex>
          <v-flex xs12 md4 v-if="metrage == 'Alta'">
            <v-text-field label="Capacidad" v-model="capacity" />
          </v-flex>
          <v-flex xs12 md4 v-else>
            <v-select label="Cantidad de transformadores" :items="transformersItems" v-model="transformersAmount"/>
          </v-flex>

          <v-flex xs12 md4 v-for="i in transformersAmount" :key="i">
            <app-transformer-form></app-transformer-form>
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
      serviceName: "",
      serviceCode: "",
      crf: "",
      exclusive: false,
      tarifType: "",
      turn: "",
      hiredDemand: "",
      meterNumber: "",
      alimentation: "Simple",
      metrage: "Alta",
      capacity: "",
      alimentationItems: ["Simple", "Doble"],
      metrageItems: ["Baja", "Alta"],
      transformersAmount: 0,
      transformersItems: [1, 2, 3]
    };
  },
  watch: {
    metrage: function(val) {
      if (val === "Alta") {
        this.transformersAmount = 0;
      }
    }
  }
};
</script>