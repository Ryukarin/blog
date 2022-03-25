<template><h2 id="case-介绍" tabindex="-1"><a class="header-anchor" href="#case-介绍" aria-hidden="true">#</a> case 介绍</h2>
<p>在生产环境中，我们总会遇到一个问题需要根据不同的状况来执行不同的预案，那么我们要处理这样的问题，首先根据可能出现的情况先写出对应预案，之后根据出现的情况来加载不同的预案。</p>
<p>特点：根据给予的不同条件执行不同的代码块。</p>
<blockquote>
<p><u>比如你去相亲，遇到对方家人要怎样称呼</u></p>
<p>看到对方父亲：伯父好</p>
<p>看到对方母亲：伯母好</p>
<p>看到对方奶奶：奶奶好</p>
</blockquote>
<blockquote>
<p><u>再比如计算机系统监控内存使用率</u></p>
<p>内存使用率低于 80%，脚本输出：绿色字体的 Memory use xx%</p>
<p>内存使用率大于 80% 小于 90%，脚本输出：黄色字体的 Memory use xx%</p>
<p>内存使用率大于 90%，脚本输出：红色字体的 Memory use xx%</p>
</blockquote>
<h2 id="case-语法" tabindex="-1"><a class="header-anchor" href="#case-语法" aria-hidden="true">#</a> case 语法</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">case</span> var <span class="token keyword">in</span>
condition1<span class="token punctuation">)</span>
	commands1
<span class="token punctuation">;</span><span class="token punctuation">;</span>
condition2<span class="token punctuation">)</span>
	commands2
<span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>每个代码块执行完毕要以&quot;&quot; <strong>;;</strong> &quot;&quot;结尾代表结束，case 结尾要以其倒过来写的 esac 来结束。</p>
</div>
<p>实例：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># vim zmn.sh</span>
<span class="token comment">#!/bin/bash</span>
<span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span>
zmn<span class="token operator">|</span>ZMN<span class="token punctuation">)</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"伯母好"</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"伯母辛苦了"</span>
lzr<span class="token operator">|</span>LZR<span class="token punctuation">)</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"伯父好"</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"伯父真帅气"</span>
lnn<span class="token operator">|</span>LNN<span class="token punctuation">)</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"奶奶好"</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"奶奶吉祥"</span>
lyy<span class="token operator">|</span>LYY<span class="token punctuation">)</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"爷爷好"</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"爷爷万岁"</span>
*<span class="token punctuation">)</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"输入无效，使用方法：<span class="token variable">$0</span> zmn|lzr|lnn|lyy"</span>
<span class="token keyword">esac</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># bash zmn.sh lzr</span>
伯父好
伯父真帅气
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># bash zmn.sh lyy</span>
爷爷好
爷爷万岁
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># bash zmn.sh sdf</span>
输入无效，使用方法：zmn.sh zmn<span class="token operator">|</span>lzr<span class="token operator">|</span>lnn<span class="token operator">|</span>lyy
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># bash zmn.sh zmn</span>
伯母好
伯母辛苦了
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="shell-特殊变量" tabindex="-1"><a class="header-anchor" href="#shell-特殊变量" aria-hidden="true">#</a> shell 特殊变量</h2>
<p>特殊参数</p>
<table>
<thead>
<tr>
<th>参数符号</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>$*</td>
<td>代表所有参数，其间隔为IFS内定参数的第一个单元</td>
</tr>
<tr>
<td>$@</td>
<td>与 $* 类同，不同之处在于不参照 IFS</td>
</tr>
<tr>
<td>$#</td>
<td>代表参数的数量</td>
</tr>
<tr>
<td>$？</td>
<td>执行上一个指令的返回值</td>
</tr>
<tr>
<td>$$</td>
<td>本身的 PID（process ID）</td>
</tr>
<tr>
<td>$_</td>
<td>显示出最后一个执行的命令</td>
</tr>
<tr>
<td>$N</td>
<td>shell 的第几个外传参数</td>
</tr>
</tbody>
</table>
<ul>
<li>示例</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># vim special.sh</span>
<span class="token comment">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> <span class="token string">"脚本文件名：<span class="token variable">$0</span>"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"脚本所有外传参数：<span class="token variable">$*</span>"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"脚本所有外传参数：<span class="token variable">$@</span>"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"脚本外传参数数量：<span class="token variable">$#</span>"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"上一个命令的返回值：<span class="token variable">$?</span>"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"脚本执行的进程号PID：<span class="token variable">$$</span>"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"执行最后一次执行的命令：<span class="token variable">$_</span>"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"第3个外传参数：<span class="token variable">$3</span> "</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># bash special.sh aaa bbb ccc ddd</span>
<span class="token comment">#脚本文件名：special.sh</span>
<span class="token comment">#脚本所有外传参数：aaa bbb ccc ddd</span>
<span class="token comment">#脚本所有外传参数：aaa bbb ccc ddd</span>
<span class="token comment">#脚本外传参数数量：4</span>
<span class="token comment">#上一个命令的返回值：0</span>
<span class="token comment">#脚本执行的进程号PID：17306</span>
<span class="token comment">#执行最后一次执行的命令：脚本执行的进程号PID：17306</span>
<span class="token comment">#第3个外传参数：ccc</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></template>
