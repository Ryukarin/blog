<template><h2 id="固件说明" tabindex="-1"><a class="header-anchor" href="#固件说明" aria-hidden="true">#</a> 固件说明</h2>
<ul>
<li>默认登陆IP：192.168.2.1</li>
<li>默认用户名/密码：admin/admin</li>
<li>默认wifi密码：1234567890</li>
<li>集成/取消新增插件请修改此文件：<code>trunk/build_firmware_modify</code></li>
<li>已适配除官方适配外的以下机型
<ul>
<li>MI-R3P(感谢群里emmmm适配,可能led控制有点问题,其它功能正常)</li>
<li>京东云路由(文件来自Lintel) 编译代码: JDC-1</li>
<li>歌华链(感谢群里Heaven适配与测试）编译代码: GHL</li>
<li>NEWIFI-D1</li>
<li>B70(感谢Untitled提供荒野无灯的适配文件)</li>
<li>JCG-AC856M(感谢群里的旅途中的我适配和测试,gpio值还未完全适配，但不影响使用)</li>
<li>JCG-AC836M(感谢群里的碧霄客修改和测试)</li>
<li>YK-L1(L1、L1C、L1W通刷)</li>
<li>PSG712</li>
<li>PSG1208</li>
<li>PSG1218</li>
<li>5K-W20 (USB)</li>
<li>OYE-001 (USB)</li>
<li>NEWIFI-MINI (USB)</li>
<li>MI-MINI (USB)</li>
<li>MI-3 (USB)</li>
<li>MI-R3G (USB)</li>
<li>HC5661A</li>
<li>HC5761A (USB)</li>
<li>HC5861B</li>
<li>360P2 (USB)</li>
<li>MI-NANO</li>
<li>MZ-R13</li>
<li>MZ-R13P</li>
<li>RT-AC1200GU (USB)</li>
<li>XY-C1 (USB)</li>
<li>WR1200JS (USB)</li>
<li>NEWIFI3 (USB)</li>
<li>B70 (USB)</li>
<li>A3004NS (USB)</li>
<li>K2P</li>
<li>K2P-USB (USB)</li>
<li>JCG-836PRO (USB)</li>
<li>JCG-AC860M (USB)</li>
<li>DIR-882 (USB)</li>
<li>DIR-878</li>
<li>MR2600 (USB)</li>
<li>WDR7300</li>
<li>RM2100</li>
<li>R2100</li>
</ul>
</li>
</ul>
<h2 id="本地编译" tabindex="-1"><a class="header-anchor" href="#本地编译" aria-hidden="true">#</a> 本地编译</h2>
<h3 id="_1、安装依赖包" tabindex="-1"><a class="header-anchor" href="#_1、安装依赖包" aria-hidden="true">#</a> 1、安装依赖包</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># Debian/Ubuntu</span>
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">unzip</span> libtool-bin <span class="token function">curl</span> cmake gperf <span class="token function">gawk</span> flex bison <span class="token function">nano</span> xxd fakeroot cpio <span class="token function">git</span> python-docutils gettext automake autopoint texinfo build-essential help2man pkg-config zlib1g-dev libgmp3-dev libmpc-dev libmpfr-dev libncurses5-dev libltdl-dev <span class="token function">wget</span>

<span class="token comment"># CentOS 7</span>
<span class="token function">sudo</span> yum update
<span class="token function">sudo</span> yum <span class="token function">install</span> ncurses-* flex byacc bison zlib-* texinfo gmp-* mpfr-* gettext libtool* libmpc-* gettext-* python-docutils <span class="token function">nano</span> help2man fakeroot
<span class="token function">sudo</span> yum groupinstall <span class="token string">"Development Tools"</span>

<span class="token comment"># CentOS 8</span>
<span class="token function">sudo</span> yum update
<span class="token function">sudo</span> yum <span class="token function">install</span> ncurses-* flex byacc bison zlib-* gmp-* mpfr-* gettext libtool* libmpc-* gettext-* <span class="token function">nano</span> fakeroot
<span class="token function">sudo</span> yum groupinstall <span class="token string">"Development Tools"</span>
<span class="token comment"># CentOS 8不能直接通过yum安装texinfo，help2man，python-docutils。请去官网下载发行的安装包编译安装</span>
<span class="token comment"># 以texinfo为例</span>
<span class="token comment"># cd /usr/local/src</span>
<span class="token comment"># sudo wget http://ftp.gnu.org/gnu/texinfo/texinfo-6.7.tar.gz</span>
<span class="token comment"># sudo tar zxvf texinfo-6.7.tar.gz</span>
<span class="token comment"># cd texinfo-6.7</span>
<span class="token comment"># sudo ./configure</span>
<span class="token comment"># sudo make</span>
<span class="token comment"># sudo make install</span>

<span class="token comment"># Archlinux/Manjaro</span>
<span class="token function">sudo</span> pacman -Syu --needed <span class="token function">git</span> base-devel cmake gperf ncurses libmpc gmp python-docutils <span class="token function">vim</span> rpcsvc-proto fakeroot
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="_2、克隆源码" tabindex="-1"><a class="header-anchor" href="#_2、克隆源码" aria-hidden="true">#</a> 2、克隆源码</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">git</span> clone --depth<span class="token operator">=</span><span class="token number">1</span> https://github.com/chongshengB/rt-n56u.git /opt/rt-n56u
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_3、准备工具链" tabindex="-1"><a class="header-anchor" href="#_3、准备工具链" aria-hidden="true">#</a> 3、准备工具链</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/rt-n56u/toolchain-mipsel

<span class="token comment"># （推荐）使用脚本下载预编译的工具链：</span>
<span class="token function">sudo</span> <span class="token function">sh</span> dl_toolchain.sh

<span class="token comment"># 或者，也可以从源码编译工具链，这需要一些时间：</span>
<span class="token comment"># Manjaro/ArchLinux 用户请使用gcc-8</span>
<span class="token comment"># sudo pacman -S gcc8</span>
<span class="token comment"># sudo ln -sf /usr/bin/gcc-8 /usr/local/bin/gcc</span>
<span class="token comment"># sudo ln -sf /usr/bin/g++-8 /usr/local/bin/g++</span>

<span class="token function">sudo</span> ./clean_toolchain
<span class="token function">sudo</span> ./build_toolchain
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_4、自定义插件-可选" tabindex="-1"><a class="header-anchor" href="#_4、自定义插件-可选" aria-hidden="true">#</a> 4、自定义插件（可选）</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/rt-n56u/trunk
<span class="token function">sudo</span> <span class="token function">nano</span> build_firmware_modify		<span class="token comment">#用nano编辑build_firmware_modify文件</span>
<span class="token comment">#将下图中的插件自定义修改y/n，y是编译，n是不编译，修改好之后，Ctrl+O保存，Ctrl+X退出</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="@source/operate/assets/padavan_1.png" alt="" loading="lazy"></p>
<h3 id="_5、修改机型配置文件-可选" tabindex="-1"><a class="header-anchor" href="#_5、修改机型配置文件-可选" aria-hidden="true">#</a> 5、修改机型配置文件（可选）</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># cd /opt/rt-n56u/trunk/configs/templates/  #进入此路径</span>
<span class="token comment"># ls  #查看所有型号路由器的配置文件</span>
<span class="token function">nano</span> /opt/rt-n56u/trunk/configs/templates/RM2100.config		<span class="token comment">#RM2100.config为红米AC2100路由器</span>
<span class="token comment"># 根据自身情况。自行修改对应的配置文件（可选）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_6、清理代码树并开始编译" tabindex="-1"><a class="header-anchor" href="#_6、清理代码树并开始编译" aria-hidden="true">#</a> 6、清理代码树并开始编译</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/rt-n56u/trunk
<span class="token function">sudo</span> ./clear_tree
<span class="token function">sudo</span> fakeroot ./build_firmware_modify RM2100		<span class="token comment">#RM2100就是对应型号路由器的配置文件名</span>
<span class="token comment"># 脚本第一个参数为路由型号，在trunk/configs/templates/中</span>
<span class="token comment"># 编译好的固件在trunk/images里</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="云编译" tabindex="-1"><a class="header-anchor" href="#云编译" aria-hidden="true">#</a> 云编译</h2>
<p>以 C 大的 padavan 自编译项目</p>
<p>地址：<a href="https://github.com/chongshengB/Padavan-build" target="_blank" rel="noopener noreferrer">https://github.com/chongshengB/Padavan-build<ExternalLinkIcon/></a></p>
<div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>现在不需要新建Release了，已经更改了脚本，直接fork，修改好之后，点击右上角的 Star 星星按钮即可开始自动编译（自己点击才会编译）。</p>
</div>
<p>首先你得有个 github 账号（此处省略怎么注册）</p>
<h3 id="_1、进入项目地址" tabindex="-1"><a class="header-anchor" href="#_1、进入项目地址" aria-hidden="true">#</a> 1、进入项目地址</h3>
<p>浏览器进入 <a href="https://github.com/chongshengB/Padavan-build" target="_blank" rel="noopener noreferrer">https://github.com/chongshengB/Padavan-build<ExternalLinkIcon/></a></p>
<h3 id="_2、fork-项目" tabindex="-1"><a class="header-anchor" href="#_2、fork-项目" aria-hidden="true">#</a> 2、Fork 项目</h3>
<p>点击右上的 Fork，就把这个项目 Fork 到自己的账号下了</p>
<p><img src="@source/operate/assets/padavan_2.png" alt="" loading="lazy"></p>
<h3 id="_3、进入已-fork-的项目" tabindex="-1"><a class="header-anchor" href="#_3、进入已-fork-的项目" aria-hidden="true">#</a> 3、进入已 Fork 的项目</h3>
<p>然后会自动进入自己账号刚刚 Fork 的项目，点击 <code>.guthub/workflows</code></p>
<p><img src="@source/operate/assets/padavan_3.png" alt="" loading="lazy"></p>
<h3 id="_4、找到-build-padavan-yml" tabindex="-1"><a class="header-anchor" href="#_4、找到-build-padavan-yml" aria-hidden="true">#</a> 4、找到 build-padavan.yml</h3>
<p>进入到 <code>Padavan-build/.github/workflows/</code>，点击 <code>build-padavan.yml</code></p>
<p><img src="@source/operate/assets/padavan_4.png" alt="" loading="lazy"></p>
<h3 id="_5、编辑-build-padavan-yml" tabindex="-1"><a class="header-anchor" href="#_5、编辑-build-padavan-yml" aria-hidden="true">#</a> 5、编辑 build-padavan.yml</h3>
<p>可以看到 <code>build-padavan.yml</code> 文件的内容了，点击右上的 <strong>笔</strong> 图标，进入编辑状态</p>
<p><img src="@source/operate/assets/padavan_5.png" alt="" loading="lazy"></p>
<h3 id="_6、修改型号" tabindex="-1"><a class="header-anchor" href="#_6、修改型号" aria-hidden="true">#</a> 6、修改型号</h3>
<p>根据第一行的提示内容，找到 <code>TNAME: K2P-5.0</code>，把 <code>K2P-5.0</code> 改成你要编译的型号（比如红米 AC2100 对应的是 <code>RM2100</code>）</p>
<p><img src="@source/operate/assets/padavan_6.png" alt="" loading="lazy"></p>
<p><img src="@source/operate/assets/padavan_7.png" alt="" loading="lazy"></p>
<div class="custom-container tip"><p class="custom-container-title">说明：怎么看不同机器的型号</p>
<ul>
<li>找到 <u>git clone --depth=1 https://github.com/chongshengB/rt-n56u.git /opt/rt-n56u</u> 这一行</li>
<li>浏览器打开中间的网址（https://开头.git结尾）<u>https://github.com/chongshengB/rt-n56u.git</u></li>
<li>依次进入 <code>rt-n56u/trunk/configs/templates</code>，这里面就是所支持编译的所有机器型号（例如 <code>360P2.config</code> 文件，对应的机器型号是 360路由器P2，红米AC2100 就是 RM2100.config，上面修改 TNAME 时，不需要 .config 后缀）</li>
</ul>
<p><img src="@source/operate/assets/padavan_8.png" alt="" loading="lazy"></p>
</div>
<h3 id="_7、自定义插件" tabindex="-1"><a class="header-anchor" href="#_7、自定义插件" aria-hidden="true">#</a> 7、自定义插件</h3>
<p>自定义插件，具体看解释，很简单</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> <span class="token function">sed</span> -i <span class="token string">'s/CONFIG_FIRMWARE_INCLUDE_OPENSSL_EXE=n/CONFIG_FIRMWARE_INCLUDE_OPENSSL_EXE=y/g'</span> .config
 <span class="token comment">################################################################################################</span>
 <span class="token comment">#因不同型号配置功能不一样，所以先把配置项删除，如果你自己要添加其他的，也要写上删除这一条，切记！！！</span>
 <span class="token comment">################################################################################################</span>
 <span class="token function">sed</span> -i <span class="token string">'/CONFIG_FIRMWARE_INCLUDE_MENTOHUST/d'</span> .config <span class="token comment">#删除配置项MENTOHUST</span>
 <span class="token function">sed</span> -i <span class="token string">'/CONFIG_FIRMWARE_INCLUDE_SCUTCLIENT/d'</span> .config <span class="token comment">#删除配置项SCUTCLIENT</span>
 <span class="token function">sed</span> -i <span class="token string">'/CONFIG_FIRMWARE_INCLUDE_SHADOWSOCKS/d'</span> .config <span class="token comment">#删除配置项SS plus+</span>
 <span class="token function">sed</span> -i <span class="token string">'/CONFIG_FIRMWARE_INCLUDE_SSSERVER/d'</span> .config <span class="token comment">#删除配置项SS server</span>
 <span class="token function">sed</span> -i <span class="token string">'/CONFIG_FIRMWARE_INCLUDE_DNSFORWARDER/d'</span> .config <span class="token comment">#删除配置项DNSFORWARDER</span>
 <span class="token function">sed</span> -i <span class="token string">'/CONFIG_FIRMWARE_INCLUDE_ADBYBY/d'</span> .config <span class="token comment">#删除配置项adbyby plus+</span>
 <span class="token function">sed</span> -i <span class="token string">'/CONFIG_FIRMWARE_INCLUDE_FRPC/d'</span> .config <span class="token comment">#删除配置项内网穿透FRPC</span>
 <span class="token function">sed</span> -i <span class="token string">'/CONFIG_FIRMWARE_INCLUDE_FRPS/d'</span> .config <span class="token comment">#删除配置项内网穿透FRPS</span>
 <span class="token function">sed</span> -i <span class="token string">'/CONFIG_FIRMWARE_INCLUDE_TUNSAFE/d'</span> .config <span class="token comment">#删除配置项TUNSAFE</span>
 <span class="token function">sed</span> -i <span class="token string">'/CONFIG_FIRMWARE_INCLUDE_ALIDDNS/d'</span> .config <span class="token comment">#删除配置项阿里DDNS</span>
 <span class="token function">sed</span> -i <span class="token string">'/CONFIG_FIRMWARE_INCLUDE_V2RAY/d'</span> .config <span class="token comment">#删除配置项v2ray</span>
 <span class="token function">sed</span> -i <span class="token string">'/CONFIG_FIRMWARE_INCLUDE_TROJAN/d'</span> .config <span class="token comment">#删除配置项trojan</span>
 <span class="token function">sed</span> -i <span class="token string">'/CONFIG_FIRMWARE_INCLUDE_WYYBIN/d'</span> .config <span class="token comment">#删除配置项网易云解锁GO版本</span>
 <span class="token function">sed</span> -i <span class="token string">'/CONFIG_FIRMWARE_INCLUDE_ZEROTIER/d'</span> .config <span class="token comment">#删除配置项zerotier</span>
 <span class="token function">sed</span> -i <span class="token string">'/CONFIG_FIRMWARE_INCLUDE_SMARTDNS/d'</span> .config
 <span class="token function">sed</span> -i <span class="token string">'/CONFIG_FIRMWARE_INCLUDE_SRELAY/d'</span> .config
 <span class="token function">sed</span> -i <span class="token string">'s/CONFIG_FIRMWARE_INCLUDE_OPENSSL_EXE=n/CONFIG_FIRMWARE_INCLUDE_OPENSSL_EXE=y/g'</span> .config
 <span class="token comment">######################################################################</span>
 <span class="token comment">#以下选项是定义你需要的功能（y=集成,n=忽略），重新写入到.config文件</span>
 <span class="token comment">######################################################################</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"CONFIG_FIRMWARE_INCLUDE_MENTOHUST=n"</span> <span class="token operator">>></span> .config <span class="token comment">#MENTOHUST</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"CONFIG_FIRMWARE_INCLUDE_SCUTCLIENT=n"</span> <span class="token operator">>></span> .config <span class="token comment">#SCUTCLIENT</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"CONFIG_FIRMWARE_INCLUDE_SHADOWSOCKS=y"</span> <span class="token operator">>></span> .config <span class="token comment">#SS plus+</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"CONFIG_FIRMWARE_INCLUDE_SSOBFS=n"</span> <span class="token operator">>></span> .config <span class="token comment"># simple-obfs混淆插件</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"CONFIG_FIRMWARE_INCLUDE_SSSERVER=n"</span> <span class="token operator">>></span> .config <span class="token comment">#SS server</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"CONFIG_FIRMWARE_INCLUDE_DNSFORWARDER=n"</span> <span class="token operator">>></span> .config <span class="token comment">#DNSFORWARDER</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"CONFIG_FIRMWARE_INCLUDE_ADBYBY=y"</span> <span class="token operator">>></span> .config <span class="token comment">#adbyby plus+</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"CONFIG_FIRMWARE_INCLUDE_FRPC=n"</span> <span class="token operator">>></span> .config <span class="token comment">#内网穿透FRPC</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"CONFIG_FIRMWARE_INCLUDE_FRPS=n"</span> <span class="token operator">>></span> .config <span class="token comment">#内网穿透FRPS</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"CONFIG_FIRMWARE_INCLUDE_TUNSAFE=n"</span> <span class="token operator">>></span> .config <span class="token comment">#TUNSAFE</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"CONFIG_FIRMWARE_INCLUDE_ALIDDNS=y"</span> <span class="token operator">>></span> .config <span class="token comment">#阿里DDNS</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"CONFIG_FIRMWARE_INCLUDE_SMARTDNS=y"</span> <span class="token operator">>></span> .config <span class="token comment">#smartdns</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"CONFIG_FIRMWARE_INCLUDE_SMARTDNSBIN=y"</span> <span class="token operator">>></span> .config <span class="token comment">#smartdns二进制文件</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"CONFIG_FIRMWARE_INCLUDE_V2RAY=y"</span> <span class="token operator">>></span> .config <span class="token comment">#集成v2ray执行文件（3.8M左右)，如果不集成，会从网上下载下来执行，不影响正常使用</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"CONFIG_FIRMWARE_INCLUDE_TROJAN=y"</span> <span class="token operator">>></span> .config <span class="token comment">#集成trojan执行文件(1.1M左右)，如果不集成，会从网上下载下来执行，不影响正常使用</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"CONFIG_FIRMWARE_INCLUDE_KOOLPROXY=y"</span> <span class="token operator">>></span> .config <span class="token comment">#KP广告过滤</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"CONFIG_FIRMWARE_INCLUDE_CADDY=y"</span> <span class="token operator">>></span> .config <span class="token comment">#在线文件管理服务</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"CONFIG_FIRMWARE_INCLUDE_CADDYBIN=n"</span> <span class="token operator">>></span> .config <span class="token comment">#集成caddu执行文件（13M左右），如果不集成，会从网上下载下来执行，不影响正常使用</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"CONFIG_FIRMWARE_INCLUDE_ADGUARDHOME=y"</span> <span class="token operator">>></span> .config
 <span class="token builtin class-name">echo</span> <span class="token string">"CONFIG_FIRMWARE_INCLUDE_SRELAY=n"</span> <span class="token operator">>></span> .config <span class="token comment">#可以不集成</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"CONFIG_FIRMWARE_INCLUDE_WYY=y"</span> <span class="token operator">>></span> .config <span class="token comment">#网易云解锁</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"CONFIG_FIRMWARE_INCLUDE_WYYBIN=y"</span> <span class="token operator">>></span> .config <span class="token comment">#网易云解锁GO版本执行文件（4M多）注意固件超大小,不集成会自动下载</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"CONFIG_FIRMWARE_INCLUDE_ZEROTIER=y"</span> <span class="token operator">>></span> .config <span class="token comment">#zerotier ~1.3M</span>
 <span class="token comment">#########################################################################################</span>
 <span class="token comment">#自定义添加其它功能请参考源码configs/templates/目录下的config文件。按照上面的格式添加即可</span>
 <span class="token comment">#格式如下：</span>
 <span class="token comment">#sed -i '/自定义项/d' .config</span>
 <span class="token comment">#echo "自定义项=y" >> .config</span>
 <span class="token comment">#########################################################################################</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><h3 id="_8、提交修改" tabindex="-1"><a class="header-anchor" href="#_8、提交修改" aria-hidden="true">#</a> 8、提交修改</h3>
<p>修改完成之后，点击右上的 <strong>Start commit</strong>，跳出小窗口点击 <strong>Commit changes</strong></p>
<p><img src="@source/operate/assets/padavan_9.png" alt="" loading="lazy"></p>
<h3 id="_9、点击-star" tabindex="-1"><a class="header-anchor" href="#_9、点击-star" aria-hidden="true">#</a> 9、点击 star</h3>
<p>提交之后，再点击右上的 <strong>Star</strong>，然后在点击 <strong>Action</strong></p>
<p><img src="@source/operate/assets/padavan_10.png" alt="" loading="lazy"></p>
<h3 id="_10、继续" tabindex="-1"><a class="header-anchor" href="#_10、继续" aria-hidden="true">#</a> 10、继续</h3>
<p>第一次云编译需要点击 <strong>I understand myworkflows , go ahead and enable them</strong></p>
<p><img src="@source/operate/assets/padavan_11.png" alt="" loading="lazy"></p>
<h3 id="_11、刷新确认" tabindex="-1"><a class="header-anchor" href="#_11、刷新确认" aria-hidden="true">#</a> 11、刷新确认</h3>
<p>如果还没有编译，在次点击两次 <strong>Star</strong>，让五角星变成黑色填充（文字变成 <strong>Unstar</strong>），刷新网址，就可以看到在编译了</p>
<p><img src="@source/operate/assets/padavan_12.png" alt="" loading="lazy"></p>
<h3 id="_12、等待完成" tabindex="-1"><a class="header-anchor" href="#_12、等待完成" aria-hidden="true">#</a> 12、等待完成</h3>
<p>大概等 20 分钟左右，就会编译完成，期间不用管，可以干点其他事情，完成之后（用时21分27秒），点击 <strong>Build Padavan</strong></p>
<p><img src="@source/operate/assets/padavan_13.png" alt="" loading="lazy"></p>
<h3 id="_13、查看下载" tabindex="-1"><a class="header-anchor" href="#_13、查看下载" aria-hidden="true">#</a> 13、查看下载</h3>
<p>点击 <strong>Padavan-packages</strong> 下载到本地，解压后得到的固件就是刚刚编译的，之后就是刷机了</p>
<p><img src="@source/operate/assets/padavan_14.png" alt="" loading="lazy"></p>
<h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>
<p><a href="https://github.com/chongshengB/Padavan-build" target="_blank" rel="noopener noreferrer">https://github.com/chongshengB/Padavan-build<ExternalLinkIcon/></a></p>
<p><a href="https://github.com/chongshengB/rt-n56u" target="_blank" rel="noopener noreferrer">https://github.com/chongshengB/rt-n56u<ExternalLinkIcon/></a></p>
</template>
