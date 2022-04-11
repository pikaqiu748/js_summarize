console.log(['1', '2', '3'].map(parseInt))

// 解决办法两种；
// 第一种
console.log(['1', '2', '3', '11'].map(num => parseInt(num)))   //默认十进制

// 第二种
console.log(['1', '2', '3'].map(Number))

console.log(parseInt('1',0))
