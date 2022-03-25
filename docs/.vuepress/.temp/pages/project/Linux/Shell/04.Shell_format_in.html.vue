<template><h2 id="read-命令" tabindex="-1"><a class="header-anchor" href="#read-命令" aria-hidden="true">#</a> read 命令</h2>
<p>默认接收键盘的输入，回车符代表输入结束。</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># read [选项]</span>
选项：
	-p：打印信息，一般放在 -s -t -n 的后面，否则可能会出错
	-t：限定时，单位秒
	-s：不回显
	-n：输入字符个数
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h2>
<ol>
<li>模拟系统登陆</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token function">clear</span>

<span class="token comment">#echo -n -e "Login:  "</span>
<span class="token comment">#read acc</span>
<span class="token builtin class-name">read</span> -p <span class="token string">"Login:  "</span> acc

<span class="token comment">#echo -n -e "psssword:  "</span>
<span class="token comment">#read -s -t10 -n8 pw</span>
<span class="token builtin class-name">read</span> -s -t10 -n8 -p <span class="token string">"Password:  "</span> pw
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"account:  <span class="token variable">$acc</span><span class="token entity" title="\t">\t</span>password:  <span class="token variable">$pw</span> "</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ol start="2">
<li>利用管道读取文件内容</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">1</span>								<span class="token comment">#赋值语句，不加空格</span>
<span class="token function">cat</span> test.txt <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> line		<span class="token comment">#cat的输出作为read的输入，read读到的值放入line</span>
<span class="token keyword">do</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"Line <span class="token variable">$count</span>:<span class="token variable">$line</span>"</span>
	<span class="token assign-left variable">count</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$count</span> + <span class="token number">1</span> <span class="token punctuation">]</span>			<span class="token comment">#注意中括号中的空格</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Finish"</span>
<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>每次调用 <code>read</code> 命令都会读取文件中的 &quot;一行&quot; 文本（文本文件的每一行结尾都有一个回车符）。当文件没有可读的行时（即没有回车符时），<code>read</code> 命令将以非零状态退出。</p>
<p>通过什么样的方法将文件中的数据传给 <code>read</code> 呢？使用 <code>cat</code> 命令并通过管道将结果直接传送给包含 <code>read</code> 命令的 <code>while</code> 命令。</p>
</template>
