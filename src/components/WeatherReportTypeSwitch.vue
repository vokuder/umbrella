<template>
  <v-bottom-navigation grow fixed>

    <v-btn @click="toggleSelected">
      <span>{{$t("Current")}}</span>
      <v-icon>fa-cloud-sun</v-icon>
    </v-btn>

    <v-btn @click="toggleSelected">
      <span>{{$t("Forecast")}}</span>
      <v-icon>fa-bullhorn</v-icon>
    </v-btn>

  </v-bottom-navigation>
</template>

<script>
export default {
  name: "WeatherReportTypeSwitch",
  props: {
    currentSelected: true,
    forecastSelected: false
  },

  methods: {
    toggleSelected() {
      this.currentSelected = !this.currentSelected
      this.forecastSelected = !this.forecastSelected
    }
  }
}
</script>
