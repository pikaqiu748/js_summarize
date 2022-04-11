class promise {
  constructor(exectutor) {
    this.status = 'pending';
    this.value = null;
    this.onFullFilled = [];
    this.onRejected = [];
    const self = this;
    function resolve (value) {
      if (self.status === 'pending') {
        self.status = 'fullfilled';
        self.value = value;
        self.onFullFilled.forEach(fn => fn())
      }
    }

    function reject (value) {
      if (self.status === 'pending') {
        self.status = 'rejected';
        self.value = value;
        self.onRejected.forEach(fn => fn())
      }
    }

    try {
      exectutor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  then (resolve, reject) {
    if (this.status === 'pending') {
      this.onFullFilled.push(() => {
        resolve(this.value)
      })
      this.onRejected.push(() => {
        reject(this.value)
      })
    }

    if (this.status === 'fullfilled') {
      resolve()
    }
    if (this.status === 'rejected') {
      reject()
    }

  }
}

function test () {
  return new promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve()
      } else {
        reject()
      }
    }, 500)
  })
}


test().then(() => {
  console.log('success')
}, () => {
  console.log('failed')
})


// 同步

new promise((resolve, reject) => {
  reject()
}).then(() => {
  console.log('success同步')
}, () => {
  console.log('failed同步')
})