class EventEmitter {
  constructor() {
    this.subs = Object.create(null)
  }

  // 注册事件  {'click';[handler(),handler()],'change':[handler(),handler()]}
  $on (eventType, handler) {
    this.subs[eventType] = this.subs[eventType] || []
    this.subs[eventType].push(handler)
  }

  $emit (eventType) {
    if (this.subs[eventType]) {
      this.subs[eventType].forEach(handler => {
        handler()
      });
    }
  }
}


const em = new EventEmitter()

em.$on('click', function () {
  console.log('click1')
})

em.$on('click', () => {
  console.log('click2')
})

em.$on('change', () => {
  console.log('change1')
})

em.$on('change', () => {
  console.log('change2')
})

em.$emit('click')
em.$emit('change')