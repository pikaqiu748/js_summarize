<template>
  <div>
    <ul @click="father">
      <li @click.stop="test">ahah</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Babel",
  methods: {
    test () {
      console.log('son')
    },
    father () {
      console.log('father')
    }
  }
}
</script>

<style scoped>
</style>