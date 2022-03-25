<template><h2 id="man-命令" tabindex="-1"><a class="header-anchor" href="#man-命令" aria-hidden="true">#</a> man 命令</h2>
<p><code>man</code> 命令，是最常见的帮助命令，也是 Linux 最主要的帮助命令。</p>
<p>英文原意：an interface to the on-line reference manuals</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># man [选项] 命令</span>
选项：
	-f	：查看命令拥有哪个级别的帮助
	-k	：查看和命令相关的所有帮助
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>man</code> 命令比较简单，我们举个例子：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># man ls</span>
<span class="token comment">#获取 ls 命令的帮助信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这就是 <code>man</code> 命令的基本使用方法，非常简单。但是帮助命令的重点不是命令如何使用，而是帮助信息应该如何查询。这些信息较多，我们通过下面的内容来详细讲解。</p>
<ol>
<li><strong>使用方法</strong></li>
</ol>
<p>还是查看 <code>ls</code> 命令的帮助，我们看看这个帮助信息的详细内容。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># man ls</span>
LS<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>                            User Commands                           LS<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

NAME
       <span class="token function">ls</span> - list directory contents
       <span class="token comment">#命令名称及英文原意</span>

SYNOPSIS
       <span class="token function">ls</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>FILE<span class="token punctuation">]</span><span class="token punctuation">..</span>.
       <span class="token comment">#命令的格式</span>

DESCRIPTION
<span class="token comment">#开始详细介绍命令选项的作用</span>
       List  information  about  the FILEs <span class="token punctuation">(</span>the current directory by default<span class="token punctuation">)</span>.
       Sort entries alphabetically <span class="token keyword">if</span> none of -cftuvSUX nor --sort  is  speci‐
       fied.

       Mandatory  arguments  to  long  options are mandatory <span class="token keyword">for</span> short options
       too.

       -a, --all
              <span class="token keyword">do</span> not ignore entries starting with <span class="token builtin class-name">.</span>

       -A, --almost-all
              <span class="token keyword">do</span> not list implied <span class="token builtin class-name">.</span> and <span class="token punctuation">..</span>

AUTHOR
<span class="token comment">#作者</span>
       Written by Richard M. Stallman and David MacKenzie.

REPORTING BUGS
<span class="token comment">#bug的报告地质</span>
       GNU coreutils online help: <span class="token operator">&lt;</span>http://www.gnu.org/software/coreutils/<span class="token operator">></span>
       Report <span class="token function">ls</span> translation bugs to <span class="token operator">&lt;</span>http://translationproject.org/team/<span class="token operator">></span>

COPYRIGHT
<span class="token comment">#著作权受GPL规则保护</span>
       Copyright © <span class="token number">2017</span> Free Software Foundation, Inc.   License  GPLv3+:  GNU
       GPL version <span class="token number">3</span> or later <span class="token operator">&lt;</span>http://gnu.org/licenses/gpl.html<span class="token operator">></span>.
       This  is  <span class="token function">free</span>  software:  you  are <span class="token function">free</span> to change and redistribute it.
       There is NO WARRANTY, to the extent permitted by law.

SEE ALSO
<span class="token comment">#可以通过其他哪些命令查看到 ls 的相关信息</span>
       Full documentation at: <span class="token operator">&lt;</span>http://www.gnu.org/software/coreutils/ls<span class="token operator">></span>
       or available locally via: info <span class="token string">'(coreutils) ls invocation'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><p>虽然不同命令的 <code>man</code> 信息有一些区别，但是每个命令 <code>man</code> 信息的整体结构皆如演示这样。在帮助信息中，我们主要查看的就是命令的格式和选项的详细作用。不过大家请注意，在 <code>man</code> 信息的最后，可以看到还有哪些命令可以查看到此命令的相关信息。这是非常重要的提示，不同的帮助信息记录的侧重点是不太一样的。所以，如果在 <code>man</code> 信息中找不到想要的内容，则可以尝试查看其他相关帮助命令。</p>
