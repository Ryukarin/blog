<template><p>仓库（Repository）是集中存放镜像的地方，又分公共仓库和私有仓库。</p>
<p>有时候容易把仓库与注册服务器（Registry）混淆。实际上注册服务器是存放仓库的具体服务器，一个注册服务器上可以有多个仓库，而每个仓库下面可以有多个镜像。从这方面来说，仓库可以被认为是一个具体的项目或目录。例如对于仓库地址 private-docker.com/ubuntu 来说，private-docker.com 是注册服务器地址，ubuntu 是仓库名。</p>
<p>接下来，将分别介绍使用 Docker Hub 官方仓库进行登录、载等基本操作，以及使用国内社区提供的仓库下载镜像；最后还将介绍创建和使用私有仓库的基本操作。</p>
<h2 id="docker-hub-公共镜像市场" tabindex="-1"><a class="header-anchor" href="#docker-hub-公共镜像市场" aria-hidden="true">#</a> Docker Hub 公共镜像市场</h2>
<p>Docker Hub 是 Docker 官方提供的最大的公共镜像仓库，目前包括了超过 100000 的镜像，地址为 <a href="https://hub.docker.com" target="_blank" rel="noopener noreferrer">https://hub.docker.com<ExternalLinkIcon/></a>。大部分对镜像的需求，都可以通过在 Docker Hub 中直接下载镜像来实现，如图 5-1 所示。</p>
<h3 id="_1、登录" tabindex="-1"><a class="header-anchor" href="#_1、登录" aria-hidden="true">#</a> 1、登录</h3>
<p>可以通过命令行执行 <code>docker login</code> 命令来输入用户名、密码和邮箱来完成注册和登录。注册成功后，本地用户目录下会自动创建 <code>.docker/config.json</code> 文件，保存用户的认证信息。</p>
<p>登录成功的用户可以上传个人制作的镜像到 Docker Hub。</p>
<h3 id="_2、基本操作" tabindex="-1"><a class="header-anchor" href="#_2、基本操作" aria-hidden="true">#</a> 2、基本操作</h3>
<p>用户无须登录即可通过 <code>docker search</code> 命令来查找官方仓库中的镜像，并利用 <code>docker [image] pull</code> 命令来将它下载到本地。</p>
<div class="custom-container center">
<p><img src="@source/project/Docker/assets/docker_5-1.png" alt="" loading="lazy"></p>
<p><u>图 5-1</u>	Docker Hub 是最大的公共镜像仓库</p>
</div>
<p>前面已经具体介绍了如何使用 <code>docker [image] pull</code> 命令来搜寻镜像。例如以 centos 为关键词进行搜索：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> search centos
NAME                              DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
centos                            The official build of CentOS.                   <span class="token number">6736</span>      <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>       
ansible/centos7-ansible           Ansible on Centos7                              <span class="token number">134</span>                  <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
consol/centos-xfce-vnc            Centos container with <span class="token string">"headless"</span> VNC session…  <span class="token number">130</span>                  <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
jdeathe/centos-ssh                OpenSSH / Supervisor / EPEL/IUS/SCL Repos - …  <span class="token number">120</span>                  <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
centos/systemd                    systemd enabled base container.                 <span class="token number">101</span>                  <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>根据是否为官方提供，可将这些镜像资源分为两类：</p>
<ul>
<li>
<p>一种是类似于 centos 这样的基础镜像，也称为根镜像。这些镜像是由 Docker 公司创建、验证、支持、提供，这样的镜像往往使用单个单词作为名字；</p>
</li>
<li>
<p>另一种类型的镜像，比如 ansible/centos7-ansible 镜像，是由 Docker 用户 ansible 创建并维护的，带有用户名称为前缀，表明是某用户下的某仓库。可以通过用户名称前缀“user_name/镜像名”来指定使用某个用户提供的镜像。</p>
</li>
</ul>
<p>下载官方 centos 镜像到本地，代码如下所示：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> pull centos
Using default tag: latest
latest: Pulling from library/centos
7a0437f04f83: Pull complete 
Digest: sha256:5528e8b1b1719d34604c87e11dcd1c0a20bedf46e83b5632cdeac91b8c04efc1
Status: Downloaded newer image <span class="token keyword">for</span> centos:latest
docker.io/library/centos:latest
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>用户也可以在登录后通过 <code>docker push</code> 命令来将本地镜像推送到 Docker Hub。</p>
<h3 id="_3、自动创建" tabindex="-1"><a class="header-anchor" href="#_3、自动创建" aria-hidden="true">#</a> 3、自动创建</h3>
<p>自动创建（Automated Builds）是 Docker Hub 提供的自动化服务，这一功能可以自动跟随项目代码的变更而重新构建镜像。</p>
<p>例如，用户构建了某应用镜像，如果应用发布新版本，用户需要手动更新镜像。而自动创建则允许用户通过 Docker Hub 指定跟踪一个目标网站（目前支持 GitHub 或 BitBucket）上的项目，一旦项目发生新的提交，则自动执行创建。</p>
<p>要配置自动创建，包括如下的步骤：</p>
<ol>
<li>创建并登录 Docker Hub，以及目标网站如 Github；</li>
<li>在目标网站中允许 Docker Hub 访问服务；</li>
<li>在 Docker Hub 中配置一个“自动创建”类型的项目；</li>
<li>选取一个目标网站中的项目（需要含 Dockerfile）和分支；</li>
<li>指定 Dockerfile 的位置，并提交创建。</li>
</ol>
<p>之后，可以在 Docker Hub 的“自动创建”页面中跟踪每次创建的状态。</p>
<h2 id="第三方镜像市场" tabindex="-1"><a class="header-anchor" href="#第三方镜像市场" aria-hidden="true">#</a> 第三方镜像市场</h2>
<p>国内不少云服务商都提供了 Docker 镜像市场，包括腾讯云、网易云、阿里云等。下面以<a href="https://hub.tenxcloud.com/" target="_blank" rel="noopener noreferrer">时速云<ExternalLinkIcon/></a>为例，介绍如何使用这些市场，如图 5-2 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Docker/assets/docker_5-2.png" alt="" loading="lazy"></p>
<p><u>图 5-2</u>	时速云镜像市场</p>
</div>
<h3 id="_1、查看镜像" tabindex="-1"><a class="header-anchor" href="#_1、查看镜像" aria-hidden="true">#</a> 1、查看镜像</h3>
<p>访问 <a href="https://hub.tenxcloud.com" target="_blank" rel="noopener noreferrer">https://hub.tenxcloud.com<ExternalLinkIcon/></a> ，即可看到己存在的仓库和存储的镜像，包括 Ubuntu、Java、Mongo、MySQL、Nginx 等热门仓库和镜像。时速云官方仓库中的镜像会保持与Docker Hub 中官方镜像的同步。</p>
<p>以 MongoDB 仓库为例，其中包括了 2.6、3.0 和 3.2 等镜像。</p>
<h3 id="_2、下载镜像" tabindex="-1"><a class="header-anchor" href="#_2、下载镜像" aria-hidden="true">#</a> 2、下载镜像</h3>
<p>下载镜像也是使用 <code>docker pull</code> 命令，但是要在镜像名称前添加注册服务器的具体地址。格式为 index.tenxcloud.com/&lt;namespace&gt;/&lt;reposito ry&gt;:&lt;tag &gt;。</p>
<p>例如，要下载 Docker 官方仓库中的 node:latest 镜像，可以使用如下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> pull hub.c.163.com/public/centos:6.5
<span class="token number">6.5</span>: Pulling from public/centos
96057de2d572: Pull complete 
a3ed95caeb02: Pull complete 
8a1dcc3f76c2: Pull complete 
8fe56c90e86a: Pull complete 
43fc3558431f: Pull complete 
5881bc109689: Pull complete 
Digest: sha256:92fd18cda0cbf63bb4b5ffd0c073a9d689d5b202e3b491cbc74488fff1c37d11
Status: Downloaded newer image <span class="token keyword">for</span> hub.c.163.com/public/centos:6.5
hub.c.163.com/public/centos:6.5

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>正常情况下，镜像下载会比直接从 Docker Hub 下载快得多。通过 <code>docker images</code> 命令来查看下载到本地的镜像：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> images
REPOSITORY                    TAG       IMAGE ID       CREATED        SIZE
test/ubuntu                   v1.0      00cf452ac39b   <span class="token number">23</span> hours ago   <span class="token number">72</span>.8MB
ubuntu                        latest    fb52e22af1b0   <span class="token number">7</span> days ago     <span class="token number">72</span>.8MB
ubuntu                        <span class="token number">18.04</span>     54919e10a95d   <span class="token number">7</span> days ago     <span class="token number">63</span>.1MB
centos                        latest    300e315adb2f   <span class="token number">9</span> months ago   209MB
hub.c.163.com/public/centos   <span class="token number">6.5</span>       997f0ed97903   <span class="token number">5</span> years ago    442MB
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>下载后，可以更新镜像的标签，与官方标签保持一致，方便使用：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> tag hub.c.163.com/public/centos:6.5  centos:6.5
kei@kei-KVM:/etc/docker$ <span class="token function">docker</span> images
REPOSITORY                    TAG       IMAGE ID       CREATED        SIZE
test/ubuntu                   v1.0      00cf452ac39b   <span class="token number">23</span> hours ago   <span class="token number">72</span>.8MB
ubuntu                        latest    fb52e22af1b0   <span class="token number">7</span> days ago     <span class="token number">72</span>.8MB
ubuntu                        <span class="token number">18.04</span>     54919e10a95d   <span class="token number">7</span> days ago     <span class="token number">63</span>.1MB
centos                        latest    300e315adb2f   <span class="token number">9</span> months ago   209MB
centos                        <span class="token number">6.5</span>       997f0ed97903   <span class="token number">5</span> years ago    442MB
hub.c.163.com/public/centos   <span class="token number">6.5</span>       997f0ed97903   <span class="token number">5</span> years ago    442MB
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>除了使用这些公共镜像服务外，还可以搭建本地的私有仓库服务器。</p>
<h2 id="搭建本地私有仓库" tabindex="-1"><a class="header-anchor" href="#搭建本地私有仓库" aria-hidden="true">#</a> 搭建本地私有仓库</h2>
<h3 id="_1、创建私有仓库" tabindex="-1"><a class="header-anchor" href="#_1、创建私有仓库" aria-hidden="true">#</a> 1、创建私有仓库</h3>
<p>安装 Docker 后，可以通过官方提供的 registry 镜像来简单搭建一套本地私有仓库环境：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> pull registry:2
<span class="token number">2</span>: Pulling from library/registry
6a428f9f83b0: Pull complete 
90cad49de35d: Pull complete 
b215d0b40846: Pull complete 
429305b6c15c: Pull complete 
6f7e10a4e907: Pull complete 
Digest: sha256:265d4a5ed8bf0df27d1107edb00b70e658ee9aa5acb3f37336c5a17db634481e
Status: Downloaded newer image <span class="token keyword">for</span> registry:2
docker.io/library/registry:2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>这将自动下载井启动一个 registry 容器，创建本地的私有仓库服务。默认情况下，仓库会被创建在容器的 <code>/var/lib/registry</code> 目录下。可以通过 -v 参数来将镜像文件存放在本地的指定路径。例如下面的例子将上传的镜像放到 <code>/opt/data/registry</code> 目录：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> run -d -v /opt/registry:/var/lib/registry -p <span class="token number">5000</span>:5000 --name myregistry registry:2
933e961801d6fb8292f97f1d1eeeeb2457ac40333a562d82907f1b9bea08924c
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>此时，在本地将启动一个私有仓库服务，监听端口为 5000。</p>
<p>浏览器访问 http://127.0.0.1:5000/v2，出现下面情况说明 registry 运行正常。</p>
<div class="custom-container center">
<p><img src="@source/project/Docker/assets/docker_5-3.png" alt="" loading="lazy"></p>
<p><u>图 5-3</u>	registry 运行情况</p>
</div>
<h3 id="_2、管理私有仓库" tabindex="-1"><a class="header-anchor" href="#_2、管理私有仓库" aria-hidden="true">#</a> 2、管理私有仓库</h3>
<p>首先在你的系统上搭建私有仓库，查看其地址为 127.0.0.1:5000，然后测试上传和下载镜像 ubuntu:18.04。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> images
REPOSITORY   TAG       IMAGE ID       CREATED        SIZE
registry     <span class="token number">2</span>         b2cb11db9d3d   <span class="token number">6</span> days ago     <span class="token number">26</span>.2MB
ubuntu       <span class="token number">18.04</span>     54919e10a95d   <span class="token number">7</span> days ago     <span class="token number">63</span>.1MB
centos       latest    300e315adb2f   <span class="token number">9</span> months ago   209MB
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>使用 <code>docker tag</code> 命令将这个镜像标记为 localhost:5000/ubuntu:18.04（格式为 docker tag [IMAGE[:TAG]] [REGISTRYHOST/] [USERNAME/] NAME [:TAG ]）。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> tag ubuntu:18.04 localhost:5000/ubuntu:18.04
$ <span class="token function">docker</span> images
REPOSITORY              TAG       IMAGE ID       CREATED        SIZE
registry                <span class="token number">2</span>         b2cb11db9d3d   <span class="token number">6</span> days ago     <span class="token number">26</span>.2MB
localhost:5000/ubuntu   <span class="token number">18.04</span>     54919e10a95d   <span class="token number">7</span> days ago     <span class="token number">63</span>.1MB
ubuntu                  <span class="token number">18.04</span>     54919e10a95d   <span class="token number">7</span> days ago     <span class="token number">63</span>.1MB
centos                  latest    300e315adb2f   <span class="token number">9</span> months ago   209MB
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>使用 <code>docker push</code> 上传标记的镜像：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> push localhost:5000/ubuntu:18.04 
The push refers to repository <span class="token punctuation">[</span>localhost:5000/ubuntu<span class="token punctuation">]</span>
6babb56be259: Pushed 
<span class="token number">18.04</span>: digest: sha256:b9caadbf898c50ce67da0ab5bafc4680997b010c3e17d2bb73d2ae5fe056e52b size: <span class="token number">529</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>访问 http://127.0.0.1:5000/v2/_catalog 查看私有仓库目录，可以看到刚上传的镜像了：</p>
<div class="custom-container center">
<p><img src="@source/project/Docker/assets/docker_5-4.png" alt="" loading="lazy"></p>
<p><u>图 5-4</u>	私有仓库目录</p>
</div>
<p>下载私有仓库的镜像：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> images
REPOSITORY   TAG       IMAGE ID       CREATED        SIZE
registry     <span class="token number">2</span>         b2cb11db9d3d   <span class="token number">6</span> days ago     <span class="token number">26</span>.2MB
ubuntu       <span class="token number">18.04</span>     54919e10a95d   <span class="token number">7</span> days ago     <span class="token number">63</span>.1MB
centos       latest    300e315adb2f   <span class="token number">9</span> months ago   209MB
$ <span class="token function">docker</span> pull localhost:5000/ubuntu:18.04
<span class="token number">18.04</span>: Pulling from ubuntu
Digest: sha256:b9caadbf898c50ce67da0ab5bafc4680997b010c3e17d2bb73d2ae5fe056e52b
Status: Downloaded newer image <span class="token keyword">for</span> localhost:5000/ubuntu:18.04
localhost:5000/ubuntu:18.04
$ <span class="token function">docker</span> images
REPOSITORY              TAG       IMAGE ID       CREATED        SIZE
registry                <span class="token number">2</span>         b2cb11db9d3d   <span class="token number">6</span> days ago     <span class="token number">26</span>.2MB
ubuntu                  <span class="token number">18.04</span>     54919e10a95d   <span class="token number">7</span> days ago     <span class="token number">63</span>.1MB
localhost:5000/ubuntu   <span class="token number">18.04</span>     54919e10a95d   <span class="token number">7</span> days ago     <span class="token number">63</span>.1MB
centos                  latest    300e315adb2f   <span class="token number">9</span> months ago   209MB
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>下载后，还可以添加 一个更通用的标签 ubuntu:04，方便后续使用：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> tag localhost:5000/ubuntu:18.04 test_ubuntu:18.04 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>如果要使用安全证书，用户也可以从较知名的 CA 服务商（如 verisign）申请公开的
SSL/TLS 证书，或者使用 OpenSSL 等软件来自行生成。</p>
</div>
<h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2>
<p>仓库是集中维护容器镜像的地方，为 Docker 镜像文件的分发和管理提供了便捷的途径。这里介绍的 Docker Hub 和时速云镜像市场两个公共仓库服务，可以方便个人用户进行镜像的下载和使用等操作。</p>
<p>在企业的生产环境中，往往需要使用私有仓库来维护内部镜像，这里也介绍了基本的搭建操作，在后续部分中，将介绍私有仓库的更多配置选项。</p>
<p>除了官方的 registry 项目外，用户还可以使用其他的开源方案（例如 nexus）来搭建私有化的容器镜像仓库。</p>
</template>
