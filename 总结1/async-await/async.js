
async function test1 () {
  return 1
}

async function test2 () {
  return Promise.resolve(2)
}

const res1 = test1()
const res2 = test2()

console.log('test1: ',res1)
console.log('test2: ',res2)

async function test3 () {
  const p3 = Promise.resolve(3)
  console.log('p3" ',p3)
  p3.then(data => {
    console.log('data: ', data)
  })

  const data = await p3
  console.log('data:', data)
}

test3()

async function test4 () {

  const p4 = Promise.resolve(4)
  const data = await p4
  console.log('data:', data)
}

test4()


async function test5 () {

  const data = await test1()
  console.log('data:', data)
}

test5()

async function test6 () {
  const p5 = Promise.reject(6)
  try {
    const data = await p5
    console.log(data)
  }catch(err){
    console.log('err:',err)
  }
}

test6()