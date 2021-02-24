<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row no-gutters class="mt-1">
          <v-text-field
              placeholder="Location ..."
              filled
              rounded
              dense
              color="white--text"
          ></v-text-field>
          <v-btn rounded class="mx-1 py-5">
            <v-icon color="grey">fa-search</v-icon>
          </v-btn>
        </v-row>

        <CurrentWeatherCard></CurrentWeatherCard>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import CurrentWeatherCard from "@/components/CurrentWeatherCard";


export default {
  name: "WeatherView",
  components: {CurrentWeatherCard},
  mounted() {
    this.$store.dispatch("weather/current/getCurrentWeatherData")
  }
}
</script>
