const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://pt.wikipedia.org",
    setupNodeEvents(on, config) {
      return config;
    },
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: false,
    reportFilename: "[name]_[datetime]",
    timestamp: "mmddyyyy_HHMMss"
  },
});
