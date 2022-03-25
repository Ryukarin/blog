<template><h2 id="命令的基本格式" tabindex="-1"><a class="header-anchor" href="#命令的基本格式" aria-hidden="true">#</a> 命令的基本格式</h2>
<h3 id="命令提示符" tabindex="-1"><a class="header-anchor" href="#命令提示符" aria-hidden="true">#</a> 命令提示符</h3>
<p>登录系统后，第一眼看到的内容是：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这就是 Linux 系统的命令提示符。那么，这个提示符的含义是什么呢？</p>
<ul>
<li><code>[]</code>：这是提示符的分隔符号，没有特殊含义。</li>
<li><code>root</code>：显示的是当前的登录用户，笔者现在使用的是 root 用户登录。</li>
<li><code>@</code>：分隔符号，没有特殊含义。</li>
<li><code>localhost</code>：当前系统的简写主机名（完整主机名是 <code>localhost.localdomain</code>）。</li>
<li><code>~</code>：代表用户当前所在的目录，此例中用户当前所在的目录是家目录。</li>
<li><code>#</code>：命令提示符，Linux 用这个符号标识登录的用户权限等级。如果是超级用户，提示符就是 <code>#</code>；如果是普通用户，提示符就是 <code>$</code>。</li>
</ul>
<p>家目录（又称主目录）是什么？ Linux 系统是纯字符界面，用户登录后，要有一个初始登录的位置，这个初始登录位置就称为用户的家：</p>
<ul>
<li>超级用户的家目录： <code>/root</code></li>
<li>普通用户的家目录： <code>/home/&lt;user&gt;</code></li>
</ul>
<p>用户在自己的家目录中拥有完整权限，所以我们也建议操作实验可以放在家目录中进行。我们切换一下用户所在目录，看看有什么效果。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cd /usr/local</span>
<span class="token punctuation">[</span>root@localhost local<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>仔细看，如果切换用户所在目录，那么命令提示符中的会变成用户当前所在目录的最后一个目录（不显示完整的所在目录 <code>/usr/local</code>，只显示最后一个目录 <code>local</code>）。</p>
<h3 id="命令的基本格式-1" tabindex="-1"><a class="header-anchor" href="#命令的基本格式-1" aria-hidden="true">#</a> 命令的基本格式</h3>
<p>接下来看看 Linux 命令的基本格式：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># 命令 [选项] [参数]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>命令格式中的 <code>[]</code> 代表可选项，也就是有些命令可以不写选项或参数，也能执行。那么，我们就用 Linux 中最常见的 <code>ls</code> 命令来解释一下命令的格式（有关 <code>ls</code> 命令的具体用法，后续章节会详细介绍）。如果按照命令的分类，那么 <code>ls</code> 命令应该属于目录操作命令。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls</span>
anaconda-ks.cfg	install.log	install.log.syslog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="选项的作用" tabindex="-1"><a class="header-anchor" href="#选项的作用" aria-hidden="true">#</a> 选项的作用</h3>
<p>选项的作用是调整命令功能。如果没有选项，那么命令只能执行最基本的功能；而一旦有选项，则可以显示更加丰富的数据。</p>
<p>Linux 的选项又分为短格式选项（<code>-l</code>）和长格式选项（<code>--all</code>）。短格式选项是英文的简写，用一个减号调用，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls -l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>而长格式选项是英文完整单词，一般用两个减号调用，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls --all</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>一般情况下，短格式选项是长格式选项的缩写，也就是一个短格式选项会有对应的长格式选项。当然也有例外，比如 <code>ls</code> 命令的短格式选项 -l 就没有对应的长格式选项。所以具体的命令选项可以通过后面我们要学习的帮助命令来进行査询。</p>
<h3 id="参数的作用" tabindex="-1"><a class="header-anchor" href="#参数的作用" aria-hidden="true">#</a> 参数的作用</h3>
<p>参数是命令的操作对象，一般文件、目录、用户和进程等可以作为参数被命令操作。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls -l anaconda-ks.cfg</span>
-rw------- <span class="token number">1</span> root root <span class="token number">1207</span> <span class="token number">1</span> 月 <span class="token number">14</span> <span class="token number">18</span>:18 anaconda-ks.cfg
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>但是为什么一开始 <code>ls</code> 命令可以省略参数？ 那是因为有默认参数。命令一般都需要加入参数，用于指定命令操作的对象是谁。如果可以省略参数，则一般都有默认参数。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls</span>
anaconda-ks.cfg install.log install.log.syslog
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这个 <code>ls</code> 命令后面没有指定参数，默认参数是当前所在位置，所以会显示当前目录下的文件名。</p>
<div class="custom-container tip"><p class="custom-container-title">总结</p>
<p><strong>命令的选项用于调整命令功能，而命令的参数是这个命令的操作对象。</strong></p>
</div>
<h2 id="目录操作命令" tabindex="-1"><a class="header-anchor" href="#目录操作命令" aria-hidden="true">#</a> 目录操作命令</h2>
<h3 id="ls-命令" tabindex="-1"><a class="header-anchor" href="#ls-命令" aria-hidden="true">#</a> ls 命令</h3>
<p><u><code>ls</code> 命令，是最常见的目录操作命令，其主要功能是显示当前目录下的内容。</u></p>
<p>英文原意：list directory contents</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls [选项] [文件名或目录名]</span>
选项 ：
	-a	：显示全部的文件，包括隐藏文件（开头为 <span class="token builtin class-name">.</span> 的文件）也一起罗列出来，这是最常用的选项之一。
	-A	：显示全部的文件，连同隐藏文件，但不包括 <span class="token builtin class-name">.</span> 与 <span class="token punctuation">..</span> 这两个目录。
	-d	：仅列出目录本身，而不是列出目录内的文件数据。 
	-h	：以人们易读的方式显示文件或目录大小，如 1KB、234MB、2GB 等。
	-i	：显示 inode 节点信息。
	-l	：使用长格式列出文件和目录信息。
	-r	：将排序结果反向输出，比如，若原本文件名由小到大，反向则为由大到小。
	-R	：连同子目录内容一起列出来，等于将该目录下的所有文件都显示出来。
	-S	：以文件容量大小排序，而不是以文件名排序。
	-t	：以时间排序，而不是以文件名排序。
	--color<span class="token operator">=</span>auto	：auto表示让系统自行依据配置来判断是否给予颜色。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>当 <code>ls</code> 命令不使用任何选项时，默认只会显示非隐藏文件的名称，并以文件名进行排序，同时会根据文件的具体类型给文件名配色（蓝色显示目录，白色显示一般文件）。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls -l</span>
-rw-------.   <span class="token number">1</span> root root     <span class="token number">1423</span> <span class="token number">3</span>月  <span class="token number">23</span> 01:54 anaconda-ks.cfg
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>ls</code> 命令使用了“-l”选项，显示出文件的详细信息，此选项显示的这 7 列的含义分别是：</p>
<blockquote>
<ul>
<li>第一列：规定了不同的用户对文件所拥有的权限，具体权限的含义将在后续章节中讲解。</li>
<li>第二列：引用计数，文件的引用计数代表该文件的硬链接个数，而目录的引用计数代表该目录有多少个一级子目录。</li>
<li>第三列：所有者，也就是这个文件属于哪个用户。默认所有者是文件的建立用户。</li>
<li>第四列：所属组，默认所属组是文件建立用户的有效组，一般情况下就是建立用户的所在组。</li>
<li>第五列：大小，默认单位是字节。</li>
<li>第六列：文件修改时间，文件状态修改时间或文件数据修改时间都会更改这个时间，注意这个时间不是文件的创建时间。</li>
<li>第七列：文件名或目录名。</li>
</ul>
</blockquote>
</div>
<h3 id="cd-命令" tabindex="-1"><a class="header-anchor" href="#cd-命令" aria-hidden="true">#</a> cd 命令</h3>
<p><u><code>cd</code> 命令，用来切换工作目录。</u></p>
<p>英文原意：Change Directory</p>
<p>Linux 命令按照来源方式，可分为两种，分别是 Shell 内置命令和外部命令。所谓 Shell 内置命令，就是 Shell 自带的命令，这些命令是没有执行文件的；而外部命令就是由程序员单独开发的，所以会有命令的执行文件。Linux 中的绝大多数命令是外部命令，而 <code>cd</code> 命令是一个典型的 Shell 内置命令，所以 <code>cd</code> 命令没有执行文件所在路径。</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cd [相对路径或绝对路径]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>除此之外，<code>cd</code> 命令后面可以跟一些特殊符号，表达固定的含义。如表4-1 所示。</p>
<p><strong>表4-1	<u>特殊符号的含义</u></strong></p>
<table>
<thead>
<tr>
<th>特殊符号</th>
<th>作 用</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>~</code></td>
<td>代表当前登录用户的主目录</td>
</tr>
<tr>
<td><code>~&lt;user&gt;</code></td>
<td>表示切换至指定用户的主目录</td>
</tr>
<tr>
<td><code>-</code></td>
<td>代表上次所在目录</td>
</tr>
<tr>
<td><code>.</code></td>
<td>代表当前目录</td>
</tr>
<tr>
<td><code>..</code></td>
<td>代表上级目录</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>在 Linux 系统中，根目录确实存在 <code>.</code>（当前目录）以及 <code>..</code>（当前目录的父目录）两个目录，但由于根目录是最顶级目录，因此根目录的 <code>..</code> 和 <code>.</code> 的属性和权限完全一致，也就是说，根目录的父目录是自身。</p>
</div>
<h3 id="mkdir-命令" tabindex="-1"><a class="header-anchor" href="#mkdir-命令" aria-hidden="true">#</a> mkdir 命令</h3>
<p><u><code>mkdir</code> 命令，用于创建新目录。</u></p>
<p>英文原意：make directories</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mkdir [选项] 目录名</span>
选项：
	-m	：用于手动配置所创建目录的权限，而不再使用默认权限。
	-p	：递归创建所有目录。

<span class="token comment">#以创建 /home/test/demo 为例，在默认情况下，您需要一层一层的创建各个目录，而使用 -p 选项，则系统会自动帮您创建 home、/home/test 以及 home/test/demo。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="rmdir-命令" tabindex="-1"><a class="header-anchor" href="#rmdir-命令" aria-hidden="true">#</a> rmdir 命令</h3>
<p><u><code>rmdir</code> 命令，命令用于<strong>删除空目录</strong>，和 <code>mkdir</code> 命令相反。</u></p>
<p>英文原意：remove empty directories</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># rmdir [选项] 目录名</span>
选项：
	-p	：选项用于递归删除空目录。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p><strong><code>rmdir</code> 命令的作用十分有限，因为只能刪除空目录，所以一旦目录中有内容，就会报错。</strong></p>
</div>
<h3 id="pwd-命令" tabindex="-1"><a class="header-anchor" href="#pwd-命令" aria-hidden="true">#</a> pwd 命令</h3>
<p><u><code>pwd</code> 命令，功能是显示用户当前所处的工作目录。</u></p>
<p>英文原意：Print Working Directory</p>
<p>由于 Linux 文件系统中有许多目录，当用户执行一条 Linux 命令又没有指定该命令或参数所在的目录时，Linux 系统就会首先在当前目录搜寻这个命令或它的参数。因此，用户在执行命令之前，常常需要确定目前所在的工作目录，即当前目录。</p>
<p>当用户登陆 Linux 系统之后，其当前目录就是它的主目录。那么，如何确定当前目录呢？可以使用 Linux 系统的 <code>pwd</code> 命令来显示当前目录的绝对路径。</p>
<p>命令格如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># pwd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="tree-命令" tabindex="-1"><a class="header-anchor" href="#tree-命令" aria-hidden="true">#</a> tree 命令</h3>
<p><code>tree</code> 命令，用于以树状图列出目录的内容。</p>
<p>英文原意：list contents of directories in a tree-like format</p>
<p>执行 <code>tree</code> 命令，它会列出指定目录下的所有文件，包括子目录里的文件。</p>
<p>命令格如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># tree 目录名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>用法比较单一，就是显示目录树。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 例子：</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># tree ./share/</span>
./share/
├── doc
│   └── <span class="token function">node</span>
│       ├── gdbinit
│       └── lldb_commands.py
├── <span class="token function">man</span>
│   └── man1
│       └── node.1
└── systemtap
    └── tapset
        └── node.stp

<span class="token number">6</span> directories, <span class="token number">4</span> files
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="文件操作命令" tabindex="-1"><a class="header-anchor" href="#文件操作命令" aria-hidden="true">#</a> 文件操作命令</h2>
<p>其实计算机的基本操作大多数可以归纳为“增删改查”四个字，文件操作也不例外。只是修改文件数据需要使用文件编辑器，如 <code>vim</code>、<code>nano</code> 等。而编辑器操作不是一句两句就可以说明白的，所以暂且不说。</p>
<h3 id="touch-命令" tabindex="-1"><a class="header-anchor" href="#touch-命令" aria-hidden="true">#</a> touch 命令</h3>
<p><code>touch</code> 命令，如果文件不存在，则会建立空文件；如果文件已经存在，则会修改文件的时间戳（访问时间、数据修改时间、状态修改时间都会改变)。千万不要把 <code>touch</code> 命令当成新建文件的命令，牢牢记住这是触摸的意思。</p>
<p>英文原意：change file timestamps</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># touch [选项] 文件名</span>
选项：
	-a	：只修改文件的访问时间。
	-c	：仅修改文件的时间参数（3 个时间参数都改变），如果文件不存在，则不建立新文件。
	-d	：后面可以跟欲修订的日期，而不用当前的日期，即把文件的 atime 和 mtime 时间改为指定的时间。
	-m	：只修改文件的数据修改时间。
	-t	：命令后面可以跟欲修订的时间，而不用目前的时间，时间书写格式为 YYMMDDhhmm。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code>touch</code> 命令可以只修改文件的访问时间，也可以只修改文件的数据修改时间，但是不能只修改文件的状态修改时间。因为，不论是修改访问时间，还是修改文件的数据时间，对文件来讲，状态都会发生改变，即状态修改时间会随之改变（更新为操作当前文件的真正时间）。</p>
