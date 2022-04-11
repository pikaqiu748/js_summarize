console.log(new Array(10).fill().map(() => new Array()))  //每一个都是独立的数组
console.log(new Array(10).fill([]))   //这种方式会同时改变所有的数组