<template><p>关于 kernel.img 系统内核文件，我们该如何去修改呢？一般此类型文件是很难打开或挂载的，那么就没有办法修改了吗，经过几天的查资料，其实也不难。对安卓开发的大神来说，那是轻而易举的，但对于没有开发经验的来说就比较困难了。</p>
<p>好了，下面直接把我折腾的内容整理一下。</p>
<h2 id="解压-kernel-img-文件" tabindex="-1"><a class="header-anchor" href="#解压-kernel-img-文件" aria-hidden="true">#</a> 解压 kernel.img 文件</h2>
<h3 id="查看文件类型" tabindex="-1"><a class="header-anchor" href="#查看文件类型" aria-hidden="true">#</a> 查看文件类型</h3>
<p>要想解压某个文件，首先要知道该文件是什么类型的。用 <code>file</code> 命令查看一下 <code>kernel.img</code> 文件的类型。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>img$ <span class="token function">file</span> kernel.img
kernel.img: Android bootimg, kernel <span class="token punctuation">(</span>0x1080000<span class="token punctuation">)</span>, ramdisk <span class="token punctuation">(</span>0x1000000<span class="token punctuation">)</span>, page size: <span class="token number">2048</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>由此可知，这是 Android bootimg 文件类型。那么，怎么解压呢？</p>
<h3 id="下载工具并解压" tabindex="-1"><a class="header-anchor" href="#下载工具并解压" aria-hidden="true">#</a> 下载工具并解压</h3>
<p>在网上查找了相关资料，需要 <code>unpackbootimg</code> 解包命令，<code>mkbootimg</code> 打包命令。那这两个命令系统并没有，需要自行下载。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 下载项目 android-unpackbootimg</span>
img$ <span class="token function">git</span> clone https://github.com/anestisb/android-unpackbootimg.git bootimg
img.git bootimg
正克隆到 <span class="token string">'bootimg'</span><span class="token punctuation">..</span>.
remote: Enumerating objects: <span class="token number">50</span>, done.
remote: Total <span class="token number">50</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, pack-reused <span class="token number">50</span>
展开对象中: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">50</span>/50<span class="token punctuation">)</span>, 完成.
img$ <span class="token builtin class-name">cd</span> bootimg

<span class="token comment"># 编译此项目，会多出两个可执行文件 mkbootimg、unpackbootimg</span>
img/bootimg$ <span class="token function">make</span>
<span class="token punctuation">..</span>.
cc -O2 -Wall -Werror -Wno-address-of-packed-member -Iinclude -o mkbootimg mkbootimg.c  -L. -lmincrypt
cc -O2 -Wall -Werror -Wno-address-of-packed-member -Iinclude -o unpackbootimg unpackbootimg.c  -L. -lmincrypt

<span class="token comment"># 返回上级目录并查看文件列表</span>
img/bootimg$ <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span> <span class="token operator">&amp;&amp;</span> <span class="token function">ls</span> -l
drwxrwxr-x <span class="token number">5</span> kei kei     <span class="token number">4096</span> <span class="token number">9</span>月  <span class="token number">15</span> <span class="token number">11</span>:01 bootimg
-rw-r--r-- <span class="token number">1</span> kei kei <span class="token number">16543744</span> <span class="token number">9</span>月  <span class="token number">15</span> <span class="token number">14</span>:15 kernel.img

<span class="token comment">#新建boot目录，把 kernel.img 解压缩到 boot 目录</span>
img$ <span class="token function">mkdir</span> boot
img$ <span class="token builtin class-name">cd</span> bootimg/
img/bootimg$ ./unpackbootimg -i <span class="token punctuation">..</span>/kernel.img -o <span class="token punctuation">..</span>/boot
BOARD_KERNEL_CMDLINE 
BOARD_KERNEL_BASE 01078000
BOARD_NAME 
BOARD_PAGE_SIZE <span class="token number">2048</span>
BOARD_HASH_TYPE sha1
BOARD_KERNEL_OFFSET 00008000
BOARD_RAMDISK_OFFSET fff88000
BOARD_SECOND_OFFSET ffe88000
BOARD_TAGS_OFFSET fef88100
<span class="token comment"># 解压缩完成</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">补充</p>
<p><code>mkbootimg</code>、<code>unpackbootimg</code> 命令工具使用方法</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ ./unpackbootimg
usage: unpackbootimg
  -i|--input boot.img
  [ -o|--output output_directory]
  [ -p|--pagesize &lt;size-in-hexadecimal> ]
