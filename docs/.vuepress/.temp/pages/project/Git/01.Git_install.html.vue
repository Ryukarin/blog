<template><p>在使用Git前我们需要先安装 Git。Git 目前支持 Linux/Unix、Solaris、Mac 和 Windows 平台上运行。</p>
<p>Git 各平台安装包下载地址为：<a href="http://git-scm.com/downloads" target="_blank" rel="noopener noreferrer">http://git-scm.com/downloads<ExternalLinkIcon/></a></p>
<h2 id="linux-平台安装" tabindex="-1"><a class="header-anchor" href="#linux-平台安装" aria-hidden="true">#</a> Linux 平台安装</h2>
<p>Git 的工作需要调用 curl，zlib，openssl，expat，libiconv 等库的代码，所以需要先安装这些依赖工具。</p>
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
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">tar</span> -zxf git-1.7.2.2.tar.gz
$ <span class="token builtin class-name">cd</span> git-1.7.2.2
$ <span class="token function">make</span> <span class="token assign-left variable">prefix</span><span class="token operator">=</span>/usr/local all
$ <span class="token function">sudo</span> <span class="token function">make</span> <span class="token assign-left variable">prefix</span><span class="token operator">=</span>/usr/local <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="windows-平台安装" tabindex="-1"><a class="header-anchor" href="#windows-平台安装" aria-hidden="true">#</a> Windows 平台安装</h2>
<p>在 Windows 平台上安装 Git 同样轻松，有个叫做 msysGit 的项目提供了安装包，可以到 GitHub 的页面上下载 exe 安装文件并运行：</p>
<p>安装包下载地址：<a href="https://git-scm.com/download/win" target="_blank" rel="noopener noreferrer">https://git-scm.com/download/win<ExternalLinkIcon/></a></p>
<p>官网慢，可以用国内的镜像：<a href="https://npm.taobao.org/mirrors/git-for-windows/" target="_blank" rel="noopener noreferrer">https://npm.taobao.org/mirrors/git-for-windows/<ExternalLinkIcon/></a></p>
<p><img src="@source/project/Git/assets/git_win.png" alt="git win" loading="lazy"></p>
<p>一直默认下一步，直到安装完成。</p>
<p>完成安装之后，就可以使用命令行的 git 工具（已经自带了 ssh 客户端）了，另外还有一个图形界面的 Git 项目管理工具。</p>
<p>在开始菜单里找到&quot;Git&quot;-&gt;&quot;Git Bash&quot;，会弹出 Git 命令窗口，你可以在该窗口进行 Git 操作。</p>
<h2 id="mac-平台上安装" tabindex="-1"><a class="header-anchor" href="#mac-平台上安装" aria-hidden="true">#</a> Mac 平台上安装</h2>
<p>在 Mac 平台上安装 Git 最容易的当属使用图形化的 Git 安装工具，下载地址为：</p>
<p><a href="https://sourceforge.net/projects/git-osx-installer/" target="_blank" rel="noopener noreferrer">https://sourceforge.net/projects/git-osx-installer/<ExternalLinkIcon/></a></p>
<p>安装界面如下所示：</p>
<p><img src="@source/project/Git/assets/git_mac.png" alt="git mac" loading="lazy"></p>
<p>当然，你也可以其他方法安装。</p>
<p><a href="https://git-scm.com/download/mac" target="_blank" rel="noopener noreferrer">https://git-scm.com/download/mac<ExternalLinkIcon/></a></p>
</template>
