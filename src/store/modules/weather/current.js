import openWeatherMapClient from "@/api/openWeatherMap";


export default {
  namespaced: true,

  state: {
    description: null,
    humidity: null,
    temperature: null,
    iconURL: null,
    windSpeed: null,
    date: null,
    dataAvailable: false
  },

  mutations: {
    setDescription(state, description) {
      state.description = description
    },

    setHumidity(state, humidity) {
      state.humidity = humidity
    },

    setTemperature(state, temperature) {
      state.temperature = temperature
    },

    setIconURL(state, iconURL) {
      state.iconURL = iconURL
    },

    setWindSpeed(state, windSpeed) {
      state.windSpeed = windSpeed
    },

    setDate(state, date) {
      state.date = date
    },

    setDataAvailability(state, available) {
      state.dataAvailable = available
    }
  },

  getters: {
    getDescription: state => {
      return state.description
    },

    getHumidity: state => {
      return state.humidity
    },

    getTemperature: state => {
      return state.temperature
    },

    getIconURL: state => {
      return state.iconURL
    },

    getWindSpeed: state => {
      return state.windSpeed
    },

    getDate: state => {
      return state.date
    },

    dataAvailable: state => {
      return state.dataAvailable
    }
  },

  actions: {
    async getCurrentWeatherData({ commit, rootState }) {
      rootState.loading_spinner.active = true

      let currentWeather = await openWeatherMapClient.getCurrentWeather(rootState.weather.locationName)
      commit("setDescription", currentWeather["weather"][0]["description"])
      commit("setHumidity", currentWeather["main"]["humidity"])
      commit("setTemperature", Math.round(currentWeather["main"]["temp"]))
      commit("setWindSpeed", currentWeather["wind"]["speed"])
      commit("setIconURL", openWeatherMapClient.getWeatherIconUrl(currentWeather["weather"][0]["icon"]))
      commit("setDate", new Date().toDateString())

      commit("setDataAvailability", true)
      rootState.loading_spinner.active = false
    }
  }
}
