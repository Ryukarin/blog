<template><h2 id="sftp-介绍" tabindex="-1"><a class="header-anchor" href="#sftp-介绍" aria-hidden="true">#</a> SFTP 介绍</h2>
<p>SFTP 是 SSH File Transfer  Protocol 的缩写，安全文件传送协议。SFTP 与 FTP 有着几乎一样的语法和功能。SFTP 为 SSH 的其中一部分，是一种传输档案至 Blogger 伺服器的安全方式。</p>
<p>其实在 SSH 软件包中，已经包含了一个叫作 SFTP 的安全文件信息传输子系统，SFTP 本身没有单独的守护进程，它必须使用 sshd 守护进程（端口号默认是 22）来完成相应的连接和答复操作，所以从某种意义上来说，SFTP 并不像一个服务器程序，而更像是一个客户端程序。</p>
<h2 id="如何登录-sftp" tabindex="-1"><a class="header-anchor" href="#如何登录-sftp" aria-hidden="true">#</a> 如何登录 SFTP</h2>
<ol>
<li>
<p><code>sftp 服务器IP</code></p>
<p><code>sftp 服务器IP</code> 回车之后，会提示输入默认用户密码进行验证，验证成功后即登录成功。</p>
</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>kei@kei-KVM:~/Desktop$ <span class="token function">sftp</span> <span class="token number">9.200</span>.76.179
ryuu@9.200.76.179's password: 
Connected to <span class="token number">9.200</span>.76.179.
sftp<span class="token operator">></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="2">
<li>
<p><code>sftp user@服务器IP</code></p>
<p><code>sftp user@服务器IP</code> 之后，会提示输入指定用户 user 的密码进行验证，验证成功后即登录成功。</p>
</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>kei@kei-KVM:~/Desktop$ <span class="token function">sftp</span> karin@9.200.76.179
karin@9.200.76.179's password: 
Connected to <span class="token number">9.200</span>.76.179.
sftp<span class="token operator">></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="sftp-的基本命令" tabindex="-1"><a class="header-anchor" href="#sftp-的基本命令" aria-hidden="true">#</a> SFTP 的基本命令</h2>
<p>同 FTP 一样，命令 <code>?</code> 或者 <code>help</code> 可以查看所有命令帮助信息。如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>sftp<span class="token operator">></span> ?
Available commands:
bye                                退出 <span class="token function">sftp</span>
<span class="token builtin class-name">cd</span> path                            更改远程目录到 <span class="token string">'path'</span>
<span class="token function">chgrp</span> <span class="token punctuation">[</span>-h<span class="token punctuation">]</span> grp path                将文件 <span class="token string">'path'</span> 的组更改为 <span class="token string">'grp'</span>
<span class="token function">chmod</span> <span class="token punctuation">[</span>-h<span class="token punctuation">]</span> mode path               将文件 <span class="token string">'path'</span> 的权限更改为 <span class="token string">'mode'</span>
<span class="token function">chown</span> <span class="token punctuation">[</span>-h<span class="token punctuation">]</span> own path                将文件 <span class="token string">'path'</span> 的属主更改为 <span class="token string">'own'</span>
<span class="token function">df</span> <span class="token punctuation">[</span>-hi<span class="token punctuation">]</span> <span class="token punctuation">[</span>path<span class="token punctuation">]</span>                    显示当前目录的统计信息或包含 <span class="token string">'path'</span> 的文件系统
<span class="token builtin class-name">exit</span>                               退出 <span class="token function">sftp</span>
get <span class="token punctuation">[</span>-afpR<span class="token punctuation">]</span> remote <span class="token punctuation">[</span>local<span class="token punctuation">]</span>         下载文件
<span class="token builtin class-name">help</span>                               显示这个帮助文本
lcd path                           更改本地目录到 <span class="token string">'path'</span>
lls <span class="token punctuation">[</span>ls-options <span class="token punctuation">[</span>path<span class="token punctuation">]</span><span class="token punctuation">]</span>            显示本地目录列表
lmkdir path                        创建本地目录
<span class="token function">ln</span> <span class="token punctuation">[</span>-s<span class="token punctuation">]</span> oldpath newpath            符号链接远程文件
lpwd                               显示本地工作目录
<span class="token function">ls</span> <span class="token punctuation">[</span>-1afhlnrSt<span class="token punctuation">]</span> <span class="token punctuation">[</span>path<span class="token punctuation">]</span>             显示远程目录列表
lumask <span class="token builtin class-name">umask</span>                       将本地umask设置为 <span class="token string">'umask'</span>
<span class="token function">mkdir</span> path                         创建远程目录
progress                           切换是否显示文件传输进度
put <span class="token punctuation">[</span>-afpR<span class="token punctuation">]</span> <span class="token builtin class-name">local</span> <span class="token punctuation">[</span>remote<span class="token punctuation">]</span>         上传文件
<span class="token builtin class-name">pwd</span>                                显示远程工作目录
quit                               退出 <span class="token function">sftp</span>
reget <span class="token punctuation">[</span>-fpR<span class="token punctuation">]</span> remote <span class="token punctuation">[</span>local<span class="token punctuation">]</span>        恢复下载文件
<span class="token function">rename</span> oldpath newpath             重命名远程文件
reput <span class="token punctuation">[</span>-fpR<span class="token punctuation">]</span> <span class="token builtin class-name">local</span> <span class="token punctuation">[</span>remote<span class="token punctuation">]</span>        恢复上传文件
<span class="token function">rm</span> path                            删除远程文件
<span class="token function">rmdir</span> path                         删除远程目录
symlink oldpath newpath            符号链接远程文件
version                            显示 SFTP 版本信息
<span class="token operator">!</span>command                           在本地shell中执行 <span class="token string">'command'</span>
<span class="token operator">!</span>                                  启动本地shell
?                                  帮助信息
sftp<span class="token operator">></span> ? lpwd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2>
<h3 id="文件或目录操作命令" tabindex="-1"><a class="header-anchor" href="#文件或目录操作命令" aria-hidden="true">#</a> 文件或目录操作命令</h3>
<p><code>pwd</code>：是看 sftp 服务器当前工作目录</p>
<p><code>lpwd</code>：是看本地当前工作目录</p>
<p><code>ls</code> ：是看 sftp 服务器下当前目录下的文件列表</p>
<p><code>lls</code>：是看本地当前目录下的文件列表</p>
<p><code>cd path</code>：更改远程目录到 'path'</p>
<p><code>lcd path</code>：更改本地目录到 'path'</p>
<p><code>mkdir path</code>：创建远程目录</p>
<p><code>rmdir path</code>：删除远程目录</p>
<p><code>rm file</code>：删除远程文件</p>
<p><code>rename oldfile newfile</code>：重命名远程文件</p>
<h3 id="上传命令" tabindex="-1"><a class="header-anchor" href="#上传命令" aria-hidden="true">#</a> 上传命令</h3>
<p><code>put [-r] localfile [remotefile]</code></p>
<p>如果不指定 <code>remotefile</code>，将使用和本地文件相同的文件名。参数 -r 来上传整个目录。</p>
<p>这个是把本地的 <code>test.txt</code> 文件和 <code>/home/ryuu/newfolder/</code> 目录上传到 sftp 服务器上的当前目录下。（当然也可以上传到指定的服务器目录）</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#上传文件</span>
上传文件sftp<span class="token operator">></span> put /home/kei/test.txt 
Uploading /home/kei/test.txt to /home/ryuu/test.txt
/home/kei/test.txt                           <span class="token number">100</span>%    <span class="token number">0</span>     <span class="token number">0</span>.0KB/s   00:00    
sftp<span class="token operator">></span> <span class="token function">ls</span>
Desktop         Documents       Downloads       IOSAPP          Pictures        
Templates       config.json     derby.log       fontconfig      hello           
nohup.out       share           test.txt

