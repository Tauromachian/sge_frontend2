<template>
  <material-card color="primary" title="Formulario de servicio" text="Inserta un nuevo servicio">
    <v-form ref="form">
      <v-container py-0>
        <v-layout wrap>
          <v-flex xs12 md6>
            <v-text-field label="Nombre" v-model="serviceName" :rules="nameRules" />
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field label="Apellidos" v-model="serviceName" :rules="nameRules" />
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field label="Telefono" v-model="serviceName" :rules="nameRules" />
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field label="Email" v-model="serviceCode" :rules="emailRules" />
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field label="Institucion" v-model="serviceCode" :rules="emailRules" />
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field label="Roles" v-model="serviceCode" :rules="emailRules" />
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field label="Fotos" v-model="serviceCode" :rules="emailRules" />
          </v-flex>
          <v-flex xs12 md6>
            <v-text-field label="Cargo" v-model="serviceCode" :rules="emailRules" />
          </v-flex>

          <v-flex xs12 text-xs-right>
            <v-btn class="mx-0 font-weight-light">Agregar</v-btn>
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