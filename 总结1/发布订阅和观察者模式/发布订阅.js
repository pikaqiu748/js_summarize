
class EventBus {
  constructor() {
    // 在event对象中 存放 所有的事件与回调数组，如：
    // {a: [ ()=>{console.log(1)}, (a)=>{console.log(a)}], b: [()=>{console.log(1)}]}
    this.event = Object.create(null);
  };
  /**注册事件 
  * @输入 事件名 name ， 对应的回调函数。
  * @输出 undefined
  * @功能 往event对象中加入事件与回调数组。
  */
  on (name, fn) {
    if (!this.event[name]) {
      //一个事件可能有多个监听者
      this.event[name] = [];
    };
    this.event[name].push(fn);
  };
  /**触发事件 
  * @输入 事件名 name ， 剩余参数(触发的事件名对应的回调数组中，回调函数的参数（不定参）)。
  * @输出 undefined
  * @功能 触发事件名对应的回调数组
  */
  emit (name, ...args) {
    //遍历要触发的事件对应的数组回调函数。依次调用数组当中的函数，并把参数传入每一个cb。
    this.event[name] && this.event[name].forEach(fn => {
      fn(...args)
    });
  };
  /**只触发一次事件 
  * @输入 事件名 name ，回调函数fn
  * @输出 undefined
  * @功能 借助变量cb,同时完成了对该事件的注册、对该事件的触发，并在最后取消该事
  */
  once (name, fn) {
    var cb = (...args) => {
      //触发
      fn(...args);
      //取消
      this.off(name, cb);
    };
    //监听
    this.on(name, cb);
  };
  /**取消事件 
  * @输入 事件名 name ，要取消的对应的回调
  * @输出 undefined
  * @功能 删除指定事件名，回调数组中的某一个回调。
  */
  off (name, offcb) {
    if (this.event[name]) {
      // 找到要取消事件在回调数组中的索引
      let index = this.event[name].findIndex((fn) => {
        return offcb === fn;
      });
      //通过索引删除掉对应回调数组中的回调函数。
      this.event[name].splice(index, 1);
      // 回调数组长度为0时（没有回调数组时）
      if (!this.event[name].length) {
        // 删除事件名
        delete this.event[name];
      }
    }
  }
}


const pubsub = new EventBus()

// 订阅
pubsub.on('1', () => {
  console.log('111')
})

// 订阅
pubsub.once('1', () => {
  console.log('once')
})

// 发布
pubsub.emit('1')
pubsub.emit('1')
pubsub.emit('1')
pubsub.emit('1')

// console.log(-0 == +0)
// console.log(-0 === +0)

// console.log(Object.is(+0, -0))  //false
// console.log(Object.is(NaN, NaN)) //true

