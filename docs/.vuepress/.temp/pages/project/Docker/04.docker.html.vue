<template><p>容器是 Docker 的另 一个核心概念。简单来说，容器是镜像的一个运行实例。所不同的是，镜像是静态的只读文件，而容器带有运行时需要的可写文件层，同时，容器中的应用进程处于运行状态。</p>
<p>如果认为虚拟机是模拟运行的一整套操作系统（包括内核、应用运行态环境和其他系统环境）和跑在上面的应用。那么 Docker 容器就是独立运行的一个（或一组）应用，以及它们必需的运行环境。</p>
<p>接下来将具体介绍围绕容器的重要操作，包括创建一个容器、启动容器、终止一个容器、进入容器内执行操作、删除容器和通过导人导出容器来实现容器迁移等。</p>
<h2 id="创建容器" tabindex="-1"><a class="header-anchor" href="#创建容器" aria-hidden="true">#</a> 创建容器</h2>
<p>从现在开始，忘掉“朦肿”的虚拟机吧，对容器的操作就像直接操作应用一样简单和快速。</p>
<p>这里主要介绍 Docker 容器的 <code>create</code>、<code>start</code>、<code>run</code>、<code>wait</code> 和 <code>logs</code> 子命令。</p>
<h3 id="_1、新建容器" tabindex="-1"><a class="header-anchor" href="#_1、新建容器" aria-hidden="true">#</a> 1、新建容器</h3>
<p>可以使用 <code>docker [container] create</code> 命令新建一个容器，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> container create -it ubuntu:latest
Unable to <span class="token function">find</span> image <span class="token string">'ubuntu:latest'</span> locally
latest: Pulling from library/ubuntu
35807b77a593: Pull complete 
Digest: sha256:9d6a8699fb5c9c39cf08a0871bd6219f0400981c570894cd8cbea30d3424a31f
Status: Downloaded newer image <span class="token keyword">for</span> ubuntu:latest
fcc4e0885754efa016594c98d606dd5666ad751c76884c41685d46715a9a70fc

