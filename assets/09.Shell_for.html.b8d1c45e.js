import{_ as n,a as s}from"./app.893f8b81.js";const a={},e=s(`<p>\u811A\u672C\u518D\u6267\u884C\u4EFB\u52A1\u7684\u65F6\u5019\uFF0C\u603B\u4F1A\u9047\u5230\u9700\u8981\u5FAA\u73AF\u6267\u884C\u7684\u65F6\u5019\uFF0C\u6BD4\u5982\u8BF4\u6211\u4EEC\u9700\u8981\u811A\u672C\u6BCF\u9694\u4E94\u5206\u949F\u6267\u884C\u4E00\u6B21 ping \u7684\u64CD\u4F5C\uFF0C\u9664\u4E86\u8BA1\u5212\u4EFB\u52A1\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u4F7F\u7528\u811A\u672C\u6765\u5B8C\u6210\uFF0C\u90A3\u4E48\u6211\u4EEC\u5C31\u7528\u5230\u4E86\u5FAA\u73AF\u8BED\u53E5\u3002</p><h2 id="for-\u5FAA\u73AF\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#for-\u5FAA\u73AF\u4ECB\u7ECD" aria-hidden="true">#</a> for \u5FAA\u73AF\u4ECB\u7ECD</h2><p>\u5F88\u591A\u4EBA\u628Afor\u5FAA\u73AF\u53EB\u505A\u6761\u4EF6\u5FAA\u73AF\uFF0C\u6216\u8005 <code>for-i-in</code>\u3002\u5176\u5B9E\u524D\u8005\u8BF4\u7684\u5C31\u662F for \u7684\u7279\u6027\uFF0Cfor \u5FAA\u73AF\u7684\u6B21\u6570\u548C\u7ED9\u4E88\u7684\u6761\u4EF6\u662F\u6210\u6B63\u6BD4\u7684\uFF0C\u4F60\u8BA9\u5B83\u5FAA\u73AF 5 \u6B21\uFF0C\u5B83\u5C31\u5FAA\u73AF 5 \u6B21\uFF1B\u540E\u8005\u8BF4\u7684\u662F for \u7684\u8BED\u6CD5\u3002</p><h2 id="for-\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#for-\u8BED\u6CD5" aria-hidden="true">#</a> for \u8BED\u6CD5</h2><h3 id="for-\u8BED\u6CD5\u4E00" tabindex="-1"><a class="header-anchor" href="#for-\u8BED\u6CD5\u4E00" aria-hidden="true">#</a> for \u8BED\u6CD5\u4E00</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">var</span> <span class="token keyword">in</span> vlue1 value2 <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">;</span><span class="token keyword">do</span>
	commands
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u63A5\u4E0B\u6765\u770B\u6BB5\u4EE3\u7801\u5427\uFF0C\u5FAA\u73AF\u8F93\u51FA\u6570\u5B57 1-9</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cat for_1.sh</span>
<span class="token comment">#!/bin/bash</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">seq</span> <span class="token number">1</span> <span class="token number">9</span><span class="token variable">\`</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
	<span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="for-\u8BED\u6CD5\u4E8C-c-\u683C\u5F0F-for-\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#for-\u8BED\u6CD5\u4E8C-c-\u683C\u5F0F-for-\u5FAA\u73AF" aria-hidden="true">#</a> for \u8BED\u6CD5\u4E8C \uFF08C \u683C\u5F0F for \u5FAA\u73AF\uFF09</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>\u53D8\u91CF<span class="token punctuation">;</span>\u6761\u4EF6<span class="token punctuation">;</span>\u81EA\u589E\u51CF\u8FD0\u7B97<span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
	commands
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8FD8\u662F\u521A\u624D\u7684\u5FAA\u73AF\u8F93\u51FA\u6570\u5B57 1-9</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cat for_2.sh</span>
<span class="token comment">#!/bin/bash</span>
<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
	<span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u8865\u5145</p><p><code>seq</code> \u547D\u4EE4\uFF1A<code>seq</code> \u547D\u4EE4\u53EF\u4EE5\u8F93\u51FA\u8FDE\u7EED\u7684\u6570\u5B57\uFF0C\u6216\u8005\u8F93\u51FA\u56FA\u5B9A\u95F4\u9694\u7684\u6570\u5B57\uFF0C\u6216\u8005\u8F93\u51FA\u6307\u5B9A\u683C\u5F0F\u7684\u6570\u5B57\u3002</p><p>\u547D\u4EE4\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># seq [\u9009\u9879] \u9996\u6570 \u6B65\u8FDB \u5C3E\u6570</span>
\u9009\u9879\uFF1A
	-s	\uFF1A\u6307\u5B9A\u8F93\u51FA\u7684\u5206\u9694\u7B26\uFF0C\u9ED8\u8BA4\u4E3A <span class="token punctuation">\\</span>n\uFF0C\u5373\u9ED8\u8BA4\u4E3A\u56DE\u8F66\u6362\u884C
	-w	\uFF1A\u6307\u5B9A\u4E3A\u5B9A\u5BBD\u8F93\u51FA\uFF0C\u4E0D\u80FD\u548C -f \u4E00\u8D77\u7528
	-f	\uFF1A\u6309\u7167\u6307\u5B9A\u7684\u683C\u5F0F\u8F93\u51FA\uFF0C\u4E0D\u80FD\u548C -w \u4E00\u8D77\u4F7F\u7528
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># echo \`seq 1 5\`			#1---5\u4E4B\u95F4\uFF0C\u9ED8\u8BA4\u6B65\u8FDB\u4E3A1\u7684\u6570\u5B57</span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token number">4</span>
<span class="token number">5</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># echo \`seq 10 -2 1\`		#10---1\u4E4B\u95F4\uFF0C\u6B65\u8FDB\u4E3A-2\u7684\u6570\u5B57</span>
<span class="token number">10</span>
<span class="token number">8</span>
<span class="token number">6</span>
<span class="token number">4</span>
<span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="c-\u683C\u5F0F-for-\u5FAA\u73AF\u53CC\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#c-\u683C\u5F0F-for-\u5FAA\u73AF\u53CC\u53D8\u91CF" aria-hidden="true">#</a> C \u683C\u5F0F for \u5FAA\u73AF\u53CC\u53D8\u91CF</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># vim for_3.sh</span>
<span class="token comment">#!/bin/bash</span>
<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>m<span class="token operator">=</span><span class="token number">9</span><span class="token punctuation">,</span>n<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>m<span class="token operator">&gt;</span><span class="token number">1</span><span class="token punctuation">,</span>n<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span>m<span class="token operator">--</span><span class="token punctuation">,</span>n<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
	<span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token variable">$m</span><span class="token entity" title="\\t">\\t</span><span class="token variable">$n</span>&quot;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="\u5FAA\u73AF\u63A7\u5236\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF\u63A7\u5236\u8BED\u53E5" aria-hidden="true">#</a> \u5FAA\u73AF\u63A7\u5236\u8BED\u53E5</h2><h3 id="sleep-n" tabindex="-1"><a class="header-anchor" href="#sleep-n" aria-hidden="true">#</a> sleep N</h3><p><strong>\u811A\u672C\u6267\u884C\u5230\u8BE5\u6B65\u4F11\u7720 N \u79D2</strong></p><p>\u770B\u6BB5\u4EE3\u7801\u5427</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># vim sllep.sh</span>
<span class="token comment">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> -n <span class="token string">&quot;\u5012\u8BA1\u65F6\uFF1A&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">seq</span> <span class="token number">9</span> -1 <span class="token number">1</span><span class="token variable">\`</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
	<span class="token builtin class-name">echo</span> -n -e <span class="token string">&quot;<span class="token entity" title="\\b">\\b</span><span class="token variable">$i</span>&quot;</span>
<span class="token function">sleep</span> <span class="token number">1</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">echo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="continue" tabindex="-1"><a class="header-anchor" href="#continue" aria-hidden="true">#</a> continue</h3><p><strong>\u8DF3\u51FA\u5FAA\u73AF\u4E2D\u7684\u67D0\u6B21\u5FAA\u73AF</strong></p><p>\u7EE7\u7EED\u770B\u4EE3\u7801\uFF0C\u9ED8\u8BA4\u5FAA\u73AF\u8F93\u51FA 1-9\uFF0C\u4F46\u662F\u4F7F\u7528 continue \u8DF3\u8FC7\u8F93\u51FA 5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># vim continue.sh</span>
<span class="token comment">#!/bin/bash</span>
<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$i</span> -eq <span class="token number">5</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
		<span class="token builtin class-name">continue</span>
	<span class="token keyword">else</span>
		<span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
	<span class="token keyword">fi</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="break" tabindex="-1"><a class="header-anchor" href="#break" aria-hidden="true">#</a> break</h3><p><strong>\u8DF3\u51FA\u5FAA\u73AF\u7EE7\u7EED\u6267\u884C\u540E\u7EED\u4EE3\u7801</strong></p><p>\u8FD8\u662F\u770B\u6BB5\u4EE3\u7801\uFF0C\u9ED8\u8BA4\u5FAA\u73AF\u8F93\u51FA 1-9\uFF0C\u5F53\u8F93\u51FA\u52305\u7684\u65F6\u5019\u8DF3\u51FA\u5FAA\u73AF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># vim break.sh</span>
<span class="token comment">#!/bin/bash</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">seq</span> <span class="token number">1</span> <span class="token number">9</span><span class="token variable">\`</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
	<span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$i</span> -eq <span class="token number">5</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
		<span class="token builtin class-name">break</span>
	<span class="token keyword">fi</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p>\u76D1\u63A7\u4E3B\u673A\u5B58\u6D3B\u7684\u811A\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># vim ping.sh</span>
<span class="token comment">#!/bin/bash</span>
<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
	<span class="token function">ping</span> -c1 <span class="token variable">$1</span> <span class="token operator">&amp;&gt;</span> /dev/null
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> -eq <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
		<span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +<span class="token string">&quot;%F %H:%M:%S&quot;</span><span class="token variable">\`</span></span>\uFF1A<span class="token variable">$1</span> is <span class="token entity" title="\\033">\\033</span>[32m UP <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
	<span class="token keyword">else</span>	
		<span class="token builtin class-name">echo</span> -e <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span> +<span class="token string">&quot;%F %H:%M:%S&quot;</span><span class="token variable">\`</span></span>\uFF1A<span class="token variable">$1</span> is <span class="token entity" title="\\033">\\033</span>[31m Down <span class="token entity" title="\\033">\\033</span>[0m&quot;</span>
	<span class="token keyword">fi</span>
	<span class="token function">sleep</span> <span class="token number">5</span>		<span class="token comment">#\u6BCF\u96945\u79D2\u5FAA\u73AF\u4E00\u6B21\uFF0C\u751F\u4EA7\u73AF\u5883\u5EFA\u8BAE1\u5206\u949F\u4EE5\u4E0A</span>
<span class="token keyword">done</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># bash ping.sh 192.168.2.123</span>
<span class="token number">2021</span>-2-7 <span class="token number">13</span>:32:21\uFF1A192.168.2.123 is UP 
<span class="token number">2021</span>-2-7 <span class="token number">13</span>:32:26\uFF1A192.168.2.123 is UP 
<span class="token number">2021</span>-2-7 <span class="token number">13</span>:32:31\uFF1A192.168.2.123 is UP 
<span class="token number">2021</span>-2-7 <span class="token number">13</span>:32:36\uFF1A192.168.2.123 is UP 
^C
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># bash ping.sh 192.168.2.321</span>
<span class="token number">2021</span>-2-7 <span class="token number">13</span>:33:13\uFF1A192.168.2.321 is Down 
<span class="token number">2021</span>-2-7 <span class="token number">13</span>:32:18\uFF1A192.168.2.321 is Down 
<span class="token number">2021</span>-2-7 <span class="token number">13</span>:32:23\uFF1A192.168.2.321 is Down 
<span class="token number">2021</span>-2-7 <span class="token number">13</span>:32:28\uFF1A192.168.2.321 is Down 
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,32);function p(t,l){return e}var c=n(a,[["render",p]]);export{c as default};