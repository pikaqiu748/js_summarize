// async await时不用try catch的方法

function to (promise) {
  return promise.then(res => {
    return [null, res];
  }).catch(err => {
    return [err];
  })
}

async function test () {
  let err, res;
  [err, res] = await to(Promise.reject(1))
  if (err) {
    console.log('err', err)
  } else {
    console.log('success', res)
  }
}

test();