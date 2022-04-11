class MyPromise {
  constructor(executor) { // executor执行器
    this.status = 'pending' // 等待状态
    this.value = null // 成功或失败的参数
    this.fulfilledCallbacks = [] // 成功的函数队列
    this.rejectedCallbacks = [] // 失败的函数队列
    const that = this   //如果不想使用复制this的方法，可以将resolve，reject写成箭头函数形式

    function resolve (value) { // 成功的方法
      if (that.status === 'pending') {
        that.status = 'resolved'
        that.value = value
        that.fulfilledCallbacks.forEach(myFn => myFn()) //执行回调方法,异步时，会先执行then()将回调函数先放入对象回调数组中
      }
    }

    function reject (value) { //失败的方法
      if (that.status === 'pending') {
        that.status = 'rejected'
        that.value = value
        that.rejectedCallbacks.forEach(myFn => myFn()) //执行回调方法
      }
    }


    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }   //构造函数结束

  then (onFulfilled, onRejected) {
    // console.log('then')
    if (this.status === 'pending') {
      // 等待状态，添加回调函数到成功的函数队列
      // console.log('then立即执行', this)
      // 先缓存成功回调
      this.fulfilledCallbacks.push(() => {
        onFulfilled(this.value)
      })
      // 等待状态，添加回调函数到失败的函数队列
      // 缓存失败回调
      this.rejectedCallbacks.push(() => {
        onRejected(this.value)
      })
    }

    if (this.status === 'resolved') { // 支持同步调用
      console.log('this', this)
      onFulfilled(this.value)
    }

    if (this.status === 'rejected') { // 支持同步调用
      onRejected(this.value)
    }
  }

}

// 测试
function fn () {
  return new MyPromise(
    (resolve, reject) => {    //这里的两个参数，分别是构造函数中的两个函数
      setTimeout(() => {
        console.log('settimeout')
        if (Math.random() > 0.6) {
          resolve(1)
        } else {
          reject(2)
        }
      }, 1000)
    }
  )
}


// setTimeout 是异步代码，then 会马上执行，这个时候判断 Promise 状态，状态是 Pending，然而之前并没有判断等待这个状态
fn().then(   //这一行会先将then中的两个回调函数分别push到promise对象的回调数组中，然后等确定好promise的状态，调用相应回调数组中的函数

  res => {
    console.log('res', res) // res 1
  },
  err => {
    console.log('err', err) // err 2
  })



// 同步
new MyPromise((resolve, reject) => {
  reject(1)  //改变对象状态，
}).then(() => {
  console.log('success')
}, () => {
  console.log('failed')
})