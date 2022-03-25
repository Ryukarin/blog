<template><p>脚本再执行任务的时候，总会遇到需要循环执行的时候，比如说我们需要脚本每隔五分钟执行一次 ping 的操作，除了计划任务，我们还可以使用脚本来完成，那么我们就用到了循环语句。</p>
<h2 id="for-循环介绍" tabindex="-1"><a class="header-anchor" href="#for-循环介绍" aria-hidden="true">#</a> for 循环介绍</h2>
<p>很多人把for循环叫做条件循环，或者 <code>for-i-in</code>。其实前者说的就是 for 的特性，for 循环的次数和给予的条件是成正比的，你让它循环 5 次，它就循环 5 次；后者说的是 for 的语法。</p>
<h2 id="for-语法" tabindex="-1"><a class="header-anchor" href="#for-语法" aria-hidden="true">#</a> for 语法</h2>
<h3 id="for-语法一" tabindex="-1"><a class="header-anchor" href="#for-语法一" aria-hidden="true">#</a> for 语法一</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">var</span> <span class="token keyword">in</span> vlue1 value2 <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">;</span><span class="token keyword">do</span>
	commands
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>接下来看段代码吧，循环输出数字 1-9</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cat for_1.sh</span>
<span class="token comment">#!/bin/bash</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">`</span><span class="token function">seq</span> <span class="token number">1</span> <span class="token number">9</span><span class="token variable">`</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
	<span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="for-语法二-c-格式-for-循环" tabindex="-1"><a class="header-anchor" href="#for-语法二-c-格式-for-循环" aria-hidden="true">#</a> for 语法二 （C 格式 for 循环）</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>变量<span class="token punctuation">;</span>条件<span class="token punctuation">;</span>自增减运算<span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
	commands
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>还是刚才的循环输出数字 1-9</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cat for_2.sh</span>
<span class="token comment">#!/bin/bash</span>
<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
	<span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">补充</p>
<p><code>seq</code> 命令：<code>seq</code> 命令可以输出连续的数字，或者输出固定间隔的数字，或者输出指定格式的数字。</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># seq [选项] 首数 步进 尾数</span>
选项：
	-s	：指定输出的分隔符，默认为 <span class="token punctuation">\</span>n，即默认为回车换行
	-w	：指定为定宽输出，不能和 -f 一起用
	-f	：按照指定的格式输出，不能和 -w 一起使用
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># echo `seq 1 5`			#1---5之间，默认步进为1的数字</span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">4</span>
<span class="token number">5</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># echo `seq 10 -2 1`		#10---1之间，步进为-2的数字</span>
<span class="token number">10</span>
<span class="token number">8</span>
<span class="token number">6</span>
<span class="token number">4</span>
<span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="c-格式-for-循环双变量" tabindex="-1"><a class="header-anchor" href="#c-格式-for-循环双变量" aria-hidden="true">#</a> C 格式 for 循环双变量</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># vim for_3.sh</span>
<span class="token comment">#!/bin/bash</span>
<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>m<span class="token operator">=</span><span class="token number">9</span><span class="token punctuation">,</span>n<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>m<span class="token operator">></span><span class="token number">1</span><span class="token punctuation">,</span>n<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span>m<span class="token operator">--</span><span class="token punctuation">,</span>n<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
	<span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token variable">$m</span><span class="token entity" title="\t">\t</span><span class="token variable">$n</span>"</span>
<span class="token keyword">done</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># bash for_3.sh</span>
<span class="token number">9</span>	<span class="token number">1</span>
<span class="token number">8</span>	<span class="token number">2</span>
<span class="token number">7</span>	<span class="token number">3</span>
<span class="token number">6</span>	<span class="token number">4</span>
<span class="token number">5</span>	<span class="token number">5</span>
<span class="token number">4</span>	<span class="token number">6</span>
<span class="token number">3</span>	<span class="token number">7</span>
<span class="token number">2</span>	<span class="token number">8</span>
<span class="token number">1</span>	<span class="token number">9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="循环控制语句" tabindex="-1"><a class="header-anchor" href="#循环控制语句" aria-hidden="true">#</a> 循环控制语句</h2>
<h3 id="sleep-n" tabindex="-1"><a class="header-anchor" href="#sleep-n" aria-hidden="true">#</a> sleep N</h3>
<p><strong>脚本执行到该步休眠 N 秒</strong></p>
<p>看段代码吧</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># vim sllep.sh</span>
<span class="token comment">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> -n <span class="token string">"倒计时："</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">`</span><span class="token function">seq</span> <span class="token number">9</span> -1 <span class="token number">1</span><span class="token variable">`</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
	<span class="token builtin class-name">echo</span> -n -e <span class="token string">"<span class="token entity" title="\b">\b</span><span class="token variable">$i</span>"</span>
