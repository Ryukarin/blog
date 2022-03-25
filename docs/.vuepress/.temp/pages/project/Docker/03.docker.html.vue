<template><p>镜像是 Docker 三大核心概念中最重要的，自 Docker 诞生之日起镜像就是相关社区最为热门的关键词。</p>
<p>Docker 运行容器前需要本地存在对应的镜像，如果镜像不存在，Docker 会尝试先从默认镜像仓库下载（默认使用 Docker Hub 公共注册服务器中的仓库），用户也可以通过配置，使用自定义的镜像仓库。</p>
<p>本章将围绕镜像这一核心概念介绍具体操作，包括如何使用 <code>pull</code> 命令从 Docker Hub 仓库中下载镜像到本地；如何查看本地已有的镜像信息和管理镜像标签；如何在远端仓库使用 <code>search</code> 命令进行搜索和过滤；如何删除镜像标签和镜像文件；如何创建用户定制的镜像并且保存为外部文件。最后，还将介绍如何往 Docker Hub 仓库中推送自己的镜像。</p>
<h2 id="获取镜像" tabindex="-1"><a class="header-anchor" href="#获取镜像" aria-hidden="true">#</a> 获取镜像</h2>
<p>镜像是运行容器的前提，官方的 Docker Hub 网站已经提供了数十万个镜像供大家开放下载。但是，根据 Docker 公司政策，2020 年 11 月 01 日起将逐步向 Docker Hub 匿名和免费用户实施速率和拉取请求次数限制。因此，如果您在个人版中构建服务拉取 Docker Hub 镜像，将可能受此影响导致构建失败。</p>
<p>关于 Docker Hub 拉取请求次数限制的详细介绍，请参见 <a href="https://docs.docker.com/docker-hub/download-rate-limit/" target="_blank" rel="noopener noreferrer">Download rate limit<ExternalLinkIcon/></a>。</p>
<div class="custom-container tip"><p class="custom-container-title">解决方法</p>
<p>要解决此问题，需要配置国内仓库源。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">vim</span> /etc/docker/daemon.json
<span class="token comment">#新建daemon.json文件，并配置以下内容</span>
<span class="token punctuation">{</span>
  <span class="token string">"registry-mirrors"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">"&lt;国内加速镜像源地址>"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token comment">#保存推出</span>

<span class="token comment">#国内加速镜像源地址</span>
https://registry.docker-cn.com
http://hub-mirror.c.163.com
https://3laho3y3.mirror.aliyuncs.com
http://f1361db2.m.daocloud.io
https://mirror.ccs.tencentyun.com

<span class="token comment">#然后重新加载配置，重启服务</span>
$ <span class="token function">sudo</span> systemctl daemon-reload
$ <span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>之后就可以正常 pull 镜像了。</p>
</div>
<p>我们可以使用 <code>docker [image] pull</code> 命令直接从 Docker Hub 镜像源来下载镜像。该命令的格式为 <code>docker [image] pull NAME[:TAG]</code>。</p>
<p>其中，NAME 是镜像仓库名称（用来区分镜像），TAG 是镜像的标签（往往用来表示版本
信息）。通常情况下，描述一个镜像需要包括“名称+标签”信息。</p>
<p>例如，获取一个 Ubuntu 18.04 系统的基础镜像可以使用如下的命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> pull ubuntu:18.04
<span class="token number">18.04</span>: Pulling from library/ubuntu
e4ca327ec0e7: Pull complete 
Digest: sha256:9bc830af2bef73276515a29aa896eedfa7bdf4bdbc5c1063b4c457a4bbb8cd79
Status: Downloaded newer image <span class="token keyword">for</span> ubuntu:18.04
docker.io/library/ubuntu:18.04
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>对于 Docker 镜像来说，如果不显式指定 TAG，则默认会选择 latest 标签，这会下载仓库中最新版本的镜像。</p>
<p>下面的例子将从 centos 仓库下载一个最新版本的 centos 操作系统的镜像：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> pull centos
Using default tag: latest
latest: Pulling from library/centos
7a0437f04f83: Pull complete 
Digest: sha256:5528e8b1b1719d34604c87e11dcd1c0a20bedf46e83b5632cdeac91b8c04efc1
Status: Downloaded newer image <span class="token keyword">for</span> centos:latest
docker.io/library/centos:latest
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>该命令实际上下载的就是 centos:latest 镜像。</p>
<div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>一般来说，镜像的 latest 标签意味着该镜像的内容会跟踪最新版本的变更而变化，内容是不稳定的。因此，从稳定性上考虑，不要在生产环境中忽略镜像的标签信息或使用默认的 latest 标记的镜像。</p>
</div>
<p>下载过程中可以看出，镜像文件一般由若干层（layer）组成，e4ca327ec0e7 这样的串是层的唯一 id（实际上完整的 id 包括 256 比特，64 个十六进制字符组成）。使用 <code>docker pull</code> 命令下载中会获取并输出镜像的各层信息。当不同的镜像包括相同的层时，本地仅存储了层的一份内容，减小了存储空间。</p>
<p>你可能会想到，在不同的镜像仓库服务器的情况下，可能会出现镜像重名的情况。</p>
<p>严格地讲，镜像的仓库名称中还应该添加仓库地址（即 registry，注册服务器）作为前缀，只是默认使用的是官方 Docker Hub 服务，该前缀可以忽略。</p>
<p>例如，<code>docker pull ubuntu:18.04</code> 命令相当于 <code>docker pull registry.hub.docker.com/ubuntu:18.04</code> 命令，即从默认的注册服务器 Docekr Hub Registry 中的 ubuntu 仓库来下载标记为 18.04 的镜像。</p>
<p>如果从非官方的仓库下载，则需要在仓库名称前指定完整的仓库地址。例如从网易蜂巢命令，此时下载的镜像名称为 <code>hub.c.163.com/public/ubuntu:18.04</code>：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> pull hub.c.163.com/public/ubuntu:18.04
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>pull</code> 子命令支持的选项主要包括：</p>
<ul>
<li>
<p>-a，--all-tags=true|false：是否获取仓库中的所有镜像，默认为否；</p>
</li>
<li>
<p>--disable-content-trust：取消镜像的内容校验，默认为真。</p>
</li>
</ul>
<p>另外，有时需要使用镜像代理服务来加速 Docke 镜像获取过程，可以在 Docker 服务
启动配置中增加 --registry-mirror=proxy_URL 来指定镜像代理服务地址（如 https://
registry.docker-en.com）</p>
<p>下载镜像到本地后，即可随时使用该镜像了，例如利用该镜像创建一个容器，在其中运
行 bash 应用，执行打印&quot;HelloWorld&quot;命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> run -it ubuntu:18.04 <span class="token function">bash</span>
root@65663247040f:/<span class="token comment"># echo "Hello World"</span>
Hello World
root@65663247040f:/<span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>
$  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="查看镜像信息" tabindex="-1"><a class="header-anchor" href="#查看镜像信息" aria-hidden="true">#</a> 查看镜像信息</h2>
<p>主要介绍 Docker 镜像的 <code>ls</code>、<code>tag</code> 和 <code>inspect</code> 子命令。</p>
<h3 id="_1、使用-images-命令列出镜像" tabindex="-1"><a class="header-anchor" href="#_1、使用-images-命令列出镜像" aria-hidden="true">#</a> 1、使用 images 命令列出镜像</h3>
<p>使用 <code>docker images</code> 或 <code>docker image ls</code> 命令可以列出本地主机上已有镜像的基本信息。</p>
<p>例如，下面的命令列出了之前下载的镜像信息：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> images
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
ubuntu        <span class="token number">18.04</span>     54919e10a95d   <span class="token number">2</span> days ago     <span class="token number">63</span>.1MB
hello-world   latest    d1165f221234   <span class="token number">6</span> months ago   <span class="token number">13</span>.3kB
centos        latest    300e315adb2f   <span class="token number">8</span> months ago   209MB
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>在列出信息中，可以看到几个字段信息：</p>
<ul>
<li>
<p>来自于哪个仓库，比如 ubuntu 表示 ubuntu 系列的基础镜像；</p>
</li>
<li>
<p>镜像的标答信息，比如 18.04、latest 表示不同的版本信息。标签只是标记，并不能标
识镜像内容；</p>
</li>
<li>
<p>镜像的 ID（唯一标识镜像），如果两个镜像的 ID 相同，说明它们实际上指向了同一个镜像，只是具有不同标签名称而已；</p>
</li>
<li>
<p>创建时间，说明镜像最后的更新时间；</p>
</li>
<li>
<p>镜像大小，优秀的镜像往往体积都较小。</p>
</li>
</ul>
<p>其中镜像的 ID 信息十分重要，它唯一标识了镜像。在使用镜像 ID 的时候，一般可以使用该 ID 的前若干个字符组成的可区分串来替代完整的 ID。</p>
<p>TAG 信息用于标记来自同一个仓库的不同镜像。例如 ubuntu 仓库中有多个镜像，通过 TAG 信息来区分发行版本，如 18.04、18.10 等。</p>
<p>镜像大小信息只是表示了该镜像的逻辑体积大小，实际上由于相同的镜像层本地只会存储一份，物理上占用的存储空间会小于各镜像逻辑体积之和。</p>
<p>images 子命令主要支持如下选项，用户可以自行进行尝试：</p>
<ul>
<li>
<p>-a，--all=true|false：列出所有（包括临时文件）镜像文件，默认为否；</p>
</li>
<li>
<p>--digests=true|false：列出镜像的数字摘要值，默认为否；</p>
</li>
<li>
<p>-f，--filter=[]：过滤列出的镜像，如 dangling=true 只显示没有被使用的镜像；也可指定带有特定标注的镜像等；</p>
</li>
<li>
<p>--format=&quot;TEMPLATE&quot;：控制输出格式，如 <code>.ID</code> 代表 ID 信息，<code>.Repository</code> 代表仓库信息等；</p>
</li>
<li>
<p>--no-trunc=true|false：对输出结果中太长的部分是否进行截断，如镜像的 ID 信息，默认为是；</p>
</li>
<li>
<p>-q，--quiet=true|false：仅输出 ID 信息，默认为否。</p>
</li>
</ul>
<p>其中，还支持对输出结果进行控制的选项，如 -f. --filter=[]、--no-trunc=true|false、-q、--quiet=true|false 等。</p>
<p>更多子命令选项还可以通过 <code>man docker-images</code> 来查看。</p>
<h3 id="_2、使用-tag-命令添加镜像标签" tabindex="-1"><a class="header-anchor" href="#_2、使用-tag-命令添加镜像标签" aria-hidden="true">#</a> 2、使用 tag 命令添加镜像标签</h3>
<p>为了方便在后续工作中使用特定镜像，还可以使用 <code>docker tag</code> 命令来为本地镜像任意添加新的标签。 例如，添加 一 个新的 centos:latest 镜像标签：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> tag centos:latest mycentos
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>再次使用 <code>docker images</code> 列出本地主机上镜像信息， 可以看到多了一 个 mycentos:latest 标签的镜像：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> images
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
ubuntu        <span class="token number">18.04</span>     54919e10a95d   <span class="token number">2</span> days ago     <span class="token number">63</span>.1MB
hello-world   latest    d1165f221234   <span class="token number">6</span> months ago   <span class="token number">13</span>.3kB
centos        latest    300e315adb2f   <span class="token number">8</span> months ago   209MB
mycentos      latest    300e315adb2f   <span class="token number">8</span> months ago   209MB
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>之后， 用户就可以直接使用 mycentos:latest 来表示这个镜像了。
细心的你可能注意到， 这些 mycentos:latest 镜像的 ID 跟 centos:latest 是完全一致的，它们实际上指向了同一个镜像文件，只是别名不同而巳。<code>docker tag</code> 命令添加的标签实际上起到了类似链接的作用。</p>
<h3 id="_3、使用-inspect-命令查看详细信息" tabindex="-1"><a class="header-anchor" href="#_3、使用-inspect-命令查看详细信息" aria-hidden="true">#</a> 3、使用 inspect 命令查看详细信息</h3>
<p>使用 <code>docker [image] inspect</code> 命令可以获取该镜像的详细信息，包括制作者、适应架构、各层的数字摘要等：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> inspect ubuntu:18.04
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">"Id"</span><span class="token builtin class-name">:</span> <span class="token string">"sha256:54919e10a95d6f756f7286dc0fa6b3e25b637a7f90e361504b0b14ab6762a547"</span>,
        <span class="token string">"RepoTags"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token string">"ubuntu:18.04"</span>
        <span class="token punctuation">]</span>,
        <span class="token string">"RepoDigests"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token string">"ubuntu@sha256:9bc830af2bef73276515a29aa896eedfa7bdf4bdbc5c1063b4c457a4bbb8cd79"</span>
        <span class="token punctuation">]</span>,
        <span class="token string">"Parent"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
        <span class="token string">"Comment"</span><span class="token builtin class-name">:</span> <span class="token string">""</span>,
        <span class="token string">"Created"</span><span class="token builtin class-name">:</span> <span class="token string">"2021-08-31T01:20:48.414661265Z"</span>,
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>上面代码返回的是一个 JSON 格式的消息，如果我们只要其中一项内容时，可以使用 -f 来指定，例如，获取镜像的 Architecture：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> inspect -f <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token string">".Architecture"</span><span class="token punctuation">}</span><span class="token punctuation">}</span> ubuntu:18.04
amd64
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_4、使用-history-命令查看镜像历史" tabindex="-1"><a class="header-anchor" href="#_4、使用-history-命令查看镜像历史" aria-hidden="true">#</a> 4、使用 history 命令查看镜像历史</h3>
<p>既然镜像文件由多个层组成， 那么怎么知道各个层的内容具体是什么呢？这时候可以使用 <code>history</code> 子命令，该命令将列出各层的创建信息。</p>
<p>例如，查看 ubuntu:18.04 镜像的创建过程，可以使用如下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token function">history</span> ubuntu:18.04
IMAGE          CREATED      CREATED BY                                      SIZE      COMMENT
54919e10a95d   <span class="token number">2</span> days ago   /bin/sh -c <span class="token comment">#(nop)  CMD ["bash"]                 0B        </span>
<span class="token operator">&lt;</span>missing<span class="token operator">></span>      <span class="token number">2</span> days ago   /bin/sh -c <span class="token comment">#(nop) ADD file:425a053fd043786e9…  63.1MB    </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>过长的命令被自动截断了，可以使用前面提到的 --no-trunc 选项来输出完整命令。</p>
</div>
<h2 id="搜寻镜像" tabindex="-1"><a class="header-anchor" href="#搜寻镜像" aria-hidden="true">#</a> 搜寻镜像</h2>
<p>本节主要介绍 Docker 镜像的 <code>search</code> 子命令。使用 <code>docker search</code> 命令可以搜索 Docker Hub 官方仓库中的镜像。 语法为 <code>docker search [option] keyword</code>。支持的命令选项主要包括：</p>
<ul>
<li>
<p>-f，--filter filter：过滤输出内容；</p>
</li>
<li>
<p>--format string：格式化输出内容；</p>
</li>
<li>
<p>--limit int：限制输出结果个数，默认为 25 个；</p>
</li>
<li>
<p>--no-trunc：不截断输出结果。</p>
</li>
</ul>
<p>例如，搜索官方提供的带 nginx 关键字的镜像，如下所示：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> search --filter<span class="token operator">=</span>is-official<span class="token operator">=</span>true nginx
NAME      DESCRIPTION                STARS     OFFICIAL   AUTOMATED
nginx     Official build of Nginx.   <span class="token number">15394</span>     <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>       
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>再比如，搜索所有收藏数超过 4 的关键词包括 tensorflow 的镜像：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> search --filter<span class="token operator">=</span>stars<span class="token operator">=</span><span class="token number">4</span> tensorflow
NAME                                       DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
tensorflow/tensorflow                      Official Docker images <span class="token keyword">for</span> the machine learn…   <span class="token number">1944</span>                 
jupyter/tensorflow-notebook                Jupyter Notebook Scientific Python Stack w/ …   <span class="token number">280</span>                  
tensorflow/serving                         Official images <span class="token keyword">for</span> TensorFlow Serving <span class="token punctuation">(</span>http…   <span class="token number">117</span>                  
rocm/tensorflow                            Tensorflow with ROCm backend support            	<span class="token number">62</span>                   
xblaster/tensorflow-jupyter                Dockerized Jupyter with tensorflow              	<span class="token number">56</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
floydhub/tensorflow                        tensorflow                                      	<span class="token number">29</span>                   <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
opensciencegrid/tensorflow-gpu             TensorFlow GPU <span class="token builtin class-name">set</span> up <span class="token keyword">for</span> OSG                   	<span class="token number">12</span>                   
emacski/tensorflow-serving                 Project images from https://github.com/emacs…   <span class="token number">10</span>                   
tokunagaken/tensorflow-keras-jupyter-py3   TensorFlow-gpu <span class="token number">1.13</span>.1 Keras <span class="token number">2.2</span>.4 python <span class="token number">3.5</span>…   <span class="token number">5</span>                    
tensorflow/tf_grpc_test_server             Testing server <span class="token keyword">for</span> GRPC-based distributed ru…   <span class="token number">4</span>               
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>可以看到返回了很多包含关键字的镜像，其中包括镜像名字、描述、收藏数（表示该镜像的受欢迎程度）、是否官方创建、是否自动创建等。默认的输出结果将按照星级评价进行排序。</p>
<h2 id="删除和清理镜像" tabindex="-1"><a class="header-anchor" href="#删除和清理镜像" aria-hidden="true">#</a> 删除和清理镜像</h2>
<p>主要介绍 Docker 镜像的 <code>rm</code> 和 <code>prune</code> 子命令。</p>
<h3 id="_1、使用标签删除镜像" tabindex="-1"><a class="header-anchor" href="#_1、使用标签删除镜像" aria-hidden="true">#</a> 1、使用标签删除镜像</h3>
<p>使用 <code>docker rmi</code> 或 <code>docker image rm</code> 命令可以删除镜像，命令格式为 <code>docker rmi IMAGE [IMAGE...]</code>，其中 IMAGE 可以为标签或 ID。</p>
<p>支持选项包括：</p>
<ul>
<li>-f，-force：强制删除镜像，即使有容器依赖它；</li>
<li>-no-prune：不要清理未带标签的父镜像。</li>
</ul>
<p>例如，要删除掉 mycentos:latest 镜像，可以使用如下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> rmi mycentos:latest 
Untagged: mycentos:latest
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>你可能会想到，本地的 centos:latest 镜像是否会受到此命令的影响。无须担心，当同一个镜像拥有多个标签的时候，<code>docker rmi</code> 命令只是删除了该镜像多个标签中的指定标签而巳，并不影响镜像文件。因此上述操作相当于只是删除了镜像 300e315adb2f 的一个标签副本而已。</p>
<p>保险起见，再次查看本地的镜像，发现 centos:latest 镜像（准确地说，300e315adb2f
镜像）仍然存在：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> images
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
ubuntu        <span class="token number">18.04</span>     54919e10a95d   <span class="token number">2</span> days ago     <span class="token number">63</span>.1MB
hello-world   latest    d1165f221234   <span class="token number">6</span> months ago   <span class="token number">13</span>.3kB
centos        latest    300e315adb2f   <span class="token number">8</span> months ago   209MB
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>但当镜像只剩下一个标签的时候就要小心了，此时再使用 <code>docker rmi</code> 命令会彻底删除镜像。</p>
<p>例如通过执行 <code>docker rmi</code> 命令来删除只有一个标签的镜像，可以看出会删除这个镜像文件的所有文件层：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> rmi hello-world:latest 
Untagged: hello-world:latest
Untagged: hello-world@sha256:7d91b69e04a9029b99f3585aaaccae2baa80bcf318f4a5d2165a9898cd2dc0a1
Deleted: sha256:d1165f2212346b2bab48cb01c1e39ee8ad1be46b87873d9ca7a4e434980a7726
Deleted: sha256:f22b99068db93900abe17f7f5e09ec775c2826ecfe9db961fea68293744144bd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>如果在删除镜像，遇到下面的 Erroe 时，需要先删除容器，再删除镜像。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 1、删除镜像时出现 Error</span>
$ <span class="token function">docker</span> rmi hello-world:latest 
Error response from daemon: conflict: unable to remove repository reference <span class="token string">"hello-world:latest"</span> <span class="token punctuation">(</span>must force<span class="token punctuation">)</span> - container 882249d25e88 is using its referenced image d1165f221234

<span class="token comment"># 2、先删除容器（可以查到镜像所在容器的CONTAINER ID）</span>
$ <span class="token function">docker</span> <span class="token function">ps</span> -a
CONTAINER ID   IMAGE          COMMAND    CREATED       STATUS                   PORTS     NAMES
882249d25e88   hello-world    <span class="token string">"/hello"</span>   <span class="token number">4</span> hours ago   Exited <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">4</span> hours ago             priceless_neumann
dba94731dbca   centos         <span class="token string">"bash"</span>     <span class="token number">4</span> hours ago   Exited <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">4</span> hours ago             romantic_benz
810d3dbcd35b   ubuntu:18.04   <span class="token string">"bash"</span>     <span class="token number">4</span> hours ago   Exited <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">4</span> hours ago             naughty_hoover
<span class="token comment">#删除容器（对应的CONTAINER ID）</span>
$ <span class="token function">docker</span> <span class="token function">rm</span> 882249d25e88
882249d25e88

<span class="token comment"># 3、最后删除镜像</span>
$ <span class="token function">docker</span> rmi hello-world:latest 
Untagged: hello-world:latest
Untagged: hello-world@sha256:7d91b69e04a9029b99f3585aaaccae2baa80bcf318f4a5d2165a9898cd2dc0a1
Deleted: sha256:d1165f2212346b2bab48cb01c1e39ee8ad1be46b87873d9ca7a4e434980a7726
Deleted: sha256:f22b99068db93900abe17f7f5e09ec775c2826ecfe9db961fea68293744144bd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></div>
<h3 id="_2、使用镜像-id-来删除镜像" tabindex="-1"><a class="header-anchor" href="#_2、使用镜像-id-来删除镜像" aria-hidden="true">#</a> 2、使用镜像 ID 来删除镜像</h3>
<p>当使用 <code>docker rmi</code> 命令，并且后面跟上镜像的 ID （也可以是能进行区分的部分 ID 前缀）时， 会先尝试删除所有指向该镜像的标签，然后删除该镜像文件本身。</p>
<p>注意，当有该镜像创建的容器存在时，镜像文件默认是无法被删除的，例如：先利用 ubuntu:18.04 镜像创建一个简单的容器来输出 一 段话：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> run ubuntu:18.04 <span class="token builtin class-name">echo</span> <span class="token string">'hello! I am here!'</span>
hello<span class="token operator">!</span> i am here<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>使用 <code>docker ps -a</code> 命令可以看到本机上存在的所有容器：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token function">ps</span> -a
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS                      PORTS     NAMES
586d17fcdf93   ubuntu:18.04   <span class="token string">"echo 'hello! i am h…"</span>  <span class="token number">25</span> seconds ago   Exited <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">23</span> seconds ago             vigilant_wu
dba94731dbca   centos         <span class="token string">"bash"</span>                   <span class="token number">4</span> hours ago      Exited <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">4</span> hours ago                romantic_benz
810d3dbcd35b   ubuntu:18.04   <span class="token string">"bash"</span>                   <span class="token number">4</span> hours ago      Exited <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">4</span> hours ago                naughty_hoover
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>可以看到，后台存在一个退出状态的容器，是刚基于 ubuntu:18.04 镜像创建的。试图删除该镜像，Docker 会提示有容器正在运行，无法删除：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> rmi ubuntu:18.04 
Error response from daemon: conflict: unable to remove repository reference <span class="token string">"ubuntu:18.04"</span> <span class="token punctuation">(</span>must force<span class="token punctuation">)</span> - container 810d3dbcd35b is using its referenced image 54919e10a95d
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果要想强行删除镜像， 可以使用 -f 参数：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> rmi -f ubuntu:18.04 
Untagged: ubuntu:18.04
Untagged: ubuntu@sha256:9bc830af2bef73276515a29aa896eedfa7bdf4bdbc5c1063b4c457a4bbb8cd79
Deleted: sha256:54919e10a95d6f756f7286dc0fa6b3e25b637a7f90e361504b0b14ab6762a547
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>注意，通常并不推荐使用 -f 参数来强制删除一个存在容器依赖的镜像。正确的做法是，先删除依赖该镜像的所有容器，再来删除镜像。</p>
<p>首先删除容器 <u>586d17fcdf93</u>：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token function">rm</span> 586d17fcdf93
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后使用 ID 来删除镜像，此时会正常打印出删除的各层信息：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> rmi 54919e10a95d
Untagged: ubuntu:18.04
Untagged: ubuntu@sha256:9bc830af2bef73276515a29aa896eedfa7bdf4bdbc5c1063b4c457a4bbb8cd79
Deleted: sha256:54919e10a95d6f756f7286dc0fa6b3e25b637a7f90e361504b0b14ab6762a547
Deleted: sha256:6babb56be2593d69d561cae7ad16b670a1ee7c0a32b4fa715007fba7febd5ddb
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_3、清理镜像" tabindex="-1"><a class="header-anchor" href="#_3、清理镜像" aria-hidden="true">#</a> 3、清理镜像</h3>
<p>使用 Docker 一段时间后，系统中可能会遗留一些临时的镜像文件，以及一些没有被使用的镜像，可以通过 <code>docker image prune</code> 命令来进行清理。</p>
<p>支待选项包括：</p>
<ul>
<li>
<p>-a，-all：删除所有无用镜像，不光是临时镜像；</p>
</li>
<li>
<p>-filter filter：只清理符合给定过滤器的镜像；</p>
</li>
<li>
<p>-f，-force：强制删除镜像，而不进行提示确认。</p>
</li>
</ul>
<p>例如，如下命令会自动清理临时的遗留镜像文件层，最后会提示释放的存储空间：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> $ <span class="token function">docker</span> image prune -f
 <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span> <span class="token builtin class-name">.</span>
 Total reclaimed space: <span class="token number">1.4</span> GB
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="创建镜像" tabindex="-1"><a class="header-anchor" href="#创建镜像" aria-hidden="true">#</a> 创建镜像</h2>
<p>创建镜像的方法主要有三种：基于已有镜像的容器创建、基于本地模板导入、基于 Dockerfile 创建。</p>
<p>这里主要介绍 Docker 的 <code>commit</code>、<code>import</code> 和 <code>build</code> 子命令。</p>
<h3 id="_1、基于已有容器创建" tabindex="-1"><a class="header-anchor" href="#_1、基于已有容器创建" aria-hidden="true">#</a> 1、基于已有容器创建</h3>
<p>该方法主要是使用 <code>docker [container] commit</code> 命令。</p>
<p>命令格式为 <code>docker [container] commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]</code>，主要选项包括：</p>
<ul>
<li>
<p>-a，--author=&quot;&quot;：作者信息；</p>
</li>
<li>
<p>-c，--change=[]：提交的时候执行 Dockerfile 指令，</p>
<p>包括CMD|ENTRYPOINT|ENV|EXPOSE|LABEL|ONBUILD|USER|VOLUME|WORKDIR 等；</p>
</li>
<li>
<p>-m，--message= “”：提交消息；</p>
</li>
<li>
<p>-p，--pause=true：提交时暂停容器运行。</p>
</li>
</ul>
<p>下面将演示如何使用该命令创建一个新镜像。</p>
<p>首先，启动一个镜像，并在其中进行修改操作。例如，创建一个 test 文件，之后退出，代码如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> run -it ubuntu:18.04 /bin/bash
root@38e4a9445436:/<span class="token comment"># touch test</span>
root@38e4a9445436:/<span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>记住容器的 ID 为 38e4a9445436。此时该容器与原 ubuntu:18.04 镜像相比，已经发生了改变，可以使用 <code>docker [container] commit</code> 命令来提交为一个新的镜像。提交时可以使用 ID 或名称来指定容器：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> commit -m <span class="token string">"ADDed a new file"</span> -a <span class="token string">"Docker Newbee"</span> 38e4a9445436 test:0.1
sha256:fdebc600d6f4ff0296917924668be67608af1af4ae10e4a9583478d9815a7969
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>顺利的话，会返回新创建镜像的 ID 信息，例如：</p>
<p><u>fdebc600d6f4ff0296917924668be67608af1af4ae10e4a9583478d9815a7969</u>。</p>
<p>此时查看本地镜像列表，会发现新创建的镜像已经存在了：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> images
REPOSITORY   TAG       IMAGE ID       CREATED          SIZE
<span class="token builtin class-name">test</span>         <span class="token number">0.1</span>       fdebc600d6f4   <span class="token number">28</span> seconds ago   <span class="token number">63</span>.1MB
ubuntu       <span class="token number">18.04</span>     54919e10a95d   <span class="token number">2</span> days ago       <span class="token number">63</span>.1MB
centos       latest    300e315adb2f   <span class="token number">8</span> months ago     209MB
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_2、基于本地模板导入" tabindex="-1"><a class="header-anchor" href="#_2、基于本地模板导入" aria-hidden="true">#</a> 2、基于本地模板导入</h3>
<p>用户也可以直接从一个操作系统模板文件导人一个镜像，主要使用 docker [container] import 命令。命令格式为 <code>docker [image] import [OPTIONS] file|URL| - [REPOSITORY [:TAG]]</code></p>
<p>要直接导人一个镜像，可以使用 OpenVZ 提供的模板来创建，或者用其他已导出的镜像模板来创建。OPENVZ 模板的下载地址为 <a href="https://download.openvz.org/template/precreated/" target="_blank" rel="noopener noreferrer">https://download.openvz.org/template/precreated/<ExternalLinkIcon/></a>。</p>
<p>例如，下载了 ubuntu-18.04 的模板压缩包，之后使用以下命令导人即可：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">wget</span> https://download.openvz.org/template/precreated/centos-7-x86_64-minimal.tar.gz
--2021-09-02 <span class="token number">16</span>:25:09--  https://download.openvz.org/template/precreated/centos-7-x86_64-minimal.tar.gz
正在解析主机 download.openvz.org <span class="token punctuation">(</span>download.openvz.org<span class="token punctuation">)</span><span class="token punctuation">..</span>. <span class="token number">185.231</span>.241.69
正在连接 download.openvz.org <span class="token punctuation">(</span>download.openvz.org<span class="token punctuation">)</span><span class="token operator">|</span><span class="token number">185.231</span>.241.69<span class="token operator">|</span>:443<span class="token punctuation">..</span>. 已连接。
已发出 HTTP 请求，正在等待回应<span class="token punctuation">..</span>. <span class="token number">200</span> OK
长度： <span class="token number">145639219</span> <span class="token punctuation">(</span>139M<span class="token punctuation">)</span> <span class="token punctuation">[</span>application/x-gzip<span class="token punctuation">]</span>
正在保存至: “centos-7-x86_64-minimal.tar.gz”

