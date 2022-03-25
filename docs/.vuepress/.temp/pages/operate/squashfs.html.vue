<template><h2 id="查看文件类型" tabindex="-1"><a class="header-anchor" href="#查看文件类型" aria-hidden="true">#</a> 查看文件类型</h2>
<p>使用 <code>file</code> 命令查看文件的文件类型，以便使用对应的命令工具去执行操作。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>kei@kei-KVM:~<span class="token comment"># file SYSTEM</span>
SYSTEM: Squashfs filesystem, little endian, version <span class="token number">4.0</span>, <span class="token number">906421384</span> bytes, <span class="token number">17904</span> inodes, blocksize: <span class="token number">524288</span> bytes, created: Fri Jun <span class="token number">18</span> <span class="token number">21</span>:05:07 <span class="token number">2021</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="安装工具" tabindex="-1"><a class="header-anchor" href="#安装工具" aria-hidden="true">#</a> 安装工具</h2>
<p>根据上面查看到的 SYSTEM 文件类型是 Squashfs filesystem，那么需要用到 squashfs-tools 工具命令，直接安装。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>kei@kei-KVM:~$ <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> squashfs-tools 
<span class="token punctuation">[</span>sudo<span class="token punctuation">]</span> karin 的密码： 
正在读取软件包列表<span class="token punctuation">..</span>. 完成
正在分析软件包的依赖关系树       
正在读取状态信息<span class="token punctuation">..</span>. 完成       
下列软件包是自动安装的并且现在不需要了：
  fonts-liberation2 fonts-opensymbol gir1.2-gst-plugins-base-1.0
  gir1.2-gstreamer-1.0 gir1.2-gudev-1.0 gir1.2-udisks-2.0
  grilo-plugins-0.3-base gstreamer1.0-gtk3 libboost-date-time1.65.1
  libboost-filesystem1.65.1 libboost-iostreams1.65.1 libboost-locale1.65.1
  libcdr-0.1-1 libclucene-contribs1v5 libclucene-core1v5 libcmis-0.5-5v5
  libdazzle-1.0-0 libe-book-0.1-1 libedataserverui-1.2-2 libeot0
  libepubgen-0.1-1 libetonyek-0.1-1 libevent-2.1-6 libexiv2-14
  libfreerdp-client2-2 libfreerdp2-2 libgee-0.8-2 libgexiv2-2 libgom-1.0-0
  libgpgmepp6 libgpod-common libgpod4 liblangtag-common liblangtag1
  liblirc-client0 liblua5.3-0 libmediaart-2.0-0 libmspub-0.1-1 libodfgen-0.1-1
  libqqwing2v5 librevenge-0.0-0 libsgutils2-2 libssh-4 libvncclient1
  libwinpr2-2 libxapian30 libxmlsec1 libxmlsec1-nss
  linux-hwe-5.4-headers-5.4.0-72 lp-solve media-player-info python3-mako
  python3-markupsafe syslinux syslinux-common syslinux-legacy
  usb-creator-common
使用<span class="token string">'sudo apt autoremove'</span>来卸载它<span class="token punctuation">(</span>它们<span class="token punctuation">)</span>。
下列软件包将被升级：
  squashfs-tools
升级了 <span class="token number">1</span> 个软件包，新安装了 <span class="token number">0</span> 个软件包，要卸载 <span class="token number">0</span> 个软件包，有 <span class="token number">123</span> 个软件包未被升级。
需要下载 <span class="token number">111</span> kB 的归档。
解压缩后会消耗 <span class="token number">0</span> B 的额外空间。
获取:1 http://cn.archive.ubuntu.com/ubuntu bionic-updates/main amd64 squashfs-tools amd64 <span class="token number">1</span>:4.3-6ubuntu0.18.04.2 <span class="token punctuation">[</span><span class="token number">111</span> kB<span class="token punctuation">]</span>
已下载 <span class="token number">111</span> kB，耗时 <span class="token number">2</span>秒 <span class="token punctuation">(</span><span class="token number">51.9</span> kB/s<span class="token punctuation">)</span>      
<span class="token punctuation">(</span>正在读取数据库 <span class="token punctuation">..</span>. 系统当前共安装有 <span class="token number">190664</span> 个文件和目录。<span class="token punctuation">)</span>
正准备解包 <span class="token punctuation">..</span>./squashfs-tools_1%3a4.3-6ubuntu0.18.04.2_amd64.deb  <span class="token punctuation">..</span>.
正在将 squashfs-tools <span class="token punctuation">(</span><span class="token number">1</span>:4.3-6ubuntu0.18.04.2<span class="token punctuation">)</span> 解包到 <span class="token punctuation">(</span><span class="token number">1</span>:4.3-6ubuntu0.18.04.1<span class="token punctuation">)</span> 上 <span class="token punctuation">..</span>.
正在设置 squashfs-tools <span class="token punctuation">(</span><span class="token number">1</span>:4.3-6ubuntu0.18.04.2<span class="token punctuation">)</span> <span class="token punctuation">..</span>.
正在处理用于 man-db <span class="token punctuation">(</span><span class="token number">2.8</span>.3-2ubuntu0.1<span class="token punctuation">)</span> 的触发器 <span class="token punctuation">..</span>.
kei@kei-KVM:~$
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="unsquashfs-命令解压解包" tabindex="-1"><a class="header-anchor" href="#unsquashfs-命令解压解包" aria-hidden="true">#</a> unsquashfs 命令解压解包</h2>
<p>解包打包最好切换到 root 用户操作。用 <code>unsquashfs</code> 命令解压缩。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 切换 root 用户</span>
kei@kei-KVM:~$ <span class="token function">su</span> -
root@kei-KVM:~<span class="token comment">#</span>

