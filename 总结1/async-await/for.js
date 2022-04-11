const a = [1, 2, 3, 4, 5]
for (let i in a) {
  // console.log(i)
}

const b = { '1': 'as', '2': 'fwer', '3': 'dwe' }
for (let i in b) {
  console.log(i)
}
for (let i of Object.values(b)) {
  console.log(i)
}