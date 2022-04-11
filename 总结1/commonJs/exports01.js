exports.name = 'li'
exports.age = 18

// 下面这种直接写成对象的形式无效
exports = {
  gender: 'male'
}

// 下面这种可以和最上面的一起用
module.exports.gender = 'male'


console.log('exports01')