<template><h2 id="变量介绍" tabindex="-1"><a class="header-anchor" href="#变量介绍" aria-hidden="true">#</a> 变量介绍</h2>
<p>在编程中，我们总有一些数据需要临时存放在内存，以待后续使用时快速读出。内存在系统启动的时候被按照1B一个单位划分若干个块，然后统一编号（16 进制编号），并对内存的使用情况做记录，保存在内存跟踪表中。</p>
<p>那么问题来了，1G 内存有多少个 1B 单位呢？</p>
<blockquote>
<p>计算机的存储容量单位：
1B = 8bit
1KB = 1024B
1MB = 1024KB
1GB = 1024MB
1TB = 1024GB
1PB = 1024TB
1EB = 1024PB
1ZB = 1024EB
. . .</p>
</blockquote>
<p>好了，已经够大了！当然还有 YB、BB 更大的单位，同样进制也是 1024。</p>
<p><code>1G = 1024*1024*1024 = 10737418248B</code></p>
<p>假如你将一个 1B 的字符存入内存，如何读出呢？有么有一种大海捞针的感觉阿！我们讨论一下计算机是如何让我们人类快速将数据存在内存，如何从内存中读出数据的。我们研究过变量后就明白了。</p>
<pre><code>**变量：是编程中最常用的一种临时在内存中存取数据的一种方式。**
</code></pre>
<div class="custom-container center">
<p><img src="@source/project/Shell/assets/var.png" alt="变量存储原理图" loading="lazy"></p>
<p><strong><u>变量存储原理图</u></strong></p>
</div>
<p>从图片可以看出，当我们在脚本中定义变量存值的时候，可以从以下方面看到变化：</p>
<ul>
<li>
<p>内存占用：</p>
<p>如果存的是一个字符则占用 1 个字节，如果存的是字符串则是字符串长度再加上 1 个字节长度（\0 是一个特殊字符，代表字符串的结束）。</p>
</li>
<li>
<p>变量名也内存的空间关系：</p>
<p>计算机中会将对应的内存空间和变量名称绑定在一起，此时代表这段内存空间已经被程序占用，其他程序不可复用；然后将变量名对应的值存在对应内存地址的空间里。</p>
</li>
</ul>
<p>理解变量的存储与读取（STRING1=&quot;ABC&quot;）</p>
<h3 id="变量存储原理" tabindex="-1"><a class="header-anchor" href="#变量存储原理" aria-hidden="true">#</a> 变量存储原理</h3>
<ol>
<li>STRING1（逻辑地址）&lt;===&gt; 0x5...0x8（物理地址）	存取数据 ABC
STRING1 是逻辑地址，给人看的，方便热记忆；
0x5...0x8 是内存物理地址，是计算机寻址的依据；</li>
<li>对于人来说 STRING1 上存的数据是 ABC，对于计算机来说数据是存在物理地址上的；</li>
<li>在建立变量的时候，计算机自动将逻辑地址（变量名）和物理地址做了对应绑定。</li>
</ol>
<h3 id="变量读取原理" tabindex="-1"><a class="header-anchor" href="#变量读取原理" aria-hidden="true">#</a> 变量读取原理</h3>
<p>当调用STRING1的时候，计算机会根据对应关系，找到物理地址；
定位内存地址，读出数据并返回。</p>
<h2 id="变量分类" tabindex="-1"><a class="header-anchor" href="#变量分类" aria-hidden="true">#</a> 变量分类</h2>
<ol>
<li>本地变量：用户私有变量，只有本地用户可以使用，保存在家目录下的 <code>.bash_profile</code>、<code>.bashrc</code> 文件中</li>
<li>全局变量：所有用户都可以使用，保存在 <code>/etc/profile</code>、<code>/etc/bashrc</code> 文件中</li>
<li>用户自定义变量：用户自定义，比如脚本中的变量</li>
</ol>
<p><strong>补充说明：</strong></p>
<ol>
<li>计算机启动系统后，全局变量会先加载到内存中；</li>
<li>当用户登录系统成功之后，本地变量会加载到内存中；</li>
<li>打开一个终端或一个脚本，自定义临时变量会在关闭终端或脚本运行结束后，变量会自动从内存中释放。</li>
</ol>
<h2 id="定义变量" tabindex="-1"><a class="header-anchor" href="#定义变量" aria-hidden="true">#</a> 定义变量</h2>
<h3 id="定义变量-1" tabindex="-1"><a class="header-anchor" href="#定义变量-1" aria-hidden="true">#</a> 定义变量</h3>
<p>定义变量格式：<code>变量名=值</code></p>
<p>在shell编程中的变量和等号之间不能有空格。</p>
<p>变量名命名规则：</p>
<ul>
<li>命名只能使用英文字母、数字和下划线，首歌字符不能以数字开头；</li>
<li>中间不能有空格，可以使用下划线（_）;</li>
<li>不能使用标点符号；</li>
<li>不能使用 bash 里的关键字（可以使用 <code>help</code> 命令查看保留关键字）。</li>
</ul>
<p><strong>定义变量演示：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#变量赋值，此种方法设置为本地变量</span>
<span class="token punctuation">[</span>root@linuc ~ <span class="token punctuation">]</span><span class="token comment"># name="admin"</span>
<span class="token punctuation">[</span>root@linuc ~ <span class="token punctuation">]</span><span class="token comment"># var1="hello world!"</span>
<span class="token punctuation">[</span>root@linuc ~ <span class="token punctuation">]</span><span class="token comment"># age=30</span>
<span class="token punctuation">[</span>root@linuc ~ <span class="token punctuation">]</span><span class="token comment"># score=88</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>注意：字符串要用单引号或双引号引起来。</p>
<h3 id="读取变量内容" tabindex="-1"><a class="header-anchor" href="#读取变量内容" aria-hidden="true">#</a> 读取变量内容</h3>
<p>读取变量内容符：<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mtext>读取方法：</mtext><mi mathvariant="normal">‘</mi></mrow><annotation encoding="application/x-tex">
读取方法：`</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord cjk_fallback">读取方法：</span><span class="mord">‘</span></span></span></span>变量名`</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#变量内容读取</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># echo $name</span>
admin
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># echo $school</span>
jialidun
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># echo $age</span>
<span class="token number">30</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># echo $score</span>
<span class="token number">88</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="取消变量" tabindex="-1"><a class="header-anchor" href="#取消变量" aria-hidden="true">#</a> 取消变量</h3>
<p>取消变量命令：<code>unset</code></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># unset name</span>
<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># echo $name</span>

<span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>说明：对于本地变量和全剧变量，<code>unset</code> 只能临时取消，当用户重新登录或重启计算机后，变量就会恢复。</p>
<h3 id="定义永久变量" tabindex="-1"><a class="header-anchor" href="#定义永久变量" aria-hidden="true">#</a> 定义永久变量</h3>
<ul>
<li>本地变量：用户私有变量，只有本用户可以使用，保存在家目录下的 <code>.bash_profile</code>、<code>.bashrc</code> 文件中</li>
<li>全局变量：所有用户否可以使用，保存在 <code>/etc/profile</code>、<code>/etc/bashrc</code> 文件中</li>
</ul>
<p><strong>本地变量</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~ <span class="token punctuation">]</span><span class="token comment"># tail -l ~/.bahs_profile</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">'admin'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>全局变量</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@linuc ~ <span class="token punctuation">]</span><span class="token comment"># tail -l /etc/profile</span>
exprot <span class="token assign-left variable">age</span><span class="token operator">=</span><span class="token number">30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>只需要在对应的文件中定义所需要的变量即可，但定义全局变量时，需要在前面加上 export 才可以。</p>
</div>
</template>
