<template><p>Dockerfile 是一个文本格式的配置文件，用户可以使用 Dockerfile 来快速创建自定义的镜像。</p>
<p>下面首先将介绍 Dockerfile 典型的基本结构及其支持的众多指令，并具体讲解通过这些指令来编写定制镜像的 Dockerfile，以及如何生成镜像。最后，会介绍使用 Dockerfile 的一些最佳实践经验。</p>
<h2 id="基本结构" tabindex="-1"><a class="header-anchor" href="#基本结构" aria-hidden="true">#</a> 基本结构</h2>
<p>Dockerfile 由一行行命令语句组成，并且支持以 <strong>#</strong> 开头的注释行。
一般而言，Dockerfile 主体内容分为四部分：<strong>基础镜像信息</strong>、<strong>维护者信息</strong>、<strong>镜像操作指令</strong>和<strong>容器启动时执行指令</strong>。</p>
<p>下面给出 一 个简单的示例：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># escape=\(backslash)</span>
<span class="token comment"># This dockerfile uses the ubuntu:xeniel image</span>
<span class="token comment"># VERSION 2 - EDITION 1</span>
<span class="token comment"># Author: docker_user</span>
<span class="token comment"># Command format: Instruction [arguments / command] ...</span>

<span class="token comment"># Base image to use, this must be set as the first line</span>
FROM ubuntu:xeniel

<span class="token comment"># Maintainer: docker_user &lt;docker_user at email.com> (@docker_user)</span>
LABEL maintainer docker_user<span class="token operator">&lt;</span>docker_user@email.com<span class="token operator">></span>

<span class="token comment"># Commands to update the image</span>
RUN <span class="token builtin class-name">echo</span> <span class="token string">"deb http://archive.ubuntu.com/ubuntu/ xeniel main universe"</span> <span class="token operator">>></span> /etc/app/sources.list
RUN <span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y nginx
RUN <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token entity" title="\n">\n</span>daernon off;"</span> <span class="token operator">>></span> /etc/nginx/nginx.conf

<span class="token comment"># Commands when creating a new container</span>
CMD /usr/sbin/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>首行可以通过注释来指定解析器命令，后续通过注释说明镜像的相关信息。主体部分首先使用 FROM 指令指明所基于的镜像名称，接下来一般是使用 LABEL 指令说明维护者信息。后面则是镜像操作指令，例如 RUN 指令将对镜像执行跟随的命令。每运行一条 RUN 指令，镜像添加新的一层，并提交。最后是 CMD 指令，来指定运行容器时的操作命令。</p>
<p>下面是 Docker Hub 上两个热门镜像 nginx 和 Go 的 Dockerfile 的例子，通过这两个例子。你可以对 Dockerfile 结构有个基本的感知。</p>
<p>第一个是在 debian:jessie 基础镜像基础上安装 Nginx 环境，从而创建一个新的 nginx 镜像：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>FROM debian:jessie
LABEL maintainer docker_user<span class="token operator">&lt;</span>docker_user@email.com<span class="token operator">></span>
ENV NGINX_VERSION <span class="token number">1.10</span>.1-1-jessie
RUN apt-key adv --keyserver hkp://pgp.mit.edu:80 --recv-keys 573BFD6B3DBFBC641079A6ABABF5BDB27BD9BF62 <span class="token punctuation">\</span>
		<span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">"deb http://nginx.org/packages/debian/ jessie nginx"</span> <span class="token operator">>></span> /etc/apt/sources.list <span class="token punctuation">\</span>
		<span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> update <span class="token punctuation">\</span>
		<span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> <span class="token function">install</span> --no-install-recommends --no-install-suggests -y <span class="token punctuation">\</span>
		ca-certificates <span class="token punctuation">\</span>
		<span class="token assign-left variable">nginx</span><span class="token operator">=</span><span class="token variable">${NGINX_VERSION}</span> <span class="token punctuation">\</span>
		nginx-module-xslt <span class="token punctuation">\</span>
		nginx-module-geoip <span class="token punctuation">\</span>
		nginx-module-image-filter <span class="token punctuation">\</span>
		nginx-module-perl <span class="token punctuation">\</span>
		nginx-module-njs <span class="token punctuation">\</span>
		gettext-base <span class="token punctuation">\</span>
		<span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> -rf /var/lib/apt/lists/*
----------------------------
<span class="token comment"># forward request and error logs to docker log collector</span>
RUN <span class="token function">ln</span> -sf /dev/stdout /var/log/nginx/access.log <span class="token punctuation">\</span>
		<span class="token operator">&amp;&amp;</span> <span class="token function">ln</span> -sf /dev/stderr /var/log/nginx/error.log

EXPOSE <span class="token number">80</span> <span class="token number">443</span>

CMD <span class="token punctuation">[</span><span class="token string">"nginx"</span>,<span class="token string">"-g"</span>,<span class="token string">"daemon off;"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>第二个是基于 buildpack-deps:jessie-scm 基础镜像，安装 Golang 相关环境，制作一个 Go 语言的运行环境镜像：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>FROM buildpack-deps:jessie-scm

<span class="token comment">#gcc for cgo</span>

RUN <span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y --no-install-recommends <span class="token punctuation">\</span>
		g++ <span class="token punctuation">\</span>
		gcc <span class="token punctuation">\</span>
		libe6-dev <span class="token punctuation">\</span>
		<span class="token function">make</span> <span class="token punctuation">\</span>
		<span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> -rf /var/lib/apt/lists/*
		
ENV GOLANG VERSION <span class="token number">1.6</span>.3
ENV GOLANG_DOWNLOAD_URL https://golang.org/dl/go<span class="token variable">$GOLANG_VERSION</span>.linux-amd64.tar.gz
ENV GOLANG_DOWNLOAD_SHA256 cdde5e08530c0579255d6153b08fdb3b8e47caabbe717bc7bcd7561275a87aeb

RUN <span class="token function">curl</span> -fsSL <span class="token string">"<span class="token variable">$GOLANG_DOWNLOAD_URL</span>"</span> -o golang.tar.gz <span class="token punctuation">\</span>
		<span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$GOLANG_DOWNLOAD_SHA256</span> golang.tar.gz"</span> <span class="token operator">|</span> sha256sum -c - <span class="token punctuation">\</span>
		<span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> -C /usr/local -xzf golang.tar.gz <span class="token punctuation">\</span>
		<span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> golang.tar.gz
		
ENV GOPATH /go
ENV <span class="token environment constant">PATH</span> <span class="token variable">$GOPATH</span>/bin:/usr/local/go/bin:<span class="token environment constant">$PATH</span>

RUN <span class="token function">mkdir</span> -p <span class="token string">"<span class="token variable">$GOPATH</span>/src"</span> <span class="token string">"<span class="token variable">$GOPATH</span>/bin"</span> <span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> -R <span class="token number">777</span> <span class="token string">"<span class="token variable">$GOPATH</span>"</span>
WORKDIR <span class="token variable">$GOPATH</span>

COPY go-wrapper /usr/local/bin/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>下面，将讲解 Dockerfile 中各种指令的应用。</p>
<h2 id="指令说明" tabindex="-1"><a class="header-anchor" href="#指令说明" aria-hidden="true">#</a> 指令说明</h2>
<p>Dockerfile 中指令的一般格式为 INSTRUCTION arguments，包括“配置指令”（配置镜像信息）和“操作指令“（具体执行操作），参见表 8-1。</p>
<p><u>表 8-1</u>	Dockerfile 中的指令及说明</p>
<table>
<thead>
<tr>
<th>分类</th>
<th>指令</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
</template>
