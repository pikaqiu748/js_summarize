
let Vue = null; // 用一个全局变量接收 Vue.use() 传过来的vue函数
function install (_Vue) {
  Vue = _Vue;

  // 混入一个对象
  // 在vue中使用插件时，会调用Vue.use(Vuex)将插件进行处理，此过程会通过mixin在各个组件中的生命钩子beforeCreate中为每个实例增加$store属性
  Vue.mixin({
    beforeCreate () {
      // 这里的this是当前组件（要实现的功能是给每一个组件都添加 $store 属性，值就是 创建的 Store 实例）
      // console.log(this);
      if (this.$options.store) {
        // console.log('我是根')
        this.$store = this.$options.store;
      } else if (this.$parent) {
        // console.log('我不是祖根尖')
        this.$store = this.$parent.$store;
      }
    }
  });
}

class Store {
  constructor(options) {
    // options配置有 state、mutations、getters等
    // 其中 state 是响应式的，借助vue实例的data是响应式的
    let vm = new Vue({
      data: {
        state: options.state
      }
    });
    this.state = vm.state;

    // mutations 存放的是方法，且方法中的this是当前Store实例
    this.mutations = {};
    let mutations = options.mutations || {};
    Object.keys(mutations).forEach(mutation => {
      // 这个箭头函数中的this是Store实例
      this.mutations[mutation] = (param) => {
        // 这里的this仍然是当前 Sotre 的实例
        // 为什么不直接 this.mutations[mutation](param) 呢？
        // 因为是死递归，会造成内存泄漏
        mutations[mutation].call(this, this.state, param); // 通过 call 强制改变方法中的this指向
      };
    });

    // actions 中存放的也是方法，与mutations不同的是，它里面的函数接收的第一个参数是当前 Store 实例
    this.actions = {};
    let actions = options.actions || {};
    Object.keys(actions).forEach(action => {
      // this.actions[action] = actions[action].bind(this,this);  // 这里是通过 bind来改变函数中this的指向，但是不建议，因为这样写的话，那么在执行某一个action方法时就可以传递多个参数，可是action默认是最多接收两个参数的

      this.actions[action] = (param) => {
        // 这里的this仍然是当前 Sotre 的实例
        // 为什么不直接 this.mutations[mutation](param) 呢？
        // 因为是死递归，会造成内存泄漏
        actions[action].call(this, this, param); // 通过 call 强制改变方法中的this指向
      };
    });

    // getters 存储的也是函数，但是每个函数都要return 一个值，而且这个值还是响应式的，这就需要用到数据劫持
    this.getters = {};
    let getters = options.getters || {};
    Object.keys(getters).forEach(getter => {
      Object.defineProperty(this.getters, getter, {
        get: () => {
          // console.log(this, this.getters);
          // 调用 getters 是不需要传参的，但是默认第一个参数是 this.state
          return getters[getter].call(this, this.state);
        }
      });
    });
  }
  //构造函数结束

  // 触发 mutations 中的方法是通过 commit
  commit (type, param) {
    console.log(this.mutations);
    this.mutations[type](param)
  }
  // 触发 actions 中的方法是通过 dispatch
  dispatch (type, param) {
    this.actions[type](param);
  }
}
// class Store结束


// 辅助函数: 不管是 mapState 还是其他辅助函数，最后都是在响应的{}中通过展开运算符获取其值，所以这些函数执行完之后应该是返回一个对象

// 所有辅助函数只考虑传的值是数组的情况
export function mapState (ary) {
  let obj = {}; // obj每一个属性的值都是一个函数，并且函数中返回的是 store.state的值
  ary.forEach(item => {
    // 要让obj的属性对应上ary的每一项，但是属性值是 Store实例上的state
    obj[item] = function () {
      console.log(this) // =>当前使用这个属性的组件
      return this.$store.state[item]
    }
  });
  console.log(obj);
  return obj;
};

export function mapGetters (ary) {
  let obj = {}; // obj每一个属性的值都是一个函数，并且函数中返回的是 store.state的值
  ary.forEach(item => {
    // 要让obj的属性对应上ary的每一项，但是属性值是 Store实例上的state
    obj[item] = function () {
      return this.$store.getters[item]
    }
  });
  return obj;
};

export function mapMutations (ary) {
  let obj = {};
  ary.forEach(item => {
    obj[item] = function (param) {
      this.$store.commit(item, param)
    }
  });
  return obj;
};

export function mapActions (ary) {
  let obj = {};
  ary.forEach(item => {
    obj[item] = function (param) {
      this.$store.dispatch(item, param);
    }
  })
}

export default {
  Store,
  install
}
