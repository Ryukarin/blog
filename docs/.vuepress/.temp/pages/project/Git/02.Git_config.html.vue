<template><h2 id="git-配置" tabindex="-1"><a class="header-anchor" href="#git-配置" aria-hidden="true">#</a> Git 配置</h2>
<p>Git 提供了一个叫做 <code>git config</code> 的工具，专门用来配置或读取相应的工作环境变量。</p>
<p>这些环境变量，决定了 Git 在各个环节的具体工作方式和行为。这些变量可以存放在以下三个不同的地方：</p>
<ul>
<li><code>/etc/gitconfig</code> 文件：系统中对所有用户都普遍适用的配置。若使用 git config 时用 --system 选项，读写的就是这个文件。</li>
<li><code>~/.gitconfig</code> 文件：用户目录下的配置文件只适用于该用户。若使用 git config 时用 --global 选项，读写的就是这个文件。</li>
<li>当前项目的 Git 目录中的配置文件（也就是工作目录中的 <code>.git/config</code> 文件）：这里的配置仅仅针对当前项目有效。每一个级别的配置都会覆盖上层的相同配置，所以 <code>.git/config</code> 里的配置会覆盖 <code>/etc/gitconfig</code> 中的同名变量。</li>
</ul>
<p>此外，Git 还会尝试找寻 <code>/etc/gitconfig</code> 文件，只不过看当初 Git 装在什么目录，就以此作为根目录来定位。</p>
<h3 id="用户信息" tabindex="-1"><a class="header-anchor" href="#用户信息" aria-hidden="true">#</a> 用户信息</h3>
<p>配置个人的用户名称和电子邮件地址：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> config --global user.name <span class="token string">"runoob"</span>
$ <span class="token function">git</span> config --global user.email test@runoob.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果用了 <strong>--global</strong> 选项，那么更改的配置文件就是位于你用户主目录下的那个，以后你所有的项目都会默认使用这里配置的用户信息。</p>
<p>如果要在某个特定的项目中使用其他名字或者电邮，只要去掉 --global 选项重新配置即可，新的设定保存在当前项目的 <code>.git/config</code> 文件里。</p>
<h3 id="文本编辑器" tabindex="-1"><a class="header-anchor" href="#文本编辑器" aria-hidden="true">#</a> 文本编辑器</h3>
<p>设置Git默认使用的文本编辑器，一般可能会是 Vi 或者 Vim。如果你有其他偏好，比如 Emacs 的话，可以重新设置：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> config --global core.editor emacs
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="差异分析工具" tabindex="-1"><a class="header-anchor" href="#差异分析工具" aria-hidden="true">#</a> 差异分析工具</h3>
<p>还有一个比较常用的是，在解决合并冲突时使用哪种差异分析工具。比如要改用 vimdiff 的话：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> config --global merge.tool vimdiff
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Git 可以理解 kdiff3，tkdiff，meld，xxdiff，emerge，vimdiff，gvimdiff，ecmerge，和 opendiff 等合并工具的输出信息。</p>
<p>当然，你也可以指定使用自己开发的工具。</p>
<h3 id="查看配置信息" tabindex="-1"><a class="header-anchor" href="#查看配置信息" aria-hidden="true">#</a> 查看配置信息</h3>
<p>要检查已有的配置信息，可以使用 <code>git config --list</code> 命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> config --list
http.postbuffer<span class="token operator">=</span>2M
user.name<span class="token operator">=</span>runoob
user.email<span class="token operator">=</span>test@runoob.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>有时候会看到重复的变量名，那就说明它们来自不同的配置文件（比如 <code>/etc/gitconfig</code> 和 <code>~/.gitconfig</code>），不过最终 Git 实际采用的是最后一个。</p>
<p>这些配置我们也可以在 <code>~/.gitconfig</code> 或 <code>/etc/gitconfig</code> 看到，如下所示：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">vim</span> ~/.gitconfig 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>显示内容如下所示：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>http<span class="token punctuation">]</span>
    postBuffer <span class="token operator">=</span> 2M
<span class="token punctuation">[</span>user<span class="token punctuation">]</span>
    name <span class="token operator">=</span> runoob
    email <span class="token operator">=</span> test@runoob.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>也可以直接查阅某个环境变量的设定，只要把特定的名字跟在后面即可，像这样：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> config user.name
runoob
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></template>
