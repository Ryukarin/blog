<template><h2 id="压缩文件介绍" tabindex="-1"><a class="header-anchor" href="#压缩文件介绍" aria-hidden="true">#</a> 压缩文件介绍</h2>
<p>在系统中，如果需要有大量的文件进行复制和保存，那么把它们打成压缩包是不错的选择。打包压缩作为常规操作，在 Windows 和 Linux 中都比较常见。Windows 中常见的压缩包格式主要有“.zip”、“.rar”和“.7z”等，但是你了解这些不同压缩格式的区别吗？其实，普通用户并不用理解这些压缩格式的算法有什么区别、压缩比有哪些不同，只要在碰到这些压缩包时会正确地解压缩，在想要压缩时可以正确地操作，目的就达到了。</p>
<p>在 Limux 中也是一样的，可以识别的常见压缩格式有十几种，比如 “.zip”、“.gz”、“.bz2”、“.tar”、“.tar.gz” 压缩等。我们也不需要知道这些压缩格式的具体区别，只要对应的压缩包会解压缩、想要压缩的时候会操作即可。</p>
<p>还有一件事，之前一直强调“Linux 不靠扩展名区分文件类型，而是靠权限”，那压缩包也不应该医分扩展名啊？为什么还要区分是“.gz”还是“.bz2”的扩展名呢？这是因为，在 Linux 中，不同的压缩方法对应的解压缩方法也是不同的，这里的扩展名并不是 Linux 系统一定需要的（Linux 不区分扩展名），而是用来给用户标识压缩格式的。只有知道了正确的压缩格式，才能采用正确的解压缩命令。</p>
<p>大家可以想象一下，如果你压缩了一个文件，起了一个名字“abc”，今天你知道这是一个压缩包，可以解压缩，那半年之后呢？而如果你将它命名为“etc_bak.tar.gz”，那无论什么时 候、无论哪个用户都知道这是<code>/etc/</code>目录的备份压缩包。所以压缩文件一定要严格区分扩展名，这不是系统必需的，而是用来让管理员区分文件类型的。</p>
<h2 id="zip-格式" tabindex="-1"><a class="header-anchor" href="#zip-格式" aria-hidden="true">#</a> <code>.zip</code> 格式</h2>
<p>“.zip”是 Windows 中最常用的压缩格式，Linux 也可以正确识别“.zip”格式，这可以方便地和 Windows 系统通用压缩文件。</p>
<h3 id="压缩命令-zip" tabindex="-1"><a class="header-anchor" href="#压缩命令-zip" aria-hidden="true">#</a> 压缩命令 zip</h3>
<p>压缩命令就是 <strong><code>zip</code></strong>， 命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># zip [选项] 压缩包名 源文件或源目录</span>
选项：
	-r	：压缩目录
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>zip</code> 压缩命令需要手工指定压缩之后的压缩包名，注意写清楚扩展名，以方便解压缩时使用。举个例子：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># zip ana.zip anaconda-ks.cfg</span>
adding: anaconda-ks.cfg <span class="token punctuation">(</span>deflated <span class="token number">37</span>%<span class="token punctuation">)</span> 
<span class="token comment">#压缩</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll ana.zip</span>
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">935</span> <span class="token number">6</span>月 <span class="token number">17</span> <span class="token number">16</span>:00 ana.zip
<span class="token comment">#压缩文件生成</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>所有的压缩命令都可以同时压缩多个文件，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>rootelocalhost ~<span class="token punctuation">]</span><span class="token comment"># zip test.zip install.log install.log.syslog</span>
adding: install.log <span class="token punctuation">(</span>deflated <span class="token number">72</span>%<span class="token punctuation">)</span>
adding: install.log.syslog <span class="token punctuation">(</span>deflated <span class="token number">85</span>%<span class="token punctuation">)</span>
<span class="token comment">#同时压缩多个文件到 test.zip 压缩包中</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll test.zip</span>
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">8368</span> <span class="token number">6</span>月 <span class="token number">17</span> <span class="token number">16</span>:03 test.zip
<span class="token comment">#压缩文件生成</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>如果想要压缩目录，则需要使用“-r”选项，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mkdir dir1</span>
<span class="token comment">#建立测试目录</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># zip -r dir1.zip dir1</span>
adding: dir1/<span class="token punctuation">(</span>stored 0g<span class="token punctuation">)</span>
<span class="token comment">#压缩目录</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls -dl dir1.zip</span>
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">160</span> <span class="token number">6</span>月 <span class="token number">17</span> <span class="token number">16</span>:22 dir1.zip
<span class="token comment">#压缩文件生成 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="解压缩命令-unzip" tabindex="-1"><a class="header-anchor" href="#解压缩命令-unzip" aria-hidden="true">#</a> 解压缩命令 unzip</h3>
<p>“.zip”格式的解压缩命令是 <strong><code>unzip</code></strong>，命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># unzip [选项] 压缩包名</span>
选项：
	-d	：指定解压缩位置 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>不论是文件压缩包，还是目录压缩包，都可以直接解压缩，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># unzip dir1.zip</span>
