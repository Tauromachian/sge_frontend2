<template>
  <v-app-bar app id="core-toolbar" flat style="background: #eee;">
    <div class="v-toolbar-title">
      <v-toolbar-title>
        <v-btn class="default v-btn--simple" dark icon @click="toggleDrawer">
          <v-icon>mdi-view-list</v-icon>
        </v-btn>
        {{ title }}
      </v-toolbar-title>
    </div>

    <v-spacer />
    <v-toolbar-items>
      <v-flex align-center layout py-2>
        <v-text-field class="mr-4 purple-input" label="Search..." hide-details color="purple" />
        <router-link v-ripple class="toolbar-items" to="/">
          <v-icon color="tertiary">mdi-view-dashboard</v-icon>
        </router-link>
        <v-menu left bottom offset-x offset-y>
          <template v-slot:activator="{ on }">
            <router-link v-ripple class="toolbar-items" to="/notifications">
              <v-badge color="error" :content="notifications.length" overlap>
                <v-icon v-on="on" color="tertiary">mdi-bell</v-icon>
              </v-badge>
            </router-link>
          </template>
          <v-list dense disabled>
            <v-list-item v-for="(notification, index) in notifications" :key="index">
              <v-list-item-title v-text="notification" />
            </v-list-item>
          </v-list>
        </v-menu>
        <router-link v-ripple class="toolbar-items" to="/user-profile">
          <v-icon color="tertiary">mdi-account</v-icon>
        </router-link>
      </v-flex>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data: () => ({
    notifications: [
      "Mike, John responded to your email",
      "You have 5 new tasks",
      "You're now a friend with Andrew",
      "Another Notification",
      "Another One"
    ],
    title: null
  }),

  watch: {
    $route(val) {
      this.title = val.name;
    }
  },
  mounted() {
    if (localStorage.drawer) {
      if (localStorage.drawer === "true") {
        this.setDrawer(true);
      } else {
        this.setDrawer(false);
      }
    }
  },
  methods: {
    ...mapMutations("app", ["setDrawer"]),
    toggleDrawer() {
      this.setDrawer(!this.$store.state.app.drawer);
      localStorage.drawer = this.$store.state.app.drawer;
    }
  }
};
</script>

<style>
#core-toolbar a {
  text-decoration: none;
}
</style>
