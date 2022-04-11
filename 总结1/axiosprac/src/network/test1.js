
// import axios from "axios"
const axios = require('axios')

// axios({
//   method: 'get',
//   url: 'http://jsonplaceholder.typicode.com/posts/55',
// }).then(res => {
//   const {data}=res
//   console.log(data)
// })


// axios.get('http://jsonplaceholder.typicode.com/postss?id=55').then(res=>{
//   const {data}=res
//     console.log(data)
// },err=>{
//   console.log("ahha",err)
// })


// axios.get('http://jsonplaceholder.typicode.com/postss?id=55').then(res=>{
//   const {data}=res
//     console.log(data)
// }).catch(err=>{
//   console.log("ahha",err)
// })


// 'http://jsonplaceholder.typicode.com/posts?id=55'
// 'http://jsonplaceholder.typicode.com/posts?id=55'
axios.get('http://jsonplaceholder.typicode.com/posts?id=55').then(res => {
  const { data } = res
  console.log('data1:', data)
  return data
}).then(data2 => {
  axios.get(`http://jsonplaceholder.typicode.com/comments?id=${data2[0].id}`).then(res => {
    const { data } = res
    console.log('data3', data)
    return data
  }).then(res => {
    axios.get(`http://jsonplaceholder.typicode.com/posts?id=${res[0].id}`).then(res => {
      const { data } = res
      console.log(data)
      return data
    }).then(res => {
      // 参数传递
      axios.get('http://jsonplaceholder.typicode.com/posts/', {
        params: {
          id: res[0].id
        }
      }).then(res => {
        console.log(res.data)
      })
    })
  })
})






