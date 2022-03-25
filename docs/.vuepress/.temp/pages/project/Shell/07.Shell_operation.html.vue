<template><h2 id="shell-中的运算" tabindex="-1"><a class="header-anchor" href="#shell-中的运算" aria-hidden="true">#</a> Shell 中的运算</h2>
<h3 id="数学比较运算" tabindex="-1"><a class="header-anchor" href="#数学比较运算" aria-hidden="true">#</a> 数学比较运算</h3>
<table>
<thead>
<tr>
<th>表达式</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>-eq</td>
<td>等于</td>
</tr>
<tr>
<td>-gt</td>
<td>大于</td>
</tr>
<tr>
<td>-lt</td>
<td>小于</td>
</tr>
<tr>
<td>-ge</td>
<td>大于等于</td>
</tr>
<tr>
<td>-le</td>
<td>小于等于</td>
</tr>
<tr>
<td>-ne</td>
<td>不等于</td>
</tr>
</tbody>
</table>
<h3 id="字符串比较运算" tabindex="-1"><a class="header-anchor" href="#字符串比较运算" aria-hidden="true">#</a> 字符串比较运算</h3>
<p>注意字符串一定别忘了使用引号引起来</p>
<table>
<thead>
<tr>
<th>表达式</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>==</td>
<td>等于</td>
</tr>
<tr>
<td>!=</td>
<td>不等于</td>
</tr>
<tr>
<td>-n</td>
<td>检查字符串的长度是否大于 0</td>
</tr>
<tr>
<td>-z</td>
<td>检查字符串的长度是否为 0</td>
</tr>
</tbody>
</table>
<h3 id="文件比较与检查" tabindex="-1"><a class="header-anchor" href="#文件比较与检查" aria-hidden="true">#</a> 文件比较与检查</h3>
<table>
<thead>
<tr>
<th>表达式</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>-d</td>
<td>检查文件是否存在且为目录</td>
</tr>
<tr>
<td>-e</td>
<td>检查文件是否存在</td>
</tr>
<tr>
<td>-f</td>
<td>检查文件是否存在且为文件</td>
</tr>
<tr>
<td>-r</td>
<td>检查文件是否存在且可读</td>
</tr>
<tr>
<td>-w</td>
<td>检查文件是否存在且可写</td>
</tr>
<tr>
<td>-x</td>
<td>检查文件是否存在且可执行</td>
</tr>
<tr>
<td>-s</td>
<td>检查文件是否存在且不为空</td>
</tr>
<tr>
<td>-O</td>
<td>检查文件是否存在且被当前用户拥有</td>
</tr>
<tr>
<td>-G</td>
<td>检查文件是否存在且默认组为当墙用户组</td>
</tr>
<tr>
<td>file1 -nt file2</td>
<td>检查 file1 是否比 file2 新</td>
</tr>
<tr>
<td>file1 -ot file2</td>
<td>检查 file1 是否比 file2 旧</td>
</tr>
</tbody>
</table>
<h3 id="逻辑运算" tabindex="-1"><a class="header-anchor" href="#逻辑运算" aria-hidden="true">#</a> 逻辑运算</h3>
<table>
<thead>
<tr>
<th>运算符</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>&amp;&amp;</td>
<td>逻辑与运算</td>
</tr>
<tr>
<td>||</td>
<td>逻辑或运算</td>
</tr>
<tr>
<td>!</td>
<td>逻辑非运算</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">口诀</p>
<p>逻辑与运算		真真为真、真假为假、假假为假</p>
<p>逻辑或运算		真真为真、真假为假、假假为假</p>
<p>逻辑非运算		非真为假、非假为真</p>
<p><strong>逻辑与、或运算都需要两个或两个以上条件，逻辑非运算只能有一个条件。</strong></p>
</div>
<h3 id="赋值运算" tabindex="-1"><a class="header-anchor" href="#赋值运算" aria-hidden="true">#</a> 赋值运算</h3>
<table>
<thead>
<tr>
<th>运算符</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>=</td>
<td>赋值运算符，例<code># a=10	name=&quot;root&quot;</code></td>
</tr>
</tbody>
</table>
</template>
