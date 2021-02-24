import Vue from 'vue'
import Vuex from 'vuex'

import weather from "@/store/modules/weather"
import loading_spinner from "@/store/modules/ui/loading_spinner";


Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    "weather": weather,
    "loading_spinner": loading_spinner
  }
})
