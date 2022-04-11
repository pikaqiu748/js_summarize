<template>
  <div>
    <!-- <input type="text" :value='msg' @input="$event=>msg=$event.target.value"> -->
    <input type="text" v-model="msg">
    <button @click="showMsg">点击</button>
  </div>
</template>

<script>
export default {
  name: "VModelTest",
  data () {
    return {
      msg: 'hello,world'
    }
  },
  methods: {
    showMsg () {
      console.log(this.msg)
    }
  }
}
</script>

<style scoped>
</style>
