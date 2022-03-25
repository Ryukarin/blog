import{_ as n,a as s}from"./app.893f8b81.js";var a="/blog/assets/sed.41dc3ba9.png";const e={},p=s('<h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p>\u5728 shell \u811A\u672C\u7F16\u5199\u4E2D\uFF0C\u65F6\u5E38\u4F1A\u7528\u5230\u5BF9\u6587\u4EF6\u7684\u76F8\u5173\u64CD\u4F5C\uFF0C\u6BD4\u5982\u589E\u52A0\u5185\u5BB9\u3001\u4FEE\u6539\u5185\u5BB9\u3001\u5220\u9664\u90E8\u5206\u5185\u5BB9\u3001\u67E5\u770B\u90E8\u5206\u5185\u5BB9\u7B49\uFF0C\u4F46\u662F\u4E0A\u8FF0\u7684\u8FD9\u4E9B\u64CD\u4F5C\u4E00\u822C\u90FD\u662F\u9700\u8981\u5728\u6587\u672C\u7F16\u8F91\u5668\u4E2D\u624D\u80FD\u64CD\u4F5C\uFF0C\u5E38\u7528\u7684\u6587\u672C\u7F16\u8F91\u5668\u6709\uFF1A<code>gedit</code>\u3001<code>vim</code>\u3001<code>nano</code> \u7B49\uFF0C\u53C8\u662F\u4EA4\u4E92\u5F0F\u6587\u672C\u7F16\u8F91\u5668\uFF0C\u811A\u672C\u65E0\u6CD5\u81EA\u5DF1\u72EC\u7ACB\u5B8C\u6210\u5FC5\u987B\u6709\u4EBA\u53C2\u4E0E\u624D\u53EF\u4EE5\u5B8C\u6210\u3002\u5982\u679C\u8FD9\u6837\u7684\u8BDD\u53C8\u8FDD\u80CC\u4E86\u6211\u4EEC\u7F16\u5199\u811A\u672C\u7684\u76EE\u7684\uFF08\u5168\u90E8\u7531\u673A\u5668\u6765\u5B8C\u6210\uFF0C\u51CF\u5C11\u4EBA\u7684\u5DE5\u4F5C\u538B\u529B\uFF0C\u63D0\u5347\u5DE5\u4F5C\u6548\u7387\uFF09\u3002emm......\u5982\u4F55\u624D\u80FD\u8BA9\u8FD9\u4E9B\u64CD\u4F5C\u5168\u90E8\u811A\u672C\u81EA\u5DF1\u5C31\u641E\u5B9A\uFF0C\u800C\u4E0D\u9700\u8981\u4EBA\u7684\u53C2\u4E0E\uFF08\u5373\u5B8C\u5168\u81EA\u52A8\u5316\uFF09\uFF0C\u800C\u4E14\u53C8\u80FD\u6309\u7167\u6211\u4EEC\u7684\u811A\u672C\u9884\u6848\u6765\u5B8C\u6210\u5462\uFF1F</p><p>\u4E3A\u4E86\u89E3\u51B3\u4E0A\u8FF0\u95EE\u9898\uFF0Clinux \u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u4E9B\u547D\u4EE4\uFF0C\u6BD4\u5982\uFF1A<code>perl</code>\u3001<code>sed</code> \u7B49\u547D\u4EE4\uFF0C\u4E0B\u9762\u6211\u4EEC\u5C31\u6765\u5B66\u4E60\u4E00\u4E0B <code>sed</code> \u547D\u4EE4\u3002</p><h2 id="sed-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#sed-\u547D\u4EE4" aria-hidden="true">#</a> sed \u547D\u4EE4</h2><p><code>sed</code> \u547D\u4EE4\u662F linux \u4E2D\u63D0\u4F9B\u7684\u4E00\u4E2A\u5916\u90E8\u547D\u4EE4\uFF0C\u5B83\u662F\u4E00\u4E2A\u884C\uFF08\u6D41\uFF09\u7F16\u8F91\u5668\uFF0C\u975E\u4EA4\u4E92\u5F0F\u7684\u5BF9\u6587\u4EF6\u5185\u5BB9\u8FDB\u884C\u589E\u5220\u6539\u67E5\u7684\u64CD\u4F5C\uFF0C\u4F7F\u7528\u8005\u53EA\u80FD\u5728\u547D\u4EE4\u884C\u8F93\u5165\u7F16\u8F91\u547D\u4EE4\u3001\u6307\u5B9A\u6587\u4EF6\u540D\uFF0C\u7136\u540E\u5728\u5C4F\u5E55\u4E0A\u67E5\u770B\u8F93\u51FA\u3002\u5B83\u548C\u6587\u672C\u7F16\u8F91\u5668\u6709\u672C\u8D28\u7684\u533A\u522B\u3002</p><p><strong>\u533A\u522B\uFF1A</strong></p><ul><li>\u6587\u672C\u7F16\u8F91\u5668\uFF1A\u7F16\u8F91\u5BF9\u8C61\u662F\u6587\u4EF6</li><li>\u884C\u7F16\u8F91\u5668\uFF1A\u7F16\u8F91\u5BF9\u8C61\u662F\u6587\u4EF6\u4E2D\u7684\u884C</li></ul><p>\u4E5F\u5C31\u662F\u524D\u8005\u4E00\u6B21\u5904\u7406\u4E00\u4E2A\u6587\u672C\uFF0C\u800C\u540E\u8005\u662F\u4E00\u6B21\u5904\u7406\u4E00\u4E2A\u6587\u672C\u4E2D\u7684\u4E00\u884C\u3002\u8FD9\u4E2A\u662F\u6211\u4EEC\u5E94\u8BE5\u5F04\u6E05\u695A\u4E14\u5FC5\u987B\u7262\u8BB0\u7684\uFF0C\u5426\u5219\u53EF\u80FD\u65E0\u6CD5\u7406\u89E3 <code>sed</code> \u7684\u8FD0\u884C\u539F\u7406\u548C\u4F7F\u7528\u7CBE\u9AD3\u3002</p><h3 id="sed\u6570\u636E\u5904\u7406\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#sed\u6570\u636E\u5904\u7406\u539F\u7406" aria-hidden="true">#</a> sed\u6570\u636E\u5904\u7406\u539F\u7406</h3><div class="custom-container center"><p><img src="'+a+`" alt="\u6570\u636E\u5904\u7406" loading="lazy"></p><p><u>\u8BFB\u53D6\u7684\u6570\u636E\u5728\u7F13\u5B58\u4E2D\u5904\u7406\uFF0C\u7136\u540E\u9ED8\u8BA4\u8F93\u51FA\u5230\u5C4F\u5E55</u></p></div><h3 id="sed-\u547D\u4EE4\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#sed-\u547D\u4EE4\u683C\u5F0F" aria-hidden="true">#</a> sed \u547D\u4EE4\u683C\u5F0F</h3><p><strong>\u547D\u4EE4\u683C\u5F0F\u5982\u4E0B\uFF1A</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># sed [\u9009\u9879] &#39;{\u5185\u90E8\u547D\u4EE4}[\u6807\u5FD7]&#39; [\u6587\u4EF6]</span>
\u9009\u9879\uFF1A
	-e		:\u5C06\u811A\u672C\u4E2D\u6307\u5B9A\u7684\u547D\u4EE4\u6DFB\u52A0\u5230\u5904\u7406\u8F93\u5165\u65F6\u6267\u884C\u7684\u547D\u4EE4\u4E2D\uFF1B\u4E00\u884C\u4E2D\u8981\u6709\u591A\u4E2A\u6761\u4EF6
	-f		:\u5C06\u6587\u4EF6\u4E2D\u6307\u5B9A\u7684\u547D\u4EE4\u6DFB\u52A0\u5230\u5904\u7406\u8F93\u5165\u65F6\u7684\u547D\u4EE4\u4E2D
	-n		:\u6291\u5236\u81EA\u52A8\u8F93\u51FA
	-i		:\u7F16\u8F91\u6587\u4EF6\u5185\u5BB9
	-i.bak	:\u7F16\u8F91\u6587\u4EF6\u5185\u5BB9\u540C\u65F6\u521B\u5EFA.bak\u7684\u5907\u4EFD\u6587\u4EF6
	-r		:\u4F7F\u7528\u6269\u5C55\u7684\u6B63\u5219\u8868\u8FBE\u5F0F
	<span class="token operator">!</span>		:\u53D6\u53CD\uFF08\u8DDF\u5728\u6A21\u5F0F\u6761\u4EF6\u540E\uFF0C\u4E0Eshell\u6709\u6240\u533A\u522B\uFF09
	
\u5185\u90E8\u547D\u4EE4\uFF1A	
	a	\uFF1A\u5728\u5339\u914D\u540E\u9762\u6DFB\u52A0
	i	\uFF1A\u5728\u5339\u914D\u524D\u9762\u6DFB\u52A0
	p	\uFF1A\u6253\u5370
	d	\uFF1A\u5220\u9664
	s	\uFF1A\u67E5\u627E\u66FF\u6362
	c	\uFF1A\u7F16\u8F91\u66F4\u6539
	y	\uFF1A\u8F6C\u6362\uFF08	N	D	P	\uFF09
	
\u6807\u5FD7\uFF1A
	\u6570\u5B57\uFF1A\u8868\u793A\u65B0\u6587\u672C\u66FF\u6362\u6A21\u5F0F
	g	\uFF1A\u8868\u793A\u7528\u65B0\u6587\u672C\u66FF\u6362\u73B0\u6709\u6587\u672C\u7684\u5168\u90E8\u5B9E\u4F8B
	p	\uFF1A\u8868\u793A\u6253\u5370\u539F\u59CB\u7684\u5185\u5BB9
	w	\uFF1A\u5C06\u66FF\u6362\u7684\u7ED3\u679C\u5199\u5165\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="sed-\u4F7F\u7528\u5C0F\u6280\u5DE7" tabindex="-1"><a class="header-anchor" href="#sed-\u4F7F\u7528\u5C0F\u6280\u5DE7" aria-hidden="true">#</a> sed \u4F7F\u7528\u5C0F\u6280\u5DE7</h2><p><code>$=</code> \uFF1A\u7EDF\u8BA1\u6587\u672C\u6709\u591A\u5C11\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed &#39;=&#39; date</span>
<span class="token number">1</span>
hello world<span class="token operator">!</span>
<span class="token number">2</span>
you can you Up
<span class="token number">3</span>
bye bye
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed -n &#39;$=&#39; date</span>
<span class="token number">3</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u5B9E\u4F8B\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B\u8BF4\u660E" aria-hidden="true">#</a> \u5B9E\u4F8B\u8BF4\u660E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#cat\u67E5\u770B\u6587\u4EF6\u5185\u5BB9</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># cat data</span>
<span class="token number">1</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">2</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">3</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">4</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">5</span>.the quick brown fox jumps over the lazy dog.dog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="sed-\u5185\u90E8\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#sed-\u5185\u90E8\u547D\u4EE4" aria-hidden="true">#</a> sed \u5185\u90E8\u547D\u4EE4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u6BCF\u884C\u540E\u9762\u8FFD\u52A0</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed &#39;a\\hello world&#39; data</span>
<span class="token number">1</span>.the quick brown fox jumps over the lazy dog.dog
hello world
<span class="token number">2</span>.the quick brown fox jumps over the lazy dog.dog
hello world
<span class="token number">3</span>.the quick brown fox jumps over the lazy dog.dog
hello world
<span class="token number">4</span>.the quick brown fox jumps over the lazy dog.dog
hello world
<span class="token number">5</span>.the quick brown fox jumps over the lazy dog.dog
hello world
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u7B2C3\u884C\u540E\u9762\u8FFD\u52A0</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed &#39;3a\\hello world&#39; data</span>
<span class="token number">1</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">2</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">3</span>.the quick brown fox jumps over the lazy dog.dog
hello world
<span class="token number">4</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">5</span>.the quick brown fox jumps over the lazy dog.dog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u7B2C2-4\u884C\u4E4B\u95F4\u6BCF\u884C\u540E\u9762\u8FFD\u52A0</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed &#39;2,4a\\hello world&#39; data</span>
<span class="token number">1</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">2</span>.the quick brown fox jumps over the lazy dog.dog
hello world
<span class="token number">3</span>.the quick brown fox jumps over the lazy dog.dog
hello world
<span class="token number">4</span>.the quick brown fox jumps over the lazy dog.dog
hello world
<span class="token number">5</span>.the quick brown fox jumps over the lazy dog.dog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5339\u914D3.the\u7684\u884C\u540E\u9762\u8FFD\u52A0</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed &#39;/3.the/a\\hello world&#39; data</span>
<span class="token number">1</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">2</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">3</span>.the quick brown fox jumps over the lazy dog.dog
hello world
<span class="token number">4</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">5</span>.the quick brown fox jumps over the lazy dog.dog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u603B\u7ED3</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed &#39;i\\hello world&#39; data				#\u6BCF\u884C\u524D\u9762\u63D2\u5165</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed &#39;3i\\hello world&#39; data				#\u7B2C3\u884C\u524D\u9762\u63D2\u5165</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed &#39;2,4i\\hello world&#39; data			#\u7B2C2-4\u884C\u4E4B\u95F4\u6BCF\u884C\u524D\u9762\u63D2\u5165</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed &#39;/3.the/i\\hello world&#39; data		#\u5339\u914D3.the\u7684\u884C\u524D\u9762\u63D2\u5165</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed \u2018d\u2019 data							#\u5220\u9664\u6240\u6709</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed \u20183d\u2019 data							#\u5220\u9664\u7B2C3\u884C</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed \u20182,4d\u2019 data						#\u5220\u9664\u7B2C2-4\u884C</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed \u2018/3.the/d\u2019 data					#\u5220\u9664\u5339\u914D3.the\u7684\u90A3\u4E00\u884C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u6BCF\u4E00\u884C\u4E2D\u7B2C\u4E00\u6B21\u51FA\u73B0\u7684dog\u66FF\u6362\u6210cat</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed &#39;s/dog/cat/&#39; data</span>
<span class="token number">1</span>.the quick brown fox jumps over the lazy cat.dog
<span class="token number">2</span>.the quick brown fox jumps over the lazy cat.dog
<span class="token number">3</span>.the quick brown fox jumps over the lazy cat.dog
<span class="token number">4</span>.the quick brown fox jumps over the lazy <span class="token function">cat</span>
<span class="token number">5</span>.the quick brown fox jumps over the lazy <span class="token function">cat</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u7B2C3\u884C\u4E2D\u7B2C\u4E00\u6B21\u51FA\u73B0\u7684dog\u66FF\u6362\u6210cat</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed &#39;3s/dog/cat/&#39; data</span>
<span class="token comment">#\u7B2C2-4\u884C\u4E2D\u7B2C\u4E00\u6B21\u51FA\u73B0\u7684dog\u66FF\u6362\u6210cat</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed &#39;2,4s/dog/cat/&#39; data</span>
<span class="token comment">#\u5339\u914D3.the\u90A3\u884C\u7B2C\u4E00\u6B21\u51FA\u73B0\u7684dog\u66FF\u6362\u6210cat</span>
<span class="token punctuation">[</span>root@linux ~ <span class="token punctuation">]</span><span class="token comment"># sed &#39;3.the/s/dog/cat/&#39; data</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u6BCF\u4E00\u884C\u5185\u5BB9\u90FD\u66F4\u6539\u4E3Ahello world</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed &#39;c\\hello world&#39; data</span>
hello world
hello world
hello world
hello world
hello world
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u7B2C3\u884C\u5185\u5BB9\u66F4\u6539\u4E3Ahello world</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed &#39;3c\\hello world&#39; data</span>
<span class="token number">1</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">2</span>.the quick brown fox jumps over the lazy dog.dog
hello world
<span class="token number">4</span>.the quick brown fox jumps over the lazy dog
<span class="token number">5</span>.the quick brown fox jumps over the lazy dog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u7B2C2-4\u884C\u5220\u6389\uFF0C\u52A0\u5165\u4E00\u884Chello world</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed &#39;2,4c\\hello world&#39; data</span>
<span class="token number">1</span>.the quick brown fox jumps over the lazy dog.dog
hello world
<span class="token number">5</span>.the quick brown fox jumps over the lazy dog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u5339\u914D3.the\u90A3\u884C\u5185\u5BB9\u66F4\u6539\u4E3Ahello world</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed &#39;/3.the/c\\hello world&#39; data</span>
<span class="token number">1</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">2</span>.the quick brown fox jumps over the lazy dog.dog
hello world
<span class="token number">4</span>.the quick brown fox jumps over the lazy dog
<span class="token number">5</span>.the quick brown fox jumps over the lazy dog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u8F6C\u6362abcdefg/ABCDEFG\u4E00\u4E00\u5BF9\u5E94</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed &#39;y/abcdefg/ABCDEFG&#39; data</span>
<span class="token number">1</span>.thE quiCk Brown Fox jumps ovEr thE lAzy DoG.DoG
<span class="token number">2</span>.thE quiCk Brown Fox jumps ovEr thE lAzy DoG.DoG

<span class="token number">3</span>.thE quiCk Brown Fox jumps ovEr thE lAzy DoG.DoG
<span class="token number">4</span>.thE quiCk Brown Fox jumps ovEr thE lAzy DoG
<span class="token number">5</span>.thE quiCk Brown Fox jumps ovEr thE lAzy DoG
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u628A\u6BCF\u884C\u518D\u6253\u5370\u4E00\u6B21\uFF0C\u5373\u6BCF\u884C\u6253\u53702\u6B21</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed &#39;p&#39; data</span>
<span class="token comment">#\u628A\u7B2C\u4E09\u884C\u6253\u53702\u6B21</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed &#39;3p&#39; data</span>
<span class="token number">1</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">2</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">3</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">3</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">4</span>.the quick brown fox jumps over the lazy dog
<span class="token number">5</span>.the quick brown fox jumps over the lazy dog
<span class="token comment">#\u628A\u7B2C2-4\u4E4B\u95F4\u7684\u884C\uFF0C\u6BCF\u884C\u6253\u53702\u6B21</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed &#39;2,4p&#39; data</span>
<span class="token comment">#\u628A\u5339\u914D3.the\u7684\u90A3\u884C\uFF0C\u6253\u53702\u6B21</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed &#39;/3.the/p&#39; data</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="sed-\u547D\u4EE4\u6807\u5FD7" tabindex="-1"><a class="header-anchor" href="#sed-\u547D\u4EE4\u6807\u5FD7" aria-hidden="true">#</a> sed \u547D\u4EE4\u6807\u5FD7</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u628A\u6BCF\u884C\u7684\u6240\u6709dog\u90FD\u66FF\u6362\u6210cat</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed \u2018s/dog/cat/g\u2019 data</span>
<span class="token number">1</span>.the quick brown fox jumps over the lazy cat.cat
<span class="token number">2</span>.the quick brown fox jumps over the lazy cat.cat
<span class="token number">3</span>.the quick brown fox jumps over the lazy cat.cat
<span class="token number">4</span>.the quick brown fox jumps over the lazy <span class="token function">cat</span>
<span class="token number">5</span>.the quick brown fox jumps over the lazy <span class="token function">cat</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u628A\u6BCF\u884C\u7684\u7B2C2\u6B21\u51FA\u73B0\u7684dog\u66FF\u6362\u6210cat</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed \u2018s/dog/cat/2\u2019 data</span>
<span class="token number">1</span>.the quick brown fox jumps over the lazy dog.cat
<span class="token number">2</span>.the quick brown fox jumps over the lazy dog.cat
<span class="token number">3</span>.the quick brown fox jumps over the lazy dog.cat
<span class="token number">4</span>.the quick brown fox jumps over the lazy dog
<span class="token number">5</span>.the quick brown fox jumps over the lazy dog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u628A\u7B2C3\u884C\u7B2C1\u6B21\u51FA\u73B0\u7684dog\u66FF\u6362\u6210cat\u5E76\u6253\u53702\u6B21</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed \u20183s/dog/cat/p\u2019 data</span>
<span class="token number">1</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">2</span>.the quick brown fox jumps over the lazy dog.dog
<span class="token number">3</span>.the quick brown fox jumps over the lazy cat.dog
<span class="token number">3</span>.the quick brown fox jumps over the lazy cat.dog

<span class="token number">4</span>.the quick brown fox jumps over the lazy dog
<span class="token number">5</span>.the quick brown fox jumps over the lazy dog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u628A\u4FEE\u6539\u5185\u5BB9\u90E8\u5206\u53E6\u5B58\u4E3Adata.bk</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed \u20183s/dog/cat/w data.bk\u2019 data</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># ls</span>
data		data.bk
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># cat data.bk</span>
<span class="token number">3</span>.the quick brown fox jumps over the lazy cat.dog
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="sed-\u547D\u4EE4\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#sed-\u547D\u4EE4\u9009\u9879" aria-hidden="true">#</a> sed \u547D\u4EE4\u9009\u9879</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u4E0D\u6253\u5370\u539F\u672C\u6587\u672C\u7684\u5185\u5BB9</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed -n \u20183s/dog/cat/p\u2019 data</span>
<span class="token number">3</span>.the quick brown fox jumps over the lazy cat.dog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u591A\u6761\u4EF6\u66FF\u6362</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed -e \u2018s/brown/white/;5s/dog/cat/\u2019 data</span>
<span class="token number">5</span>.the quick white fox jumps over the lazy <span class="token function">cat</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># vim cmd_op</span>
5s/brown/white/
5s/dog/cat/
<span class="token comment">#\u6587\u4EF6\u5185\u5BB9\u5F53\u4F5C\u547D\u4EE4</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed -f cmd_op data	</span>
<span class="token number">5</span>.the quick white fox jumps over the lazy <span class="token function">cat</span>
<span class="token comment">#\u4FEE\u6539\u539F\u6587\u4EF6\uFF0C\u4E0D\u53EF\u9006\uFF0C\u614E\u7528</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed -i \u2018s/dog/cat/\u2019 data</span>
<span class="token comment">#\u4FEE\u6539\u539F\u6587\u4EF6\u524D\u5148\u5907\u4EFD\u4E00\u4E2A.bak\u7684\u6587\u4EF6</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># sed -i.bak \u2018s/dog/cat/\u2019 data			</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># ls</span>
data		data.bk		data.bak
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="\u8865\u5145\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8865\u5145\u8BF4\u660E" aria-hidden="true">#</a> \u8865\u5145\u8BF4\u660E</h3><p>\u9664\u4E86<code>sed -i</code> \u4F1A\u4FEE\u6539\u539F\u6587\u4EF6\u5185\u5BB9\uFF0C\u4E14\u4E00\u4F46\u4FEE\u6539\u5219\u4E0D\u80FD\u53D6\u6D88\uFF1B \u5176\u4ED6\u53C2\u6570\u547D\u4EE4\u4E0D\u4F1A\u4FEE\u6539\u539F\u6587\u4EF6\u5185\u5BB9\uFF0C\u53EA\u662F\u4FEE\u6539\u7F13\u5B58\u4E2D\u7684\u5185\u5BB9\u5E76\u6253\u5370\u8F93\u51FA\u3002</p>`,43);function o(l,t){return p}var r=n(e,[["render",o]]);export{r as default};
