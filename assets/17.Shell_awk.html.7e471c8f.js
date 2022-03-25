import{_ as n,a as s}from"./app.893f8b81.js";const a={},e=s(`<p>\u5728\u65E5\u5E38\u8BA1\u7B97\u673A\u7BA1\u7406\u4E2D\uFF0C\u603B\u4F1A\u6709\u5F88\u591A\u6570\u636E\u8F93\u51FA\u5230\u5C4F\u5E55\u6216\u8005\u6587\u4EF6\uFF0C\u8FD9\u4E9B\u8F93\u51FA\u5305\u542B\u4E86\u6807\u51C6\u8F93\u51FA\u3001\u6807\u51C6\u9519\u8BEF\u8F93\u51FA\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u4E9B\u4FE1\u606F\u5168\u90E8\u8F93\u51FA\u5230\u9ED8\u8BA4\u8F93\u51FA\u8BBE\u5907---\u5C4F\u5E55\u3002\u7136\u800C\uFF0C\u5927\u91CF\u7684\u6570\u636E\u8F93\u51FA\u4E2D\uFF0C\u53EA\u6709\u4E00\u5C0F\u90E8\u5206\u662F\u6211\u4EEC\u9700\u8981\u91CD\u70B9\u5173\u6CE8\u7684\uFF0C\u628A\u6211\u4EEC\u9700\u8981\u7684\u6216\u5173\u6CE8\u7684\u8FD9\u4E9B\u4FE1\u606F\uFF0C\u8FC7\u6EE4\u6216\u8005\u63D0\u53D6\uFF0C\u4EE5\u5907\u540E\u7EED\u9700\u8981\u662F\u8C03\u7528\u3002\u65E9\u5148\u7684\u5B66\u4E60\u4E2D\uFF0C\u6211\u4EEC\u5B66\u8FC7\u4F7F\u7528 <code>grep</code> \u6765\u8FC7\u6EE4\u8FD9\u4E9B\u6570\u636E\uFF0C\u4F7F\u7528 <code>cut</code>\u3001<code>tr</code> \u547D\u4EE4\u63D0\u53D6\u67D0\u4E9B\u5B57\u6BB5\uFF0C\u4F46\u662F\u5B83\u4EEC\u90FD\u4E0D\u5177\u5907\u63D0\u53D6\u5E76\u5904\u7406\u6570\u636E\u7684\u80FD\u529B\uFF0C\u90FD\u5FC5\u987B\u5148\u8FC7\u6EE4\uFF0C\u518D\u63D0\u53D6\u8F6C\u5B58\u5230\u53D8\u91CF\uFF0C\u7136\u540E\u518D\u901A\u8FC7\u53D8\u91CF\u63D0\u53D6\u53BB\u5904\u7406\u3002</p><p>\u6BD4\u5982\uFF1A\u5185\u5B58\u4F7F\u7528\u7387\u7684\u7EDF\u8BA1\u6B65\u9AA4</p><blockquote><p>\u901A\u8FC7 <code>free -m</code> \u63D0\u53D6\u51FA\u5185\u5B58\u603B\u91CF\uFF0C\u8D4B\u503C\u7ED9\u53D8\u91CF memory_totle</p><p>\u901A\u8FC7 <code>free -m</code> \u63D0\u53D6\u51FA\u5185\u5B58\u4F7F\u7528\u91CF\uFF0C\u8D4B\u503C\u7ED9\u53D8\u91CF memory_use</p><p>\u901A\u8FC7\u6570\u5B66\u8FD0\u7B97\uFF0C\u8BA1\u7B97\u51FA\u5185\u5B58\u4F7F\u7528\u7387</p></blockquote><p>\u9700\u8981\u6267\u884C\u591A\u6B65\u624D\u80FD\u5F97\u5230\u5185\u5B58\u4F7F\u7528\u7387\uFF0C\u90A3\u4E48\u6709\u6CA1\u6709\u4E00\u4E2A\u80FD\u591F\u96C6\u8FC7\u6EE4\u3001\u63D0\u53D6\u3001\u8FD0\u7B97\u4E3A\u4E00\u4F53\u7684\u547D\u4EE4\u5462\uFF1F\u5F53\u7136\uFF0C\u5C31\u662F\u6211\u4EEC\u5373\u5C06\u5B66\u4E60\u7684 <code>awk</code> \u547D\u4EE4\u3002</p><h2 id="awk-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#awk-\u4ECB\u7ECD" aria-hidden="true">#</a> awk \u4ECB\u7ECD</h2><p><code>awk</code> \u662F\u4E00\u79CD\u53EF\u4EE5\u5904\u7406\u6570\u636E\u3001\u4EA7\u751F\u683C\u5F0F\u5316\u62A5\u8868\u7684\u8BED\u8A00\uFF0C\u529F\u80FD\u5341\u5206\u5F3A\u5927\u3002<code>awk</code> \u8BA4\u4E3A\u6587\u4EF6\u4E2D\u7684\u6BCF\u4E00\u884C\u662F\u4E00\u6761\u8BB0\u5F55\uFF0C\u8BB0\u5F55\u4E0E\u8BB0\u5F55\u4E4B\u95F4\u7684\u5206\u5272\u7B26\u4E3A\u6362\u884C\u7B26\uFF1B\u6BCF\u4E00\u5217\u662F\u4E00\u4E2A\u5B57\u6BB5\uFF0C\u5B57\u6BB5\u4E0E\u5B57\u6BB5\u7684\u5206\u5272\u7B26\u9ED8\u8BA4\u662F\u4E00\u4E2A\u6216\u591A\u4E2A\u7684\u7A7A\u683C\u6216 tab \u5236\u8868\u7B26\u3002</p><p><code>awk</code> \u7684\u5DE5\u4F5C\u65B9\u5F0F\u662F\u8BFB\u53D6\u6570\u636E\uFF0C\u5C06\u6BCF\u4E00\u884C\u6570\u636E\u89C6\u4E3A\u4E00\u6761\u8BB0\u5F55\uFF08record\uFF09\uFF0C\u6BCF\u6761\u8BB0\u5F55\u4EE5\u5B57\u6BB5\u5206\u5272\u7B26\u5206\u5272\u6210\u82E5\u5E72\u4E2A\u5B57\u6BB5\uFF0C\u7136\u540E\u8F93\u51FA\u5404\u4E2A\u5B57\u6BB5\u7684\u503C\u3002</p><h3 id="awk-\u547D\u4EE4\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#awk-\u547D\u4EE4\u683C\u5F0F" aria-hidden="true">#</a> awk \u547D\u4EE4\u683C\u5F0F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># awk [\u9009\u9879] [BEGIMN]{program}[END] [file]</span>
\u9009\u9879\uFF1A
	-F	\uFF1Afs\u6307\u5B9A\u63CF\u7ED8\u4E00\u884C\u4E2D\u6570\u636E\u5B57\u6BB5\u7684\u5206\u5272\u7B26\uFF0C\u9ED8\u8BA4\u4E3A\u7A7A\u683C
	-f	\uFF1A\u6307\u5B9A\u8BFB\u53D6\u7A0B\u5E8F\u7684\u6587\u4EF6\u540D
	-v	\uFF1A\u5B9A\u4E49awk\u7A0B\u5E8F\u4E2D\u4F7F\u7528\u7684\u53D8\u91CF\u548C\u9ED8\u8BA4\u503C
	
\u7A0B\u5E8F\u8FD0\u884C\u4F18\u5148\u7EA7\uFF1A
	BEGIN	\uFF1A\u5728\u5F00\u59CB\u5904\u7406\u6570\u636E\u4E4B\u524D\u6267\u884C\uFF0C\u53EF\u9009\u9879
	program	\uFF1A\u5982\u4F55\u5904\u7406\u6570\u636E\u6D41\uFF0C\u5FC5\u9009\u9879
	END		\uFF1A\u5904\u7406\u5B8C\u6570\u636E\u6D41\u540E\u6267\u884C\uFF0C\u53EF\u9009\u9879
	
\u6CE8\u610F\uFF1A
	<span class="token function">awk</span> \u7A0B\u5E8F\u811A\u672C\u7531\u5DE6\u5927\u62EC\u53F7\u548C\u53F3\u5927\u62EC\u53F7\u5B9A\u4E49\u3002\u811A\u672C\u547D\u4EE4\u5FC5\u987B\u9632\u6B62\u5728\u4E24\u4E2A\u5927\u62EC\u53F7\u4E4B\u95F4\u3002\u7531\u4E8E <span class="token function">awk</span> \u547D\u4EE4\u884C\u5047\u5B9A\u811A\u672C\u662F\u5355\u6587\u672C\u5B57\u7B26\u4E32\uFF0C\u8FD8\u5FC5\u987B\u5C06\u811A\u672C\u653E\u5728\u5355\u5F15\u53F7\u4E2D\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="awk-\u7684\u57FA\u672C\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#awk-\u7684\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a> awk \u7684\u57FA\u672C\u7528\u6CD5</h2><h3 id="awk-\u5BF9\u5B57\u6BB5\u7684\u63D0\u53D6-\u5217" tabindex="-1"><a class="header-anchor" href="#awk-\u5BF9\u5B57\u6BB5\u7684\u63D0\u53D6-\u5217" aria-hidden="true">#</a> awk \u5BF9\u5B57\u6BB5\u7684\u63D0\u53D6\uFF08\u5217\uFF09</h3><p>\u5B57\u6BB5\u63D0\u53D6\uFF1A\u63D0\u53D6\u4E00\u4E2A\u6587\u672C\u4E2D\u7684\u4E00\u5217\u6570\u636E\u5E76\u6253\u5370\u8F93\u51FA \u5B57\u6BB5\u76F8\u5173\u5185\u7F6E\u53D8\u91CF</p><blockquote><p>$0 \u8868\u793A\u6B63\u884C\u6587\u672C</p><p>$1 \u8868\u793A\u6587\u672C\u884C\u4E2D\u7684\u7B2C\u4E00\u4E2A\u6570\u636E\u5B57\u6BB5</p><p>$2 \u8868\u793A\u6587\u672C\u884C\u4E2D\u7684\u7B2C\u4E8C\u4E2A\u6570\u636E\u5B57\u6BB5</p><p>$N \u8868\u793A\u6587\u672C\u884C\u4E2D\u7684\u7B2CN\u4E2A\u6570\u636E\u5B57\u6BB5</p><p>$NF \u8868\u793A\u6587\u672C\u884C\u4E2D\u7684\u6700\u540E\u4E00\u4E2A\u6570\u636E\u5B57\u6BB5</p></blockquote><ul><li>\u8BFB\u5165test\u6587\u4EF6\u6BCF\u884C\u6570\u636E\u5E76\u628A\u6BCF\u884C\u6570\u636E\u6253\u5370\u51FA\u6765</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@linux ~ <span class="token punctuation">]</span><span class="token comment"># awk &#39;{print $0}&#39; test</span>
<span class="token number">1</span> the quick brown fox jumps over the lazy <span class="token function">cat</span> <span class="token builtin class-name">.</span> dog
<span class="token number">2</span> the quick brown fox jumps over the lazy <span class="token function">cat</span> <span class="token builtin class-name">.</span> dog
<span class="token number">3</span> the quick brown fox		 jumps over the lazy <span class="token function">cat</span> <span class="token builtin class-name">.</span> dog
<span class="token number">4</span> the quick brown fox jumps over the lazy <span class="token function">cat</span> <span class="token builtin class-name">.</span> dog
<span class="token number">5</span> the quick brown fox jumps over the lazy <span class="token function">cat</span> <span class="token builtin class-name">.</span> dog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>\u6253\u5370test\u6587\u4EF6\u7684\u7B2C\u516D\u4E2A\u5B57\u6BB5</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@linux ~ <span class="token punctuation">]</span><span class="token comment"># awk &#39;{print $6}&#39; test</span>
jumps
jumps
jumps
jumps
jumps
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>\u6253\u5370test\u6587\u4EF6\u7684\u6700\u540E\u4E00\u4E2A\u5B57\u6BB5</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@linux ~ <span class="token punctuation">]</span><span class="token comment"># awk &#39;{print $NF}&#39; test</span>
dog
dog
dog
dog
dog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="awk-\u5BF9\u8BB0\u5F55\u7684\u63D0\u53D6-\u884C" tabindex="-1"><a class="header-anchor" href="#awk-\u5BF9\u8BB0\u5F55\u7684\u63D0\u53D6-\u884C" aria-hidden="true">#</a> awk \u5BF9\u8BB0\u5F55\u7684\u63D0\u53D6\uFF08\u884C\uFF09</h3><p>\u8BB0\u5F55\u63D0\u53D6\uFF1A\u63D0\u53D6\u4E00\u4E2A\u6587\u672C\u4E2D\u7684\u4E00\u884C\u5E76\u6253\u5370\u8F93\u51FA \u8BB0\u5F55\u7684\u63D0\u53D6\u65B9\u6CD5\u6709\u4E24\u79CD\uFF1A</p><ol><li>\u901A\u8FC7\u884C\u53F7</li><li>\u901A\u8FC7\u6B63\u5219\u5339\u914D</li></ol><ul><li>NR\uFF1A\u6307\u5B9A\u884C\u53F7</li></ul><p>\u63D0\u53D6 test \u4E2D\u7684\u7B2C\u4E09\u884C\uFF08\u6307\u5B9A\u884C\u53F7\u4E3A3\uFF09</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk &#39;NR==3{print $0}&#39; test</span>
<span class="token number">3</span> the quick brown fox		 jumps over the lazy <span class="token function">cat</span> <span class="token builtin class-name">.</span> dog
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk &#39;NR==1{print $1,$3,$5}&#39; /etc/passwd</span>
root <span class="token number">0</span> root
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk &#39;NR==1{print $1 &quot;-&quot; $3 &quot;-&quot; $5}&#39; /etc/passwd</span>
root-0-root
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="awk-\u547D\u4EE4\u9009\u9879\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#awk-\u547D\u4EE4\u9009\u9879\u8BE6\u89E3" aria-hidden="true">#</a> awk \u547D\u4EE4\u9009\u9879\u8BE6\u89E3</h3><ul><li>-F\uFF1A\u6307\u5B9A\u5B57\u6BB5\u4E0E\u5B57\u6BB5\u7684\u5206\u5272\u7B26</li></ul><p>\u5F53\u8F93\u51FA\u7684\u6570\u636E\u6D41\u5B57\u6BB5\u683C\u5F0F\u4E0D\u662F <code>awk</code> \u9ED8\u8BA4\u7684\u5B57\u6BB5\u683C\u5F0F\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 -F \u547D\u4EE4\u9009\u9879\u6765\u91CD\u65B0\u5B9A\u4E49\u6570\u636E\u6D41\u5B57\u6BB5\u5206\u5272\u7B26\u53F7\u3002\u6BD4\u5982\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk -F &#39;:&#39; &#39;{print $1,$3,$NF}&#39; /etc/passwd</span>
root <span class="token number">0</span> /bin/bash
daemon <span class="token number">1</span> /usr/sbin/nologin
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
karin <span class="token number">1000</span> /bin/bash
sshd <span class="token number">122</span> /usr/sbin/nologin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>-f\uFF1A\u5982\u679C <code>awk</code> \u547D\u4EE4\u662F\u65E5\u5E38\u91CD\u590D\u5DE5\u4F5C\uFF0C\u800C\u53C8\u6CA1\u6709\u592A\u591A\u53D8\u5316\uFF0C\u53EF\u4EE5\u5C06\u7A0B\u5E8F\u5199\u5165\u6587\u4EF6\uFF0C\u6BCF\u6B21\u4F7F\u7528-f\u8C03\u7528\u7A0B\u5E8F\u6587\u4EF6\u5C31\u53EF\u4EE5\u4E86\uFF0C\u65B9\u4FBF\u4E14\u9AD8\u6548\u3002</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># vim abc</span>
<span class="token punctuation">{</span>print <span class="token variable">$1</span>,<span class="token variable">$1</span>,<span class="token variable">$NF</span><span class="token punctuation">}</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk -f abc test</span>
<span class="token number">1</span> quick dog
<span class="token number">2</span> quick dog
<span class="token number">3</span> quick dog
<span class="token number">4</span> quick dog
<span class="token number">5</span> quick dog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>-v\uFF1A\u5B9A\u4E49\u53D8\u91CF\uFF0C\u65E2\u7136\u4F5C\u8005\u5199awk\u7684\u65F6\u5019\u5C31\u662F\u6309\u7740\u8BED\u8A00\u53BB\u5199\u7684\uFF0C\u90A3\u4E48\u8BED\u8A00\u4E2D\u6700\u91CD\u8981\u7684\u8981\u7D20---\u53D8\u91CF\u80AF\u5B9A\u4E0D\u80FD\u7F3A\u5E2D\uFF0C\u6240\u4EE5\u53EF\u4EE5\u4F7F\u7528 -v \u547D\u4EE4\u9009\u9879\u5B9A\u4E49\u53D8\u91CF</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk -v name=&#39;root&#39; &#39;BEGIN{print name}&#39;</span>
root
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="awk-\u5BF9\u5B57\u7B26\u4E32\u7684\u63D0\u53D6-\u884C\u5217\u4EA4\u6C47" tabindex="-1"><a class="header-anchor" href="#awk-\u5BF9\u5B57\u7B26\u4E32\u7684\u63D0\u53D6-\u884C\u5217\u4EA4\u6C47" aria-hidden="true">#</a> awk \u5BF9\u5B57\u7B26\u4E32\u7684\u63D0\u53D6\uFF08\u884C\u5217\u4EA4\u6C47\uFF09</h3><p>\u8BB0\u5F55\u548C\u5B57\u6BB5\u7684\u6C47\u5408\u70B9\u5C31\u662F\u5B57\u7B26\u4E32 \u6253\u5370 test \u7B2C\u4E09\u884C\u7684\u7B2C\u516D\u4E2A\u5B57\u6BB5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk &#39;NR==3{print $6}&#39; test</span>
jumps
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="awk-\u7A0B\u5E8F\u7684\u4F18\u5148\u7EA7" tabindex="-1"><a class="header-anchor" href="#awk-\u7A0B\u5E8F\u7684\u4F18\u5148\u7EA7" aria-hidden="true">#</a> awk \u7A0B\u5E8F\u7684\u4F18\u5148\u7EA7</h3><p>\u5173\u4E8E <code>awk</code> \u7A0B\u5E8F\u7684\u4F18\u5148\u7EA7\uFF0CBEGIN \u662F\u4F18\u5148\u7EA7\u6700\u9AD8\u7684\u4EE3\u7801\u5757\uFF0C\u662F\u5728\u6267\u884C program \u4E4B\u524D\u6267\u884C\u7684\uFF0C\u4E0D\u9700\u8981\u63D0\u4F9B\u6570\u636E\u6E90\uFF0C\u56E0\u4E3A\u4E0D\u6D89\u53CA\u5230\u4EFB\u4F55\u6570\u636E\u5904\u7406\uFF0C\u4E5F\u4E0D\u4F9D\u8D56\u4E8E program \u4EE3\u7801\u5757\uFF1Bprogram \u4EE3\u7801\u5757\u662F\u5BF9\u6570\u636E\u6D41\u5E72\u4EC0\u4E48\uFF0C\u662F\u5FC5\u9009\u4EE3\u7801\u5757\uFF0C\u4E5F\u662F\u9ED8\u8BA4\u4EE3\u7801\u5757\u3002\u6240\u4EE5\u5728\u6267\u884C\u65F6\u5FC5\u987B\u63D0\u4F9B\u6570\u636E\u6E90\uFF1BEND \u662F\u5904\u7406\u5B8C\u6570\u636E\u6D41\u540E\u7684\u64CD\u4F5C\uFF0C\u5982\u679C\u9700\u8981\u6267\u884C END \u4EE3\u7801\u5757\uFF0C\u5C31\u5FC5\u987B\u9700\u8981 program \u7684\u652F\u6301\uFF0C\u5355\u4E2A\u65E0\u6CD5\u6267\u884C\u3002</p><h3 id="\u4F18\u5148\u7EA7\u663E\u793A" tabindex="-1"><a class="header-anchor" href="#\u4F18\u5148\u7EA7\u663E\u793A" aria-hidden="true">#</a> \u4F18\u5148\u7EA7\u663E\u793A</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk &#39;BEGIN{print &quot;hello world&quot;}{print $0}END{print &quot;bye bye&quot;}&#39; test</span>
hello world
<span class="token number">1</span> the quick brown fox jumps over the lazy <span class="token function">cat</span> <span class="token builtin class-name">.</span> dog
<span class="token number">2</span> the quick brown fox jumps over the lazy <span class="token function">cat</span> <span class="token builtin class-name">.</span> dog
<span class="token number">3</span> the quick brown fox		 jumps over the lazy <span class="token function">cat</span> <span class="token builtin class-name">.</span> dog
<span class="token number">4</span> the quick brown fox jumps over the lazy <span class="token function">cat</span> <span class="token builtin class-name">.</span> dog
<span class="token number">5</span> the quick brown fox jumps over the lazy <span class="token function">cat</span> <span class="token builtin class-name">.</span> dog
bye bye
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>\u4E0D\u9700\u8981\u6570\u636E\u6E90\uFF0C\u53EF\u4EE5\u76F4\u63A5\u6267\u884C</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk &#39;BEGIN{print &quot;hello world&quot;}&#39;</span>
hello world
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u6CA1\u6709\u63D0\u4F9B\u6570\u636E\u6E90\uFF0C\u6240\u4EE5\u65E0\u6CD5\u6267\u884C\u6210\u529F</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk &#39;{print &quot;hello world&quot;}&#39;</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk &#39;END{print &quot;hello world&quot;}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="awk-\u9AD8\u7EA7\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#awk-\u9AD8\u7EA7\u7528\u6CD5" aria-hidden="true">#</a> awk \u9AD8\u7EA7\u7528\u6CD5</h2><p><code>awk</code> \u662F\u4E00\u95E8\u8BED\u8A00\uFF0C\u90A3\u4E48\u5C31\u4F1A\u7B26\u5408\u8BED\u8A00\u7684\u7279\u6027\uFF0C\u9664\u4E86\u53EF\u4EE5\u5B9A\u4E49\u53D8\u91CF\u5916\uFF0C\u8FD8\u53EF\u4EE5\u5B9A\u4E49\u6570\u7EC4\uFF0C\u8FD8\u53EF\u4EE5\u8FDB\u884C\u8FD0\u7B97\uFF0C\u6D41\u7A0B\u63A7\u5236\u3002</p><h3 id="awk-\u5B9A\u4E49\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#awk-\u5B9A\u4E49\u6570\u7EC4" aria-hidden="true">#</a> awk \u5B9A\u4E49\u6570\u7EC4</h3><p>\u6570\u7EC4\u5B9A\u4E49\u65B9\u5F0F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u6570\u7EC4\u540D<span class="token punctuation">[</span>\u7D22\u5F15<span class="token punctuation">]</span><span class="token operator">=</span>\u503C
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5B9A\u4E49\u6570\u7EC4 array\uFF0C\u6709\u4E24\u4E2A\u5143\u7D20\uFF0C\u5206\u522B\u662F 100\uFF0C200\uFF0C\u6253\u5370\u6570\u7EC4\u5143\u7D20\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk &#39;BEIGN{array[0]=100;array[1]=200;print array[0],array[1]}&#39;</span>
<span class="token number">100</span> <span class="token number">200</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="awk-\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#awk-\u8FD0\u7B97" aria-hidden="true">#</a> awk \u8FD0\u7B97</h3><blockquote><p>\u8D4B\u503C\u8FD0\u7B97 =</p><p>\u6BD4\u8F83\u8FD0\u7B97 &gt;\u3001&gt;=\u3001==\u3001&lt;=\u3001&lt;\u3001!=</p><p>\u6570\u5B66\u8FD0\u7B97 +\u3001-\u3001*\u3001/\u3001%\u3001**\u3001++\u3001--</p><p>\u903B\u8F91\u8FD0\u7B97 &amp;&amp;\u3001||</p><p>\u5339\u914D\u8FD0\u7B97 <sub>\u3001!</sub></p></blockquote><ul><li>\u8D4B\u503C\u8FD0\u7B97\uFF1A\u4E3B\u8981\u662F\u5BF9\u53D8\u91CF\u6216\u8005\u6570\u7EC4\u8D4B\u503C</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># read -2 /proc/meminfo | awk &#39;NR==1{t=$2}NR==2{f=$2;print (t-f)*100/t &quot;%&quot;}&#39;</span>
<span class="token number">8.7528</span>%
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u6BD4\u8F83\u8FD0\u7B97\uFF1A\u5982\u679C\u6BD4\u8F83\u5B57\u7B26\u4E32\u5219\u6309 ascii \u7F16\u7801\u987A\u5E8F\u8868\u6BD4\u8F83\uFF0C\u6BD4\u8F83\u7ED3\u679C 1 \u5219\u4E3A\u771F\uFF0C0 \u5219\u4E3A\u5047</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk &#39;BEGIN{print &quot;a&quot; &gt;= &quot;b&quot; }&#39;</span>
<span class="token number">0</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk &#39;BEGIN{print 99 &gt;= 1 }&#39;</span>
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>\u6570\u5B66\u8FD0\u7B97\uFF1A\u652F\u6301\u5E42\u8FD0\u7B97\uFF0C\u652F\u6301\u5C0F\u6570\u70B9</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk &#39;BEGIN{print 9-1 }&#39;</span>
<span class="token number">8</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk &#39;BEGIN{print 100%3 }&#39;</span>
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>\u903B\u8F91\u8FD0\u7B97\uFF1A\u4E0E\u3001\u6216\u8FD0\u7B97</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk &#39;BEGIN{print 100&gt;3 &amp;&amp; 28&lt;=9 }&#39;</span>
<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u5339\u914D\u8FD0\u7B97\uFF1A\u7CBE\u786E\u5339\u914D <mark>\uFF0C\u7CBE\u786E\u4E0D\u5339\u914D !</mark>\uFF1B\u6A21\u7CCA\u5339\u914D ~\uFF0C\u6A21\u7CCA\u4E0D\u5339\u914D !~</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk -F: &#39;$1==&quot;root&quot;{print $0}&#39; /etc/passwd</span>
root:x:0:0:root:/root:/bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="awk-\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#awk-\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> awk \u73AF\u5883\u53D8\u91CF</h3><table><thead><tr><th>\u53D8\u91CF</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>FIELDWIDTHS</td><td>\u4EE5\u7A7A\u683C\u5206\u9694\u7684\u6570\u5B57\u5217\u8868\uFF0C\u7528\u7A7A\u683C\u5B9A\u4E49\u6BCF\u4E2A\u6570\u636E\u5B57\u6BB5\u7684\u7CBE\u786E\u5BBD\u5EA6</td></tr><tr><td>FS</td><td>\u8F93\u5165\u5B57\u6BB5\u5206\u9694\u7B26\u53F7</td></tr><tr><td>OFS</td><td>\u8F93\u51FA\u5B57\u6BB5\u5206\u9694\u7B26\u53F7</td></tr><tr><td>RS</td><td>\u8F93\u5165\u8BB0\u5F55\u5206\u9694\u7B26\u53F7</td></tr><tr><td>ORS</td><td>\u8F93\u51FA\u8BB0\u5F55\u5206\u9694\u7B26\u53F7</td></tr></tbody></table><p>FIELDWIDTHS\uFF1A\u91CD\u65B0\u5B9A\u4E49\u5217\u5BBD\u5E76\u6253\u5370\uFF0C\u6CE8\u610F\u4E0D\u53EF\u4EE5\u4F7F\u7528 $0 \u6253\u5370\u6240\u6709\uFF0C\u56E0\u4E3A $0 \u662F\u6253\u5370\u672C\u884C\u5168\u5185\u5BB9\uFF0C\u4E0D\u4F1A\u6253\u5370\u4F60\u5B9A\u4E49\u7684\u5B57\u6BB5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk &#39;BEGIN{FIELDWIDTHS=&quot;5 2 8&quot;}NR==1{print $1,$2,$3}&#39; /etc/passwd</span>
root: x: <span class="token number">0</span>:0:root
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>FS\uFF1A\u6307\u5B9A\u6570\u636E\u6E90\u4E2D\u5B57\u6BB5\u5206\u9694\u7B26\uFF0C\u7C7B\u4F3C\u547D\u4EE4\u9009\u9879 -F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk &#39;BEGIN{FS=&quot;:&quot;}NR==1{print $1,$3,$NF}\u2018 /etc/passwd</span>
root <span class="token number">0</span> /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>OFS\uFF1A\u6307\u5B9A\u8F93\u51FA\u5230\u5C4F\u5E55\u540E\u5B57\u6BB5\u7684\u5206\u9694\u7B26</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk &#39;BEGIN{FS=&quot;:&quot;;OFS=&quot;-&quot;}NR==1{print $1,$3,$NF}&#39; /etc/passwd</span>
root-0-/bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>RS\uFF1A\u6307\u5B9A\u8BB0\u5F55\u7684\u5206\u9694\u7B26\uFF0C\u5C06\u8BB0\u5F55\u7684\u5206\u9694\u7B26\u4FEE\u6539\u4E3A\u7A7A\u540E\uFF0C\u6240\u6709\u7684\u884C\u4F1A\u53D8\u6210\u4E00\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk &#39;BEGIN{RS=&quot;&quot;}{print $1,$2,$3}&#39; num</span>
<span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>ORS\uFF1A\u8F93\u51FA\u5230\u5C4F\u5E55\u540E\u8BB0\u5F55\u7684\u5206\u9694\u7B26\uFF0C\u9ED8\u8BA4\u4E3A\u56DE\u8F66</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk &#39;BEGIN{RS=&quot;&quot;;ORS=&quot;*&quot;}{print $1,$2,$3,$4,$5}&#39; num</span>
<span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>*<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>#\u53EF\u4EE5\u770B\u51FA\uFF0C\u63D0\u793A\u7B26\u548C\u8F93\u51FA\u5728\u4E00\u884C\u4E86\uFF0C\u56E0\u4E3A\u9ED8\u8BA4\u56DE\u8F66\u6362\u6210\u4E86*\uFF08ORS=&quot;*&quot;\uFF09</p><h3 id="\u6D41\u7A0B\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u6D41\u7A0B\u63A7\u5236" aria-hidden="true">#</a> \u6D41\u7A0B\u63A7\u5236</h3><ol><li>if \u5224\u65AD\u8BED\u53E5</li><li>for \u5FAA\u73AF\u8BED\u53E5</li><li>while \u5FAA\u73AF\u8BED\u53E5</li><li>do...while \u8BED\u53E5</li><li>\u5FAA\u73AF\u63A7\u5236</li></ol><ul><li>if \u5224\u65AD\u8BED\u53E5</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk &#39;{if ($1&lt;5)print $1*2;else print $1/2}&#39; num</span>
<span class="token number">2</span>
<span class="token number">4</span>
<span class="token number">6</span>
<span class="token number">8</span>
<span class="token number">2.5</span>
<span class="token number">3</span>
<span class="token number">3.5</span>
<span class="token number">4</span>
<span class="token number">4.5</span>
<span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li>for \u5FAA\u73AF\u8BED\u53E5</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># vim num2</span>
<span class="token number">60</span> <span class="token number">50</span> <span class="token number">100</span>
<span class="token number">150</span> <span class="token number">30</span> <span class="token number">10</span>
<span class="token number">70</span> <span class="token number">100</span> <span class="token number">40</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk &#39;{sum=0;for (i=1;i&lt;4;i++){sum+=$i}print sum}&#39; sum2</span>
<span class="token number">210</span>
<span class="token number">190</span>
<span class="token number">210</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>while \u5FAA\u73AF\u8BED\u53E5</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk &#39;{sum=0;i=1;while(i&lt;4){sum+=$i;i++}print sum}&#39; num2</span>
<span class="token number">210</span>
<span class="token number">190</span>
<span class="token number">210</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>do...while \u8BED\u53E5</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk &#39;{sum=0;i=1;do{sum+=$i;i++}while(i&lt;4);print sum}&#39; num2</span>
<span class="token number">210</span>
<span class="token number">190</span>
<span class="token number">210</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>\u5FAA\u73AF\u63A7\u5236\u8BED\u53E5</li></ul><p>break\uFF1A\u8DF3\u51FA\u5FAA\u73AF\uFF0C\u7EE7\u7EED\u6267\u884C\u540E\u7EED\u8BED\u53E5\u3002</p><p>continue\uFF1A\u505C\u6B62\u672C\u6B21\u5FAA\u73AF\uFF0C\u7EE7\u7EED\u4E0B\u4E00\u6B21\u5FAA\u73AF\u3002</p><p>\u7D2F\u52A0\u6BCF\u884C\u6570\u503C\uFF0C\u548C\u5927\u4E8E 150 \u505C\u6B62\u7D2F\u52A0</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk &#39;{</span>
<span class="token operator">&gt;</span> <span class="token assign-left variable">sum</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token operator">&gt;</span> <span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token operator">&gt;</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>i<span class="token operator">&lt;</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token operator">&gt;</span> 	<span class="token assign-left variable">sum</span><span class="token operator">+=</span><span class="token variable">$i</span>
<span class="token operator">&gt;</span> 	<span class="token keyword">if</span> <span class="token punctuation">(</span>sum<span class="token operator">&gt;</span><span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token operator">&gt;</span> 		<span class="token builtin class-name">break</span>
<span class="token operator">&gt;</span> 	<span class="token punctuation">}</span>
<span class="token operator">&gt;</span> 	i++
<span class="token operator">&gt;</span> <span class="token punctuation">}</span>
<span class="token operator">&gt;</span> print <span class="token function">sum</span>
<span class="token operator">&gt;</span> <span class="token punctuation">}</span>&#39; num2
<span class="token number">210</span>
<span class="token number">180</span>
<span class="token number">170</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="awk\u5C0F\u6280\u5DE7" tabindex="-1"><a class="header-anchor" href="#awk\u5C0F\u6280\u5DE7" aria-hidden="true">#</a> awk\u5C0F\u6280\u5DE7</h2><ul><li>\u6253\u5370 test \u6587\u672C\u7684\u884C\u6570</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk &#39;END{print NR}&#39; test</span>
<span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u6253\u5370 test \u6587\u672C\u6700\u540E\u4E00\u884C\u5185\u5BB9</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk &#39;END{print $0}&#39; test</span>
<span class="token number">5</span> the quick brown fox jumps over the lazy <span class="token function">cat</span> <span class="token builtin class-name">.</span> dog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u6253\u5370 test \u6587\u672C\u5217\u6570</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># awk &#39;END{print NF}&#39; test</span>
<span class="token number">12</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,98);function p(l,t){return e}var c=n(a,[["render",p]]);export{c as default};
