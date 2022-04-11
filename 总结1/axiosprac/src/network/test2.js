const axios = require('axios')

async function test1 () {
  const { data } = await axios.get('http://jsonplaceholder.typicode.com/posts?id=55')
  console.log(data)
}

// test1()


// Promise.all([axios.get('http://jsonplaceholder.typicode.com/posts?id=55'), axios.get('http://jsonplaceholder.typicode.com/posts?id=56')])
//   .then(res => {
//     // 所有请求都成功时
//     console.log(res[0].data)
//     console.log(res[1].data)
//   },
//     // 有一个失败，则失败
//     err => {
//       console.log(err)
//     })

// Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected，只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型），
// axios.get()返回一个promise对象，这个对象若成功，则执行then中的第一个函数，失败则执行第二个函数
async function test2 () {
  return axios.get('http://jsonplaceholder.typicode.com/posts',{
    params:{
      id:55
    }
  })
}

async function test3 () {
  return axios.get('http://jsonplaceholder.typicode.com/posts?id=56')
}

let p1 = test2()
let p2 = test3()

axios.all([p1, p2])
  .then(res => {
    // 所有请求都成功时
    console.log(res[0].data)
    console.log(res[1].data)
  },
    // 有一个失败，则失败
    err => {
      console.log(err)
    })
