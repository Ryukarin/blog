<template><h2 id="ftp-介绍" tabindex="-1"><a class="header-anchor" href="#ftp-介绍" aria-hidden="true">#</a> FTP 介绍</h2>
<p>FTP（File Transfer Protocol，文件传输协议） 是 TCP/IP 协议组中的协议之一。FTP 协议包括两个组成部分，其一为 FTP 服务器，其二为 FTP 客户端。其中 FTP 服务器用来存储文件，用户可以使用 FTP 客户端通过 FTP 协议访问位于 FTP 服务器上的资源。在开发网站的时候，通常利用 FTP 协议把网页或程序传到 Web 服务器上。此外，由于 FTP 传输效率非常高，在网络上传输大的文件时，一般也采用该协议。</p>
<p>默认情况下 FTP 协议使用 TCP 端口中的 20 和 21 这两个端口，其中 20 用于传输数据，21 用于传输控制信息。但是，是否使用 20 作为传输数据的端口与 FTP 使用的传输模式有关，如果采用主动模式，那么数据传输端口就是 20；如果采用被动模式，则具体最终使用哪个端口要服务器端和客户端协商决定。</p>
<h2 id="如何登录-ftp" tabindex="-1"><a class="header-anchor" href="#如何登录-ftp" aria-hidden="true">#</a> 如何登录 FTP</h2>
<ol>
<li>在命令行下输入<code>ftp IP地址</code>，按照提示输入用户名和密码，完成登陆</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>C:<span class="token punctuation">\</span>Users<span class="token punctuation">\</span>liujialin<span class="token operator">></span>ftp <span class="token number">192.168</span>.3.1	<span class="token comment">#直接 ftp IP地址</span>
连接到 <span class="token number">192.168</span>.3.1。
<span class="token number">220</span> <span class="token punctuation">(</span>vsFTPd <span class="token number">3.0</span>.3<span class="token punctuation">)</span>
<span class="token number">200</span> Always <span class="token keyword">in</span> UTF8 mode.
用户<span class="token punctuation">(</span><span class="token number">192.168</span>.3.1:<span class="token punctuation">(</span>none<span class="token punctuation">))</span>: root		<span class="token comment">#输入用户名</span>
<span class="token number">331</span> Please specify the password.
密码:								<span class="token comment">#输入密码</span>
<span class="token number">230</span> Login successful.				<span class="token comment">#登录成功</span>
ftp<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="2">
<li>直接输入 <code>ftp</code>，进入 ftp 服务后输入 <code>open IP地址</code>，按照提示输入用户名和密码，完成登陆</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>C:<span class="token punctuation">\</span>Users<span class="token punctuation">\</span>liujialin<span class="token operator">></span>ftp				<span class="token comment">#输入ftp进入ftp模式</span>
ftp<span class="token operator">></span> <span class="token function">open</span> <span class="token number">192.168</span>.3.1				<span class="token comment">#输入open IP地址</span>
连接到 <span class="token number">192.168</span>.3.1。        
<span class="token number">220</span> <span class="token punctuation">(</span>vsFTPd <span class="token number">3.0</span>.3<span class="token punctuation">)</span>  
<span class="token number">200</span> Always <span class="token keyword">in</span> UTF8 mode.
用户<span class="token punctuation">(</span><span class="token number">192.168</span>.3.1:<span class="token punctuation">(</span>none<span class="token punctuation">))</span>: root		<span class="token comment">#输入用户名</span>
<span class="token number">331</span> Please specify the password.
密码:								<span class="token comment">#输入密码</span>
<span class="token number">230</span> Login successful.				<span class="token comment">#登录成功</span>
ftp<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="ftp-基本命令" tabindex="-1"><a class="header-anchor" href="#ftp-基本命令" aria-hidden="true">#</a> FTP 基本命令</h2>
<p>其实只要说一个命令，常用的基本命令就可以知道了。这个命令就是十万个为什么--- <code>?</code>（没错，该命令就是一个问号，等同 <code>hlep</code> 命令）
直接输入一个 <code>?</code>，就会显示出这些命令；输入 <code>? 命令</code>，就会显示该命令的帮助信息</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ftp<span class="token operator">></span> ?
命令可能是缩写的。  命令为:

