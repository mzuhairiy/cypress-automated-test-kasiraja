const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    experimentalRunAllSpecs: true, //tambahkan jika ingin run all specs di cypress open
    baseUrl:"https://kasirdemo.belajarqa.com/",
    pageLoadTimeout:120000,
    setupNodeEvents(on, config) {
      config.specPattern = [
        'cypress/e2e/1login.cy.js',
        'cypress/e2e/2category.cy.js',
      ]
      return config
    },
  },
})