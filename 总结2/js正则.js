var str = "123aaa456";

// 正则表达式中“?”的用法大概有以下几种
// 1、直接跟随在子表达式后面
// 这种方式是最常用的用法，具体表示匹配前面的一次或者0次，类似于{0,1}，如：abc(d)?可匹配abc和abcd

// 2.非贪婪匹配,如正则表达式 \S+c 匹配字符串aaaacaaaaaaac的结果是aaaacaaaaaaac，而\S+?c则会优先匹配aaaac
var re = /\d+?/g;

console.log(re.test(str))



console.log(str.match(re))
