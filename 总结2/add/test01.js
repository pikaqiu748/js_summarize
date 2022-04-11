function getCurried () {
  let args_arr = [];
  let closure = function () {
    let args = Array.prototype.slice.call(arguments);
    if (args.length > 0) {
      // concat() 方法不会更改现有数组，而是返回一个新数组，其中包含已连接数组的值
      args_arr = args_arr.concat(args)
      return closure;
    }
    return args_arr.reduce((sum, curr) => sum + curr, 0)
  }
  return closure;
}

let add = getCurried();
console.log(add(1, 2, 3)())