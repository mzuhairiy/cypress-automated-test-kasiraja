const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    experimentalRunAllSpecs: true,
    baseUrl:"https://kasirdemo.belajarqa.com/",
    pageLoadTimeout:120000,
    setupNodeEvents(on, config) {
      config.specPattern = [
        'cypress/e2e/login.cy.js',
        'cypress/e2e/category.cy.js',
      ]
      return config
    },
  },
})