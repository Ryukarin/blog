<template><h2 id="git-创建仓库" tabindex="-1"><a class="header-anchor" href="#git-创建仓库" aria-hidden="true">#</a> Git 创建仓库</h2>
<p>本章节我们将为大家介绍如何创建一个 Git 仓库。</p>
<p>你可以使用一个已经存在的目录作为 Git 仓库。</p>
<h3 id="git-init" tabindex="-1"><a class="header-anchor" href="#git-init" aria-hidden="true">#</a> git init</h3>
<p>Git 使用 <code>git init</code> 命令来初始化一个 Git 仓库，Git 的很多命令都需要在 Git 的仓库中运行，所以 <code>git init</code> 是使用 Git 的第一个命令。</p>
<p>在执行完成 <code>git init</code> 命令后，Git 仓库会生成一个 <code>.git</code> 目录，该目录包含了资源的所有元数据，其他的项目目录保持不变。</p>
<ul>
<li>使用方法</li>
</ul>
<p>使用当前目录作为Git仓库，我们只需使它初始化。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>该命令执行完后会在当前目录生成一个 .git 目录。</p>
<p>使用我们指定目录作为 Git 仓库。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> init newrepo
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>初始化后，会在 newrepo 目录下会出现一个名为 .git 的目录，所有 Git 需要的数据和资源都存放在这个目录中。</p>
<p>如果当前目录下有几个文件想要纳入版本控制，需要先用 <code>git add</code> 命令告诉 Git 开始对这些文件进行跟踪，然后提交：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> *.c
$ <span class="token function">git</span> <span class="token function">add</span> README
$ <span class="token function">git</span> commit -m <span class="token string">'初始化项目版本'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>以上命令将目录下以 .c 结尾及 README 文件提交到仓库中。</p>
<div class="custom-container tip"><p class="custom-container-title">注</p>
<p>在 Linux 系统中，commit 信息使用单引号 <strong>'</strong>，Windows 系统，commit 信息使用双引号 <strong>&quot;</strong>。</p>
<p>所以在 git bash 中 <code>git commit -m '提交说明'</code> 这样是可以的，在 Windows 命令行中就要使用双引号 <code>git commit -m &quot;提交说明&quot;</code>。</p>
</div>
<h3 id="git-clone" tabindex="-1"><a class="header-anchor" href="#git-clone" aria-hidden="true">#</a> git clone</h3>
<p>我们使用 <code>git clone</code> 从现有 Git 仓库中拷贝项目。</p>
<p>克隆仓库的命令格式为：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone <span class="token operator">&lt;</span>repo<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果我们需要克隆到指定的目录，可以使用以下命令格式：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> clone <span class="token operator">&lt;</span>repo<span class="token operator">></span> <span class="token operator">&lt;</span>directory<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>参数说明：</strong></p>
<ul>
<li><strong>repo</strong>：Git 仓库。</li>
<li><strong>directory</strong>：本地目录。</li>
</ul>
<p>比如，要克隆 Ruby 语言的 Git 代码仓库 Grit，可以用下面的命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> clone git://github.com/schacon/grit.git
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>执行该命令后，会在当前目录下创建一个名为 <code>grit</code> 的目录，其中包含一个 <code> .git</code> 的目录，用于保存下载下来的所有版本记录。</p>
<p>如果要自己定义要新建的项目目录名称，可以在上面的命令末尾指定新的名字：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> clone git://github.com/schacon/grit.git mygrit
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3>
<p>git 的设置使用 <code>git config</code> 命令。</p>
<p>显示当前的 git 配置信息：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> config --list
credential.helper<span class="token operator">=</span>osxkeychain
core.repositoryformatversion<span class="token operator">=</span><span class="token number">0</span>
core.filemode<span class="token operator">=</span>true
core.bare<span class="token operator">=</span>false
core.logallrefupdates<span class="token operator">=</span>true
core.ignorecase<span class="token operator">=</span>true
core.precomposeunicode<span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>编辑 git 配置文件:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> config -e
<span class="token comment"># 针对当前仓库 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>或者：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> config -e --global
<span class="token comment"># 针对系统上所有仓库</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>设置提交代码时的用户信息：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> config --global user.name <span class="token string">"runoob"</span>
$ <span class="token function">git</span> config --global user.email test@runoob.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果去掉 <strong>--global</strong> 参数只对当前仓库有效。</p>
</template>
