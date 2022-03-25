<template><h2 id="git-笔记" tabindex="-1"><a class="header-anchor" href="#git-笔记" aria-hidden="true">#</a> Git 笔记</h2>
<h3 id="git-是什么" tabindex="-1"><a class="header-anchor" href="#git-是什么" aria-hidden="true">#</a> Git 是什么</h3>
<p>Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。</p>
<p>Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。</p>
<p>Git 与常用的版本控制工具 CVS，Subversion 等不同，它采用了分布式版本库的方式，不必服务器端软件支持。</p>
<p>Git 不仅仅是个版本控制系统，它也是个内容管理系统（CMS），工作管理系统等。</p>
<p><img src="@source/IT/assets/dvcs.png" alt="dvcs" loading="lazy"></p>
<h2 id="git-安装配置" tabindex="-1"><a class="header-anchor" href="#git-安装配置" aria-hidden="true">#</a> Git 安装配置</h2>
<p>在使用 Git 前我们需要先安装 Git。Git 目前支持 Linux/Unix、Solaris、Mac 和 Windows 平台上运行。</p>
<p>Git 各平台安装包下载地址为：http://git-scm.com/downloads</p>
<div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>本笔记主要以 Linux 平台为主</p>
<p>Git 的工作需要调用 curl，zlib，openssl，expat，libiconv 等库的代码，所以需要先安装这些依赖工具。</p>
</div>
<p>各 Linux 系统可以使用其安装包管理工具（apt-get、yum 等）进行安装：</p>
<h3 id="debian-ubuntu" tabindex="-1"><a class="header-anchor" href="#debian-ubuntu" aria-hidden="true">#</a> Debian/Ubuntu</h3>
<p>如果你使用的系统是 Debian/Ubuntu， Git 安装命令为：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">apt-get</span> <span class="token function">install</span> libcurl4-gnutls-dev libexpat1-dev gettext libz-dev libssl-dev
$ <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">git</span>
$ <span class="token function">git</span> --version
<span class="token function">git</span> version <span class="token number">1.8</span>.1.2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="centos-redhat" tabindex="-1"><a class="header-anchor" href="#centos-redhat" aria-hidden="true">#</a> Centos/RedHat</h3>
<p>如果你使用的系统是 Centos/RedHat， Git 安装命令为：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ yum <span class="token function">install</span> curl-devel expat-devel gettext-devel openssl-devel zlib-devel
$ yum -y <span class="token function">install</span> git-core
$ <span class="token function">git</span> --version
<span class="token function">git</span> version <span class="token number">1.7</span>.1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="源码安装" tabindex="-1"><a class="header-anchor" href="#源码安装" aria-hidden="true">#</a> 源码安装</h3>
<p>我们也可以在官网下载源码包来安装，最新源码包下载地址：<a href="https://git-scm.com/download" target="_blank" rel="noopener noreferrer">https://git-scm.com/download<ExternalLinkIcon/></a></p>
<p>安装指定系统的依赖包：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">########## Centos/RedHat ##########</span>
$ yum <span class="token function">install</span> curl-devel expat-devel gettext-devel openssl-devel zlib-devel

