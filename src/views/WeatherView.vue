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
              v-model="locationSearchTerm"
          ></v-text-field>
          <v-btn rounded class="mx-1 py-5" @click="$store.dispatch('requestWeatherByLocationSearchTerm', {searchTerm: locationSearchTerm})">
            <v-icon color="grey">fa-search</v-icon>
          </v-btn>
        </v-row>

        <v-card v-if="currentWeather">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="headline">
                {{locationName}}
              </v-list-item-title>
              <v-list-item-subtitle>{{date}}, {{currentWeather.description}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <v-row align="center">
              <v-col
                class="display-3"
                cols="6"
              >
                {{Math.round(currentWeather.temp)}}&deg;C
              </v-col>
              <v-col cols="6">
                <v-img
                  :src="currentWeather.icon"
                  width="92"
                ></v-img>
              </v-col>
            </v-row>
          </v-card-text>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>fa-wind</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle class="subtitle-1">Wind: {{currentWeather.windSpeed}} km/h</v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>fa-water</v-icon>
            </v-list-item-icon>
            <v-list-item-subtitle class="subtitle-1">Luftfeuchte: {{currentWeather.humidity}} %</v-list-item-subtitle>
          </v-list-item>
        </v-card>
      </v-container>


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
    </v-main>

    <v-bottom-navigation grow fixed :height="38">
      <v-btn>
        <span class="subtitle-1">Current</span>
      </v-btn>
      <v-btn>
        <span class="subtitle-1">Forecast</span>
      </v-btn>
    </v-bottom-navigation>

  </v-app>
</template>

<script>
import {mapGetters} from 'vuex'


export default {
  name: "WeatherView",

  computed: {
    ...mapGetters({
      locationName: "getLocationName",
      currentWeather: "getCurrentWeather"
    }),

    date: () => {
      return new Date().toDateString()
    }
  },

  data () {
    return {
      locationSearchTerm: String(),
      forecastDays: [
        {title: "Monday", temp: 20, humidity: 60, windSpeed: 5},
        {title: "Tuesday", temp: 15, humidity: 70, windSpeed: 10},
        {title: "Wednesday", temp: 10, humidity: 50, windSpeed: 6},
        {title: "Thursday", temp: 6, humidity: 80, windSpeed: 10}
      ]
    }
  }
}
</script>
