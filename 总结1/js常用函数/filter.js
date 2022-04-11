var a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var b = a.filter(item => {
  return item % 2 === 0
})

console.log(b)