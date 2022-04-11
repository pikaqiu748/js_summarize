// .mjs 是什么文件呢？很明显因为 ESM 和 CJS 的加载方式不同，为了更高的区分这两种不同的加载方式，于是创建了 .mjs(Module JavaScript)。.mjs 就是表示当前文件用 ESM 的方式进行加载，如果是普通的 .js 文件，则采用 CJS 的方式加载。


let _Vue = null

class Store {
  constructor(options) {
    // console.log(options)
    const state = options.state || {}
    const mutations = options.mutations || {}
    const actions = options.actions || {}
    const getters = options.getters || {}
    // console.log(getters)
    // console.log(Object.keys(getters))
    console.log(state)
    this.state = _Vue.observable(state)
    console.log(this.state)
    this.getters = Object.create(null)
    Object.keys(getters).forEach(key => {
      Object.defineProperty(this.getters, key, {
        get: () => {
          return getters[key].call(this, this.state)
        }
      })
    })

    this.mutations = {}
    Object.keys(mutations).forEach(key => {
      this.mutations[key] = (params) => {
        mutations[key].call(this, this.state, params)
      }
    })

    this.actions = {}
    Object.keys(actions).forEach(key => {
      this.actions[key] = (params) => {
        actions[key].call(this, this, params)
      }
    })
    // console.log(this.actions)
    this.commit = (eventName, params) => {
      this.mutations[eventName](params)
    }

    this.dispatch = (eventName, params) => {
      this.actions[eventName](params)
    }
  }
}


function mapState (params) {
  // console.log(params)
  if (!Array.isArray(params)) {
    throw new Error("只支持数组形式传参!!")
  }
  let obj = {}
  params.forEach(item => {
    obj[item] = function () {
      return this.$store.state[item]
    }
  })
  // console.log(obj)
  return obj
}

const mapMutations = (params) => {
  if (!Array.isArray(params)) {
    throw new Error('只支持数组传参！！')
  }
  let obj = {}
  params.forEach(item => {
    obj[item] = function (params) {
      return this.$store.commit(item, params)
    }
  })
  // console.log(obj)
  return obj
}

const mapActions = (params) => {
  // 这里我只写个数组的 起别名的就没弄哈
  if (!Array.isArray(params))
    throw new Error('抱歉，当前是丐版的Vuex，只支持数组参数')
  // 第一步就是要初始 obj ,不然[item] 会报错
  let obj = {}
  // 实现逻辑很简单，就是接收传递的的参数
  // 去this.$store寻找
  params.forEach((item) => {
    obj[item] = function (params) {
      return this.$store.dispatch(item, params)
    }
  })
  // console.log(obj)
  return obj
}


const mapGetters = (params) => {
  // 这里我只写个数组的 起别名的就没弄哈
  if (!Array.isArray(params))
    throw new Error('抱歉，当前是丐版的Vuex，只支持数组参数')
  // 第一步就是要初始 obj ,不然[item] 会报错
  let obj = {}
  // 实现逻辑很简单，就是接收传递的的参数
  // 去this.$store寻找
  params.forEach((item) => {
    obj[item] = function () {
      return this.$store.getters[item]
    }
  })
  return obj
}


// Vue.mixin给我们提供了一种混入Vue实例的方法，创建了混入对象之后，我们自定义的方法或者变量可以很轻松的挂载在Vue实例上，给我们的偷懒带来方便；
// 从源码中可以看出，当时用Vue.use(plugin)时，里面会找的plugin的install方法，然后通过args.unshift(this),plugin.install.apply(plugin,args),将install的作用于修改为当前使用的插件，将Vue作为参数传给Install方法.
function install (Vue) {
  // console.log(this)  //this指向当前插件
  // 保存到全局 _Vue
  _Vue = Vue
  // 全局注册混入 这样在所有的组件都能使用 $store
  _Vue.mixin({
    // beforeCreate vue初始化阶段
    // 在 beforeCreate 这个时候把 $store 挂载到 Vue 上
    beforeCreate () {
      // console.log(this)
      // 判断 Vue 传递的对象是否有 store 需要挂载
      // this.$options  是new Vue() 传递的对象
      // console.log(this.$options.store)
      if (this.$options.store) {
        // 把 store 挂载到 Vue 原型上
        _Vue.prototype.$store = this.$options.store
      }
    },
  })
}

export default { Store, install, mapState, mapMutations, mapActions, mapGetters };
