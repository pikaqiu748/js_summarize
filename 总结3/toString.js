console.log([1, 2, 3].toString())  //1,2,3

delete Array.prototype.toString    //删除自身上重写的toString属性后，就会直接找到Object.prototype上的toString
console.log([1, 2, 3].toString())  //[object Array]

console.log(Object.prototype.toString(1)) //[object Object]


// 1、获取对象的类名（对象类型）。2、然后将[object、获取的类名、]组合并返回。
// 不加call改变this作用域时，this指向的时Object.prototype
// call是用来回去类名的
console.log(Object.prototype.toString.call(1))  //[object Number]
