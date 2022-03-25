<template><h2 id="脚本目的" tabindex="-1"><a class="header-anchor" href="#脚本目的" aria-hidden="true">#</a> 脚本目的</h2>
<ul>
<li>监控一个机器的存活状态</li>
<li>监控一个端口的开启状态</li>
<li>监控内存使用率脚本</li>
<li>找出使用 CPU 或 memory 前十的进程</li>
<li>监控硬盘 IO 脚本</li>
</ul>
<h2 id="试写脚本" tabindex="-1"><a class="header-anchor" href="#试写脚本" aria-hidden="true">#</a> 试写脚本</h2>
<p>下面的几个脚本实例中，脚本的开头信息省略，大致内容如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#Description: xxx</span>
<span class="token comment">#Author: xxx</span>
<span class="token comment">#Created Time: yyyy/mm/dd hh:mm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>脚本如何写，需要一个思路框架，比如：</p>
<blockquote>
<p>需要用什么命令，命令的具体用法；</p>
<p>需要循环时如何去循环，匹配时如何去匹配；</p>
<p>如何一步一步的接近脚本的目的；</p>
<p>……</p>
</blockquote>
<p>不同的脚本需要不同的思路方法，就需要具体情况具体对待；当然，同一个脚本可以有不同的写法，前期只要能达目的就好，后期则需要慢慢去优化脚本，毕竟效率高能节省很多系统资源和时间。</p>
<h3 id="监控一个机器的存活状态" tabindex="-1"><a class="header-anchor" href="#监控一个机器的存活状态" aria-hidden="true">#</a> 监控一个机器的存活状态</h3>
<p><strong>思路：</strong></p>
<blockquote>
<ul>
<li>
<p>监控方法：<code>ping</code></p>
<ul>
<li>
<p><code>ping</code> 得通：host up</p>
</li>
<li>
<p><code>ping</code> 不通：host down</p>
</li>
</ul>
</li>
<li>
<p>问题：关于禁 <code>ping</code>，禁的是陌生人（禁止所有，允许你的）</p>
</li>
<li>
<p>条件：网络延迟，假报警问题</p>
</li>
<li>
<p><code>ping</code> 的取值，<code>ping</code> 几次，间隔几秒，<code>ping</code> 都失败判断机器状态为 down</p>
</li>
</ul>
</blockquote>
<p>代码：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost~ <span class="token punctuation">]</span><span class="token comment"># vim host_status.sh</span>
<span class="token comment">#!/bin/bash</span>
<span class="token comment">#测试代码，ping3次</span>
<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">4</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
	<span class="token keyword">if</span> <span class="token function">ping</span> -c1 <span class="token variable">$1</span> <span class="token operator">&amp;></span>/dev/null<span class="token punctuation">;</span><span class="token keyword">then</span>
		<span class="token builtin class-name">export</span> ping_count<span class="token string">"<span class="token variable">$i</span>"</span><span class="token operator">=</span><span class="token number">1</span>
	<span class="token keyword">else</span>	
		<span class="token builtin class-name">export</span> ping_count<span class="token string">"<span class="token variable">$i</span>"</span><span class="token operator">=</span><span class="token number">0</span>
	<span class="token keyword">fi</span>
<span class="token comment">#每次ping的时间间隔（秒）</span>
	<span class="token function">sleep</span> <span class="token number">3</span>
<span class="token keyword">done</span>
<span class="token comment">#如果3次ping都失败则报警机器存活状态为down</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$ping_count</span> -eq <span class="token variable">$ping_count2</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token variable">$ping_count2</span> -eq <span class="token variable">$ping_count3</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span><span class="token variable">$ping_count1</span> -eq <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$1</span> is down"</span>
<span class="token keyword">else</span>	
	<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$1</span> is up"</span>
