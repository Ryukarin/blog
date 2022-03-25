<template><h2 id="正则表达式介绍" tabindex="-1"><a class="header-anchor" href="#正则表达式介绍" aria-hidden="true">#</a> 正则表达式介绍</h2>
<p>正则表达式是一种文本模式匹配，包括普通字符（例如：a到z之间的字母）和特殊字符（称为”元字符“）。它是一种字符串匹配的模式，可以用来检查一个字符串是否含有某子字串、将匹配的子串替换或者从某个字符串中取出某个条件的子串。</p>
<p>正则表达式就像数学公式一样，我们可以通过正则表达式提供的一些特殊字符来生成一个匹配对应字符串的公式，用此来从海量数据中匹配出自己想要的数据。</p>
<p>正则表达式是一个第三方产品，常被计算机语言广泛使用，比如：Shell、PHP、python、Java、js 等。</p>
<p>shell 也支持正则表达式，但不是所有的命令都支持正则表达式，常见的命令中只有 <code>grep</code>、<code>sed</code>、<code>awk</code> 命令支持正则表达式。</p>
<h2 id="特殊字符" tabindex="-1"><a class="header-anchor" href="#特殊字符" aria-hidden="true">#</a> 特殊字符</h2>
<h3 id="定位符" tabindex="-1"><a class="header-anchor" href="#定位符" aria-hidden="true">#</a> 定位符：</h3>
<p>同时锚定开头和结尾，做精确匹配；单一锚定开头或结尾，做模糊匹配。</p>
<table>
<thead>
<tr>
<th>定位符</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>^</td>
<td>锚定开头； ^a：以 a 开头，默认锚定一个字符</td>
</tr>
<tr>
<td>$</td>
<td>锚定结尾； a$：以 a 结尾，默认锚定一个字符</td>
</tr>
</tbody>
</table>
<h3 id="匹配符" tabindex="-1"><a class="header-anchor" href="#匹配符" aria-hidden="true">#</a> 匹配符：</h3>
<p>匹配字符串</p>
<table>
<thead>
<tr>
<th>匹配符</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>.</td>
<td>匹配除回车以外的任意一个字符</td>
</tr>
<tr>
<td>( )</td>
<td>字符串分组；(a|b)：a 或 b</td>
</tr>
<tr>
<td>[ ]</td>
<td>字符类，匹配方括号 [ ] 之中的一个字符，[1-9]</td>
</tr>
<tr>
<td>[^]</td>
<td>匹配方括号 [ ] 中字符类之外的一个字符，[^a-g]</td>
</tr>
<tr>
<td>\</td>
<td>转义字符</td>
</tr>
<tr>
<td>|</td>
<td>或</td>
</tr>
</tbody>
</table>
<h3 id="限定符" tabindex="-1"><a class="header-anchor" href="#限定符" aria-hidden="true">#</a> 限定符：</h3>
<p>对前面的字符或者字符串做限定说明。</p>
<table>
<thead>
<tr>
<th>限定符</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>*</td>
<td>某个字符之后出现，表示该字符不出现或出现多次；0 次及以上</td>
</tr>
<tr>
<td>?</td>
<td>某个字符之后出现，表示该字符出现一次或不出现；0 次或 1 次</td>
</tr>
<tr>
<td>+</td>
<td>某个字符之后出现，表示其前面字符出现一次或多次；1 次及以上</td>
</tr>
<tr>
<td>{n,m}</td>
<td>某个字符之后出现，表示该字符出现最少 n 次，最多 m 次</td>
</tr>
<tr>
<td>{m}</td>
<td>某个字符之后出现，表示该字符正好出现了 m 次</td>
</tr>
</tbody>
</table>
<h3 id="元字符" tabindex="-1"><a class="header-anchor" href="#元字符" aria-hidden="true">#</a> 元字符：</h3>
<p>元字符是一种 Perl 风格的正则表达式，只有一部分文本处理工具支持它，并不是所有的文本处理工具都支持。shell 好行并不支持元字符的正则表达式。</p>
<table>
<thead>
<tr>
<th>元字符</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>\b</td>
<td>匹配一个单词边界，也就是指单词和空格间的位置。</td>
</tr>
<tr>
<td>\B</td>
<td>匹配非单词边界。</td>
</tr>
<tr>
<td>\d</td>
<td>匹配一个数字字符。等价于 [0-9]</td>
</tr>
<tr>
<td>\D</td>
<td>匹配一个非数字字符。等价于 [^0-9]</td>
</tr>
<tr>
<td>\f</td>
<td>匹配一个换页符。</td>
</tr>
<tr>
<td>\n</td>
<td>匹配一个换行符。</td>
</tr>
<tr>
<td>\r</td>
<td>匹配一个回车符。</td>
</tr>
<tr>
<td>\s</td>
<td>匹配任何空白字符，包括空格、制表符、换页符等等。等价于 [ \f\n\r\t\v]</td>
</tr>
<tr>
<td>\S</td>
<td>匹配任何非空白字符。等价于 [^ \f\n\r\t\v]</td>
</tr>
<tr>
<td>\t</td>
<td>匹配一个制表符。</td>
</tr>
<tr>
<td>\v</td>
<td>匹配一个垂直制表符。</td>
</tr>
<tr>
<td>\w</td>
<td>匹配包括下划线的任何单词字符。等价于[A-Za-z0-9_]</td>
</tr>
<tr>
<td>\W</td>
<td>匹配任何非单词字符。等价于 [^A-Za-z0-9_]</td>
</tr>
</tbody>
</table>
<h3 id="posix-特殊字符" tabindex="-1"><a class="header-anchor" href="#posix-特殊字符" aria-hidden="true">#</a> POSIX 特殊字符：</h3>
<table>
<thead>
<tr>
<th>特殊字符</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>[:alnum:]</td>
<td>匹配任意字母数字字（0-9、a-z、A-Z）</td>
</tr>
<tr>
<td>[:alpha:]</td>
<td>匹配任意字母，大写或小写（a-z、A-Z）</td>
</tr>
<tr>
<td>[:digit:]</td>
<td>匹配任意数字（0-9）</td>
</tr>
<tr>
<td>[:graph:]</td>
<td>非空字符（非空格控制字符）</td>
</tr>
<tr>
<td>[:lower:]</td>
<td>小写字符（a-z）</td>
</tr>
<tr>
<td>[:upper:]</td>
<td>大写字符（A-Z）</td>
</tr>
<tr>
<td>[:cntrl:]</td>
<td>控制字符</td>
</tr>
<tr>
<td>[:print:]</td>
<td>非控制字符（包括空格）</td>
</tr>
<tr>
<td>[:punct:]</td>
<td>标点符号</td>
</tr>
<tr>
<td>[:blank:]</td>
<td>空格和 TAB 字符</td>
</tr>
<tr>
<td>[:xdigit:]</td>
<td>16 进制数字</td>
</tr>
<tr>
<td>[:space:]</td>
<td>所有空白字符（新行、空格、制表符）</td>
</tr>
</tbody>
</table>
<p><strong>注意：</strong></p>
<p>[[  ]] 双中括号的意思：第一个中括号是匹配符 [ ]，匹配中括号 [ ] 中的任意的一个字符；第二个中括号 [ ] 是格式，如 [:digit:]。</p>
<p>例：</p>
<blockquote>
<p>匹配中文汉字： [\u4e00-\u9fa5]</p>
<p>匹配 e-mail 地址：\w+([-+.]\w+)<em>@\w+([-.]\w+)</em>.\w+([-.]\w+)*</p>
<p>匹配网址 URL：http://(/[\w-]+.)+[\w-]+(/[\w- ./?%&amp;=]*)?</p>
</blockquote>
<div class="custom-container tip"><p class="custom-container-title">补充</p>
<p>Linux 的三剑客 <code>grep</code>、<code>sed</code>、<code>awk</code> 都支持正则表达式</p>
<p>后续将学习三剑客的命令</p>
</div>
</template>
