<template>
  <div>
    <input type="text" value="" @input="$emit('changeValue',$event.target.value)" />
    <!-- <my-input type='text' value='' @input='change' /> -->
    <div>
      zi: {{inputValue}}
    </div>
  </div>
</template>

<script>
import MyInput from './MyInput.vue'
export default {
  components: { MyInput },
  name: "VModel",
  props: {
    inputValue: String,
  },
  // model: {
  //   prop: 'inputValue',
  //   event: 'changeValue'
  // },
  methods: {
    change (e) {
      // 这里的e其实是原生input中，onchange="fucntion()",function()发射过来的input事件名字和$event事件
      console.log(e.target.value)
      this.$emit('changeValue', e.target.value)
    }
  }
}
</script>

<style scoped>
</style>