<div class="custom-container tip"><p class="custom-container-title">说明</p>
<p>Linux 系统中，文件没有创建时间，文件主要拥有 3 个时间参数（通过 <code>stat</code> 命令进行查看），分别是文件的访问时间、数据修改时间以及状态修改时间：</p>
<blockquote>
<ul>
<li>访问时间 （Access Time，简称 atime）：只要文件的内容被读取，访问时间就会更新。例如，使用 <code>cat</code> 命令可以查看文件的内容，此时文件的访问时间就会发生改变。</li>
<li>数据修改时间 （Modify Time，简称 mtime）：当文件的内容数据发生改变，此文件的数据修改时间就会跟着相应改变。</li>
<li>状态修改时间 （Change Time，简称 ctime）：当文件的状态发生变化，就会相应改变这个时间。比如说，如果文件的权限或者属性发生改变，此时间就会相应改变。</li>
</ul>
</blockquote>
</div>
<h3 id="stat-命令" tabindex="-1"><a class="header-anchor" href="#stat-命令" aria-hidden="true">#</a> stat 命令</h3>
<p><code>stat</code> 命令，用于显示文件的状态信息。以文字的格式来显示 inode 的内容。</p>
<p>英文原意：display file or file system status</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># stat [选项] 文件或目录</span>
选项：
	-f	：显示文件系统状态而非文件状态。
	-t	：以简洁方式输出信息。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>例子：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># stat anaconda-ks.cfg</span>
  文件：<span class="token string">"anaconda-ks.cfg"</span>
  大小：1423      	块：8          IO 块：4096   普通文件