centos-7-x86_64-minimal.tar.gz        <span class="token number">100</span>%<span class="token punctuation">[</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">></span><span class="token punctuation">]</span> <span class="token number">138</span>.89M  <span class="token number">2</span>.15MB/s    用时 4m 48ss

<span class="token number">2021</span>-09-02 <span class="token number">16</span>:29:59 <span class="token punctuation">(</span><span class="token number">494</span> KB/s<span class="token punctuation">)</span> - 已保存 “centos-7-x86_64-minimal.tar.gz” <span class="token punctuation">[</span><span class="token number">145639219</span>/145639219<span class="token punctuation">]</span><span class="token punctuation">)</span>

$ <span class="token function">cat</span> centos-7-x86_64-minimal.tar.gz <span class="token operator">|</span> <span class="token function">docker</span> <span class="token function">import</span> - centos:7
sha256:f1dbb0e36a07382f4f6b2001836374e51d297c841fb1fe4e85dfa92ba3f43139
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>然后查看新导人的镜像，已经在本地存在了 :</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> images
REPOSITORY   TAG       IMAGE ID       CREATED         SIZE
centos       <span class="token number">7</span>         f1dbb0e36a07   <span class="token number">8</span> seconds ago   435MB
<span class="token builtin class-name">test</span>         <span class="token number">0.1</span>       fdebc600d6f4   <span class="token number">2</span> hours ago     <span class="token number">63</span>.1MB
ubuntu       <span class="token number">18.04</span>     54919e10a95d   <span class="token number">2</span> days ago      <span class="token number">63</span>.1MB
centos       latest    300e315adb2f   <span class="token number">8</span> months ago    209MB
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_3、基于-dockefile-创建" tabindex="-1"><a class="header-anchor" href="#_3、基于-dockefile-创建" aria-hidden="true">#</a> 3、基于 Dockefile 创建</h3>
<p>基于 Dockerfile 创建是最常见的方式。Dockerfile 是一个文本文件，利用给定的指令描述基于某个父镜像创建新镜像的过程。</p>
<p>下面给出 Dockerfile 的一个简单示例，基于 debian:stretch-slim 镜像安装 Python 3 环境，构成一个新的 python:3 镜像：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>FROM debian:stretch-slim

