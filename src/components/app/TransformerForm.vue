<template>
  <div>
    <v-text-field label="Capacidad (kVA)" v-model="serviceName" />
    <v-flex xs12 md4>
      <v-select label="Tipo" :items="transformersItems" v-model="transformerType" />
    </v-flex>
  </div>
</template>

<script>
export default {
  name: "TransformerForm",
  data: function() {
    return {
      transformerType: "",
      transformersItems: ["Monofasico, Trifasico"]
    };
  }
};
</script>