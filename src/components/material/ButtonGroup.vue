<template>
  <div>
    <p>{{ label }}</p>
    <v-btn-toggle>
      <v-btn v-for="(button, index) in buttons" :key="index"> {{ button }}</v-btn>
    </v-btn-toggle>
  </div>
</template>

<script>
export default {
  name: "ButtonGroup",
  props: {
    label: String,
    buttons: Array
  }
};
</script>