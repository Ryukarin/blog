<template><h2 id="权限介绍" tabindex="-1"><a class="header-anchor" href="#权限介绍" aria-hidden="true">#</a> 权限介绍</h2>
<h3 id="为什么需要权限" tabindex="-1"><a class="header-anchor" href="#为什么需要权限" aria-hidden="true">#</a> 为什么需要权限</h3>
<p>我们发现，初学者并不是不能理解权限命令，而是不能理解为什么需要设定不同的权限。所有的人都直接使用管理员身份，不可以吗？这是由于绝大多数用户使用的是个人计算机，而使用个人计算机的用户一般都是被信任的用户（如家人、朋友等）。在这种情况下，大家都可 以使用管理员身份直接登录。又因为管理员拥有最大权限，所以给我们带来了错觉，以为在计算机中不需要分配权限等级，不需要使用不同的账户。但是在服务器上就不是这种情况了，在服务器上运行的数据越重要（如游戏数据），价值越高（如电子商城数据、银行数据），那么对权限的设定就要越详细，用户的分级也要越明确。所以，在服务器上，绝对不是所有的用户都使用 root 身份登录，而要根据不同的工作需要和职位需要，合理分配用户等级和权限等级。</p>
<h3 id="所有者、所属组和其他人" tabindex="-1"><a class="header-anchor" href="#所有者、所属组和其他人" aria-hidden="true">#</a> 所有者、所属组和其他人</h3>
<p>前面讲 <code>ls</code> 命令的 -l 选项时，简单解释过所有者和所属组以及其他人，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls -l install.log</span>
-rw-r--r--.   <span class="token number">1</span> root root    <span class="token number">24772</span> <span class="token number">1</span>月  <span class="token number">14</span> <span class="token number">18</span>:17 install.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>命令的第三列 root 用户就是文件的所有者，第四列 root 组就是文件的所属组。而且我们也介绍过，文件的所有者一般就是这个文件的建立者，而系统中绝大多数系统文件都是由 root 建立的，所以绝大多数系统文件的所有者都是 root。 接下来我们解释一下所属组，首先讲解一下用户组的概念。用户组就是一组用户的集合，类似于大学里的各种社团。那为什么要把用户放入一个用户组中呢？当然是为了方便管理。大家想想，如果我有 100 位用户，而这 100 位用户对同一个文件的权限是一致的，那我是一位用户一位用户地分配权限方便，还是把 100 位用户加入一个用户组中，然后给这个用户组分配权限方便呢？不言而喻，一定是给一个用户组分配权限更加方便。综上所述，给一个文件区分所有者、所属组和其他人，就是为了分配权限方便。就像你买了一台电脑，那你当然是这台电脑的所有者，可以把你的朋友加入一个用户组，其他不认识的路人当然就是其他人了。分配完了用户身份，就可以分配权限了，所有者当然对这台电脑拥有所有的权限，而位于所属组中的这些朋友可以借用你的电脑，而其他人则完全不能碰你的电脑。</p>
<h3 id="权限位的含义" tabindex="-1"><a class="header-anchor" href="#权限位的含义" aria-hidden="true">#</a> 权限位的含义</h3>
<p>前面讲解 <code>ls</code> 命令时，我们长格式显示的第一列就是文件的权限，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls -l install.log</span>
-rw-r--r--    <span class="token number">1</span> root root    <span class="token number">24772</span> <span class="token number">1</span>月  <span class="token number">14</span> <span class="token number">18</span>:17 install.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>第一列的权限位共有 10 位，这 10 位权限位的含义如图5-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Linux_basic/assets/per.png" alt="权限位" loading="lazy"></p>
<p><strong>图5-1	<u>权限位的含义</u></strong></p>
</div>
<ul>
<li>第 1 位代表文件类型</li>
</ul>
<blockquote>
<p>-：普通文件</p>
<p>b：块设备文件。这是一种特殊设备文件，存储设备都是这样的文件，如分区文件/dev/sda1就是这种文件。</p>
<p>c：字符设备文件。也是特殊设备文件，输入设备一般都是这种文件，如鼠标、键盘等。</p>
<p>d：目录文件。linux中一切皆文件，所以目录也是文件的一种。</p>
<p>l：软链接文件。相当于快捷方式。</p>
<p>p：管道符文件。这是一种非常少见的特殊设备文件。</p>
<p>s：套接字文件。这也是一种特殊设备文件，一些服务支持 Socket 访问，就会产生这样的文件。</p>
<p>?：其他文件</p>
</blockquote>
<ul>
<li>第 2～4 位代表文件所有者的权限。</li>
</ul>
<blockquote>
<p>-r：代表 read，是读取限。</p>
<p>-w：代表 write，是写权限。</p>
<p>-x：代表 execute，是执行权限。</p>
<p>如果有字母，代表对应的权限；如果是“-”，则代表没有对应的权限。</p>
</blockquote>
<ul>
<li>第 5～7 位代表文件所属组的权限。</li>
</ul>
<blockquote>
<p>同样拥有 rwx 权限</p>
</blockquote>
<ul>
<li>第 8～10 位代表文件的其他人权限。</li>
</ul>
<blockquote>
<p>同样拥有 rwx 权限</p>
</blockquote>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>有的文件拥有第 11 位权限位“.”，这个“.”是什么意思呢？这就不得要提到 SELinux 了。</p>
<p>SELinux（Security-Enhanced Linux）是美国国家安全局（NSA）对于强制访问控制的实现，是 Linux 历史上最杰出的新安全子系统。是一种基于“域-类型”模型（domain-type）的强制访问控制（MAC）安全系统，它由 NSA 编写并设计成内核模块包含到内核中，相应的某些安全相关的应用也被打了 SELinux 的补丁，最后还有一个相应的安全策略。2.6 及以上版本的 Linux 内核都已经集成了 SELinux 模块。</p>
<p>SELinux 的结构及配置非常复杂，而且有大量概念性的东西，要学精难度较大。很多 Linux 系统管理员嫌麻烦都把 SELinux 关闭了。如果可以熟练掌握 SELinux 并正确运用，我觉得整个系统基本上可以到达&quot;坚不可摧&quot;的地步了（请永远记住没有绝对的安全）。</p>
<p>其配置文件：  <code>/etc/selinux/config</code></p>
<p>SELinux 有三种工作模式，分别是：</p>
<ol>
<li>
<p>enforcing：强制模式。违反 SELinux 规则的行为将被阻止并记录到日志中。</p>
</li>
<li>
<p>permissive：宽容模式。违反 SELinux 规则的行为只会记录到日志中。一般为调试用。</p>
</li>
<li>
<p>disabled：关闭 SELinux。</p>
</li>
</ol>
</div>
<h2 id="chmod-命令" tabindex="-1"><a class="header-anchor" href="#chmod-命令" aria-hidden="true">#</a> chmod 命令</h2>
<p><code>chmod</code> 命令，用于修改文件权限。</p>
<p>英文原意：change file mode bits</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># chmod [选项] 权限模式 文件名</span>
选项：
	-R	：第归设置权限，也就是给子目录中所有文件设定权限。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="权限模式" tabindex="-1"><a class="header-anchor" href="#权限模式" aria-hidden="true">#</a> 权限模式</h3>