<span class="token operator">!</span>               delete          literal         prompt          send
?               debug           <span class="token function">ls</span>              put             status
append          <span class="token function">dir</span>             mdelete         <span class="token builtin class-name">pwd</span>             trace
ascii           disconnect      mdir            quit            <span class="token builtin class-name">type</span>
bell            get             mget            quote           user
binary          glob            <span class="token function">mkdir</span>           recv            verbose
bye             <span class="token builtin class-name">hash</span>            mls             remotehelp
<span class="token builtin class-name">cd</span>              <span class="token builtin class-name">help</span>            mput            <span class="token function">rename</span>
close           lcd             <span class="token function">open</span>            <span class="token function">rmdir</span>
ftp<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>比如这里随便查看几个命令的帮助信息，如下</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ftp<span class="token operator">></span> ? ?
?               打印本地帮助信息
ftp<span class="token operator">></span> ? <span class="token function">dir</span>
<span class="token function">dir</span>             列出远程目录的内容
ftp<span class="token operator">></span> ? <span class="token function">ls</span>
<span class="token function">ls</span>              列出远程目录的内容
ftp<span class="token operator">></span> ? <span class="token function">open</span>
<span class="token function">open</span>            连接到远程 FTP
ftp<span class="token operator">></span> ? lcd
lcd             更改本地工作目录
ftp<span class="token operator">></span> <span class="token builtin class-name">help</span> bye
bye             终止 <span class="token function">ftp</span> 会话并退出
ftp<span class="token operator">></span> <span class="token builtin class-name">help</span> <span class="token builtin class-name">pwd</span>
<span class="token builtin class-name">pwd</span>             在远程计算机上打印工作目录
ftp<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2>
<h3 id="文件或目录操作命令" tabindex="-1"><a class="header-anchor" href="#文件或目录操作命令" aria-hidden="true">#</a> 文件或目录操作命令</h3>
<p>一般情况下用户都会被限制目录的访问权限，只可在当前目录下进行操作</p>
<p><code>dir</code>：显示服务器目录和文件列表</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ftp<span class="token operator">></span> <span class="token builtin class-name">cd</span> /home
<span class="token number">250</span> Directory successfully changed.
ftp<span class="token operator">></span> <span class="token function">dir</span>
<span class="token number">200</span> PORT <span class="token builtin class-name">command</span> successful. Consider using PASV.
<span class="token number">150</span> Here comes the directory listing.
-rw-r--r--    <span class="token number">1</span> <span class="token number">0</span>        <span class="token number">0</span>         <span class="token number">1019904</span> May <span class="token number">12</span> <span class="token number">12</span>:39 Installing_OMV5_on_Armbian.pdf
-rw-r--r--    <span class="token number">1</span> <span class="token number">0</span>        <span class="token number">0</span>          <span class="token number">106026</span> Aug 03  <span class="token number">2019</span> breed.bin
drwxr-xr-x    <span class="token number">2</span> <span class="token number">55</span>       <span class="token number">55</span>              <span class="token number">0</span> Apr <span class="token number">30</span> 03:31 <span class="token function">ftp</span>
-rw-r--r--    <span class="token number">1</span> <span class="token number">0</span>        <span class="token number">0</span>         <span class="token number">2159147</span> Sep 09  <span class="token number">2019</span> 昆仑.epub
-rw-r--r--    <span class="token number">1</span> <span class="token number">0</span>        <span class="token number">0</span>          <span class="token number">441798</span> Feb <span class="token number">12</span>  <span class="token number">2019</span> 流浪地球.epub
<span class="token number">226</span> Directory send OK.
ftp: 收到 <span class="token number">363</span> 字节，用时 <span class="token number">0.01</span>秒 <span class="token number">24.20</span>千字节/秒。
ftp<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><code>mkdir</code>：在服务器上创建目录</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ftp<span class="token operator">></span> <span class="token function">mkdir</span> <span class="token builtin class-name">test</span>
<span class="token number">257</span> <span class="token string">"/home/test"</span> created
ftp<span class="token operator">></span> <span class="token function">ls</span>
<span class="token number">200</span> PORT <span class="token builtin class-name">command</span> successful. Consider using PASV.
<span class="token number">150</span> Here comes the directory listing.
<span class="token function">ftp</span>
ss.txt
system.png
<span class="token builtin class-name">test</span>                    <span class="token comment">#新创建的文件夹</span>
<span class="token number">226</span> Directory send OK.
ftp: 收到 <span class="token number">34</span> 字节，用时 <span class="token number">0.01</span>秒 <span class="token number">6.80</span>千字节/秒。
ftp<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><code>rmdir</code>：在服务器上删除目录</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ftp<span class="token operator">></span> <span class="token function">rmdir</span> <span class="token builtin class-name">test</span>
<span class="token number">250</span> Remove directory operation successful.
ftp<span class="token operator">></span> <span class="token function">ls</span>
<span class="token number">200</span> PORT <span class="token builtin class-name">command</span> successful. Consider using PASV.
<span class="token number">150</span> Here comes the directory listing.
<span class="token function">ftp</span>
ss.txt
system.png
<span class="token number">226</span> Directory send OK.
ftp: 收到 <span class="token number">28</span> 字节，用时 <span class="token number">0.01</span>秒 <span class="token number">5.60</span>千字节/秒。
ftp<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><code>ls</code>：显示服务器简易的文件列表</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ftp<span class="token operator">></span> <span class="token function">ls</span>
<span class="token number">200</span> PORT <span class="token builtin class-name">command</span> successful. Consider using PASV.
<span class="token number">150</span> Here comes the directory listing.
Installing_OMV5_on_Armbian.pdf
breed.bin
<span class="token function">ftp</span>
昆仑.epub
流浪地球.epub
<span class="token number">226</span> Directory send OK.
ftp: 收到 <span class="token number">83</span> 字节，用时 <span class="token number">0.01</span>秒 <span class="token number">10.38</span>千字节/秒。
ftp<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><code>cd</code>：进入服务器指定的目录</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ftp<span class="token operator">></span> <span class="token builtin class-name">cd</span> /tmp
<span class="token number">250</span> Directory successfully changed.
ftp<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>pwd</code>：查看服务器上的当前工作目录</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ftp<span class="token operator">></span> <span class="token builtin class-name">pwd</span>
<span class="token number">257</span> <span class="token string">"/tmp"</span> is the current directory
ftp<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>rename filename [newfilename]</code>：重命名 FTP 服务器上的文件</p>
<p><code>delete filename</code>：删除 FTP 服务器上的文件</p>
<h3 id="传输方式设置命令" tabindex="-1"><a class="header-anchor" href="#传输方式设置命令" aria-hidden="true">#</a> 传输方式设置命令</h3>
<p>上传和下载文件时应该使用正确的传输类型，FTP 的传输类型分为 ASCII码方式和二进制方式两种，对 .txt、.htm 等文件应采用 ASCII码方式传输，对 .exe或图片、视频、音频等文件应采用二进制方式传输。在默认情况下，FTP 为 ASCII码传输方式。（以下 3 个命令都不带参数）</p>
<p><code>type</code>：查看当前的传输方式</p>
<p><code>ascii</code>：设定传输方式为 ASCII码方式</p>
<p><code>binary</code>：设定传输方式为二进制方式</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ftp<span class="token operator">></span> <span class="token builtin class-name">type</span>
使用 ascii 模式传送文件。
ftp<span class="token operator">></span> binary
<span class="token number">200</span> Switching to Binary mode.
ftp<span class="token operator">></span> <span class="token builtin class-name">type</span>
使用 binary 模式传送文件。
ftp<span class="token operator">></span> ascii
<span class="token number">200</span> Switching to ASCII mode.
ftp<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="上传命令" tabindex="-1"><a class="header-anchor" href="#上传命令" aria-hidden="true">#</a> 上传命令</h3>
<p><code>put filename [newname]</code></p>
<p><code>send filename [newname]</code></p>
<p>filename 为上传的本地文件名，newname 为上传至 FTP 服务器上时使用的名字，如果不指定 newname，文件将以原名上传。</p>
<p>上传文件前，应该根据文件的类型设置传输方式（见文章最后），本机的工作目录也应该设置为上传文件所在的目录。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ftp<span class="token operator">></span> put C:<span class="token punctuation">\</span>Users<span class="token punctuation">\</span>liujialin<span class="token punctuation">\</span>Downloads<span class="token punctuation">\</span>system.png
<span class="token number">200</span> PORT <span class="token builtin class-name">command</span> successful. Consider using PASV.
<span class="token number">150</span> Ok to send data.
<span class="token number">226</span> Transfer complete.
ftp: 发送 <span class="token number">64878</span> 字节，用时 <span class="token number">0.01</span>秒 <span class="token number">9268.29</span>千字节/秒。
ftp<span class="token operator">></span> send C:<span class="token punctuation">\</span>Users<span class="token punctuation">\</span>liujialin<span class="token punctuation">\</span>Downloads<span class="token punctuation">\</span>ss.txt
<span class="token number">200</span> PORT <span class="token builtin class-name">command</span> successful. Consider using PASV.
<span class="token number">150</span> Ok to send data.
<span class="token number">226</span> Transfer complete.
ftp: 发送 <span class="token number">382</span> 字节，用时 <span class="token number">0.00</span>秒 <span class="token number">382000.00</span>千字节/秒。
ftp<span class="token operator">></span> <span class="token function">ls</span>
<span class="token number">200</span> PORT <span class="token builtin class-name">command</span> successful. Consider using PASV.
<span class="token number">150</span> Here comes the directory listing.
<span class="token function">ftp</span>
ss.txt
system.png
<span class="token number">226</span> Directory send OK.
ftp: 收到 <span class="token number">28</span> 字节，用时 <span class="token number">0.01</span>秒 <span class="token number">4.67</span>千字节/秒。
ftp<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="下载命令" tabindex="-1"><a class="header-anchor" href="#下载命令" aria-hidden="true">#</a> 下载命令</h3>
<p><code>get filename [newname]</code></p>
<p>filename 为 FTP 服务器上的文件名，newname 为保存在本都计算机上时使用的名字，如果不指定 newname，文件将以原名保存。</p>
<p><code>get</code> 命令下载的文件将保存在本地计算机的工作目录下。该目录是启动 FTP 时在盘符 C: 后显示的目录。如果想修改本地计算机的工作目录，可以使用 <code>lcd</code> 命令。比如：<code>lcd d:\</code> 表示将工作目录设定为 D 盘的根目录。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ftp<span class="token operator">></span> lcd D:<span class="token punctuation">\</span>
目前的本地目录 D:<span class="token punctuation">\</span>。
ftp<span class="token operator">></span> <span class="token builtin class-name">pwd</span>
<span class="token number">257</span> <span class="token string">"/home"</span> is the current directory
ftp<span class="token operator">></span> get ss.txt ssss.txt
<span class="token number">200</span> PORT <span class="token builtin class-name">command</span> successful. Consider using PASV.
<span class="token number">150</span> Opening ASCII mode data connection <span class="token keyword">for</span> ss.txt <span class="token punctuation">(</span><span class="token number">382</span> bytes<span class="token punctuation">)</span>.
<span class="token number">226</span> Transfer complete.
ftp: 收到 <span class="token number">417</span> 字节，用时 <span class="token number">0.00</span>秒 <span class="token number">417000.00</span>千字节/秒。
ftp<span class="token operator">></span> get system.png
<span class="token number">200</span> PORT <span class="token builtin class-name">command</span> successful. Consider using PASV.
<span class="token number">150</span> Opening ASCII mode data connection <span class="token keyword">for</span> system.png <span class="token punctuation">(</span><span class="token number">64877</span> bytes<span class="token punctuation">)</span>.
<span class="token number">226</span> Transfer complete.
ftp: 收到 <span class="token number">65193</span> 字节，用时 <span class="token number">0.00</span>秒 <span class="token number">65193.00</span>千字节/秒。
ftp<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="其他命令" tabindex="-1"><a class="header-anchor" href="#其他命令" aria-hidden="true">#</a> 其他命令</h3>
<p><code>mput filename1 filename2 ...</code>：上传多个文件</p>
<p><code>mget filename1 filename2 ...</code>：下载多个文件</p>
<p><code>close</code>：结束与服务器的 FTP 会话</p>
<p><code>quit</code>：结束与服务器的 FTP 会话并退出 FTP 环境</p>
<p><code>!</code>：转义到 shell，也就是结束与服务器的 FTP 会话并退出</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ftp<span class="token operator">></span> ? <span class="token operator">!</span>
<span class="token operator">!</span>               转义到 shell
ftp<span class="token operator">></span> ? close
close           终止 <span class="token function">ftp</span> 会话
ftp<span class="token operator">></span> ? quit
quit            终止 <span class="token function">ftp</span> 会话并退出
ftp<span class="token operator">></span> ? bye
bye             终止 <span class="token function">ftp</span> 会话并退出
ftp<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><hr>
<div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>以上所有示例都是再 Windows 10 系统下的 CMD 命令行操作。</p>
<p>Linux 同样操作方法，只是界面和盘符显示不同而已。</p>
</div>
</template>
