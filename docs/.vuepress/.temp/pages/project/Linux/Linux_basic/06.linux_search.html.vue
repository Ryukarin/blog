<template><p>Linux 拥有强大的搜索功能，但是强大带来的缺点是相对比较复杂。但是大家不用担心，搜索命令只是选项较多，不容易记忆而已，并不难理解。</p>
<p>在使用搜索命令的时候，大家还是需要注意，如果搜索的范围过大、搜索的内容过多，则会给系统造成巨大的压力，所以不要在服务器访问的高峰执行大范围的搜索命令。</p>
<h2 id="whereis-命令" tabindex="-1"><a class="header-anchor" href="#whereis-命令" aria-hidden="true">#</a> whereis 命令</h2>
<p><code>whereis</code> 命令，用于搜索系统命令，也就是说，<code>whereis</code> 命令不能搜索普通文件，而只能搜索系统命令。</p>
<p><code>whereis</code> 命令不仅可以搜索二进制命令，还可以找到命令的帮助文档的位置。</p>
<p>英文原意：locate the binary, source, and manual page files for a command</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># where [选项] 系统命令</span>
选项：
	-b	：只查找二进制命令
	-m	：只查找帮助文档
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>常见用法：</p>
<p><code>whereis</code> 命令的使用比较简单，我们来试试，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># whereis ls</span>
ls：/bin/ls /usr/share/man/man1/ls.1.gz /usr/share/man/man1p/ls.1p.gz 
<span class="token comment">#既可以看到二进制命令的位置，也可以看到帮助文档的位置</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>但是，如果使用 <code>whereis</code> 命令查看普通文件，则无法查找到。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># touch cangls</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># whereis cangls</span>
cangls:
<span class="token comment">#无法查找到普通文件的信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>如果需要查找普通文件的内容，则需要使用 <code>find</code> 命令，我们稍后会详细讲解 <code>find</code> 命令。</p>
<p>再看一下 <code>whereis</code> 命令的选项。如果我们只想查看二进制命令的位置，则可以使用“-b” 选项；而如果我们只想查看帮助文档的位置，则可以使用“-m”选项。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># whereis -b ls</span>
ls：/bin/ls
<span class="token comment">#只查看二进制命令的位置</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># whereis -m ls</span>
ls：/usr/share/man/man1/ls.1.gz /usr/share/man/man1p/ls.1p.gz
<span class="token comment">#只查看帮助文档的位置</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="which-命令" tabindex="-1"><a class="header-anchor" href="#which-命令" aria-hidden="true">#</a> which 命令</h2>
<p><code>which</code> 命令，也是用于搜索系统命令。</p>
<p>和 <code>whereis</code> 命令的区别在于，<code>whereis</code> 命令可以在查找到二进制命令的同时，查找到帮助文档的位置；而 <code>which</code> 命令在查找到二进制命令的同时，如果这个命令有别名，则还可以找到别名命令。</p>
<p>英文原意：shows the full path of (shell) commands</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># which 系统命令</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>which</code> 命令非常简单，可用选项也不多，我们直接举个例子：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># which ls</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">ls</span><span class="token operator">=</span><span class="token string">'ls --color=auto'</span>
/bin/ls
<span class="token comment">#which 命令可以查找到命令的别名和命令所在的位置</span>
<span class="token comment">#alias这段就是别名，别名就是小名，也就是说，当我们输入 ls 命令时，实际上执行的是 ls --color=auto</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="locate-命令" tabindex="-1"><a class="header-anchor" href="#locate-命令" aria-hidden="true">#</a> locate 命令</h2>
<p><code>locate</code> 命令，按照文件名搜索普通文件。</p>
<p>英文原意：find files by name</p>
<p><code>whereis</code> 和 <code>which</code> 都是只能搜索系统命令的命令，而 <code>locate</code> 命令才是可以按照文件名搜索普通文件的命令。</p>
<p>但是 <code>locate</code> 命令的局限也很明显，它只能按照文件名来搜索文件，而不能执行更复杂的搜索，比如按照权限、大小、修改时间等搜索文件。如果要按照复杂条件执行搜索，则只能求助于功能更加强大的 <code>find</code> 命令。<code>locate</code> 命令的优点也非常明显，那就是搜索速度非常快，而且耗费系统资源非常小。这是因为 <code>locate</code> 命令不会直接搜索硬盘空间，而会先建立 <code>locate</code> 数据库，然后在数据库中按照文件名进行搜索，是快速的搜索命令。</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># locate [选项] 文件名</span>
选项：
	-i	：忽略大小写
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol>
<li><strong>基本用法</strong></li>
</ol>
<p>搜索 Linux 的安装日志。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># locate install.log</span>
/root/install.log
/root/install.log.syslog
<span class="token comment">#搜索文件名叫包含 install.log 的文件 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>系统命令其实也是文件，也可以按照文件名来搜索系统命令。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># locate mkdir</span>
/bin/mkdir
/usr/bin/gnomevfs-mkdir 
/usr/lib/per15/auto/POSIX/mkdir.al 
<span class="token punctuation">..</span>.省略部分内容<span class="token punctuation">..</span>. 
<span class="token comment">#会搜索出所有含有 mkdir 字符串的文件名，当然也包含 mkdir 命令</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="2">
<li><strong>locate 命令的数据库</strong></li>
</ol>
<p>我们在使用 <code>locate</code> 命令的时候，可能会发现一个问题：如果我们新建立一个文件，那么 <code>locate</code> 命令找不到这个文件。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># touch cangls</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># locate cangls</span>
<span class="token comment">#新建立的文件，locate 命令找不到 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这是因为 <code>locate</code> 命令不会直接搜索硬盘空间，而会搜索 <code>locate</code> 数据库。这样做的好处是耗费系统资源小、搜索速度快；缺点是数据库不是实时更新的，而要等用户退出登录或重启系统时，<code>locate</code> 数据库才会更新，所以我们无法查找到新建立的文件。 既然如此，<code>locate</code> 命令的数据库在哪里呢？</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll /var/lib/mlocate/mlocate.db</span>
-rw-r----- <span class="token number">1</span> root <span class="token function">slocate</span> <span class="token number">2328027</span> <span class="token number">6</span>月 <span class="token number">14</span> 02:08 /var/lib/mlocate/mlocate.db
<span class="token comment">#这是 locate 命令实际搜索的数据库的位置</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这个数据库是二进制文件，不能直接使用 <code>Vim</code> 等编辑器查看，而只能使用对应的 <code>locate</code> 命令进行搜索。如果我们不想退出登录或重启系统，则也可以通过 <code>updatedb</code> 命令来手工更新这个数据。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># locate cangls</span>
<span class="token comment">#没有更新数据库时，找不到 cangls 文件</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># updatedb</span>
<span class="token comment">#更新数据库</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># locate cangls</span>
/root/cangls
<span class="token comment">#新建立的文件已经可以搜索到了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="3">
<li><strong>locate 配置文件</strong></li>
</ol>
<p>我们再做一个实验，看看这是什么原因导致的。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># touch /tmp/lmls</span>
<span class="token comment">#在/tmp/目录下新建立一个文件</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># updatedb</span>
<span class="token comment">#更新 locate 数据库</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># locate lmls</span>
<span class="token comment">#依然查询不到 lmls 这个新建文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>新建立了 <code>/mp/lmls</code> 文件，而且也执行了 <code>updatedb</code> 命令，却依然无法找到这个文件，这是什么原因？这就要来看看 <code>locate</code> 的配置文件 <code>/etc/updatedb.conf</code> 了。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/updatedb.conf</span>
PRUNE_BIND_MOUNTS <span class="token operator">=</span><span class="token string">"yes"</span>
<span class="token comment">#开启搜索限制，也就是让这个配置文件生效</span>
PRUNEFS <span class="token operator">=</span><span class="token string">"9p afs anon_inodefs auto autofs bdev binfmt_misc cgroup cifs coda configts cpuset debugfs devpts ecryptfs exofs fuse fusectl gis gfs2 hugetibrs inotifyfs iso9660 jffs2 lustre mqueue nepfs nfs nfs4 nfsd pipefs proc ramfs rootta rpc_pipefs securityfs selinuxfs sfs sockfs sysfs tmpfs ubifs udf usbfs"</span>
<span class="token comment">#在 locate 执行搜索时，禁止搜索这些文件系统类型</span>
PRUNENAMES <span class="token operator">=</span><span class="token string">".git .hg . svn"</span>
<span class="token comment">#在 locate 执行搜索时，禁止搜索带有这些扩展名的文件</span>
PRUNEPATHS <span class="token operator">=</span><span class="token string">"/afs /media /net /sfs /tmp /udev /var/cache/ccache /var/spool/cupg /var/spool/squid /var/tmp"</span>
<span class="token comment">#在 locate 执行搜索时，禁止搜索这些系统目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>在 <code>locate</code> 执行搜索时，系统认为某些文件系统、某些文件类型和某些目录是没有搜索必要的，比如光盘、网盘、临时目录等，这些内容要么不在 Linux 系统中（外来存储和网络存储），要么是系统的缓存和临时文件。刚好 <code>/tmp</code> 目录也在 <code>locate</code> 搜索的排除目录当中，所以在 <code>/tmp</code> 目录下新建的文件是无法被找到的。</p>
<h2 id="find-命令" tabindex="-1"><a class="header-anchor" href="#find-命令" aria-hidden="true">#</a> find 命令</h2>
<p><code>find</code> 命令，是 Linux 中强大的搜索命令。</p>
<p><code>find</code> 不仅可以按照文件名搜索文件，还可以按照权限、大小、时间、inode号等来搜索文件。但是 <code>find</code> 命令是直接在硬盘中进行搜索的，如果指定的搜索范围过大，<code>find</code> 命令就会消耗较大的系统资源，导致服务器压力过大。所以，在使用 <code>find</code> 命令搜索时，不要指定过大的搜索范围。</p>
<p>英文原意：search for files in a directory hierarchy</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># find 搜索路径 [选项] 搜索内容</span>
选项：
	按照文件名搜索
		-name	：按照文件名搜索
		-iname	：按照文件名搜索，不区分文件名大小写
		-inum	：按照 inode 号搜索
	按照文件大小搜索
		-size <span class="token punctuation">[</span>+<span class="token operator">|</span>-<span class="token punctuation">]</span>大小	：按照指定大小搜索文件
						这里的“+”的意思是搜索比指定大小还要大的文件；
						这里的“-”的意思是搜索比指定大小还要 小的文件。
	按照修改时间搜索		
		-atime <span class="token punctuation">[</span>+<span class="token operator">|</span>-<span class="token punctuation">]</span>时间	：按照文件访问时间搜索
    	-mtime <span class="token punctuation">[</span>+<span class="token operator">|</span>-<span class="token punctuation">]</span>时间	：按照文件数据修改时间搜索
    	-ctime <span class="token punctuation">[</span>+<span class="token operator">|</span>-<span class="token punctuation">]</span>时间	：按照文件状态修改时间搜索
    按照权限搜索
    	-perm 权限模式	：查找文件权限刚好等于“权限模式”的文件
    	-perm -权限模式	：查找文件权限全部包含“权限模式”的文件
    	-perm +权服模式	：查找文件权限包含“权限模式”的任意一个权限的文件
    按照所有者和所属组搜索	
 		-uid 用户ID		：按照用户 ID 查找所有者是指定 ID 的文件
		-gid 组ID		：按照用户组 ID 查找所属组是指定 ID 的文件
		-user 用户名		：按照用户名查找所有者是指定用户的文件
		-group 组名		：按照组名查找所属组是指定用户组的文件
		-nouser			：查找没有所有者的文件    	
    按照文件类型搜索
    	-type d	：查找目录
		-type f	：查找普通文件
		-type l	：查找软链接文件
	逻辑运算符
		-a		：and 逻辑与
    	-o		：or 逻辑或
    	-not	：not 逻辑非
    其他选项	
    	-exec
    	-ok
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p><code>find</code> 是比较特殊的命令，它有两个参数：第一个参数用来指定搜索路径；第二个参数用来指定搜索内容。而且 <code>find</code> 命令的选项比较复杂，我们分类来看。</p>
<h3 id="按照文件名搜索" tabindex="-1"><a class="header-anchor" href="#按照文件名搜索" aria-hidden="true">#</a> 按照文件名搜索</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># find 搜索路径 [选项] 搜索内容</span>
选项：
	-name	：按照文件名搜索
	-iname	：按照文件名搜索，不区分文件名大小写
	-inum	：按照 inode 号搜索
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>这是 <code>find</code> 最常用的用法，我们来试试：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>rootelocalhost ~<span class="token punctuation">]</span><span class="token comment"># find / -name yum.conf</span>
/etc/yum.conf
<span class="token comment">#在 /目录下查找文件名是 yum.conf 的文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>但是 <code>find</code> 命令有一个小特性，就是搜索的文件名必须和你的搜索内容一致才能找到。如果只包含搜索内容，则不会找到。我们做一个实验：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># touch yum.conf.bak</span>
<span class="token comment">#在 /root/ 目录下建立一个文件 yum.conf.bak</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># find / -name yum.conf</span>
/etc/yum.conf
<span class="token comment">#搜索只能找到 yum.conf 文件，而不能找到 yum.conf.bak 文件 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>find</code> 能够找到的是只有和搜索内容 yum.conf 一致的 <code>/etc/yum.conf</code> 文件，而  <code>/tootyum.conf.bak</code> 文件虽然含有搜索关键字，但是不会被找到。这种特性我们总结为：<strong><code>find</code> 命令是完全匹配的，必须和搜索关键字一模一样才会列出。</strong></p>
<p>Linux 中的文件名是区分大小写的，也就是说，搜索小写文件，是找不到大写文件的。如果想要大小通吃，就要使用 -iname 来搜索文件。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># touch CANGLS</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># touch cangls</span>
<span class="token comment">#建立大写和小写文件</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># find . -iname cangls</span>
./CANGLS ./cangls
<span class="token comment">#使用 -iname，大小写文件通吃</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>每个文件都有 inode 号，如果我们知道 inode 号，则也可以按照 inode 号来搜索文件。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ^<span class="token punctuation">]</span><span class="token comment"># ls -i install.log</span>
<span class="token number">262147</span> install.log
<span class="token comment">#如果知道文件名，则可以用"1s -i"来查找 inode 号</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># find . -inum 262147</span>
./install.log
<span class="token comment">#如果知道 inode 号，则可以用 find 命令来查找文件名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>按照 inode 号搜索文件，也是区分硬链接文件的重要手段，因为硬链接文件的 inode 号是一致的。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ln /root/install.log /tmp/</span>
<span class="token comment">#给 install.log 文件创建一个硬链接文件</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll -i /root/install.log /tmp/install.log</span>
<span class="token number">262147</span> -rw-r--r--. <span class="token number">2</span> root root <span class="token number">24772</span> <span class="token number">1</span>月 <span class="token number">14</span> <span class="token number">2014</span> /root/install.log
<span class="token number">262147</span> -rw-r--r--. <span class="token number">2</span> root root <span class="token number">24772</span> <span class="token number">1</span>月 <span class="token number">14</span> <span class="token number">2014</span> /tmp/install.log
<span class="token comment">#可以看到这两个硬链接文件的 inode 号是一致的</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># find / -inum 262147</span>
/root/install.log
/tmp/install.log 
<span class="token comment">#如果硬链接不是我们自己建立的，则可以通过 find 命令搜索 inode 号，来确定硬链接文件 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="按照文件大小搜索" tabindex="-1"><a class="header-anchor" href="#按照文件大小搜索" aria-hidden="true">#</a> 按照文件大小搜索</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># find 搜索路径 [选项] 搜索内容 </span>
选项：
	-size <span class="token punctuation">[</span>+<span class="token operator">|</span>-<span class="token punctuation">]</span>大小	：按照指定大小搜索文件
	
			这里的“+”的意思是搜索比指定大小还要大的文件；
			这里的“-”的意思是搜索比指定大小还要 小的文件。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>我们来试试：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll -h install.log</span>
