<template><p>此文主要是以 Lean 的 Openwrt 源码编译：<a href="https://github.com/coolsnowwolf/lede" target="_blank" rel="noopener noreferrer">https://github.com/coolsnowwolf/lede<ExternalLinkIcon/></a></p>
<h2 id="固件说明" tabindex="-1"><a class="header-anchor" href="#固件说明" aria-hidden="true">#</a> 固件说明</h2>
<ul>
<li>
<p>默认登陆 IP：192.168.1.1</p>
</li>
<li>
<p>用户名/密码：root/password</p>
</li>
<li>
<p>插件可自行增加或删减</p>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">说明</p>
<ul>
<li><strong>不要用 root 用户进行 <code>git</code> 和编译！！！</strong></li>
<li>国内用户编译前最好准备好梯子</li>
</ul>
</div>
<h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2>
<h3 id="_1、linux-系统" tabindex="-1"><a class="header-anchor" href="#_1、linux-系统" aria-hidden="true">#</a> 1、Linux 系统</h3>
<p>推荐 Ubuntu 18.04 LTS x64，当然其它也可以，本文是基于 Ubuntu 18.04 LTS。</p>
<h3 id="_2、环境搭建" tabindex="-1"><a class="header-anchor" href="#_2、环境搭建" aria-hidden="true">#</a> 2、环境搭建</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">apt-get</span> update
$ <span class="token function">sudo</span> <span class="token function">apt-get</span> -y <span class="token function">install</span> build-essential asciidoc binutils <span class="token function">bzip2</span> <span class="token function">gawk</span> gettext <span class="token function">git</span> libncurses5-dev libz-dev patch python3.5 python2.7 <span class="token function">unzip</span> zlib1g-dev lib32gcc1 libc6-dev-i386 subversion flex uglifyjs git-core gcc-multilib p7zip p7zip-full msmtp libssl-dev texinfo libglib2.0-dev xmlto qemu-utils upx libelf-dev autoconf automake libtool autopoint device-tree-compiler g++-multilib antlr3 gperf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_3、克隆项目" tabindex="-1"><a class="header-anchor" href="#_3、克隆项目" aria-hidden="true">#</a> 3、克隆项目</h3>
<p>使用下面命令下载好源代码，然后进入 lede 目录</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> clone https://github.com/coolsnowwolf/lede
$ <span class="token builtin class-name">cd</span> lede
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_4、插件配置" tabindex="-1"><a class="header-anchor" href="#_4、插件配置" aria-hidden="true">#</a> 4、插件配置</h3>
<p>如果你需要那个什么乳酸菌+，在 lede 路径下，编辑 <code>feeds.conf.default</code> 文件，将里面最后一行开头的注释#删除保存，如果还想要 p@55w@11 插件，在此文件末尾追加下面一行内容。如下图所示。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>src-git kenzo https://github.com/kenzok8/openwrt-packages			<span class="token comment">#passwall</span>
src-git small https://github.com/kenzok8/small			<span class="token comment">#passwall依赖</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="@source/operate/assets/openwrt_1.png" alt="" loading="lazy"></p>
<h3 id="_5、更新配置" tabindex="-1"><a class="header-anchor" href="#_5、更新配置" aria-hidden="true">#</a> 5、更新配置</h3>
<p>更新 <code>feeds.conf.default</code> 文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ ./scripts/feeds update -a
$ ./scripts/feeds <span class="token function">install</span> -a
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="开始编译" tabindex="-1"><a class="header-anchor" href="#开始编译" aria-hidden="true">#</a> 开始编译</h2>
<h3 id="_1、编译配置" tabindex="-1"><a class="header-anchor" href="#_1、编译配置" aria-hidden="true">#</a> 1、编译配置</h3>
<p>输入下面命令，跳出图形配置界面，根据自己的硬件以及需要的插件，进行配置，配置好选 save，会保存到在 lede 目录下，文件名默认为 <code>.config</code>。（以小娱C1 路由器为例，进行配置）</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">make</span> menuconfig
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_2、硬件型号选择" tabindex="-1"><a class="header-anchor" href="#_2、硬件型号选择" aria-hidden="true">#</a> 2、硬件型号选择</h3>
<p>CPU 型号可以参考这里的 <a href="https://openwrt.org/supported_devices" target="_blank" rel="noopener noreferrer">CSV文件<ExternalLinkIcon/></a>，去选择相应的硬件平台型号（小娱C1和C5硬件配置一样）</p>
<p><img src="@source/operate/assets/openwrt_2.png" alt="" loading="lazy"></p>
<h3 id="_3、主题选择" tabindex="-1"><a class="header-anchor" href="#_3、主题选择" aria-hidden="true">#</a> 3、主题选择</h3>
<p>进入 LuCI ---&gt; Themes ，选择你想要的主题</p>
<p><img src="@source/operate/assets/openwrt_3.png" alt="" loading="lazy"></p>
<h3 id="_4、插件配置-1" tabindex="-1"><a class="header-anchor" href="#_4、插件配置-1" aria-hidden="true">#</a> 4、插件配置</h3>
<p>进入 LuCI ---&gt; Applications，选择你想要的插件</p>
<p><img src="@source/operate/assets/openwrt_4.png" alt="" loading="lazy"></p>
<div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>根据路由器硬件 Flash 的容量大小，插件不要选太多，保证编译出来的固件大小要小于 Flash 的容量，我一开始选了很多插件，编译就失败了，或者即使编译成功了，刷机的时候就会提示容量固件太大了，那么就在要编译的插件选 M，这样就可以让编译出来的固件没那么大了，之后刷机进入 openwrt 再手动安装编译成安装包的插件（当然，我编译小娱C1的 Flash 只有 32M，如果你的 Flash 有 128M，那就无所谓了）</p>
<p><strong>LuCI ---&gt; Applications 添加常用插件及应用说明</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-accesscontrol  <span class="token comment">#访问时间控制</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-adbyby-plus  <span class="token comment">#广告屏蔽大师Plus +</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-aria2 <span class="token comment"># Aria2下载工具</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-arpbind  <span class="token comment">#IP/MAC绑定</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-autoreboot  <span class="token comment">#支持计划重启</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-baidupcs-web  <span class="token comment">#百度网盘管理</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-ddns   <span class="token comment">#动态域名 DNS（集成阿里DDNS客户端）</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-diskman   <span class="token comment">#磁盘管理工具</span>
    luci-app-diskman ---<span class="token operator">></span> Include btrfs-progs   <span class="token comment">#新型的写时复制 (COW)</span>
    luci-app-diskman ---<span class="token operator">></span> Include lsblk   <span class="token comment">#lsblk命令 用于列出所有可用块设备的信息</span>
    luci-app-diskman ---<span class="token operator">></span> Include <span class="token function">mdadm</span>   <span class="token comment">#mdadm命令 用于创建、管理、监控RAID设备的工具</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-dockerman  <span class="token comment">#Docker容器 </span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-filetransfer  <span class="token comment">#文件传输（可web安装ipk包）</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-firewall   <span class="token comment">#添加防火墙</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-flowoffload  <span class="token comment">#Turbo ACC网络加速（集成FLOW,BBR,NAT,DNS...</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-frpc   <span class="token comment">#内网穿透Frp客户端</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-guest-wifi   <span class="token comment">#WiFi访客网络</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-hd-idle  <span class="token comment">#硬盘休眠</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-kodexplorer  <span class="token comment">#KOD可道云私人网盘</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-mwan3   <span class="token comment">#MWAN3负载均衡</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-mwan3helper   <span class="token comment">#MWAN3分流助手</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-netdata  <span class="token comment">#Netdata实时监控（图表）</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-nfs   <span class="token comment">#NFS网络共享</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-nlbwmon   <span class="token comment">#网络带宽监视器</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-nps   <span class="token comment">#内网穿透nps</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-ntpc   <span class="token comment">#NTP时间同步服务器</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-p910nd   <span class="token comment">#打印服务器模块</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-passwall  <span class="token comment">#不解释PassWall</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-qbittorrent  <span class="token comment">#BT下载工具（qBittorrent）</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-qos   <span class="token comment">#流量服务质量(QoS)流控</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-ramfree  <span class="token comment">#释放内存</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-samba   <span class="token comment">#网络共享（Samba）</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-sfe  <span class="token comment">#Turbo ACC网络加速（flowoffload二选一）</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-sqm  <span class="token comment">#流量智能队列管理（QOS）</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-乳酸菌饮料-plus   <span class="token comment">#乳酸菌饮料低调上网Plus+</span>
    luci-app-乳酸菌饮料-plus ---<span class="token operator">></span> Include s-s v贰瑞 Plugin  <span class="token comment">#SS v贰瑞插件</span>
    luci-app-乳酸菌饮料-plus ---<span class="token operator">></span> Include v贰瑞  <span class="token comment">#v贰瑞代理</span>
    luci-app-乳酸菌饮料-plus ---<span class="token operator">></span> Include Trojan  <span class="token comment">#Trojan代理</span>
    luci-app-乳酸菌饮料-plus ---<span class="token operator">></span> Include red---socks2  <span class="token comment">#red---socks2代理 </span>
    luci-app-乳酸菌饮料-plus ---<span class="token operator">></span> Include Kcptun  <span class="token comment">#Kcptun加速</span>
    luci-app-乳酸菌饮料-plus ---<span class="token operator">></span> Include 违禁软件 Server  <span class="token comment">#乳酸菌饮料服务器</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-statistics  <span class="token comment">#流量监控工具</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-syncdial  <span class="token comment">#多拨虚拟网卡（原macvlan）</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-transmission   <span class="token comment">#BT下载工具</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-ttyd   <span class="token comment">#网页终端命令行</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-unblockmusic  <span class="token comment">#解锁网易云灰色歌曲3合1新版本</span>
    UnblockNeteaseMusic Golang Version  <span class="token comment">#Golang版本</span>
    UnblockNeteaseMusic NodeJS Version  <span class="token comment">#NodeJS版本</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-upnp   <span class="token comment">#通用即插即用UPnP（端口自动转发）</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-usb-printer   <span class="token comment">#USB 打印服务器</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-verysync  <span class="token comment">#微力同步 </span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-vlmcsd  <span class="token comment">#KMS服务器设置</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-vnstat   <span class="token comment">#vnStat网络监控（图表） </span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-vsftpd  <span class="token comment">#FTP服务器</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-watchcat  <span class="token comment">#断网检测功能与定时重启</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-webadmin  <span class="token comment">#Web管理页面设置</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-wifischedule  <span class="token comment">#WiFi 计划</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-wol   <span class="token comment">#WOL网络唤醒</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-wrtbwmon  <span class="token comment">#实时流量监测</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-xlnetacc  <span class="token comment">#迅雷快鸟</span>
