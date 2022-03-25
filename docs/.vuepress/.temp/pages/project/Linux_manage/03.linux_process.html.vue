<template><p>很多人一看要学习系统管理了，策一感觉就是&quot;虽然不知道你在说什么，但是看起来很高端&quot;。</p>
<p>其实，系统管理只是一个统称，软件管理、文件系统管理、启动管理和服务管理都可以归入系统管理当中。</p>
<p>这次，我们主要学习进程管理、工作管理和系统定时任务。同时解决一些问题，如什么是进程、进程的管理方式是什么、工作管理的作用是什么、系统定时任务如何实现。</p>
<h2 id="进程的简介" tabindex="-1"><a class="header-anchor" href="#进程的简介" aria-hidden="true">#</a> 进程的简介</h2>
<p>无论是 Linux 系统管理员还是普通用户，监视系统进程的运行情况并适时终止一些失控的进程，是每天的例行事务。和 Linux 系统相比，进程管理在 Windows 中更加直观，它主要是使用&quot;任务管理器&quot;来进行进程管理的。</p>
<p>通常，使用&quot;任务管理器&quot;主要有 3 个目的：</p>
<ol>
<li>利用“应用程序”和“进程”标签来査看系统中到底运行了哪些程序和进程；</li>
<li>利用“性能”和“用户”标签来判断服务器的健康状态；</li>
<li>在“应用程序”和“进程”标签中强制中止任务和进程；</li>
</ol>
<p>Linux 中虽然使用命令进行进程管理，但是进程管理的主要目的是一样的，即查看系统中运行的程序和进程、判断服务器的健康状态和强制中止不需要的进程。</p>
<p>那么，到底什么是进程呢？它和我们平时所说的“程序”又有什么联系呢？</p>
<h3 id="什么是进程和程序" tabindex="-1"><a class="header-anchor" href="#什么是进程和程序" aria-hidden="true">#</a> 什么是进程和程序</h3>
<p>进程是正在执行的一个程序或命令，每个进程都是一个运行的实体，都有自己的地址空间，并占用一定的系统资源。程序是人使用计算机语言编写的可以实现特定目标或解决特定问题的代码集合。这么讲很难理解，那我们换一种说法。</p>
<ul>
<li>程序是人使用计算机语言编写的，可以实现一定功能，并且可以执行的代码集合。</li>
<li>进程是正在执行中的程序。当程序被执行时，执行人的权限和属性，以及程序的代码都会被加载入内存，操作系统给这个进程分配一个 ID，称为 PID（进程 ID）。</li>
</ul>
<p>也就是说，在操作系统中，所有可以执行的程序与命令都会产生进程。只是有些程序和命令非常简单，如 <code>ls</code> 命令、<code>touch</code> 命令等，它们在执行完后就会结束，相应的进程也就会终结，所以我们很难捕捉到这些进程。但是还有一些程和命令，比如 <code>httpd</code> 进程，启动之后就会一直驻留在系统当中，我们把这样的进程称作常驻内存进程。</p>
<p>某些进程会产生一些新的进程，我们把这些进程称作子进程，而把这个进程本身称作父进程。比如，我们必须正常登录到 Shell 环境中才能执行系统命令，而 Linux 的标准 Shell 是 bash。我们在 bash 当中执行了 <code>ls</code> 命令，那么 bash 就是父进程，而 <code>ls</code> 命令是在 bash 进程中产生的进程，所以 <code>ls</code> 进程是 bash 进程的子进程。也就是说，子进程是依赖父进程而产生的，如果父进程不存在，那么子进程也不存在了。</p>
<h3 id="进程管理的作用" tabindex="-1"><a class="header-anchor" href="#进程管理的作用" aria-hidden="true">#</a> 进程管理的作用</h3>
<p>在使用 Windows 系统的过程中，使用任务管理器，很大程度上是为了强制关闭“未反应”的软件，也就是杀死进程。的确，这是很多使用进程管理工具或进程管理命令的人最常见的使用方法。不过，杀死进程（强制中止进程）只是进程管理工作中最不常用的手段，因为每个进程都有自己正确的结束方法，而杀死进程是在正常方法已经失效的情况下的后备手段。</p>
<p>那么，进程管理到底应该是做什么的呢？我以为，进程管理主要有以下 3 个作用。</p>
<h4 id="_1-判断服务器的健康状态" tabindex="-1"><a class="header-anchor" href="#_1-判断服务器的健康状态" aria-hidden="true">#</a> 1) 判断服务器的健康状态</h4>
<p>运维工程师最主要的工作就是保证服务器安全、稳定地运行。理想的状态是，在服务器出现问题，但是还没有造成服务器宕机或停止服务时，就人为干预解决了问题。</p>
<p>进程管理最主要的工作就是判断服务器当前运行是否健康，是否需要人为干预。如果服务器的 CPU 占用率、内存占用率过高，就需要人为介入解决问题了。这又出现了一个问题，我们发现服务器的 CPU 或内存占用率很高，该如何介入呢？是直接终止高负载的进程吗？</p>
<p>当然不是，应该判断这个进程是否是正常进程，如果是正常进程，则说明你的服务器已经不能满足应用需求，你需要更好的硬件或搭建集群了；如果是非法进程占用了系统资源，则更不能直接中止进程，而要判断非法进程的来源、作用和所在位置，从而把它彻底清除。</p>
<p>当然，如果服务器数量很少，我们完全可以人为通过进程管理命令来进行监控与干预，但如果服务器数量较多，那么人为手工监控就变得非常困难了，这时我们就需要相应的监控服务，如 cacti 或 nagios。总之，进程管理工作中最重要的工作就是判断服务器的健康状态，最理想的状态是服务器宕机之前就解决问题，从而避免服务器的宕机。</p>
<h4 id="_2-查看系统中所有的进程" tabindex="-1"><a class="header-anchor" href="#_2-查看系统中所有的进程" aria-hidden="true">#</a> 2) 查看系统中所有的进程</h4>
<p>我们需要查看看系统中所有正在运行的进程，通过这些进程可以判断系统中运行了哪些服务、是否有非法服务在运行。</p>
<h4 id="_3-杀死进程" tabindex="-1"><a class="header-anchor" href="#_3-杀死进程" aria-hidden="true">#</a> 3) 杀死进程</h4>
<p>这是进程管理中最不常用的手段。当需要停止服务时，会通过正确关闭命令来停止服务（如 apache 服务可以通过 <code>service httpd stop</code> 命令来关闭）。只有在正确终止进程的手段失效的情况下，才会考虑使用 <code>kill</code> 命令杀死进程。</p>
<p>其实，进程管理和 Windows 中任务管理器的作用非常类似，不过大家在使用任务管理器时是为了杀死进程，而不是为了判断服务器的健康状态。</p>
<h2 id="进程的启动" tabindex="-1"><a class="header-anchor" href="#进程的启动" aria-hidden="true">#</a> 进程的启动</h2>
<p>在 Linux 系统中，每个进程都有一个唯一的进程号（PID），方便系统识别和调度进程。通过简单地输出运行程序的程序名，就可以运行该程序，其实也就是启动了一个进程。</p>
<p>总体来说，启动一个进程主要有 2 种途径，分别是通过手工启动和通过调度启动（事先进行设置，根据用户要求，进程可以自行启动），接下来就一一介绍这 2 中方式。</p>
<h3 id="手工启动" tabindex="-1"><a class="header-anchor" href="#手工启动" aria-hidden="true">#</a> 手工启动</h3>
<p>手工启动进程指的是由用户输入命令直接启动一个进程，根据所启动的进程类型和性质的不同，其又可以细分为前台启动和后台启动 2 种方式。</p>
<h4 id="前台启动进程" tabindex="-1"><a class="header-anchor" href="#前台启动进程" aria-hidden="true">#</a> <strong>前台启动进程</strong></h4>
<p>这是手工启动进程最常用的方式，因为当用户输入一个命令并运行，就已经启动了一个进程，而且是一个前台的进程，此时系统其实已经处于一个多进程的状态（一个是 Shell 进程，另一个是新启动的进程）。</p>
<blockquote>
<p>实际上，系统启动时就有许多进程悄悄地在后台运行，不过这里为了方便读者理解，并没有将这些进程包括在内。</p>
</blockquote>
<p>假如启动一个比较耗时的进程，然后再把该进程挂起，并使用 <code>ps</code> 命令查看，就会看到该进程在 <code>ps</code> 显示列表中，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># find / -name demo.jpg		&lt;--在根目录下查找 demo.jpg 文件，比较耗时</span>
<span class="token comment">#此处省略了该命令的部分输出信息</span>
<span class="token comment">#按“CTRL+Z”组合键，即可将该进程挂起</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ps							&lt;--查看正在运行的进程</span>
PID		TTY		TIME		CMD
<span class="token number">2573</span>	pts/0	00:00:00	<span class="token function">bash</span>
<span class="token number">2587</span>	pts/0	00:00:01	<span class="token function">find</span>
<span class="token number">2588</span>	pts/0	00:00:00	<span class="token function">ps</span>
<span class="token comment">#通过运行 `ps` 命令查看进程信息，可以看到，刚刚执行的 `find` 命令的进程号为 2587，同时 `ps` 进程的进程号为 2588。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">挂起</p>
<p>将进程挂起，指的是将前台运行的进程放到后台，并且暂停其运行，有关挂起进程和 <code>ps</code> 命令用法，后面会做详细介绍。</p>
</div>
<h4 id="后台启动进程" tabindex="-1"><a class="header-anchor" href="#后台启动进程" aria-hidden="true">#</a> <strong>后台启动进程</strong></h4>
<p>进程直接从后台运行，用的相对较少，除非该进程非常耗时，且用户也不急着需要其运行结果的时候，例如，用户需要启动一个需要长时间运行的格式化文本文件的进程，为了不使整个 Shell 在格式化过程中都处于“被占用”状态，从后台启动这个进程是比较明智的选择。</p>
<p>从后台启动进程，其实就是在命令结尾处添加一个 &quot; &amp;&quot; 符号（注意，&amp; 前面有空格）。输入命令并运行之后，Shell 会提供给我们一个数字，此数字就是该进程的进程号。然后直接就会出现提示符，用户就可以继续完成其他工作，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># find / -name install.log &amp;</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">1920</span>
<span class="token comment">#[1]是工作号，1920是进程号</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>有关后台启动进程及相关的注意事项，后面也会做详细介绍。</p>
</div>
<p>以上介绍了手工启动的 2 种方式，实际上它们有个共同的特点，就是新进程都是由当前 Shell 这个进程产生的，换句话说，是 Shell 创建了新进程，于是称这种关系为进程间的父子关系，其中 Shell 是父进程，新进程是子进程。</p>
<p>值得一提的是，一个父进程可以有多个子进程，通常子进程结束后才能继续父进程；当然，如果是从后台启动，父进程就不用等待子进程了。</p>
<h3 id="调度启动进程" tabindex="-1"><a class="header-anchor" href="#调度启动进程" aria-hidden="true">#</a> 调度启动进程</h3>
<p>在 Linux 系统中，任务可以被配置在指定的时间、日期或者系统平均负载量低于指定值时自动启动。</p>
<p>例如，Linux 预配置了重要系统任务的运行，以便可以使系统能够实时被更新，系统管理员也可以使用自动化的任务来定期对重要数据进行备份。</p>
<p>实现调度启动进程的方法有很多，例如通过 <code>crontab</code>、<code>at</code> 等命令，有关这些命令的具体用法，后面会做详细介绍。</p>
<h2 id="进程的查看" tabindex="-1"><a class="header-anchor" href="#进程的查看" aria-hidden="true">#</a> 进程的查看</h2>
<p>我们先来学习进程的查看命令，在 Linux 中运行的进程查看和服务器的健康状态判断都是依靠进程查看命令完成的，不过分别采用不同夫人命令，其中，<code>ps</code> 命令侧重静态地查看系统中正在运行的进程，<code>top</code> 命令侧重动态地查看进程和服务器的健康状态，<code>pstree</code> 命令主要用于查看进程树。下面分别来介绍。</p>
<h3 id="ps-命令-静态查看进程" tabindex="-1"><a class="header-anchor" href="#ps-命令-静态查看进程" aria-hidden="true">#</a> ps 命令：静态查看进程</h3>
<p><code>ps</code> 命令是最常用的监控进程的命令，通过此命令可以查看系统中所有运行进程的详细信息。</p>
<p>英文原意：report a snapshot of the current processes</p>
<p><code>ps</code> 命令的基本格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ps aux</span>
<span class="token comment">#查看系统中所有的进程，使用 BS 操作系统格式</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ps -le</span>
<span class="token comment">#查看系统中所有的进程，使用 Linux 标准命令格式</span>

