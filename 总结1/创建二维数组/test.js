console.log(Array.from(Array(3), () => Array(3)))
console.log(Array(3).fill().map(() => Array(3)))

console.log(Array(3).fill().map(() => Array(3).fill().map(() => Array(3))))   //数组
// 还有一种for双重循环



var arr = new Array(3).fill(new Array(3).fill(0));
arr[1][1] = 2;
//输出结果为[ [ 0, 2, 0 ], [ 0, 2, 0 ], [ 0, 2, 0 ] ],
console.log(arr)


console.log(Array(3).fill()) //[ undefined, undefined, undefined ]

let arr01 = Array(3).fill([])
arr01[0][0] = 11
console.log(arr01)  //[ [ 11 ], [ 11 ], [ 11 ] ]


let arr02 = Array(3).fill().map(() => Array(3))
arr02[0][0] = 123
console.log(arr02)   //[ [ 123, <2 empty items> ], [ <3 empty items> ], [ <3 empty items> ] ]