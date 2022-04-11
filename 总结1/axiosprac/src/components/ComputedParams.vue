<template>
  <div>
    <ul>
      <li v-for="(item,index) in arr" :key=" index">
        {{showArr(index)}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ComputedParams",
  data () {
    return {
      arr: ['a', 'b', 'c'],
      str: '....'
    }
  },
  computed: {
    showArr: function () {
      return function (index) {
        return index + this.str;
      }
    }
  }
}
</script>

<style scoped>
</style>