设备：fd00h/64768d	Inode：8409167     硬链接：1
权限：<span class="token punctuation">(</span>0600/-rw-------<span class="token punctuation">)</span>  Uid：<span class="token punctuation">(</span>    <span class="token number">0</span>/    root<span class="token punctuation">)</span>   Gid：<span class="token punctuation">(</span>    <span class="token number">0</span>/    root<span class="token punctuation">)</span>
环境：system_u:object_r:admin_home_t:s0
最近访问：2021-03-23 01:54:45.054000000 -0400
最近更改：2021-03-23 01:54:45.059000000 -0400
最近改动：2021-03-23 01:54:45.059000000 -0400
创建时间：-
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>事实上，<code>stat</code> 命令显示的是文件的 i节点信息。Linux 文件系统以块为单位存储信息，为了找到某一个文件所在存储空间的位置，用 i节点对每个文件进行索引。所谓的 i节点，是文件系统管理的一个数据结构，是一个 64 字节长的表，包含了描述文件所必要的全部信息，其中包含了文件的大小、类型、存取权限、文件的所有者等等。</p>
</div>
<h3 id="cat-命令" tabindex="-1"><a class="header-anchor" href="#cat-命令" aria-hidden="true">#</a> cat 命令</h3>
<p><code>cat</code> 命令，用于查看文件内容。不论文件内容有多少，都会一次性显示。</p>
<p>如果文件非常大，那么文件开头的内容就看不到了。不过 Linux 可以使用 <kbd>PgUp</kbd>+<kbd>上箭头</kbd> 向上翻页，但是这种翻页是有极限的，如果文件足够长，那么还是无法看全文件的内容。所以 <code>cat</code> 命令适合查看不太大的文件。</p>
<p>英文原意：concatenate files and print on the standard output</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cat [选项] 文件名</span>
选项：
	-n	：由 <span class="token number">1</span> 开始对所有输出的行数编号。
	-b	：和 -n 相似，只不过对于空白行不编号。
	-v	：使用 ^ 和 M- 符号，除了 LFD 和 TAB 之外。
	-E	：在每行结束处显示 $。
	-T	：将 TAB 字符显示为 ^I。
	-A	：等价于 -vET。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="more-命令" tabindex="-1"><a class="header-anchor" href="#more-命令" aria-hidden="true">#</a> more 命令</h3>
