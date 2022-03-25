import{_ as s,a}from"./app.893f8b81.js";const n={},e=a(`<h2 id="\u6570\u7EC4\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u4ECB\u7ECD" aria-hidden="true">#</a> \u6570\u7EC4\u4ECB\u7ECD</h2><p>\u4E00\u4E2A\u53D8\u91CF\u53EA\u80FD\u5B58\u4E00\u4E2A\u503C\uFF0C\u4F46\u662F\u73B0\u5B9E\u4E2D\u53C8\u6709\u5F88\u591A\u503C\u9700\u8981\u5B58\u50A8\uFF0C\u90A3\u4E48\u53D8\u91CF\u5C31\u6709\u4E9B\u62D8\u8C28\u4E86\u3002\u6BD4\u5982\u505A\u4E00\u4E2A\u5B66\u5458\u4FE1\u606F\u8868\uFF0C\u4E00\u4E2A\u73ED 50 \u4E2A\u4EBA\uFF0C\u6BCF\u4E2A\u4EBA 6 \u6761\u4FE1\u606F\uFF0C\u6211\u4EEC\u9700\u8981\u5B9A\u4E49 300 \u4E2A\u53D8\u91CF\u624D\u80FD\u5B8C\u6210\u3002\u6050\u6016\u6050\u6016\uFF0C\u8FD9\u53EA\u662F\u4E00\u4E2A\u73ED\u7684\u5B66\u751F\uFF0C\u5982\u679C\u4E00\u4E2A\u5B66\u6821\u5462\uFF1F\u4E00\u4E2A\u5E02\u5462\uFF1F......\u6211\u60F3\u9759\u9759\u4E86\uFF01</p><h2 id="\u57FA\u672C\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u6570\u7EC4" aria-hidden="true">#</a> \u57FA\u672C\u6570\u7EC4</h2><p>\u6570\u7EC4\u53EF\u4EE5\u8BA9\u7528\u6237\u4E00\u6B21\u8D4B\u4E88\u591A\u4E2A\u503C\uFF0C\u9700\u8981\u8BFB\u53D6\u6570\u636E\u65F6\u53EA\u9700\u8981\u901A\u8FC7\u7D22\u5F15\u8C03\u7528\u5C31\u53EF\u4EE5\u65B9\u4FBF\u8BFB\u51FA\u4E86\u3002</p><h3 id="\u6570\u7EC4\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u8BED\u6CD5" aria-hidden="true">#</a> \u6570\u7EC4\u8BED\u6CD5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u6570\u7EC4\u540D\u79F0<span class="token operator">=</span><span class="token punctuation">(</span>\u5143\u7D201 \u5143\u7D202 \u5143\u7D203 <span class="token punctuation">..</span>.<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u6570\u7EC4\u8BFB\u51FA" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u8BFB\u51FA" aria-hidden="true">#</a> \u6570\u7EC4\u8BFB\u51FA</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token variable">\${\u6570\u7EC4\u540D\u79F0<span class="token punctuation">[</span>\u7D22\u5F15<span class="token punctuation">]</span>}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u7D22\u5F15\u662F\u5143\u7D20\u5728\u6570\u7EC4\u4E2D\u7684\u6392\u961F\u7F16\u53F7\uFF0C\u9ED8\u8BA4\u7D22\u5F15\u662F\u4ECE 0 \u5F00\u59CB</p><h3 id="\u6570\u7EC4\u8D4B\u503C" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u8D4B\u503C" aria-hidden="true">#</a> \u6570\u7EC4\u8D4B\u503C</h3><p>\u65B9\u6CD5\u4E00\uFF1A\u4E00\u6B21\u8D4B\u4E00\u4E2A\u503C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># array0[0]=&#39;tom&#39;</span>
<span class="token comment"># array0[1]=&#39;jarry&#39;</span>
<span class="token comment"># array0[2]=&#39;natasha&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u65B9\u6CD5\u4E8C\uFF1A\u4E00\u6B21\u8D4B\u591A\u4E2A\u503C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># array1=(tom jaky alice)</span>
<span class="token comment"># array2=(\`ls ~\`)</span>
<span class="token comment"># array3=(\`cat /etc/passwd\`)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u67E5\u770B\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6570\u7EC4" aria-hidden="true">#</a> \u67E5\u770B\u6570\u7EC4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># declare -a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4F8B\u5982\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># declare -a</span>
<span class="token builtin class-name">declare</span> -a <span class="token assign-left variable">array0</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;tom&quot;</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;jarry&quot;</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;natasha&quot;</span><span class="token punctuation">)</span>
<span class="token builtin class-name">declare</span> -a <span class="token assign-left variable">array1</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;pear&quot;</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;apple&quot;</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;orange&quot;</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;peach&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u8BBF\u95EE\u6570\u7EC4\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE\u6570\u7EC4\u5143\u7D20" aria-hidden="true">#</a> \u8BBF\u95EE\u6570\u7EC4\u5143\u7D20</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># echo \${array1[0]}					\u8BBF\u95EE\u6570\u7EC4\u4E2D\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20</span>
<span class="token comment"># echo \${array1[*]}					\u8BBF\u95EE\u6570\u7EC4\u4E2D\u6240\u6709\u6709\u5143\u7D20</span>
<span class="token comment"># echo \${array1[@]}					\u8BBF\u95EE\u6570\u7EC4\u4E2D\u6240\u6709\u6709\u5143\u7D20</span>
<span class="token comment"># echo \${#array1[@]}				\u7EDF\u8BA1\u6570\u7EC4\u5143\u7D20\u7684\u4E2A\u6570</span>
<span class="token comment"># echo \${!array1[@]}				\u83B7\u53D6\u6570\u7EC4\u5143\u7D20\u7684\u7D22\u5F15</span>
<span class="token comment"># echo \${array1[@]:1}				\u4ECE\u6570\u7EC4\u4E0B\u68071\u5F00\u59CB\u5230\u6700\u540E\u4E00\u4E2A\u5143\u7D20</span>
<span class="token comment"># echo \${array1[@]:1:3}				\u4ECE\u6570\u7EC4\u4E0B\u68071\u5F00\u59CB\uFF0C\u8BBF\u95EE3\u4E2A\u5143\u7D20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u904D\u5386\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u904D\u5386\u6570\u7EC4" aria-hidden="true">#</a> \u904D\u5386\u6570\u7EC4</h3><p>\u65B9\u6CD5\u4E00\uFF1A\u901A\u8FC7\u6570\u7EC4\u5143\u7D20\u8FDB\u884C\u9010\u4E2A\u904D\u5386</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo \${array1[0]}</span>
peay
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo \${array1[1]}</span>
apple
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo \${array1[2]}</span>
orange
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo \${array1[3]}</span>
peach
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u65B9\u6CD5\u4E8C\uFF1A\u901A\u8FC7\u6570\u7EC4\u5143\u7D20\u7684\u7D22\u5F15\u8FDB\u884C\u5FAA\u73AF\u904D\u5386</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">fruits</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;pear&quot;</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;apple&quot;</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;orange&quot;</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;peach&quot;</span><span class="token punctuation">)</span>
<span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>\${#fruits[@]}<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${fruits<span class="token punctuation">[</span>$i<span class="token punctuation">]</span>}</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u5173\u8054\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u5173\u8054\u6570\u7EC4" aria-hidden="true">#</a> \u5173\u8054\u6570\u7EC4</h2><p>\u5173\u8054\u6570\u7EC4\u53EF\u4EE5\u5141\u8BB8\u7528\u6237\u81EA\u5B9A\u4E49\u6570\u7EC4\u7684\u7D22\u5F15,\u8FD9\u6837\u4F7F\u7528\u8D77\u6765\u66F4\u52A0\u65B9\u4FBF\u3001\u9AD8\u6548.</p><h3 id="\u5B9A\u4E49\u5173\u8054\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u5173\u8054\u6570\u7EC4" aria-hidden="true">#</a> \u5B9A\u4E49\u5173\u8054\u6570\u7EC4</h3><p>\u58F0\u660E\u5173\u8054\u6570\u7EC4\u53D8\u91CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># declare -a ass_array1</span>
<span class="token comment"># declare -a ass_array2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u5173\u8054\u6570\u7EC4\u8D4B\u503C" tabindex="-1"><a class="header-anchor" href="#\u5173\u8054\u6570\u7EC4\u8D4B\u503C" aria-hidden="true">#</a> \u5173\u8054\u6570\u7EC4\u8D4B\u503C</h3><p>\u65B9\u6CD5\u4E00\uFF1A\u4E00\u6B21\u8D4B\u4E00\u4E2A\u503C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># ass_array1[index1]=pear</span>
<span class="token comment"># ass_array1[index2]=apple</span>
<span class="token comment"># ass_array1[index3]=orange</span>
<span class="token comment"># ass_array1[index4]=peach</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u65B9\u6CD5\u4E8C\uFF1A\u4E00\u6B21\u8D4B\u591A\u4E2A\u503C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># ass_array2=([index1]=tom [index2]=jack [index3]=alice [index4]=&#39;bash shell&#39;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u67E5\u770B\u6570\u7EC4</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># declare -a</span>
<span class="token assign-left variable">ass_array1</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">[</span>index1<span class="token punctuation">]</span><span class="token operator">=</span>pear <span class="token punctuation">[</span>index2<span class="token punctuation">]</span><span class="token operator">=</span>apple <span class="token punctuation">[</span>index3<span class="token punctuation">]</span><span class="token operator">=</span>orange <span class="token punctuation">[</span>index4<span class="token punctuation">]</span><span class="token operator">=</span>beach<span class="token punctuation">)</span>
<span class="token assign-left variable">ass_array2</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">[</span>index1<span class="token punctuation">]</span><span class="token operator">=</span>tom <span class="token punctuation">[</span>index2<span class="token punctuation">]</span><span class="token operator">=</span>jack <span class="token punctuation">[</span>index3<span class="token punctuation">]</span><span class="token operator">=</span>alice <span class="token punctuation">[</span>index4<span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&#39;bash shell&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u8BBF\u95EE\u6570\u7EC4\u5143\u7D20</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># echo \${ass_array2[index2]}			\u8BBF\u95EE\u6570\u7EC4\u4E2D\u7684\u7B2C\u4E8C\u4E2A\u5143\u7D20</span>
<span class="token comment"># echo \${ass_array2[@]}					\u8BBF\u95EE\u6570\u7EC4\u4E2D\u6240\u6709\u5143\u7D20</span>
<span class="token comment"># echo \${#ass_array2[@]}				\u83B7\u53D6\u6570\u7EC4\u5143\u7D20\u7684\u4E2A\u6570</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u904D\u5386\u6570\u7EC4</li></ul><p>\u9488\u5BF9\u5173\u8054\u6570\u7EC4\u53EF\u4EE5\u901A\u8FC7\u6570\u7EC4\u5143\u7D20\u7684\u7D22\u5F15\u8FDB\u884C\u904D\u5386</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo \${ass_array2[index1]}</span>
tom
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo \${ass_array2[index2]}</span>
jack
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo \${ass_array2[index3]}</span>
alice
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo \${ass_array2[index4]}</span>
<span class="token function">bash</span> shell
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u6848\u4F8B\u5206\u4EAB-\u5B66\u5458\u4FE1\u606F\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B\u5206\u4EAB-\u5B66\u5458\u4FE1\u606F\u7CFB\u7EDF" aria-hidden="true">#</a> \u6848\u4F8B\u5206\u4EAB---\u5B66\u5458\u4FE1\u606F\u7CFB\u7EDF</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">3</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span>
<span class="token keyword">do</span>
<span class="token builtin class-name">read</span> -p <span class="token string">&quot;\u8F93\u5165\u7B2C<span class="token variable"><span class="token variable">$((</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token variable">))</span></span>\u4E2A\u4EBA\u540D:&quot;</span> name<span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span>
<span class="token builtin class-name">read</span> -p <span class="token string">&quot;\u8F93\u5165\u7B2C<span class="token variable"><span class="token variable">$((</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token variable">))</span></span>\u4E2A\u5E74\u9F84:&quot;</span> age<span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span>
<span class="token builtin class-name">read</span> -p <span class="token string">&quot;\u8F93\u5165\u7B2C<span class="token variable"><span class="token variable">$((</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token variable">))</span></span>\u4E2A\u6027\u522B:&quot;</span> name<span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span>
<span class="token keyword">done</span>
<span class="token function">clear</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\t">\\t</span><span class="token entity" title="\\t">\\t</span><span class="token entity" title="\\t">\\t</span><span class="token entity" title="\\t">\\t</span>\u5B66\u5458\u67E5\u8BE2\u7CFB\u7EDF&quot;</span>
<span class="token keyword">while</span> <span class="token builtin class-name">:</span>
<span class="token keyword">do</span>
<span class="token assign-left variable">cp</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token entity" title="\\t">\\t</span><span class="token entity" title="\\t">\\t</span><span class="token entity" title="\\t">\\t</span><span class="token entity" title="\\t">\\t</span>\u5B66\u5458\u67E5\u8BE2\u7CFB\u7EDF&quot;</span>
<span class="token builtin class-name">read</span> -p <span class="token string">&quot;\u8F93\u5165\u8981\u67E5\u8BE2\u7684\u59D3\u540D\uFF1A&quot;</span> xm
<span class="token punctuation">[</span> <span class="token variable">$xm</span> <span class="token operator">==</span> <span class="token string">&quot;Q&quot;</span> <span class="token punctuation">]</span><span class="token operator">&amp;&amp;</span><span class="token builtin class-name">exit</span>
<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">3</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$xm</span>&quot;</span> <span class="token operator">==</span> <span class="token string">&quot;<span class="token variable">\${name<span class="token punctuation">[</span>$i<span class="token punctuation">]</span>}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${name<span class="token punctuation">[</span>$i<span class="token punctuation">]</span>}</span> <span class="token variable">\${age<span class="token punctuation">[</span>$i<span class="token punctuation">]</span>}</span> <span class="token variable">\${gender<span class="token punctuation">[</span>$i<span class="token punctuation">]</span>}</span>&quot;</span>
<span class="token assign-left variable">cp</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">fi</span>
<span class="token keyword">done</span>
<span class="token punctuation">[</span> <span class="token variable">$cp</span> -eq <span class="token number">0</span> <span class="token punctuation">]</span><span class="token operator">&amp;&amp;</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;not found student&quot;</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,44);function p(t,o){return e}var c=s(n,[["render",p]]);export{c as default};