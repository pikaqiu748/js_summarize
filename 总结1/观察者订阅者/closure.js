
function first (first) {
  return function second (second) {
    return first + second
  }
}

let a = first(10)
let b = first(100)

console.log(a(10))
console.log(b(10))