<p><code>more</code> 命令，用于分屏显示文件内容。</p>
<p>如果文件过大，则 <code>cat</code> 命令会有心无力，这时 <code>more</code> 命令的作用更加明显。</p>
<p>英文原意：file perusal filter for crt viewing</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># more 文件名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>more命令比较简单，一般不用什么选项，命令会打开一个交互界面。常用交互命令如下：</p>
<blockquote>
<p><strong>空格：向下翻页。</strong></p>
<p><strong>b键：向上翻页。</strong></p>
<p><strong>回车：向下滚一行。</strong></p>
<p><strong>/字符串：搜索指定的字符串。</strong></p>
<p><strong>q键：退出。</strong></p>
</blockquote>
</div>
<h3 id="less-命令" tabindex="-1"><a class="header-anchor" href="#less-命令" aria-hidden="true">#</a> less 命令</h3>
<p><code>less</code> 命令，用于分行显示文件内容。</p>
<p>和 <code>more</code> 命令类似，只是 <code>more</code> 是分屏显示命令，而 <code>less</code> 是分行显示命令.</p>
<p>英文原意：opposite of more</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># less 文件名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p><code>less</code> 命令可以使用上、下箭头，用于分行查看文件内容。</p>
</div>
<h3 id="head-命令" tabindex="-1"><a class="header-anchor" href="#head-命令" aria-hidden="true">#</a> head 命令</h3>
<p><code>head</code> 命令，用来显示文件开头内容。</p>
<p>英文原意：output the first part of files</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># head [选项] 文件名</span>
选项：
	-n	：行数，从文件头开始，显示指定行数。
	-v	：显示文件名。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>也可以直接使用 <code>head -行数 文件名</code> 显示文件开头的行数内容。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># head -20 anaconda-ks.cfg</span>
<span class="token comment">#显示文件 anaconda-ks.cfg 的开头前 20 行的内容</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div>
<h3 id="tail-命令" tabindex="-1"><a class="header-anchor" href="#tail-命令" aria-hidden="true">#</a> tail 命令</h3>
<p><code>tail</code> 命令，用来显示文件末尾内容。</p>
<p>既然有显示文件开头的命令，就会有显示文件末尾的命令。<code>tail</code> 命令就是显示文件末尾内容的命令。</p>
<p>英文原意：output the last part of files</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># tail [选项] 文件名</span>
选项：
	-n	：行数，从文件结尾开始，显示指定行数。
	-f	：监听文件的新增内容。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong><code>tail</code> 的特殊用法，监听文件的新增内容。</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 例子：</span>
<span class="token punctuation">[</span>root@localnost ~<span class="token punctuation">]</span><span class="token comment"># tail -f anaconda-ks.cfg</span>
@server-platform
@server-policy
pax
oddjob
sgpio
certmonger
pam_krb5
krb5-workstation
per1-DBD-SQLite
%end
<span class="token comment">#光标不会退出文件，而会一直监听在文件的结尾处</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>这条命令会显示文件的最后 10 行内容，而且光标不会退出命令，而会一直监听在文件的结尾处，等待显示新增内容。这时如果向文件中追加一些数据（需要开启一个新终端），那么上面的末尾的 <strong>%<u>end</u></strong> 后面紧接着会显示追加的内容。退出监听状态，可使用 <kbd>Ctrl</kbd>+<kbd>Z</kbd> 或者  <kbd>Ctrl</kbd>+<kbd>C</kbd> 。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>也可以直接使用 <code>tail -行数 文件名</code> 显示文件末尾的行数内容。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># tail -20 anaconda-ks.cfg</span>
<span class="token comment">#显示文件 anaconda-ks.cfg 的末尾的 20 行的内容</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div>
<h3 id="ln-命令" tabindex="-1"><a class="header-anchor" href="#ln-命令" aria-hidden="true">#</a> ln 命令</h3>
<p>如果要想说清楚 <code>ln</code> 命令，则必须先解释下 ext 文件系统（ Linux 文件系统）是如何工作的。我们的 Linux 目前使用的是 ext4 文件系统。</p>
<h4 id="ext4-文件系统" tabindex="-1"><a class="header-anchor" href="#ext4-文件系统" aria-hidden="true">#</a> ext4 文件系统</h4>
<p>ext4 文件系统把分区主要分为两大部分（暂时不提超级块）：小部分用于保存文件的 inode（ i节点）信息；剩余的大部分用于保存 block 信息。如图4-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Linux/Linux_basic/assets/ext4.jpg" alt="ext4" loading="lazy"></p>
<p><strong>图4-1	<u>ext4 文件系统示意图</u></strong></p>
</div>
<p>inode 的默认大小为 128 Byte，用来记录文件的权限（ r、w、x ）、文件的所有者和属组、文件的大小、文件的状态改变时间（ ctime ）、文件的最近一次读取时间（ atime ）、文件的最近一次修改时间（ mtime ）、文件的数据真正保存的 block 编号。每个文件需要占用一个 inode。大家如果仔细查看，就会发现 inode 中是不记录文件名的，那是因为文件名记录在文件所在目录的 block 中。</p>
<p>block 的大小可以是 1KB、2KB、4KB，默认为 4KB。block 用于实际的数据存储，如果一个 block 放不下数据，则可以占用多个 block。例如，有一个 10KB 的文件需要存储，则会占用 3 个 block，虽然最后一个 block 不能占满，但也不能再放入其他文件的数据。这 3 个 block 有可能是连续的，也有可能是分散的。</p>
<p>由此，我们可以知道以下 2 个重要的信息：</p>
<ol>
<li>每个文件都独自占用一个 inode，文件内容由 inode 的记录来指向；</li>
<li>如果想要读取文件内容，就必须借助目录中记录的文件名找到该文件的 inode，才能成功找到文件内容所在的 block 块；</li>
</ol>
<p>了解了 Linux 系统底层文件的存储状态后，接下来学习 <code>ln</code> 命令。</p>
<h4 id="ln-命令用法" tabindex="-1"><a class="header-anchor" href="#ln-命令用法" aria-hidden="true">#</a> ln 命令用法</h4>
<p><code>ln</code> 命令，用于给文件创建链接，根据 Linux 系统存储文件的特点，链接的方式分为以下 2 种：</p>
<ul>
<li>软链接：类似于 Windows 系统中给文件创建快捷方式，即产生一个特殊的文件，该文件用来指向另一个文件，此链接方式同样适用于目录。</li>
<li>硬链接：我们知道，文件的基本信息都存储在 inode 中，而硬链接指的就是给一个文件的 inode 分配多个文件名，通过任何一个文件名，都可以找到此文件的 inode，从而读取该文件的数据信息。</li>
</ul>
<p>英文原意：make links between files</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ln [选项] 源文件 目标文件</span>
选项：
	-s	：建立软链接文件。如果不加 -s 选项，则建立硬链接文件。
	-f	：强制。如果目标文件已经存在，则删除目标文件后再建立链接文件。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>建立硬链接和软链接非常简单，那这两种链接有什么区别？它们都有什么作用？这才是链接文件最不容易理解的地方，我们分别来讲讲。</p>
