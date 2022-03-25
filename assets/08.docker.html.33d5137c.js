import{_ as n,a as s}from"./app.893f8b81.js";const a={},e=s(`<p>Dockerfile \u662F\u4E00\u4E2A\u6587\u672C\u683C\u5F0F\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u7528\u6237\u53EF\u4EE5\u4F7F\u7528 Dockerfile \u6765\u5FEB\u901F\u521B\u5EFA\u81EA\u5B9A\u4E49\u7684\u955C\u50CF\u3002</p><p>\u4E0B\u9762\u9996\u5148\u5C06\u4ECB\u7ECD Dockerfile \u5178\u578B\u7684\u57FA\u672C\u7ED3\u6784\u53CA\u5176\u652F\u6301\u7684\u4F17\u591A\u6307\u4EE4\uFF0C\u5E76\u5177\u4F53\u8BB2\u89E3\u901A\u8FC7\u8FD9\u4E9B\u6307\u4EE4\u6765\u7F16\u5199\u5B9A\u5236\u955C\u50CF\u7684 Dockerfile\uFF0C\u4EE5\u53CA\u5982\u4F55\u751F\u6210\u955C\u50CF\u3002\u6700\u540E\uFF0C\u4F1A\u4ECB\u7ECD\u4F7F\u7528 Dockerfile \u7684\u4E00\u4E9B\u6700\u4F73\u5B9E\u8DF5\u7ECF\u9A8C\u3002</p><h2 id="\u57FA\u672C\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7ED3\u6784" aria-hidden="true">#</a> \u57FA\u672C\u7ED3\u6784</h2><p>Dockerfile \u7531\u4E00\u884C\u884C\u547D\u4EE4\u8BED\u53E5\u7EC4\u6210\uFF0C\u5E76\u4E14\u652F\u6301\u4EE5 <strong>#</strong> \u5F00\u5934\u7684\u6CE8\u91CA\u884C\u3002 \u4E00\u822C\u800C\u8A00\uFF0CDockerfile \u4E3B\u4F53\u5185\u5BB9\u5206\u4E3A\u56DB\u90E8\u5206\uFF1A<strong>\u57FA\u7840\u955C\u50CF\u4FE1\u606F</strong>\u3001<strong>\u7EF4\u62A4\u8005\u4FE1\u606F</strong>\u3001<strong>\u955C\u50CF\u64CD\u4F5C\u6307\u4EE4</strong>\u548C<strong>\u5BB9\u5668\u542F\u52A8\u65F6\u6267\u884C\u6307\u4EE4</strong>\u3002</p><p>\u4E0B\u9762\u7ED9\u51FA \u4E00 \u4E2A\u7B80\u5355\u7684\u793A\u4F8B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># escape=\\(backslash)</span>
<span class="token comment"># This dockerfile uses the ubuntu:xeniel image</span>
<span class="token comment"># VERSION 2 - EDITION 1</span>
<span class="token comment"># Author: docker_user</span>
<span class="token comment"># Command format: Instruction [arguments / command] ...</span>

<span class="token comment"># Base image to use, this must be set as the first line</span>
FROM ubuntu:xeniel

<span class="token comment"># Maintainer: docker_user &lt;docker_user at email.com&gt; (@docker_user)</span>
LABEL maintainer docker_user<span class="token operator">&lt;</span>docker_user@email.com<span class="token operator">&gt;</span>

<span class="token comment"># Commands to update the image</span>
RUN <span class="token builtin class-name">echo</span> <span class="token string">&quot;deb http://archive.ubuntu.com/ubuntu/ xeniel main universe&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/app/sources.list
RUN <span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y nginx
RUN <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>daernon off;&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/nginx/nginx.conf

<span class="token comment"># Commands when creating a new container</span>
CMD /usr/sbin/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>\u9996\u884C\u53EF\u4EE5\u901A\u8FC7\u6CE8\u91CA\u6765\u6307\u5B9A\u89E3\u6790\u5668\u547D\u4EE4\uFF0C\u540E\u7EED\u901A\u8FC7\u6CE8\u91CA\u8BF4\u660E\u955C\u50CF\u7684\u76F8\u5173\u4FE1\u606F\u3002\u4E3B\u4F53\u90E8\u5206\u9996\u5148\u4F7F\u7528 FROM \u6307\u4EE4\u6307\u660E\u6240\u57FA\u4E8E\u7684\u955C\u50CF\u540D\u79F0\uFF0C\u63A5\u4E0B\u6765\u4E00\u822C\u662F\u4F7F\u7528 LABEL \u6307\u4EE4\u8BF4\u660E\u7EF4\u62A4\u8005\u4FE1\u606F\u3002\u540E\u9762\u5219\u662F\u955C\u50CF\u64CD\u4F5C\u6307\u4EE4\uFF0C\u4F8B\u5982 RUN \u6307\u4EE4\u5C06\u5BF9\u955C\u50CF\u6267\u884C\u8DDF\u968F\u7684\u547D\u4EE4\u3002\u6BCF\u8FD0\u884C\u4E00\u6761 RUN \u6307\u4EE4\uFF0C\u955C\u50CF\u6DFB\u52A0\u65B0\u7684\u4E00\u5C42\uFF0C\u5E76\u63D0\u4EA4\u3002\u6700\u540E\u662F CMD \u6307\u4EE4\uFF0C\u6765\u6307\u5B9A\u8FD0\u884C\u5BB9\u5668\u65F6\u7684\u64CD\u4F5C\u547D\u4EE4\u3002</p><p>\u4E0B\u9762\u662F Docker Hub \u4E0A\u4E24\u4E2A\u70ED\u95E8\u955C\u50CF nginx \u548C Go \u7684 Dockerfile \u7684\u4F8B\u5B50\uFF0C\u901A\u8FC7\u8FD9\u4E24\u4E2A\u4F8B\u5B50\u3002\u4F60\u53EF\u4EE5\u5BF9 Dockerfile \u7ED3\u6784\u6709\u4E2A\u57FA\u672C\u7684\u611F\u77E5\u3002</p><p>\u7B2C\u4E00\u4E2A\u662F\u5728 debian:jessie \u57FA\u7840\u955C\u50CF\u57FA\u7840\u4E0A\u5B89\u88C5 Nginx \u73AF\u5883\uFF0C\u4ECE\u800C\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 nginx \u955C\u50CF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>FROM debian:jessie
LABEL maintainer docker_user<span class="token operator">&lt;</span>docker_user@email.com<span class="token operator">&gt;</span>
ENV NGINX_VERSION <span class="token number">1.10</span>.1-1-jessie
RUN apt-key adv --keyserver hkp://pgp.mit.edu:80 --recv-keys 573BFD6B3DBFBC641079A6ABABF5BDB27BD9BF62 <span class="token punctuation">\\</span>
		<span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;deb http://nginx.org/packages/debian/ jessie nginx&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/apt/sources.list <span class="token punctuation">\\</span>
		<span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> update <span class="token punctuation">\\</span>
		<span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> <span class="token function">install</span> --no-install-recommends --no-install-suggests -y <span class="token punctuation">\\</span>
		ca-certificates <span class="token punctuation">\\</span>
		<span class="token assign-left variable">nginx</span><span class="token operator">=</span><span class="token variable">\${NGINX_VERSION}</span> <span class="token punctuation">\\</span>
		nginx-module-xslt <span class="token punctuation">\\</span>
		nginx-module-geoip <span class="token punctuation">\\</span>
		nginx-module-image-filter <span class="token punctuation">\\</span>
		nginx-module-perl <span class="token punctuation">\\</span>
		nginx-module-njs <span class="token punctuation">\\</span>
		gettext-base <span class="token punctuation">\\</span>
		<span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> -rf /var/lib/apt/lists/*
----------------------------
<span class="token comment"># forward request and error logs to docker log collector</span>
RUN <span class="token function">ln</span> -sf /dev/stdout /var/log/nginx/access.log <span class="token punctuation">\\</span>
		<span class="token operator">&amp;&amp;</span> <span class="token function">ln</span> -sf /dev/stderr /var/log/nginx/error.log

EXPOSE <span class="token number">80</span> <span class="token number">443</span>

CMD <span class="token punctuation">[</span><span class="token string">&quot;nginx&quot;</span>,<span class="token string">&quot;-g&quot;</span>,<span class="token string">&quot;daemon off;&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>\u7B2C\u4E8C\u4E2A\u662F\u57FA\u4E8E buildpack-deps:jessie-scm \u57FA\u7840\u955C\u50CF\uFF0C\u5B89\u88C5 Golang \u76F8\u5173\u73AF\u5883\uFF0C\u5236\u4F5C\u4E00\u4E2A Go \u8BED\u8A00\u7684\u8FD0\u884C\u73AF\u5883\u955C\u50CF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>FROM buildpack-deps:jessie-scm

<span class="token comment">#gcc for cgo</span>

RUN <span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y --no-install-recommends <span class="token punctuation">\\</span>
		g++ <span class="token punctuation">\\</span>
		gcc <span class="token punctuation">\\</span>
		libe6-dev <span class="token punctuation">\\</span>
		<span class="token function">make</span> <span class="token punctuation">\\</span>
		<span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> -rf /var/lib/apt/lists/*
		
ENV GOLANG VERSION <span class="token number">1.6</span>.3
ENV GOLANG_DOWNLOAD_URL https://golang.org/dl/go<span class="token variable">$GOLANG_VERSION</span>.linux-amd64.tar.gz
ENV GOLANG_DOWNLOAD_SHA256 cdde5e08530c0579255d6153b08fdb3b8e47caabbe717bc7bcd7561275a87aeb

RUN <span class="token function">curl</span> -fsSL <span class="token string">&quot;<span class="token variable">$GOLANG_DOWNLOAD_URL</span>&quot;</span> -o golang.tar.gz <span class="token punctuation">\\</span>
		<span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$GOLANG_DOWNLOAD_SHA256</span> golang.tar.gz&quot;</span> <span class="token operator">|</span> sha256sum -c - <span class="token punctuation">\\</span>
		<span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> -C /usr/local -xzf golang.tar.gz <span class="token punctuation">\\</span>
		<span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> golang.tar.gz
		
ENV GOPATH /go
ENV <span class="token environment constant">PATH</span> <span class="token variable">$GOPATH</span>/bin:/usr/local/go/bin:<span class="token environment constant">$PATH</span>

RUN <span class="token function">mkdir</span> -p <span class="token string">&quot;<span class="token variable">$GOPATH</span>/src&quot;</span> <span class="token string">&quot;<span class="token variable">$GOPATH</span>/bin&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> -R <span class="token number">777</span> <span class="token string">&quot;<span class="token variable">$GOPATH</span>&quot;</span>
WORKDIR <span class="token variable">$GOPATH</span>

COPY go-wrapper /usr/local/bin/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u4E0B\u9762\uFF0C\u5C06\u8BB2\u89E3 Dockerfile \u4E2D\u5404\u79CD\u6307\u4EE4\u7684\u5E94\u7528\u3002</p><h2 id="\u6307\u4EE4\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u6307\u4EE4\u8BF4\u660E" aria-hidden="true">#</a> \u6307\u4EE4\u8BF4\u660E</h2><p>Dockerfile \u4E2D\u6307\u4EE4\u7684\u4E00\u822C\u683C\u5F0F\u4E3A INSTRUCTION arguments\uFF0C\u5305\u62EC\u201C\u914D\u7F6E\u6307\u4EE4\u201D\uFF08\u914D\u7F6E\u955C\u50CF\u4FE1\u606F\uFF09\u548C\u201C\u64CD\u4F5C\u6307\u4EE4\u201C\uFF08\u5177\u4F53\u6267\u884C\u64CD\u4F5C\uFF09\uFF0C\u53C2\u89C1\u8868 8-1\u3002</p><p><u>\u8868 8-1</u> Dockerfile \u4E2D\u7684\u6307\u4EE4\u53CA\u8BF4\u660E</p><table><thead><tr><th>\u5206\u7C7B</th><th>\u6307\u4EE4</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></tbody></table>`,17);function t(p,r){return e}var o=n(a,[["render",t]]);export{o as default};
