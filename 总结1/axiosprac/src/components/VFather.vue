<template>
  <div>
    <div>父:{{name}}</div>
    <!-- <v-model v-model="name"></v-model> -->
    <v-model :inputValue="name" @changeValue="test" />
  </div>
</template>

<script>
import VModel from './VModel.vue'
export default {
  name: "VFather",
  components: {
    VModel
  },
  data () {
    return {
      name: 'fwef'
    }
  },
  methods: {
    test (value) {
      this.name = value
    }
  }
}
</script>

<style scoped>
</style>