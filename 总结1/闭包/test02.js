var fn = []

function test () {
  for (var i = 0; i < 3; i++) {
    fn[i] = function () {
      console.log(i)
    }
  }
}


test()
fn[0]()
fn[1]()
fn[2]()