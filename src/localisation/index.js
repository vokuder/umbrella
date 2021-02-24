import VueI18n from "vue-i18n"
import Vue from "vue"
import de from "./de.json"


Vue.use(VueI18n)


const i18n = new VueI18n({
    locale: process.env.VUE_APP_LOCALE,
    messages: {de},
})

export default i18n
