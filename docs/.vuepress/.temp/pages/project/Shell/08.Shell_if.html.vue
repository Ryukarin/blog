<template><p>当我们在写程序的时候，时常对上一步执行是否成功如何判断苦恼，当我们学习了if判断语句就可以解决你的苦恼。if判断语句在我们程序中就是用来做判断的，以后不管学习什么语言，以后只要涉及到判断的部分，就可以直接拿if来使用，不同的语言之间的 if 只是语法不同，原理是相同的。</p>
<h2 id="if-语法" tabindex="-1"><a class="header-anchor" href="#if-语法" aria-hidden="true">#</a> if 语法</h2>
<h3 id="语法一" tabindex="-1"><a class="header-anchor" href="#语法一" aria-hidden="true">#</a> 语法一</h3>
<p><code>if---then</code> 语句</p>
<p>适用范围：只需要一步判断，条件为真做什么。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> condition <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>		<span class="token comment">#如果 条件为真，则</span>
commands						<span class="token comment">#执行commands代码块</span>
<span class="token keyword">fi</span>							<span class="token comment">#结束</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>实例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bahs</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> -f /mnt/test <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
<span class="token builtin class-name">echo</span> <span class="token string">"/mnt/test文件已存在。"</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="语法二" tabindex="-1"><a class="header-anchor" href="#语法二" aria-hidden="true">#</a> 语法二</h3>
<p><code>if---then---else</code> 语句</p>
<p>适用范围：两步判断，条件为真做什么，条件为假做什么。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> condition <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>		<span class="token comment">#如果 条件为真，则</span>
commands1						<span class="token comment">#执行commands1代码块</span>
<span class="token keyword">else</span>						<span class="token comment">#否则</span>
commands2						<span class="token comment">#执行commands2代码块</span>
<span class="token keyword">fi</span>							<span class="token comment">#结束</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>实例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/binbahs</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token environment constant">$USER</span> <span class="token operator">==</span> <span class="token string">"root"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
<span class="token builtin class-name">echo</span> <span class="token string">"管理员，你好！"</span>
<span class="token keyword">else</span>
<span class="token builtin class-name">echo</span> <span class="token string">"guest，你好！"</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="语法三" tabindex="-1"><a class="header-anchor" href="#语法三" aria-hidden="true">#</a> 语法三</h3>
<p><code>if---thne---eliif---else</code> 语句</p>
<p>使用范围：多于两个以上的判断结果，也就是两个及以上的判断条件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> condition1 <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>		<span class="token comment">#如果 条件1为真，则</span>
	commands1					<span class="token comment">#执行commands1代码块</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> condition2 <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>	<span class="token comment">#如果 条件2为真，则</span>
	commands2					<span class="token comment">#执行commands2代码块</span>
	<span class="token punctuation">..</span>.							<span class="token comment">#...</span>
<span class="token keyword">else</span>						<span class="token comment">#否则</span>
	commandsX					<span class="token comment">#执行commandsX代码块</span>
<span class="token keyword">fi</span>							<span class="token comment">#结束</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>实例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">read</span> -p <span class="token string">"请输入一个整数："</span> x
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$x</span> -gt <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"您输入的是一个正整数。"</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$x</span> -eq <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"您输入的是0。"</span>
<span class="token keyword">else</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"您输入的是一个负整数。"</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">补充</p>
<p>条件符号使用双圆括号，可以在条件中植入数学表达式</p>
<p>双圆括号中的比较运算符，使用的是我们传统的比较运算符 &gt;&gt;=、==、&lt;&lt;=、!=</p>
<p>使用双方括号，可以在条件中使用通配符</p>
</div>
<h2 id="作业" tabindex="-1"><a class="header-anchor" href="#作业" aria-hidden="true">#</a> 作业</h2>
<ul>
<li>判断一个机器是否存活（能 ping 通就算存活）</li>
<li>判断服务器上的某个服务是否开启</li>
<li>判断某年是否为闰年</li>
<li>写一个 Nginx 安装脚本，加入判断，当上一步执行成功再执行下一步，否则退出脚本</li>
<li>写一个备份脚本，将 A 机器当天修改果的文件=收集到 <code>/cache</code> 目录，打包并发送到B机器 <code>/opt/backup</code> 目录下，通过 MD5 值判断 B 机器上的备份的完整性</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#nginx安装脚本</span>
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
					<span class="token builtin class-name">echo</span> <span class="token string">"nginx安装成功"</span>
				<span class="token keyword">else</span> 
					<span class="token builtin class-name">echo</span> <span class="token string">"nginx安装失败"</span>
				<span class="token keyword">fi</span>
		<span class="token keyword">else</span>
			<span class="token builtin class-name">echo</span> <span class="token string">"nginx编译失败"</span>
		<span class="token keyword">fi</span>
	<span class="token keyword">else</span>
		<span class="token builtin class-name">echo</span> <span class="token string">"nginx配置失败"</span>
	<span class="token keyword">fi</span>
<span class="token keyword">else</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"nginx下载失败"</span>
<span class="token keyword">fi</span>
<span class="token punctuation">[</span>root@linux ~ <span class="token punctuation">]</span><span class="token comment"># chmod 700 nginx_install.sh</span>
<span class="token punctuation">[</span>root@linux ~ <span class="token punctuation">]</span><span class="token comment"># ./nginx_install.sh</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div></template>
