<template>
  <v-navigation-drawer v-model="navDrawer" app dark :color="color" :mini-variant.sync="mini">
    <v-list-item>
      <v-list-item-avatar color="white">
        <v-img :src="logo" height="34" contain />
      </v-list-item-avatar>
      <v-list-item-title class="title">SGE</v-list-item-title>
      <v-btn icon @click="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
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
import { mapState } from "vuex";

export default {
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    logo: "logo.png",
    navDrawer: false,
    mini: false,
    links: [
      {
        to: "/",
        icon: "mdi-view-dashboard",
        text: "Servicios"
      },
      {
        to: "/plan-form",
        icon: "mdi-clipboard-outline",
        text: "Planes"
      },
      {
        to: "/table-list",
        icon: "mdi-clipboard-outline",
        text: "Consumos"
      },
      {
        to: "/user-profile",

        icon: "mdi-account",
        text: "Usuarios"
      },
      {
        to: "/monitorization",
        icon: "mdi-clock",
        text: "Monitorización"
      }
    ]
  }),
  mounted() {
    if (localStorage.mini) {
      localStorage.mini === "true" ? (this.mini = true) : (this.mini = false);
    }
    if (localStorage.drawer) {
      if (localStorage.drawer === "true") {
        this.navDrawer = true;
        
      } else {
        this.navDrawer = false;
      }
    }
  },
  watch: {
    mini(toggleMini) {
      localStorage.mini = toggleMini;
    },
    drawer(drawerStateToggled) {
      this.navDrawer = drawerStateToggled;
    }
  },
  computed: {
    ...mapState("app", ["image", "color", "drawer"]),
  },
};
</script>
