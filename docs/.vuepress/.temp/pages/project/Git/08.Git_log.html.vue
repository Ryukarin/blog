<template><h2 id="git-查看提交历史" tabindex="-1"><a class="header-anchor" href="#git-查看提交历史" aria-hidden="true">#</a> Git 查看提交历史</h2>
<p>Git 提交历史一般常用两个命令：</p>
<ul>
<li><code>git log</code>：查看历史提交记录。</li>
<li><code>git blame &lt;file&gt;</code>：以列表形式查看指定文件的历史修改记录。</li>
</ul>
<h3 id="git-log" tabindex="-1"><a class="header-anchor" href="#git-log" aria-hidden="true">#</a> git log</h3>
<p>在使用 Git 提交了若干更新之后，又或者克隆了某个项目，想回顾下提交历史，我们可以使用 <code>git log</code> 命令查看。</p>
<p>针对我们前一章节的操作，使用 <code>git log</code> 命令列出历史提交记录如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> log
commit d5e9fc2c811e0ca2b2d28506ef7dc14171a207d9 <span class="token punctuation">(</span>HEAD -<span class="token operator">></span> master<span class="token punctuation">)</span>
Merge: c68142b <span class="token number">7774248</span>
Author: runoob <span class="token operator">&lt;</span>test@runoob.com<span class="token operator">></span>
Date:   Fri May <span class="token number">3</span> <span class="token number">15</span>:55:58 <span class="token number">2019</span> +0800
  
    Merge branch <span class="token string">'change_site'</span>
  
commit c68142b562c260c3071754623b08e2657b4c6d5b
Author: runoob <span class="token operator">&lt;</span>test@runoob.com<span class="token operator">></span>
Date:   Fri May <span class="token number">3</span> <span class="token number">15</span>:52:12 <span class="token number">2019</span> +0800
  
    修改代码
  
commit 777424832e714cf65d3be79b50a4717aea51ab69 <span class="token punctuation">(</span>change_site<span class="token punctuation">)</span>
Author: runoob <span class="token operator">&lt;</span>test@runoob.com<span class="token operator">></span>
Date:   Fri May <span class="token number">3</span> <span class="token number">15</span>:49:26 <span class="token number">2019</span> +0800
  
    changed the runoob.php
  
commit c1501a244676ff55e7cccac1ecac0e18cbf6cb00
Author: runoob <span class="token operator">&lt;</span>test@runoob.com<span class="token operator">></span>
Date:   Fri May <span class="token number">3</span> <span class="token number">15</span>:35:32 <span class="token number">2019</span> +0800
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>我们可以用 <strong>--oneline</strong> 选项来查看历史记录的简洁的版本。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> log --oneline
d5e9fc2 <span class="token punctuation">(</span>HEAD -<span class="token operator">></span> master<span class="token punctuation">)</span> Merge branch <span class="token string">'change_site'</span>
c68142b 修改代码
<span class="token number">7774248</span> <span class="token punctuation">(</span>change_site<span class="token punctuation">)</span> changed the runoob.php
c1501a2 removed test.txt、add runoob.php
3e92c19 <span class="token function">add</span> test.txt
3b58100 第一次版本提交
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>这告诉我们的是，此项目的开发历史。</p>
<p>我们还可以用 <strong>--graph</strong> 选项，查看历史中什么时候出现了分支、合并。以下为相同的命令，开启了拓扑图选项：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> log --graph
*   d5e9fc2 <span class="token punctuation">(</span>HEAD -<span class="token operator">></span> master<span class="token punctuation">)</span> Merge branch <span class="token string">'change_site'</span>
<span class="token operator">|</span><span class="token punctuation">\</span>  
<span class="token operator">|</span> * <span class="token number">7774248</span> <span class="token punctuation">(</span>change_site<span class="token punctuation">)</span> changed the runoob.php
* <span class="token operator">|</span> c68142b 修改代码
<span class="token operator">|</span>/  
* c1501a2 removed test.txt、add runoob.php
* 3e92c19 <span class="token function">add</span> test.txt
* 3b58100 第一次版本提交
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>现在我们可以更清楚明了地看到何时工作分叉、又何时归并。</p>
<p>你也可以用 <strong>--reverse</strong> 参数来逆向显示所有日志。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> log --reverse --oneline
3b58100 第一次版本提交
3e92c19 <span class="token function">add</span> test.txt
c1501a2 removed test.txt、add runoob.php
<span class="token number">7774248</span> <span class="token punctuation">(</span>change_site<span class="token punctuation">)</span> changed the runoob.php
c68142b 修改代码
d5e9fc2 <span class="token punctuation">(</span>HEAD -<span class="token operator">></span> master<span class="token punctuation">)</span> Merge branch <span class="token string">'change_site'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>如果只想查找指定用户的提交日志可以使用命令：<code>git log --author</code> , 例如，比方说我们要找 Git 源码中 Linus 提交的部分：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> log --author<span class="token operator">=</span>Linus --oneline -5
81b50f3 Move <span class="token string">'builtin-*'</span> into a <span class="token string">'builtin/'</span> subdirectory
3bb7256 <span class="token function">make</span> <span class="token string">"index-pack"</span> a built-in
377d027 <span class="token function">make</span> <span class="token string">"git pack-redundant"</span> a built-in
b532581 <span class="token function">make</span> <span class="token string">"git unpack-file"</span> a built-in
112dd51 <span class="token function">make</span> <span class="token string">"mktag"</span> a built-in
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>如果你要指定日期，可以执行几个选项：<strong>--since</strong> 和 <strong>--before</strong>，但是你也可以用 <strong>--until</strong> 和 <strong>--after</strong>。</p>
<p>例如，如果我要看 Git 项目中三周前且在四月十八日之后的所有提交，我可以执行这个（我还用了 <strong>--no-merges</strong> 选项以隐藏合并提交）：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> log --oneline --before<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">3</span>.weeks.ago<span class="token punctuation">}</span> --after<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">2010</span>-04-18<span class="token punctuation">}</span> --no-merges
5469e2d Git <span class="token number">1.7</span>.1-rc2
d43427d Documentation/remote-helpers: Fix typos and improve language
272a36b Fixup: Second argument may be any arbitrary string
b6c8d2d Documentation/remote-helpers: Add invocation section
5ce4f4e Documentation/urls: Rewrite to accomodate transport::address
00b84e9 Documentation/remote-helpers: Rewrite description
03aa87e Documentation: Describe other situations where -z affects <span class="token function">git</span> <span class="token function">diff</span>
77bc694 rebase-interactive: silence warning when no commits rewritten
636db2c t3301: <span class="token function">add</span> tests to use --format<span class="token operator">=</span><span class="token string">"%N"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>更多 git log 命令可查看：http://git-scm.com/docs/git-log</p>
<h3 id="git-blame" tabindex="-1"><a class="header-anchor" href="#git-blame" aria-hidden="true">#</a> git blame</h3>
<p>如果要查看指定文件的修改记录可以使用 <code>git blame</code> 命令，格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> blame <span class="token operator">&lt;</span>file<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>git blame 命令是以列表形式显示修改记录，如下实例：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> blame README 
^d2097aa <span class="token punctuation">(</span>tianqixin <span class="token number">2020</span>-08-25 <span class="token number">14</span>:59:25 +0800 <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment"># Runoob Git 测试</span>
db9315b0 <span class="token punctuation">(</span>runoob    <span class="token number">2020</span>-08-25 <span class="token number">16</span>:00:23 +0800 <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment"># 菜鸟教程 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></template>