$ ./mkbootimg
usage: mkbootimg
       --kernel &lt;filename>
       [ --ramdisk &lt;filename> ]
       [ --second &lt;2ndbootloader-filename> ]
       [ --cmdline &lt;kernel-commandline> ]
       [ --board &lt;boardname> ]
       [ --base &lt;address> ]
       [ --pagesize &lt;pagesize> ]
       [ --dt &lt;filename> ]
       [ --kernel_offset &lt;base offset> ]
       [ --ramdisk_offset &lt;base offset> ]
       [ --second_offset &lt;base offset> ]
       [ --tags_offset &lt;base offset> ]
       [ --os_version &lt;A.B.C version> ]
       [ --os_patch_level &lt;YYYY-MM-DD date> ]
       [ --hash &lt;sha1(default)|sha256> ]
       [ --id ]
       -o|--output &lt;filename>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div></div>
<h3 id="查看解压后的文件" tabindex="-1"><a class="header-anchor" href="#查看解压后的文件" aria-hidden="true">#</a> 查看解压后的文件</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>img/bootimg$ <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/boot
img/boot$ <span class="token function">ls</span> -lh
总用量 17M
-rw-rw-r-- <span class="token number">1</span> kei kei    <span class="token number">9</span> <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-base
-rw-rw-r-- <span class="token number">1</span> kei kei    <span class="token number">1</span> <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-board
-rw-rw-r-- <span class="token number">1</span> kei kei    <span class="token number">1</span> <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-cmdline
-rw-rw-r-- <span class="token number">1</span> kei kei    <span class="token number">5</span> <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-hash
-rw-rw-r-- <span class="token number">1</span> kei kei    <span class="token number">9</span> <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-kerneloff
-rw-rw-r-- <span class="token number">1</span> kei kei    <span class="token number">5</span> <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-pagesize
-rw-rw-r-- <span class="token number">1</span> kei kei <span class="token number">5</span>.3M <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-ramdisk.gz
-rw-rw-r-- <span class="token number">1</span> kei kei    <span class="token number">9</span> <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-ramdiskoff
-rw-rw-r-- <span class="token number">1</span> kei kei    <span class="token number">9</span> <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-secondoff
-rw-rw-r-- <span class="token number">1</span> kei kei    <span class="token number">9</span> <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-tagsoff
-rw-rw-r-- <span class="token number">1</span> kei kei  12M <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-zImage

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>有两个文件比较大：</p>
<ul>
<li>kernel.img-ramdisk.gz：根文件系统</li>
<li>kernel.img-zImage：Linux 内核 zImage</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 查看这两个文件类型</span>
img/boot$ <span class="token function">file</span> kernel.img-ramdisk.gz 
kernel.img-ramdisk.gz: ASCII cpio archive <span class="token punctuation">(</span>SVR4 with no CRC<span class="token punctuation">)</span>
<span class="token comment">#cpio格式的文件</span>
img/boot$ <span class="token function">file</span> kernel.img-zImage 
kernel.img-zImage: lzop compressed data - version <span class="token number">1.030</span>, LZO1X-999, os: Unix
<span class="token comment">#lzop压缩的文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>zImage 内核文件，一般不建议修改；但是 ramdisk 根文件系统是可以根据需要适当的修改。</p>
</div>
<h2 id="修改-ramdisk" tabindex="-1"><a class="header-anchor" href="#修改-ramdisk" aria-hidden="true">#</a> 修改 ramdisk</h2>
<p>kernel.img-ramdisk.gz 映像是一个最基础的小型文件系统，它包括了初始化系统所需要的全部核心文件，例如：初始化 init 进程以及 init.rc（可以用于设置很多系统的参数）等文件。我们怎么去修改它呢？</p>
<h3 id="挂载修改" tabindex="-1"><a class="header-anchor" href="#挂载修改" aria-hidden="true">#</a> 挂载修改</h3>
<p>上面查了它是 cpio 格式的文件，那么我们就用 <code>cpio</code> 进行挂载。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 首先，新建一个目录，用于挂载 kernel.img-ramdisk.gz</span>
img/boot$ <span class="token function">mkdir</span> kernel.img-ramdisk
img/boot$ <span class="token builtin class-name">cd</span> kernel.img-ramdisk/

