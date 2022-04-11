function* test () {
  yield Promise.resolve(1)
}

let gen = test();

console.log(gen.next())