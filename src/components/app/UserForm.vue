<template>
  <material-card color="primary" title="Formulario de servicio" text="Inserta un nuevo servicio">
    <v-form ref="form">
      <v-container py-0>
        <v-layout wrap>
          <v-flex xs12 md6>
            <v-text-field label="Nombre" v-model="serviceName" :rules="nameRules" />
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field label="Email" v-model="serviceCode" :rules="emailRules" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </material-card>
</template>

<script>
export default {
  name: "UserForm"
};
</script>