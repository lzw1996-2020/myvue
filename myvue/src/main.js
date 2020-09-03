// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from 'vuex'
import './assets/iconfont/iconfont.css'
Vue.config.productionTip = false

Vue.prototype.bus = new Vue()

Vue.use(vuex)

var store = new vuex.Store({
  state: {
    show: false,
    number: 10,
    obj: {
      name: 'lilei',
      age: 18
    }
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
    },
    numberChange (state, value) {
      state.number += value
    },
    handleObj (state) {
      state.obj = {...state.obj, sex: '男'}
    }
  },
  // 异步
  actions: {
    changed (content) {
      content.commit('change')
    },
    numberChanged ({commit}, value) {
      commit('numberChange', value)
    }
  }
})

// 全局过滤器
Vue.filter('filterAll', (value) => {
  return value + '123'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