<h4 id="ln-创建硬链接" tabindex="-1"><a class="header-anchor" href="#ln-创建硬链接" aria-hidden="true">#</a> ln 创建硬链接</h4>
<p>我们再来建立一个硬链接文件，然后看看这两个文件的特点。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># touch test</span>
<span class="token comment">#建立源文件</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ln /root/test /tmp/test-hard</span>
<span class="token comment">#给源文件建立硬链接文件 /tmp/test-hard</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll -i /root/test /tmp/test-hard</span>
<span class="token number">262147</span> -rw-r--r-- <span class="token number">2</span> root root <span class="token number">0</span> <span class="token number">6</span>月 <span class="token number">19</span> <span class="token number">10</span>:06 /root/test
<span class="token number">262147</span> -rw-r--r-- <span class="token number">2</span> root root <span class="token number">0</span> <span class="token number">6</span>月 <span class="token number">19</span> <span class="token number">10</span>:06 /tmp/test-hard
<span class="token comment">#查看两个文件的详细信息，可以发现这两个文件的 inode 号是一样的，"ll"等同于"ls -l"。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>这里有一件很奇怪的事情，我们之前在讲 inode 号的时候说过，每个文件的 inode 号都应该是不一样的。inode 号就相当于文件 ID，我们在查找文件的时候，要先查找 inode 号，才能读取到文件的内容。</p>
<p>但是这里源文件和硬链接文件的 inode 号居然是一样的，那我们在查找文件的时候，到底找到的是哪一个文件呢？我们来画一张示意图，如图4-2 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Linux/Linux_basic/assets/hardlink.jpg" alt="Hardlink" loading="lazy"></p>
<p><strong>图4-2	<u>硬链接示意图</u></strong></p>
</div>
<p>在 inode 信息中，是不会记录文件名称的，而是把文件名记录在上级目录的 block 中。也就是说，目录的 block 中记录的是这个目录下所有一级子文件和子目录的文件名及 inode 的对应；而文件的 block 中记录的才是文件实际的数据。</p>
<p>当我们查找一个文件，比如 <code>/root/test</code> 时，要经过以下步骤:</p>
<blockquote>
<ul>
<li>首先找到根目录的 inode（根目录的 inode 是系统已知的，inode 号是 2），然后判断用户是否有权限访问根目录的 block。</li>
<li>如果有权限，则可以在根目录的 block 中访问到 <code>/root</code> 的文件名及对应的 inode 号。</li>
<li>通过 <code>/root/</code> 目录的 inode 号，可以查找到 <code>/root/</code> 目录的 inode 信息，接着判断用户是否有权限访问 <code>/root/</code> 目录的 block。</li>
<li>如果有权限，则可以从 <code>/root/</code> 目录的 block 中读取到 test 文件的文件名及对应的 inode 号。</li>
<li>通过 test 文件的 inode 号，就可以找到 test 文件的 inode 信息，接着判断用户是否有权限访问 test 文件的 block。</li>
<li>如果有权限，则可以读取 block 中的数据，这样就完成了 <code>/root/test</code> 文件的读取与访问。</li>
</ul>
</blockquote>
<p>按照这个步骤，在给源文件 <code>/root/test</code> 建立了硬链接文件 <code>/tmp/test-hard</code> 之后，在 <code>/root/</code> 目录和 <code>/tmp/</code> 目录的 block 中就会建立 test 和 test-hard 的信息，这个信息主要就是文件名和对应的 inode 号。但是我们会发现 test 和 test-hard 的 inode 信息居然是一样的，那么，我们无论访问哪个文件，最终都会访问 inode 号是 262147 的文件信息。</p>
<p>这就是硬链接的原理。<strong>硬链接的特点</strong>如下：</p>
<ul>
<li>不论是修改源文件（test 文件），还是修改硬链接文件（test-hard 文件），另一个文件中的数据都会发生改变。</li>
<li>不论是删除源文件，还是删除硬链接文件，只要还有一个文件存在，这个文件（inode 号是 262147 的文件）都可以被访问。</li>
<li>硬链接不会建立新的 inode 信息，也不会更改 inode 的总数。</li>
<li>硬链接不能跨文件系统（分区）建立，因为在不同的文件系统中，inode 号是重新计算的。</li>
<li>硬链接不能链接目录，因为如果给目录建立硬链接，那么不仅目录本身需要重新建立，目录下所有的子文件，包括子目录中的所有子文件都需要建立硬链接，这对当前的 Linux 来讲过于复杂。</li>
</ul>
<p>硬链接的限制比较多，既不能跨文件系统，也不能链接目录，而且源文件和硬链接文件之间除 inode 号是一样的之外，没有其他明显的特征。这些特征都使得硬链接并不常用，大家有所了解就好。</p>
<h4 id="ln-创建软链接" tabindex="-1"><a class="header-anchor" href="#ln-创建软链接" aria-hidden="true">#</a> ln 创建软链接</h4>
<p>软链接也称作符号链接，相比硬链接来讲，软链接就要常用多了。我们先建立一个软链接，再来看看软链接的特点。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># touch check</span>
<span class="token comment">#建立源文件</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ln -s /root/check /tmp/check-soft</span>
<span class="token comment">#建立软链接文件</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll -id /root/check /tmp/check-soft</span>
<span class="token number">262154</span> -rw-r--r-- <span class="token number">1</span> root root <span class="token number">0</span> <span class="token number">6</span>月 <span class="token number">19</span> <span class="token number">11</span>:30 /root/check
<span class="token number">917507</span> lrwxrwxrwx <span class="token number">1</span> root root <span class="token number">11</span> <span class="token number">6</span>月 <span class="token number">19</span> <span class="token number">11</span>:31 /tmp/ check-soft -<span class="token operator">></span> /root/check
<span class="token comment">#软链接和源文件的 inode 号不一致，软链接通过 -> 明显地标识出源文件的位置</span>
<span class="token comment">#在软链接的权限位 lrwxrwxrwx 中，l 就代表软链接文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>再强调一下，<strong>软链接的源文件必须写绝对路径</strong>，否则建立的软链接文件就会报错，无法正常使用。</p>
<p>软链接的标志非常明显，首先，权限位中&quot;l&quot;表示这是一个软链接文件；其次，在文件的后面通过 &quot;-&gt;&quot; 显示出源文件的完整名字。所以软链接比硬链接的标志要明显得多，而且软链接也不像硬链接的限制那样多，比如软链接可以链接目录，也可以跨分区来建立软链接。</p>
<p>软链接完全可以当作 Windows 的快捷方式来对待，它的特点和快捷方式一样，我们更推荐大家使用软链接，而不是硬链接。</p>
<p>大家在学习软链接的时候会有一些疑问：Windows 的快捷方式是由于源文件放置的位置过深，不容易找到，建立一个快捷方式放在桌面，方便查找，那 Linux 的软链接的作用是什么呢？</p>
<p>软链接主要是为了照顾管理员的使用习惯。比如，有些系统的自启动文件 <code>/etc/rc.local</code> 放置在 <code>/etc</code> 目录中，而有些系统却将其放置在 <code>/etc/rc.d/rc.local</code> 中，那么干脆对这两个文件建立软链接，不论您习惯操作哪一个文件，结果都是一样的。</p>
<p>如果您比较细心，则应该已经发现软链接和源文件的 inode 号是不一致的，我们也画一张示意图来看看软链接的原理，如图4-3 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Linux/Linux_basic/assets/softlink.jpg" alt="软链接示意图" loading="lazy"></p>
<p><strong>图4-3	<u>软链接示意图</u></strong></p>
</div>
<p>软链接和硬链接在原理上最主要的不同在于：硬链接不会建立自己的 inode 索引和 block（数据块），而是直接指向源文件的 inode 信息和 block，所以硬链接和源文件的 inode 号是一致的；而软链接会真正建立自己的 inode 索引和 block，所以软链接和源文件的 inode 号是不一致的，而且在软链接的 block 中，写的不是真正的数据，而仅仅是源文件的文件名及 inode 号。</p>
<p>我们来看看访问软链接的步骤和访问硬链接的步骤有什么不同。</p>
<blockquote>
<ul>
<li>首先找到根目录的 inode 索引信息，然后判断用户是否有权限访问根目录的 block。</li>
<li>如果有权限访问根目录的 block，就会在 block 中查找到 <code>/tmp/</code> 目录的 inode 号。</li>
<li>接着访问 <code>/tmp/</code> 目录的 inode 信息，判断用户是否有权限访问 <code>/tmp/</code> 目录的 block。</li>
<li>如果有权限，就会在 block 中读取到软链接文件 check-soft 的 inode 号。因为软链接文件会真正建立自己的 inode 索引和 block，所以软链接文件和源文件的 inode 号是不一样的。</li>
<li>通过软链接文件的 inode 号，找到了 check-soft 文件 inode 信息，判断用户是否有权限访问 block。</li>
<li>如果有权限，就会发现 check-soft 文件的 block 中没有实际数据，仅有源文件 check 的 inode 号。</li>
<li>接着通过源文件的 inode 号，访问到源文件 check 的 inode 信息，判断用户是否有权限访问 block。</li>
<li>如果有权限，就会在 check 文件的 block 中读取到真正的数据，从而完成数据访问。</li>
</ul>
</blockquote>
<p>通过这个过程，我们就可以总结出<strong>软链接的特点</strong>（软链接的特点和 Windows 中的快捷方式完全一致）。</p>
<ul>
<li>不论是修改源文件（check），还是修改硬链接文件（check-soft），另一个文件中的数据都会发生改变。</li>
<li>删除软链接文件，源文件不受影响。而删除源文件，软链接文件将找不到实际的数据，从而显示文件不存在。</li>
<li>软链接会新建自己的 inode 信息和 block，只是在 block 中不存储实际文件数据，而存储的是源文件的文件名及 inode 号。</li>
<li>软链接可以链接目录。</li>
<li>软链接可以跨分区。</li>
</ul>
<h2 id="文件目录皆可操作的命令" tabindex="-1"><a class="header-anchor" href="#文件目录皆可操作的命令" aria-hidden="true">#</a> 文件目录皆可操作的命令</h2>
<h3 id="rm-命令" tabindex="-1"><a class="header-anchor" href="#rm-命令" aria-hidden="true">#</a> rm 命令</h3>
<p><code>rm</code> 命令，是强大的删除命令，不仅可以删除文件，也可以删除目录。</p>
<p>英文原意：remove files or directories</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># rm [选项] 文件或目录</span>
选项：
	-f	：强制删除
	-r	：第归删除，可以删除目录
	-i	：交互删除，在删除之前会询问用户
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol>
<li><strong>基本用法</strong></li>
</ol>
<p><code>rm</code> 命令如果任何选项都不加，则默认执行的是 <code>rm -i 文件名</code>，也就是在删除一个文件之前会先询问是否删除。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># touch cangls</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># rm cangls</span>
rm:是否删除普通空文件<span class="token string">"cangls"</span>?y
<span class="token comment">#删除前会询问是否删除</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="2">
<li><strong>删除目录</strong></li>
</ol>
<p>如果需要删除目录，则需要使用 <code>-r</code> 选项。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mkdir -p /test/lm/movie/jp</span>
<span class="token comment">#递归建立测试目录</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># rm /test</span>
rm:无法删除<span class="token string">"/test/"</span>：是一个目录
<span class="token comment">#如果不加"-r"选项，则会报错</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># rm -r /test</span>
rm:是否进入目录<span class="token string">"/test"</span>?y
rm:是否进入目录<span class="token string">"/test/lm/movie"</span>?y
rm:是否删除目录<span class="token string">"/test/lm/movie/jp"</span>?y
rm:是否删除目录<span class="token string">"/test/lm/movie"</span>?y
rm:是否删除目录<span class="token string">"/test/lm"</span>?y
rm:是否删除目录<span class="token string">"/test"</span>?y
<span class="token comment">#会分别询问是否进入子目录、是否删除子目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>大家会发现，如果每级目录和每个文件都需要确认，那么在实际使用中简直是灾难!</p>
<ol start="3">
<li><strong>强制删除</strong></li>
</ol>
<p>如果要删除的目录中有 1 万个子目录或子文件，那么普通的 <code>rm</code> 删除最少需要确认 1 万次。所以，在真正删除文件的时候，我们会选择强制删除。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mkdir -p /test/lm/movie/jp</span>
<span class="token comment">#重新建立测试目录</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># rm -rf /test</span>
<span class="token comment">#强制删除，一了百了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>加入了强制功能之后，删除就会变得很简单，但是需要注意，数据强制删除之后无法恢复，除非依赖第三方的数据恢复工具，如 extundelete 等。但要注意，数据恢复很难恢复完整的数据，一般能恢复 70%~80% 就很难得了。所以，与其把宝压在数据恢复上，不如养成良好的操作习惯。</p>
<p>虽然 -rf 选项是用来删除目录的，但是删除文件也不会报错。所以，为了使用方便，一般不论是删除文件还是删除目录，都会直接使用 -rf 选项。</p>
<h3 id="cp-命令" tabindex="-1"><a class="header-anchor" href="#cp-命令" aria-hidden="true">#</a> cp 命令</h3>
<p><code>cp</code> 命令，既可以复制文件，也可以复制目录。</p>
<p>英文原意：copy files and directories</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cp [选项] 源文件 目标文件</span>
选项：
	-a	：相当于 -dpr 选项的集合，这几个选项我们一一介绍。
	-d	：如果源文件为软链接（对硬链接无效），则复制出的目标文件也为软链接。
	-i	：询问，如果目标文件已经存在，则会询问是否覆盖。
	-l	：把目标文件建立为源文件的硬链接文件，而不是复制源文件。
	-s	：把目标文件建立为源文件的软链接文件，而不是复制源文件。
	-p	：复制后目标文件保留源文件的属性（包括所有者、所属组、权限和时间）。
	-r	：递归复制，用于复制目录。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol>
