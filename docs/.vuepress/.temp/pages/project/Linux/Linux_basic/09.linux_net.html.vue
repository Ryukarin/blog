<template><p>我们在做练习的时候，需要让 Linux 进行联网配置。介绍一下如何给 Linux 配置 IP 地址，以及一些常用的网络命令。</p>
<h2 id="配置-linux-的-ip-地址" tabindex="-1"><a class="header-anchor" href="#配置-linux-的-ip-地址" aria-hidden="true">#</a> 配置 Linux 的 IP 地址</h2>
<p>IP 地址是计算机在互联网中唯一的地址编码。每台计算机如果需要接入网络和其他计算机进行数据通信，就必须配置唯一的公网 IP 地址。</p>
<h3 id="setup-命令配置网卡" tabindex="-1"><a class="header-anchor" href="#setup-命令配置网卡" aria-hidden="true">#</a> setup 命令配置网卡</h3>
<p>Linux 当然也需要配置 IP 地址才可以正常使用网络。其实 Linux 主要是通过修改网卡配置文件来永久修改 IP 地址的。<code>setup</code> 是一个简化命令，是 Red Hat 系列专有的命令，其他的 Linux 系列不一定有此命令。<code>setup</code> 命令会开启一个图形化的配置工具，如图10-1 所示。</p>
<p>这是一个综合工具，既可以配置 IP 地址，也可以管理防火墙和系统服务。如果我们需要配置 IP 地址，则只要选择“Network configuration”就会开始 IP 地址配置。</p>
<div class="custom-container center">
<p><img src="@source/project/Linux/Linux_basic/assets/setup1.png" alt="setup1" loading="lazy"></p>
<p><strong>图10-1	<u>配置工具界面</u></strong></p>
</div>
<p>接下来就可以执行动作选择了。我们要配置 IP 地址，就选择“Decive configuration”，如图10-2 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Linux/Linux_basic/assets/setup2.png" alt="setup2" loading="lazy"></p>
<p><strong>图10-2	<u>选择动作</u></strong></p>
</div>
<p>在 CentOS 6.x 中，网卡的设备文件名用 eth0 来表示第一块网卡，如果有第二块网卡，则设备文件名会依次为 eth1。在这里，我们的 Linux 只有一块网卡，所以在选择设备时只需选择 eth0 网卡配置即可，如图10-3 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Linux/Linux_basic/assets/setup3.png" alt="setup3" loading="lazy"></p>
<p><strong>图10-3	<u>选择设备</u></strong></p>
</div>
<p>接下来就会进入网络配置界面，如图10-4 所示。这时如果在“Use DHCP”选项上输入 “*”号（空格输入）。就会自动获取 IP 地址：取消“*”号，就会手工分配 IP 地址。</p>
<div class="custom-container center">
<p><img src="@source/project/Linux/Linux_basic/assets/setup4.png" alt="setup4" loading="lazy"></p>
<p><strong>图10-4	<u>网络配置</u></strong></p>
</div>
<p>输入正确的 IP 地址后，使用 Tab 键切換至“OK”按钮上，接下来一路保存退出，IP 地址就输入完成了。但是，如果想让 IP 地址配置生效，则还需要重启网络服务。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># service network restart</span>
<span class="token comment">#重启网络服务</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>当然，重启网络服务有很多种方法，这里直接使用 <code>service</code> 命令进行网络服务重启。</p>
<div class="custom-container tip"><p class="custom-container-title">补充</p>
<p>CentOS 7.x 及以上版本的的 <code>setup</code> 命令没有网络配置“Decive configuration”选项了，但是可以用 <code>nmtui</code> 命令配置网络，同样也是图形化配置工具。</p>
</div>
<h3 id="手工配置网卡" tabindex="-1"><a class="header-anchor" href="#手工配置网卡" aria-hidden="true">#</a> 手工配置网卡</h3>
<p>手工开启网卡 在 CentOS 5x 以前的系统中，通过 <code>setup</code> 配置 IP 地址，重启后，IP地址就可以配置成功。但如果是在 CenOS 6.x 中，那么重启后可能依然无法找到 eth0 网卡，而只能看到 lo（本地回环）网卡。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span> ifcontig
lo		Link encap:Local Loopback
inet adar:127.0.0.1 Mask:256.0.0.0
inet6 addr: ::1/128 Scope:Hoat
		UP LOOPBACK RUNNING MTU:16436 Metric:1
		RX packets:12 errors:0 dropped:0 qverruns:0 frame:0
        TX packets:12 errors:0 dropped:0 overruns:0 carrier:0 collisions:0 txqueuelen:0 
        RX bytes:840 <span class="token punctuation">(</span><span class="token number">840.0</span> b<span class="token punctuation">)</span> TX bytes:840 <span class="token punctuation">(</span><span class="token number">840.0</span> b<span class="token punctuation">)</span> 
