function People(){
  this.sayHi = function () {
    console.log('hi');
    return this;
  }
  this.sleep = function (delay) {
    let start = new Date().getTime();
    while (new Date().getTime() - start < delay) {
      continue;
    }
    console.log('sleep:', delay)
    return this;
  }
}


new People().sayHi().sleep(2000).sayHi()