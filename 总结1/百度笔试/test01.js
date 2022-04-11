const check = (firstName, lastName) => {
  console.log(firstName)
  console.log(lastName)
  var firstName = "chen";
  function firstName () {
    console.log('this is firstName funtion');
  }
  lastName = () => {
    console.log("this is lastName fucntion")
  }
  console.log(firstName)
  console.log(lastName)
}

// 上面的形式相当于下面的写法。
const check01 = (firstName, lastName) => {
  function firstName () {
    console.log('this is firstName funtion');
  }
  var firstName;

  console.log(firstName)

  console.log(lastName

  // 下面的复制覆盖掉firstName
  firstName = "chen";

  // 函数表达式不会提升,覆盖掉上面的lastName
  lastName = () => {
    console.log("this is lastName fucntion")
  }
  console.log(firstName)
  console.log(lastName)
}


check("Zhao", 'vivienne');

check01("Zhao", 'vivienne')