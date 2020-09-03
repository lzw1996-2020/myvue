<!--
 * @Description: 父组件
 * @Version: 1
 * @Autor: Liang Zhong Wei
 * @Date: 2020-08-28 16:09:43
 * @LastEditors: Liang Zhong Wei
 * @LastEditTime: 2020-09-03 15:23:00
-->

<template>
  <div>
    <ChildTwo></ChildTwo>
    <LoginIndex :message="name" @toFather="getChild"></LoginIndex>
    <div>年龄：{{age}}</div>
    <br />
    <div>{{$store.state.show}}</div>
    <button @click="$store.commit('change')">点击1</button>
    <button @click="$store.dispatch('changed')">点击2</button>
    <div class="iconfont icon-icon_reason iconWen"></div>
    <div>{{specValue | filterAll | filterA('qwer','zxcv')}}</div>
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
      age: '',
      specValue: 'hello'
    }
  },
  methods: {
    getChild (value) {
      this.age = value
    }
  },
  beforeMouted () {},
  mouted () {

  },
  filters: {
    filterA: function (value, arg1, arg2) {
      return value + '456' + arg1 + arg2
    }
  }
}
</script>

<style lang="less" scoped>
.iconWen{
  color: #1afa29;
}
</style>
