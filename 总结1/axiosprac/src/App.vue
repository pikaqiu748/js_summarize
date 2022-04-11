<template>
  <div id="app">
    <!-- <p>{{num}}</p>
    <p v-text="num"></p>
    <button @click="increment">+1</button> -->
    <!-- <router-view></router-view> -->

    <!-- <h-button @click.native="domLength"></h-button>
     <h-input /> -->
    <!--<p v-for="(item,index) in arr" :key="index">
      {{item}}--{{arr.length}}--{{index}}
    </p>
    <div>
      <p v-for="(key,value,index01) in person" :key="index01+1">
        {{key}}--{{value}}--{{index01}}
      </p>
    </div> -->
    <!-- <div>
      <ul ref='ulRef'>
        <li v-for="(item,index) in arr" :key="index">
          {{item}}
        </li>
      </ul>
    </div>
  </div> -->
    <!-- <v-father /> -->
    <!-- <render :tag='tag' /> -->
    <!-- <heading /> -->
    <!-- <anchored-heading :level='1'>hahaha</anchored-heading>
    <anchored-heading :level='2'>xixiix</anchored-heading> -->
    <!-- <v-model-test /> -->
    <!-- <test-parent /> -->
    <!-- <babel-test /> -->
    <!-- <my-vuex /> -->
    <!-- <test-key></test-key> -->
    <!-- 哈哈哈 -->
    <!-- <computed-params /> -->
    <my-test />
  </div>
</template>

<script>
import Heading from './components/Heading.vue'
import Render from './components/Render.vue'
import VFather from './components/VFather.vue'
import AnchoredHeading from '@/components/AnchoredHeading'
import VModelTest from '@/components/VModelTest'
import TestParent from '@/components/TestParent'
import BabelTest from '@/components/BabelTest'
import MyVuex from '@/components/MyVuex'
import TestKey from '@/components/MyVuex'
import ComputedParams from './components/ComputedParams.vue'
// import hButton from './components/h-button.vue'
// import HInput from './components/h-input.vue'
export default {
  components: {
    VFather,
    Render, Heading,
    AnchoredHeading, VModelTest,
    TestParent, BabelTest, MyVuex,
    TestKey, ComputedParams
  },
  // components: { hButton, HInput },
  name: "App",
  data () {
    return {
      num: 0,
      arr: [1, 2, 3, 4],
      tag: "h1",
      person: {
        name: 'tom',
        age: 17,
        hobby: "basketball",
        gender: 'male'
      }
    }
  },
  methods: {
    increment () {
      this.num += 1
    },
    addNum () {
      //  this.$nextTick(()=>{
      //    this.arr.push(6)
      //  })
      this.arr.unshift(6)
      console.log(this.arr.length)
    },
    domLength () {
      this.arr.push(6)
      this.arr.push(7)
      // vue更新dom是异步操作的，$nextTick()是用来知道什么时候dom更新完成
      this.$nextTick(() => {
        const ulElem = this.$refs.ulRef
        const len = ulElem.childNodes.length
        // console.log("dom chils's length:", len)
      })
    }
  }
}
</script>
<style>
</style>
