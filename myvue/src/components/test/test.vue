<!--
 * @Description: 测试
 * @Version: 1
 * @Autor: Liang Zhong Wei
 * @Date: 2020-09-03 15:25:27
 * @LastEditors: Liang Zhong Wei
 * @LastEditTime: 2020-09-03 15:35:00
-->
<template>
  <div>
    <div>{{sum}}</div>
    <input type="text" v-model="num">
  </div>
</template>

<script>
export default {
  data () {
    return {
      num1: 1,
      num2: 2,
      num: 3
    }
  },
  computed: {
    sum () {
      return this.num1 + this.num2
    }
  },
  watch: {
    num (newVal, oldVal) {
      if (newVal.length > 5) {
        this.num = ''
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