选项：
	a	：显示一个终端的所有进程，除会话引线外
	u	：显示进程的归属用户及内存的使用情况
	x	：显示没有控制终端的进程
	-l	：长格式显示更加详细的信息
	-e	：显示所有进程
	-f	：全格式
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>可以看到，<code>ps</code> 命令有些与众不同，它的部分选项不能加入“-”，比如命令 <code>ps aux</code>，其中“aux”是选项，但是前面不能带“-”。</p>
<p>大家如果执行 <code>man ps</code> 命令，则会发现 <code>ps</code> 命令的帮助为了适应不同的类 UNIX 系统，可用格式非常多，不方便记忆。所以，我建议大家记忆几个固定选项即可。比如：</p>
<ul>
<li><strong><code>ps aux</code></strong> 可以查看系统中所有的进程；</li>
<li><strong><code>ps -le</code></strong> 可以查看系统中所有的进程，而且还能看到进程的父进程的 PID 和进程优先级；</li>
<li><strong><code>ps -l</code></strong> 只能看到当前 Shell 产生的进程；</li>
</ul>
<p>有这三个命令就足够了，下面分别来查看。</p>
<p>例 1：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ps aux</span>
<span class="token comment">#查看系统中所有的进程</span>
<span class="token environment constant">USER</span>   PID   %CPU   %MEM    VSZ    RSS   TTY   STAT   START   TIME   COMMAND
root     <span class="token number">1</span>    <span class="token number">0.0</span>    <span class="token number">0.2</span>   <span class="token number">2872</span>   <span class="token number">1416</span>     ?     Ss   Jun04   <span class="token number">0</span>:02   /sbin/init
root     <span class="token number">2</span>    <span class="token number">0.0</span>    <span class="token number">0.0</span>      <span class="token number">0</span>      <span class="token number">0</span>     ?      S   Jun04   <span class="token number">0</span>:00   <span class="token punctuation">[</span>kthreadd<span class="token punctuation">]</span>
root     <span class="token number">3</span>    <span class="token number">0.0</span>    <span class="token number">0.0</span>      <span class="token number">0</span>      <span class="token number">0</span>     ?      S   Jun04   <span class="token number">0</span>:00   <span class="token punctuation">[</span>migration/0<span class="token punctuation">]</span>
root     <span class="token number">4</span>    <span class="token number">0.0</span>    <span class="token number">0.0</span>      <span class="token number">0</span>      <span class="token number">0</span>     ?      S   Jun04   <span class="token number">0</span>:00   <span class="token punctuation">[</span>ksoftirqd/0<span class="token punctuation">]</span>
<span class="token punctuation">..</span>.省略部分输出<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>表4-1 中罗列出了以上输出信息中各列的具体含义。</p>
<p><strong>表4-1	<code>ps aux</code><u>表头的含义</u></strong></p>
<table>
<thead>
<tr>
<th>表头</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>USER</td>
<td>该进程是由哪个用户产生的。</td>
</tr>
<tr>
<td>PID</td>
<td>进程的 ID。</td>
</tr>
<tr>
<td>%CPU</td>
<td>该进程占用 CPU 资源的百分比，占用的百分比越高，进程越耗费资源。</td>
</tr>
<tr>
<td>%MEM</td>
<td>该进程占用物理内存的百分比，占用的百分比越高，进程越耗费资源。</td>
</tr>
<tr>
<td>VSZ</td>
<td>该进程占用虚拟内存的大小，单位为 KB。</td>
</tr>
<tr>
<td>RSS</td>
<td>该进程占用实际物理内存的大小，单位为 KB。</td>
</tr>
<tr>
<td>TTY</td>
<td>该进程是在哪个终端运行的。其中，tty1 ~ tty7 代表本地控制台终端（可以通过 Alt+F1 ~ F7  快捷键切换不同的终端），tty1~tty6 是本地的字符界面终端，tty7 是图形终端。pts/0 ~ 255  代表虚拟终端，一般是远程连接的终端，第一个远程连接占用 pts/0，第二个远程连接占用 pts/1，依次増长。</td>
</tr>
<tr>
<td>STAT</td>
<td>进程状态。常见的状态有以下几种：  <br />-D：不可被唤醒的睡眠状态，通常用于 I/O 情况。<br />-R：该进程正在运行。<br />-S：该进程处于睡眠状态，可被唤醒。 <br />-T：停止状态，可能是在后台暂停或进程处于除错状态。<br />-W：内存交互状态（从 2.6 内核开始无效）。<br />-X：死掉的进程（应该不会出现）。<br />-Z：僵尸进程。进程已经中止，但是部分程序还在内存当中。<br />-&lt;：高优先级（以下状态在 BSD 格式中出现）。<br />-N：低优先级。 <br />-L：被锁入内存。<br />-s：包含子进程。<br />-l：多线程（小写 L）。 <br />-+：位于后台。</td>
</tr>
<tr>
<td>START</td>
<td>该进程的启动时间。</td>
</tr>
<tr>
<td>TIME</td>
<td>该进程占用 CPU 的运算时间，注意不是系统时间。</td>
</tr>
<tr>
<td>COMMAND</td>
<td>产生此进程的命令名。</td>
</tr>
</tbody>
</table>
<p>例 2：</p>
<p><code>ps aux</code> 命令可以看到系统中所有的进程，<code>ps -le</code> 命令也能看到系统中所有的进程。由于“-l”选项的作用，所以 <code>ps -le</code> 命令能够看到更加详细的信息，比如父进程的 PID、优先级等。但是这两个命令的基本作用是一致的，掌握其中一个就足够了。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ps -le</span>
F   S   <span class="token environment constant">UID</span>   PID   <span class="token environment constant">PPID</span>   C   PRI   Nl   ADDR   SZ   WCHAN   TTY      TIME   CMD
<span class="token number">4</span>   S     <span class="token number">0</span>     <span class="token number">1</span>      <span class="token number">0</span>   <span class="token number">0</span>    <span class="token number">80</span>    <span class="token number">0</span>   -     <span class="token number">718</span>   -       ?    00:00:02   init
<span class="token number">1</span>   S     <span class="token number">0</span>     <span class="token number">2</span>      <span class="token number">0</span>   <span class="token number">0</span>    <span class="token number">80</span>    <span class="token number">0</span>   -       <span class="token number">0</span>   -       ?    00:00:00   kthreadd
<span class="token number">1</span>   S     <span class="token number">0</span>     <span class="token number">3</span>      <span class="token number">2</span>   <span class="token number">0</span>   -40    -   -       <span class="token number">0</span>   -       ?    00:00:00   migration/0
<span class="token number">1</span>   S     <span class="token number">0</span>     <span class="token number">4</span>      <span class="token number">2</span>   <span class="token number">0</span>    <span class="token number">80</span>    <span class="token number">0</span>   -       <span class="token number">0</span>   -       ?    00:00:00   ksoflirqd/0
<span class="token number">1</span>   S     <span class="token number">0</span>     <span class="token number">5</span>      <span class="token number">2</span>   <span class="token number">0</span>   -40    -   -       <span class="token number">0</span>   -       ?    00:00:00   migration/0
<span class="token punctuation">..</span>.省略部分输出<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>表4-2 罗列出以上输出信息中各列的含义。</p>
<p><strong>表4-2	<code>ps -le</code> <u>表头的含义</u></strong></p>
<table>
<thead>
<tr>
<th>表头</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>F</td>
<td>进程标志，说明进程的权限，常见的标志有两个: <br />1：进程可以被复制，但是不能被执行； <br />4：进程使用超级用户权限；</td>
</tr>
<tr>
<td>S</td>
<td>进程状态。具体的状态和&quot;psaux&quot;命令中的 STAT 状态一致；</td>
</tr>
<tr>
<td>UID</td>
<td>运行此进程的用户的 ID；</td>
</tr>
<tr>
<td>PID</td>
<td>进程的 ID；</td>
</tr>
<tr>
<td>PPID</td>
<td>父进程的 ID；</td>
</tr>
<tr>
<td>C</td>
<td>该进程的 CPU 使用率，单位是百分比；</td>
</tr>
<tr>
<td>PRI</td>
<td>进程的优先级，数值越小，该进程的优先级越高，越早被 CPU 执行；</td>
</tr>
<tr>
<td>NI</td>
<td>进程的优先级，数值越小，该进程越早被执行；</td>
</tr>
<tr>
<td>ADDR</td>
<td>该进程在内存的哪个位置；</td>
</tr>
<tr>
<td>SZ</td>
<td>该进程占用多大内存；</td>
</tr>
<tr>
<td>WCHAN</td>
<td>该进程是否运行。&quot;-&quot;代表正在运行；</td>
</tr>
<tr>
<td>TTY</td>
<td>该进程由哪个终端产生；</td>
</tr>
<tr>
<td>TIME</td>
<td>该进程占用 CPU 的运算时间，注意不是系统时间；</td>
</tr>
<tr>
<td>CMD</td>
<td>产生此进程的命令名；</td>
</tr>
</tbody>
</table>
<p>例 3：</p>
<p>如果不想看到所有的进程，只想查看一下当前登录产生了哪些进程，那只需使用 <code>ps -l</code> 命令就足够了：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ps -l</span>
<span class="token comment">#查看当前登录产生的进程</span>
F   S   <span class="token environment constant">UID</span>   PID   <span class="token environment constant">PPID</span>   C   PRI   NI   ADDR   SZ   WCHAN   TTY         TIME   CMD
<span class="token number">4</span>   S   <span class="token number">0</span>   <span class="token number">18618</span>  <span class="token number">18614</span>   <span class="token number">0</span>    <span class="token number">80</span>    <span class="token number">0</span>   -    <span class="token number">1681</span>   -       pts/1   00:00:00   <span class="token function">bash</span>
<span class="token number">4</span>   R   <span class="token number">0</span>   <span class="token number">18683</span>  <span class="token number">18618</span>   <span class="token number">4</span>    <span class="token number">80</span>    <span class="token number">0</span>   -    <span class="token number">1619</span>   -       pts/1   00:00:00   <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>可以看到，这次从 pts/1 虚拟终端登录，只产生了两个进程：一个是登录之后生成的 Shell，也就是 bash；另一个是正在执行的 <code>ps</code> 命令。</p>
<p>我们再来说说僵尸进程。僵尸进程的产生一般是由于进程非正常停止或程序编写错误，导致子进程先于父进程结束，而父进程又没有正确地回收子进程，从而造成子进程一直存在于内存当中，这就是僵尸进程。</p>
<p>僵尸进程会对主机的稳定性产生影响，所以，在产生僵尸进程后，一定要对产生僵尸进程的软件进行优化，避免一直产生僵尸进程；对于已经产生的僵尸进程，可以在查找出来之后强制中止。</p>
<h3 id="top-命令-动态查看进程" tabindex="-1"><a class="header-anchor" href="#top-命令-动态查看进程" aria-hidden="true">#</a> top 命令：动态查看进程</h3>
<p><code>ps</code> 命令可以一次性给出当前系统中进程状态，但使用此方式得到的信息缺乏时效性，并且，如果管理员需要实时监控进程运行情况，就必须不停地执行 <code>ps</code> 命令，这显然是缺乏效率的。</p>
<p>为此，Linux 提供了 <code>top</code> 命令。<code>top</code> 命令可以动态地持续监听进程地运行状态，与此同时，该命令还提供了一个交互界面，用户可以根据需要，人性化地定制自己的输出，进而更清楚地了进程的运行状态。</p>
<p>英文原意：display Linux processes</p>
<p><code>top</code> 命令的基本格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># top [选项]</span>
选项：
	-d 秒数		：指定 <span class="token function">top</span> 命令每隔几秒更新。默认是 <span class="token number">3</span> 秒；
	-b			：使用批处理模式输出。一般和<span class="token string">"-n"</span>选项合用，用于把 <span class="token function">top</span> 命令重定向到文件中；
	-n 次数		：指定 <span class="token function">top</span> 命令执行的次数。一般和<span class="token string">"-b"</span>选项合用；
	-p 进程PID	：仅查看指定 ID 的进程；
	-s			：使 <span class="token function">top</span> 命令在安全模式中运行，避免在交互模式中出现错误；
	-u 用户名	：只监听某个用户的进程；
	