<span class="token comment">#上传文件夹</span>
sftp<span class="token operator">></span> put -r /home/kei/newfolder/
Uploading /home/kei/newfolder/ to /home/ryuu/newfolder
sftp<span class="token operator">></span> <span class="token function">ls</span>
Desktop         Documents       Downloads       IOSAPP          Pictures        
Templates       config.json     derby.log       fontconfig      hello           
newfolder		nohup.out       share           test.txt
sftp<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="下载命令" tabindex="-1"><a class="header-anchor" href="#下载命令" aria-hidden="true">#</a> 下载命令</h3>
<p><code>get [-r] remotefile [localfile]</code></p>
<p>如果不指定 <code>localfile</code>，将使用和服务器文件相同的文件名。参数 -r 来下载整个目录。</p>
<p>这个是把 sftp 服务器上的 <code>hello</code> 文件和 <code>/home/ryuu/Documents/</code>  文件夹下载到本地当前目录下。（当然也可以下载到指定的本地目录）</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#下载文件</span>
sftp<span class="token operator">></span> get /home/ryuu/hello
Fetching /home/ryuu/hello to hello
/home/ryuu/hello                              <span class="token number">100</span>%  <span class="token number">174</span>    <span class="token number">45</span>.4KB/s   00:00

<span class="token comment">#下载文件夹</span>
sftp<span class="token operator">></span> get -r /home/ryuu/Documents/
/home/ryuu/Documents/md/deploy.sh             <span class="token number">100</span>%  <span class="token number">493</span>   <span class="token number">611</span>.1KB/s   00:00    
/home/ryuu/Documents/test.txt                 <span class="token number">100</span>%  <span class="token number">790</span>     <span class="token number">1</span>.0MB/s   00:00    
/home/ryuu/Documents/new                      <span class="token number">100</span>%   <span class="token number">37</span>   <span class="token number">100</span>.0KB/s   00:00    
/home/ryuu/Documents/old                      <span class="token number">100</span>%   <span class="token number">26</span>     <span class="token number">6</span>.0KB/s   00:00    
/home/ryuu/Documents/webmin-1.972.tar.gz      <span class="token number">100</span>%   40MB  <span class="token number">36</span>.9MB/s   00:01    
sftp<span class="token operator">></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="其他命令" tabindex="-1"><a class="header-anchor" href="#其他命令" aria-hidden="true">#</a> 其他命令</h3>
<p><code>exit</code>：退出 sftp</p>
<p><code>bye</code>：退出 sftp</p>
<p><code>quit</code>：退出 sftp</p>
<p><code>help</code>：显示这个帮助文本</p>
<p><code>!command</code>：在本地shell中执行 'command'</p>
<p><code>!</code>：启动本地shell</p>
<hr>
<div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>以上所有示例都是再 Ubuntu 系统下的命令行模式操作。</p>
<p>Windows 同样操作方法，只是界面和盘符显示不同而已。</p>
</div>
</template>
