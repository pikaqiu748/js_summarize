// 指的是将一个接受多个参数的函数 变为 接受一个参数返回一个函数的固定形式，这样便于再次调用，例如f(1)(2)

function add (one) {
  return (two, three, four) => {
    return five => {
      return one + two + three + four + five;
    }
  }
}

console.log(add(1)(1, 2, 3)(2))