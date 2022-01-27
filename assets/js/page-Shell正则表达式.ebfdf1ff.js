(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1168:function(v,_,t){"use strict";t.r(_);var d=t(1),r=Object(d.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"正则表达式介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式介绍"}},[v._v("#")]),v._v(" 正则表达式介绍")]),v._v(" "),t("p",[v._v("正则表达式是一种文本模式匹配，包括普通字符（例如：a到z之间的字母）和特殊字符（称为”元字符“）。它是一种字符串匹配的模式，可以用来检查一个字符串是否含有某子字串、将匹配的子串替换或者从某个字符串中取出某个条件的子串。")]),v._v(" "),t("p",[v._v("正则表达式就像数学公式一样，我们可以通过正则表达式提供的一些特殊字符来生成一个匹配对应字符串的公式，用此来从海量数据中匹配出自己想要的数据。")]),v._v(" "),t("p",[v._v("正则表达式是一个第三方产品，常被计算机语言广泛使用，比如：Shell、PHP、python、Java、js 等。")]),v._v(" "),t("p",[v._v("shell 也支持正则表达式，但不是所有的命令都支持正则表达式，常见的命令中只有 "),t("code",[v._v("grep")]),v._v("、"),t("code",[v._v("sed")]),v._v("、"),t("code",[v._v("awk")]),v._v(" 命令支持正则表达式。")]),v._v(" "),t("h2",{attrs:{id:"特殊字符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特殊字符"}},[v._v("#")]),v._v(" 特殊字符")]),v._v(" "),t("h3",{attrs:{id:"定位符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#定位符"}},[v._v("#")]),v._v(" 定位符：")]),v._v(" "),t("p",[v._v("同时锚定开头和结尾，做精确匹配；单一锚定开头或结尾，做模糊匹配。")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("定位符")]),v._v(" "),t("th",[v._v("说明")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("^")]),v._v(" "),t("td",[v._v("锚定开头； ^a：以 a 开头，默认锚定一个字符")])]),v._v(" "),t("tr",[t("td",[v._v("$")]),v._v(" "),t("td",[v._v("锚定结尾； a$：以 a 结尾，默认锚定一个字符")])])])]),v._v(" "),t("h3",{attrs:{id:"匹配符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#匹配符"}},[v._v("#")]),v._v(" 匹配符：")]),v._v(" "),t("p",[v._v("匹配字符串")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("匹配符")]),v._v(" "),t("th",[v._v("说明")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v(".")]),v._v(" "),t("td",[v._v("匹配除回车以外的任意一个字符")])]),v._v(" "),t("tr",[t("td",[v._v("( )")]),v._v(" "),t("td",[v._v("字符串分组；(a|b)：a 或 b")])]),v._v(" "),t("tr",[t("td",[v._v("[ ]")]),v._v(" "),t("td",[v._v("字符类，匹配方括号 [ ] 之中的一个字符，[1-9]")])]),v._v(" "),t("tr",[t("td",[v._v("[^]")]),v._v(" "),t("td",[v._v("匹配方括号 [ ] 中字符类之外的一个字符，[^a-g]")])]),v._v(" "),t("tr",[t("td",[v._v("\\")]),v._v(" "),t("td",[v._v("转义字符")])]),v._v(" "),t("tr",[t("td",[v._v("|")]),v._v(" "),t("td",[v._v("或")])])])]),v._v(" "),t("h3",{attrs:{id:"限定符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#限定符"}},[v._v("#")]),v._v(" 限定符：")]),v._v(" "),t("p",[v._v("对前面的字符或者字符串做限定说明。")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("限定符")]),v._v(" "),t("th",[v._v("说明")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("*")]),v._v(" "),t("td",[v._v("某个字符之后出现，表示该字符不出现或出现多次；0 次及以上")])]),v._v(" "),t("tr",[t("td",[v._v("?")]),v._v(" "),t("td",[v._v("某个字符之后出现，表示该字符出现一次或不出现；0 次或 1 次")])]),v._v(" "),t("tr",[t("td",[v._v("+")]),v._v(" "),t("td",[v._v("某个字符之后出现，表示其前面字符出现一次或多次；1 次及以上")])]),v._v(" "),t("tr",[t("td",[v._v("{n,m}")]),v._v(" "),t("td",[v._v("某个字符之后出现，表示该字符出现最少 n 次，最多 m 次")])]),v._v(" "),t("tr",[t("td",[v._v("{m}")]),v._v(" "),t("td",[v._v("某个字符之后出现，表示该字符正好出现了 m 次")])])])]),v._v(" "),t("h3",{attrs:{id:"元字符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#元字符"}},[v._v("#")]),v._v(" 元字符：")]),v._v(" "),t("p",[v._v("元字符是一种 Perl 风格的正则表达式，只有一部分文本处理工具支持它，并不是所有的文本处理工具都支持。shell 好行并不支持元字符的正则表达式。")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("元字符")]),v._v(" "),t("th",[v._v("说明")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("\\b")]),v._v(" "),t("td",[v._v("匹配一个单词边界，也就是指单词和空格间的位置。")])]),v._v(" "),t("tr",[t("td",[v._v("\\B")]),v._v(" "),t("td",[v._v("匹配非单词边界。")])]),v._v(" "),t("tr",[t("td",[v._v("\\d")]),v._v(" "),t("td",[v._v("匹配一个数字字符。等价于 [0-9]")])]),v._v(" "),t("tr",[t("td",[v._v("\\D")]),v._v(" "),t("td",[v._v("匹配一个非数字字符。等价于 [^0-9]")])]),v._v(" "),t("tr",[t("td",[v._v("\\f")]),v._v(" "),t("td",[v._v("匹配一个换页符。")])]),v._v(" "),t("tr",[t("td",[v._v("\\n")]),v._v(" "),t("td",[v._v("匹配一个换行符。")])]),v._v(" "),t("tr",[t("td",[v._v("\\r")]),v._v(" "),t("td",[v._v("匹配一个回车符。")])]),v._v(" "),t("tr",[t("td",[v._v("\\s")]),v._v(" "),t("td",[v._v("匹配任何空白字符，包括空格、制表符、换页符等等。等价于 [ \\f\\n\\r\\t\\v]")])]),v._v(" "),t("tr",[t("td",[v._v("\\S")]),v._v(" "),t("td",[v._v("匹配任何非空白字符。等价于 [^ \\f\\n\\r\\t\\v]")])]),v._v(" "),t("tr",[t("td",[v._v("\\t")]),v._v(" "),t("td",[v._v("匹配一个制表符。")])]),v._v(" "),t("tr",[t("td",[v._v("\\v")]),v._v(" "),t("td",[v._v("匹配一个垂直制表符。")])]),v._v(" "),t("tr",[t("td",[v._v("\\w")]),v._v(" "),t("td",[v._v("匹配包括下划线的任何单词字符。等价于[A-Za-z0-9_]")])]),v._v(" "),t("tr",[t("td",[v._v("\\W")]),v._v(" "),t("td",[v._v("匹配任何非单词字符。等价于 [^A-Za-z0-9_]")])])])]),v._v(" "),t("h3",{attrs:{id:"posix-特殊字符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#posix-特殊字符"}},[v._v("#")]),v._v(" POSIX 特殊字符：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("特殊字符")]),v._v(" "),t("th",[v._v("说明")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("[:alnum:]")]),v._v(" "),t("td",[v._v("匹配任意字母数字字（0-9、a-z、A-Z）")])]),v._v(" "),t("tr",[t("td",[v._v("[:alpha:]")]),v._v(" "),t("td",[v._v("匹配任意字母，大写或小写（a-z、A-Z）")])]),v._v(" "),t("tr",[t("td",[v._v("[:digit:]")]),v._v(" "),t("td",[v._v("匹配任意数字（0-9）")])]),v._v(" "),t("tr",[t("td",[v._v("[:graph:]")]),v._v(" "),t("td",[v._v("非空字符（非空格控制字符）")])]),v._v(" "),t("tr",[t("td",[v._v("[:lower:]")]),v._v(" "),t("td",[v._v("小写字符（a-z）")])]),v._v(" "),t("tr",[t("td",[v._v("[:upper:]")]),v._v(" "),t("td",[v._v("大写字符（A-Z）")])]),v._v(" "),t("tr",[t("td",[v._v("[:cntrl:]")]),v._v(" "),t("td",[v._v("控制字符")])]),v._v(" "),t("tr",[t("td",[v._v("[:print:]")]),v._v(" "),t("td",[v._v("非控制字符（包括空格）")])]),v._v(" "),t("tr",[t("td",[v._v("[:punct:]")]),v._v(" "),t("td",[v._v("标点符号")])]),v._v(" "),t("tr",[t("td",[v._v("[:blank:]")]),v._v(" "),t("td",[v._v("空格和 TAB 字符")])]),v._v(" "),t("tr",[t("td",[v._v("[:xdigit:]")]),v._v(" "),t("td",[v._v("16 进制数字")])]),v._v(" "),t("tr",[t("td",[v._v("[:space:]")]),v._v(" "),t("td",[v._v("所有空白字符（新行、空格、制表符）")])])])]),v._v(" "),t("p",[t("strong",[v._v("注意：")])]),v._v(" "),t("p",[v._v("[[  ]] 双中括号的意思：第一个中括号是匹配符 [ ]，匹配中括号 [ ] 中的任意的一个字符；第二个中括号 [ ] 是格式，如 [:digit:]。")]),v._v(" "),t("p",[v._v("例：")]),v._v(" "),t("blockquote",[t("p",[v._v("匹配中文汉字： [\\u4e00-\\u9fa5]")]),v._v(" "),t("p",[v._v("匹配 e-mail 地址：\\w+([-+.]\\w+)"),t("em",[v._v("@\\w+([-.]\\w+)")]),v._v(".\\w+([-.]\\w+)*")]),v._v(" "),t("p",[v._v("匹配网址 URL：http://(/[\\w-]+.)+[\\w-]+(/[\\w- ./?%&=]*)?")])]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("补充")]),v._v(" "),t("p",[v._v("Linux 的三剑客 "),t("code",[v._v("grep")]),v._v("、"),t("code",[v._v("sed")]),v._v("、"),t("code",[v._v("awk")]),v._v(" 都支持正则表达式")]),v._v(" "),t("p",[v._v("后续将学习三剑客的命令")])])])}),[],!1,null,null,null);_.default=r.exports}}]);