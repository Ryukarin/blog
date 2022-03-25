<template><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p><code>grep</code> 是一种强大的文本搜索工具，它能使用正则表达式搜索文本，并把匹配的行打印出来。这也是一个我们比较常用的命令之一，好多时候虽然没通过系统的学习，但是我们还是会经常用到。当文本为标准输入时，经常和管道符 | 结合使用。</p>
<h2 id="grep-命令" tabindex="-1"><a class="header-anchor" href="#grep-命令" aria-hidden="true">#</a> grep 命令</h2>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># grep [选项] [模式] [文件]</span>
选项：
	-E	：pattern被视为一个扩展的正则表达式；egrep
	-F	：pattern是一个以换行符隔开的字符串集合；fgrep不承认正则表达式
	-c	：计算匹配到的行数
	-r	：第归搜索
	-n	：显示匹配内容的行号
	-i	：不区分大小写
	-v	：反向选择，即选择不匹配的行
	-c	：只显示匹配行总数    
	-w	：匹配整词
	-x	：匹配整行
	-l	：只显示文件名，不显示内容
	-s	：不显示错误信息
	--color<span class="token operator">=</span>auto	：搜索匹配的关键词显示颜色

模式：
	要搜索的字符串或正则表达式

文件：
	即要搜索匹配的源文件或者标准输入，标准输入常用管道符 <span class="token operator">|</span> 连接grep
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ul>
<li>来自文件</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># cat /etc/passwd | grep "root" </span>
root:x:0:0:root:/root:/bin/bash
operator:x:11:0:operator:/root:/sbin/nologin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>来自标准输入</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># cat /etc/passwd | grep "root" </span>
root:x:0:0:root:/root:/bin/bash
operator:x:11:0:operator:/root:/sbin/nologin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>当 <code>grep</code> 的输入既来自文件也来自标准输入时，<code>grep</code> 将忽略标准输入的内容不做处理，除非使用符号 - 来代表标准输入。此时，<code>grep</code> 会标明哪些结果来自于文件哪些来自于标准输入。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># cat /etc/passwd | grep root /etc/passwd -</span>
/etc/passwd:root:x:0:0:root:/root:/bin/bash
/etc/passwd:operator:x:11:0:operator:/root:/sbin/nologin
<span class="token punctuation">(</span>standard input<span class="token punctuation">)</span>:root:x:0:0:root:/root:/bin/bash
<span class="token punctuation">(</span>standard input<span class="token punctuation">)</span>:operator:x:11:0:operator:/root:/sbin/nologin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>将 <code>/etc/passwd</code> 文件中，没有出现 root 和 nologin 的行打印出来</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># cat /etc/passwd | grep -v root | grep -v nologin</span>
sync:x:4:65534:sync:/bin:/bin/sync
speech-dispatcher:x:111:29:Speech Dispatcher,,,:/var/run/speech-dispatcher:/bin/false
whoopsie:x:112:117::/nonexistent:/bin/false
hplip:x:118:7:HPLIP system user,,,:/var/run/hplip:/bin/false
gnome-initial-setup:x:120:65534::/run/gnome-initial-setup/:/bin/false
gdm:x:121:125:Gnome Display Manager:/var/lib/gdm3:/bin/false
karin:x:1000:1000:karin,,,:/home/karin:/bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>将 <code>/etc/passwd</code> 文件中，结尾是 bash 的行打印出来（正则）</p>
<div class="language-SHELL ext-SHELL line-numbers-mode"><pre v-pre class="language-SHELL"><code>[root@localhost ~ ]# cat /etc/passwd | grep -E &quot;bash$&quot;
root:x:0:0:root:/root:/bin/bash
karin:x:1000:1000:karin,,,:/home/karin:/bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>查找 sshd 进程</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># ps -ef | grep sshd</span>
root       <span class="token number">787</span>     <span class="token number">1</span>  <span class="token number">0</span> 09:56 ?        00:00:00 /usr/sbin/sshd -D
karin     <span class="token number">2855</span>  <span class="token number">2763</span>  <span class="token number">0</span> <span class="token number">10</span>:35 pts/0    00:00:00 <span class="token function">grep</span> --color<span class="token operator">=</span>auto sshd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="黄金搭档" tabindex="-1"><a class="header-anchor" href="#黄金搭档" aria-hidden="true">#</a> 黄金搭档</h2>
<p><code>grep</code> 常与 <code>sort</code>、<code>find</code>、<code>xargs</code> 命令组合使用</p>
<h3 id="sort-命令" tabindex="-1"><a class="header-anchor" href="#sort-命令" aria-hidden="true">#</a> sort 命令</h3>
<p>用于将文本文件内容加以排序。如果未给定文件，则读取标准输入，在将排序好的数据写至标准输出。</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sort [选项] [文件]</span>
选项：
	-n	：按数值大小排序 
	-r	：降序排序 
	-t	：指定分隔符，和cut命令的-d一个作用 
	-k	：用-t指定分隔符后，将第几段进行排序，和cut命令的-f一个作用 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>将 <code>/etc/passwd</code> 文件中每行内容以冒号为分隔符，选取第三段内容按数值大小排序</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sort -n -t: -k3 /etc/passwd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="find-命令" tabindex="-1"><a class="header-anchor" href="#find-命令" aria-hidden="true">#</a> find 命令</h3>
