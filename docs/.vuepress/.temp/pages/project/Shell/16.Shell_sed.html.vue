<template><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>在 shell 脚本编写中，时常会用到对文件的相关操作，比如增加内容、修改内容、删除部分内容、查看部分内容等，但是上述的这些操作一般都是需要在文本编辑器中才能操作，常用的文本编辑器有：<code>gedit</code>、<code>vim</code>、<code>nano</code> 等，又是交互式文本编辑器，脚本无法自己独立完成必须有人参与才可以完成。如果这样的话又违背了我们编写脚本的目的（全部由机器来完成，减少人的工作压力，提升工作效率）。emm......如何才能让这些操作全部脚本自己就搞定，而不需要人的参与（即完全自动化），而且又能按照我们的脚本预案来完成呢？</p>
<p>为了解决上述问题，linux 为我们提供了一些命令，比如：<code>perl</code>、<code>sed</code> 等命令，下面我们就来学习一下 <code>sed</code> 命令。</p>
<h2 id="sed-命令" tabindex="-1"><a class="header-anchor" href="#sed-命令" aria-hidden="true">#</a> sed 命令</h2>
<p><code>sed</code> 命令是 linux 中提供的一个外部命令，它是一个行（流）编辑器，非交互式的对文件内容进行增删改查的操作，使用者只能在命令行输入编辑命令、指定文件名，然后在屏幕上查看输出。它和文本编辑器有本质的区别。</p>
<p><strong>区别：</strong></p>
<ul>
<li>文本编辑器：编辑对象是文件</li>
<li>行编辑器：编辑对象是文件中的行</li>
</ul>
<p>也就是前者一次处理一个文本，而后者是一次处理一个文本中的一行。这个是我们应该弄清楚且必须牢记的，否则可能无法理解 <code>sed</code> 的运行原理和使用精髓。</p>
<h3 id="sed数据处理原理" tabindex="-1"><a class="header-anchor" href="#sed数据处理原理" aria-hidden="true">#</a> sed数据处理原理</h3>
<div class="custom-container center">
<p><img src="@source/project/Shell/assets/sed.png" alt="数据处理" loading="lazy"></p>
<p><u>读取的数据在缓存中处理，然后默认输出到屏幕</u></p>
</div>
<h3 id="sed-命令格式" tabindex="-1"><a class="header-anchor" href="#sed-命令格式" aria-hidden="true">#</a> sed 命令格式</h3>
<p><strong>命令格式如下：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># sed [选项] '{内部命令}[标志]' [文件]</span>
选项：
	-e		:将脚本中指定的命令添加到处理输入时执行的命令中；一行中要有多个条件
	-f		:将文件中指定的命令添加到处理输入时的命令中
	-n		:抑制自动输出
	-i		:编辑文件内容
	-i.bak	:编辑文件内容同时创建.bak的备份文件
	-r		:使用扩展的正则表达式
	<span class="token operator">!</span>		:取反（跟在模式条件后，与shell有所区别）
	
内部命令：	
	a	：在匹配后面添加
	i	：在匹配前面添加
	p	：打印
	d	：删除
	s	：查找替换
	c	：编辑更改
	y	：转换（	N	D	P	）
	
