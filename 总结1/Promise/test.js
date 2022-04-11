class myPromise {
  constructor(executor) {
    this.status = 'pending';
    this.value = null;
    this.onFullfilled = [];
    this.onRejected = [];
    const that = this;

    function resolve (value) {
      if (that.pending === 'pending') {
        that.status = 'fullfilled';
        that.value = value;
        that.onFullfilled.forEach(fn => fn())
      }
    }

    function reject (err) {
      if (that.status === 'pending') {
        that.status = 'rejected';
        that.value = err;
        that.onRejected.forEach(fn => fn());
      }
    }

    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  then (resolve, reject) {
    
  }
}