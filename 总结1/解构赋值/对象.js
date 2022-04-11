let jsonData = {
  id: 42,
  status: "OK",
  data: [867, 5309]
};

let { id, status, data: number } = jsonData;

console.log(id, status, number);
// 42, "OK", [867, 5309]


// 加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。
// const { SourceMapConsumer, SourceNode } = require("source-map");
