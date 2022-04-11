const axios = require('axios')

async function test1 () {
  // const { data } = await axios.get('http://jsonplaceholder.typicode.com/posts?id=1')
  // // 这里是data数据
  // console.log(data)
  // // 因为在async里面，所以返回出去是一个promise对象
  // return data

  return axios.get('http://jsonplaceholder.typicode.com/posts?id=1')
}

// 使用返回的promise对象，进行then操作
test1().then(res => {
  console.log(res.data)
  return res.data
}).then(res=>{
  console.log(res)
})
