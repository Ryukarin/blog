<template><h2 id="git-分支管理" tabindex="-1"><a class="header-anchor" href="#git-分支管理" aria-hidden="true">#</a> Git 分支管理</h2>
<p>几乎每一种版本控制系统都以某种形式支持分支。使用分支意味着你可以从开发主线上分离开来，然后在不影响主线的同时继续工作。</p>
<p>有人把 Git 的分支模型称为<strong>必杀技特性</strong>，而正是因为它，将 <strong>Git</strong> 从版本控制系统家族里区分出来。</p>
<p>创建分支命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch <span class="token punctuation">(</span>branchname<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>切换分支命令:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token punctuation">(</span>branchname<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>当你切换分支的时候，Git 会用该分支的最后提交的快照替换你的工作目录的内容， 所以多个分支不需要多个目录。</p>
<p>合并分支命令:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> merge 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>你可以多次合并到统一分支， 也可以选择在合并之后直接删除被并入的分支。</p>
<p>开始前我们先创建一个测试目录：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">mkdir</span> gitdemo
$ <span class="token builtin class-name">cd</span> gitdemo/
$ <span class="token function">git</span> init
Initialized empty Git repository<span class="token punctuation">..</span>.
$ <span class="token function">touch</span> README
$ <span class="token function">git</span> <span class="token function">add</span> README
$ <span class="token function">git</span> commit -m <span class="token string">'第一次版本提交'</span>
<span class="token punctuation">[</span>master <span class="token punctuation">(</span>root-commit<span class="token punctuation">)</span> 3b58100<span class="token punctuation">]</span> 第一次版本提交
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">0</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">0</span> deletions<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> README
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="列出分支" tabindex="-1"><a class="header-anchor" href="#列出分支" aria-hidden="true">#</a> 列出分支</h3>
<p>列出分支基本命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>没有参数时，<code>git branch</code> 会列出你在本地的分支。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> branch
* master
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>此例的意思就是，我们有一个叫做 <strong>master</strong> 的分支，并且该分支是当前分支。</p>
<p>当你执行 <code>git init</code> 的时候，默认情况下 Git 就会为你创建 <strong>master</strong> 分支。</p>
<p>如果我们要手动创建一个分支。执行 <code>git branch (branchname)</code> 即可。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> branch testing
$ <span class="token function">git</span> branch
* master
  testing
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>现在我们可以看到，有了一个新分支 <strong>testing</strong>。</p>
<p>当你以此方式在上次提交更新之后创建了新分支，如果后来又有更新提交， 然后又切换到了 <strong>testing</strong> 分支，Git 将还原你的工作目录到你创建分支时候的样子。</p>
<p>接下来我们将演示如何切换分支，我们用 <code>git checkout (branch)</code> 切换到我们要修改的分支。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">ls</span>
README
$ <span class="token builtin class-name">echo</span> <span class="token string">'runoob.com'</span> <span class="token operator">></span> test.txt
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
$ <span class="token function">git</span> commit -m <span class="token string">'add test.txt'</span>
<span class="token punctuation">[</span>master 3e92c19<span class="token punctuation">]</span> <span class="token function">add</span> test.txt
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> test.txt
$ <span class="token function">ls</span>
README        test.txt
$ <span class="token function">git</span> checkout testing
Switched to branch <span class="token string">'testing'</span>
$ <span class="token function">ls</span>
README
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>当我们切换到 <strong>testing</strong> 分支的时候，我们添加的新文件 test.txt 被移除了。切换回 <strong>master</strong> 分支的时候，它们有重新出现了。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> checkout master
Switched to branch <span class="token string">'master'</span>
$ <span class="token function">ls</span>
README        test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>我们也可以使用 <code>git checkout -b (branchname)</code> 命令来创建新分支并立即切换到该分支下，从而在该分支中操作。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> checkout -b newtest
Switched to a new branch <span class="token string">'newtest'</span>
$ <span class="token function">git</span> <span class="token function">rm</span> test.txt 
<span class="token function">rm</span> <span class="token string">'test.txt'</span>
$ <span class="token function">ls</span>
README
$ <span class="token function">touch</span> runoob.php
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
$ <span class="token function">git</span> commit -am <span class="token string">'removed test.txt、add runoob.php'</span>
<span class="token punctuation">[</span>newtest c1501a2<span class="token punctuation">]</span> removed test.txt、add runoob.php
 <span class="token number">2</span> files changed, <span class="token number">1</span> deletion<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> runoob.php
 delete mode <span class="token number">100644</span> test.txt
$ <span class="token function">ls</span>
README        runoob.php
$ <span class="token function">git</span> checkout master
Switched to branch <span class="token string">'master'</span>
$ <span class="token function">ls</span>
README        test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>如你所见，我们创建了一个分支，在该分支的上移除了一些文件 test.txt，并添加了 runoob.php 文件，然后切换回我们的主分支，删除的 test.txt 文件又回来了，且新增加的 runoob.php 不存在主分支中。</p>
<p>使用分支将工作切分开来，从而让我们能够在不同开发环境中做事，并来回切换。</p>
<h3 id="删除分支" tabindex="-1"><a class="header-anchor" href="#删除分支" aria-hidden="true">#</a> 删除分支</h3>
<p>删除分支命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch -d <span class="token punctuation">(</span>branchname<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>例如我们要删除 testing 分支：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> branch
* master
  testing
$ <span class="token function">git</span> branch -d testing
Deleted branch testing <span class="token punctuation">(</span>was 85fc7e7<span class="token punctuation">)</span>.
$ <span class="token function">git</span> branch
* master
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="分支合并" tabindex="-1"><a class="header-anchor" href="#分支合并" aria-hidden="true">#</a> 分支合并</h3>
<p>一旦某分支有了独立内容，你终究会希望将它合并回到你的主分支。 你可以使用以下命令将任何分支合并到当前分支中去：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> merge
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>以上实例中我们将 newtest 分支合并到主分支去，test.txt 文件被删除。</p>
<p>合并完后就可以删除分支:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> branch -d newtest
Deleted branch newtest <span class="token punctuation">(</span>was c1501a2<span class="token punctuation">)</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>删除后， 就只剩下 master 分支了：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> branch
* master
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="合并冲突" tabindex="-1"><a class="header-anchor" href="#合并冲突" aria-hidden="true">#</a> 合并冲突</h3>
<p>合并并不仅仅是简单的文件添加、移除的操作，Git 也会合并修改。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> branch
* master
$ <span class="token function">cat</span> runoob.php
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>首先，我们创建一个叫做 change_site 的分支，切换过去，我们将 runoob.php 内容改为:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">&lt;</span>?php
<span class="token builtin class-name">echo</span> <span class="token string">'runoob'</span><span class="token punctuation">;</span>
?<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>创建 change_site 分支：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> checkout -b change_site
Switched to a new branch <span class="token string">'change_site'</span>
$ <span class="token function">vim</span> runoob.php
$ <span class="token function">head</span> -3 runoob.php
<span class="token operator">&lt;</span>?php
<span class="token builtin class-name">echo</span> <span class="token string">'runoob'</span><span class="token punctuation">;</span>
?<span class="token operator">></span>
$ <span class="token function">git</span> commit -am <span class="token string">'changed the runoob.php'</span>
<span class="token punctuation">[</span>change_site <span class="token number">7774248</span><span class="token punctuation">]</span> changed the runoob.php
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">3</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>将修改的内容提交到 change_site 分支中。 现在，假如切换回 master 分支我们可以看内容恢复到我们修改前的(空文件，没有代码)，我们再次修改 runoob.php 文件。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> checkout master
Switched to branch <span class="token string">'master'</span>
$ <span class="token function">cat</span> runoob.php
$ <span class="token function">vim</span> runoob.php    <span class="token comment"># 修改内容如下</span>
$ <span class="token function">cat</span> runoob.php
<span class="token operator">&lt;</span>?php
<span class="token builtin class-name">echo</span> <span class="token number">1</span><span class="token punctuation">;</span>
?<span class="token operator">></span>
$ <span class="token function">git</span> <span class="token function">diff</span>
<span class="token function">diff</span> --git a/runoob.php b/runoob.php
index e69de29<span class="token punctuation">..</span>ac60739 <span class="token number">100644</span>
--- a/runoob.php
+++ b/runoob.php
@@ -0,0 +1,3 @@
+<span class="token operator">&lt;</span>?php
+echo <span class="token number">1</span><span class="token punctuation">;</span>
+?<span class="token operator">></span>
$ <span class="token function">git</span> commit -am <span class="token string">'修改代码'</span>
<span class="token punctuation">[</span>master c68142b<span class="token punctuation">]</span> 修改代码
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">3</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>现在这些改变已经记录到我的 &quot;master&quot; 分支了。接下来我们将 &quot;change_site&quot; 分支合并过来。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> merge change_site
Auto-merging runoob.php
CONFLICT <span class="token punctuation">(</span>content<span class="token punctuation">)</span>: Merge conflict <span class="token keyword">in</span> runoob.php
Automatic merge failed<span class="token punctuation">;</span> fix conflicts and <span class="token keyword">then</span> commit the result.

$ <span class="token function">cat</span> runoob.php     <span class="token comment"># 代开文件，看到冲突内容</span>
<span class="token operator">&lt;</span>?php
<span class="token operator">&lt;&lt;&lt;</span><span class="token operator">&lt;&lt;&lt;</span><span class="token operator">&lt;</span> HEAD
<span class="token builtin class-name">echo</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
<span class="token builtin class-name">echo</span> <span class="token string">'runoob'</span><span class="token punctuation">;</span>
<span class="token operator">>></span><span class="token operator">>></span><span class="token operator">>></span><span class="token operator">></span> change_site
?<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>我们将前一个分支合并到 master 分支，一个合并冲突就出现了，接下来我们需要手动去修改它。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">vim</span> runoob.php 
$ <span class="token function">cat</span> runoob.php
<span class="token operator">&lt;</span>?php
<span class="token builtin class-name">echo</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token builtin class-name">echo</span> <span class="token string">'runoob'</span><span class="token punctuation">;</span>
?<span class="token operator">></span>
$ <span class="token function">git</span> <span class="token function">diff</span>
<span class="token function">diff</span> --cc runoob.php
index ac60739,b63d7d7<span class="token punctuation">..</span>0000000
--- a/runoob.php
+++ b/runoob.php
@@@ -1,3 -1,3 +1,4 @@@
  <span class="token operator">&lt;</span>?php
 +echo <span class="token number">1</span><span class="token punctuation">;</span>
+ <span class="token builtin class-name">echo</span> <span class="token string">'runoob'</span><span class="token punctuation">;</span>
  ?<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>在 Git 中，我们可以用 git add 要告诉 Git 文件冲突已经解决</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> status -s
UU runoob.php
$ <span class="token function">git</span> <span class="token function">add</span> runoob.php
$ <span class="token function">git</span> status -s
M  runoob.php
$ <span class="token function">git</span> commit
<span class="token punctuation">[</span>master 88afe0e<span class="token punctuation">]</span> Merge branch <span class="token string">'change_site'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>现在我们成功解决了合并中的冲突，并提交了结果。</p>
</template>
