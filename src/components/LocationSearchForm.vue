<template>
  <v-row no-gutters class="mt-1">
    <v-text-field placeholder="Location ..." filled rounded dense color="white--text" v-model="searchTerm"
    ></v-text-field>
    <v-btn rounded class="mx-1 py-5" @click="submit">
      <v-icon color="grey">fa-search</v-icon>
    </v-btn>
  </v-row>
</template>

<script>
export default {
  name: "LocationSearchForm",
  data() {
    return {
      searchTerm: String()
    }
  },

  methods: {
    submit() {
      this.$store.commit("weather/setLocationName", this.searchTerm)
      this.$store.dispatch("weather/current/getCurrentWeatherData")
    }
  }
}
</script>
