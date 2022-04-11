变量类型是以二进制存储在计算机中的， 在 JavaScript 中二进制前三位都为 0 的话会被判断为 object 类型， null 的二进制表示是全 0， 自然前三位也是 0， 所以执行 typeof 时会返回“object”。
000：对象
001：整数
010：浮点数
100：字符串
110：布尔



null和undefined转换成number数据类型
null 默认转成 0
undefined 默认转成 NaN