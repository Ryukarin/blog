<template><h2 id="git-服务器搭建" tabindex="-1"><a class="header-anchor" href="#git-服务器搭建" aria-hidden="true">#</a> Git 服务器搭建</h2>
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
