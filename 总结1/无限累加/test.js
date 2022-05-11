function getAdd () {
  let args_arr = [];
  function closure () {
    let args = Array.prototype.slice.call(arguments);
    if (args.length > 0) {
      args_arr = args_arr.concat(args);
      return closure;
    }
    return args_arr.reduce((sum, prev) => sum + prev, 0)
  }
  return closure;
} 

 
let add = getAdd();
console.log(add(1,2,3)(1,2)())