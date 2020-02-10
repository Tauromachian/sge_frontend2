<template>
  <div>
    <v-text-field label="Capacidad (kVA)" v-model="serviceName" />
    <v-select label="Tipo" :items="transformersItems" v-model="transformerType" />
  </div>
</template>

<script>
export default {
  name: "TransformerForm",
  data: function() {
    return {
      transformerType: "",
      transformersItems: ["Monofasico", "Trifasico"]
    };
  }
};
</script>