<p><code>chmod</code> 命令的权限模式的格式是<code>[ugoa][[+-=][perms]]</code>，也就是<code>[用户身份][[赋予方式][权限]]</code>的格式，我们来解释一下。</p>
<ul>
<li>用户身份。</li>
</ul>
<blockquote>
<p>u：代表所有者（user）。</p>
<p>g：代表所属组（group）。</p>
<p>o：代表其他人（other）。</p>
<p>a：代表全部身份（all）。</p>
</blockquote>
<ul>
<li>赋予方式。</li>
</ul>
<blockquote>
<p>+：加入权限。</p>
<p>-：减去权限。</p>
<p>=：设置权限。</p>
</blockquote>
<ul>
<li>权限。</li>
</ul>
<blockquote>
<p>r：读取权限（read）。</p>
<p>w：写权限（write）。</p>
<p>x：执行权限（execute）。</p>
</blockquote>
<p>这里我们只讲解基本权限，至于特殊权限（如 suid、sgid 和 sbit 等），我们在后面再详细讲解。</p>
<h3 id="数字权限" tabindex="-1"><a class="header-anchor" href="#数字权限" aria-hidden="true">#</a> 数字权限</h3>
<p>数字权限的赋予方式是最简单的，但是不如前面的字母权限好记、直观。</p>
<p>数字权限的含义：</p>
<ul>
<li>
<p>4：代表 r 权限</p>
</li>
<li>
<p>2：代表 w 权限</p>
</li>
<li>
<p>1：代表 x 权限</p>
</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># chmod 755 install.log</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls -l install.log</span>
-rwxr-xr-x    <span class="token number">1</span> root root    <span class="token number">24772</span> <span class="token number">1</span>月  <span class="token number">14</span> <span class="token number">18</span>:17 install.log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>755权限解释说明：</p>
<blockquote>
<p>第一个数字 7 ：代表所有者的权限是“ 4+2+1 ”，也就是“ rwx ”，读、写、执行权限</p>
<p>第二个数字 5 ：代表所有组的权限是“ 4+1 ”，也就是“ r-x ”，读、执行权限</p>
<p>第三个数字 5 ：代表其他人的权限是“ 4+1 ”，也就是“ r-x ”，读、执行权限</p>
</blockquote>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>数字权限的赋予方式更加简单，但是需要用户对这几个数字更加熟悉。其实常用的权限也并不多，只有如下几个：</p>
<ul>
<li>644：这是文件的基本权限，代表所有者拥有读、写权限，而所属组和其他人拥有只读权限</li>
<li>755：这是文件的执行权限和目录的基本权限，代表所有者拥有读、写、执行权限，而所有组和其他人拥有读、执行权限</li>
<li>777：这是最大权限，在实际生产服务器中，要尽力避免给文件或目录赋予这样的权限，这回造成一定的安全隐患</li>
</ul>
<p>我们很少会使用 457 这样的权限，因为这样的权限是不合理的，怎么可能文件的所有者的权限还没有其他人的权限大呢？所以，除非是实验需要，否则一般情况下所有者的权限要大于所属组和其他人的权限。</p>
</div>
<h3 id="基本权限的含义" tabindex="-1"><a class="header-anchor" href="#基本权限的含义" aria-hidden="true">#</a> 基本权限的含义</h3>
<ol>
<li>权限含义的解释</li>
</ol>
<p>我们已经知道了权限的赋予方式，但是这些读、写、执行权限到底是什么含义呢？有些人可能会说：“你也太小瞧我们了，读、写、执行的含义这么明显，我们还能不知道吗？” 其实，这些权限的含义不像表面上这么明显，下面我们就来讲讲这些权限到底是什么含义。</p>
<p>首先，读、写、执行权限对文件和目录的作用是不同的。</p>
<ul>
<li>
<p>权限对文件的作用</p>
<ul>
<li>读（r）：对文件有读（r）权限，代表可以读取文件中的数据。如果把权限对应到命 令上，那么一旦对文件有读（r）权限，就可以对文件执行 <code>cat</code>、<code>more</code>、<code>less</code>、<code>head</code>、<code>tail</code> 等文件查看命令。</li>
<li>写（w）：对文件有写（w）权限，代表可以修改文件中的数据。如果把权限对应到命令上，那么一旦对文件有写（w）权限，就可以对文件执行 <code>vim</code>、<code>echo</code> 等修改文件数据的命令。<u>注意：对文件有写权限，是不能删除文件本身的，只能修改文件中的数据。如果要想删除文件，则需要对文件的上级目录拥有写权限。</u></li>
<li>执行（x）：对文件有执行（x）权限，代表文件拥有了执行权限，可以运行。在 Linux 中，只要文件有执行（x）权限，这个文件就是执行文件了。只是这个文件到底能不能正确执行，不仅需要执行（x）权限，还要看文件中的代码是不是正确的语言代码。对文件来说，执行（x）权限是最高权限。</li>
</ul>
</li>
<li>
<p>权限对目录的作用</p>
<ul>
<li>读（r）：对目录有读（r）权限，代表可以查看目录下的内容，也就是可以查看目录下有哪些子文件和子目录。如果把权限对应到命令上，那么一旦对目录拥有了读（r） 权限，就可以在目录下执行 <code>ls</code> 命令，查看目录下的内容了。</li>
<li>写（w）：对目录有写（r）权限，代表可以修改目录下的数据，也就是可以在目录中新建、删除、复制、剪切子文件或子目录。如果把权限对应到命令上，那么一旦对目录拥有了写（w）权限，就可以在目录下执行 <code>touch</code>、<code>rm</code>、<code>cp</code>、<code>mv</code> 命令。对目录来 说，写（w）权限是最高权限。</li>
<li>执行（x）：目录是不能运行的，那么对目录拥有执行（x）权限，代表可以进入目录。 如果把权限对应到命令上，那么一旦对目录拥有了执行（x）权限，就可以对目录执行 <code>cd</code> 命令，进入目录。</li>
</ul>
</li>
</ul>
<h2 id="chown-命令" tabindex="-1"><a class="header-anchor" href="#chown-命令" aria-hidden="true">#</a> chown 命令</h2>
<p><code>chown</code> 命令，用于修改文件和目录的所有者和所属组。</p>
<p>英文原意：change file owner and group</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># chown [选项] 所有者:所属组 文件或目录</span>
选项：
	-R	：第归设置权限，也就是给子目录中的所有文件设置权限。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="常见用法" tabindex="-1"><a class="header-anchor" href="#常见用法" aria-hidden="true">#</a> 常见用法</h3>
