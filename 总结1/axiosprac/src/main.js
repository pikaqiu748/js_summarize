import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from '../src/myStore/index'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import HelloWorld from './components/index'
// 自己实现的vuex
// import myStore from './myStore/index.mjs'
// 会自动执行HelloWorld中的install方法
import store from './myStore/index.mjs'

// console.log(store) 
Vue.use(HelloWorld)
Vue.use(ElementUI);

// Vue.prototype.$axios=axios
Vue.config.productionTip = true

Vue.component('MyTest', {
  template: "<div><h1>hahahah</h1><h1>{{msg}}</h1></div>",
  data () {
    return {
      msg: 'hello,vue'
    }
  }
})
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')


var data = { msg: 'hello,vue' }
var vm = new Vue({
  el: '#app',
  router,
  data: data,
  store,
  render: h => h(App)
})

vm.$mount("#app")
// console.log(vm.$data === data)
// vm.$watch('msg', function (newVal, oldVal) {
//   console.log(newVal)
// })
// console.log(vm.$data.msg)
// vm.$data.msg = '111111'
// vm.$data.msg = '2222'