$ <span class="token function">docker</span> <span class="token function">ps</span> -a
CONTAINER ID   IMAGE           COMMAND   CREATED              STATUS                    PORTS     NAMES
fcc4e0885754   ubuntu:latest   <span class="token string">"bash"</span>    About a minute ago   Created                             gracious_ellis
dba94731dbca   centos          <span class="token string">"bash"</span>    <span class="token number">23</span> hours ago         Exited <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">23</span> hours ago             romantic_benz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>使用 <code>docker [container] create</code> 命令新建的容器处于停止状态，可以使用 <code>docker [container] start</code> 命令来启动它。</p>
<p>由于容器是整个 Docker 技术栈的核心，<code>create</code> 命令和后续的 <code>run</code> 命令支持的选项都十分复杂，需要你在实践中不断体会。</p>
<p>选项主要包括如下几大类：与容器运行模式相关、与容器环境配置相关、与容器资源限制和安全保护相关，参见表 4-1 和表 4-3。</p>
<p><u>表4-1</u>	create 命令与容器运行模式相关的选项</p>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>-a，--attach=[ ]</td>
<td>是否绑定到标准输入、输出和错误</td>
</tr>
<tr>
<td>-d，--detach=true|false</td>
<td>是否在后台运行容器，默认为否</td>
</tr>
<tr>
<td>--detach-keys=&quot; &quot;</td>
<td>从 attach 模式退出的快捷键</td>
</tr>
<tr>
<td>--entrypoint=&quot; &quot;</td>
<td>镜像存在入口命令时，覆盖为新的命令</td>
</tr>
<tr>
<td>--expose=[ ]</td>
<td>指定容器会暴露出来的端口或端口范围</td>
</tr>
<tr>
<td>--group-add=[ ]</td>
<td>运行容器的用户组</td>
</tr>
<tr>
<td>-i，--interactive=true|false</td>
<td>保持标准输入打开，默认为 false</td>
</tr>
<tr>
<td>--ipc=&quot; &quot;</td>
<td>容器 IPC 命名空间，可以为其他容器或主机</td>
</tr>
<tr>
<td>--isolation=&quot;default&quot;</td>
<td>容器使用的隔离机制</td>
</tr>
<tr>
<td>--log-driver=&quot;json-file&quot;</td>
<td>指定容器的日志驱动类型，可以为 json-file、syslog、journald、gelf、fluentd、awslogs、splunk、etwlogs、gcplogs或none</td>
</tr>
<tr>
<td>--log-opt=[ ]</td>
<td>传递给日志驱动的选项</td>
</tr>
<tr>
<td>--net=&quot;bridge&quot;</td>
<td>指定容器网络模式，包括 bridge、none、其他容器内网络、host 的网络或某个现有网络等</td>
</tr>
<tr>
<td>--net-alias=[ ]</td>
<td>容器在网络中的别名</td>
</tr>
<tr>
<td>-P，--publish-all=true|false</td>
<td>通过 NAT 机制将容器标记暴露的端口自动映射到本地主机的临时端口</td>
</tr>
<tr>
<td>-p，--publishs=[ ]</td>
<td>指定如何映射到本地主机端口，例如 -p 11234-12234:1234-2234</td>
</tr>
<tr>
<td>--pid=host</td>
<td>容器的 PID 命名空间</td>
</tr>
<tr>
<td>--userns=&quot; &quot;</td>
<td>启用 userns-remap 时配置用户命名空间的模式</td>
</tr>
<tr>
<td>--uts=host</td>
<td>容器的 UTS 命名空间</td>
</tr>
<tr>
<td>--restart=&quot;no&quot;</td>
<td>容器的重启策略，包括 no、on-failure[:max-retry]、always、unless-stopped 等</td>
</tr>
<tr>
<td>-rm=true|false</td>
<td>容器退出后是否自动删除，不能跟 -d 同时使用</td>
</tr>
<tr>
<td>-t，--tty=true|false</td>
<td>是否分配一个伪终端，默认为 false</td>
</tr>
<tr>
<td>--tmpfs=[ ]</td>
<td>挂载临时文件系统到容器</td>
</tr>
<tr>
<td>-v|--volume[=[[HOST-DIR:]CONTAINER-DIR [:OPTIONS]]]</td>
<td>挂载主机上的文件卷到容器内</td>
</tr>
<tr>
<td>--volume-driver=&quot; &quot;</td>
<td>挂载文件卷的驱动类型</td>
</tr>
<tr>
<td>--volumes-from=[ ]</td>
<td>从其他容器挂载卷</td>
</tr>
<tr>
<td>-w，--workdir=&quot; &quot;</td>
<td>容器内的默认工作目录</td>
</tr>
</tbody>
</table>
<p><u>表 4-2</u>	create 命令与容器环境和配置相关的选项</p>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>--add-host=[ ]</td>
<td>在容器内添加一个主机名到 IP 地址的映射关系（通过 /etc/hosts 文件）</td>
</tr>
<tr>
<td>--device=[ ]</td>
<td>映射物理机上的设备到容器内</td>
</tr>
<tr>
<td>--dns-search=[ ]</td>
<td>DNS 搜索域</td>
</tr>
<tr>
<td>--dns-opt=[ ]</td>
<td>自定义的 DNS 选项</td>
</tr>
<tr>
<td>--dns=[ ]</td>
<td>自定义的 DNS 服务器</td>
</tr>
<tr>
<td>-e，--env=[ ]</td>
<td>指定容器内环境变量</td>
</tr>
<tr>
<td>--env-file=[ ]</td>
<td>从文件中读取环境变量到容器内</td>
</tr>
<tr>
<td>-h，--hostname=&quot; &quot;</td>
<td>指定容器内的主机名</td>
</tr>
<tr>
<td>--ip=&quot; &quot;</td>
<td>指定容器的 IPv4 地址</td>
</tr>
<tr>
<td>--ip6=&quot; &quot;</td>
<td>指定容器的 IPv6 地址</td>
</tr>
<tr>
<td>--link=[&lt;name or id&gt;:alias]</td>
<td>链接到其他容器</td>
</tr>
<tr>
<td>--link-local-ip=[ ]:</td>
<td>容器的本地链接地址列表</td>
</tr>
<tr>
<td>--mac-address=&quot; &quot;</td>
<td>指定容器的 Mac 地址</td>
</tr>
<tr>
<td>--name=&quot; &quot;</td>
<td>指定容器的别名</td>
</tr>
</tbody>
</table>
<p><u>表 4-3</u>	create 命令与容器资源限制和安全保护相关的选项</p>
<table>
<thead>
<tr>
<th>选项</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>--blkio-weight=10~1000</td>
<td>容器读写块设备的 I/O 性能权重，默认为 0</td>
</tr>
<tr>
<td>--blkio-weight-device=[DEVICE_NAME:WEIGHT]</td>
<td>指定各个块设备的 I/O 性能权重</td>
</tr>
<tr>
<td>--cpu-shares=0</td>
<td>允许容器使用 CPU 资源的相对权重，默认一个容器能用满一个核的 CPU</td>
</tr>
<tr>
<td>--cap-add=[ ]</td>
<td>增加容器的 Linux 指定安全能力</td>
</tr>
<tr>
<td>--cap-drop=[ ]</td>
<td>移除容器的 Linux 指定安全能力</td>
</tr>
<tr>
<td>--cgroup-parent=&quot; &quot;</td>
<td>容器 cgroups 限制的创建路径</td>
</tr>
<tr>
<td>--cidfile=&quot; &quot;</td>
<td>指定容器的进程 ID 号写到文件</td>
</tr>
<tr>
<td>--cpu-period=0</td>
<td>限制容器在 CFS 调度器下的 CPU 占用时间片</td>
</tr>
<tr>
<td>--cpuset-cpus=&quot; &quot;</td>
<td>限制容器能使用哪些 CPU 核心</td>
</tr>
<tr>
<td>--cpuset-mems=&quot; &quot;</td>
<td>NUMA 架构下使用哪些核心的内存</td>
</tr>
<tr>
<td>--cpu-quota=0</td>
<td>限制容器在 CFS 调度器下的 CPU 配额</td>
</tr>
<tr>
<td>--device-read-bps=[ ]</td>
<td>挂载设备的读吞吐率（以 bps 为单位）限制</td>
</tr>
<tr>
<td>--device-write-bps=[ ]</td>
<td>挂载设备的写吞吐率（以 bps 为单位）限制</td>
</tr>
<tr>
<td>--device-read-iops=[ ]</td>
<td>挂载设备的读速率（以每秒 i/o 次数为单位）限制</td>
</tr>
<tr>
<td>--device-write-iops=[ ]</td>
<td>挂载设备的写速率（以每秒 i/o 次数为单位）限制</td>
</tr>
<tr>
<td>--health-cmd=&quot; &quot;</td>
<td>指定检查容器健康状态的命令</td>
</tr>
<tr>
<td>--health-interval=0s</td>
<td>执行健康检查的间隔时间，单位可以为 ms、s、m 或 h</td>
</tr>
<tr>
<td>--health-retries=int</td>
<td>健康检查失败重试次数，超过则认为不健康</td>
</tr>
<tr>
<td>--health-start-period=0s</td>
<td>容器启动后进行健康检查的等待时间，单位可以为 ms、s、m 或 h</td>
</tr>
<tr>
<td>--health-timeout=0s</td>
<td>健康检查的执行超时，单位可以为 ms、s、m 或 h</td>
</tr>
<tr>
<td>--no-healthcheck=true|false</td>
<td>是否禁用健康检查</td>
</tr>
<tr>
<td>--init</td>
<td>在容器中执行一个 init 进程，来负责响应信号和处理僵尸状态子进程</td>
</tr>
<tr>
<td>--kernel-memory=&quot; &quot;</td>
<td>限制容器使用内核的内存大小，单位可以是 b、k、m 或 g</td>
</tr>
<tr>
<td>-m，--memory=&quot; &quot;</td>
<td>限制容器内应用使用的内存，单位可以是 b、k、m 或 g</td>
</tr>
<tr>
<td>--memory-reservation=&quot; &quot;</td>
<td>当系统中内存过低时，容器会被强制限制内存到给定值，默认情况下等于内存限制值</td>
</tr>
<tr>
<td>--memory-swap=&quot;LIMIT&quot;</td>
<td>限制容器使用内存和交换区的总大小</td>
</tr>
<tr>
<td>--oom-kill-disable=true|false</td>
<td>内存耗尽时是否杀死容器</td>
</tr>
<tr>
<td>--oom-score-adj=&quot; &quot;</td>
<td>调整容器的内存耗尽参数</td>
</tr>
<tr>
<td>--pids-limit=&quot; &quot;</td>
<td>限制容器的 pid 个数</td>
</tr>
<tr>
<td>--privileged=true|false</td>
<td>是否给容器高权限，这意味着容器内应用将不受权限的限制，一般不推荐</td>
</tr>
<tr>
<td>--read-only=true|false</td>
<td>是否让容器内的文件系统只读</td>
</tr>
<tr>
<td>--security-opt=[ ]</td>
<td>指定一些安全参数，包括权限、安全能力、apparmor 等</td>
</tr>
<tr>
<td>--stop-signal=SIGTERM</td>
<td>指定停止容器的系统信号</td>
</tr>
<tr>
<td>--gshm-size=&quot; &quot;</td>
<td>/dev/shm的大小</td>
</tr>
<tr>
<td>--gsig-proxy=true|false</td>
<td>是否代理收到的信号给应用，默认为 true，不能代理 SIGCHLD、SIGSTOP 和 SIGKILL 信号</td>
</tr>
<tr>
<td>--memory-swappiness=&quot;0~100&quot;</td>
<td>调整容器的内存交换区参数</td>
</tr>
<tr>
<td>-u，--user=&quot; &quot;</td>
<td>指定在容器内执行命令的用户信息</td>
</tr>
<tr>
<td>--userns=&quot; &quot;</td>
<td>指定用户命名空间</td>
</tr>
<tr>
<td>--ulimit=[ ]</td>
<td>通过 ulimit 来限制最大文件数、最大进程数等</td>
</tr>
</tbody>
</table>
<p>其他选项还包括：</p>
<ul>
<li>-l，--label=[ ]：以键值对方式指定容器的标签信息；</li>
<li>--label-file=[ ]：从文件中读取标签信息。</li>
</ul>
<h3 id="_2、启动容器" tabindex="-1"><a class="header-anchor" href="#_2、启动容器" aria-hidden="true">#</a> 2、启动容器</h3>
<p>使用 <code>docker [container] start</code> 命令来启动一个已经创建的容器。例如，启动刚创建的 ubuntu 容器：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> start fcc
fcc
<span class="token comment"># 启动ID为fcc开头的容器（开头为 fcc 的 ID ，确保可以确定是哪一个容器）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>此时，通过 <code>docker ps</code> 命令，可以查看到一个运行中的容器：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token function">ps</span> 
CONTAINER ID   IMAGE           COMMAND   CREATED       STATUS              PORTS     NAMES
fcc4e0885754   ubuntu:latest   <span class="token string">"bash"</span>    <span class="token number">3</span> hours ago   Up About a minute             gracious_ellis
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_3、新建井启动容器" tabindex="-1"><a class="header-anchor" href="#_3、新建井启动容器" aria-hidden="true">#</a> 3、新建井启动容器</h3>
<p>除了创建容器后通过 <code>start</code> 命令来启动，也可以直接新建并启动容器。</p>
<p>所需要的命令主要为 <code>docker [container] run</code> 命令，等价于先执行 <code>docker [container] create</code> 命令，再执行  <code>docker [container] start</code>。</p>
<p>例如，下面的命令输出 一个“Hello World“，之后容器自动终止：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> run ubuntu /bin/echo <span class="token string">'Hello world'</span>
Hello world
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这跟在本地直接执行 <code>/bin/echo 'hello world'</code> 相比几乎感觉不出任何区别。</p>
<p>当利用 <code>docker [container] run</code> 来创建并启动容器时，Docker 在后台运行的标准操作包括：</p>
<ul>
<li>
<p>检查本地是否存在指定的镜像，不存在就从公有仓库下载；</p>
</li>
<li>
<p>利用镜像创建一个容器，并启动该容器；</p>
</li>
<li>
<p>分配一个文件系统给容器，并在只读的镜像层外面挂载一层可读写层；</p>
</li>
<li>
<p>从宿主主机配置的网桥接口中桥接一个虚拟接口到容器中去；</p>
</li>
<li>
<p>从网桥的地址池配置一个 IP 地址给容器；</p>
</li>
<li>
<p>执行用户指定的应用程序；</p>
</li>
<li>
<p>执行完毕后容器被自动终止 。</p>
</li>
</ul>
<p>下面的命令启动一个 bash 终端，允许用户进行交互：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> run -it ubuntu:18.04 /bin/bash
root@b76dabdabb3f:/<span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>其中，-t 选项让 Docker 分配一个伪终端（pseudo-tty）并绑定到容器的标准输入上，-i 则让容器的标准输入保持打开。更多的命令选项可以通过 <code>man docker-run</code> 命令来查看。</p>
<p>在交互模式下，用户可以通过所创建的终端来输人命令，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>root@b76dabdabb3f:/<span class="token comment"># pwd</span>
/
root@b76dabdabb3f:/<span class="token comment"># ls</span>
bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@b76dabdabb3f:/<span class="token comment"># ps</span>
  PID TTY          TIME CMD
    <span class="token number">1</span> pts/0    00:00:00 <span class="token function">bash</span>
   <span class="token number">11</span> pts/0    00:00:00 <span class="token function">ps</span>
