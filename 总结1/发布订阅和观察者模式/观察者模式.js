class Subject {
  constructor() {
    this.subs = []
  }

  add (watcher) {
    this.subs.push(watcher)
  }

  notify () {
    this.subs.forEach(watcher => {
      watcher.update()
    })
  }

}


class Watcher {

  update () {
    console.log('updated')
  }
}

var subject=new Subject()
subject.add(new Watcher())
subject.notify()