<template>
  <material-card color="primary" title="Formulario de servicio" text="Inserta un nuevo servicio">
    <v-form ref="form">
      <v-container py-0>
        <v-layout wrap>
          <v-flex xs12 md6>
            <v-text-field
              label="Nombre del Servicio"
              v-model="serviceName"
              :rules="serviceNameRules"
            />
          </v-flex>
          <v-flex xs12 md3>
            <v-text-field label="Codigo del servicio" v-model="serviceCode" :rules="serviceCodeRules"/>
          </v-flex>
          <v-flex xs6 md3>
            <v-switch label="Exclusivo" v-model="exclusive" />
          </v-flex>
          <v-flex xs12 md3>
            <v-text-field label="CRF" v-model="crf" :rules="crfRules"/>
          </v-flex>
          
          <v-flex xs6 md3>
            <v-subheader class="pl-0">Turnos de trabajo</v-subheader>
            <v-slider v-model="turn" :thumb-size="24" thumb-label="always" :max="3" :min="1"></v-slider>
          </v-flex>
          <v-flex xs12 md2>
            <v-select label="Tipo de tarifa" v-model="tarifType" :items="tarifItems" />
          </v-flex>


          <v-flex xs12 md2>
            <v-select label="Alimentacion" v-model="alimentation" :items="alimentationItems" />
          </v-flex>
          <v-flex xs12 md3>
            <v-text-field label="Demanda Contratada (kW)" v-model="hiredDemand" :rules="hiredDemandRules"/>
          </v-flex>
          <v-flex xs12 md4>
            <v-text-field label="Numero del metro" v-model="meterNumber" :rules="meterNumberRules"/>
          </v-flex>

          <v-flex md12></v-flex>

          <v-flex xs12 md2>
            <v-select label="Metraje" v-model="metrage" :items="metrageItems" />
          </v-flex>
          <v-flex xs12 md4 v-if="metrage == 'Alta'">
            <v-text-field label="Capacidad" v-model="capacity" :rules="capacityRules"/>
          </v-flex>
          <v-flex xs12 md4 v-else>
            <v-subheader class="pl-0">Cantidad de transformadores</v-subheader>

            <v-slider
              v-model="transformersAmount"
              :thumb-size="24"
              thumb-label="always"
              :max="3"
              :min="1"
            ></v-slider>
          </v-flex>

          <v-flex md12 class="pt-0 pb-0"></v-flex>

          <v-flex xs12 md4 v-for="i in transformersAmount" :key="i">
            <app-transformer-form></app-transformer-form>
          </v-flex>

          <v-flex xs12 text-xs-right>
            <v-btn class="mx-0 font-weight-light" color="primary" @click="validate">Insertar</v-btn>
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
      turn: 1,
      hiredDemand: "",
      meterNumber: "",
      alimentation: "Simple",
      metrage: "Alta",
      capacity: "",
      alimentationItems: ["Simple", "Doble"],
      metrageItems: ["Baja", "Alta"],
      tarifItems: ["M1-A", "M1-C", "B1"],
      transformersAmount: 0,
      transformersItems: [1, 2, 3],
      serviceNameRules: [v => !!v || "El nombre del servicio falta"],
      serviceCodeRules: [v => !!v || "El codigo del servicio falta"],
      crfRules: [v => !!v || "El CRF falta"],
      hiredDemandRules: [v => !!v || "La demanda contratada falta"],
      meterNumberRules: [v => !!v || "El numero del metro falta"],
      capacityRules: [v => !!v || "La capacidad falta"],
    };
  },
  methods: {
    validate: function () {
      this.$refs.form.validate();
    }
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