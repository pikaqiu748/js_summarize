<template>
  <div>
    <ul>
      <li v-for="(num,index) in nums" key="index">{{num}}</li>
    </ul>
    <button @click="delete">刪除第二个数字</button>
  </div>
</template>

<script>
export default {
  name: "TestKey",
  data () {
    return {
      testnums: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    delete () {
      this.testnums.shift(0)
    }
  }
}
</script>

<style scoped>
</style>