<ol start="2">
<li><strong><code>man</code> 命令的快捷键</strong></li>
</ol>
<p><code>man</code> 命令的快捷键可以参考表6-1。</p>
<p><strong>表6-1	<u>man 命令快捷键</u></strong></p>
<table>
<thead>
<tr>
<th>快捷键</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>上箭头</td>
<td>向上移动一行</td>
</tr>
<tr>
<td>下箭头</td>
<td>向下移动一行</td>
</tr>
<tr>
<td>PgUp</td>
<td>向上翻一页</td>
</tr>
<tr>
<td>PgDn</td>
<td>向下翻一页</td>
</tr>
<tr>
<td>g</td>
<td>移动到第一页</td>
</tr>
<tr>
<td>G</td>
<td>移动到最后一页</td>
</tr>
<tr>
<td>q</td>
<td>退出</td>
</tr>
<tr>
<td><code>/字符串</code></td>
<td>从当前页向下搜索<code>字符串</code></td>
</tr>
<tr>
<td><code>?字符串</code></td>
<td>从当前页向上搜索<code>字符串</code></td>
</tr>
<tr>
<td>n</td>
<td>当搜索字符串时，可以使用 n 键找到下一个字符串</td>
</tr>
<tr>
<td>N</td>
<td>当搜索字符串时，使用 N 键反向查询字符串。（与 n 作用相反）</td>
</tr>
</tbody>
</table>
<p>如果我们使用 <code>man -k ls</code> 命令，则会发现输出内容会多出几页，那是因为很多命令中都包含“ls”这个关键字。这条命令适合你只记得命令的几个字符，用来查找相关命令的情况。</p>
<p>在系统中还有两个命令。</p>
<ul>
<li>
<p><code>whatis</code>：这个命令的作用和 <code>man -f</code> 是一致的。</p>
</li>
<li>
<p><code>apropos</code>：这个命令的作用和 <code>man -k</code> 是一致的。</p>
</li>
</ul>
<p>不过这两个命令和 <code>man</code> 基本一致，所以了解就好。如果执行以上两个命令报错，那是因为 <code>whatis</code> 数据库没有建立。只要手工执行以下命令，重新建立 <code>whatis</code> 数据库即可。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># makewhatis</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="custom-container info"><p class="custom-container-title">补充</p>
<p>不过 Linux 的命令很有意思：</p>
<blockquote>
<p>想知道这个命令是干什么的，可以执行 <code>whatis</code> 命令；</p>
<p>想知道命令在哪里，可以执行 <code>whereis</code> 命令；</p>
<p>想知道当前登录用户是谁，可以执行 <code>whoami</code> 命令。</p>
</blockquote>
</div>
<h2 id="info-命令" tabindex="-1"><a class="header-anchor" href="#info-命令" aria-hidden="true">#</a> info 命令</h2>
<p><code>info</code> 命令，也可以获取命令的帮助。</p>
<p>英文原意：read Info documents</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># info 命令</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>和 <code>man</code> 命令不同的是，<code>info</code> 命令的帮助信息是一套完整的资料，每个单独命令的帮助信息只是这套完整资料中的某一个小章节。大家可以把 info 命令帮助信息看成一部独立的电子书，所以每个命令的帮助信息都会和书籍一样，拥有章节编号。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># info ls</span>
Next: <span class="token function">dir</span> invocation,  Up: Directory listing

<span class="token number">10.1</span> ‘ls’: List directory contents
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>

The ‘ls’ program lists information about files <span class="token punctuation">(</span>of any type, including
directories<span class="token punctuation">)</span>.  Options and <span class="token function">file</span> arguments can be intermixed arbitrarily,
as usual.
<span class="token punctuation">..</span>.省略部分内容<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>可以看到，<code>ls</code> 命令的帮助只是整个 <code>info</code> 帮助信息中的第 10.1 节。在这个帮助信息中，如果标题的前面有“*”符号，则代表这是一个可以进入查看详细信息的子页面，只要按下回车键就可以进入。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># info ls</span>
<span class="token punctuation">..</span>.省略部分内容<span class="token punctuation">..</span>.
   Also see *note Common options::.

