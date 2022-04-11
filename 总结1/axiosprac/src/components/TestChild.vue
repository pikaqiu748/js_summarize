<template>
  <div>
    <h1>{{msg}}</h1>
    <button @click='changeMsg'>点击改变孩子属性值</button>
  </div>
</template>

<script>
export default {
  name: "TestChild",
  props: {
    msg: String
  },
  methods: {
    changeMsg () {
      this.$emit('update:msg', 'hahah')
    }
  }
}
</script>

<style scoped>
</style>
