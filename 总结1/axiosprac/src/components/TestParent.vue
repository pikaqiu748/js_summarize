<template>
  <div>
    <!-- 下面两种等价 -->
    <!-- <test-child :msg.sync="msg"></test-child> -->
    <test-child :msg='msg' @update:msg="val=>msg=val"></test-child>
  </div>
</template>

<script>
import TestChild from './TestChild.vue'
export default {
  components: { TestChild },
  name: "TestParent",
  data () {
    return {
      msg: 'hello,world'
    }
  }
}
</script>

<style scoped>
</style>
