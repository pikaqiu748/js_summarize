function test () {
  let a = 1;
  return () => a++;
}

let fn=test()
console.log(fn())
console.log(fn())
console.log(fn())