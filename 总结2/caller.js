function haha () {
  function test () {
    console.log(arguments)
    console.log(Array.from(arguments))
    console.log([...arguments])
    console.log(test.caller)
    console.log(arguments.callee)
    console.log(typeof arguments)
  }
  test(1, 2, 3);
}

haha();