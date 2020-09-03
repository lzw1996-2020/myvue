/*
 * @Description: 路由
 * @Version: 1
 * @Autor: Liang Zhong Wei
 * @Date: 2020-08-31 18:23:47
 * @LastEditors: Liang Zhong Wei
 * @LastEditTime: 2020-09-03 15:26:41
 */
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Login'
    },
    {
      path: '/Login',
      component: function (resolve) {
        require(['@/components/login/index.vue'], resolve)
      }
    },
    {
      path: '/Video',
      component: function (resolve) {
        require(['@/components/video/index.vue'], resolve)
      }
    },
    {
      path: '/Test',
      component: function (resolve) {
        require(['@/components/test/test.vue'], resolve)
      }
    }
  ]
})
