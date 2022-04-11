import Vuex from '../myVuex/index.mjs'
import Vue from 'vue'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    name: '张三',
    age: 21,
    gender: 'male'
  },
  mutations: {
    changeName (state, newName) {
      // 这里简单举个例子 修改个名字
      state.name = newName
    },
  },
  actions: {
    changeNameAsync (context, newName) {
      // 这里用 setTimeout 模拟异步
      setTimeout(() => {
        // 在这里调用 mutations 中的处理方法
        context.commit('changeName', newName)
      }, 2000)
    },
  },
  getters: {
    decorationName (state) {
      return `大家好我的名字叫${state.name}今年${state.age}岁`
    },
    gender (state) {
      return state.gender
    }
  },
})


