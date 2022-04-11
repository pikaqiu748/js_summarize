

function getJson () {
  return new Promise((reslove, reject) => {
    setTimeout(function () {
      console.log(2)
      reslove(2)
    }, 2000)
  })
}

async function testAsync () {
  await getJson()
  console.log(3)
}

testAsync()


// 改为promise形式
// function getJson(){
//     return new Promise((resolve,rej)=>{
//         setTimeout(function(){
//             console.log(2)
//             resolve(2)
//           },2000)
//     })
//  }
// function testAsync() {
//     return Promise.resolve().then(()=>{
//         return getJson()
//     }).then(()=>{
//         console.log(3)
//     })
// }

// testAsync()