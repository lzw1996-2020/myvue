
<template>
  <div>
    <button @click="toBrother">传值方</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mes: 'brother'
    }
  },
  methods: {
    toBrother () {
      this.bus.$emit('toBrother', this.mes)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
