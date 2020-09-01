<!--
 * @Description: 父组件
 * @Version: 1
 * @Autor: Liang Zhong Wei
 * @Date: 2020-08-28 16:09:43
 * @LastEditors: Liang Zhong Wei
 * @LastEditTime: 2020-09-01 11:51:33
-->

<template>
  <div>
    <ChildTwo></ChildTwo>
    <LoginIndex :message="name" @toFather="getChild"></LoginIndex>
    <div>年龄：{{age}}</div>
    <br />
    <div>{{$store.state.show}}</div>
    <button @click="$store.commit('change')">点击</button>
    <button @click="$store.dispatch('changed')">点击</button>
  </div>
</template>

<script>
// import Api from '@api/index'
import LoginIndex from '../child/loginIndex'
import ChildTwo from '../child/childTwo'
export default {
  components: {
    LoginIndex,
    ChildTwo
  },
  data () {
    return {
      name: '孩子',
      age: ''
    }
  },
  methods: {
    getChild (value) {
      this.age = value
    }
  },
  mouted () {

  }
}
</script>

<style lang="less" scoped>

</style>
