let arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 'NaN', 0, 0, 'a', 'a', {}, {}];


console.log([...new Set(arr)])   //缺点：不能过滤重复的Object。