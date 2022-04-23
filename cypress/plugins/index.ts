/// <reference types="cypress" />
require('dotenv').config()

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on: Cypress.PluginEvents, config: Cypress.PluginConfig) => {
  // @ts-ignore
  config.env = process.env
  return config
}
