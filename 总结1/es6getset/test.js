//先声明一个类
class Fruit {
  //构造函数中设置默认值
  constructor(name = '香蕉', size = '10斤') {
    this.name = name
    this.size = size
  }
  get getName () {
    return this.name
  }
  set setName (value) {
    this.name = value
  }
}

//set的使用
let f1 = new Fruit()
console.log('f1', f1)
//这里使用setName修改对象的属性
//这里切记直接赋值，setName不需要括号
f1.setName = '柿子'
console.log('f1', f1)

