<template>
  <material-card color="primary" title="Formulario de servicio" text="Inserta un nuevo servicio">
    <v-form ref="form">
      <v-container py-0>
        <v-layout wrap>
          <v-flex xs12 md4>
            <v-text-field label="Numero del metro" v-model="meterNumber" :rules="meterNumberRules" />
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field
              label="Nombre del Servicio"
              v-model="serviceName"
              :rules="serviceNameRules"
            />
          </v-flex>
          

          <v-flex xs12 md2>
            <v-select label="Tipo de servicio" v-model="serviceType" :items="serviceTypeItems" />
          </v-flex>

          <v-flex xs12 md3>
            <v-text-field
              label="Codigo del servicio"
              v-model="serviceCode"
              :rules="serviceCodeRules"
            />
          </v-flex>
          <v-flex xs6 md3 class="ml-0.5">
            <v-switch label="Exclusivo" v-model="exclusive" />
          </v-flex>
          <v-flex xs12 md3>
            <v-text-field label="CRF" v-model="crf" :rules="crfRules" />
          </v-flex>

          <v-flex xs12 md3>
            <v-text-field
              label="Demanda Contratada (kW)"
              v-model="hiredDemand"
              :rules="hiredDemandRules"
            />
          </v-flex>

          <v-flex xs12 md3>
            <p>Tipo de tarifa</p>
            <v-btn-toggle group v-model="tarifType" color="primary">
              <v-btn value="B1">
                B1
              </v-btn>
              <v-btn value="M1-A">
                M1-A
              </v-btn>
              <v-btn value="M1-C">
                M1-C
              </v-btn>
              
            </v-btn-toggle>
          </v-flex>

          <v-flex xs12 md3>
            <v-select label="Alimentacion" v-model="alimentation" :items="alimentationItems" />
          </v-flex>

          <v-flex xs6 md2>
            <v-subheader class="pl-0">Turnos de trabajo</v-subheader>
            <v-slider v-model="turn" :thumb-size="24" thumb-label="always" :max="3" :min="1"></v-slider>
          </v-flex>

          <v-flex md12></v-flex>

          <v-flex xs12 md2>
            <v-select label="Metraje" v-model="metrage" :items="metrageItems" />
          </v-flex>
          <v-flex xs12 md4 v-if="metrage == 'Alta'">
            <v-text-field label="Capacidad (kVA)" v-model="capacity" :rules="capacityRules" />
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
            <v-btn
              class="mx-0 font-weight-light btn-test"
              color="primary"
              @click="validate"
            >Insertar</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </material-card>
</template>

<script>
import { isNumber, isLettersWithBlankSpaces } from "@/utils/regex";

export default {
  name: "ServiceForm",
  data: function() {
    return {
      serviceName: "",
      serviceCode: "",
      serviceType: "",
      crf: "",
      exclusive: false,
      tarifType: "M1-A",
      turn: 1,
      hiredDemand: "",
      meterNumber: "",
      alimentation: "Simple",
      metrage: "Alta",
      capacity: "",
      serviceTypeItems: [
        "Monofásico 110 V",
        "Monofásico 220 V",
        "Trifásico 220 V",
        "Trifásico 480 V"
      ],
      alimentationItems: ["Simple", "Doble"],
      metrageItems: ["Baja", "Alta"],
      transformersAmount: 0,
      transformersItems: [1, 2, 3],
      serviceNameRules: [
        v => !!v || "El nombre del servicio falta",
        v => isLettersWithBlankSpaces(v) || "Caracteres no permitidos"
      ],
      serviceCodeRules: [v => !!v || "El codigo del servicio falta"],
      crfRules: [v => !!v || "El CRF falta"],
      hiredDemandRules: [
        v => !!v || "La demanda contratada falta",
        v => isNumber(v) || "La Demanda contratada es un numero"
      ],
      meterNumberRules: [
        v => !!v || "El numero del metro falta",
        v => isNumber(v) || "Introdujo al menos un caracter incorrecto aqui"
      ],
      capacityRules: [
        v => !!v || "La capacidad falta",
        v => isNumber(v) || "La capacidad es un numero"
      ]
    };
  },
  methods: {
    validate: function() {
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