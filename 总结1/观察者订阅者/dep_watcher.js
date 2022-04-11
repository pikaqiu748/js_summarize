class Sub {
  update () {
    console.log('updated')
  }
}

class Dep {
  constructor() {
    this.subs = []
  }

  addSub (sub) {
    if (sub && sub.update) {
      this.subs.push(sub)
    }
  }

  notify () {
    this.subs.forEach(sub => {
      sub.update()
    })
  }
}


let dep = new Dep()
let sub = new Sub()

dep.addSub(sub)

dep.notify()