<li><strong>基本用法</strong></li>
</ol>
<p><code>cp</code> 命令既可以复制文件，也可以复制目录。我们先来看看如何复制文件，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># touch cangls</span>
<span class="token comment">#建立源文件</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cp cangls /tmp/</span>
<span class="token comment">#把源文件不改名复制到 /tmp/ 目录下</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>如果需要改名复制，则命令如下:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cp cangls /tmp/bols</span>
<span class="token comment">#改名复制</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果复制的目标位置已经存在同名的文件，则会提示是否覆盖，因为 <code>cp</code> 命令默认执行的是 <code>cp -i</code> 的别名，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cp cangls /tmp/</span>
cp:是否覆盖<span class="token string">"/tmp/cangls"</span>?y
<span class="token comment">#目标位置有同名文件，所以会提示是否覆盖</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>接下来我们看看如何复制目录，其实复制目录只需使用 -r 选项即可，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mkdir movie</span>
<span class="token comment">#建立测试目录</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cp -r /root/movie/ /tmp/</span>
<span class="token comment">#目录原名复制</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="2">
<li><strong>复制软链接文件</strong></li>
</ol>
<p>如果源文件不是一个普通文件，而是一个软链接文件，那么是否可以复制软链接的属性呢？我们试试：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ln -s /root/cangls /tmp/cangls_slink</span>
<span class="token comment">#建立一个测试软链接文件 /tmp/cangls_slink</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll /tmp/cangls_slink</span>
lrwxrwxrwx <span class="token number">1</span> root root <span class="token number">12</span> <span class="token number">6</span> 月 <span class="token number">14</span> 05:53 /tmp/cangls_slink -<span class="token operator">></span> /root/cangls
<span class="token comment">#源文件本身就是一个软链接文件</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cp /tmp/cangls_slink /tmp/cangls_t1</span>
<span class="token comment">#复制软链接文件，但是不加"-d"选项</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cp -d /tmp/cangls_slink /tmp/cangls_t2</span>
<span class="token comment">#复制软链接文件，加入"-d"选项</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll /tmp/cangls_t1 /tmp/cangls_t2</span>
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">0</span> <span class="token number">6</span>月 <span class="token number">14</span> 05:56 /tmp/cangls_t1
<span class="token comment">#会发现不加"-d"选项，实际复制的是软链接的源文件，而不是软链接文件</span>
lrwxrwxrwx <span class="token number">1</span> root root <span class="token number">12</span> <span class="token number">6</span> 月 <span class="token number">14</span> 05:56/tmp/ cangls_t2-<span class="token operator">></span> /root/cangls
<span class="token comment">#而如果加入了"-d"选项，则会复制软链接文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>这个例子说明，如果在复制软链接文件时不使用 -d 选项，则 <code>cp</code> 命令复制的是源文件，而不是软链接文件；只有加入了 -d 选项，才会复制软链接文件。请大家注意，-d 选项对硬链接是无效的。</p>
<ol start="3">
<li><strong>保留源文件属性复制</strong></li>
</ol>
<p>我们发现，在执行复制命令后，目标文件的时间会变成复制命令的执行时间，而不是源文件的时间。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cp /var/lib/mlocate/mlocate.db /tmp/</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll /var/lib/mlocate/mlocate.db</span>
-rw-r-----1 root <span class="token function">slocate</span> <span class="token number">2328027</span> <span class="token number">6</span>月 <span class="token number">14</span> 02:08/var/lib/mlocate/mlocate.db
<span class="token comment">#注意源文件的时间和所属组</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment">#ll /tmp/mlocate.db</span>
-rw-r----- <span class="token number">1</span> root root <span class="token number">2328027</span> <span class="token number">6</span> 月 <span class="token number">14</span> 06:05/tmp/mlocate.db
<span class="token comment">#由于复制命令由root用户执行，所以目标文件的所属组为了root，而且时间也变成了复制命令的执行时间</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>而当我们执行备份、曰志备份的时候，这些文件的时间可能是一个重要的参数，这就需执行 -p 选项了。这个选项会保留源文件的属性，包括所有者、所属组和时间。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cp -p /var/lib/mlocate/mlocate.db /tmp/mlocate.db_2</span>
<span class="token comment">#使用"-p"选项</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll /var/lib/mlocate/mlocate.db /tmp/mlocate.db_2</span>
-rw-r----- root <span class="token function">slocate</span> <span class="token number">2328027</span> <span class="token number">6</span>月 <span class="token number">14</span> 02:08 /tmp/mlocate.db_2
-rw-r----- root <span class="token function">slocate</span> <span class="token number">2328027</span> <span class="token number">6</span>月 <span class="token number">14</span> 02:08 /var/lib/mlocate/mlocate.db
<span class="token comment">#源文件和目标文件的所有属性都一致，包括时间</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>我们之前讲过，-a 选项相当于 -dpr 选项，这几个选项我们已经分别讲过了。所以，当我们使用 -a 选项时，目标文件和源文件的所有属性都一致，包括源文件的所有者，所属组、时间和软链接性。使用 -a 选项来取代 -dpr 选项更加方便。</p>
<h3 id="mv-命令" tabindex="-1"><a class="header-anchor" href="#mv-命令" aria-hidden="true">#</a> mv 命令</h3>
<p><code>mv</code> 命令，既可以在不同的目录之间移动文件或目录，也可以对文件和目录进行重命名。</p>
<p>英文原意：move (rename) files</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mv [选项] 源文件 目标文件</span>
选项：
	-f	：强制覆盖，如果目标文件已经存在，则不询问，直接强制覆盖。
	-i	：交互移动，如果目标文件已经存在，则询问用户是否覆盖（默认选项）。
	-n	：如果目标文件已经存在，则不会覆盖移动，而且不询问用户。
	-v	：显示文件或目录的移动过程。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>同 <code>rm</code> 命令类似，<code>mv</code> 命令也是一个具有破坏性的命令，如果使用不当，很可能给系统带来灾难性的后果。</p>
