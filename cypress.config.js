const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 600,
  viewportHeight: 800,
  defaultCommandTimeout: 4000,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:3000',
    supportFile: false
  },
})
