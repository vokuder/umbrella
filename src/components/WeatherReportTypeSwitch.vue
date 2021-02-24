<template>
  <v-bottom-navigation grow fixed>

    <v-btn>
      <span>{{$t("Current")}}</span>
      <v-icon>fa-cloud-sun</v-icon>
    </v-btn>

    <v-btn>
      <span>{{$t("Forecast")}}</span>
      <v-icon>fa-bullhorn</v-icon>
    </v-btn>

  </v-bottom-navigation>
</template>

<script>
export default {
  name: "WeatherReportTypeSwitch"
}
</script>
