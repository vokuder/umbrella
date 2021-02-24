import openWeatherMapClient from "@/api/openWeatherMap";


export default {
  namespaced: true,

  state: {
    description: "Warm",
    humidity: 60,
    temperature: 20,
    iconURL: "",
    windSpeed: 5
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
    }
  }
}
