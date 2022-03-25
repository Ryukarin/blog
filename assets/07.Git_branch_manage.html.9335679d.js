import{_ as n,a as s}from"./app.893f8b81.js";const a={},e=s(`<h2 id="git-\u5206\u652F\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#git-\u5206\u652F\u7BA1\u7406" aria-hidden="true">#</a> Git \u5206\u652F\u7BA1\u7406</h2><p>\u51E0\u4E4E\u6BCF\u4E00\u79CD\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\u90FD\u4EE5\u67D0\u79CD\u5F62\u5F0F\u652F\u6301\u5206\u652F\u3002\u4F7F\u7528\u5206\u652F\u610F\u5473\u7740\u4F60\u53EF\u4EE5\u4ECE\u5F00\u53D1\u4E3B\u7EBF\u4E0A\u5206\u79BB\u5F00\u6765\uFF0C\u7136\u540E\u5728\u4E0D\u5F71\u54CD\u4E3B\u7EBF\u7684\u540C\u65F6\u7EE7\u7EED\u5DE5\u4F5C\u3002</p><p>\u6709\u4EBA\u628A Git \u7684\u5206\u652F\u6A21\u578B\u79F0\u4E3A<strong>\u5FC5\u6740\u6280\u7279\u6027</strong>\uFF0C\u800C\u6B63\u662F\u56E0\u4E3A\u5B83\uFF0C\u5C06 <strong>Git</strong> \u4ECE\u7248\u672C\u63A7\u5236\u7CFB\u7EDF\u5BB6\u65CF\u91CC\u533A\u5206\u51FA\u6765\u3002</p><p>\u521B\u5EFA\u5206\u652F\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token punctuation">(</span>branchname<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5207\u6362\u5206\u652F\u547D\u4EE4:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token punctuation">(</span>branchname<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5F53\u4F60\u5207\u6362\u5206\u652F\u7684\u65F6\u5019\uFF0CGit \u4F1A\u7528\u8BE5\u5206\u652F\u7684\u6700\u540E\u63D0\u4EA4\u7684\u5FEB\u7167\u66FF\u6362\u4F60\u7684\u5DE5\u4F5C\u76EE\u5F55\u7684\u5185\u5BB9\uFF0C \u6240\u4EE5\u591A\u4E2A\u5206\u652F\u4E0D\u9700\u8981\u591A\u4E2A\u76EE\u5F55\u3002</p><p>\u5408\u5E76\u5206\u652F\u547D\u4EE4:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> merge 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4F60\u53EF\u4EE5\u591A\u6B21\u5408\u5E76\u5230\u7EDF\u4E00\u5206\u652F\uFF0C \u4E5F\u53EF\u4EE5\u9009\u62E9\u5728\u5408\u5E76\u4E4B\u540E\u76F4\u63A5\u5220\u9664\u88AB\u5E76\u5165\u7684\u5206\u652F\u3002</p><p>\u5F00\u59CB\u524D\u6211\u4EEC\u5148\u521B\u5EFA\u4E00\u4E2A\u6D4B\u8BD5\u76EE\u5F55\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> gitdemo
$ <span class="token builtin class-name">cd</span> gitdemo/
$ <span class="token function">git</span> init
Initialized empty Git repository<span class="token punctuation">..</span>.
$ <span class="token function">touch</span> README
$ <span class="token function">git</span> <span class="token function">add</span> README
$ <span class="token function">git</span> commit -m <span class="token string">&#39;\u7B2C\u4E00\u6B21\u7248\u672C\u63D0\u4EA4&#39;</span>
<span class="token punctuation">[</span>master <span class="token punctuation">(</span>root-commit<span class="token punctuation">)</span> 3b58100<span class="token punctuation">]</span> \u7B2C\u4E00\u6B21\u7248\u672C\u63D0\u4EA4
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">0</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">0</span> deletions<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> README
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="\u5217\u51FA\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5217\u51FA\u5206\u652F" aria-hidden="true">#</a> \u5217\u51FA\u5206\u652F</h3><p>\u5217\u51FA\u5206\u652F\u57FA\u672C\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6CA1\u6709\u53C2\u6570\u65F6\uFF0C<code>git branch</code> \u4F1A\u5217\u51FA\u4F60\u5728\u672C\u5730\u7684\u5206\u652F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> branch
* master
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6B64\u4F8B\u7684\u610F\u601D\u5C31\u662F\uFF0C\u6211\u4EEC\u6709\u4E00\u4E2A\u53EB\u505A <strong>master</strong> \u7684\u5206\u652F\uFF0C\u5E76\u4E14\u8BE5\u5206\u652F\u662F\u5F53\u524D\u5206\u652F\u3002</p><p>\u5F53\u4F60\u6267\u884C <code>git init</code> \u7684\u65F6\u5019\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B Git \u5C31\u4F1A\u4E3A\u4F60\u521B\u5EFA <strong>master</strong> \u5206\u652F\u3002</p><p>\u5982\u679C\u6211\u4EEC\u8981\u624B\u52A8\u521B\u5EFA\u4E00\u4E2A\u5206\u652F\u3002\u6267\u884C <code>git branch (branchname)</code> \u5373\u53EF\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> branch testing
$ <span class="token function">git</span> branch
* master
  testing
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u73B0\u5728\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u6709\u4E86\u4E00\u4E2A\u65B0\u5206\u652F <strong>testing</strong>\u3002</p><p>\u5F53\u4F60\u4EE5\u6B64\u65B9\u5F0F\u5728\u4E0A\u6B21\u63D0\u4EA4\u66F4\u65B0\u4E4B\u540E\u521B\u5EFA\u4E86\u65B0\u5206\u652F\uFF0C\u5982\u679C\u540E\u6765\u53C8\u6709\u66F4\u65B0\u63D0\u4EA4\uFF0C \u7136\u540E\u53C8\u5207\u6362\u5230\u4E86 <strong>testing</strong> \u5206\u652F\uFF0CGit \u5C06\u8FD8\u539F\u4F60\u7684\u5DE5\u4F5C\u76EE\u5F55\u5230\u4F60\u521B\u5EFA\u5206\u652F\u65F6\u5019\u7684\u6837\u5B50\u3002</p><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u5C06\u6F14\u793A\u5982\u4F55\u5207\u6362\u5206\u652F\uFF0C\u6211\u4EEC\u7528 <code>git checkout (branch)</code> \u5207\u6362\u5230\u6211\u4EEC\u8981\u4FEE\u6539\u7684\u5206\u652F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">ls</span>
README
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;runoob.com&#39;</span> <span class="token operator">&gt;</span> test.txt
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
$ <span class="token function">git</span> commit -m <span class="token string">&#39;add test.txt&#39;</span>
<span class="token punctuation">[</span>master 3e92c19<span class="token punctuation">]</span> <span class="token function">add</span> test.txt
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> test.txt
$ <span class="token function">ls</span>
README        test.txt
$ <span class="token function">git</span> checkout testing
Switched to branch <span class="token string">&#39;testing&#39;</span>
$ <span class="token function">ls</span>
README
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u5F53\u6211\u4EEC\u5207\u6362\u5230 <strong>testing</strong> \u5206\u652F\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u6DFB\u52A0\u7684\u65B0\u6587\u4EF6 test.txt \u88AB\u79FB\u9664\u4E86\u3002\u5207\u6362\u56DE <strong>master</strong> \u5206\u652F\u7684\u65F6\u5019\uFF0C\u5B83\u4EEC\u6709\u91CD\u65B0\u51FA\u73B0\u4E86\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout master
Switched to branch <span class="token string">&#39;master&#39;</span>
$ <span class="token function">ls</span>
README        test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528 <code>git checkout -b (branchname)</code> \u547D\u4EE4\u6765\u521B\u5EFA\u65B0\u5206\u652F\u5E76\u7ACB\u5373\u5207\u6362\u5230\u8BE5\u5206\u652F\u4E0B\uFF0C\u4ECE\u800C\u5728\u8BE5\u5206\u652F\u4E2D\u64CD\u4F5C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout -b newtest
Switched to a new branch <span class="token string">&#39;newtest&#39;</span>
$ <span class="token function">git</span> <span class="token function">rm</span> test.txt 
<span class="token function">rm</span> <span class="token string">&#39;test.txt&#39;</span>
$ <span class="token function">ls</span>
README
$ <span class="token function">touch</span> runoob.php
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
$ <span class="token function">git</span> commit -am <span class="token string">&#39;removed test.txt\u3001add runoob.php&#39;</span>
<span class="token punctuation">[</span>newtest c1501a2<span class="token punctuation">]</span> removed test.txt\u3001add runoob.php
 <span class="token number">2</span> files changed, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> runoob.php
 delete mode <span class="token number">100644</span> test.txt
$ <span class="token function">ls</span>
README        runoob.php
$ <span class="token function">git</span> checkout master
Switched to branch <span class="token string">&#39;master&#39;</span>
$ <span class="token function">ls</span>
README        test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u5982\u4F60\u6240\u89C1\uFF0C\u6211\u4EEC\u521B\u5EFA\u4E86\u4E00\u4E2A\u5206\u652F\uFF0C\u5728\u8BE5\u5206\u652F\u7684\u4E0A\u79FB\u9664\u4E86\u4E00\u4E9B\u6587\u4EF6 test.txt\uFF0C\u5E76\u6DFB\u52A0\u4E86 runoob.php \u6587\u4EF6\uFF0C\u7136\u540E\u5207\u6362\u56DE\u6211\u4EEC\u7684\u4E3B\u5206\u652F\uFF0C\u5220\u9664\u7684 test.txt \u6587\u4EF6\u53C8\u56DE\u6765\u4E86\uFF0C\u4E14\u65B0\u589E\u52A0\u7684 runoob.php \u4E0D\u5B58\u5728\u4E3B\u5206\u652F\u4E2D\u3002</p><p>\u4F7F\u7528\u5206\u652F\u5C06\u5DE5\u4F5C\u5207\u5206\u5F00\u6765\uFF0C\u4ECE\u800C\u8BA9\u6211\u4EEC\u80FD\u591F\u5728\u4E0D\u540C\u5F00\u53D1\u73AF\u5883\u4E2D\u505A\u4E8B\uFF0C\u5E76\u6765\u56DE\u5207\u6362\u3002</p><h3 id="\u5220\u9664\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u5206\u652F" aria-hidden="true">#</a> \u5220\u9664\u5206\u652F</h3><p>\u5220\u9664\u5206\u652F\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch -d <span class="token punctuation">(</span>branchname<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4F8B\u5982\u6211\u4EEC\u8981\u5220\u9664 testing \u5206\u652F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> branch
* master
  testing
$ <span class="token function">git</span> branch -d testing
Deleted branch testing <span class="token punctuation">(</span>was 85fc7e7<span class="token punctuation">)</span>.
$ <span class="token function">git</span> branch
* master
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u5206\u652F\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F\u5408\u5E76" aria-hidden="true">#</a> \u5206\u652F\u5408\u5E76</h3><p>\u4E00\u65E6\u67D0\u5206\u652F\u6709\u4E86\u72EC\u7ACB\u5185\u5BB9\uFF0C\u4F60\u7EC8\u7A76\u4F1A\u5E0C\u671B\u5C06\u5B83\u5408\u5E76\u56DE\u5230\u4F60\u7684\u4E3B\u5206\u652F\u3002 \u4F60\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5C06\u4EFB\u4F55\u5206\u652F\u5408\u5E76\u5230\u5F53\u524D\u5206\u652F\u4E2D\u53BB\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> merge
$ <span class="token function">git</span> branch
* master
  newtest
$ <span class="token function">ls</span>
README        test.txt
$ <span class="token function">git</span> merge newtest
Updating 3e92c19<span class="token punctuation">..</span>c1501a2
Fast-forward
 runoob.php <span class="token operator">|</span> <span class="token number">0</span>
 test.txt   <span class="token operator">|</span> <span class="token number">1</span> -
 <span class="token number">2</span> files changed, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> runoob.php
 delete mode <span class="token number">100644</span> test.txt
$ <span class="token function">ls</span>
README        runoob.php
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u4EE5\u4E0A\u5B9E\u4F8B\u4E2D\u6211\u4EEC\u5C06 newtest \u5206\u652F\u5408\u5E76\u5230\u4E3B\u5206\u652F\u53BB\uFF0Ctest.txt \u6587\u4EF6\u88AB\u5220\u9664\u3002</p><p>\u5408\u5E76\u5B8C\u540E\u5C31\u53EF\u4EE5\u5220\u9664\u5206\u652F:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> branch -d newtest
Deleted branch newtest <span class="token punctuation">(</span>was c1501a2<span class="token punctuation">)</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5220\u9664\u540E\uFF0C \u5C31\u53EA\u5269\u4E0B master \u5206\u652F\u4E86\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> branch
* master
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u5408\u5E76\u51B2\u7A81" tabindex="-1"><a class="header-anchor" href="#\u5408\u5E76\u51B2\u7A81" aria-hidden="true">#</a> \u5408\u5E76\u51B2\u7A81</h3><p>\u5408\u5E76\u5E76\u4E0D\u4EC5\u4EC5\u662F\u7B80\u5355\u7684\u6587\u4EF6\u6DFB\u52A0\u3001\u79FB\u9664\u7684\u64CD\u4F5C\uFF0CGit \u4E5F\u4F1A\u5408\u5E76\u4FEE\u6539\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> branch
* master
$ <span class="token function">cat</span> runoob.php
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u9996\u5148\uFF0C\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A\u53EB\u505A change_site \u7684\u5206\u652F\uFF0C\u5207\u6362\u8FC7\u53BB\uFF0C\u6211\u4EEC\u5C06 runoob.php \u5185\u5BB9\u6539\u4E3A:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&lt;</span>?php
<span class="token builtin class-name">echo</span> <span class="token string">&#39;runoob&#39;</span><span class="token punctuation">;</span>
?<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u521B\u5EFA change_site \u5206\u652F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout -b change_site
Switched to a new branch <span class="token string">&#39;change_site&#39;</span>
$ <span class="token function">vim</span> runoob.php
$ <span class="token function">head</span> -3 runoob.php
<span class="token operator">&lt;</span>?php
<span class="token builtin class-name">echo</span> <span class="token string">&#39;runoob&#39;</span><span class="token punctuation">;</span>
?<span class="token operator">&gt;</span>
$ <span class="token function">git</span> commit -am <span class="token string">&#39;changed the runoob.php&#39;</span>
<span class="token punctuation">[</span>change_site <span class="token number">7774248</span><span class="token punctuation">]</span> changed the runoob.php
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">3</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5C06\u4FEE\u6539\u7684\u5185\u5BB9\u63D0\u4EA4\u5230 change_site \u5206\u652F\u4E2D\u3002 \u73B0\u5728\uFF0C\u5047\u5982\u5207\u6362\u56DE master \u5206\u652F\u6211\u4EEC\u53EF\u4EE5\u770B\u5185\u5BB9\u6062\u590D\u5230\u6211\u4EEC\u4FEE\u6539\u524D\u7684(\u7A7A\u6587\u4EF6\uFF0C\u6CA1\u6709\u4EE3\u7801)\uFF0C\u6211\u4EEC\u518D\u6B21\u4FEE\u6539 runoob.php \u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> checkout master
Switched to branch <span class="token string">&#39;master&#39;</span>
$ <span class="token function">cat</span> runoob.php
$ <span class="token function">vim</span> runoob.php    <span class="token comment"># \u4FEE\u6539\u5185\u5BB9\u5982\u4E0B</span>
$ <span class="token function">cat</span> runoob.php
<span class="token operator">&lt;</span>?php
<span class="token builtin class-name">echo</span> <span class="token number">1</span><span class="token punctuation">;</span>
?<span class="token operator">&gt;</span>
$ <span class="token function">git</span> <span class="token function">diff</span>
<span class="token function">diff</span> --git a/runoob.php b/runoob.php
index e69de29<span class="token punctuation">..</span>ac60739 <span class="token number">100644</span>
--- a/runoob.php
+++ b/runoob.php
@@ -0,0 +1,3 @@
+<span class="token operator">&lt;</span>?php
+echo <span class="token number">1</span><span class="token punctuation">;</span>
+?<span class="token operator">&gt;</span>
$ <span class="token function">git</span> commit -am <span class="token string">&#39;\u4FEE\u6539\u4EE3\u7801&#39;</span>
<span class="token punctuation">[</span>master c68142b<span class="token punctuation">]</span> \u4FEE\u6539\u4EE3\u7801
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">3</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u73B0\u5728\u8FD9\u4E9B\u6539\u53D8\u5DF2\u7ECF\u8BB0\u5F55\u5230\u6211\u7684 &quot;master&quot; \u5206\u652F\u4E86\u3002\u63A5\u4E0B\u6765\u6211\u4EEC\u5C06 &quot;change_site&quot; \u5206\u652F\u5408\u5E76\u8FC7\u6765\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> merge change_site
Auto-merging runoob.php
CONFLICT <span class="token punctuation">(</span>content<span class="token punctuation">)</span>: Merge conflict <span class="token keyword">in</span> runoob.php
Automatic merge failed<span class="token punctuation">;</span> fix conflicts and <span class="token keyword">then</span> commit the result.

$ <span class="token function">cat</span> runoob.php     <span class="token comment"># \u4EE3\u5F00\u6587\u4EF6\uFF0C\u770B\u5230\u51B2\u7A81\u5185\u5BB9</span>
<span class="token operator">&lt;</span>?php
<span class="token operator">&lt;&lt;&lt;</span><span class="token operator">&lt;&lt;&lt;</span><span class="token operator">&lt;</span> HEAD
<span class="token builtin class-name">echo</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;runoob&#39;</span><span class="token punctuation">;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> change_site
?<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u6211\u4EEC\u5C06\u524D\u4E00\u4E2A\u5206\u652F\u5408\u5E76\u5230 master \u5206\u652F\uFF0C\u4E00\u4E2A\u5408\u5E76\u51B2\u7A81\u5C31\u51FA\u73B0\u4E86\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u9700\u8981\u624B\u52A8\u53BB\u4FEE\u6539\u5B83\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">vim</span> runoob.php 
$ <span class="token function">cat</span> runoob.php
<span class="token operator">&lt;</span>?php
<span class="token builtin class-name">echo</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;runoob&#39;</span><span class="token punctuation">;</span>
?<span class="token operator">&gt;</span>
$ <span class="token function">git</span> <span class="token function">diff</span>
<span class="token function">diff</span> --cc runoob.php
index ac60739,b63d7d7<span class="token punctuation">..</span>0000000
--- a/runoob.php
+++ b/runoob.php
@@@ -1,3 -1,3 +1,4 @@@
  <span class="token operator">&lt;</span>?php
 +echo <span class="token number">1</span><span class="token punctuation">;</span>
+ <span class="token builtin class-name">echo</span> <span class="token string">&#39;runoob&#39;</span><span class="token punctuation">;</span>
  ?<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u5728 Git \u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7528 git add \u8981\u544A\u8BC9 Git \u6587\u4EF6\u51B2\u7A81\u5DF2\u7ECF\u89E3\u51B3</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> status -s
UU runoob.php
$ <span class="token function">git</span> <span class="token function">add</span> runoob.php
$ <span class="token function">git</span> status -s
M  runoob.php
$ <span class="token function">git</span> commit
<span class="token punctuation">[</span>master 88afe0e<span class="token punctuation">]</span> Merge branch <span class="token string">&#39;change_site&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u73B0\u5728\u6211\u4EEC\u6210\u529F\u89E3\u51B3\u4E86\u5408\u5E76\u4E2D\u7684\u51B2\u7A81\uFF0C\u5E76\u63D0\u4EA4\u4E86\u7ED3\u679C\u3002</p>`,61);function p(t,c){return e}var r=n(a,[["render",p]]);export{r as default};
