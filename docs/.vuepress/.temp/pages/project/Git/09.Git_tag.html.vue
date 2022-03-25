<template><h2 id="git-标签" tabindex="-1"><a class="header-anchor" href="#git-标签" aria-hidden="true">#</a> Git 标签</h2>
<p>如果你达到一个重要的阶段，并希望永远记住那个特别的提交快照，你可以使用 <code>git tag</code> 给它打上标签。</p>
<p>比如说，我们想为我们的 runoob 项目发布一个&quot;1.0&quot;版本。 我们可以用 <code>git tag -a v1.0</code> 命令给最新一次提交打上（HEAD）&quot;v1.0&quot;的标签。</p>
<p><strong>-a</strong> 选项意为&quot;创建一个带注解的标签&quot;。 不用 -a 选项也可以执行的，但它不会记录这标签是啥时候打的，谁打的，也不会让你添加个标签的注解。 我推荐一直创建带注解的标签。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> tag -a v1.0 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>当你执行 <code>git tag -a</code> 命令时，Git 会打开你的编辑器，让你写一句标签注解，就像你给提交写注解一样。</p>
<p>现在，注意当我们执行 <code>git log --decorate</code> 时，我们可以看到我们的标签了：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> log --decorate
*   d5e9fc2 <span class="token punctuation">(</span>HEAD -<span class="token operator">></span> master<span class="token punctuation">)</span> Merge branch <span class="token string">'change_site'</span>
<span class="token operator">|</span><span class="token punctuation">\</span>  
<span class="token operator">|</span> * <span class="token number">7774248</span> <span class="token punctuation">(</span>change_site<span class="token punctuation">)</span> changed the runoob.php
* <span class="token operator">|</span> c68142b 修改代码
<span class="token operator">|</span>/  
* c1501a2 removed test.txt、add runoob.php
* 3e92c19 <span class="token function">add</span> test.txt
* 3b58100 第一次版本提交
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>如果我们忘了给某个提交打标签，又将它发布了，我们可以给它追加标签。</p>
<p>例如，假设我们发布了提交 85fc7e7(上面实例最后一行)，但是那时候忘了给它打标签。 我们现在也可以：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> tag -a v0.9 85fc7e7
$ <span class="token function">git</span> log --oneline --decorate --graph
*   d5e9fc2 <span class="token punctuation">(</span>HEAD -<span class="token operator">></span> master<span class="token punctuation">)</span> Merge branch <span class="token string">'change_site'</span>
<span class="token operator">|</span><span class="token punctuation">\</span>  
<span class="token operator">|</span> * <span class="token number">7774248</span> <span class="token punctuation">(</span>change_site<span class="token punctuation">)</span> changed the runoob.php
* <span class="token operator">|</span> c68142b 修改代码
<span class="token operator">|</span>/  
* c1501a2 removed test.txt、add runoob.php
* 3e92c19 <span class="token function">add</span> test.txt
* 3b58100 <span class="token punctuation">(</span>tag: v0.9<span class="token punctuation">)</span> 第一次版本提交
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>如果我们要查看所有标签可以使用以下命令：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ git tag
v0.9
v1.0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>指定标签信息命令：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git tag -a &lt;tagname> -m "runoob.com标签"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>PGP签名标签命令：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>git tag -s &lt;tagname> -m "runoob.com标签"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h2>
</template>
