<template><h2 id="工作管理简介" tabindex="-1"><a class="header-anchor" href="#工作管理简介" aria-hidden="true">#</a> 工作管理简介</h2>
<p><strong>工作管理指的是在单个登录终端（也就是登录的 Shell 界面）同时管理多个工作的行为</strong>。也就是说，我们登陆了一个终端，已经在执行一个操作，那么是否可以在不关闭当前操作的情况下执行其他操作呢？</p>
<p>当然可以，我们可以再启动一个终端，然后执行其他的操作。不过，是否可以在一个终端执行不同的操作呢？这就需要通过工作管理来实现了。</p>
<p>例如，我在当前终端正在 <code>vi</code> 一个文件，在不停止 <code>vi</code> 的情况下，如果我想在同一个终端执行其他的命令，就应该把 <code>vi</code> 命令放入后台，然后再执行其他命令。把命令放入后台，然后把命令恢复到前台，或者让命令恢复到后台执行，这些管理操作就是工作管理。</p>
<p>后台管理有几个事项需要大家注意：</p>
<ol>
<li>前台是指当前可以操控和执行命令的这个操作环境；后台是指工作可以自行运行，但是不能直接用 <kbd>Ctrl</kbd>+<kbd>C</kbd> 快捷键来中止它，只能使用 fg/bg 来调用工作。</li>
<li>当前的登录终端只能管理当前终端的工作，而不能管理其他登录终端的工作。比如 tty1 登录的终端是不能管理 tty2 终端中的工作的。</li>
<li>放入后台的命令必须可以持续运行一段时间，这样我们才能捕捉和操作它。</li>
<li>放入后台执行的命令不能和前台用户有交互或需要前台输入，否则只能放入后台暂停，而不能执行。比如 <code>vi</code> 命令只能放入后台暂停，而不能执行，因为 <code>vi</code> 命令需要前台输入信息；<code>top</code> 命令也不能放入后台执行，而只能放入后台暂停，因为 <code>top</code> 命令需要和前台交互。</li>
</ol>
<h2 id="如何把命令放入后台" tabindex="-1"><a class="header-anchor" href="#如何把命令放入后台" aria-hidden="true">#</a> 如何把命令放入后台</h2>
<p>Linux 命令放入后台的方法有两种，分别介绍如下。</p>
<h3 id="命令-把命令放入后台执行" tabindex="-1"><a class="header-anchor" href="#命令-把命令放入后台执行" aria-hidden="true">#</a> <code>命令 &amp;</code>，把命令放入后台执行</h3>
<p>第一种把命令放入后台的方法是在命令后面加入 <code>空格 &amp;</code>。使用这种方法放入后台的命令，在后台处于执行状态。</p>
<p>注意，放入后台执行的命令不能与前台有交互，否则这个命令是不能在后台执行的。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># find / -name install.log &amp;</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">1920</span>
<span class="token comment">#[工作号] 进程号</span>
<span class="token comment">#把find命令放入后台执行，每个后台命令会被分配一个工作号。命令既然可以执行，就会有进程产生，所以也会有进程号</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>这样，虽然 <code>find</code> 命令在执行，但在当前终端仍然可以执行其他操作。如果在终端上出现如下信息：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+ Done <span class="token function">find</span> / -name install.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>则证明后台的这个命令已经完成了。当然，命令如果有执行结果，则也会显示到操作终端上。其中，[1] 是这个命令的工作号，&quot;+&quot;代表这个命令是最近一个被放入后台的。</p>
<h3 id="命令执行过程中按-ctrl-z-快捷键-命令在后台处于暂停状态" tabindex="-1"><a class="header-anchor" href="#命令执行过程中按-ctrl-z-快捷键-命令在后台处于暂停状态" aria-hidden="true">#</a> 命令执行过程中按 Ctrl+z 快捷键，命令在后台处于暂停状态</h3>
<p>使用这种方法放入后台的命令，就算不和前台有交互，能在后台执行，也处于暂停状态，因为 <kbd>Ctrl</kbd>+<kbd>z</kbd> 快捷键就是暂停的快捷键。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#例 1</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># top</span>
<span class="token comment">#在top命令执行的过程中，按下Ctrl+z快捷键</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+ Stopped <span class="token function">top</span>
<span class="token comment">#top命令被放入后台，工作号是1，状态是暂停。而且，虽然top命令没有结束，但也能取得控制台权限</span>


<span class="token comment">#例 2</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># tar -zcf etc.tar.gz /etc</span>
<span class="token comment">#压缩一下/etc/目录</span>
tar:从成员名中删除开头的<span class="token string">"/"</span>
tar:从硬链接目标中删除开头的<span class="token string">"/"</span>
^Z
<span class="token comment">#在执行过程中，按下Ctrl+z快捷键</span>
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>+ Stopped tar-zcf etc.tar.gz/etc
<span class="token comment">#tar命令被放入后台，工作号是2，状态是暂停</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>每个被放入后台的命令都会被分配一个工作号。第一个被放入后台的命令，工作号是 1；第二个被放入后台的命令，工作号是 2，以此类推。</p>
<h2 id="后台命令管理" tabindex="-1"><a class="header-anchor" href="#后台命令管理" aria-hidden="true">#</a> 后台命令管理</h2>
<h3 id="jobs-命令-查看后台的工作" tabindex="-1"><a class="header-anchor" href="#jobs-命令-查看后台的工作" aria-hidden="true">#</a> jobs 命令：查看后台的工作</h3>
<p><code>jobs</code> 命令可以用来查看当前终端放入后台的工作，工作管理的名字也来源于 <code>jobs</code> 命令。</p>
<p><code>jobs</code> 命令的基本格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># jobs [选项]</span>
选项：
	-l：列出进程的 PID 号
	-n：只列出上次发出通知后改变了状态的进程
	-p：只列出进程的 PID 号
	-r：只列出运行中的进程
	-s：只列出已停止的进程
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># jobs -l</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>- <span class="token number">2023</span> Stopped <span class="token function">top</span>
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>+ <span class="token number">2034</span> Stopped <span class="token function">tar</span> -zcf etc.tar.gz /etc
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>可以看到，当前终端有两个后台工作：一个是 <code>top</code> 命令，工作号为 1，状态是暂停，标志是&quot;-&quot;；另一个是 <code>tar</code> 命令，工作号为  2，状态是暂停，标志是&quot;+&quot;。&quot;+&quot;号代表最近一个放入后台的工作，也是工作恢复时默认恢复的工作。&quot;-&quot;号代表倒数第二个放入后台的工作，而第三个以后的工作就没有&quot;+-&quot;标志了。</p>
<p>一旦当前的默认工作处理完成，则带减号的工作就会自动成为新的默认工作，换句话说，不管此时有多少正在运行的工作，任何时间都会有且仅有一个带加号的工作和一个带减号的工作。</p>
<h3 id="gf-命令-把后台命令恢复到前台执行" tabindex="-1"><a class="header-anchor" href="#gf-命令-把后台命令恢复到前台执行" aria-hidden="true">#</a> gf 命令：把后台命令恢复到前台执行</h3>
<p>前面所讲，都是将工作丢到后台去运行，那么，有没有可以将后台工作拿到前台来执行的办法呢？答案是肯定的，使用 <code>fg</code> 命令即可。</p>
<p><code>fg</code> 命令用于把后台工作恢复到前台执行，该命令的基本格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># fg %工作号</span>
参数：
	%工作号：%可以省略，但若将 ”%工作号“ 全部省略，则此命令会将带有 + 号的工作恢复到前台。

<span class="token comment">#例如：</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># jobs</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>- Stopped <span class="token function">top</span>
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>+ Stopped tar-zcf etc.tar.gz/etc
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># fg</span>
<span class="token comment">#恢复“+”标志的工作，也就是tar命令</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># fg %1</span>
<span class="token comment">#恢复1号工作，也就是top命令</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><code>top</code> 命令是不能在后台执行的，所以，如果要想中止 <code>top</code> 命令，要么把 <code>top</code> 命令恢复到前台，然后正常退出；要么找到 <code>top</code> 命令的 PID，使用 <code>kill</code> 命令杀死这个进程。</p>
<h3 id="bg-命令-把后台暂停的工作恢复到后台执行" tabindex="-1"><a class="header-anchor" href="#bg-命令-把后台暂停的工作恢复到后台执行" aria-hidden="true">#</a> bg 命令：把后台暂停的工作恢复到后台执行</h3>
<p>前面讲过，使用 <kbd>Ctrl</kbd>+<kbd>z</kbd> 快捷键的方式，可以将前台工作放入后台，但是会处于暂停状态，那么，有没有办法可以让后台工作继续在后台执行呢？答案是肯定的，这就需要用到 <code>bg</code> 命令。</p>
<p><code>bg</code> 命令的基本格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># bg %工作号</span>

<span class="token comment">#和 fg 命令类似，这里的 % 可以省略。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>举个例子，可以试着把上面的放入后台的两个工作恢复运行，命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># bg %1</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># bg %2</span>
<span class="token comment">#把两个命令恢复到后台执行</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># jobs</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>+ Stopped <span class="token function">top</span>
<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>- Running <span class="token function">tar</span> -zcf etc.tar.gz /etc <span class="token operator">&amp;</span>
<span class="token comment">#tar命令的状态变为了Running，但是top命令的状态还是Stopped</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>可以看到，<code>tar</code> 命令确实已经在后台执行了，但是 <code>top</code> 命令怎么还处于暂停状态呢？原因很简单，<code>top</code>  命令是需要和前台交互的，所以不能在后台执行。换句话说，<code>top</code> 命令就是给前台用户显示系统性能的命令，如果 <code>top</code> 命令在后台恢复运行了，那么给谁去看结果呢？</p>
<h3 id="nohup-命令-后台命令脱离终端运行" tabindex="-1"><a class="header-anchor" href="#nohup-命令-后台命令脱离终端运行" aria-hidden="true">#</a> nohup 命令：后台命令脱离终端运行</h3>
<p>我们知道，把命令放入后台，只能在当前登录终端执行。如果是远程管理的服务器，在远程终端执行了后台命令，这时退出登录，那么这个后台命令还能继续执行吗？当然时不行的，这个后台命令会被中止。但是我们确实需要在远程终端执行某些后台命令，该如何执行呢？</p>
<p>有以下 3 种方法：</p>
<ol>
<li>把需要在后台执行的命令加入 <code>/etc/rc.local</code> 文件，让系统在启动时执行这个后台程序。这种方法的问题是，服务器是不能随便重启的，如果有临时后台任务，就不能执行了。</li>
<li>使用系统定时任务，让系统在指定的时间执行某个后台命令。这样放入后台的命令与终端无关，是不依赖登录终端的。</li>
<li>使用 <code>nohup</code> 命令。</li>
</ol>
<p>这里重点讲解 <code>nohup</code> 命令的用法。</p>
<p><code>nohup</code> 命令的作用就是让后台工作在离开操作终端时，也能够正确地在后台执行。此命令的基本格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># nohup [命令] &amp;</span>