-rw-r--r--. <span class="token number">1</span> root root 25K <span class="token number">1</span>月 <span class="token number">14</span> <span class="token number">2014</span> install.log
<span class="token comment">#在当前目录下有一个大小是 25KB 的文件</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># find . -size 25k</span>
./install.log
<span class="token comment">#在当前目录下，查找大小刚好是 25KB 的文件，可以找到</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># find . -size -25k</span>
<span class="token builtin class-name">.</span>
./.bashrc
./.viminfo
./.tcshrc
<span class="token punctuation">..</span>.省略部分输出<span class="token punctuation">..</span>.
./install.log.syslog
./.cshrc
./cangls
<span class="token comment">#搜索小于 25KB 的文件，可以找到很多文件</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># find . -size +25k</span>
<span class="token comment">#而当前目录下没有大于 25KB 的文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>其实 <code>find</code> 命令的 -size 选项是比较恶心的选项，为什么这样说？find 命令可以按照 KB 来搜索，应该也可以按照 MB 来搜索吧。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># find . -size -25m</span>
find：无效的 -size 类型“m”
<span class="token comment">#为什么会报错呢？其实是因为如果接照 MB 来搜索，则必须是大写的 M </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这就是纠结点，<strong>千字节必须是小写的“k”，而兆字节必须是大写的“M”</strong>。有些人会说： “你别那么执着啊，你就不能不写单位，直接按照字节搜索啊？”很傻、很天真，不写单位，你们就以为会按照字节来搜索吗？我们来试试：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll anaconda-ks.cfg</span>
-rw-------. <span class="token number">1</span> root root <span class="token number">1207</span> <span class="token number">1</span>月 <span class="token number">14</span> <span class="token number">2014</span> anaconda-ks.cfg
<span class="token comment">#anaconda-ks.cfg 文件有 1207 字节</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># find . -size 1207</span>
<span class="token comment">#但用 find 查找 1207，是什么也找不到的 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>也就是说，<code>find</code> 命令的默认单位不是字节。如果不写单位，那么 <code>find</code> 命令是按照 512 Byte 来进行查找的。我们看看 <code>find</code> 命令的帮助。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># man find</span>
<span class="token punctuation">..</span>.省略部分内容<span class="token punctuation">..</span>.
	-size n<span class="token punctuation">[</span>cwbkMG<span class="token punctuation">]</span>
    	File uses n <span class="token function">units</span> of space. The following suffixes can be used:
    	
	    <span class="token string">'b'</span> <span class="token keyword">for</span> <span class="token number">512</span>-byte blocks <span class="token punctuation">(</span>this is the default <span class="token keyword">if</span> no suffix is used<span class="token punctuation">)</span>
        <span class="token comment">#这是默认单位，如果单位为 b 或不写单位，则按照 512 Byte 搜索</span>
        <span class="token string">'c'</span> <span class="token keyword">for</span> bytes
        <span class="token comment">#搜索单位是 c，按照字节搜索</span>
        ‘w’ <span class="token keyword">for</span> two-byte words
        <span class="token comment">#搜索单位是 w，按照双字节（中文）搜索</span>
        ‘k’ <span class="token keyword">for</span> Kilobytes <span class="token punctuation">(</span>units of <span class="token number">1024</span> bytes<span class="token punctuation">)</span>
        <span class="token comment">#按照 KB 单位搜索，必须是小写的 k</span>
        <span class="token string">'M'</span> <span class="token keyword">for</span> Megabytes <span class="token punctuation">(</span>units of <span class="token number">1048576</span> bytes<span class="token punctuation">)</span>
        <span class="token comment">#按照 MB 单位搜索，必须是大写的 M </span>
        ‘G’ <span class="token keyword">for</span> Gigabytes <span class="token punctuation">(</span>units of <span class="token number">1073741824</span> bytes<span class="token punctuation">)</span>
        <span class="token comment">#按照 GB 单位搜索，必须是大写的 G</span>
        The size does not count indirect blocks, but it does count blocks <span class="token keyword">in</span> sparse files that are not actually allo‐cated.  Bear <span class="token keyword">in</span> mind that the <span class="token variable"><span class="token variable">`</span>%k' and <span class="token variable">`</span></span>%b<span class="token string">' format specifiers of -printf  handle  sparse  files  differently. The  `b'</span>  suffix always denotes <span class="token number">512</span>-byte blocks and never <span class="token number">1</span> Kilobyte blocks, <span class="token function">which</span> is different to the behav‐iour of -ls.
