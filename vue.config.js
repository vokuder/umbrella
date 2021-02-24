const http = require('http')
const keepAliveAgent = new http.Agent({ keepAlive: true });


module.exports = {
  publicPath: "",
  outputDir: "www",

  transpileDependencies: [
    'vuetify'
  ],

  configureWebpack: {
    devServer: {
      proxy: {
        '/open_weather_map_api': {
          target: 'http://api.openweathermap.org',
          pathRewrite: {'^/open_weather_map_api' : ''},
          changeOrigin: true,
          agent: keepAliveAgent
        },
        '/open_weather_map': {
          target: 'http://openweathermap.org/',
          pathRewrite: {'^/open_weather_map' : ''},
          changeOrigin: true,
          agent: keepAliveAgent
        }
      }
    }
  },
}
