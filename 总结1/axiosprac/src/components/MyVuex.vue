<template>
  <div>
    {{$store.state.name }}
    {{ $store.state.age }}
    <!-- <h1>ahhaha</h1> -->
    {{decorationName}}<br />
    {{age}}<br />
    {{gender}}<br />
    <button @click="changeName('狗子')">mapMutations</button>
    <button @click="changeNameAsync('狗2子')">mapMutations</button>
  </div>
</template>

<script>
import vuex from '../myVuex/index'
export default {
  name: "MyVuex",
  computed: {
    ...vuex.mapState(['age']),
    ...vuex.mapGetters(['decorationName', 'gender'])
  },
  methods: {
    ...vuex.mapMutations(['changeName']),
    ...vuex.mapActions(['changeNameAsync'])
  }
}
</script>

<style  scoped>
</style>

