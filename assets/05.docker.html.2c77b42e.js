import{_ as r,r as l,o as p,b as o,d as n,e,F as t,f as s,a as c}from"./app.893f8b81.js";var u="/blog/assets/docker_5-1.a5e1cda1.png",b="/blog/assets/docker_5-2.45282e45.png",i="/blog/assets/docker_5-3.b0fddfc1.png",d="/blog/assets/docker_5-4.77e7a91d.png";const m={},h=n("p",null,"\u4ED3\u5E93\uFF08Repository\uFF09\u662F\u96C6\u4E2D\u5B58\u653E\u955C\u50CF\u7684\u5730\u65B9\uFF0C\u53C8\u5206\u516C\u5171\u4ED3\u5E93\u548C\u79C1\u6709\u4ED3\u5E93\u3002",-1),k=n("p",null,"\u6709\u65F6\u5019\u5BB9\u6613\u628A\u4ED3\u5E93\u4E0E\u6CE8\u518C\u670D\u52A1\u5668\uFF08Registry\uFF09\u6DF7\u6DC6\u3002\u5B9E\u9645\u4E0A\u6CE8\u518C\u670D\u52A1\u5668\u662F\u5B58\u653E\u4ED3\u5E93\u7684\u5177\u4F53\u670D\u52A1\u5668\uFF0C\u4E00\u4E2A\u6CE8\u518C\u670D\u52A1\u5668\u4E0A\u53EF\u4EE5\u6709\u591A\u4E2A\u4ED3\u5E93\uFF0C\u800C\u6BCF\u4E2A\u4ED3\u5E93\u4E0B\u9762\u53EF\u4EE5\u6709\u591A\u4E2A\u955C\u50CF\u3002\u4ECE\u8FD9\u65B9\u9762\u6765\u8BF4\uFF0C\u4ED3\u5E93\u53EF\u4EE5\u88AB\u8BA4\u4E3A\u662F\u4E00\u4E2A\u5177\u4F53\u7684\u9879\u76EE\u6216\u76EE\u5F55\u3002\u4F8B\u5982\u5BF9\u4E8E\u4ED3\u5E93\u5730\u5740 private-docker.com/ubuntu \u6765\u8BF4\uFF0Cprivate-docker.com \u662F\u6CE8\u518C\u670D\u52A1\u5668\u5730\u5740\uFF0Cubuntu \u662F\u4ED3\u5E93\u540D\u3002",-1),g=n("p",null,"\u63A5\u4E0B\u6765\uFF0C\u5C06\u5206\u522B\u4ECB\u7ECD\u4F7F\u7528 Docker Hub \u5B98\u65B9\u4ED3\u5E93\u8FDB\u884C\u767B\u5F55\u3001\u8F7D\u7B49\u57FA\u672C\u64CD\u4F5C\uFF0C\u4EE5\u53CA\u4F7F\u7528\u56FD\u5185\u793E\u533A\u63D0\u4F9B\u7684\u4ED3\u5E93\u4E0B\u8F7D\u955C\u50CF\uFF1B\u6700\u540E\u8FD8\u5C06\u4ECB\u7ECD\u521B\u5EFA\u548C\u4F7F\u7528\u79C1\u6709\u4ED3\u5E93\u7684\u57FA\u672C\u64CD\u4F5C\u3002",-1),f=n("h2",{id:"docker-hub-\u516C\u5171\u955C\u50CF\u5E02\u573A",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-hub-\u516C\u5171\u955C\u50CF\u5E02\u573A","aria-hidden":"true"},"#"),s(" Docker Hub \u516C\u5171\u955C\u50CF\u5E02\u573A")],-1),_=s("Docker Hub \u662F Docker \u5B98\u65B9\u63D0\u4F9B\u7684\u6700\u5927\u7684\u516C\u5171\u955C\u50CF\u4ED3\u5E93\uFF0C\u76EE\u524D\u5305\u62EC\u4E86\u8D85\u8FC7 100000 \u7684\u955C\u50CF\uFF0C\u5730\u5740\u4E3A "),v={href:"https://hub.docker.com",target:"_blank",rel:"noopener noreferrer"},y=s("https://hub.docker.com"),D=s("\u3002\u5927\u90E8\u5206\u5BF9\u955C\u50CF\u7684\u9700\u6C42\uFF0C\u90FD\u53EF\u4EE5\u901A\u8FC7\u5728 Docker Hub \u4E2D\u76F4\u63A5\u4E0B\u8F7D\u955C\u50CF\u6765\u5B9E\u73B0\uFF0C\u5982\u56FE 5-1 \u6240\u793A\u3002"),E=c('<h3 id="_1\u3001\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u767B\u5F55" aria-hidden="true">#</a> 1\u3001\u767B\u5F55</h3><p>\u53EF\u4EE5\u901A\u8FC7\u547D\u4EE4\u884C\u6267\u884C <code>docker login</code> \u547D\u4EE4\u6765\u8F93\u5165\u7528\u6237\u540D\u3001\u5BC6\u7801\u548C\u90AE\u7BB1\u6765\u5B8C\u6210\u6CE8\u518C\u548C\u767B\u5F55\u3002\u6CE8\u518C\u6210\u529F\u540E\uFF0C\u672C\u5730\u7528\u6237\u76EE\u5F55\u4E0B\u4F1A\u81EA\u52A8\u521B\u5EFA <code>.docker/config.json</code> \u6587\u4EF6\uFF0C\u4FDD\u5B58\u7528\u6237\u7684\u8BA4\u8BC1\u4FE1\u606F\u3002</p><p>\u767B\u5F55\u6210\u529F\u7684\u7528\u6237\u53EF\u4EE5\u4E0A\u4F20\u4E2A\u4EBA\u5236\u4F5C\u7684\u955C\u50CF\u5230 Docker Hub\u3002</p><h3 id="_2\u3001\u57FA\u672C\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u57FA\u672C\u64CD\u4F5C" aria-hidden="true">#</a> 2\u3001\u57FA\u672C\u64CD\u4F5C</h3><p>\u7528\u6237\u65E0\u987B\u767B\u5F55\u5373\u53EF\u901A\u8FC7 <code>docker search</code> \u547D\u4EE4\u6765\u67E5\u627E\u5B98\u65B9\u4ED3\u5E93\u4E2D\u7684\u955C\u50CF\uFF0C\u5E76\u5229\u7528 <code>docker [image] pull</code> \u547D\u4EE4\u6765\u5C06\u5B83\u4E0B\u8F7D\u5230\u672C\u5730\u3002</p><div class="custom-container center"><p><img src="'+u+`" alt="" loading="lazy"></p><p><u>\u56FE 5-1</u> Docker Hub \u662F\u6700\u5927\u7684\u516C\u5171\u955C\u50CF\u4ED3\u5E93</p></div><p>\u524D\u9762\u5DF2\u7ECF\u5177\u4F53\u4ECB\u7ECD\u4E86\u5982\u4F55\u4F7F\u7528 <code>docker [image] pull</code> \u547D\u4EE4\u6765\u641C\u5BFB\u955C\u50CF\u3002\u4F8B\u5982\u4EE5 centos \u4E3A\u5173\u952E\u8BCD\u8FDB\u884C\u641C\u7D22\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> search centos
NAME                              DESCRIPTION                                     STARS     OFFICIAL   AUTOMATED
centos                            The official build of CentOS.                   <span class="token number">6736</span>      <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>       
ansible/centos7-ansible           Ansible on Centos7                              <span class="token number">134</span>                  <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
consol/centos-xfce-vnc            Centos container with <span class="token string">&quot;headless&quot;</span> VNC session\u2026  <span class="token number">130</span>                  <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
jdeathe/centos-ssh                OpenSSH / Supervisor / EPEL/IUS/SCL Repos - \u2026  <span class="token number">120</span>                  <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
centos/systemd                    systemd enabled base container.                 <span class="token number">101</span>                  <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u6839\u636E\u662F\u5426\u4E3A\u5B98\u65B9\u63D0\u4F9B\uFF0C\u53EF\u5C06\u8FD9\u4E9B\u955C\u50CF\u8D44\u6E90\u5206\u4E3A\u4E24\u7C7B\uFF1A</p><ul><li><p>\u4E00\u79CD\u662F\u7C7B\u4F3C\u4E8E centos \u8FD9\u6837\u7684\u57FA\u7840\u955C\u50CF\uFF0C\u4E5F\u79F0\u4E3A\u6839\u955C\u50CF\u3002\u8FD9\u4E9B\u955C\u50CF\u662F\u7531 Docker \u516C\u53F8\u521B\u5EFA\u3001\u9A8C\u8BC1\u3001\u652F\u6301\u3001\u63D0\u4F9B\uFF0C\u8FD9\u6837\u7684\u955C\u50CF\u5F80\u5F80\u4F7F\u7528\u5355\u4E2A\u5355\u8BCD\u4F5C\u4E3A\u540D\u5B57\uFF1B</p></li><li><p>\u53E6\u4E00\u79CD\u7C7B\u578B\u7684\u955C\u50CF\uFF0C\u6BD4\u5982 ansible/centos7-ansible \u955C\u50CF\uFF0C\u662F\u7531 Docker \u7528\u6237 ansible \u521B\u5EFA\u5E76\u7EF4\u62A4\u7684\uFF0C\u5E26\u6709\u7528\u6237\u540D\u79F0\u4E3A\u524D\u7F00\uFF0C\u8868\u660E\u662F\u67D0\u7528\u6237\u4E0B\u7684\u67D0\u4ED3\u5E93\u3002\u53EF\u4EE5\u901A\u8FC7\u7528\u6237\u540D\u79F0\u524D\u7F00\u201Cuser_name/\u955C\u50CF\u540D\u201D\u6765\u6307\u5B9A\u4F7F\u7528\u67D0\u4E2A\u7528\u6237\u63D0\u4F9B\u7684\u955C\u50CF\u3002</p></li></ul><p>\u4E0B\u8F7D\u5B98\u65B9 centos \u955C\u50CF\u5230\u672C\u5730\uFF0C\u4EE3\u7801\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> pull centos
Using default tag: latest
latest: Pulling from library/centos
7a0437f04f83: Pull complete 
Digest: sha256:5528e8b1b1719d34604c87e11dcd1c0a20bedf46e83b5632cdeac91b8c04efc1
Status: Downloaded newer image <span class="token keyword">for</span> centos:latest
docker.io/library/centos:latest
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u7528\u6237\u4E5F\u53EF\u4EE5\u5728\u767B\u5F55\u540E\u901A\u8FC7 <code>docker push</code> \u547D\u4EE4\u6765\u5C06\u672C\u5730\u955C\u50CF\u63A8\u9001\u5230 Docker Hub\u3002</p><h3 id="_3\u3001\u81EA\u52A8\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u81EA\u52A8\u521B\u5EFA" aria-hidden="true">#</a> 3\u3001\u81EA\u52A8\u521B\u5EFA</h3><p>\u81EA\u52A8\u521B\u5EFA\uFF08Automated Builds\uFF09\u662F Docker Hub \u63D0\u4F9B\u7684\u81EA\u52A8\u5316\u670D\u52A1\uFF0C\u8FD9\u4E00\u529F\u80FD\u53EF\u4EE5\u81EA\u52A8\u8DDF\u968F\u9879\u76EE\u4EE3\u7801\u7684\u53D8\u66F4\u800C\u91CD\u65B0\u6784\u5EFA\u955C\u50CF\u3002</p><p>\u4F8B\u5982\uFF0C\u7528\u6237\u6784\u5EFA\u4E86\u67D0\u5E94\u7528\u955C\u50CF\uFF0C\u5982\u679C\u5E94\u7528\u53D1\u5E03\u65B0\u7248\u672C\uFF0C\u7528\u6237\u9700\u8981\u624B\u52A8\u66F4\u65B0\u955C\u50CF\u3002\u800C\u81EA\u52A8\u521B\u5EFA\u5219\u5141\u8BB8\u7528\u6237\u901A\u8FC7 Docker Hub \u6307\u5B9A\u8DDF\u8E2A\u4E00\u4E2A\u76EE\u6807\u7F51\u7AD9\uFF08\u76EE\u524D\u652F\u6301 GitHub \u6216 BitBucket\uFF09\u4E0A\u7684\u9879\u76EE\uFF0C\u4E00\u65E6\u9879\u76EE\u53D1\u751F\u65B0\u7684\u63D0\u4EA4\uFF0C\u5219\u81EA\u52A8\u6267\u884C\u521B\u5EFA\u3002</p><p>\u8981\u914D\u7F6E\u81EA\u52A8\u521B\u5EFA\uFF0C\u5305\u62EC\u5982\u4E0B\u7684\u6B65\u9AA4\uFF1A</p><ol><li>\u521B\u5EFA\u5E76\u767B\u5F55 Docker Hub\uFF0C\u4EE5\u53CA\u76EE\u6807\u7F51\u7AD9\u5982 Github\uFF1B</li><li>\u5728\u76EE\u6807\u7F51\u7AD9\u4E2D\u5141\u8BB8 Docker Hub \u8BBF\u95EE\u670D\u52A1\uFF1B</li><li>\u5728 Docker Hub \u4E2D\u914D\u7F6E\u4E00\u4E2A\u201C\u81EA\u52A8\u521B\u5EFA\u201D\u7C7B\u578B\u7684\u9879\u76EE\uFF1B</li><li>\u9009\u53D6\u4E00\u4E2A\u76EE\u6807\u7F51\u7AD9\u4E2D\u7684\u9879\u76EE\uFF08\u9700\u8981\u542B Dockerfile\uFF09\u548C\u5206\u652F\uFF1B</li><li>\u6307\u5B9A Dockerfile \u7684\u4F4D\u7F6E\uFF0C\u5E76\u63D0\u4EA4\u521B\u5EFA\u3002</li></ol><p>\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728 Docker Hub \u7684\u201C\u81EA\u52A8\u521B\u5EFA\u201D\u9875\u9762\u4E2D\u8DDF\u8E2A\u6BCF\u6B21\u521B\u5EFA\u7684\u72B6\u6001\u3002</p><h2 id="\u7B2C\u4E09\u65B9\u955C\u50CF\u5E02\u573A" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E09\u65B9\u955C\u50CF\u5E02\u573A" aria-hidden="true">#</a> \u7B2C\u4E09\u65B9\u955C\u50CF\u5E02\u573A</h2>`,20),M=s("\u56FD\u5185\u4E0D\u5C11\u4E91\u670D\u52A1\u5546\u90FD\u63D0\u4F9B\u4E86 Docker \u955C\u50CF\u5E02\u573A\uFF0C\u5305\u62EC\u817E\u8BAF\u4E91\u3001\u7F51\u6613\u4E91\u3001\u963F\u91CC\u4E91\u7B49\u3002\u4E0B\u9762\u4EE5"),x={href:"https://hub.tenxcloud.com/",target:"_blank",rel:"noopener noreferrer"},S=s("\u65F6\u901F\u4E91"),I=s("\u4E3A\u4F8B\uFF0C\u4ECB\u7ECD\u5982\u4F55\u4F7F\u7528\u8FD9\u4E9B\u5E02\u573A\uFF0C\u5982\u56FE 5-2 \u6240\u793A\u3002"),B=n("div",{class:"custom-container center"},[n("p",null,[n("img",{src:b,alt:"",loading:"lazy"})]),n("p",null,[n("u",null,"\u56FE 5-2"),s(" \u65F6\u901F\u4E91\u955C\u50CF\u5E02\u573A")])],-1),A=n("h3",{id:"_1\u3001\u67E5\u770B\u955C\u50CF",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1\u3001\u67E5\u770B\u955C\u50CF","aria-hidden":"true"},"#"),s(" 1\u3001\u67E5\u770B\u955C\u50CF")],-1),T=s("\u8BBF\u95EE "),R={href:"https://hub.tenxcloud.com",target:"_blank",rel:"noopener noreferrer"},P=s("https://hub.tenxcloud.com"),O=s(" \uFF0C\u5373\u53EF\u770B\u5230\u5DF1\u5B58\u5728\u7684\u4ED3\u5E93\u548C\u5B58\u50A8\u7684\u955C\u50CF\uFF0C\u5305\u62EC Ubuntu\u3001Java\u3001Mongo\u3001MySQL\u3001Nginx \u7B49\u70ED\u95E8\u4ED3\u5E93\u548C\u955C\u50CF\u3002\u65F6\u901F\u4E91\u5B98\u65B9\u4ED3\u5E93\u4E2D\u7684\u955C\u50CF\u4F1A\u4FDD\u6301\u4E0EDocker Hub \u4E2D\u5B98\u65B9\u955C\u50CF\u7684\u540C\u6B65\u3002"),H=c(`<p>\u4EE5 MongoDB \u4ED3\u5E93\u4E3A\u4F8B\uFF0C\u5176\u4E2D\u5305\u62EC\u4E86 2.6\u30013.0 \u548C 3.2 \u7B49\u955C\u50CF\u3002</p><h3 id="_2\u3001\u4E0B\u8F7D\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u4E0B\u8F7D\u955C\u50CF" aria-hidden="true">#</a> 2\u3001\u4E0B\u8F7D\u955C\u50CF</h3><p>\u4E0B\u8F7D\u955C\u50CF\u4E5F\u662F\u4F7F\u7528 <code>docker pull</code> \u547D\u4EE4\uFF0C\u4F46\u662F\u8981\u5728\u955C\u50CF\u540D\u79F0\u524D\u6DFB\u52A0\u6CE8\u518C\u670D\u52A1\u5668\u7684\u5177\u4F53\u5730\u5740\u3002\u683C\u5F0F\u4E3A index.tenxcloud.com/&lt;namespace&gt;/&lt;reposito ry&gt;:&lt;tag &gt;\u3002</p><p>\u4F8B\u5982\uFF0C\u8981\u4E0B\u8F7D Docker \u5B98\u65B9\u4ED3\u5E93\u4E2D\u7684 node:latest \u955C\u50CF\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> pull hub.c.163.com/public/centos:6.5
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

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u955C\u50CF\u4E0B\u8F7D\u4F1A\u6BD4\u76F4\u63A5\u4ECE Docker Hub \u4E0B\u8F7D\u5FEB\u5F97\u591A\u3002\u901A\u8FC7 <code>docker images</code> \u547D\u4EE4\u6765\u67E5\u770B\u4E0B\u8F7D\u5230\u672C\u5730\u7684\u955C\u50CF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> images
REPOSITORY                    TAG       IMAGE ID       CREATED        SIZE
test/ubuntu                   v1.0      00cf452ac39b   <span class="token number">23</span> hours ago   <span class="token number">72</span>.8MB
ubuntu                        latest    fb52e22af1b0   <span class="token number">7</span> days ago     <span class="token number">72</span>.8MB
ubuntu                        <span class="token number">18.04</span>     54919e10a95d   <span class="token number">7</span> days ago     <span class="token number">63</span>.1MB
centos                        latest    300e315adb2f   <span class="token number">9</span> months ago   209MB
hub.c.163.com/public/centos   <span class="token number">6.5</span>       997f0ed97903   <span class="token number">5</span> years ago    442MB
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4E0B\u8F7D\u540E\uFF0C\u53EF\u4EE5\u66F4\u65B0\u955C\u50CF\u7684\u6807\u7B7E\uFF0C\u4E0E\u5B98\u65B9\u6807\u7B7E\u4FDD\u6301\u4E00\u81F4\uFF0C\u65B9\u4FBF\u4F7F\u7528\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> tag hub.c.163.com/public/centos:6.5  centos:6.5
kei@kei-KVM:/etc/docker$ <span class="token function">docker</span> images
REPOSITORY                    TAG       IMAGE ID       CREATED        SIZE
test/ubuntu                   v1.0      00cf452ac39b   <span class="token number">23</span> hours ago   <span class="token number">72</span>.8MB
ubuntu                        latest    fb52e22af1b0   <span class="token number">7</span> days ago     <span class="token number">72</span>.8MB
ubuntu                        <span class="token number">18.04</span>     54919e10a95d   <span class="token number">7</span> days ago     <span class="token number">63</span>.1MB
centos                        latest    300e315adb2f   <span class="token number">9</span> months ago   209MB
centos                        <span class="token number">6.5</span>       997f0ed97903   <span class="token number">5</span> years ago    442MB
hub.c.163.com/public/centos   <span class="token number">6.5</span>       997f0ed97903   <span class="token number">5</span> years ago    442MB
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u9664\u4E86\u4F7F\u7528\u8FD9\u4E9B\u516C\u5171\u955C\u50CF\u670D\u52A1\u5916\uFF0C\u8FD8\u53EF\u4EE5\u642D\u5EFA\u672C\u5730\u7684\u79C1\u6709\u4ED3\u5E93\u670D\u52A1\u5668\u3002</p><h2 id="\u642D\u5EFA\u672C\u5730\u79C1\u6709\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u642D\u5EFA\u672C\u5730\u79C1\u6709\u4ED3\u5E93" aria-hidden="true">#</a> \u642D\u5EFA\u672C\u5730\u79C1\u6709\u4ED3\u5E93</h2><h3 id="_1\u3001\u521B\u5EFA\u79C1\u6709\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u521B\u5EFA\u79C1\u6709\u4ED3\u5E93" aria-hidden="true">#</a> 1\u3001\u521B\u5EFA\u79C1\u6709\u4ED3\u5E93</h3><p>\u5B89\u88C5 Docker \u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5B98\u65B9\u63D0\u4F9B\u7684 registry \u955C\u50CF\u6765\u7B80\u5355\u642D\u5EFA\u4E00\u5957\u672C\u5730\u79C1\u6709\u4ED3\u5E93\u73AF\u5883\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> pull registry:2
<span class="token number">2</span>: Pulling from library/registry
6a428f9f83b0: Pull complete 
90cad49de35d: Pull complete 
b215d0b40846: Pull complete 
429305b6c15c: Pull complete 
6f7e10a4e907: Pull complete 
Digest: sha256:265d4a5ed8bf0df27d1107edb00b70e658ee9aa5acb3f37336c5a17db634481e
Status: Downloaded newer image <span class="token keyword">for</span> registry:2
docker.io/library/registry:2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8FD9\u5C06\u81EA\u52A8\u4E0B\u8F7D\u4E95\u542F\u52A8\u4E00\u4E2A registry \u5BB9\u5668\uFF0C\u521B\u5EFA\u672C\u5730\u7684\u79C1\u6709\u4ED3\u5E93\u670D\u52A1\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4ED3\u5E93\u4F1A\u88AB\u521B\u5EFA\u5728\u5BB9\u5668\u7684 <code>/var/lib/registry</code> \u76EE\u5F55\u4E0B\u3002\u53EF\u4EE5\u901A\u8FC7 -v \u53C2\u6570\u6765\u5C06\u955C\u50CF\u6587\u4EF6\u5B58\u653E\u5728\u672C\u5730\u7684\u6307\u5B9A\u8DEF\u5F84\u3002\u4F8B\u5982\u4E0B\u9762\u7684\u4F8B\u5B50\u5C06\u4E0A\u4F20\u7684\u955C\u50CF\u653E\u5230 <code>/opt/data/registry</code> \u76EE\u5F55\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> run -d -v /opt/registry:/var/lib/registry -p <span class="token number">5000</span>:5000 --name myregistry registry:2
933e961801d6fb8292f97f1d1eeeeb2457ac40333a562d82907f1b9bea08924c
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6B64\u65F6\uFF0C\u5728\u672C\u5730\u5C06\u542F\u52A8\u4E00\u4E2A\u79C1\u6709\u4ED3\u5E93\u670D\u52A1\uFF0C\u76D1\u542C\u7AEF\u53E3\u4E3A 5000\u3002</p><p>\u6D4F\u89C8\u5668\u8BBF\u95EE http://127.0.0.1:5000/v2\uFF0C\u51FA\u73B0\u4E0B\u9762\u60C5\u51B5\u8BF4\u660E registry \u8FD0\u884C\u6B63\u5E38\u3002</p><div class="custom-container center"><p><img src="`+i+`" alt="" loading="lazy"></p><p><u>\u56FE 5-3</u> registry \u8FD0\u884C\u60C5\u51B5</p></div><h3 id="_2\u3001\u7BA1\u7406\u79C1\u6709\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u7BA1\u7406\u79C1\u6709\u4ED3\u5E93" aria-hidden="true">#</a> 2\u3001\u7BA1\u7406\u79C1\u6709\u4ED3\u5E93</h3><p>\u9996\u5148\u5728\u4F60\u7684\u7CFB\u7EDF\u4E0A\u642D\u5EFA\u79C1\u6709\u4ED3\u5E93\uFF0C\u67E5\u770B\u5176\u5730\u5740\u4E3A 127.0.0.1:5000\uFF0C\u7136\u540E\u6D4B\u8BD5\u4E0A\u4F20\u548C\u4E0B\u8F7D\u955C\u50CF ubuntu:18.04\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> images
REPOSITORY   TAG       IMAGE ID       CREATED        SIZE
registry     <span class="token number">2</span>         b2cb11db9d3d   <span class="token number">6</span> days ago     <span class="token number">26</span>.2MB
ubuntu       <span class="token number">18.04</span>     54919e10a95d   <span class="token number">7</span> days ago     <span class="token number">63</span>.1MB
centos       latest    300e315adb2f   <span class="token number">9</span> months ago   209MB
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4F7F\u7528 <code>docker tag</code> \u547D\u4EE4\u5C06\u8FD9\u4E2A\u955C\u50CF\u6807\u8BB0\u4E3A localhost:5000/ubuntu:18.04\uFF08\u683C\u5F0F\u4E3A docker tag [IMAGE[:TAG]] [REGISTRYHOST/] [USERNAME/] NAME [:TAG ]\uFF09\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> tag ubuntu:18.04 localhost:5000/ubuntu:18.04
$ <span class="token function">docker</span> images
REPOSITORY              TAG       IMAGE ID       CREATED        SIZE
registry                <span class="token number">2</span>         b2cb11db9d3d   <span class="token number">6</span> days ago     <span class="token number">26</span>.2MB
localhost:5000/ubuntu   <span class="token number">18.04</span>     54919e10a95d   <span class="token number">7</span> days ago     <span class="token number">63</span>.1MB
ubuntu                  <span class="token number">18.04</span>     54919e10a95d   <span class="token number">7</span> days ago     <span class="token number">63</span>.1MB
centos                  latest    300e315adb2f   <span class="token number">9</span> months ago   209MB
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4F7F\u7528 <code>docker push</code> \u4E0A\u4F20\u6807\u8BB0\u7684\u955C\u50CF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> push localhost:5000/ubuntu:18.04 
The push refers to repository <span class="token punctuation">[</span>localhost:5000/ubuntu<span class="token punctuation">]</span>
6babb56be259: Pushed 
<span class="token number">18.04</span>: digest: sha256:b9caadbf898c50ce67da0ab5bafc4680997b010c3e17d2bb73d2ae5fe056e52b size: <span class="token number">529</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u8BBF\u95EE http://127.0.0.1:5000/v2/_catalog \u67E5\u770B\u79C1\u6709\u4ED3\u5E93\u76EE\u5F55\uFF0C\u53EF\u4EE5\u770B\u5230\u521A\u4E0A\u4F20\u7684\u955C\u50CF\u4E86\uFF1A</p><div class="custom-container center"><p><img src="`+d+`" alt="" loading="lazy"></p><p><u>\u56FE 5-4</u> \u79C1\u6709\u4ED3\u5E93\u76EE\u5F55</p></div><p>\u4E0B\u8F7D\u79C1\u6709\u4ED3\u5E93\u7684\u955C\u50CF\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> images
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u4E0B\u8F7D\u540E\uFF0C\u8FD8\u53EF\u4EE5\u6DFB\u52A0 \u4E00\u4E2A\u66F4\u901A\u7528\u7684\u6807\u7B7E ubuntu:04\uFF0C\u65B9\u4FBF\u540E\u7EED\u4F7F\u7528\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> tag localhost:5000/ubuntu:18.04 test_ubuntu:18.04 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u8BF4\u660E</p><p>\u5982\u679C\u8981\u4F7F\u7528\u5B89\u5168\u8BC1\u4E66\uFF0C\u7528\u6237\u4E5F\u53EF\u4EE5\u4ECE\u8F83\u77E5\u540D\u7684 CA \u670D\u52A1\u5546\uFF08\u5982 verisign\uFF09\u7533\u8BF7\u516C\u5F00\u7684 SSL/TLS \u8BC1\u4E66\uFF0C\u6216\u8005\u4F7F\u7528 OpenSSL \u7B49\u8F6F\u4EF6\u6765\u81EA\u884C\u751F\u6210\u3002</p></div><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><p>\u4ED3\u5E93\u662F\u96C6\u4E2D\u7EF4\u62A4\u5BB9\u5668\u955C\u50CF\u7684\u5730\u65B9\uFF0C\u4E3A Docker \u955C\u50CF\u6587\u4EF6\u7684\u5206\u53D1\u548C\u7BA1\u7406\u63D0\u4F9B\u4E86\u4FBF\u6377\u7684\u9014\u5F84\u3002\u8FD9\u91CC\u4ECB\u7ECD\u7684 Docker Hub \u548C\u65F6\u901F\u4E91\u955C\u50CF\u5E02\u573A\u4E24\u4E2A\u516C\u5171\u4ED3\u5E93\u670D\u52A1\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u4E2A\u4EBA\u7528\u6237\u8FDB\u884C\u955C\u50CF\u7684\u4E0B\u8F7D\u548C\u4F7F\u7528\u7B49\u64CD\u4F5C\u3002</p><p>\u5728\u4F01\u4E1A\u7684\u751F\u4EA7\u73AF\u5883\u4E2D\uFF0C\u5F80\u5F80\u9700\u8981\u4F7F\u7528\u79C1\u6709\u4ED3\u5E93\u6765\u7EF4\u62A4\u5185\u90E8\u955C\u50CF\uFF0C\u8FD9\u91CC\u4E5F\u4ECB\u7ECD\u4E86\u57FA\u672C\u7684\u642D\u5EFA\u64CD\u4F5C\uFF0C\u5728\u540E\u7EED\u90E8\u5206\u4E2D\uFF0C\u5C06\u4ECB\u7ECD\u79C1\u6709\u4ED3\u5E93\u7684\u66F4\u591A\u914D\u7F6E\u9009\u9879\u3002</p><p>\u9664\u4E86\u5B98\u65B9\u7684 registry \u9879\u76EE\u5916\uFF0C\u7528\u6237\u8FD8\u53EF\u4EE5\u4F7F\u7528\u5176\u4ED6\u7684\u5F00\u6E90\u65B9\u6848\uFF08\u4F8B\u5982 nexus\uFF09\u6765\u642D\u5EFA\u79C1\u6709\u5316\u7684\u5BB9\u5668\u955C\u50CF\u4ED3\u5E93\u3002</p>`,37);function G($,C){const a=l("ExternalLinkIcon");return p(),o(t,null,[h,k,g,f,n("p",null,[_,n("a",v,[y,e(a)]),D]),E,n("p",null,[M,n("a",x,[S,e(a)]),I]),B,A,n("p",null,[T,n("a",R,[P,e(a)]),O]),H],64)}var N=r(m,[["render",G]]);export{N as default};
