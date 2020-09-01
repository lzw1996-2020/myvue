<!--
 * @Description: 子组件
 * @Version: 1
 * @Autor: Liang Zhong Wei
 * @Date: 2020-08-31 17:26:02
 * @LastEditors: Liang Zhong Wei
 * @LastEditTime: 2020-09-01 11:33:01
-->
<template>
  <div>
    <div>{{message}}</div>
    <button @click="toFather">传值</button>
    <div>接收方{{value}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      age: 18,
      value: ''
    }
  },
  // props: {
  //   message: {
  //     type: String
  //   }
  // },
  props: ['message'],
  methods: {
    toFather () {
      this.$emit('toFather', this.age)
    }
  },
  mouted: function () {

  },
  beforeCreate: function () {
    this.bus.$on('toBrother', (value) => {
      this.value = value
    })
  }
}
</script>

<style lang="less" scoped>
</style>