在 <span class="token function">top</span> 命令的显示窗口中，还可以使用如下按键，进行一下交互操作：
	P	：按照 CPU 的使用率排序，默认就是此选项；
	M	：按照内存的使用率排序；
	N	：按照 PID 排序；
	T	：按照 CPU 的累积运算时间排序，也就是按照 TIME+ 项排序；
	k	：按照 PID 给予某个进程一个信号。一般用于中止某个进程，信号 <span class="token number">9</span> 是强制中止的信号；
	r	：按照 PID 给某个进程重设优先级（Nice）值；
	q	：退出 <span class="token function">top</span> 命令；
	? 或 h：显示交互模式的帮助；
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>我们看看 <code>top</code> 命令的执行结果，如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># top</span>
<span class="token function">top</span> - <span class="token number">12</span>:26:46 up <span class="token number">1</span> day, <span class="token number">13</span>:32, <span class="token number">2</span> users, load average: <span class="token number">0.00</span>, <span class="token number">0.00</span>, <span class="token number">0.00</span>
Tasks: <span class="token number">95</span> total, <span class="token number">1</span> running, <span class="token number">94</span> sleeping, <span class="token number">0</span> stopped, <span class="token number">0</span> zombie
Cpu<span class="token punctuation">(</span>s<span class="token punctuation">)</span>: <span class="token number">0.1</span>%us, <span class="token number">0.1</span>%sy, <span class="token number">0.0</span>%ni, <span class="token number">99.7</span>%id, <span class="token number">0.1</span>%wa, <span class="token number">0.0</span>%hi, <span class="token number">0.1</span>%si, <span class="token number">0.0</span>%st
Mem: 625344k total, 571504k used, 53840k free, 65800k buffers
Swap: 524280k total, 0k used, 524280k free, 409280k cached
PID   <span class="token environment constant">USER</span> PR NI VIRT  RES  SHR S %CPU %MEM   TIME+ COMMAND
<span class="token number">19002</span> root <span class="token number">20</span>  <span class="token number">0</span> <span class="token number">2656</span> <span class="token number">1068</span>  <span class="token number">856</span> R  <span class="token number">0.3</span>  <span class="token number">0.2</span> <span class="token number">0</span>:01.87 <span class="token function">top</span>
<span class="token number">1</span>     root <span class="token number">20</span>  <span class="token number">0</span> <span class="token number">2872</span> <span class="token number">1416</span> <span class="token number">1200</span> S  <span class="token number">0.0</span>  <span class="token number">0.2</span> <span class="token number">0</span>:02.55 init
<span class="token number">2</span>     root <span class="token number">20</span>  <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> S  <span class="token number">0.0</span>  <span class="token number">0.0</span> <span class="token number">0</span>:00.03 kthreadd
<span class="token number">3</span>     root RT  <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> S  <span class="token number">0.0</span>  <span class="token number">0.0</span> <span class="token number">0</span>:00.00 migration/0
<span class="token number">4</span>     root <span class="token number">20</span>  <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> S  <span class="token number">0.0</span>  <span class="token number">0.0</span> <span class="token number">0</span>:00.15 ksoftirqd/0
<span class="token number">5</span>     root RT  <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> S  <span class="token number">0.0</span>  <span class="token number">0.0</span> <span class="token number">0</span>:00.00 migration/0
<span class="token number">6</span>     root RT  <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> S  <span class="token number">0.0</span>  <span class="token number">0.0</span> <span class="token number">0</span>:10.01 watchdog/0
<span class="token number">7</span>     root <span class="token number">20</span>  <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> S  <span class="token number">0.0</span>  <span class="token number">0.0</span> <span class="token number">0</span>:05.01 events/0
<span class="token number">8</span>     root <span class="token number">20</span>  <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> S  <span class="token number">0.0</span>  <span class="token number">0.0</span> <span class="token number">0</span>:00.00 cgroup
<span class="token number">9</span>     root <span class="token number">20</span>  <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> S  <span class="token number">0.0</span>  <span class="token number">0.0</span> <span class="token number">0</span>:00.00 khelper
<span class="token number">10</span>    root <span class="token number">20</span>  <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> S  <span class="token number">0.0</span>  <span class="token number">0.0</span> <span class="token number">0</span>:00.00 netns
<span class="token number">11</span>    root <span class="token number">20</span>  <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> S  <span class="token number">0.0</span>  <span class="token number">0.0</span> <span class="token number">0</span>:00.00 async/mgr
<span class="token number">12</span>    root <span class="token number">20</span>  <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> S  <span class="token number">0.0</span>  <span class="token number">0.0</span> <span class="token number">0</span>:00.00 pm
<span class="token number">13</span>    root <span class="token number">20</span>  <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> S  <span class="token number">0.0</span>  <span class="token number">0.0</span> <span class="token number">0</span>:01.70 sync_supers
<span class="token number">14</span>    root <span class="token number">20</span>  <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> S  <span class="token number">0.0</span>  <span class="token number">0.0</span> <span class="token number">0</span>:00.63 bdi-default
<span class="token number">15</span>    root <span class="token number">20</span>  <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> S  <span class="token number">0.0</span>  <span class="token number">0.0</span> <span class="token number">0</span>:00.00 kintegrityd/0
<span class="token number">16</span>    root <span class="token number">20</span>  <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> S  <span class="token number">0.0</span>  <span class="token number">0.0</span> <span class="token number">0</span>:02.52 kblockd/0
<span class="token number">17</span>    root <span class="token number">20</span>  <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> S  <span class="token number">0.0</span>  <span class="token number">0.0</span> <span class="token number">0</span>:00.00 kacpid
<span class="token number">18</span>    root <span class="token number">20</span>  <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span>    <span class="token number">0</span> S  <span class="token number">0.0</span>  <span class="token number">0.0</span> <span class="token number">0</span>:00.00 kacpi_notify
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>我们解释一下命令的输出。<code>top</code> 命令的输出内容是动态的，默认每隔 3 秒刷新一次。命令的输出主要分为两部分：</p>
<ol>
<li>第一部分是前五行，显示的是整个系统的资源使用状况，我们就是通过这些输出来判断服务器的资源使用状态的；</li>
<li>第二部分从第六行开始，显示的是系统中进程的信息；</li>
</ol>
<p>我们先来说明第一部分的作用。</p>
<ul>
<li>第一行为任务队列信息，具体内容如表4-3 所示。</li>
</ul>
<p><strong>表4-3	<u>任务队列信息</u></strong></p>
<table>
<thead>
<tr>
<th>内 容</th>
<th>说 明</th>
</tr>
</thead>
<tbody>
<tr>
<td>12:26:46</td>
<td>系统当前时间</td>
</tr>
<tr>
<td>up 1 day, 13:32</td>
<td>系统的运行时间。本机己经运行 1 天 13 小时 32 分钟</td>
</tr>
<tr>
<td>2 users</td>
<td>当前登录了两个用户</td>
</tr>
<tr>
<td>load average: 0.00, 0.00, 0.00</td>
<td>系统在之前 1 分钟、5 分钟、15 分钟的平均负载。<br />如果 CPU 是单核的，则这个数值超过 1 就是高负载；<br />如果 CPU 是四核的，则这个数值超过 4 就是高负载 <br />（一般认为：平均负载不应该超过服务器 CPU 的核数）</td>
</tr>
</tbody>
</table>
<ul>
<li>第二行为进程信息，具体内容如表4-4 所示。</li>
</ul>
<p><strong>表4-4	<u>进程信息</u></strong></p>
<table>
<thead>
<tr>
<th>内 容</th>
<th>说 明</th>
</tr>
</thead>
<tbody>
<tr>
<td>Tasks: 95 total</td>
<td>系统中的进程总数</td>
</tr>
<tr>
<td>1 running</td>
<td>正在运行的进程数</td>
</tr>
<tr>
<td>94 sleeping</td>
<td>睡眠的进程数</td>
</tr>
<tr>
<td>0 stopped</td>
<td>正在停止的进程数</td>
</tr>
<tr>
<td>0 zombie</td>
<td>僵尸进程数。如果不是 0，则需要手工检查僵尸进程</td>
</tr>
</tbody>
</table>
<ul>
<li>第三行为 CPU 信息，具体内容如表4-5 所示。</li>
</ul>
<p><strong>表4-5	<u>CPU 信息</u></strong></p>
<table>
<thead>
<tr>
<th>内 容</th>
<th>说 明</th>
</tr>
</thead>
<tbody>
<tr>
<td>Cpu(s): 0.1 %us</td>
<td>用户模式占用的 CPU 百分比</td>
</tr>
<tr>
<td>0.1%sy</td>
<td>系统模式占用的 CPU 百分比</td>
</tr>
<tr>
<td>0.0%ni</td>
<td>改变过优先级的用户进程占用的 CPU 百分比</td>
</tr>
<tr>
<td>99.7%id</td>
<td>空闲 CPU 占用的 CPU 百分比</td>
</tr>
<tr>
<td>0.1%wa</td>
<td>等待输入/输出的进程占用的 CPU 百分比</td>
</tr>
<tr>
<td>0.0%hi</td>
<td>硬中断请求服务占用的 CPU 百分比</td>
</tr>
<tr>
<td>0.1%si</td>
<td>软中断请求服务占用的 CPU 百分比</td>
</tr>
<tr>
<td>0.0%st</td>
<td>st（steal time）意为虚拟时间百分比，就是当有虚拟机时，虚拟 CPU 等待实际 CPU 的时间百分比</td>
</tr>
</tbody>
</table>
<ul>
<li>第四行为物理内存信息，具体内容如表4-6 所示。</li>
</ul>
<p><strong>表4-6	<u>物理内存信息</u></strong></p>
<table>
<thead>
<tr>
<th>内 容</th>
<th>说 明</th>
</tr>
</thead>
<tbody>
<tr>
<td>Mem: 625344k total</td>
<td>物理内存的总量，单位为 KB</td>
</tr>
<tr>
<td>571504k used</td>
<td>己经使用的物理内存数量</td>
</tr>
<tr>
<td>53840k&amp;ee</td>
<td>空闲的物理内存数量。<br />我们使用的是虚拟机，共分配了 628MB内存，所以只有53MB的空闲内存</td>
</tr>
<tr>
<td>65800k buffers</td>
<td>作为缓冲的内存数量</td>
</tr>
</tbody>
</table>
<ul>
<li>第五行为交换分区（swap）信息，如表4-7 所示。</li>
</ul>
<p><strong>表4-7	<u>交换分区信息</u></strong></p>
<table>
<thead>
<tr>
<th>内 容</th>
<th>说 明</th>
</tr>
</thead>
<tbody>
<tr>
<td>Swap: 524280k total</td>
<td>交换分区（虚拟内存）的总大小</td>
</tr>
<tr>
<td>0k used</td>
<td>已经使用的交换分区的大小</td>
</tr>
<tr>
<td>524280k free</td>
<td>空闲交换分区的大小</td>
</tr>
<tr>
<td>409280k cached</td>
<td>作为缓存的交换分区的大小</td>
</tr>
</tbody>
</table>
<p>我们通过 <code>top</code> 命令的第一部分就可以判断服务器的健康状态。如果 1 分钟、5 分钟、15 分钟的平均负载高于 1，则证明系统压力较大。如果 CPU 的使用率过高或空闲率过低，则证明系统压力较大。如果物理内存的空闲内存过小，则也证明系统压力较大。</p>
<p>这时，我们就应该判断是什么进程占用了系统资源。如果是不必要的进程，就应该结束这些进程；如果是必需进程，那么我们该増加服务器资源（比如増加虚拟机内存），或者建立集群服务器。</p>
<p>我们还要解释一下缓冲（buffer）和缓存（cache）的区别：</p>
<ul>
<li>缓存（cache）是在读取硬盘中的数据时，把最常用的数据保存在内存的缓存区中，再次读取该数据时，就不去硬盘中读取了，而在缓存中读取。</li>
<li>缓冲（buffer）是在向硬盘写入数据时，先把数据放入缓冲区，然后再一起向硬盘写入，把分散的写操作集中进行，减少磁盘碎片和硬盘的反复寻道，从而提高系统性能。</li>
</ul>
<p>简单来说，缓存（cache）是用来加速数据从硬盘中“读取”的，而缓冲（buffer）是用来加速数据“写入”硬盘的。</p>
<p>再来看 <code>top</code> 命令的第二部分输出，主要是系统进程信息，各个字段的含义如下：</p>
<ul>
<li>PID：进程的 ID。</li>
<li>USER：该进程所属的用户。</li>
<li>PR：优先级，数值越小优先级越高。</li>
<li>NI：优先级，数值越小、优先级越高。</li>
<li>VIRT：该进程使用的虚拟内存的大小，单位为 KB。</li>
<li>RES：该进程使用的物理内存的大小，单位为 KB。</li>
<li>SHR：共享内存大小，单位为 KB。</li>
<li>S：进程状态。</li>
<li>%CPU：该进程占用 CPU 的百分比。</li>
<li>%MEM：该进程占用内存的百分比。</li>
<li>TIME+：该进程共占用的 CPU 时间。</li>
<li>COMMAND：进程的命令名。</li>
</ul>
<p>这部分和 <code>ps</code> 命令的输出比较类似，只是如果在终端执行 <code>top</code> 命令，则不能看到所有的进程，而只能看到占比靠前的进程。接下来我们举几个 <code>top</code> 命令常用的实例。</p>
<p>如果只想让 <code>top</code> 命令查看某个进程，就可以使用 “-p”  选项。命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># top -p 15273</span>
<span class="token comment">#只查看 PID为 15273的apache进程</span>
<span class="token function">top</span> - <span class="token number">14</span>:28:47 up <span class="token number">1</span> day, <span class="token number">15</span>:34, <span class="token number">3</span> users, load average: <span class="token number">0.00</span>,0.00,0.00
Tasks: <span class="token number">1</span> total, <span class="token number">0</span> running, <span class="token number">1</span> sleeping, <span class="token number">0</span> stopped, <span class="token number">0</span> zombie
Cpu<span class="token punctuation">(</span>s<span class="token punctuation">)</span>: <span class="token number">0.0</span>%us, <span class="token number">0.0</span>%sy, <span class="token number">0.0</span>%ni,100.0%id, <span class="token number">0.0</span>%wa, <span class="token number">0.0</span>%hi, <span class="token number">0.0</span>%si, <span class="token number">0.0</span>%st
Mem: 625344k total, 574124k used, 51220k free, 67024k buffers
Swap: 524280k total, Ok used, 524280k free, 409344k cached
PID     <span class="token environment constant">USER</span> PR NI VIRT  RES SHR S %CPU %MEM  TIME+  COMMAND
<span class="token number">15273</span> daemon <span class="token number">20</span> <span class="token number">0</span>  <span class="token number">4520</span> <span class="token number">1192</span> <span class="token number">580</span> S  <span class="token number">0.0</span>  <span class="token number">0.2</span> <span class="token number">0</span>:00.00   httpd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code>top</code> 命令如果不正确退出，则会持续运行。在 <code>top</code> 命令的交互界面中按 “q” 键会退出 <code>top</code> 命令；也可以按 “?” 或 “h” 键得到 <code>top</code> 命令交互界面的帮助信息；还可以按“k”键中止某个进程。比如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># top</span>
<span class="token function">top</span> - <span class="token number">14</span>:10:15 up <span class="token number">1</span> day, <span class="token number">15</span>:15， <span class="token number">3</span> users, load average: <span class="token number">0.00</span>，0.00, <span class="token number">0.00</span>
Tasks: <span class="token number">97</span> total, <span class="token number">1</span> running, <span class="token number">96</span> sleeping, <span class="token number">0</span> stopped, <span class="token number">0</span> zombie
Cpu<span class="token punctuation">(</span>s<span class="token punctuation">)</span>: <span class="token number">0.0</span>%us, <span class="token number">0.0</span>%sy, <span class="token number">0.0</span>%ni,100.0%id, <span class="token number">0.0</span>%wa, <span class="token number">0.0</span>%hi, <span class="token number">0.0</span>%si, <span class="token number">0.0</span>%st
Mem: 625344k total, 574248k used, 51096k free, 66840k buffers
Swap: 524280k total, Ok used, 524280k free, 409324k cached
PID to kill:15273
<span class="token comment">#按"k"键，会提示输入要杀死进程的PID</span>
PID     <span class="token environment constant">USER</span> PR NI VIRT  RES SHR S %CPU %MEM   TIME+ COMMAND
<span class="token number">15273</span> daemon <span class="token number">20</span>  <span class="token number">0</span> <span class="token number">4520</span> <span class="token number">1192</span> <span class="token number">580</span> S  <span class="token number">0.0</span> <span class="token number">0.2</span>  <span class="token number">0</span>:00.00 httpd
<span class="token punctuation">..</span>.省略部分输出<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>输入要中止进程的 PID，比如要中止 15273 这个 apache 进程，命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">top</span> - <span class="token number">14</span>:11:42 up <span class="token number">1</span> day, <span class="token number">15</span>:17， <span class="token number">3</span> users, load average: <span class="token number">0.00</span>，0.00, <span class="token number">0.00</span>
Tasks: <span class="token number">97</span> total, <span class="token number">1</span> running, <span class="token number">96</span> sleeping, <span class="token number">0</span> stopped, <span class="token number">0</span> zombie
Cpu<span class="token punctuation">(</span>s<span class="token punctuation">)</span>: <span class="token number">0.0</span>%us, <span class="token number">0.3</span>%sy, <span class="token number">0.0</span>%ni, <span class="token number">99.7</span>%id, <span class="token number">0.0</span>%wa, <span class="token number">0.0</span>%hi, <span class="token number">0.0</span>%si, <span class="token number">0.0</span>%st
Mem: 625344k total, 574248k used, 51096k free, 66856k buffers
Swap: 524280k total, 0k used, 524280k free, 409324k cached
Kill PID <span class="token number">15273</span> with signal <span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">]</span>:9
<span class="token comment">#提示输入信号，信号9代表强制中止</span>
PID     <span class="token environment constant">USER</span> PR NI VIRT  RES SHR S %CPU %MEM   TIME+ COMMAND
<span class="token number">15273</span> daemon <span class="token number">20</span>  <span class="token number">0</span> <span class="token number">4520</span> <span class="token number">1192</span> <span class="token number">580</span> S <span class="token number">0.0</span>   <span class="token number">0.2</span> <span class="token number">0</span>:00.00 httpd
…省略部分输出…
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>接下来 top 命令提示我们输入信号，信号 9 代表强制中止，这时就能够强制中止 15273 进程了。</p>
<p>如果要改变某个进程的优先级，就要利用“r”交互命令。需要注意的是，我们能够修改的只有 Nice 的优先级，而不能修改 Priority 的优先级。具体修改命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># top -p 18977</span>
<span class="token function">top</span> - <span class="token number">14</span>:17:09 up <span class="token number">1</span> day, <span class="token number">15</span>:22, <span class="token number">3</span> users, load average: <span class="token number">0.00</span>，0.00, <span class="token number">0.00</span>
Tasks: <span class="token number">97</span> total, <span class="token number">1</span> running, <span class="token number">96</span> sleeping, <span class="token number">0</span> stopped, <span class="token number">0</span> zombie
Cpu<span class="token punctuation">(</span>s<span class="token punctuation">)</span>: <span class="token number">0.3</span>%us, <span class="token number">0.0</span>%sy, <span class="token number">0.0</span>%ni, <span class="token number">99.7</span>%id, <span class="token number">0.0</span>%wa, <span class="token number">0.0</span>%hi, <span class="token number">0.0</span>%si, <span class="token number">0.0</span>%st
Mem: 625344k total, 574124k used, 51220k free, 66896k buffers
Swap: 524280k total, 0k used, 524280k free, 409324k cached
PID to renice:
<span class="token comment">#输入"r"交互命令之后，提示输入要修改优先级的进程的PID</span>
PID   <span class="token environment constant">USER</span> PR NI  VIRT  RES SHR  S %CPU %MEM   TIME+ COMMAND
<span class="token number">18977</span> root <span class="token number">20</span> <span class="token number">0</span>  <span class="token number">11592</span> <span class="token number">3304</span> <span class="token number">2572</span> S  <span class="token number">0.0</span> <span class="token number">0.5</span>  <span class="token number">0</span>:04.37 sshd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>输入“r”交互命令，会提示输入需要修改优先级的进程的 PID。例如，我们想要修改 18977 这个 sshd 远程连接进程的优先级，就输入该进程的 PID。命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Renice PID <span class="token number">18977</span> to value: <span class="token number">10</span>
<span class="token comment">#输入PID后，需要输入Nice的优先级号</span>
<span class="token comment">#我们把18977进程的优先级调整为10,回车后就能看到</span>
PID   <span class="token environment constant">USER</span> PR NI  VIRT  RES SHR  S %CPU %MEM   TIME+ COMMAND
<span class="token number">18977</span> root <span class="token number">30</span> <span class="token number">10</span> <span class="token number">11592</span> <span class="token number">3304</span> <span class="token number">2572</span> R  <span class="token number">0.0</span> <span class="token number">0.5</span>  <span class="token number">0</span>:04.38 sshd
<span class="token comment">#18977进程的优先级已经被修改了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>如果在操作终端执行 <code>top</code> 命令，则并不能看到系统中所有的进程，默认看到的只是 CPU 占比靠前的进程。如果我们想要看到所有的进程，则可以把 <code>top</code> 命令的执行结果重定向到文件中。不过 <code>top</code> 命令是持续运行的，这时就需要使用 “-b”和“-n”选项了。具体命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># top -b -n 1 > /root/top.log</span>
<span class="token comment">#让top命令只执行一次，然后把执行结果保存到top.log文件中，这样就能看到所有的进程了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="pstree-命令-树形查看进程" tabindex="-1"><a class="header-anchor" href="#pstree-命令-树形查看进程" aria-hidden="true">#</a> pstree 命令：树形查看进程</h3>
<p><code>pstree</code> 命令是以树形结构显示程序和进程之间的关系。</p>
<p>英文原意：display a tree of processes</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># pstree [选项] [PID或用户名]</span>
选项： 
	-a：显示启动每个进程对应的完整指令，包括启动进程的路径、参数等
	-c：不使用精简法显示进程信息，即显示的进程中包含子进程和父进程
	-n：根据进程 PID 号来排序输出，默认是以程序名排序输出的。
	-p：显示进程的 PID
	-u：显示进程对应的用户名称
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>需要注意的是，在使用 <code>pstree</code> 命令时，如果不指定进程的 PID 号，也不指定用户名称，则会以 <strong>init</strong> 进程为根进程，显示系统中所有程序和进程的信息；反之，若指定 PID 号或用户名，则将以 PID 或指定命令为根进程，显示 PID  或用户对应的所有程序和进程。</p>
<p><strong>init 进程是系统启动的第一个进程，进程的 PID 是 1，也是系统中所有进程的父进程。</strong></p>
<p>例 1：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@1ocalhost ~<span class="token punctuation">]</span><span class="token comment"># pstree</span>
 init──┬──abrc-dump-oopa
 ├──abrtd
 ├──acpid
 <span class="token punctuation">..</span>.省略部分输出<span class="token punctuation">..</span>.
 ├──rayslogd───3*<span class="token punctuation">[</span><span class="token punctuation">{</span>rsyslogrd<span class="token punctuation">}</span><span class="token punctuation">]</span>
 <span class="token comment">#有3个rsyslogd进程存在</span>
 ├──sshd───sshd───bash───pstree
 <span class="token comment">#Pstree命令进程是在远程连接中被执行的</span>
 ├──udevd───2*<span class="token punctuation">[</span>udevd<span class="token punctuation">]</span>
 └──xinecd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>例 2：</p>
