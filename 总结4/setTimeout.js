// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 1000 * i)
// }

// for (var i = 0; i < 3; i++) {
//   (function (j) {
//     setTimeout(() => {
//       console.log(j)
//     }, 1000)
//   })(i)
// }

for (var i = 0; i < 3; ++i) {
  setTimeout((i) => {
    console.log(i)
  }, 1000, i)
}

for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j)
    })
  })(i)
}

for(var i=0;i<3;i++){
  setTimeout((i)=>{
    console.log(i)
  },1000,i)
}