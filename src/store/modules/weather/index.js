import current from "@/store/modules/weather/current";


export default {
  namespaced: true,

  modules: {
    "current": current
  },

  state: {
    locationName: "Rethen",
    date: new Date().toDateString()
  },

  mutations: {
    setLocationName(state, locationName) {
      state.locationName = locationName
    },

    setDate(state, date) {
      state.date = date
    }
  },

  getters: {
    getLocationName: state => {
      return state.locationName
    },

    getDate: state => {
      return state.date
    }
  }
}