LuCI ---<span class="token operator">></span> Applications ---<span class="token operator">></span> luci-app-zerotier  <span class="token comment">#ZeroTier内网穿透</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br></div></div></div>
<h3 id="_5、下载-dl-库" tabindex="-1"><a class="header-anchor" href="#_5、下载-dl-库" aria-hidden="true">#</a> 5、下载 dl 库</h3>
<p>下载dl库，国内请尽量全局科学上网</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">make</span> -j8 download <span class="token assign-left variable">V</span><span class="token operator">=</span>s
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_6、编译" tabindex="-1"><a class="header-anchor" href="#_6、编译" aria-hidden="true">#</a> 6、编译</h3>
<p>输入编译命令，即可开始编译你要的固件了。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">make</span> -j1 <span class="token assign-left variable">V</span><span class="token operator">=</span>s		<span class="token comment">#-j1 后面是线程数。第一次编译推荐用单线程</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>本套代码保证肯定可以编译成功。里面包括了 R20 所有源代码，包括 IPK 的。</p>
</div>
<p>如果是二次编译</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> lede
$ <span class="token function">git</span> pull
$ ./scripts/feeds update -a <span class="token operator">&amp;&amp;</span> ./scripts/feeds <span class="token function">install</span> -a
$ <span class="token function">make</span> defconfig
$ <span class="token function">make</span> -j8 download
$ <span class="token function">make</span> -j<span class="token variable"><span class="token variable">$((</span>$<span class="token punctuation">(</span>nproc<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token variable">))</span></span> <span class="token assign-left variable">V</span><span class="token operator">=</span>s
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>如果需要重新配置：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">rm</span> -rf ./tmp <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> -rf .config
$ <span class="token function">make</span> menuconfig
$ <span class="token function">make</span> -j<span class="token variable"><span class="token variable">$((</span>$<span class="token punctuation">(</span>nproc<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token variable">))</span></span> <span class="token assign-left variable">V</span><span class="token operator">=</span>s
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_7、查看结果" tabindex="-1"><a class="header-anchor" href="#_7、查看结果" aria-hidden="true">#</a> 7、查看结果</h3>
<p>编译完成后输出路径：<code>/lede/bin/targets</code></p>
<div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>如果 feeds update 出现一堆类似下面的警告：</p>
<blockquote>
<p>WARNING: Makefile 'package/lean/shadowsocksR-libev-full/Makefile' has a dependency on 'libpcre', which does not exist</p>
</blockquote>
<p>解决办法就是删掉 feeds 整个文件夹，在 lede 或 openwrt 目录下执行 <code>rm -rf ./feeds</code>，然后再 update。</p>
<h2 id="usb-sata-支持的-kmod-及挂载" tabindex="-1"><a class="header-anchor" href="#usb-sata-支持的-kmod-及挂载" aria-hidden="true">#</a> USB/SATA 支持的 Kmod 及挂载</h2>
<p>内核编译选项</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">make</span> menuconfig
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>
<p><u>Base syste</u></p>
<ul>
<li>Block-mount ---Block device mounting and checking------支持设备挂载</li>
</ul>
</li>
<li>
<p><u>Utilities</u></p>
<ul>
<li>mount-utils</li>
</ul>
</li>
<li>
<p><u>Kernel modules &gt; Block Devices</u></p>
<ul>
<li>kmod-ata-core ------Sata接口核心&gt;&gt;支持的芯片组及传输协议 ID（支持设备类型 IDE AHCI SCSI）</li>
</ul>
</li>
<li>
<p><u>Kernel modules &gt; Filesystems</u></p>
<ul>
<li>Kmod-fs-ext4/vfat/ntfs------支持文系统类型 EXT3/4 /FAT/NTFS</li>
</ul>
</li>
<li>
<p><u>Extra packages</u></p>
<ul>
<li>
<p>automount------自动挂载磁盘</p>
</li>
<li>
<p>autosamba------自动smb共享</p>
</li>
<li>
<p>ipv6helper------支持IPv6</p>
</li>
</ul>
</li>
</ul>
<p><img src="@source/operate/assets/openwrt_5.png" alt="" loading="lazy"></p>
<h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>
<p><a href="https://blog.51cto.com/tiexcn/1700034" target="_blank" rel="noopener noreferrer">https://blog.51cto.com/tiexcn/1700034<ExternalLinkIcon/></a></p>
<p><a href="https://imgki.com/archives/openwrt-lean.html" target="_blank" rel="noopener noreferrer">https://imgki.com/archives/openwrt-lean.html<ExternalLinkIcon/></a></p>
<p><a href="https://github.com/coolsnowwolf/lede" target="_blank" rel="noopener noreferrer">https://github.com/coolsnowwolf/lede<ExternalLinkIcon/></a></p>
<p><a href="https://github.com/kenzok8/openwrt-packages" target="_blank" rel="noopener noreferrer">https://github.com/kenzok8/openwrt-packages<ExternalLinkIcon/></a></p>
<p><a href="https://www.mianao.info/2020/05/05/%E7%BC%96%E8%AF%91%E6%9B%B4%E6%96%B0OpenWrt-PassWall%E5%92%8CSSR-plus%E6%8F%92%E4%BB%B6" target="_blank" rel="noopener noreferrer">https://www.mianao.info/2020/05/05/编译更新OpenWrt-PassWall和SSR-plus插件<ExternalLinkIcon/></a></p>
<p><a href="https://www.right.com.cn/forum/thread-3682029-1-1.html" target="_blank" rel="noopener noreferrer">https://www.right.com.cn/forum/thread-3682029-1-1.html<ExternalLinkIcon/></a></p>
<p>以及恩山其它帖子</p>
</div>
</template>
