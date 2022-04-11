async function test (time) {
  console.log('time', time);
  await sleep(time);
  console.log('over')
}

function sleep (time) {
  return new Promise(resolve => setTimeout(resolve, time))
}

test(2000)