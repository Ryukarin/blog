import{_ as n,a as s}from"./app.893f8b81.js";const a={},e=s(`<h2 id="man-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#man-\u547D\u4EE4" aria-hidden="true">#</a> man \u547D\u4EE4</h2><p><code>man</code> \u547D\u4EE4\uFF0C\u662F\u6700\u5E38\u89C1\u7684\u5E2E\u52A9\u547D\u4EE4\uFF0C\u4E5F\u662F Linux \u6700\u4E3B\u8981\u7684\u5E2E\u52A9\u547D\u4EE4\u3002</p><p>\u82F1\u6587\u539F\u610F\uFF1Aan interface to the on-line reference manuals</p><p>\u547D\u4EE4\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># man [\u9009\u9879] \u547D\u4EE4</span>
\u9009\u9879\uFF1A
	-f	\uFF1A\u67E5\u770B\u547D\u4EE4\u62E5\u6709\u54EA\u4E2A\u7EA7\u522B\u7684\u5E2E\u52A9
	-k	\uFF1A\u67E5\u770B\u548C\u547D\u4EE4\u76F8\u5173\u7684\u6240\u6709\u5E2E\u52A9
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>man</code> \u547D\u4EE4\u6BD4\u8F83\u7B80\u5355\uFF0C\u6211\u4EEC\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># man ls</span>
<span class="token comment">#\u83B7\u53D6 ls \u547D\u4EE4\u7684\u5E2E\u52A9\u4FE1\u606F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8FD9\u5C31\u662F <code>man</code> \u547D\u4EE4\u7684\u57FA\u672C\u4F7F\u7528\u65B9\u6CD5\uFF0C\u975E\u5E38\u7B80\u5355\u3002\u4F46\u662F\u5E2E\u52A9\u547D\u4EE4\u7684\u91CD\u70B9\u4E0D\u662F\u547D\u4EE4\u5982\u4F55\u4F7F\u7528\uFF0C\u800C\u662F\u5E2E\u52A9\u4FE1\u606F\u5E94\u8BE5\u5982\u4F55\u67E5\u8BE2\u3002\u8FD9\u4E9B\u4FE1\u606F\u8F83\u591A\uFF0C\u6211\u4EEC\u901A\u8FC7\u4E0B\u9762\u7684\u5185\u5BB9\u6765\u8BE6\u7EC6\u8BB2\u89E3\u3002</p><ol><li><strong>\u4F7F\u7528\u65B9\u6CD5</strong></li></ol><p>\u8FD8\u662F\u67E5\u770B <code>ls</code> \u547D\u4EE4\u7684\u5E2E\u52A9\uFF0C\u6211\u4EEC\u770B\u770B\u8FD9\u4E2A\u5E2E\u52A9\u4FE1\u606F\u7684\u8BE6\u7EC6\u5185\u5BB9\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># man ls</span>
LS<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>                            User Commands                           LS<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

NAME
       <span class="token function">ls</span> - list directory contents
       <span class="token comment">#\u547D\u4EE4\u540D\u79F0\u53CA\u82F1\u6587\u539F\u610F</span>

SYNOPSIS
       <span class="token function">ls</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>FILE<span class="token punctuation">]</span><span class="token punctuation">..</span>.
       <span class="token comment">#\u547D\u4EE4\u7684\u683C\u5F0F</span>

DESCRIPTION
<span class="token comment">#\u5F00\u59CB\u8BE6\u7EC6\u4ECB\u7ECD\u547D\u4EE4\u9009\u9879\u7684\u4F5C\u7528</span>
       List  information  about  the FILEs <span class="token punctuation">(</span>the current directory by default<span class="token punctuation">)</span>.
       Sort entries alphabetically <span class="token keyword">if</span> none of -cftuvSUX nor --sort  is  speci\u2010
       fied.

       Mandatory  arguments  to  long  options are mandatory <span class="token keyword">for</span> short options
       too.

       -a, --all
              <span class="token keyword">do</span> not ignore entries starting with <span class="token builtin class-name">.</span>

       -A, --almost-all
              <span class="token keyword">do</span> not list implied <span class="token builtin class-name">.</span> and <span class="token punctuation">..</span>

AUTHOR
<span class="token comment">#\u4F5C\u8005</span>
       Written by Richard M. Stallman and David MacKenzie.

REPORTING BUGS
<span class="token comment">#bug\u7684\u62A5\u544A\u5730\u8D28</span>
       GNU coreutils online help: <span class="token operator">&lt;</span>http://www.gnu.org/software/coreutils/<span class="token operator">&gt;</span>
       Report <span class="token function">ls</span> translation bugs to <span class="token operator">&lt;</span>http://translationproject.org/team/<span class="token operator">&gt;</span>

COPYRIGHT
<span class="token comment">#\u8457\u4F5C\u6743\u53D7GPL\u89C4\u5219\u4FDD\u62A4</span>
       Copyright \xA9 <span class="token number">2017</span> Free Software Foundation, Inc.   License  GPLv3+:  GNU
       GPL version <span class="token number">3</span> or later <span class="token operator">&lt;</span>http://gnu.org/licenses/gpl.html<span class="token operator">&gt;</span>.
       This  is  <span class="token function">free</span>  software:  you  are <span class="token function">free</span> to change and redistribute it.
       There is NO WARRANTY, to the extent permitted by law.

SEE ALSO
<span class="token comment">#\u53EF\u4EE5\u901A\u8FC7\u5176\u4ED6\u54EA\u4E9B\u547D\u4EE4\u67E5\u770B\u5230 ls \u7684\u76F8\u5173\u4FE1\u606F</span>
       Full documentation at: <span class="token operator">&lt;</span>http://www.gnu.org/software/coreutils/ls<span class="token operator">&gt;</span>
       or available locally via: info <span class="token string">&#39;(coreutils) ls invocation&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p>\u867D\u7136\u4E0D\u540C\u547D\u4EE4\u7684 <code>man</code> \u4FE1\u606F\u6709\u4E00\u4E9B\u533A\u522B\uFF0C\u4F46\u662F\u6BCF\u4E2A\u547D\u4EE4 <code>man</code> \u4FE1\u606F\u7684\u6574\u4F53\u7ED3\u6784\u7686\u5982\u6F14\u793A\u8FD9\u6837\u3002\u5728\u5E2E\u52A9\u4FE1\u606F\u4E2D\uFF0C\u6211\u4EEC\u4E3B\u8981\u67E5\u770B\u7684\u5C31\u662F\u547D\u4EE4\u7684\u683C\u5F0F\u548C\u9009\u9879\u7684\u8BE6\u7EC6\u4F5C\u7528\u3002\u4E0D\u8FC7\u5927\u5BB6\u8BF7\u6CE8\u610F\uFF0C\u5728 <code>man</code> \u4FE1\u606F\u7684\u6700\u540E\uFF0C\u53EF\u4EE5\u770B\u5230\u8FD8\u6709\u54EA\u4E9B\u547D\u4EE4\u53EF\u4EE5\u67E5\u770B\u5230\u6B64\u547D\u4EE4\u7684\u76F8\u5173\u4FE1\u606F\u3002\u8FD9\u662F\u975E\u5E38\u91CD\u8981\u7684\u63D0\u793A\uFF0C\u4E0D\u540C\u7684\u5E2E\u52A9\u4FE1\u606F\u8BB0\u5F55\u7684\u4FA7\u91CD\u70B9\u662F\u4E0D\u592A\u4E00\u6837\u7684\u3002\u6240\u4EE5\uFF0C\u5982\u679C\u5728 <code>man</code> \u4FE1\u606F\u4E2D\u627E\u4E0D\u5230\u60F3\u8981\u7684\u5185\u5BB9\uFF0C\u5219\u53EF\u4EE5\u5C1D\u8BD5\u67E5\u770B\u5176\u4ED6\u76F8\u5173\u5E2E\u52A9\u547D\u4EE4\u3002</p><ol start="2"><li><strong><code>man</code> \u547D\u4EE4\u7684\u5FEB\u6377\u952E</strong></li></ol><p><code>man</code> \u547D\u4EE4\u7684\u5FEB\u6377\u952E\u53EF\u4EE5\u53C2\u8003\u88686-1\u3002</p><p><strong>\u88686-1 <u>man \u547D\u4EE4\u5FEB\u6377\u952E</u></strong></p><table><thead><tr><th>\u5FEB\u6377\u952E</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td>\u4E0A\u7BAD\u5934</td><td>\u5411\u4E0A\u79FB\u52A8\u4E00\u884C</td></tr><tr><td>\u4E0B\u7BAD\u5934</td><td>\u5411\u4E0B\u79FB\u52A8\u4E00\u884C</td></tr><tr><td>PgUp</td><td>\u5411\u4E0A\u7FFB\u4E00\u9875</td></tr><tr><td>PgDn</td><td>\u5411\u4E0B\u7FFB\u4E00\u9875</td></tr><tr><td>g</td><td>\u79FB\u52A8\u5230\u7B2C\u4E00\u9875</td></tr><tr><td>G</td><td>\u79FB\u52A8\u5230\u6700\u540E\u4E00\u9875</td></tr><tr><td>q</td><td>\u9000\u51FA</td></tr><tr><td><code>/\u5B57\u7B26\u4E32</code></td><td>\u4ECE\u5F53\u524D\u9875\u5411\u4E0B\u641C\u7D22<code>\u5B57\u7B26\u4E32</code></td></tr><tr><td><code>?\u5B57\u7B26\u4E32</code></td><td>\u4ECE\u5F53\u524D\u9875\u5411\u4E0A\u641C\u7D22<code>\u5B57\u7B26\u4E32</code></td></tr><tr><td>n</td><td>\u5F53\u641C\u7D22\u5B57\u7B26\u4E32\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 n \u952E\u627E\u5230\u4E0B\u4E00\u4E2A\u5B57\u7B26\u4E32</td></tr><tr><td>N</td><td>\u5F53\u641C\u7D22\u5B57\u7B26\u4E32\u65F6\uFF0C\u4F7F\u7528 N \u952E\u53CD\u5411\u67E5\u8BE2\u5B57\u7B26\u4E32\u3002\uFF08\u4E0E n \u4F5C\u7528\u76F8\u53CD\uFF09</td></tr></tbody></table><p>\u5982\u679C\u6211\u4EEC\u4F7F\u7528 <code>man -k ls</code> \u547D\u4EE4\uFF0C\u5219\u4F1A\u53D1\u73B0\u8F93\u51FA\u5185\u5BB9\u4F1A\u591A\u51FA\u51E0\u9875\uFF0C\u90A3\u662F\u56E0\u4E3A\u5F88\u591A\u547D\u4EE4\u4E2D\u90FD\u5305\u542B\u201Cls\u201D\u8FD9\u4E2A\u5173\u952E\u5B57\u3002\u8FD9\u6761\u547D\u4EE4\u9002\u5408\u4F60\u53EA\u8BB0\u5F97\u547D\u4EE4\u7684\u51E0\u4E2A\u5B57\u7B26\uFF0C\u7528\u6765\u67E5\u627E\u76F8\u5173\u547D\u4EE4\u7684\u60C5\u51B5\u3002</p><p>\u5728\u7CFB\u7EDF\u4E2D\u8FD8\u6709\u4E24\u4E2A\u547D\u4EE4\u3002</p><ul><li><p><code>whatis</code>\uFF1A\u8FD9\u4E2A\u547D\u4EE4\u7684\u4F5C\u7528\u548C <code>man -f</code> \u662F\u4E00\u81F4\u7684\u3002</p></li><li><p><code>apropos</code>\uFF1A\u8FD9\u4E2A\u547D\u4EE4\u7684\u4F5C\u7528\u548C <code>man -k</code> \u662F\u4E00\u81F4\u7684\u3002</p></li></ul><p>\u4E0D\u8FC7\u8FD9\u4E24\u4E2A\u547D\u4EE4\u548C <code>man</code> \u57FA\u672C\u4E00\u81F4\uFF0C\u6240\u4EE5\u4E86\u89E3\u5C31\u597D\u3002\u5982\u679C\u6267\u884C\u4EE5\u4E0A\u4E24\u4E2A\u547D\u4EE4\u62A5\u9519\uFF0C\u90A3\u662F\u56E0\u4E3A <code>whatis</code> \u6570\u636E\u5E93\u6CA1\u6709\u5EFA\u7ACB\u3002\u53EA\u8981\u624B\u5DE5\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u91CD\u65B0\u5EFA\u7ACB <code>whatis</code> \u6570\u636E\u5E93\u5373\u53EF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># makewhatis</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="custom-container info"><p class="custom-container-title">\u8865\u5145</p><p>\u4E0D\u8FC7 Linux \u7684\u547D\u4EE4\u5F88\u6709\u610F\u601D\uFF1A</p><blockquote><p>\u60F3\u77E5\u9053\u8FD9\u4E2A\u547D\u4EE4\u662F\u5E72\u4EC0\u4E48\u7684\uFF0C\u53EF\u4EE5\u6267\u884C <code>whatis</code> \u547D\u4EE4\uFF1B</p><p>\u60F3\u77E5\u9053\u547D\u4EE4\u5728\u54EA\u91CC\uFF0C\u53EF\u4EE5\u6267\u884C <code>whereis</code> \u547D\u4EE4\uFF1B</p><p>\u60F3\u77E5\u9053\u5F53\u524D\u767B\u5F55\u7528\u6237\u662F\u8C01\uFF0C\u53EF\u4EE5\u6267\u884C <code>whoami</code> \u547D\u4EE4\u3002</p></blockquote></div><h2 id="info-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#info-\u547D\u4EE4" aria-hidden="true">#</a> info \u547D\u4EE4</h2><p><code>info</code> \u547D\u4EE4\uFF0C\u4E5F\u53EF\u4EE5\u83B7\u53D6\u547D\u4EE4\u7684\u5E2E\u52A9\u3002</p><p>\u82F1\u6587\u539F\u610F\uFF1Aread Info documents</p><p>\u547D\u4EE4\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># info \u547D\u4EE4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u548C <code>man</code> \u547D\u4EE4\u4E0D\u540C\u7684\u662F\uFF0C<code>info</code> \u547D\u4EE4\u7684\u5E2E\u52A9\u4FE1\u606F\u662F\u4E00\u5957\u5B8C\u6574\u7684\u8D44\u6599\uFF0C\u6BCF\u4E2A\u5355\u72EC\u547D\u4EE4\u7684\u5E2E\u52A9\u4FE1\u606F\u53EA\u662F\u8FD9\u5957\u5B8C\u6574\u8D44\u6599\u4E2D\u7684\u67D0\u4E00\u4E2A\u5C0F\u7AE0\u8282\u3002\u5927\u5BB6\u53EF\u4EE5\u628A info \u547D\u4EE4\u5E2E\u52A9\u4FE1\u606F\u770B\u6210\u4E00\u90E8\u72EC\u7ACB\u7684\u7535\u5B50\u4E66\uFF0C\u6240\u4EE5\u6BCF\u4E2A\u547D\u4EE4\u7684\u5E2E\u52A9\u4FE1\u606F\u90FD\u4F1A\u548C\u4E66\u7C4D\u4E00\u6837\uFF0C\u62E5\u6709\u7AE0\u8282\u7F16\u53F7\u3002\u4F8B\u5982\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># info ls</span>
Next: <span class="token function">dir</span> invocation,  Up: Directory listing

<span class="token number">10.1</span> \u2018ls\u2019: List directory contents
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>

The \u2018ls\u2019 program lists information about files <span class="token punctuation">(</span>of any type, including
directories<span class="token punctuation">)</span>.  Options and <span class="token function">file</span> arguments can be intermixed arbitrarily,
as usual.
<span class="token punctuation">..</span>.\u7701\u7565\u90E8\u5206\u5185\u5BB9<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C<code>ls</code> \u547D\u4EE4\u7684\u5E2E\u52A9\u53EA\u662F\u6574\u4E2A <code>info</code> \u5E2E\u52A9\u4FE1\u606F\u4E2D\u7684\u7B2C 10.1 \u8282\u3002\u5728\u8FD9\u4E2A\u5E2E\u52A9\u4FE1\u606F\u4E2D\uFF0C\u5982\u679C\u6807\u9898\u7684\u524D\u9762\u6709\u201C*\u201D\u7B26\u53F7\uFF0C\u5219\u4EE3\u8868\u8FD9\u662F\u4E00\u4E2A\u53EF\u4EE5\u8FDB\u5165\u67E5\u770B\u8BE6\u7EC6\u4FE1\u606F\u7684\u5B50\u9875\u9762\uFF0C\u53EA\u8981\u6309\u4E0B\u56DE\u8F66\u952E\u5C31\u53EF\u4EE5\u8FDB\u5165\u3002\u4F8B\u5982\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># info ls</span>
<span class="token punctuation">..</span>.\u7701\u7565\u90E8\u5206\u5185\u5BB9<span class="token punctuation">..</span>.
   Also see *note Common options::.

* Menu:

* Which files are listed::
* What information is listed::
* Sorting the output::
* Details about version sort::
* General output formatting::
* Formatting <span class="token function">file</span> timestamps::
* Formatting the <span class="token function">file</span> names::
<span class="token punctuation">..</span>.\u7701\u7565\u90E8\u5206\u5185\u5BB9<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u5728 <code>ls</code> \u547D\u4EE4\u7684 <code>info</code> \u5E2E\u52A9\u4FE1\u606F\u4E2D\u53EF\u4EE5\u67E5\u770B\u8BE6\u7EC6\u7684\u5B50\u9875\u9762\u7684\u6807\u9898\u3002<code>info</code> \u547D\u4EE4\u4E3B\u8981\u662F\u9760\u5FEB\u6377\u952E\u6765\u8FDB\u884C\u64CD\u4F5C\u7684\uFF0C\u6211\u4EEC\u6765\u770B\u770B\u5E38\u7528\u7684\u5FEB\u6377\u952E\uFF0C\u5982\u88686-2 \u6240\u793A\u3002</p><p><strong>\u88686-2 <u>info \u547D\u4EE4\u7684\u5E38\u7528\u5FEB\u6377\u952E</u></strong></p><table><thead><tr><th>\u5FEB\u6377\u952E</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td>\u4E0A\u7BAD\u5934</td><td>\u5411\u4E0A\u79FB\u52A8\u4E00\u884C</td></tr><tr><td>\u4E0B\u7BAD\u5934</td><td>\u5411\u4E0B\u79FB\u52A8\u4E00\u884C</td></tr><tr><td>PgUp</td><td>\u5411\u4E0A\u7FFB\u4E00\u9875</td></tr><tr><td>PgDn</td><td>\u5411\u4E0B\u7FFB\u4E00\u9875</td></tr><tr><td>Tab</td><td>\u5728\u6709\u201C*\u201D\u7B26\u53F7\u7684\u8282\u70B9\u8FDB\u884C\u5207\u6362</td></tr><tr><td>\u56DE\u8F66</td><td>\u8FDB\u5165\u6709\u201C*\u201D\u7B26\u53F7\u7684\u5B50\u9875\u9762\uFF0C\u67E5\u770B\u8BE6\u7EC6\u5E2E\u52A9\u4FE1\u606F</td></tr><tr><td>u</td><td>\u8FDB\u5165\u4E0A\u4E00\u5C42\u4FE1\u606F\uFF08\u56DE\u8F66\u662F\u8FDB\u5165\u4E0B\u4E00\u5C42\u4FE1\u606F\uFF09</td></tr><tr><td>n</td><td>\u8FDB\u5165\u4E0B\u4E00\u5C0F\u8282\u4FE1\u606F</td></tr><tr><td>p</td><td>\u8FDB\u5165\u4E0A\u4E00\u5C0F\u8282\u4FE1\u606F</td></tr><tr><td>?</td><td>\u67E5\u770B\u5E2E\u52A9\u4FE1\u606F</td></tr><tr><td>q</td><td>\u9000\u51FA info \u4FE1\u606F</td></tr></tbody></table><p>\u8FD9\u662F\u5E38\u7528\u7684\u5FEB\u6377\u952E\uFF0C\u5176\u4ED6\u5FEB\u6377\u952E\u53EF\u4EE5\u4F7F\u7528\u201C?\u201D\u5FEB\u6377\u952E\u67E5\u770B\u3002</p><h2 id="help-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#help-\u547D\u4EE4" aria-hidden="true">#</a> help \u547D\u4EE4</h2><p><code>help</code> \u547D\u4EE4\uFF0C\u662F\u975E\u5E38\u7B80\u5355\u4E14\u4E0D\u7ECF\u5E38\u4F7F\u7528\u7684\u5E2E\u52A9\u547D\u4EE4\u3002</p><p>\u56E0\u4E3A <code>help</code> \u53EA\u80FD\u83B7\u53D6 Shell \u5185\u7F6E\u547D\u4EE4\u7684\u5E2E\u52A9\uFF0C\u4F46\u5728 Linux \u4E2D\u7EDD\u5927\u591A\u6570\u547D\u4EE4\u662F\u5916\u90E8\u547D\u4EE4\uFF0C\u6240\u4EE5 <code>help</code> \u547D\u4EE4\u7684\u4F5C\u7528\u975E\u5E38\u6709\u9650\u3002\u800C\u4E14\u5185\u7F6E\u547D\u4EE4\u4E5F\u53EF\u4EE5 \u4F7F\u7528 <code>man</code> \u547D\u4EE4\u83B7\u53D6\u5E2E\u52A9\u3002</p><p>\u547D\u4EE4\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># help \u5185\u7F6E\u547D\u4EE4 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Linux \u4E2D\u6709\u54EA\u4E9B\u547D\u4EE4\u662F\u5185\u7F6E\u547D\u4EE4\u5462\uFF1F\u6211\u4EEC\u53EF\u4EE5\u968F\u610F\u4F7F\u7528 <code>man</code> \u547D\u4EE4\u6765\u67E5\u770B\u4E00\u4E2A\u5185\u7F6E\u547D\u4EE4\u7684\u5E2E\u52A9\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># man help</span>
BASH_BUILTINS<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>            General Commands Manual           BASH_BUILTINS<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

NAME
       bash,  :,  .,  <span class="token punctuation">[</span>, alias, bg, bind, break, builtin, caller, cd, command, compgen, complete, compopt,  continue,  declare,  dirs,  disown,  echo, enable,  eval,  exec, exit, export, false, fc, fg, getopts, hash, help, history, jobs, kill, let, local, logout, mapfile, popd, printf,  pushd, pwd,  read, readonly, return, set, shift, shopt, source, suspend, test, times, trap, true, type, typeset, ulimit, umask, unalias, unset, <span class="token function">wait</span> - <span class="token function">bash</span> built-in commands, see bash<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">..</span>.\u7701\u7565\u90E8\u5206\u5185\u5BB9<span class="token punctuation">..</span>.
<span class="token comment">#\u8FD9\u91CC\u5217\u51FA\u7684\u547D\u4EE4\u5C31\u662F\u6240\u6709\u7684 shell \u5185\u7F6E\u547D\u4EE4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="help-\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#help-\u9009\u9879" aria-hidden="true">#</a> --help \u9009\u9879</h2><p>\u7EDD\u5927\u591A\u6570\u547D\u4EE4\u90FD\u53EF\u4EE5\u4F7F\u7528 <strong>--help</strong> \u9009\u9879\u6765\u67E5\u770B\u5E2E\u52A9\uFF0C\u8FD9\u4E5F\u662F\u4E00\u79CD\u83B7\u53D6\u5E2E\u52A9\u7684\u65B9\u6CD5\u3002\u4F8B\u5982\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls --help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FD9\u79CD\u65B9\u6CD5\u975E\u5E38\u7B80\u5355\uFF0C\u8F93\u51FA\u7684\u5E2E\u52A9\u4FE1\u606F\u57FA\u672C\u4E0A\u662F <code>man</code> \u547D\u4EE4\u7684\u4FE1\u606F\u7B80\u8981\u7248\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5BF9\u4E8E\u8FD9 4 \u4E2D\u5E38\u89C1\u7684\u83B7\u53D6\u5E2E\u52A9\u7684\u65B9\u6CD5\uFF0C\u5927\u5BB6\u53EF\u4EE5\u6309\u7167\u81EA\u5DF1\u7684\u4E60\u60EF\u4EFB\u610F\u4F7F\u7528\u3002</p></div>`,47);function t(p,o){return e}var c=n(a,[["render",t]]);export{c as default};
