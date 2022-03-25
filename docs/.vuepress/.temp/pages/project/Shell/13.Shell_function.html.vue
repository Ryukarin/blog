<template><h2 id="函数介绍" tabindex="-1"><a class="header-anchor" href="#函数介绍" aria-hidden="true">#</a> 函数介绍</h2>
<p>写代码的时候，我们很多人习惯从头写到结束，完成以后再一起测试。但是到测试阶段才发现：错误一大堆，上帝啊！弄死我吧！</p>
<p>为了解决这个问题，建议大家把代码模块化，一个模块实现一个功能，哪怕是一个很小的功能都可以，这样的话我们写代码，逻辑上就会比较简单，代码量比较少，排错简单，这也就是函数的好处。</p>
<h3 id="函数的优点" tabindex="-1"><a class="header-anchor" href="#函数的优点" aria-hidden="true">#</a> 函数的优点</h3>
<p>代码模块化，调用方便，节省内存
代码模块化，代码量少，排错简单
代码模块化，可以改变代码的执行顺序</p>
<h3 id="函数的语法" tabindex="-1"><a class="header-anchor" href="#函数的语法" aria-hidden="true">#</a> 函数的语法</h3>
<h4 id="定义函数" tabindex="-1"><a class="header-anchor" href="#定义函数" aria-hidden="true">#</a> 定义函数</h4>
<p>语法一：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>函数名 <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	commands
	<span class="token builtin class-name">return</span> N
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>语法二：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">function</span> 函数名<span class="token punctuation">{</span>
	commands
	<span class="token builtin class-name">return</span> N
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>补充：</p>
<p>return 在 shell 中意义不大，可以省略不写。</p>
<p>function 定义函数没有小括号 ( )。
定义好的函数默认不会执行，需要调用</p>
<h4 id="调用函数" tabindex="-1"><a class="header-anchor" href="#调用函数" aria-hidden="true">#</a> 调用函数</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>函数名
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>说明：直接在脚本中输入函数名，即可调用已定义的函数。</p>
<p>实例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># vim fun.sh</span>
<span class="token comment">#!/bin/bash</span>
<span class="token function-name function">start</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Apache start ............................... [OK]"</span>
<span class="token punctuation">}</span>

<span class="token function-name function">stop</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Apache stop ............................... [FALIL]"</span>
<span class="token punctuation">}</span>
start
start
start
stop
stop
stop
stop
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># bash fun.sh</span>
Apache start <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
Apache start <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
Apache start <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
Apache stop <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>FALIL<span class="token punctuation">]</span>
Apache stop <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>FALIL<span class="token punctuation">]</span>
Apache stop <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>FALIL<span class="token punctuation">]</span>
Apache stop <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>FALIL<span class="token punctuation">]</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div></template>
