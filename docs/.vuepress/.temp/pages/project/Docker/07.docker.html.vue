<template><p>通过前面的学习，相信你已经掌握了单个容器的管理操作。在实践中，经常会碰到需要多个服务组件容器共同协作的情况，这往往需要多个容器之间能够互相访问到对方的服务。</p>
<p>Docker 除了通过网络访间外，还提供了两个很方便的功能来满足服务访问的基本需求：一个是允许映射容器内应用的服务端口到本地宿主主机；另一个是互联机制实现多个容器间通过容器名来快速访问。下面将分别讲解这两个很实用的功能。</p>
<h2 id="端口映射实现容器访问" tabindex="-1"><a class="header-anchor" href="#端口映射实现容器访问" aria-hidden="true">#</a> 端口映射实现容器访问</h2>
<h3 id="_1、从外部访问容器应用" tabindex="-1"><a class="header-anchor" href="#_1、从外部访问容器应用" aria-hidden="true">#</a> 1、从外部访问容器应用</h3>
<p>在启动容器的时候，如果不指定对应参数，在容器外部是无法通过网络来访问容器内的网络应用和服务的。</p>
<p>当容器中运行一些网络应用，要让外部访问这些应用时，可以通过 -P 或 -p 参数来指定端口映射。当使用 -P（大写的）标记时，Docker 会随机映射一个 49000～49900 的端口到内部容器开放的网络端口：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> run -d -P training/webapp python app.py
Unable to <span class="token function">find</span> image <span class="token string">'training/webapp:latest'</span> locally
latest: Pulling from training/webapp
Image docker.io/training/webapp:latest uses outdated schema1 manifest format. Please upgrade to a schema2 image <span class="token keyword">for</span> better future compatibility. More information at https://docs.docker.com/registry/spec/deprecated-schema-v1/
e190868d63f8: Pull complete 
909cd34c6fd7: Pull complete 
0b9bfabab7c1: Pull complete 
a3ed95caeb02: Pull complete 
10bbbc0fc0ff: Pull complete 
fca59b508e9f: Pull complete 
e7ae2541b15b: Pull complete 
9dd97ef58ce9: Pull complete 
a4c1b0cb7af7: Pull complete 
Digest: sha256:06e9c1983bd6d5db5fba376ccd63bfa529e8d02f23d5079b8f74a616308fb11d
Status: Downloaded newer image <span class="token keyword">for</span> training/webapp:latest
1d3cb3e3c02c0d02fba3f997c31d56755658f177d6776e72994aa435dca6cca4
$ <span class="token function">docker</span> <span class="token function">ps</span> -l
CONTAINER ID   IMAGE             COMMAND           CREATED         STATUS         PORTS                                         NAMES
1d3cb3e3c02c   training/webapp   <span class="token string">"python app.py"</span>   <span class="token number">4</span> minutes ago   Up <span class="token number">4</span> minutes   <span class="token number">0.0</span>.0.0:49153-<span class="token operator">></span><span class="token number">5000</span>/tcp，:::49153-<span class="token operator">></span><span class="token number">5000</span>/tcp   trusting_chaum
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>此时，可以使用 <code>docker ps</code> 看到，本地主机的 49153 被映射到了容器的 5000 端口。</p>
<p>访间宿主主机的 49153 端口即可访问容器内 web 应用提供的界面。</p>
<div class="custom-container center">
<p><img src="@source/project/Docker/assets/docker_7-1.png" alt="" loading="lazy"></p>
<p><u>图 7-1</u>	浏览器访问本机的 49153 端口</p>
</div>
<p>同样，可以通过 <code>docker logs</code> 命令来查看应用的信息：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> logs -f trusting_chaum 
 * Running on http://0.0.0.0:5000/ <span class="token punctuation">(</span>Press CTRL+C to quit<span class="token punctuation">)</span>