<p><code>find</code> 命令用来在指定目录下查找文件。任何位于参数之前的字符串都将被视为欲查找的目录名。如果使用该命令时，不设置任何参数，则 <code>find</code> 命令将在当前目录下查找子目录与文件。并且将查找到的子目录和文件全部进行显示。</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># find 路径 [搜索条件] [搜索内容]</span>
路径：
<span class="token comment">#find命令接受一个或多个路径（paths）作为搜索范围，并在该路径下递归地搜索。</span>
	<span class="token builtin class-name">.</span>	:当前目录
	~	:家目录
	/	:根目录
	
搜索条件：
<span class="token comment">#可根据文件名、文件类型、文件大小等属性进行搜索。</span>
	-name	：根据文件名（区分大小写），-iname不区分文件名大小写
	-type	：根据文件类型（f：文件；d：目录；l：符号链接）
	-empty	：检索为空的文件或目录（-type f <span class="token operator">!</span> -empty非空文件）
	-user	：根据文件或目录的归属
	-mtime	：根据最后一次文件内容有过更改的时间点（单位为天）
	-atime	：根据最后一次文件有被读取过的时间点（atime <span class="token number">2</span>两天前）
	-ctime	：根据最后一次文件有被变更过的时间点（-2两天内；+2超过两天）
	-c		：根据文件大小（c：字节；k：Kb；M：Mb；G：Gb；+-表示大于小于）
	-perm	 ：根据文件权限
	
搜索内容：
	要搜索的内容
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>具体请看 <a href="https://ryukarin.github.io/blog/project/Linux%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86/06.linux%E6%90%9C%E7%B4%A2%E5%91%BD%E4%BB%A4/#find-%E5%91%BD%E4%BB%A4" target="_blank" rel="noopener noreferrer">linux搜索命令<ExternalLinkIcon/></a></p>
<h3 id="xargs-命令" tabindex="-1"><a class="header-anchor" href="#xargs-命令" aria-hidden="true">#</a> xargs 命令</h3>
<p>将前一个命令的标准输出传递给下一个命令，作为它的参数，<code>xargs</code> 的默认命令是 <code>echo</code>，空格是默认定界符；将多行输入转换为单行</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># [前一个命令] | xargs [选项] [后一个命令]</span>
选项：
	-n	：指定一次处理的参数个数
	-d	：自定义参数界定符
	-p	：询问是否运行 later <span class="token builtin class-name">command</span> 参数
	-t	：表示先打印命令，然后再执行
	-i	：逐项处理
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="小知识-xargs-与管道-的区别" tabindex="-1"><a class="header-anchor" href="#小知识-xargs-与管道-的区别" aria-hidden="true">#</a> 小知识：<code>xargs</code> 与管道 <code>|</code> 的区别</h3>
<p>管道 <code>|</code> 用来将前一个命令的标准输出传递到下一个命令的标准输入，<code>xargs</code> 将前一个命令的标准输出传递给下一个命令，作为它的参数。</p>
</template>