<span class="token comment"># cpio 命令进行挂载</span>
img/boot/kernel.img-ramdisk$ <span class="token function">sudo</span> cpio -i -F <span class="token punctuation">..</span>/kernel.img-ramdisk.gz
<span class="token number">10696</span> 块

<span class="token comment"># 挂载成功后，查看文件列表</span>
img/boot/kernel.img-ramdisk$ <span class="token function">ls</span> -l
总用量 <span class="token number">64</span>
lrwxrwxrwx <span class="token number">1</span> root root     <span class="token number">8</span> <span class="token number">9</span>月  <span class="token number">15</span> <span class="token number">10</span>:00 bin -<span class="token operator">></span> /usr/bin
drwxrwxr-x <span class="token number">2</span> root root  <span class="token number">4096</span> <span class="token number">9</span>月  <span class="token number">15</span> <span class="token number">10</span>:00 dev
drwxrwxr-x <span class="token number">2</span> root root  <span class="token number">4096</span> <span class="token number">9</span>月  <span class="token number">15</span> <span class="token number">10</span>:00 etc
-rwxr-xr-x <span class="token number">1</span> root root  <span class="token number">3879</span> <span class="token number">9</span>月  <span class="token number">15</span> <span class="token number">10</span>:00 functions
-rwxr-xr-x <span class="token number">1</span> root root <span class="token number">38051</span> <span class="token number">9</span>月  <span class="token number">15</span> <span class="token number">10</span>:00 init
lrwxrwxrwx <span class="token number">1</span> root root     <span class="token number">8</span> <span class="token number">9</span>月  <span class="token number">15</span> <span class="token number">10</span>:00 lib -<span class="token operator">></span> /usr/lib
-rwxr-xr-x <span class="token number">1</span> root root  <span class="token number">2411</span> <span class="token number">9</span>月  <span class="token number">15</span> <span class="token number">10</span>:00 platform_init
lrwxrwxrwx <span class="token number">1</span> root root     <span class="token number">9</span> <span class="token number">9</span>月  <span class="token number">15</span> <span class="token number">10</span>:00 sbin -<span class="token operator">></span> /usr/sbin
drwxrwxr-x <span class="token number">2</span> root root  <span class="token number">4096</span> <span class="token number">9</span>月  <span class="token number">15</span> <span class="token number">10</span>:00 splash
drwxrwxr-x <span class="token number">6</span> root root  <span class="token number">4096</span> <span class="token number">9</span>月  <span class="token number">15</span> <span class="token number">10</span>:00 usr
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>然后，我们进入挂载的目录中，对需要改动的文件进行修改或替换等。（可能需要 sudo 权限）</p>
<h3 id="压缩还原" tabindex="-1"><a class="header-anchor" href="#压缩还原" aria-hidden="true">#</a> 压缩还原</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 先对原先的kernel.img-ramdisk.gz做个备份（改名）</span>
img/boot/kernel.img-ramdisk$ <span class="token function">mv</span> <span class="token punctuation">..</span>/kernel.img-ramdisk.gz <span class="token punctuation">..</span>/kernel.img-ramdisk.gz.bk

<span class="token comment"># 用 cpio 命令进行打包</span>
img/boot/kernel.img-ramdisk$ <span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token operator">|</span> cpio -o -H newc <span class="token operator">></span> <span class="token punctuation">..</span>/kernel.img-ramdisk.gz
<span class="token number">10696</span> 块

