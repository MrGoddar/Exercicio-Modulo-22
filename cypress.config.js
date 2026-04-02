const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/', // URL da loja EBAC
    setupNodeEvents(on, config) { },
  },
});