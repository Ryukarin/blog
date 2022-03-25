<template><p>红米的 RM2100（或者小米 AC2100）最近挺火的，因为价钱便宜，配置给力，信号不错，主要是可以刷机。</p>
<p>咸鱼上斐讯 K2P 已经炒上天了，虽然信号各方面没得说，但是价钱嘛。还是小米的这两款给力，官方价格，来个优惠券，真香。反观斐讯 K2P 只有二手的，还有可能翻车。于是在官网下手了红米的 RM2100。</p>
<p>收到货之后，稍微用了一会，主要测试原固件。其实还挺好用的，要不是喜欢折腾还有第三方固件有插件的加持，我才不会刷机呢。</p>
<p>下面是刷机的过程。</p>
<h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2>
<h3 id="_1、windows-系统" tabindex="-1"><a class="header-anchor" href="#_1、windows-系统" aria-hidden="true">#</a> 1、Windows 系统</h3>
<p>本文用的是 Windows 10 环境，其他 Windows 系统差不多一样的设置操作。</p>
<h3 id="_2、开启-telnet-客户端" tabindex="-1"><a class="header-anchor" href="#_2、开启-telnet-客户端" aria-hidden="true">#</a> 2、开启 Telnet 客户端</h3>
<ul>
<li>
<p>打开 <u>控制面板</u></p>
</li>
<li>
<p>找到 <u>程序</u>---&gt;<u>程序和功能</u>---&gt;<u>启用和关闭Windows功能</u></p>
</li>
<li>
<p>勾选 <u>Telnet 客户端</u></p>
</li>
</ul>
<p><img src="@source/operate/assets/ac2100_1.png" alt="" loading="lazy"></p>
<h3 id="_3、网卡配置" tabindex="-1"><a class="header-anchor" href="#_3、网卡配置" aria-hidden="true">#</a> 3、网卡配置</h3>
<ul>
<li>
<p>进入 <code>控制面板\网络和 Internet\网络和共享中心\网络连接（更改适配器设置）</code></p>
</li>
<li>
<p>把所有不相关的网络接口都禁掉（WLAN和虚拟机网络接口），只留下本地网线接口</p>
</li>
<li>
<p>修改本地网线接口</p>
<ul>
<li>IP地址：192.168.31.177</li>
<li>子网掩码：255.255.255.0</li>
<li>默认网关：192.168.31.1</li>
</ul>
</li>
</ul>
<p><img src="@source/operate/assets/ac2100_2.png" alt="" loading="lazy"></p>
<p>3、关闭杀毒软件和防火墙</p>
<p>关闭所有杀毒软件，关闭防火墙（包括360，火戎等等）</p>
<p><img src="@source/operate/assets/ac2100_3.png" alt="" loading="lazy"></p>
<h2 id="开启-telnet" tabindex="-1"><a class="header-anchor" href="#开启-telnet" aria-hidden="true">#</a> 开启 Telnet</h2>
<h3 id="_1、连接方式" tabindex="-1"><a class="header-anchor" href="#_1、连接方式" aria-hidden="true">#</a> 1、连接方式</h3>
<p>把路由器按照如下图方式连接电脑</p>
<p><img src="@source/operate/assets/ac2100_4.png" alt="" loading="lazy"></p>
<h3 id="_2、拨号" tabindex="-1"><a class="header-anchor" href="#_2、拨号" aria-hidden="true">#</a> 2、拨号</h3>
<p>浏览器进入路由器管理页面（192.168.31.1 或 miwifi.com），确保路由地址为192.168.31.1</p>
<ul>
<li>
<p>上网方式：PPPoE</p>
</li>
<li>
<p>账号：123</p>
</li>
<li>
<p>密码：123</p>
</li>
</ul>
<p><img src="@source/operate/assets/ac2100_5.png" alt="" loading="lazy"></p>
<h3 id="_3、执行开启-telnet-脚本" tabindex="-1"><a class="header-anchor" href="#_3、执行开启-telnet-脚本" aria-hidden="true">#</a> 3、执行开启 Telnet 脚本</h3>
<ul>
<li>下载并解压刷机工具【RM2100完整版.zip】， 打开 <code>/rm2100</code> 文件夹，双击 npcap-0.9991.exe 安装文件进行安装</li>
<li>打开 <code>开启telnet命令.txt</code> 文件， 并提前复制好 <code>开启telnet命令.txt</code> 里面的命令</li>
<li>打开执行 <code>一键开启telnet.bat</code>（不用管理员运行），按照提示操作（按回车键）</li>
</ul>
<p><img src="@source/operate/assets/ac2100_6.png" alt="" loading="lazy"></p>
<p><img src="@source/operate/assets/ac2100_7.png" alt="" loading="lazy"></p>
<ul>
<li>开启 PPPOE 服务器，跳出 Task_PPPOE 服务器窗口，看 Task_PPPOE 服务器窗口是否有数据包（下图红线内容）</li>
</ul>
<p><img src="@source/operate/assets/ac2100_8.png" alt="" loading="lazy"></p>
<ul>
<li>再回到一键解锁工具窗口，根据提示输入 y 回车，开启文件服务器</li>
</ul>
<p><img src="@source/operate/assets/ac2100_9.png" alt="" loading="lazy"></p>
<ul>
<li>
<p>直到 <u>Task_反弹shell</u> 窗口显示如下内容，则电脑和路由器连接成功了</p>
<blockquote>
<p>connect to [192.168.31.177] form (UNKNOWN) [192.168.31.1] ......</p>
</blockquote>
</li>
</ul>
<p><img src="@source/operate/assets/ac2100_10.png" alt="" loading="lazy"></p>
<ul>
<li>把提前复制好 <code>开启telnet命令.txt</code> 里面的命令（不用提前也可以），粘贴到 <u>Task_反弹sheel</u> 窗口（右键为粘贴），回车运行</li>
</ul>
<p><img src="@source/operate/assets/ac2100_11.png" alt="" loading="lazy"></p>
<ul>
<li>窗口显示蓝线内容，则路由器的 Telnet 开启成功</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>1、卡 <u>Task_反弹shell</u> 等问题大概率是电脑系统、防火墙、杀毒软件造成的，如果开启 Telnet 你这一步没有成功，就彻底关掉电脑防火墙和杀毒软件，再从头走一遍。</p>
<p>2、路由器 Telnet 开启成功后记得把 WAN-LAN 之间的网线（上面接线图棕色线）拔掉，否则刷入 breed 后易造成网络风暴。</p>
</div>
<h2 id="刷入-breed" tabindex="-1"><a class="header-anchor" href="#刷入-breed" aria-hidden="true">#</a> 刷入 Breed</h2>
<h3 id="_1、telnet-连接路由器" tabindex="-1"><a class="header-anchor" href="#_1、telnet-连接路由器" aria-hidden="true">#</a> 1、Telnet 连接路由器</h3>
<ul>
<li>打开 cmd 命令行窗口，输入下面命令并回车</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>telnet <span class="token number">192.168</span>.31.1		<span class="token comment">#telnet连接到路由器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="@source/operate/assets/ac2100_12.png" alt="" loading="lazy"></p>
<h3 id="_2、下载-breed-并烧录" tabindex="-1"><a class="header-anchor" href="#_2、下载-breed-并烧录" aria-hidden="true">#</a> 2、下载 Breed 并烧录</h3>
<p>依次输入以下三条命令。</p>
<p>出现下图篮框内容，表示 Breed 已经烧录好了，路由正在重启</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /tmp
<span class="token comment">#进入/tmp路径，注意此时“Task_文件服务器”进程是否还在运行，没运行的再执行一下/rm2100中的httpserver.bat，之后再执行下面命令</span>
<span class="token function">wget</span>  http://192.168.31.177:8081/breed-mt7621-xiaomi-r3g.bin<span class="token operator">&amp;&amp;</span>nvram  <span class="token builtin class-name">set</span> <span class="token assign-left variable">uart_en</span><span class="token operator">=</span><span class="token number">1</span><span class="token operator">&amp;&amp;</span>nvram <span class="token builtin class-name">set</span> <span class="token assign-left variable">bootdelay</span><span class="token operator">=</span><span class="token number">5</span><span class="token operator">&amp;&amp;</span>nvram <span class="token builtin class-name">set</span>  <span class="token assign-left variable">flag_try_sys1_failed</span><span class="token operator">=</span><span class="token number">1</span><span class="token operator">&amp;&amp;</span>nvram commit
<span class="token comment">#下载Breed.bin并设置环境参数</span>
mtd -r <span class="token function">write</span> breed-mt7621-xiaomi-r3g.bin Bootloader
<span class="token comment">#烧写Breed到Bootloader分区</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><img src="@source/operate/assets/ac2100_13.png" alt="" loading="lazy"></p>
<ul>
<li>更改 PC 端 IP</li>
</ul>
<p>将电脑有线网卡改为自动获取 IP，等待路由器重启（当电脑获取到 IP 或者路由只有一个蓝灯亮时，Breed 引导官方固件成功）。</p>
<p><img src="@source/operate/assets/ac2100_14.png" alt="" loading="lazy"></p>
<h2 id="进入-breed" tabindex="-1"><a class="header-anchor" href="#进入-breed" aria-hidden="true">#</a> 进入 Breed</h2>
<h3 id="_1、断电" tabindex="-1"><a class="header-anchor" href="#_1、断电" aria-hidden="true">#</a> 1、断电</h3>
<p>建议等待 3 分钟后拔掉电源</p>
<h3 id="_2、进入-breed" tabindex="-1"><a class="header-anchor" href="#_2、进入-breed" aria-hidden="true">#</a> 2、进入 Breed</h3>
<ul>
<li>用牙签按住 reset 键不要松开，再通电</li>
<li>一直等到蓝灯闪烁再松开 reset 键</li>
<li>浏览器访问 192.168.1.1 即可进入 Breed Web 界面。</li>
<li>首次进入 Breed 记得先备份下编程器固件和 eeprom。</li>
</ul>
<p>至此，成功进入路由器 Breed。</p>
<p><img src="@source/operate/assets/ac2100_15.png" alt="" loading="lazy"></p>
<h2 id="刷入第三方固件" tabindex="-1"><a class="header-anchor" href="#刷入第三方固件" aria-hidden="true">#</a> 刷入第三方固件</h2>
<p>在刷第三方固件之前，进入 Breed 控制台，固件备份，最好先一下备份编程器固件。</p>
<h3 id="_1、padavan-固件" tabindex="-1"><a class="header-anchor" href="#_1、padavan-固件" aria-hidden="true">#</a> 1、Padavan 固件</h3>
<ul>
<li>进入 Breed 控制台，选择固件更新---固件---选择文件，选择老毛子 Padavan 固件后，点上传</li>
</ul>
<p><img src="@source/operate/assets/ac2100_16.png" alt="" loading="lazy"></p>
<ul>
<li>上传完成后，更新确认，确认没问题后点击更新</li>
</ul>
<p><img src="@source/operate/assets/ac2100_17.png" alt="" loading="lazy"></p>
<ul>
<li>正在更新，等待更新完成</li>
</ul>
<p><img src="@source/operate/assets/ac2100_18.png" alt="" loading="lazy"></p>
<ul>
<li>更新完成后，等待 3 分钟，然后浏览器输入 Padavan 的管理 IP 地址（不同大佬编译的固件，管理 IP 地址可能不同），输入账号密码进入路由后台
<ul>
<li>账号：admin</li>
<li>密码：admin</li>
</ul>
</li>
</ul>
<p><img src="@source/operate/assets/ac2100_19.png" alt="" loading="lazy"></p>
<ul>
<li>登陆成功，进入熟悉的老毛子后台界面，有你需要的插件</li>
</ul>
<h3 id="_2、openwrt-固件" tabindex="-1"><a class="header-anchor" href="#_2、openwrt-固件" aria-hidden="true">#</a> 2、OpenWRT 固件</h3>
<ul>
<li>进 Breed 的环境变量编缉菜单，新增字段 xiaomi.r3g.bootfw 值为 2， 然后点保存。</li>
</ul>
<p><img src="@source/operate/assets/ac2100_20.png" alt="" loading="lazy"></p>
<ul>
<li>刷入临时固件（刷入方法同上）</li>
</ul>
<p><img src="@source/operate/assets/ac2100_21.png" alt="" loading="lazy"></p>
<p><img src="@source/operate/assets/ac2100_22.png" alt="" loading="lazy"></p>
<ul>
<li>重启后会进入这个临时的 openwrt，我们打算用它来刷我们真正想刷的 openwrt 固件。这个临时 openwrt 的地址是 192.168.1.1，用户名是 root，没有密码。</li>
</ul>
<p><img src="@source/operate/assets/ac2100_23.png" alt="" loading="lazy"></p>
<ul>
<li>然后找到 System -&gt; Backup / Flash Firmware，点击 Flash image... 上传我们想刷的 openwrt 固件</li>
</ul>
<p><img src="@source/operate/assets/ac2100_24.png" alt="" loading="lazy"></p>
<ul>
<li>然后浏览选择固件，点上传</li>
</ul>
<p><img src="@source/operate/assets/ac2100_25.png" alt="" loading="lazy"></p>
<ul>
<li>不要勾选 Keep settings and retain the current configuration，最后点 Continue</li>
</ul>
<p><img src="@source/operate/assets/ac2100_26.png" alt="" loading="lazy"></p>
<ul>
<li>等几分钟让路由器自己重启。进入新固件</li>
</ul>
<p><img src="@source/operate/assets/ac2100_27.png" alt="" loading="lazy"></p>
<h3 id="_3、gecoos-固件" tabindex="-1"><a class="header-anchor" href="#_3、gecoos-固件" aria-hidden="true">#</a> 3、GECOOS 固件</h3>
<ul>
<li>进入 Breed 控制台，选择固件更新---固件---选择文件，选择集客 AP 固件后，点上传，进入更新面点更新，等在更新完成（从2020051200版本开始支持 breed 升级）</li>
</ul>
<p><img src="@source/operate/assets/ac2100_28.png" alt="" loading="lazy"></p>
<ul>
<li>更新完成后，等5分钟，在浏览器输入集客 AP 的管理后台IP（6.6.6.6 或者在路由后台找到对应的 IP）
<ul>
<li>账号：admin</li>
<li>密码：admin</li>
</ul>
</li>
</ul>
<p><img src="@source/operate/assets/ac2100_29.png" alt="" loading="lazy"></p>
<ul>
<li>进入熟悉的集客 AP 的后台，之后就是自己设置</li>
</ul>
<h2 id="刷回官方-bootloader-及固件" tabindex="-1"><a class="header-anchor" href="#刷回官方-bootloader-及固件" aria-hidden="true">#</a> 刷回官方 bootloader 及固件</h2>
<h3 id="_1、刷回官方-bootloader" tabindex="-1"><a class="header-anchor" href="#_1、刷回官方-bootloader" aria-hidden="true">#</a> 1、刷回官方 bootloader</h3>
<ul>
<li>首先进入 Breed，固件更新---&gt;Bootloader---选择文件（选择官方 bootloader 文件）---&gt;上传</li>
</ul>
<p><img src="@source/operate/assets/ac2100_30.png" alt="" loading="lazy"></p>
<ul>
<li>确认更新界面，点更新，官 bootloader 只有 512KB 大小，所以很快就更新完成并返回 Breed 界面</li>
</ul>
<p><img src="@source/operate/assets/ac2100_31.png" alt="" loading="lazy"></p>
<ul>
<li>此时，已经刷回官 bootloader 了</li>
</ul>
<h3 id="_2、刷回官方固件" tabindex="-1"><a class="header-anchor" href="#_2、刷回官方固件" aria-hidden="true">#</a> 2、刷回官方固件</h3>
<p>上面已经恢复官方 boot 引导，再用官方救砖工具一键刷回。</p>
<ul>
<li>首先断开电源，用牙签按住重置键，再插上电源，持续大概10秒，直到出现<strong>橙色灯闪烁。</strong></li>
<li>使用小米路由修复工具，刷回固件，打开其中的 MIWIFIRepairTool.x86</li>
</ul>
<p><img src="@source/operate/assets/ac2100_32.png" alt="" loading="lazy"></p>
<ul>
<li>点击浏览，选择下载文件中的官方 <strong>固件---&gt;红米---&gt;miwifi_rm2100_firmware_d517e_1.0.14.bin</strong>，点击下一步</li>
</ul>
<p><img src="@source/operate/assets/ac2100_33.png" alt="" loading="lazy"></p>
<p>选择连接路由器 LAN口 的网卡，再点击下一步（开启本地服务器）</p>
<p><img src="@source/operate/assets/ac2100_34.png" alt="" loading="lazy"></p>
<ul>
<li>然后就会自动开始刷机了（把官方固件传到路由器上并烧录）</li>
</ul>
<p><img src="@source/operate/assets/ac2100_35.png" alt="" loading="lazy"></p>
<ul>
<li>进度条跑满，看到如下提示时，并且路由器出现蓝色灯闪烁，即可重启路由器完成刷机</li>
</ul>
<p><img src="@source/operate/assets/ac2100_36.png" alt="" loading="lazy"></p>
<ul>
<li>路由重启完成后，登陆路由器后台手机 APP（或浏览器 192.168.31.1），顺利进入路由器后台</li>
</ul>
<p><img src="@source/operate/assets/ac2100_37.png" alt="" loading="lazy"></p>
<ul>
<li>刷回官方固件就完成了</li>
</ul>
<h2 id="相关文件" tabindex="-1"><a class="header-anchor" href="#相关文件" aria-hidden="true">#</a> 相关文件</h2>
<p>链接: <a href="https://pan.baidu.com/s/1A5Z5DpOdlTVO-9lqS2crig" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1A5Z5DpOdlTVO-9lqS2crig<ExternalLinkIcon/></a></p>
<p>提取码: 7kmn</p>
<h2 id="本文参考" tabindex="-1"><a class="header-anchor" href="#本文参考" aria-hidden="true">#</a> 本文参考</h2>
<p><a href="https://www.right.com.cn/forum/forum.php?mod=viewthread&amp;tid=4023907&amp;extra=page%3D1&amp;page=1" target="_blank" rel="noopener noreferrer">Breed来自恩山ivybridgexeon的帖子<ExternalLinkIcon/></a></p>
<p><a href="https://www.right.com.cn/forum/forum.php?mod=viewthread&amp;tid=4022682&amp;extra=page%3D1%26filter%3Dtypeid%26typeid%3D43" target="_blank" rel="noopener noreferrer">Padavan来自恩山淮尚的帖子<ExternalLinkIcon/></a></p>
<p><a href="https://www.right.com.cn/forum/forum.php?mod=viewthread&amp;tid=4025861&amp;extra=page%3D1%26filter%3Dtypeid%26typeid%3D43" target="_blank" rel="noopener noreferrer">OpenWrt来自恩山pnq的帖子<ExternalLinkIcon/></a></p>
<p><a href="https://www.right.com.cn/forum/thread-4021056-1-1.html" target="_blank" rel="noopener noreferrer">GECOOS来自恩山sgwyj的帖子<ExternalLinkIcon/></a></p>
<p><a href="https://www.xiaomi.cn/post/5289432" target="_blank" rel="noopener noreferrer">小米路由官方救砖工具使用说明<ExternalLinkIcon/></a></p>
<p><a href="http://miwifi.com/miwifi_download.html" target="_blank" rel="noopener noreferrer">小米路由官方资源下载首页<ExternalLinkIcon/></a></p>
<p><a href="https://www.smyz.net/pc/7793.html" target="_blank" rel="noopener noreferrer">红米AC2100刷回官方固件<ExternalLinkIcon/></a></p>
<p>还有部分其他论坛帖子，有些忘记了，所以就不一一列出了。</p>
</template>
