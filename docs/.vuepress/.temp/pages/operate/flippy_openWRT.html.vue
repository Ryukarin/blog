<template><h2 id="所需文件" tabindex="-1"><a class="header-anchor" href="#所需文件" aria-hidden="true">#</a> 所需文件</h2>
<ul>
<li>
<p>Flippy预编译好的 Arm64 内核（3个文件 boot、dtb、modules）</p>
<p>下载地址：<a href="https://pan.baidu.com/s/19KNVcCQL57mvpiboFc-5rA" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/19KNVcCQL57mvpiboFc-5rA<ExternalLinkIcon/></a> 提取码：hk6x</p>
</li>
<li>
<p>自己编译的 openwrt rootfs tar.gz 包</p>
<ul>
<li>openwrt-armvirt-64-default-rootfs.tar.gz</li>
</ul>
</li>
</ul>
<h2 id="准备环境" tabindex="-1"><a class="header-anchor" href="#准备环境" aria-hidden="true">#</a> 准备环境</h2>
<ul>
<li>
<p>linux 环境（这里以 Ubuntu 20.04 为工作环境）</p>
</li>
<li>
<p>预先安装软件包。</p>
<p>losetup、lsblk(版本&gt;=2.33)、blkid、uuidgen、fdisk、parted、mkfs.vfat、mkfs.ext4、mkfs.btrfs (列表不一定完整，打包过程中若发生错误，请自行检查输出结果并添加缺失的命令）</p>
</li>
</ul>
<h2 id="openwrt-编译" tabindex="-1"><a class="header-anchor" href="#openwrt-编译" aria-hidden="true">#</a> OpenWRT 编译</h2>
<p>关于编译，请参考此篇文章：<a href="https://ryukarin.github.io/blog/operate/openwrt/" target="_blank" rel="noopener noreferrer">https://ryukarin.github.io/blog/operate/openwrt/<ExternalLinkIcon/></a></p>
<p><strong>编译注意事项：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Target System  ->  QEMU ARM Virtual Machine 
Subtarget ->  QEMU ARMv8 Virtual Machine (cortex-a53)
Target Profile  ->  Default
Target Images  ->   tar.gz
*** 必选软件包(基础依赖包，仅保证打出的包可以写入EMMC,可以在EMMC上在线升级，不包含具体的应用)： 
Languages -> Perl               
             ->  perl-http-date
             ->  perlbase-getopt
             ->  perlbase-time
             ->  perlbase-unicode                              
             ->  perlbase-utf8        
Utilities -> Disc -> blkid、fdisk、lsblk、parted            
          -> Filesystem -> attr、btrfs-progs(Build with zstd support)、chattr、dosfstools、
                           e2fsprogs、f2fs-tools、f2fsck、lsattr、mkf2fs、xfs-fsck、xfs-mkfs
          -> Compression -> bsdtar 或 p7zip(非官方源)、pigz
          -> Shells  ->  bash         
          -> gawk、getopt、losetup、tar、uuidgen

 * (可选)Wifi基础包：
 *     打出的包可支持博通SDIO无线模块,Firmware不用选，
 *     因为打包源码中已经包含了来自Armbian的firmware，
 *     会自动覆盖openwrt rootfs中已有的firmware
 Kernel modules  ->   Wireless Drivers -> kmod-brcmfmac(SDIO) 
                                       -> kmod-brcmutil
                                       -> kmod-cfg80211
                                       -> kmod-mac80211
 Network  ->  WirelessAPD -> hostpad-common
                          -> wpa-cli
                          -> wpad-basic
          ->  iw
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p><strong>除上述必选项以外的软件包可以按需自主选择。</strong></p>
<ul>
<li>
<p>编译完成后输出路径：<code>lede/bin/targets/armvirt/64/</code></p>
</li>
<li>
<p>固件文件名：<code>openwrt-armvirt-64-default-rootfs.tar.gz</code></p>
</li>
</ul>
<h2 id="编译-phicomm-n1-固件" tabindex="-1"><a class="header-anchor" href="#编译-phicomm-n1-固件" aria-hidden="true">#</a> 编译 Phicomm_N1 固件</h2>
<ol>
<li>
<p>新建工作目录</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">mkdir</span> openwrt_arm
$ <span class="token builtin class-name">cd</span> openwrt_arm
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
<li>
<p>放置内核文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">mkdir</span> kernel
<span class="token comment">#在openwrt_arm下新建kernel目录，并放入Flippy预编译好的Arm64内核（3个相同版本号）</span>
<span class="token comment"># boot-5.4.159-flippy-67+o.tar.gz</span>
<span class="token comment"># dtb-amlogic-5.4.159-flippy-67+o.tar.gz</span>
<span class="token comment"># modules-5.4.159-flippy-67+o.tar.gz</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li>
<li>
<p>git clone 项目</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> clone https://github.com/unifreq/openwrt_packit
$ <span class="token function">ls</span> -l
总用量 <span class="token number">12</span>
drwxrwxr-x  <span class="token number">2</span> karin karin <span class="token number">4096</span> <span class="token number">11</span>月 <span class="token number">16</span> <span class="token number">14</span>:59 kernel
drwxrwxr-x <span class="token number">19</span> karin karin <span class="token number">4096</span> <span class="token number">11</span>月 <span class="token number">16</span> <span class="token number">14</span>:08 lede
drwxrwxr-x  <span class="token number">6</span> karin karin <span class="token number">4096</span> <span class="token number">11</span>月 <span class="token number">16</span> <span class="token number">14</span>:54 openwrt_packit
<span class="token comment">#把编译好的openwrt-armvirt-64-default-rootfs.tar.gz上传至openwrt_arm/openwrt_packit/目录中</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li>
<li>
<p>修改环境</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> openwrt_packit
$ gedit make.env
<span class="token comment">#根据提示，修改WHOAMI，KERNEL_VERSION，KERNEL_PKG_HOME</span>
<span class="token comment"># WHOAMI是打包者的名字</span>
<span class="token comment"># KERNEL_VERSION是Flippy预编译好的Arm64内核的版本，选择对应的版本，其他注释，没有对应版本则修改</span>
<span class="token comment"># KERNEL_PKG_HOME是Flippy预编译好的Arm64内核文件所在目录</span>
<span class="token comment">#修改完成之后保存</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><img src="@source/operate/assets/flippy_openwrt.png" alt="" loading="lazy"></p>
</li>
<li>
<p>执行打包脚本</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> ./mk_s905d_n1.sh 
<span class="token comment"># ./mk_xxx.sh</span>
<span class="token comment"># xxx指代你想要生成的固件对应的芯片型号或设备型号</span>
<span class="token comment"># 如下信息表示镜像固件已经生成</span>
镜像已生成<span class="token operator">!</span> 存放在 /home/karin/openwrt_arm/openwrt_packit/output/ 下面<span class="token operator">!</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span> end ./mk_s905d_n1.sh <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li>
</ol>
<p>参考：</p>
<p><a href="https://github.com/unifreq/openwrt_packit" target="_blank" rel="noopener noreferrer">https://github.com/unifreq/openwrt_packit<ExternalLinkIcon/></a></p>
<p>其他盒子固件的编译方法类似（如贝壳云等）</p>
</template>