<ol>
<li><strong>修改文件的所有者</strong></li>
</ol>
<p>之所以需要修改文件的所有者，是因为赋予权限的需要。当普通用户需要对某个文件拥有最高权限的时候，是不能把其他人的权限修改为最高权限的，也就是不能出现 777 的权限，这是非常不安全的做法。合理的做法是修改文件的所有者，这样既能让普通用户拥有最高权限，又不会影响其他普通用户。我们来看一个例子：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># touch laowang </span>
<span class="token comment">#由 root 用户创建 laowang 文件 </span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll laowang</span>
-rw-r--r-- 1root root <span class="token number">0</span> <span class="token number">6</span>月 <span class="token number">16</span> 05:12 laowang 
<span class="token comment">#文件的所有者是 root，普通用户 user 对这个文件拥有只读权限 </span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># chown user laowang </span>
<span class="token comment">#修改文件的所有者 </span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll laowang </span>
-rw-r--r-- <span class="token number">1</span> user root <span class="token number">0</span> <span class="token number">6</span>月 <span class="token number">16</span> 05:12 laowang 
<span class="token comment">#所有者变成了user 用户，这时 user 用户对这个文件就拥有了读、写权限</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="2">
<li><strong>修改文件的所属组</strong></li>
</ol>
<p><code>chown</code> 命令不仅可以修改文件的所有者，也可以修改文件的所属组。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># chown user:user laowang </span>
<span class="token comment">#“:”之前是文件的所有者，之后是所属组。这里的“:”也可以使用“.”代替 </span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll laowang </span>
-rw-r--r-- l user user <span class="token number">0</span> <span class="token number">6</span>月 <span class="token number">16</span> 05:12 laowang 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>修改所属组，也是为了调整文件的权限。只是我们目前还没有学习如何把用户加入用户组中，如果可以把用户加入同一个组当中，然后直接调整所属组的权限，那当然要比一个一个用户赋予权限要简单方便。 Linux 中用户组的建立与 Windows 中是不同的。在 Windows 中，新建的用户都属于 users 这个组，而不会建立更多的新组。但是在 Linux 中，每个用户建立之后，都会建立和用户名同名的用户组，作为这个用户的初始组，user 用户组是自动建立的。</p>
<ol start="3">
<li><strong>普通用户修改权限</strong></li>
</ol>
<p>在讲权限作用的时候强调过，并不是只有 root 用户才可以修改文件的权限，而是超级用户可以修改任何文件的权限，但是普通用户只能修改自己文件的权限。也就是说，只有普通用户是这个文件的所有者，才可以修改文件的权限。我们试试：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cd /home/user/ </span>
<span class="token comment">#进入 user 用户的家目录 </span>
<span class="token punctuation">[</span>root@localhost user<span class="token punctuation">]</span><span class="token comment"># touch test </span>
<span class="token comment">#由 root 用户新建文件 test </span>
<span class="token punctuation">[</span>root@localhost user<span class="token punctuation">]</span><span class="token comment"># ll test</span>
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">0</span> <span class="token number">6</span>月 <span class="token number">16</span> 05:37 <span class="token builtin class-name">test</span> 
<span class="token comment">#文件所有者和所属组都是 root 用户 </span>
<span class="token punctuation">[</span>root@localhost user<span class="token punctuation">]</span><span class="token comment"># su- user </span>
<span class="token comment">#切换为 user 用户 </span>
<span class="token punctuation">[</span>user@localhost ~<span class="token punctuation">]</span>$ <span class="token function">chmod</span> <span class="token number">755</span> <span class="token builtin class-name">test</span>
chmod：更改"test”的权限：不允许的操作 
<span class="token comment">#user 用户不能修改 test 文件的权限 </span>
<span class="token punctuation">[</span>user@localhost ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">exit</span> 
<span class="token comment">#退回到 root 身份 </span>
<span class="token punctuation">[</span>root@localhost user<span class="token punctuation">]</span><span class="token comment"># chown user test </span>
<span class="token comment">#由 root 用户把 test 文件的所有者改为 user 用户 </span>
<span class="token punctuation">[</span>root@localhost user<span class="token punctuation">]</span><span class="token comment"># su- user </span>
<span class="token comment">#切换为user 用户 </span>
<span class="token punctuation">[</span>user@localhost ~<span class="token punctuation">]</span>$ <span class="token function">chmod</span> <span class="token number">755</span> <span class="token builtin class-name">test</span> 
<span class="token comment">#user 用户由于是 test 文件的所有者，所以可以修改文件的权限 </span>
<span class="token punctuation">[</span>user@localhost ~<span class="token punctuation">]</span>$ ll <span class="token builtin class-name">test</span> 
-rwxr-xr-x <span class="token number">1</span> user root <span class="token number">0</span> <span class="token number">6</span>月 <span class="token number">16</span> 05:37 <span class="token builtin class-name">test</span> 
<span class="token comment">#查看权限</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>通过这个实验，我们可以确定，如果普通用户是这个文件的所有者，就可以修改文件的权限。</p>
<h2 id="chgrp-命令" tabindex="-1"><a class="header-anchor" href="#chgrp-命令" aria-hidden="true">#</a> chgrp 命令</h2>
<p><code>chgrp</code> 命令，用于修改文件或目录的所属组。</p>
<p>英文原意：change group ownership</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># chgrp 所属组 文件或目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="常见用法-1" tabindex="-1"><a class="header-anchor" href="#常见用法-1" aria-hidden="true">#</a> 常见用法</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># touch test </span>
<span class="token comment">#由 root 用户创建 test 文件 </span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># chgrp user test </span>
<span class="token comment">#修改文件的所属组 </span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll test </span>
-rw-r--r-- <span class="token number">1</span> root user <span class="token number">0</span> <span class="token number">6</span>月 <span class="token number">16</span> 09:32 <span class="token builtin class-name">test</span> 
<span class="token comment">#所属组变成了user</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="umask-命令" tabindex="-1"><a class="header-anchor" href="#umask-命令" aria-hidden="true">#</a> umask 命令</h2>
<h3 id="umask-默认权的作用" tabindex="-1"><a class="header-anchor" href="#umask-默认权的作用" aria-hidden="true">#</a> umask 默认权的作用</h3>
<p><code>umask</code> 默认权限是 Linux 权限的一种，主要用于 Linux 中的新建文件和目录拥有默认权限。 Limux 是一个比较安全的操作系统，而安全的基础就是权限，所以，在 Linux 中所有的文件和目录都要有基本的权限，新建的文件和目录当然也要有默认的权限。</p>
<p>在 Linux 中，通过 <code>umask</code> 默认权限来给所有新建立的文件和目录赋予初始权限，这一点和 Windows 不太一样，Windows是通过继承上级目录的权限来给文件和目录赋予初始权限的。</p>
<p>查看系统的 <code>umask</code> 权限：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># umask</span>
0022
<span class="token comment">#用八进制数值显示 umask 权限</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># umask -S</span>
u-rwx,g-rx,o<span class="token operator">=</span>rx 
<span class="token comment">#用字母表示文件和目录的初始权限</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>使用“ -S ”选项，会直接用字母来表示文件和目录的初始权限。我们查看数值的 <code>umask</code> 权限，看到的是 4 位数字“0022”，其中第一个数字“0”代表的是文件的特殊权限（SetUID、 SetGID、Sticky BIT），暂不讨论。也就是后 3 位数字“022”才是真正的 <code>umask</code> 默认权限。</p>
<h3 id="umask-默认权限的计算方法" tabindex="-1"><a class="header-anchor" href="#umask-默认权限的计算方法" aria-hidden="true">#</a> umask 默认权限的计算方法</h3>
<p>在学习 <code>umask</code> 默认权限的计算方法之前，我们需要先了解一下新建文件和目录的默认最大权限。</p>
<ul>
<li>
<p>对文件来讲，新建文件的默认最大权限是 666，没有执行（x）权限。这是因为执行权限对文件来讲比较危险，不能在新建文件的时候默认赋予，而必须通过用户手工赋予。</p>
</li>
<li>
<p>对目录来讲，新建目录的默认最大权限是 777。这是因为对目录而言，执行（x）权限仅仅代表进入目录，所以即使建立新文件时直接默认赋予，也没有什么危险。</p>
</li>
</ul>
<p>接下来我们学习如何计算 <code>umask</code> 默认权限。按照官方的标准算法，<code>umask</code> 默认权限需要使用二进制进行逻辑与和逻辑非联合运算才可以得到正确的新建文件和目录的默认权限。这种方法既不好计算，也不好理解，并不推荐。 我们在这里还是按照权限字母来讲解 <code>umask</code> 权限的计算方法。</p>
<p>我们就按照默认的 <code>umask</code> 值是 022 来分别计算一下新建文件和目录的默认权限吧。</p>
<ul>
<li>文件的默认权限最大只能是 666，换算成字母就是“-rw-rw-rw-”；而 <code>umask</code> 的值是 022， 也换算成字母就是“----w--w-”。把两个字母权限相减，得到的就是新建文件的默认权限 644：（ -rw-r--r-- ）=<strong>（ -rw-rw-rw- ）-（ ----w--w-）</strong>。</li>
<li>目录的默认权限最大可以是 777，换算成字母就是“drwxrwxrwx”；而 umask 的值是 022，也换算成字母就是“d----w--w-”。也把两个字母权限相减，得到的就是新建目录的默认权限 755：（ drwx-r-xr-x ）=<strong>（ drwxrwxrwx ）-（ d----w--w- ）</strong>。</li>
</ul>
<p>我们测试一下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># umask</span>
0022
<span class="token comment">#默认 umask 的值是 0022 </span>
<span class="token punctuation">[</span>rootelocalhost ~<span class="token punctuation">]</span><span class="token comment"># touch laowang </span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mkdir fengjie </span>
<span class="token punctuation">[</span>root@localhost ~1<span class="token comment"># ll -d laowang fengjie/ </span>
drwxr-xr-x <span class="token number">2</span> root root <span class="token number">4096</span> <span class="token number">6</span>月 <span class="token number">16</span> 02:36 fengjie/ 
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">0</span> <span class="token number">6</span>月 <span class="token number">16</span> 02:36 laowang 
<span class="token comment">#新建立目录的默认权展是 755，新建立文件的默认权限是 644 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>这里强调一下，<code>umask</code> 默认权限的计算是不能直接使用数字相减的。很多人会理解为，既然文件的默认极限最大是“666”，<code>umask</code> 的值是“022”，而新建文件的值刚好是“644”，那是不是就是直接使用“666-644”呢？这是不对的，如果 <code>umask</code> 的值是“033”呢？按照数值相减，就会得到“633”的值。但是我们强调过文件是不能在新建立时就拥有执行（x）权限 的，而权限“3”是包含执行（x）权限的。我们测试一下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># umask 033</span>
<span class="token comment">#修改 umask 的值为 033 </span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># touch xuejie</span>
<span class="token comment">#建立测试文件xuejie </span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll xuejie </span>
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">0</span> <span class="token number">6</span>月 <span class="token number">16</span> 02:46 xuejie xuejie 
<span class="token comment">#文件的默认权限依然是 644 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>由这个例子我们可以知道：</p>
<p><strong><code>umask</code> 默认权限一定不是直接使用权限数字相减得到的，而是通过二进制逻辑与和逻辑非联合运算得到的。最简单的办法还是使用权限字母来计算。</strong></p>
<p>文件的默认权限最大只能是 666 ，换算成字母就是“-rw-rw-rw-”；而 <code>umask</code> 的值是 033，也换算成字母就是“-----wx-wx”。把两个字母权限相减，得到的就是新建文件的默认权限：（-rw-rw-rw-）-（-----wx-wx）=（-rw-r--r--）。</p>
</div>
<h3 id="umask-默认权限的修改方法" tabindex="-1"><a class="header-anchor" href="#umask-默认权限的修改方法" aria-hidden="true">#</a> umask 默认权限的修改方法</h3>
<p><code>umask</code> 默认权限可以直接通过命令来进行修改，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># umask 002</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># umask 033</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>不过，通过命令进行的修改只能临时生效，一旦重启或重新登录就会失效。如果想让修改永久生效，则需要修改对应的环境变量配置文件<code>/etc/profile</code>。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/profile</span>
<span class="token punctuation">..</span>.省略部分内容<span class="token punctuation">..</span>.
if<span class="token punctuation">[</span> <span class="token environment constant">$UID</span> -gt <span class="token number">199</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span><span class="token string">"<span class="token variable"><span class="token variable">`</span><span class="token function">id</span> -gn'<span class="token variable">`</span></span>"</span><span class="token operator">=</span><span class="token string">"<span class="token variable"><span class="token variable">`</span><span class="token function">id</span> -un<span class="token variable">`</span></span>"</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
	<span class="token builtin class-name">umask</span> 002 
	<span class="token comment">#如果 UID 大于199（普通用户），则使用此 umask 值 </span>
<span class="token keyword">else</span>
	<span class="token builtin class-name">umask</span> 022 
	<span class="token comment">#如果 UID 小于 199（超级用户)，则使用此 umask 值</span>
<span class="token keyword">fi</span>
<span class="token punctuation">..</span>.省略部分内容<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>这是一段 Shell 脚本，大家目前可能看不懂，但是没有关系，只需知道普通用户的 <code>umask</code> 值由 if 语句的第一段定义，而超级用户的 <code>umask</code> 值由 else 语句定义即可。如果修改的是这个文件，则 <code>umask</code> 值是永久生效的。 我们学习了文件的基本权限和 <code>umask</code> 默认权限这两种权限，但是 Linux 的权限并不只有这两种，其他的权限内容我们会在后面详细介绍，这里就不一一列举了。</p>
</template>
