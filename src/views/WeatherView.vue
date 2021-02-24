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

      <!--
      <v-carousel cycle :interval="2000" :continuous="true" :show-arrows="false" hide-delimiters>
        <v-carousel-item v-for="(day,i) in forecastDays" :key="i">
          <v-container>
            <v-card>
              <v-card-title>{{day.title}}</v-card-title>
              <v-card-text>
                <h1 class="mb-5">{{day.temp}}°C</h1>
                <h1 class="subtitle-1">Humidity: {{day.humidity}} %</h1>
                <h1 class="subtitle-1">Wind: {{day.windSpeed}} km/h</h1>
              </v-card-text>
            </v-card>
          </v-container>
        </v-carousel-item>
      </v-carousel>
    -->
    </v-main>
  </v-app>
</template>

<script>
import CurrentWeatherCard from "@/components/CurrentWeatherCard";


export default {
  name: "WeatherView",
  components: {CurrentWeatherCard}
}
</script>
