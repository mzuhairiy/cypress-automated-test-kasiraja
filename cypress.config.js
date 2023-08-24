const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    baseUrl:"https://kasirdemo.belajarqa.com/",
    pageLoadTimeout:120000,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})