<span class="token comment">#只有lo网卡，没有eth0网卡</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>这是因为，在 CentOS 6.x 中，eth0 网卡是默认没有开启的，需要修改网卡配置文件手工开启。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@1ocalhost ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/sysconfig/network-scripts/ifcfg-eth0</span>
<span class="token assign-left variable">TYPE</span><span class="token operator">=</span>Ethernet
<span class="token assign-left variable">PROXY_METHOD</span><span class="token operator">=</span>none
<span class="token assign-left variable">BROWSER_ONLY</span><span class="token operator">=</span>no
<span class="token assign-left variable">BOOTPROTO</span><span class="token operator">=</span>dhcp
<span class="token assign-left variable">DEFROUTE</span><span class="token operator">=</span>yes
<span class="token assign-left variable">IPV4_FAILURE_FATAL</span><span class="token operator">=</span>no
<span class="token assign-left variable">IPV6INIT</span><span class="token operator">=</span>yes
<span class="token assign-left variable">IPV6_AUTOCONF</span><span class="token operator">=</span>yes
<span class="token assign-left variable">IPV6_DEFROUTE</span><span class="token operator">=</span>yes
<span class="token assign-left variable">IPV6_FAILURE_FATAL</span><span class="token operator">=</span>no
<span class="token assign-left variable">IPV6_ADDR_GEN_MODE</span><span class="token operator">=</span>stable-privacy
<span class="token assign-left variable">NAME</span><span class="token operator">=</span>ens3
<span class="token assign-left variable">UUID</span><span class="token operator">=</span>c3c79e29-8228-4e7a-a39a-f54599644675
<span class="token assign-left variable">DEVICE</span><span class="token operator">=</span>eth0
<span class="token assign-left variable">ONBOOT</span><span class="token operator">=</span>yes
<span class="token comment">#在网卡配置文件中，ONBOOT默认是 no</span>
<span class="token punctuation">[</span>root@1ocalhost ~<span class="token punctuation">]</span><span class="token comment"># service network restart</span>
Restarting network <span class="token punctuation">(</span>via systemctl<span class="token punctuation">)</span>:                        <span class="token punctuation">[</span>  OK  <span class="token punctuation">]</span>
<span class="token punctuation">[</span>root@1ocalhost ~<span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>手工把 ONBOOT 选项改为 yes，然后再重启网络服务（<code>service network restart</code>），就会发现 eth0 网卡启动了，IP 地址也可以正常使用了。</p>
<div class="custom-container tip"><p class="custom-container-title">补充</p>
<p>Debain/Ubuntu 系统的网络配置：<code>/etc/network/interfaces</code></p>
<ol>
<li>打开 ubuntu 的 <code>/etc/network/interfaces</code> 文件</li>
</ol>
<p>默认的内容如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">cat</span> /etc/network/interfaces
auto lo
iface lo inet loopback
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>在文件中添加如下信息：（动态或者静态，二选一）</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 1. 动态获取的配置方法：</span>
auto eth0
iface eth0 inet dhcp

<span class="token comment"># 2. 静态分配的配置方法：</span>
auto eth0
iface eth0 inet static
address <span class="token number">192.168</span>.2.6
netmask <span class="token number">255.255</span>.255.0
gateway <span class="token number">192.168</span>.2.1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="2">
<li>添加域名服务器（DNS）：</li>
</ol>
<p>打开 <code>/etc/resolv.conf</code> 文件，添加如下内容。DNS 写自己常用的就可以了。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>nameserver <span class="token number">114.114</span>.114.114
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3">
<li>重启下网络</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ /etc/init.d/networking restart
<span class="token comment">#这条命令是重启网卡</span>
或者
$ <span class="token function">ifdown</span> eth0
$ <span class="token function">ifup</span> eth0
<span class="token comment">#这两条命令是有针对性的重启某个网络接口，因为一个系统可能有多个网络接口</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>以上配置好之后， <code>ifconfig</code> 查看下配置是否成功，<code>ping</code> 一下，验证网络是否通了。</p>
<blockquote>
<p>Ubuntu 16.04 之后的版本，启用了新的网络工具 netplan，命令行配置网络参数跟之前的版本有比较大的差别，其网卡配置文件为：<code>/etc/netplan/01-network-manager-all.yaml</code>，netplan 描述文件采用了 yaml 语法，默认是用 dhcp方式，如果要配置静态地址，则需要修改此文件的想关内容。</p>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 1. 默认配置为 DHCP 方式：</span>
<span class="token comment">#注意行缩进</span>
root@ubuntu:~<span class="token comment"># vim /etc/netplan/01-network-manager-all.yaml</span>
network:
 version: <span class="token number">2</span>
 ethernets:
     eth0:
         dhcp4: <span class="token boolean">true</span>
         match:
             macaddress: <span class="token number">52</span>:54:00:d4:51:ad
         set-name: eth0
         
<span class="token comment"># 2. 配置静态 IP 地址：</span>
<span class="token comment">#注意行缩进</span>
root@ubuntu:~<span class="token comment"># grep -v ^# /etc/netplan/01-network-manager-all.yaml</span>
network:
 version: <span class="token number">2</span>
 ethernets:
     eth0:
         addresses: <span class="token punctuation">[</span><span class="token number">192.168</span>.120.18/24<span class="token punctuation">]</span>
         gateway4: <span class="token number">192.168</span>.120.1
         nameservers:
                 addresses: <span class="token punctuation">[</span><span class="token number">183.60</span>.83.19,183.60.82.98<span class="token punctuation">]</span>
               
<span class="token comment"># 更新配置生效  </span>
root@ubuntu:~<span class="token comment"># sudo netplan apply</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div></div>
<h2 id="ifconfig-命令" tabindex="-1"><a class="header-anchor" href="#ifconfig-命令" aria-hidden="true">#</a> ifconfig 命令</h2>
<p><code>ifconfig</code> 命令，是 Linux 中查看和临时修改 IP 地址的命令。</p>
<ol>
<li><strong>查看 IP 地址信息</strong></li>
</ol>
<p><code>ifconfig</code> 命令最主要的作用就是查看 IP 地址的信息，直接输入 <code>ifconfig</code> 命令即可。</p>
<p>英文原意：configure a network interface</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ifconfig</span>
eth0	Link encap:Ethernet HWaddr 00:0C:29:C5:FB:AA
<span class="token comment">#eth0网卡信息 网络类型为以太网	MAC 地址</span>
inet addr:192.168.44.3 Bcast:192.168.44.255 Mask:255.255.255.0
<span class="token comment">#IP地址 				  广播地址 				子网掩码</span>
inet6 addr：fe80::20c:29ff:fec5:fbaa/64 Scope:Link
<span class="token comment">#IPv6的地址（目前不生效）</span>
		UP BROADCAST RUNNING MULTICAST MTU:1500 Metric:1
		<span class="token comment">#网络参数 					   最大传输单元  数据包转送次数</span>
		RX packets:881 errors:0 dropped:O overruns:0 frame:0
		<span class="token comment">#接收到的数据包情况</span>
		TX packets:853 errors:0 dropped:0 overruns:0 carrier:0 collisions:0 txqueuelen:1000
        <span class="token comment">#发送的数据包情况         								  数据包碰撞		数据缓冲区长度</span>
        RX bytes:82229 （80.3 KiB<span class="token punctuation">)</span> TX bytes:273463 （267.0 KiB）
        <span class="token comment">#接收包的大小 发送包的大小</span>
        Interrupt:19 Base address:0x2000
        <span class="token comment">#TRQ中断 			 内存地址</span>
        
