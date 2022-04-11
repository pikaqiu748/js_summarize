function sleep (delay) {
  var start = (new Date()).getTime();
  while ((new Date()).getTime() - start < delay) {
    continue;
  }
  console.log('da')
}

sleep(2000)

console.log(new Date().getTime())   //得到时间戳