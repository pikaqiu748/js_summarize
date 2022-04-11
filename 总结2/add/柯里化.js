function getCurriedAdd () {    // 在外部维护一个数组保存传递的变量   
  let args_arr = []    // 返回一个闭包   
  let closure = function () {
    // 本次调用传入的参数        
    let args = Array.prototype.slice.call(arguments)
    // 如果传进了新的参数       
    if (args.length > 0) {
      // 保存参数           
      args_arr = args_arr.concat(args)
      // 再次返回闭包，等待下次调用           
      // 也可以 return arguments.callee            
      return closure
    }
    // 没有传递参数，执行累加    
    return args_arr.reduce((total, current) => total + current)
  }
  return closure;
}



let curriedAdd = getCurriedAdd()


console.log(curriedAdd(1,2,3)())