Archive: dir1.zip creating: dir1/
<span class="token comment">#解压缩</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>也可以手工指定解压缩位置，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># unzip -d /tmp/ ana.zip</span>
Archive： ana.zip inflating：/tmp/anaconda-ks.cfg
<span class="token comment">#把压缩包解压到指定位置</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="gz-格式" tabindex="-1"><a class="header-anchor" href="#gz-格式" aria-hidden="true">#</a> <code>.gz</code> 格式</h2>
<p>“.gz”格式是 Linux 中最常用的压缩格式。</p>
<h3 id="压缩命令-gzip" tabindex="-1"><a class="header-anchor" href="#压缩命令-gzip" aria-hidden="true">#</a> 压缩命令 gzip</h3>
<p>使用 <strong><code>gzip</code></strong> 命令进行压缩，命令的格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># gzip [选项] 源文件</span>
选项：
	-c		：将压缩数据输出到标准输出中，可以用于保留源文件
    -d		：解压缩
    -r		：压缩目录
    -v		：显示压缩文件的信息
    -数字	：用于指定压缩等级，-1 压缩等级最低，压缩比最差；-9 压缩比最高。默认压缩比是 -6 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul>
<li><strong>基本压缩</strong></li>
</ul>
<p><code>gzip</code> 压缩命令非常简单，甚至不需要指定压缩之后的压缩包名，只需指定源文件名即可。 我们来试试：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># gzip install.log</span>
<span class="token comment">#压缩 install.log 文件</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls</span>
anaconda-ks.cfg install.log.gz install.log.syslog
<span class="token comment">#压缩文件生成，但是源文件也消失了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li><strong>保留源文件压缩</strong></li>
</ul>
<p>在使用 <code>gzip</code> 命令压缩文件时，源文件会消失，从而生成压缩文件。这时有些人会有强迫症，就会问：能不能在压缩文件的时候，不让源文件消失？好吧，也是可以的，不过很别扭。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># gzip -c anaconda-ks.cfg > anaconda-ks.cfg.gz</span>
<span class="token comment">#使用 -c 选项，但是不让压缩数据输出到屏幕上，而是重定向到压缩文件中</span>
<span class="token comment">#这样可以在压缩文件的同时不删除源文件 </span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls</span>
<span class="token comment">#可以看到压缩文件和源文件都存在 anaconda-ks.cfg anaconda-ks.cfg.gz install.log.gz install.log.syslog</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li><strong>压缩目录</strong></li>
</ul>
<p>我们可能会想当然地认为 <code>gzip</code> 命令可以压缩目录。（其实是分别压缩目录里的所有文件）我们来试试：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mkdir test</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># touch test/test1</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># touch test/test2</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># touch test/test3</span>
<span class="token comment">#建立测试目录，并在里面建立几个测试文件</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># gzip -r test/</span>
<span class="token comment">#压缩目录，并没有报错</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls</span>
anaconda-ks.cfg anaconda-ks.cfg.gz install.log.gz install.log.syslog <span class="token builtin class-name">test</span>
<span class="token comment">#但是查看发现 test 目录依然存在，并没有变为压缩文件</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls test/</span>
test1.gz test2.gz test3.gz
<span class="token comment">#原来 gzip 命令不会打包目录，而是把目录下所有的子文件分别压缩</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><strong>在 Linux 中，打包和压缩是分开处理的。而 <code>gzip</code> 命令只会压缩，不能打包，所以才会出现没有打包目录，而只把目录下的文件进行压缩的情况。</strong></p>
<h3 id="解压缩命令-gunzip-或-gzip-d" tabindex="-1"><a class="header-anchor" href="#解压缩命令-gunzip-或-gzip-d" aria-hidden="true">#</a> 解压缩命令 gunzip 或 gzip -d</h3>
<p>如果要解压缩“.gz”格式，那么使用 <strong><code>gzip -d 压缩包</code></strong> 和 <strong><code>gunzip 压缩包</code></strong> 命令都可以。</p>
<ul>
<li><strong><code>gunzip</code> 命令</strong>，格式如下：</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># gunzip [选项] 压缩文件</span>
选项：
	-r	：解压缩目录
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>常规用法就是直接解压缩文件，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># gunzip install.log.gz</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果要解压缩目录下的内容，则依然使用“-r”选项，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@Localhost ~<span class="token punctuation">]</span><span class="token comment"># gunzip -r test/ </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>当然，<code>gunzip -r</code>依然只会解压缩目录下的文件，而不会解打包。</p>
<ul>
<li><strong><code>gzip -d</code> 命令</strong>，例如：</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># gzip -d anaconda-ks.cfg.gz</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="查看压缩的文本文件内容-zcat" tabindex="-1"><a class="header-anchor" href="#查看压缩的文本文件内容-zcat" aria-hidden="true">#</a> 查看压缩的文本文件内容 zcat</h3>
<p>如果我们压缩的是一个纯文本文件，则可以直接使用 <strong><code>zcat</code></strong> 命令在不解压缩的情况下查看这个文本文件中的内容。其命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># zcat 压缩文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@Localhost ~<span class="token punctuation">]</span><span class="token comment"># zcat anaconda-ks.cfg.gz</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="bz2-格式" tabindex="-1"><a class="header-anchor" href="#bz2-格式" aria-hidden="true">#</a> <code>.bz2</code> 格式</h2>
<p>“.bz2”格式是 Linux 的另一种压缩格式，从理论上来讲，“.bz2”格式的算法更先进、压 缩比更好；而“.gz”格式相对来讲压缩的时间更快。</p>
<h3 id="压缩命令-bzip2" tabindex="-1"><a class="header-anchor" href="#压缩命令-bzip2" aria-hidden="true">#</a> 压缩命令 bzip2</h3>
<p>“.bz2”格式的压缩命令是 <strong><code>bzip2</code></strong>，命令的格式：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@Localhost ~<span class="token punctuation">]</span><span class="token comment"># bzip2 [选项] 源文件</span>
选项：
	-d		：解压缩
    -k		：压缩时，保留源文件
    -v		：显示压缩的详细信息
    -数字	：这个参数和 <span class="token function">gzip</span> 命令的作用一样，用于指定压缩等级，-1 压缩等级最低， 压缩比最差；-9 压缩比最高
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>大家注意，<code>gzip</code> 只是不会打包目录，但是如果使用“-r”选项，则可以分别压缩目录下的每个文件；而 <code>bzip2</code> 命令则根本不支持压缩目录，也没有“-r”选项。</p>
<ul>
<li><strong>基本压缩命令</strong></li>
</ul>
<p>在压缩文件命令后面直接指定源文件即可，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># bzip2 anaconda-ks.cfg</span>
<span class="token comment">#压缩成“.bz2”格式 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这个压缩命令依然会在压缩的同时删除源文件。</p>
<ul>
<li><strong>压缩的同时保留源文件</strong></li>
</ul>
<p><code>bzip2</code> 命令可以直接使用“-k”选项来保留源文件，而不用像 <code>gzip</code> 命令一样使用输出重定向来保留源文件。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># bzip2 -k install.log.syslog</span>
<span class="token comment">#压缩</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls</span>
anaconda-ks.cfg.bz2 install.log install.log.syslog install.log.syslog.bz2
<span class="token comment">#压缩文件和源文件都存在 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="解压缩命令-bunzip2-或-bzip2-d" tabindex="-1"><a class="header-anchor" href="#解压缩命令-bunzip2-或-bzip2-d" aria-hidden="true">#</a> 解压缩命令 bunzip2 或 bzip2 -d</h3>
<p>“.bz2”格式可以使用 <strong><code>bzip2 -d 压缩包</code></strong> 命令来进行解压缩，也可以使用 <strong><code>bunzip2 压缩包</code></strong> 命令来进行解压缩。</p>
<ul>
<li><strong><code>bunzip2</code> 命令</strong>，格式如下：</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># bunzip2 [选项] 源文件</span>
选项：
	-k	：解压缩时，保留源文件 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>先试试使用 <code>bunzip2</code> 命令来进行解压缩，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># bunzip2 anaconda-ks.cfg.bz2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li><strong><code>bzip2 -d 压缩包</code> 命令</strong>，例如：</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># bzip2 -d install.log.syslog.bz2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="查看压缩的文本文件内容-bzcat" tabindex="-1"><a class="header-anchor" href="#查看压缩的文本文件内容-bzcat" aria-hidden="true">#</a> 查看压缩的文本文件内容 bzcat</h3>
