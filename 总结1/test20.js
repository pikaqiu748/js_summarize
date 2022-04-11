// var maxNum=function(n,k){
//   const numArr=[];
//   for(let i=1;i<=k;i++){
//       numArr[i-1]=n*i
//   }
//   let ans=[]
//   for(let i of numArr){
//     ans.push(parseInt([...i.toString()].reverse().join('')))
//   }
//   let max=0;
//   for(let i of ans){
//     if(i>max){
//       max=i
//     }
//   }
//   console.log(max)
//   return max;
// }

// maxNum(9,8)



var maxPerfectNum = function (n) {
  if (n>=100&&n% 100 === 0) {
    n = n - 1
  }
  let numArr = [...n.toString()];
  if (numArr.length === 1) {
    if(n>3){
      console.log(3)
      return 3;
    }
    else{
      console.log(n)
      return n;
    }
  }
  let ans = [];
  for (let i of numArr) {
    if (parseInt(i) > 3 || parseInt(i) === 0) {
      ans.push(3)
    } else {
      ans.push(parseInt(i))
    }
  }
  console.log(parseInt(ans.join('')))
  return parseInt(ans.join(''))
}


maxPerfectNum(12)