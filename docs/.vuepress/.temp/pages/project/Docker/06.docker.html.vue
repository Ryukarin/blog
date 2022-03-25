<template><p>在生产环境中使用 Docker，往往需要对数据进行持久化，或者需要在多个容器之间进行数据共享，这必然涉及容器的数据管理操作。</p>
<p>容器中的管理数据主要有两种方式：</p>
<ul>
<li>
<p><strong>数据卷（Data Volumes）</strong>：容器内数据直接映射到本地主机环境；</p>
</li>
<li>
<p><strong>数据卷容器（Data Volume Containers）</strong>：使用特定容器维护数据卷。</p>
</li>
</ul>
<p>将首先介绍如何在容器内创建数据卷，并且把本地的目录或文件挂载到容器内的数据卷中。接下来，介绍如何使用数据卷容器在容器和主机、容器和容器之间共享数据，并实现数据的备份和恢复。</p>
<h2 id="数据卷" tabindex="-1"><a class="header-anchor" href="#数据卷" aria-hidden="true">#</a> 数据卷</h2>
<p>数据卷（Data Volumes）是一个可供容器使用的特殊目录，它将主机操作系统目录直接映射进容器，类似于 Linux 中的 <code>mount</code> 行为。</p>
<p>数据卷可以提供很多有用的特性：</p>
<ul>
<li>数据卷可以在容器之间共享和重用，容器间传递数据将变得高效与方便；</li>
<li>对数据卷内数据的修改会立马生效，无论是容器内操作还是本地操作；</li>
<li>对数据卷的更新不会影响镜像，解耦开应用和数据 ；</li>
<li>卷会一直存在，直到没有容器使用，可以安全地卸载它。</li>
</ul>
<h3 id="_1、创建数据卷" tabindex="-1"><a class="header-anchor" href="#_1、创建数据卷" aria-hidden="true">#</a> 1、创建数据卷</h3>
<p>Docker 提供了 <code>volume</code> 子命令来管理数据卷，如下命令可以快速在本地创建一个数据卷：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> volume create -d <span class="token builtin class-name">local</span> <span class="token builtin class-name">test</span>
<span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>此时，<code>docker volume ls</code> 命令可以查看已有的数据卷，<code>docker inspect test</code>  可以查看数据卷 test 的具体信息：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">docker</span> volume <span class="token function">ls</span>
DRIVER    VOLUME NAME
<span class="token builtin class-name">local</span>     <span class="token builtin class-name">test</span>
$ <span class="token function">docker</span> inspect <span class="token builtin class-name">test</span> 
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">"CreatedAt"</span><span class="token builtin class-name">:</span> <span class="token string">"2021-09-22T15:06:05+08:00"</span>,
        <span class="token string">"Driver"</span><span class="token builtin class-name">:</span> <span class="token string">"local"</span>,
        <span class="token string">"Labels"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>,
        <span class="token string">"Mountpoint"</span><span class="token builtin class-name">:</span> <span class="token string">"/var/lib/docker/volumes/test/_data"</span>,
        <span class="token string">"Name"</span><span class="token builtin class-name">:</span> <span class="token string">"test"</span>,
        <span class="token string">"Options"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>,
        <span class="token string">"Scope"</span><span class="token builtin class-name">:</span> <span class="token string">"local"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>除了 <code>create</code> 子命令外，<code>docker volume</code> 还支持 <code>inspect</code>（查看详细信息）、<code>ls</code>（列出已有数据卷）、<code>prune</code>（清理无用数据卷）、<code>rm</code>（删除数据卷）等，大家可以自行实践。</p>
<h3 id="_2、绑定数据卷" tabindex="-1"><a class="header-anchor" href="#_2、绑定数据卷" aria-hidden="true">#</a> 2、绑定数据卷</h3>
<p>除了使用 <code>volume</code> 子命令来管理数据卷外，还可以在创建容器时将主机本地的任意路径挂载到容器内作为数据卷，这种形式创建的数据卷称为绑定数据卷。</p>
<p>在用 <code>docker [container] run</code> 命令的时候，可以使用 -mount 选项来使用数据卷。</p>
<p>-mount 选项支持三种类型的数据卷，包括：</p>
<ul>
<li>volume：普通数据卷，映射到主机 <code>/var/lib/docker/volumes</code> 路径下；</li>
<li>bind：绑定数据卷，映射到主机指定路径下；</li>
<li>tmpfs ：临时数据卷，只存在于内存中。</li>
</ul>
<p>下面使用 training/webapp 镜像创建一个 Web 容器，并创建一个数据卷挂载到容器的 <code>/opt/webapp</code> 目录：</p>
</template>
