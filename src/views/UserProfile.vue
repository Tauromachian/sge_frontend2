<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md4>
        <material-card class="v-card-profile">
          <v-avatar slot="offset" class="mx-auto d-block" size="130">
            <img src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg" />
          </v-avatar>
          <v-card-text class="text-xs-center">
            <h6 class="category text-gray font-weight-thin mb-3">CEO / CO-FOUNDER</h6>
            <h4 class="card-title font-weight-light">Alec Thompson</h4>
            <p
              class="card-description font-weight-light"
            >Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...</p>
            <v-btn color="success" rounded class="font-weight-light">Follow</v-btn>
          </v-card-text>
        </material-card>
      </v-flex>
      <v-flex xs12 md8>
        <app-data-table :headers="headers" :items="desserts"></app-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "UserProfile",
  data() {
    return {
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Name", value: "name" },
        { text: "Actions", value: "action" }
      ],
      desserts: [
        {
          name: "Frozen Yogurt"
        },
        {
          name: "Ice cream sandwich"
        },
        {
          name: "Eclair"
        },
        {
          name: "Cupcake"
        },
        {
          name: "Gingerbread"
        },
        {
          name: "Jelly bean"
        }
      ]
    };
  }
};
</script>
