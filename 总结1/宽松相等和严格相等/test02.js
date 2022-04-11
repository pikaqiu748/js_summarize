console.log('1' == true)  //二者都转化为1
console.log(1 == true) //true转化为1
console.log(123 == '123') //"123"转换为数字


// 比较操作符 == 不会自动转换 undefined 和 null,所以用undefined和null与其他类型比较时为false


// null 参与数值计算时可以自动转换为 0，undefined 只能转换为 NaN

console.log(undefined == null)   //true

console.log(undefined === null)  //false


// undefined和null区别
console.log(typeof undefined)  //undefined
console.log(typeof NAN)  //undefined
console.log(typeof null)   //object