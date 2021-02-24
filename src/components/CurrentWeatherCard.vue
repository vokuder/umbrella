<template>
  <v-card>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{$store.getters["weather/getLocationName"]}}
        </v-list-item-title>
        <v-list-item-subtitle>{{$store.getters["weather/current/getDate"]}}, {{$store.getters["weather/current/getDescription"]}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col class="display-3" cols="6">
          {{$store.getters["weather/current/getTemperature"]}}&deg;C
        </v-col>
        <v-col cols="6">
          <v-img :src="$store.getters['weather/current/getIconURL']" width="92"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>fa-wind</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle class="subtitle-1">{{$t("Wind")}}: {{$store.getters["weather/current/getWindSpeed"]}} km/h</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>fa-water</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle class="subtitle-1">{{$t("Humidity")}}: {{$store.getters["weather/current/getHumidity"]}} %</v-list-item-subtitle>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "CurrentWeatherCard"
}
</script>
