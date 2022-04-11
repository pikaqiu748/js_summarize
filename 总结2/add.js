var add = function () {
  let args_arr = [];
  let closure = function () {
    let args = Array.prototype.slice.call(arguments);
    if (args.length > 0) {
      args_arr = args_arr.concat(args);
      return closure;
    }
    return args_arr.reduce((prev, curr) => prev + curr)
  }
  return closure;
}

let addNum = add();
console.log(addNum(1, 1, 2)(4, 6)())