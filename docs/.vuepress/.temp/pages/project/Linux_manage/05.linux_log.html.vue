<template><p>系统日志详细地记录了在什么时间，哪台服务器、哪个程序或服务出现了什么情况。不管是哪种操作系统，都详细地记录了重要程序和服务的日志，只是我们很少养成查看日志的习惯。</p>
<p>日志是系统信息最详细、最准确的记录者，如果大家能够善用日志，那么当系统出现问题时，我们就能在第一时间发现问题，也能够从日志中找到解决问题的方法。</p>
<p>很多人都觉得查看日志比较枯燥，甚至干脆看不懂，那么我们就来学习一下<strong>Linux系统的日志管理</strong>。</p>
<h2 id="日志简介" tabindex="-1"><a class="header-anchor" href="#日志简介" aria-hidden="true">#</a> 日志简介</h2>
<p>日志是操作系统用来记录在什么时间哪个进程做了什么样的工作、发生了什么事件。同时记录系统中硬件和软件产生的系统问题的。换句话说，目志就是系统的记账本，记账本中按照时间先后排序记录了系统中发生的所有事件。当然，如果把所有的信息放入一个日志文件中，那么这个文件的可读性会非常差，所以不同的日志应放入不同的日志文件中。</p>
<h3 id="日志相关服务" tabindex="-1"><a class="header-anchor" href="#日志相关服务" aria-hidden="true">#</a> 日志相关服务</h3>
<p>在 CentOS 6.x 中，日志服务已经由 rsyslogd 取代了原先的 syslogd。Red Hat 公司认为 syslogd 已经不能满足工作中的需求，rsyslogd 相比 syslogd 具有一些新的特点：</p>
<ul>
<li>基于 TCP 网络协议传输日志信息。</li>
<li>更安全的网络传输方式。</li>
<li>有日志信息的即时分析框架。</li>
<li>后台数据库。</li>
<li>在配置文件中可以写简单的逻辑判断。</li>
<li>与 syslog 配置文件相兼容。</li>
</ul>
<p>rsyslogd 日志服务更加先进，功能更多。但是，不论是该服务的使用，还是日志文件的格式，其实都是和 syslogd 服务相兼容的，所以学习起来基本和 syslogd 服务一致。</p>
<p>我们如何知道 Linux 中的 rsyslogd 服务是否启动了呢？如何查询 rsyslogd 服务的自启动状态呢？命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ps aux | grep "rsyslog" | grep -v "grep"</span>
root <span class="token number">1139</span> <span class="token number">0.0</span> <span class="token number">0.2</span> <span class="token number">35948</span> <span class="token number">1500</span> ? Sl 09：40 <span class="token number">0</span>：00 /sbin/rsyslogd -i/var/run/syslogd.pid -c <span class="token number">5</span>
<span class="token comment">#有rsyslogd服务的进程，所以这个服务已经启动了</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># chkconfig --list | grep rsyslog</span>
rsyslog <span class="token number">0</span>：关闭 <span class="token number">1</span>：关闭 <span class="token number">2</span>：启用 <span class="token number">3</span>：启用 <span class="token number">4</span>：启用 <span class="token number">5</span>：启用 <span class="token number">6</span>：关闭
<span class="token comment">#rsyslog服务在2、3、4、5运行级别上是开机自启动的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>系统中的绝大多数日志文件是由 rsyslogd 服务来统一管理的，只要各个进程将信息给予这个服务，它就会自动地把日志按照特定的格式记录到不同的日志文件中。也就是说，采用 rsyslogd 服务管理的日志文件，它们的格式应该是统一的。</p>
<p>在 Linux 系统中有一部分日志不是由 rsyslogd 服务来管理的，比如 apache 服务，它的日志是由 Apache 软件自己产生并记录的，并没有调用 rsyslogd 服务。但是为了便于读取，apache 日志文件的格式和系统默认日志的格式是一致的。</p>
<h3 id="系统中常见的日志文件" tabindex="-1"><a class="header-anchor" href="#系统中常见的日志文件" aria-hidden="true">#</a> 系统中常见的日志文件</h3>
<p>日志文件是重要的系统信息文件，其中记录了许多重要的系统事件，包括用户的登录信息、系统的启动信息、系统的安全信息、邮件相关信息、各种服务相关信息等。这些信息有些非常敏感，所以在 Linux 中这些日志文件只有 root 用户可以读取。</p>
<p>那么，系统日志文件保存在什么地方呢？还记得 <code>/var/</code> 目录吗？它是用来保存系统动态数据的目录，那么 <code>/var/log/</code> 目录就是系统日志文件的保存位置。我们通过表6-1 来说明一下系统中的重要日志文件。</p>
<p><strong>表6-1	<u>系统中的重要日志文件</u></strong></p>
<table>
<thead>
<tr>
<th>日志文件</th>
<th>说 明</th>
</tr>
</thead>
<tbody>
<tr>
<td>/var/log/cron</td>
<td>记录与系统定时任务相关的曰志</td>
</tr>
<tr>
<td>/var/log/cups/</td>
<td>记录打印信息的曰志</td>
</tr>
<tr>
<td>/var/log/dmesg</td>
<td>记录了系统在开机时内核自检的信总。也可以使用 <code>dmesg</code> 命令直接查看内核自检信息</td>
</tr>
<tr>
<td>/var/log/btmp</td>
<td>记录错误登陆的日志。这个文件是二进制文件，不能直接用Vi查看，而要使用 <code>lastb</code> 命令查看。命令如下：<br /><code>[root@localhost log]# lastbroot</code><br /><code>tty1 Tue Jun 4 22:38 - 22:38 (00:00)</code><br /><code> #有人在6月4 日 22:38便用root用户在本地终端 1 登陆错误</code></td>
</tr>
<tr>
<td>/var/log/lasllog</td>
<td>记录系统中所有用户最后一次的登录时间的曰志。这个文件也是二进制文件，不能直接用 Vi 查看。而要使用 <code>lastlog</code> 命令查看</td>
</tr>
<tr>
<td>/var/Iog/mailog</td>
<td>记录邮件信息的曰志</td>
</tr>
<tr>
<td>/var/log/messages</td>
<td>它是核心系统日志文件，其中包含了系统启动时的引导信息，以及系统运行时的其他状态消息。I/O 错误、网络错误和其他系统错误都会记录到此文件中。其他信息，比如某个人的身份切换为 root，已经用户自定义安装软件的日志，也会在这里列出。</td>
</tr>
<tr>
<td>/var/log/secure</td>
<td>记录验证和授权方面的倍息，只要涉及账户和密码的程序都会记录，比如系统的登录、ssh 的登录、su 切换用户，sudo 授权，甚至添加用户和修改用户密码都会记录在这个日志文件中</td>
</tr>
<tr>
<td>/var/log/wtmp</td>
<td>永久记录所有用户的登陆、注销信息，同时记录系统的后动、重启、关机事件。同样，这个文件也是二进制文件，不能直接用Vi查看，而要使用 <code>last</code> 命令查看</td>
</tr>
<tr>
<td>/var/tun/ulmp</td>
<td>记录当前已经登录的用户的信息。这个文件会随着用户的登录和注销而不断变化，只记录当前登录用户的信息。同样，这个文件不能直接用Vi查看，而要使用 <code>w</code>、<code>who</code>、<code>users</code> 等命令查看</td>
</tr>
</tbody>
</table>
<p>除系统默认的日志之外，采用 RPM 包方式安装的系统服务也会默认把日志记录在 <code>/var/log/</code>  目录中（源码包安装的服务日志存放在源码包指定的目录中）。不过这些日志不是由 rsyslogd 服务来记录和管理的，而是各个服务使用自己的日志管理文档来记录自身的日志。以下介绍的日志目录在你的 Linux 上不一定存在，只有安装了相应的服务，日志才会出现。服务日志如表6-2 所示。</p>
<p><strong>表6-2	<u>服务日志</u></strong></p>
<table>
<thead>
<tr>
<th>日志文件</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>/var/log/httpd/</td>
<td>RPM 包安装的 apache 服务的默认日志目录</td>
</tr>
<tr>
<td>/var/log/mail/</td>
<td>RPM 包安装的邮件服务的额外日志因录</td>
</tr>
<tr>
<td>/var/log/samba/</td>
<td>RPM 色安装的 Samba 服务的日志目录</td>
</tr>
<tr>
<td>/var/log/sssd/</td>
<td>守护进程安全服务目录</td>
</tr>
</tbody>
</table>
<h2 id="日志服务-rsyslogd" tabindex="-1"><a class="header-anchor" href="#日志服务-rsyslogd" aria-hidden="true">#</a> 日志服务 rsyslogd</h2>
<p>我们已经知道 CentOS 6.x 使用 rsyslogd 服务取代了 syslogd 服务，其实在使用过程中这两个服务非常类似，包括由此服务产生的日志文件的格式、服务的配置文件等基本一样，所以我们不论学习了哪个服务，都会非常容易接受另外一个服务。下面，我们来学习 rsyslogd 服务，主要学习该服务产生的日志文件的格式和服务的配置文件。</p>
<h3 id="日志文件的格式" tabindex="-1"><a class="header-anchor" href="#日志文件的格式" aria-hidden="true">#</a> 日志文件的格式</h3>
<p>只要是由日志服务 rsyslogd 记录的日志文件，它们的格式就都是一样的。所以我们只要了解了日志文件的格式，就可以很轻松地看懂日志文件。</p>
<p>日志文件的格式包含以下 4 列：</p>
<ul>
<li>事件产生的时间。</li>
<li>产生事件的服务器的主机名。</li>
<li>产生事件的服务名或程序名。</li>
<li>事件的具体信息。</li>
</ul>
<p>我们查看一下 <code>/var/log/secure</code> 日志，这个日志中主要记录的是用户验证和授权方面的信息，更加容易理解。命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi /var/log/secure</span>
Jun <span class="token number">5</span> 03：20：46 localhost sshd<span class="token punctuation">[</span><span class="token number">1630</span><span class="token punctuation">]</span>：Accepted password <span class="token keyword">for</span> root from <span class="token number">192.168</span>.0.104 port <span class="token number">4229</span> ssh2
<span class="token comment"># 6月5日 03：20：46 本地主机 sshd服务产生消息：接收从192.168.0.104主机的4229端口发起的ssh连接的密码</span>
Jun <span class="token number">5</span> 03：20：46 localhost sshd<span class="token punctuation">[</span><span class="token number">1630</span><span class="token punctuation">]</span>：pam_unix<span class="token punctuation">(</span>sshd：session<span class="token punctuation">)</span>：session opened <span class="token keyword">for</span> user root by <span class="token punctuation">(</span>uid<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">#时间 本地主机 sshd服务中pam_unix模块产生消息：打开用户root的会话（UID为0）</span>
Jun <span class="token number">5</span> 03：25：04 localhost useradd<span class="token punctuation">[</span><span class="token number">1661</span><span class="token punctuation">]</span>：new group：name<span class="token operator">=</span>bb， <span class="token assign-left variable">GID</span><span class="token operator">=</span><span class="token number">501</span>
<span class="token comment">#时间 本地主机 useradd命令产生消息：新建立bb组，GID为501</span>
Jun <span class="token number">5</span> 03：25：04 localhost useradd<span class="token punctuation">[</span><span class="token number">1661</span><span class="token punctuation">]</span>：new user：name<span class="token operator">=</span>bb， <span class="token assign-left variable"><span class="token environment constant">UID</span></span><span class="token operator">=</span><span class="token number">501</span>， <span class="token assign-left variable">GID</span><span class="token operator">=</span><span class="token number">501</span>， <span class="token assign-left variable">home</span><span class="token operator">=</span>/home/bb， <span class="token assign-left variable">shell</span><span class="token operator">=</span>/bin/bash
Jun <span class="token number">5</span> 03：25：09 localhost passwd：pam_unix<span class="token punctuation">(</span>passwd：chauthtok<span class="token punctuation">)</span>：password changed <span class="token keyword">for</span> bb
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>我截取了一段日志的内容，注释了其中的三句日志，剩余的两句日志大家可以看懂了吗？其实分析日志既是重要的系统维护工作，也是一项非常枯燥和烦琐的工作。如果我们的服务器出现了一些问题，比如系统不正常重启或关机、用户非正常登录、服务无法正常使用等，则都应该先查询日志。</p>
<p>实际上，只要感觉到服务器不是很正常就应该查看日志，甚至在服务器没有什么问题时也要养成定时查看系统日志的习惯。</p>
<h3 id="rsyslogd-服务的配置文件" tabindex="-1"><a class="header-anchor" href="#rsyslogd-服务的配置文件" aria-hidden="true">#</a> rsyslogd 服务的配置文件</h3>
<p>rsyslogd 服务是依赖其配置文件 <code>/etc/rsyslog.conf</code> 来确定哪个服务的什么等级的日志信息会被记录在哪个位置的。也就是说，日志服务的配置文件中主要定义了服务的名称、日志等级和日志记录位置。</p>
<h4 id="etc-rsyslog-conf-配置文件的格式" tabindex="-1"><a class="header-anchor" href="#etc-rsyslog-conf-配置文件的格式" aria-hidden="true">#</a> /etc/rsyslog.conf 配置文件的格式</h4>
<p>该配置文件的基本格式如下所示：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>authpriv.*							/var/log/secure
<span class="token comment">#服务名称[连接符号]日志等级			日志记录位置</span>
<span class="token comment">#认证相关服务.所有日志等级			记录在/var/log/secure日志中</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol>
<li><strong>服务名称</strong></li>
</ol>
<p>我们首先需要确定 rsyslogd 服务可以识别哪些服务的日志，也可以理解为以下这些服务委托 rsyslogd 服务来代为管理日志。这些服务如表6-3 所示。</p>
<p><strong>表6-3	<u>日志服务名称</u></strong></p>
<table>
<thead>
<tr>
<th>服务名称</th>
<th>说 明</th>
</tr>
</thead>
<tbody>
<tr>
<td>auth（LOG AUTH）</td>
<td>安全和认证相关消息 （不推荐使用 authpriv 替代）</td>
</tr>
<tr>
<td>authpriv（LOG_AUTHPRIV）</td>
<td>安全和认证相关消息（私有的）</td>
</tr>
<tr>
<td>cron（LOG_CRON）</td>
<td>系统定时任务 cront 和 at 产生的日志</td>
</tr>
<tr>
<td>daemon（LOG_DAEMON）</td>
<td>与各个守护进程相关的曰志</td>
</tr>
<tr>
<td>ftp（LOG_FTP）</td>
<td>ftp 守护进程产生的曰志</td>
</tr>
<tr>
<td>kern（LOG_KERN）</td>
<td>内核产生的曰志（不是用户进程产生的）</td>
</tr>
<tr>
<td>Iocal0-local7（LOG_LOCAL0-7）</td>
<td>为本地使用预留的服务</td>
</tr>
<tr>
<td>lpr（LOG_LPR）</td>
<td>打印产生的日志</td>
</tr>
<tr>
<td>mail（LOG_MAIL）</td>
<td>邮件收发信息</td>
</tr>
<tr>
<td>news（LOG_NEWS）</td>
<td>与新闻服务器相关的日志</td>
</tr>
<tr>
<td>syslog（LOG_SYSLOG）</td>
<td>存 syslogd 服务产生的曰志信息（虽然服务名称己经改为 reyslogd，但是很多配罝依然沿用了 syslogd 服务的，所以这里并没有修改服务名称）</td>
</tr>
<tr>
<td>user（LOG_USER）</td>
<td>用户等级类别的日志信息</td>
</tr>
<tr>
<td>uucp（LOG_UUCP）</td>
<td>uucp子系统的日志信息，uucp 是早期 Linux 系统进行数据传递的协议，后来 也常用在新闻组服务中</td>
</tr>
</tbody>
</table>
<p>这些日志服务名称是 rsyslogd 服务自己定义的，并不是实际的 Linux 的服务。当有服务需要由 rsyslogd 服务来帮助管理日志时，只需要调用这些服务名称就可以实现日志的委托管理。</p>
<p>这些日志服务名称大家可以使用命令 <code>man 3 syslog</code> 来查看。虽然我们的日志管理服务已经更新到 rsyslogd，但是很多配置依然沿用了 syslogd 服务，在帮助文档中仍然查看 syslog 服务的帮助信息。</p>
<ol start="2">
<li><strong>连接符号</strong></li>
</ol>
<p>日志服务连接日志等级的格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>日志服务<span class="token punctuation">[</span>连接符号<span class="token punctuation">]</span>日志等级				日志记录位置
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在这里，连接符号可以被识别为以下三种。</p>
<blockquote>
<p>“<strong>.</strong>” 代表只要比后面的等级高的（包含该等级）日志都记录。比如，“cron.info”代表 cron 服务产生的日志，只要日志等级大于等于 info 级别，就记录。</p>
</blockquote>
<blockquote>
<p>“<strong>.=</strong>”代表只记录所需等级的日志，其他等级的日志都不记录。比如，“*.=emerg”代表人和日志服务产生的日志，只要等级是 emerg 等级，就记录。这种用法极少见，了解就好。</p>
</blockquote>
<blockquote>
<p>“<strong>.!</strong>”代表不等于，也就是除该等级的日志外，其他等级的日志都记录。</p>
</blockquote>
<ol start="3">
<li><strong>日志等级</strong></li>
</ol>
<p>每个日志的重要性都是有差别的，比如，有些日志只是系统的一个日常提醒，看不看根本不会对系统的运行产生影响；但是有些日志就是系统和服务的警告甚至报错信息，这些日志如果不处理，就会威胁系统的稳定或安全。如果把这些日志全部写入一个文件，那么很有可能因为管理员的大意而忽略重要信息。</p>
<p>比如，我们在工作中需要处理大量的邮件，每天可能会接收到 200 多封邮件。而这些邮件中的绝大多数是不需要处理的普通信息邮件，甚至是垃圾邮件。所以每天都要先把这些大量的非重要邮件删除之后，才能找到真正需要处理的邮件。但是每封邮件的标题都差不多，有时会误删除需要处理的邮件。这时就非常怀念 Linux 的日志等级，如果邮件也能标识重要等级，就不会误删除或漏处理重要邮件了。</p>
<p>邮件的等级信息也可以使用 <code>man 3 syslog</code> 命令来查看。日志等级如表6-4 所示，我们按照严重等级从低到高排列。</p>
<p><strong>表6-4	<u>日志等级</u></strong></p>
<table>
<thead>
<tr>
<th>等级名称</th>
<th>说 明</th>
</tr>
</thead>
<tbody>
<tr>
<td>debug（LOG_DEBUG）</td>
<td>一般的调试信息说明</td>
</tr>
<tr>
<td>info（LOG_INFO）</td>
<td>基本的通知信息</td>
</tr>
<tr>
<td>nolice（LOG_NOTICE）</td>
<td>普通信息，但是有一定的重要性</td>
</tr>
<tr>
<td>warning（LOG_WARNING）</td>
<td>警吿信息，但是还不会影响到服务或系统的运行</td>
</tr>
<tr>
<td>err（LOG_ERR）</td>
<td>错误信息, 一般达到 err 等级的信息已经可以影响到服务成系统的运行了</td>
</tr>
<tr>
<td>crit（LOG_CRIT）</td>
<td>临界状况信思，比 err 等级还要严重</td>
</tr>
<tr>
<td>alert（LOG_ALERT）</td>
<td>状态信息，比 crit 等级还要严重，必须立即采取行动</td>
</tr>
<tr>
<td>emerg（LOG_EMERG）</td>
<td>疼痛等级信息，系统已经无法使用了</td>
</tr>
<tr>
<td>*</td>
<td>代表所有日志等级。比如，“authpriv.*”代表 amhpriv 认证信息服务产生的日志，所有的日志等级都记录</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">补充</p>
<p>日志等级还可以被识别为“none”。如果日志等级是 none，就说明忽略这个日志服务，该服务的所有日志都不再记录。</p>
</div>
<ol start="4">
<li><strong>日志记录位置</strong></li>
</ol>
<p>日志记录位置就是当前日志输出到哪个日志文件中保存，当然也可以把日志输出到打印机打印，或者输出到远程日志服务器上（当然，远程日志服务器要允许接收才行）。日志的记录位置也是固定的：</p>
<ul>
<li>日志文件的绝对路径。这是最常见的日志保存方法，如 <code>/var/log/secure</code> 就是用来保存系统验证和授权信息日志的。</li>
<li>系统设备文件。如 <code>/dev/lp0</code> 代表第一台打印机，如果日志保存位置是打印机设备，当有日志时就会在打印机上打印。</li>
<li>转发给远程主机。因为可以选择使用 TCP 和 UDP 协议传输日志信息，所以有两种发送格式：如果使用 <code>@192.168.0.210:514</code>，就会把日志内容使用 UDP 协议发送到192.168.0.210 的 UDP 514 端口上；如果使用 <code>@@192.168.0.210:514</code>，就会把日志内容使用 TCP 协议发送到 192.168.0.210 的 TCP 514 端口上，其中 <strong>514 是日志服务默认端口</strong>。当然，只要 192.168.0.210 同意接收此日志，就可以把日志内容保存在日志服务器上。</li>
<li>用户名。如果是“root”，就会把日志发送给 root 用户，当然 root 要在线，否则就收不到日志信息了。发送日志给用户时，可以使用“*”代表发送给所有在线用户，如 <code>mail.**</code>就会把 mail 服务产生的所有级别的日志发送给所有在线用户。如果需要把日志发送给多个在线用户，则用户名之间用“,”分隔。</li>
<li>忽略或丢弃日志。如果接收日志的对象是“~”，则代表这个日志不会被记录，而被直接丢弃。如“local3.* ~”代表忽略 local3 服务类型所有的日志都不记录。</li>
</ul>
<h4 id="etc-rsyslog-conf-配置文件的内容" tabindex="-1"><a class="header-anchor" href="#etc-rsyslog-conf-配置文件的内容" aria-hidden="true">#</a> /etc/rsyslog.conf 配置文件的内容</h4>
<p>我们知道了 <code>/etc/rsyslog.conf</code> 配置文件中日志的格式，接下来就看看这个配置文件的具体内容。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/rsyslog.conf</span>
<span class="token comment">#查看配置文件的内容</span>
<span class="token comment">#rsyslog v5 configuration file</span>

<span class="token comment"># For more information see /usr/share/doc/rsyslog-*/rsyslog_conf.html</span>
<span class="token comment"># If you experience problems, see http://www.rsyslog.com/doc/troubleshoot.html</span>

<span class="token comment">#### MODULES ####</span>
<span class="token comment">#加载棋块</span>

<span class="token variable">$ModLoad</span> imuxsock <span class="token comment"># provides support for local system logging (e.g. via logger command)</span>
<span class="token comment">#加载imixsock模块，为本地系统登录提供支持</span>
<span class="token variable">$ModLoad</span> imklog <span class="token comment"># provides kernel logging support (previously done by rklogd)</span>
<span class="token comment">#加载imklog模块，为内核登录提供支持</span>
<span class="token comment">#$ModLoad immark # provides --MARK-- message capability</span>
<span class="token comment">#加载immark模块，提供标记信息的能力</span>

<span class="token comment"># Provides UDP syslog reception</span>
<span class="token comment">#$ModLoad imudp</span>
<span class="token comment">#$UDPServerRun 514</span>
<span class="token comment">#加载UPD模块，允许使用UDP的514端口接收采用UDP协议转发的日志</span>

<span class="token comment"># Provides TCP syslog reception</span>
<span class="token comment">#$ModLoad imtcp</span>
<span class="token comment">#$InputTCPServerRun 514</span>
<span class="token comment">#加栽TCP摸块,允许使用TCP的514编口接收采用TCP协议转发的日志</span>

<span class="token comment">#### GLOBAL DIRECTIVES ####</span>
<span class="token comment">#定义全局设置</span>

<span class="token comment"># Use default timestamp format</span>
<span class="token variable">$ActionFileDefaultTemplate</span> RSYSLOG_TraditionalFileFormat
<span class="token comment">#定义曰志的时间使用默认的时间戳格式</span>

<span class="token comment"># File syncing capability is disabled by default. This feature is usually not required,</span>
<span class="token comment"># not useful and an extreme performance hit</span>
<span class="token comment">#$ActionFileEnableSync on</span>
<span class="token comment">#文件同步功能。默认没有开启,是注释的</span>

<span class="token comment"># Include all config files in /etc/rsyslog.d/</span>
<span class="token variable">$IncludeConfig</span> /etc/rsyslog.d/*.conf
<span class="token comment">#包含/etx/tsyslog.d/目录中所有的".conf"子配置文件。也就是说，这个目录中的所有子配置文件也同时生效</span>

<span class="token comment">#### RULES ####</span>
<span class="token comment">#日志文件保存规则</span>

<span class="token comment"># Log all kernel messages to the console.</span>
<span class="token comment"># Logging much else clutters up the screen.</span>
<span class="token comment">#kern.*		/dev/console</span>
<span class="token comment">#kern服务.所有曰志级别 保存在/dev/console</span>
<span class="token comment">#这个日志默认没有开启,如果需要，则取消注释</span>

<span class="token comment"># Log anything (except mail) of level info or higher.</span>
<span class="token comment"># Don't log private authentication messages!</span>
*.info<span class="token punctuation">;</span>mail.none<span class="token punctuation">;</span>authpriv.none<span class="token punctuation">;</span>cron.none		/var/log/messages
<span class="token comment">#所有服务.info以上级到的日志保存在/var/log/messages日志文件中</span>
<span class="token comment">#mail、authpriv、cron的志不记录在/var/log/messages曰志文件中，因为它们部有自己的曰志文件</span>
<span class="token comment">#所以/var/log/messages日志是最重要的系统日志文件，需要经常查看</span>

<span class="token comment"># The authpriv file has restricted access.</span>
authpriv.*		/var/log/secure
<span class="token comment">#用户认证服务所有级别的日志保存在/vai/1og/secure日志文件中</span>

<span class="token comment"># Log all the mail messages in one place.</span>
mail.*			-/var/log/maillog
<span class="token comment">#mail服务的所有级别的日志保存在/var/log/maillog 日志文件中</span>
<span class="token comment">#"-"的含义是日志先在内存中保存，当曰志足够多之后，再向文件中保存</span>

<span class="token comment"># Log cron stuff</span>
cron.*			/var/log/cron
<span class="token comment">#计対任务的所有日志保存在/var/log/cron日志文件中</span>

<span class="token comment"># Everybody gets emergency messages</span>
*.emerg			*
<span class="token comment">#所有日志服务的疼痛等级日志对所有在线用户广播</span>

<span class="token comment"># Save news errors of level crit and higher in a special file.</span>
uucp,news.crit	/var/log/spooler
<span class="token comment">#uucp和news曰志服务的crit以上级别的日志保存在/var/log/sppoler曰志文件中</span>

<span class="token comment"># Save boot messages also to boot.log</span>
local7.*		/var/log/boot.log
<span class="token comment">#loacl7 日志服务的所有日志写入/var/log/boot.log 日志文件中</span>
<span class="token comment">#会把开机时的检测信息在显示到屏幕的同时写入/var/log/boot.log 日志文件中</span>

<span class="token comment"># ### begin forwarding rule ###</span>
<span class="token comment">#定义转发规到</span>
<span class="token comment"># The statement between the begin ... end define a SINGLE forwarding</span>
<span class="token comment"># rule. They belong together, do NOT split them. If you create multiple</span>
<span class="token comment"># forwarding rules, duplicate the whole block!</span>
<span class="token comment"># Remote Logging (we use TCP for reliable delivery)</span>
<span class="token comment">#</span>
<span class="token comment"># An on-disk queue is created for this action. If the remote host is</span>
<span class="token comment"># down, messages are spooled to disk and sent when it is up again.</span>
<span class="token comment">#SWorkDirectory /var/lib/rsyslog # where to place spool files</span>
<span class="token comment">#$ActionQueueFileName fwdRulel # unique name prefix for spool files</span>
<span class="token comment">#$ActionQueueMaxDiskSpace 1g # 1gb space limit (use as much as possible)</span>
<span class="token comment">#$ActionQueueSaveOnShutdown on # save messages to disk on shutdown</span>
<span class="token comment">#$ActionQueueType LinkedList t run asynchronously</span>
<span class="token comment">#$ActionResumeRetryCount -1 # infinite retries if host is down</span>
<span class="token comment"># remote host is: name/ip:port, e.g. 192.168.0.1:514, port optional</span>
<span class="token comment">#*•* @6remote-host:514</span>
<span class="token comment"># ### end of the forwarding rule ##</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br></div></div><p>其实系统已经非常完善地定义了这个配置文件的内容，系统中重要的日志也已经记录得非常完备。如果是外来的服务，如 apache、Samba  等服务，那么这些服务的配置文件中也详细定义了日志的记录格式和记录方法。所以，日志的配置文件基本上不需要我们修改，我们要做的仅仅是查看和分析系统记录好的日志而已。</p>
<h4 id="定义自己的日志" tabindex="-1"><a class="header-anchor" href="#定义自己的日志" aria-hidden="true">#</a> 定义自己的日志</h4>
<p>如果想要定义自己的日志可以吗？当然可以，只需在 <code>/etc/rsyslog.conf</code> 配置文件中按照格式写入即可。当然 rsyslogd 服务可以识别的日志服务只有前表中列出的这么多。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/rsyslog.conf</span>
<span class="token comment">#写入以下这句话</span>
*.crit			/var/log/alert.log
<span class="token comment">#把所有服务的“临界点”以上的错误都保存在/var/log/alert.log 日志中</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># service rsyslog restart</span>
关闭系统日志记录器:						<span class="token punctuation">[</span>确定<span class="token punctuation">]</span>
启动系统日志记录器：						<span class="token punctuation">[</span>确定<span class="token punctuation">]</span>
<span class="token comment">#重启rsyslog 服务</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll /var/log/alert.log</span>
-rw-------. <span class="token number">1</span> root root <span class="token number">0</span>  <span class="token number">6</span> 月 <span class="token number">5</span> <span class="token number">10</span>:33 /var/log/alert.log
<span class="token comment">#alert.log 日志就生成了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>这样 <code>/var/log/alert.log</code> 日志就生成了。如果这个日志中出现任何信息，则应该是比较危险的错误信息，应该引起警惕。</p>
<h4 id="日志服务器设置" tabindex="-1"><a class="header-anchor" href="#日志服务器设置" aria-hidden="true">#</a> 日志服务器设置</h4>
<p>我们知道，使用 <code>@IP:端口</code> 或 <code>@@IP:端口</code> 的格式可以把日志发送到远程主机上，那么这么做有什么意义吗？</p>
<p>假设我需要管理几十台服务器，那么我每天的重要工作就是查看这些服务器的日志，可是每台服务器单独登录，并且查看日志非常烦琐，我可以把几十台服务器的日志集中到一台日志服务器上吗？这样我每天只要登录这台日志服务器，就可以查看所有服务器的日志，要方便得多。</p>
<p>如何实现日志服务器的功能呢？其实并不难，不过我们首先需要分清服务器端和客户端。假设服务器端的服务器 IP 地址是 192.168.0.210，主机名是 localhost.localdomain；客户端的服务器 IP 地址是 192.168.0.211，主机名是 www1。我们现在要做的是把 192.168.0.211 的日志保存在 192.168.0.210 这台服务器上。实验过程如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#服务器端设定（192.168.0.210）：</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/rsyslog.conf</span>
<span class="token punctuation">..</span>.省略部分输出<span class="token punctuation">..</span>.
<span class="token comment"># Provides TCP syslog reception</span>
<span class="token variable">$ModLoad</span> imtcp
<span class="token variable">$InputTCPServerRun</span> <span class="token number">514</span>
<span class="token comment">#取消这两句话的注释，允许服务器使用TCP 514端口接收日志</span>
<span class="token punctuation">..</span>.省略部分输出<span class="token punctuation">..</span>.

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># service rsyslog restart</span>
<span class="token comment">#重启rsyslog日志服务</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># netstat -tlun | grep 514</span>
tcp <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0.0</span>.0.0：514 <span class="token number">0.0</span>.0.0：* LISTEN
<span class="token comment">#查看514端口已经打开</span>
<span class="token comment">#==================================================</span>
<span class="token comment">#客户端设置（192.168.0.211）：</span>
<span class="token punctuation">[</span>root@www1 ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/rsyslog.conf</span>
<span class="token comment">#修改日志服务配置文件</span>
*.* @@192.168.0.210:514
<span class="token comment">#把所有日志采用TCP协议发送到192.168.0.210的514端口上</span>
<span class="token punctuation">[</span>root@www1 ~<span class="token punctuation">]</span><span class="token comment"># service rsyslog restart</span>
<span class="token comment">#重启日志服务</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>这样日志服务器和客户端就搭建完成了，以后 192.168.0.211 这台客户机上所产生的所有日志都会记录到 192.168.0.210 上。比如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#在客户机上(192.168.0.211)</span>
<span class="token punctuation">[</span>root@wwwl ~<span class="token punctuation">]</span><span class="token comment"># useradd zhangsan</span>
<span class="token comment">#添加zhansan用户提示符的主机名是www1</span>
<span class="token comment">#==================================================</span>
<span class="token comment">#在限务器(192.168.0.210)上</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi /var/log/secure</span>
<span class="token comment">#査看服务器的secure日志(注意:主机名是localhost)</span>
Aug <span class="token number">8</span> <span class="token number">23</span>:00:57 wwwl sshd<span class="token punctuation">[</span><span class="token number">1408</span><span class="token punctuation">]</span>: Server listening on <span class="token number">0.0</span>.0.0 port <span class="token number">22</span>.
Aug <span class="token number">8</span> <span class="token number">23</span>:00:57 wwwl sshd<span class="token punctuation">[</span><span class="token number">1408</span><span class="token punctuation">]</span>: Server listening on :: port <span class="token number">22</span>.
Aug <span class="token number">8</span> <span class="token number">23</span>:01:58 wwwl sshd<span class="token punctuation">[</span><span class="token number">1630</span><span class="token punctuation">]</span>: Accepted password <span class="token keyword">for</span> root from <span class="token number">192.168</span>.0.101 port <span class="token number">7036</span> ssh2
Aug <span class="token number">8</span> <span class="token number">23</span>:01:58 wwwl sshd<span class="token punctuation">[</span><span class="token number">1630</span><span class="token punctuation">]</span>: pam_unix<span class="token punctuation">(</span>sshd:session<span class="token punctuation">)</span>: session opened <span class="token keyword">for</span> user root by <span class="token punctuation">(</span>uid<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
Aug <span class="token number">8</span> <span class="token number">23</span>:03:03 wwwl useradd<span class="token punctuation">[</span><span class="token number">1654</span><span class="token punctuation">]</span>: new group: <span class="token assign-left variable">name</span><span class="token operator">=</span>zhangsan, GID-505
Aug <span class="token number">8</span> <span class="token number">23</span>:03:03 wwwl useradd<span class="token punctuation">[</span><span class="token number">1654</span><span class="token punctuation">]</span>: new user: <span class="token assign-left variable">name</span><span class="token operator">=</span>zhangsan, <span class="token assign-left variable">UXD</span><span class="token operator">=</span><span class="token number">505</span>, <span class="token assign-left variable">GID</span><span class="token operator">=</span><span class="token number">505</span>,home<span class="token operator">=</span>/home/zhangsan, <span class="token assign-left variable">shell</span><span class="token operator">=</span>/bin/bash
Aug <span class="token number">8</span> <span class="token number">23</span>:03:09 wwwl passwd: pam_unix<span class="token punctuation">(</span>passwd:chauthtok<span class="token punctuation">)</span>: password changed <span class="token keyword">for</span> zhangsan
<span class="token comment">#注意：查看到的日志内容的主机名是www1，说明我们虽然查看的是服务器的日志文件，但是在其中可以看到客户机的日志内容</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>需要注意的是，日志服务是通过主机名来区别不同的服务器的。所以，如果我们配置了日志服务，则需要给所有的服务器分配不同的主机名。</p>
<h2 id="日志轮替" tabindex="-1"><a class="header-anchor" href="#日志轮替" aria-hidden="true">#</a> 日志轮替</h2>
<p>日志是重要的系统文件，记录和保存了系统中所有的重要事件。但是日志文件也需要进行定期的维护，因为日志文件是不断增长的，如果完全不进行日志维护，而任由其随意递增，那么用不了多久，我们的硬盘就会被写满。</p>
<p>**日志维护的最主要的工作就是把旧的日志文件删除，从而腾出空间保存新的日志文件。**这项工作如果靠管理员手工来完成，那其实是非常烦琐的，而且也容易忘记。那么 Linux 系统是否可以自动完成日志的轮替工作呢？</p>
<p>logrotate 就是用来进行日志轮替（也叫日志转储）的，也就是把旧的日志文件移动并改名，同时创建一个新的空日志文件用来记录新日志，当旧日志文件超出保存的范围时就删除。</p>
<h3 id="日志文件的命名规则" tabindex="-1"><a class="header-anchor" href="#日志文件的命名规则" aria-hidden="true">#</a> 日志文件的命名规则</h3>
<p>日志轮替最主要的作用就是把旧的日志文件移动并改名，同时建立新的空日志文件，当旧日志文件超出保存的范围时就删除。那么，旧的日志文件改名之后，如何命名呢？主要依靠 <code>/etc/logrotate.conf</code> 配置文件中的“dateext”参数。</p>
<p>如果配置文件中有“dateext”参数，那么日志会用日期来作为日志文件的后缀，如“secure-20130605”。这样日志文件名不会重叠，也就不需要对日志文件进行改名，只需要保存指定的日志个数，删除多余的日志文件即可。</p>
<p>如果配置文件中没有“dateext”参数，那么日志文件就需要进行改名了。当第一次进行日志轮替时，当前的“secure”日志会自动改名为“secure.1”，然后新建“secure”日志，用来保存新的日志；当第二次进行日志轮替时，“secure.1”会自动改名为“secure.2”，当前的“secure”日志会自动改名为“secure.1”，然后也会新建“secure”日志，用来保存新的日志；以此类推。</p>
<h3 id="logrotate-配置文件" tabindex="-1"><a class="header-anchor" href="#logrotate-配置文件" aria-hidden="true">#</a> logrotate 配置文件</h3>
<p>我们来查看一下 logrotate 的配置文件 <code>/etc/logrotate.conf</code> 的默认内容。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/logrotate.conf</span>
<span class="token comment"># see "man logrotate" for details</span>
<span class="token comment"># rotate log files weekly</span>
weekly
<span class="token comment">#每周对日志文件进行一次轮替</span>

<span class="token comment"># keep 4 weeks worth of backlogs</span>
rotate <span class="token number">4</span>
<span class="token comment">#保存4个日志文件,也就是说,如果进行了5次日志轮替，就会删除第一个备份曰志</span>

<span class="token comment"># create new (empty) log files after rotating old ones</span>
create
<span class="token comment">#在日志轮替时,自动创建新的日志文件</span>

<span class="token comment"># use date as a suffix of the rotated file</span>
dateext
<span class="token comment">#使用日期作为日志轮替文件的后缀</span>

<span class="token comment"># uncomment this if you want your log files compressed</span>
<span class="token comment">#compress</span>
<span class="token comment">#日志文件是否压缩。如果取消注释,则日志会在转储的同时进行压缩</span>
<span class="token comment">#以上日志配置为默认配置,如果需要轮替的日志没有设定独立的参数,那么都会遵循以上参数</span>
<span class="token comment">#如果轮替曰志配置了独立参数,那么独立参数的优先级更高</span>

<span class="token comment"># RPM packages drop log rotation information into this directory</span>
include /etc/logrotate.d
<span class="token comment">#包含/etc/logrotate.d/目录中所有的子配置文件。也就是说,会把这个目录中所有的子配置文件读取进来，进行日志轮替</span>

<span class="token comment"># no packages own wtmp and btmp -- we'11 rotate them here</span>
<span class="token comment">#以下两个轮替曰志有自己的独立参数，如果和默认的参数冲突，则独立参数生效</span>
/var/log/wtmp <span class="token punctuation">{</span>
<span class="token comment">#以下参数仅对此目录有效</span>
monthly
<span class="token comment">#每月对日志文件进行一次轮替</span>
create 0664 root utmp
<span class="token comment">#建立的新日志文件,权限是0664,所有者是root,所属组是utmp组</span>
	minsize 1M
	<span class="token comment">#日志文件最小轮替大小是1MB。也就是日志一定要超过1MB才会轮替，否则就算时间达到一个月，也不进行曰志轮替</span>
rotate <span class="token number">1</span>
<span class="token comment">#仅保留一个曰志备份。也就是只保留wtmp和wtmp.1曰志)</span>
<span class="token punctuation">}</span>

/var/log/btmp <span class="token punctuation">{</span>
<span class="token comment">#以下参数只对/var/log/btmp生效</span>
missingok
<span class="token comment">#如果日志不存在,则忽略该日志的警告信患</span>
	monthly
	create 0600 root utmp
	rotate <span class="token number">1</span>
<span class="token punctuation">}</span>
<span class="token comment"># system-specific logs may be also be configured here.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><p>在这个配置文件中，主要分为三部分：</p>
<ul>
<li>第一部分是默认设置，如果需要转储的日志文件没有特殊配置，则遵循默认设置的参数；</li>
<li>第二部分是读取 <code>/etc/logrotate.d/</code> 目录中的日志轮替的子配置文件，也就是说，在 <code>/etc/logrotate.d/</code> 目录中的所有符合语法规则的子配置文件也会进行日志轮替；</li>
<li>第三部分是对 wtmp 和 btmp 日志文件的轮替进行设定，如果此设定和默认参数冲突，则当前设定生效（如 wtmp 的当前参数设定的轮替时间是每月，而默认参数的轮替时间是每周，则对 wtmp 这个日志文件来说，轮替时间是每月，当前的设定参数生效）。</li>
</ul>
<p>logrotate 配置文件的主要参数如表6-5 所示。</p>
<p><strong>表6-5	<u>logrotate 配置文件的主要参数</u></strong></p>
<table>
<thead>
<tr>
<th>参 致</th>
<th>参数说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>daily</td>
<td>日志的轮替周期是毎天</td>
</tr>
<tr>
<td>weekly</td>
<td>日志的轮替周期是每周</td>
</tr>
<tr>
<td>monthly</td>
<td>日志的轮控周期是每月</td>
</tr>
<tr>
<td>rotate 数宇</td>
<td>保留的日志文件的个数。0 指没有备份</td>
</tr>
<tr>
<td>compress</td>
<td>当进行日志轮替时，对旧的日志进行压缩</td>
</tr>
<tr>
<td>create mode owner group</td>
<td>建立新日志，同时指定新日志的权限与所有者和所属组。如 create 0600 root utmp。</td>
</tr>
<tr>
<td>mail address</td>
<td>当进行日志轮替时.输出内存通过邮件发送到指定的邮件地址</td>
</tr>
<tr>
<td>missingok</td>
<td>如果日志不存在，则忽略该日志的警告信息</td>
</tr>
<tr>
<td>nolifempty</td>
<td>如果曰志为空文件，則不进行日志轮替</td>
</tr>
<tr>
<td>minsize 大小</td>
<td>日志轮替的最小值。也就是日志一定要达到这个最小值才会进行轮持，否则就算时间达到也不进行轮替</td>
</tr>
<tr>
<td>size 大小</td>
<td>日志只有大于指定大小才进行日志轮替，而不是按照时间轮替，如 size 100k</td>
</tr>
<tr>
<td>dateext</td>
<td>使用日期作为日志轮替文件的后缀，如 secure-20130605</td>
</tr>
<tr>
<td>sharedscripts</td>
<td>在此关键宇之后的脚本只执行一次</td>
</tr>
<tr>
<td>prerotate/endscript</td>
<td>在曰志轮替之前执行脚本命令。endscript 标识 prerotate 脚本结束</td>
</tr>
<tr>
<td>postrolaie/endscript</td>
<td>在日志轮替之后执行脚本命令。endscript 标识 postrotate 脚本结束</td>
</tr>
</tbody>
</table>
<p>这些参数中较为难理解的应该是 prerotate/endscript 和 postrotate/endscript，我们利用 <code>man logrotate</code> 中的例子来解释一下这两个参数。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token string">"/var/log/httpd/access.log"</span> /var/log/httpd/error.log <span class="token punctuation">{</span>
<span class="token comment">#日志轮替的是/var/log/httpd/中RPM包默认安装的apache正确访问日志和错误日志</span>
	rotate <span class="token number">5</span>
	<span class="token comment">#轮替5次</span>
	mail www@my.org
	<span class="token comment">#把信息发送到指定邮箱</span>
	size 100k
	<span class="token comment">#日志大于100KB时才进行日志轮替,不再按照时间轮替</span>
	sharedscripts
	<span class="token comment">#以下脚本只执行一次</span>
	postrotate
	<span class="token comment">#在日志轮替结束之后,执行以下脚本</span>
		/usr/bin/killall -HUP httpd
		<span class="token comment">#重启apache 服务</span>
endscript
<span class="token comment">#脚本结束</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><u>prerotate 和 postrotate  主要用于在日志轮替的同时执行指定的脚本，一般用于日志轮替之后重启服务</u>。这里强调一下，如果你的日志是写入 rsyslog  服务的配置文件的，那么把新日志加入 logrotate 后，一定要重启 rsyslog  服务，否则你会发现，虽然新日志建立了，但数据还是写入了旧的日志当中。那是因为虽然 logrotate 知道日志轮替了，但是 rsyslog  服务并不知道。</p>
<p>同理，如果采用源码包安装了 apache、Nginx 等服务，则需要重启 apache 或 Nginx 服务，同时还要重启 rsyslog 服务，否则日志也不能正常轮替。</p>
<p>不过，这里有一个典型应用就是给予特定的日志加入 chattr 的 a 属性。如果系统文件加入了 a 属性，那么这个文件就只能增加数据，而不能删除和修改已有的数据，root 用户也不例外。</p>
<p>因此，我们会给重要的日志文件加入 a 属性，这样就可以保护日志文件不被恶意修改。不过，一旦加入了 a  属性，那么在进行日志轮替时，这个日志文件是不能被改名的，当然也就不能进行日志轮替了。我们可以利用 prerotate 和 postrotate 参数来修改日志文件的 chattr 的 a 属性。</p>
<h3 id="把自己的日志加入日志轮替" tabindex="-1"><a class="header-anchor" href="#把自己的日志加入日志轮替" aria-hidden="true">#</a> 把自己的日志加入日志轮替</h3>
<p>如果有些日志默认没有加入日志轮替（比如源码包安装的服务的日志，或者自己添加的日志），那么这些日志默认是不会进行日志轮替的，这样当然不符合我们对日志的管理要求。如果需要把这些日志也加入日志轮替，那该如何操作呢？</p>
<p>这里有两种方法：</p>
<ul>
<li>第一种方法是直接在 <code>/etc/logrotate.conf</code> 配置文件中写入该日志的轮替策略，从而把日志加入轮替；</li>
<li>第二种方法是在 <code>/etc/logrotate.d/</code> 目录中新建立该日志的轮替文件，在该轮替文件中写入正确的轮替策略，因为该目录中的文件都会被包含到主配置文件中，所以也可以把日志加入轮替。</li>
</ul>
<p>我们推荐第二种方法，因为系统中需要轮替的日志非常多，如果全部直接写入 <code>/etc/logrotate.conf</code> 配置文件，那么这个文件的可管理性就会非常差，不利于此文件的维护。</p>
<p>说起来很复杂，我们举个例子。还记得我们自己生成的 <code>/var/log/alert.log</code> 日志吗？这个日志不是系统默认日志，而是我们通过 <code>/etc/rsyslog.conf</code> 配置文件自己生成的日志，所以默认这个日志是不会进行轮替的。如果我们需要把这个日志加入日志轮替策略，那该怎么实现呢？我们采用第二种方法，也就是在  <code>/etc/logrotate.d/</code> 目录中建立此日志的轮替文件。</p>
<p>具体步骤如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># chattr +a /var/log/alert.log</span>
<span class="token comment">#先给日志文件赋予chattr的a属性，保证日志的安全</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/logrotate.d/alter</span>
<span class="token comment">#创建alter轮替文件,把/var/log/alert.log加入轮替</span>
/var/log/alert.log <span class="token punctuation">{</span>
	weekly
	<span class="token comment">#每周轮替一次</span>
	rotate <span class="token number">6</span>
	<span class="token comment">#保留6个轮替曰志</span>
	sharedscripts
	<span class="token comment">#以下命令只执行一次</span>
	prerotate
	<span class="token comment">#在日志轮替之前执行</span>
		/usr/bin/chattr -a /var/log/alert.log
		<span class="token comment">#在日志轮替之前取消a属性,以便让日志可以轮替</span>
	endscript
	<span class="token comment">#脚本结朿</span>

	sharedscripts
	postrotate
	<span class="token comment">#在日志轮替之后执行</span>
		/usr/bin/chattr +a /var/log/alert.log
		<span class="token comment">#在日志轮替之后,重新加入a属性</span>
	endscript

	sharedscripts
	postrotate
	/bin/kill -HUP <span class="token variable"><span class="token variable">$(</span>/bin/cat /var/run/syslogd.pid <span class="token operator"><span class="token file-descriptor important">2</span>></span>/dev/null<span class="token variable">)</span></span> <span class="token operator">&amp;></span>/dev/null
	endscript
	<span class="token comment">#重启rsyslog服务，保证日志轮替正常进行</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>这样我们自己生成的日志 <code>/var/log/alert.log</code> 也就可以进行日志轮替了，当然这些配置信息也是可以直接写入 <code>/etc/logrotate.conf</code> 这个配置文件的。</p>
<p>再举一个例子，我们如果需要把 Nginx 服务的日志加入日志轮替，则需要注意重启 Nginx 服务，当然还要重启 rsyslog 服务。例如:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>/date/logs/nginx/access/access.log /date/logs/nginx/access/default.log<span class="token punctuation">{</span>
<span class="token comment">#假设 Nginx 服务的日志放在/date/目录下</span>
	daily
	rotate <span class="token number">30</span>
	create
	compress
	sharedscripts
    postrotate
		/bin/kill -HUP <span class="token variable"><span class="token variable">$(</span>/bin/cat /var/run/syslogd.pid<span class="token variable">)</span></span> <span class="token operator">&amp;></span>/dev/null
		<span class="token comment">#重启 rsyslog 服务</span>
		/bin/k111 -HUP <span class="token variable"><span class="token variable">$(</span>/bin/cat /var/local/nginx/logs/nginx.pid<span class="token variable">)</span></span> <span class="token operator">&amp;></span>/dev/null
		<span class="token comment">#重启 Nginx 服务</span>
	endscript
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="logrotate-命令" tabindex="-1"><a class="header-anchor" href="#logrotate-命令" aria-hidden="true">#</a> logrotate 命令</h3>
<p>日志轮替之所以可以在指定的时间备份日志，是因为其依赖系统定时任务。如果大家还记得 <code>/etc/cron.daily/</code> 目录，就会发现这个目录中是有 <code>logrotate</code> 文件的，查看一下这个文件，命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/cron.daily/logrotate</span>
<span class="token comment">#!/bin/sh</span>
/usr/sbin/logrotate /etc/logrotate.conf <span class="token operator">></span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>></span><span class="token file-descriptor important">&amp;1</span>
<span class="token comment">#最主要的就是执行了logrotate命令</span>
<span class="token assign-left variable">EXITVALUE</span><span class="token operator">=</span><span class="token variable">$?</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$EXITVALUE</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
	/usr/bin/logger -t <span class="token function">logrotate</span> <span class="token string">"ALERT exited abnormally with [<span class="token variable">$EXITVALUE</span>]"</span>
<span class="token keyword">fi</span>
<span class="token builtin class-name">exit</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>也就是说，系统每天都会执行 <code>/etc/cron.daily/logrotate</code> 文件，运行这个文件中的 <code>/usr/sbin/logrotate /etc/logrotate.conf &gt;/dev/null 2&gt;&amp;1</code> 命令。<code>logrotate</code> 命令会依据 <code>/etc/logrotate.conf</code> 配置文件的配置，来判断配置文件中的日志是否符合日志轮替的条件（比如，日志备份时间已经满一周），如果符合，日志就会进行轮替。所以说，日志轮替还是由 crond 服务发起的。</p>
<p><code>logrotate</code> 命令的格式是什么样的呢？我们来学习一下。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># logrotate [选项] 配置文件名</span>
选项：
		如果此命令没有选项，则会按照配置文件中的条件进行日志轮替
	-v：显示日志轮替过程。加入了-v 选项，会显示日志的轮替过程
	-f：强制进行日志轮替。不管日志轮替的条件是否符合，强制配置文件中所有的日志进行轮替
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>我们执行 <code>logrotate</code> 命令，并查看一下执行过程。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># logrotate -v /etc/logrotate.conf</span>
<span class="token comment">#查看日志轮替的流程</span>
<span class="token punctuation">..</span>.省略部分输出<span class="token punctuation">..</span>.
rotating pattern: /var/log/alert.log weekly <span class="token punctuation">(</span><span class="token number">6</span> rotations<span class="token punctuation">)</span>
<span class="token comment">#这就是我们自己加入轮替的alert.log日志</span>
empty log files are rotated， old logs are removed
considering log /var/log/alert.log
log does not need rotating
<span class="token comment">#时间不够一周，所以不进行日志轮替</span>
<span class="token punctuation">..</span>.省略部分输出<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>我们发现，<code>/var/log/alert.log</code> 加入了日志轮替，已经被 <code>logrotate</code> 识别并调用了，只是时间没有达到轮替的标准，所以没有进行轮替。那我们强制进行一次日志轮替，看看会有什么结果。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># logrotate -vf /etc/logrotate.conf</span>
<span class="token comment">#强制进行日志轮替，不管是否符合轮替条件</span>
<span class="token punctuation">..</span>.省略部分输出<span class="token punctuation">..</span>.
rotating pattern: /var/log/alert.log forced from <span class="token builtin class-name">command</span> line <span class="token punctuation">(</span><span class="token number">6</span> rotations<span class="token punctuation">)</span>
empty log files are rotated， old logs are removed
considering log /var/log/alert.log
log needs rotating
<span class="token comment">#日志需要轮替</span>
rotating log /var/log/alert.log, log-<span class="token operator">></span>rotateCount is <span class="token number">6</span>
dateext suffix <span class="token string">'-20130607'</span>
<span class="token comment">#提取日期参数</span>
glob pattern <span class="token string">'-[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'</span>
glob finding old rotated logs failed
running prerotate script
fscreate context <span class="token builtin class-name">set</span> to unconfined_u：object_r：var_log_t：s0
renaming /var/log/alert.log to /var/log/alert.log-20130607
<span class="token comment">#旧的日志被重命名</span>
creating new /var/log/alert.log mode <span class="token operator">=</span> 0600 uid <span class="token operator">=</span> <span class="token number">0</span> gid <span class="token operator">=</span> <span class="token number">0</span>
<span class="token comment">#创建新日志文件，同时指定权限、所有者和属组</span>
running postrotate script
<span class="token punctuation">..</span>.省略部分输出<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>我们发现，<code>alert.log</code> 日志已经完成了日志轮替。查看一下新生成的日志和旧日志，如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll /var/log/alert.log*</span>
-rw-------.1 root root   <span class="token number">0</span> <span class="token number">6</span>月 <span class="token number">7</span> <span class="token number">10</span>：07 /var/log/alert.log
-rw-------.1 root root <span class="token number">237</span> <span class="token number">6</span>月 <span class="token number">7</span> 09：58 /var/log/alert.log-20130607
<span class="token comment">#旧的日志文件已经轮替</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># lsattr /var/log/alert.log</span>
-----a-------e- /var/log/alert.log
<span class="token comment">#查看文件属性，新的日志文件被自动加入了chattr的a属性</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>logrotate 命令在使用“-f”选项之后，就会不管日志是否符合轮替条件，而强制把所有的日志都进行轮替。</p>
<h2 id="日志分析工具" tabindex="-1"><a class="header-anchor" href="#日志分析工具" aria-hidden="true">#</a> 日志分析工具</h2>
<p>日志是非常重要的系统文件，管理员每天的重要工作就是分析和查看服务器的日志，判断服务器的健康状态。但是日志管理又是一项非常枯燥的工作，如果需要管理员手工查看服务器上所有的日志，那实在是一项非常痛苦的工作。有些管理员就会偷懒，省略日志的检测工作，但是这样做非常容易导致服务器出现问题。</p>
<p>那么我们有取代的方案吗？有，那就是日志分析工具。这些日志分析工具会详细地查看日志，同时分析这些日志，并且把分析的结果通过邮件的方式发送给 root 用户。这样，我们每天只要查看日志分析工具的邮件，就可以知道服务器的基本情况，而不用挨个检查日志了。这样系统管理员就可以从繁重的日常工作中解脱出来，去处理更加重要的工作。</p>
<p>在 CentOS 中自带了一个日志分析工具，就是 <code>logwatch</code>。不过这个工具默认没有安装（因为我们选择的是“Basic Server”），所以需要手工安装。安装命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost Packages<span class="token punctuation">]</span><span class="token comment"># yum -y install logwatch</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>安装完成之后，需要手工生成 <code>logwatch</code> 的配置文件。默认配置文件是 <code>/etc/logwatch/conf/logwatch.conf</code>，不过这个配置文件是空的，需要把模板配置文件复制过来。命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cp /usr/share/logwatch/default.conf/logwatch.conf /etc/logwatch/conf/logwatch.conf</span>
<span class="token comment">#复制配置文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这个配置文件的内容中绝大多数是注释，我们把注释去掉，那么这个配置文件的内容如下所示：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/logwatch/conf/logwatch.conf</span>
<span class="token comment">#查看配置文件</span>
LogDir <span class="token operator">=</span> /var/log
<span class="token comment">#logwatch会分析和统计/var/log/中的日志</span>
TmpDir <span class="token operator">=</span> /var/cache/logwatch
<span class="token comment">#指定logwatch的临时目录</span>
MailTo <span class="token operator">=</span> root
<span class="token comment">#日志的分析结果，给root用户发送邮件</span>
MailFrom <span class="token operator">=</span> Logwatch
<span class="token comment">#邮件的发送者是Logwatch，在接收邮件时显示</span>
Print <span class="token operator">=</span>
<span class="token comment">#是否打印。如果选择“yes”，那么日志分析会被打印到标准输出，而且不会发送邮件。我们在这里不打印，而是给root用户发送邮件</span>
<span class="token comment">#Save = /tmp/logwatch</span>
<span class="token comment">#如果开启这一项，日志分析就不会发送邮件，而是保存在/tmp/logwatch文件中</span>
Range <span class="token operator">=</span> yesterday
<span class="token comment">#分析哪天的日志。可以识别“All”“Today”“Yesterday”，用来分析“所有日志”“今天日志”“昨天日志”</span>
Detail <span class="token operator">=</span> Low
<span class="token comment">#日志的详细程度。可以识别“Low”“Med”“High”。也可以用数字表示，范围为0～10，“0”代表最不详细，“10”代表最详细</span>
Service <span class="token operator">=</span> All
<span class="token comment">#分析和监控所有日志</span>
Service <span class="token operator">=</span> <span class="token string">"-zz-network"</span>
<span class="token comment">#但是不监控“-zz-network”服务的日志。“-服务名”表示不分析和监控此服务的日志</span>
Service <span class="token operator">=</span> <span class="token string">"-zz-sys"</span>
Service <span class="token operator">=</span> <span class="token string">"-eximstats"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>这个配置文件基本不需要修改（我在实验时把 Range 项改为了 All，否则一会儿的实验可以分析的日志过少），它就会默认每天执行。它为什么会每天执行呢？聪明的你已经想到了，一定是 <code>crond</code> 服务的作用。没错，logwatch 一旦安装，就会在 <code>/etc/cron.daily/</code> 目录中建立 <code>0logwatch</code> 文件，用于在每天定时执行 <code>logwatch</code> 命令，分析和监控相关日志。</p>
<p>如果想要让这个日志分析马上执行，则只需执行 <code>logrotate</code> 命令即可。命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># logwatch</span>
<span class="token comment">#马上执行logwatch日志分析工具</span>
<span class="token punctuation">[</span>root01ocalhost ~<span class="token punctuation">]</span><span class="token comment"># mail</span>
<span class="token comment">#查看邮件</span>
Heirloom Mail version <span class="token number">12.4</span> <span class="token number">7</span>/29/08. Type ? <span class="token keyword">for</span> help, <span class="token string">"/var/spool/mail/root"</span><span class="token builtin class-name">:</span> <span class="token number">5</span> messages <span class="token number">1</span> new <span class="token number">2</span> unread
   <span class="token number">1</span> logwatch@localhost.1 Fri Jun <span class="token number">7</span> <span class="token number">11</span>:17 <span class="token number">42</span>/1482 <span class="token string">"Logwatch for localhost.localdomain (Linux)"</span>
 U <span class="token number">2</span> logwatch@localhost.1 Fri Jun <span class="token number">7</span> <span class="token number">11</span>:19 <span class="token number">42</span>/1481 <span class="token string">"Logwatch for localhost.localdomain (Linux)"</span>
   <span class="token number">3</span> logwatch@localhost.1 Fri Jun <span class="token number">7</span> <span class="token number">11</span>:23 <span class="token number">1234</span>/70928 <span class="token string">"Logwatch for localhost.localdomain (Linux)"</span>
   <span class="token number">4</span> logwatch@localhost.1 Fri Jun <span class="token number">7</span> <span class="token number">11</span>:24 <span class="token number">190</span>/5070 <span class="token string">"Logwatch for localhost.localdomain (Linux)"</span>
   <span class="token number">5</span> logwatch@localhost.1 Fri Jun <span class="token number">7</span> <span class="token number">11</span>:55 <span class="token number">41</span>/1471 <span class="token string">"Logwatch for localhost.localdomain (Linux)"</span>
<span class="token operator">></span>N <span class="token number">6</span> logwatch@localhost.1 Fri Jun <span class="token number">7</span> <span class="token number">11</span>:57 <span class="token number">189</span>/5059 <span class="token string">"Logwatch for localhost.localdomain (Linux)"</span>
<span class="token comment">#第6封邮件就是刚刚生成的曰志分析邮件，"N"代表没有查看</span>
<span class="token operator">&amp;</span> <span class="token number">6</span>
Message <span class="token number">6</span>:
From root@localhost.localdomain Fri Jun <span class="token number">7</span> <span class="token number">11</span>:57:35 <span class="token number">2013</span>
Return-Path: <span class="token operator">&lt;</span>root@localhost.localdomain<span class="token operator">></span>
X-Original-To: root
Delivered-To: root@localhost.localdomain
To: root@localhost.localdomain
From: logwatch@localhost.localdomain
Subject: Logwatch <span class="token keyword">for</span> localhost.localdomain <span class="token punctuation">(</span>Linux<span class="token punctuation">)</span>
Content-Type: text/plain<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span><span class="token string">"iso-8859-1"</span>
Date: Fri, <span class="token number">7</span> Jun <span class="token number">2013</span> <span class="token number">11</span>:57:33 +0800 <span class="token punctuation">(</span>CST<span class="token punctuation">)</span>
Status: R
<span class="token comment">######## Logwatch 7.3.6 (05/19/07) ################</span>
	Processing Initiated: Fri Jun <span class="token number">7</span> <span class="token number">11</span>:57:33 <span class="token number">2013</span>
	Date Range Processed: all
  Detail Level of Output: <span class="token number">0</span>
	      Type of Output: unformatted
	   Logfiles <span class="token keyword">for</span> Host: localhost.localdomain
<span class="token comment">###################################################</span>
<span class="token comment">#上面是曰志分析的时间和日期</span>
<span class="token punctuation">..</span>.省略部分输出<span class="token punctuation">..</span>.
--------- Connections <span class="token punctuation">(</span>secure-log<span class="token punctuation">)</span> Begin-----------
<span class="token comment">#分析secure.log日志的内容。统计新建立了哪些用户和组，以及错误登录信息 New Users：</span>
  bb <span class="token punctuation">(</span><span class="token number">501</span><span class="token punctuation">)</span>
  def <span class="token punctuation">(</span><span class="token number">503</span><span class="token punctuation">)</span>
  hjk <span class="token punctuation">(</span><span class="token number">504</span><span class="token punctuation">)</span>
  zhangsan <span class="token punctuation">(</span><span class="token number">505</span><span class="token punctuation">)</span>
  dovecot <span class="token punctuation">(</span><span class="token number">97</span><span class="token punctuation">)</span>
  dovenull <span class="token punctuation">(</span><span class="token number">498</span><span class="token punctuation">)</span>
  aa <span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span>
 
New Groups:
  bb <span class="token punctuation">(</span><span class="token number">501</span><span class="token punctuation">)</span>
  def <span class="token punctuation">(</span><span class="token number">503</span><span class="token punctuation">)</span>
  hjk <span class="token punctuation">(</span><span class="token number">504</span><span class="token punctuation">)</span>
  zhangsan <span class="token punctuation">(</span><span class="token number">505</span><span class="token punctuation">)</span>
  dovecot <span class="token punctuation">(</span><span class="token number">97</span><span class="token punctuation">)</span>
  dovenull <span class="token punctuation">(</span><span class="token number">498</span><span class="token punctuation">)</span>
  aa <span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span>
 
Failed logins:
  User root:
  	<span class="token punctuation">(</span>null<span class="token punctuation">)</span>: <span class="token number">3</span> Time<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
 
Root logins on tty's: <span class="token number">7</span> Time<span class="token punctuation">(</span>s<span class="token punctuation">)</span>.
**Unmatched Entries**
	groupadd: group added to /etc/group: <span class="token assign-left variable">name</span><span class="token operator">=</span>dovecot, <span class="token assign-left variable">GID</span><span class="token operator">=</span><span class="token number">97</span>: <span class="token number">1</span> Time<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
	groupadd: group added to /etc/group: <span class="token assign-left variable">name</span><span class="token operator">=</span>dovenull, <span class="token assign-left variable">GID</span><span class="token operator">=</span><span class="token number">498</span>: <span class="token number">1</span> Time<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
	groupadd: group added to /etc/gshadow: <span class="token assign-left variable">name</span><span class="token operator">=</span>dovecot: <span class="token number">1</span> Time<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
	groupadd: group added to /etc/gshadow: <span class="token assign-left variable">name</span><span class="token operator">=</span>dovenull: <span class="token number">1</span> Time<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
--------Connections <span class="token punctuation">(</span>secure-log<span class="token punctuation">)</span>End-------

-------------SSHD Begin-------------------
<span class="token comment">#分析SSHD的日志。可以知道哪些IP地址连接过服务器</span>

SSHD Killed: <span class="token number">7</span> Time<span class="token punctuation">(</span>s<span class="token punctuation">)</span>

SSHD Started: <span class="token number">24</span> Time<span class="token punctuation">(</span>s<span class="token punctuation">)</span>

Users logging <span class="token keyword">in</span> through sshd:
	root:
		<span class="token number">192.168</span>.0.104: <span class="token number">10</span> <span class="token builtin class-name">times</span>
		<span class="token number">192.168</span>.0.108: <span class="token number">8</span> <span class="token builtin class-name">times</span>
		<span class="token number">192.168</span>.0.101: <span class="token number">6</span> <span class="token builtin class-name">times</span>
		<span class="token number">192.168</span>.0.126: <span class="token number">4</span> <span class="token builtin class-name">times</span>
		<span class="token number">192.168</span>.0.100: <span class="token number">3</span> <span class="token builtin class-name">times</span>
		<span class="token number">192.168</span>.0.105: <span class="token number">3</span> <span class="token builtin class-name">times</span>
		<span class="token number">192.168</span>.0.106: <span class="token number">2</span> <span class="token builtin class-name">times</span>
		<span class="token number">192.168</span>.0.102: <span class="token number">1</span> <span class="token function">time</span>
		<span class="token number">192.168</span>.0.103: <span class="token number">1</span> <span class="token function">time</span>
		
SFTP subsystem requests: <span class="token number">3</span>. Time<span class="token punctuation">(</span>s<span class="token punctuation">)</span>

**Unmatched Entries**
Exiting on signal <span class="token number">15</span> <span class="token builtin class-name">:</span> <span class="token number">6</span> time<span class="token punctuation">(</span>s<span class="token punctuation">)</span>

----------------SSHD End-----------

--------------- yum Begin ---------
<span class="token comment">#统计yum安装的软件。可以知道我们安装了哪些软件</span>
 
Packages Installed:
  perl-YAML-Syck-1.07-4.el6.i686
  perl-Date-Manip-6.24-1.el6.noarch
  logwatch-7.3.6-49.el6.noarch

-----------yum End-------------

--------Disk Space Begin-------
<span class="token comment">#统计磁盘空间情况</span>
Filesystem	Size	Used	Avail	Use%	Mounted on
/dev/sda3	20G		<span class="token number">1</span>.9G	17G		<span class="token number">11</span>%		/
/dev/sda1	194M	26M		158M	<span class="token number">15</span>%		/boot
/dev/sr0	<span class="token number">3</span>.5G	<span class="token number">3</span>.5G	<span class="token number">0</span>		<span class="token number">100</span>%	/mnt/cdrom

---------Disk Space End-----------------

<span class="token comment">#########Logwatch End ##################</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br></div></div><p>有了这个日志分析工具，日志管理工作就会轻松很多。当然，在 Linux 中可以支持很多日志分析工具，我们在这里只介绍了 CentOS 自带的 <code>logwatch</code>，大家可以根据自己的习惯选择相应的日志分析工具。</p>
</template>
