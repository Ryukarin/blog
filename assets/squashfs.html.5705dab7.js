import{_ as s,a as n}from"./app.893f8b81.js";const a={},e=n(`<h2 id="\u67E5\u770B\u6587\u4EF6\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6587\u4EF6\u7C7B\u578B" aria-hidden="true">#</a> \u67E5\u770B\u6587\u4EF6\u7C7B\u578B</h2><p>\u4F7F\u7528 <code>file</code> \u547D\u4EE4\u67E5\u770B\u6587\u4EF6\u7684\u6587\u4EF6\u7C7B\u578B\uFF0C\u4EE5\u4FBF\u4F7F\u7528\u5BF9\u5E94\u7684\u547D\u4EE4\u5DE5\u5177\u53BB\u6267\u884C\u64CD\u4F5C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kei@kei-KVM:~<span class="token comment"># file SYSTEM</span>
SYSTEM: Squashfs filesystem, little endian, version <span class="token number">4.0</span>, <span class="token number">906421384</span> bytes, <span class="token number">17904</span> inodes, blocksize: <span class="token number">524288</span> bytes, created: Fri Jun <span class="token number">18</span> <span class="token number">21</span>:05:07 <span class="token number">2021</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u5B89\u88C5\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u5DE5\u5177" aria-hidden="true">#</a> \u5B89\u88C5\u5DE5\u5177</h2><p>\u6839\u636E\u4E0A\u9762\u67E5\u770B\u5230\u7684 SYSTEM \u6587\u4EF6\u7C7B\u578B\u662F Squashfs filesystem\uFF0C\u90A3\u4E48\u9700\u8981\u7528\u5230 squashfs-tools \u5DE5\u5177\u547D\u4EE4\uFF0C\u76F4\u63A5\u5B89\u88C5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>kei@kei-KVM:~$ <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> squashfs-tools 
<span class="token punctuation">[</span>sudo<span class="token punctuation">]</span> karin \u7684\u5BC6\u7801\uFF1A 
\u6B63\u5728\u8BFB\u53D6\u8F6F\u4EF6\u5305\u5217\u8868<span class="token punctuation">..</span>. \u5B8C\u6210
\u6B63\u5728\u5206\u6790\u8F6F\u4EF6\u5305\u7684\u4F9D\u8D56\u5173\u7CFB\u6811       
\u6B63\u5728\u8BFB\u53D6\u72B6\u6001\u4FE1\u606F<span class="token punctuation">..</span>. \u5B8C\u6210       
\u4E0B\u5217\u8F6F\u4EF6\u5305\u662F\u81EA\u52A8\u5B89\u88C5\u7684\u5E76\u4E14\u73B0\u5728\u4E0D\u9700\u8981\u4E86\uFF1A
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
\u4F7F\u7528<span class="token string">&#39;sudo apt autoremove&#39;</span>\u6765\u5378\u8F7D\u5B83<span class="token punctuation">(</span>\u5B83\u4EEC<span class="token punctuation">)</span>\u3002
\u4E0B\u5217\u8F6F\u4EF6\u5305\u5C06\u88AB\u5347\u7EA7\uFF1A
  squashfs-tools
\u5347\u7EA7\u4E86 <span class="token number">1</span> \u4E2A\u8F6F\u4EF6\u5305\uFF0C\u65B0\u5B89\u88C5\u4E86 <span class="token number">0</span> \u4E2A\u8F6F\u4EF6\u5305\uFF0C\u8981\u5378\u8F7D <span class="token number">0</span> \u4E2A\u8F6F\u4EF6\u5305\uFF0C\u6709 <span class="token number">123</span> \u4E2A\u8F6F\u4EF6\u5305\u672A\u88AB\u5347\u7EA7\u3002
\u9700\u8981\u4E0B\u8F7D <span class="token number">111</span> kB \u7684\u5F52\u6863\u3002
\u89E3\u538B\u7F29\u540E\u4F1A\u6D88\u8017 <span class="token number">0</span> B \u7684\u989D\u5916\u7A7A\u95F4\u3002
\u83B7\u53D6:1 http://cn.archive.ubuntu.com/ubuntu bionic-updates/main amd64 squashfs-tools amd64 <span class="token number">1</span>:4.3-6ubuntu0.18.04.2 <span class="token punctuation">[</span><span class="token number">111</span> kB<span class="token punctuation">]</span>
\u5DF2\u4E0B\u8F7D <span class="token number">111</span> kB\uFF0C\u8017\u65F6 <span class="token number">2</span>\u79D2 <span class="token punctuation">(</span><span class="token number">51.9</span> kB/s<span class="token punctuation">)</span>      
<span class="token punctuation">(</span>\u6B63\u5728\u8BFB\u53D6\u6570\u636E\u5E93 <span class="token punctuation">..</span>. \u7CFB\u7EDF\u5F53\u524D\u5171\u5B89\u88C5\u6709 <span class="token number">190664</span> \u4E2A\u6587\u4EF6\u548C\u76EE\u5F55\u3002<span class="token punctuation">)</span>
\u6B63\u51C6\u5907\u89E3\u5305 <span class="token punctuation">..</span>./squashfs-tools_1%3a4.3-6ubuntu0.18.04.2_amd64.deb  <span class="token punctuation">..</span>.
\u6B63\u5728\u5C06 squashfs-tools <span class="token punctuation">(</span><span class="token number">1</span>:4.3-6ubuntu0.18.04.2<span class="token punctuation">)</span> \u89E3\u5305\u5230 <span class="token punctuation">(</span><span class="token number">1</span>:4.3-6ubuntu0.18.04.1<span class="token punctuation">)</span> \u4E0A <span class="token punctuation">..</span>.
\u6B63\u5728\u8BBE\u7F6E squashfs-tools <span class="token punctuation">(</span><span class="token number">1</span>:4.3-6ubuntu0.18.04.2<span class="token punctuation">)</span> <span class="token punctuation">..</span>.
\u6B63\u5728\u5904\u7406\u7528\u4E8E man-db <span class="token punctuation">(</span><span class="token number">2.8</span>.3-2ubuntu0.1<span class="token punctuation">)</span> \u7684\u89E6\u53D1\u5668 <span class="token punctuation">..</span>.
kei@kei-KVM:~$
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="unsquashfs-\u547D\u4EE4\u89E3\u538B\u89E3\u5305" tabindex="-1"><a class="header-anchor" href="#unsquashfs-\u547D\u4EE4\u89E3\u538B\u89E3\u5305" aria-hidden="true">#</a> unsquashfs \u547D\u4EE4\u89E3\u538B\u89E3\u5305</h2><p>\u89E3\u5305\u6253\u5305\u6700\u597D\u5207\u6362\u5230 root \u7528\u6237\u64CD\u4F5C\u3002\u7528 <code>unsquashfs</code> \u547D\u4EE4\u89E3\u538B\u7F29\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5207\u6362 root \u7528\u6237</span>
kei@kei-KVM:~$ <span class="token function">su</span> -
root@kei-KVM:~<span class="token comment">#</span>

<span class="token comment"># \u590D\u5236\u4E0A\u9762\u89E3\u538B\u7684 SYSTEM \u6587\u4EF6\u5230\u5F53\u524D\u4F4D\u7F6E</span>
root@kei-KVM:~<span class="token comment"># cp /home/kei/\u684C\u9762/SYSTEM .</span>

<span class="token comment"># unsquashfs \u547D\u4EE4\u89E3\u5305 SYSTEM \u6587\u4EF6</span>
root@kei-KVM:~<span class="token comment"># unsquashfs SYSTEM </span>
Parallel unsquashfs: Using <span class="token number">2</span> processors
<span class="token number">16882</span> inodes <span class="token punctuation">(</span><span class="token number">19542</span> blocks<span class="token punctuation">)</span> to <span class="token function">write</span>

<span class="token punctuation">[</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token punctuation">\\</span><span class="token punctuation">]</span> <span class="token number">19542</span>/19542 <span class="token number">100</span>%

created <span class="token number">15854</span> files
created <span class="token number">1022</span> directories
created <span class="token number">1028</span> symlinks
created <span class="token number">0</span> devices
created <span class="token number">0</span> fifos

<span class="token comment"># \u89E3\u538B\u5B8C\u6210\u540E\uFF0C\u67E5\u770B\u4E00\u4E0B\uFF0C\u591A\u51FA\u4E00\u4E2A squashfs-root \u6587\u4EF6\u5939</span>
root@kei-KVM:~<span class="token comment"># ls -l</span>
\u603B\u7528\u91CF <span class="token number">885196</span>
drwxrwxr-x <span class="token number">12</span> root root      <span class="token number">4096</span> <span class="token number">6</span>\u6708  <span class="token number">19</span> 05:03 squashfs-root
-rw-------  <span class="token number">1</span> root root <span class="token number">906424320</span> <span class="token number">9</span>\u6708  <span class="token number">16</span> <span class="token number">14</span>:04 SYSTEM

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="\u67E5\u770B\u4E0E\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u4E0E\u4FEE\u6539" aria-hidden="true">#</a> \u67E5\u770B\u4E0E\u4FEE\u6539</h2><p>\u6839\u636E\u9700\u6C42\uFF0C\u9002\u5F53\u4FEE\u6539\u91CC\u9762\u7684\u76F8\u5173\u6587\u4EF6\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u4E00\u4E0B squashfs-root \u76EE\u5F55</span>
root@kei-KVM:~/squashfs-root<span class="token comment"># ls -l squashfs-root/</span>
\u603B\u7528\u91CF <span class="token number">44</span>
lrwxrwxrwx  <span class="token number">1</span> root root    <span class="token number">8</span> <span class="token number">6</span>\u6708  <span class="token number">19</span> 05:03 bin -<span class="token operator">&gt;</span> /usr/bin
drwxrwxr-x  <span class="token number">2</span> root root <span class="token number">4096</span> <span class="token number">6</span>\u6708  <span class="token number">19</span> 05:02 dev
-rw-rw-r--  <span class="token number">1</span> root root   <span class="token number">11</span> <span class="token number">6</span>\u6708  <span class="token number">19</span> 05:03 ee_arch
lrwxrwxrwx  <span class="token number">1</span> root root   <span class="token number">24</span> <span class="token number">6</span>\u6708  <span class="token number">19</span> 05:03 emuelec -<span class="token operator">&gt;</span> /storage/.config/emuelec
drwxrwxr-x <span class="token number">27</span> root root <span class="token number">4096</span> <span class="token number">6</span>\u6708  <span class="token number">19</span> 05:03 etc
drwxrwxr-x  <span class="token number">2</span> root root <span class="token number">4096</span> <span class="token number">6</span>\u6708  <span class="token number">19</span> 05:02 flash
lrwxrwxrwx  <span class="token number">1</span> root root    <span class="token number">8</span> <span class="token number">6</span>\u6708  <span class="token number">19</span> 05:03 lib -<span class="token operator">&gt;</span> /usr/lib
lrwxrwxrwx  <span class="token number">1</span> root root   <span class="token number">10</span> <span class="token number">6</span>\u6708  <span class="token number">19</span> 05:03 media -<span class="token operator">&gt;</span> /var/media
lrwxrwxrwx  <span class="token number">1</span> root root   <span class="token number">13</span> <span class="token number">6</span>\u6708  <span class="token number">19</span> 05:03 opt -<span class="token operator">&gt;</span> /storage/.opt
drwxrwxr-x  <span class="token number">2</span> root root <span class="token number">4096</span> <span class="token number">6</span>\u6708  <span class="token number">19</span> 05:02 proc
drwxrwxr-x  <span class="token number">2</span> root root <span class="token number">4096</span> <span class="token number">6</span>\u6708  <span class="token number">19</span> 05:02 run
lrwxrwxrwx  <span class="token number">1</span> root root    <span class="token number">9</span> <span class="token number">6</span>\u6708  <span class="token number">19</span> 05:03 sbin -<span class="token operator">&gt;</span> /usr/sbin
drwxrwxr-x  <span class="token number">2</span> root root <span class="token number">4096</span> <span class="token number">6</span>\u6708  <span class="token number">19</span> 05:02 storage
drwxrwxr-x  <span class="token number">2</span> root root <span class="token number">4096</span> <span class="token number">6</span>\u6708  <span class="token number">19</span> 05:02 sys
drwxrwxr-x  <span class="token number">2</span> root root <span class="token number">4096</span> <span class="token number">6</span>\u6708  <span class="token number">19</span> 05:02 tmp
drwxrwxr-x <span class="token number">10</span> root root <span class="token number">4096</span> <span class="token number">6</span>\u6708  <span class="token number">19</span> 05:03 usr
drwxrwxr-x  <span class="token number">2</span> root root <span class="token number">4096</span> <span class="token number">6</span>\u6708  <span class="token number">19</span> 05:02 var
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u76F8\u5173\u6587\u4EF6\u6240\u5728\u4F4D\u7F6E\uFF1A</p><ul><li><p>Emuelec \u542F\u52A8\u811A\u672C\uFF1A<code>squashfs-root/usr/bin/emuelecRunEmu.sh</code></p></li><li><p>\u81EA\u542F\u52A8\u811A\u672C\uFF1A<code>squashfs-root/usr/config/autostart.sh</code></p></li><li><p>\u4FEE\u6539\u5F00\u673A\u89C6\u9891\uFF1A<code>squashfs-root/usr/bin/show_splash.sh</code></p></li><li><p>\u4FEE\u6539\u8FB9\u6846\uFF1A<code>squashfs-root/usr/bun/bezels.sh</code></p></li></ul><h2 id="\u67E5\u770B\u539F\u5305\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u539F\u5305\u4FE1\u606F" aria-hidden="true">#</a> \u67E5\u770B\u539F\u5305\u4FE1\u606F</h2><p>\u4F7F\u7528 <code>unsquashfs -s [filename]</code> \u547D\u4EE4\u6765\u67E5\u770B squashfs \u6587\u4EF6\u7C7B\u578B\u7684\u5305\u538B\u7F29\u4FE1\u606F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u4E00\u4E0B\u539F SYSTEM \u6587\u4EF6\u7684 squashfs \u538B\u7F29\u4FE1\u606F</span>
root@kei-KVM:~<span class="token comment"># unsquashfs -s SYSTEM </span>
Found a valid SQUASHFS <span class="token number">4</span>:0 superblock on SYSTEM.
Creation or last append <span class="token function">time</span> Sat Jun <span class="token number">19</span> 05:05:07 <span class="token number">2021</span>
Filesystem size <span class="token number">885177.13</span> Kbytes <span class="token punctuation">(</span><span class="token number">864.43</span> Mbytes<span class="token punctuation">)</span>
Compression lzo					<span class="token comment">#\u538B\u7F29\u65B9\u5F0F\uFF1A-comp lzo</span>
	algorithm lzo1x_999		<span class="token comment">#\u538B\u7F29\u7B97\u6CD5\uFF1A-Xalgorithm lzo1x_999</span>
	compression level <span class="token number">9</span>		<span class="token comment">#\u538B\u7F29\u7B49\u7EA7\uFF1A-Xcompression-level 9</span>
Block size <span class="token number">524288</span>				<span class="token comment">#\u5757\u5927\u5C0F\uFF1A-b 524288</span>
Filesystem is exportable via NFS
Inodes are compressed
Data is compressed
Fragments are compressed
Always-use-fragments option is not specified
Xattrs are not stored			<span class="token comment">#\u6269\u5C55\u5C5E\u6027\uFF1A-no-xattrs</span>
Duplicates are removed
Number of fragments <span class="token number">988</span>
Number of inodes <span class="token number">17904</span>
Number of ids <span class="token number">2</span>

<span class="token comment"># \u53EF\u4EE5\u770B\u5230\u538B\u7F29\u65B9\u5F0F\u662F lzo\uFF0C\u538B\u7F29\u7B97\u6CD5\u662F lzo1x_999\uFF0C\u538B\u7F29\u7B49\u7EA7\u662F 9 \uFF0C\u5757\u5927\u5C0F\u662F 524288 \uFF0C\u6269\u5C55\u5C5E\u6027\u662F not stored \u7B49\u4FE1\u606F\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="mksquashfs-\u547D\u4EE4\u538B\u7F29\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#mksquashfs-\u547D\u4EE4\u538B\u7F29\u6253\u5305" aria-hidden="true">#</a> mksquashfs \u547D\u4EE4\u538B\u7F29\u6253\u5305</h2><p>\u6700\u540E\uFF0C\u4F7F\u7528 <code>mksquashfs</code> \u547D\u4EE4\uFF0C\u6839\u636E\u4E0A\u9762\u67E5\u770B\u5230\u7684\u538B\u7F29\u53C2\u6570\u4FE1\u606F\uFF0C\u5BF9 <code>squashfs-root/</code> \u76EE\u5F55\u8FDB\u884C\u538B\u7F29\u6253\u5305\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>root@kei-KVM:~<span class="token comment"># mksquashfs squashfs-root/ SYSTEM_changed -comp lzo -Xalgorithm lzo1x_999 -Xcompression-level 9 -b 524288 -no-xattrs</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h2 id="\u5BF9\u6BD4\u539F\u5305\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u6BD4\u539F\u5305\u4FE1\u606F" aria-hidden="true">#</a> \u5BF9\u6BD4\u539F\u5305\u4FE1\u606F</h2><p>\u538B\u7F29\u5B8C\u6210\u540E\uFF0C<code>unsquashfs -s</code> \u547D\u4EE4\u518D\u6B21\u67E5\u770B\u4E00\u4E0B\u65B0\u751F\u57CE\u7684\u6587\u4EF6\u4FE1\u606F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>root@kei-KVM:~<span class="token comment"># unsquashfs -s SYSTEM_changed </span>
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

<span class="token comment"># file \u547D\u4EE4\u518D\u6B21\u67E5\u770B\u4E00\u4E0B</span>
root@kei-KVM:~<span class="token comment"># file SYSTEM_changed </span>
SYSTEM_changed: Squashfs filesystem, little endian, version <span class="token number">4.0</span>, <span class="token number">906421372</span> bytes, <span class="token number">17904</span> inodes, blocksize: <span class="token number">524288</span> bytes, created: Thu Sep <span class="token number">16</span> 06:39:18 <span class="token number">2021</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u548C\u539F\u59CB\u7684 SYSTEM \u6BD4\u8F83\u4E00\u4E0B\uFF0C\u9664\u4E86\u65F6\u95F4\u548C\u540D\u5B57\uFF0C\uFF08\u6587\u4EF6\u7684\u5927\u5C0F\u6709\u5FAE\u5C0F\u53D8\u5316\uFF0C\u56E0\u4E3A\u4FEE\u6539\u4E86\u6587\u4EF6\uFF09\u5176\u5B83\u4FE1\u606F\u6CA1\u6709\u4EFB\u4F55\u53D8\u5316\u3002</p><p>\u4EE5\u4E0A\uFF0C\u5C31\u662F squashfs \u6587\u4EF6\u7C7B\u578B\u7684\u89E3\u5305\u548C\u6253\u5305\u7684\u8FC7\u7A0B\u3002</p>`,25);function p(r,o){return e}var t=s(a,[["render",p]]);export{t as default};
