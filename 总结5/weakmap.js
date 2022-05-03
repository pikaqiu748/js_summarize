//对于weakmap
//key只能是对象，不能是原始数据类型（字符串、数字、true或false，null，undefined，symbol等类型）
//WeakMap中的键是无法枚举的
//不同于Map对象，Map对象是可以枚举的，有keys()、values()、entries()方法，还可以使用forEach遍历。
//但是WeakMap无法枚举，WeakMap的这个特性也可以用来模拟私有属性。


const myWm = new WeakMap();
class Fish {
  constructor(name) {
    myWm.set(this, {
      _fishbone: ['草鱼', '鲫鱼', '青鱼', '鲤鱼', '鲢鱼', '鳙鱼', '鳊鱼', '翘嘴', '餐条'],
    });
    this.name = name;
  }

  isBone () {
    return myWm.get(this)._fishbone.includes(this.name);
  }
}

// 测试，买了两条鱼
let fish1 = new Fish('草鱼');
let fish2 = new Fish('回鱼');

// 返回 true，有刺
console.log(fish1.isBone());
// 返回 false，没有肌间刺
console.log(fish2.isBone());

// 上面的代码中，_fishbone虽然和Fish对象相关联，但是却无法通过Fish对象直接获取。

// 如果不知道名称，也无法通过myWm遍历出来。