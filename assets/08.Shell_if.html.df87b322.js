import{_ as n,a as s}from"./app.893f8b81.js";const a={},e=s(`<p>\u5F53\u6211\u4EEC\u5728\u5199\u7A0B\u5E8F\u7684\u65F6\u5019\uFF0C\u65F6\u5E38\u5BF9\u4E0A\u4E00\u6B65\u6267\u884C\u662F\u5426\u6210\u529F\u5982\u4F55\u5224\u65AD\u82E6\u607C\uFF0C\u5F53\u6211\u4EEC\u5B66\u4E60\u4E86if\u5224\u65AD\u8BED\u53E5\u5C31\u53EF\u4EE5\u89E3\u51B3\u4F60\u7684\u82E6\u607C\u3002if\u5224\u65AD\u8BED\u53E5\u5728\u6211\u4EEC\u7A0B\u5E8F\u4E2D\u5C31\u662F\u7528\u6765\u505A\u5224\u65AD\u7684\uFF0C\u4EE5\u540E\u4E0D\u7BA1\u5B66\u4E60\u4EC0\u4E48\u8BED\u8A00\uFF0C\u4EE5\u540E\u53EA\u8981\u6D89\u53CA\u5230\u5224\u65AD\u7684\u90E8\u5206\uFF0C\u5C31\u53EF\u4EE5\u76F4\u63A5\u62FFif\u6765\u4F7F\u7528\uFF0C\u4E0D\u540C\u7684\u8BED\u8A00\u4E4B\u95F4\u7684 if \u53EA\u662F\u8BED\u6CD5\u4E0D\u540C\uFF0C\u539F\u7406\u662F\u76F8\u540C\u7684\u3002</p><h2 id="if-\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#if-\u8BED\u6CD5" aria-hidden="true">#</a> if \u8BED\u6CD5</h2><h3 id="\u8BED\u6CD5\u4E00" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5\u4E00" aria-hidden="true">#</a> \u8BED\u6CD5\u4E00</h3><p><code>if---then</code> \u8BED\u53E5</p><p>\u9002\u7528\u8303\u56F4\uFF1A\u53EA\u9700\u8981\u4E00\u6B65\u5224\u65AD\uFF0C\u6761\u4EF6\u4E3A\u771F\u505A\u4EC0\u4E48\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> condition <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>		<span class="token comment">#\u5982\u679C \u6761\u4EF6\u4E3A\u771F\uFF0C\u5219</span>
commands						<span class="token comment">#\u6267\u884Ccommands\u4EE3\u7801\u5757</span>
<span class="token keyword">fi</span>							<span class="token comment">#\u7ED3\u675F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5B9E\u4F8B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bahs</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> -f /mnt/test <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;/mnt/test\u6587\u4EF6\u5DF2\u5B58\u5728\u3002&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u8BED\u6CD5\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5\u4E8C" aria-hidden="true">#</a> \u8BED\u6CD5\u4E8C</h3><p><code>if---then---else</code> \u8BED\u53E5</p><p>\u9002\u7528\u8303\u56F4\uFF1A\u4E24\u6B65\u5224\u65AD\uFF0C\u6761\u4EF6\u4E3A\u771F\u505A\u4EC0\u4E48\uFF0C\u6761\u4EF6\u4E3A\u5047\u505A\u4EC0\u4E48\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> condition <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>		<span class="token comment">#\u5982\u679C \u6761\u4EF6\u4E3A\u771F\uFF0C\u5219</span>
commands1						<span class="token comment">#\u6267\u884Ccommands1\u4EE3\u7801\u5757</span>
<span class="token keyword">else</span>						<span class="token comment">#\u5426\u5219</span>
commands2						<span class="token comment">#\u6267\u884Ccommands2\u4EE3\u7801\u5757</span>
<span class="token keyword">fi</span>							<span class="token comment">#\u7ED3\u675F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5B9E\u4F8B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/binbahs</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token environment constant">$USER</span> <span class="token operator">==</span> <span class="token string">&quot;root&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u7BA1\u7406\u5458\uFF0C\u4F60\u597D\uFF01&quot;</span>
<span class="token keyword">else</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;guest\uFF0C\u4F60\u597D\uFF01&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u8BED\u6CD5\u4E09" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5\u4E09" aria-hidden="true">#</a> \u8BED\u6CD5\u4E09</h3><p><code>if---thne---eliif---else</code> \u8BED\u53E5</p><p>\u4F7F\u7528\u8303\u56F4\uFF1A\u591A\u4E8E\u4E24\u4E2A\u4EE5\u4E0A\u7684\u5224\u65AD\u7ED3\u679C\uFF0C\u4E5F\u5C31\u662F\u4E24\u4E2A\u53CA\u4EE5\u4E0A\u7684\u5224\u65AD\u6761\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> condition1 <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>		<span class="token comment">#\u5982\u679C \u6761\u4EF61\u4E3A\u771F\uFF0C\u5219</span>
	commands1					<span class="token comment">#\u6267\u884Ccommands1\u4EE3\u7801\u5757</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> condition2 <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>	<span class="token comment">#\u5982\u679C \u6761\u4EF62\u4E3A\u771F\uFF0C\u5219</span>
	commands2					<span class="token comment">#\u6267\u884Ccommands2\u4EE3\u7801\u5757</span>
	<span class="token punctuation">..</span>.							<span class="token comment">#...</span>
<span class="token keyword">else</span>						<span class="token comment">#\u5426\u5219</span>
	commandsX					<span class="token comment">#\u6267\u884CcommandsX\u4EE3\u7801\u5757</span>
<span class="token keyword">fi</span>							<span class="token comment">#\u7ED3\u675F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5B9E\u4F8B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">read</span> -p <span class="token string">&quot;\u8BF7\u8F93\u5165\u4E00\u4E2A\u6574\u6570\uFF1A&quot;</span> x
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$x</span> -gt <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u60A8\u8F93\u5165\u7684\u662F\u4E00\u4E2A\u6B63\u6574\u6570\u3002&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$x</span> -eq <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u60A8\u8F93\u5165\u7684\u662F0\u3002&quot;</span>
<span class="token keyword">else</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;\u60A8\u8F93\u5165\u7684\u662F\u4E00\u4E2A\u8D1F\u6574\u6570\u3002&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u8865\u5145</p><p>\u6761\u4EF6\u7B26\u53F7\u4F7F\u7528\u53CC\u5706\u62EC\u53F7\uFF0C\u53EF\u4EE5\u5728\u6761\u4EF6\u4E2D\u690D\u5165\u6570\u5B66\u8868\u8FBE\u5F0F</p><p>\u53CC\u5706\u62EC\u53F7\u4E2D\u7684\u6BD4\u8F83\u8FD0\u7B97\u7B26\uFF0C\u4F7F\u7528\u7684\u662F\u6211\u4EEC\u4F20\u7EDF\u7684\u6BD4\u8F83\u8FD0\u7B97\u7B26 &gt;&gt;=\u3001==\u3001&lt;&lt;=\u3001!=</p><p>\u4F7F\u7528\u53CC\u65B9\u62EC\u53F7\uFF0C\u53EF\u4EE5\u5728\u6761\u4EF6\u4E2D\u4F7F\u7528\u901A\u914D\u7B26</p></div><h2 id="\u4F5C\u4E1A" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u4E1A" aria-hidden="true">#</a> \u4F5C\u4E1A</h2><ul><li>\u5224\u65AD\u4E00\u4E2A\u673A\u5668\u662F\u5426\u5B58\u6D3B\uFF08\u80FD ping \u901A\u5C31\u7B97\u5B58\u6D3B\uFF09</li><li>\u5224\u65AD\u670D\u52A1\u5668\u4E0A\u7684\u67D0\u4E2A\u670D\u52A1\u662F\u5426\u5F00\u542F</li><li>\u5224\u65AD\u67D0\u5E74\u662F\u5426\u4E3A\u95F0\u5E74</li><li>\u5199\u4E00\u4E2A Nginx \u5B89\u88C5\u811A\u672C\uFF0C\u52A0\u5165\u5224\u65AD\uFF0C\u5F53\u4E0A\u4E00\u6B65\u6267\u884C\u6210\u529F\u518D\u6267\u884C\u4E0B\u4E00\u6B65\uFF0C\u5426\u5219\u9000\u51FA\u811A\u672C</li><li>\u5199\u4E00\u4E2A\u5907\u4EFD\u811A\u672C\uFF0C\u5C06 A \u673A\u5668\u5F53\u5929\u4FEE\u6539\u679C\u7684\u6587\u4EF6=\u6536\u96C6\u5230 <code>/cache</code> \u76EE\u5F55\uFF0C\u6253\u5305\u5E76\u53D1\u9001\u5230B\u673A\u5668 <code>/opt/backup</code> \u76EE\u5F55\u4E0B\uFF0C\u901A\u8FC7 MD5 \u503C\u5224\u65AD B \u673A\u5668\u4E0A\u7684\u5907\u4EFD\u7684\u5B8C\u6574\u6027</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#nginx\u5B89\u88C5\u811A\u672C</span>
<span class="token punctuation">[</span>root@linux ~ <span class="token punctuation">]</span><span class="token comment"># vim nginx_install.sh</span>
<span class="token comment">#!/bin/bash</span>
yum -y <span class="token function">install</span> <span class="token function">wget</span> gcc pcre-devel zlib-devel
<span class="token function">wget</span> http://nginx.org/download/nginx-1.18.0.tar.gz
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> -eq <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
	<span class="token function">tar</span> -xf nginx-1.18.0.tar.gz
	<span class="token builtin class-name">cd</span> nginx-1.18.0
	./configure --prefix<span class="token operator">=</span>/usr/local/nginx
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> -eq <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
		<span class="token function">make</span> -j <span class="token number">4</span>
		<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> -eq <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
			<span class="token function">make</span> <span class="token function">install</span>
				<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> -eq <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
					<span class="token builtin class-name">echo</span> <span class="token string">&quot;nginx\u5B89\u88C5\u6210\u529F&quot;</span>
				<span class="token keyword">else</span> 
					<span class="token builtin class-name">echo</span> <span class="token string">&quot;nginx\u5B89\u88C5\u5931\u8D25&quot;</span>
				<span class="token keyword">fi</span>
		<span class="token keyword">else</span>
			<span class="token builtin class-name">echo</span> <span class="token string">&quot;nginx\u7F16\u8BD1\u5931\u8D25&quot;</span>
		<span class="token keyword">fi</span>
	<span class="token keyword">else</span>
		<span class="token builtin class-name">echo</span> <span class="token string">&quot;nginx\u914D\u7F6E\u5931\u8D25&quot;</span>
	<span class="token keyword">fi</span>
<span class="token keyword">else</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;nginx\u4E0B\u8F7D\u5931\u8D25&quot;</span>
<span class="token keyword">fi</span>
<span class="token punctuation">[</span>root@linux ~ <span class="token punctuation">]</span><span class="token comment"># chmod 700 nginx_install.sh</span>
<span class="token punctuation">[</span>root@linux ~ <span class="token punctuation">]</span><span class="token comment"># ./nginx_install.sh</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div>`,24);function t(p,l){return e}var o=n(a,[["render",t]]);export{o as default};