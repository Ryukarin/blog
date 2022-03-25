<template><p>前几天在闲鱼上看到一款路由器瑞斯康达 SGM1500，网上查了一下相关配置，还不错，还可以刷机，于是搞了一台。</p>
<h2 id="配置参数" tabindex="-1"><a class="header-anchor" href="#配置参数" aria-hidden="true">#</a> 配置参数</h2>
<ul>
<li>CPU：MT7621</li>
<li>接口：1WAN+4LAN，USB2.0（全千兆网口）</li>
<li>无线：2.4G/5G（7615DN）</li>
<li>Flash：128M（NAND）</li>
<li>内存：256M</li>
</ul>
<h2 id="刷入-breed" tabindex="-1"><a class="header-anchor" href="#刷入-breed" aria-hidden="true">#</a> 刷入 Breed</h2>
<h3 id="确定breed" tabindex="-1"><a class="header-anchor" href="#确定breed" aria-hidden="true">#</a> 确定Breed</h3>
<p>CPU 和无线芯片是和 K2P 一样的，内存和 Flash 方案和小米R3G、极路由4一样（nand flash）。
根据相关配置信息，到 hackpascal 大佬的恩山帖子查找，MT7621 的 nand flash 方案的 Breed 有极路由4，小米R3G（网件R6220内存只有128M排除掉）</p>
<p><img src="@source/operate/assets/msg1500_1.png" alt="img" loading="lazy"></p>
<p>然后先把这 2 个 breed 先下载下来备用，放在 tftpd32.exe 所在目录（提前下载好 tftpd32 并解压好）</p>
<p><img src="@source/operate/assets/msg1500_2.png" alt="img" loading="lazy"></p>
<h3 id="telnet-进入路由" tabindex="-1"><a class="header-anchor" href="#telnet-进入路由" aria-hidden="true">#</a> Telnet 进入路由</h3>
<p>路由器通电，用网线连接路由器的 LAN 口和电脑的网口</p>
<p><img src="@source/operate/assets/msg1500_3.png" alt="img" loading="lazy"></p>
<p>等待片刻打开 CMD 输入 ipconfig，查看有线网卡获取到IP地址（192.168.2.X）和网关（192.168.2.254）</p>
<p><img src="@source/operate/assets/msg1500_4.png" alt="img" loading="lazy"></p>
<p>用 putty 工具 telnet 进入路由器</p>
<ul>
<li>host IP：192.168.2.254</li>
<li>connection type：telnet</li>
<li>用户名：root</li>
<li>密码：root</li>
</ul>
<p><img src="@source/operate/assets/msg1500_5.png" alt="img" loading="lazy"></p>
<h3 id="备份原固件和-bootloader" tabindex="-1"><a class="header-anchor" href="#备份原固件和-bootloader" aria-hidden="true">#</a> 备份原固件和 Bootloader</h3>
<ol>
<li>查看分区信息
<code>cat /proc/mtd</code></li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>root@OpenWrt:~<span class="token comment"># cat /proc/mtd</span>
dev:    size   erasesize  name
mtd0: 07f80000 00020000 <span class="token string">"ALL"</span>
mtd1: 00080000 00020000 <span class="token string">"Bootloader"</span>    <span class="token comment">#mtd1就是引导分区（Bootloader）</span>
mtd2: 00080000 00020000 <span class="token string">"Config"</span>
mtd3: 00040000 00020000 <span class="token string">"Factory"</span>
mtd4: 01ec0000 00020000 <span class="token string">"firmware"</span>      <span class="token comment">#mtd4就是固件分区（firmware）</span>
mtd5: 01b94faf 00020000 <span class="token string">"rootfs"</span>
mtd6: 05f80000 00020000 <span class="token string">"rootfs_data"</span>
root@OpenWrt:~<span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="2">
<li>备份分区
<code>dd if=源文件(input file) of=目的文件(of=output file )</code>
备份启动分区和固件分区到 <code>/tmp</code> 目录下</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>root@OpenWrt:~<span class="token comment"># dd if=/dev/mtd4 of=/tmp/firmware_backup.bin</span>
<span class="token number">62976</span>+0 records <span class="token keyword">in</span>
<span class="token number">62976</span>+0 records out
root@OpenWrt:~<span class="token comment"># dd if=/dev/mtd1 of=/tmp/Bootloader_backup.bin</span>
<span class="token number">1024</span>+0 records <span class="token keyword">in</span>
<span class="token number">1024</span>+0 records out
root@OpenWrt:~<span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="3">
<li>查看备份</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>root@OpenWrt:~<span class="token comment"># cd /tmp/</span>
root@OpenWrt:/tmp<span class="token comment"># ls</span>
Bootloader_backup.bin		<span class="token comment">#有此文件，说明上面的备份成功</span>
firmware_backup.bin				<span class="token comment">#有此文件，说明上面的备份成功</span>
root@OpenWrt:/tmp<span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="4">
<li>
<p>导出备份</p>
<p>见<u><strong>文件传输</strong></u>内容</p>
</li>
</ol>
<h3 id="开启-tftp" tabindex="-1"><a class="header-anchor" href="#开启-tftp" aria-hidden="true">#</a> 开启 tftp</h3>
<p>打开tftpd32.exe之前，先关闭系统防火墙和杀毒软件，否则 tftp 命令不能传输文件</p>
<p><img src="@source/operate/assets/msg1500_6.png" alt="img" loading="lazy"></p>
<p>打开 tftpd32.exe，就会自动开启 tftp 服务器，Server interfaces 选择电脑网口的 IP，就是上面 CMD 获取的IP（192.168.2.X）</p>
<p><img src="@source/operate/assets/msg1500_7.png" alt="img" loading="lazy"></p>
<h3 id="文件传输" tabindex="-1"><a class="header-anchor" href="#文件传输" aria-hidden="true">#</a> 文件传输</h3>
<ol>
<li>导出备份</li>
</ol>
<p>下面两个命令是把备份固件导出到本地 tftpd32.exe 所在目录中</p>
<div class="language-ruby ext-rb line-numbers-mode"><pre v-pre class="language-ruby"><code>root<span class="token variable">@OpenWrt</span><span class="token operator">:</span><span class="token operator">/</span>tmp<span class="token comment"># tftp -pl Bootloader_backup.bin 192.168.2.192</span>
root<span class="token variable">@OpenWrt</span><span class="token operator">:</span><span class="token operator">/</span>tmp<span class="token comment"># tftp -pl firmware_backup.bin 192.168.2.192</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="@source/operate/assets/msg1500_8.png" alt="img" loading="lazy"></p>
<ol start="2">
<li>上传 breed 文件到路由器</li>
</ol>
<p>把下载的 Breed 放到本地 tftpd32.exe 所在的目录下，先测试极路由4 的 <strong>breed-mt7621-hiwifi-hc5962.bin</strong>（如果此 Breed不可用，再测试小米R3G的 Breed）</p>
<ul>
<li>上传并确认 Breed 文件</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>root@OpenWrt:/tmp<span class="token comment"># tftp -gr breed-mt7621-hiwifi-hc5962.bin 192.168.2.192</span>
<span class="token comment">#把本地tftpd32.exe所在目录中的breed-mt7621-hiwifi-hc5962.bin文件上传到路由的/tmp目录下</span>
root@OpenWrt:/tmp<span class="token comment"># ls</span>
breed-mt7621-hiwifi-hc5962.bin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul>
<li>
<p>刷入 Breed
把 Breed 刷入到 Bootloader 分区</p>
<p><code>mtd write /tmp/breed-mt7621-hiwifi-hc5962.bin Bootloader</code></p>
</li>
</ul>
<div class="language-ruby ext-rb line-numbers-mode"><pre v-pre class="language-ruby"><code>root<span class="token variable">@OpenWrt</span><span class="token operator">:</span><span class="token operator">/</span>tmp<span class="token comment">#mtd write /tmp/breed-mt7621-hiwifi-hc5962 Bootloader</span>
Unlocking Bootloader <span class="token operator">...</span>