<span class="token comment"># 返回上一级目录，查看生成的文件</span>
img/boot/kernel.img-ramdisk$ <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span> <span class="token operator">&amp;&amp;</span> <span class="token function">ls</span> -l
总用量 <span class="token number">22116</span>
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">9</span> <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-base
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">1</span> <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-board
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">1</span> <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-cmdline
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">5</span> <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-hash
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">9</span> <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-kerneloff
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">5</span> <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-pagesize
drwxrwxr-x <span class="token number">6</span> kei kei     <span class="token number">4096</span> <span class="token number">9</span>月  <span class="token number">15</span> <span class="token number">10</span>:00 kernel.img-ramdisk
-rw-rw-r-- <span class="token number">1</span> kei kei  <span class="token number">5476352</span> <span class="token number">9</span>月  <span class="token number">15</span> <span class="token number">10</span>:05 kernel.img-ramdisk.gz
-rw-rw-r-- <span class="token number">1</span> kei kei  <span class="token number">5476352</span> <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-ramdisk.gz.bk
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">9</span> <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-ramdiskoff
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">9</span> <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-secondoff
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">9</span> <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-tagsoff
-rw-rw-r-- <span class="token number">1</span> kei kei <span class="token number">11652817</span> <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-zImage
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="打包还原-kernel-img" tabindex="-1"><a class="header-anchor" href="#打包还原-kernel-img" aria-hidden="true">#</a> 打包还原 kernel.img</h2>
<h3 id="查看解包信息" tabindex="-1"><a class="header-anchor" href="#查看解包信息" aria-hidden="true">#</a> 查看解包信息</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 成功生成 kernel.img-ramdisk.gz，那么原先的备份就不需要了，可以删除或移到其他位置</span>
img/boot$ <span class="token function">rm</span> kernel.img-ramdisk.gz.bk
img/boot$ <span class="token function">ls</span> -l
总用量 <span class="token number">16192</span>
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">9</span> <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-base
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">1</span> <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-board
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">1</span> <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-cmdline
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">5</span> <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-hash
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">9</span> <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-kerneloff
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">5</span> <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-pagesize
-rw-rw-r-- <span class="token number">1</span> kei kei  <span class="token number">4887552</span> <span class="token number">9</span>月  <span class="token number">15</span> <span class="token number">10</span>:53 kernel.img-ramdisk.gz
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">9</span> <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-ramdiskoff
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">9</span> <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-secondoff
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">9</span> <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-tagsoff
-rw-rw-r-- <span class="token number">1</span> kei kei <span class="token number">11652817</span> <span class="token number">9</span>月  <span class="token number">15</span> 09:52 kernel.img-zImage

<span class="token comment"># 查看解包 kernel.img 的信息</span>
img/boot$ <span class="token function">cat</span> kernel.img-base kernel.img-board kernel.img-cmdline kernel.img-hash kernel.img-kerneloff kernel.img-pagesize kernel.img-ramdiskoff kernel.img-secondoff kernel.img-tagsoff
01078000


sha1
00008000
<span class="token number">2048</span>
fff88000
ffe88000
fef88100
<span class="token comment"># 查看解包打包参数信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="打包封装" tabindex="-1"><a class="header-anchor" href="#打包封装" aria-hidden="true">#</a> 打包封装</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 返回到 kernel.img 所在目录，修改原文件名称，以防原文件被覆盖导致混淆</span>
img/boot$ <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span> <span class="token operator">&amp;&amp;</span> <span class="token function">ls</span> -l
drwxrwxr-x <span class="token number">2</span> kei kei     <span class="token number">4096</span> <span class="token number">9</span>月  <span class="token number">15</span> <span class="token number">14</span>:10 boot
drwxrwxr-x <span class="token number">5</span> kei kei     <span class="token number">4096</span> <span class="token number">9</span>月  <span class="token number">15</span> <span class="token number">11</span>:01 bootimg
-rw-r--r-- <span class="token number">1</span> kei kei <span class="token number">16543744</span> <span class="token number">9</span>月  <span class="token number">15</span> <span class="token number">14</span>:15 kernel.img
img$ <span class="token function">mv</span> kernel.img kernel.img.bk

<span class="token comment"># 根据上面的参数信息，进行打包封装</span>
img/boot$ <span class="token punctuation">..</span>/bootimg/mkbootimg --kernel kernel.img-zImage --ramdisk kernel.img-ramdisk.gz --base 01078000 --kernel_offset 00008000  --ramdisk_offset fff88000 --second_offset ffe88000 --tags_offset fef88100 -o <span class="token punctuation">..</span>/kernel.img

<span class="token comment"># 打包封装完成后，返回上一级目录查看</span>
img/boot$ <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
img$ <span class="token function">file</span> kernel.img
kernel.img: Android bootimg, kernel <span class="token punctuation">(</span>0x1080000<span class="token punctuation">)</span>, ramdisk <span class="token punctuation">(</span>0x1000000<span class="token punctuation">)</span>, page size: <span class="token number">2048</span>
img$ <span class="token function">file</span> kernel.img.bk
kernel.img: Android bootimg, kernel <span class="token punctuation">(</span>0x1080000<span class="token punctuation">)</span>, ramdisk <span class="token punctuation">(</span>0x1000000<span class="token punctuation">)</span>, page size: <span class="token number">2048</span>
<span class="token comment"># 和原版文件的信息对比，一样</span>
<span class="token comment"># kernel.img 为后打包封装的，kernel.img.bk 为原文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div></template>
