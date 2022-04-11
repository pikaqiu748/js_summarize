function shallowCopy (obj) {
  if (typeof obj !== 'object') return

  let newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj
}


var a = {
  name: 'li'
}
var b = {
  age: 18,
  name: 'haha'
}

// b.__proto__ = a

for (let key in b) {
  console.log(key)
}

var c = [1, 2, 3, 4, 5]
var d = [12, 23, 345]
// d.__proto__ = c

for (let key in d) {
  console.log(key)
}