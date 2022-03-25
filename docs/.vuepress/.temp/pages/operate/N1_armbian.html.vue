<template><h2 id="下载-armbian-镜像" tabindex="-1"><a class="header-anchor" href="#下载-armbian-镜像" aria-hidden="true">#</a> 下载 Armbian 镜像</h2>
<p>下载地址：https://users.armbian.com/balbes150/arm-64/
该地址为 armbian 官网 balbes150 大神专门为晶晨、全志、RK 芯片的盒子做的镜像，并且不断更新，更新后，原来的镜像都会被删除，所以如果觉得某个版本的镜像好，要自己备份。</p>
<h2 id="写入镜像到-u盘" tabindex="-1"><a class="header-anchor" href="#写入镜像到-u盘" aria-hidden="true">#</a> 写入镜像到 U盘</h2>
<ol>
<li>
<p>下载镜像写入工具，把镜像写入到U盘中。</p>
</li>
<li>
<p>烧录到优盘后，修改 <code>extlinux</code> 目录下的 <code>extlinux.conf</code> 文件。</p>
</li>
</ol>
<p>前三行不变之后全用 #注释，#aml s9xx 以下的行解除#注释，并修改对应 dtb 路径（只解除一个 FDT 行的注释并修改即可）</p>
<p>2018 年上半年以前的 S905L/M2 的机器（Q7、部分Q5、HM201、R3300L、MG101、M201S、M201D、部分E900V21C)，使用 p212；
新一代支持蓝牙和双频 WiFi 的 S905L 盒子，比如咪咕 MGV2000、创维 E900V21D/E 等机型由于没有适配的 dtb，使用 p212 有机会开机启动，但没有视频和网络，可以通过 TTL 输出，目前没有进一步适配 dtb；S905M的机器，比如江苏版 Q5、魔百盒 G2 40F、百事通 R3300-M 等，使用 gxbb_p200_1G_100M_RealtekWiFi
其他机器所用 dtb 见下：</p>
<ul>
<li>Amlogic S905 = p200/p201</li>
<li>Amlogic S905X = p212</li>
<li>Amlogic S905D = p230/231</li>
<li>Amlogic S905W = p281</li>
<li>Amlogic S912 = q200/q201</li>
</ul>
<ol start="3">
<li>重命名 U盘根目录的 u-boot-s905x-s912 为 u-boot.ext</li>
<li>插入盒子，U盘启动</li>
</ol>
<h2 id="进入-armbian-系统" tabindex="-1"><a class="header-anchor" href="#进入-armbian-系统" aria-hidden="true">#</a> 进入 armbian 系统</h2>
<ol>
<li>插入 U盘，给N1通电，会默认进入 U盘的 armbian 系统</li>
</ol>
<ul>
<li>
<p>username：root</p>
</li>
<li>
<p>passeord：1234</p>
<p>首次登录，需要修改密码，密码修改后，提示新建账户，ctrl+C可以取消</p>
</li>
</ul>
<ol start="2">
<li>写入 emmc</li>
</ol>
<p>输入如下命令，执行脚本，会自动把 armbian 写入到 emmc 中</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>./install-aml.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>当出现 commpletd 表明写入完成</p>
<ol start="3">
<li>
<p>重启 N1</p>
<p>输入命令</p>
</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">shutdown</span> -r now
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>等到 N1 的灯灭掉之后，拔出U盘，在重新拔插电源，N1 会自动计入到 emmc 的 armbian 系统</p>
<hr>
<p>以上，N1 刷入 armbian 结束。</p>
</template>