标志：
	数字：表示新文本替换模式
	g	：表示用新文本替换现有文本的全部实例
	p	：表示打印原始的内容
	w	：将替换的结果写入文件
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="sed-使用小技巧" tabindex="-1"><a class="header-anchor" href="#sed-使用小技巧" aria-hidden="true">#</a> sed 使用小技巧</h2>
<p><code>$=</code> ：统计文本有多少行</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed '=' date</span>
<span class="token number">1</span>
hello world<span class="token operator">!</span>
<span class="token number">2</span>
you can you Up
<span class="token number">3</span>
bye bye
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed -n '$=' date</span>
<span class="token number">3</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="实例说明" tabindex="-1"><a class="header-anchor" href="#实例说明" aria-hidden="true">#</a> 实例说明</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#cat查看文件内容</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># cat data</span>
<span class="token number">1</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">2</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">3</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">4</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">5</span>.the quick brown fox jumps over the lazy dog.dog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="sed-内部命令" tabindex="-1"><a class="header-anchor" href="#sed-内部命令" aria-hidden="true">#</a> sed 内部命令</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#每行后面追加</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed 'a\hello world' data</span>
<span class="token number">1</span>.the quick brown fox jumps over the lazy dog.dog
hello world
<span class="token number">2</span>.the quick brown fox jumps over the lazy dog.dog
hello world
<span class="token number">3</span>.the quick brown fox jumps over the lazy dog.dog
hello world
<span class="token number">4</span>.the quick brown fox jumps over the lazy dog.dog
hello world
<span class="token number">5</span>.the quick brown fox jumps over the lazy dog.dog
hello world
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#第3行后面追加</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed '3a\hello world' data</span>
<span class="token number">1</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">2</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">3</span>.the quick brown fox jumps over the lazy dog.dog
hello world
<span class="token number">4</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">5</span>.the quick brown fox jumps over the lazy dog.dog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#第2-4行之间每行后面追加</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed '2,4a\hello world' data</span>
<span class="token number">1</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">2</span>.the quick brown fox jumps over the lazy dog.dog
hello world
<span class="token number">3</span>.the quick brown fox jumps over the lazy dog.dog
hello world
<span class="token number">4</span>.the quick brown fox jumps over the lazy dog.dog
hello world
<span class="token number">5</span>.the quick brown fox jumps over the lazy dog.dog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#匹配3.the的行后面追加</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed '/3.the/a\hello world' data</span>
<span class="token number">1</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">2</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">3</span>.the quick brown fox jumps over the lazy dog.dog
hello world
<span class="token number">4</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">5</span>.the quick brown fox jumps over the lazy dog.dog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>总结</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed 'i\hello world' data				#每行前面插入</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed '3i\hello world' data				#第3行前面插入</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed '2,4i\hello world' data			#第2-4行之间每行前面插入</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed '/3.the/i\hello world' data		#匹配3.the的行前面插入</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed ‘d’ data							#删除所有</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed ‘3d’ data							#删除第3行</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed ‘2,4d’ data						#删除第2-4行</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed ‘/3.the/d’ data					#删除匹配3.the的那一行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#每一行中第一次出现的dog替换成cat</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed 's/dog/cat/' data</span>
<span class="token number">1</span>.the quick brown fox jumps over the lazy cat.dog
<span class="token number">2</span>.the quick brown fox jumps over the lazy cat.dog
<span class="token number">3</span>.the quick brown fox jumps over the lazy cat.dog
<span class="token number">4</span>.the quick brown fox jumps over the lazy <span class="token function">cat</span>
<span class="token number">5</span>.the quick brown fox jumps over the lazy <span class="token function">cat</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#第3行中第一次出现的dog替换成cat</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed '3s/dog/cat/' data</span>
<span class="token comment">#第2-4行中第一次出现的dog替换成cat</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed '2,4s/dog/cat/' data</span>
<span class="token comment">#匹配3.the那行第一次出现的dog替换成cat</span>
<span class="token punctuation">[</span>root@linux ~ <span class="token punctuation">]</span><span class="token comment"># sed '3.the/s/dog/cat/' data</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#每一行内容都更改为hello world</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed 'c\hello world' data</span>
hello world
hello world
hello world
hello world
hello world
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#第3行内容更改为hello world</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed '3c\hello world' data</span>
<span class="token number">1</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">2</span>.the quick brown fox jumps over the lazy dog.dog
hello world
<span class="token number">4</span>.the quick brown fox jumps over the lazy dog
<span class="token number">5</span>.the quick brown fox jumps over the lazy dog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#第2-4行删掉，加入一行hello world</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed '2,4c\hello world' data</span>
<span class="token number">1</span>.the quick brown fox jumps over the lazy dog.dog
hello world
<span class="token number">5</span>.the quick brown fox jumps over the lazy dog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#匹配3.the那行内容更改为hello world</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed '/3.the/c\hello world' data</span>
<span class="token number">1</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">2</span>.the quick brown fox jumps over the lazy dog.dog
hello world
<span class="token number">4</span>.the quick brown fox jumps over the lazy dog
<span class="token number">5</span>.the quick brown fox jumps over the lazy dog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#转换abcdefg/ABCDEFG一一对应</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed 'y/abcdefg/ABCDEFG' data</span>
<span class="token number">1</span>.thE quiCk Brown Fox jumps ovEr thE lAzy DoG.DoG
<span class="token number">2</span>.thE quiCk Brown Fox jumps ovEr thE lAzy DoG.DoG

