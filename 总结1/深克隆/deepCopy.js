const deepCopy = function (obj) {
  if (typeof obj === 'object') {
    var result = obj.constructor === 'array' ? [] : {}
    for (let i in obj) {
      result[i] = typeof obj[i] === 'object' ? deepCopy(obj[i]) : obj[i]
    }
  } else {
    result = obj
  }
  return result
}

var b = {
  name: 'li',
  gender: {
    male: 'male',
    female: 'female'
  }
}
var a = deepCopy(b)

a.name = 'ahha'
console.log(a)
console.log(b)

// console.log([].constructor)
// console.log({}.constructor)
function test () {

}

// console.log(new test().constructor)