<span class="token number">172.17</span>.0.1 - - <span class="token punctuation">[</span>08/Sep/2021 07:43:47<span class="token punctuation">]</span> <span class="token string">"GET / HTTP/1.1"</span> <span class="token number">200</span> -
<span class="token number">172.17</span>.0.1 - - <span class="token punctuation">[</span>08/Sep/2021 07:43:48<span class="token punctuation">]</span> <span class="token string">"GET /favicon.ico HTTP/1.1"</span> <span class="token number">404</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>-p（小写的）则可以指定要映射的端口，并且，在一个指定端口上只可以绑定一个容器。支持的格式有 <code>IP:HostPort:ContainerPort | IP:: ContainerPort | HostPort:ContainerPort</code>。</p>
<h3 id="_2、映射所有接口地址" tabindex="-1"><a class="header-anchor" href="#_2、映射所有接口地址" aria-hidden="true">#</a> 2、映射所有接口地址</h3>
<p>使用 HostPort:ContainerPort 格式把本地的 5000 端口映射到容器的 5000 端口，可以执行如下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> run -d -p <span class="token number">5000</span>:5000 training/webapp python app.py
739716a4c97b68979f205c412ca0e0ddd1722badca142409ff1b6c05095112e2
$ <span class="token function">docker</span> <span class="token function">ps</span>
CONTAINER ID   IMAGE             COMMAND           CREATED          STATUS          PORTS                                       NAMES
739716a4c97b   training/webapp   <span class="token string">"python app.py"</span>   <span class="token number">4</span> seconds ago    Up <span class="token number">2</span> seconds    <span class="token number">0.0</span>.0.0:5000-<span class="token operator">></span><span class="token number">5000</span>/tcp, :::5000-<span class="token operator">></span><span class="token number">5000</span>/tcp   gifted_hoover
57f6feb67848   ubuntu:18.04      <span class="token string">"/bin/bash"</span>       <span class="token number">42</span> minutes ago   Up <span class="token number">42</span> minutes                                               interesting_bardeen
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>此时默认会绑定本地所有接口上的所有地址。多次使用 -p 标记可以绑定多个端口。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> run -d -p <span class="token number">5000</span>:5000 -p <span class="token number">3000</span>:80 training/webapp python app.py
a8693f3c75a12c4a51be104a587307d254862b2d98d8242dc18cc4f91a487a4d
$ <span class="token function">docker</span> <span class="token function">ps</span>
CONTAINER ID   IMAGE             COMMAND           CREATED          STATUS          PORTS                                                                              NAMES
a8693f3c75a1   training/webapp   <span class="token string">"python app.py"</span>   <span class="token number">4</span> seconds ago    Up <span class="token number">3</span> seconds    <span class="token number">0.0</span>.0.0:5000-<span class="token operator">></span><span class="token number">5000</span>/tcp, :::5000-<span class="token operator">></span><span class="token number">5000</span>/tcp, <span class="token number">0.0</span>.0.0:3000-<span class="token operator">></span><span class="token number">80</span>/tcp, :::3000-<span class="token operator">></span><span class="token number">80</span>/tcp   wizardly_torvalds
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_3、映射到指定地址的指定端口" tabindex="-1"><a class="header-anchor" href="#_3、映射到指定地址的指定端口" aria-hidden="true">#</a> 3、映射到指定地址的指定端口</h3>
<p>可以使用 <code>IP:HostPort:ContainerPort</code> 格式指定映射使用一个特定地址，比如地址 127.0.2.1:5000：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> run -d -p <span class="token number">127.0</span>.0.1:5000:5000 training/webapp python app.py
16df89a9037cc439fd0dcf5905b21679ec729188158427080bcbd4a3c7b14de7
$ <span class="token function">docker</span> <span class="token function">ps</span>
CONTAINER ID   IMAGE             COMMAND           CREATED          STATUS          PORTS                      NAMES
16df89a9037c   training/webapp   <span class="token string">"python app.py"</span>   <span class="token number">4</span> seconds ago    Up <span class="token number">2</span> seconds    <span class="token number">127.0</span>.2.1:5000-<span class="token operator">></span><span class="token number">5000</span>/tcp   serene_williamson
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_4、映射到指定地址的任意端口" tabindex="-1"><a class="header-anchor" href="#_4、映射到指定地址的任意端口" aria-hidden="true">#</a> 4、映射到指定地址的任意端口</h3>
<p>使用 IP::ContainerPort 绑定 localhost 的任意端口到容器的 5000 端口，本地主机会自动分配一个端口：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> run -d -p <span class="token number">127.0</span>.0.1::5000 training/webapp python app.py
ad5320b5cbc11774a0677a973d49a3696769d09a5fc2360b46dc4475d34b4132
$ <span class="token function">docker</span> <span class="token function">ps</span>
CONTAINER ID   IMAGE             COMMAND           CREATED          STATUS          PORTS                       NAMES
ad5320b5cbc1   training/webapp   <span class="token string">"python app.py"</span>   <span class="token number">5</span> seconds ago    Up <span class="token number">4</span> seconds    <span class="token number">127.0</span>.0.1:49153-<span class="token operator">></span><span class="token number">5000</span>/tcp   gifted_bell
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>还可以使用 udp 标记来指定 udp 端口：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> run -d -p <span class="token number">127.0</span>.0.1:5000:5000/udp training/webapp python app.py
4da22d44f5575a180d8e494e65440b3b45a59f5d489e8d4aaa350d95ea1c2c14
$ <span class="token function">docker</span> <span class="token function">ps</span>
CONTAINER ID   IMAGE             COMMAND           CREATED          STATUS          PORTS                                NAMES
4da22d44f557   training/webapp   <span class="token string">"python app.py"</span>   <span class="token number">4</span> seconds ago    Up <span class="token number">2</span> seconds    <span class="token number">5000</span>/tcp, <span class="token number">127.0</span>.0.1:5000-<span class="token operator">></span><span class="token number">5000</span>/udp   determined_turing
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_5、查看映射端口配置" tabindex="-1"><a class="header-anchor" href="#_5、查看映射端口配置" aria-hidden="true">#</a> 5、查看映射端口配置</h3>
<p>使用 <code>docker port</code> 来查看当前映射的端口配置，也可以查看到绑定的地址：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> run -d -p <span class="token number">127.0</span>.0.1::5000 training/webapp python app.py
ac00973485fb8aa90443fd6a1fc7203d80b577d99757d5d5181f931b37b8bfc3
$ <span class="token function">docker</span> port compassionate_brattain 
<span class="token number">5000</span>/tcp -<span class="token operator">></span> <span class="token number">127.0</span>.0.1:49154
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>容器有自己的内部网络和 IP 地址，使用 <code>docker [container] inspect 容器ID</code> 可以获取容器的具体信息。</p>
</div>
<h2 id="互联机制实现便捷互访" tabindex="-1"><a class="header-anchor" href="#互联机制实现便捷互访" aria-hidden="true">#</a> 互联机制实现便捷互访</h2>
<p>容器的互联（Iinking）是一种让多个容器中的应用进行快速交互的方式。它会在源和接收容器之间创建连接关系，接收容器可以通过容器名快速访问到源容器，而不用指定具体的 IP 地址。</p>
<h3 id="_1、自定义容器命名" tabindex="-1"><a class="header-anchor" href="#_1、自定义容器命名" aria-hidden="true">#</a> 1、自定义容器命名</h3>
<p>连接系统依据容器的名称来执行。因此，首先需要自定义一个好记的容器命名。虽然当创建容器的时候，系统默认会分配一个名字，但自定义命名容器有两个好处：</p>
<ul>
<li>自定义的命名，比较好记，比如一个 Web 应用容器我们可以给它起名叫 web，一目了然；</li>
<li>当要连接其他容器时候（即便重启），也可以使用容器名而不用改变，比如连接 web 容器到 db 容器。</li>
</ul>
<p>使用 --name 标记可以为容器自定义命名：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> run -d -P --name web training/webapp python app.py
34c73b3f41309246047c1eff9e49888b71a6a7191c1ddb57cec2115d4fb54d3c
$ <span class="token function">docker</span> <span class="token function">ps</span>
CONTAINER ID   IMAGE             COMMAND           CREATED             STATUS             PORTS                                         NAMES
34c73b3f4130   training/webapp   <span class="token string">"python app.py"</span>   <span class="token number">3</span> seconds ago       Up <span class="token number">2</span> seconds       <span class="token number">0.0</span>.0.0:49154-<span class="token operator">></span><span class="token number">5000</span>/tcp, :::49154-<span class="token operator">></span><span class="token number">5000</span>/tcp   web
<span class="token comment">#使用 docker ps 来验证设定的命名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>也可以使用 <code>docker [container) inspect</code> 来查看容器的名字：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> inspect -f <span class="token string">"{{.Name}}"</span> 34c73b3f4130
/web
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>容器的名称是唯一的。如果巳经命名了一个叫 web 的容器，当你要再次使用 web 这个名称的时候，需要先用 <code>docker rm</code> 命令删除之前创建的同名容器。</p>
</div>
<p>在执行 <code>docker [container] run</code> 的时候如果添加 --rm 标记，则容器在终止后会立刻删除。注意，--rm 和 -d 参数不能同时使用。</p>
<h3 id="_2、容器互联" tabindex="-1"><a class="header-anchor" href="#_2、容器互联" aria-hidden="true">#</a> 2、容器互联</h3>
<p>使用 --link 参数可以让容器之间安全地进行交互。</p>
<p>下面先创建一个新的数据库容器：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> run -d --name db training/postgres
Unable to <span class="token function">find</span> image <span class="token string">'training/postgres:latest'</span> locally
latest: Pulling from training/postgres
Image docker.io/training/postgres:latest uses outdated schema1 manifest format. Please upgrade to a schema2 image <span class="token keyword">for</span> better future compatibility. More information at https://docs.docker.com/registry/spec/deprecated-schema-v1/
a3ed95caeb02: Pull complete 
6e71c809542e: Downloading 
2978d9af87ba: Download complete 
e1bca35b062f: Download complete 
500b6decf741: Download complete 
74b14ef2151f: Download complete 
7afd5ed3826e: Download complete 
3c69bb244f5e: Download complete 
d86f9ec5aedf: Download complete 
010fabf20157: Download complete 
latest: Pulling from training/postgres
Image docker.io/training/postgres:latest uses outdated schema1 manifest format. Please upgrade to a schema2 image <span class="token keyword">for</span> better future compatibility. More information at https://docs.docker.com/registry/spec/deprecated-schema-v1/
a3ed95caeb02: Pull complete 
6e71c809542e: Pull complete 
2978d9af87ba: Pull complete 
e1bca35b062f: Pull complete 
500b6decf741: Pull complete 
74b14ef2151f: Pull complete 
7afd5ed3826e: Pull complete 
3c69bb244f5e: Pull complete 
d86f9ec5aedf: Pull complete 
010fabf20157: Pull complete 
Digest: sha256:a945dc6dcfbc8d009c3d972931608344b76c2870ce796da00a827bd50791907e
Status: Downloaded newer image <span class="token keyword">for</span> training/postgres:latest
dd2bf319cac08333c221abd08748a8f06b5ae75f4bab9c45e74785e0d56932e0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>删除之前创建的 web 容器：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token function">rm</span> -f web
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后创建 一 个新的 web 容器，并将它连接到 db 容器：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> run -d -P --name web --link db:db training/webapp python app.py
b726365f50d7a4a4b31570bcd8a9ccbe77e6b63fd8f1438182398b5e1426ed21
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>此时，db 容器和 web 容器建立互联关系。</p>
<p>--link 参数的格式为 --link name:alias，其中 name 是要链接的容器的名称，alias 是别名。</p>
<p>使用 <code>docker inspect web</code> 来查看 web 容器的详情（Links）：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> inspect web 
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">"Id"</span><span class="token builtin class-name">:</span> <span class="token string">"68f6051bd5be4c13b1d97fdfee1b468c1ecbb0ecc203b26ce3673b3744d74b69"</span>,
        <span class="token string">"Created"</span><span class="token builtin class-name">:</span> <span class="token string">"2021-09-09T00:59:29.018886397Z"</span>,
        <span class="token string">"Path"</span><span class="token builtin class-name">:</span> <span class="token string">"python"</span>,
        <span class="token string">"Args"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token string">"app.py"</span>
        <span class="token punctuation">]</span>,
        <span class="token string">"State"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"Status"</span><span class="token builtin class-name">:</span> <span class="token string">"running"</span>,
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token string">"Links"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token string">"/db:/web/db"</span>
            <span class="token punctuation">]</span>,
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>Docker 相当于在两个互联的容器之间创建了一个虚机通道，而且不用映射它们的端口到宿主主机上。在启动 db 容器的时候并没有使用 -p 和 -P 标记，从而避免了暴露数据库服务端口到外部网络上。</p>
<p>Docker 通过两种方式为容器公开连接信息：</p>
<ul>
<li>更新环境变量;</li>
<li>更新 <code>/etc/hosts</code> 文件。</li>
</ul>
<p>使用 <code>env</code> 命令来查看 web 容器的环境变量：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> run --rm --name web2 --link db:db training/webapp <span class="token function">env</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
<span class="token assign-left variable"><span class="token environment constant">HOSTNAME</span></span><span class="token operator">=</span>4acbb47609c1
<span class="token assign-left variable">DB_PORT</span><span class="token operator">=</span>tcp://172.17.0.2:5432
<span class="token assign-left variable">DB_PORT_5432_TCP</span><span class="token operator">=</span>tcp://172.17.0.2:5432
<span class="token assign-left variable">DB_PORT_5432_TCP_ADDR</span><span class="token operator">=</span><span class="token number">172.17</span>.0.2
<span class="token assign-left variable">DB_PORT_5432_TCP_PORT</span><span class="token operator">=</span><span class="token number">5432</span>
<span class="token assign-left variable">DB_PORT_5432_TCP_PROTO</span><span class="token operator">=</span>tcp
<span class="token assign-left variable">DB_NAME</span><span class="token operator">=</span>/web2/db
<span class="token assign-left variable">DB_ENV_PG_VERSION</span><span class="token operator">=</span><span class="token number">9.3</span>
<span class="token assign-left variable"><span class="token environment constant">HOME</span></span><span class="token operator">=</span>/root
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>其中 DB_ 开头的环境变量是供 web 容器连接 db 容器使用，前缀采用大写的连接别名。</p>
<p>除了环境变量，Docker 还添加 host 信息到父容器的 /etc/hosts 的文件。下面是父容器 web 的 hosts 文件：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> run -it --rm --link db:db training/webapp /bin/bash
root@4581c58ad217:/opt/webapp<span class="token comment"># cat /etc/hosts </span>
<span class="token number">127.0</span>.0.1	localhost
::1	localhost ip6-localhost ip6-loopback
fe00::0	ip6-localnet
ff00::0	ip6-mcastprefix
ff02::1	ip6-allnodes
ff02::2	ip6-allrouters
<span class="token number">172.17</span>.0.2	db 7d1b09695298
<span class="token number">172.17</span>.0.4	4581c58ad217
root@4581c58ad217:/opt/webapp<span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>这里有 2 个 hosts 信息，第一个是 web 容器，web 容器用自己的 id 作为默认主机名，第二个是 db 容器的 IP 和主机名。</p>
<p>可以在 web 容器中安装 <code>ping</code> 命令来测试跟 db 容器的连通：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>root@17d65c4c4712:/opt/webapp<span class="token comment"># apt install -yqq inetutils-ping</span>
The following packages will be REMOVED:
  iputils-ping ubuntu-minimal
