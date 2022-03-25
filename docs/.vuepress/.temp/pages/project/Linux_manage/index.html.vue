<template><h2 id="磁盘配额" tabindex="-1"><a class="header-anchor" href="#磁盘配额" aria-hidden="true">#</a> 磁盘配额</h2>
<h3 id="什么是磁盘配额" tabindex="-1"><a class="header-anchor" href="#什么是磁盘配额" aria-hidden="true">#</a> 什么是磁盘配额</h3>
<p><strong>磁盘配额（Quota）就是 Linux 系统中用来限制特定的普通用户或用户组在指定的分区上占用的磁盘空间或文件个数的。</strong></p>
<p>在此概念中，有以下几个重点需要注意：</p>
<ol>
<li>磁盘配额限制的用户和用户组，只能是普通用户和用户组，也就是说超级用户 root 是不能做磁盘配额的；</li>
<li>磁盘配额限制只能针对分区，而不能针对某个目录，换句话说，磁盘配额仅能针对文件系统进行限制，举个例子，如果你的 <code>/dev/sda5</code> 是挂载在 <code>/home</code> 底下，那么，在 <code>/home</code> 下的所有目录都会受到磁盘配额的限制；</li>
<li>我们可以限制用户占用的磁盘容量大小（block），当然也能限制用户允许占用的文件个数（inode）。</li>
</ol>
<p>磁盘配额在实际生活中其实是很常见的，比如，我们的邮箱不管多大，都是有限制的，而不可能无限制地存储邮件；我们可以上传文件的服务器也是有容量限制的；网页中的个人空间也不可能让我们无限制地使用。</p>
<p>磁盘配额就好像我们出租写字楼，虽然整栋楼的空间非常大，但是酬整栋楼的成本太高。我们可以分开出租，用户如果觉得不够用，则还可以租用更大的空间。不过租用是不能随便进行的，其中有几个规矩必须遵守：</p>
<ul>
<li>我的楼是租给外来用户的（普通用户），可以租给一个人（用户），也可以租给一家公司（用户 组），但是这栋楼的所有权是我的，所以不能租给我自己（root 用户）；</li>
<li>如果要租用，则只能在每层租用一定大小的空间，而不能在一个房间中再划分出子空间来租用（配额只能针对分区，而不能限制某个目录）；</li>
<li>租户可以决定在某层租用多大的空间（磁盘容量限制），也可以在某层租用几个人员名额，这样只有这几个人员才能进入本层（文件个数限制）。</li>
</ul>
<p>磁盘配额要想正常使用，有以下几个前提条件：</p>
<ol>
<li>
<p>内核必须支持磁盘配额。Centos 6.x 版本的 Linux 默认支持磁盘配额，不需要做任何修改。如果不放心，则可以查看内核配置文件，看是否支持磁盘配额。命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># grep CONFIG_QUOTA /boot/corrfig-2.6.32-279.el6.i686</span>
 <span class="token assign-left variable">CONFIG_QUOTA</span><span class="token operator">=</span>y
 <span class="token assign-left variable">CONFIG_QUOTA_NETLINK_INTERFACE</span><span class="token operator">=</span>y
 <span class="token comment"># CONFIG_QUOTA_DEBUG is not set</span>
 <span class="token assign-left variable">CONFIG_QUOTA_TREE</span><span class="token operator">=</span>y
 <span class="token assign-left variable">CONFIG_QUOTACTL</span><span class="token operator">=</span>y
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>可以看到，内核已经支持磁盘配额。如果内核不支持，就需要重新编译内核，加入 quota supper 功能。</p>
</li>
<li>
<p>系统中必须安装了 Quota 工具。我们的 Linux 中默认安装了 Quota 工具，查看命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># rpm -qa | grep quota</span>
quota-3.17-16.el6.i686
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
<li>
<p>要支持磁盘配额的分区必须开启磁盘配额功能。这项功能可以手动开启，不再是默认开启的。</p>
</li>
</ol>
<p>磁盘配额可用于限制每个人可用网页空间、邮件空间以及网络硬盘空间的容量。除此之外，在 Linux 系统资源配置方面，使用磁盘配额，还可以限制某一群组或某一使用者所能使用的最大磁盘配额，以及以 Link 的方式，来使邮件可以作为限制的配额（更改 <code>/var/spool/mail</code> 这个路径）。</p>
<h3 id="磁盘配额中的常见概念" tabindex="-1"><a class="header-anchor" href="#磁盘配额中的常见概念" aria-hidden="true">#</a> 磁盘配额中的常见概念</h3>
<ol>
<li><strong>用户配额和组配额</strong></li>
</ol>
<p>用户配额是指针对用户个人的配额，而组配额是指针对整个用户组的配额。如果我们需要限制的用户数量并不多，则可以给每个用户单独指定配额。如果用户比较多，那么单独限制太过麻烦，这时我们可以把用户加入某个用户组，然后给组指定配额，就会简单得多。</p>
<p>需要注意的是，组中的用户是共享空间或文件数的。也就是说，如果用户 lamp1、lamp2 和 lamp3 都属于 brother 用户组，我给  brother 用户组分配 100MB 的磁盘空间，那么，这三个用户不是平均分配这 100MB 空间的，而是先到先得，谁先占用，谁就有可能占满这 100MB 空间，后来的就没有空间可用了。</p>
<ol start="2">
<li><strong>磁盘容量限制和文件个数限制</strong></li>
</ol>
<p>我们除了可以通过限制用户可用的 block 数量来限制用户可用的磁盘容量，也可以通过限制用户可用的 inode 数量来限制用户可以上传或新建的文件个数。</p>
<ol start="3">
<li><strong>软限制和硬限制</strong></li>
</ol>
<p>软限制可理解为警告限制，硬限制就是真正的限制了。比如，规定软限制为 100MB，硬限制为 200MB，那么，当用户使用的磁盘空间为 100~200MB 时，用户还可以继续上传和新建文件，但是每次登录时都会收到一条警告消息，告诉用户磁盘将满。</p>
<ol start="4">
<li><strong>宽限时间</strong></li>
</ol>
<p>如果用户的空间占用数处于软限制和硬限制之间，那么系统会在用户登录时警告用户磁盘将满，但是这个警告不会一直进行，而是有时间限制的，这个时间就是宽限时间，默认是 7 天。</p>
<p>如果到达宽限时间，用户的磁盘占用量还超过软限制，那么软限制就会升级为硬限制。也就是说，如果软限制是 100MB，硬限制是 200MB，宽限时间是 7天，此时用户占用了 120MB，那么今后 7 天用户每次登录时都会出现磁盘将满的警告，如果用户置之不理，7 天后这个用户的硬限制就会变成  100MB，而不是 200MB 了。</p>
<h3 id="磁盘配额启动的前期准备" tabindex="-1"><a class="header-anchor" href="#磁盘配额启动的前期准备" aria-hidden="true">#</a> 磁盘配额启动的前期准备</h3>
<p>前面我们已经谈到，使用磁盘配额的前提，是必须要<strong>内核</strong>以及<strong>文件系统</strong>支持才行，这里假设大家使用的就是支持磁盘配额的内核，那么接下来就是要配置文件系统，使其支持配额限制。</p>
<p>由于 Quota 仅针对文件系统进行限制，因此我们有必要查一下，<code>/home</code> 是否是独立的文件系统，执行命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># df -h /home</span>
Filesystem   Size Used Avail Use% Mounted on
/dev/sda3   <span class="token number">4</span>.8G 740M <span class="token number">3</span>.8G <span class="token number">17</span>% /home			<span class="token operator">&lt;</span>-- /home 确实是独立的！
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>可以看到，<code>/home</code> 确实是独立的文件系统，因此可以直接对其进行限制。但如果你所用系统中，<code>/home</code> 不是独立的文件系统，则可能就要针对根目录做磁盘配额了，但不建议大家这样做。</p>
<p>另外，由于 VFAT 文件系统并不支持磁盘配额功能，因此，这里需要查看 <code>/home</code> 的文件系统，执行命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mount | grep home</span>
/dev/hda3 on /home <span class="token builtin class-name">type</span> ext4 <span class="token punctuation">(</span>rw<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>显然，<code>/home</code> 的文件系统为 ext4，是支持磁盘配额的。</p>
<p>在此基础上，如果想要获得文件系统的支持，还需要为执行的文件系统添加挂载参数，分别是 <code>usrquota</code>（启用用户限额）和 <code>grpquota</code>（启动用户组限额），添加的方式有以下 2 种：</p>
<ol>
<li>
<p>如果只是想在本次启动中试验磁盘配额，则只需使用如下的方式手动添加挂载参数：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mount -o remount,usrquota,grpquota /home</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mount | grep home</span>
/dev/sda3 on /home <span class="token builtin class-name">type</span> ext4 <span class="token punctuation">(</span>rw,usrquota,grpquota<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
<li>
<p>手动添加的方式，会在下次重新挂载时消失，因此我们可以直接修改 <code>/etc/fstab</code> 文件，将挂载参数写入到配置文件中，这样，即便重新挂载也不会消失，执行命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@www ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/fstab</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
<span class="token assign-left variable">LABEL</span><span class="token operator">=</span>/home  /home ext4  defaults,usrquota,grpquota <span class="token number">1</span> <span class="token number">2</span>
<span class="token punctuation">[</span>root@www ~<span class="token punctuation">]</span><span class="token comment"># umount /home</span>
<span class="token punctuation">[</span>root@www ~<span class="token punctuation">]</span><span class="token comment"># mount -a</span>
<span class="token punctuation">[</span>root@www ~<span class="token punctuation">]</span><span class="token comment"># mount | grep home</span>
/dev/sda3 on /home <span class="token builtin class-name">type</span> ext4 <span class="token punctuation">(</span>rw,usrquota,grpquota<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>注意，修改完 <code>/etc/fatab</code> 文件后，务必要亲自测试一下，有问题赶紧处理，因为此文件修改错误，将直接导致系统无法启动。</p>
</li>
</ol>
<p>由此，我们就成功启用了文件系统对磁盘配额的支持，但此时还是不能立即使用磁盘配额，还需进一步检测相应的文件系统，并建立磁盘配额文件，这就需要使用 <code>quotacheck</code> 命令。</p>
<h3 id="quotacheck-命令" tabindex="-1"><a class="header-anchor" href="#quotacheck-命令" aria-hidden="true">#</a> quotacheck 命令</h3>
<p>其实，磁盘配额（Quota）就是通过分析整个文件系统中每个用户和群组拥有的文件总数和总容量，再将这些数据记录在文件系统中的最顶层目录中，然后在此记录文件中使用各个用户和群组的配额限制值去规范磁盘使用量的。因此，建立 Quota 的记录文件是非常有必要的。</p>
<p><strong>扫描文件系统（必须含有挂载参数 usrquota 和 grpquota）并建立 Quota 记录文件，可以使用 <code>quotacheck</code> 命令</strong>。此命令的基本格式为：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># quotacheck [选项] 文件系统</span>
选项：
	-a	：扫瞄所有在 /etc/mtab 中，含有 <span class="token function">quota</span> 支持的 filesystem，加上此参数后，后边的文件系统可以不写
	-u	：针对使用者扫瞄文件与目录的使用情况，会创建 aquota.user
	-g	：针对群组扫瞄文件与目录的使用情况，会创建 aquota.group
	-v	：显示扫瞄的详细过程
	-f	：强制扫瞄文件系统，并写入新的 <span class="token function">quota</span> 记录文件
	-M	：强制以读写的方式扫瞄文件系统，只有在特殊情况下才会使用。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>在使用这些选项时，一般常用参数就是 “-avug” 。至于“ -f”和“-M”选项，是在文件系统以启动 <code>quota</code> 的情况下，还要重新扫描文件系统（担心有其他用户在使用 quota 中），才需要使用这两个选项。</p>
<div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>这里需要注意，如果采用命令的方式开启磁盘配额功能，那么只在本次开机中生效，一旦系统重新启动，这个功能就会失效。如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mount -o remount,usrquota,grpquota /home</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>使用上面命令临时挂载分区，系统会同步更新到 <code>/etc/mtab</code> 文件。</p>
<p><strong><code>/etc/mtab</code> 和 <code>/etc/fstab</code> 的区别：</strong></p>
<p>其实 <code>/etc/mtab</code> 文件中记录的是操作系统已经挂载的文件系统（分区），包括操作系统建立的虚拟文件系统，所以，如果磁盘配额功能是临时生效的，那么使用命令修改的就是这个文件；而 <code>/etc/fistab</code> 文件中记录的是操作系统准备挂载的文件系统，也就是下次启动后系统会挂载的文件系统，所以，如果磁盘配额功能是永久生效的，就应该修改这个文件。</p>
</div>
<p>例如，我们可以使用如下的命令，对整个系统中含有挂载参数（usrquota 和 grpquota）的文件系统进行扫描：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># quotacheck -avug</span>
quotacheck: Scanning /dev/hda3 <span class="token punctuation">[</span>/home<span class="token punctuation">]</span> quotacheck: Cannot <span class="token function">stat</span> old user <span class="token function">quota</span>
file: No such <span class="token function">file</span> or directory					<span class="token operator">&lt;</span>--有找到文件系统，但尚未制作记录文件！
quotacheck: Cannot <span class="token function">stat</span> old group <span class="token function">quota</span> file: No such <span class="token function">file</span> or directory
quotacheck: Cannot <span class="token function">stat</span> old user <span class="token function">quota</span> file: No such <span class="token function">file</span> or directory
quotacheck: Cannot <span class="token function">stat</span> old group <span class="token function">quota</span> file: No such <span class="token function">file</span> or directory
<span class="token keyword">done</span> 												<span class="token operator">&lt;</span>--上面三个错误只是说明记录文件尚未创建而已，可以忽略不理！
quotacheck: Checked <span class="token number">130</span> directories and <span class="token number">107</span> files	<span class="token operator">&lt;</span>--实际搜寻结果
quotacheck: Old <span class="token function">file</span> not found.
quotacheck: Old <span class="token function">file</span> not found.
<span class="token comment"># 若运行这个命令却出现如下的错误信息，表示你没有任何文件系统有启动 quota 支持！</span>
<span class="token comment"># quotacheck: Can't find filesystem to check or filesystem not mounted with quota option.</span>
 
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll -d /home/a*</span>
-rw------- <span class="token number">1</span> root root <span class="token number">8192</span> Mar <span class="token number">6</span> <span class="token number">11</span>:58 /home/aquota.group
-rw------- <span class="token number">1</span> root root <span class="token number">9216</span> Mar <span class="token number">6</span> <span class="token number">11</span>:58 /home/aquota.user
<span class="token comment"># 可以看到，扫描的同时，会创建两个记录文件，放在 /home 底下</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>需要注意的是，此命令不要反复的执行，因为若启动 <code>Quota</code> 后还执行此命令，会破坏原有的记录文件，同时产生一些错误信息。</p>
<p>通过执行 <code>quotacheck</code> 命令，就可以成功创建支持配额的记录文件，千万不要去手动编辑这两个文件，一方面，这两个文件是 <code>Quota</code>  自己的数据文件，并不是纯文本文件；并且在你对该文件系统进行操作时，操作的结果会同步到这两个文件中，因此文件中的数据会发生变化。</p>
<p>通过学习，你只需要知道，要启动 <code>Quota</code>，需创建两个记录文件，分别为 aquota.group 和 aquota.user，而创建的工作，不是手动编辑的，需要使用 <code>quotacheck</code> 命令。</p>
<div class="custom-container tip"><p class="custom-container-title">补充</p>
<p>如果用 <code>quotacheck</code> 命令创建磁盘配额的配置文件时权限不够，这是由于 SELinux 造成的，把 SELinux 关闭即可。命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/selinux/config</span>
<span class="token assign-left variable">SELINUX</span><span class="token operator">=</span>enforcing
<span class="token comment">#把这句话改改成下面这样</span>
<span class="token assign-left variable">SELINUX</span><span class="token operator">=</span>disabled
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>然后再重新启动 Linux 系统，再重新执行 <code>quotacheck</code> 命令。</p>
</div>
<h3 id="quotaon-命令-开启磁盘配额限制" tabindex="-1"><a class="header-anchor" href="#quotaon-命令-开启磁盘配额限制" aria-hidden="true">#</a> quotaon 命令：开启磁盘配额限制</h3>
<p>通过前面的学习，我们已经使用 <code>quotacheck</code> 命令创建好了磁盘配额（Quota）的记录文件，接下来就可以启动 <code>Quota</code> 了，启动方法也很简单，直接使用 <code>quotaon</code> 命令即可。</p>
<p><code>quotaon</code> 命令的功能就是启动 <code>Quota</code> 服务，此命令的基本格式为：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># quotaon [选项] 文件系统名称</span>
选项：
	-a	：根据 /etc/mtab 文件中对文件系统的配置，启动相关的Quota服务，如果不使用 -a 选项，则此命令后面就需要明确写上特定的文件系统名称
	-u	：针对用户启动 Quota（根据记录文件 aquota.user）
	-g	：针对群组启动 Quota（根据记录文件 aquota.group）
	-v	：显示启动服务过程的详细信息
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>需要注意的是，<code>quotaon -auvg</code> 命令<u>只需要在第一次启动 Quota 服务时才需要进行，因为下次重新启动系统时，系统的 <code>/etc/rc.d/rc.sysinit</code> 初始化脚本会自动下达这个命令。</u></p>
<p>例 1：如果要同时启动针对用户和群组的 Quota 服务，可以使用如下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># quotaon -auvg</span>
/dev/hda3 <span class="token punctuation">[</span>/home<span class="token punctuation">]</span>: group quotas turned on
/dev/hda3 <span class="token punctuation">[</span>/home<span class="token punctuation">]</span>: user quotas turned on
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>例 2：如果只针对用户启动 <code>/var</code> 的 Quota 支持，可以使用如下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># quotaon -uv /var</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="quotaoff-命令-关闭磁盘配额限制" tabindex="-1"><a class="header-anchor" href="#quotaoff-命令-关闭磁盘配额限制" aria-hidden="true">#</a> quotaoff 命令：关闭磁盘配额限制</h3>
<p>磁盘配额（Quota）服务既然能使用 quotaon 命令手动开启，那么自然也能手动关闭，使用 quotaoff 命令即可。</p>
<p>quotaoff 命令的功能就是关闭 Quota 服务，此命令的基本格式同 quotaon 命令一样，如下所示：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># quotaoff [选项] 文件系统名称</span>
选项：
	-a	：根据 /etc/mtab 文件，关闭已启动的 Quota 服务，如果不使用 -a 选项，则此命令后面就需要明确写上特定的文件系统名称
	-u	：关闭针对用户启动的 Quota 服务。
	-g	：关闭针对群组启动的 Quota 服务。
	-v	：显示服务过程的详细信息
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>例 1：如果要关闭所有已开启的Quota服务，可以使用如下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># quotaoff -auvg</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>例 2：如果只针对用户关闭 <code>/var</code> 启动的 Quota 支持，可以使用如下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># quotaoff -uv /var</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="edquota-命令-修改用户和组的磁盘配额" tabindex="-1"><a class="header-anchor" href="#edquota-命令-修改用户和组的磁盘配额" aria-hidden="true">#</a> edquota 命令：修改用户和组的磁盘配额</h3>
<p>针对用户和群组的配额限制（Quota），不仅可以手动控制开启和关闭，还可以手动修改配额参数，即使用 <code>edquota</code> 命令。</p>
<p><code>edquota</code> 命令，是 edit quota 缩写，用于修改用户和群组的配额限制参数，包括磁盘容量和文件个数限制、软限制和硬限制值、宽限时间，该命令的基本格式有以下 3 种：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># edquota [选项] [用户名或组名]</span>
选项：
	-u 用户名	：进入配额的 Vi 编辑界面，修改针对用户的配置值
	-g 组名		：进入配额的 Vi 编辑界面，修改针对群组的配置值
	-t			：修改配额参数中的宽限时间
	-p			：将源用户（或群组）的磁盘配额设置，复制给其他用户（或群组）
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>例如，以用户 myquota 为例，通过如下命令配置此命令的 Quota：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># edquota -u myquota</span>
Disk quotas <span class="token keyword">for</span> user myquota <span class="token punctuation">(</span>uid <span class="token number">710</span><span class="token punctuation">)</span>:
 Filesystem		blocks	soft	hard	inodes	soft	hard
 /dev/hda3		<span class="token number">80</span>		<span class="token number">0</span>		<span class="token number">0</span>		<span class="token number">10</span>		<span class="token number">0</span>		<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>此命令的输出信息共 3 行，第一行指明了针对哪个用户进行配额限制，第二行是各个配额值的表头，共分为 7 列，其每一列的含义如表1-1 所示。</p>
<p><strong>表1-1	 <u>edquota 命令配额限制信息</u></strong></p>
<table>
<thead>
<tr>
<th>表头</th>
<th>含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>文件系统（filesystem）</td>
<td>说明该限制值是针对哪个文件系统（或分区）；</td>
</tr>
<tr>
<td>磁盘容量（blocks）</td>
<td>此列的数值是 quota 自己算出来的，单位为 KB，不要手动修改；</td>
</tr>
<tr>
<td>磁盘容量的软限制（soft）</td>
<td>当用户使用的磁盘空间超过此限制值，则用户在登陆时会收到警告信息，<br />告知用户磁盘已满，单位为 KB；</td>
</tr>
<tr>
<td>磁盘容量的硬限制（hard）</td>
<td>要求用户使用的磁盘空间最大不能超过此限制值，单位为 KB；</td>
</tr>
<tr>
<td>文件数量（inodes）</td>
<td>同 blocks 一样，此项也是 quota自己计算出来的，无需手动修改；</td>
</tr>
<tr>
<td>文件数量的软限制（soft）</td>
<td>当用户拥有的文件数量超过此值，系统会发出警告信息；</td>
</tr>
<tr>
<td>文件数量的硬限制（hard）</td>
<td>用户拥有的文件数量不能超过此值。</td>
</tr>
</tbody>
</table>
<p>注意，当 soft/hard 为 0 时，表示没有限制。另外，在 Vi（或 Vim）中修改配额值时，填写的数据无法保证同表头对齐，只要保证此行数据分为 7 个栏目即可。</p>
<p>例 1：修改用户 myquota 的软限制值和硬限制值。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># edquota -u myquota</span>
Disk quotas <span class="token keyword">for</span> user myquota <span class="token punctuation">(</span>uid <span class="token number">710</span><span class="token punctuation">)</span>:
 Filesystem		blocks	soft	hard	inodes	soft	hard
 /dev/hda3		<span class="token number">80</span>		<span class="token number">250000</span>	<span class="token number">300000</span>	<span class="token number">10</span>		<span class="token number">0</span>		<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>例 2：修改群组 mygrpquota 的配额。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># edquota -g mygrpquota</span>
Disk quotas <span class="token keyword">for</span> group mygrpquota <span class="token punctuation">(</span>gid <span class="token number">713</span><span class="token punctuation">)</span>:
 Filesystem		blocks	soft	hard	inodes	soft	hard
 /dev/hda3		<span class="token number">400</span>		<span class="token number">900000</span>	<span class="token number">1000000</span>	<span class="token number">50</span>		<span class="token number">0</span>		<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>例 3：修改宽限天数。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># edquota -t</span>
Grace period before enforcing soft limits <span class="token keyword">for</span> users:
Time <span class="token function">units</span> may be: days, hours, minutes, or seconds
 Filesystem		Block grace period		Inode grace period
 /dev/hda3		14days					7days
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>例 4：配额复制。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># edquota -p lamp1 -u lamp2</span>
<span class="token comment">#命令 -p 源用户 -u 目标用户</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="setquota-命令-非交互式设置磁盘配额" tabindex="-1"><a class="header-anchor" href="#setquota-命令-非交互式设置磁盘配额" aria-hidden="true">#</a> setquota 命令：非交互式设置磁盘配额</h3>
<p>如果我们需要写脚本建立大量的用户，并给每个用户都自动进行磁盘配额，那么 <code>edquota</code> 命令就不能在脚本中使用了，因为这个命令的操作过程和 vi 类似，需要和管理员产生交互。</p>
<p>这种情况下就需要利用 <code>setquota</code> 命令进行设置，这个命令的好处是通过命令行设定配额，而不用和管理员交互设定。</p>
<p><code>edquota</code> 命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># setquota -u 用户名 容量软限制 容量硬限制 个数软限制 个数硬限制 分区名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>举个例子，我们再建立用户 lamp4，并用 <code>setquota</code> 命令设定磁盘配额。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># useradd lamp4</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># passwd lamp4</span>
<span class="token comment">#建立用户</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># setquota -u lamp4 10000 20000 5 8 /disk</span>
<span class="token comment">#设定用户在/disk分区中的容量软限制为10MB，硬限制为20MB；文件个数软限制为5个，硬限制为8个</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># quota -uvs lamp4</span>
Disk quotas <span class="token keyword">for</span> user Iamp4 <span class="token punctuation">(</span>uid <span class="token number">503</span><span class="token punctuation">)</span>:
 Filesystem		blocks	<span class="token function">quota</span>	limit	grace	files	<span class="token function">quota</span>	limit	grace
 /dev/sdbl		<span class="token number">0</span>		<span class="token number">10000</span>	<span class="token number">20000</span> 			<span class="token number">0</span>		<span class="token number">5</span>		<span class="token number">8</span>
<span class="token comment">#查看一下，配额生效了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>这个命令在写脚本进行批量设置时更加方便。当然，在写脚本时也可以先建立一个模板用户，设定好磁盘配额，再进行配额复制。</p>
<h3 id="quota-和-repquota-命令-查询磁盘配额方法详解" tabindex="-1"><a class="header-anchor" href="#quota-和-repquota-命令-查询磁盘配额方法详解" aria-hidden="true">#</a> quota 和 repquota 命令：查询磁盘配额方法详解</h3>
<p>对于建立好的磁盘配额，还需要有效的查询配额的手段，这样才能知道系统中到底有哪些分区设定了哪些配额。</p>
<p>查询磁盘配额有两种方法：</p>
<ul>
<li>使用 <code>quota</code> 命令查询用户或用户组的配额；</li>
<li>使用 <code>repquota</code> 命令查询整个分区的配额情况。</li>
</ul>
<p><strong><code>quota</code> 命令查询用户或用户组配额，命令格式如下：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost~<span class="token punctuation">]</span> <span class="token comment"># quota [选项] [用户名或组名]</span>
选项：
	-u 用户名	：查询用户配额
  	-g 组名		：查询组配额
  	-v			：显示详细信息
  	-s			：以习惯单位显示容量大小，如 M、G
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>例子：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost 〜<span class="token punctuation">]</span><span class="token comment"># quota -uvs lamp1</span>
Disk quotas <span class="token keyword">for</span> user lamp1 <span class="token punctuation">(</span>uid <span class="token number">500</span><span class="token punctuation">)</span>:
 Filesystem		blocks	<span class="token function">quota</span>	limit	grace	files	<span class="token function">quota</span>	limit	grace
 /dev/sda3		<span class="token number">20</span>		<span class="token number">0</span>		<span class="token number">0</span>				<span class="token number">6</span>		<span class="token number">0</span>		<span class="token number">0</span>
 /dev/sdbl		<span class="token number">0</span>		<span class="token number">40000</span>	<span class="token number">50000</span>			<span class="token number">0</span>		<span class="token number">8</span>		<span class="token number">10</span>
<span class="token comment">#查看lamp1用户的配额值</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># quota -uvs lamp2</span>
Disk quotas <span class="token keyword">for</span> user lamp2 <span class="token punctuation">(</span>uid <span class="token number">501</span><span class="token punctuation">)</span>:
 Filesystem		blocks	<span class="token function">quota</span>	limit	grace	files	<span class="token function">quota</span>	limit	grace
 /dev/sda3		<span class="token number">36752</span>	<span class="token number">0</span>		<span class="token number">0</span>				<span class="token number">2672</span>	<span class="token number">0</span>		<span class="token number">0</span>
 /dev/sdbl		<span class="token number">0</span>		245M	293M			<span class="token number">0</span>		<span class="token number">0</span>		<span class="token number">0</span>
<span class="token comment">#查看lamp2用户的配额值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>lamp1 用户的配额值还不够大，所以没有换算成 MB 单位，但是 lamp2 用户已经换算了。在选项列当中多出了 grace 字段，这里是用来显示宽限时间的，我们现在还没有达到软限制，所以 grace 字段为空。</p>
<p><strong><code>repquota</code> 命令查询文件系统配额</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span> <span class="token comment"># repquota [选项] [分区名]</span>
选项：
	-a：依据 /etc/mtab 文件查询配额。如果不加 -a 选项，就一定要加分区名
	-u：查询用户配额
	-g：查询组配额
	-v：显示详细信息
	-s：以习惯单位显示容量太小
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>例子：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span> <span class="token comment"># repquota -augvs</span>
*** Report <span class="token keyword">for</span> user quotas on device /dev/sdbl
<span class="token comment">#用户配额信息</span>
Block grace time: 8days<span class="token punctuation">;</span> Inode grace time: 8days
			Block limits					File limits
User		used	soft	hard	grace	used	soft	hard	grace
root	--	<span class="token number">13</span>		<span class="token number">0</span>		<span class="token number">0</span>				<span class="token number">2</span>		<span class="token number">0</span>		<span class="token number">0</span>
lampl	--	<span class="token number">0</span>		<span class="token number">40000</span>	<span class="token number">50000</span>			<span class="token number">0</span>		<span class="token number">8</span>		<span class="token number">10</span>
lamp2	--	<span class="token number">0</span>		245M	293M			<span class="token number">0</span>		<span class="token number">0</span>		<span class="token number">0</span>
lamp3	--	<span class="token number">0</span>		245M	293M			<span class="token number">0</span>		<span class="token number">0</span>		<span class="token number">0</span>
<span class="token comment">#用户的配额值</span>
Statistics:
Total blocks: <span class="token number">7</span>
Data blocks: <span class="token number">1</span>
Entries: <span class="token number">4</span>
Used average: <span class="token number">4.000000</span>
*** Report <span class="token keyword">for</span> group quotas on device /dev/sdbl
<span class="token comment">#组配额信息</span>
Block grace time: 7days<span class="token punctuation">;</span> Inode grace time: 7days
 Block limits File limits
Group		used	soft	hard	grace	used	soft	hard	grace
root	-- 	<span class="token number">13</span>		<span class="token number">0</span>		<span class="token number">0</span>				<span class="token number">2</span>		<span class="token number">0</span>		<span class="token number">0</span>
brother	--	<span class="token number">0</span>		440M	489M			<span class="token number">0</span>		<span class="token number">0</span>		<span class="token number">0</span>
<span class="token comment">#组的配额值</span>
Statistics:
Total blocks: <span class="token number">7</span>
Data blocks: <span class="token number">1</span>
Entries: <span class="token number">2</span>
Used average: <span class="token number">2.000000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h3 id="如何判断磁盘配额是否生效" tabindex="-1"><a class="header-anchor" href="#如何判断磁盘配额是否生效" aria-hidden="true">#</a> 如何判断磁盘配额是否生效？</h3>
<p>我们的磁盘配额已经生效，接下来测试一下是否会限制我们的用户。以 lamp1 用户为例，因为 lamp1 用户除容量被限制外，也限制了文件个数。先测试文件个数是否被限制了，命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># chmod 777 /diak/</span>
<span class="token comment">#给/disk 目录赋予权限，lanp1 用户要拥有写权限</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># su - lamp1</span>
<span class="token comment">#切换成lamp1用户</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span>$ <span class="token builtin class-name">cd</span> /disk/
<span class="token comment">#进入 /disk 目录</span>
<span class="token punctuation">[</span>lamp1@localhost disk<span class="token punctuation">]</span> $ <span class="token function">touch</span> <span class="token number">11</span>
<span class="token comment">#建立文件</span>
<span class="token punctuation">[</span>lamp@localhost disk<span class="token punctuation">]</span> $ <span class="token function">touch</span> <span class="token number">22</span>
<span class="token punctuation">[</span>lamp@localhost disk<span class="token punctuation">]</span> $ <span class="token function">touch</span> <span class="token number">33</span>
<span class="token punctuation">[</span>lamp@localhost disk<span class="token punctuation">]</span> $ <span class="token function">touch</span> <span class="token number">44</span>
<span class="token punctuation">[</span>lamp@localhost disk<span class="token punctuation">]</span> $ <span class="token function">touch</span> <span class="token number">55</span>
<span class="token punctuation">[</span>lamp@localhost disk<span class="token punctuation">]</span> $ <span class="token function">touch</span> <span class="token number">66</span>
<span class="token punctuation">[</span>lamp@localhost disk<span class="token punctuation">]</span> $ <span class="token function">touch</span> <span class="token number">77</span>
<span class="token punctuation">[</span>lamp@localhost disk<span class="token punctuation">]</span> $ <span class="token function">touch</span> <span class="token number">88</span>
<span class="token punctuation">[</span>lamp@localhost disk<span class="token punctuation">]</span> $ <span class="token function">touch</span> <span class="token number">99</span>
sdb1:  warning, user <span class="token function">file</span> <span class="token function">quota</span> exceeded.
<span class="token punctuation">[</span>lamp1@localhost disk<span class="token punctuation">]</span>$ <span class="token function">ls</span>
<span class="token number">11</span> <span class="token number">22</span> <span class="token number">33</span> <span class="token number">44</span> <span class="token number">55</span> <span class="token number">66</span> <span class="token number">77</span> <span class="token number">88</span> <span class="token number">99</span> aquota.group aquota.user lost+found
<span class="token comment">#虽然警告了，但是第 9 个文件依然建立</span>
<span class="token punctuation">[</span>lamp1@localhost disk<span class="token punctuation">]</span>$ <span class="token function">touch</span> <span class="token number">10</span>
<span class="token punctuation">[</span>lamp1@localhost disk<span class="token punctuation">]</span>$ <span class="token function">touch</span> <span class="token number">111</span>
sdb1: <span class="token function">write</span> failed, user <span class="token function">file</span> limit reached.
touch: 无法创建 <span class="token string">"111"</span><span class="token builtin class-name">:</span> 超出磁盘配額
<span class="token punctuation">[</span>lamp1@localhost disk<span class="token punctuation">]</span>$ <span class="token function">ls</span>
<span class="token number">10</span> <span class="token number">11</span> <span class="token number">22</span> <span class="token number">33</span> <span class="token number">44</span> <span class="token number">55</span> <span class="token number">66</span> <span class="token number">77</span> <span class="token number">88</span> <span class="token number">99</span> aquota.group aquota.user lost+found
<span class="token comment">#第 11 个文件没有建立</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>还记得吗？磁盘配额的概念是指定的普通用户在指定的分区中使用磁盘空间和文件个数的限制。所以一定要记得切换用户和建立文件的目录，否则默认全部写入 <code>/</code> 分区，而我们并没有在 <code>/</code> 分区上设定磁盘配额。我们切换到 root 身份，使用 <code>repquota</code> 命令查看一下。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># repquota -uvs /disk/</span>
*** Report <span class="token keyword">for</span> user quotas on device /dev/sdb1
Block grace time: Bdays<span class="token punctuation">;</span> Inode grace time: 8days
		Block limits					File limits
User	used	soft	hard	grace	used	soft	hard	grace
-------------------------------------------------------------------------
root	--		<span class="token number">13</span>		<span class="token number">0</span>		<span class="token number">0</span>		<span class="token number">2</span>		<span class="token number">0</span>		<span class="token number">0</span>
lamp1	-+		<span class="token number">0</span>		<span class="token number">40000</span>	<span class="token number">50000</span>	<span class="token number">10</span>		<span class="token number">8</span>		<span class="token number">10</span>		7days
lamp2	--		<span class="token number">0</span>		245M	293M	<span class="token number">0</span>		<span class="token number">0</span>		<span class="token number">0</span>
lamp3	--		<span class="token number">0</span>		245M	<span class="token number">293</span>		<span class="token number">0</span>		<span class="token number">0</span>		<span class="token number">0</span>

statistics:
Total blocks: <span class="token number">7</span>
Data blooks: <span class="token number">1</span>
Entrles: <span class="token number">4</span>
Used average： <span class="token number">4.000000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>看到了吗？lamp1 用户的文件个数的 grace 字段开始倒数了。</p>
<p>删除一个文件，然后建立一个大于 50MB 的文件，看看磁盘容量是否被限制了。命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>lampl@localhost disk<span class="token punctuation">]</span>$ <span class="token function">rm</span> -rf <span class="token number">10</span>
<span class="token comment">#删除文件10。空出文件个数</span>
<span class="token punctuation">[</span>lamp1@localhost disk<span class="token punctuation">]</span>$ <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>/dev/zero <span class="token assign-left variable">of</span><span class="token operator">=</span>/disk/testfile bs-1M <span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">60</span>
<span class="token comment">#建立 testfile 文件，指定文件大小为 60MB</span>
sdb1: warning, user block <span class="token function">quota</span> exceeded.
sdb1: <span class="token function">write</span> failed, user block limit reached.
dd：正在写人<span class="token string">"/disk/111"</span>：超出磁盘配额
<span class="token comment">#报错，超出磁盘配额</span>
记录了 <span class="token number">49</span>+0 的读入
记录了 <span class="token number">48</span>+0 的写出
<span class="token number">51200000</span> 字节<span class="token punctuation">(</span><span class="token number">51</span> MB<span class="token punctuation">)</span>已复制，0.538582 秒, <span class="token number">95.1</span> MB/秒
<span class="token punctuation">[</span>lamp1@localhost disk<span class="token punctuation">]</span>$ ll -h testfile
-rw-rw-r-- <span class="token number">1</span> lamp1 lamp1 49M <span class="token number">4</span>月 <span class="token number">17</span> 02:52 testfile
<span class="token comment">#查看一下 testfile 文件的大小，并沒有超出 50MB 的硬限制</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">关于 dd 命令</p>
<p>在 <code>dd</code> 命令中，if 用于指定输入项，这里我们用 <code>/dev/zero</code> 作为输入项，会不停地向目标文件中写 0；of 用于指定输出项，这里用 <code>/disk/testfile</code> 作为目标文件；bs 指定每次复制 1MB 数据；count 指定复制 60 次。也就是建立一个大小为 60MB 的 testfile 文件，但是这个文件大小超出了磁盘容量硬限制，所以只建立了 49MB，证明容量限制也生效了。</p>
</div>
<h2 id="lvm-逻辑卷管理" tabindex="-1"><a class="header-anchor" href="#lvm-逻辑卷管理" aria-hidden="true">#</a> LVM 逻辑卷管理</h2>
<p>我们在实际使用 Linux 服务器的时候，总会有一个让人头疼的问题，随着业务的增加，文件系统负载会越来越大，当到了空间不足的情况时，如果我们还在使用传统的分区方式管理硬盘，就不得不将现有的所有分区全部删除，并重新规划新的存储方案。</p>
<p>不仅如此，分区到底应该分多大呢？分得太大，会浪费硬盘空间；分得太小，又会面临不够使用的情况。如果在安装系统时规划不合理，这种困扰就会经常出现。如果真出现了分区不够用的情况，应该怎么解决呢？</p>
<p>在以往（2.4 内核以前）要想调整分区大小，要么先新建立一个更大的分区，然后复制旧分区中的内容到新分区，最后使用软链接来替代旧分区；要么使用调整分区大小的工具（如 <code>parted</code>），<code>parted</code> 虽然可以调整分区大小，但是它需要卸载分区之后才可以进行，也就是说需要停止服务。</p>
<p>其实，从一开始，我们就需要有一种管理机制来帮助我们动态地管理存储，LVM 就提供了这种功能。LVM 最大的好处就是可以随时调整分区的大小，分区中的现有数据不会丟失，并且不需要卸载分区、停止服务。</p>
<h3 id="lvm-的概念" tabindex="-1"><a class="header-anchor" href="#lvm-的概念" aria-hidden="true">#</a> LVM 的概念</h3>
<p><strong>LVM 是 Logical Volume Manager 的简称，译为中文就是逻辑卷管理</strong>。它是 Linux 下对硬盘分区的一种管理机制。LVM 适合于管理大存储设备，并允许用户动态调整文件系统的大小。此外，LVM 的快照功能可以帮助我们快速备份数据。LVM 为我们提供了逻辑概念上的磁盘，使得文件系统不再关心底层物理磁盘的概念。</p>
<p><u>LVM 允许我们在逻辑卷在线的状态下将其复制到另一设备上，此成功被称为快照功能</u>。快照允许我们在复制的同时，保证运行关键任务的 Web 服务器或数据库服务继续工作。</p>
<p>LVM 是在硬盘分区之上建立一个逻辑层，这个逻辑层让多个硬盘或分区看起来像一块逻辑硬盘，然后将这块逻辑硬盘分成逻辑卷之后使用，从而大大提高了分区的灵活性。我们把真实的物理硬盘或分区称作物理卷（PV）；由多个物理卷组成一块大的逻辑硬盘，叫作卷组（VG）；将卷组划分成多个可以使用的分区，叫作逻辑卷（LV）。而在 LVM 中最小的存储单位不再是 block，而是物理扩展块（Physical Extend，PE）。我们通过图1-1 看看这些概念之间的联系。</p>
<div class="custom-container center">
<p><img src="@source/project/Linux_manage/assets/LVM.jpg" alt="LVM" loading="lazy"></p>
<p><strong>图1-1	<u>LVM 示意图</u></strong></p>
</div>
<ul>
<li><strong>物理卷（Physical Volume，PV）</strong>：就是真正的物理硬盘或分区。</li>
<li><strong>卷组（Volume Group，VG）</strong>：将多个物理卷合起来就组成了卷组。组成同一个卷组的物理卷可以是同一块硬盘的不同分区，也可以是不同硬盘上的不同分区。我们可以把卷组想象为一块逻辑硬盘。</li>
<li><strong>逻辑卷（Logical Volume，LV）</strong>：卷组是一块逻辑硬盘，硬盘必须分区之后才能使用，我们把这个分区称作逻辑卷。逻辑卷可以被格式化和写入数据。我们可以把逻辑卷想象为分区。</li>
<li><strong>物理扩展（Physical Extend，PE）</strong>：PE 是用来保存数据的最小单元，我们的数据实际上都是写入 PE 当中的。PE 的大小是可以配置的，默认是 4MB。</li>
</ul>
<p>也就是说，我们在建立 LVM 的时候，需要按照以下步骤来进行：</p>
<ol>
<li>把物理硬盘分成分区，当然也可以是整块物理硬盘</li>
<li>把物理分区建立为物理卷（PV），也可以直接把整块硬盘都建立为物理卷</li>
<li>把物理卷整合为卷组（VG）。卷组就已经可以动态地调整大小了，可以把物理分区加入卷组，也可以把物理分区从卷组中删除</li>
<li>把卷组再划分为逻辑卷（LV），当然逻辑卷也是可以直接调整大小的。我们说逻辑卷可以想象为分区，所以也需要格式化和挂载</li>
</ol>
<p>创建 LVM 的过程，会按照以上步骤，后续会逐个讲解。</p>
<p>其实，在安装 Linux 系统时，我们采用的图形安装界面就可以直接把硬盘配置成 LVM（RAID  也可以在安装时直接配置），但当时我们只分配了基本分区。那是因为 LVM 最主要的作用是调整分区大小，所以就算在安装时已经安装了  LVM，我们还是需要学习 LVM 的命令（后续章节会详解介绍）。</p>
<h3 id="pv-物理卷管理" tabindex="-1"><a class="header-anchor" href="#pv-物理卷管理" aria-hidden="true">#</a> PV 物理卷管理</h3>
<p>其实，我们在安装系统时，是采用图形界面安装的，也可以用图形界面建立 LVM 分区的，非常方便，图形分区过程此处省略。</p>
<p>虽然使用图形界面方式建立 LVM 更加方便，但是 LVM 最主要的作用是在不丢失数据合不停机的情况下调整分区大小，所以我们一定会在系统安装完成之后，使用命令模式进行 LVM 调整。我们一步一步在命令模式下实现 LVM 吧。</p>
<ol>
<li><strong>硬盘分区</strong></li>
</ol>
<p>首先建立所需的物理分区，创建方式就是使用 <code>fdisk</code> 交互命令。需要注意的是，分区的系统 ID 不再是 Linux 默认的分区 ID 83，而要改成 LVM 的 ID 8e。在  <code>/dev/sdb</code> 硬盘中还有空闲空间，在这块硬盘中新建立 3 个分区，每 个分区的大小为 1GB。命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># fdisk /dev/sdb</span>
<span class="token comment">#建立分区的命令省略</span>
Command <span class="token punctuation">{</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: p

Disk /dev/sdb: <span class="token number">21.5</span> GB, <span class="token number">21474836480</span> bytes <span class="token number">255</span> heads, <span class="token number">63</span> sectors/track, <span class="token number">2610</span> cylinders
Units <span class="token operator">=</span> cylinders of <span class="token number">16065</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">8225280</span> bytes
Sector size <span class="token punctuation">(</span>logical/physical<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes
I/O size <span class="token punctuation">(</span>minimum/optimal<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes
Disk identifier: 0x00000ebd

Device Boot		Start	End		Blocks		Id	System
/dev/sdbl		<span class="token number">1</span>		<span class="token number">65</span>		<span class="token number">522081</span>		<span class="token number">83</span>	Linux
/dev/sdb2		<span class="token number">66</span>		<span class="token number">2610</span>	<span class="token number">20442712</span>+ 	<span class="token number">5</span>	Extended
/dev/sdb5		<span class="token number">66</span>		<span class="token number">197</span>		<span class="token number">1060258</span>+	<span class="token number">83</span>	Linux
/dev/sdb6		<span class="token number">198</span>		<span class="token number">329</span>		<span class="token number">1060258</span>+	<span class="token number">83</span>	Linux
/dev/sdb7		<span class="token number">330</span>		<span class="token number">461</span>		<span class="token number">1060258</span>+	<span class="token number">83</span>	Linux
<span class="token comment">#建立了 /dev/sdb5~7 三个分区</span>

Command <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: t
Partition number <span class="token punctuation">(</span><span class="token number">1</span>-7<span class="token punctuation">)</span>: <span class="token number">5</span>
Hex code <span class="token punctuation">(</span>type L to list codes<span class="token punctuation">)</span>: 8e
Changed system <span class="token builtin class-name">type</span> of partition <span class="token number">5</span> to 8e <span class="token punctuation">(</span>Linux LVM<span class="token punctuation">)</span>
<span class="token comment">#把 dev/sdb5 的分区 ID 改为 8e，其他两个分区照做，改好后，查询结果如下：</span>

Command <span class="token punctuation">(</span>m <span class="token keyword">for</span> <span class="token builtin class-name">help</span><span class="token punctuation">)</span>: p
Disk /dev/sdb: <span class="token number">21.5</span> GB, <span class="token number">21474836480</span> bytes <span class="token number">255</span> heads, <span class="token number">63</span> sectors/track, <span class="token number">2610</span> cylinders
Units <span class="token operator">=</span> cylinders of <span class="token number">16065</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">8225280</span> bytes
Sector size <span class="token punctuation">(</span>logical/physical<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes
I/O size <span class="token punctuation">(</span>minimum/optimal<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes
Disk identifier: 0x00000ebd

Device Boot		Start	End		Blocks		Id	System
/dev/sdbl		<span class="token number">1</span>		<span class="token number">65</span>		<span class="token number">522081</span>		<span class="token number">83</span>	Linux
/dev/sdb2		<span class="token number">66</span>		<span class="token number">2610</span>	<span class="token number">20442712</span>+ 	<span class="token number">5</span>	Extended
/dev/sdb5		<span class="token number">66</span>		<span class="token number">197</span>		<span class="token number">1060258</span>+	8e	Linux
/dev/sdb6		<span class="token number">198</span>		<span class="token number">329</span>		<span class="token number">1060258</span>+	8e	Linux
/dev/sdb7		<span class="token number">330</span>		<span class="token number">461</span>		<span class="token number">1060258</span>+	8e	Linux
<span class="token comment">#保存退出</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># partprobe</span>
<span class="token comment">#记得重新读取分区表，否则重启系统</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><ol start="2">
<li><strong>建立物理卷</strong></li>
</ol>
<p>建立物理卷的命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># pvcreate [设备文件名]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在建立物理卷时，我们既可以把整块硬盘都建立成物理卷，也可以把某个分区建立成物理卷。如果要把整块硬盘都建立成物理卷，则命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># pvcreate /dev/sdb</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在我们的使用中要把分区建立成物理卷，所以执行以下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># pvcreate /dev/sdb5</span>
 Writing physical volume data to disk <span class="token string">"/dev/sdb5"</span>
 Physical volume <span class="token string">"/dev/sdb5"</span> successfully created
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># pvcreate /dev/sdb6</span>
 Writing physical volume data to disk <span class="token string">"/dev/sdb6"</span>
 Physical volume <span class="token string">"/dev/sdb6"</span> successfully created
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># pvcreate /dev/sdb7</span>
 Writing physical volume data to disk <span class="token string">"/dev/sdb7"</span>
 Physical volume 7dev/sdb7' successfully created
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="3">
<li><strong>查看物理卷</strong></li>
</ol>
<p>查看物理卷的命令有两个，第一个是 <code>pvscan</code>，用来查询系统中哪些硬盘或分区是物理卷。命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># pvscan</span>
 PV /dev/sdb5 Ivm2 <span class="token punctuation">[</span><span class="token number">1.01</span> GiB<span class="token punctuation">]</span>
 PV /dev/sdb6 Ivm2 <span class="token punctuation">[</span><span class="token number">1.01</span> GiB<span class="token punctuation">]</span>
 PV /dev/sdb7 Ivm2 <span class="token punctuation">[</span><span class="token number">1.01</span> GiB<span class="token punctuation">]</span>
 Total: <span class="token number">3</span> <span class="token punctuation">[</span><span class="token number">3.03</span> GiB<span class="token punctuation">]</span> /in no VG: <span class="token number">0</span> <span class="token punctuation">[</span><span class="token number">0</span> <span class="token punctuation">]</span> / <span class="token keyword">in</span> no VG: <span class="token number">3</span> <span class="token punctuation">[</span><span class="token number">3.03</span> GiB<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>可以看到，在我们的系统中，<code>/dev/sdb5~7</code> 这三个分区是物理卷。最后一行的意思是：共有 3 个物理卷 [大小] / 使用了 0 个卷 [大小] / 空闲 3 个卷 [大小] 。</p>
<p>第二个查询命令是 <code>pvdisplay</code>，它可以查看到更详细的物理卷状态，命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># pvdisplay</span>
 <span class="token string">"/dev/sdb5"</span> is a new physical volume of <span class="token string">"1.01 GiB"</span>
 ---NEW Physical volume ---
 PV Name		/dev/sdb5	<span class="token operator">&lt;</span>--PV名
 VG Name					<span class="token operator">&lt;</span>---属于的VG名，还没有分配，所以空白
 PV Size		<span class="token number">1.01</span> GiB	<span class="token operator">&lt;</span>---PV 的大小
 Allocatable	NO			<span class="token operator">&lt;</span>---是否已经分配
 PE Size		<span class="token number">0</span>			<span class="token operator">&lt;</span>---PE大小，因为还没有分配，所以PE大小也没有指定
 Total PE		<span class="token number">0</span>			<span class="token operator">&lt;</span>---PE总数
 Free PE		<span class="token number">0</span>			<span class="token operator">&lt;</span>---空闲 PE数
 Allocated PE	<span class="token number">0</span>			<span class="token operator">&lt;</span>---可分配的PE数
 PV UUID		CEsVz3-t0sD-e1w0-wkHZ-iaLq-06aV-xtQNTB		<span class="token operator">&lt;</span>---PV的UUID
<span class="token punctuation">..</span>.其它两个PV省略<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ol start="4">
<li><strong>删除物理卷</strong></li>
</ol>
<p>如果不再需要物理卷，则使用 <code>pvremove</code> 命令删除，命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># pvremove /dev/sdb7</span>
 Labels on physical volume <span class="token string">"/dev/sdb7"</span> successfully wiped
<span class="token comment">#当然,在我们的使中还要用到 /dev/sdb7 物理卷，所以实验完成后，记得把它再添加回来</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>在删除物理卷时，物理卷必须不属于任何卷组，也就是需要先将物理卷从卷组中删除，再删除物理卷。其实所有的删除就是把创建过程反过来，建立时不能少某个步骤，删除时也同样不能跳过某一步直接删除。</p>
<h3 id="vg-卷组管理" tabindex="-1"><a class="header-anchor" href="#vg-卷组管理" aria-hidden="true">#</a> VG 卷组管理</h3>
<p>前面，物理分区已经建立，同时也把物理分区建立成了逻辑卷，按照步骤，接下来就建立卷组了。</p>
<p>前面说过，可以把卷组想象成基本分区中的硬盘，是由多个物理卷组成的。卷组就已经可以动态地调整空间大小了，当卷组空间不足时，可以向卷组中添加新的物理卷。</p>
<ol>
<li><strong>建立卷组</strong></li>
</ol>
<p>建立卷组使用的命令是 <code>vgcreate</code>，具体命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vgcreate [选项] 卷组名 物理卷名</span>
选项：
-s PE 大小	：指定 PE 的大小，单位可以是 MB、GB、TB 等。如果不写，则默认 PE 大小是 4MB。
				<span class="token comment">#这里的卷组名指的就是要创建的卷组的名称，而物理卷名则指的是希望添加到此卷组的所有硬盘区分或者整个硬盘。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>我们有三个物理卷 <code>/dev/sdb5~7</code>，先把 <code>/dev/sdb5</code> 和 <code>/dev/sdb6</code> 加入卷组，留着 <code>/dev/sdb7</code> 一会实验调整卷组大小，命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vgcreate -s 8MB scvg /dev/sdb5 /dev/sdb6</span>
 Volume group <span class="token string">"scvg"</span> successfully created
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>我们把 <code>/dev/sdb5</code> 和 <code>/dev/sdb6</code> 两个物理卷加入了卷组 scvg，并指定了 PE 的大小是 8MB。</p>
<ol start="2">
<li><strong>激活卷组</strong></li>
</ol>
<p>卷组创建完毕后，可以通过 <code>vgchange</code> 命令来激活卷组，而无法重启系统。</p>
<p><code>vgchange</code> 命令的基本格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#激活卷组</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vgchange -a y 卷组名</span>
<span class="token comment">#停用卷组</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vachange -a n 卷组名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>通过使用 vgchange 命令，我们可以激活 scvg 卷组。</p>
<ol start="3">
<li><strong>查看卷组</strong></li>
</ol>
<p>查看卷组的命令同样有两个：<code>vgscan</code> 命令主要用于查看系统中是否有卷组；而 <code>vgdisplay</code> 命令则用于查看卷组的详细状态。命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@1ocalhost ~<span class="token punctuation">]</span><span class="token comment"># vgscan</span>
 Reading all physical volumes. This may take a while<span class="token punctuation">..</span>.
 Found volume group <span class="token string">"scvg"</span> using metadata <span class="token builtin class-name">type</span> lvm2
<span class="token comment">#scvg卷组确实存在</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vgdisplay</span>
 ---Volume group ---
 VG Name				scvg			<span class="token operator">&lt;</span>---卷组名
 System					ID
 Format					lvm2
 Metadata Areas			<span class="token number">2</span>
 Metadata Sequence No	<span class="token number">1</span>
 VG Access				read/write		<span class="token operator">&lt;</span>---卷组访问状态
 VG Status				resizable		<span class="token operator">&lt;</span>---卷组状态
 MAX LV					<span class="token number">0</span>				<span class="token operator">&lt;</span>---最大逻辑卷数
 Cur LV					<span class="token number">0</span>
 Open LV				<span class="token number">0</span>
 Max PV					<span class="token number">0</span>				<span class="token operator">&lt;</span>---最大物理卷数
 Cur PV					<span class="token number">2</span>				<span class="token operator">&lt;</span>---当前物理卷数
 Act PV					<span class="token number">2</span>
 VG Size				<span class="token number">2.02</span> GiB		<span class="token operator">&lt;</span>---卷组大小
 PE Size				<span class="token number">8.00</span> MiB		<span class="token operator">&lt;</span>---PE大小
 Total PE				<span class="token number">258</span>				<span class="token operator">&lt;</span>---PE总数
 Alloc PE / Size		<span class="token number">0</span>/0				<span class="token operator">&lt;</span>---已用 PE 数量/大小
 Free PE / Size			<span class="token number">258</span> / <span class="token number">2</span>.02GiB	<span class="token operator">&lt;</span>---空闲PE数量/大小
 VG UUID				Fs0dPf-LV7H-0Ir3-rthA-3UxC-LX5c-FLFriJ
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><ol start="4">
<li><strong>增加卷组容量</strong></li>
</ol>
<p>我们现在要把 <code>/dev/sdb7</code> 加入卷组，使用的命令是 <code>vgextend</code>。命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vgextend scvg /dev/sdb7</span>
 Volume group <span class="token string">"scvg"</span> successfully extended
<span class="token comment">#把/dev/sdb7物理卷也加入scvg卷组</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vgdisplay</span>
 ---Volume group ---
 VG Name				scvg
 System					ID
 Format					lvm2
 Metadata Areas			<span class="token number">3</span>
 Metadata Sequence No	<span class="token number">2</span>
 VG Access				read/write
 VG Status				resizable
 MAX LV					<span class="token number">0</span>
 Cur LV					<span class="token number">0</span>
 Open LV				<span class="token number">0</span>
 Max PV					<span class="token number">0</span>
 Cur PV					<span class="token number">3</span>
 Act PV					<span class="token number">3</span>
 VG Size				<span class="token number">3.02</span> GiB		<span class="token operator">&lt;</span>---卷组容量增加
 PE Size				<span class="token number">8.00</span> MiB
 Total PE				<span class="token number">387</span>				<span class="token operator">&lt;</span>---PE 总数增加
 Alloc PE / Size		<span class="token number">0</span>/0
 Free PE / Size			<span class="token number">387</span> / <span class="token number">3.02</span> GiB
 VG UUID				Fs0dPf-LV7H-0Ir3-rthA-3UxC-LX5c-FLFriJ
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><ol start="5">
<li><strong>减少卷组容量</strong></li>
</ol>
<p>既然可以增加卷组容量，当然也可以减少卷组容量，我们使用 <code>vgreduce</code> 命令在卷组中删除物理卷。命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vgreduce scvg /dev/sdb7</span>
 Removed <span class="token string">"/dev/sdb7"</span> from volume group <span class="token string">"scvg"</span>
<span class="token comment">#在卷组中删除/dev/sdb7物理卷</span>

 <span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vgreduce -a</span>
<span class="token comment">#删除所有未使用的物理卷</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>当然，删除之后记得再添加回来，以便下面再用于实验。</p>
<ol start="6">
<li><strong>删除卷组</strong></li>
</ol>
<p>删除卷组的命令是 <code>vgremove</code>。命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vgremove scvg</span>
 Volume group <span class="token string">"scvg"</span> successfully removed
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>只有在删除卷组之后，才能删除物理卷。还要注意的是，scvg 卷组中还没有添加任何逻辑卷，如果拥有了逻辑卷，则记得先删除逻辑卷再删除卷组。再次强调，删除就是安装的反过程，每一步都不能跳过。</p>
<p>当然，删除之后记得再建立回来，否则逻辑卷的实验无法完成。命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vgcreate -s 8MB scvg /dev/sdb5 /dev/sdb6 /dev/sdb7</span>
 Volume group <span class="token string">"scvg"</span> successfully created
<span class="token comment">#这次三个物理卷就一起加入卷组了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="lv-逻辑卷管理" tabindex="-1"><a class="header-anchor" href="#lv-逻辑卷管理" aria-hidden="true">#</a> LV 逻辑卷管理</h3>
<p>那么，如何将卷组划分为逻辑卷，我们可以把逻辑卷想象成分区，那么这个逻辑卷当然也需要被格式化和挂载。另外，逻辑卷也是可以动态调整大小的，而且数据不会丟失，也不用卸载逻辑卷。</p>
<ol>
<li><strong>建立逻辑卷</strong></li>
</ol>
<p>我们现在已经建立了 3GB 大小的卷组 scvg，接下来需要在卷组中建立逻辑卷。命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># lvcreate [选项] [-n 逻辑卷名] 卷组名</span>
选项：
	-L 容量		：指定逻辑卷大小，单位为 MB、GB、TB 等
	-l 个数		：按照 PE 个数指定逻辑卷大小，这个参数需要换算容量，太麻烦
	-n 逻辑卷名	：指定逻辑卷名
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>我们建立一个 1.5GB 大小的 lamplv 逻辑卷，命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># lvcreate -L 1.5G -n lamplv scvg</span>
 Logical volume <span class="token string">"lamplv"</span> created
<span class="token comment">#在scvg卷组中建立一个1.5GB大小的lamplv逻辑卷</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>建立完逻辑卷，还要在格式化和挂载之后才能正常使用。格式化和挂载命令与操作普通分区时是一样的，不过需要注意的是，逻辑卷的设备文件名是 <code>/dev/卷组名/逻辑卷名</code>，如逻辑卷 lamplv 的设备文件名就是 <code>/dev/scvg/lamplv</code>。具体命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mkfs -t ext4 /dev/scvg/lamplv</span>
<span class="token comment">#格式化</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mkdir /disklvm</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mount /dev/scvg/lamplv /disklvm/</span>
<span class="token comment">#建立挂载点，并挂载</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mount</span>
<span class="token punctuation">..</span>.省略部分输出<span class="token punctuation">..</span>.
/dev/mapper/scvg-lamplv on /disklvm <span class="token builtin class-name">type</span> ext4<span class="token punctuation">(</span>rw<span class="token punctuation">)</span>
<span class="token comment">#已经挂载了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>当然，如果需要开机后自动挂载，则要修改 <code>/etc/fstab</code> 文件。</p>
<ol start="2">
<li><strong>查看逻辑卷</strong></li>
</ol>
<p>查看命令同样有两个，第一个命令 <code>lvscan</code> 只能看到系统中是否拥有逻辑卷，命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># lvscan</span>
 ACTIVE <span class="token string">'/dev/scvg/lamplv'</span> <span class="token punctuation">[</span><span class="token number">1.50</span> GiB<span class="token punctuation">]</span> inherit
<span class="token comment">#能够看到激活的逻辑卷，大小是1.5GB</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>第二个命令 <code>lvdisplay</code> 可以看到逻辑卷的详细信息，命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># lvdisplay</span>
 ---Logical volume---
 LV Path					/dev/scvg/lamplv	<span class="token operator">&lt;</span>---逻辑卷的设备文件名
 LV Name					lamplv				<span class="token operator">&lt;</span>---逻辑卷名
 VG Name					scvg				<span class="token operator">&lt;</span>---所属的卷组名
 LV UUID					2kyKmn-Nupd-CldB-8ngY-NsI3-b8hV-QeUuna
 LV Write Access			read/write
 LV Creation host, <span class="token function">time</span>		localhost, <span class="token number">2013</span>-04-18 03:36:39 +0800
 LV Status					available
 <span class="token comment"># open						1</span>
 LV Size					<span class="token number">1.50</span> GiB			<span class="token operator">&lt;</span>---逻辑卷大小
 Current LE					<span class="token number">192</span>
 Segments					<span class="token number">2</span>
 Allocation					inherit
 Read ahead sectors			auto
 -currently <span class="token builtin class-name">set</span> to			<span class="token number">256</span>
 Block device				<span class="token number">253</span>:0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ol start="3">
<li><strong>调整逻辑卷大小</strong></li>
</ol>
<p>我们可以使用 <code>lvresize</code> 命令调整逻辑卷的大小，不过我们一般不推荐减少逻辑卷的空间，因为这非常容易导致逻辑卷中的文件系统的数据丟失。所以，除非我们已经备份了逻辑卷中的数据，否则不要减少逻辑卷的空间。</p>
<p><code>lvresize</code> 命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># lvresize [选项] 逻辑卷的设备文件名</span>
选项：
	-L 容量	：安装容量调整大小，单位为 KB、GB、TB 等。使用 + 増加空间，- 代表减少空间。如果直接写容量，则代表设定逻辑卷大小为指定大小
	-l 个数	：按照 PE 个数调整逻辑卷大小
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>我们先在 <code>/disklvm</code> 分区中建立一些测试文件，一会儿调整完大小，再看看数据是否丟失了。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cd /disklvm/</span>
<span class="token punctuation">[</span>root@localhost disklvm<span class="token punctuation">]</span><span class="token comment"># touch testf</span>
<span class="token punctuation">[</span>root@localhost disklvm<span class="token punctuation">]</span><span class="token comment"># mkdir testd</span>
<span class="token punctuation">[</span>root@localhost disklvm<span class="token punctuation">]</span><span class="token comment"># ls</span>
lost+found testd testf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>lamplv 逻辑卷的大小是 1.5GB，而 scvg 卷组中还有 1.5GB 的空闲空间，那么增加 lamplv 逻辑卷的大小到 2.5GB。命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost disklvm<span class="token punctuation">]</span><span class="token comment"># lvresize -L 2.5G /dev/scvg/lamplv</span>
 Extending logical volume lamplv to <span class="token number">2.50</span> GiB Logical volume lamplv successfully resized
<span class="token comment">#增加 lamplv 逻辑卷的大小到2.5GB，当然命令也可以这样写</span>
<span class="token punctuation">[</span>roots localhost disklvm<span class="token punctuation">]</span> <span class="token comment"># lvresize -L +1G /dev/scvg/lamplv</span>
<span class="token punctuation">[</span>root@localhost disklvm<span class="token punctuation">]</span><span class="token comment"># lvdisplay</span>
 ---Logical volume ---
 LV Path					/dev/scvg/lamplv
 LV Name					lamplv
 VG Name					scvg
 LV UUID					2kyKmn-Nupd-CldB-8ngY-Ns13-b8hV-QeUuna
 LV Write Access			read/write
 LV Creation host, <span class="token function">time</span>		localhost, <span class="token number">2013</span>-04-18 03:36:39 +0800 LV Status available
 <span class="token punctuation">\</span># <span class="token function">open</span>					<span class="token number">1</span>
 LV Size					<span class="token number">2.50</span> GiB				<span class="token operator">&lt;</span>---大小改变了
 Current LE					<span class="token number">320</span>
 Segments					<span class="token number">3</span>
 Allocation					inherit
 Read ahead sectors			auto
 -currently <span class="token builtin class-name">set</span> to			<span class="token number">256</span>
 Block device				<span class="token number">253</span>:0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>逻辑卷的大小已经改变了，但是好像有如下一些问题：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost disklvm<span class="token punctuation">]</span><span class="token comment"># df -h /disklvm/</span>
文件系统					容量		已用		可用		已用%%		挂载点
/dev/mapper/scvg-lamplv		<span class="token number">1</span>.5G	35M		<span class="token number">1</span>.4G	<span class="token number">3</span>%		/disklvm
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>怎么 <code>/disklvm</code> 分区的大小还是 1.5GB 啊？刚刚只是逻辑卷的大小改变了，如果要让分区使用这个新逻辑卷，则还要<strong>使用 <code>resize2fs</code> 命令来调整分区的大小</strong>。不过这里就体现出了 <strong>LVM 的优势：我们不需要卸载分区，直接就能调整分区的大小。</strong></p>
<p><strong><code>resize2fs</code> 命令的格式</strong>如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># resize2fs [选项] [设备文件名] [调整的大小]</span>
选项：
	-f			：强制调整
	设备文件名	：指定调整哪个分区的大小
	调整的大小	：指定把分区调整到多大，要加 M、G 等单位。如果不加大小，则会使用整个分区
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>我们已经把逻辑卷调整到 2.5GB，这时就需要把整个逻辑卷都加入 <code>/disklvm</code> 分区中，命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># resize2fs /dev/scvg/lamplv</span>
resize2fs <span class="token number">1.41</span>.12<span class="token punctuation">(</span><span class="token number">17</span>-May-2010<span class="token punctuation">)</span>
Filesystem at /dev/scvg/lamplv is mounted on/ disklvm<span class="token punctuation">;</span> on-line resizing required
old desc_blocks <span class="token operator">=</span> <span class="token number">1</span>, new_desc_blocks <span class="token operator">=</span> <span class="token number">1</span>
Performing an on-line resize of/dev/scvg/lamplv to <span class="token number">655360</span> <span class="token punctuation">(</span>4k<span class="token punctuation">)</span> blocks.
The filesystem on /dev/scvg/lamplv is now <span class="token number">655360</span> blocks long.
<span class="token comment">#已经调整了分区大小</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># df -h /disklvm/</span>
文件系统					容量	已用	可用	已用%%	挂载点
/dev/mapper/scvg-lamplv	<span class="token number">2</span>.5G	35M		<span class="token number">2</span>.4G	<span class="token number">2</span>%		/disklvm
<span class="token comment">#分区大小已经是2.5GB 了</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls /disklvm/</span>
lost+found testd testf
<span class="token comment">#而且数据并没有丟失</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>如果要减少逻辑卷的容量，则只需把增加步骤反过来再做一遍就可以了。不过我们并不推荐减少逻辑卷的容量，因为这有可能导致数据丟失。</p>
<ol start="4">
<li><strong>删除逻辑卷</strong></li>
</ol>
<p>删除了逻辑卷，其中的数据就会丟失，所以要确定你真的需要删除这个逻辑卷。命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># lvremove 逻辑卷的设备文件名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>我们删除 lamplv 逻辑卷，记得在删除时要先卸载。 命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># umount /dev/scvg/lamplv</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># lvremove /dev/scvg/lamplv</span>
Do you really want to remove active logical volume lamplv? <span class="token punctuation">[</span>y/n<span class="token punctuation">]</span>: y
Logical volume <span class="token string">"lamplv"</span> successfully removed 

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="raid-磁盘阵列" tabindex="-1"><a class="header-anchor" href="#raid-磁盘阵列" aria-hidden="true">#</a> RAID 磁盘阵列</h2>
<p>LVM 最大的优势在于可以在不卸载分区和不损坏数据的情况下进行分区容量的调整，但是万一硬盘损坏了，那么数据一定会丢失。我们现在要说的 RAID（磁盘阵列）的优势在于硬盘读写性能更好，而且具有一定的数据冗余功能。</p>
<h3 id="raid-简介" tabindex="-1"><a class="header-anchor" href="#raid-简介" aria-hidden="true">#</a> RAID 简介</h3>
<p>RAID（Redundant Arrays of Inexpensive Disks，磁盘阵列），翻译过来就是廉价的、具有冗余功能的磁盘阵列。其原理是通过软件或硬件将多块较小的硬盘或分区组合成一个容量较大的磁盘组。这个较大的磁盘组读写性能更好，更重要的是具有数据冗余功能。那什么是数据冗余呢？从字面上理解，冗余就是多余的、重复的。在磁盘阵列中，冗余是指由多块硬盘组成一个磁盘组，在这个磁盘组中，数据存储在多块硬盘的不同地方，这样即使某块硬盘出现问题，数据也不会丢失，也就是磁盘数据具有了保护功能。RAID 的组成可以是几块硬盘，也可以是几个分区，而硬盘更加容易理解，所以我们在讲解原理时使用硬盘举例，但是大家要知道不同的分区也可以组成 RAID。</p>
<p>常见的 RAID 有这样几种级别。</p>
<h3 id="raid-的级别" tabindex="-1"><a class="header-anchor" href="#raid-的级别" aria-hidden="true">#</a> RAID 的级别</h3>
<ol>
<li><strong>RAID 0</strong></li>
</ol>
<p>RAID 0 也叫 Stripe 或 Striping（带区卷）。是 RAID 级别中存储性能最好的一个，RAID 0 最好由相同容量的两块或两块以上的硬盘组成。如果组成 RAID 0 的两块硬盘大小不一致，则会影响 RAID 0 的性能。在这种模式下会先把硬盘分隔出大小相等的区块，当有数据需要写入硬盘时，会把数据也切割成相同大小的区块，然后分别写入各块硬盘。这样就相当于把一个文件分成几个部分同时向不同的硬盘中写入，数据的读/写速度当然就会非常快。从理论上讲，由几块硬盘组成 RAID 0，比如由 3 块硬盘组成 RAID 0，数据的写入速度就是同样的数据向块硬盘中写入速度的 3 倍。我们画一张 RAID 0 的示意图，如图1-2 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Linux_manage/assets/0.png" alt="0" loading="lazy"></p>
<p><strong>图1-2	<u>RAID 0 示意图</u></strong></p>
</div>
<p>解释一下这张示意图。我们准备了 3 块硬盘组成了 RAID 0，每块硬盘都划分了相等的区块。当有数据要写入 RAID 0 时，首先把数据按照区块大小进行分割，然后再把数据依次写入不同的硬盘。每块硬盘负责的数据写入量都是整体数据的 1/3，当然写入时间也只有原始时间的 1/3。所以，从理论上讲，由几块硬盘组成 RAID 0，数据的写入速度就是数据只写入一块硬盘速度的几倍。</p>
<p><strong>RAID 0 的优点如下：</strong></p>
<ul>
<li>
<p>通过把多块硬盘合并成一块大的逻辑硬盘，实现了数据跨硬盘存储。</p>
</li>
<li>
<p>通过把数据分割成等大小的区块，分别存入不同的硬盘，加快了数据的读/写速度。数据的读/写性能是几种 RAID 中最好的。</p>
</li>
<li>
<p>多块硬盘合并成 RAID 0，几块小硬盘组成了更大容量的硬盘，而且没有容量损失。RAID 0 的总容量就是几块硬盘的容量之和。</p>
</li>
</ul>
<p><strong>RAID 0 也有一个明显的缺点：</strong></p>
<ul>
<li>那就是没有数据冗余功能，RAID 0 中的任何一块硬盘损坏，RAID 0 中所有的数据都将丢失。也就是说，由几块硬盘组成 RAID 0，数据的损毁概率就是只写入一块硬盘的几倍。</li>
</ul>
<p>我们刚刚说了，组成 RAID 0 的硬盘的大小最好都是一样的。那有人说我只有两块不一样大小的硬盘，难道就不能组成 RAID 0 吗？答案是可以的。假设我有两块硬盘，一块大小是 100GB，另一块大小是 200GB。由这两块硬盘组成 RAID 0，那么当最初的 200GB 数据写入时，是分别存放在两块硬盘当中的；但是当数据大于 200GB 之后，第一块硬盘就写满了，以后的数据就只能写入第二块硬盘中，读/写性能也就随之下降了。</p>
<p>一般不建议企业用户使用 RIAD 0，因为数据损毁的概率更高。如果对数据的读/写性能要求非常高，但对数据安全要求不高时，RAID 0 就非常合适了。</p>
<ol start="2">
<li><strong>RAID 1</strong></li>
</ol>
<p>RAID 1 也叫 Mirror 或 Mirroring（镜像卷），由两块硬盘组成。两块硬盘的大小最好一致，否则总容量以容量小的那块硬盘为主。RAID 1 就具备了数据冗余功能，因为这种模式是把同一份数据同时写入两块硬盘。比如我有两块硬盘，组成了 RAID 1，当有数据写入时，相同的数据既写入硬盘 1，也写入硬盘 2。这样相当于给数据做了备份，所以任何一块硬盘损坏，数据都可以在另一块硬盘中找回。RAID 1 的示意图如图1-3 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Linux_manage/assets/1.png" alt="1" loading="lazy"></p>
<p><strong>图1-3	<u>RAID 1 示意图</u></strong></p>
</div>
<p>RAID 1 具有了数据冗余功能，但是硬盘的容量却减少了 50%，因为两块硬盘当中保存的数据是一样的，所以两块硬盘实际上只保存了一块硬盘这么多的数据，这也是我们把 RAID 1 称作镜像卷的原因。</p>
<p><strong>RAID 1 的优点如下：</strong></p>
<ul>
<li>
<p>具备了数据冗余功能，任何一块硬盘出现故障，数据都不会丢失。</p>
</li>
<li>
<p>数据的读取性能虽然不如 RAID 0，但是比单一硬盘要好，因为数据有两份备份在不同的硬盘上，当多个进程读取同一数据时，RAID 1 会自动分配读取进程。</p>
</li>
</ul>
<p>RAID 1 的缺点也同样明显：</p>
<ul>
<li>RAID 1 的容量只有两块硬盘容量的 50%，因为每块硬盘中保存的数据都一样。</li>
<li>数据写入性能较差，因为相同的数据会写入两块硬盘当中，相当于写入数据的总容量变大了。虽然 CPU 的速度足够快，但是负责数据写入的南桥芯片只有一个。</li>
</ul>
<ol start="3">
<li><strong>RAID 10 或 RAID 01</strong></li>
</ol>
<p>我们发现，RAID 0 虽然数据读/写性能非常好，但是没有数据冗余功能；而 RAID 1 虽然具有了数据冗余功能，但是数据写入速度实在是太慢了（尤其是软 RAID 1）。那么，我们能不能把 RAID 0 和 RAID 1 组合起来使用？当然可以，这样我们就既拥有了 RAID 0 的性能，又拥有了 RAID 1 的数据冗余功能。</p>
<p>我们先用两块硬盘组成 RAID 1，再用两块硬盘组成另一个 RAID 1，最后把这两个 RAID 1 组成 RAID 0，这种 RAID 方法我们就称作 RAID 10。那先组成 RATD 0，再组成 RAID 1 的方法我们就称作 RAID 01。我们通过图1-4 来看看 RAID 10。</p>
<div class="custom-container center">
<p><img src="@source/project/Linux_manage/assets/10.png" alt="10" loading="lazy"></p>
<p><strong>图1-4	<u>RAID 10 示意图</u></strong></p>
</div>
<p>我们把硬盘1 和硬盘2 组成了第一个 RAID 1，把硬盘3 和硬盘4 组成了第二个 RAID 1，这两个 RAID 1 组成了 RAID 0。因为先组成 RAID 1，再组成 RAID 0，所以这个 RAID 是 RAID 10。当有数据写入时，首先写入的是 RAID 0（RAID 0 后组成，所以数据先写入），所以数据1 和数据3 写入了第一个 RAID 1，而数据2 和数据4 写入了第二个 RAID 1。当数据1 和数据 3 写入第一个 RAID 1时，因为写入的是 RAID 1，所以在硬盘1 和硬盘2 中各写入了一份。数据2 和数据4 也一样。这样的组成方式，既有了 RAID 0 的性能优点，也有了 RAID 1 的数据冗余优点。但是大家要注意，虽然我们有了 4 块硬盘，但是由于 RAID 1 的缺点，所以真正的容量只有 4 块硬盘的 50%，另外的一半是用来备份的。</p>
<ol start="4">
<li><strong>RAID 5</strong></li>
</ol>
<p>RAID 5 最少需要由 3 块硬盘组成，当然硬盘的容量也应当一致。当组成 RAID 5时，同样需要把硬盘分隔成大小相同的区块。当有数据写入时，数据也被划分成等大小的区块，然后循环向 RAID 5 中写入。不过每次循环写入数据的过程中，在其中一块硬盘中加入一个奇偶校验值（Parity），这个奇偶校验值的内容是这次循环写入时其他硬盘数据的备份。当有一块硬盘损坏时，采用这个奇偶校验值进行数据恢复。通过示意图来看看 RAID 5 的存储过程，如图1-5 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Linux_manage/assets/5.png" alt="5" loading="lazy"></p>
<p><strong>图1-5	<u>RAID 5 示意图</u></strong></p>
</div>
<p>在这张示意图中，我们使用三块硬盘组成了 RAID 5。当有数据循环写入时，每次循环都会写入一个奇偶校验值（Parity），并且每次奇偶校验值都会写入不同的硬盘。这个奇偶校验值就是其他两块硬盘中的数据经过换算之后产生的。因为每次奇偶校验值都会写入不同的硬盘，所以任何一块硬盘损坏之后，都可以依赖其他两块硬盘中保存的数据恢复这块损坏的硬盘中的数据。</p>
<p>不过需要注意，每次数据循环写入时，都会有一块硬盘用来保存奇偶校验值，所以在 RAID 5 中可以使用的总容量是硬盘总数减去一块的容量之和。比如，在这张示意图中，由三块硬盘组成了 RAID 5，但是真正可用的容量是两块硬盘的容量之和，也就是说，越多的硬盘组成 RAID 5，损失的容量占比越小，因为不管由多少块硬盘组成 RAID 5，奇偶校验值加起来只占用一块硬盘。而且还要注意，RAID 5 不管是由几块硬盘组成的，只有损坏一块硬盘的情况才能恢复数据，因为奇偶校验值加起来只占用了一块硬盘，如果损坏的硬盘超过一块，那么数据就不能再恢复了。</p>
<p><strong>RAID 5 的优点如下：</strong></p>
<ul>
<li>
<p>因为奇偶校验值的存在，RAID 5 具有了数据冗余功能。</p>
</li>
<li>
<p>硬盘容量损失比 RAID 1 小，而且组成 RAID 5 的硬盘数量越多，容量损失占比越小，因为奇偶校验值加起来只占用一块硬盘。</p>
</li>
<li>
<p>RAID 5 的数据读/写性能要比 RAID 1 更好，但是在数据写入性能上比 RAID 0 差。</p>
</li>
</ul>
<p><strong>RAID 5 的缺点如下:</strong></p>
<ul>
<li>
<p>不管由多少块硬盘组成 RAID 5，只支持一块硬盘损坏之后的数据恢复。</p>
</li>
<li>
<p>RAID 5 的实际容量是组成 RAID 5 的硬盘总数减去一块的容量之和。也就是有一块硬盘用来保存奇偶校验值，但不能保存数据。</p>
</li>
</ul>
<p>从总体上来说，RAID 5 更像 RAID 0 和 RAID 1 的折中，性能比 RAID 1 好，但是不如 RAID 0；数据冗余比 RAID 0 好，而且不像 RAID 1 那样浪费了 50% 的硬盘容量。</p>
<ol start="5">
<li><strong>软 RAID 和硬 RAID</strong></li>
</ol>
<p>我们要想在服务器上实现 RAID，可以采用磁盘阵列卡（RAID 卡）来组成 RAID，也就是硬 RAID。RAID 卡上有专门的芯片负责 RAID 任务，因此性能要好得多，而且不占用系统性能，缺点是 RAID 卡比较昂贵。如果我们既不想花钱又想使用 RAID，那就只能使用软 RAID了。软 RAID 是指通过软件实现 RAID 功能，没有多余的费用，但是更加耗费服务器系统性能，而且数据的写入速度也较硬 RAID 慢。硬 RAID 是通过不同厂商的 RAID 卡实现的，每种 RAID 卡的系统都不太一样，需要参考各个 RAID 卡厂商的说明。我们接下来要讲解的是通过 Linux 系统实现的软 RAID。和 LVM 一样，软 RAID 可以在安装系统的同时配置，也可以在安装完成之后通过系统命令配置。</p>
<h3 id="命令模式配置-raid-5" tabindex="-1"><a class="header-anchor" href="#命令模式配置-raid-5" aria-hidden="true">#</a> 命令模式配置 RAID 5</h3>
<p>图形界面确实方便，不过 RAID 和 LVM 一样，主要的应用还是在命令行当中，因为如果硬盘出现了数据损坏，总不能重新安装吧！那么我们学习在命令行界面中如何分配和使用 RAID，这次我们仍然使用相同大小的分区配置最为常见的 RAID 5。</p>
<ol>
<li><strong>准备分区</strong></li>
</ol>
<p>我们建立三个 2GB 大小的分区，构建 RAID 5。不过我们多建立了一个 2GB 大小的分区，这个分区用作备份分区。</p>
<p>这个备份分区的作用是什么呢？RAID 最大的好处就是具有数据冗余功能，当有一块硬盘或分区损坏时，数据不会丢失，只要插入新的硬盘或分区，依赖其他分区就会主动重建损坏的硬盘或分区中的数据。不过这仍然需要关闭服务器，手工插拔硬盘。如果在组成 RAID 的时候就加入了备份硬盘或备份分区，那么当硬盘或分区损坏时，RAID 会自动用备份硬盘或备份分区代替损坏的硬盘或分区，然后立即重建数据，而不需要人为手工参与。这样就避免了服务器停机和人为手工参与，非常方便，唯一的问题就是需要多余的硬盘或分区作为备份设备。</p>
<p>也就是说，我们在这个实验中需要 4 个 2GB 大小的分区，其中 3 个组成 RAID 5，1 个作为备份分区。建立分区的过程这里不再详细解释，建立完分区之后，可以使用 <code>fdisk -l</code> 命令查看。命令如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[root@localhost ~]# fdisk -l
...省略部中输出...
Disk /dev/sdb: 21.5 GB, 21474836480 bytes
255 heads, 63 sectora/track, 2610 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes
sector size (loglcal/physical): 512 bytes / 512 bytes
I/O size [minimum/optimal): 512 bytes / 512 bytes
Disk identifier: Oxba384969

Device Buot	start	End		Blocks		Id	System
/dev/sdb1	1		2610	20964793+	5	Extended 
/dev/sdb5	1		262		2104452		83	Linux
/dev/sdb6	263		524		2104483+	83	Linux
/dev/sab7	525		786		2104483+	83	Linux
/dev/sdb8	787		1048	2104483+	83	Linux
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>我们建立了 <code>/dev/sdb5</code>、<code>/dev/sdb6</code>、<code>/dev/sdb7</code> 和 <code>/dev/sdb8</code> 共 4 个 2GB 大小的分区。</p>
<ol start="2">
<li><strong>建立 RAID 5</strong></li>
</ol>
<p>建立 RAID 使用 <code>mdadm</code> 命令，命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mdadm [模式] [RAID 设备文件名] [选项]</span>
模式：
	Assemble	：加入一个已经存在的阵列
	Buiid		：创建一个没有超级块的阵列。
	Create		：创建一个阵列。每个设备都具有超级块
	Manage		：管理阵列，如添加设备和删除损坏设备
	Misc		：允许单独对阵列中的设备进行操作，如停止阵列
	Follow		：监控 RAID 状态
	<span class="token punctuation">(</span>or Monitor<span class="token punctuation">)</span>
	Grow		：改变 RAID 的容量或阵列中的数目
选项：
	~s,--scan				：扫描配置文件或 /proc/mdstat 文件，发现丢失的信息
	-D,--detail				：查看磁盘阵列详细信息
	-C,--create				：建立新的磁盘阵列，也就是调用 Create 模式
	-a,--auto-yes			：采用标准格式建立磁盘阵列
	-n,--raid-devices<span class="token operator">=</span>数字	：使用几块硬盘或分区组成 RAID
	-l,--level<span class="token operator">=</span>级别			：创建 RAID 的级别，可以是0,1,5
	-x,--spare-devices<span class="token operator">=</span>数字	：使用几块硬盘或分区组成备份设备
	-a,--add 设备文件名		：在已经存在的 RAID 中加入设备
	-r,--remove 设备文件名	：在已经存在的 RAID 中移除设备
	-f,--fail 设备文件名		：把某个组成 RAID 的设备设置为错误状态
	-S,--stop				：停止 RAID 设备
	-A,--assemble			：按照配置文件加载 RAID
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>我们准备创建的是 RAID 5，所以使用以下命令创建：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mdadm --create --auto-yes /dev/md0 --level=5 --raid-devices=3 --spare-devices=1 /dev/sdb5 /dev/sdb6 /dev/sdb7 /dev/sdb8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>其中，<code>/dev/md0</code> 是第一个 RAID 设备的设备文件名，如果还有 RAID 设备，则可以使用 <code>/dev/md[0一9]</code> 来代表。我们建立了 RAID 5，使用了三个分区，并建立了一个备份分区。先查看一下新建立的 <code>/dev/md0</code>，命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token operator">|</span><span class="token comment"># mdadm --detail /dev/md0</span>
/dev/md0:											<span class="token operator">&lt;</span>---设备文件名
		Version <span class="token builtin class-name">:</span> <span class="token number">1.2</span>
  Creation Time <span class="token builtin class-name">:</span> Tue Apr <span class="token number">23</span> <span class="token number">23</span>:13:48 <span class="token number">2013</span>			<span class="token operator">&lt;</span>---创建时间
	 Raid Level <span class="token builtin class-name">:</span> raid5								<span class="token operator">&lt;</span>---RAID 级别
	 Array Size <span class="token builtin class-name">:</span> <span class="token number">4206592</span> <span class="token punctuation">(</span><span class="token number">4.01</span> GiB <span class="token number">4.31</span> GB<span class="token punctuation">)</span>		<span class="token operator">&lt;</span>---RAID 总容量
  Used Dev Gize <span class="token builtin class-name">:</span> <span class="token number">2103296</span> <span class="token punctuation">(</span><span class="token number">2.01</span> GiB <span class="token number">2.15</span> GB<span class="token punctuation">)</span>		<span class="token operator">&lt;</span>---每个分区的容量
   Raid Devices <span class="token builtin class-name">:</span> <span class="token number">3</span>									<span class="token operator">&lt;</span>---组成 RAID 的设备数
  Total Devices <span class="token builtin class-name">:</span> <span class="token number">4</span>									<span class="token operator">&lt;</span>---总设备数
	Persistence <span class="token builtin class-name">:</span> Superblock is persistent
	Update Time <span class="token builtin class-name">:</span> Tue Apr <span class="token number">23</span> <span class="token number">23</span>:14:52 <span class="token number">2013</span>
		  State ：clean
 Active Devices <span class="token builtin class-name">:</span> <span class="token number">3</span>									<span class="token operator">&lt;</span>---激活的设备数
Working Devices <span class="token builtin class-name">:</span> <span class="token number">4</span>									<span class="token operator">&lt;</span>---可用的设备数
 Failed Devicest: O									<span class="token operator">&lt;</span>---错误的设备数
  Spare Devices <span class="token builtin class-name">:</span> <span class="token number">1</span>									<span class="token operator">&lt;</span>---备份设备数
		 Layout <span class="token builtin class-name">:</span> left-symmetric
	 Chunk size <span class="token builtin class-name">:</span> 512K
		   Name <span class="token builtin class-name">:</span> localhost.localdomain:0 <span class="token punctuation">(</span>local to <span class="token function">host</span> localhost.localdomain<span class="token punctuation">)</span>
		   UUID <span class="token builtin class-name">:</span> 15026b78:126a4930:89d8cf54:5bcb7e95
		 Events <span class="token builtin class-name">:</span> <span class="token number">18</span>
Number	Major	Minor	RaidDevice	State
<span class="token number">0</span>		<span class="token number">8</span>		<span class="token number">21</span>		<span class="token number">0</span>			active <span class="token function">sync</span>	/dev/sdb5
<span class="token number">1</span>		<span class="token number">8</span>		<span class="token number">22</span>		<span class="token number">1</span>			active <span class="token function">sync</span>	/dev/sdb6
<span class="token number">4</span>		<span class="token number">8</span>		<span class="token number">23</span>		<span class="token number">2</span>			active <span class="token function">sync</span>	/dev/sdb7
<span class="token comment">#三个激活的分区</span>
<span class="token number">3</span>		<span class="token number">9</span>		<span class="token number">24</span>		-			spare		/dev/sdb8		
<span class="token comment">#备份分区</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>再查看一下 <code>/proc/mdstat</code> 文件，这个文件中也保存了 RAID 的相关信息。命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cat /proc/mdstat</span>
Personalities <span class="token builtin class-name">:</span> <span class="token punctuation">[</span>raid6<span class="token punctuation">]</span> <span class="token punctuation">[</span>raid5<span class="token punctuation">]</span> <span class="token punctuation">[</span>raid4<span class="token punctuation">]</span>
md0 <span class="token builtin class-name">:</span> active raid5 sdb9<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">(</span>S<span class="token punctuation">)</span> sdb5<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> sdb8<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> sdb6<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token comment">#RAID名：	 级别	组成 RAID 的分区，[数字]是此分区在 RAID 中的顺序</span>
<span class="token comment">#(S)代表备份分区</span>
	<span class="token number">4206592</span> blocks super <span class="token number">1.2</span> level <span class="token number">5</span>, 512k chunk, algorithm <span class="token number">2</span> <span class="token punctuation">[</span><span class="token number">3</span>/3<span class="token punctuation">]</span> <span class="token punctuation">[</span>UUU<span class="token punctuation">]</span>
	总block数				等级是5		区块大小	阵列算法<span class="token punctuation">[</span>组成设备数/正常设备数<span class="token punctuation">]</span>
unused devices: <span class="token operator">&lt;</span>none<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="3">
<li><strong>格式化与挂载 RAID</strong></li>
</ol>
<p>RAID 5 已经创建，但是要想正常使用，也需要格式化和挂载。格式化命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mkfs -t ext4 /dev/md0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>挂载命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mkdir /raid</span>
<span class="token comment">#建文桂截点</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mount /dev/md0 /raid</span>
<span class="token comment">#挂载/dev/md0</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mount</span>
<span class="token punctuation">..</span>.省略部分输出<span class="token punctuation">..</span>.
/dev/md0 on /raid <span class="token builtin class-name">type</span> ext4 <span class="token punctuation">(</span>rw<span class="token punctuation">)</span>
<span class="token comment">#查看一下，已经正常挂载</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="4">
<li><strong>生成 mdadm 配置文件</strong></li>
</ol>
<p>在 CentOS 6.x中，mdadm 配置文件并不存在，需要手工建立。我们使用以下命令建立 <code>/etc/mdadm.conf</code> 配置文件：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo Device /dev/sab[5-8] >> /etc/mdadm.conf</span>
<span class="token comment">#建立 /etc/mdadm.conf 配置文件，并把组成 RAID 的分区的设备文件名写入</span>
<span class="token comment">#注意：如果有多个 RAID。则要把所有组成 RAID 的设备都放人配置文件中；否则 RAID 设备重启后会丢失</span>
<span class="token comment">#比如组成 RAID 10，就既要把分区的设备文件名放入此文件中，也要把组成 RAID O 的 RAID 1 设备文件名放入</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mdadm -Ds >> /etc/mdadm.conf</span>
<span class="token comment">#查询和扫描 RAID 信息，并追加进 /etc/mdadm.conf 文件</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/mdadm.conf</span>
Device	/dev/sdb5 /dev/sdb6 /dev/sdb7 /dev/sdb8
ARRAY	/dev/md0	<span class="token assign-left variable">metadata</span><span class="token operator">=</span><span class="token number">1.2</span>	<span class="token assign-left variable">spares</span><span class="token operator">=</span><span class="token number">1</span>	<span class="token assign-left variable">name</span><span class="token operator">=</span>localhost.localdomain:0	uuip-dd821fe5:8597b126:460a3afd:857c7989
<span class="token comment">#查看文件内容</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="5">
<li><strong>设置开机后自动挂载</strong></li>
</ol>
<p>自动挂载也要修改 <code>/etc/fstab</code> 配置文件，命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># iv /etc/fstab</span>
/dev/md0		/raid		ext4	dedaults	<span class="token number">1</span> <span class="token number">2</span>
<span class="token comment">#加入此行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>如果要重新启动，则一定要在这一步完成之后再进行，否则会报错。</p>
<ol start="6">
<li><strong>启动或停止 RAID</strong></li>
</ol>
<p>RAID 设备生效后，不用手工启动或停止。但是，如果需要卸载 RAID 设备，就必须手了停止 RAID。这里我们学习下启动和停让 RAID 的方法。先看看停止命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mdadm -S /dev/md0</span>
<span class="token comment">#停止 /dev/md0 设备</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>当然。如果要删除 RAID，则要非常小心，要把所有和 RAID 相关的内容全部删除，才能保证系統不报错。需要进行的步骤如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># umount /dev/md0</span>
<span class="token comment">#卸载 RAID</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/fstab</span>
/dev/md0		/raid		ext4	dedaults	<span class="token number">1</span> <span class="token number">2</span>
<span class="token comment">#删除此行</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mdadm -S /dev/md0</span>
mdadm: stopped dcv/md0
<span class="token comment">#停止 RAID</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/mdadm.conf</span>
ARRAY	/dev/md0	<span class="token assign-left variable">metadata</span><span class="token operator">=</span><span class="token number">1.2</span>	<span class="token assign-left variable">spares</span><span class="token operator">=</span><span class="token number">1</span>	<span class="token assign-left variable">name</span><span class="token operator">=</span>localhost.localdomain:0	uuip-dd821fe5:8597b126:460a3afd:857c7989
<span class="token comment">#删除或者注释此行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>如果仅仅是停止，而不是删除，就没有这么麻烦了，只需先卸载。再停止即可。那停止完成之后，怎么再启动呢？启动 RAID 的命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mdadm -As /dev/md0</span>
mdadm: /dev/md0 has been started with <span class="token number">3</span> drives and <span class="token number">1</span> spare.
<span class="token comment">#启动 /dev/md0</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mount /dev/md0 /raid/</span>
<span class="token comment">#启动 RAID 后，记得挂载</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="7">
<li><strong>模拟分区出现故障</strong></li>
</ol>
<p>我们的 RAID 虽然配置完成了，但是它真的生效了吗？我们模拟磁盘报错，看看备份分区是否会自动代替错误分区。<code>mdadm</code> 命令有一个选项 “-f”。这个选项的作用就是把一块硬盘或分区变成错误状态，用来模拟 RAID 报错。命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mdadm /dev/md0 -f /dev/sdb7</span>
mdadm: <span class="token builtin class-name">set</span> /dev/sdb7 faulty <span class="token keyword">in</span> /dev/md0
<span class="token comment">#模拟/dev/sdb7 分区报错</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mdadm -D /dev/md0</span>
/dev/md0:
<span class="token punctuation">..</span>.省略部分输出<span class="token punctuation">..</span>.
 Active Devices <span class="token builtin class-name">:</span> <span class="token number">2</span>
Working Devices <span class="token builtin class-name">:</span> <span class="token number">3</span>
 Failed Devices <span class="token builtin class-name">:</span> <span class="token number">1</span>			<span class="token operator">&lt;</span>---一个设备报错了
  Spare Devices <span class="token builtin class-name">:</span> <span class="token number">1</span>

<span class="token punctuation">..</span>.省略部分输出<span class="token punctuation">..</span>.

	Number	Major	Minor	RaidDevice	State
	<span class="token number">0</span>		<span class="token number">8</span>		<span class="token number">21</span>		<span class="token number">0</span>			active <span class="token function">sync</span>  /dev/sdb5
	<span class="token number">1</span>		<span class="token number">8</span>		<span class="token number">21</span>		<span class="token number">1</span>			active <span class="token function">sync</span>  /dev/sdb6
	<span class="token number">3</span>		<span class="token number">8</span>		<span class="token number">24</span>		<span class="token number">2</span>			spare rebuilding  /dev/sdb8
	<span class="token comment">#/dev/sdb8 分区正在准备修复</span>
	<span class="token number">4</span>		<span class="token number">8</span>		<span class="token number">23</span>		-			faulty spare  /dev/sdb7
	<span class="token comment">#/dev/sdb7已经报错了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>要想看到上面的效果，查看时要快一点，否则修复就可能完成了。因为有备份分区的存在，所以分区损坏了，是不用管理员手工参与的。如果修复完成，再查看，就会出现下面的情况：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost <span class="token punctuation">]</span><span class="token comment"># mdadm -D /dev/md0</span>
	Number	Major	Minor	RaidDevice	State
	<span class="token number">0</span>		<span class="token number">8</span>		<span class="token number">21</span>		<span class="token number">0</span>			active <span class="token function">sync</span>  /dev/sdb5
	<span class="token number">1</span>		<span class="token number">8</span>		<span class="token number">21</span>		<span class="token number">1</span>			active <span class="token function">sync</span>  /dev/sdb6
	<span class="token number">3</span>		<span class="token number">8</span>		<span class="token number">24</span>		<span class="token number">2</span>			active <span class="token function">sync</span>  /dev/sdb8
	
	<span class="token number">4</span>		<span class="token number">8</span>		<span class="token number">23</span>		<span class="token number">2</span>			faulty spare  /dev/sdb7
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>备份分区 <code>/dev/sdb8</code> 已经被激活，但是 <code>/dev/sdb7</code> 分区失效了。</p>
<ol start="8">
<li><strong>移除错误分区</strong></li>
</ol>
<p>既然分区已经报错了，我们就把 <code>/dev/sdb7</code> 分区从 RAID 中删除。如果这是硬盘，就可以进行更换硬盘的处理了。移除命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mdadm /dev/md0 --remove /dev/sdb7</span>
mdadm: hot removed /dev/sdb7 from /dev/md0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>9.添加新的备份分区</p>
<p>既然分区已经报错，那么我们还需要加入一个新的备份分区，以备下次硬盘或分区出现向题。既然要加入新的备份分区，当然还需要再划分出一个 2GB 大小的分区出来，命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># fdisk -l</span>
Disk /dev/sdb: <span class="token number">21.5</span> GB, <span class="token number">21474836480</span> bytes
<span class="token number">255</span> heads, <span class="token number">63</span> sectors/track, <span class="token number">2610</span> cylinders
Unita <span class="token operator">=</span> cylinders of <span class="token number">16065</span> * <span class="token number">512</span> <span class="token operator">=</span> <span class="token number">8225280</span> bytes
Sector size <span class="token punctuation">(</span>logical/physical<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes
I/0 size <span class="token punctuation">(</span>minimum/optimal<span class="token punctuation">)</span>: <span class="token number">512</span> bytes / <span class="token number">512</span> bytes
Disk identifier： 0x151a68a9

Device Boot		start	End		Blocks		Id	System
/dev/sdb1		<span class="token number">1</span>		<span class="token number">2610</span>	<span class="token number">20964793</span>+	<span class="token number">5</span>	Extended 
/dev/sdb5		<span class="token number">1</span>		<span class="token number">262</span>		<span class="token number">2104452</span>		<span class="token number">83</span>	Linux
/dev/sdb6		<span class="token number">263</span>		<span class="token number">524</span>		<span class="token number">2104483</span>+	<span class="token number">83</span>	Linux
/dev/sdb7		<span class="token number">525</span>		<span class="token number">786</span>		<span class="token number">2104483</span>+	<span class="token number">83</span>	Linux
/dev/sdb8		<span class="token number">787</span>		<span class="token number">1048</span>	<span class="token number">2104483</span>+	<span class="token number">83</span>	Linux
/dev/sdb9		<span class="token number">1049</span>	<span class="token number">1310</span>	<span class="token number">2104483</span>+	<span class="token number">83</span>	Linux
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>我们新建了 <code>/dev/sdb9</code> 分区，然后把它加入 <code>/dev/md0</code> 作为备份分区，命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mdadm /dev/md0 --add /dev/sdb9</span>
mdadm: added /dev/sdb9
<span class="token comment">#把 /dev/sdb9 加入/dev/md0</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mdadm -D /dev/md0</span>
<span class="token punctuation">..</span>.省略部分输出<span class="token punctuation">..</span>.

	Number	Major	Minor	RaidDevice	State
	<span class="token number">0</span>		<span class="token number">8</span>		<span class="token number">21</span>		<span class="token number">0</span>			active <span class="token function">sync</span>  /dev/sdb5
	<span class="token number">1</span>		<span class="token number">8</span>		<span class="token number">21</span>		<span class="token number">1</span>			active <span class="token function">sync</span>  /dev/sdb6
	<span class="token number">3</span>		<span class="token number">8</span>		<span class="token number">24</span>		<span class="token number">2</span>			active <span class="token function">sync</span>  /dev/sdb8
	
	<span class="token number">4</span>		<span class="token number">8</span>		<span class="token number">25</span>		-			spare  /dev/sdb9
<span class="token comment">#查看一下，/dev/sdb9 已经变成了备份分区</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></template>
