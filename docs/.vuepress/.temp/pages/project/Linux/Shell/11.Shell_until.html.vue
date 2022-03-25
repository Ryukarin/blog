<template><h2 id="until-介绍" tabindex="-1"><a class="header-anchor" href="#until-介绍" aria-hidden="true">#</a> until 介绍</h2>
<p>和 while 正好相反，until 是条件为假开始执行循环，条件为真停止循环。</p>
<h2 id="until-语法" tabindex="-1"><a class="header-anchor" href="#until-语法" aria-hidden="true">#</a> until 语法</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">until</span> <span class="token punctuation">[</span> condition <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">do</span>
	commands
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>具体用法可以参照 while 循环，此处不多说明。</p>
<h2 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h2>
<p>输出 10-20 数字</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># vim until_num.sh</span>
<span class="token comment">#!/bin/bash</span>
<span class="token assign-left variable">num</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token keyword">until</span> <span class="token punctuation">[</span> <span class="token variable">$num</span> -gt <span class="token number">18</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">do</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$num</span>
<span class="token assign-left variable">num</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>num<span class="token operator">+</span><span class="token number">1</span><span class="token variable">))</span></span>
<span class="token keyword">done</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># bash until_num.sh</span>
<span class="token number">10</span>
<span class="token number">11</span>
<span class="token number">12</span>
<span class="token number">13</span>
<span class="token number">14</span>
<span class="token number">15</span>
<span class="token number">16</span>
<span class="token number">17</span>
<span class="token number">18</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>while 和 until 接力输出</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># vim while_until.sh</span>
<span class="token comment">#!/bin/bash</span>
<span class="token assign-left variable">num</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$num</span> -lt <span class="token number">6</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">do</span>				<span class="token comment">#输出1-5</span>
	<span class="token builtin class-name">echo</span> <span class="token variable">$num</span>
	<span class="token assign-left variable">num</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>num<span class="token operator">+</span><span class="token number">1</span><span class="token variable">))</span></span>
	<span class="token keyword">until</span> <span class="token punctuation">[</span> <span class="token variable">$num</span> -lt <span class="token number">6</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">do</span>			<span class="token comment">#接力输出6-10</span>
		<span class="token builtin class-name">echo</span> <span class="token variable">$num</span>
		<span class="token assign-left variable">num</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>num<span class="token operator">+</span><span class="token number">1</span><span class="token variable">))</span></span>
			<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$num</span> -eq <span class="token number">11</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
				<span class="token builtin class-name">break</span>
			<span class="token keyword">fi</span>
	<span class="token keyword">done</span>
<span class="token keyword">done</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># bash vim while_until.sh</span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">4</span>
<span class="token number">5</span>
<span class="token number">6</span>
<span class="token number">7</span>
<span class="token number">8</span>
<span class="token number">9</span>
<span class="token number">10</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div></template>
