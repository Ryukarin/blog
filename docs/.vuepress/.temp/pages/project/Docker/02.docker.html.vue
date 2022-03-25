<template><p>首先介绍 Docker 的三大核心概念：</p>
<ul>
<li>镜像（Image）</li>
<li>口容器（Container）</li>
<li>口仓库（Reposit）</li>
</ul>
<p>只有理解了这三个核心概念，才能顺利地理解 Docker 容器的整个生命周期 。
随后，将介绍如何在常见的操作系统平台上安装 Docker ，包括 Ubuntu、CentOS 、
MacOS 和 Windows 等主流操作系统 。</p>
<h2 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念" aria-hidden="true">#</a> 核心概念</h2>
<p>Docker 大部分的操作都围绕着它的三大核心概念：<strong>镜像</strong>、<strong>容器</strong>和<strong>仓库</strong>。因此，准确把握这三大核心概念对于掌握 Docker 技术尤为重要。</p>
<h3 id="_1、docker-镜像" tabindex="-1"><a class="header-anchor" href="#_1、docker-镜像" aria-hidden="true">#</a> 1、Docker 镜像</h3>
<p>Docker 镜像类似于虚拟机镜像，可以将它理解为一个只读的模板 。</p>
<p>例如，一个镜像可以包含一个基本的操作系统环境，里面仅安装了 Apache 应用程序（或用户需要的其他软件）。可以把它称为一个 Apache 镜像 。</p>
<p>镜像是创建 Docker 容器的基础 。</p>
<p>通过版本管理和增量的文件系统，Docker 提供了一套十分简单的机制来创建和更新现有
的镜像，用户甚至可以从网上下载一个已经做好的应用镜像，并直接使用 。</p>
<h3 id="_2、docker-容器" tabindex="-1"><a class="header-anchor" href="#_2、docker-容器" aria-hidden="true">#</a> 2、Docker 容器</h3>
<p>Docker 容器类似于一个轻量级的沙箱， Docker 利用容器来运行和隔离应用 。</p>
<p>容器是从镜像创建的应用运行实例 。它可以启动、开始、停止、删除，而这些容器都是彼此相互隔离、互不可见的。</p>
<p>可以把容器看作一个简易版的 Linux 系统环境（包括 root 用户权限、进程空间、用户空间和网络空间等）以及运行在其中的应用程序打包而成的盒子。</p>
<div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>镜像自身是只读的 。 容器从镜像启动的时候，会在镜像的最上层创建一个可写层 。</p>
</div>
<h3 id="_3、docker-仓库" tabindex="-1"><a class="header-anchor" href="#_3、docker-仓库" aria-hidden="true">#</a> 3、Docker 仓库</h3>
<p>Docker 仓库类似于代码仓库，是 Docker 集中存放镜像文件的场所。</p>
<p>有时候我们会将 Docker 仓库和仓库注册服务器（Registry）混为一谈，并不严格区分。实际上，仓库注册服务器是存放仓库的地方，其上往往存放着多个仓库。每个仓库集中存放某一类镜像，往往包括多个镜像文件，通过不同的标签（tag）来进行区分。例如存放 Ubuntu 操作系统镜像的仓库，被称为 Ubuntu 仓库，其中可能包括 16.04、18.04 等不同版本的镜像。仓库注册服务器的示例如下图所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Docker/assets/docker_2-1.png" alt="" loading="lazy"></p>
<p><u>图 2-1</u>	注册服务器与仓库</p>
</div>
<p>根据所存储的镜像公开分享与否， Docker 仓库可以分为<strong>公开仓库</strong>（Public）和<strong>私有仓库</strong>（Private）两种形式 。</p>
<p>目前，最大的公开仓库是官方提供的 Docker Hub，其中存放着数量庞大的镜像供用户下载。国内不少云服务提供商（如腾讯云、阿里云等）也提供了仓库的本地源，可以提供稳定的国内访问 。</p>
<p>当然，用户如果不希望公开分享自己的镜像文件，Docker 也支持用户在本地网络内创建一个只能自己访问的私有仓库。</p>
<p>当用户创建了自己的镜像之后就可以使用 push 命令将它上传到指定的公有或者私有仓库。这样用户下次在另外一台机器上使用该镜像时，只需要将其从仓库上 pull 下来就可以了。</p>
<div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>可以看出，Docker 利用仓库管理镜像的设计理念与 Git 代码仓库的概念非常相似，实际上 Docker 设计上借鉴了 Git 的很多优秀思想。</p>
</div>
<h2 id="安装-docker-引擎" tabindex="-1"><a class="header-anchor" href="#安装-docker-引擎" aria-hidden="true">#</a> 安装 Docker 引擎</h2>
<p>Docker 引擎是使用 Docker 容器的核心组件，可以在主流的操作系统和云平台上使用，包括 Linux 操作系统（如 Ubuntu、Debian、CentOS、Redhat 等)，macOS 和 Windows 操作系统，以及 IBM、亚马逊、微软等知名云平台。</p>
<p>用户可以访问 Docker 官网的 <a href="https://www.docker.com/get-docker" target="_blank" rel="noopener noreferrer">Get Docker<ExternalLinkIcon/></a> 页面，查看获取 Docker 的方式，以及 Docker 支持的平台类型，如下图所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Docker/assets/docker_2-2.png" alt="" loading="lazy"></p>
<p><u>图 2-2</u>	获取 Docker</p>
</div>
<p>目前 Docker 支持 Docker 引擎、Docker Hub、Docker Cloud 等多种服务 。</p>
<ul>
<li>
<p>Docker 引擎：包括支持在桌面系统或云平台安装 Docker，以及为企业提供简单安全弹性的容器集群编排和管理；</p>
</li>
<li>
<p>Docker Hub：官方提供的云托管服务，可以提供公有或私有的镜像仓库；</p>
</li>
<li>
<p>Docker Cloud：官方提供的容器云服务，可以完成容器的部署与管理，可以完整地支持容器化项目，还有 CI、CD 功能。</p>
</li>
</ul>
<p>Docker 引擎目前分为两个版本：社区版本（Community Edition，CE）和企业版本（Enterprise Edition，EE）。社区版本包括大部分的核心功能，企业版本则通过付费形式提供认证支持、镜像管理、容器托管、安全扫描等高级服务。通常情况下，用户使用社区版本可以满足大部分需求；若有更苛刻的需求，可以购买企业版本服务。社区版本每个月会发布一次尝鲜（Edge）版本，每个季度（ 3、6、9、12 月）会发行一次稳定（Stable）版本。版本号命名格式为“年份.月份”，如 2018 年 6 月发布的版本号为 vl8.06 。</p>
<p>我们首选在 Linux 环境中使用 Docker 社区稳定版本，以获取最佳的原生支持体验。</p>
<h3 id="_1、ubuntu-环境下安装-dokeer" tabindex="-1"><a class="header-anchor" href="#_1、ubuntu-环境下安装-dokeer" aria-hidden="true">#</a> 1、Ubuntu 环境下安装 Dokeer</h3>
<ul>
<li>系统要求</li>
</ul>
<p>Ubuntu 操作系统对 Docker 的支持十分成熟，可以支持包括 x86_64、armhf、s390x（IBM Z)、ppc64le 等系统架构，只要是 64 位即可。</p>
<p>Docker 目前支持的最低 Ubuntu 版本为 14.04 LTS，但实际上从稳定性上考虑，推荐使用 16.04 LTS 或 18.0.4 LTS 版本，并且系统内核越新越好，以支持 Docker 最新的特性 。</p>
<p>用户可以通过如下命令检查自己的内核版本详细信息：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">uname</span> -a
Linux localhost <span class="token number">4.9</span>.36-x86_64-generic
<span class="token comment">#或者 :</span>
$ <span class="token function">cat</span> /proc/version
Linux version <span class="token number">4.9</span>.36-x86_64-generic <span class="token punctuation">(</span>maker@linux.com<span class="token punctuation">)</span> <span class="token punctuation">(</span>gcc version <span class="token number">4.9</span>.2 <span class="token punctuation">(</span>Debian <span class="token number">4.9</span>.2-10<span class="token punctuation">))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>如果使用 Ubuntu 16.04 LTS 版本，为了让 Docker 使用 aufs 存储，推荐安装如下两个软件包：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">apt-get</span> update
$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y linux-image-extra-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> -r<span class="token variable">)</span></span> linux image-extra-virtual
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>Ubuntu 发行版中，LTS（Long-Term- Support）意味着更稳定的功能和更长期（目前为 5 年）的升级支持，生产环境中推荐尽量使用 LTS 版本。</p>
</div>
<ul>
<li>添加镜像源</li>
</ul>
<p>首先需要安装 <code>apt-transport-https</code> 等软件包支持 https 协议的源：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">apt-get</span> update
$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> apt-transport-https ca-certificates <span class="token function">curl</span> software-properties-common
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>添加源的 gpg 密钥：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">curl</span> -fsSL https://download.docker.com/linux/ubuntu/gpg <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -
OK
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>确认导入指纹为“<u>9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88</u>”的 GPG公钥：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> apt-key fingerprint 0EBFCD88
pub   rsa4096 <span class="token number">2017</span>-02-22 <span class="token punctuation">[</span>SCEA<span class="token punctuation">]</span>
      9DC8 <span class="token number">5822</span> 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
