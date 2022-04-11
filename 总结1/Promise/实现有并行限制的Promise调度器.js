// class Scheduler {
//   add (promiseCreator) { ... }
//   // ...
// }

// const timeout = time => new Promise(resolve => {
//   setTimeout(resolve, time);
// })

// const scheduler = new Scheduler();

// const addTask = (time, order) => {
//   scheduler.add(() => timeout(time).then(() => console.log(order)))
// }

// addTask(1000, '1');
// addTask(500, '2');
// addTask(300, '3');
// addTask(400, '4');

// output: 2 3 1 4
// 整个的完整执行流程：

// 其实1、2两个任务开始执行
// 500ms时，2任务执行完毕，输出2，任务3开始执行
// 800ms时，3任务执行完毕，输出3，任务4开始执行
// 1000ms时，1任务执行完毕，输出1，此时只剩下4任务在执行
// 1200ms时，4任务执行完毕，输出4


class Scheduler {
  constructor() {
    this.queue = [];
    this.maxCount = 2;
    this.runCounts = 0;
  }
  add (promiseCreator) {
    this.queue.push(promiseCreator);
  }

  request () {
    if (!this.queue || !this.queue.length) {
      return;
    }
    this.queue.shift()().then(() => {
      this.request();
    });
  }

  // 最后一个启动函数，需要将maxCount个Promise启动起来：
  taskStart () {
    for (let i = 0; i < this.maxCount; i++) {
      this.request();
    }
  }

}

const timeout = time => new Promise(resolve => {
  setTimeout(resolve, time);
})

const scheduler = new Scheduler();

const addTask = (time, order) => {
  scheduler.add(() => timeout(time).then(() => console.log(order)))
}


addTask(3000, '1');
addTask(1000, '2');
addTask(300, '3');
addTask(400, '4');

scheduler.taskStart()
