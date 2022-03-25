import{_ as n,a as s}from"./app.893f8b81.js";const a={},e=s(`<p>\u5173\u4E8E kernel.img \u7CFB\u7EDF\u5185\u6838\u6587\u4EF6\uFF0C\u6211\u4EEC\u8BE5\u5982\u4F55\u53BB\u4FEE\u6539\u5462\uFF1F\u4E00\u822C\u6B64\u7C7B\u578B\u6587\u4EF6\u662F\u5F88\u96BE\u6253\u5F00\u6216\u6302\u8F7D\u7684\uFF0C\u90A3\u4E48\u5C31\u6CA1\u6709\u529E\u6CD5\u4FEE\u6539\u4E86\u5417\uFF0C\u7ECF\u8FC7\u51E0\u5929\u7684\u67E5\u8D44\u6599\uFF0C\u5176\u5B9E\u4E5F\u4E0D\u96BE\u3002\u5BF9\u5B89\u5353\u5F00\u53D1\u7684\u5927\u795E\u6765\u8BF4\uFF0C\u90A3\u662F\u8F7B\u800C\u6613\u4E3E\u7684\uFF0C\u4F46\u5BF9\u4E8E\u6CA1\u6709\u5F00\u53D1\u7ECF\u9A8C\u7684\u6765\u8BF4\u5C31\u6BD4\u8F83\u56F0\u96BE\u4E86\u3002</p><p>\u597D\u4E86\uFF0C\u4E0B\u9762\u76F4\u63A5\u628A\u6211\u6298\u817E\u7684\u5185\u5BB9\u6574\u7406\u4E00\u4E0B\u3002</p><h2 id="\u89E3\u538B-kernel-img-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u89E3\u538B-kernel-img-\u6587\u4EF6" aria-hidden="true">#</a> \u89E3\u538B kernel.img \u6587\u4EF6</h2><h3 id="\u67E5\u770B\u6587\u4EF6\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6587\u4EF6\u7C7B\u578B" aria-hidden="true">#</a> \u67E5\u770B\u6587\u4EF6\u7C7B\u578B</h3><p>\u8981\u60F3\u89E3\u538B\u67D0\u4E2A\u6587\u4EF6\uFF0C\u9996\u5148\u8981\u77E5\u9053\u8BE5\u6587\u4EF6\u662F\u4EC0\u4E48\u7C7B\u578B\u7684\u3002\u7528 <code>file</code> \u547D\u4EE4\u67E5\u770B\u4E00\u4E0B <code>kernel.img</code> \u6587\u4EF6\u7684\u7C7B\u578B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>img$ <span class="token function">file</span> kernel.img
kernel.img: Android bootimg, kernel <span class="token punctuation">(</span>0x1080000<span class="token punctuation">)</span>, ramdisk <span class="token punctuation">(</span>0x1000000<span class="token punctuation">)</span>, page size: <span class="token number">2048</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u7531\u6B64\u53EF\u77E5\uFF0C\u8FD9\u662F Android bootimg \u6587\u4EF6\u7C7B\u578B\u3002\u90A3\u4E48\uFF0C\u600E\u4E48\u89E3\u538B\u5462\uFF1F</p><h3 id="\u4E0B\u8F7D\u5DE5\u5177\u5E76\u89E3\u538B" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u5DE5\u5177\u5E76\u89E3\u538B" aria-hidden="true">#</a> \u4E0B\u8F7D\u5DE5\u5177\u5E76\u89E3\u538B</h3><p>\u5728\u7F51\u4E0A\u67E5\u627E\u4E86\u76F8\u5173\u8D44\u6599\uFF0C\u9700\u8981 <code>unpackbootimg</code> \u89E3\u5305\u547D\u4EE4\uFF0C<code>mkbootimg</code> \u6253\u5305\u547D\u4EE4\u3002\u90A3\u8FD9\u4E24\u4E2A\u547D\u4EE4\u7CFB\u7EDF\u5E76\u6CA1\u6709\uFF0C\u9700\u8981\u81EA\u884C\u4E0B\u8F7D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E0B\u8F7D\u9879\u76EE android-unpackbootimg</span>
img$ <span class="token function">git</span> clone https://github.com/anestisb/android-unpackbootimg.git bootimg
img.git bootimg
\u6B63\u514B\u9686\u5230 <span class="token string">&#39;bootimg&#39;</span><span class="token punctuation">..</span>.
remote: Enumerating objects: <span class="token number">50</span>, done.
remote: Total <span class="token number">50</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, pack-reused <span class="token number">50</span>
\u5C55\u5F00\u5BF9\u8C61\u4E2D: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">50</span>/50<span class="token punctuation">)</span>, \u5B8C\u6210.
img$ <span class="token builtin class-name">cd</span> bootimg

<span class="token comment"># \u7F16\u8BD1\u6B64\u9879\u76EE\uFF0C\u4F1A\u591A\u51FA\u4E24\u4E2A\u53EF\u6267\u884C\u6587\u4EF6 mkbootimg\u3001unpackbootimg</span>
img/bootimg$ <span class="token function">make</span>
<span class="token punctuation">..</span>.
cc -O2 -Wall -Werror -Wno-address-of-packed-member -Iinclude -o mkbootimg mkbootimg.c  -L. -lmincrypt
cc -O2 -Wall -Werror -Wno-address-of-packed-member -Iinclude -o unpackbootimg unpackbootimg.c  -L. -lmincrypt

<span class="token comment"># \u8FD4\u56DE\u4E0A\u7EA7\u76EE\u5F55\u5E76\u67E5\u770B\u6587\u4EF6\u5217\u8868</span>
img/bootimg$ <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span> <span class="token operator">&amp;&amp;</span> <span class="token function">ls</span> -l
drwxrwxr-x <span class="token number">5</span> kei kei     <span class="token number">4096</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> <span class="token number">11</span>:01 bootimg
-rw-r--r-- <span class="token number">1</span> kei kei <span class="token number">16543744</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> <span class="token number">14</span>:15 kernel.img

<span class="token comment">#\u65B0\u5EFAboot\u76EE\u5F55\uFF0C\u628A kernel.img \u89E3\u538B\u7F29\u5230 boot \u76EE\u5F55</span>
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
<span class="token comment"># \u89E3\u538B\u7F29\u5B8C\u6210</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u8865\u5145</p><p><code>mkbootimg</code>\u3001<code>unpackbootimg</code> \u547D\u4EE4\u5DE5\u5177\u4F7F\u7528\u65B9\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ ./unpackbootimg
usage: unpackbootimg
  -i|--input boot.img
  [ -o|--output output_directory]
  [ -p|--pagesize &lt;size-in-hexadecimal&gt; ]
$ ./mkbootimg
usage: mkbootimg
       --kernel &lt;filename&gt;
       [ --ramdisk &lt;filename&gt; ]
       [ --second &lt;2ndbootloader-filename&gt; ]
       [ --cmdline &lt;kernel-commandline&gt; ]
       [ --board &lt;boardname&gt; ]
       [ --base &lt;address&gt; ]
       [ --pagesize &lt;pagesize&gt; ]
       [ --dt &lt;filename&gt; ]
       [ --kernel_offset &lt;base offset&gt; ]
       [ --ramdisk_offset &lt;base offset&gt; ]
       [ --second_offset &lt;base offset&gt; ]
       [ --tags_offset &lt;base offset&gt; ]
       [ --os_version &lt;A.B.C version&gt; ]
       [ --os_patch_level &lt;YYYY-MM-DD date&gt; ]
       [ --hash &lt;sha1(default)|sha256&gt; ]
       [ --id ]
       -o|--output &lt;filename&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div></div><h3 id="\u67E5\u770B\u89E3\u538B\u540E\u7684\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u89E3\u538B\u540E\u7684\u6587\u4EF6" aria-hidden="true">#</a> \u67E5\u770B\u89E3\u538B\u540E\u7684\u6587\u4EF6</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>img/bootimg$ <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/boot
img/boot$ <span class="token function">ls</span> -lh
\u603B\u7528\u91CF 17M
-rw-rw-r-- <span class="token number">1</span> kei kei    <span class="token number">9</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-base
-rw-rw-r-- <span class="token number">1</span> kei kei    <span class="token number">1</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-board
-rw-rw-r-- <span class="token number">1</span> kei kei    <span class="token number">1</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-cmdline
-rw-rw-r-- <span class="token number">1</span> kei kei    <span class="token number">5</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-hash
-rw-rw-r-- <span class="token number">1</span> kei kei    <span class="token number">9</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-kerneloff
-rw-rw-r-- <span class="token number">1</span> kei kei    <span class="token number">5</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-pagesize
-rw-rw-r-- <span class="token number">1</span> kei kei <span class="token number">5</span>.3M <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-ramdisk.gz
-rw-rw-r-- <span class="token number">1</span> kei kei    <span class="token number">9</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-ramdiskoff
-rw-rw-r-- <span class="token number">1</span> kei kei    <span class="token number">9</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-secondoff
-rw-rw-r-- <span class="token number">1</span> kei kei    <span class="token number">9</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-tagsoff
-rw-rw-r-- <span class="token number">1</span> kei kei  12M <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-zImage

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u6709\u4E24\u4E2A\u6587\u4EF6\u6BD4\u8F83\u5927\uFF1A</p><ul><li>kernel.img-ramdisk.gz\uFF1A\u6839\u6587\u4EF6\u7CFB\u7EDF</li><li>kernel.img-zImage\uFF1ALinux \u5185\u6838 zImage</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u8FD9\u4E24\u4E2A\u6587\u4EF6\u7C7B\u578B</span>
img/boot$ <span class="token function">file</span> kernel.img-ramdisk.gz 
kernel.img-ramdisk.gz: ASCII cpio archive <span class="token punctuation">(</span>SVR4 with no CRC<span class="token punctuation">)</span>
<span class="token comment">#cpio\u683C\u5F0F\u7684\u6587\u4EF6</span>
img/boot$ <span class="token function">file</span> kernel.img-zImage 
kernel.img-zImage: lzop compressed data - version <span class="token number">1.030</span>, LZO1X-999, os: Unix
<span class="token comment">#lzop\u538B\u7F29\u7684\u6587\u4EF6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u8BF4\u660E</p><p>zImage \u5185\u6838\u6587\u4EF6\uFF0C\u4E00\u822C\u4E0D\u5EFA\u8BAE\u4FEE\u6539\uFF1B\u4F46\u662F ramdisk \u6839\u6587\u4EF6\u7CFB\u7EDF\u662F\u53EF\u4EE5\u6839\u636E\u9700\u8981\u9002\u5F53\u7684\u4FEE\u6539\u3002</p></div><h2 id="\u4FEE\u6539-ramdisk" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539-ramdisk" aria-hidden="true">#</a> \u4FEE\u6539 ramdisk</h2><p>kernel.img-ramdisk.gz \u6620\u50CF\u662F\u4E00\u4E2A\u6700\u57FA\u7840\u7684\u5C0F\u578B\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u5B83\u5305\u62EC\u4E86\u521D\u59CB\u5316\u7CFB\u7EDF\u6240\u9700\u8981\u7684\u5168\u90E8\u6838\u5FC3\u6587\u4EF6\uFF0C\u4F8B\u5982\uFF1A\u521D\u59CB\u5316 init \u8FDB\u7A0B\u4EE5\u53CA init.rc\uFF08\u53EF\u4EE5\u7528\u4E8E\u8BBE\u7F6E\u5F88\u591A\u7CFB\u7EDF\u7684\u53C2\u6570\uFF09\u7B49\u6587\u4EF6\u3002\u6211\u4EEC\u600E\u4E48\u53BB\u4FEE\u6539\u5B83\u5462\uFF1F</p><h3 id="\u6302\u8F7D\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u6302\u8F7D\u4FEE\u6539" aria-hidden="true">#</a> \u6302\u8F7D\u4FEE\u6539</h3><p>\u4E0A\u9762\u67E5\u4E86\u5B83\u662F cpio \u683C\u5F0F\u7684\u6587\u4EF6\uFF0C\u90A3\u4E48\u6211\u4EEC\u5C31\u7528 <code>cpio</code> \u8FDB\u884C\u6302\u8F7D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u9996\u5148\uFF0C\u65B0\u5EFA\u4E00\u4E2A\u76EE\u5F55\uFF0C\u7528\u4E8E\u6302\u8F7D kernel.img-ramdisk.gz</span>
img/boot$ <span class="token function">mkdir</span> kernel.img-ramdisk
img/boot$ <span class="token builtin class-name">cd</span> kernel.img-ramdisk/

<span class="token comment"># cpio \u547D\u4EE4\u8FDB\u884C\u6302\u8F7D</span>
img/boot/kernel.img-ramdisk$ <span class="token function">sudo</span> cpio -i -F <span class="token punctuation">..</span>/kernel.img-ramdisk.gz
<span class="token number">10696</span> \u5757

<span class="token comment"># \u6302\u8F7D\u6210\u529F\u540E\uFF0C\u67E5\u770B\u6587\u4EF6\u5217\u8868</span>
img/boot/kernel.img-ramdisk$ <span class="token function">ls</span> -l
\u603B\u7528\u91CF <span class="token number">64</span>
lrwxrwxrwx <span class="token number">1</span> root root     <span class="token number">8</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> <span class="token number">10</span>:00 bin -<span class="token operator">&gt;</span> /usr/bin
drwxrwxr-x <span class="token number">2</span> root root  <span class="token number">4096</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> <span class="token number">10</span>:00 dev
drwxrwxr-x <span class="token number">2</span> root root  <span class="token number">4096</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> <span class="token number">10</span>:00 etc
-rwxr-xr-x <span class="token number">1</span> root root  <span class="token number">3879</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> <span class="token number">10</span>:00 functions
-rwxr-xr-x <span class="token number">1</span> root root <span class="token number">38051</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> <span class="token number">10</span>:00 init
lrwxrwxrwx <span class="token number">1</span> root root     <span class="token number">8</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> <span class="token number">10</span>:00 lib -<span class="token operator">&gt;</span> /usr/lib
-rwxr-xr-x <span class="token number">1</span> root root  <span class="token number">2411</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> <span class="token number">10</span>:00 platform_init
lrwxrwxrwx <span class="token number">1</span> root root     <span class="token number">9</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> <span class="token number">10</span>:00 sbin -<span class="token operator">&gt;</span> /usr/sbin
drwxrwxr-x <span class="token number">2</span> root root  <span class="token number">4096</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> <span class="token number">10</span>:00 splash
drwxrwxr-x <span class="token number">6</span> root root  <span class="token number">4096</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> <span class="token number">10</span>:00 usr
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>\u7136\u540E\uFF0C\u6211\u4EEC\u8FDB\u5165\u6302\u8F7D\u7684\u76EE\u5F55\u4E2D\uFF0C\u5BF9\u9700\u8981\u6539\u52A8\u7684\u6587\u4EF6\u8FDB\u884C\u4FEE\u6539\u6216\u66FF\u6362\u7B49\u3002\uFF08\u53EF\u80FD\u9700\u8981 sudo \u6743\u9650\uFF09</p><h3 id="\u538B\u7F29\u8FD8\u539F" tabindex="-1"><a class="header-anchor" href="#\u538B\u7F29\u8FD8\u539F" aria-hidden="true">#</a> \u538B\u7F29\u8FD8\u539F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5148\u5BF9\u539F\u5148\u7684kernel.img-ramdisk.gz\u505A\u4E2A\u5907\u4EFD\uFF08\u6539\u540D\uFF09</span>
img/boot/kernel.img-ramdisk$ <span class="token function">mv</span> <span class="token punctuation">..</span>/kernel.img-ramdisk.gz <span class="token punctuation">..</span>/kernel.img-ramdisk.gz.bk

<span class="token comment"># \u7528 cpio \u547D\u4EE4\u8FDB\u884C\u6253\u5305</span>
img/boot/kernel.img-ramdisk$ <span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token operator">|</span> cpio -o -H newc <span class="token operator">&gt;</span> <span class="token punctuation">..</span>/kernel.img-ramdisk.gz
<span class="token number">10696</span> \u5757

<span class="token comment"># \u8FD4\u56DE\u4E0A\u4E00\u7EA7\u76EE\u5F55\uFF0C\u67E5\u770B\u751F\u6210\u7684\u6587\u4EF6</span>
img/boot/kernel.img-ramdisk$ <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span> <span class="token operator">&amp;&amp;</span> <span class="token function">ls</span> -l
\u603B\u7528\u91CF <span class="token number">22116</span>
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">9</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-base
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">1</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-board
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">1</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-cmdline
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">5</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-hash
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">9</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-kerneloff
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">5</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-pagesize
drwxrwxr-x <span class="token number">6</span> kei kei     <span class="token number">4096</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> <span class="token number">10</span>:00 kernel.img-ramdisk
-rw-rw-r-- <span class="token number">1</span> kei kei  <span class="token number">5476352</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> <span class="token number">10</span>:05 kernel.img-ramdisk.gz
-rw-rw-r-- <span class="token number">1</span> kei kei  <span class="token number">5476352</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-ramdisk.gz.bk
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">9</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-ramdiskoff
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">9</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-secondoff
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">9</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-tagsoff
-rw-rw-r-- <span class="token number">1</span> kei kei <span class="token number">11652817</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-zImage
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="\u6253\u5305\u8FD8\u539F-kernel-img" tabindex="-1"><a class="header-anchor" href="#\u6253\u5305\u8FD8\u539F-kernel-img" aria-hidden="true">#</a> \u6253\u5305\u8FD8\u539F kernel.img</h2><h3 id="\u67E5\u770B\u89E3\u5305\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u89E3\u5305\u4FE1\u606F" aria-hidden="true">#</a> \u67E5\u770B\u89E3\u5305\u4FE1\u606F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6210\u529F\u751F\u6210 kernel.img-ramdisk.gz\uFF0C\u90A3\u4E48\u539F\u5148\u7684\u5907\u4EFD\u5C31\u4E0D\u9700\u8981\u4E86\uFF0C\u53EF\u4EE5\u5220\u9664\u6216\u79FB\u5230\u5176\u4ED6\u4F4D\u7F6E</span>
img/boot$ <span class="token function">rm</span> kernel.img-ramdisk.gz.bk
img/boot$ <span class="token function">ls</span> -l
\u603B\u7528\u91CF <span class="token number">16192</span>
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">9</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-base
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">1</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-board
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">1</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-cmdline
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">5</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-hash
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">9</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-kerneloff
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">5</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-pagesize
-rw-rw-r-- <span class="token number">1</span> kei kei  <span class="token number">4887552</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> <span class="token number">10</span>:53 kernel.img-ramdisk.gz
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">9</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-ramdiskoff
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">9</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-secondoff
-rw-rw-r-- <span class="token number">1</span> kei kei        <span class="token number">9</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-tagsoff
-rw-rw-r-- <span class="token number">1</span> kei kei <span class="token number">11652817</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> 09:52 kernel.img-zImage

<span class="token comment"># \u67E5\u770B\u89E3\u5305 kernel.img \u7684\u4FE1\u606F</span>
img/boot$ <span class="token function">cat</span> kernel.img-base kernel.img-board kernel.img-cmdline kernel.img-hash kernel.img-kerneloff kernel.img-pagesize kernel.img-ramdiskoff kernel.img-secondoff kernel.img-tagsoff
01078000


sha1
00008000
<span class="token number">2048</span>
fff88000
ffe88000
fef88100
<span class="token comment"># \u67E5\u770B\u89E3\u5305\u6253\u5305\u53C2\u6570\u4FE1\u606F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="\u6253\u5305\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#\u6253\u5305\u5C01\u88C5" aria-hidden="true">#</a> \u6253\u5305\u5C01\u88C5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FD4\u56DE\u5230 kernel.img \u6240\u5728\u76EE\u5F55\uFF0C\u4FEE\u6539\u539F\u6587\u4EF6\u540D\u79F0\uFF0C\u4EE5\u9632\u539F\u6587\u4EF6\u88AB\u8986\u76D6\u5BFC\u81F4\u6DF7\u6DC6</span>
img/boot$ <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span> <span class="token operator">&amp;&amp;</span> <span class="token function">ls</span> -l
drwxrwxr-x <span class="token number">2</span> kei kei     <span class="token number">4096</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> <span class="token number">14</span>:10 boot
drwxrwxr-x <span class="token number">5</span> kei kei     <span class="token number">4096</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> <span class="token number">11</span>:01 bootimg
-rw-r--r-- <span class="token number">1</span> kei kei <span class="token number">16543744</span> <span class="token number">9</span>\u6708  <span class="token number">15</span> <span class="token number">14</span>:15 kernel.img
img$ <span class="token function">mv</span> kernel.img kernel.img.bk

<span class="token comment"># \u6839\u636E\u4E0A\u9762\u7684\u53C2\u6570\u4FE1\u606F\uFF0C\u8FDB\u884C\u6253\u5305\u5C01\u88C5</span>
img/boot$ <span class="token punctuation">..</span>/bootimg/mkbootimg --kernel kernel.img-zImage --ramdisk kernel.img-ramdisk.gz --base 01078000 --kernel_offset 00008000  --ramdisk_offset fff88000 --second_offset ffe88000 --tags_offset fef88100 -o <span class="token punctuation">..</span>/kernel.img

<span class="token comment"># \u6253\u5305\u5C01\u88C5\u5B8C\u6210\u540E\uFF0C\u8FD4\u56DE\u4E0A\u4E00\u7EA7\u76EE\u5F55\u67E5\u770B</span>
img/boot$ <span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>
img$ <span class="token function">file</span> kernel.img
kernel.img: Android bootimg, kernel <span class="token punctuation">(</span>0x1080000<span class="token punctuation">)</span>, ramdisk <span class="token punctuation">(</span>0x1000000<span class="token punctuation">)</span>, page size: <span class="token number">2048</span>
img$ <span class="token function">file</span> kernel.img.bk
kernel.img: Android bootimg, kernel <span class="token punctuation">(</span>0x1080000<span class="token punctuation">)</span>, ramdisk <span class="token punctuation">(</span>0x1000000<span class="token punctuation">)</span>, page size: <span class="token number">2048</span>
<span class="token comment"># \u548C\u539F\u7248\u6587\u4EF6\u7684\u4FE1\u606F\u5BF9\u6BD4\uFF0C\u4E00\u6837</span>
<span class="token comment"># kernel.img \u4E3A\u540E\u6253\u5305\u5C01\u88C5\u7684\uFF0Ckernel.img.bk \u4E3A\u539F\u6587\u4EF6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,30);function p(r,l){return e}var m=n(a,[["render",p]]);export{m as default};