root@b76dabdabb3f:/<span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>在容器内用 <code>ps</code> 命令查看进程，可以看到，只运行了 bash 应用，并没有运行其他无关的进程。用户可以按 <kbd>Ctrl</kbd>+<kbd>D</kbd> 或输入 <code>exit</code> 命令来退出容器：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>root@b76dabdabb3f:/<span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>
$ 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>对于所创建的 bash 容器，当用户使用 <code>exit</code> 命令退出 bash 进程之后，容器也会自动退出。这是因为对于容器来说，当其中的应用退出后，容器的使命完成，也就没有继续运行的必要了。</p>
<p>可以使用 <code>docker container wait CONTAINER [CONTAINER...]</code> 子命令来等待容器退出，并打印退出返回结果。</p>
<p>某些时候，执行 <code>docker [container] run</code> 的时候因为命令无法正常执行容器会出错直接退出，此时可以查看退出的错误代码。</p>
<p>默认情况下，常见错误代码包括：</p>
<ul>
<li>
<p>125：Docker daemon 执行出错，例如指定了不支持的 Docker 命令参数；</p>
</li>
<li>
<p>126：所指定命令无法执行，例如权限出错；</p>
</li>
<li>
<p>127：容器内命令无法找到。</p>
</li>
</ul>
<p>命令执行后出错，会默认返回命令的退出错误码。</p>
<h3 id="_4、守护态运行" tabindex="-1"><a class="header-anchor" href="#_4、守护态运行" aria-hidden="true">#</a> 4、守护态运行</h3>
<p>更多的时候，需要让 Docker 容器在后台以守护态（Daemonized）形式运行。此时，可以
通过添加 -d 参数来实现。</p>
<p>例如，下面的命令会在后台运行容器：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> run -d ubuntu /bin/sh -c <span class="token string">"while true; do echo hello world; sleep 1; done"</span>
3bbfb70ef02e07b81229d56259d07c0bd75bb62128c4cef3a81a09c08a920ff9
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>容器启动后会返回一个唯一的 id，也可以通过 <code>docker ps</code> 或 <code>docker container ls</code> 命令来查看容器信息：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token function">ps</span>
CONTAINER ID   IMAGE           COMMAND                  CREATED              STATUS              PORTS     NAMES
3bbfb70ef02e   ubuntu          <span class="token string">"/bin/sh -c 'while t…"</span>   About a minute ago  Up About a minute             beautiful_ganguly
fcc4e0885754   ubuntu:latest   <span class="token string">"bash"</span>                   <span class="token number">4</span> hours ago          Up <span class="token number">2</span> hours                    gracious_ellis
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_5、查看容器输出" tabindex="-1"><a class="header-anchor" href="#_5、查看容器输出" aria-hidden="true">#</a> 5、查看容器输出</h3>
<p>要获取容器的输出信息，可以通过 <code>docker [container] logs</code> 命令。</p>
<p>该命令支持的选项包括：</p>
<ul>
<li>
<p>-details：打印详细信息；</p>
</li>
<li>
<p>-f，-follow：持续保持输出；</p>
</li>
<li>
<p>-since string：输出从某个时间开始的日志；</p>
</li>
<li>
<p>-tail string：输出最近的若干日志；</p>
</li>
<li>
<p>-t，timestamps：显示时间戳信息；</p>
</li>
<li>
<p>-until string：输出某个时间之前的日志。</p>
</li>
</ul>
<p>例如，查看某容器的输出可以使用如下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> logs 3bbfb70ef02e
hello world
hello world
hello world
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="停止容器" tabindex="-1"><a class="header-anchor" href="#停止容器" aria-hidden="true">#</a> 停止容器</h2>
<p>这里主要介绍 Docker 容器的 <code>pause/unpause</code>、<code>stop</code> 和 <code>prune</code> 子命令。</p>
<h3 id="_1、暂停容器" tabindex="-1"><a class="header-anchor" href="#_1、暂停容器" aria-hidden="true">#</a> 1、暂停容器</h3>
<p>可以使用 <code>docker [container] pause CONTAINER [CONTAINER...]</code> 命令来暂停一个运行中的容器。</p>
<p>例如，启动一个容器，并将其暂停，处于 paused 状态的容器，可以使用 <code>docker [container] unpause CONTAINER [CONTAINER...]</code> 命令来恢复到运行状态。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 新建一个容器，名字为 test，查看其状态</span>
$ <span class="token function">docker</span> run --name<span class="token operator">=</span><span class="token string">"test"</span> -it ubuntu <span class="token function">bash</span>
root@c8d20c12cccb:/<span class="token comment"># exit</span>
$ <span class="token function">docker</span> <span class="token function">ps</span> -a
CONTAINER ID   IMAGE     COMMAND   CREATED         STATUS                     PORTS     NAMES
c8d20c12cccb   ubuntu    <span class="token string">"bash"</span>    <span class="token number">9</span> seconds ago   Exited <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">5</span> seconds ago             <span class="token builtin class-name">test</span>

