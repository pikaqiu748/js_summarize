function add (func) {
  return func
}

function one (func = 3) {
  return func
}

function two (func = 3) {
  return func
}

console.log(one(add(two(100))))
console.log(two(add(one(200))))