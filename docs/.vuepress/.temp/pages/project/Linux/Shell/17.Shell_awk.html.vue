<template><p>在日常计算机管理中，总会有很多数据输出到屏幕或者文件，这些输出包含了标准输出、标准错误输出。默认情况下，这些信息全部输出到默认输出设备---屏幕。然而，大量的数据输出中，只有一小部分是我们需要重点关注的，把我们需要的或关注的这些信息，过滤或者提取，以备后续需要是调用。早先的学习中，我们学过使用 <code>grep</code> 来过滤这些数据，使用 <code>cut</code>、<code>tr</code> 命令提取某些字段，但是它们都不具备提取并处理数据的能力，都必须先过滤，再提取转存到变量，然后再通过变量提取去处理。</p>
<p>比如：内存使用率的统计步骤</p>
<blockquote>
<p>通过 <code>free -m</code> 提取出内存总量，赋值给变量 memory_totle</p>
<p>通过 <code>free -m</code> 提取出内存使用量，赋值给变量 memory_use</p>
<p>通过数学运算，计算出内存使用率</p>
</blockquote>
<p>需要执行多步才能得到内存使用率，那么有没有一个能够集过滤、提取、运算为一体的命令呢？当然，就是我们即将学习的 <code>awk</code> 命令。</p>
<h2 id="awk-介绍" tabindex="-1"><a class="header-anchor" href="#awk-介绍" aria-hidden="true">#</a> awk 介绍</h2>
<p><code>awk</code> 是一种可以处理数据、产生格式化报表的语言，功能十分强大。<code>awk</code> 认为文件中的每一行是一条记录，记录与记录之间的分割符为换行符；每一列是一个字段，字段与字段的分割符默认是一个或多个的空格或 tab 制表符。</p>
<p><code>awk</code> 的工作方式是读取数据，将每一行数据视为一条记录（record），每条记录以字段分割符分割成若干个字段，然后输出各个字段的值。</p>
<h3 id="awk-命令格式" tabindex="-1"><a class="header-anchor" href="#awk-命令格式" aria-hidden="true">#</a> awk 命令格式</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># awk [选项] [BEGIMN]{program}[END] [file]</span>
选项：
	-F	：fs指定描绘一行中数据字段的分割符，默认为空格
	-f	：指定读取程序的文件名
	-v	：定义awk程序中使用的变量和默认值
	
程序运行优先级：
	BEGIN	：在开始处理数据之前执行，可选项
	program	：如何处理数据流，必选项
	END		：处理完数据流后执行，可选项
	
注意：
	<span class="token function">awk</span> 程序脚本由左大括号和右大括号定义。脚本命令必须防止在两个大括号之间。由于 <span class="token function">awk</span> 命令行假定脚本是单文本字符串，还必须将脚本放在单引号中。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="awk-的基本用法" tabindex="-1"><a class="header-anchor" href="#awk-的基本用法" aria-hidden="true">#</a> awk 的基本用法</h2>
