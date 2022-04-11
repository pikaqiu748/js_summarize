
// 如果直接通过下列的方式进行数组复制是不可取的：
let arr1 = [1, 2];
let arr2 = arr1;
arr2[0] = 2;
console.log(arr1)



 arr1 = [1, 2];
 arr2 = [...arr1];
 console.log(arr2==arr1)



 let first=1
 console.log([...[1,2,3],first])


 console.log([...'hello'])