<p>和“.gz”格式一样，“.bz2”格式压缩的纯文本文件也可以不解压缩直接查看，使用的命令是 <strong><code>bzcat</code></strong>。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># bzcat install.log.syslog.bz2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="xz-格式" tabindex="-1"><a class="header-anchor" href="#xz-格式" aria-hidden="true">#</a> <code>.xz</code> 格式</h2>
<p>“.xz”格式是一个压缩率非常高的压缩格式，<code>xz</code> 命令是绝大数 Linux 默认就带的一个压缩工具，压缩率很高。只能压缩文件，不能压缩目录。现在大部分的系统镜像文件都是用此格式压缩。</p>
<h3 id="压缩命令-xz" tabindex="-1"><a class="header-anchor" href="#压缩命令-xz" aria-hidden="true">#</a> 压缩命令 xz</h3>
<p>“.xz”格式的压缩命令是 <strong><code>xz</code></strong>，命令的格式：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># xz [选项] 文件名</span>
选项：
	-d		：解压缩
	-k		：压缩时保留源文件
	-t		：测试压缩文件的完整性
	-数字	：指定压缩比。默认是6，数字越大压缩比就越大（1-9）
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>例子：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cd /tmp/</span>
<span class="token punctuation">[</span>root@localhost tmp<span class="token punctuation">]</span><span class="token comment"># cp /var/log/messages ./</span>
<span class="token comment">#复制 /var/log/messages 文件到当前 /tmp/ 目录下</span>
<span class="token punctuation">[</span>root@localhost tmp<span class="token punctuation">]</span><span class="token comment"># xz messages</span>
<span class="token comment"># xz 命令压缩 messages 文件</span>
<span class="token punctuation">[</span>root@localhost tmp<span class="token punctuation">]</span><span class="token comment"># ll -h</span>
total <span class="token number">4</span>.0K
-rw------- <span class="token number">1</span> root root <span class="token number">3</span>.6K Feb <span class="token number">25</span> <span class="token number">17</span>:00 messages.xz
<span class="token comment">#生成压缩文件 messages.xz</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>再比如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost tmp<span class="token punctuation">]</span><span class="token comment"># xz -k messages</span>
<span class="token comment"># xz -k 命令压缩 messages 文件</span>
<span class="token punctuation">[</span>root@localhost tmp<span class="token punctuation">]</span><span class="token comment"># ll -h</span>
total 100K
-rw------- <span class="token number">1</span> root root  95K Feb <span class="token number">25</span> <span class="token number">17</span>:00 messages
-rw------- <span class="token number">1</span> root root <span class="token number">3</span>.6K Feb <span class="token number">25</span> <span class="token number">17</span>:00 messages.xz
<span class="token comment">#生成压缩文件 messages.xz，且源文件仍存在</span>
<span class="token comment"># 95K大小的文件，压缩后仅有3.6K，压缩高的不敢相信，但这是真的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="解压缩命令-xz-d" tabindex="-1"><a class="header-anchor" href="#解压缩命令-xz-d" aria-hidden="true">#</a> 解压缩命令 xz -d</h3>
<p>“.xz”格式的解压缩没有单独的命令，还是 <strong><code>xz</code></strong>，命令的格式：<code>xz -d 压缩文件</code>，看个例子：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost tmp<span class="token punctuation">]</span><span class="token comment"># xz -d messages.xz </span>
<span class="token comment"># xz -d 解压缩</span>
<span class="token punctuation">[</span>root@localhost tmp<span class="token punctuation">]</span><span class="token comment"># ll -h</span>
total 96K
-rw------- <span class="token number">1</span> root root 95K Feb <span class="token number">25</span> <span class="token number">17</span>:00 messages
<span class="token comment">#xz 解压后，直接删除原压缩文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="tar-格式" tabindex="-1"><a class="header-anchor" href="#tar-格式" aria-hidden="true">#</a> <code>.tar</code> 格式</h2>
<p>通过前面的学习，我们发现，不论是 <code>gzip</code> 命令还是 <code>bzip2</code> 命令，好像都比较笨，<code>gzip</code> 命令不能打包目录，而只能单独压缩目录下的子文件；<code>bzip2</code> 命令干脆就不支持目录的压缩。 在 Limux 中，对打包和压缩是区别对待的。也就是说，在 Linux 中，如果想把多个文件或 目录打包到一个文件包中，则使用的是 <code>tar</code> 命令；而压缩才使用 <code>gzip</code> 或 <code>bzip2</code> 命令。</p>
<h3 id="打包命令-tar-cvf" tabindex="-1"><a class="header-anchor" href="#打包命令-tar-cvf" aria-hidden="true">#</a> 打包命令 tar -cvf</h3>
<p>“.tar”格式的打包和解打包都使用 <strong><code>tar</code></strong> 命令，区别只是选项不同。我们先看看 <code>tar</code> 命令的格式：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost tmp<span class="token punctuation">]</span><span class="token comment"># tar [选项] [-f 压缩包名] 源文件或目录</span>
选项：
	-c	：打包
	-f	：指定压缩包的文件名。建议一定要指定正确的指定扩展名。
    -v	：显示打包文件过程
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul>
<li><strong>基本用法</strong></li>
</ul>
<p>我们先打包一个文件练练手。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># tar -cvf anaconda-ks.cfg.tar anaconda-ks.cfg</span>
<span class="token comment">#把 anaconda-ks.ctg 打包为 anaconda-ks.cfg.tar 文件包</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>选项“-cvf”一般是习惯用法，记住打包时需要指定打包之后的文件名，而且要用“.tar” 作为扩展名。那打包目录呢？我们也试试：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll -d test/</span>
drwxr-xr-x <span class="token number">2</span> root root <span class="token number">4096</span> <span class="token number">6</span>月 <span class="token number">17</span> <span class="token number">21</span>:09 test/
<span class="token comment">#test 是我们之前的测试目录</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># tar -cvf test.tar test/</span>
test/
test/test3
test/test2
test/testl
<span class="token comment">#把目录打包为 test.tar 文件包</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code>tar</code> 命令也可以打包多个文件或目录，只要用空格分开即可。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># tar -cvf ana.tar anaconda-ks.cfg /tmp/</span>
<span class="token comment">#把 anaconda-ks.cfg 文件和 /tmp 目录打包成 ana.tar 文件包 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li><strong>打包压缩目录</strong></li>
</ul>
<p>我们已经解释过了，压缩命令不能直接压缩目录，我们就先用 <code>tar</code> 命令把目录打成数据包，然后再用 <code>gzip</code> 命令或 <code>bzip2</code> 命令压缩。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll -d test test.tar</span>
drwxr-xr-x <span class="token number">2</span> root root <span class="token number">4096</span> <span class="token number">6</span>月 <span class="token number">17</span> <span class="token number">21</span>:09 <span class="token builtin class-name">test</span>
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">10240</span> <span class="token number">6</span>月 <span class="token number">18</span> 01:06 test.tar
<span class="token comment">#我们之前已经把 test 目录打包成 test.tar 文件包</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># gzip test.tar</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll test.tar.gz</span>
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">176</span> <span class="token number">6</span>月 <span class="token number">18</span> 01:06 test.tar.gz
<span class="token comment"># gzip 命令会把 test.tar 压缩成 test.tar.gz</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># gzip -d test.tar.gz</span>
<span class="token comment">#解压缩，把 test.tar.gz 解压为 test.tar</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># bzip2 test.tar</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll test.tar.bz2</span>
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">164</span> <span class="token number">6</span>月 <span class="token number">18</span> 01:06 teat.tar.bz2
<span class="token comment">#bzip2命令会把 test.tar 压缩为 test.tar.bz2 格式 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="解打包命令-tar-xvf" tabindex="-1"><a class="header-anchor" href="#解打包命令-tar-xvf" aria-hidden="true">#</a> 解打包命令 tar -xvf</h3>
<p>“.tar”格式的解打包也需要使用 <strong><code>tar</code></strong> 命令，但是选项不太一样。命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># tar [选项] 压缩包</span>
选项：
	-x		：解打包
    -f		：指定压缩包的文件名
    -v		：显示解打包文件过程
    -t		：测试，不是解打包，只是查看包中有哪些文件
    -C 目录	：指定解打包位置
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>其实解打包和打包相比，只是把打包选项“-cvf”更换为“-xvf”。我们来试试：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># tar -xvf anaconda-ks.cfg.tar</span>
<span class="token comment">#解打包到当前目录下</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果使用“-xvf”选项，则会把包中的文件解压到当前目录下。如果想要指定解压位置，则需要使用“-C（大写）”选项。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~1<span class="token comment"># tar -xvf test.tar -C /tmp</span>
<span class="token comment">#把文件包 test.tar 解打包到 /tmp/ 目录下 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果只想查看文件包中有哪些文件，则可以把解打包选项“-x”更换为测试选项“-t”。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost -<span class="token punctuation">]</span><span class="token comment"># tar -tvf test.tar</span>
drwxr-xr-x root/root <span class="token number">0</span> <span class="token number">2016</span>-06-17 <span class="token number">21</span>:09 test/
-rw-r--r-- root/root <span class="token number">0</span> <span class="token number">2016</span>-06-17 <span class="token number">17</span>:51 test/test3
-rw-r--r-- root/root <span class="token number">0</span> <span class="token number">2016</span>-06-17 <span class="token number">17</span>:51 test/test2
_rw-r--r-- root/root <span class="token number">0</span> <span class="token number">2016</span>-06-17 <span class="token number">17</span>:51 test/testi 
<span class="token comment">#会用长格式显示 test.tar 文得包中文件的详網信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="tar-gz-、-tar-bz2-、-tar-xz-格式" tabindex="-1"><a class="header-anchor" href="#tar-gz-、-tar-bz2-、-tar-xz-格式" aria-hidden="true">#</a> <code>.tar.gz</code> 、 <code>.tar.bz2</code> 、<code>.tar.xz</code> 格式</h2>
<p>你可能会觉得 Linux 实在太不智能了，一个打包压缩，居然还要先打包成“.tar”格式，再压缩成“.tar.gz”或“.tar.bz2”格式。其实 <code>tar</code>命令是可以同时打包压缩的，前面的讲解之所以把打包和压缩分开，是为了让大家了解在 Linux 中打包和压缩的不同。</p>
<p>使用 <code>tar</code> 命令直接打包压缩。命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost -<span class="token punctuation">]</span><span class="token comment"># tar [选项] 压缩包 源文件或目录</span>
选项：
	-z	：压缩和解压缩 “.tar.gz” 格式
	-j	：压缩和解压缩 “.tar.bz2” 格式
	-J	：压缩和解压缩 “.tar.xz” 格式
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="压缩与解压缩-tar-gz-格式" tabindex="-1"><a class="header-anchor" href="#压缩与解压缩-tar-gz-格式" aria-hidden="true">#</a> 压缩与解压缩 <code>.tar.gz</code> 格式</h3>
<p>我们先来看看如何压缩“.tar.gz”格式。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># tar -zcvf tmp.tar.gz /tmp/</span>
<span class="token comment">#把 /tmp/ 目录直接打包压缩为“.tar.gz”格式，通过“-z”来识别格式，“-cvf”和打包选项一致</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>解压缩也只是在解打包选项“-xvf”前面加了一个“-z”选项。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># tar -zxvf tmp.tar.gz</span>
<span class="token comment">#解压缩与解打包“.tar.gz”格式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>前面讲的选项“-C”用于指定解压位置、“-t”用于查看压缩包内容，在这里同样适用。</p>
<h3 id="压缩与解压缩-tar-bz2-格式" tabindex="-1"><a class="header-anchor" href="#压缩与解压缩-tar-bz2-格式" aria-hidden="true">#</a> 压缩与解压缩 <code>.tar.bz2</code> 格式</h3>
<p>和“.tar.gz”格式唯一的不同就是“-z”选项换成了“-j”。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># tar -jcvf tmp.tar.bz2 /tmp/</span>
<span class="token comment">#打包压缩为“.tar.bz2”格式，注意压缩包文件名</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># tar -jxvf tmp.tar.bz2</span>
<span class="token comment">#解压缩与解打包“.tar.bz2”格式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="压缩与解压缩-tar-xz-格式" tabindex="-1"><a class="header-anchor" href="#压缩与解压缩-tar-xz-格式" aria-hidden="true">#</a> 压缩与解压缩 <code>.tar.xz</code> 格式</h3>
<p>和“.tar.gz”格式唯一的不同就是“-z”选项换成了“-J”（大写的 J ，与“.tar.bz2”的小写的 j 不要混淆）。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># tar -Jcvf tmp.tar.xz /tmp/</span>
<span class="token comment">#打包压缩为“.tar.xz”格式，注意压缩包文件名</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># tar -Jxvf tmp.tar.xz</span>
<span class="token comment">#解压缩与解打包“.tar.bz2”格式</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>把文件直接压缩成“.tar.gz”、“.tar.bz2”和“.tar.xz”格式，才是 Linux 中最常用的压缩方式，这是大家一定要掌握的压缩和解压缩方法。</p>
</template>
