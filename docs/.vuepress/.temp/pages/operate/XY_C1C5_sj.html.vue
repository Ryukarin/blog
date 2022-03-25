<template><h2 id="外观配置" tabindex="-1"><a class="header-anchor" href="#外观配置" aria-hidden="true">#</a> 外观配置</h2>
<h3 id="外观图片" tabindex="-1"><a class="header-anchor" href="#外观图片" aria-hidden="true">#</a> 外观图片</h3>
<div class="custom-container center">
<p><img src="@source/operate/assets/XY_sj_wg1.png" alt="img" loading="lazy"></p>
<p><img src="@source/operate/assets/XY_sj_wg2.png" alt="img" loading="lazy"></p>
<p><img src="@source/operate/assets/XY_sj_wg3.png" alt="img" loading="lazy"></p>
<p><img src="@source/operate/assets/XY_sj_wg4.png" alt="img" loading="lazy"></p>
<p><img src="@source/operate/assets/XY_sj_wg5.png" alt="img" loading="lazy"></p>
</div>
<h3 id="配置参数" tabindex="-1"><a class="header-anchor" href="#配置参数" aria-hidden="true">#</a> 配置参数</h3>
<ul>
<li>
<p>CPU：MT7621A</p>
</li>
<li>
<p>网口：LAN * 4 + WAN * 1（全千兆）</p>
</li>
<li>
<p>USB 3.0 * 1</p>
</li>
<li>
<p>内置一个 SATA 接口（支持 SATA3）</p>
</li>
<li>
<p>电源 12V1A</p>
</li>
<li>
<p>内存：512MB</p>
</li>
<li>
<p>Flash：32MB</p>
</li>
</ul>
<h2 id="刷机过程" tabindex="-1"><a class="header-anchor" href="#刷机过程" aria-hidden="true">#</a> 刷机过程</h2>
<h3 id="刷入-breed" tabindex="-1"><a class="header-anchor" href="#刷入-breed" aria-hidden="true">#</a> 刷入 breed</h3>
<p>首先给小娱通电，网线连接小娱 LAN口 和电脑网口，确认电脑网络已经正常连接到小娱，可看电脑 IP 是否为192.168.188.X（X为0-255之间但不为1，不是的话需要手动更改）</p>
<p>下载大佬的一键刷入 breed 工具并解压</p>
<div class="custom-container center">
<p><img src="@source/operate/assets/XY_sj1.png" alt="img" loading="lazy"></p>
</div>
<p>打开 <u>XiaoYu_C5_breed.exe</u> 刷机工具，点击 <kbd>刷入breed</kbd> 按钮，等待刷机完成</p>
<ul>
<li>小娱 IP 地址：192.168.188.1</li>
<li>小娱密码：admin</li>
</ul>
<div class="custom-container center">
<p><img src="@source/operate/assets/XY_sj2.png" alt="img" loading="lazy"></p>
</div>
<p>跳出下图说明刷入成功</p>
<div class="custom-container center">
<p><img src="@source/operate/assets/XY_sj3.png" alt="img" loading="lazy"></p>
</div>
<h3 id="进入-breed" tabindex="-1"><a class="header-anchor" href="#进入-breed" aria-hidden="true">#</a> 进入 breed</h3>
<p>刷第三方固件首先要进入 breed，进入 breed 顺序如下</p>
<ol>
<li>
<p>拔掉电源</p>
</li>
<li>
<p>按住Reset键不放</p>
</li>
<li>
<p>接通电源</p>
</li>
<li>
<p>六秒左右松开 Reset 键</p>
</li>
<li>
<p>浏览器访问：192.168.1.1 进入 <u>Breed Web 恢复控制台</u></p>
</li>
</ol>
<div class="custom-container center">
<p><img src="@source/operate/assets/XY_sj4.png" alt="img" loading="lazy"></p>
</div>
<h3 id="刷第三方固件" tabindex="-1"><a class="header-anchor" href="#刷第三方固件" aria-hidden="true">#</a> 刷第三方固件</h3>
<p>进入 <u>Breed Web 恢复控制台</u>后，按下图顺序进行刷入第三方固件（以H大老毛子固件为例）</p>
<p>选择文件 <u>MT7621_7603_7612_512M_3.4.3.9-099.trx</u></p>
<div class="custom-container center">
<p><img src="@source/operate/assets/XY_sj5.png" alt="img" loading="lazy"></p>
</div>
<p>点击上传后，提示正在更新，注意过程中不要断开电源，等待更新完成</p>
<div class="custom-container center">
<p><img src="@source/operate/assets/XY_sj6.png" alt="img" loading="lazy"></p>
</div>
<p>更新成功后，等待两分钟左右，路由会重启完成，此时再浏览器访问老毛子管理后台</p>
<ul>
<li>
<p>老毛子 IP：192.168.123.1</p>
</li>
<li>
<p>账号：admin</p>
</li>
<li>
<p>密码：admin</p>
</li>
</ul>
<p>至此，小娱小娱路由器刷机完成。</p>
<h2 id="补充" tabindex="-1"><a class="header-anchor" href="#补充" aria-hidden="true">#</a> 补充</h2>
<p>如果无法完成一键刷入 Breed</p>
<p>请参考 <a href="http://www.myzaker.com/article/5e6e2febb15ec077a83269c4" target="_blank" rel="noopener noreferrer">http://www.myzaker.com/article/5e6e2febb15ec077a83269c4<ExternalLinkIcon/></a></p>
<h2 id="相关文件" tabindex="-1"><a class="header-anchor" href="#相关文件" aria-hidden="true">#</a> 相关文件</h2>
<p>链接: <a href="https://pan.baidu.com/s/1-esHAm9bmaPJpx-TTSa4WQ" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1-esHAm9bmaPJpx-TTSa4WQ<ExternalLinkIcon/></a></p>
<p>提取码: d7cc</p>
<h2 id="本文参考" tabindex="-1"><a class="header-anchor" href="#本文参考" aria-hidden="true">#</a> 本文参考</h2>
<p><a href="https://www.acwifi.net/9335.html" target="_blank" rel="noopener noreferrer">https://www.acwifi.net/9335.html<ExternalLinkIcon/></a></p>
<p><a href="http://www.myzaker.com/article/5e6e2febb15ec077a83269c4" target="_blank" rel="noopener noreferrer">http://www.myzaker.com/article/5e6e2febb15ec077a83269c4<ExternalLinkIcon/></a></p>
<p><a href="https://post.smzdm.com/p/a07o89z9/" target="_blank" rel="noopener noreferrer">https://post.smzdm.com/p/a07o89z9/<ExternalLinkIcon/></a></p>
<p><a href="https://post.smzdm.com/p/aoowedwn/" target="_blank" rel="noopener noreferrer">https://post.smzdm.com/p/aoowedwn/<ExternalLinkIcon/></a></p>
<p>以及恩山论坛，矿渣社区</p>
<p>部分图片没来得及拍，借用以上参考文章或帖子的图片，如有侵权请联系删除。</p>
</template>