<span class="token comment"># 启动容器</span>
$ <span class="token function">docker</span> start <span class="token builtin class-name">test</span> 
<span class="token builtin class-name">test</span>
$ <span class="token function">docker</span> <span class="token function">ps</span>
CONTAINER ID   IMAGE     COMMAND   CREATED          STATUS         PORTS     NAMES
c8d20c12cccb   ubuntu    <span class="token string">"bash"</span>    <span class="token number">20</span> seconds ago   Up <span class="token number">2</span> seconds             <span class="token builtin class-name">test</span>

<span class="token comment">#暂停容器</span>
$ <span class="token function">docker</span> pause <span class="token builtin class-name">test</span> 
<span class="token builtin class-name">test</span>
$ <span class="token function">docker</span> <span class="token function">ps</span> 
CONTAINER ID   IMAGE     COMMAND   CREATED          STATUS                   PORTS     NAMES
c8d20c12cccb   ubuntu    <span class="token string">"bash"</span>    <span class="token number">54</span> seconds ago   Up <span class="token number">36</span> seconds <span class="token punctuation">(</span>Paused<span class="token punctuation">)</span>             <span class="token builtin class-name">test</span>

<span class="token comment">#恢复暂停的容器</span>
$ <span class="token function">docker</span> unpause <span class="token builtin class-name">test</span> 
<span class="token builtin class-name">test</span>
$ <span class="token function">docker</span> <span class="token function">ps</span>
CONTAINER ID   IMAGE     COMMAND   CREATED              STATUS          PORTS     NAMES
c8d20c12cccb   ubuntu    <span class="token string">"bash"</span>    About a minute ago   Up <span class="token number">53</span> seconds             <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="_2、终止容器" tabindex="-1"><a class="header-anchor" href="#_2、终止容器" aria-hidden="true">#</a> 2、终止容器</h3>
<p>可以使用 <code>docker [container] stop</code> 来终止一个运行中的容器。该命令的格式为 <code>docker</code>
<code>[container] stop [-t|--time[=10]] [CONTAINER...]</code>。</p>
<p>该命令会首先向容器发送 SIGTERM 信号，等待一段超时时间后（默认为 10 秒），再发
送 SIGKILL 信号来终止容器：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> stop <span class="token builtin class-name">test</span> 
<span class="token builtin class-name">test</span>
$ <span class="token function">docker</span> <span class="token function">ps</span> -a
CONTAINER ID   IMAGE     COMMAND   CREATED          STATUS                     PORTS     NAMES
c8d20c12cccb   ubuntu    <span class="token string">"bash"</span>    <span class="token number">10</span> minutes ago   Exited <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">5</span> seconds ago             <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>此时，执行 docker container prune 命令，会自动清除掉所有处于停止状态的容器。此外，还可以通过 <code>docker [container] kill</code> 直接发送 SIGKILL 信号来强行终止容器。</p>
<p>当 Docker 容器中指定的应用终结时，容器也会自动终止。例如，对于前面只启动了一个终端的容器，用户通过 <code>exit</code> 命令或 <kbd>Ctrl</kbd>+<kbd>d</kbd> 来退出终端时，所创建的容器立刻终止，处于 stopped 状态。</p>
<p>可以用 <code>docker ps -qa</code> 命令看到所有容器的 ID。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token function">ps</span> -aq
3c64d4d3197c
08bd1bc56ed2
c8d20c12cccb
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>处于终止状态的容器，可以通过 <code>docker [container] start</code> 命令来重新启动：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token function">ps</span> -a
CONTAINER ID   IMAGE           COMMAND       CREATED      STATUS                     PORTS     NAMES
3c64d4d3197c   centos:latest   <span class="token string">"/bin/bash"</span>   <span class="token number">2</span> days ago   Exited <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">2</span> days ago                cool_bell
08bd1bc56ed2   centos:latest   <span class="token string">"bash"</span>        <span class="token number">2</span> days ago   Exited <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">2</span> days ago                gracious_tesla
c8d20c12cccb   ubuntu          <span class="token string">"bash"</span>        <span class="token number">2</span> days ago   Exited <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">8</span> seconds ago             <span class="token builtin class-name">test</span>
$ <span class="token function">docker</span> start c8d20c12cccb
c8d20c12cccb
$ <span class="token function">docker</span> <span class="token function">ps</span>
CONTAINER ID   IMAGE     COMMAND   CREATED      STATUS         PORTS     NAMES
c8d20c12cccb   ubuntu    <span class="token string">"bash"</span>    <span class="token number">2</span> days ago   Up <span class="token number">4</span> seconds             <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><code>docker [container] restart</code> 命令会将一个运行态的容器先终止，然后再重新启动：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> restart c8d20c12cccb
c8d20c12cccb
$ <span class="token function">docker</span> <span class="token function">ps</span>
CONTAINER ID   IMAGE     COMMAND   CREATED      STATUS         PORTS     NAMES
c8d20c12cccb   ubuntu    <span class="token string">"bash"</span>    <span class="token number">2</span> days ago   Up <span class="token number">2</span> seconds             <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="进人容器" tabindex="-1"><a class="header-anchor" href="#进人容器" aria-hidden="true">#</a> 进人容器</h2>
<p>在使用 -d 参数时，容器启动后会进入后台，用户无法看到容器中的信息，也无法进行操作。
这个时候如果需要进入容器进行操作，推荐使用官方的 <code>attach</code> 或 <code>exec</code> 命令。</p>
<h3 id="_1、attach-命令" tabindex="-1"><a class="header-anchor" href="#_1、attach-命令" aria-hidden="true">#</a> 1、attach 命令</h3>
<p><code>attach</code> 是 Docker 自带的命令，命令格式为：</p>
<p><code>docker [container] attach [--detach-keys[=[]]]  \[--no-stdin] [--sig-proxy[=true]] CONTAINER</code></p>
<p>这个命令支持三个主要选项：</p>
<ul>
<li>--detach-keys [=[]]：指定退出 attach 模式的快捷键序列，默认是 CTRL-p CTRL-q；</li>
<li>--no-stdin=true|false：是否关闭标准输入，默认是保持打开；</li>
<li>--sig-proxy=true|false：是否代理收到的系统信号给应用进程，默认为 true。</li>
</ul>
<p>下面示例如何使用该命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> run -itd ubuntu
4be7970cb6b869a4857887036a6ae555f412a8fbe785ff71f027214276f14a1c
$ <span class="token function">docker</span> <span class="token function">ps</span>
CONTAINER ID   IMAGE     COMMAND   CREATED         STATUS         PORTS     NAMES
4be7970cb6b8   ubuntu    <span class="token string">"bash"</span>    <span class="token number">6</span> seconds ago   Up <span class="token number">5</span> seconds             priceless_chandrasekhar
$ <span class="token function">docker</span> attach priceless_chandrasekhar 
root@4be7970cb6b8:/<span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>然而使用 <code>attach</code> 命令有时候并不方便。当多个窗口同时 <code>attach</code> 到同一个容器的时候，所有窗口都会同步显示；当某个窗口因命令阻塞时，其他窗口也无法执行操作了。</p>
<h3 id="_2、exec-命令" tabindex="-1"><a class="header-anchor" href="#_2、exec-命令" aria-hidden="true">#</a> 2、exec 命令</h3>
<p>从 Docker 的 1.3.0 版本起，Docker 提供了一个更加方便的工具 <code>exec</code> 命令，可以在运行中容器内直接执行任意命令。</p>
<p>该命令的基本格式为：</p>
<p><code>docker [container] exec [-d|--detach] [--detach-keys[=[]]] [-i|--interactive] [--privileged] [-t|--tty] [-u|--user[=USER]] CONTAINER COMMAND [ARG...]</code></p>
<p>比较重要的参数有：</p>
<ul>
<li>-d，--detach：在容器中后台执行命令；</li>
<li>--detach-keys=&quot; &quot;：指定将容器切回后台的按键；</li>
<li>-e，--env=[]：指定环境变量列表；</li>
<li>-i，--interactive=true|false：打开标准输入接受用户输入命令，默认值为 false；</li>
<li>--privileged=true|false：是否给执行命令以高权限，默认值为 false；</li>
<li>-t，--tty=true|false：分配伪终端，默认值为 false；</li>
<li>-u，--user=&quot; &quot;：执行命令的用户名或 ID。</li>
</ul>
<p>例如，进入到刚创建的容器中，并启动一个 bash：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it 4be7970cb6b8 /bin/bash
root@4be7970cb6b8:/<span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>可以看到会打开一个新的 bash 终端，在不影响容器内其他应用的前提下，用户可以与容器进行交互。</p>
<div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>通过指定 - it 参数来保持标准输入打开，并且分配一个伪终端。通过 <code>exec</code> 命令对容器执行操作是最为推荐的方式。</p>
</div>
<p>进一步地，可以在容器中查看容器中的用户和进程信息：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>root@4be7970cb6b8:/<span class="token comment"># w</span>
 02:45:03 up <span class="token number">34</span> min,  <span class="token number">0</span> users,  load average: <span class="token number">1.39</span>, <span class="token number">0.78</span>, <span class="token number">0.67</span>
