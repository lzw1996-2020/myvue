'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  API_BASE_URL: '"https://test-ep.meditrusthealth.com"',
  ROUTER_URL: '"https://test-ep.meditrusthealth.com/xalkori"'
})