<h3 id="awk-对字段的提取-列" tabindex="-1"><a class="header-anchor" href="#awk-对字段的提取-列" aria-hidden="true">#</a> awk 对字段的提取（列）</h3>
<p>字段提取：提取一个文本中的一列数据并打印输出
字段相关内置变量</p>
<blockquote>
<p>$0		表示正行文本</p>
<p>$1		表示文本行中的第一个数据字段</p>
<p>$2		表示文本行中的第二个数据字段</p>
<p>$N		表示文本行中的第N个数据字段</p>
<p>$NF		表示文本行中的最后一个数据字段</p>
</blockquote>
<ul>
<li>读入test文件每行数据并把每行数据打印出来</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linux ~ <span class="token punctuation">]</span><span class="token comment"># awk '{print $0}' test</span>
<span class="token number">1</span> the quick brown fox jumps over the lazy <span class="token function">cat</span> <span class="token builtin class-name">.</span> dog
<span class="token number">2</span> the quick brown fox jumps over the lazy <span class="token function">cat</span> <span class="token builtin class-name">.</span> dog
<span class="token number">3</span> the quick brown fox		 jumps over the lazy <span class="token function">cat</span> <span class="token builtin class-name">.</span> dog
<span class="token number">4</span> the quick brown fox jumps over the lazy <span class="token function">cat</span> <span class="token builtin class-name">.</span> dog
<span class="token number">5</span> the quick brown fox jumps over the lazy <span class="token function">cat</span> <span class="token builtin class-name">.</span> dog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul>
<li>打印test文件的第六个字段</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linux ~ <span class="token punctuation">]</span><span class="token comment"># awk '{print $6}' test</span>
jumps
jumps
jumps
jumps
jumps
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul>
<li>打印test文件的最后一个字段</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linux ~ <span class="token punctuation">]</span><span class="token comment"># awk '{print $NF}' test</span>
dog
dog
dog
dog
dog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="awk-对记录的提取-行" tabindex="-1"><a class="header-anchor" href="#awk-对记录的提取-行" aria-hidden="true">#</a> awk 对记录的提取（行）</h3>
<p>记录提取：提取一个文本中的一行并打印输出
记录的提取方法有两种：</p>
<ol>
<li>通过行号</li>
<li>通过正则匹配</li>
</ol>
<ul>
<li>NR：指定行号</li>
</ul>
<p>提取 test 中的第三行（指定行号为3）</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk 'NR==3{print $0}' test</span>
<span class="token number">3</span> the quick brown fox		 jumps over the lazy <span class="token function">cat</span> <span class="token builtin class-name">.</span> dog
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk 'NR==1{print $1,$3,$5}' /etc/passwd</span>
root <span class="token number">0</span> root
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk 'NR==1{print $1 "-" $3 "-" $5}' /etc/passwd</span>
root-0-root
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="awk-命令选项详解" tabindex="-1"><a class="header-anchor" href="#awk-命令选项详解" aria-hidden="true">#</a> awk 命令选项详解</h3>
<ul>
<li>-F：指定字段与字段的分割符</li>
</ul>
<p>当输出的数据流字段格式不是 <code>awk</code> 默认的字段格式时，我们可以使用 -F 命令选项来重新定义数据流字段分割符号。比如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk -F ':' '{print $1,$3,$NF}' /etc/passwd</span>
root <span class="token number">0</span> /bin/bash
daemon <span class="token number">1</span> /usr/sbin/nologin
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
karin <span class="token number">1000</span> /bin/bash
sshd <span class="token number">122</span> /usr/sbin/nologin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul>
<li>-f：如果 <code>awk</code> 命令是日常重复工作，而又没有太多变化，可以将程序写入文件，每次使用-f调用程序文件就可以了，方便且高效。</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># vim abc</span>
<span class="token punctuation">{</span>print <span class="token variable">$1</span>,<span class="token variable">$1</span>,<span class="token variable">$NF</span><span class="token punctuation">}</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk -f abc test</span>
<span class="token number">1</span> quick dog
<span class="token number">2</span> quick dog
<span class="token number">3</span> quick dog
<span class="token number">4</span> quick dog
<span class="token number">5</span> quick dog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul>
<li>-v：定义变量，既然作者写awk的时候就是按着语言去写的，那么语言中最重要的要素---变量肯定不能缺席，所以可以使用 -v 命令选项定义变量</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk -v name='root' 'BEGIN{print name}'</span>
root
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="awk-对字符串的提取-行列交汇" tabindex="-1"><a class="header-anchor" href="#awk-对字符串的提取-行列交汇" aria-hidden="true">#</a> awk 对字符串的提取（行列交汇）</h3>
<p>记录和字段的汇合点就是字符串
打印 test 第三行的第六个字段</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk 'NR==3{print $6}' test</span>
jumps
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="awk-程序的优先级" tabindex="-1"><a class="header-anchor" href="#awk-程序的优先级" aria-hidden="true">#</a> awk 程序的优先级</h3>
<p>关于 <code>awk</code> 程序的优先级，BEGIN 是优先级最高的代码块，是在执行 program 之前执行的，不需要提供数据源，因为不涉及到任何数据处理，也不依赖于 program 代码块；program 代码块是对数据流干什么，是必选代码块，也是默认代码块。所以在执行时必须提供数据源；END 是处理完数据流后的操作，如果需要执行 END 代码块，就必须需要 program 的支持，单个无法执行。</p>
<h3 id="优先级显示" tabindex="-1"><a class="header-anchor" href="#优先级显示" aria-hidden="true">#</a> 优先级显示</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk 'BEGIN{print "hello world"}{print $0}END{print "bye bye"}' test</span>
hello world
<span class="token number">1</span> the quick brown fox jumps over the lazy <span class="token function">cat</span> <span class="token builtin class-name">.</span> dog
<span class="token number">2</span> the quick brown fox jumps over the lazy <span class="token function">cat</span> <span class="token builtin class-name">.</span> dog
<span class="token number">3</span> the quick brown fox		 jumps over the lazy <span class="token function">cat</span> <span class="token builtin class-name">.</span> dog
<span class="token number">4</span> the quick brown fox jumps over the lazy <span class="token function">cat</span> <span class="token builtin class-name">.</span> dog
<span class="token number">5</span> the quick brown fox jumps over the lazy <span class="token function">cat</span> <span class="token builtin class-name">.</span> dog
bye bye
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul>
<li>不需要数据源，可以直接执行</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk 'BEGIN{print "hello world"}'</span>
hello world
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>没有提供数据源，所以无法执行成功</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk '{print "hello world"}'</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk 'END{print "hello world"}'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="awk-高级用法" tabindex="-1"><a class="header-anchor" href="#awk-高级用法" aria-hidden="true">#</a> awk 高级用法</h2>
<p><code>awk</code> 是一门语言，那么就会符合语言的特性，除了可以定义变量外，还可以定义数组，还可以进行运算，流程控制。</p>
<h3 id="awk-定义数组" tabindex="-1"><a class="header-anchor" href="#awk-定义数组" aria-hidden="true">#</a> awk 定义数组</h3>
<p>数组定义方式：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>数组名<span class="token punctuation">[</span>索引<span class="token punctuation">]</span><span class="token operator">=</span>值
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>定义数组 array，有两个元素，分别是 100，200，打印数组元素。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk 'BEIGN{array[0]=100;array[1]=200;print array[0],array[1]}'</span>
<span class="token number">100</span> <span class="token number">200</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="awk-运算" tabindex="-1"><a class="header-anchor" href="#awk-运算" aria-hidden="true">#</a> awk 运算</h3>
<blockquote>
<p>赋值运算		=</p>
<p>比较运算		&gt;、&gt;=、==、&lt;=、&lt;、!=</p>
<p>数学运算		+、-、*、/、%、**、++、--</p>
<p>逻辑运算		&amp;&amp;、||</p>
<p>匹配运算		<sub>、!</sub></p>
</blockquote>
<ul>
<li>赋值运算：主要是对变量或者数组赋值</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># read -2 /proc/meminfo | awk 'NR==1{t=$2}NR==2{f=$2;print (t-f)*100/t "%"}'</span>
<span class="token number">8.7528</span>%
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>比较运算：如果比较字符串则按 ascii 编码顺序表比较，比较结果 1 则为真，0 则为假</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk 'BEGIN{print "a" >= "b" }'</span>
<span class="token number">0</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk 'BEGIN{print 99 >= 1 }'</span>
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>数学运算：支持幂运算，支持小数点</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk 'BEGIN{print 9-1 }'</span>
<span class="token number">8</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk 'BEGIN{print 100%3 }'</span>
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>逻辑运算：与、或运算</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk 'BEGIN{print 100>3 &amp;&amp; 28&lt;=9 }'</span>
<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>匹配运算：精确匹配 <mark>，精确不匹配  !</mark>；模糊匹配 ~，模糊不匹配  !~</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk -F: '$1=="root"{print $0}' /etc/passwd</span>
root:x:0:0:root:/root:/bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="awk-环境变量" tabindex="-1"><a class="header-anchor" href="#awk-环境变量" aria-hidden="true">#</a> awk 环境变量</h3>
<table>
<thead>
<tr>
<th>变量</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>FIELDWIDTHS</td>
<td>以空格分隔的数字列表，用空格定义每个数据字段的精确宽度</td>
</tr>
<tr>
<td>FS</td>
<td>输入字段分隔符号</td>
</tr>
<tr>
<td>OFS</td>
<td>输出字段分隔符号</td>
</tr>
<tr>
<td>RS</td>
<td>输入记录分隔符号</td>
</tr>
<tr>
<td>ORS</td>
<td>输出记录分隔符号</td>
</tr>
</tbody>
</table>
<p>FIELDWIDTHS：重新定义列宽并打印，注意不可以使用 $0 打印所有，因为 $0 是打印本行全内容，不会打印你定义的字段</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk 'BEGIN{FIELDWIDTHS="5 2 8"}NR==1{print $1,$2,$3}' /etc/passwd</span>
root: x: <span class="token number">0</span>:0:root
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>FS：指定数据源中字段分隔符，类似命令选项 -F</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk 'BEGIN{FS=":"}NR==1{print $1,$3,$NF}‘ /etc/passwd</span>
root <span class="token number">0</span> /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>OFS：指定输出到屏幕后字段的分隔符</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk 'BEGIN{FS=":";OFS="-"}NR==1{print $1,$3,$NF}' /etc/passwd</span>
root-0-/bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>RS：指定记录的分隔符，将记录的分隔符修改为空后，所有的行会变成一行</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk 'BEGIN{RS=""}{print $1,$2,$3}' num</span>
<span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>ORS：输出到屏幕后记录的分隔符，默认为回车</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk 'BEGIN{RS="";ORS="*"}{print $1,$2,$3,$4,$5}' num</span>
<span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>*<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>#可以看出，提示符和输出在一行了，因为默认回车换成了*（ORS=&quot;*&quot;）</p>
<h3 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制" aria-hidden="true">#</a> 流程控制</h3>
<ol>
<li>if 判断语句</li>
<li>for 循环语句</li>
<li>while 循环语句</li>
<li>do...while 语句</li>
<li>循环控制</li>
</ol>
<ul>
<li>if 判断语句</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk '{if ($1&lt;5)print $1*2;else print $1/2}' num</span>
<span class="token number">2</span>
<span class="token number">4</span>
<span class="token number">6</span>
<span class="token number">8</span>
<span class="token number">2.5</span>
<span class="token number">3</span>
<span class="token number">3.5</span>
<span class="token number">4</span>
<span class="token number">4.5</span>
<span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul>
<li>for 循环语句</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># vim num2</span>
<span class="token number">60</span> <span class="token number">50</span> <span class="token number">100</span>
<span class="token number">150</span> <span class="token number">30</span> <span class="token number">10</span>
<span class="token number">70</span> <span class="token number">100</span> <span class="token number">40</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk '{sum=0;for (i=1;i&lt;4;i++){sum+=$i}print sum}' sum2</span>
<span class="token number">210</span>
<span class="token number">190</span>
<span class="token number">210</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul>
<li>while 循环语句</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk '{sum=0;i=1;while(i&lt;4){sum+=$i;i++}print sum}' num2</span>
<span class="token number">210</span>
<span class="token number">190</span>
<span class="token number">210</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>do...while 语句</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk '{sum=0;i=1;do{sum+=$i;i++}while(i&lt;4);print sum}' num2</span>
<span class="token number">210</span>
<span class="token number">190</span>
<span class="token number">210</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>循环控制语句</li>
</ul>
<p>break：跳出循环，继续执行后续语句。</p>
<p>continue：停止本次循环，继续下一次循环。</p>
<p>累加每行数值，和大于 150 停止累加</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk '{</span>
<span class="token operator">></span> <span class="token assign-left variable">sum</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token operator">></span> <span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token operator">></span> <span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token operator">&lt;</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token operator">></span> 	<span class="token assign-left variable">sum</span><span class="token operator">+=</span><span class="token variable">$i</span>
<span class="token operator">></span> 	<span class="token keyword">if</span> <span class="token punctuation">(</span>sum<span class="token operator">></span><span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token operator">></span> 		<span class="token builtin class-name">break</span>
<span class="token operator">></span> 	<span class="token punctuation">}</span>
<span class="token operator">></span> 	i++
<span class="token operator">></span> <span class="token punctuation">}</span>
<span class="token operator">></span> print <span class="token function">sum</span>
<span class="token operator">></span> <span class="token punctuation">}</span>' num2
<span class="token number">210</span>
<span class="token number">180</span>
<span class="token number">170</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="awk小技巧" tabindex="-1"><a class="header-anchor" href="#awk小技巧" aria-hidden="true">#</a> awk小技巧</h2>
<ul>
<li>打印 test 文本的行数</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk 'END{print NR}' test</span>
<span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>打印 test 文本最后一行内容</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk 'END{print $0}' test</span>
<span class="token number">5</span> the quick brown fox jumps over the lazy <span class="token function">cat</span> <span class="token builtin class-name">.</span> dog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>打印 test 文本列数</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk 'END{print NF}' test</span>
<span class="token number">12</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></template>
