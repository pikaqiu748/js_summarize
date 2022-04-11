console.log('1' == 1)


// JS中的==对两边的对象进行比较时，undefined将被转换成数字是NaN，也就是说，undefined被看成基本值 
console.log(false == undefined)  //false
console.log(false == null)  //false

console.log(1 == true);//true转换成数字也是1  
console.log('1' == true);//将字符串'1'与true都转换成数字  


//虽然字符串'abc'转换成布尔值是true，但这里会返回false  
//因为'abc'转换成数字是NaN，而true转换成数字是1  
// console.log('abc' == true);

// '123'转换成数字就是123
console.log(123 == '123');//同理，true  


console.log('11' == true)  //false  11!==1




console.log('1' == true)   //1==1
console.log('1234' == '123')
console.log(undefined == NaN)

console.log(typeof NaN) //number类型


console.log(null == undefined)  //true
console.log(null === undefined) //false

// typeof undefined 返回undefined

// typeof null返回object
// 所以
undefined === null //false