<span class="token environment constant">USER</span>     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
root@4be7970cb6b8:/<span class="token comment"># ps -ef</span>
<span class="token environment constant">UID</span>        PID  <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
root         <span class="token number">1</span>     <span class="token number">0</span>  <span class="token number">0</span> 02:42 pts/0    00:00:00 <span class="token function">bash</span>
root         <span class="token number">9</span>     <span class="token number">0</span>  <span class="token number">0</span> 02:42 pts/1    00:00:00 /bin/bash
root        <span class="token number">18</span>     <span class="token number">9</span>  <span class="token number">0</span> 02:45 pts/1    00:00:00 <span class="token function">ps</span> -ef
root@4be7970cb6b8:/<span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="删除容器" tabindex="-1"><a class="header-anchor" href="#删除容器" aria-hidden="true">#</a> 删除容器</h2>
<p>可以使用 <code>docker [container] rm</code> 命令来删除处于终止或退出状态的容器，命令格式为 <code>docker</code>
<code>[container] rm [-f|--force] [-l|--link] [-v|--volumes] CONTAINER [CONTAINER...]</code>。</p>
<p>主要支持的选项包括：</p>
<ul>
<li>
<p>-f，--force=false：是否强行终止并删除一个运行中的容器；</p>
</li>
<li>
<p>-l，--link=false：删除容器的连接，但保留容器；</p>
</li>
<li>
<p>-v，--volumes=false：删除容器挂载的数据卷。</p>
</li>
</ul>
<p>例如，查看处于终止状态的容器，并删除：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token function">ps</span> -a
CONTAINER ID   IMAGE           COMMAND       CREATED          STATUS                      PORTS     NAMES
4be7970cb6b8   ubuntu          <span class="token string">"bash"</span>        <span class="token number">27</span> minutes ago   Up <span class="token number">13</span> minutes                         priceless_chandrasekhar
3c64d4d3197c   centos:latest   <span class="token string">"/bin/bash"</span>   <span class="token number">2</span> days ago       Exited <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">2</span> days ago                 cool_bell
08bd1bc56ed2   centos:latest   <span class="token string">"bash"</span>        <span class="token number">2</span> days ago       Exited <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">2</span> days ago                 gracious_tesla
c8d20c12cccb   ubuntu          <span class="token string">"bash"</span>        <span class="token number">2</span> days ago       Exited <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">27</span> minutes ago             <span class="token builtin class-name">test</span>
$ <span class="token function">docker</span> <span class="token function">rm</span> 08bd1bc56ed2
08bd1bc56ed2
$ <span class="token function">docker</span> <span class="token function">ps</span> -a
CONTAINER ID   IMAGE           COMMAND       CREATED          STATUS                      PORTS     NAMES
4be7970cb6b8   ubuntu          <span class="token string">"bash"</span>        <span class="token number">28</span> minutes ago   Up <span class="token number">14</span> minutes                         priceless_chandrasekhar
3c64d4d3197c   centos:latest   <span class="token string">"/bin/bash"</span>   <span class="token number">2</span> days ago       Exited <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">2</span> days ago                 cool_bell
c8d20c12cccb   ubuntu          <span class="token string">"bash"</span>        <span class="token number">2</span> days ago       Exited <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token number">28</span> minutes ago             <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>默认情况下，<code>docker rm</code> 命令只能删除已经处于终止或退出状态的容器，并不能删除还处于运行状态的容器。</p>
<p>如果要直接删除一个运行中的容器，可以添加 -f 参数。Docker 会先发送 SIGKILL 信号给容器，终止其中的应用，之后强行删除：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token function">ps</span>
CONTAINER ID   IMAGE     COMMAND   CREATED          STATUS         PORTS     NAMES
acca51225fce   ubuntu    <span class="token string">"bash"</span>    <span class="token number">29</span> seconds ago   Up <span class="token number">3</span> seconds             musing_edison
$ <span class="token function">docker</span> <span class="token function">rm</span> acca51225fce
Error response from daemon: You cannot remove a running container acca51225fce4f1072a7ffd0fdac860e9d93c1bc8c84db6197d71ea292d7ca90. Stop the container before attempting removal or force remove
$ <span class="token function">docker</span> <span class="token function">rm</span> -f acca51225fce
acca51225fce
$ <span class="token function">docker</span> <span class="token function">ps</span>
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="导人和导出容器" tabindex="-1"><a class="header-anchor" href="#导人和导出容器" aria-hidden="true">#</a> 导人和导出容器</h2>
<p>某些时候，需要将容器从一个系统迁移到另外一个系统，此时可以使用 Docker 的导入和导出功能，这也是 Docker 自身提供的一个重要特性。</p>
<h3 id="_1、导出容器" tabindex="-1"><a class="header-anchor" href="#_1、导出容器" aria-hidden="true">#</a> 1、导出容器</h3>
<p>导出容器是指，导出一个已经创建的容器到一个文件，不管此时这个容器是否处于运行状态。可以使用 <code>docker [container] export</code> 命令，该命令格式为：</p>
<p><code>docker [container] export [-o|--output [ =&quot; &quot;] CONTAINER</code></p>
<p>其中，可以通过 -o 选项来指定导出的 tar 文件名，也可以直接通过重定向来实现。首先，查看所有的容器，如下所示：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ docker ps -a
CONTAINER ID   IMAGE           COMMAND       CREATED      STATUS                   PORTS     NAMES
3c64d4d3197c   centos:latest   "/bin/bash"   2 days ago   Exited (0) 2 days ago              cool_bell
c8d20c12cccb   ubuntu          "bash"        2 days ago   Exited (0) 2 hours ago             test

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>分别导出 3c64d4d3197c 容器和 c8d20c12cccb 容器到文件 <code>cool_for_centos.tar</code> 文件和 <code>test_for_ubuntu.tar</code> 文件：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token builtin class-name">export</span> -o cool_for_centos.tar 3c64d4d3197c
$ <span class="token function">ls</span> -l
总用量 <span class="token number">211484</span>
-rw------- <span class="token number">1</span> root root <span class="token number">216525312</span> <span class="token number">9</span>月   <span class="token number">6</span> <span class="token number">12</span>:10 cool_for_centos.tar
$ <span class="token function">docker</span> <span class="token builtin class-name">export</span> c8d20c12cccb <span class="token operator">></span> test_for_ubuntu.tar
$ <span class="token function">ls</span> -l
总用量 <span class="token number">284884</span>
-rw------- <span class="token number">1</span> root root <span class="token number">216525312</span> <span class="token number">9</span>月   <span class="token number">6</span> <span class="token number">12</span>:10 cool_for_centos.tar
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>之后，可将导出的 tar 文件传输到其他机器上，然后再通过导人命令导入到系统中，实现容器的迁移。</p>
<h3 id="_2、导入容器" tabindex="-1"><a class="header-anchor" href="#_2、导入容器" aria-hidden="true">#</a> 2、导入容器</h3>
<p>导出的文件又可以使用 <code>docker [container] import</code> 命令导人变成镜像，该命令格式为：</p>
<p><code>docker import [-c|--change[=[]]] [-m|--message[=MESSAGE]] file|URL|-[REPOSITORY[:TAG]]</code></p>
<p>用户可以通过 -c，--change=[] 选项在导人的同时执行对容器进行修改的 Dockerfile 指令（可参考后续相关内容）。</p>
<p>下面将导出的 <code>test_for_ubuntu.tar</code> 文件导人到系统中：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>r$ <span class="token function">docker</span> <span class="token function">import</span> test_for_ubuntu.tar test/ubuntu:v1.0
sha256:00cf452ac39b9eecff28658850094bac5e345f0ac0f06ff44897873464c7ae00
$ <span class="token function">docker</span> images
REPOSITORY    TAG       IMAGE ID       CREATED         SIZE
test/ubuntu   v1.0      00cf452ac39b   <span class="token number">4</span> seconds ago   <span class="token number">72</span>.8MB
ubuntu        latest    fb52e22af1b0   <span class="token number">6</span> days ago      <span class="token number">72</span>.8MB
ubuntu        <span class="token number">18.04</span>     54919e10a95d   <span class="token number">6</span> days ago      <span class="token number">63</span>.1MB
centos        latest    300e315adb2f   <span class="token number">9</span> months ago    209MB
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>之前曾介绍过使用 <code>docker load</code> 命令来导入一个镜像文件，与 <code>docke [container] import</code> 命令十分类似。
实际上，既可以使用 <code>docker load</code> 命令来导入镜像存储文件到本地镜像库，也可以使用 <code>docker import</code> 命令来导入一个容器快照到本地镜像库。这两者的区别在于：容器快照文件将丢弃所有的历史记录和元数据信息（即仅保存容器当时的快照状态），而镜像存储文件将保存完整记录，体积更大。此外，从容器快照文件导入时可以重新指定标签等元数据信息。</p>
<h2 id="查看容器" tabindex="-1"><a class="header-anchor" href="#查看容器" aria-hidden="true">#</a> 查看容器</h2>
<p>主要介绍 Docker 容器的 <code>inspect</code>、<code>top</code> 和 <code>stats</code> 子命令。</p>
<h3 id="_1、查看容器详情" tabindex="-1"><a class="header-anchor" href="#_1、查看容器详情" aria-hidden="true">#</a> 1、查看容器详情</h3>
<p>查看容器详情可以使用 <code>docker container inspect [OPTIONS] CONTAINER [CONTAINER...]</code>子命令。
例如，查看某容器的具体信息，会以 json 格式返回包括容器 Id、创建时间、路径、状态、镜像、配置等在内的各项信息：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> container inspect <span class="token builtin class-name">test</span>
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">"Id"</span><span class="token builtin class-name">:</span> <span class="token string">"c8d20c12cccbf317c5f9257b3abe542f98dba3b92b7f72d963427413e5ebf2ad"</span>，
        <span class="token string">"Created"</span><span class="token builtin class-name">:</span> <span class="token string">"2021-09-03T07:45:47.300705248Z"</span>，
        <span class="token string">"Path"</span><span class="token builtin class-name">:</span> <span class="token string">"bash"</span>，
        <span class="token string">"Args"</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>，
        <span class="token string">"State"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"Status"</span><span class="token builtin class-name">:</span> <span class="token string">"exited"</span>，
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_2、查看容器内进程" tabindex="-1"><a class="header-anchor" href="#_2、查看容器内进程" aria-hidden="true">#</a> 2、查看容器内进程</h3>
<p>查看容器内进程可以使用 <code>docker [container] top [OPTIONS] CONTAINER [CONTAINER...]</code>子命令。</p>
<p>这个子命令类似于 Linux 系统中的 <code>top</code> 命令，会打印出容器内的进程信息，包括 PID、用户、时间、命令等。例如，查看某容器内的进程信息，命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> <span class="token function">ps</span>
CONTAINER ID   IMAGE     COMMAND   CREATED      STATUS         PORTS     NAMES
c8d20c12cccb   ubuntu    <span class="token string">"bash"</span>    <span class="token number">2</span> days ago   Up <span class="token number">2</span> seconds             <span class="token builtin class-name">test</span>
kei@kei-KVM:~/docker$ <span class="token function">docker</span> <span class="token function">top</span> <span class="token builtin class-name">test</span> 
<span class="token environment constant">UID</span>                 PID                 <span class="token environment constant">PPID</span>                C                   STIME               TTY                 TIME                CMD
root                <span class="token number">9758</span>                <span class="token number">9723</span>                <span class="token number">0</span>                   <span class="token number">13</span>:18               pts/0               00:00:00            <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_3、查看统计信息" tabindex="-1"><a class="header-anchor" href="#_3、查看统计信息" aria-hidden="true">#</a> 3、查看统计信息</h3>
<p>查看统计信息可以使用 <code>docker [container] stats [OPTIONS] [CONTAINER...]</code> 子命令，会显示 CPU、内存、存储、网络等使用情况的统计信息。</p>
<p>支持选项包括：</p>
<ul>
<li>a，-all：输出所有容器统计信息，默认仅在运行中；</li>
<li>-format string：格式化输出信息；</li>
<li>-no-stream：不持续输出，默认会自动更新持续实时结果；</li>
<li>-no-trunc：不截断输出信息。</li>
</ul>
<p>例如，查看当前运行中容器的系统资源使用统计：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> stats
CONTAINER ID   NAME      CPU %     MEM USAGE / LIMIT     MEM %     NET I/O       BLOCK I/O     PIDS
c8d20c12cccb   <span class="token builtin class-name">test</span>      <span class="token number">0.00</span>%     <span class="token number">2</span>.562MiB / <span class="token number">3</span>.844GiB   <span class="token number">0.07</span>%     <span class="token number">3</span>.51kB / 0B   <span class="token number">1</span>.25MB / 0B   <span class="token number">1</span>
<span class="token comment"># 可使用 Ctrl + C 退出</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="其他容器命令" tabindex="-1"><a class="header-anchor" href="#其他容器命令" aria-hidden="true">#</a> 其他容器命令</h2>
<p>主要介绍 Docker 容器的 <code>cp</code>、<code>diff</code>、<code>port</code> 和 <code>update</code> 子命令。</p>
<h3 id="_1、复制文件" tabindex="-1"><a class="header-anchor" href="#_1、复制文件" aria-hidden="true">#</a> 1、复制文件</h3>
<p><code>container cp</code> 命令支持在容器和主机之间复制文件。</p>
<p>命令格式为 <code>docker [container] cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH|-</code>。支持的选项包括 ：</p>
<ul>
<li>-a，-archive：打包模式，复制文件会带有原始的 uid/gid 信息；</li>
<li>-L，-follow-link：跟随软连接。当原路径为软连接时，默认只复制链接信息，使用该选项会复制链接的目标内容。</li>
</ul>
<p>例如，将本地的路径 data 复制到 test 容器的 /tmp 路径下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">touch</span> test_file.txt
$ <span class="token function">nano</span> test_file.txt 
$ <span class="token function">cat</span> test_file.txt 
hello world<span class="token operator">!</span>
$ <span class="token function">docker</span> <span class="token function">ps</span>
CONTAINER ID   IMAGE     COMMAND   CREATED      STATUS          PORTS     NAMES
c8d20c12cccb   ubuntu    <span class="token string">"bash"</span>    <span class="token number">2</span> days ago   Up <span class="token number">12</span> minutes             <span class="token builtin class-name">test</span>
$ <span class="token function">docker</span> <span class="token function">cp</span> test_file.txt test:/tmp/
$ <span class="token function">docker</span> attach <span class="token builtin class-name">test</span> 
root@c8d20c12cccb:/<span class="token comment"># cd /tmp/ &amp;&amp; ls</span>
test_file.txt
root@c8d20c12cccb:/tmp<span class="token comment"># cat test_file.txt </span>
hello world<span class="token operator">!</span>
root@c8d20c12cccb:/tmp<span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="_2、查看变更" tabindex="-1"><a class="header-anchor" href="#_2、查看变更" aria-hidden="true">#</a> 2、查看变更</h3>
<p><code>container diff</code> 查看容器内文件系统的变更。</p>
<p>命令格式为 <code>docker [container] diff CONTAINER</code>。例如，查看 test 容器内的数据修改：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> container <span class="token function">diff</span> <span class="token builtin class-name">test</span> 
C /root
A /root/.bash_history
C /tmp
A /tmp/test_file.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_3、查看端口映射" tabindex="-1"><a class="header-anchor" href="#_3、查看端口映射" aria-hidden="true">#</a> 3、查看端口映射</h3>
<p><code>container port</code> 命令可以查看容器的端口映射’情况。</p>
<p>命令格式为 <code>docker container port CONTAINER [PRIVATE_PORT[/PROTO]]</code>。例如，查看 test 容器的端口映射’情况：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> container port <span class="token builtin class-name">test</span>
<span class="token number">9000</span>/tcp -<span class="token operator">></span> <span class="token number">0.0</span>.0.0:9000
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_4、更新配置" tabindex="-1"><a class="header-anchor" href="#_4、更新配置" aria-hidden="true">#</a> 4、更新配置</h3>
<p><code>container update</code> 命令可以更新容器的一些运行时配置，主要是一些资源限制份额。</p>
<p>命令格式为 <code>docker [container] update [OPTIONS] CONTAINER [CONTAINER...]</code>。</p>
<p>支持的选项包括：</p>
<ul>
<li>blkio-weight uint16：更新块 IO 限制，10~1000，默认值为 0，代表着无限制；</li>
<li>-cpu-period int：限制 CPU 调度器 CFS（Completely Fair Scheduler）使用时间，单位为微秒，最小 1000；</li>
<li>-cpu-quota int：限制 CPU 调度器 CFS 配额，单位为微秒，最小 1000；</li>
<li>-cpu-rt-period int：限制 CPU 调度器的实时周期，单位为微秒；</li>
<li>-cpu-rt-runtime int：限制 CPU 调度器的实时运行时，单位为微秒；</li>
<li>-c，-cpu-shares int：限制 CPU 使用份额；</li>
<li>-cpus decimal：限制 CPU 个数；</li>
<li>-cpuset-cpus string：允许使用的 CPU 核，如 0-3，0，1；</li>
<li>-cpuset-mems string：允许使用的内存块，如 0-3，0，1；</li>
<li>-kernel-memory bytes：限制使用的内核内存；</li>
<li>-m，-memory bytes：限制使用的内存；</li>
<li>-memory-reservation bytes：内存软限制；</li>
<li>-memory-swap bytes：内存加上缓存区的限制，-1 表示为对缓冲区无限制；</li>
<li>-restart string：容器退出后的重启策略。</li>
</ul>
<p>例如，限制总配额为 1 秒，容器 test 所占用时间为 10% ，代码如下所示：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> update --cpu-quota <span class="token number">1000000</span> <span class="token builtin class-name">test</span> 
<span class="token builtin class-name">test</span>
$ <span class="token function">docker</span> update --cpu-period <span class="token number">100000</span> <span class="token builtin class-name">test</span> 
<span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2>
<p>容器是直接提供应用服务的组件，也是 Docker 整个技术核中最为核心的概念。围绕容器，Docker 提供了十分丰富的操作命令，允许用户高效地管理容器的整个生命周期。你可以使用 <code>docker container help</code> 命令查看 Docker 支持的容器操作子命令。</p>
</template>
