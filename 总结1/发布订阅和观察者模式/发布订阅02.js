class Pubsub {
  constructor() {
    this.eventManagement = {}
  }


  on (eventName, cb) {
    if (!this.eventManagement[eventName]) {
      this.eventManagement[eventName] = [];
    }
    this.eventManagement[eventName].push(cb);
  }

  off (eventName, cb) {
    if (!this.eventManagement[eventName]) {
      return;
    }
    let targetIndex = this.eventManagement[eventName].findIndex(item => item === cb);
    this.eventManagement[eventName].splice(targetIndex, 1);
    if (this.eventManagement[eventName].length === 0) {
      delete this.eventManagement[eventName]
    }
  }

  emit (eventName, ...args) {
    if (!this.eventManagement[eventName]) {
      return;
    }
    this.eventManagement[eventName].forEach(cb => { cb(...args) })
  }

  once (eventName, cb) {
    let fn = (...args) => {
      cb(...args)
      this.off(eventName, cb)
    }
    this.on(eventName, fn)
  }
}


const pubsub = new Pubsub()

pubsub.on('1', () => {
  console.log('111')
})

pubsub.once('1', () => {
  console.log('once')
})


pubsub.emit('1')
pubsub.emit('1')