// console.log([1, 2, 3, 4].map(num => {
//   if (num == 2) {
//     return num *= 2
//   }
//   return num

// }))


// let test = ['1', '2', '2', '3', '3', '4'].reduce((total, prev) => {
//   total[prev] == undefined ? total[prev] = 1 : total[prev]++
//   return total
// }, {})

// console.log(test)

// let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
// let nameNum = names.reduce((pre, cur) => {
//   if (cur in pre) {
//     pre[cur]++
//   } else {
//     pre[cur] = 1
//   }
//   return pre
// }, {})

// console.log(nameNum)



class Cat {
  constructor(color) {
    this.color = color
  }
  printColor (param) {
    console.log(this.color, param)
  }
}

let test1 = new Cat('red')
test1.printColor('xixi')



class Dog {
  constructor(color) {
    this.color = color
  }
}


let dog1 = new Dog('yellow')
test1.printColor.call(dog1, 'haha')
test1.printColor.apply(dog1, ['haha'])
let ll = test1.printColor.bind(dog1, 'xixixi')
ll()