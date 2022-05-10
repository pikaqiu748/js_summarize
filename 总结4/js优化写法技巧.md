// 判断多个值是否等于某个值
if (x === 'abc' || x === 'def' || x === 'ghi' || x === 'jkl') {
}
//shorthand
<!-- 可以在数组中存储多个值，并且可以使用数组的 includes 方法 -->
if (['abc', 'def', 'ghi', 'jkl'].includes(x)) {
}

<!-- -------------------------------------------------------------------------->
If … else 的缩写法

let test: boolean;if (x > 100) {
    test = true;
} else {
    test = false;
}
// Shorthand
let test = (x > 10) ? true : false;

//or we can use directly
let test = x > 10;console.log(test);

<!-- -------------------------------------------------------------------------->
对 Null、Undefined、Empty 这些值的检查
if (test1 !== null || test1 !== undefined || test1 !== '') {
    let test2 = test1;
}
// Shorthand
let test2 = test1 || '';

<!-- ------------------------------------------------------------------------ -->

赋默认值

我们可以使用 OR(||) 短路运算来给一个变量赋默认值，如果预期值不正确的情况下。
//Longhand 
let imagePath; 
let path = getImagePath(); 
if(path !== null && path !== undefined && path !== '') { 
  imagePath = path; 
} else { 
  imagePath = 'default.jpg'; 
} 

//Shorthand 
let imagePath = getImagePath() || 'default value';

<!-- ------------------------------------------------------------------------ -->
合并数组
let arr1 = [20,30];
//Longhand
let arr2 = arr1.concat([60,80]);
// [20, 30, 60, 80]
//Shorthand
let arr2 = [...arr1,60,80];
// [20, 30, 60, 80]

<!-- ------------------------------------------------------------------------ -->
重复一个字符串多次
为了重复一个字符串 N 次，你可以使用for循环。但是使用repeat()方法，我们可以一行代码就搞定。
//Longhand 
let str = ''; 
for(let i = 0; i < 5; i ++) { 
  str += 'Hello '; 
} 
console.log(str); // Hello Hello Hello Hello Hello 
// Shorthand 
'Hello '.repeat(5);
'sorry\n'.repeat(100);
<!-- ------------------------------------------------------------------------ -->
双非位运算符 (~~)
双非位运算符是Math.floor()方法的缩写。
//Longhand 
const floor = Math.floor(6.8); // 6 
// Shorthand 
const floor = ~~6.8; // 6

<!-- ------------------------------------------------------------------------ -->
找出数组中的最大和最小数字
我们可以使用 for 循环来遍历数组中的每一个值，然后找出最大或最小值。我们还可以使用 Array.reduce() 方法来找出数组中的最大和最小数字。
但是使用扩展符号，我们一行就可以实现。
// Shorthand 
const arr = [2, 8, 15, 4]; 
Math.max(...arr); // 15 
Math.min(...arr); // 2
<!-- -------------------------------------------------------------------------->
指数幂
我们可以使用Math.pow()方法来得到一个数字的幂。有一种更短的语法来实现，即双星号 (**)。
//Longhand 
const power = Math.pow(4, 3); // 64 
// Shorthand 
const power = 4**3; // 64
<!-- ------------------------------------------------------------------------ -->
字符串转成数字
//Longhand 
let total = parseInt('453'); 
let average = parseFloat('42.6'); 
//Shorthand 
let total = +'453'; 
let average = +'42.6';

<!-- ------------------------------------------------------------------------ -->
数字分隔符
// 旧语法
let number = 98234567

// 新语法
let number = 98_234_567

<!-- ------------------------------------------------------------------------ -->
简化 switch
// Longhand
switch (data) {
  case 1:
    test1();
  break;

  case 2:
    test2();
  break;

  case 3:
    test();
  break;
  // And so on...
}

// Shorthand
var data = {
  1: test1,
  2: test2,
  3: test
};

data[anything] && data[anything]();


<!-- ------------------------------------------------------------------------ -->
转换Boolean型
const isTrue  = !0;
const isFalse = !1;
const alsoFalse = !!0;

console.log(isTrue); // Result: true
console.log(typeof true); // Result: "boolean"

<!-- ------------------------------------------------------------------------ -->
当我们需要在一个对象数组中按属性值查找特定对象时，find 方法很有用。
const data = [{
        type: 'test1',
        name: 'abc'
    },
    {
        type: 'test2',
        name: 'cde'
    },
    {
        type: 'test1',
        name: 'fgh'
    },
]function findtest1(name) {
    for (let i = 0; i < data.length; ++i) {
        if (data[i].type === 'test1' && data[i].name === name) {
            return data[i];
        }
    }
}
//Shorthand
filteredData = data.find(data => data.type === 'test1' && data.name === 'fgh');
console.log(filteredData); // { type: 'test1', name: 'fgh' }
