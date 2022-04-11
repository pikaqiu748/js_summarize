// .mjs 是什么文件呢？很明显因为 ESM 和 CJS 的加载方式不同，为了更高的区分这两种不同的加载方式，于是创建了 .mjs(Module JavaScript)。.mjs 就是表示当前文件用 ESM 的方式进行加载，如果是普通的 .js 文件，则采用 CJS 的方式加载。
let _Vue = null

class Store {
  constructor(options) {
    const state = options.state || {}
    const getters = options.getters || {}
    const mutations = options.mutations || {}
    const actions = options.acitons || {}

    this.state = _Vue.observable(state)

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

    this.commit = (eventName, params) => {
      this.mutations[eventName](params)
    }

    this.dispatch = (eventName, params) => {
      this.actions[eventName](params)
    }

  }
}

const mapState = (params) => {
  if (!Array.isArray(params)) {
    throw new Error("mapState只支持數組形式的傳參")
  }
  let state = {}
  params.forEach(key => {
    state[key] = function () {
      this.$store.state[item]
    }
  })
  return state
}


const mapGetters = (params) => {
  if (!Array.isArray(params)) {
    throw new Error("mapState只支持數組形式的傳參")
  }
  let getters = {}
  params.forEach(key => {
    getters[key] = function () {
      return this.$store.getters[key]
    }
    return getters
  })


  const mapActions = (params) => {
    if (!Array.isArray(params)) {
      throw new Error("mapState只支持數組形式的傳參")
    }
    let actions = {}
    params.forEach(key => {
      actions[key] = function () {
        return this.$store.dispatch(key, params)
      }
    })
    return actions
  }

  const mapGetters = (params) => {
    if (!Array.isArray(params)) {
      throw new Error("mapState只支持數組形式的傳參")
    }
    let mutations = {}
    params.forEach(key => {
      mutations[key] = function () {
        return this.$store.commit(key, params)
      }
    })
    return mutations
  }
}

// Vue.mixin给我们提供了一种混入Vue实例的方法，创建了混入对象之后，我们自定义的方法或者变量可以很轻松的挂载在Vue实例上，给我们的偷懒带来方便；
function install (Vue) {
  // console.log(1111111)
  _Vue = Vue
  _Vue.mixin({
    beforeCreate () {
      if (this.$options.store) {
        _Vue.prototype.$store = this.$options.store
      }
    },
  })
}

export default { Store, install };