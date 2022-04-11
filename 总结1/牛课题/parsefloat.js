function sum () {
  var nResult = 0;
  for (var i = 0, l = arguments.length; i < l; i++) {
    nResult += parseFloat(arguments[i]) || 0;
    console.log(parseFloat(arguments[i]))
  }
  return nResult.toFixed(3) * 1000 / 1000;
}


console.log(sum(5, null, -5))