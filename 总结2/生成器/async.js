async function test () {
  let res0 = await Promise.resolve(1)
  let res1 = await Promise.resolve(res0 + 1)
  try {
    var res2 = await Promise.reject(res0 + +res1 + 1)
  } catch (err) {
    console.log(err)
    return Promise.reject(err)
  }

  return res2;
}

// test().then(res => { console.log(res) })
test().catch(err => { console.log(err) })