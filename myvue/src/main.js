// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from 'vuex'

Vue.config.productionTip = false

Vue.prototype.bus = new Vue()

Vue.use(vuex)

var store = new vuex.Store({
  state: {
    show: false
  },
  getters: {
    get (state) {
      return !state.show
    }
  },
  // 同步
  mutations: {
    change (state) {
      state.show = !state.show
    }
  },
  // 异步
  actions: {
    changed (content) {
      content.commit('change')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
