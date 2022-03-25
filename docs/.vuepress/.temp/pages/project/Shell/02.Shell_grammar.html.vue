<template><p>shell 脚本就是将完成一个任务的所有命令按照执行的先后顺序，自上而下写入到一个文本文件中，然后给予执行权限。</p>
<h2 id="如何书写一个-shell-脚本" tabindex="-1"><a class="header-anchor" href="#如何书写一个-shell-脚本" aria-hidden="true">#</a> 如何书写一个 shell 脚本</h2>
<h3 id="shell-脚本命名" tabindex="-1"><a class="header-anchor" href="#shell-脚本命名" aria-hidden="true">#</a> shell 脚本命名：</h3>
<p>名字要有意义，最好不要用 a、b、c、d、1、2、3、4 这种方式命名；虽然 linux 系统中，文件没有扩展名的概念，依然建议用 .sh 结尾；名字不要太长，最好能在 30 个字节以内解决。例如：check_memory.sh</p>
<h3 id="shell脚本格式" tabindex="-1"><a class="header-anchor" href="#shell脚本格式" aria-hidden="true">#</a> shell脚本格式：</h3>
<p>shell 脚本开头必须指定脚本运行环境，以 #! 这个特殊符号组合来组成。例如：#!/bin/bash 来指定该脚本是运行解析由 /bin/bash 来完成的；
shell 中的注释使用 # 符号</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#shell脚本中，最好加入脚本说明字段</span>
<span class="token comment">#!/bin/bash</span>
<span class="token comment">#Author: Admin</span>
<span class="token comment">#Created Time: 2021/02/02 16:23</span>
<span class="token comment">#Release: 1.0</span>
<span class="token comment">#Script Description: first shell study script</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="如何运行一个-shell-脚本" tabindex="-1"><a class="header-anchor" href="#如何运行一个-shell-脚本" aria-hidden="true">#</a> 如何运行一个 shell 脚本</h2>
<p>脚本运行需要执行权限，当我们给一个文件赋予执行权限后，该脚本就可以运行。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># chmod u+x filename		#赋予执行权限</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ./filename				#执行脚本333</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果不希望赋予脚本执行权限，那么可以使用 <code>bash</code> 命令来运行未给予执行权限的脚本</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># bash filename			#bash执行脚本</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># bash -x filename		#-x调试，把每条命令执行情况打印出来</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="shell-中的特殊符号" tabindex="-1"><a class="header-anchor" href="#shell-中的特殊符号" aria-hidden="true">#</a> shell 中的特殊符号</h3>
<p>有基础的同学不要和正则表达式中的符号含义搞混淆了。</p>
<table>
<thead>
<tr>
<th>符号</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>~</td>
<td>家目录。<code># cd ~</code>  代表进入用户家目录</td>
</tr>
<tr>
<td>!</td>
<td>执行历史命令。	<code>!!</code> 执行上一条命令</td>
</tr>
<tr>
<td>$</td>
<td>变量中取内容符</td>
</tr>
<tr>
<td>+  -  *  /  %</td>
<td>对应数学运算 加 减 乘 除 取余数</td>
</tr>
<tr>
<td>&amp;</td>
<td>后台执行</td>
</tr>
<tr>
<td>*</td>
<td>通配符，匹配所有</td>
</tr>
<tr>
<td>?</td>
<td>通配符，匹配除回车以外的一个字符</td>
</tr>
<tr>
<td>;</td>
<td>分号可以在shell中一行执行多个命令，命令之间用分号分割</td>
</tr>
<tr>
<td>|</td>
<td>管道符，上一个命令的输出作为下一个命令的输入</td>
</tr>
<tr>
<td>``</td>
<td>反引号，命令中优先执行反引号内的命令</td>
</tr>
<tr>
<td>'  '</td>
<td>单引号，脚本中的字符串可以用单引号引起来，单引号不能解释变量</td>
</tr>
<tr>
<td>&quot;  &quot;</td>
<td>双引号，脚本中的字符串可以用双引号引起来，双引号可以解释变量</td>
</tr>
</tbody>
</table>
<h3 id="shell-中的管道运用" tabindex="-1"><a class="header-anchor" href="#shell-中的管道运用" aria-hidden="true">#</a> shell 中的管道运用</h3>
<ul>
<li>管道符 |</li>
</ul>
<p>管道符在 shell 中使用是最多的，很多组合命令都需要通过组合命令来完成输出。</p>
<p>管道符其实就是下一个命令对上一个命令的输出作处理。</p>
<h3 id="shell-重定向" tabindex="-1"><a class="header-anchor" href="#shell-重定向" aria-hidden="true">#</a> shell 重定向</h3>
<table>
<thead>
<tr>
<th>重定向符号</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>&gt;</td>
<td>重定向输入，覆盖原数据。</td>
</tr>
<tr>
<td>&gt;&gt;</td>
<td>重定向追加输入，在原数据的末尾添加。</td>
</tr>
<tr>
<td>&lt;</td>
<td>重定向输出。例如：<code>wc -l &lt; /etc/passwd</code></td>
</tr>
<tr>
<td>&lt;&lt;</td>
<td>重定向追加输出。例如：<code>fdisk /dev/sdb &lt;&lt; EOF...................EOF</code></td>
</tr>
</tbody>
</table>
<h3 id="shell-数学运算" tabindex="-1"><a class="header-anchor" href="#shell-数学运算" aria-hidden="true">#</a> shell 数学运算</h3>
<ul>
<li><code>expr</code> 命令：</li>
</ul>
<p>只能做整数运算，格式比较古板，注意命令，数字和运算符之间有空格</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linux ~<span class="token punctuation">]</span><span class="token comment"># expr 1 + 1</span>
<span class="token number">2</span>
<span class="token punctuation">[</span>root@linux ~<span class="token punctuation">]</span><span class="token comment"># expr 5 - 2</span>
<span class="token number">3</span>
<span class="token punctuation">[</span>root@linux ~<span class="token punctuation">]</span><span class="token comment"># expr 3 \* 7			#注意*出现应该转义，否则认为是通配符</span>
<span class="token number">21</span>
<span class="token punctuation">[</span>root@linux ~<span class="token punctuation">]</span><span class="token comment"># expr 5 / 2</span>
<span class="token number">2</span>
<span class="token punctuation">[</span>root@linux ~<span class="token punctuation">]</span><span class="token comment"># expr 10 % 3</span>
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul>
<li><code>bc</code> 命令：</li>
</ul>
<p>使用 <code>bc</code> 计算器处理浮点运算，scale=2 代表小数点保留两位，quit 退出</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linux ~<span class="token punctuation">]</span><span class="token comment"># echo "scale=2;3+100" | bc</span>
<span class="token number">103</span>
<span class="token punctuation">[</span>root@linux ~<span class="token punctuation">]</span><span class="token comment"># echo "scale=2;100-3" | bc</span>
<span class="token number">97</span>
<span class="token punctuation">[</span>root@linux ~<span class="token punctuation">]</span><span class="token comment"># echo "scale=2;100/3" | bc</span>
<span class="token number">33.33</span>
<span class="token punctuation">[</span>root@linux ~<span class="token punctuation">]</span><span class="token comment">#echo "scale=2;100*3" | bc</span>
<span class="token number">300</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul>
<li><code>(( ))</code>运算：</li>
</ul>
<p>双小圆括号运算，在 shell 中 <code>(( ))</code> 也可以用来作数学运算</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linux ~<span class="token punctuation">]</span><span class="token comment">#echo $((100+3))</span>
<span class="token number">103</span>
<span class="token punctuation">[</span>root@linux ~<span class="token punctuation">]</span><span class="token comment">#echo $((100-3))</span>
<span class="token number">97</span>
<span class="token punctuation">[</span>root@linux ~<span class="token punctuation">]</span><span class="token comment">#echo $((100*3))</span>
<span class="token number">300</span>
<span class="token punctuation">[</span>root@linux ~<span class="token punctuation">]</span><span class="token comment">#echo $((100/3))</span>
<span class="token number">33</span>
<span class="token punctuation">[</span>root@linux ~<span class="token punctuation">]</span><span class="token comment">#echo $((100%3))</span>
<span class="token number">1</span>
<span class="token punctuation">[</span>root@linux ~<span class="token punctuation">]</span><span class="token comment">#echo $((10**3))				#开方运算</span>
<span class="token number">1000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="退出脚本" tabindex="-1"><a class="header-anchor" href="#退出脚本" aria-hidden="true">#</a> 退出脚本</h2>
<p><code>exit NUM</code> 退出脚本，释放系统资源，NUM 代表一个整数，代表返回值。</p>
<ul>
<li>exit 0：正常运行程序并退出程序；</li>
<li>exit 1：非正常运行导致退出程序；</li>
</ul>
<p><code>exit 0</code> 可以告知你的程序的使用者，你的程序是正常结束的。
如果 <code>exit 非0值</code>，那么你的程序的使用者通常会认为你的程序产生了一个错误。</p>
<p>在shell中调用完你的程序之后，用 <code>echo $?</code> 命令就可以看到你的程序的 exit 值。在 shell 脚本中，通常会根据上一个命令的 $? 值来进行一些流程控制。0 代表程序正确的执行。</p>
</template>
