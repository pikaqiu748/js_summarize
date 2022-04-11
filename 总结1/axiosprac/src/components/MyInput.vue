<template>
  <div>
    <input type='text' value="hello,vue" id='hello' @input="$emit('changeValue',$event.target.value)" />
  </div>
</template>

<script>
function change () {
  // console.log(document.getElementById('hello').value)
  this.$emit('changeValue', document.getElementById("hello").value)
}
export default {
  name: "MyInput",
  methods: {
    change,
  },
  props: {
    inputValue: String
  }
}
</script>

<style scoped>
</style>