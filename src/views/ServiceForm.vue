<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card
          color="primary"
          title="Formulario de servicio"
          text="Inserta un nuevo servicio"
        >
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md6>
                  <v-text-field label="Nombre del Servicio" />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field label="Demanda Contratada" />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field label="CRF" />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field label="Exclusivo" />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field label="Tipo de tarifa" />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field label="Turnos" />
                </v-flex>
                <v-flex xs12 md4>
                  <v-select
                    label="Alimentacion"
                    v-model="alimentationSelect"
                    :items="alimentationItems"
                  />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field label="Numero del metro" />
                </v-flex>
                <v-flex xs12 md4>
                  <v-select label="Metraje" />
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
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "ServiceForm",
  data: function() {
    return {
      alimentationSelect: "Simple",
      alimentationItems: ["Simple", "Doble"]
    };
  }
};
</script>