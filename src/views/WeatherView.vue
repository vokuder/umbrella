<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <LocationSearchForm></LocationSearchForm>
        <CurrentWeatherCard v-if="$store.getters['weather/current/dataAvailable']"></CurrentWeatherCard>
      </v-container>
    </v-main>
    <WeatherReportTypeSwitch></WeatherReportTypeSwitch>
  </v-app>
</template>

<script>
import CurrentWeatherCard from "@/components/CurrentWeatherCard";
import LocationSearchForm from "@/components/LocationSearchForm";
import WeatherReportTypeSwitch from "@/components/WeatherReportTypeSwitch";


export default {
  name: "WeatherView",
  components: {WeatherReportTypeSwitch, LocationSearchForm, CurrentWeatherCard},
}
</script>
