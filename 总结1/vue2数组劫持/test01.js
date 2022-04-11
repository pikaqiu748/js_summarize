const ARRAY_METHODS = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
const newArray = Object.create(Array.prototype)

// console.log(newArray.__proto__ == Array.prototype)  //true


ARRAY_METHODS.forEach(method => {
  newArray[method] = function () {
    console.log('调用的拦截方法')
    Array.from(arguments).forEach(arg => {
      // console.log(arg)
    })
    console.log(arguments)
    console.log([...arguments])
    Array.prototype[method].apply(this, [...arguments])
  }
})


var test = [1, 2, 3, 4];
test.__proto__ = newArray
test.push(1)
console.log(test)
