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

  static resolve (value) { // 成功的方法
    // console.log('resolve')
    if (value instanceof MyPromise) {
      return value;
    } else {
      return new MyPromise((resolve, reject) => resolve(value))
    }
  }

  static reject (reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason)
    })
  }

  static all (promiseArr) {
    const len = promiseArr.length;
    const values = new Array(len);
    // 记录已经成功执行的promise个数
    let count = 0;
    return new Promise((resolve, reject) => {
      for (let i = 0; i < len; i++) {
        // Promise.resolve()处理，确保每一个都是promise实例
        Promise.resolve(promiseArr[i]).then(
          val => {
            values[i] = val;
            count++;
            // 如果全部执行完，返回promise的状态就可以改变了
            if (count === len) resolve(values);
          },
          err => reject(err),
        );
      }
    })
  }

  static race (promiseArr) {
    return new Promise((resolve, reject) => {
      promiseArr.forEach(p => {
        Promise.resolve(p).then(
          val => resolve(val),
          err => reject(err),
        )
      })
    })
  }



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



function resolvePromise (res, resolve, reject) {
  if (res instanceof MyPromise) {
    res.then(resolve, reject)
  } else {
    resolve(res)
  }
}


const p1 = new MyPromise((resolve, reject) => {
  resolve("p1")
})

const p2 = new MyPromise((resolve, reject) => {
  reject("p2")
})


// 测试all
// MyPromise.all([p1, p2,]).then(res => {
//   console.log(res)
// }, err => {
//   console.log('err', err)
// })


// 测试一下race
const race1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 1)
})

const race2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 2)
})


Promise.race([race1, race2]).then((value) => {
  console.log(value) // 2
})

Promise.race([race1, race2, 3]).then((value) => {
  console.log(value) // 3
})
