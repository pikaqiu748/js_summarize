var x = 11;
var obb = {
  x: 222,
  y: {
    x: 333,
    obc: function f () {
      console.log(this)
      var x = 111;
      var obj = {
        x: 22,
        say: () => {
          console.log(this.x);
        }
      }
      obj.say()
    } //obc函数
  }
}
obb.y.obc()
