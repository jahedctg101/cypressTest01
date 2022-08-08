const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // Add it to your plugins: Go to & update at  cypress/plugins
      const cucumber = require('cypress-cucumber-preprocessor').default

      module.exports = (on, config) => {
      on('file:preprocessor', cucumber())
}
    },
  },
});
