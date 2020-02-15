<template>
  <div>
    <v-text-field label="Capacidad (kVA)" v-model="capacity" :rules="capacityRules"/>
    <v-select label="Tipo" :items="transformersItems" v-model="transformerType" />
  </div>
</template>

<script>
export default {
  name: "TransformerForm",
  data: function() {
    return {
      transformerType: "Monofásico",
      transformersItems: ["Monofásico", "Trifásico"],
      capacity: "",
      capacityRules: [v => !!v || "La capacidad falta"]
    };
  }
};
</script>