The following NEW packages will be installed:
  inetutils-ping
<span class="token number">0</span> upgraded, <span class="token number">1</span> newly installed, <span class="token number">2</span> to remove and <span class="token number">3</span> not upgraded.
Need to get <span class="token number">55.6</span> kB of archives.
After this operation, <span class="token number">131</span> kB of additional disk space will be used.
<span class="token punctuation">(</span>Reading database <span class="token punctuation">..</span>. <span class="token number">18233</span> files and directories currently installed.<span class="token punctuation">)</span>
Removing ubuntu-minimal <span class="token punctuation">(</span><span class="token number">1.325</span><span class="token punctuation">)</span> <span class="token punctuation">..</span>.
Removing iputils-ping <span class="token punctuation">(</span><span class="token number">3</span>:20121221-4ubuntu1.1<span class="token punctuation">)</span> <span class="token punctuation">..</span>.
Selecting previously unselected package inetutils-ping.
<span class="token punctuation">(</span>Reading database <span class="token punctuation">..</span>. <span class="token number">18221</span> files and directories currently installed.<span class="token punctuation">)</span>
Preparing to unpack <span class="token punctuation">..</span>./inetutils-ping_2%3a1.9.2-1_amd64.deb <span class="token punctuation">..</span>.
Unpacking inetutils-ping <span class="token punctuation">(</span><span class="token number">2</span>:1.9.2-1<span class="token punctuation">)</span> <span class="token punctuation">..</span>.
Setting up inetutils-ping <span class="token punctuation">(</span><span class="token number">2</span>:1.9.2-1<span class="token punctuation">)</span> <span class="token punctuation">..</span>.
root@17d65c4c4712:/opt/webapp<span class="token comment"># ping db</span>
PING db <span class="token punctuation">(</span><span class="token number">172.17</span>.0.2<span class="token punctuation">)</span>: <span class="token number">56</span> data bytes
<span class="token number">64</span> bytes from <span class="token number">172.17</span>.0.2: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.933</span> ms
<span class="token number">64</span> bytes from <span class="token number">172.17</span>.0.2: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.278</span> ms
<span class="token number">64</span> bytes from <span class="token number">172.17</span>.0.2: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.172</span> ms
<span class="token number">64</span> bytes from <span class="token number">172.17</span>.0.2: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.150</span> ms
^C--- db <span class="token function">ping</span> statistics ---
<span class="token number">6</span> packets transmitted, <span class="token number">6</span> packets received, <span class="token number">0</span>% packet loss
round-trip min/avg/max/stddev <span class="token operator">=</span> <span class="token number">0.089</span>/0.290/0.933/0.293 ms
root@17d65c4c4712:/opt/webapp<span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>用 ping 来测试 db 容器，它会解析成 172.17.0.2。</p>
<p>用户可以链接多个子容器到父容器，比如可以链接多个 web 到同一个 db 容器上。</p>
<h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2>
<p>毫无疑问，容器服务的访间是很关键的一个用途。通过具体案例讲解了 Docker 容器服务访问的两大基本操作，包括基础的容器端口映射机制和容器互联机制。同时，Docker 目前可以成熟支持 Linux 系统自带的网络服务和功能，这既可以利用现有成熟的技术提供稳定支持，又可以实现快速的高性能转发。</p>
<p>在生产环境中，网络方面的需求更加复杂和多变，包括跨主机甚至跨数据中心的通信，这时候往往就需要引入额外的机制，例如 SDN（软件定义网络）或 NFV （网络功能虚拟化）
的相关技术。</p>
</template>
