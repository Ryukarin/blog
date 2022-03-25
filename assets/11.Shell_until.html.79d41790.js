import{_ as n,a as s}from"./app.893f8b81.js";const a={},e=s(`<h2 id="until-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#until-\u4ECB\u7ECD" aria-hidden="true">#</a> until \u4ECB\u7ECD</h2><p>\u548C while \u6B63\u597D\u76F8\u53CD\uFF0Cuntil \u662F\u6761\u4EF6\u4E3A\u5047\u5F00\u59CB\u6267\u884C\u5FAA\u73AF\uFF0C\u6761\u4EF6\u4E3A\u771F\u505C\u6B62\u5FAA\u73AF\u3002</p><h2 id="until-\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#until-\u8BED\u6CD5" aria-hidden="true">#</a> until \u8BED\u6CD5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">until</span> <span class="token punctuation">[</span> condition <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">do</span>
	commands
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5177\u4F53\u7528\u6CD5\u53EF\u4EE5\u53C2\u7167 while \u5FAA\u73AF\uFF0C\u6B64\u5904\u4E0D\u591A\u8BF4\u660E\u3002</p><h2 id="\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a> \u6848\u4F8B</h2><p>\u8F93\u51FA 10-20 \u6570\u5B57</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># vim until_num.sh</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>while \u548C until \u63A5\u529B\u8F93\u51FA</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># vim while_until.sh</span>
<span class="token comment">#!/bin/bash</span>
<span class="token assign-left variable">num</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$num</span> -lt <span class="token number">6</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">do</span>				<span class="token comment">#\u8F93\u51FA1-5</span>
	<span class="token builtin class-name">echo</span> <span class="token variable">$num</span>
	<span class="token assign-left variable">num</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>num<span class="token operator">+</span><span class="token number">1</span><span class="token variable">))</span></span>
	<span class="token keyword">until</span> <span class="token punctuation">[</span> <span class="token variable">$num</span> -lt <span class="token number">6</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">do</span>			<span class="token comment">#\u63A5\u529B\u8F93\u51FA6-10</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,10);function p(l,t){return e}var o=n(a,[["render",p]]);export{o as default};
