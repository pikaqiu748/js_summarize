Function.prototype.myCall = function () {
  console.log(arguments)
  const args = Array.prototype.slice.call(arguments)
  const t = args.shift()
  // 谁调用myCall,this就指向谁。 fn调用myCall，this就指向它，t是传进来的一个对象，将该对象的
  // 属性指向fn，同时，在一个对象中的函数里，this指向该对象，该对象本来只有{x:10}，但是又增加了fn属性，所以打印出来多了fn属性，执行完后再删除该对象的fn属性，同时将fn的结果保存返回
  // const self = this
  // console.log('self',self)
  t.fn = this;
  // console.log(t)
  // console.log(args)
  // t是对象，fn是t的属性，t调用fn函数,所以fn函数中的this指向t
  const res = t.fn(...args)
  delete t.fn
  console.log(t)
  return res
}

function fn (a, b) {
  console.log('a', a)
  console.log('b', b)
  console.log('this', this)
  return 'hello'
}

const res = fn.myCall({ x: 10 }, 20, 30)
console.log('res:', res)