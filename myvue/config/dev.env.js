'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_BASE_URL: '"https://test-ep.meditrusthealth.com"', // 接口api的url地址
  ROUTER_URL: '"https://test-ep.meditrusthealth.com/xalkori"'// 路由的url
})