LABEL <span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token string">"1.0"</span> <span class="token assign-left variable">maintainer</span><span class="token operator">=</span><span class="token string">"docker user &lt;docker_user@githubs>"</span>

RUN <span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
	<span class="token function">apt-get</span> instal l-y python3 <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
	<span class="token function">apt-get</span> clean <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\</span>
	<span class="token function">rm</span> -rf /var/lib/apt/lists/*
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>创建镜像的过程可以使用 <code>docker [image] build</code> 命令，编译成功后本地将多出一个 python:3 镜像：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> build -t python:3 <span class="token builtin class-name">.</span>
Sending build context to Docker daemon  <span class="token number">2</span>.048kB
Step <span class="token number">1</span>/3 <span class="token builtin class-name">:</span> FROM debian:stretch-slim
 ---<span class="token operator">></span> 750df3e387d7
Step <span class="token number">2</span>/3 <span class="token builtin class-name">:</span> LABEL <span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token string">"1.0"</span> <span class="token assign-left variable">maintainer</span><span class="token operator">=</span><span class="token string">"docker user &lt;docker_user@githubs>"</span>
 ---<span class="token operator">></span> Using cache
 ---<span class="token operator">></span> 89c03eb7f46d
Step <span class="token number">3</span>/3 <span class="token builtin class-name">:</span> RUN <span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y python3 <span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> clean <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> -rf /var/lib/apt/lists/*
 ---<span class="token operator">></span> Running <span class="token keyword">in</span> 81e5fe4c9c9a
Get:1 http://security.debian.org/debian-security stretch/updates InRelease <span class="token punctuation">[</span><span class="token number">53.0</span> kB<span class="token punctuation">]</span>
Ign:2 http://deb.debian.org/debian stretch InRelease
Get:3 http://security.debian.org/debian-security stretch/updates/main amd64 Packages <span class="token punctuation">[</span><span class="token number">710</span> kB<span class="token punctuation">]</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
Setting up python3 <span class="token punctuation">(</span><span class="token number">3.5</span>.3-1<span class="token punctuation">)</span> <span class="token punctuation">..</span>.
running python rtupdate hooks <span class="token keyword">for</span> python3.5<span class="token punctuation">..</span>.
running python post-rtupdate hooks <span class="token keyword">for</span> python3.5<span class="token punctuation">..</span>.
Processing triggers <span class="token keyword">for</span> libc-bin <span class="token punctuation">(</span><span class="token number">2.24</span>-11+deb9u4<span class="token punctuation">)</span> <span class="token punctuation">..</span>.
Removing intermediate container 81e5fe4c9c9a
 ---<span class="token operator">></span> cb3faf5fd7e5
Successfully built cb3faf5fd7e5
Successfully tagged python:3
<span class="token comment"># 编译完成，再次查看下镜像，多出一个 python 的镜像</span>
$ <span class="token function">docker</span> images
REPOSITORY   TAG            IMAGE ID       CREATED        SIZE
python       <span class="token number">3</span>              cb3faf5fd7e5   <span class="token number">15</span> hours ago   <span class="token number">95</span>.2MB
centos       <span class="token number">7</span>              f1dbb0e36a07   <span class="token number">16</span> hours ago   435MB
<span class="token builtin class-name">test</span>         <span class="token number">0.1</span>            fdebc600d6f4   <span class="token number">18</span> hours ago   <span class="token number">63</span>.1MB
ubuntu       <span class="token number">18.04</span>          54919e10a95d   <span class="token number">2</span> days ago     <span class="token number">63</span>.1MB
debian       stretch-slim   750df3e387d7   <span class="token number">2</span> weeks ago    <span class="token number">55</span>.3MB
centos       latest         300e315adb2f   <span class="token number">8</span> months ago   209MB
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>更多使用 Dockerfile 的技巧将将在后面进行介绍。</p>
<h2 id="存出和载人镜像" tabindex="-1"><a class="header-anchor" href="#存出和载人镜像" aria-hidden="true">#</a> 存出和载人镜像</h2>
<p>主要介绍 Docker 镜像的 <code>save</code> 和 <code>load</code> 子命令。用户可以使用 <code>docker save</code> 和 <code>docker</code>
<code>[image] load</code> 命令来存出和载人镜像 。</p>
<h3 id="_1、存出镜像" tabindex="-1"><a class="header-anchor" href="#_1、存出镜像" aria-hidden="true">#</a> 1、存出镜像</h3>
<p>如果要导出镜像到本地文件，可以使用 <code>docker [image] save</code> 命令。该命令支持 -o、-output string 参数，导出镜像到指定的文件中。</p>
<p>例如，导出本地的 ubuntu:18.04 镜像为文件 ubuntu_18.04.tar，如下所示：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> images
REPOSITORY   TAG            IMAGE ID       CREATED        SIZE
python       <span class="token number">3</span>              cb3faf5fd7e5   <span class="token number">15</span> hours ago   <span class="token number">95</span>.2MB
centos       <span class="token number">7</span>              f1dbb0e36a07   <span class="token number">16</span> hours ago   435MB
<span class="token builtin class-name">test</span>         <span class="token number">0.1</span>            fdebc600d6f4   <span class="token number">18</span> hours ago   <span class="token number">63</span>.1MB
ubuntu       <span class="token number">18.04</span>          54919e10a95d   <span class="token number">2</span> days ago     <span class="token number">63</span>.1MB
debian       stretch-slim   750df3e387d7   <span class="token number">2</span> weeks ago    <span class="token number">55</span>.3MB
centos       latest         300e315adb2f   <span class="token number">8</span> months ago   209MB
$ <span class="token function">docker</span> save -o ubuntu_18.04.tar ubuntu:18.04 
$ <span class="token function">ls</span> -lh
总用量 63M
-rw-r--r-- <span class="token number">1</span> kei <span class="token function">docker</span> <span class="token number">197</span> <span class="token number">9</span>月   <span class="token number">2</span> <span class="token number">16</span>:57 Dockerfile
-rw------- <span class="token number">1</span> kei <span class="token function">docker</span> 63M <span class="token number">9</span>月   <span class="token number">3</span> 08:48 ubuntu_18.04.tar
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>之后，用户就可以通过复制 ubuntu_18.04.tar 文件将该镜像分享给他人。</p>
<h3 id="_2、载入镜像" tabindex="-1"><a class="header-anchor" href="#_2、载入镜像" aria-hidden="true">#</a> 2、载入镜像</h3>
<p>可以使用 <code>docker [image] load</code> 将导出的 tar 文件再导人到本地镜像库。支持 -i、-input string 选项，从指定文件中读人镜像内容。</p>
<p>例如，从文件 ubuntu_18.04.tar 导人镜像到本地镜像列表，如下所示：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> load -i ubuntu_ <span class="token number">18</span> 04.tar
Loaded image: ubuntu:18.04
或者 <span class="token builtin class-name">:</span>
$ <span class="token function">docker</span> load <span class="token operator">&lt;</span> ubuntu_18 04.tar
Loaded image: ubuntu:18.04
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>这将导人镜像及其相关的元数据信息（包括标签等）。导入成功后，可以使用 <code>docker images</code> 命令进行查看，与原镜像一致。</p>
<h2 id="上传镜像" tabindex="-1"><a class="header-anchor" href="#上传镜像" aria-hidden="true">#</a> 上传镜像</h2>
<p>主要介绍 Docker 镜像的 <code>push</code> 子命令。可以使用 <code>docker [image] push</code> 命令上传镜像到仓库，默认上传到 Docker Hub 官方仓库（需要登录）。</p>
<p>命令格式为 <code>docker push NAME [:TAG] | [image] [REGISTRY_HOST[:REGISTRY_PORT]/]NAME[:TAG]</code>。</p>
<p>用户在 Docker Hub 网站注册后可以上传自制的镜像。</p>
<p>例如，用户 user 上传本地的 test:latest 镜像，可以先添加新的标签 user/test:latest，然后用 <code>docker [image] push</code> 命令上传镜像：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> tag test:latest user/test:latest
$ <span class="token function">docker</span> push user/test:latest
The push refers to a repository <span class="token punctuation">[</span>docker.io/user/test<span class="token punctuation">]</span>
Sending image list

Please login prior to push:
Username <span class="token builtin class-name">:</span>
Password:
Email <span class="token builtin class-name">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>第一次上传时，会提示输入登录信息或进行注册，之后登录信息会记录到本地 <code>~/.docker</code>
目录下。</p>
<h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2>
<p>具体介绍了围绕 Docker 镜像的一系列重要命令操作，包括获取、查看、搜索、删除、创建、存出和载入、上传等。你可以使用 <code>docker image help</code> 命令查看 Docker 支持的镜像操作子命令。</p>
<p>镜像是使用 Docker 的前提，也是最基本的资源。所以，在平时的 Docker 使用中，要注意积累自己定制的镜像文件，并将自己创建的高质量镜像分享到社区中。</p>
</template>
