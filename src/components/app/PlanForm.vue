<template>
  <material-card color="primary" title="Formulario de planes" text="Inserta un nuevo plan">
    <v-form ref="form">
      <v-container py-0>
        <v-layout wrap>
          <v-flex xs12 md6>
            <v-autocomplete label="Servicio" :items="services" :rules="serviceRules"/>
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field :rules="yearPlanRules" label="Año" />
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field :rules="monthPlanRules" label="Plan del año" />
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field :rules="monthPlanRules" label="Enero" />
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field :rules="monthPlanRules" label="Febrero" />
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field :rules="monthPlanRules" label="Marzo" />
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field :rules="monthPlanRules" label="Abril" />
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field :rules="monthPlanRules" label="Mayo" />
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field :rules="monthPlanRules" label="Junio" />
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field :rules="monthPlanRules" label="Julio" />
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field :rules="monthPlanRules" label="Agosto" />
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field :rules="monthPlanRules" label="Septiembre" />
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field :rules="monthPlanRules" label="Octubre" />
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field :rules="monthPlanRules" label="Noviembre" />
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field :rules="monthPlanRules" label="Diciembre" />
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
import { mapState } from "vuex";

export default {
  name: "ServiceForm",
  data: function() {
    return {
      alimentationSelect: "Simple",
      alimentationItems: ["Simple", "Doble"],
      metrageSelect: "Alta",
      metrageItems: ["Baja", "Alta"],
      serviceRules: [v => !!v|| "Entre un servicio"],
      yearPlanRules: [v => !!v || "Entre el plan de este mes"],
      monthPlanRules: [v => !!v || "Entre el plan de este mes"]
    };
  },
  methods: {
    validate: function () {
      this.$refs.form.validate();
    }
  },
  computed: {
    ...mapState("app", ["services"])
  }
};
</script>