lo 		Link encap:Local Loopback
<span class="token comment">#本地回环网卡信息</span>
inet addr:127.0.0.1 Mask:255.0.0.0
inet6 addr: ::1/128 Scope:Host
		UP LOOPBACK RUNNING MTU:16436 Metric:1
        RX packets:12 errors:0 dropped:0 overruns:0 frame:0
        TX packets:12 errors:O dropped:O overruns:0 carrier:0 collisions:0 txqueuelen:0
        RX bytes:840 <span class="token punctuation">(</span><span class="token number">840.0</span> b<span class="token punctuation">)</span> TX bytes:840 <span class="token punctuation">(</span><span class="token number">840.0</span> b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p><code>ifconfig</code> 命令主要用于查看 <strong>IP 地址、子网掩码</strong> 和 <strong>MAC地址</strong>这三类信息，其他信息我们有所了解即可。</p>
<p>lo 网卡是 Loopback 的缩写，也就是本地回环网卡，这个网卡的 IP 地址是 <strong>127.0.0.1</strong>。它只代表我们的网络协议正常，就算不插入网线也可以 <code>ping</code> 通，所以基本没有实际使用价值，大家了解一下即可。</p>
<ol start="2">
<li><strong>临时配置 IP 地址</strong></li>
</ol>
<p><code>ifconfig</code> 命令除可以查看 IP 地址之外，还可以临时配置 IP 地址，但是一旦重启，IP 地址就会失效，所以我们还是应该使用 <code>setup</code> 命令来进行 IP 地址配置。</p>
<p>使用 <code>ifconfig</code> 命令临时配置 IP 地址的示例如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#ifconfig eth0 192.168.44.3</span>
<span class="token comment">#配置 IP地址，不指定子网掩码就会使用标准子网掩码</span>
<span class="token punctuation">[</span>rootelocalhost -<span class="token punctuation">]</span><span class="token comment">#ifconfig eth0 192.168.44.3 netmask 255.255.255。0</span>
<span class="token comment">#配置 IP地址，同时配置子网掩码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="ifup-和-ifdown-命令" tabindex="-1"><a class="header-anchor" href="#ifup-和-ifdown-命令" aria-hidden="true">#</a> ifup 和 ifdown 命令</h2>
<p><code>ifup</code> 和 <code>ifdown</code> 是两个非常简单的命令，其作用类似于 Windows 中的启用和禁用网卡，主要用于启用和关闭网卡。</p>
<p>英文原意：bring a network interface up <strong>&amp;</strong> take a network interface down</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ifdown 网卡设备名</span>
<span class="token comment">#例子：</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ifdown eth0</span>
<span class="token comment">#关闭 eth0 网卡</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ifup eth0</span>
<span class="token comment">#启用 eth0 网卡</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="ping-命令" tabindex="-1"><a class="header-anchor" href="#ping-命令" aria-hidden="true">#</a> ping 命令</h2>
<p><code>ping</code> 是常用的网络命令，主要通过 ICMP 协议进行网络探测，测试网络中主机的通信情况。</p>
<p>英文原意：send ICMP ECHO_REQUEST to network hosts</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ping [选项] IP</span>
选项：
	-b		：后面加入广播地址，用于对整个网段进行探测
    -c 次数	：用于指定 <span class="token function">ping</span> 的次数
    -s 字节	：指定探测包的大小 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol>
<li><strong>探测与指定主机通信</strong></li>
</ol>
<p>直接输入 <code>ping IP地址</code> 即可，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ping 192.168.103.151</span>
PING <span class="token number">192.168</span>.103.151 <span class="token punctuation">(</span><span class="token number">192.168</span>.103.151<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from <span class="token number">192.168</span>.103.151: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">tt1</span><span class="token operator">=</span><span class="token number">128</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.300</span> ms
<span class="token number">64</span> bytes from <span class="token number">192.168</span>.103.151: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">128</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">0.481</span> ms
<span class="token punctuation">..</span>.省略部分内容<span class="token punctuation">..</span><span class="token punctuation">..</span> 
<span class="token comment">#探测与指定主机是否通信</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Linux 是一个比较实在的操作系统，这个 <code>ping</code> 命令如果不使用 <kbd>Ctrl</kbd>+<kbd>C</kbd> 快捷键强行中止， 就会一直 <code>ping</code> 下去，直到天荒地老……</p>
<ol start="2">
<li><strong>指定 ping 的次数</strong></li>
</ol>
<p>既然 <code>ping</code> 这么“实在”，如果不想一直 <code>ping</code> 下去，则可以使用“-c”选项指定 ping 的次数。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> <span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ping -c 3 192.168.103.151</span>
 <span class="token comment">#只探测3次，就中止 ping 命令</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="3">
<li><strong>探测网段中的可用主机</strong></li>
</ol>
<p>在 <code>ping</code> 命令中，可以使用“-b”选项，后面加入广播地址，探测整个网段。我们可以使 用这个选项知道整个网络中有多少主机是可以和我们通信的，而不用一个一个 IP 地址地进行探测。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ping -b -c 3 192.168.103.255</span>
WARNING：pinging broadcast address
PING <span class="token number">192.168</span>.103.255 <span class="token punctuation">(</span><span class="token number">192.168</span>.103.255<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from <span class="token number">192.168</span>.103.199:icmp_seq<span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">1.95</span> ms
<span class="token number">64</span> bytes from <span class="token number">192.168</span>.103.168:icmp_seq<span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">1.97</span> ms
<span class="token number">64</span> bytes from <span class="token number">192.168</span>.103.252:icmp_seq<span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">64</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">2.29</span> ms
<span class="token punctuation">..</span>.省略部分内容<span class="token punctuation">..</span>.
<span class="token comment">#探测 192.168.103.0/24 网段中有多少可以通信的主机</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="natstat-命令" tabindex="-1"><a class="header-anchor" href="#natstat-命令" aria-hidden="true">#</a> natstat 命令</h2>
<blockquote>
<p>说道这个命令，就不得不提以下端口的作用。</p>
<p>我们要先简单了解一下端口的作用。在互联网中，如果 IP 地址是服务器在互联网中唯一的地址标识，那么大家可以想象一下：我有一台服务器，它有固定的公网 IP 地址，通过 IP 地址可以找到我的服务器。但是我的服务器中既启动了网页服务（Web 服务），又启动了文件传输服务（FTP 服务），那么你的客户端访问我的服务器，到底应该如何确定你访问的是哪一个服务呢？</p>
<p>端口就是用于网络通信的接口，是数据从传输层向上传递到应用层的数据通道。我们可以理解为每个常规服务都有默认的端口号，通过不同的端口号，我们就可以确定不同的服务。也就是说，客户端通过 IP 地址访问到我的服务器，如果数据包访问的是 80 端口，则访问的是 Web 服务；而如果数据包访问的是 21 端口，则访问的是 FTP 服务。</p>
<p>我们可以简单地理解为每个常规服务都有一个默认端口（默认端口可以修改)，这个端口是所有人都知道的，客户端可以通过固定的端口访问指定的服务。而我们通过在服务器中查看已经开启的端口号，就可以判断服务器中开启了哪些服务。</p>
</blockquote>
<p><code>netstat</code> 命令，是网络状态查看命令，既可以查看到本机开启的端口，也可以查看有哪些客户端连接。</p>
<p>英文原意：Print network connections, routing tables, interface statis‐tics, masquerade connections, and multicast memberships</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># netstat [选项]</span>
选项：
	-a		：列出所有网络状态，包括 Socket 程序
	-c 秒数	：指定每隔几秒刷新一次网络状态
	-n		：使用 IP 地址和端口号显示，不使用域名与服务名
	-p		：显示 PID 和程序名
	-t		：显示使用 TCP 协议端口的连接状况
	-u		：显示使用 UDP 协议端口的连接状况
	-l		：仅显示监听状态的连接
	-r		：显示路由表
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol>
<li><strong>查看本机开启的端口</strong></li>
</ol>
<p>这是本机最常用的方式，使用选项“-tuln”。因为使用了”-l“项，所以只能看到监听状态的连接，而不能看到已经建立连接状态的连接。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># netstat -tuln</span>
Active Internet connections <span class="token punctuation">(</span>only servers<span class="token punctuation">)</span>
Prota  Recv-Q  Send-Q	Local Address		Foreign Address		State
tcp			<span class="token number">0</span>		<span class="token number">0</span> 	<span class="token number">0.0</span>.0.0:3306		<span class="token number">0.0</span>.0.0:*			LISTEN
tcp			<span class="token number">0</span>		<span class="token number">0</span>	<span class="token number">0.0</span>.0.0:11211		<span class="token number">0.0</span>.0.0:*			LISTEN
tcp			<span class="token number">0</span>		<span class="token number">0</span>	<span class="token number">0.0</span>.0.0:22			<span class="token number">0.0</span>.0.0:*			LISTEN
tcp			<span class="token number">0</span>		<span class="token number">0</span>	:::11211			:::*				LISTEN
tcp			<span class="token number">0</span>		<span class="token number">0</span>	:::80				:::*				LISTEN
tcp			<span class="token number">0</span>		<span class="token number">0</span>	:::22				:::*				LISTEN
udp			<span class="token number">0</span>		<span class="token number">0</span>	<span class="token number">0.0</span>.0.0:11211		<span class="token number">0.0</span>.0.0:*			
udp			<span class="token number">0</span>		<span class="token number">0</span>	:::11211			:::*				
<span class="token comment">#协议  接收队列  发巡队列  本机的IP及端口号		 远程主机的IP地扯及端口号  状态</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>这个命令的输出较多。</p>
<blockquote>
<ul>
<li>Proto：网络连接的协议，一般就是 TCP 协议或者 UDP 协议。</li>
<li>Reev-Q：表示接收到的数据，已经在本地的缓冲中，但是还没有被进程取走。</li>
<li>Send-Q：表示从本机发送，对方还没有收到的数据，依然在本地的缓冲中，一般是不具备 ACK 标志的数据包。</li>
<li>Local Address：本机的 IP 地址和端口号。</li>
<li>Foreign Address：远程主机的 IP 地址和端口号。</li>
<li>State：状态。常见的状态主要有以下几种。
<ul>
<li>LISTEN：监听状态，只有 TCP 协议需要监听，而 UDP 协议不需要监听。</li>
<li>ESTABLISHED：已经建立连接的状态。如果使用“-l”选项，则看不到已经建立连接的状态。</li>
<li>SYN_SENT：SYN 发起包，就是主动发起连接的数据包。</li>
<li>SYN_RECV：接收到主动连接的数据包。</li>
<li>FIN_WAIT1：正在中断的连接。</li>
<li>FIN_WAIT2：已经中断的连接，但是正在等待对方主机进行确认。</li>
<li>TIME_WAIT：连接已经中断，但是套接字依然在网络中等待结束。</li>
<li>CLOSED：套接字没有被使用。</li>
</ul>
</li>
</ul>
</blockquote>
<p>在这些状态中，我们最常用的就是 LISTEN 和 ESTABLISHED 状态，一种代表正在监听，另一种代表已经建立连接。</p>
<ol start="2">
<li><strong>查看本机有哪些程序开启的端口</strong></li>
</ol>
<p>如果使用“-p”选项，则可以查看到是哪个程序占用了端口，并且可以知道这个程序的 PID。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># netstat -tulnp</span>
Active Internet connections <span class="token punctuation">(</span>only servers<span class="token punctuation">)</span>
Prota  Recv-Q  Send-Q	Local Address		Foreign Address		State		PID/Program name
tcp			<span class="token number">0</span>		<span class="token number">0</span>	<span class="token number">0.0</span>.0.0:3306		<span class="token number">0.0</span>.0.0:*			LISTEN		<span class="token number">2359</span>/mysqld
tcp			<span class="token number">0</span>		<span class="token number">0</span>	<span class="token number">0.0</span>.0.0:11211		<span class="token number">0.0</span>.0.0:*			LISTEN		<span class="token number">1563</span>/memcached
tcp			<span class="token number">0</span>		<span class="token number">0</span>	<span class="token number">0.0</span>.0.0:22			<span class="token number">0.0</span>.0.0:*			LISTEN		<span class="token number">1490</span>/sshd
tcp			<span class="token number">0</span>		<span class="token number">0</span>	:::11211			:::*				LISTEN		<span class="token number">1563</span>/memcached
tcp			<span class="token number">0</span>		<span class="token number">0</span>	:::80				:::*				LISTEN		<span class="token number">21025</span>/httpd
tcp			<span class="token number">0</span>		<span class="token number">0</span>	:::22				:::*				LISTEN		<span class="token number">1490</span>/sshd
udp			<span class="token number">0</span>		<span class="token number">0</span>	<span class="token number">0.0</span>.0.0:11211		<span class="token number">0.0</span>.0.0:*						<span class="token number">1563</span>/memcached
udp			<span class="token number">0</span>		<span class="token number">0</span>	:::11211			:::*							<span class="token number">1563</span>/memcached
<span class="token comment">#协议  接收队列  发巡队列  本机的IP及端口号		 远程主机的IP地扯及端口号  状态		PID/程序名</span>
<span class="token comment">#比之前的命令多了一个“-p”选项，结果多了“PID/程序名”，可以知道是哪个程序占用了端口</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ol start="3">
<li><strong>查看所有连接</strong></li>
</ol>
<p>查看所有连接使用选项“-an”可以查看所有连接，包括监听状态的连接（LISTEN）、已经建立连接状态的连接（ESTABLISHED）、Socket程序连接等。因为连接较多，所以输出的内容有很多。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># netstat -an</span>
Active Internet connections <span class="token punctuation">(</span>servers and established<span class="token punctuation">)</span>
Proto Recv-Q Send-Q		Local Address		Foreign Address		 State
tcp			<span class="token number">0</span>		<span class="token number">0</span> 	<span class="token number">0.0</span>.0.0:3306		<span class="token number">0.0</span>.0.0:*			 LISTEN
tcp			<span class="token number">0</span>		<span class="token number">0</span>	<span class="token number">0.0</span>.0.0:11211		<span class="token number">0.0</span>.0.0:*			 LISTEN
tcp			<span class="token number">0</span>		<span class="token number">0</span>	<span class="token number">117.79</span>.130.170:80	<span class="token number">78.46</span>.174.55:58815	 SYN_RECV
tcp			<span class="token number">0</span>		<span class="token number">0</span>	<span class="token number">0.0</span>.0.0:22			<span class="token number">0.0</span>.0.0:*			 LISTEN
tcp			<span class="token number">0</span>		<span class="token number">0</span>	<span class="token number">117.79</span>.130.170:22	<span class="token number">124.205</span>.129.99:10379 ESTABLISHED
tcp			<span class="token number">0</span>		<span class="token number">0</span>	<span class="token number">117.79</span>.130.170:22	<span class="token number">124.205</span>.129.99:11811 ESTABLISHED
<span class="token punctuation">..</span>.省略部分内容<span class="token punctuation">..</span>.
udp			<span class="token number">0</span>		<span class="token number">0</span>	<span class="token number">0.0</span>.0.0:11211		<span class="token number">0.0</span>.0.0:*			
udp			<span class="token number">0</span>		<span class="token number">0</span>	:::11211			:::*				
Active UNIX domain sockets <span class="token punctuation">(</span>servers and established<span class="token punctuation">)</span>
Proto	RefCnt	Flags	Type	state		I-Node	Path
unix	<span class="token number">2</span>		<span class="token punctuation">[</span> ACC <span class="token punctuation">]</span>	STREAM	LISTENING	<span class="token number">9761</span>	@/var/run/hald/dbus-fr41WkQn1c
<span class="token punctuation">..</span>.省略部分内容<span class="token punctuation">..</span><span class="token punctuation">..</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>从“Active UNIX domain sockets”开始，之后的内容就是 Socket 程序产生的连接，之前的内容都是网络服务产生的连接。我们可以在“-an”选项的输出中看到各种网络连接状态，而之前的“-tuln”选项则只能看到监听状态。</p>
<h2 id="write-命令" tabindex="-1"><a class="header-anchor" href="#write-命令" aria-hidden="true">#</a> write 命令</h2>
<p>在服务器上，有时会有多个用户同时登录，一些必要的沟通就显得尤为重要。比如，我必须关闭某个服务，或者需要重启服务器，当然需要通知同时登录服务器的用户，这时就可以使用 <code>write</code> 命令，向其他用户发送信息。</p>
<p><code>write</code> 命令，用于向指定登录用户终端上发送信息。</p>
<p>英文原意：send a message to another user</p>
<p>write 命令的基本格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#write 用户名 [终端号]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>write</code> 命令没有多余的选项，我们要向在某个终端登录的用户发送信息，就可以这样来执行命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># wlite userl pts/1</span>
hello
I will be <span class="token keyword">in</span> <span class="token number">5</span> minutes to restart, please save your data
<span class="token comment">#向在 pts/1（远程终端1）登录的 user1 用戶发送信息，使用“Ctrl+D”快捷键保存发送的数据</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>这时，user1 用户就可以收到你要在 5 分钟之后重启系统的信息了。</p>
<h2 id="wall-命令" tabindex="-1"><a class="header-anchor" href="#wall-命令" aria-hidden="true">#</a> wall 命令</h2>
<p><code>wall</code> 命令，用于给所有登录用户发送信息，包括你自己。</p>
<p>英文原意：send a message to everybody's terminal.</p>
<p>命令格式，在 <code>wall</code> 命令后加入需要发送的信息即可，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># wall "I will be in 5 minutes to restart, please save your data"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="mail-命令" tabindex="-1"><a class="header-anchor" href="#mail-命令" aria-hidden="true">#</a> mail 命令</h2>
<p><code>mail</code> 是 Linux 的邮件客户端命令，可以利用这个命令给其他用户发送邮件。</p>
<ol>
<li><strong>发送邮件</strong></li>
</ol>
<p>如果我们想要给其他用户发送邮件，则可以执行如下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mail userl</span>
Subject：hello					<span class="token operator">&lt;</span>---邮件标题
Nice to meet you<span class="token operator">!</span>				<span class="token operator">&lt;</span>---部件具体内容
<span class="token builtin class-name">.</span>								<span class="token operator">&lt;</span>---使用 “.” 来结束邮件输入
<span class="token comment">#发送邮件给 user1 用户</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>我们接收到的邮件都保存在 <code>/var/spool/mail/用户名</code> 中，每个用户都有一个以自己的用户名命名的邮箱。</p>
<ol start="2">
<li><strong>发送文件内容</strong></li>
</ol>
<p>如果我们想把某个文件的内容发送给指定用户，则可以执行如下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mail -s "test mall" root &lt; /root/anaconda-ks.cfg</span>
选项：
	-s：指定邮件标题
<span class="token comment">#把 /root/anaconda-ks.cfg 文件的内容发送给 root用户</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>我们在写脚本时，有时需要脚本自动发送一些信息给指定用户，把要发送的信息预先写到文件中，是一个非常不错的选择。</p>
<ol start="3">
<li><strong>查看已经接收的邮件</strong></li>
</ol>
<p>我们可以直接在命令行中执行 <code>mail</code> 命令，进入 <code>mail</code> 的交互命令中，可以在这里查看已经接收到的邮件。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">)</span><span class="token comment"># mail</span>
Heirloom Mail version <span class="token number">12.4</span> <span class="token number">7</span>/29/08.Type ?for help.
<span class="token string">"/var/spool/mail/root"</span><span class="token builtin class-name">:</span> <span class="token number">1</span> message <span class="token number">1</span> new
<span class="token operator">></span>N <span class="token number">1</span> root		Mon Dec <span class="token number">5</span> <span class="token number">22</span>:45  <span class="token number">68</span>/1777  <span class="token string">"teat mall"</span>		<span class="token operator">&lt;</span>---之前收到的邮件
<span class="token operator">></span>N <span class="token number">2</span> root		Mon Dec <span class="token number">5</span> <span class="token number">23</span>:08  <span class="token number">18</span>/602   <span class="token string">"hello"</span>
<span class="token comment">#未读 编号 发件人 时间						标题</span>

<span class="token operator">&amp;</span>		<span class="token operator">&lt;</span>---等待用户输入命令
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>可以看到已经接收到的邮件列表，“N”代表未读邮件，如果是已经阅读过的邮件，则前面是不会有这个“N”的；之后的数字是邮件的编号，我们主要通过这个编号来进行邮件的操作。如果我们想要查看第一封邮件，则只需输入邮件的编号“<code>1</code>”就可以了。</p>
<p>在交互命令中执行“<code>?</code>”，可以查看这个交互界面支持的命令。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ ?		<span class="token operator">&lt;</span>-输入 ? 命令
               mail commands
<span class="token builtin class-name">type</span> <span class="token operator">&lt;</span>message list<span class="token operator">></span>             <span class="token builtin class-name">type</span> messages
next                            goto and <span class="token builtin class-name">type</span> next message
from <span class="token operator">&lt;</span>message list<span class="token operator">></span>             give <span class="token function">head</span> lines of messages
headers                         print out active message headers
delete <span class="token operator">&lt;</span>message list<span class="token operator">></span>           delete messages
undelete <span class="token operator">&lt;</span>message list<span class="token operator">></span>         undelete messages
save <span class="token operator">&lt;</span>message list<span class="token operator">></span> folder      append messages to folder and mark as saved
copy <span class="token operator">&lt;</span>message list<span class="token operator">></span> folder      append messages to folder without marking them
<span class="token function">write</span> <span class="token operator">&lt;</span>message list<span class="token operator">></span> <span class="token function">file</span>       append message texts to file, save attachments
preserve <span class="token operator">&lt;</span>message list<span class="token operator">></span>         keep incoming messages <span class="token keyword">in</span> mailbox even <span class="token keyword">if</span> saved
Reply <span class="token operator">&lt;</span>message list<span class="token operator">></span>            reply to message senders
reply <span class="token operator">&lt;</span>message list<span class="token operator">></span>            reply to message senders and all recipients
mail addresses                  mail to specific recipients
<span class="token function">file</span> folder                     change to another folder
quit                            quit and apply changes to folder
xit                             quit and discard changes made to folder
<span class="token operator">!</span>                               shell escape
<span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>directory<span class="token operator">></span>                  chdir to directory or home <span class="token keyword">if</span> none given
list                            list names of all available commands
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>这些交互命令是可以简化输入的，比如 <code>headers</code> 命令，就可以直接输入 <code>h</code>，这是列出邮件标遇列表的命令。我们解释一下常用的交互命令。</p>
<ul>
<li>headers：列出邮件标题列表，直接输入 <code>h</code> 命令即可。</li>
<li>delete：删除指定邮件。比如想要删除第二封邮件，可以输入 <code>d2</code>。</li>
<li>save：保存邮件。可以把指定邮件保存成文件，如 <code>s2 /tmp/tcst.mail</code>。</li>
<li>quit：退出，并把已经操作过的邮件进行保存。比如移除已删除邮件、保存已阅读邮件等。</li>
<li>exit：退出，但是不保存任何操作。</li>
</ul>
</template>