Writing form <span class="token operator">/</span>tmp<span class="token operator">/</span>breed<span class="token operator">-</span>mt7621<span class="token operator">-</span>hiwifi<span class="token operator">-</span>hc5962<span class="token punctuation">.</span>bin to Bootloader <span class="token operator">...</span>
root<span class="token variable">@OpenWrt</span><span class="token operator">:</span><span class="token operator">/</span>tmp<span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>以上，Breed 就刷入完成了，开机启动看看能否进入 Breed。</p>
<h2 id="进入-breed" tabindex="-1"><a class="header-anchor" href="#进入-breed" aria-hidden="true">#</a> 进入 Breed</h2>
<ul>
<li>路由器断电</li>
<li>按住路由 WPS 键并通电（WPS键继续按住8秒左右）</li>
<li>浏览器输入192.168.1.1</li>
</ul>
<p><img src="@source/operate/assets/msg1500_9.png" alt="img" loading="lazy"></p>
<p>成功进入 Breed，以防万一，继续备份一下。</p>
<p><img src="@source/operate/assets/msg1500_10.png" alt="img" loading="lazy"></p>
<h2 id="刷第三方固件" tabindex="-1"><a class="header-anchor" href="#刷第三方固件" aria-hidden="true">#</a> 刷第三方固件</h2>
<p>C 大的老毛子已增加此型号，编译一下即可，参考老毛子固件 Padavan 编译</p>
<ul>
<li>如图选择文件，这里选择的是 C 大的老毛子固件</li>
</ul>
<p><img src="@source/operate/assets/msg1500_11.png" alt="img" loading="lazy"></p>
<ul>
<li>点击更新，开始刷机</li>
</ul>
<p><img src="@source/operate/assets/msg1500_12.png" alt="img" loading="lazy"></p>
<ul>
<li>等到更新成功后重启路由器
<ul>
<li>浏览器输入192.168.2.1</li>
<li>用户名：admin</li>
<li>密码：admin</li>
</ul>
</li>
</ul>
<p>成功进入路由器后台界面</p>
<p><img src="@source/operate/assets/msg1500_13.png" alt="img" loading="lazy"></p>
<p>编译时加入了一些插件</p>
<p><img src="@source/operate/assets/msg1500_14.png" alt="img" loading="lazy"></p>
<p>USB 接口测试可用</p>
<p><img src="@source/operate/assets/msg1500_15.png" alt="img" loading="lazy"></p>
<h2 id="无线测试" tabindex="-1"><a class="header-anchor" href="#无线测试" aria-hidden="true">#</a> 无线测试</h2>
<p>测试了一下无线效果，并不是很好（非专业测试，只是在家里几个地方测试了一下，仅供参考）</p>
<table>
<thead>
<tr>
<th>WiFi</th>
<th>2.4G Down</th>
<th>2.4G Up</th>
<th>5G Down</th>
<th>5GUp</th>
</tr>
</thead>
<tbody>
<tr>
<td>贴脸</td>
<td>70.9</td>
<td>55.5</td>
<td>135</td>
<td>92</td>
</tr>
<tr>
<td>一堵墙</td>
<td>38.2</td>
<td>30.6</td>
<td>119</td>
<td>118</td>
</tr>
<tr>
<td>两堵墙</td>
<td>2.6</td>
<td>7.2</td>
<td>28.4</td>
<td>41.6</td>
</tr>
</tbody>
</table>
<h2 id="个人感受" tabindex="-1"><a class="header-anchor" href="#个人感受" aria-hidden="true">#</a> 个人感受</h2>
<p>无线并不是很强，不如红米 AC2100，更不如 K2P，看他们的 2.4GWIFI 芯片对比，虽然价格还算便宜，效果真的不咋地。如果不考虑无线的话，当个主路由、旁路由或交换机，干些其他等，还是很值的。</p>
<h2 id="相关文件" tabindex="-1"><a class="header-anchor" href="#相关文件" aria-hidden="true">#</a> 相关文件</h2>
<p>待整理上传</p>
<h2 id="本文参考" tabindex="-1"><a class="header-anchor" href="#本文参考" aria-hidden="true">#</a> 本文参考</h2>
<p><a href="https://www.right.com.cn/forum/thread-161906-1-1.html" target="_blank" rel="noopener noreferrer">https://www.right.com.cn/forum/thread-161906-1-1.html<ExternalLinkIcon/></a></p>
<p><a href="https://post.smzdm.com/p/aoozem39/" target="_blank" rel="noopener noreferrer">https://post.smzdm.com/p/aoozem39/<ExternalLinkIcon/></a></p>
<p><a href="https://github.com/chongshengB/Padavan-build" target="_blank" rel="noopener noreferrer">https://github.com/chongshengB/Padavan-build<ExternalLinkIcon/></a></p>
</template>