<span class="token keyword">fi</span>
<span class="token builtin class-name">unset</span> ping_count1
<span class="token builtin class-name">unset</span> ping_count2
<span class="token builtin class-name">unset</span> ping_count3
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># bash host_status.sh 192.168.2.88</span>
<span class="token number">192.168</span>.2.88 is up
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># bash host_status.sh 192.168.2.99</span>
<span class="token number">192.168</span>.2.99 is down
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="监控一个端口的开启状态" tabindex="-1"><a class="header-anchor" href="#监控一个端口的开启状态" aria-hidden="true">#</a> 监控一个端口的开启状态</h3>
<p><strong>思路：</strong></p>
<blockquote>
<ul>
<li>监控方法：当系统压力过大或服务 donw 了，a、b、c 方法也还可能监测到，不推荐
a. systemctl、service 服务启动状态
b. <code>lsof</code> 查看端口是否存在
c. <code>ps</code> 查看进程是否存在
d. <code>telnet</code> 测试端口是否有响应------推荐</li>
<li><code>telnet</code> 工具是否存在，没有的话需要安装</li>
</ul>
</blockquote>
<p>代码：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># vim port_status.sh</span>
<span class="token comment">#!/bin/bash</span>
<span class="token function-name function">port_status</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token assign-left variable">temp_file</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span>mktemp port_status.XXX<span class="token variable">`</span></span>
<span class="token comment">#判断依赖命令telnet是否存在</span>
<span class="token punctuation">[</span> <span class="token operator">!</span> -x /usr/bin/telnet <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">"telnet: not found command"</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token comment">#测试端口 $1 ：IP	  $2：port</span>
<span class="token punctuation">(</span> telnet <span class="token variable">$1</span> <span class="token variable">$2</span> <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
quit
EOF</span>
<span class="token punctuation">)</span> <span class="token operator">&amp;></span> <span class="token variable">$temp_file</span>

<span class="token comment">#分析文件中的内容，判断结果</span>
<span class="token keyword">if</span> <span class="token function">egrep</span> <span class="token string">"\^]"</span> <span class="token variable">$temp_file</span> <span class="token operator">&amp;></span> /dev/null<span class="token punctuation">;</span><span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$1</span> :<span class="token variable">$2</span> is open"</span>
<span class="token keyword">else</span>
	<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$1</span>:<span class="token variable">$2</span> is close"</span>
<span class="token keyword">fi</span>
<span class="token function">rm</span> -f <span class="token variable">$temp_file</span>
<span class="token punctuation">}</span>
<span class="token comment">#调用函数，别忘带参数</span>
port_status <span class="token variable">$1</span> <span class="token variable">$2</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># bash port_status.sh 192.168.2.88 22</span>
<span class="token number">192.168</span>.2.88:22 is <span class="token function">open</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># bash port_status.sh 192.168.2.88 23</span>
<span class="token number">192.168</span>.2.88:23 is close
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="监控内存使用率脚本" tabindex="-1"><a class="header-anchor" href="#监控内存使用率脚本" aria-hidden="true">#</a> 监控内存使用率脚本</h3>
<p><strong>思路：</strong></p>
<blockquote>
<ul>
<li>监控方法：
a. <code>free</code>
b. <code>cat /proc/meminfo</code></li>
<li>知识：内存的申请顺序 free---&gt;cache---&gt;buffer---&gt;swap</li>
</ul>
</blockquote>
<p>代码：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># vim memory_use.sh</span>
<span class="token comment">#!/bin/bash</span>
memory_use<span class="token punctuation">{</span>
<span class="token assign-left variable">memory_used</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">head</span> -2 /proc/meminfo <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'NR==1{t=$2}NR==2{f=$2;print (t-f)*100/t"%"}'</span><span class="token variable">`</span></span>
<span class="token assign-left variable">memory_cache</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">head</span> -5 /proc/meminfo <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'NR==1{t=$2}NR==5{c=$2;print c*100/t"%"}'</span><span class="token variable">`</span></span>
<span class="token assign-left variable">memory_buffer</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">head</span> -4 /proc/meminfo <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'NR==1{t=$2}NR==2{b=$2;print b*100/t"%"}'</span><span class="token variable">`</span></span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"memory_used: <span class="token variable">$memory_used</span><span class="token entity" title="\t">\t</span>cache: <span class="token variable">$memory_cache</span><span class="token entity" title="\t">\t</span>buffer: <span class="token variable">$memory_buffer</span>"</span>
<span class="token punctuation">}</span>
memory_use
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># bash memory_use.sh</span>
memory_used: <span class="token number">8.83752</span>%		cache: <span class="token number">0.03784</span>%		buffer: <span class="token number">5.74635</span>%
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="监控使用-cpu-或内存前十名的进程" tabindex="-1"><a class="header-anchor" href="#监控使用-cpu-或内存前十名的进程" aria-hidden="true">#</a> 监控使用 CPU 或内存前十名的进程</h3>
<p><strong>思路：</strong></p>
<blockquote>
<p>监控方法：
<code>ps</code> 命令
<code>top</code> 命令
整合：对任务管理器的进程进行排序、整合（按 CPU 或内存）</p>
</blockquote>
<p>代码：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># vim cpu_memory_use.sh</span>
<span class="token function-name function">memory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">#收集任务管理器进程信息</span>
<span class="token assign-left variable">temp_file</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span>mktemp memory.XXX<span class="token variable">`</span></span>
<span class="token function">top</span> -b -n <span class="token number">1</span> <span class="token operator">></span> <span class="token variable">$temp_file</span>
<span class="token comment">#按进程统计内存使用大小</span>
<span class="token function">tail</span> -n +8 <span class="token variable">$temp_file</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'{array[$NF]+=$6}END{for (i in array) print array[i],i}'</span> <span class="token operator">|</span> <span class="token function">sort</span> -k <span class="token number">1</span> -n -r <span class="token operator">|</span> <span class="token function">head</span> -10
<span class="token function">rm</span> -f <span class="token variable">$temp_file</span>
<span class="token punctuation">}</span>
<span class="token function-name function">cpu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">#收集任务管理器进程信息</span>
<span class="token assign-left variable">temp_file</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span>mktemp cpu.XXX<span class="token variable">`</span></span>
<span class="token function">top</span> -b -n <span class="token number">1</span> <span class="token operator">></span> <span class="token variable">$temp_file</span>
<span class="token comment">#按进程统计cpu使用大小</span>
<span class="token function">tail</span> -n +8 <span class="token variable">$temp_file</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'{array[$NF]+=$9}END{for (i in array) print array[i],i}'</span> <span class="token operator">|</span> <span class="token function">sort</span> -k <span class="token number">1</span> -n -r <span class="token operator">|</span> <span class="token function">head</span> -10
<span class="token function">rm</span> -f <span class="token variable">$temp_file</span>
<span class="token punctuation">}</span>
<span class="token builtin class-name">echo</span> 占用memory前十进程：
memory
<span class="token builtin class-name">echo</span> 占用cpu前十进程：
cpu
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># bash cpu_memory_use.sh</span>
占用memory前十进程：
<span class="token number">614380</span> Content
<span class="token number">363520</span> gnome-shell
<span class="token number">324108</span> firefox
<span class="token number">158612</span> Xorg
<span class="token number">154868</span> gnome-software
<span class="token number">151000</span> Cont
<span class="token number">131300</span> evolution-calen
<span class="token number">114968</span> WebExtensions
<span class="token number">62176</span> nautilus-deskto
<span class="token number">55484</span> evolution-addre
占用cpu前十进程：
<span class="token number">23.5</span> <span class="token function">top</span>
<span class="token number">11.8</span> gnome-shell
<span class="token number">11.8</span> Content
<span class="token number">5.9</span> Xorg
<span class="token number">5.9</span> firefox
<span class="token number">0</span> xdg-permission-
<span class="token number">0</span> writeback
<span class="token number">0</span> wpa_supplicant
<span class="token number">0</span> whoopsie
<span class="token number">0</span> WebExtensions
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h3 id="监控硬盘-io-脚本" tabindex="-1"><a class="header-anchor" href="#监控硬盘-io-脚本" aria-hidden="true">#</a> 监控硬盘 IO 脚本</h3>
<p><strong>思路：</strong></p>
<blockquote>
<p>监控命令：
<code>iostat</code>（详解）
<code>iozone</code>（第三方提供）
监控指标：IO 队列长度、IOPS、磁盘吞吐量</p>
</blockquote>
<ul>
<li><code>iostat</code> 命令详解
用法：<code>iostat [选项] [&lt;时间间隔&gt; [次数]]</code>
<ul>
<li>选项说明：
-c：只显示系统 CPU 统计信息
-d：只显示 Device 结果
-k/-m：输出结果以 kB/mB 为单位
-x：输出更详细的 io 设备统计信息
interval/count：每次输出间隔时间/输出次数（不带 count 则循环输出）</li>
</ul>
</li>
</ul>
<p>代码：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># vim io.sh</span>
<span class="token comment">#!/bin/bash</span>
<span class="token function-name function">io</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token assign-left variable">decice_num</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span>iostat -x <span class="token operator">|</span> <span class="token function">egrep</span> <span class="token string">"^sd[a-z]"</span> <span class="token operator">|</span> <span class="token function">wc</span> -l<span class="token variable">`</span></span>
iostat -x <span class="token number">1</span> <span class="token number">3</span> <span class="token operator">|</span> <span class="token function">egrep</span> <span class="token string">"^sd[a-z]"</span> <span class="token operator">|</span> <span class="token function">tail</span> -n +<span class="token variable"><span class="token variable">$((</span>device_num<span class="token operator">+</span><span class="token number">1</span><span class="token variable">))</span></span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'{io_long[$1]+=$9}END{for (i in io_long)print io_long[i],i}'</span>
<span class="token punctuation">}</span>
io
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># bash io.sh</span>
<span class="token number">72.28</span>  sda
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="监控脚本的总结" tabindex="-1"><a class="header-anchor" href="#监控脚本的总结" aria-hidden="true">#</a> 监控脚本的总结</h3>
<ul>
<li>监控项：机器、服务、资源、进程、端口……</li>
<li>阈值：根据预设监控项的阈值，分多种情况</li>
<li>监控方法：命令、思路、定义函数、运行方法、调用方法……</li>
<li>返回值：根据监控项的阈值，来返回对应的值</li>
</ul>
<p>上面的几个脚本都是常见的监控脚本写法，以后遇到监控脚步要会举一反三。当然具体如何监控的细节，需要自己去思考。</p>
</template>