</div>
<ol>
<li><strong>基本用法</strong></li>
</ol>
<p>移动文件或目录。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mv cangls /tmp</span>
<span class="token comment">#移动之后，源文件会被删除，类似剪切</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mkdir movie</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mv movie/ /tmp</span>
<span class="token comment">#也可以移动目录。和 rm、cp 不同的是，mv 移动目录不需要加入 "-r" 选项</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>如果移动的目标位置已经存在同名的文件，则同样会提示是否覆盖，因为 <code>mv</code> 命令默认执行的也是 <code>mv -i</code> 的别名，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># touch cangls</span>
<span class="token comment">#重新建立文件</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mv cangls /tmp</span>
mv:县否覆盖<span class="token string">"tmp/cangls"</span>? y
<span class="token comment">#由于 /tmp 目录下已经存在 cangls 文件，所以会提示是否覆盖，需要手工输入 y 覆盖移动</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="2">
<li><strong>强制移动</strong></li>
</ol>
<p>之前说过，如果目标目录下已经存在同名文件，则会提示是否覆盖，需要手工确认。这时如果移动的同名文件较多，则需要一个一个文件进行确认，很不方便。</p>
<p>如果我们确认需要覆盖已经存在的同名文件，则可以使用 -f 选项进行强制移动，这就不再需要用户手工确认了。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># touch cangls</span>
<span class="token comment">#重新建立文件</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mv -f cangls /tmp</span>
<span class="token comment">#就算 /tmp/ 目录下已经存在同名的文件，由于"-f"选项的作用，所以会强制覆盖</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="3">
<li><strong>不覆盖移动</strong></li>
</ol>
<p>既然可以强制覆盖移动，那也有可能需要不覆盖的移动。如果需要移动几百个同名文件，但是不想覆盖，这时就需要 -n 选项的帮助了。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls /tmp</span>
/tmp/bols /tmp/cangls
<span class="token comment">#在/tmp/目录下已经存在bols、cangls文件了</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mv -vn bols cangls lmls /tmp/</span>
<span class="token string">"lmls"</span>-<span class="token operator">></span><span class="token string">"/tmp/lmls"</span>
<span class="token comment">#再向 /tmp/ 目录中移动同名文件，如果使用了 "-n" 选项，则可以看到只移动了 lmls，而同名的 bols 和 cangls 并没有移动（"-v" 选项用于显示移动过程）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ol start="4">
<li><strong>改名</strong></li>
</ol>
<p>如果源文件和目标文件在同一目录中，那就是改名。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mv bols lmls</span>
<span class="token comment">#把 bols 改名为 lmls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>目录也可以按照同样的方法改名。</p>
<ol start="5">
<li><strong>显示移动过程</strong></li>
</ol>
<p>如果我们想要知道在移动过程中到底有哪些文件进行了移动，则可以使用 -v 选项来查看详细的移动信息。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># touch test1.txt test2.txt test3.txt</span>
<span class="token comment">#建立三个测试文件</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mv -v *.txt /tmp</span>
<span class="token string">"test1.txt"</span> -<span class="token operator">></span> <span class="token string">"/tmp/test1.txt"</span>
<span class="token string">"test2.txt"</span> -<span class="token operator">></span> <span class="token string">"/tmp/test2.txt"</span>
<span class="token string">"test3.txt"</span> -<span class="token operator">></span> <span class="token string">"/tmp/test3.txt"</span>
<span class="token comment">#加入"-v"选项，可以看到有哪些文件进行了移动</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></template>