<span class="token number">3</span>.thE quiCk Brown Fox jumps ovEr thE lAzy DoG.DoG
<span class="token number">4</span>.thE quiCk Brown Fox jumps ovEr thE lAzy DoG
<span class="token number">5</span>.thE quiCk Brown Fox jumps ovEr thE lAzy DoG
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#把每行再打印一次，即每行打印2次</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed 'p' data</span>
<span class="token comment">#把第三行打印2次</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed '3p' data</span>
<span class="token number">1</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">2</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">3</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">3</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">4</span>.the quick brown fox jumps over the lazy dog
<span class="token number">5</span>.the quick brown fox jumps over the lazy dog
<span class="token comment">#把第2-4之间的行，每行打印2次</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed '2,4p' data</span>
<span class="token comment">#把匹配3.the的那行，打印2次</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed '/3.the/p' data</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="sed-命令标志" tabindex="-1"><a class="header-anchor" href="#sed-命令标志" aria-hidden="true">#</a> sed 命令标志</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#把每行的所有dog都替换成cat</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed ‘s/dog/cat/g’ data</span>
<span class="token number">1</span>.the quick brown fox jumps over the lazy cat.cat
<span class="token number">2</span>.the quick brown fox jumps over the lazy cat.cat
<span class="token number">3</span>.the quick brown fox jumps over the lazy cat.cat
<span class="token number">4</span>.the quick brown fox jumps over the lazy <span class="token function">cat</span>
<span class="token number">5</span>.the quick brown fox jumps over the lazy <span class="token function">cat</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#把每行的第2次出现的dog替换成cat</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed ‘s/dog/cat/2’ data</span>
<span class="token number">1</span>.the quick brown fox jumps over the lazy dog.cat
<span class="token number">2</span>.the quick brown fox jumps over the lazy dog.cat
<span class="token number">3</span>.the quick brown fox jumps over the lazy dog.cat
<span class="token number">4</span>.the quick brown fox jumps over the lazy dog
<span class="token number">5</span>.the quick brown fox jumps over the lazy dog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#把第3行第1次出现的dog替换成cat并打印2次</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed ‘3s/dog/cat/p’ data</span>
<span class="token number">1</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">2</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">3</span>.the quick brown fox jumps over the lazy cat.dog
<span class="token number">3</span>.the quick brown fox jumps over the lazy cat.dog

<span class="token number">4</span>.the quick brown fox jumps over the lazy dog
<span class="token number">5</span>.the quick brown fox jumps over the lazy dog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#把修改内容部分另存为data.bk</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed ‘3s/dog/cat/w data.bk’ data</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># ls</span>
data		data.bk
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># cat data.bk</span>
<span class="token number">3</span>.the quick brown fox jumps over the lazy cat.dog
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="sed-命令选项" tabindex="-1"><a class="header-anchor" href="#sed-命令选项" aria-hidden="true">#</a> sed 命令选项</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#不打印原本文本的内容</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed -n ‘3s/dog/cat/p’ data</span>
<span class="token number">3</span>.the quick brown fox jumps over the lazy cat.dog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#多条件替换</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed -e ‘s/brown/white/;5s/dog/cat/’ data</span>
<span class="token number">5</span>.the quick white fox jumps over the lazy <span class="token function">cat</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># vim cmd_op</span>
5s/brown/white/
5s/dog/cat/
<span class="token comment">#文件内容当作命令</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed -f cmd_op data	</span>
<span class="token number">5</span>.the quick white fox jumps over the lazy <span class="token function">cat</span>
<span class="token comment">#修改原文件，不可逆，慎用</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed -i ‘s/dog/cat/’ data</span>
<span class="token comment">#修改原文件前先备份一个.bak的文件</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed -i.bak ‘s/dog/cat/’ data			</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># ls</span>
data		data.bk		data.bak
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="补充说明" tabindex="-1"><a class="header-anchor" href="#补充说明" aria-hidden="true">#</a> 补充说明</h3>
<p>除了<code>sed -i</code> 会修改原文件内容，且一但修改则不能取消；
其他参数命令不会修改原文件内容，只是修改缓存中的内容并打印输出。</p>
</template>