<span class="token punctuation">..</span>.省略部分内容<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>也就是说，如果想要按照字节搜索，则需要加搜索单位“c”。我们来试试：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># find . -size 1207c</span>
/anaconda-ks.cfg
<span class="token comment">#使用搜索单位 c，才会按照字节搜索</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="按照修改时间搜索" tabindex="-1"><a class="header-anchor" href="#按照修改时间搜索" aria-hidden="true">#</a> 按照修改时间搜索</h3>
<p>Linux 中的文件有访问时间（atime)、数据修改时间（mtime）、状态修改时间（ctime）这三个时间，我们也可以按照时间来搜索文件。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">find</span> 搜索路径 <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> 搜索内容
选项：
	-atime <span class="token punctuation">[</span>+<span class="token operator">|</span>-<span class="token punctuation">]</span>时间	：按照文件访问时间搜索
    -mtime <span class="token punctuation">[</span>+<span class="token operator">|</span>-<span class="token punctuation">]</span>时间	：按照文件数据修改时间搜索
    -ctime <span class="token punctuation">[</span>+<span class="token operator">|</span>-<span class="token punctuation">]</span>时间	：按照文件状态修改时间搜索 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>这三个时间的区别我们在 <code>stat</code> 命令中已经解释过了，这里用 mtime 数据修改时间来举例， 重点说说“[+-]”时间的含义。</p>
