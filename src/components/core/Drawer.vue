<template>
  <v-navigation-drawer v-model="inputValue" app dark :color="color">
    <v-list-item>
      <v-list-item-avatar color="white">
        <v-img :src="logo" height="34" contain />
      </v-list-item-avatar>
      <v-list-item-title class="title">SGE</v-list-item-title>
    </v-list-item>

    <v-divider />

    <v-list nav :color="color">
      <v-list-item class="mt-3" v-for="(link, i) in links" :key="i" :to="link.to" link>
        <v-list-item-icon>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="link.text" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// Utilities
import { mapMutations, mapState } from "vuex";

export default {
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    logo: "favicon.ico",
    links: [
      {
        to: "/",
        icon: "mdi-view-dashboard",
        text: "Servicios"
      },
      {
        to: "/plan-form",
        icon: "mdi-account",
        text: "Planes"
      },
      {
        to: "/table-list",
        icon: "mdi-clipboard-outline",
        text: "Transformadores"
      },
      {
        to: "/user-profile",

        icon: "mdi-account",
        text: "Usuarios"
      }
    ]
  }),
  computed: {
    ...mapState("app", ["image", "color"]),
    inputValue: {
      get() {
        return this.$store.state.app.drawer;
      },
      set(val) {
        this.setDrawer(val);
      }
    },
    items() {
      return this.$t("Layout.View.items");
    }
  },

  methods: {
    ...mapMutations("app", ["setDrawer", "toggleDrawer"])
  }
};
</script>