注意，这里的‘<span class="token operator">&amp;</span>’表示此命令会在终端后台工作；反之，如果没有‘<span class="token operator">&amp;</span>’，则表示此命令会在终端前台工作。

<span class="token comment">#例如：</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># nohup find / -print > /root/file.log &amp;</span>
<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token number">2349</span>
<span class="token comment">#使用find命令，打印/下的所有文件。放入后台执行</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># nohup：忽略输入并把输出追加到"nohup.out"</span>
<span class="token comment">#有提示信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>接下来的操作要迅速，否则 <code>find</code> 命令就会执行结束。然后我们可以退出登录，重新登录之后，执行 <code>ps aux</code> 命令，会发现 <code>find</code> 命令还在运行。</p>
<p>如果 <code>find</code> 命令执行太快，我们就可以写一个循环脚本，然后使用 <code>nohup</code> 命令执行。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi for.sh</span>
<span class="token comment">#！/bin/bash</span>
<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">1000</span><span class="token punctuation">;</span>i<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">))</span></span>
<span class="token comment">#循环1000次</span>
<span class="token keyword">do</span>
<span class="token builtin class-name">echo</span> <span class="token number">11</span> <span class="token operator">>></span> /root/for.log
<span class="token comment">#在for.log文件中写入11</span>
<span class="token function">sleep</span> 10s
<span class="token comment">#每次循环睡眠10秒</span>
<span class="token keyword">done</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># chmod 755 for.sh</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># nohup /root/for.sh &amp;</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">2478</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># nohup：忽略输入并把输出追加到"nohup.out"</span>
<span class="token comment">#执行脚本</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>接下来退出登录，重新登录之后，这个脚本仍然可以通过 <code>ps aux</code> 命令看到。</p>
<h2 id="系统定时任务" tabindex="-1"><a class="header-anchor" href="#系统定时任务" aria-hidden="true">#</a> 系统定时任务</h2>
<p>在进行系统运行和维护时，有些工作可能不是马上就要执行的，而要在某个特定的时间执行一次或重复执行。为了不忘记这些工作，我们需要把它们记录在记事本中。如果计算机可以在指定的时间自动执行指定的任务，那么管理员不就可以轻松多了吗？Linux 的系统定时任务（也可以叫作计划任务）就可以帮助管理员在指定的时间执行指定的工作。比如，在每天的凌展 5:05 执行系统备份脚本，备份系统重要的文件；在每天中午 12:00 发送一封邮件，提醒我到快乐的午休时间了：在每周二的凌晨 5:25 执行系统重启动脚本，让服务器的状态归零。</p>
<p>系统定时任务主要有两种执行方式：第一种是使用 <code>at</code> 命令，<code>at</code> 命令定义的系统定时任务只能在指定时间执行一次，而不能循环执行；第二种是使用 <code>crontab</code> 命令，这个命令设定的系统定时任务比较灵活，可以按照分钟、小时、天、月或星期几循环执行任务。我们分别来介绍这两种系统定时任务的执行方式。</p>
<h3 id="at-命令-一次性执行定时任务" tabindex="-1"><a class="header-anchor" href="#at-命令-一次性执行定时任务" aria-hidden="true">#</a> at 命令：一次性执行定时任务</h3>
<h4 id="atd-服务管理与访问控制" tabindex="-1"><a class="header-anchor" href="#atd-服务管理与访问控制" aria-hidden="true">#</a> atd 服务管理与访问控制</h4>
<p>要想使用 <code>at</code> 命令，需提前安装好 <code>at</code> 软件包，并开启 atd 服务。因此，首先来看看如何安装 <code>at</code> 软件包。</p>
<p>在 Linux 系统中，查看 at 软件包是否已安装，可以使用 <code>rpm -q</code> 命令，如下所示：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># rpm -q at</span>
at-3.1.13-20.el7x86_64
<span class="token comment">#可以看到，当前系统已经安装 at 软件包，若读者所用系统未安装，可使用如下命令进行安装：</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># yum -y install at</span>
<span class="token comment">#省略输出信息，最终出现 Complete!，证明安装成功。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>除此之外，<code>at</code> 命令要想正确执行，还需要 atd 服务的支持。atd 服务是独立的服务，启动的命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># service atd start</span>
正在启动 atd： 								<span class="token punctuation">[</span>确定<span class="token punctuation">]</span>
<span class="token comment">#如果想让 atd 服务开机时自启动，则可以使用如下命令：</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># chkconfig atd on</span>
<span class="token comment">#当然，独立服务的自启动也可以修改 /etc/rc.local 配置文件，具体怎么做看个人习惯。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>安装好 <code>at</code> 软件包并开启 atd 服务之后，<code>at</code> 命令才可以正常使用，不过在此之前，我们还要学习一下 <code>at</code> 命令的访问控制。</p>
<p>访问控制指的是允许哪些用户使用 <code>at</code> 命令设定定时任务，或者不允许哪些用户使用 <code>at</code> 命令。大家可以将其想象成设定黑名单或白名单，这样更容易理解。</p>
<p><code>at</code> 命令的访问控制是依靠 <code>/etc/at.allow</code>（白名单）和 <code>/etc/at.deny</code>（黑名单）这两个文件来实现的，具体规则如下：</p>
<ul>
<li>如果系统中有 <code>/etc/at.allow</code> 文件，那么只有写入 <code>/etc/at.allow</code> 文件（白名单）中的用户可以使用 <code>at</code>  命令，其他用户不能使用 <code>at</code> 命令（注意，<code>/etc/at.allow</code> 文件的优先级更高，也就是说，如果同一个用户既写入 <code>/etc/at.allow</code> 文件，又写入 <code>/etc/at.deny</code> 文件，那么这个用户是可以使用 <code>at</code> 命令的）。</li>
<li>如果系统中没有 <code>/etc/at.allow</code> 文件，只有 <code>/etc/at.deny</code> 文件，那么写入 <code>/etc/at.deny</code> 文件（黑名单）中的用户不能使用 <code>at</code> 命令，其他用户可以使用 <code>at</code> 命令。不过这个文件对 root 用户不生效。</li>
<li>如果系统中这两个文件都不存在，那么只有 root 用户可以使用 <code>at</code> 命令。</li>
</ul>
<p>系统中默认只有 <code>/etc/at.deny</code> 文件，而且这个文件是空的，因此，系统中所有的用户都可以使用 <code>at</code> 命令。不过，如果我们打算控制用户的 <code>at</code> 命令权限，那么只需把用户写入 <code>/etc/at.deny</code> 文件即可。</p>
<p>对于 <code>/etc/at.allow</code> 和 <code>/etc/at.deny</code> 文件的优先级，我们做一个实验来验证一下，命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls -l /etc/at*</span>
-rw-r--r--.1 root root <span class="token number">1</span> <span class="token number">1</span>月 <span class="token number">30</span> <span class="token number">2012</span> /etc/at.deny
<span class="token comment">#系统中默认只有at.deny文件</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo user1 >> /etc/at.deny</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/at.deny</span>
user1
<span class="token comment">#把user1用户写入/etc/at.deny文件</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># su - user1</span>
<span class="token punctuation">[</span>user1@localhost ~<span class="token punctuation">]</span>$ at 02:00
You <span class="token keyword">do</span> not have permission to use at.
<span class="token comment">#没有权限使用at命令，切换成user1用户，这个用户已经不能执行at命令了</span>
<span class="token punctuation">[</span>user1@localhost ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">exit</span>
<span class="token builtin class-name">logout</span>
<span class="token comment">#返回root身份</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo user1 >> /etc/at.allow</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/at.allow</span>
user1
<span class="token comment">#建立/etc/at.allow文件，并在文件中写入user1用户</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># su - user1</span>
<span class="token punctuation">[</span>user1@localhost ~<span class="token punctuation">]</span>$ at 02:00
at<span class="token operator">></span>
<span class="token comment">#切换成user1用户，user1用户可以执行at命令。这时user1用户既在/etc/at.deny文件中，又在/etc/at.allow文件中，但是/etc/at.allow文件的优先级更高</span>
<span class="token punctuation">[</span>user1@localhost ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">exit</span>
<span class="token builtin class-name">logout</span>
<span class="token comment">#返回root身份</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># at 02:00</span>
at<span class="token operator">></span>
<span class="token comment">#root用户虽然不在/etc/at.allow文件中，但是也能执行at命令，说明root用户不受这两个文件的控制</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>这个实验说明了 <code>/etc/at.allow</code> 文件的优先级更高，如果 <code>/etc/at.allow</code> 文件存在，则 <code>/etc/at.deny</code> 文件失效。<code>/etc/at.allow</code> 文件的管理更加严格，因为只有写入这个文件的用户才能使用 <code>at</code> 命令，如果需要禁用 <code>at</code> 命令的用户较多，则可以把少数用户写入这个文件。<code>/etc/at.deny</code> 文件的管理较为松散，如果允许使用 <code>at</code> 命令的用户较多，则可以把禁用的用户写入这个文件。不过这两个文件都不能对 root 用户生效。</p>
<h4 id="at-命令" tabindex="-1"><a class="header-anchor" href="#at-命令" aria-hidden="true">#</a> at 命令</h4>
<p>接下来正式介绍 <code>at</code> 命令。<code>at</code> 命令的格式非常简单，基本格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># at [选项] [时间]</span>
选项：
	-m			：当 at 工作完成后，无论命令是否输出，都用 E-mail 通知执行 at 命令的用户
	-c 工作号	：显示该 at 工作的实际内容
	-t 时间		：在指定时间提交工作并执行，时间格式为 <span class="token punctuation">[</span><span class="token punctuation">[</span>CC<span class="token punctuation">]</span>YY<span class="token punctuation">]</span>MMDDhhmm
	-d			：删除某个工作，需要提供相应的工作标识号（ID），同 atrm 命令的作用相同
	-l			：列出当前所有等待运行的工作，和 atq 命令具有相同的额作用
	-f 脚本文件	：指定所要提交的脚本文件

时间：
	HH:MM								-在指定的 “时：分” 执行命令，如 02:30 。如果时间已过，则它会在第二天的同一时间执行
	HH:MM YYYY-MM-DD					-在指定的 “时：分 年-月-日” 执行命令，如 02:30 <span class="token number">2013</span>-07-25
	HH:MM<span class="token punctuation">[</span>am<span class="token operator">|</span>pm<span class="token punctuation">]</span> <span class="token punctuation">[</span>month<span class="token punctuation">]</span> <span class="token punctuation">[</span>date<span class="token punctuation">]</span>			-在指定的 “时：分<span class="token punctuation">[</span>上午<span class="token operator">|</span>下午<span class="token punctuation">]</span> <span class="token punctuation">[</span>月<span class="token punctuation">]</span> <span class="token punctuation">[</span>日<span class="token punctuation">]</span>” 执行命令，如 <span class="token number">20</span>:30 July <span class="token number">25</span>
	HH:MM<span class="token punctuation">[</span>am<span class="token operator">|</span>pm<span class="token punctuation">]</span> + <span class="token punctuation">[</span>minutes<span class="token operator">|</span>hours<span class="token operator">|</span>days<span class="token operator">|</span>weeks<span class="token punctuation">]</span>	
										-在指定的 “时：分<span class="token punctuation">[</span>上午<span class="token operator">|</span>下午<span class="token punctuation">]</span>” 的一段时间之后执行（时间单位 minutes、hours、days 或 weeks）
										 例如 now + <span class="token number">5</span> days 表示命令在 <span class="token number">5</span> 天之后的此时此刻执行
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><code>at</code> 命令只要指定正确的时间，就可以输入需要在指定时间执行的命令。这个命令可以是系统命令，也可以是 Shell 脚本。举几个例子。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#例 1</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cat /root/hello.sh</span>
<span class="token comment">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> <span class="token string">"hello world!!"</span>
<span class="token comment">#该脚本会打印"hello world!!"</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># at now +2 minutes</span>
at<span class="token operator">></span> /root/hello.sh <span class="token operator">>></span> /root/hello.log
<span class="token comment">#执行hello.sh脚本，并把输出写入/root/hello.log文件</span>
at<span class="token operator">></span> <span class="token operator">&lt;</span>EOT<span class="token operator">></span>
<span class="token comment">#使用Ctrl+D快捷键保存at任务</span>
job <span class="token number">8</span> at <span class="token number">2013</span>-07-25 <span class="token number">20</span>:54 <span class="token comment">#这是第8个at任务,会在2013年7月25日20:54执行</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># at -c 8</span>
<span class="token comment">#查询第8个at任务的内容</span>
<span class="token punctuation">..</span>.省略部分内容<span class="token punctuation">..</span>.
<span class="token comment">#主要定义系统的环境变量</span>
/root/hello.sh <span class="token operator">>></span> /root/hello.log
<span class="token comment">#可以看到at执行的任务</span>


<span class="token comment">#例 2</span>

<span class="token punctuation">[</span>root@localhost ~J<span class="token comment"># at 02:00 2013-07-26</span>
at<span class="token operator">></span> /bin/sync
at<span class="token operator">></span> /sbin/shutdown -h now
at<span class="token operator">></span> <span class="token operator">&lt;</span>EOT<span class="token operator">></span>
job <span class="token number">9</span> at <span class="token number">2013</span>-07-26 02:00
<span class="token comment">#在指定的时间关机。在一个at任务中是可以执行多个系统命令的</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>在使用系统定时任务时，不论执行的是系统命令还是 Shell 脚本，最好使用绝对路径来写命令，这样不容易报错。at 任务一旦使用 <kbd>Ctrl</kbd>+<kbd>D</kbd> 快捷键保存，实际上写入了 <code>/var/spool/at/</code> 这个目录，这个目录内的文件可以直接被 atd 服务调用和执行。</p>
</div>
<h4 id="其他-at-管理命令" tabindex="-1"><a class="header-anchor" href="#其他-at-管理命令" aria-hidden="true">#</a> 其他 at 管理命令</h4>
<p>上面提到了 <code>atq</code> 命令和 <code>atrm</code> 命令。</p>
<p><code>atq</code> 命令，用于查看当前等待运行的工作</p>
<p><code>atrm</code> 命令，用于删除指定的工作</p>
<p>它们的使用方法也很简单，这里给大家举几个简单的例子。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#例 3 ： atq 命令的用法</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># atq</span>
<span class="token number">9</span> <span class="token number">2013</span>-07-26 02：00 a root
<span class="token comment">#说明root用户有一个at任务在2013年7月26日02：00执行，工作号是9</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># atrm [工作号]</span>
<span class="token comment">#删除指定的at任务</span>


<span class="token comment">#例 4： atrm 命令的用法</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># atrm 9</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># atq</span>
<span class="token comment">#删除9号at任务，再查询就没有at任务存在了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="crontab-命令-循环执行定时任务" tabindex="-1"><a class="header-anchor" href="#crontab-命令-循环执行定时任务" aria-hidden="true">#</a> crontab 命令：循环执行定时任务</h3>
<p>前面学习了 <code>at</code> 命令，此命令在指定的时间仅能执行一次任务，但在实际工作中，系统的定时任务一般是需要重复执行的。而 <code>at</code> 命令显然无法满足需求，这是就需要使用 <code>crontab</code> 命令来执行循环定时任务。</p>
<h4 id="crond-服务管理与访问控制" tabindex="-1"><a class="header-anchor" href="#crond-服务管理与访问控制" aria-hidden="true">#</a> crond 服务管理与访问控制</h4>
<p>在介绍 <code>crontab</code> 命令之前，我们首先要介绍一下 crond，因为 <code>crontab</code> 命令需要 crond 服务支持。crond 是 Linux 下用来周期地执行某种任务或等待处理某些事件的一个守护进程，和 Windows 中的计划任务有些类似。</p>
<p>crond 服务的启动和自启动方法如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># service crond restart</span>
停止 crond:									<span class="token punctuation">[</span>确定<span class="token punctuation">]</span>
正在启动 crond:								<span class="token punctuation">[</span>确定<span class="token punctuation">]</span>
<span class="token comment">#重新启动crond服务</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># chkconfig crond on</span>
<span class="token comment">#设定crond服务为开机自启动</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>其实，在安装完成操作系统后，默认会安装 crond 服务工具，且 crond 服务默认就是自启动的。crond 进程每分钟会定期检查是否有要执行的任务，如果有，则会自动执行该任务。</p>
<p>接下来，在介绍 <code>crontab</code> 命令。该命令和 <code>at</code> 命令类似，也是通过 <code>/etc/cron.allow</code> 和 <code>/etc/cron.deny</code> 文件来限制某些用户是否可以使用 <code>crontab</code> 命令的。而且原则也非常相似：</p>
<ul>
<li>当系统中有 <code>/etc/cron.allow</code> 文件时，只有写入此文件的用户可以使用 <code>crontab</code> 命令，没有写入的用户不能使用 <code>crontab</code>  命令。同样，如果有此文件，<code>/etc/cron.deny</code> 文件会被忽略，因为 <code>/etc/cron.allow</code> 文件的优先级更高。</li>
<li>当系统中只有 <code>/etc/cron.deny</code> 文件时，写入此文件的用户不能使用 <code>crontab</code> 命令，没有写入文件的用户可以使用 <code>crontab</code> 命令。</li>
<li>这个规则基本和 <code>at</code> 命令的规则一致，同样是 <code>/etc/cron.allow</code> 文件比 <code>/etc/cron.deny</code> 文件的优先级高，Linux 系统中默认只有 <code>/etc/cron.deny</code> 文件。</li>
</ul>
<h4 id="用户的-crontab-设置" tabindex="-1"><a class="header-anchor" href="#用户的-crontab-设置" aria-hidden="true">#</a> 用户的 crontab 设置</h4>
<p>每个用户都可以实现自己的 <code>crontab</code> 定时任务，只需使用这个用户身份执行 <code>crontab -e</code> 命令即可。当然，这个用户不能写入 <code>/etc/cron.deny</code> 文件。</p>
<p><code>crontab</code> 命令的基本格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># crontab [选项] [file]</span>
选项：
-u user	：用来设定某个用户的 <span class="token function">crontab</span> 服务，例如 <span class="token string">"-u demo"</span> 表示设备 demo  用户的 <span class="token function">crontab</span> 服务，此选项一般有 root 用户来运行
-e		：编辑某个用户的 <span class="token function">crontab</span> 文件内容。如果不指定用户，则表示编辑当前用户的 <span class="token function">crontab</span> 文件
-l		：显示某用户的 <span class="token function">crontab</span> 文件内容，如果不指定用户，则表示显示当前用户的 <span class="token function">crontab</span> 文件内容
-r		：从 /var/spool/cron 删除某用户的 <span class="token function">crontab</span> 文件，如果不指定用户，则默认删除当前用户的 <span class="token function">crontab</span> 文件
-i		：在删除用户的 <span class="token function">crontab</span> 文件时，给确认提示

注意：
这里的 <span class="token function">file</span> 指的是命令文件的名字，表示将 <span class="token function">file</span> 作为 <span class="token function">crontab</span> 的任务列表文件并载入 crontab，
若在命令行中未指定文件名，则此命令将接受标准输入（键盘）上键入的命令，并将它们键入 crontab。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>其实 <code>crontab</code> 定时任务非常简单，只需执行 <code>crontab -e</code> 命令，然后输入想要定时执行的任务即可。不过，当我们执行 <code>crontab -e</code> 命令时，打开的是一个空文件，而且操作方法和 <code>Vim</code> 是一致的。那么，个文件的格式才是我们真正需要学习的内容。文件格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ！<span class="token punctuation">]</span><span class="token comment"># crontab -e</span>
<span class="token comment">#进入 crontab 编辑界面。会打开Vim编辑你的任务，或者其他的编辑器工具，可以根据自己习惯选择编辑器</span>
* * * * * 执行的任务
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这个文件中是通过 5 个“<strong>*</strong>”来确定命令或任务的执行时间的，这 5 个“<strong>*</strong>”的具体含义如表5-1 所示。</p>
<p><strong>表5-1	<u>crontab 时间表示</u></strong></p>
<table>
<thead>
<tr>
<th>项目</th>
<th>含义</th>
<th>范围</th>
</tr>
</thead>
<tbody>
<tr>
<td>第一个&quot;*&quot;</td>
<td>一小时当中的第几分钟（minute）</td>
<td>0~59</td>
</tr>
<tr>
<td>第二个&quot;*&quot;</td>
<td>一天当中的第几小时（hour）</td>
<td>0~23</td>
</tr>
<tr>
<td>第三个&quot;*&quot;</td>
<td>一个月当中的第几天（day）</td>
<td>1~31</td>
</tr>
<tr>
<td>第四个&quot;*&quot;</td>
<td>一年当中的第几个月（month）</td>
<td>1~12</td>
</tr>
<tr>
<td>第五个&quot;*&quot;</td>
<td>一周当中的星期几（week）</td>
<td>0~7（0和7都代表星期日）</td>
</tr>
</tbody>
</table>
<p>在时间表示中，还有一些特殊符号需要学习，如表5-2 所示。</p>
<p><strong>表5-2	<u>时间特殊符号</u></strong></p>
<table>
<thead>
<tr>
<th>特殊符号</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>*（星号）</td>
<td>代表任何时间。<br />比如第一个&quot;*&quot;就代表一小时种每分钟都执行一次的意思。</td>
</tr>
<tr>
<td>,（逗号）</td>
<td>代表不连续的时间。<br />比如&quot;0 8,12,16 * * * 命令&quot;就代表在每天的 8 点 0 分、12 点 0 分、16 点 0 分都执行一次命令。</td>
</tr>
<tr>
<td>-（中杠）</td>
<td>代表连续的时间范围。<br />比如&quot;0 5 * * 1-6 命令&quot;，代表在周一到周六的凌晨 5 点 0 分执行命令。</td>
</tr>
<tr>
<td>*/n（正斜线）</td>
<td>代表每隔多久执行一次。<br />比如&quot;*/10 * * * * 命令&quot;，代表每隔 10 分钟就执行一次命令。</td>
</tr>
</tbody>
</table>
<p>当 <code>crontab -e</code> 编辑完成之后，一旦保存退出，那么这个定时任务实际就会写入 <code>/var/spool/cron/</code> 目录中，每个用户的定时任务用自己的用户名进行区分。而且 <code>crontab</code> 命令只要保存就会生效，只要 crond 服务是启动的。</p>
<div class="custom-container tip"><p class="custom-container-title">示例说明</p>
<p>知道了这 5 个时间字段的含义，我们多举几个时间的例子来熟悉一下时间字段，如下所示。</p>
<p>45 22 * * * 命令		：<u>在 22 点 45 分执行命令</u></p>
<p>0 17 * * 1 命令			：<u>在每周一的 17 点 0 分执行命令</u></p>
<p>0 5 1,15 * * 命令		：<u>在每月 1 日和 15 日的凌晨 5 点 0 分执行命令</u></p>
<p>40 4 * * 1-5命令		：<u>在每周一到周五的凌晨 4 点 40 分执行命令</u></p>
<p>*/10 4 * * * 命令		：<u>在每天的凌晨 4 点，每隔 10 分钟执行一次命令</u></p>
<p>0 0 1,15 * 1 命令		：<u>在每月 1 日和 15 日，每周一的 0 点 0 分都会执行命令</u></p>
<p><strong>注意：星期几和几日最好不要同时出现，因为它们定义的都是天，非常容易让管理员混淆</strong></p>
</div>
<p>现在我们已经对这 5 个时间字段非常熟悉了，可是在“执行的任务”字段中都可以写什么呢？既可以定时执行系统命令，也可以定时执行某个 Shell 脚本，这里举几个实际的例子。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#例 1： 让系统每隔 5 分钟就向 /tmp/test 文件中写入一行“11”，验证一下系统定时任务是否会执行。</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># crontab -e</span>
<span class="token comment">#进入编辑界面</span>
*/5 * * * * /bin/echo <span class="token string">"11"</span> <span class="token operator">>></span> /tmp/test
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>这个任务在时间工作中没有任何意义，但是可以很简单地验证我们的定时任务是否可以正常执行。如果觉得每隔 5 分钟太长，那就换成“*”，让它每分钟执行一次。而且和 <code>at</code> 命令一样，如果我们定时执行的是系统命令，那么最好使用绝对路径。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#例 2： 让系统在每周二的凌晨 5 点 05 分重启一次。</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># crontab -e</span>
<span class="token number">5</span> <span class="token number">5</span> * * <span class="token number">2</span> /sbin/shutdown -r now
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>如果服务器的负载压力比较大，则建议每周重启一次，让系统状态归零。比如绝大多数游戏服务器每周维护一次，维护时最主要的工作就是重启，让系统状态归零。这时可以让我们的服务器自动来定时执行。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#例 3： 在每月 1 日、10 日、15 日的凌晨 3 点 30 分都定时执行日志备份脚本 autobak.sh。</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># crontab -e</span>
<span class="token number">30</span> <span class="token number">3</span> <span class="token number">1,10</span>,15 * * /root/sh/autobak.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>这些定时任务保存之后，就可以在指定的时间执行了。我们可以使用命令来查看和删除定时任务，命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># crontab -l</span>
<span class="token comment">#查看root用户的crontab任务</span>
*/5 * * * * /bin/echo <span class="token string">"11"</span> <span class="token operator">>></span> /tmp/test
<span class="token number">5</span> <span class="token number">5</span> * * <span class="token number">2</span> /sbin/shutdown -r now
<span class="token number">30</span> <span class="token number">3</span> <span class="token number">1,10</span>,15 * * /root/sh/autobak.sh
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># crontab -r</span>
<span class="token comment">#删除root用户所有的定时任务。如果只想删除某个定时任务，则可以执行“crontab -e”命令进入</span>
<span class="token comment">#编辑模式手工删除</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># crontab -l</span>
no <span class="token function">crontab</span> <span class="token keyword">for</span> root
<span class="token comment">#删除后，再查询就没有root用户的定时任务了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="crontab-的注意事项" tabindex="-1"><a class="header-anchor" href="#crontab-的注意事项" aria-hidden="true">#</a> crontab 的注意事项</h4>
<p>在书写 <code>crontab</code> 定时任务时，需要注意以下几个事项：</p>
<ul>
<li>6 个选项都不能为空，必须填写。如果不确定，则使用“*”代表任意时间。</li>
<li><code>crontab</code> 定时任务的最小有效时间是分钟，最大有效时间是月。像 2018 年某时执行、3 点 30 分 30 秒这样的时间都不能被识别。</li>
<li>在定义时间时，日期和星期最好不要在一条定时任务中出现，因为它们都以天为单位，非常容易让管理员混淆。</li>
<li>在定时任务中，不管是直接写命令，还是在脚本中写命令，最好都使用绝对路径。有时使用相对路径的命令会报错。</li>
</ul>
<h4 id="系统的-crontab-设置" tabindex="-1"><a class="header-anchor" href="#系统的-crontab-设置" aria-hidden="true">#</a> 系统的 crontab 设置</h4>
<p><code>crontab -e</code> 是每个用户都可以执行的命令，也就是说，不同的用户身份可以执行自己的定时任务。但是有些定时任务需要系统执行，这时就需要编辑 <code>/etc/crontab</code> 这个配置文件了。</p>
<p>当然，并不是说写入 <code>/etc/crontab</code> 配置文件中的定时任务在执行时不需要用户身份，而是 <code>crontab -e</code> 命令在定义定时任务时，默认用户身份是当前登录用户。而在修改 <code>/etc/crontab</code> 配置文件时，定时任务的执行者身份是可以手工指定的。这样定时任务的执行会更加灵活，修改起来也更加方便。</p>
<p>那我们打开这个文件看看吧，如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/crontab</span>
<span class="token assign-left variable"><span class="token environment constant">SHELL</span></span><span class="token operator">=</span>/bin/bash
<span class="token comment">#标识使用哪种Shell</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/sbin：/bin：/usr/sbin：/usr/bin
<span class="token comment">#指定PATH环境变量。crontab使用自己的PATH，而不使用系统默认的PATH，所以在定时任务中出现的命令最好使用大写</span>
<span class="token assign-left variable">MAILTO</span><span class="token operator">=</span>root
<span class="token comment">#如果有报错输出，或命令结果有输出，则会向root发送信息</span>
<span class="token assign-left variable"><span class="token environment constant">HOME</span></span><span class="token operator">=</span>/
<span class="token comment">#标识主目录</span>
<span class="token comment"># For details see man 4 crontabs</span>
<span class="token comment">#提示大家可以去“man 4 crontabs”查看帮助</span>
<span class="token comment"># Example of job definition：</span>
<span class="token comment">#.——————————— minute (0 - 59)</span>
<span class="token comment"># |.———————— hour (0 - 23)</span>
<span class="token comment"># | |.——————— day of month (1 - 31)</span>
<span class="token comment"># | | |.———— month (1 - 12) OR jan，feb，mar，apr……</span>
<span class="token comment"># | | | | .———day of week(0-6)(Sunday=0 or 7)OR sun，mon，tue，wed，thu，fri，sat</span>
<span class="token comment"># | | | | |</span>
<span class="token comment"># * * * * * user-name command to be executed</span>
<span class="token comment">#分 时 日 月 周 执行者身份 命令</span>
<span class="token comment">#列出文件格式，并加入了注释</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>在 CentOS 6.x 中，<code>/etc/crontab</code> 文件也发生了变化。在 CentOS 5.x 中，这个文件的内容大概是这样子的：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#以下输出在CentOS 5.5中</span>
<span class="token punctuation">[</span>root@sc ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/crontab</span>
<span class="token assign-left variable"><span class="token environment constant">SHELL</span></span><span class="token operator">=</span>/bin/bash
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/sbin：/bin：/usr/sbin：/usr/bin
<span class="token assign-left variable">MAILTO</span><span class="token operator">=</span>root
<span class="token assign-left variable"><span class="token environment constant">HOME</span></span><span class="token operator">=</span>/
<span class="token comment"># run-parts</span>
01 * * * * root run-parts /etc/cron.hourly
02 <span class="token number">4</span> * * * root run-parts /etc/cron.daily
<span class="token number">22</span> <span class="token number">4</span> * * <span class="token number">0</span> root run-parts /etc/cron.weekly
<span class="token number">42</span> <span class="token number">4</span> <span class="token number">1</span> * * root run-parts /etc/cron.monthly
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>在 CentOS 5.x 中，<code>/etc/crontab</code> 文件会使用 run-parts 脚本执行  <code>/etc/cron.{daily，weekly，monthly}</code> 目录中的所有文件。这个 run-parts 其实是一个 Shell  脚本，保存在 <code>/usr/bin/run-parts</code>  中，它的作用就是把其后面跟随的目录中的所有可执行文件依次执行。也就是说，如果我们想让某个脚本在每天都执行一次，那么可以不用手工去写定时任务，而只需要给这个脚本赋予执行权限，并把它放入 <code>/etc/cron.daily/</code> 目录中，这样这个脚本就会在每天的凌晨 4 点 02 分执行了。</p>
<p>但是在 CentOS 6.x 中，<code>/etc/crontab</code> 文件中不再有相关的段落，那么 run-ptars 这种定时任务的执行方法是否不可用了呢？</p>
<p>我们看到 <code>/etc/crontab</code> 中有一句提示，让我们“man 4  crontabs”来查看帮助，那么我们就看看这个帮助吧！在这个帮助中，写明了“在旧版本的 crontab 配置文件中，通过 run-parts  脚本来调用 <code>cron.{daily，weekly，monthly}</code> 目录，定时执行这些目录中的脚本。在当前系统中，为了避免 cron 和  anacron 之间产生冲突，只要 anacron 已经安装，就使用 anacron 来执行这些目录中的脚本。具体可以查看 anacron(8) 的帮助”。对于 anacron 的用法，后面会介绍。</p>
<p>其实，对用户来讲，并不需要知道这个定时任务到底是由哪个程序调用的。我们需要知道的事情是如何使用系统的 <code>crontab</code> 设置。对此，新、老版本的 CentOS 没有区别，配置方法都有两种。</p>
<ul>
<li>
<p>第一种方法就是把需要定时执行的工作写成脚本程序，并赋予执行权限，然后直接把这个脚本复制到  <code>/etc/cron.{daily，weekly，monthly}</code> 目录中的任意一个。比如，我需要让某个脚本每周执行，就把这个脚本复制到  <code>/etc/cron.weekly/</code> 目录中。这样这个脚本就会每周执行一次，具体的执行时间要参考 anacron 的配置文件。</p>
</li>
<li>
<p>第二种方法就是修改 <code>/etc/crontab</code> 这个配置文件，加入自己的定时任务，不过需要注意指定脚本的执行者身份。例如：</p>
</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/crontab</span>
<span class="token punctuation">..</span>.省略部分输出<span class="token punctuation">..</span>.
* * * * * root run-parts /root/cron/
<span class="token comment">#让系统每分钟都执行一次/root/cron/目录中的脚本，脚本执行者是root用户</span>
<span class="token comment">#虽然在CentOS 6.x中不直接通过此配置文件调用/etc/cron.{daily，weekly，monthly}这些目录，但是run-parts脚本还是可以使用的。所以我完全可以参照CentOS 5.x的方法来写定时任务</span>
<span class="token comment">#使用run-parts脚本调用并执行/root/cron/目录中所有的可执行文件</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mkdir cron</span>
<span class="token comment">#建立/root/cron/目录</span>
<span class="token punctuation">[</span>root@localhost cron<span class="token punctuation">]</span><span class="token comment"># vi /root/cron/hello.sh</span>
<span class="token comment">#/bin/bash</span>
<span class="token builtin class-name">echo</span> <span class="token string">"hello"</span> <span class="token operator">>></span> /root/cron/hello.log
<span class="token comment">#在/root/cron/hello.log文件中写入“hello”</span>
<span class="token punctuation">[</span>root@localhost cron<span class="token punctuation">]</span><span class="token comment"># chmod 755 hello.sh</span>
<span class="token comment">#赋予执行权限</span>
<span class="token comment">#因为hello.sh脚本放入了/root/cron/目录中，所以每分钟执行一次。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>只要保存 <code>/etc/crontab</code> 文件，这个定时任务就可以执行了。当然要确定 crond 服务是运行的。</p>
<p>这两种方法都是可以使用的，具体看个人的习惯。不过，要想修改 <code>/etc/crontab</code> 文件，必须是 root 用户，普通用户不能修改，只能使用用户身份的 <code>crontab</code> 命令。</p>
<h3 id="anacron-命令-异步执行定时任务" tabindex="-1"><a class="header-anchor" href="#anacron-命令-异步执行定时任务" aria-hidden="true">#</a> anacron 命令：异步执行定时任务</h3>
<h4 id="anacron-的作用" tabindex="-1"><a class="header-anchor" href="#anacron-的作用" aria-hidden="true">#</a> anacron 的作用</h4>
<p>anacron 是用来做什么的呢？设想这样一个场景，Linux 服务器会在周末关机两天，但是设定的定时任务大多在周日早上进行，但在这个时间点，服务器又处于关机状态，导致系统很多定时任务无法运行。</p>
<p>又比如，我们需要在凌晨 5 点 05 分执行系统的日志备份，但 Linux 服务器不是 24  小时开机的，在晚上需要关机，白天上班之后才会再次开机，在这个定时任务的执行时间我们的服务器刚好没有开机，那么这个定时任务就不会执行了。anacron 就是用来解决这个问题的。</p>
<p>anacron 会以 天、周、月作为检测周期，判断是否有定时任务在关机之后没有执行。如果有这样的任务，那么 anacron 会在特定的时间重新执行这些定时任务。</p>
<p>那么，anacron 是如何判断这些定时任务已经超过执行时间的呢？这就需要借助 anacron 读取的时间记录文件。anacron  会分析现在的时间与时间记录文件所记载的上次执行 anacron 的时间，将两者进行比较，如果两个时间的差值超过 anacron  的指定时间差值（一般是 1 天、7 天和一个月），就说明有定时任务没有执行，这时 anacron  会介入并执行这个漏掉的定时任务，从而保证在关机时没有执行的定时任务不会被漏掉。</p>
<div class="custom-container tip"><p class="custom-container-title">补充</p>
<p>在 CentOS 6.x 中，使用 cronie-anacron 软件包取代了 vixie-cron 软件包。而且在原先 CentOS 版本的  <code>/etc/cron.{daily，weekly，monthly}</code> 目录中的定时任务会同时被 cron 和 anacron  调用，这样非常容易出现重复执行同一个定时任务的错误。因此，在 CentOS 6.x  中，<code>/etc/cron.{daily，weekly，monthly}</code> 目录中的定时任务只会被 anacron 调用，从而保证这些定时任务只会在每天、每周或每月定时执行一次，而不会重复执行。</p>
<p>不仅如此，在 CentOS 6.x 中，anacron 还有一个变化，那就是 anacron 不再是单独的服务，而变成了系统命令。也就是说，我们不再使用 <code>service anacron restart</code> 命令来管理 anacron 服务了，而需要使用 <code>anacron</code> 命令来管理 anacron 工作。</p>
</div>
<h4 id="anacron-命令" tabindex="-1"><a class="header-anchor" href="#anacron-命令" aria-hidden="true">#</a> anacron 命令</h4>
<p><code>anacron</code> 命令的基本格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># anacron [选项] [工作名]</span>

选项：
	-f：强制执行相关工作，忽略时间戳
	-u：更新 /var/spool/anacron/cron.<span class="token punctuation">{</span>daily，weekly，monthly<span class="token punctuation">}</span> 文件中的时间戳为当前日期，但不执行任何工作	
	-s：依据 /etc/anacrontab 文件中设定的延迟时间顺序执行工作，在前一个工作未完成前，不会开始下一个工作
	-n：立即执行 /etc/anacrontab 中所有的工作，忽略所有的延迟时间
	-q：禁止将信息输出到标准错误，常和 -d 选项合用
	
工作名：	
	这里的工作名指的是依据 /etc/anacrontab 文件中定义的工作名
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>在当前的 Linux 中，其实不需要执行任何 <code>anacron</code> 命令，只需要配置好 <code>/etc/anacrontab</code> 文件，系统就会依赖这个文件中的设定来通过 anacron 执行定时任务了。那么，关键就是 <code>/etc/anacrontab</code> 文件的内容了。这个文件的内容如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/anacrontab</span>
<span class="token comment"># /etc/anacrontab: configuration file for anacron</span>
<span class="token comment"># See anacron(8) and anacrontab(5) for details.</span>
<span class="token assign-left variable"><span class="token environment constant">SHELL</span></span><span class="token operator">=</span>/bin/sh
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/sbin:/bin:/usr/sbin:/usr/bin
<span class="token assign-left variable">MAILTO</span><span class="token operator">=</span>root
<span class="token comment">#前面的内容和/etc/crontab类似</span>
<span class="token comment">#the maximal random delay added to the base delay of the jobs</span>
<span class="token assign-left variable">RANDOM_DELAY</span><span class="token operator">=</span><span class="token number">45</span>
<span class="token comment">#最大随机廷迟</span>
<span class="token comment">#the jobs will be started during the following hours only</span>
<span class="token assign-left variable">START_H0URS_RANGE</span><span class="token operator">=</span><span class="token number">3</span>-22
<span class="token comment">#anacron的执行时间范围是3:00~22:00</span>
<span class="token comment">#period in days		delay in minutes	job-identifier		command</span>
<span class="token number">1</span>					<span class="token number">5</span>					cron.daily			<span class="token function">nice</span> run-parts /etc/cron.daily
<span class="token comment">#每天开机 5 分钟后就检查 /etc/cron.daily 目录内的文件是否被执行，如果今天没有被执行，那就执行</span>
<span class="token number">7</span>					<span class="token number">25</span>					cron.weekly			<span class="token function">nice</span> run-parts /etc/cron.weekly
<span class="token comment">#每隔 7 天开机后 25 分钟检查 /etc/cron.weekly 目录内的文件是否被执行，如果一周内没有被执行，就会执行</span>
@monthly			<span class="token number">45</span>					cron.monthly		<span class="token function">nice</span> run-parts /etc/cron.monthly
<span class="token comment">#每隔一个月开机后 45 分钟检查 /etc/cron.monthly 目录内的文件是否被执行，如果一个月内没有被执行，那就执行 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>在这个文件中，“RANDOM_DELAY”定义的是最大随机延迟，也就是说，cron.daily 工作如果超过 1 天没有执行，则并不会马上执行，而是先延迟强制延迟时间，再延迟随机延迟时间，之后再执行命令；“START_HOURS_RANGE”的是定义  anacron 执行时间范围，anacron 只会在这个时间范围内执行。</p>
<p>我们用 cron.daily 工作来说明一下 <code>/etc/anacrontab</code> 的执行过程:</p>
<ol>
<li>读取 <code>/var/spool/anacron/cron.daily</code> 文件中 anacron 上一次执行的时间。</li>
<li>和当前时间比较，如果两个时间的差值超过 1 天，就执行 cron.daily 工作。</li>
<li>只能在 03:00-22:00 执行这个工作。</li>
<li>执行工作时强制延迟时间为 5 分钟，再随机延迟 0～45 分钟。</li>
<li>使用 <code>nice</code> 命令指定默认优先级，使用 run-parts 脚本执行 <code>/etc/cron.daily</code> 目录中所有的可执行文件。</li>
</ol>
<p>大家会发现，<code>/etc/cron.{daily，weekly，monthly}</code> 目录中的脚本在当前的 Linux 中是被 anacron 调用的，不再依靠 cron 服务。不过，anacron 不用设置多余的配置，我们只需要把需要定时执行的脚本放入 <code>/etc/cron.{daily，weekly，monthly}</code> 目录中，就会每天、每周或每月执行，而且也不再需要启动 anacron  服务了。如果需要进行修改，则只需修改 <code>/etc/anacrontab</code> 配置文件即可。</p>
<p>比如，我更加习惯让定时任务在凌晨 03:00-05:00 执行，就可以进行如下修改：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span> <span class="token comment"># vi /etc/anacrontab</span>
<span class="token comment"># /etc/anacrontab: configuration file for anacron</span>
<span class="token comment"># See anacron(8) and anacrontab(5) for details.</span>
<span class="token assign-left variable"><span class="token environment constant">SHELL</span></span><span class="token operator">=</span>/bin/sh
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/sbin:/bin:/usr/sbin:/usr/bin
<span class="token assign-left variable">MAILTO</span><span class="token operator">=</span>root
<span class="token comment"># the maximal random delay added to the base delay of the jobs</span>
<span class="token assign-left variable">RANDOM_DELAY</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token comment">#把最大随机廷迟改为0分钟,不再随机廷迟</span>
<span class="token comment"># the jobs will be started during the following hours only</span>
<span class="token assign-left variable">START_HOORS_RANGE</span><span class="token operator">=</span><span class="token number">3</span>-5
<span class="token comment">#执行时间范围为03:00—05:00</span>
<span class="token comment">#period in days		delay in minutes	job-identifier		command</span>
<span class="token number">1</span>					<span class="token number">0</span>					cron.daily			<span class="token function">nice</span> run-parts /etc/cron.daily
<span class="token number">7</span>					<span class="token number">0</span>					cron.weekly			<span class="token function">nice</span> run-parts /etc/cron.weekly
@monthly			<span class="token number">0</span>					cron.monthly		<span class="token function">nice</span> run-parts /etc/cron.monthly
<span class="token comment">#把强制延迟也改为0分钟,不再强制廷迟</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>这样，所有放入 <code>/etc/cron.{daily，weekly，monthly}</code> 目录中的脚本都会在指定时间执行，而且也不怕服务器万一关机的情况了。</p>
<h2 id="系统资源查看" tabindex="-1"><a class="header-anchor" href="#系统资源查看" aria-hidden="true">#</a> 系统资源查看</h2>
<p>前面学习了 <code>ps</code>、<code>top</code>、<code>pstree</code> 命令，它们除了可以查看系统进程之外，还可以帮助我们判断系统的健康状态，尤其时 <code>top</code> 命令可以看到的信息非常多，也非常重要。Linux 系统除了这几个命令之外，还有一些重要的系统资源查看命令，下面我们详细学习一下。</p>
<h3 id="vmstat-命令-监控系统资源" tabindex="-1"><a class="header-anchor" href="#vmstat-命令-监控系统资源" aria-hidden="true">#</a> vmstat 命令：监控系统资源</h3>
<p><code>vmstat</code> 命令，可用来监控 CPU 使用、进程状态、内存使用、虚拟内存使用、硬盘输入/输出状态等信息。</p>
<p>英文原意： Report virtual memory statistics</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vmstat [选项]  [刷新延时 刷新次数]</span>
选项：
	-a		：显示活跃和非活跃内存
	-f		：显示从系统启动至今的fork数量 
	-d		：显示磁盘相关统计信息
	-S 单位	：使用指定单位显示。参数有 k 、K 、m 、M，默认 K
	-p 分区设备名：显示指定磁盘分区统计信息                          
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost proc<span class="token punctuation">]</span><span class="token comment"># vmstat 1 3</span>
<span class="token comment">#使用vmstat检测，每隔1秒刷新一次，共刷新3次</span>
procs-------------memory-------------swap-----io----system------cpu--------
r b		swpd <span class="token function">free</span>   buff  cache		si so	bi bo	<span class="token keyword">in</span> cs	us sy <span class="token function">id</span>  wa st
<span class="token number">0</span> <span class="token number">0</span>		 <span class="token number">0</span>	 <span class="token number">407376</span> <span class="token number">55772</span> <span class="token number">84644</span>		 <span class="token number">0</span>  <span class="token number">0</span> 	 <span class="token number">5</span>  <span class="token number">2</span>	 <span class="token number">9</span> <span class="token number">10</span>	 <span class="token number">0</span> 	<span class="token number">0</span> <span class="token number">100</span>  <span class="token number">0</span>  <span class="token number">0</span>
<span class="token number">0</span> <span class="token number">0</span>		 <span class="token number">0</span>	 <span class="token number">407368</span> <span class="token number">55772</span> <span class="token number">84644</span>		 <span class="token number">0</span>  <span class="token number">0</span> 	 <span class="token number">0</span>  <span class="token number">0</span>	<span class="token number">12</span> <span class="token number">10</span>	 <span class="token number">0</span> 	<span class="token number">0</span> <span class="token number">100</span>  <span class="token number">0</span>  <span class="token number">0</span>
<span class="token number">0</span> <span class="token number">0</span>		 <span class="token number">0</span>	 <span class="token number">407368</span> <span class="token number">55772</span> <span class="token number">84644</span>		 <span class="token number">0</span>  <span class="token number">0</span> 	 <span class="token number">0</span>  <span class="token number">0</span>	<span class="token number">15</span> <span class="token number">13</span>	 <span class="token number">0</span> 	<span class="token number">0</span> <span class="token number">100</span>  <span class="token number">0</span>  <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>该命令输出信息中，各个字段以及含义如表5-3 所示。</p>
<p><strong>表5-3	<u>vmstat 命令输出字段及含义</u></strong></p>
<table>
<thead>
<tr>
<th>字段</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>procs</td>
<td>进程信息字段：<br />-r：等待运行的进程数，数量越大，系统越繁忙。<br />-b：不可被唤醒的进程数量，数量越大，系统越繁忙。</td>
</tr>
<tr>
<td>memory</td>
<td>内存信息字段：<br />-swpd：虚拟内存的使用情况，单位为 KB。<br />-free：空闲的内存容量，单位为 KB。<br />-buff：缓冲的内存容量，单位为 KB。<br />-cache：缓存的内存容量，单位为 KB。</td>
</tr>
<tr>
<td>swap</td>
<td>交换分区信息字段：<br /> -si：从磁盘中交换到内存中数据的数量，单位为 KB。<br />-so：从内存中交换到磁盘中数据的数量，单位为 KB。<br />这两个数越大，表明数据需要经常在磁盘和内存之间进行交换，系统性能越差。</td>
</tr>
<tr>
<td>io</td>
<td>磁盘读/写信息字段： <br />-bi：从块设备中读入的数据的总量，单位是块。<br />-bo：写到块设备的数据的总量，单位是块。<br />这两个数越大，代表系统的 I/O 越繁忙。</td>
</tr>
<tr>
<td>system</td>
<td>系统信息字段：<br /> -in：每秒被中断的进程次数。<br />-cs：每秒进行的事件切换次数。<br />这两个数越大，代表系统与接口设备的通信越繁忙。</td>
</tr>
<tr>
<td>cpu</td>
<td>CPU信息字段：<br />-us：非内核进程消耗 CPU 运算时间的百分比。<br />-sy：内核进程消耗 CPU 运算时间的百分比。<br />-id：空闲 CPU 的百分比。<br />-wa：等待 I/O 所消耗的 CPU 百分比。<br />-st：被虚拟机所盗用的 CPU 百分比。</td>
</tr>
</tbody>
</table>
<p>本机是一台测试用的虚拟机，并没有多少资源被占用，所以资源占比都比较低。如果服务器上的资源占用率比较高，那么使用 <code>vmstat</code> 命令查看到的参数值就会比较大，我们就需要手工进行干预。如果是非正常进程占用了系统资源，则需要判断这些进程是如何产生的，不能一杀了之；如果是正常进程占用了系统资源，则说明服务器需要升级了。</p>
<h3 id="dmesg-命令-显示开机信息" tabindex="-1"><a class="header-anchor" href="#dmesg-命令-显示开机信息" aria-hidden="true">#</a> dmesg 命令：显示开机信息</h3>
<p>在系统启动过程中，内核还会进行一次系统检测（第一次是 BIOS 进行检测），但是检测的过程不是没有显示在屏幕上，就是会快速的在屏幕上一闪而过那么，如果开机时来不及查看相关信息，我们是否可以在开机后查看呢？</p>
<p>答案是肯定的，使用 <code>dmesg</code> 命令就可以。无论是系统启动过程中，还是系统运行过程中，只要是内核产生的信息，都会被存储在系统缓冲区中，如果开机时来不及查看相关信息，可以使用 <code>dmesg</code> 命令将信息调出，此命令常用于查看系统的硬件信息。</p>
<p>除此之外，开机信息也可以通过 <code>/var/log/</code> 目录中的 <code>dmesg</code> 文件进行查看。</p>
<p><code>dmesg</code> 命令的用法很简单，基本格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># dmesg</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># dmesg | grep CPU</span>
<span class="token comment">#查看CPU的信息</span>
Transmeta TransmetaCPU
SMP：Allowing <span class="token number">1</span> CPUs， <span class="token number">0</span> hotplug CPUs
NR_CPUS：32 nr_cpumask_bits：32 nr_cpu_ids：1 nr_node_ids：1
PERCPU：Embedded <span class="token number">14</span> pages/cpu @c1a00000 s35928 r0 d21416 u2097152
Initializing CPU<span class="token comment">#0</span>
CPU：Physical Processor ID：0
mce：CPU supports <span class="token number">0</span> MCE banks
CPU0：Intel<span class="token punctuation">(</span>R<span class="token punctuation">)</span> Core<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> i7-3630QM CPU @ <span class="token number">2</span>.40GHz stepping 09
Brought up <span class="token number">1</span> CPUs
microcode：CPU0 <span class="token assign-left variable">sig</span><span class="token operator">=</span>0x306a9， <span class="token assign-left variable">pf</span><span class="token operator">=</span>0x1， <span class="token assign-left variable">revision</span><span class="token operator">=</span>0x12

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># dmesg | grep eth0</span>
<span class="token comment">#查看第一块网卡的信息</span>
eth0：registered as PCnet/PCI II 79C970A
eth0：link up
eth0：no IPv6 routers present
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="free-命令-查看内存使用状态" tabindex="-1"><a class="header-anchor" href="#free-命令-查看内存使用状态" aria-hidden="true">#</a> free 命令：查看内存使用状态</h3>
<p><code>free</code> 命令用来显示系统内存状态，包括系统物理内存、虚拟内存（swap 交换分区）、共享内存和系统缓存的使用情况，其输出和 <code>top</code> 命令的内存部分非常相似。</p>
<p>free 命令的基本格式如下：</p>
<div class="language-SHELL ext-SHELL line-numbers-mode"><pre v-pre class="language-SHELL"><code>[root@localhost ~]# free [选项]
选项：
	-b			：以 Byte（字节）为单位，显示内存使用情况
	-k			：以 KB 为单位，显示内存使用情况，此选项是 free 命令的默认选项
	-m			：以 MB 为单位，显示内存使用情况
	-g			：以 GB 为单位，显示内存使用情况
	-t			：在输出的最终结果中，输出内存和 swap 分区的总量
	-o			：不显示系统缓冲区这一列
	-s 间隔秒数	：根据指定的间隔时间，持续显示内存使用情况
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>例如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[root@localhost ~]# free -m
 			total	used	free	shared	buffers	cached
 Mem:		725		666		59		0		132		287
 -/+ buffers/cache: 245		479
 Swap:		996		0		996
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote>
<p>第一行显示的是各个列的列表头信息，各自的含义如下所示：</p>
<blockquote>
<p>total 是总内存数；</p>
<p>used 是已经使用的内存数；</p>
<p>free 是空闲的内存数；</p>
<p>shared 是多个进程共享的内存总数；</p>
<p>buffers 是缓冲内存数；</p>
<p>cached 是缓存内存数。</p>
</blockquote>
</blockquote>
<blockquote>
<p>Mem 一行指的是内存的使用情况；</p>
</blockquote>
<blockquote>
<p>-/buffers/cache 的内存数，相当于第一行的  used-buffers-cached；</p>
<p>+/buffers/cache 的内存数，相当于第一行的  free+buffers+cached；</p>
</blockquote>
<blockquote>
<p>Swap 一行指的就是 swap 分区的使用情况。</p>
</blockquote>
<p>可以看到，系统的物理内存为 725 MB，已经使用了 666 MB，空闲 59 MB。而 swap 分区总大小为 996 MB，目前尚未使用。</p>
<h3 id="proc-cpuinfo-查看-cpu-信息" tabindex="-1"><a class="header-anchor" href="#proc-cpuinfo-查看-cpu-信息" aria-hidden="true">#</a> /proc/cpuinfo：查看 CPU 信息</h3>
<p>CPU 的主要信息保存在 /proc/cpuinfo 这个文件中，我们只要查看这个文件，就可以知道 CPU 的相关信息。命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/cpuinfo</span>
processor		<span class="token builtin class-name">:</span> <span class="token number">2</span>												<span class="token operator">&lt;</span>---逻辑CPU编号
vendor_id		<span class="token builtin class-name">:</span> GenuineIntel									<span class="token operator">&lt;</span>---CPU制造厂商
cpu family		<span class="token builtin class-name">:</span> <span class="token number">6</span>												<span class="token operator">&lt;</span>---产品的系列代号
model			<span class="token builtin class-name">:</span> <span class="token number">142</span>											<span class="token operator">&lt;</span>---CPU的系列代号
model name		<span class="token builtin class-name">:</span> Intel<span class="token punctuation">(</span>R<span class="token punctuation">)</span> Core<span class="token punctuation">(</span>TM<span class="token punctuation">)</span> i5-7300U CPU @ <span class="token number">2</span>.60GHz		<span class="token operator">&lt;</span>---CPU系列的名字，编号，频率
stepping		<span class="token builtin class-name">:</span> <span class="token number">9</span>												<span class="token operator">&lt;</span>---更新版本
microcode		<span class="token builtin class-name">:</span> 0xde
cpu MHz			<span class="token builtin class-name">:</span> <span class="token number">897.143</span>										<span class="token operator">&lt;</span>---实际主频
cache size		<span class="token builtin class-name">:</span> <span class="token number">3072</span> KB										<span class="token operator">&lt;</span>---二级缓存
physical <span class="token function">id</span>		<span class="token builtin class-name">:</span> <span class="token number">0</span>
siblings		<span class="token builtin class-name">:</span> <span class="token number">4</span>
core <span class="token function">id</span>			<span class="token builtin class-name">:</span> <span class="token number">0</span>
cpu cores		<span class="token builtin class-name">:</span> <span class="token number">2</span>
apicid			<span class="token builtin class-name">:</span> <span class="token number">1</span>
initial apicid	<span class="token builtin class-name">:</span> <span class="token number">1</span>
fpu				<span class="token builtin class-name">:</span> <span class="token function">yes</span>
fpu_exception	<span class="token builtin class-name">:</span> <span class="token function">yes</span>
cpuid level		<span class="token builtin class-name">:</span> <span class="token number">22</span>
wp				<span class="token builtin class-name">:</span> <span class="token function">yes</span>
flags			<span class="token builtin class-name">:</span> fpu vme de pse tsc msr pae mce cx8 apic sep mtrr pge mca cmov pat pse36 clflush dts acpi mmx fxsr sse sse2 ss ht tm pbe syscall nx pdpe1gb rdtscp lm constant_tsc art arch_perfmon pebs bts rep_good nopl xtopology nonstop_tsc aperfmperf eagerfpu pni pclmulqdq dtes64 monitor ds_cpl vmx smx est tm2 ssse3 sdbg fma cx16 xtpr pdcm pcid sse4_1 sse4_2 x2apic movbe popcnt tsc_deadline_timer aes xsave avx f16c rdrand lahf_lm abm 3dnowprefetch epb invpcid_single intel_pt ssbd ibrs ibpb stibp tpr_shadow vnmi flexpriority ept vpid fsgsbase tsc_adjust bmi1 hle avx2 smep bmi2 erms invpcid rtm mpx rdseed adx smap clflushopt xsaveopt xsavec xgetbv1 dtherm ida arat pln pts hwp hwp_notify hwp_act_window hwp_epp md_clear spec_ctrl intel_stibp flush_l1d
<span class="token comment">#CPU的功能标识</span>
bogomips		<span class="token builtin class-name">:</span> <span class="token number">5424.00</span>
clflush size	<span class="token builtin class-name">:</span> <span class="token number">64</span>
cache_alignment	<span class="token builtin class-name">:</span> <span class="token number">64</span>
address sizes	<span class="token builtin class-name">:</span> <span class="token number">39</span> bits physical, <span class="token number">48</span> bits virtual
power management:
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="w-和-who-命令-查看本机登录用户信息" tabindex="-1"><a class="header-anchor" href="#w-和-who-命令-查看本机登录用户信息" aria-hidden="true">#</a> w 和 who 命令：查看本机登录用户信息</h3>
<p>Linux 中，使用 <code>w</code> 或 <code>who</code> 命令都可以查看服务器上目前已登录的用户信息，两者的区别在于，<code>w</code> 命令除了能知道目前已登陆的用户信息，还可以知道每个用户执行任务的情况。</p>
<h4 id="w-命令" tabindex="-1"><a class="header-anchor" href="#w-命令" aria-hidden="true">#</a> w 命令</h4>
<p>首先，介绍一下 <code>w</code> 命令的使用，<code>w</code> 命令的基本格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># w [选项] [用户名]</span>
选项：
	-h：不显示输出信息的标题
	-l：用长格式输出
	-s：用短格式输出，不显示登陆时间，JCPU 和 PCPU 时间
	-V：显示版本信息

如果 w 命令后跟 <span class="token punctuation">[</span>用户名<span class="token punctuation">]</span>，则表示只显示此用户的信息。

<span class="token comment">#例 1： 显示当前用户登陆信息。</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># w</span>
<span class="token number">13</span>:13:56 up <span class="token number">13</span>:00, <span class="token number">1</span> user, load average: <span class="token number">0.08</span>, <span class="token number">0.02</span>, <span class="token number">0.01</span>
<span class="token environment constant">USER</span>	TTY		FROM			LOGIN@	IDLE	JCPU	PCPU	WHAT
root	tty1	-				<span class="token number">11</span>:04	<span class="token number">0</span>.00s	<span class="token number">0</span>.36s	<span class="token number">0</span>.00s	-bash
root	pts/0	<span class="token number">192.168</span>.0.108	<span class="token number">13</span>:15	<span class="token number">0</span>.00s	<span class="token number">0</span>.06s	<span class="token number">0</span>.02s 	w
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>上面的输出信息中，第一行其实和 <code>top</code> 命令的第一行非常类似，主要显示了当前的系统时间、系统从启动至今已运行的时间、登陆到系统中的用户数和系统平均负载。</p>
<p>平均负载（load average）指的是在 1 分钟、5 分钟、15 分钟内系统的负载状况。</p>
<p>从第二行开始，显示的是当前所有登陆系统的用户信息，第二行是用户信息的各列标题，从第三行开始每行代表一个用户。这些标题的含义如表5-4 所示。</p>
<p><strong>表5-4	<u>w 命令输出信息各列标题及含义</u></strong></p>
<table>
<thead>
<tr>
<th>标题</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>USER</td>
<td>登录到系统的用户。</td>
</tr>
<tr>
<td>TTY</td>
<td>登录终端。</td>
</tr>
<tr>
<td>FROM</td>
<td>表示用户从哪里登陆进来，一般显示远程登陆主机的 IP 地址或者主机名。</td>
</tr>
<tr>
<td>LOGIN@</td>
<td>用户登陆的日期和时间。</td>
</tr>
<tr>
<td>IDLE</td>
<td>表示某个程序上次从终端开始执行到现在所持续的时间。</td>
</tr>
<tr>
<td>JCPU</td>
<td>和该终端连接的所有进程占用的 CPU 运算时间。这个时间里并不包括过去的后台作业时间，但是包括当前正在运行的后台作业所占用的时间。</td>
</tr>
<tr>
<td>PCPU</td>
<td>当前进程所占用的 CPU 运算时间。</td>
</tr>
<tr>
<td>WHAT</td>
<td>当前用户正在执行的进程名称和选项，换句话说，就是表示用户当前执行的是什么命令。</td>
</tr>
</tbody>
</table>
<p>从 <code>w</code> 命令的输出中已知，Linux 服务器上已经登录了两个 root 用户，一个是从本地终端1 登录的（tty1），另一个是从远程终端  登录的（pts/0），登录的来源 IP 是 192.168.0.108。</p>
<h4 id="who-命令" tabindex="-1"><a class="header-anchor" href="#who-命令" aria-hidden="true">#</a> who 命令</h4>
<p>相比较 <code>w</code> 命令，<code>who</code> 命令只能显示当前登陆的用户信心，但无法知晓每个用户正在执行的命令。 who 命令的基本格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># who [选项] [file]</span>
选项：
	-a		：列出所有信息，相当于所有选项
	-b		：列出系统最近启动的时间日期
	-l		：列出所有可登陆的终端信息
	-m		：仅列出关于当前终端的信息，“who -m” 命令等同于 “who am i”
	-q		：列出在本地系统上的用户和用户数的清单
	-r		：显示当前系统的运行级别
	-s		：仅显示名称、线路和时间字段信息，这是 <span class="token function">who</span> 命令的默认选项
	-u		：显示当前每个用户的用户名、登陆终端、登陆时间、线路活动和进程标识
	-T 或 -w：显示 <span class="token function">tty</span> 终端的状态，“+”表示对任何人可写，“-”表示仅对 root 用户或所有者可写，“？”表示遇到线路故障
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>需要说明的是，<code>who</code> 命令默认是通过 <code>/var/run/utmp</code> 文件来获取登陆用户信息，但如果通过 file 指定另一个文件，则 <code>who</code> 命令将不再默认读取 <code>/var/run/utmp</code> 文件，而是读取该指定文件来获取信息。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#例 2： 显示系统最新启动日期，以及每个用户的登陆详情、终端状态。</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># who				&lt;--等同于 who -s</span>
root	tty1	<span class="token number">2013</span>-06-07 09：53
root	pts/0	<span class="token number">2013</span>-06-07 09：53 <span class="token punctuation">(</span><span class="token number">192.168</span>.0.108<span class="token punctuation">)</span>
<span class="token comment">#用户名 登录终端  登录时间（登录来源IP）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="last-和-lastlog-命令-查看过去登陆的用户信息" tabindex="-1"><a class="header-anchor" href="#last-和-lastlog-命令-查看过去登陆的用户信息" aria-hidden="true">#</a> last 和 lastlog 命令：查看过去登陆的用户信息</h3>
<p>前面，我们已经学了使用 <code>w</code> 或 <code>who</code> 命令查看当前登陆系统的用户信息，但如果原先登录的用户现在已经退出登录，那么是否还能查看呢？当然可以，这就需要使用 <code>last</code> 和 <code>lastlog</code> 命令。</p>
<p><code>last</code> 命令可以查看当前和过去登陆系统用户的相关信息；<code>lastlog</code> 命令可以查看到每个系统用户最近一次登陆系统的时间。</p>
<h4 id="last-命令" tabindex="-1"><a class="header-anchor" href="#last-命令" aria-hidden="true">#</a> last 命令</h4>
<p>我们先来看看 <code>last</code> 命令，此命令的基本格式如下所示：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># last [选项]</span>
选项：
	-a			：把从何处登陆系统的主机名或 IP 地址显示在最后一行
	-R			：不显示登陆系统的主机名或 IP 地址
	-x			：显示系统关机、重新开机以及执行等级的改变等信息
	-n 显示列数	：设置列出信息的显示行数
	-d			：将显示的 IP 地址转换成主机名称
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>在执行 last 命令时，它默认会读取 <code>/var/log/wtmp</code> 日志文件，这是一个二进制文件，不能直接用 vi 编辑，只能通过 <code>last</code> 命令调用。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#例 1： 查询当前和过去登录的用户信息。</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># last</span>
root pts/0 <span class="token number">192.168</span>.0.108 Fri Jun <span class="token number">7</span> 09：53 still logged <span class="token keyword">in</span>
root tty1 Fri Jun <span class="token number">7</span> 09：53 still logged <span class="token keyword">in</span>
root pts/0 <span class="token number">192.168</span>.0.101 Fri Jun <span class="token number">7</span> 06：53 - 09：52 <span class="token punctuation">(</span>02：59<span class="token punctuation">)</span>
root pts/1 <span class="token number">192.168</span>.0.103 Fri Jun <span class="token number">7</span> 04：12 - 04：30 <span class="token punctuation">(</span>00：18<span class="token punctuation">)</span>
<span class="token comment">#用户名 登录终端 登录IP 登录时间 - 退出时间（在线时间）</span>
<span class="token function">reboot</span> system boot <span class="token number">2.6</span>.32-279.el6.i Thu Jun <span class="token number">6</span> <span class="token number">23</span>：53 - 00：03 <span class="token punctuation">(</span>00：09<span class="token punctuation">)</span>
<span class="token comment">#还能看到系统的重启时间</span>
<span class="token punctuation">..</span>.省略部分输出<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="lastlog-命令" tabindex="-1"><a class="header-anchor" href="#lastlog-命令" aria-hidden="true">#</a> lastlog 命令</h4>
<p>再来看看 <code>lastlog</code> 命令，此命令可以查看登陆过当前系统用户的最近一次登陆时间，比如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># lastlog</span>
<span class="token comment">#用户名    端口  来自        最后登陆时间</span>
Username	Port	From			Latest
root		pts/1	<span class="token number">192.168</span>.1.100	Wed Mar <span class="token number">4</span> <span class="token number">11</span>:04:22 +0800 <span class="token number">2009</span>
bin									**Never logged in**
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">(</span>中间省略<span class="token punctuation">)</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
vbird1		pts/2	<span class="token number">192.168</span>.1.100	Wed Mar <span class="token number">4</span> <span class="token number">13</span>:15:56 +0800 <span class="token number">2009</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">(</span>以下省略<span class="token punctuation">)</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>lastlog</code> 命令默认是去读取 <code>/var/log/lastlog</code> 日志文件的，这个文件同样是二进制文件，不能直接用 vi 编辑，需要使用 <code>lastlog</code> 命令调用。</p>
<h3 id="uptime-命令-显示系统时间和平均负载" tabindex="-1"><a class="header-anchor" href="#uptime-命令-显示系统时间和平均负载" aria-hidden="true">#</a> uptime 命令：显示系统时间和平均负载</h3>
<p><code>uptime</code> 命令的作用就是显示系统的启动时间和平均负载，也就是 <code>top</code> 命令的第一行。其实 <code>w</code> 命令也能看到这行数据，具体愿意使用哪个命令看个人习惯。</p>
<p>命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># uptime</span>
<span class="token number">10</span>:56:30 up <span class="token number">10</span>:52, <span class="token number">2</span> users, load average: <span class="token number">0.00</span>, <span class="token number">0.00</span>, <span class="token number">0.00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="uname命令-查看系统与内核的相关信息" tabindex="-1"><a class="header-anchor" href="#uname命令-查看系统与内核的相关信息" aria-hidden="true">#</a> uname命令：查看系统与内核的相关信息</h3>
<p>可以使用 <code>uname</code> 命令查看系统与内核的相关信息，命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@locaihost ~<span class="token punctuation">]</span><span class="token comment"># uname [选项]</span>
选项：
	-a：查看系統所有相关信息
	-r：查看内核版本
	-s：查看内核名称

<span class="token comment">#例如：</span>
<span class="token punctuation">[</span>root@localhost -<span class="token punctuation">]</span><span class="token comment"># uname -a</span>
Linux localhost.localdomain <span class="token number">2.6</span>.32-279.e16.i686 <span class="token comment">#1 SMP Fri Jun 22 10:59:55 UTC 2012 i686 i686 i386 GNU/Linux </span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># uname -r</span>
<span class="token number">2.6</span>.32-279.e16.i686
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">系统详细信息</p>
<p>如果我们想要判断当前系统的位数，则可以通过 <code>file</code> 命令来判断系统文件（主要是系统命令）的位数，进而推断系统的位数。命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># file /bin/ls</span>
/bin/ls: ELF <span class="token number">64</span>-bit LSB executable, x86-64, version <span class="token number">1</span> <span class="token punctuation">(</span>SYSV<span class="token punctuation">)</span>, dynamically linked <span class="token punctuation">(</span>uses shared libs<span class="token punctuation">)</span>, <span class="token keyword">for</span> GNU/Linux <span class="token number">2.6</span>.32, BuildID<span class="token punctuation">[</span>sha1<span class="token punctuation">]</span><span class="token operator">=</span>aaf05615b6c91d3cbb076af81aeff531c5d7dfd9, stripped
<span class="token comment">#很明显，当前系统是 64 位的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>如果我们想要查询当前 Linux 系统的发行版本，则可以使用 <code>cat /etc/os-release</code> 命令。命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/os-release</span>
<span class="token assign-left variable">NAME</span><span class="token operator">=</span><span class="token string">"CentOS Linux"</span>
<span class="token assign-left variable">VERSION</span><span class="token operator">=</span><span class="token string">"7 (Core)"</span>
<span class="token assign-left variable">ID</span><span class="token operator">=</span><span class="token string">"centos"</span>
<span class="token assign-left variable">ID_LIKE</span><span class="token operator">=</span><span class="token string">"rhel fedora"</span>
<span class="token assign-left variable">VERSION_ID</span><span class="token operator">=</span><span class="token string">"7"</span>
<span class="token assign-left variable">PRETTY_NAME</span><span class="token operator">=</span><span class="token string">"CentOS Linux 7 (Core)"</span>
<span class="token assign-left variable">ANSI_COLOR</span><span class="token operator">=</span><span class="token string">"0;31"</span>
<span class="token assign-left variable">CPE_NAME</span><span class="token operator">=</span><span class="token string">"cpe:/o:centos:centos:7"</span>
<span class="token assign-left variable">HOME_URL</span><span class="token operator">=</span><span class="token string">"https://www.centos.org/"</span>
<span class="token assign-left variable">BUG_REPORT_URL</span><span class="token operator">=</span><span class="token string">"https://bugs.centos.org/"</span>

<span class="token assign-left variable">CENTOS_MANTISBT_PROJECT</span><span class="token operator">=</span><span class="token string">"CentOS-7"</span>
<span class="token assign-left variable">CENTOS_MANTISBT_PROJECT_VERSION</span><span class="token operator">=</span><span class="token string">"7"</span>
<span class="token assign-left variable">REDHAT_SUPPORT_PRODUCT</span><span class="token operator">=</span><span class="token string">"centos"</span>
<span class="token assign-left variable">REDHAT_SUPPORT_PRODUCT_VERSION</span><span class="token operator">=</span><span class="token string">"7"</span>

<span class="token comment">#当前使用的 Linux 的发行版本是 CentOS 7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></div>
</template>
