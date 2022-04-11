let cat = {
  name: 'miao'
}

function say () {
  console.log(this.name)
}

function eat (food1, food2) {
  console.log(food1 + food2)
}
say.call(cat)

eat.call(cat, 'fish', 'meat')

eat.apply(cat, ['food1', 'food2'])

//bind返回一个函数，必须手动调用，call和apply区别是，apply,传入多个参数时，必须要用数组，call可以直接用逗号隔开，传入多个参数
let fun = eat.bind(cat, 'fish', 'cow')
fun()

