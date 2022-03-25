<template><p>说到关机和重启，很多人认为，重要的服务器（比如银行的服务器、电信的服务器）如果重启了，则会造成大范围的灾难。这里解释一下。</p>
<p>首先，就算是银行或电信的服务器，也不是不需要维护，而是依靠备份服务器来代替。其次，每个人的经验都是和自己的技术成长环境息息相关的。比如你是游戏运维出身， 而游戏又是数据为王，所以一切操作的目的就是保证数据的可靠和安全。这时，有计划的重启远比意外宕机造成的损失要小得多，所以定时重启是游戏运维的重要手段。既然是按照自己的技术出身来给出建议，那么难免有局限性，所以强调一下，这些只是“建议”，如果你有自己的经验，则完全可以按照自己的经验来维护服务器。</p>
<h2 id="sync-命令" tabindex="-1"><a class="header-anchor" href="#sync-命令" aria-hidden="true">#</a> sync 命令</h2>
<p><code>sync</code> 命令，把内存中的数据强制向硬盘中保存。</p>
<p>英文原意：flush file system buffers</p>
<p>当我们在计算机上保存数据的时候，其实是先在内存中保存一定时间，再写入硬盘。这其实是一种缓存机制，当在内存中保存的数据需要被读取的时候，从内存中读取要比从硬盘中读取快得多。不过这也会带来一些问题，如果数据还没有来得及保存到硬盘中，就发生了突然宕机（比如断电）的情况，数据就会丢失。</p>
<p>sync 命令的作用就是把内存中的数据强制向硬盘中保存。这个命令在常规关机的命令中其实会自动执行，但如果不放心，则应该在关机或重启之前手工执行几次，避免数据丢失。</p>
<p><code>sync</code> 命令直接执行就可以了，不需要任何选项。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># sync</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>记得在关机或重启之前多执行几次 <code>sync</code> 命令，多一重保险总是好的。</p>
<h2 id="shutdown-命令" tabindex="-1"><a class="header-anchor" href="#shutdown-命令" aria-hidden="true">#</a> shutdown 命令</h2>
<p><code>shutdown</code> 命令，用于安全地关闭或重启 Linux 系统。</p>
<p>英文原意：Halt, power-off or reboot the machine</p>
<p>在早期的 Linux 系统中，应该尽量使用 <code>shutdown</code> 命令来进行关机和重启。因为在那时的 Linux 中，只有 <code>shutdown</code> 命令在关机或重启之前会正确地中止进程及服务，所以我们一直认为 <code>shutdown</code> 才是最安全的关机与重启命令。而在现在的系统中，一些其他的命令（如 <code>reboot</code> ）也会正确地中止进程及服务，但我们仍建议使用 <code>shutdown</code> 命令来进行关机和重启。</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># shutdown [选项] 时间 [警告信息]</span>
选项：
	-c：取消已经执行的 <span class="token function">shutdown</span> 命令
    -h：关机
    -r：重启
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li><strong>重启与定时重启</strong></li>
</ul>
<p>先来看看如何使用 <code>shutdown</code> 命令进行重启。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># shutdown -r now</span>
<span class="token comment">#重启，now 是现在重启的意思</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># shutdown -r 05:30</span>
<span class="token comment">#指定时间重启，但会占用前台终端</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># shutdown -r 05:30 &amp;</span>
<span class="token comment">#把定时重启命令放入后台，&amp; 是后台的意思</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># shutdown -c</span>
<span class="token comment">#取消定时重启</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># shutdown -r +10</span>
<span class="token comment">#10分钟之后重启 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul>
<li><strong>关机和定时关机</strong></li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># shutdown -h now</span>
<span class="token comment">#现在关机</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># shutdown -h 05:30</span>
<span class="token comment">#指定时间关机 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="reboot-命令" tabindex="-1"><a class="header-anchor" href="#reboot-命令" aria-hidden="true">#</a> reboot 命令</h2>
<p><code>reboot</code> 命令，重启 Linux 系统。在现在的系统中，<code>reboot</code> 命令也是安全的，而且不需要加入过多的选项。</p>
<p>英文原意：Halt, power-off or reboot the machine</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># reboot</span>
<span class="token comment">#重启</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="halt-和-poweroff-命令" tabindex="-1"><a class="header-anchor" href="#halt-和-poweroff-命令" aria-hidden="true">#</a> halt 和 poweroff 命令</h2>
<p>这两个都是关机命令，直接执行即可。</p>
<p>英文原意：Halt, power-off or reboot the machine</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># halt</span>
<span class="token comment">#关机</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># poweroff</span>
<span class="token comment">#关机</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="init-命令" tabindex="-1"><a class="header-anchor" href="#init-命令" aria-hidden="true">#</a> init 命令</h2>
<p><code>init</code> 是修改 Linux 运行级别的命令，也可以用于关机和重启。</p>
<p>英文原意：systemd system and service manager</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># init 数字[0-6]</span>
数字：
	<span class="token number">0</span>：停机（千万不能把 initdefault 设置为 <span class="token number">0</span> ） 
	<span class="token number">1</span>：单用户模式
	<span class="token number">2</span>：多用户，没有 NFS 不联网
	<span class="token number">3</span>：完全多用户模式（标准的运行级）
	<span class="token number">4</span>：保留，暂时没有用到
	<span class="token number">5</span>：X11（xwindow<span class="token punctuation">)</span> 图形化界面模式
	<span class="token number">6</span>：重新启动 （千万不要把 initdefault 设置为 <span class="token number">6</span> ）
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>关机和重启命令用 <code>init 0</code> 和 <code>init 6</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># init 0</span>
<span class="token comment">#关机，也就是调用系统的 0 级别</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># init 6</span>
<span class="token comment">#重启，也就是调用系统的 6 级别</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">补充</p>
<p>开机默认模式设置方式：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/inittab</span>
<span class="token comment"># inittab is no longer used when using systemd.</span>
<span class="token comment">#</span>
<span class="token comment"># ADDING CONFIGURATION HERE WILL HAVE NO EFFECT ON YOUR SYSTEM.</span>
<span class="token comment">#</span>
<span class="token comment"># Ctrl-Alt-Delete is handled by /usr/lib/systemd/system/ctrl-alt-del.target</span>
<span class="token comment">#</span>
<span class="token comment"># systemd uses 'targets' instead of runlevels. By default, there are two main targets:</span>
<span class="token comment">#</span>
<span class="token comment"># multi-user.target: analogous to runlevel 3</span>
<span class="token comment"># graphical.target: analogous to runlevel 5</span>
<span class="token comment">#</span>
<span class="token comment"># To view current default target, run:</span>
<span class="token comment"># systemctl get-default</span>
<span class="token comment">#</span>
<span class="token comment"># To set a default target, run:</span>
<span class="token comment"># systemctl set-default TARGET.target</span>
<span class="token comment">#</span>
<span class="token comment">##查看 /etc/inittab 文件内容，</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># systemctl get-default</span>
multi-user.target
<span class="token comment">#命令 systemctl set-default 获取默认 init 级别</span>
<span class="token comment">#根据/etc/inittab的内容得知，multi-user.target: analogous to runlevel 3 </span>
<span class="token comment">#默认级别为 3 ，就是完全多用户模式（标准的运行级）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div></div>
</template>
