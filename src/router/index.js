import Vue from 'vue'
import VueRouter from 'vue-router'

import WeatherView from "@/views/WeatherView";


Vue.use(VueRouter)


const routes = [
  {path: "", redirect: "/weather"},
  {path: "/weather", name: "WeatherView", component: WeatherView},
]


const router = new VueRouter({routes})
export default router
