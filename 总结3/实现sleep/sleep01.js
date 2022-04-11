// 第一种
function sleep (time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

sleep(2000).then(res => { console.log(res) })

// 第二种
function sleep01 (time, cb) {
  return new Promise(resolve => setTimeout(cb, time))
}

sleep01(2000, () => { console.log('sleep01') })

// 第三种
function sleep02 (time) {
  let startTime = new Date().getTime();
  while (new Date().getTime() - startTime < time) {
    continue;
  }
  console.log('sleep3')
}
sleep02(2000)



function test () {
  console.log('test')
}
setTimeout(test, 2000)