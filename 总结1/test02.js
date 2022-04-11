let stus = ['Sam', '22', '男'];
stus.size = 3;
// for...in 用来遍历对象中的属性：
for (let stu in stus) {
  console.log(stu);
}
// 结果: 0,1,2,size
