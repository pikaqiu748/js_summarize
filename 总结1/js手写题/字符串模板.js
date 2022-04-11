function render (template, data) {
  // () 是为了提取匹配的字符串。表达式中有几个()就有几个相应的匹配字符串。
  // ()内的内容表示的是一个子表达式，()本身不匹配任何东西，也不限制匹配任何东西，只是把括号内的内容作为同一个表达式来处理，
  const reg = /\{\{(\w+)\}\}/; // 模板字符串正则
  if (reg.test(template)) { // 判断模板里是否有模板字符串
    // console.log(reg.exec(template))
    const name = reg.exec(template)[1]; // 查找当前模板里第一个模板字符串的字段
    template = template.replace(reg, data[name]); // 将第一个模板字符串渲染
    return render(template, data); // 递归的渲染并返回渲染后的结构
  }
  return template; // 如果模板没有模板字符串直接返回
}


let template = '我是{{name}}，年龄{{age}}，性别{{sex}}';
let person = {
  name: '布兰',
  age: 12
  
}
console.log(render(template, person)); // 我是布兰，年龄12，性别undefined