* Menu:

* Which files are listed::
* What information is listed::
* Sorting the output::
* Details about version sort::
* General output formatting::
* Formatting <span class="token function">file</span> timestamps::
* Formatting the <span class="token function">file</span> names::
<span class="token punctuation">..</span>.省略部分内容<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>在 <code>ls</code> 命令的 <code>info</code> 帮助信息中可以查看详细的子页面的标题。<code>info</code> 命令主要是靠快捷键来进行操作的，我们来看看常用的快捷键，如表6-2 所示。</p>
<p><strong>表6-2	<u>info 命令的常用快捷键</u></strong></p>
<table>
<thead>
<tr>
<th>快捷键</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>上箭头</td>
<td>向上移动一行</td>
</tr>
<tr>
<td>下箭头</td>
<td>向下移动一行</td>
</tr>
<tr>
<td>PgUp</td>
<td>向上翻一页</td>
</tr>
<tr>
<td>PgDn</td>
<td>向下翻一页</td>
</tr>
<tr>
<td>Tab</td>
<td>在有“*”符号的节点进行切换</td>
</tr>
<tr>
<td>回车</td>
<td>进入有“*”符号的子页面，查看详细帮助信息</td>
</tr>
<tr>
<td>u</td>
<td>进入上一层信息（回车是进入下一层信息）</td>
</tr>
<tr>
<td>n</td>
<td>进入下一小节信息</td>
</tr>
<tr>
<td>p</td>
<td>进入上一小节信息</td>
</tr>
<tr>
<td>?</td>
<td>查看帮助信息</td>
</tr>
<tr>
<td>q</td>
<td>退出 info 信息</td>
</tr>
</tbody>
</table>
<p>这是常用的快捷键，其他快捷键可以使用“?”快捷键查看。</p>
<h2 id="help-命令" tabindex="-1"><a class="header-anchor" href="#help-命令" aria-hidden="true">#</a> help 命令</h2>
<p><code>help</code> 命令，是非常简单且不经常使用的帮助命令。</p>
<p>因为 <code>help</code> 只能获取 Shell 内置命令的帮助，但在 Linux 中绝大多数命令是外部命令，所以 <code>help</code> 命令的作用非常有限。而且内置命令也可以 使用 <code>man</code> 命令获取帮助。</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># help 内置命令 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Linux 中有哪些命令是内置命令呢？我们可以随意使用 <code>man</code> 命令来查看一个内置命令的帮助，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># man help</span>
BASH_BUILTINS<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>            General Commands Manual           BASH_BUILTINS<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

NAME
       bash,  :,  .,  <span class="token punctuation">[</span>, alias, bg, bind, break, builtin, caller, cd, command, compgen, complete, compopt,  continue,  declare,  dirs,  disown,  echo, enable,  eval,  exec, exit, export, false, fc, fg, getopts, hash, help, history, jobs, kill, let, local, logout, mapfile, popd, printf,  pushd, pwd,  read, readonly, return, set, shift, shopt, source, suspend, test, times, trap, true, type, typeset, ulimit, umask, unalias, unset, <span class="token function">wait</span> - <span class="token function">bash</span> built-in commands, see bash<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">..</span>.省略部分内容<span class="token punctuation">..</span>.
<span class="token comment">#这里列出的命令就是所有的 shell 内置命令</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="help-选项" tabindex="-1"><a class="header-anchor" href="#help-选项" aria-hidden="true">#</a> --help 选项</h2>
<p>绝大多数命令都可以使用 <strong>--help</strong> 选项来查看帮助，这也是一种获取帮助的方法。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls --help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这种方法非常简单，输出的帮助信息基本上是 <code>man</code> 命令的信息简要版。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>对于这 4 中常见的获取帮助的方法，大家可以按照自己的习惯任意使用。</p>
</div>
</template>
