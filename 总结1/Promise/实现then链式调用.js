class MyPromise {
  constructor(executor) { // executor执行器
    this.status = 'pending' // 等待状态
    this.value = null // 成功或失败的参数
    this.fulfilledCallbacks = [] // 成功的函数队列
    this.rejectedCallbacks = [] // 失败的函数队列
    const that = this   //如果不想使用复制this的方法，可以将resolve，reject写成箭头函数形式

    function resolve (value) { // 成功的方法
      // console.log('resolve')
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
    const promise2 = new MyPromise((resolve, reject) => {
      // console.log('new promise')
      if (this.status === 'resolved') {
        const res_resolve = onFulfilled(this.value);
        // console.log(res_resolve)
        resolvePromise(res_resolve, resolve, reject)
        // resolve(res_resolve)
      } else if (this.status === 'rejected') {
        onRejected(this.value);
      } else if (this.status === 'pending') {
        this.onFulfilled.push(onFulfilled);
        this.onRejected.push(onRejected);
      }
    })

    return promise2;
  }
}


function other () {
  return new MyPromise((resolve, reject) => {
    resolve('other')
  }).then(() => '1111')
}

function resolvePromise (res, resolve, reject) {
  if (res instanceof MyPromise) {
    res.then(resolve, reject)
  } else {
    resolve(res)
  }
}




const promise = new MyPromise((resolve, reject) => {
  // 目前这里只处理同步的问题
  resolve('success')
})

promise.then(value => {
  console.log(1)
  console.log('resolve', value)
  return '222'
}).then(value => {
  console.log(2)
  console.log('resolve', value)
})