<ul>
<li>-5：代表 5 天内修改的文件。</li>
<li>5：代表前 5～6 天那一天修改的文件。</li>
<li>+5：代表 6 天前修改的文件。</li>
</ul>
<p>我们画一个时间轴，来解释一下，如图7-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Linux/Linux_basic/assets/find_time.png" alt="find time" loading="lazy"></p>
<p><strong>图7-1	<u>find 命令时间轴</u></strong></p>
</div>
<p>讲到这里，“-5”代表 5 天内修改的文件，<s>而“+5”总有人说代表 5 天后修改的文件</s>。要是能知道 5 天后系统中能建立什么文件，早就去买彩票了，那是未卜先知啊！所以“-5”指的是 5 天内修改的文件，“5”指的是前 5～6 天那一天修改的文件，“+5”指 的是 6 天前修改的文件。我们来试试：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># find . -mtime -5</span>
<span class="token comment">#查找 5 天内修改的文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>大家可以在系统中把几个选项都试试，就可以明白各选项之间的差别了。 <code>find</code> 不仅可以按照 atime、mtime 和 ctime 来查找文件的时间，也可以按照 <strong>amin、mmin 和 cmin</strong> 来查找文件的时间，区别只是所有 time 选项的默认单位是天，而 min 选项的默认单位是分钟。</p>
<h3 id="按照权限搜索" tabindex="-1"><a class="header-anchor" href="#按照权限搜索" aria-hidden="true">#</a> 按照权限搜索</h3>
<p>在 <code>find</code> 中，也可以按照文件的权限来进行搜索。权限也支持 [+/-] 选项。我们先看一下命令格式：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">find</span> 搜索路径 <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> 搜索內容
选项：
	-perm 权限模式	：查找文件权限刚好等于“权限模式”的文件
    -perm -权限模式	：查找文件权限全部包含“权限模式”的文件
    -perm +权服模式	：查找文件权限包含“权限模式”的任意一个权限的文件
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>为了便于理解，我们要举几个例子，先建立几个测试文件。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mkdir test</span>
<span class="token punctuation">[</span>rootelocalhost ~<span class="token punctuation">]</span><span class="token comment"># cd test/</span>
<span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># touch testl</span>
<span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># touch test2</span>
<span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># touch test3</span>
<span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># touch test4</span>
<span class="token comment">#建立测试目录，以及测试文件</span>
<span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># chmod 755 test1</span>
<span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># chmod 444 test2</span>
<span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># chmod 600 test3</span>
<span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># chmod 200 test4</span>
<span class="token comment">#设定实验权限。因为是实验权限，所以看起来比较别扭</span>
<span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># ll</span>
总用量 <span class="token number">0</span>
-rwxr-xr-x <span class="token number">1</span> root root <span class="token number">0</span> <span class="token number">6</span>月 <span class="token number">17</span> <span class="token number">11</span>:05 test1
-r--r--r-- <span class="token number">1</span> root root <span class="token number">0</span> <span class="token number">6</span>月 <span class="token number">17</span> <span class="token number">11</span>:05 test2
-rw------- <span class="token number">1</span> root root <span class="token number">0</span> <span class="token number">6</span>月 <span class="token number">17</span> <span class="token number">11</span>:05 test3
--w------- <span class="token number">1</span> root root <span class="token number">0</span> <span class="token number">6</span>月 <span class="token number">17</span> <span class="token number">11</span>:05 test4
<span class="token comment">#查看权限 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ul>
<li>例子 1：“-perm 权限模式”</li>
</ul>
<p>这种搜索比较简单，代表查找的权限必须和指定的权限模式一模一样，才可以找到。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># find . -perm 444</span>
./test2
<span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># find . -Perm 200</span>
./test4
<span class="token comment">#按照指定权限搜索文件，文件的权限必须和搜索指定的权限一致，才能找到 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li>例子 2：“-perm -权限模式”</li>
</ul>
<p>如果使用“-权限模式”，代表的是文件的权限必须全部包含搜索命令指定的权限模式，才可以找到。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># find . -perm -200</span>
<span class="token builtin class-name">.</span>
./test4			<span class="token operator">&lt;</span>---权限为 <span class="token number">200</span>，即 --w-------
./test3			<span class="token operator">&lt;</span>---权限为 <span class="token number">600</span>，即 -rw-------
./test1			<span class="token operator">&lt;</span>---权限为 <span class="token number">755</span>，即 -rwxr-xr-x
<span class="token comment">#搜索文件的权限包含 200 的文件，不会找到权限为 444 的 test2 文件</span>
<span class="token comment">#因为权限 444（即-r--r--r--），不包含权限 200（即 --w-------）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul>
<li>例子 3：“-perm +权限模式”</li>
</ul>
<p>包含任意一个指定权限，就可以找到。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost <span class="token builtin class-name">test</span><span class="token punctuation">)</span><span class="token comment"># find . -perm +444</span>
./test3			<span class="token operator">&lt;</span>---权限为 <span class="token number">600</span>，即 -rw-------
./test2 		<span class="token operator">&lt;</span>---权限为 <span class="token number">444</span>，即 -r--r--r--
./test1 		<span class="token operator">&lt;</span>---权限为 <span class="token number">755</span>，即 -rwxr-xr-x
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>这里的“+444”能找到 test1、test2 和 test3 文件，那是因为 test3 的权限是 600（-w-----），虽然所属组和其他人的权限不包含 4 权限，但是“+权限模式”只要有一个身份的权限包含任意一个指定权限，就可以找到。而 test3 的所有者权限是 6，包含 4 权限，所以依然能够找到。 而找不到 test4，是因为 test4 的权限是 200 （--w------），test4 的任意身份（所有者、所属组和其他人）都没有 4 权限，所以找不到。 再试试：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># find . -perm +777</span>
./test4
./test3
./test2
./test1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>如果搜索指定权限是“+777”，那么这 4 个测试文件的任意一个身份只要拥有读、写和执行任意一个权限都能找到。如果我们把 test4 的权限改为“000”，那“+777”还能找到吗？</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># chmod 000 test4</span>
<span class="token punctuation">[</span>rootelocalhost test<span class="token punctuation">]</span><span class="token comment"># find . -perm +777</span>
./test3
./test2
./test1 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>如果 test4 的权限是“000”，则搜索“+777”就不能找到了。因为 test4 的所有身份都不拥有读、写和执行权限，而“+777”要求至少有一个身份拥有读、写和执行的任意一个权限才 能找到。</p>
<h3 id="按照所有者和所属组搜索" tabindex="-1"><a class="header-anchor" href="#按照所有者和所属组搜索" aria-hidden="true">#</a> 按照所有者和所属组搜索</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># find 搜索路径 [选项] 搜索内容</span>
选项：
	-uid 用户ID		：按照用户 ID 查找所有者是指定 ID 的文件
    -gid 组ID		：按照用户组 ID 查找所属组是指定 ID 的文件
    -user 用户名		：按照用户名查找所有者是指定用户的文件
    -group 组名		：按照组名查找所属组是指定用户组的文件
    -nouser			：查找没有所有者的文件 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>这组选项比较简单，就是按照文件的所有者和所属组来进行文件的查找。在 Linux 系统中，绝大多数文件都是使用 root 用户身份建立的，所以在默认情况下，绝大多数系统文件的所有者都是 root。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># find . -user root</span>
