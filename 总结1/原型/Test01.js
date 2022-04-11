class Person {
  constructor(name) {
    this.name = name
  }
  drink () {
    console.log('drinking')
  }
}

class Student extends Person {
  constructor(name, age) {
    super(name)
    this.age = age
  }
  introduce () {
    console.log(this.name, this.age, this.gender)
  }
}

class Test extends Student {
  constructor(name, age, gender) {
    super(name, age)
    this.gender = gender
  }
}

const test = new Test('lisi', 18, 'male')
// test.drink()
// test.introduce()

const f1 = () => {
  console.log(this)
}

const test02 = {
  id: '1',
  init: {
    xixi: {
      haha: () => {
        console.log(this)
      }
    }
  }
}


function test03(){
  console.log(this)
  const test={
    haha:()=>{
      console.log(this)
    },
    say(){
      console.log(this)
    }
  }
  test.haha()
  test.say()
}

test03()

