<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <LocationSearchForm></LocationSearchForm>
        <CurrentWeatherCard v-if="$store.getters['weather/current/dataAvailable']"></CurrentWeatherCard>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import CurrentWeatherCard from "@/components/CurrentWeatherCard";
import LocationSearchForm from "@/components/LocationSearchForm";


export default {
  name: "WeatherView",
  components: {LocationSearchForm, CurrentWeatherCard},
}
</script>