<p>如果想知道某个用户都启动了哪些进程，使用 <code>pstree</code> 命令可以很容易实现，以 mysql 用户为例：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@1ocalhost ~<span class="token punctuation">]</span><span class="token comment"># pstree mysql</span>
mysqid---6*<span class="token punctuation">[</span><span class="token punctuation">{</span>mysqid<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>此输出结果显示了 mysql 用户对应的进程为 mysqid，并且 mysqid 进程拥有 5 个子进程（外加 1 个父进程，共计 6 个进程）。</p>
<h3 id="lsof-命令-查看进程调用信息" tabindex="-1"><a class="header-anchor" href="#lsof-命令-查看进程调用信息" aria-hidden="true">#</a> lsof 命令：查看进程调用信息</h3>
<p>我们知道，通过 <code>ps</code> 命令可以查询到系统中所有的进程，那么，是否可以进一步知道这个进程到底在调用哪些文件吗？当然可以，使用 <code>lsof</code> 命令即可。</p>
<p><code>lsof</code> 命令，列出系统中已经被打开的文件。通过 <code>lsof</code> 命令，我们就可以根据文件找到对应的进程信息，也可以根据进程信息找到进程打开的文件。</p>
<p>英文原意：list opened files</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># lsof [选项]</span>
选项：
-c 字符串	：只列出以字符串开头的进程打开的文件
+d 目录名	：列出某个目录中所有被进程调用的文件
-u 用户名	：只列出某个用户的进程打开的文件
-p PID		：列出某个 PID 进程打开的文件
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>例 1：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># lsof | more</span>
<span class="token comment">#查询系统中所有进程调用的文件</span>
COMMAND	PID	<span class="token environment constant">USER</span>	FD	TYPE	DEVICE	SIZE/OFF	NODE	NAME
init	<span class="token number">1</span>	root	cwd	DIR 	<span class="token number">8</span>，3	<span class="token number">4096</span>		<span class="token number">2</span>		/
init	<span class="token number">1</span>	root	rtd	DIR 	<span class="token number">8</span>，3	<span class="token number">4096</span>		<span class="token number">2</span>		/
init	<span class="token number">1</span>	root	txt	REG		<span class="token number">8</span>，3	<span class="token number">145180</span>		<span class="token number">130874</span>	/sbin/init
init	<span class="token number">1</span>	root	mem	REG 	<span class="token number">8</span>，3	<span class="token number">142472</span>		<span class="token number">665291</span>	/lib/ld-2.12.so
init	<span class="token number">1</span>	root	mem	REG 	<span class="token number">8</span>，3	<span class="token number">58704</span>		<span class="token number">655087</span>	/lib/libnss_files-2.12.so
<span class="token punctuation">..</span>.省略部分输出<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>这个命令的输出非常多。它会按照 PID，从 1 号进程开始列出系统中所有的进程正在调用的文件名。</p>
<p>例 2：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># lsof /sbin/init</span>
<span class="token comment">#查询某个文件被哪个进程调用</span>
COMMAND	PID	<span class="token environment constant">USER</span>	FD	TYPE	DEVICE	SIZE/OFF	NODE	NAME
init	<span class="token number">1</span>	root	txt	REG		<span class="token number">8</span>，3	<span class="token number">145180</span>		<span class="token number">130874</span>	/sbin/init
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>lsof</code> 命令也可以反过来查询某个文件被哪个进程调用。这个例子就查询到 <code>/sbin/init</code> 文件是被 init 进程调用的。</p>
<p>例 3：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># lsof +d /usr/lib</span>
<span class="token comment">#查询某个目录下所有的文件是被哪些进程调用的</span>
COMMAND		PID		<span class="token environment constant">USER</span>	FD		TYPE	DEVICE	SIZE/OFF	NODE	NAME
rpc.idmap	<span class="token number">1196</span>	root	mem		REG		<span class="token number">8</span>，3	<span class="token number">26400</span>		<span class="token number">279930</span>	/usr/lib/libnfsidmap.so.0.3.0
rpc.idmap	<span class="token number">1196</span>	root	mem		REG		<span class="token number">8</span>，3	<span class="token number">108948</span>		<span class="token number">276696</span>	/usr/lib/libevent-1.4.so.2.1.3
avahi-dae	<span class="token number">1240</span>	avahi	mem		REG		<span class="token number">8</span>，3	<span class="token number">49124</span>		<span class="token number">271310</span>	/usr/lib/libavahi-common.so.3.5.1
avahi-dae	<span class="token number">1240</span>	avahi	mem		REG		<span class="token number">8</span>，3	<span class="token number">23904</span>		<span class="token number">283188</span>	/usr/lib/libdaemon.so.0.5.0
avahi-dae	<span class="token number">1240</span>	avahi	mem		REG		<span class="token number">8</span>，3	<span class="token number">227212</span>		<span class="token number">268396</span>	/usr/lib/libavahi-core.so.6.0.1
avahi-dae	<span class="token number">1241</span>	avahi	mem		REG		<span class="token number">8</span>，3	<span class="token number">49124</span>		<span class="token number">271310</span>	/usr/lib/libavahi-common.so.3.5.1
avahi-dae	<span class="token number">1241</span>	avahi	mem		REG		<span class="token number">8</span>，3	<span class="token number">23904</span>		<span class="token number">283188</span>	/usr/lib/libdaemon.so.0.5.0
avahi-dae	<span class="token number">1241</span>	avahi	mem		REG		<span class="token number">8</span>，3	<span class="token number">227212</span>		<span class="token number">268396</span>	/usr/lib/libavahi-core.so.6.0.1
cupsd		<span class="token number">1251</span>	root	mem		REG		<span class="token number">8</span>，3	<span class="token number">69564</span>		<span class="token number">270210</span>	/usr/lib/libtasn1.so.3.1.6
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>使用“+d”选项可以搜索某个目录下所有的文件，查看到底哪个文件被哪个进程调用了。</p>
<p>例 4：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># lsof -c httpd</span>
<span class="token comment">#查看以httpd开头的进程调用了哪些文件</span>
COMMAND	PID		<span class="token environment constant">USER</span>	FD	TYPE	DEVICE	SIZE/OFF	NODE	NAME
httpd	<span class="token number">4689</span>	root	cwd	DIR		<span class="token number">8</span>，3	<span class="token number">4096</span>		<span class="token number">2</span>		/
httpd	<span class="token number">4689</span>	root	rtd	DIR		<span class="token number">8</span>，3    <span class="token number">4096</span>		<span class="token number">2</span>		/
httpd	<span class="token number">4689</span>	root	txt	REG		<span class="token number">8</span>，3    <span class="token number">1797559</span>		<span class="token number">2855</span>	/usr/local/apache2/bin/httpd
httpd	<span class="token number">4689</span>	root	mem	REG		<span class="token number">8</span>，3    <span class="token number">302300</span>		<span class="token number">665303</span>	/lib/libfreebl3.so
httpd	<span class="token number">4689</span>	root	mem	REG		<span class="token number">8</span>，3    <span class="token number">58704</span>		<span class="token number">655087</span>	/lib/libnss_files-2.12.s
httpd	<span class="token number">4689</span>	root	mem	REG		<span class="token number">8</span>，3    <span class="token number">142472</span>		<span class="token number">665291</span>	/lib/ld-2.12.so
httpd	<span class="token number">4689</span>	root	mem	REG		<span class="token number">8</span>，3    <span class="token number">1889704</span>		<span class="token number">665292</span>	/lib/libc-2.12.so
<span class="token punctuation">..</span>.省略部分输出<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>使用“-c”选项可以查询以某个字符串开头的进程调用的所有文件，比如执行 <code>lsof-c httpd</code> 命令就会查询出以 httpd 开头的进程调用的所有文件。</p>
<p>例 5：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># lsof -p 1</span>
<span class="token comment">#查询PID是1的进程调用的文件</span>
COMMAND	PID	<span class="token environment constant">USER</span>	FD	TYPE	DEVICE	SIZE/OFF	NODE	NAME
init	<span class="token number">1</span>	root	cwd	DIR		<span class="token number">8</span>，3	<span class="token number">4096</span>		<span class="token number">2</span>		/
init	<span class="token number">1</span>	root	rtd	DIR		<span class="token number">8</span>，3	<span class="token number">4096</span>		<span class="token number">2</span>		/
init	<span class="token number">1</span>	root	txt	REG		<span class="token number">8</span>，3	<span class="token number">145180</span>		<span class="token number">130874</span>	/sbin/init
init	<span class="token number">1</span>	root	mem	REG		<span class="token number">8</span>，3	<span class="token number">142472</span>		<span class="token number">665291</span>	/lib/ld-2.12.so
init	<span class="token number">1</span>	root	mem	REG		<span class="token number">8</span>，3	<span class="token number">58704</span>		<span class="token number">655087</span>	/lib/libnss_files-2.12.so
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>当然，我们也可以按照 PID 查询进程调用的文件，比如执行 <code>lsof -p 1</code> 命令就可以查看 PID 为 1 的进程调用的所有文件。</p>
<p>例 6：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># lsof -u root</span>
<span class="token comment">#按照用户名查询某个用户的进程调用的文件</span>
COMMAND	PID	<span class="token environment constant">USER</span>	FD	TYPE	DEVICE	SIZE/OFF	NODE	NAME
init	<span class="token number">1</span>	root	cwd	DIR		<span class="token number">8</span>，3	<span class="token number">4096</span>		<span class="token number">2</span>		/
init	<span class="token number">1</span>	root	rtd	DIR		<span class="token number">8</span>，3	<span class="token number">4096</span>		<span class="token number">2</span>		/
init	<span class="token number">1</span>	root	txt	REG		<span class="token number">8</span>，3	<span class="token number">145180</span>		<span class="token number">130874</span>	/sbin/init
init	<span class="token number">1</span>	root	mem	REG		<span class="token number">8</span>，3	<span class="token number">142472</span>		<span class="token number">665291</span>	/lib/ld-2.12.so
init	<span class="token number">1</span>	root	mem	REG		<span class="token number">8</span>，3	<span class="token number">58704</span>		<span class="token number">655087</span>	/lib/libnss_files-2.12.s
init	<span class="token number">1</span>	root	mem	REG		<span class="token number">8</span>，3	<span class="token number">38768</span>		<span class="token number">655310</span>	/lib/libnih-dbus.so.1.0.
<span class="token punctuation">..</span>.省略部分输出<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>我们还可以查看某个用户的进程调用了哪些文件。</p>
<h2 id="进程的管理" tabindex="-1"><a class="header-anchor" href="#进程的管理" aria-hidden="true">#</a> 进程的管理</h2>
<h3 id="进程优先级" tabindex="-1"><a class="header-anchor" href="#进程优先级" aria-hidden="true">#</a> 进程优先级</h3>
<p>Linux 是一个多用户、多任务的操作系统，系统中通常运行着非常多的进程。但是 CPU 在一个时钟周期内只能运算一条指令（现在的 CPU 采用了多线程、多核心技术，所以在一个时钟周期内可以运算多条指令。  但是同时运算的指令数也远远小于系统中的进程总数），那问题来了：谁应该先运算，谁应该后运算呢？这就需要由进程的优先级来决定了。</p>
<p>另外，CPU 在运算数据时，不是把一个进程运算完成，再进行下一个进程的运算的，而是先运算进程1，再运算进程2，接下来运算进程3，然后再运算进程1，如此循环，直到进程任务结束。不仅如此，由于进程优先级的存在，进程并不是依次运算的，而是哪个进程的优先级高，哪个进程会在一次运算循环中被更多次地运算。</p>
<p>这样说很难理解，我们换一种说法。假设我现在有 4 个孩子（进程）需要喂饭（运算），我更喜欢孩子1（进程1 优先级更高），孩子2、孩子3  和孩子4 一视同仁（进程2、进程3 和进程4 的优先级一致）。现在我开始喂饭了，我不能先把孩子1  喂饱，再喂其他的孩子，而是需要循环喂饭（CPU 运算时所有进程循环运算）。那么，我在喂饭时（运算），会先喂孩子1  一口饭，然后再去喂其他孩子。而且在一次循环中，先喂孩子1 两口饭，因为我更喜欢孩子1（优先级高），而喂其他的孩子一口饭。这样，孩子1  会先吃饱（进程1 运算得更快），因为我更喜欢孩子1。</p>
<p>在 Linux 系统中，表示进程优先级的有两个参数：Priority 和 Nice。还记得 <code>ps -le</code> 命令吗？</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ps -le</span>
F	S	<span class="token environment constant">UID</span>		PID		<span class="token environment constant">PPID</span>	C	PRI		NI	ADDR	SZ		WCHAN	TTY		TIME		CMD
<span class="token number">4</span>	S	<span class="token number">0</span>		<span class="token number">1</span>		<span class="token number">0</span>		<span class="token number">0</span>	<span class="token number">80</span>		<span class="token number">0</span>	-		<span class="token number">718</span>		-		?		00:00:01	init
<span class="token number">1</span>	S	<span class="token number">0</span>		<span class="token number">2</span>		<span class="token number">0</span>		<span class="token number">0</span>	<span class="token number">80</span>		<span class="token number">0</span>	-		<span class="token number">0</span>		-		?		00:00:00	kthreadd
<span class="token punctuation">..</span>.省略部分输出<span class="token punctuation">..</span>. 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>其中，PRI 代表 Priority，NI 代表 Nice。这两个值都表示优先级，数值越小代表该进程越优先被 CPU 处理。不过，PRI 值是由内核动态调整的，用户不能直接修改。所以我们只能通过修改 NI 值来影响 PRI 值，间接地调整进程优先级。</p>
<blockquote>
<p><strong>PRI 和 NI 的关系如下：</strong></p>
<p><strong>PRI （最终值）= PRI （原始值）+ NI</strong></p>
</blockquote>
<p>其实，大家只需要记得，我们修改 NI 的值就可以改变进程的优先级即可。<u>NI 值越小，进程的 PRI 就会降低，该进程就越优先被 CPU 处理；反之，NI 值越大，进程的 PRI 值就会増加，该进程就越靠后被 CPU 处理。</u></p>
<p>修改 NI 值时有几个注意事项：</p>
<ul>
<li>NI 范围是 -20~19。</li>
<li>普通用户调整 NI 值的范围是 0~19，而且只能调整自己的进程。</li>
<li>普通用户只能调高 NI 值，而不能降低。如原本 NI 值为 0，则只能调整为大于 0。</li>
<li>只有 root 用户才能设定进程 NI 值为负值，而且可以调整任何用户的进程。</li>
</ul>
<p>当 Linux 内核尝试决定哪些运行中的进程可以访问 CPU 时，其中一个需要考虑的因素就是进程优先级的值（也称为 nice 值）。每个进程都有一个介于 -20 到 19 之间的 nice 值。默认情况下，进程的 nice 值为 0。</p>
<p>进程的 nice 值，可以通过 <code>nice</code> 命令和 <code>renice</code> 命令修改，进而调整进程的运行顺序。</p>
<h3 id="nice-命令" tabindex="-1"><a class="header-anchor" href="#nice-命令" aria-hidden="true">#</a> nice 命令</h3>
<p><code>nice</code> 命令可以给要启动的进程赋予 NI 值，但是不能修改已运行进程的 NI 值。</p>
<p><code>nice</code> 命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span> <span class="token comment"># nice [选项] 命令</span>
选项：
	-n NI值	：给命令赋予 NI 值，该值的范围为 -20~19
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># service httpd start</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ps -le 丨 grep "httd" | grep -v grep</span>
F	S	<span class="token environment constant">UID</span>		PID		<span class="token environment constant">PPID</span>	C	PRI		NI	ADDR	SZ		WCHAN	TTY		TIME		CMD
<span class="token number">1</span>	S	<span class="token number">0</span>		<span class="token number">2084</span>    <span class="token number">1</span>		<span class="token number">0</span>	<span class="token number">80</span>		<span class="token number">0</span>	-		<span class="token number">1130</span>	-		?		00:00:00	httpd
<span class="token number">5</span>	S	<span class="token number">2</span>		<span class="token number">2085</span>	<span class="token number">2084</span>	<span class="token number">0</span>	<span class="token number">80</span>		<span class="token number">0</span>	-		<span class="token number">1130</span>	-		?		00:00:00	httpd
<span class="token number">5</span>	S	<span class="token number">2</span>		<span class="token number">2086</span>	<span class="token number">2084</span>	<span class="token number">0</span>	<span class="token number">80</span>		<span class="token number">0</span>	-		<span class="token number">1130</span>	-		?		00:00:00	httpd
S	<span class="token number">2</span>	<span class="token number">2</span>		<span class="token number">2087</span>	<span class="token number">2084</span>	<span class="token number">0</span>	<span class="token number">80</span>		<span class="token number">0</span>	-		<span class="token number">1130</span>	-		?		00:00:00	httpd
<span class="token number">5</span>	S	<span class="token number">2</span>		<span class="token number">2088</span>	<span class="token number">2084</span>	<span class="token number">0</span>	<span class="token number">80</span>		<span class="token number">0</span>	-		<span class="token number">1130</span>	-		?		00:00:00	httpd
<span class="token number">5</span>	S	<span class="token number">2</span>		<span class="token number">2089</span>	<span class="token number">2084</span>	<span class="token number">0</span>	<span class="token number">80</span>		<span class="token number">0</span>	-		<span class="token number">1130</span>	-		?		00:00:00	httpd
<span class="token comment">#用默认优先级自动apache服务，PRI值是80，而NI值是0</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># service httpd stop</span>
<span class="token comment">#停止apache服务</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># nice -n -5 service httpd start</span>
<span class="token comment">#启动apache服务，同时修改apache服务进程的NI值为-5</span>
<span class="token punctuation">[</span>rooteiocdlhost ~<span class="token punctuation">]</span><span class="token comment"># ps -le | grep "httpd" | grep -v grep</span>
F	S	<span class="token environment constant">UID</span>		PID		<span class="token environment constant">PPID</span>	C	PRI		NI	ADDR	SZ		WCHAN	TTY		TIME		CMD
<span class="token number">1</span>	S	<span class="token number">0</span>		<span class="token number">2122</span>    <span class="token number">1</span>		<span class="token number">0</span>	<span class="token number">75</span>		-5	-		<span class="token number">1130</span>	-		?		00:00:00	httpd
<span class="token number">5</span>	S	<span class="token number">2</span>		<span class="token number">2123</span>	<span class="token number">2122</span>	<span class="token number">0</span>	<span class="token number">75</span>		-5	-		<span class="token number">1130</span>	-		?		00:00:00	httpd
<span class="token number">5</span>	S	<span class="token number">2</span>		<span class="token number">2124</span>	<span class="token number">2122</span>	<span class="token number">0</span>	<span class="token number">75</span>		-5	-		<span class="token number">1130</span>	-		?		00:00:00	httpd
S	<span class="token number">2</span>	<span class="token number">2</span>		<span class="token number">2125</span>	<span class="token number">2122</span>	<span class="token number">0</span>	<span class="token number">75</span>		-5	-		<span class="token number">1130</span>	-		?		00:00:00	httpd
<span class="token number">5</span>	S	<span class="token number">2</span>		<span class="token number">2126</span>	<span class="token number">2122</span>	<span class="token number">0</span>	<span class="token number">75</span>		-5	-		<span class="token number">1130</span>	-		?		00:00:00	httpd
<span class="token number">5</span>	S	<span class="token number">2</span>		<span class="token number">2127</span>	<span class="token number">2122</span>	<span class="token number">0</span>	<span class="token number">75</span>		-5	-		<span class="token number">1130</span>	-		?		00:00:00	httpd
<span class="token comment">#httpd进程的PRI值变为了75，而NI值为-5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="renice-命令" tabindex="-1"><a class="header-anchor" href="#renice-命令" aria-hidden="true">#</a> renice 命令</h3>
<p>同 <code>nice</code> 命令恰恰相反，<code>renice</code> 命令可以在进程运行时修改其 NI 值，从而调整优先级。</p>
<p><code>renice</code> 命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span> <span class="token comment"># renice [优先级] PID</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>注意，此命令中使用的是进程的 PID 号，因此常与 <code>ps</code> 等命令配合使用。</p>
<p>例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># renice -10 2125</span>
<span class="token number">2125</span>: old priority -5, new priority -10

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ps -le | grep "httpd" | grep -v grep</span>
<span class="token number">1</span>	S	<span class="token number">0</span>		<span class="token number">2122</span>    <span class="token number">1</span>		<span class="token number">0</span>	<span class="token number">75</span>		-5	-		<span class="token number">1130</span>	-		?		00:00:00	httpd
<span class="token number">5</span>	S	<span class="token number">2</span>		<span class="token number">2123</span>	<span class="token number">2122</span>	<span class="token number">0</span>	<span class="token number">75</span>		-5	-		<span class="token number">1130</span>	-		?		00:00:00	httpd
<span class="token number">5</span>	S	<span class="token number">2</span>		<span class="token number">2124</span>	<span class="token number">2122</span>	<span class="token number">0</span>	<span class="token number">75</span>		-5	-		<span class="token number">1130</span>	-		?		00:00:00	httpd
S	<span class="token number">2</span>	<span class="token number">2</span>		<span class="token number">2125</span>	<span class="token number">2122</span>	<span class="token number">0</span>	<span class="token number">70</span>		-10	-		<span class="token number">1130</span>	-		?		00:00:00	httpd
<span class="token number">5</span>	S	<span class="token number">2</span>		<span class="token number">2126</span>	<span class="token number">2122</span>	<span class="token number">0</span>	<span class="token number">75</span>		-5	-		<span class="token number">1130</span>	-		?		00:00:00	httpd
<span class="token number">5</span>	S	<span class="token number">2</span>		<span class="token number">2127</span>	<span class="token number">2122</span>	<span class="token number">0</span>	<span class="token number">75</span>		-5	-		<span class="token number">1130</span>	-		?		00:00:00	httpd
<span class="token comment">#PID为2125的进程的PRI值为70，而NI值为-10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>如何合理地设置进程优先级，曾经是一件让系统管理员非常费神的事情。但现在已经不是了，如今的 CPU 足够强大，能够合理地对进程进行调整，输入输出设备也远远跟不上 CPU 地脚步，反而在更多的情况下，CPU 总是在等待哪些缓慢的  I/O（输入/输出）设备完成数据的读写和传输任务。</p>
<p>然而，手动设置进程的优先级并不能影响 I/O 设备对它的处理，这就意味着，哪些有着低优先级的进程常常不合理地占据着本就低效地 I/O 资源。</p>
<h3 id="进程间通信" tabindex="-1"><a class="header-anchor" href="#进程间通信" aria-hidden="true">#</a> 进程间通信</h3>
<p>进程的管理主要是指进程的关闭与重启。我们一般关闭或重启软件，都是关闭或重启它的程序，而不是直接操作进程的。比如，要重启 apache 服务，一般使用命令 <code>service httpd restart</code> 重启 apache 的程序。</p>
<p>那么，可以通过直接管理进程来关闭或重启 apache 吗？答案是肯定的，这时就要依赖进程的信号（Signal）了。我们需要给予该进程号，告诉进程我们想要让它做什么。</p>
<p>系统中可以识别的信号较多，我们可以使用命令 <code>kill -l</code> 或 <code>man 7 signal</code> 来查询。命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># kill -l</span>
<span class="token number">1</span><span class="token punctuation">)</span> SIGHUP			<span class="token number">2</span><span class="token punctuation">)</span> SIGINT			<span class="token number">3</span><span class="token punctuation">)</span> SIGQUIT			<span class="token number">4</span><span class="token punctuation">)</span> SIGILL			<span class="token number">5</span><span class="token punctuation">)</span> SIGTRAP
<span class="token number">6</span><span class="token punctuation">)</span> SIGABRT			<span class="token number">7</span><span class="token punctuation">)</span> SIGBUS			<span class="token number">8</span><span class="token punctuation">)</span> SIGFPE			<span class="token number">9</span><span class="token punctuation">)</span> SIGKILL			<span class="token number">10</span><span class="token punctuation">)</span> SIGUSR1
<span class="token number">11</span><span class="token punctuation">)</span> SIGSEGV			<span class="token number">12</span><span class="token punctuation">)</span> SIGUSR2			<span class="token number">13</span><span class="token punctuation">)</span> SIGPIPE			<span class="token number">14</span><span class="token punctuation">)</span> SIGALRM			<span class="token number">15</span><span class="token punctuation">)</span> SIGTERM
<span class="token number">16</span><span class="token punctuation">)</span> SIGSTKFLT		<span class="token number">17</span><span class="token punctuation">)</span> SIGCHLD			<span class="token number">18</span><span class="token punctuation">)</span> SIGCONT			<span class="token number">19</span><span class="token punctuation">)</span> SIGSTOP			<span class="token number">20</span><span class="token punctuation">)</span> SIGTSTP
<span class="token number">21</span><span class="token punctuation">)</span> SIGTTIN			<span class="token number">22</span><span class="token punctuation">)</span> SIGTTOU			<span class="token number">23</span><span class="token punctuation">)</span> SIGURG			<span class="token number">24</span><span class="token punctuation">)</span> SIGXCPU			<span class="token number">25</span><span class="token punctuation">)</span> SIGXFSZ
<span class="token number">26</span><span class="token punctuation">)</span> SIGVTALRM		<span class="token number">27</span><span class="token punctuation">)</span> SIGPROF			<span class="token number">28</span><span class="token punctuation">)</span> SIGWINCH		<span class="token number">29</span><span class="token punctuation">)</span> SIGIO			<span class="token number">30</span><span class="token punctuation">)</span> SIGPWR
<span class="token number">31</span><span class="token punctuation">)</span> SIGSYS			<span class="token number">34</span><span class="token punctuation">)</span> SIGRTMIN		<span class="token number">35</span><span class="token punctuation">)</span> SIGRTMIN+1		<span class="token number">36</span><span class="token punctuation">)</span> SIGRTMIN+2		<span class="token number">37</span><span class="token punctuation">)</span> SIGRTMIN+3
<span class="token number">38</span><span class="token punctuation">)</span> SIGRTMIN +4		<span class="token number">39</span><span class="token punctuation">)</span> SIGRTMIN +5		<span class="token number">40</span><span class="token punctuation">)</span> SIGRTMIN+6		<span class="token number">41</span><span class="token punctuation">)</span>SIGRTMIN+7		<span class="token number">42</span><span class="token punctuation">)</span> SIGRTMIN+8
<span class="token number">43</span><span class="token punctuation">)</span> SIGRTMIN +9		<span class="token number">44</span><span class="token punctuation">)</span> SIGRTMIN +10	<span class="token number">45</span><span class="token punctuation">)</span> SIGRTMIN+11		<span class="token number">46</span><span class="token punctuation">)</span> SIGRTMIN+12		<span class="token number">47</span><span class="token punctuation">)</span> SIGRTMIN+13
<span class="token number">48</span><span class="token punctuation">)</span> SIGRTMIN +14	<span class="token number">49</span><span class="token punctuation">)</span> SIGRTMIN +15	<span class="token number">50</span><span class="token punctuation">)</span> SIGRTMAX-14		<span class="token number">51</span><span class="token punctuation">)</span> SIGRTMAX-13		<span class="token number">52</span><span class="token punctuation">)</span> SIGRTMAX-12
<span class="token number">53</span><span class="token punctuation">)</span> SIGRTMAX-11		<span class="token number">54</span><span class="token punctuation">)</span> SIGRTMAX-10		<span class="token number">55</span><span class="token punctuation">)</span> SIGRTMAX-9		<span class="token number">56</span><span class="token punctuation">)</span> SIGRTMAX-8		<span class="token number">57</span><span class="token punctuation">)</span> SIGRTMAX-7
<span class="token number">58</span><span class="token punctuation">)</span> SIGRTMAX-6 		<span class="token number">59</span><span class="token punctuation">)</span> SIGRTMAX-5		<span class="token number">60</span><span class="token punctuation">)</span> SIGRTMAX-4		<span class="token number">61</span><span class="token punctuation">)</span> SIGRTMAX-3		<span class="token number">62</span><span class="token punctuation">)</span> SIGRTMAX-2
<span class="token number">63</span><span class="token punctuation">)</span> SIGRTMAX-1		<span class="token number">64</span><span class="token punctuation">)</span> SIGRTMAX
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>这里介绍一下常见的进程信号，如表4-8 所示。</p>
<p><strong>表4-8	<u>常见的进程信号</u></strong></p>
<table>
<thead>
<tr>
<th>信号代号</th>
<th>信号名称</th>
<th>说 明</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>1</strong></td>
<td>SIGHUP</td>
<td><strong>该信号让进程立即关闭，然后重新读取配置文件之后重启</strong></td>
</tr>
<tr>
<td>2</td>
<td>SIGINT</td>
<td>程序中止信号，用于中止前台进程。相当于输出 Ctrl+C 快捷键</td>
</tr>
<tr>
<td>8</td>
<td>SIGFPE</td>
<td>在发生致命的算术运算错误时发出。不仅包括浮点运算错误，还包括溢出及除数为 0 等其他所有的算术运算错误</td>
</tr>
<tr>
<td><strong>9</strong></td>
<td>SIGKILL</td>
<td><strong>用来立即结束程序的运行。本信号不能被阻塞、处理和忽略。般用于强制中止进程</strong></td>
</tr>
<tr>
<td>14</td>
<td>SIGALRM</td>
<td>时钟定时信号，计算的是实际的时间或时钟时间。alarm 函数使用该信号</td>
</tr>
<tr>
<td><strong>15</strong></td>
<td>SIGTERM</td>
<td><strong>正常结束进程的信号，<code>kill</code> 命令的默认信号</strong>。如果进程已经发生了问题，那么这 个信号是无法正常中止进程的，这时我们才会尝试 SIGKILL 信号，也就是信号 9</td>
</tr>
<tr>
<td>18</td>
<td>SIGCONT</td>
<td>该信号可以让暂停的进程恢复执行。本信号不能被阻断</td>
</tr>
<tr>
<td>19</td>
<td>SIGSTOP</td>
<td>该信号可以暂停前台进程，相当于输入 Ctrl+Z 快捷键。本信号不能被阻断</td>
</tr>
</tbody>
</table>
<p>我们只介绍了常见的进程信号，其中最重要的就是 &quot;1&quot;、&quot;9&quot;、&quot;15&quot;这三个信号，我们只需要记住这三个信号即可。</p>
<p>关于如何把这些信号传递给进程，从而控制这个进程，这就需要使用 <code>kill</code>、<code>killall</code> 以及 <code>pkill</code> 命令了，接下来介绍这 3 个命令。</p>
<h3 id="kill-命令-终止进程" tabindex="-1"><a class="header-anchor" href="#kill-命令-终止进程" aria-hidden="true">#</a> kill 命令：终止进程</h3>
<p><code>kill</code> 从字面来看，就是用来杀死进程的命令，但事实上，这个或多或少带有一定的误导性。从本质上讲，<code>kill</code> 命令只是用来向进程发送一个信号，至于这个信号是什么，是用户指定的。</p>
<p>也就是说，<code>kill</code> 命令的执行原理是这样的，<code>kill</code> 命令会向操作系统内核发送一个信号（多是终止信号）和目标进程的 PID，然后系统内核根据收到的信号类型，对指定进程进行相应的操作。</p>
<p><code>kill</code> 命令的基本格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># kill [信号] PID</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>kill</code> 命令是按照 PID 来确定进程的，所以 <code>kill</code> 命令只能识别 PID，而不能识别进程名。Linux 定义了几十种不同类型的信号，读者可以使用 <code>kill -l</code> 命令查看所有信号及其编号，这里仅列出几个常用的信号，如表4-9 所示。</p>
<p><strong>表4-9	<u>kill 命令的常用信号</u></strong></p>
<table>
<thead>
<tr>
<th>信号编号</th>
<th>信号名</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>EXIT</td>
<td>程序退出时收到该信息。</td>
</tr>
<tr>
<td>1</td>
<td>HUP</td>
<td>挂掉电话线或终端连接的挂起信号，这个信号也会造成某些进程在没有终止的情况下重新初始化。</td>
</tr>
<tr>
<td>2</td>
<td>INT</td>
<td>表示结束进程，但并不是强制性的，常用的 &quot;Ctrl+C&quot; 组合键发出就是一个 kill -2 的信号。</td>
</tr>
<tr>
<td>3</td>
<td>QUIT</td>
<td>退出。</td>
</tr>
<tr>
<td>9</td>
<td>KILL</td>
<td>杀死进程，即强制结束进程。</td>
</tr>
<tr>
<td>11</td>
<td>SEGV</td>
<td>段错误。</td>
</tr>
<tr>
<td>15</td>
<td>TERM</td>
<td>正常结束进程，是 kill 命令的默认信号。</td>
</tr>
</tbody>
</table>
<p>需要注意的是，表中省略了各个信号名称的前缀 SIG，也就是说，SIGTERM 和 TERM 这两种写法都对，<code>kill</code> 命令都可以理解。</p>
<p>下面，我们举几个例子来说明一下 <code>kill</code> 命令。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#例 1: 标准 kill 命令。</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># service httpd start</span>
<span class="token comment">#启动RPM包默认安装的apache服务</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># pstree -p 丨 grep httpd | grep -v "grep"</span>
<span class="token comment">#查看 httpd 的进程树及 PID。grep 命令査看 httpd 也会生成包含"httpd"关键字的进程，所以使用“-v”反向选择包含“grep”关键字的进程</span>
<span class="token comment">#这里使用 pstree 命令来查询进程，当然也可以使用 ps 和 top 命令</span>
<span class="token operator">|</span>-httpd<span class="token punctuation">(</span><span class="token number">2246</span><span class="token punctuation">)</span>-+-httpd<span class="token punctuation">(</span><span class="token number">2247</span><span class="token punctuation">)</span>
<span class="token operator">|</span>  <span class="token operator">|</span>-httpd<span class="token punctuation">(</span><span class="token number">2248</span><span class="token punctuation">)</span>
<span class="token operator">|</span>  <span class="token operator">|</span>-httpd<span class="token punctuation">(</span><span class="token number">2249</span><span class="token punctuation">)</span>
<span class="token operator">|</span>  <span class="token operator">|</span>-httpd<span class="token punctuation">(</span><span class="token number">2250</span><span class="token punctuation">)</span>
<span class="token operator">|</span>  <span class="token operator">|</span>-httpd<span class="token punctuation">(</span><span class="token number">2251</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># kill 2248</span>
<span class="token comment">#杀死PID是2248的httpd进程，默认信号是15，正常停止</span>
<span class="token comment">#如果默认信号15不能杀死进程，则可以尝试-9信号，强制杀死进程</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># pstree -p | grep httpd | grep -v "grep"</span>
<span class="token operator">|</span>-httpd<span class="token punctuation">(</span><span class="token number">224</span><span class="token operator"><span class="token file-descriptor important">6</span>></span>-+-httpd<span class="token punctuation">(</span><span class="token number">2247</span><span class="token punctuation">)</span>
<span class="token operator">|</span>  <span class="token operator">|</span>-httpd<span class="token punctuation">(</span><span class="token number">2249</span><span class="token punctuation">)</span>
<span class="token operator">|</span>  <span class="token operator">|</span>-httpd<span class="token punctuation">(</span><span class="token number">2250</span><span class="token punctuation">)</span>
<span class="token operator">|</span>  <span class="token operator">|</span>-httpd<span class="token punctuation">(</span><span class="token number">2251</span><span class="token punctuation">)</span>
<span class="token comment">#PID是2248的httpd进程消失了</span>


<span class="token comment">#例 2: 使用“-1”信号，让进程重启。</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># kill -1 2246</span>
<span class="token comment">#使用“-1 (数字1)”信号，让httpd的主进程重新启动</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># pstree -p | grep httpd | grep -v "grep"</span>
<span class="token operator">|</span>-httpd<span class="token punctuation">(</span><span class="token number">2246</span><span class="token punctuation">)</span>-+-httpd<span class="token punctuation">(</span><span class="token number">2270</span><span class="token punctuation">)</span>
<span class="token operator">|</span>  <span class="token operator">|</span>-httpd<span class="token punctuation">(</span><span class="token number">2271</span><span class="token punctuation">)</span>
<span class="token operator">|</span>  <span class="token operator">|</span>-httpd<span class="token punctuation">(</span><span class="token number">2272</span><span class="token punctuation">)</span>
<span class="token operator">|</span>  <span class="token operator">|</span>-httpd<span class="token punctuation">(</span><span class="token number">2273</span><span class="token punctuation">)</span>
<span class="token operator">|</span>  <span class="token operator">|</span>-httpd<span class="token punctuation">(</span><span class="token number">2274</span><span class="token punctuation">)</span>
<span class="token comment">#子httpd进程的PID都更换了，说明httpd进程已经重启了一次</span>


<span class="token comment">#例 3: 使用“-19”信号，让进程暂停。</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi test.sh</span>
<span class="token comment">#使用vi命令编辑一个文件，不要退出</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ps aux | grep "vi" | grep -v "grep"</span>
root <span class="token number">2313</span> <span class="token number">0.0</span> <span class="token number">0.2</span> <span class="token number">7116</span> <span class="token number">1544</span> pts/1 S+ <span class="token number">19</span>:2.0 <span class="token number">0</span>:00 <span class="token function">vi</span> test.sh
<span class="token comment">#换一个不同的终端，查看一下这个进程的状态。进程状态是S（休眠）和+（位于后台），因为是在另一个终端运行的命令</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># kill -19 2313</span>
<span class="token comment">#使用-19信号，让PID为2313的进程暂停。相当于在vi界面按 Ctrl+Z 快捷键</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ps aux | grep "vi" | grep -v "grep"</span>
root <span class="token number">2313</span> <span class="token number">0.0</span> <span class="token number">0.2</span> <span class="token number">7116</span> <span class="token number">1580</span> pts/1 T <span class="token number">19</span>:20 <span class="token number">0</span>:00 <span class="token function">vi</span> test.sh
<span class="token comment">#注意2313进程的状态，变成了 T（暂停）状态。这时切换回vi的终端,发现vi命令已经暂停，又回到了命令提示符，不过2313进程就会卡在后台。</span>
<span class="token comment">#如果想要恢复，可以使用"kill -9 2313”命令强制中止进程，也可以利用后面将要学习的工作管理来进行恢复</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><p>学会如何使用 <code>kill</code> 命令之后，再思考一个问题，使用 <code>kill</code> 命令一定可以终止一个进程吗？</p>
<p>答案是否定的。文章开头说过，<code>kill</code> 命令只是“发送”一个信号，因此，只有当信号被程序成功“捕获”，系统才会执行 <code>kill</code> 命令指定的操作；反之，如果信号被“封锁”或者“忽略”，则 <code>kill</code> 命令将会失效。</p>
<h3 id="killall-命令-终止特定的一类进程" tabindex="-1"><a class="header-anchor" href="#killall-命令-终止特定的一类进程" aria-hidden="true">#</a> killall 命令：终止特定的一类进程</h3>
<p><code>killall</code> 也是用于关闭进程的一个命令，但和 <code>kill</code> 不同的是，<code>killall</code> 命令不再依靠 PID 来杀死单个进程，而是通过程序的进程名来杀死一类进程，也正是由于这一点，该命令常与 <code>ps</code>、<code>pstree</code> 等命令配合使用。</p>
<p><code>killall</code> 命令的基本格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># killall [选项] [信号] 进程名</span>
选项：
	-i：交互式，询问是否要杀死某个进程
	-I：忽略进程名的大小写
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>接下来，给大家举几个例子。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#例 1： 杀死 httpd 进程。</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># service httpd start</span>
<span class="token comment">#启动RPM包默认安装的apache服务</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ps aux | grep "httpd" | grep -v "grep"</span>
root <span class="token number">1600</span> <span class="token number">0.0</span> <span class="token number">0.2</span> <span class="token number">4520</span> <span class="token number">1696</span>? Ss <span class="token number">19</span>:42 <span class="token number">0</span>:00 /usr/local/apache2/bin/httpd -k start
daemon <span class="token number">1601</span> <span class="token number">0.0</span> <span class="token number">0.1</span> <span class="token number">4520</span> <span class="token number">1188</span>? S <span class="token number">19</span>:42 <span class="token number">0</span>:00 /usr/local/apache2/bin/httpd -k start
daemon <span class="token number">1602</span> <span class="token number">0.0</span> <span class="token number">0.1</span> <span class="token number">4520</span> <span class="token number">1188</span>? S <span class="token number">19</span>:42 <span class="token number">0</span>:00 /usr/local/apache2/bin/httpd -k start
daemon <span class="token number">1603</span> <span class="token number">0.0</span> <span class="token number">0.1</span> <span class="token number">4520</span> <span class="token number">1188</span>? S <span class="token number">19</span>:42 <span class="token number">0</span>:00 /usr/local/apache2/bin/httpd -k start
daemon <span class="token number">1604</span> <span class="token number">0.0</span> <span class="token number">0.1</span> <span class="token number">4520</span> <span class="token number">1188</span>? S <span class="token number">19</span>:42 <span class="token number">0</span>:00 /usr/local/apache2/bin/httpd -k start
daemon <span class="token number">1605</span> <span class="token number">0.0</span> <span class="token number">0.1</span> <span class="token number">4520</span> <span class="token number">1188</span>? S <span class="token number">19</span>:42 <span class="token number">0</span>:00 /usr/local/apache2/bin/httpd -k start
<span class="token comment">#查看httpd进程</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># killall httpd</span>
<span class="token comment">#杀死所有进程名是httpd的进程</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ps aux | grep "httpd" | grep -v "grep"</span>
<span class="token comment">#查询发现所有的httpd进程都消失了</span>


<span class="token comment">#例 2： 交互式杀死 sshd 进程。</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ps aux | grep "sshd" | grep -v "grep"</span>
root <span class="token number">1733</span> <span class="token number">0.0</span> <span class="token number">0.1</span> <span class="token number">8508</span> <span class="token number">1008</span>? Ss <span class="token number">19</span>:47 <span class="token number">0</span>:00/usr/sbin/sshd
root <span class="token number">1735</span> <span class="token number">0.1</span> <span class="token number">0.5</span> <span class="token number">11452</span> <span class="token number">3296</span>? Ss <span class="token number">19</span>:47 <span class="token number">0</span>:00 sshd: root@pts/0
root <span class="token number">1758</span> <span class="token number">0.1</span> <span class="token number">0.5</span> <span class="token number">11452</span> <span class="token number">3296</span>? Ss <span class="token number">19</span>:47 <span class="token number">0</span>:00 sshd: root@pts/1
<span class="token comment">#查询系统中有3个sshd进程。1733是sshd服务的进程，1735和1758是两个远程连接的进程</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># killall -i sshd</span>
<span class="token comment">#交互式杀死sshd进程</span>
杀死 sshd<span class="token punctuation">(</span><span class="token number">1733</span><span class="token punctuation">)</span>?<span class="token punctuation">(</span>y/N<span class="token punctuation">)</span>n
<span class="token comment">#这个进程是sshd的服务进程，如果杀死，那么所有的sshd连接都不能登陆</span>
杀死 sshd<span class="token punctuation">(</span><span class="token number">1735</span><span class="token punctuation">)</span>?<span class="token punctuation">(</span>y/N<span class="token punctuation">)</span>n
<span class="token comment">#这是当前登录终端，不能杀死我自己吧</span>
杀死 sshd<span class="token punctuation">(</span><span class="token number">1758</span><span class="token punctuation">)</span>?<span class="token punctuation">(</span>y/N<span class="token punctuation">)</span>y
<span class="token comment">#杀死另一个sshd登陆终端</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h3 id="pkill-命令-终止进程-踢出用户" tabindex="-1"><a class="header-anchor" href="#pkill-命令-终止进程-踢出用户" aria-hidden="true">#</a> pkill 命令：终止进程，踢出用户</h3>
<p>当作于管理进程时，<code>pkill</code> 命令和 <code>killall</code> 命令的用法相同，都是通过进程名杀死一类进程，该命令的基本格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># pkill [信号] 进程名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#例 1</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># pkill -9 httpd</span>
<span class="token comment">#按名称强制杀死 httpd 进程</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># pstree -p | grep httpd</span>
<span class="token comment">#查看 apache 进程，发现没有了</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># service httpd start</span>
<span class="token comment">#重新启动 apache 进程</span>
Starting httpd: httpd: Could not reliably determine the server’s fully qualified domain me, using <span class="token number">127.0</span>.0.1 <span class="token keyword">for</span> ServerName
<span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># pstree -p | grep httpd</span>
<span class="token comment">#再次查看，apache 进程重新启动</span>
    <span class="token punctuation">\</span>- httpd <span class="token punctuation">(</span><span class="token number">11157</span><span class="token punctuation">)</span> -+-httpd<span class="token punctuation">(</span><span class="token number">11159</span><span class="token punctuation">)</span>
    <span class="token operator">|</span>              <span class="token operator">|</span>-httpd<span class="token punctuation">(</span><span class="token number">11160</span><span class="token punctuation">)</span>
    <span class="token operator">|</span>              <span class="token operator">|</span>-httpd<span class="token punctuation">(</span><span class="token number">11161</span><span class="token punctuation">)</span>
    <span class="token operator">|</span>              <span class="token operator">|</span>-httpd<span class="token punctuation">(</span><span class="token number">11162</span><span class="token punctuation">)</span>
    <span class="token operator">|</span>              <span class="token operator">|</span>-httpd<span class="token punctuation">(</span><span class="token number">11163</span><span class="token punctuation">)</span>
    <span class="token operator">|</span>              <span class="token operator">|</span>-httpd<span class="token punctuation">(</span><span class="token number">11164</span><span class="token punctuation">)</span>
    <span class="token operator">|</span>              <span class="token operator">|</span>-httpd<span class="token punctuation">(</span><span class="token number">11165</span><span class="token punctuation">)</span>
    <span class="token operator">|</span>              <span class="token operator">|</span>-httpd<span class="token punctuation">(</span><span class="token number">11166</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><ul>
<li><strong><code>pkill</code>命令踢出登陆用户</strong></li>
</ul>
<p>除此之外，<code>pkill</code> 还有一个更重要的功能，即按照终端号来踢出用户登录，此时的 <code>pkill</code> 命令的基本格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># pkill [选项] [信号] 进程名</span>
选项：
	-t 终端号：按照终端号踢出用户
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>学习 <code>killall</code> 命令时，不知道大家发现没有，通过 <code>killall</code> 命令杀死 sshd 进程的方式来踢出用户，非常容易误杀死进程，要么会把 sshd 服务杀死，要么会把自己的登录终端杀死。</p>
<p>所以，不管是使用 <code>kill</code> 命令按照 PID 杀死登录进程，还是使用 <code>killall</code> 命令按照进程名杀死登录进程，都是非常容易误杀死进程的，而使用 <code>pkill</code> 命令则不会，举个例子：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># w</span>
<span class="token comment">#使用w命令查询本机已经登录的用户</span>
<span class="token number">20</span>:06:34 up <span class="token number">28</span> min, <span class="token number">3</span> users, load average: <span class="token number">0.00</span>, <span class="token number">0.00</span>, <span class="token number">0.00</span>
<span class="token environment constant">USER</span>	TTY		FROM			LOGIN@	IDLE	JCPU	PCPU	WHAT
root	ttyl	-				<span class="token number">19</span>:47	<span class="token number">18</span>:52	<span class="token number">0</span>.01s	<span class="token number">0</span>.01s	-bash
root	pts/0	<span class="token number">192.168</span>.0.100	<span class="token number">19</span>:47	<span class="token number">0</span>.00s	<span class="token number">0</span>.09s	<span class="token number">0</span>.04s	w
root	pts/1	<span class="token number">192.168</span>.0.100	<span class="token number">19</span>:51	<span class="token number">14</span>:56	<span class="token number">0</span>.02s	<span class="token number">0</span>.02s	-bash
<span class="token comment">#当前主机已经登录了三个root用户，一个是本地终端ttyl登录，另外两个是从192.168.0.100登陆的远程登录</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># pkill -9 -t pts/1</span>
<span class="token comment">#强制杀死从pts/1虚拟终端登陆的进程</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># w</span>
<span class="token number">20</span>:09:09 up <span class="token number">30</span> min, <span class="token number">2</span> users, load average: <span class="token number">0.00</span>, <span class="token number">0.00</span>,0.00
<span class="token environment constant">USER</span>	TTY		FROM			LOGIN@	IDLE	JCPU	PCPU	WHAT
root	ttyl	-				<span class="token number">19</span>:47	<span class="token number">21</span>:27	<span class="token number">0</span>.01s	<span class="token number">0</span>.01s	-bash
root	pts/0	<span class="token number">192.168</span>.0.100	<span class="token number">19</span>:47	<span class="token number">0</span>.00s	<span class="token number">0</span>.06s	<span class="token number">0</span>.00s	w
<span class="token comment">#虚拟终端pts/1的登录进程已经被杀死了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></template>