<span class="token comment">#在当前目录中查找所有者是 root 的文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>由于当前目录是 root 的家目录，所有文件的所有者都是 root 用户，所以这条搜索命令会找到当前目录下所有的文件。</p>
<p>按照所有者和所属组搜索时，“-nouser”选项比较常用，主要用于查找垃圾文件。在 Linux 中，所有的文件都有所有者，只有一种情况例外，那就是外来文件。比如光盘和 U盘中的文件如果是由 Windows 复制的，在 Linux 中查看就是没有所有者的文件；再比如手工源码包安装的文件，也有可能没有所有者。除这种外来文件外，如果系统中发现了没有所有者的文件，一般都是没有作用的垃圾文件（比如用户删除之后遗留的文件），这时需要用户手工处理。搜索没有所有者的文件，可以执行以下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># find . -nouser</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="按照文件类型搜索" tabindex="-1"><a class="header-anchor" href="#按照文件类型搜索" aria-hidden="true">#</a> 按照文件类型搜索</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># find 搜索路径 [选项] 搜索内容</span>
选项：
	-type d	：查找目录
	-type f	：查找普通文件
	-type l	：查找软链接文件
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>这个命令也很简单，主要按照文件类型进行搜索。在一些特殊情况下，比如需要把普通文件和目录文件区分开，使用这个选项就很方便。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># find /etc -type d</span>
<span class="token comment">#查找 /etc/ 目录下有哪些子目录 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># find 搜索路径 [选项] 搜索内容</span>
选项：
	-a		：and 逻辑与
    -o		：or 逻辑或
    -not	：not 逻辑非
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li><strong>-a：and 逻辑与</strong></li>
</ul>
<p><code>find</code> 命令也支持逻辑运算符选项，其中“-a”代表逻辑与运算，也就是“-a”的两个条件都成立，<code>find</code> 搜索的结果才成立。举个例子：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># find . -size +2k -a -type f</span>
<span class="token comment">#在当前目录下搜索大于 2KB，并且文件类型是普通文件的文件 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>在这个例子中，文件既要大于 2KB，又必须是普通文件，<code>find</code> 命令才可以找到。再举个例子：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># find . -mtime -3 -a -perm 644</span>
<span class="token comment">#在当前目录下搜索 3 天以内修改过，并且权限是 644 的文件 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li><strong>-o：or 逻辑或</strong></li>
</ul>
<p>“-o”选项代表逻辑或运算，也就是“-o”两个条件只要其中一个成立，<code>find</code> 命令就可以找到结果。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># find . -name cangls -o -name bols</span>
./cangls
./bols
<span class="token comment">#在当前目录下搜索文件名要么是 cangls 的文件，要么是 bols 的文件</span>
<span class="token comment"># -o 选项的两个条件只要成立一个，find 命令就可以找到结果，所以这个命令既可以找到 cangls 文件，也可以找到 bols 文件。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li><strong>-not：not 逻辑非</strong></li>
</ul>
<p>“-not”是逻辑非，也就是取反的意思。举个例子：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># find . -not -name cangls</span>
<span class="token comment">#在当前目录下搜索文件名不是 cangls 的文件 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="其他选项" tabindex="-1"><a class="header-anchor" href="#其他选项" aria-hidden="true">#</a> 其他选项</h3>
<p>这里我们主要讲解两个选项“-exec”和“-ok”，这两个选项的基本作用非常相似。</p>
<ul>
<li><strong>-exec 选项</strong></li>
</ul>
<p>我们先来看看“-exec”选项的格式。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># find 搜索路径 [选项] 搜索内容 -exec 命令2 {} \;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>首先，请大家注意这里的“<code>{}</code>”和“<code>\;</code>”是标准格式，只要执行“-exec”选项，这两个符号必须完整输入。其次，这个选项的作用其实是把 <code>find</code> 命令的结果交给由“-exec”调用的命令2 来处理。 “<code>{}</code>”就代表 <code>find</code> 命令的查找结果。我们举个例子，刚刚在讲权限的时候，使用权限模式搜索只能看到文件名，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># find . -perm 444 </span>
./test2 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果要看文件的具体权限，还要用“<code>ls -l</code>”命令查看。用“-exec”选项则可以一条命令搞定：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># find . -Perm 444 -exec ls -l {} \;</span>
-r--r--r-- <span class="token number">1</span> root root <span class="token number">0</span> <span class="token number">6</span>月 <span class="token number">17</span> <span class="token number">11</span>:05 ./test2
<span class="token comment">#使用“-exec”选项，把 find 命令的结果直接交给“1s -l”命令处理</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>“-exec”选项的作用是把 <code>find</code> 命令的结果放入“{}”中，再由命令2 直接处理。在这个例 子中就是用“<code>ls -l</code>”命令直接处理，会使 <code>find</code> 命令更加方便。</p>
<ul>
<li><strong>-ok 选项</strong></li>
</ul>
<p>“-ok”选项的格式和“-exec”选项的格式一样。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># find 搜索路径 [选项] 搜索内容 -ok 命令2 {} \; </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>“-ok”选项和“-exec”选项的作用也基本一致，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost test<span class="token punctuation">]</span><span class="token comment"># find . -perm 444 -ok rm -rf {} \;</span>
<span class="token operator">&lt;</span>rm <span class="token punctuation">..</span><span class="token punctuation">..</span>/test2 <span class="token operator">></span>？ y 		<span class="token operator">&lt;</span>---需要用户输入 y，才会执行
<span class="token comment">#我们这次使用 rm 命令来删除 find 找到的结果，删除的动作最好确认一下</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">区别</p>
<p>“-ok”选项和“-exec”选项的区别：</p>
<blockquote>
<p>“-exec”的命令2 会直接处理，而不询问；</p>
<p>“-ok”的命令2 在处理前会先询问用户是否这样处理，在得到确认命令后，才会执 行。</p>
</blockquote>
</div>
</template>
