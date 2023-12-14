const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'yd2xs1',
  e2e: {
    chromeWebSecurity: false,
    experimentalRunAllSpecs: true, //tambahkan jika ingin run all specs di cypress open
    baseUrl:"https://kasiraja.ajikamaludin.id/",
    pageLoadTimeout:120000,
    setupNodeEvents(on, config) {
      return config
    },
  },
})