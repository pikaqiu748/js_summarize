class Pubsub {
  constructor() {
    this.eventMangement = {}
  }

  on (type, fn) {
    if (!(this.eventMangement[type])) {
      this.eventMangement[type] = []
    }
    this.eventMangement[type].push(fn)
  }

  off (type, cb) {
    if (this.eventMangement[type]) {
      let index = this.eventMangement[type].findIndex(fn => {
        return fn === cb
      })
      this.eventMangement[type].splice(index, 1)
      if (!(this.eventMangement[type].length)) {
        delete this.eventMangement[type]
      }
    }
  }

  emit (type, ...args) {
    if (this.eventMangement[type]) {
      this.eventMangement[type].forEach(fn => {
        fn(...args)
      })
    }
  }

  once (type, fn) {
    var cb = (...args) => {
      fn(...args)
      this.off(type, cb)
    }
    this.on(type, cb)
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