<span class="token function">sleep</span> <span class="token number">1</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="continue" tabindex="-1"><a class="header-anchor" href="#continue" aria-hidden="true">#</a> continue</h3>
<p><strong>跳出循环中的某次循环</strong></p>
<p>继续看代码，默认循环输出 1-9，但是使用 continue 跳过输出 5</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># vim continue.sh</span>
<span class="token comment">#!/bin/bash</span>
<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$i</span> -eq <span class="token number">5</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
		<span class="token builtin class-name">continue</span>
	<span class="token keyword">else</span>
		<span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
	<span class="token keyword">fi</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="break" tabindex="-1"><a class="header-anchor" href="#break" aria-hidden="true">#</a> break</h3>
<p><strong>跳出循环继续执行后续代码</strong></p>
<p>还是看段代码，默认循环输出 1-9，当输出到5的时候跳出循环</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># vim break.sh</span>
<span class="token comment">#!/bin/bash</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">`</span><span class="token function">seq</span> <span class="token number">1</span> <span class="token number">9</span><span class="token variable">`</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
	<span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$i</span> -eq <span class="token number">5</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
		<span class="token builtin class-name">break</span>
	<span class="token keyword">fi</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<p>监控主机存活的脚本</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># vim ping.sh</span>
<span class="token comment">#!/bin/bash</span>
<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
	<span class="token function">ping</span> -c1 <span class="token variable">$1</span> <span class="token operator">&amp;></span> /dev/null
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> -eq <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
		<span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token variable"><span class="token variable">`</span><span class="token function">date</span> +<span class="token string">"%F %H:%M:%S"</span><span class="token variable">`</span></span>：<span class="token variable">$1</span> is <span class="token entity" title="\033">\033</span>[32m UP <span class="token entity" title="\033">\033</span>[0m"</span>
	<span class="token keyword">else</span>	
		<span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token variable"><span class="token variable">`</span><span class="token function">date</span> +<span class="token string">"%F %H:%M:%S"</span><span class="token variable">`</span></span>：<span class="token variable">$1</span> is <span class="token entity" title="\033">\033</span>[31m Down <span class="token entity" title="\033">\033</span>[0m"</span>
	<span class="token keyword">fi</span>
	<span class="token function">sleep</span> <span class="token number">5</span>		<span class="token comment">#每隔5秒循环一次，生产环境建议1分钟以上</span>
<span class="token keyword">done</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># bash ping.sh 192.168.2.123</span>
<span class="token number">2021</span>-2-7 <span class="token number">13</span>:32:21：192.168.2.123 is UP 
<span class="token number">2021</span>-2-7 <span class="token number">13</span>:32:26：192.168.2.123 is UP 
<span class="token number">2021</span>-2-7 <span class="token number">13</span>:32:31：192.168.2.123 is UP 
<span class="token number">2021</span>-2-7 <span class="token number">13</span>:32:36：192.168.2.123 is UP 
^C
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># bash ping.sh 192.168.2.321</span>
<span class="token number">2021</span>-2-7 <span class="token number">13</span>:33:13：192.168.2.321 is Down 
<span class="token number">2021</span>-2-7 <span class="token number">13</span>:32:18：192.168.2.321 is Down 
<span class="token number">2021</span>-2-7 <span class="token number">13</span>:32:23：192.168.2.321 is Down 
<span class="token number">2021</span>-2-7 <span class="token number">13</span>:32:28：192.168.2.321 is Down 
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></template>