<span class="token comment">########## Debian/Ubuntu ##########</span>
$ <span class="token function">apt-get</span> <span class="token function">install</span> libcurl4-gnutls-dev libexpat1-dev gettext libz-dev libssl-dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>解压安装下载的源码包：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">wget</span> https://www.kernel.org/pub/software/scm/git/git-2.32.0.tar.gz
$ <span class="token function">tar</span> -zxf git-2.32.0.tar.gz
$ <span class="token builtin class-name">cd</span> git-2.32.0
$ <span class="token function">make</span> <span class="token assign-left variable">prefix</span><span class="token operator">=</span>/usr/local all
$ <span class="token function">sudo</span> <span class="token function">make</span> <span class="token assign-left variable">prefix</span><span class="token operator">=</span>/usr/local <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="git-配置" tabindex="-1"><a class="header-anchor" href="#git-配置" aria-hidden="true">#</a> Git 配置</h2>
<p>Git 提供了一个叫做 <code>git config</code> 的工具，专门用来配置或读取相应的工作环境变量。</p>
<p>这些环境变量，决定了 Git 在各个环节的具体工作方式和行为。这些变量可以存放在以下三个不同的地方：</p>
<ul>
<li><code>/etc/gitconfig</code> 文件：系统中对所有用户都普遍适用的配置。若使用 <code>git config</code> 时用 --system 选项，读写的就是这个文件。</li>
<li><code>~/.gitconfig</code> 文件：用户目录下的配置文件只适用于该用户。若使用 <code>git config</code> 时用 --global 选项，读写的就是这个文件。</li>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="git-工作流程" tabindex="-1"><a class="header-anchor" href="#git-工作流程" aria-hidden="true">#</a> Git 工作流程</h2>
<p>一般工作流程如下：</p>
<ul>
<li>克隆 Git 资源作为工作目录。</li>
<li>在克隆的资源上添加或修改文件。</li>
<li>如果其他人修改了，你可以更新资源。</li>
<li>在提交前查看修改。</li>
<li>提交修改。</li>
<li>在修改完成后，如果发现错误，可以撤回提交并再次修改并提交。</li>
</ul>
<p>下图展示了 Git 的工作流程：</p>
<p><img src="@source/IT/assets/git-process.png" alt="git-process" loading="lazy"></p>
<h2 id="git-工作区、暂存区和版本库" tabindex="-1"><a class="header-anchor" href="#git-工作区、暂存区和版本库" aria-hidden="true">#</a> Git 工作区、暂存区和版本库</h2>
<h3 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h3>
<p>我们先来理解下 Git 工作区、暂存区和版本库概念：</p>
<ul>
<li>
<p>工作区：就是你在电脑里能看到的目录。</p>
</li>
<li>
<p>暂存区：英文叫 stage 或 index。一般存放在<code> .git</code> 目录下的 index 文件（<code>.git/index</code>）中，所以我们把暂存区有时也叫作索引（index）。</p>
</li>
<li>
<p>版本库：工作区有一个隐藏目录 <code>.git</code>，这个不算工作区，而是 Git 的版本库。</p>
</li>
</ul>
<p>下面这个图展示了工作区、版本库中的暂存区和版本库之间的关系：</p>
<p><img src="@source/IT/assets/git_wsb.jpg" alt="git_wsb" loading="lazy"></p>
<ul>
<li>图中左侧为工作区，右侧为版本库。在版本库中标记为 &quot;index&quot; 的区域是暂存区（stage/index），标记为 &quot;master&quot; 的是 master 分支所代表的目录树。</li>
<li>图中我们可以看出此时 &quot;HEAD&quot; 实际是指向 master 分支的一个&quot;游标&quot;。所以图示的命令中出现 HEAD 的地方可以用 master 来替换。</li>
<li>图中的 objects 标识的区域为 Git 的对象库，实际位于 &quot;.git/objects&quot; 目录下，里面包含了创建的各种对象及内容。</li>
<li>当对工作区修改（或新增）的文件执行 <code>git add</code> 命令时，暂存区的目录树被更新，同时工作区修改（或新增）的文件内容被写入到对象库中的一个新的对象中，而该对象的 ID 被记录在暂存区的文件索引中。</li>
<li>当执行提交操作（git commit）时，暂存区的目录树写到版本库（对象库）中，master 分支会做相应的更新。即 master 指向的目录树就是提交时暂存区的目录树。</li>
<li>当执行 <code>git reset HEAD</code> 命令时，暂存区的目录树会被重写，被 master 分支指向的目录树所替换，但是工作区不受影响。</li>
<li>当执行 <code>git rm --cached &lt;file&gt;</code> 命令时，会直接从暂存区删除文件，工作区则不做出改变。</li>
<li>当执行 <code>git checkout .</code> 或者 <code>git checkout -- &lt;file&gt;</code> 命令时，会用暂存区全部或指定的文件替换工作区的文件。这个操作很危险，会清除工作区中未添加到暂存区的改动。</li>
<li>当执行 <code>git checkout HEAD .</code> 或者 <code>git checkout HEAD &lt;file&gt;</code> 命令时，会用 HEAD 指向的 master 分支中的全部或者部分文件替换暂存区和以及工作区中的文件。这个命令也是极具危险性的，因为不但会清除工作区中未提交的改动，也会清除暂存区中未提交的改动。</li>
</ul>
<h2 id="git-创建仓库" tabindex="-1"><a class="header-anchor" href="#git-创建仓库" aria-hidden="true">#</a> Git 创建仓库</h2>
<p>本章节我们将为大家介绍如何创建一个 Git 仓库。</p>
<p>你可以使用一个已经存在的目录作为Git仓库。</p>
<h3 id="git-init" tabindex="-1"><a class="header-anchor" href="#git-init" aria-hidden="true">#</a> git init</h3>
<p>Git 使用 <code>git init</code> 命令来初始化一个 Git 仓库，Git 的很多命令都需要在 Git 的仓库中运行，所以 <code>git init</code> 是使用 Git 的第一个命令。</p>
<p>在执行完成 <code>git init</code> 命令后，Git 仓库会生成一个 <code>.git</code> 目录，该目录包含了资源的所有元数据，其他的项目目录保持不变。</p>
<ul>
<li>使用方法</li>
</ul>
<p>使用当前目录作为Git仓库，我们只需使它初始化。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>该命令执行完后会在当前目录生成一个 .git 目录。</p>
<p>使用我们指定目录作为Git仓库。</p>
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
<li>**repo：**Git 仓库。</li>
<li>**directory：**本地目录。</li>
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
<h2 id="git-基本操作" tabindex="-1"><a class="header-anchor" href="#git-基本操作" aria-hidden="true">#</a> Git 基本操作</h2>
<p>Git 的工作就是创建和保存你项目的快照及与之后的快照进行对比。</p>
<p>本节将对有关创建与提交你的项目快照的命令作介绍。</p>
<p>Git 常用的是以下 6 个命令：<strong>git clone</strong>、<strong>git push</strong>、<strong>git add</strong> 、<strong>git commit</strong>、<strong>git checkout</strong>、<strong>git pull</strong>，后面我们会详细介绍。</p>
<p><img src="@source/IT/assets/git-command.jpg" alt="git_command" loading="lazy"></p>
<div class="custom-container tip"><p class="custom-container-title">说明</p>
<ul>
<li>workspace：工作区</li>
<li>staging area：暂存区/缓存区</li>
<li>local repository：版本库或本地仓库</li>
<li>remote repository：远程仓库</li>
</ul>
</div>
<p>一个简单的操作步骤：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> init
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
$ <span class="token function">git</span> commit
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li><code>git init</code> ：初始化仓库。</li>
<li><code>git add .</code> ：添加文件到暂存区。</li>
<li><code>git commit</code> ：将暂存区内容添加到仓库中。</li>
</ul>
<h3 id="创建仓库命令" tabindex="-1"><a class="header-anchor" href="#创建仓库命令" aria-hidden="true">#</a> 创建仓库命令</h3>
<p>下表列出了 git 创建仓库的命令：</p>
<table>
<thead>
<tr>
<th style="text-align:left">命令</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>git init</code></td>
<td style="text-align:left">初始化仓库</td>
</tr>
<tr>
<td style="text-align:left"><code>git clone</code></td>
<td style="text-align:left">拷贝一份远程仓库，也就是下载一个项目。</td>
</tr>
</tbody>
</table>
<h3 id="提交与修改" tabindex="-1"><a class="header-anchor" href="#提交与修改" aria-hidden="true">#</a> 提交与修改</h3>
<p>Git 的工作就是创建和保存你的项目的快照及与之后的快照进行对比。</p>
<p>下表列出了有关创建与提交你的项目的快照的命令：</p>
<table>
<thead>
<tr>
<th style="text-align:left">命令</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>git add</code></td>
<td style="text-align:left">添加文件到仓库</td>
</tr>
<tr>
<td style="text-align:left"><code>git status</code></td>
<td style="text-align:left">查看仓库当前的状态，显示有变更的文件。</td>
</tr>
<tr>
<td style="text-align:left"><code>git diff</code></td>
<td style="text-align:left">比较文件的不同，即暂存区和工作区的差异。</td>
</tr>
<tr>
<td style="text-align:left"><code>git commit</code></td>
<td style="text-align:left">提交暂存区到本地仓库。</td>
</tr>
<tr>
<td style="text-align:left"><code>git reset</code></td>
<td style="text-align:left">回退版本。</td>
</tr>
<tr>
<td style="text-align:left"><code>git rm</code></td>
<td style="text-align:left">删除工作区文件。</td>
</tr>
<tr>
<td style="text-align:left"><code>git mv</code></td>
<td style="text-align:left">移动或重命名工作区文件。</td>
</tr>
</tbody>
</table>
<h3 id="提交日志" tabindex="-1"><a class="header-anchor" href="#提交日志" aria-hidden="true">#</a> 提交日志</h3>
<table>
<thead>
<tr>
<th style="text-align:left">命令</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>git log</code></td>
<td style="text-align:left">查看历史提交记录</td>
</tr>
<tr>
<td style="text-align:left"><code>git blame &lt;file&gt;</code></td>
<td style="text-align:left">以列表形式查看指定文件的历史修改记录</td>
</tr>
</tbody>
</table>
<h3 id="远程操作" tabindex="-1"><a class="header-anchor" href="#远程操作" aria-hidden="true">#</a> 远程操作</h3>
<table>
<thead>
<tr>
<th style="text-align:left">命令</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>git remote</code></td>
<td style="text-align:left">远程仓库操作</td>
</tr>
<tr>
<td style="text-align:left"><code>git fetch</code></td>
<td style="text-align:left">从远程获取代码库</td>
</tr>
<tr>
<td style="text-align:left"><code>git pull</code></td>
<td style="text-align:left">下载远程代码并合并</td>
</tr>
<tr>
<td style="text-align:left"><code>git push</code></td>
<td style="text-align:left">上传远程代码并合并</td>
</tr>
</tbody>
</table>
<h2 id="git-分支管理" tabindex="-1"><a class="header-anchor" href="#git-分支管理" aria-hidden="true">#</a> Git 分支管理</h2>
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
<h2 id="git-查看提交历史" tabindex="-1"><a class="header-anchor" href="#git-查看提交历史" aria-hidden="true">#</a> Git 查看提交历史</h2>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="git-标签" tabindex="-1"><a class="header-anchor" href="#git-标签" aria-hidden="true">#</a> Git 标签</h2>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="git-远程仓库-github" tabindex="-1"><a class="header-anchor" href="#git-远程仓库-github" aria-hidden="true">#</a> Git 远程仓库（GitHub）</h2>
<p>目前我们使用到的 Git 命令都是在本地执行，如果你想通过 Git 分享你的代码或者与其他开发人员合作。 你就需要将数据放到一台其他开发人员能够连接的服务器上。</p>
<p>本例使用了 Github 作为远程仓库，你可以先阅读我们的 <a href="https://www.runoob.com/w3cnote/git-guide.html" target="_blank" rel="noopener noreferrer">Github 简明教程。<ExternalLinkIcon/></a></p>
<p><img src="@source/IT/assets/Git-push-command.jpg" alt="Git-push-command" loading="lazy"></p>
<h3 id="添加远程库" tabindex="-1"><a class="header-anchor" href="#添加远程库" aria-hidden="true">#</a> 添加远程库</h3>
<p>要添加一个新的远程仓库，可以指定一个简单的名字，以便将来引用,命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> <span class="token punctuation">[</span>shortname<span class="token punctuation">]</span> <span class="token punctuation">[</span>url<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>本例以 Github 为例作为远程仓库，如果你没有 Github 可以在官网 https://github.com/ 注册。</p>
<p>由于你的本地 Git 仓库和 GitHub 仓库之间的传输是通过 SSH 加密的，所以我们需要配置验证信息：</p>
<p>使用以下命令生成 SSH Key：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ ssh-keygen -t rsa -C <span class="token string">"youremail@example.com"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>后面的 <em>your_email@youremail.com</em> 改为你在 Github 上注册的邮箱，之后会要求确认路径和输入密码，我们这使用默认的一路回车就行。</p>
<p>成功的话会在 <code>~/</code> 下生成 <code>.ssh</code> 文件夹，进去，打开 <strong>id_rsa.pub</strong>，复制里面的 <strong>key</strong>。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ ssh-keygen -t rsa -C <span class="token string">"429240967@qq.com"</span>
Generating public/private rsa key pair.
Enter <span class="token function">file</span> <span class="token keyword">in</span> <span class="token function">which</span> to save the key <span class="token punctuation">(</span>/Users/tianqixin/.ssh/id_rsa<span class="token punctuation">)</span>: 
Enter passphrase <span class="token punctuation">(</span>empty <span class="token keyword">for</span> no passphrase<span class="token punctuation">)</span>:    <span class="token comment"># 直接回车</span>
Enter same passphrase again:                   <span class="token comment"># 直接回车</span>
Your identification has been saved <span class="token keyword">in</span> /Users/tianqixin/.ssh/id_rsa.
Your public key has been saved <span class="token keyword">in</span> /Users/tianqixin/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:MDKVidPTDXIQoJwoqUmI4LBAsg5XByBlrOEzkxrwARI <span class="token number">429240967</span>@qq.com
The key's randomart image is:
+---<span class="token punctuation">[</span>RSA <span class="token number">3072</span><span class="token punctuation">]</span>----+
<span class="token operator">|</span>E*+.<span class="token operator">+=</span>**oo       <span class="token operator">|</span>
<span class="token operator">|</span>%Oo+oo<span class="token operator">=</span>o. <span class="token builtin class-name">.</span>      <span class="token operator">|</span>
<span class="token operator">|</span>%**.o.o.         <span class="token operator">|</span>
<span class="token operator">|</span>OO.  o o         <span class="token operator">|</span>
<span class="token operator">|</span>+o+     S        <span class="token operator">|</span>
<span class="token operator">|</span><span class="token builtin class-name">.</span>                <span class="token operator">|</span>
<span class="token operator">|</span>                 <span class="token operator">|</span>
<span class="token operator">|</span>                 <span class="token operator">|</span>
<span class="token operator">|</span>                 <span class="token operator">|</span>
+----<span class="token punctuation">[</span>SHA256<span class="token punctuation">]</span>-----+
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>回到 github 上，进入 <strong>Account =&gt; Settings</strong>（账户配置）。</p>
<p><img src="@source/IT/assets/Account_settings.png" alt="Account_settings" loading="lazy"></p>
<p>左边选择 <strong>SSH and GPG keys</strong>，然后点击 <strong>New SSH key</strong> 按钮。</p>
<p>![SSH and GPG keys](./assets/SSH and GPG keys.png)</p>
<p><em>title</em> 设置标题，可以随便填，<em>key</em> 粘贴在你电脑上生成的 <strong>key</strong>（ 上面生成的<code>~/.ssh/id_rsa.pub</code>文件内容），最后点击<strong>Add SSH key</strong>按钮添加。</p>
<p><img src="@source/IT/assets/add_key.png" alt="add_key" loading="lazy"></p>
<p>添加成功后界面如下所示</p>
<p>![SSH and GPG keys](./assets/SSH and GPG keys.png)</p>
<p>为了验证是否成功，输入以下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">ssh</span> -T git@github.com
The authenticity of <span class="token function">host</span> <span class="token string">'github.com (52.74.223.119)'</span> can<span class="token string">'t be established.
RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes                   # 输入 yes
Warning: Permanently added '</span>github.com,52.74.223.119<span class="token string">' (RSA) to the list of known hosts.
Hi tianqixin! You'</span>ve successfully authenticated, but GitHub does not provide shell access. <span class="token comment"># 成功信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>以上命令说明我们已成功连上 Github。</p>
<p>之后点击 <strong>New repository</strong> 如下图所示：</p>
<p><img src="@source/IT/assets/New_repository.png" alt="New_repository" loading="lazy"></p>
<p>之后在在 <strong>Repository name</strong> 填入 myblog（远程仓库名） ，其他保持默认设置，点击<strong>Create repository</strong>按钮，就成功地创建了一个新的Git仓库：</p>
<p><img src="@source/IT/assets/repository_name.png" alt="repository_name" loading="lazy"></p>
<p>创建成功后，显示如下信息：</p>
<p><img src="@source/IT/assets/created_repository.png" alt="created_repository" loading="lazy"></p>
<p>以上信息告诉我们可以从这个仓库克隆出新的仓库，也可以把本地仓库的内容推送到 GitHub 仓库。</p>
<p>现在，我们根据 GitHub 的提示，在本地的仓库下运行命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">mkdir</span> myblog		                        <span class="token comment"># 创建测试目录</span>
$ <span class="token builtin class-name">cd</span> myblog/                    		    <span class="token comment"># 进入测试目录</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">"# Git 测试"</span> <span class="token operator">>></span> README.md				<span class="token comment"># 创建 README.md 文件并写入内容</span>
$ <span class="token function">ls</span>                                        <span class="token comment"># 查看目录下的文件</span>
README
$ <span class="token function">git</span> init                                  <span class="token comment"># 初始化</span>
$ <span class="token function">git</span> <span class="token function">add</span> README.md                         <span class="token comment"># 添加文件</span>
$ <span class="token function">git</span> commit -m <span class="token string">"添加 README.md 文件"</span>        <span class="token comment"># 提交并备注信息</span>
<span class="token punctuation">[</span>master <span class="token punctuation">(</span>root-commit<span class="token punctuation">)</span> 0205aab<span class="token punctuation">]</span> 添加 README.md 文件
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> README.md

<span class="token comment"># 提交到 Github</span>
$ <span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:Ryukarin/myblog.git
$ <span class="token function">git</span> push -u origin master
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>以下命令请根据你在 Github 成功创建新仓库的地方复制，而不是根据我提供的命令，因为我们的 Github 用户名不一样，仓库名也不一样。</p>
<p>接下来我们返回 Github 创建的仓库，就可以看到文件已上传到 Github上：</p>
<p><img src="@source/IT/assets/push.png" alt="push" loading="lazy"></p>
<h3 id="查看当前的远程库" tabindex="-1"><a class="header-anchor" href="#查看当前的远程库" aria-hidden="true">#</a> 查看当前的远程库</h3>
<p>要查看当前配置有哪些远程仓库，可以用命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> remote
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>实例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> remote
origin
$ <span class="token function">git</span> remote -v
origin	git@github.com:Ryukarin/myblog.git <span class="token punctuation">(</span>fetch<span class="token punctuation">)</span>
origin	git@github.com:Ryukarin/myblog.git <span class="token punctuation">(</span>push<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>执行时加上 <strong>-v</strong> 参数，你还可以看到每个别名的实际链接地址。</p>
<h3 id="提取远程仓库" tabindex="-1"><a class="header-anchor" href="#提取远程仓库" aria-hidden="true">#</a> 提取远程仓库</h3>
<p>Git 有两个命令用来提取远程仓库的更新。</p>
<ol>
<li>从远程仓库下载新分支与数据：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> fetch
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>该命令执行完后需要执行 <code>git merge</code> 远程分支到你所在的分支。</p>
<ol start="2">
<li>从远端仓库提取数据并尝试合并到当前分支：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> merge
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>该命令就是在执行 <code>git fetch</code> 之后紧接着执行 <code>git merge</code> 远程分支到你所在的任意分支。</p>
<p>假设你配置好了一个远程仓库，并且你想要提取更新的数据，你可以首先执行 <code>git fetch [alias]</code> 告诉 Git 去获取它有你没有的数据，然后你可以执行 <code>git merge [alias]/[branch]</code> 以将服务器上的任何更新（假设有人这时候推送到服务器了）合并到你的当前分支。</p>
<p>接下来我们在 Github 上点击 <strong>README.md</strong> 并在线修改它:</p>
<p><img src="@source/IT/assets/edit_readme.png" alt="edit readme" loading="lazy"></p>
<p>修改好 <strong>README.md</strong> 之后，点击底部的 <strong>Commit changes</strong> 按钮。</p>
<p><img src="@source/IT/assets/Commit_changes.png" alt="Commit changes" loading="lazy"></p>
<p>然后我们在本地更新修改。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> fetch origin
remote: Counting objects: <span class="token number">3</span>, done.
remote: Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">2</span>/2<span class="token punctuation">)</span>, done.
remote: Total <span class="token number">3</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, pack-reused <span class="token number">0</span>
Unpacking objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">3</span>/3<span class="token punctuation">)</span>, done.
From github.com:Ryukarin/myblog
   0205aab<span class="token punctuation">..</span>febd8ed  master     -<span class="token operator">></span> origin/main
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>以上信息&quot;0205aab..febd8ed master -&gt; origin/master&quot; 说明 main 分支已被更新，我们可以使用以下命令将更新同步到本地：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> merge origin/main
Updating 0205aab<span class="token punctuation">..</span>febd8ed
Fast-forward
 README.md <span class="token operator">|</span> <span class="token number">1</span> +
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>查看 README.md 文件内容：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">cat</span> README.md 
<span class="token comment"># Git 测试</span>
---
<span class="token comment">## 第一次修改内容（二级标题）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="推送到远程仓库" tabindex="-1"><a class="header-anchor" href="#推送到远程仓库" aria-hidden="true">#</a> 推送到远程仓库</h3>
<p>推送你的新分支与数据到某个远端仓库命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> push <span class="token punctuation">[</span>alias<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>以上命令将你的 [branch] 分支推送成为 [alias] 远程仓库上的 [branch] 分支，实例如下。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">touch</span> test.txt      <span class="token comment"># 添加文件</span>
$ <span class="token function">git</span> <span class="token function">add</span> test.txt 
$ <span class="token function">git</span> commit -m <span class="token string">"添加到远程"</span>
master 69e702d<span class="token punctuation">]</span> 添加到远程
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">0</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">0</span> deletions<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> test.txt

$ <span class="token function">git</span> push origin master    <span class="token comment"># 推送到 Github</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>重新回到我们的 Github 仓库，可以看到文件已经提交上来了：</p>
<p><img src="@source/IT/assets/add_remote.png" alt="add remote" loading="lazy"></p>
<h3 id="删除远程仓库" tabindex="-1"><a class="header-anchor" href="#删除远程仓库" aria-hidden="true">#</a> 删除远程仓库</h3>
<p>删除远程仓库你可以使用命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">rm</span> <span class="token punctuation">[</span>别名<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>实例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> remote -v
origin    git@github.com:Ryukarin/myblog.git <span class="token punctuation">(</span>fetch<span class="token punctuation">)</span>
origin    git@github.com:Ryukarin/myblog.git <span class="token punctuation">(</span>push<span class="token punctuation">)</span>

<span class="token comment"># 添加仓库 origin2</span>
$ <span class="token function">git</span> remote <span class="token function">add</span> origin2 git@github.com:Ryukarin/myblog.git

$ <span class="token function">git</span> remote -v
origin    git@github.com:Ryukarin/myblog.git <span class="token punctuation">(</span>fetch<span class="token punctuation">)</span>
origin    git@github.com:Ryukarin/myblog.git <span class="token punctuation">(</span>push<span class="token punctuation">)</span>
origin2    git@github.com:Ryukarin/myblog.git <span class="token punctuation">(</span>fetch<span class="token punctuation">)</span>
origin2    git@github.com:Ryukarin/myblog.git <span class="token punctuation">(</span>push<span class="token punctuation">)</span>

<span class="token comment"># 删除仓库 origin2</span>
$ <span class="token function">git</span> remote <span class="token function">rm</span> origin2
$ <span class="token function">git</span> remote -v
origin    git@github.com:Ryukarin/myblog.git <span class="token punctuation">(</span>fetch<span class="token punctuation">)</span>
origin    git@github.com:Ryukarin/myblog.git <span class="token punctuation">(</span>push<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">码云（Gitee）</p>
<p>大家都知道国内访问 Github 速度比较慢，很影响我们的使用。</p>
<p>如果你希望体验到 Git 飞一般的速度，可以使用国内的 Git 托管服务——<a href="https://gitee.com/?utm_source=remote_blog_cnjc" target="_blank" rel="noopener noreferrer">Gitee（gitee.com）<ExternalLinkIcon/></a>。</p>
<p>Gitee 提供免费的 Git 仓库，还集成了代码质量检测、项目演示等功能。对于团队协作开发，Gitee 还提供了项目管理、代码托管、文档管理的服务，5 人以下小团队免费。</p>
<p>使用方法和  Github 大同小异，具体就不展开说了。</p>
</div>
<h2 id="git-服务器搭建" tabindex="-1"><a class="header-anchor" href="#git-服务器搭建" aria-hidden="true">#</a> Git 服务器搭建</h2>
<p>前面我们远程仓库使用了 Github，Github 公开的项目是免费的，2019 年开始 Github 私有存储库也可以无限制使用。</p>
<p>这当然我们也可以自己搭建一台 Git 服务器作为私有仓库使用。</p>
<p>接下来我们将以 Centos 为例搭建 Git 服务器。</p>
<h3 id="安装git" tabindex="-1"><a class="header-anchor" href="#安装git" aria-hidden="true">#</a> 安装Git</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ yum <span class="token function">install</span> curl-devel expat-devel gettext-devel openssl-devel zlib-devel perl-devel
$ yum <span class="token function">install</span> <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>接下来我们 创建一个git用户组和用户，用来运行git服务：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">groupadd</span> <span class="token function">git</span>
$ <span class="token function">useradd</span> <span class="token function">git</span> -g <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="创建证书登录" tabindex="-1"><a class="header-anchor" href="#创建证书登录" aria-hidden="true">#</a> 创建证书登录</h3>
<p>收集所有需要登录的用户的公钥，公钥位于id_rsa.pub文件中，把我们的公钥导入到<code>/home/git/.ssh/authorized_keys</code>文件里，一行一个。</p>
<p>如果没有该文件创建它：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> /home/git/
$ <span class="token function">mkdir</span> .ssh
$ <span class="token function">chmod</span> <span class="token number">755</span> .ssh
$ <span class="token function">touch</span> .ssh/authorized_keys
$ <span class="token function">chmod</span> <span class="token number">644</span> .ssh/authorized_keys
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="初始化git仓库" tabindex="-1"><a class="header-anchor" href="#初始化git仓库" aria-hidden="true">#</a> 初始化Git仓库</h3>
<p>首先我们选定一个目录作为 Git 仓库，假定是 <code>/home/gitrepo/runoob.git</code>，在 <code>/home/gitrepo</code> 目录下输入命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> /home
$ <span class="token function">mkdir</span> gitrepo
$ <span class="token function">chown</span> git:git gitrepo/
$ <span class="token builtin class-name">cd</span> gitrepo

$ <span class="token function">git</span> init --bare runoob.git
Initialized empty Git repository <span class="token keyword">in</span> /home/gitrepo/runoob.git/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>以上命令 Git 创建一个空仓库，服务器上的Git仓库通常都以 .git 结尾。然后，把仓库所属用户改为git：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">chown</span> -R git:git runoob.git
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="克隆仓库" tabindex="-1"><a class="header-anchor" href="#克隆仓库" aria-hidden="true">#</a> 克隆仓库</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> clone git@192.168.45.4:/home/gitrepo/runoob.git
Cloning into <span class="token string">'runoob'</span><span class="token punctuation">..</span>.
warning: You appear to have cloned an empty repository.
Checking connectivity<span class="token punctuation">..</span>. done.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>192.168.45.4 为 Git 所在服务器 ip ，你需要将其修改为你自己的 Git 服务 ip。</p>
<p>这样我们的 Git 服务器安装就完成。</p>
</template>