uid           <span class="token punctuation">[</span> 未知 <span class="token punctuation">]</span> Docker Release <span class="token punctuation">(</span>CE deb<span class="token punctuation">)</span> <span class="token operator">&lt;</span>docker@docker.com<span class="token operator">></span>
sub   rsa4096 <span class="token number">2017</span>-02-22 <span class="token punctuation">[</span>S<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>获取当前操作系统的代号 :</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ lsb_release -cs
bionic
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>一般情况下，Ubuntu 16.04 LTS 代号为 xenial，Ubuntu 18.04 LTS 代号为 bionic 。</p>
<p>接下来通过如下命令添加 Docker 稳定版的官方软件源，非 bionic 版本的系统注意修改为自己对应的代号：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> add-apt-repository <span class="token string">"deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>添加成功后，再次更新 apt 软件包缓存：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>开始安装 Docker</li>
</ul>
<p>在成功添加源之后，就可以安装最新版本的 Docker 了，软件包名称为 docker-ce，代表是社区版本：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y docker-ce
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果系统中存在较旧版本的 Docker，会提示是否先删除，选择是即可。</p>
<p>除了基于手动添加软件源的方式之外，也可以使用官方提供的脚本来自动化安装 Docker：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">curl</span> - sSL https://get.docker.com/ <span class="token operator">|</span> <span class="token function">sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>安装成功后，会自动启动 Docker 服务 。</p>
<p>用户也可以指定安装软件源中其他版本的 Docker：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">apt-cache</span> madison docker-ce
 docker-ce <span class="token operator">|</span> <span class="token number">5</span>:20.10.8~3-0~ubuntu-bionic <span class="token operator">|</span> https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
 docker-ce <span class="token operator">|</span> <span class="token number">5</span>:20.10.7~3-0~ubuntu-bionic <span class="token operator">|</span> https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
<span class="token punctuation">..</span>.
 docker-ce <span class="token operator">|</span> <span class="token number">18.06</span>.0~ce~3-0~ubuntu <span class="token operator">|</span> https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
 docker-ce <span class="token operator">|</span> <span class="token number">18.03</span>.1~ce~3-0~ubuntu <span class="token operator">|</span> https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token number">18.03</span>.1~ce~3-0~ubuntu
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_2、centos-环境下安装-docker" tabindex="-1"><a class="header-anchor" href="#_2、centos-环境下安装-docker" aria-hidden="true">#</a> 2、CentOS 环境下安装 Docker</h3>
<p>Docker 目前支持 CentOS 7 及以后的版本。系统的要求跟 Ubuntu 情况类似，64 位操作系统，内核版本至少为 3.10 。</p>
<p>首先，为了方便添加软件源，以及支持 devicemapper 存储类型，安装如下软件包：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> yum update
$ <span class="token function">sudo</span> yum <span class="token function">install</span> -y yum-utils device-mapper-persistent-data lvm2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>添加 Docker 稳定版本的 yum 软件源：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> yum-config-manager --add-repo https://download.docker.corn/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>之后更新 yum 软件源缓存，并安装 Docker：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> yum update
$ <span class="token function">sudo</span> yum <span class="token function">install</span> -y docker-ce
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>最后，确认 Docker 服务启动正常 :</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> systernctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_3、通过脚本安装" tabindex="-1"><a class="header-anchor" href="#_3、通过脚本安装" aria-hidden="true">#</a> 3、通过脚本安装</h3>
<p>用户还可以使用官方提供的 shell 脚本来在 Linux 系统（目前支持 Ubuntu、Debian、Oracleserver、Fedora、Centos、OpenSuse、Gentoo 等常见发行版）上安装 Docker 的最新正式版本，该脚本会自动检测系统信息并进行相应配置：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">curl</span> -fsSL https://get.docker.com/ <span class="token operator">|</span> <span class="token function">sh</span>
或者：
$ <span class="token function">wget</span> -qO- https://get.docker.com/ <span class="token operator">|</span> <span class="token function">sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>如果想尝鲜最新功能，可以使用下面的脚本来安装最新的“尝鲜”版本。但要注意，非稳定版本往往意味着功能还不够稳定，不要在生产环境中使用：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">curl</span> -fsSL https://test.docker.com/ <span class="token operator">|</span> <span class="token function">sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>另外，也可以从 store.docker.com/search?offering=community&amp;q=&amp;type=edition 找到各个平台上的 Docker 安装包，自行下载使用。</p>
<div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>关于 macOS 和 Windows 系统的 Docker 安装方法，此处省略，不进行说明。</p>
</div>
<h2 id="配置-docker-服务" tabindex="-1"><a class="header-anchor" href="#配置-docker-服务" aria-hidden="true">#</a> 配置 Docker 服务</h2>
<p>为了避免每次使用 Docker 命令时都需要切换到特权身份，可以将当前用户加入安装中自动创建的 docker 用户组，代码如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">usermod</span> -aG <span class="token function">docker</span> USER_NAME
<span class="token comment">#USER_NAME是你使用的用户名，可以 echo $USER 命令查看</span>
<span class="token comment">#或者直接用下面命令，将当前用户加入到docker组</span>
$ <span class="token function">sudo</span> <span class="token function">usermod</span> -aG <span class="token function">docker</span> <span class="token environment constant">$USER</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>用户更新组信息，退出并重新登录后即可生效。</p>
<p>Docker 服务启动时实际上是调用了 <code>dockerd</code> 命令，支持多种启动参数。因此，用户可以直接通过执行 <code>dockerd</code> 命令来启动 Docker 服务，如下面的命令启动 Docker 服务，开启 Debug 模式，并监听在本地的 2376 端口：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ dockerd -D -H tcp://127.0.0.1:2376
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这些选项可以写入 <code>/etc/docker/</code> 路径下的 <code>daemon.json</code> 文件中，由 dockerd 服务启动时读取：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
		<span class="token property">"debug"</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">"hosts"</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"tcp://127.0.0.1:2376"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>当然，操作系统也对 Docker 服务进行了封装，以使用 Upstart 来管理启动服务的
Ubuntu 系统为例，Docker 服务的默认配置文件为 <code>/etc/default/docker</code> ，可以通过修改其中的 DOCKER_OPTS 来修改服务启动的参数，例如让 Docker 服务开启网络 2375 端口的监昕：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">DOCKER_OPTS</span><span class="token operator">=</span><span class="token string">"<span class="token variable">$DOCKER_OPTS</span> -H tcp://0.0.0.0:2375 -H unix:///var/run/docker.sock"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>修改之后，通过 <code>service</code> 命令来重启 Docker 服务：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">service</span> <span class="token function">docker</span> restart
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>对于 CentOS、RedHat 等系统，服务通过 systemd 来管理，配置文件路径为 <code>/etc/systemd/system/docker.service.d/docker.conf</code>。更新配置后需要通过 <code>systemctl</code> 命令来管理 Docker 服务：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> systemctl daemon-reload
$ <span class="token function">sudo</span> systemctl start docker.service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>此外，如果服务工作不正常，可以通过查看 Docker 服务的日志信息来确定问题，例如在 RedHat 系统上日志文件可能为 <code>/var/log/messages</code>，在 Ubuntu 或 CentOS 系统上可以执行命令 <code>journalctl -u docker.service</code>。</p>
<p>每次重启 Docker 服务后，可以通过查看 Docker 信息（docker info 命令），确保服务已经正常运行 。</p>
<h2 id="推荐实践环境" tabindex="-1"><a class="header-anchor" href="#推荐实践环境" aria-hidden="true">#</a> 推荐实践环境</h2>
<p>从稳定性上考虑，推荐实践环境的操作系统是 Ubuntu 18.04 LTS 系统或 Debian 稳
定版本系统，使用 Linux 4.0 以上内核 。 Docker 不同版本的 API 会略有差异，推荐根据需求选择较新的稳定版本 。</p>
<p>如无特殊说明，默认数据网段地址范围为 10.0.0.0/24，管理网段地址范围为 192.168.0.0/24 。</p>
<p>另外，执行命令代码中以 <strong>$</strong> 开头的，表明为普通用户；以 <strong>#</strong> 开头的，表明为特权用户（root）。如果用户已经添加到了 docker 用户组，大部分时候都无须管理员权限，否则需要在命令前使用 sudo 来临时提升权限。</p>
<p>部分命令执行结果输出内容较长的，只给出关键部分输出。</p>
<h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2>
<p>介绍了 Docker 的三大核心概念：镜像、容器和仓库，以及如何安装和配置 Docker 引擎服务。</p>
<p>在后面的实践中，你会感受到，基于三大核心概念所构建的高效工作流程，正是 Docker 从众多容器虚拟化方案中脱颖而出的重要原因。实际上，Docker 和 Docker Hub 的工作流也并非凭空创造的，很大程度上参考了 Git 和 Github 的设计理念，从而为应用分发和团队合作都带来了众多优势。</p>
</template>