<span class="token comment"># 复制上面解压的 SYSTEM 文件到当前位置</span>
root@kei-KVM:~<span class="token comment"># cp /home/kei/桌面/SYSTEM .</span>

<span class="token comment"># unsquashfs 命令解包 SYSTEM 文件</span>
root@kei-KVM:~<span class="token comment"># unsquashfs SYSTEM </span>
Parallel unsquashfs: Using <span class="token number">2</span> processors
<span class="token number">16882</span> inodes <span class="token punctuation">(</span><span class="token number">19542</span> blocks<span class="token punctuation">)</span> to <span class="token function">write</span>

<span class="token punctuation">[</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token punctuation">\</span><span class="token punctuation">]</span> <span class="token number">19542</span>/19542 <span class="token number">100</span>%

created <span class="token number">15854</span> files
created <span class="token number">1022</span> directories
created <span class="token number">1028</span> symlinks
created <span class="token number">0</span> devices
created <span class="token number">0</span> fifos

<span class="token comment"># 解压完成后，查看一下，多出一个 squashfs-root 文件夹</span>
root@kei-KVM:~<span class="token comment"># ls -l</span>
总用量 <span class="token number">885196</span>
drwxrwxr-x <span class="token number">12</span> root root      <span class="token number">4096</span> <span class="token number">6</span>月  <span class="token number">19</span> 05:03 squashfs-root
-rw-------  <span class="token number">1</span> root root <span class="token number">906424320</span> <span class="token number">9</span>月  <span class="token number">16</span> <span class="token number">14</span>:04 SYSTEM

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="查看与修改" tabindex="-1"><a class="header-anchor" href="#查看与修改" aria-hidden="true">#</a> 查看与修改</h2>
<p>根据需求，适当修改里面的相关文件。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 查看一下 squashfs-root 目录</span>
root@kei-KVM:~/squashfs-root<span class="token comment"># ls -l squashfs-root/</span>
总用量 <span class="token number">44</span>
lrwxrwxrwx  <span class="token number">1</span> root root    <span class="token number">8</span> <span class="token number">6</span>月  <span class="token number">19</span> 05:03 bin -<span class="token operator">></span> /usr/bin
drwxrwxr-x  <span class="token number">2</span> root root <span class="token number">4096</span> <span class="token number">6</span>月  <span class="token number">19</span> 05:02 dev
-rw-rw-r--  <span class="token number">1</span> root root   <span class="token number">11</span> <span class="token number">6</span>月  <span class="token number">19</span> 05:03 ee_arch
lrwxrwxrwx  <span class="token number">1</span> root root   <span class="token number">24</span> <span class="token number">6</span>月  <span class="token number">19</span> 05:03 emuelec -<span class="token operator">></span> /storage/.config/emuelec
drwxrwxr-x <span class="token number">27</span> root root <span class="token number">4096</span> <span class="token number">6</span>月  <span class="token number">19</span> 05:03 etc
drwxrwxr-x  <span class="token number">2</span> root root <span class="token number">4096</span> <span class="token number">6</span>月  <span class="token number">19</span> 05:02 flash
lrwxrwxrwx  <span class="token number">1</span> root root    <span class="token number">8</span> <span class="token number">6</span>月  <span class="token number">19</span> 05:03 lib -<span class="token operator">></span> /usr/lib
lrwxrwxrwx  <span class="token number">1</span> root root   <span class="token number">10</span> <span class="token number">6</span>月  <span class="token number">19</span> 05:03 media -<span class="token operator">></span> /var/media
lrwxrwxrwx  <span class="token number">1</span> root root   <span class="token number">13</span> <span class="token number">6</span>月  <span class="token number">19</span> 05:03 opt -<span class="token operator">></span> /storage/.opt
drwxrwxr-x  <span class="token number">2</span> root root <span class="token number">4096</span> <span class="token number">6</span>月  <span class="token number">19</span> 05:02 proc
drwxrwxr-x  <span class="token number">2</span> root root <span class="token number">4096</span> <span class="token number">6</span>月  <span class="token number">19</span> 05:02 run
lrwxrwxrwx  <span class="token number">1</span> root root    <span class="token number">9</span> <span class="token number">6</span>月  <span class="token number">19</span> 05:03 sbin -<span class="token operator">></span> /usr/sbin
drwxrwxr-x  <span class="token number">2</span> root root <span class="token number">4096</span> <span class="token number">6</span>月  <span class="token number">19</span> 05:02 storage
drwxrwxr-x  <span class="token number">2</span> root root <span class="token number">4096</span> <span class="token number">6</span>月  <span class="token number">19</span> 05:02 sys
drwxrwxr-x  <span class="token number">2</span> root root <span class="token number">4096</span> <span class="token number">6</span>月  <span class="token number">19</span> 05:02 tmp
drwxrwxr-x <span class="token number">10</span> root root <span class="token number">4096</span> <span class="token number">6</span>月  <span class="token number">19</span> 05:03 usr
drwxrwxr-x  <span class="token number">2</span> root root <span class="token number">4096</span> <span class="token number">6</span>月  <span class="token number">19</span> 05:02 var
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>相关文件所在位置：</p>
<ul>
<li>
<p>Emuelec 启动脚本：<code>squashfs-root/usr/bin/emuelecRunEmu.sh</code></p>
</li>
<li>
<p>自启动脚本：<code>squashfs-root/usr/config/autostart.sh</code></p>
</li>
<li>
<p>修改开机视频：<code>squashfs-root/usr/bin/show_splash.sh</code></p>
</li>
<li>
<p>修改边框：<code>squashfs-root/usr/bun/bezels.sh</code></p>
</li>
</ul>
<h2 id="查看原包信息" tabindex="-1"><a class="header-anchor" href="#查看原包信息" aria-hidden="true">#</a> 查看原包信息</h2>
<p>使用 <code>unsquashfs -s [filename]</code> 命令来查看 squashfs 文件类型的包压缩信息。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 查看一下原 SYSTEM 文件的 squashfs 压缩信息</span>
root@kei-KVM:~<span class="token comment"># unsquashfs -s SYSTEM </span>
Found a valid SQUASHFS <span class="token number">4</span>:0 superblock on SYSTEM.
Creation or last append <span class="token function">time</span> Sat Jun <span class="token number">19</span> 05:05:07 <span class="token number">2021</span>
Filesystem size <span class="token number">885177.13</span> Kbytes <span class="token punctuation">(</span><span class="token number">864.43</span> Mbytes<span class="token punctuation">)</span>
Compression lzo					<span class="token comment">#压缩方式：-comp lzo</span>
	algorithm lzo1x_999		<span class="token comment">#压缩算法：-Xalgorithm lzo1x_999</span>
	compression level <span class="token number">9</span>		<span class="token comment">#压缩等级：-Xcompression-level 9</span>
Block size <span class="token number">524288</span>				<span class="token comment">#块大小：-b 524288</span>
Filesystem is exportable via NFS
Inodes are compressed
Data is compressed
Fragments are compressed
Always-use-fragments option is not specified
Xattrs are not stored			<span class="token comment">#扩展属性：-no-xattrs</span>
Duplicates are removed
Number of fragments <span class="token number">988</span>
Number of inodes <span class="token number">17904</span>
Number of ids <span class="token number">2</span>

<span class="token comment"># 可以看到压缩方式是 lzo，压缩算法是 lzo1x_999，压缩等级是 9 ，块大小是 524288 ，扩展属性是 not stored 等信息。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="mksquashfs-命令压缩打包" tabindex="-1"><a class="header-anchor" href="#mksquashfs-命令压缩打包" aria-hidden="true">#</a> mksquashfs 命令压缩打包</h2>
<p>最后，使用 <code>mksquashfs</code> 命令，根据上面查看到的压缩参数信息，对 <code>squashfs-root/</code> 目录进行压缩打包。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>root@kei-KVM:~<span class="token comment"># mksquashfs squashfs-root/ SYSTEM_changed -comp lzo -Xalgorithm lzo1x_999 -Xcompression-level 9 -b 524288 -no-xattrs</span>
Parallel mksquashfs: Using <span class="token number">2</span> processors
Creating <span class="token number">4.0</span> filesystem on SYSTEM_changed, block size <span class="token number">524288</span>.
<span class="token punctuation">[</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>/<span class="token punctuation">]</span> <span class="token number">18514</span>/18514 <span class="token number">100</span>%

Exportable Squashfs <span class="token number">4.0</span> filesystem, lzo compressed, data block size <span class="token number">524288</span>
	compressed data, compressed metadata, compressed fragments, no xattrs
	duplicates are removed
Filesystem size <span class="token number">885177.12</span> Kbytes <span class="token punctuation">(</span><span class="token number">864.43</span> Mbytes<span class="token punctuation">)</span>
	<span class="token number">46.45</span>% of uncompressed filesystem size <span class="token punctuation">(</span><span class="token number">1905511.20</span> Kbytes<span class="token punctuation">)</span>
Inode table size <span class="token number">218226</span> bytes <span class="token punctuation">(</span><span class="token number">213.11</span> Kbytes<span class="token punctuation">)</span>
	<span class="token number">36.69</span>% of uncompressed inode table size <span class="token punctuation">(</span><span class="token number">594786</span> bytes<span class="token punctuation">)</span>
Directory table size <span class="token number">194409</span> bytes <span class="token punctuation">(</span><span class="token number">189.85</span> Kbytes<span class="token punctuation">)</span>
	<span class="token number">49.83</span>% of uncompressed directory table size <span class="token punctuation">(</span><span class="token number">390171</span> bytes<span class="token punctuation">)</span>
Number of duplicate files found <span class="token number">854</span>
Number of inodes <span class="token number">17904</span>
Number of files <span class="token number">15854</span>
Number of fragments <span class="token number">988</span>
Number of symbolic links  <span class="token number">1028</span>
Number of device nodes <span class="token number">0</span>
Number of fifo nodes <span class="token number">0</span>
Number of socket nodes <span class="token number">0</span>
Number of directories <span class="token number">1022</span>
Number of ids <span class="token punctuation">(</span>unique uids + gids<span class="token punctuation">)</span> <span class="token number">2</span>
Number of uids <span class="token number">1</span>
	root <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
Number of gids <span class="token number">2</span>
	root <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
	unknown <span class="token punctuation">(</span><span class="token number">81</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="对比原包信息" tabindex="-1"><a class="header-anchor" href="#对比原包信息" aria-hidden="true">#</a> 对比原包信息</h2>
<p>压缩完成后，<code>unsquashfs -s</code> 命令再次查看一下新生城的文件信息。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>root@kei-KVM:~<span class="token comment"># unsquashfs -s SYSTEM_changed </span>
Found a valid SQUASHFS <span class="token number">4</span>:0 superblock on SYSTEM_changed.
Creation or last append <span class="token function">time</span> Thu Sep <span class="token number">16</span> <span class="token number">14</span>:39:18 <span class="token number">2021</span>
Filesystem size <span class="token number">885177.12</span> Kbytes <span class="token punctuation">(</span><span class="token number">864.43</span> Mbytes<span class="token punctuation">)</span>
Compression lzo
	algorithm lzo1x_999
	compression level <span class="token number">9</span>
Block size <span class="token number">524288</span>
Filesystem is exportable via NFS
Inodes are compressed
Data is compressed
Fragments are compressed
Always-use-fragments option is not specified
Xattrs are not stored
Duplicates are removed
Number of fragments <span class="token number">988</span>
Number of inodes <span class="token number">17904</span>
Number of ids <span class="token number">2</span>

<span class="token comment"># file 命令再次查看一下</span>
root@kei-KVM:~<span class="token comment"># file SYSTEM_changed </span>
SYSTEM_changed: Squashfs filesystem, little endian, version <span class="token number">4.0</span>, <span class="token number">906421372</span> bytes, <span class="token number">17904</span> inodes, blocksize: <span class="token number">524288</span> bytes, created: Thu Sep <span class="token number">16</span> 06:39:18 <span class="token number">2021</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>和原始的 SYSTEM 比较一下，除了时间和名字，（文件的大小有微小变化，因为修改了文件）其它信息没有任何变化。</p>
<p>以上，就是 squashfs 文件类型的解包和打包的过程。</p>
</template>
