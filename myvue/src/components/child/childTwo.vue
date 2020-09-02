<!--
 * @Description: 子组件2
 * @Version: 1
 * @Autor: Liang Zhong Wei
 * @Date: 2020-09-01 11:26:02
 * @LastEditors: Liang Zhong Wei
 * @LastEditTime: 2020-09-02 11:49:25
-->

<template>
  <div>
    <button @click="toBrother">传值方</button>
    <div>{{$store.state.number}}</div>
    <button @click="numberChange(10)">加十</button>
    <button @click="numberChanged(50)">加二十</button>
    <div>性别{{$store.state.obj.sex}}</div>
    <button @click="showSex">显示性别</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {
      mes: 'brother'
    }
  },
  methods: {
    toBrother () {
      this.bus.$emit('toBrother', this.mes)
    },
    ...mapMutations([
      'numberChange'
    ]),
    ...mapMutations({
      showSex: 'handleObj'
    }),
    ...mapActions([
      'numberChanged'
    ])
  }
}
</script>

<style lang="less" scoped>

</style>
