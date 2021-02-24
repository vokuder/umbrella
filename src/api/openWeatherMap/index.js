const axios = require("axios")


class OpenWeatherMapClient {
  constructor(apiUrl, owmUrl, apiKey, language, apiVersion="2.5", units="metric") {
    this.apiUrl = apiUrl
    this.owmUrl = owmUrl
    this.apiKey = apiKey
    this.language = language
    this.apiVersion = apiVersion
    this.units = units
  }

  async sendRequest(methodCall) {
    let url = `${this.apiUrl}/data/${this.apiVersion}/${methodCall}&appid=${this.apiKey}&lang=${this.language}&units=${this.units}`
    console.log(url)

    let response = await axios.get(url)
    return response.data
  }

  async getCurrentWeather(locationName) {
    return await this.sendRequest(`weather?q=${locationName}`)
  }

  async getForecastWeather(locationName) {
    return await this.sendRequest(`forecast?q=${locationName}`)
  }

  getWeatherIconUrl(iconID, scaleFactor= 2) {
    return `${this.owmUrl}/img/wn/${iconID}@${scaleFactor}x.png`
  }
}


const openWeatherMapClient = new OpenWeatherMapClient(
    process.env.VUE_APP_OPEN_WEATHER_MAP_API_URL,
    process.env.VUE_APP_OPEN_WEATHER_MAP_URL,
    process.env.VUE_APP_OPEN_WEATHER_MAP_API_KEY,
    process.env.VUE_APP_LOCALE,
)
export default openWeatherMapClient;
