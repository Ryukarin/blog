<template><p>用户和用户组管理，顾名思义就是添加用户和用户组、更改密码和设定权限等操作。可能有很多人觉得用户管理没有意义，因为我们在使用个人计算机的时候，不管执行什么操作，都以管理员账户登录，而从来没有添加和使用过其他普通用户。这样做对个人计算机来讲问题不大，不过在服务器上是行不通的。大家想象一下，我们是一个管理团队，共同维护一组服务器，难道每个人都能够被赋子管理员权限吗？显然是不行的，因为不是所有的数据都可以对每位管理员公开，而且如果在运维团队中有某位管理员对 Linux 不热悉，那么赋子他管理员权限的后果可能是灾难性的。所以，越是对安全性要求高的服务器，越需要建立合理的用户权限等级制度和服务器操作规范。</p>
<h2 id="用户配置文件和管理相关文件" tabindex="-1"><a class="header-anchor" href="#用户配置文件和管理相关文件" aria-hidden="true">#</a> 用户配置文件和管理相关文件</h2>
<p>我们已经知道 Linux 中的所有内容都是文件，所有内容如果想要永久生效，都需要保存到文件中，那么用户信息当然也要保存到文件中。我们需要先掌握这些和用户管理相关的文件。</p>
<h3 id="用户信息文件-etc-passwd" tabindex="-1"><a class="header-anchor" href="#用户信息文件-etc-passwd" aria-hidden="true">#</a> 用户信息文件 <code>/etc/passwd</code></h3>
<p>这个文件中保存的就是系统中所有的用户和用户的主要信息。我们打开这个文件来看看内容到底是什么。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/passwd</span>
<span class="token comment">#查看一下文件内容</span>
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
<span class="token punctuation">..</span>.省略部分输出<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>这个文件的内容非常规律，每行代表一个用户。大家可能会比较惊讶，Linux 系统中默认怎么会有这么多的用户啊！这些用户中的绝大多数是系统或服务正常运行所必需的用户，我们把这种用户称为<strong>系统用户或伪用户</strong>。系统用户是不能登录系统的，但是这些用户同样也不能被删除，因为一旦删除，依赖这些用户运行的服务或程序就不能正常执行，会导致系统问题。</p>
<p>那么我们就把 root 用户这一行拿出来，看看这个文件中的内容具体代表的含义吧。我们会注意到，这个文件用“<strong>:</strong>”作为分隔符，划分为7 个字段，我们逐个来看具体的含义。</p>
<ol>
<li><strong>用户名称</strong></li>
</ol>
<p>第一个字段中保存的是用户名称。不过大家需要注意，用户名称只是为了方便管理员记忆，Linux 系统是通过用户 ID（UID）来区分不同用户、分配用户权限的。而用户名称和 UID 的对应正是通过 <code>/etc/passwd</code> 这个文件来定义的。</p>
<ol start="2">
<li><strong>密码标志</strong></li>
</ol>
<p>这里我们说“x”代表的是密码标志，而不是真正的密码，真正的密码是保存在 <code>/etc/shadow</code> 文件中的。在早期的 UNIX 中，这里保存的就是真正的加密密码串，但是这个文件的权限是644，查询命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll /etc/passwd</span>
-rw-r--r-- <span class="token number">1</span> root root <span class="token number">1648</span> <span class="token number">12</span>月 <span class="token number">29</span> 00:17 /etc/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>所有用户都可以读取 <code>/etc/passwd</code> 文件，这样非常容易导致密码的泄露。虽然密码是加密的，但是采用暴力破解的方式也是能够进行破解的。所以现在的 Linux 系统把真正的加密密码串放置在影子文件 <code>/etc/shadow</code> 中，而影子文件的权限是 000，查询命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll /etc/shadow</span>
---------- <span class="token number">1</span> root root <span class="token number">1028</span> <span class="token number">12</span>月 <span class="token number">29</span> 00:18 /etc/shadow
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这个文件是没有任何权限的，但因为我是 root 用户，所以读取权限不受限制。当然，用强制修改的方法也是可以手工修改这个文件的内容的。只有 root 用户可以浏览和操作这个文件，这样就最大限度地保证了密码的安全。</p>
<p>所以在 <code>/etc/passwd</code> 中只有一个“x”代表用户是拥有密码的，我们把这个字段称作密码标志，具体的密码要去 <code>/etc/shadow</code> 文件中查询。但是这个密码标志“x”也是不能被删除的，如果删除了密码标志“x”，那么系统会认为这个用户没有密码，从而导致只输入用户名而不用输入密码就可以登录（当然只能在本机上使用无密码登录，远程是不可以的），除非特殊情况（如破解用户密码），这当然是不可行的。</p>
<ol start="3">
<li><strong>UID</strong></li>
</ol>
<p>第三个字段就是 用户ID（UID），我们已经知道系统是通过 UID 来识别不同的用户和分配用户权限的。这些 UID 是有使用限制和要求的，我们需要了解。</p>
<ul>
<li>0：超级用户 UID。如果用户 UID 为 0，则代表这个账号是管理员账号。在 Linux 中如何把普通用户升级成管理员呢？只需把其他用户的 UID 修改为 0 就可以了，这一点和 Windows 是不同的。不过不建议建立多个管理员账号。</li>
<li>1～499：系统用户（伪用户）UID。这些 UID 是系统保留给系统用户的 UID，也就是说 UID 是1~499 范围内的用户是不能登录系统的，而是用来运行系统或服务的。其中，1~99 是系统保留的账号，系统自动创建；100～499 是预留给用户创建系统账号的。</li>
<li>500～65535：普通用户 UID。建立的普通用户 UID 从 500 开始，最大到 65535。</li>
</ul>
<p>这些用户足够使用了，但是如果不够也不用害怕，2.6.x 内核以后的 Linux 系统用户 UID 已经可以支持 2^32个用户了。</p>
<ol start="4">
<li><strong>GID</strong></li>
</ol>
<p>第四个字段就是用户的 组ID（GID），也就是这个用户的初始组的标志号。这里需要解释一下初始组和附加组的概念。</p>
<p>所谓<strong>初始组</strong>，指用户一登录就立刻拥有这个用户组的相关权限。每个用户的初始组只能有一个，一般就是将和这个用户的用户名相同的组名作为这个用户的初始组。举例来说，我们手工添加用户 lamp，在建立用户 lamp 的同时就会建立 lamp 组作为 lamp 用户的初始组。</p>
<p>所谓<strong>附加组</strong>，指用户可以加入多个其他的用户组，并拥有这些组的权限。每个用户只能有一个初始组，除初始组要把用户再加入其他的用户组外，这些用户组就是这个用户的附加组。</p>
<p>附加组可以有多个，而且用户可以有这些附加组的权限。举例来说，刚刚的 lamp 用户除属于初始组 lamp 外，我又把它加入了 users 组，那么 lamp 用户同时属于 lamp 组、users 组，其中 lamp 是初始组，users 是附加组。当然，初始组和附加组的身份是可以修改的，但是我们在工作中一般不修改初始组，只修改附加组，因为修改了初始组有时会让管理员逻辑混乱。</p>
<div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>在 <code>/etc/passwd</code> 文件的第四个字段中看到的 ID 是这个用户的初始组。</p>
</div>
<ol start="5">
<li><strong>用户说明</strong></li>
</ol>
<p>第五个字段是这个用户的简单说明，没有什么特殊作用，可以不写。</p>
<ol start="6">
<li><strong>家目录</strong></li>
</ol>
<p>第六个字段是这个用户的家目录，也就是用户登录后有操作权限的访问目录，我们把这个目录称为用户的家目录。超级用户的家目录是 <code>/root</code> 目录，普通用户在 <code>/home/</code> 目录下建立和用户名相同的目录作为家目录，如 lamp 用户的家目录就是 <code>/home/lamp/</code> 目录。</p>
<ol start="7">
<li><strong>登录之后的 Shell</strong></li>
</ol>
<p>Shell 就是 Linux 的命令解释器。管理员输入的密码都是 ASCII 码，也就是类似 abed 的英文。但是系统可以识别的编码是类似 0101 的机器语言。Shell 的作用就是把 ASCII 编码的命令翻译成系统可以识别的机器语言，同时把系统的执行结果翻译为用户可以识别的 ASCI 编码。Linux 的标准 Shell 就是 <code>/bin/bash</code>。</p>
<p>在 <code>/etc/passwd</code> 文件中，大家可以把这个字段理解为用户登录之后所拥有的权限。如果写入的是 Linux 的标准 Shell，<code>/bin/bash</code> 就代表这个用户拥有权限范围内的所有权限。例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/passwd</span>
lamp:x:502:502::/home/lamp:/bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>我手工添加了 lamp 用户，它的登录 Shell 是 <code>/bin/bash</code>，那么这个用户就可以使用普通用户的所有权限。如果我把 lamp 用户的 Shell 修改为 <code>/sbin/nologin</code>，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/passwd</span>
lamp:x:502:502::/home/lamp:/sbin/nologin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>那么这个用户就不能登录了，因为 <code>/sbin/nologin</code> 就是禁止登录的 Shell。这样说明白了吗？如果我在这里放入的是一个系统命令，如 <code>/usr/bin/passwd</code>，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/passwd</span>
Lamp:x:502:502::/home/lamp:/usr/bin/passwd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>那么这个用户可以登录，但是登录之后就只能修改自己的密码了。但是在这里不能随便写入和登录没有关系的命令，如 <code>ls</code>，否则系统不会识别这些命令，也就意味着这个用户不能登录。</p>
<h3 id="影子文件-etc-shadow" tabindex="-1"><a class="header-anchor" href="#影子文件-etc-shadow" aria-hidden="true">#</a> 影子文件 <code>/etc/shadow</code></h3>
<p>这个文件中保存着用户的实际加密密码和密码有效期等参数。我们已经知道这个文件的权限是 000，所以保存的实际加密密码除 root 用户外，其他用户是不能查看的，这样做有效地保证了密码的安全。如果这个文件的权限发生了改变，则需要注意是否是恶意攻击。我们打开这个文件看看，例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span> <span class="token function">vi</span> /etc/shadow root:<span class="token variable">$6</span><span class="token variable">$m2MwR08L48jY6YN5</span><span class="token variable">$lmq0B9ruMxCUesmDvDs2vFDAG0adTlbfgWHAxlwxEa8388</span>/yyC2WY/p9tMQSrfrjxNOsSnOIjRlGHxuYNkeJI1:18642:0:99999:7:::
bin:*:18353:0:99999:7:::
daemon:*:18353:0:99999:7:::
<span class="token punctuation">..</span>.省略部分输出<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>这个文件的每行代表一个用户，同样使用“<strong>:</strong>”作为分隔符，划分为 9 个字段。我们以 root 行为例，这 9 个字段的作用如下。</p>
<ol>
<li><strong>用户名称</strong></li>
</ol>
<p>第一个字段中保存的是用户名称，和 <code>/etc/passwd</code> 文件的用户名称相对应。</p>
<ol start="2">
<li><strong>密码</strong></li>
</ol>
<p>第二个字段中保存的是真正加密的密码。目前 Linux 的密码采用的是 SHA512 散列加密算法，而原来采用的是 MDS 或 DES 加密算法。SHASI2 散列加密算法的加密等级更高，也更加安全。注意：这串密码产生的乱码不能手工修改，如果手工修改，就会算不出原密码，导致密码失效。当然，我们也可以在密码前人为地加入“1”或“*”改变加密值让密码暂时失效，使这个用户无法登录，达到暂时禁止用户登录的效果。</p>
<div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>所有伪用户的密码都是“<strong>!!</strong>”或“<strong>*</strong>”，代表这些用户都没有密码，是不能登录的。当然，新创建的用户如果不设定密码，那么它的密码项也是“!!”，代表这个用户没有密码，不能登录。</p>
</div>
<ol start="3">
<li><strong>密码最后一次修改日期</strong></li>
</ol>
<p>第三个字段是密码的修改日期，可是这里怎么是 18768 啊？代表什么意思呢？其实 Linux 更加习惯使用时间戳代表时间，也就是说，以 <u><strong>1970 年 1 月 1 日</strong></u> 作为标准时间，每过去一天，时间戳加 1，那么 366 代表的就是 1971 年1 月 1 日。我们这里的时间戳是 18768，也就是说，是在 1970 年1 月 1 日之后的第 15775 天修改的 root 用户密码。好隐晦的表示啊！那么，到底 18768 的时间戳代表的是哪一天呢？我们可以使用如下命令进行换算：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># date -d "1970-01-01 18768 days"</span>
<span class="token number">2013</span>年 05月 <span class="token number">21</span>日 星期五 00:00:00 EDT
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>用以上命令可以把时间戳换算为我们习惯的系统日期，那么我们可以把系统日期换算为时间戳吗？当然可以，命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo $(($(date --date="2013/05/20" +%s)/86400+1))</span>
<span class="token number">18768</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这里的 2013/05/20 是你要计算的日期，+%s 是把当前日期换算成自 <u>1970 年 1 月 1</u> 日以来的总秒数，除以 86400（每天的秒数），最后加上 1 补齐 <u>1970 年 1 月 1 日</u> 当天就能计算出时间戳了。其实不需要理解这里的命令，只要知道时间戳的概念就好，如果需要换算就套用命令。</p>
<ol start="4">
<li><strong>密码的两次修改间隔时间</strong></li>
</ol>
<p>第四个字段是密码的两次修改间隔时间。这个字段要<u><em>和第三个字段相比</em></u>，也就是说密码被修改后多久不能再修改密码。如果是 0，则密码可以随时修改。如果是 10，则代表密码修改后10 天之内不能再次修改这个密码。</p>
<ol start="5">
<li><strong>密码的有效期</strong></li>
</ol>
<p>第五个字段是密码的有效期。这个字段也要<u><em>和第三个字段相比</em></u>，也就是说密码被修改后可以生效多少天。默认值是 99999，也就是 273 年，大家可以认为永久生效。如果改为 90，那么密码被修改 90 天之后就必须再次修改，否则该用户就不能登录了。我们在管理服务器的时候可以通过这个字段强制用户定期修改密码。</p>
<ol start="6">
<li><strong>密码修改到期前的警告天数</strong></li>
</ol>
<p>第六个字段是密码修改到期前的警告天数。这个字段要<u><em>和第五个字段相比</em></u>，就是密码到期前需提前几天修改。默认值是 7，也就是说从密码到期前的7 天开始，每次登录系统都会警告该用户修改密码。</p>
<ol start="7">
<li><strong>密码过期后的宽限天数</strong></li>
</ol>
<p>第七个字段是密码过期后的宽限天数。这个字段要<u><em>和第五个字段相比</em></u>，也就是密码过期后，用户如果还是没有修改密码，那么在宽限天数内用户还是可以登录系统的；如果过了宽限天数，那么用户就无法再使用该器码登录了。天数如果是 10，则代表密码过期 10 天后失效；如果是 0，则代表密码过期后立叫失效；如果是 -1，则代表密码永远不会失效。</p>
<ol start="8">
<li><strong>账号失效时间</strong></li>
</ol>
<p>第八个字段是用户的账号失效时间。这里同样要写时间戳，也就是用 <u>1970 年1 月 1日</u> 进行时间换算。如果超过了失效时间，就算密码没有过期，用户也就失效，无法使用了。</p>
<ol start="9">
<li><strong>保留</strong></li>
</ol>
<p>这个字段目前没有使用。</p>
<div class="custom-container tip"><p class="custom-container-title">小提示</p>
<p>在 Linux 中，如果遗忘了密码，则可以启动进入单用户模式。这时既可以删除 <code>/etc/passwd</code> 文件中的密码标识字段，也可以删除 <code>/etc/shadow</code> 文件中的密码标识字段，都可以达到清空密码的目的。</p>
</div>
<h3 id="组信息文件-etc-group" tabindex="-1"><a class="header-anchor" href="#组信息文件-etc-group" aria-hidden="true">#</a> 组信息文件 <code>/etc/group</code></h3>
<p>这个文件是记录 组ID（GID）和组名的对应文件。<code>/etc/passwd</code> 文件的第四个字段记录的是每个用户的 初始组ID，那么这个 GID 的组名到底是什么呢？就要从 <code>/etc/group</code> 文件中查找。这个文件的内容如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/group</span>
root:x:0:
bin:x:1:bin,daemon
daemon:x:2:bin,daemon
<span class="token punctuation">..</span>.省略部分输出<span class="token punctuation">..</span>.
lamp:x:502:
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>我们手工添加的用户 lamp 也会默认生成一个 lamp 用户组，GID 是 502，作为 lamp 用户的初始组。这个文件和上面两个文件一样，用“<strong>:</strong>”作为分隔符，划分为 4 个字段。我们同样以 root 行作为例子讲解，每个字段的具体含义如下：</p>
<ol>
<li><strong>组名</strong></li>
</ol>
<p>第一个字段是组名字段，也就是用户组的名称字段。</p>
<ol start="2">
<li><strong>组密码标志</strong></li>
</ol>
<p>第二个字段是组密码标志字段。和 <code>/etc/passwd</code> 文件一样，这里的“x”仅仅是密码标识，真正的加密之后的组密码保存在 <code>/etc/gshadow</code> 文件中。不过，用户设置密码是为了验证用户的身份，但是用户组设置密码是用来做什么的呢？用户组密码主要是用来指定组管理员的，由于系统中的账号可能会非常多，root 用户可能没有时间进行用户的组调整，这时可以给用户组指定组管理员，如果有用户需要加入或退出某用户组，则可以由该组的组管理员替代 root 进行管理。但是这项功能目前很少使用，我们也很少设置组密码。如果需要赋予某用户调整某个用户组的权限，则可以使用 <code>sudo</code> 命令代替。</p>
<ol start="3">
<li><strong>组ID（GID）</strong></li>
</ol>
<p>第三个字段是用户组 ID，和 UID 一样，Linux 系统是通过 GID 来区别不同的用户组的，组名只是为了便于管理员识别。所以，在 <code>/etc/group</code> 文件中可以查看对应的组名和 GID。</p>
<ol start="4">
<li>
<p><strong>组中的用户</strong></p>
<p>第四个字段表示的就是这个用户组中到底包含了哪些用户。需要注意的是，如果该用户组是这个用户的初始组，则该用户不会写入这个字段。也就是说，写入这个字段的用户是这个用户组的附加用户。比如 lamp 组就是这样写的<code>lamp:x:502:</code>，并没有在第四个字段中写入 lamp 用户，因为 lamp 组是 lamp 用户的初始组。如果要查询这些用户的初始组，则需要先到 <code>/etc/passwd</code> 文件中查看 GID（第四个字段)，然后到 <code>/etc/group</code> 文件中比对组名。</p>
</li>
</ol>
<p>每个用户都可以加入多个附加组，但是只能属于一个初始组。所以我们在实际工作中，如果需要把用户加入其他组，则需要添加附加组。一般情况下，用户的初始组就是在建立用户的同时建立的和用户名相同的组。</p>
<div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>我们讲了三个用户配置文件 <code>/etc/passwd</code>、<code>/etc/shadow</code>、<code>/etc/group</code>，它们之间的关系是这样的——先在 <code>/etc/group</code> 文件中查询用户组的 GID 和组名；然后在 <code>/etc/passwd</code> 文件中查找该 GID 是哪个用户的初始组，同时提取这个用户的用户名和 UID；最后通过 UID 到 <code>/etc/shadow</code> 文件中提取和这个用户相匹配的密码。</p>
</div>
<h3 id="组密码文件-etc-gshadow" tabindex="-1"><a class="header-anchor" href="#组密码文件-etc-gshadow" aria-hidden="true">#</a> 组密码文件 <code>/etc/gshadow</code></h3>
<p>这个文件就是保存组密码的文件。如果我们给用户组设定了组管理员，并给该用户组设定了组密码，那么组密码就保存在这个文件中，组管理员就可以利用这个密码管理这个用户组了，该文件的内容如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/gshadow</span>
root:::
bin:::bin,daemon
daemon:::bin,daemon
<span class="token punctuation">..</span>.省略部分输出<span class="token punctuation">..</span>.
lamp:<span class="token operator">!</span>::
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>这个文件同样使用“<strong>:</strong>”作为分隔符，把文件划分为 4 个字段，每个字段的含义如下。</p>
<ol>
<li><strong>组名</strong></li>
</ol>
<p>第一个字段是这个用户的组名。</p>
<ol start="2">
<li><strong>组密码</strong></li>
</ol>
<p>第二个字段就是实际加密的组密码。大家已经注意到，对于大多数用户来说，这个字段不是空就是“!”，代表这个组没有合法的组密码。</p>
<ol start="3">
<li><strong>组管理员用户名</strong></li>
</ol>
<p>第三个字段表示这个组的管理员是哪个用户。</p>
<ol start="4">
<li><strong>组中的附加用户</strong></li>
</ol>
<p>第四个字段用于显示这个用户组中有哪些附加用户。</p>
<h3 id="用户管理相关文件" tabindex="-1"><a class="header-anchor" href="#用户管理相关文件" aria-hidden="true">#</a> 用户管理相关文件</h3>
<p>上面介绍的 4 个文件是用户的配置文件，每个用户的信息、权限和密码都保存在这 4 个文件中。下面要介绍的几个文件虽然不是用户的配置文件，但也是在创建用户时所自动建立或者和用户创建相关的文件。</p>
<ol>
<li><strong>用户的家目录</strong></li>
</ol>
<p>每个用户在登录 Linux 系统时，必须有一个默认的登录位置，该用户对这个目录应该拥有一定的权限，我们把这个目录称作用户的家目录。普通用户的家目录位于 <code>/home/</code> 下，目录名和用户名相同。例如，lamp 用户的家目录就是 <code>/home/lamp/</code>，这个目录的权限如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll -d /home/lamp/</span>
drwx------ <span class="token number">3</span> lamp 1amp <span class="token number">4096</span> <span class="token number">1</span>月 <span class="token number">4</span> 05:40 /home/lamp/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>目录的属主是 lamp 用户，属组是 lamp 用户组，权限是 700，lamp 用户对 <code>/home/lampl</code> 家目录拥有读、写和执行权限。</p>
<p>超级用户的家目录位于 <code>/</code> 下。例如，超级用户的家目录就是 <code>/root/</code>，这个目录的权限如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll -d /root/</span>
dr-xr-x--- <span class="token number">6</span> root root <span class="token number">4096</span> <span class="token number">12</span>月 <span class="token number">29</span> 00:17 /root/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>在 Linux 中，家目录用“<strong>~</strong>”表示，当前命令的提示符是“<strong>[root@localhost ~]#</strong>”，表示当前所在目录就是家目录。而我当前是超级用户，所以我的家目录就是 <code>/root/</code>。</p>
<ol start="2">
<li><strong>用户邮箱目录</strong></li>
</ol>
<p>在建立每个用户的时候,系统会默认给每个用户建立一个邮箱。这个邮箱在 <code>/var/spool/mail</code> 目录中，如 lamp 用户的邮箱就是 <code>/var/spool/mail/lamp</code>。</p>
<ol start="3">
<li><strong>用户模板目录</strong></li>
</ol>
<p>刚刚我们说了每个用户都有一个家目录，比如 lamp 用户的家目录就是 <code>/home/lamp/</code>，我们进入这个目录，看看里面有什么内容。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cd /home/lamp/</span>
<span class="token punctuation">[</span>root@localhost lamp<span class="token punctuation">]</span><span class="token comment"># ls</span>
<span class="token punctuation">[</span>root@localhost lamp<span class="token punctuation">]</span><span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这个用户因为是新建立的，所以家目录中没有保存任何文件，是空的。但真的是空的吗？有没有隐藏文件呢？我们再来看看。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost lamp<span class="token punctuation">]</span><span class="token comment"># ls -a</span>
<span class="token builtin class-name">.</span>	<span class="token punctuation">..</span>	.bash_Logout	.bash_profile	.bashrc		.gnome2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>原来这个目录中还是有文件的，只不过这些文件都是隐藏文件。那么这些文件都是做什么的？是从哪里来的呢？这些文件都是当前用户 lamp 的环境变量配置文件，这里保存的都是该用户的环境变量参数。那么，什么是环境变量配置文件呢？我们这么说吧，在 Windows 中虽然只有一台计算机，但是如果使用不同的用户登录，那么每个用户的操作环境（如桌面背景、分辨率、桌面图标）都是不同的。因为每个用户的操作习惯不同，所以 Windows 运行用户自行定义的操作环境。在 Linux 中可以吗？当然可以，只不过 Windows 是通过更直观的图形界面来进行设置和调整的，而 Linux 是通过文件来进行调整的。我们将这些根据用户习惯调整操作系统环境的配置文件称作环境变量配置文件。<code>/home/lamp/</code> 目录中的这些环境变量配置文件所定义的操作环境只对 lamp 用户生效，其他每个用户的家目录中都有相应的环境变量配置文件。</p>
<p>那么，这些环境变量配置文件都是从哪里来的呢？其实有一个模板目录，这个模板目录就是 <code>/etc/skel/</code> 目录，每创建一个用户，系统会自动创建一个用户家目录，同时把模板目录 <code>/etc/skel/</code> 中的内容复制到用户家目录中。我们看看 <code>/etc/skel/</code> 目录中有一些什么内容。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cd /etc/skel/</span>
<span class="token punctuation">[</span>root@localhost skel<span class="token punctuation">]</span><span class="token comment"># ls -a</span>
<span class="token builtin class-name">.</span>	<span class="token punctuation">..</span>	.bash_logout	.bash_profile	.bashrc		gnome2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>是不是和 <code>/home/lamp/</code> 目录中的内容一致呢？我们做一个实验，在 <code>/etc/skel/</code> 目录中随意创建一个文件，我们看看新建立的用户的家目录中是否也会把这个文件复制过来。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cd /etc/skel/</span>
<span class="token comment">#进入模板目录</span>
<span class="token punctuation">[</span>root@localhost skel<span class="token punctuation">]</span><span class="token comment"># touch test</span>
创建一个临时文件 <span class="token builtin class-name">test</span>
<span class="token punctuation">[</span>root@localhost skel<span class="token punctuation">]</span><span class="token comment"># ls -a</span>
<span class="token builtin class-name">.</span>	<span class="token punctuation">..</span>	.bash_logout	.bash_profile	.bashrc		gnome2		<span class="token builtin class-name">test</span>
<span class="token comment">#查看文件，除环境变量配置文件之外，多了一个 test 文件</span>
<span class="token punctuation">[</span>root@localhost skel<span class="token punctuation">]</span><span class="token comment"># useradd userl</span>
<span class="token comment">#添加用 userl</span>
<span class="token punctuation">[</span>root@localhost skel<span class="token punctuation">]</span> <span class="token builtin class-name">cd</span> /home/user1
<span class="token comment">#进入 user1 的家目录</span>
<span class="token punctuation">[</span>root@localhost userl<span class="token punctuation">]</span><span class="token comment"># ls -a</span>
<span class="token builtin class-name">.</span>	<span class="token punctuation">..</span>	.bash_logout	.bash_profile	.bashrc		gnome2		<span class="token builtin class-name">test</span>
<span class="token comment">#看到了吗？系统自动建立的家目录中是不是也多出了 test 文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>这样大家就明白模板目录的作用了吧。如果需要让每个用户的家目录中都有某个目录或文件，就可以修改模板目录。</p>
<div class="custom-container tip"><p class="custom-container-title">总结</p>
<p>Linux 系统中和用户相关的文件主要有 7 个。其中 4 个是用户配置文件，分别是 <code>/etc/passwd</code>、<code>/etc/shadow</code>、<code>/etc/group</code>、<code>/etc/gshadow</code>。这几个文件主要定义了用户的相关参数，我们可以通过手工修改这几个文件来建立或修改用户的相关信息，当然也可以通过命令修改。还有 3 个文件是用户管理相关文件，分别是用户的<strong>家目录</strong>、<strong>用户邮箱目录</strong>、<strong>用户模板目录</strong>，这些目录在建立用户的时候都会起到相应的作用，一般不需要修改。</p>
</div>
<h2 id="用户管理命令" tabindex="-1"><a class="header-anchor" href="#用户管理命令" aria-hidden="true">#</a> 用户管理命令</h2>
<p>前面我们讲了用户相关文件，如果要添加或删除用户，则通过手工修改配置文件的方法也是可以的。但是这样做太麻烦了，Linux 系统为我们准备了完善的用户管理命令，我们现在就来学习一下这些命令吧。</p>
<h3 id="添加用户-useradd" tabindex="-1"><a class="header-anchor" href="#添加用户-useradd" aria-hidden="true">#</a> 添加用户：useradd</h3>
<ol>
<li><strong>命令格式</strong></li>
</ol>
<p>添加用户的命令是 <code>useradd</code>，命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">useradd</span> <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> 用户名
选项：
	-u <span class="token environment constant">UID</span>		：手工指定用户的 <span class="token environment constant">UID</span>，注意手工添加的用户的 <span class="token environment constant">UID</span> 不要小于 <span class="token number">500</span>
	-d 家目录	：手工指定用户的家目录。家目录必须写绝对路径，而且如果需要手工指定家目录，则一定要注意权限
	-c 用户说明	：手工指定用户说明。还记得 /etc/passwd 文件的第五个字段吗？这里就是指定该字段内容的
	-g 组名		：手工指定用户的初始组。一般以和用户名相同的组作为用户的初始组，在创建用户时会默认建立初始组。如果不想使用默认初始组，则可以用 -g 手工指定。不建议手工修改
	-G 组名		：指定用户的附加组。我们把用户加入其他组，一般都使用附加组
	-s shell	：手工指定用户的登录 Shell。默认是/bin/bash
	-e 日期		：指定用户的失效日期，格式为“YYYY-MM-DD”。也就是/etc/shadow 文件的第八个字段
	-o			：允许创建的用户的 <span class="token environment constant">UID</span> 相同。例如，执行“inoraad -u <span class="token number">0</span> -o usertest”命令建立用户 usertest。它的 <span class="token environment constant">UID</span> 和 root 用户的 <span class="token environment constant">UID</span> 相同，都是 <span class="token number">0</span>
	-m			：建立用户时强制建立用户的家目录。在建立系统用户时，该选项是默认的
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="2">
<li><strong>添加默认用户</strong></li>
</ol>
<p>如果我们只是创建用户，则可以不使用任何选项，系统会按照默认值帮我们指定这些选项。只需要最简单的命令就可以了。命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 例子1：添加默认用戶</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># useradd lamp</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>那么，这条命令到底做了什么呢？我们依次来看看。</p>
<p>1）在 <code>/etc/passwd</code> 文件中按照文件格式添加 lamp 用户的行。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># grep "lamp" /ete/passwd</span>
lamp:x:500:500::/home/lamp:/bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>用户的 UID 是从 500 开始计算的。同时默认指定了用户的家目录为 <code>/home/lamp/</code>，用户的登录 Shell 为 <code>/bin/bash</code>。</p>
</div>
<p>2）在 <code>/etc/shadow</code> 文件中建立用户 lamp 的相关行。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># grep "lamp" /etc/shadow</span>
lamp:<span class="token operator">!</span><span class="token operator">!</span>:15710:0:99999:7:::
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>当然，这个用户还没有设置密码，所以密码字段是“<strong>!!</strong>”，代表这个用户没有合理密码，不能正常登录。同时会按照默认值设定时间字段。</p>
<p>3）在 <code>/etc/group</code> 文件中建立和用户 lamp 相关的行。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span> <span class="token function">grep</span> <span class="token string">"lamp"</span> /etc/group
lamp:x:500:
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>因为 lamp 组是 lamp 用户的初始组，所以 lamp 用户名不会写入第四个字段。</p>
<p>4）在 <code>/etc/gshadow</code> 文件中建立和用户 lamp 相关的行。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># grep "lamp" /etc/gshadow</span>
lamp:<span class="token operator">!</span>::
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>当然，我们没有设定组密码，所以这里没有密码，也没有组管理员。</p>
<p>5）默认建立用户的家目录和邮箱。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll -d /home/lamp/</span>
drwx------ <span class="token number">3</span> lamp Lamp <span class="token number">4096</span> <span class="token number">1</span>月 <span class="token number">6</span> 00:19 /home/lamp/
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll /var/spool/mail/lamp</span>
-rw-rw---- <span class="token number">1</span> lamp mail <span class="token number">0</span> <span class="token number">1</span>月 <span class="token number">6</span> 00:19 /var/spool/mail/lamp
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>注意这两个文件的权限，都要让 lamp 用户拥有相应的权限。</p>
<p>大家看到了吗？<code>useradd</code> 命令在添加用户的时候，其实就是修改了我们在前面介绍的 7个文件或目录，那么我们可以通过手工修改这些文件来添加或删除用户吗？当然可以了，我们在后面会演示如何通过手工修改文件来删除用户。那什么时候需要手工建立用户？什么时候需要用命令建立用户？其实在任何情况下都不需要手工修改文件来建立用户，我们用命令来建立用户既简便又快捷。我们在这里只是为了说明 Linux 中的所有内容都是保存在文件中的。</p>
<ol start="3">
<li><strong>手工指定选项添加用户</strong></li>
</ol>
<p>刚刚我们在添加用户的时候全部采用的是默认值，那么我们使用选项来添加用户会有什么样的效果？</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 例子2：手工指定选项添加用户</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># groupadd lamp1</span>
<span class="token comment">#先手工添加 lamp1 用户组，因为我一会儿要把 lamp1 用户的初始组指定过来，如果不事先建立，则会报告用户组不存在</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># useradd -u 550 -g lamp1 -G root -d /home/lamp1 -c "test user" -s /bin/bash lamp1</span>
<span class="token comment">#在建立用户 lamp1 的同时指定了 UID（550）、初始组（lamp1）、附加组（root）、家目录（/home/lamp1/）、用户说明（test user）和用户登录Shell（/bin/bash）</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># grep "lamp1" /etc/passwd /etc/shadow /etc/group</span>
<span class="token comment">#同时查看三个文件</span>
/etc/passwd:lamp1:x:550:502:test user:/home/lamp1:/bin/bash
<span class="token comment">#用户的 UID、初始组、用户说明、家目景和登录 She11 都和命令手工指定的一致</span>
/etc/shadow:lamp1:<span class="token operator">!</span><span class="token operator">!</span>:15710:0:99999:7:::
<span class="token comment">#lamp1 用户还没有设定密码</span>
/etc/group:root:x:0:lamp1
<span class="token comment">#lamp1 用户加入了 root 组，root 组是 lamp1 用户的附加组</span>
/etc/group:lamp1:x:502:
<span class="token comment">#GID 为 502 的组是 lamp1 组</span>
（Vetc/group:1amp1:x:502:4
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ll -d /home/lamp1/</span>
drwx------ <span class="token number">3</span> lamp1 lamp1 <span class="token number">4096</span> <span class="token number">1</span>月 <span class="token number">6</span> 01:13 /home/lamp1/
<span class="token comment">#家目录也建立了，不需要手工建立</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>例子有点复杂，其实如果可以看懂还是很简单的，就是添加了用户，但是不再使用用户的默认值，而是手工指定了用户的 UID （是 550，而不再是 501)、初始组、附加组、家目录、用户说明和用户登录 Shell。这里还要注意一点，虽然手工指定了用户的家目录，但是家目录不需要手工建立，在添加用户的同时会自动建立家目录。如果手工建立了家目录，那么一定要修改目录的权限和从 <code>/etc/skel/</code> 模板目录中复制环境变量文件，反而更加麻烦。</p>
<ol start="4">
<li><strong>useradd 命令的默认值设定</strong></li>
</ol>
<p>大家发现了吗？在添加用户时，其实不需要手工指定任何内容，都可以使用 <code>useradd</code> 命令默认创建，这些默认值已经可以满足我们的要求。但是 <code>useradd</code> 命令的这些默认值是保存在哪里的呢？能否手工修改呢？</p>
<p><code>useradd</code> 命令在添加用户时参考的默认值文件主要有两个，分别是 <code>/etc/default/useradd</code> 和 <code>/etc/login.defs</code>。我们先看看 <code>/etc/default//useradd</code> 文件的内容。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/default/useradd</span>
<span class="token comment"># useradd defaults file</span>
<span class="token assign-left variable">GROUP</span><span class="token operator">=</span><span class="token number">100</span>
<span class="token assign-left variable"><span class="token environment constant">HOME</span></span><span class="token operator">=</span>/home
<span class="token assign-left variable">INACTIVE</span><span class="token operator">=</span>-1
<span class="token assign-left variable">EXPIRE</span><span class="token operator">=</span>
<span class="token assign-left variable"><span class="token environment constant">SHELL</span></span><span class="token operator">=</span>/bin/bash
<span class="token assign-left variable">SKEL</span><span class="token operator">=</span>/etc/skel
<span class="token assign-left variable">CREATE_MAIL_SPOOL</span><span class="token operator">=</span>yes
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code>/etc/default//useradd</code> 的默认值解释如表13-1：</p>
<p><strong>表13-1	<u>useradd 命令的默认值</u></strong></p>
<table>
<thead>
<tr>
<th>默认值</th>
<th>解释说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>GROUP=100</td>
<td>用于建立用户的默认组。<br />在添加每个用户时，用户的初始组就是 GID 为 100 的这个用户组</td>
</tr>
<tr>
<td>HOME=/home</td>
<td>用户的家目录的默认位置。<br />所有新建用户的家目录默认都在 <code>/home/</code> 下</td>
</tr>
<tr>
<td>INACTIVE=-1</td>
<td>密码过期后的宽限天数。也就是 <code>/etc/shadow</code> 文件的第七个字段，<br />-1：代表所有新建立的用户密码永远不会失效</td>
</tr>
<tr>
<td>EXPIRE=</td>
<td>密码失效时间。也就是/etc/shadow 文件的第八个字段，<br />默认值是空，代表所有新建用户没有失效时间，永久有效</td>
</tr>
<tr>
<td>SHELL=/bin/bash</td>
<td>用户的默认 Shell。<code>/bin/bash</code> 是 Linux 的标准 Shell，<br />代表所有新建立的用户默认 Shell 都是 <code>/bin/bash</code></td>
</tr>
<tr>
<td>SKEL=/etc/skel</td>
<td>定义用户的模板目录的位置。<br /><code>/etc/skel/</code> 目录中的文件都会复制到新建用户的家目录中</td>
</tr>
<tr>
<td>CREATE_MAIL_SPOOL=yes</td>
<td>是否给新建用户建立邮箱。默认是创建，<br />新建用户，系统会新建一个和用户名相同邮箱，在 <code>/var/spool/mail/</code> 目录下</td>
</tr>
</tbody>
</table>
<p>当然，这个文件也可以直接通过命令进行查看，结果是一样的（和 <code>/etc/default/useradd</code> 内容一样）。命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># useradd -D</span>
选项：
	-D	：查看新建用户的默认值
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>通过 <code>/etc/default/useradd</code> 文件大家已经能够看到我们新建用户的部分默认值，但是还有一些内容并没有在这个文件中出现，比如用户的 UID 为什么默认从 500 开始计算，<code>/etc/shadow</code> 文件中除第一、二、三个字段不用设定默认值外，还有第四、五、六个字段没有指定默认值（第七、八个字段的默认值在 <code>/etc/default/useradd</code> 文件中指定了）。那么，这些默认值就需要第二个默认值文件 <code>/etc/login.defs</code> 了，这个文件的内容如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/login.defs</span>
<span class="token comment">#这个文件有一些注释，把注释删除，文件内容就变成下面这个样子了</span>
MAIL_DIR	/var/spool/mail

PASS_MAX_DAYS	<span class="token number">99999</span>
PASS_MIN_DAYS	<span class="token number">0</span>
PASS_MIN_LEN	<span class="token number">5</span>
PASS_WARN_AGE	<span class="token number">7</span>

UID_MIN			<span class="token number">500</span>
UID_MAX			<span class="token number">60000</span>

GID_MIN			<span class="token number">500</span>
GID_MAX			<span class="token number">60000</span>

CREATE_HOME		<span class="token function">yes</span>

UMASK			077

USERGROUPS_ENAB <span class="token function">yes</span>

ENCRYPT_METHOD	SHA512
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p><code>/etc/login.defs</code> 的默认值解释如下表：</p>
<p><strong>表13-2	<u>/etc/login.defs 的默认值</u></strong></p>
<table>
<thead>
<tr>
<th>默认值</th>
<th>解释说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>MAIL_DIR</td>
<td>指定了新建用户的默认邮箱位置。默认在<code>/var/spool/mail/</code>目录下</td>
</tr>
<tr>
<td>PASS_MAX_DAYS</td>
<td>指定的是密码的有效期。也就是 <code>/etc/shadow</code> 文件的第五个字段，<br />代表多少天之后必须修改密码</td>
</tr>
<tr>
<td>PASS_MIN_DAYS</td>
<td>指定的是密码的两次修改间隔时间。也就是 <code>/etc/shadow</code> 文件的第四个字段，<br />代表上次修改密码后，几天后才能再次修改密码</td>
</tr>
<tr>
<td>PASS_MIN_LEN</td>
<td>密码的最小长度。默认不小于 5 位。<br />但是现在用户登录时验证已经被 PAM 模块取代，所以这个选项并不生效</td>
</tr>
<tr>
<td>PASS_WARN_AGE</td>
<td>密码修改到期前的警告天数。也就是 <code>/etc/shadow</code> 文件的第六个字段。<br />代表密码到达有效期前多少天开始进行警告提醒</td>
</tr>
<tr>
<td>UID_MIN<br />UID_MAX</td>
<td>指定了创建用户时最小 UID 和最大 UID 的范围</td>
</tr>
<tr>
<td>GID_MIN<br />GID_MAX</td>
<td>指定了 GID 的最小值和最大值的范围</td>
</tr>
<tr>
<td>CREATE_HOME</td>
<td>指定建立用户时是否自动建立用户的家目录，默认是建立</td>
</tr>
<tr>
<td>UMASK</td>
<td>指定建立的用户家目录的默认权限，<br />因为 umask 值是 077，所以新建的用户家目录的权限是 700</td>
</tr>
<tr>
<td>USERGROUPS_ENAB</td>
<td>指定使用命令 <code>userdel</code> 删除用户时，是否删除用户的初始组，默认是删除</td>
</tr>
<tr>
<td>ENCRYPT_METHOD</td>
<td>指定 Linux 用户的密码使用 SHA512 散列模式加密。</td>
</tr>
</tbody>
</table>
<p>我们现在已经知道了，系统在默认添加用户时，是靠 <code>/etc/default/useradd</code>  和 <code>/etc/login.defs</code> 文件定义用户的默认值的。如果我们想要修改所有新建用户的某个默认值，就可以直接修改这两个文件，而不用每个用户单独修改了。</p>
<h3 id="修改用户密码-passwd" tabindex="-1"><a class="header-anchor" href="#修改用户密码-passwd" aria-hidden="true">#</a> 修改用户密码：passwd</h3>
<ol>
<li><strong>命令格式</strong></li>
</ol>
<p>我们在上一小节中介绍了添加用户的命令，但是新添加的用户如果不设定密码是不能够登录系统的，那么我们来学习一下密码设置命令 <code>passwd</code>。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>paaswd <span class="token punctuation">[</span>选項<span class="token punctuation">]</span> 用户名
选项：
	-S		：查询用户密码的状态，也就是 /etc/shadow 文件中的内容。仅 root 用户可用
	-l		：暂时锁定用户。仅 root 用户可用
	-u		：解锁用户。仅 root 用户可用
	--stdin	：可以将通过管道符输出的数据作为用户的密码。主要在批量添加用户时使用
	
<span class="token punctuation">[</span>rootelocalhost ~<span class="token punctuation">]</span><span class="token comment"># passwd</span>
<span class="token comment">#passwd 直接回车代表修改当前用戶的密码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ol start="2">
<li><strong>root 用户修改密码</strong></li>
</ol>
<p>下面举几个例子，我们给新用户 lamp 设定密码，让 lamp 用户可以登录系统。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 例子1：</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># pasawd lamp</span>
更改用户 1amp 的密码。
新的 密码：											<span class="token operator">&lt;</span>---输入新的密码
无效的密码： 密码少于 <span class="token number">8</span> 个字符						<span class="token operator">&lt;</span>---有报错提示
无效的密码： 密码未通过字典检查 - 它基于字典单词			
重新输入新的 密码：									<span class="token operator">&lt;</span>---第二次输入宿码
passwd：所有的身份验证令牌已经成功更新。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>注意，要想给其他用户设定密码，只有两种用户可行：一种是 root 用户：另一种是 root 通过 sudo 命令赋予权限的普通用户。也就是说，普通用户只能修改自己的密码，而不能设定其他用户的密码。</p>
<p>还要注意一件事，设定用户密码时一定要遵守“<strong>复杂性、易记性、时效性</strong>”的密码规范。<u>简单来讲就是密码要大于 8 位，包含大写字母、小写字母、数字和特殊符号中的 3 种，并且容易记忆和定期更换</u>。但是 root 用户在设定密码时却可以不遵守这些规则，比如我刚刚给 lamp 用户设定的密码是“123”，系统虽然会提示密码过短和过于简单，但是依然可以设置成功。不过普通用户在修改自己的密码时，一定要遵守密码规范。当然，在生产服务器上，就算是 root身份，在设定密码时也要严格遵守密码规范，因为只有好的密码规范才是服务器安全的基础。</p>
<ol start="3">
<li><strong>普通用户修改密码</strong></li>
</ol>
<p>那么我们看看普通用户 lamp 是如何修改密码的。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 例子 2：</span>
<span class="token punctuation">[</span>lamp@localhost ~<span class="token punctuation">]</span><span class="token comment"># whoami</span>
lamp
<span class="token comment">#先看看我的身份</span>
<span class="token punctuation">[</span>lamp@localhost ~<span class="token punctuation">]</span>$ <span class="token function">passwd</span> lamp1
passwd： 只有根用户才能指定用户名称
<span class="token comment">#尝试修改 lamp1 用户的密码，系统提示普通用户不能修改其他用户的密码</span>
<span class="token punctuation">[</span>lamp@localhost ~<span class="token punctuation">]</span>$ <span class="token function">passwd</span> lamp
passwd： 只有根用户才能指定用户名称。
<span class="token comment">#怎么修改自己的密码也报错呢？这里其实说得很情楚，要想指定用户名修改密码，只有管理员可以，哪怕是修改自己的密码。那么修改自己的密码就只能像下面这样了</span>
<span class="token punctuation">[</span>lamp@localhost ~<span class="token punctuation">]</span>$ <span class="token function">passwd</span>
<span class="token comment">#使用 passwd 直接回车，就是修改自己的密码</span>
更改用户 lamp 的密码。
为 lamp 更改 STRESS 密码。
（当前）UNTX 密码：									<span class="token operator">&lt;</span>---注意，普通用户需要先输入自己的密码
新的密码：
无效的密码：密码未通过字典检查 - 它基于字典单词		<span class="token operator">&lt;</span>---好吧，又报错了，因为我输入的密码在字典中能够找到
新的密码：											<span class="token operator">&lt;</span>---密码必須符合密码规范重新输入新的密码：
passwd：所有的身份验证令牌已经成功更新。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>大家发现了吗？对普通用户来讲，密码设定就要严格得多了。首先，只能使用 <code>passwd</code> 来修改自己的密码，而不能使用 <code>passwd 用户名</code> 的方式。不过，如果你是 root 用户，则建议用 <code>passwd 用户名</code> 的方式来修改密码，因为这样不容易搞混。其次，在修改密码之前，需要先输入旧密码。最后，设定密码一定要严格遵守密码规范。</p>
<ol start="4">
<li><strong>查看用户密码状态</strong></li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 例子 3：</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># passwd -S lamp</span>
lamp PS <span class="token number">2013</span>-01-06 <span class="token number">0</span> <span class="token number">99999</span> <span class="token number">7</span> -1 （密码已设置，使用 SHA512 加密。<span class="token punctuation">)</span>
<span class="token comment">#上面这行代码的意思是：</span>
<span class="token comment">#用户名密码设定时间（2013-01-06）	密码修改间隔时间（0）	密码有效期（99999）	警告时间（7）	密码不失效（-1）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>“-S”选项会显示出密码状态，这里的密码修改间隔时间、密码有效期、警告时间、密码宽限时间，其实分别是 <code>/etc/shadow</code> 文件的第四、五、六、七个字段的内容。当然，<code>passwd</code> 命令是可以通过命令选项修改这几个字段的值的，不过我个人认为还是直接修改 <code>/etc/shadow</code> 文件简单一些。再次提醒一下，CentOS 6.3 的加密方式已经从 MD5 加密更新到 SHA512 加密，我们不用了解具体的加密算法，只要知道这种加密算法更加可靠和先进就足够了。</p>
<ol start="5">
<li><strong>锁定和解锁用户使用</strong></li>
</ol>
<p>使用 <code>passwd</code> 命令可以很方便地锁定和解索某个用户，我们来试试。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 例子 4：</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># passwd -l lamp</span>
锁定用户 lamp 的密码。
passwd：操作成功
<span class="token comment">#锁定用户</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># passwd -S lamp</span>
lamp PS <span class="token number">2013</span>-01-06 <span class="token number">0</span> <span class="token number">99999</span> <span class="token number">7</span> -1（密码已被锁定）
<span class="token comment">#用“-S”选项查看状态，很清楚地提示密码已被锁定</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># grep "lamp" /etc/shadow</span>
lamp:<span class="token operator">!</span><span class="token operator">!</span><span class="token variable">$6</span><span class="token variable">$ZTq7o</span>/96<span class="token variable">$1jO7120bzW</span>.D1zBa9CsY43d04onskUczjwiFMNt8px4GxJoHx9zA1SC9.iYzh9LZAAfEM21g92hM9w/p6NS50.:15711:0:99999:7:::
<span class="token comment">#其实锁定就是在加密密码之前加入了“!!”，让密码失效而已</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># passwd -u lamp</span>
解锁用户 lamp 的密码。
passwd：操作成功
<span class="token comment">#解信用户</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># passwd -S lamp</span>
lamp PS <span class="token number">2013</span>-01-06 <span class="token number">0</span> <span class="token number">99999</span> <span class="token number">7</span> -1（密码已设置，使用 SHA512 加密。）
<span class="token comment">#锁定状态消失</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># grep "lamp" /etc/shadow</span>
lamp:<span class="token variable">$6</span><span class="token variable">$ZTq7o</span>/96<span class="token variable">$1jO7120bzW</span>.D1zBa9CsY43d04onskUczjwiFMNt8px4GxJoHx9zA1SC9.iYzh9LZAAfEM21g92hM9w/p6NS50.:15711:0:99999:7:::
<span class="token comment">#密码前面的“!!”删除了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol start="6">
<li><strong>使用字符串作为用户的密码</strong></li>
</ol>
<p>这种做法主要是在批量添加用户时，给所有的用户设定一个初始密码。但是需要注意的是，这样设定的密码会把密码明文保存在历史命令中，会有安全隐患。所以，如果使用了这种方式修改密码，那么应该记住两件事情：第一，手工清除历史命令；第二，强制这些新添加的用户在第一次登录时必须修改密码（具体方法参考 <code>chage</code> 命令）。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 例子 5：</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo "123" | passwd --stdin lamp</span>
更改用户 lamp 的密码。
passwd：所有的身份验证令牌已经成功更新。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>命令很简单，调用管道符，让 <code>echo</code> 的输出作为 <code>passwd</code> 命令的输入，就可以把 lamp 用户的密码设定为“123”了。</p>
<h3 id="修改用户信息-usermod" tabindex="-1"><a class="header-anchor" href="#修改用户信息-usermod" aria-hidden="true">#</a> 修改用户信息：usermod</h3>
<p>在添加了用户之后，如果不小心添加错了用户的信息，那么是否可以修改呢？当然可以了，我们可以直控使用编辑器修改用户相关文件，也可以使用 <code>usermod</code> 命令进行修改。我们就来学习下 <code>usermod</code>	 命令。该命令的格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># usermod [选项] 用户</span>
选项：
	-u <span class="token environment constant">UID</span>		：修改用户的 <span class="token environment constant">UID</span>
	-d 家目录	：修改用户的家目录。家目录必须写绝对路径
	-c 用户说明	：修改用户的说明信息，就是 /etc/passwd 文件的第五个字段
	-g 组名		：修改用户的初始组，就是 /etc/passwd 文件的第四个字段
	-G 组名		：修改用户的附加组，其实就是把用户加入其他用户组
	-s shell	：修改用户的登录 Shell。默认是 /bin/bash
	-e 日期		：修改用户的失效日期，格式为“YYYY-MM-DD”。也就是 /etc/shadow 文件的第八个字段
	-L			：临时锁定用户（Lock）
	-U			：解锁用户（Unlock<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>可以看到，<code>usermod</code> 和 <code>useradd</code> 命令的选项非常类似，因为它们都是用于定义用户信息的。不过需要注意的是，<code>useradd</code> 命令用于在添加新用户时指定用户信息，而 <code>usermod</code> 命令用于修改已经存在的用户的用户信息，千万不要搞混。</p>
<p><code>usermod</code> 命令多出了几个选项，其中，-L 可以临时锁定用户，不让这个用户登录。其实锁定的方法就是在 <code>/etc/shadow</code> 文件的密码字段前加入“!”。大家已经知道密码项是加密换算的，所以加入任何字符都会导致密码失效，所以这个用户就会被禁止登录。而解锁（-U）其实就是把密码字段前的“!”取消。举个例子：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 例子 1：</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># usermod -L lamp</span>
<span class="token comment">#锁定用户</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># grep "lamp” /etc/shadow</span>
lamp:<span class="token operator">!</span><span class="token variable">$6SYrPjBgowschRvAsybEncu24hkYFqxREH3NnzhAVDJSQLwRwTSbcA2N8UbPD9bBKvoskyxIaMGs</span>/Eg5AQwO.UokonKqaHFa/:15711:0:99999:7:::
<span class="token comment">#查看发现锁定就是在密码宇段前加入“!”，这时 lamp 用户就暂时不能登录了</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># usermod -U lamp</span>
<span class="token comment">#解锁用户</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># grep "lamp" /etc/shadow</span>
lamp:<span class="token variable">$6SYrPjBgowschRvAsybEncu24hkYFqxREH3NnzhAVDJSQLwRwTSbcA2N8UbPD9bBKvoskyxIaMGs</span>/Eg5AQwO.UokonKqaHFa/:15711:0:99999:7:::
<span class="token comment">#取消了密码字段前的“!”</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>再举几个其他的例子：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 例子 2：</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># usermod -G root lamp</span>
<span class="token comment">#把 lamp 用户加入 root 组</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># grep "lamp" /etc/group</span>
root:x:0:lamp
lamp:x:501:
<span class="token comment">#lamp 用户已经加入了 root 组</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 例子 3：</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># usermod -c "test user" lamp</span>
<span class="token comment">#修改用户说明</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># grep "lamp" /etc/passwd</span>
lamp:x:501:501:test user:/home/lamp:/bin/bash
<span class="token comment">#查看一下，用户说明已经被修改了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="修改用户密码状态-chage" tabindex="-1"><a class="header-anchor" href="#修改用户密码状态-chage" aria-hidden="true">#</a> 修改用户密码状态：chage</h3>
<p>通过 <code>chage</code> 命令可以查看和修改 <code>/etc/shadow</code> 文件的第三个字段到第八个字段的密码状态。我个人建议直接修改 <code>/etc/shadow</code> 文件更加直观和简单，那么为什么还要讲解 <code>chage</code> 命令呢？因为 <code>chage</code> 命令有一种很好的用法，就是强制用户在第一次登录时必须修改密码。<code>chage</code> 命令的格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># chage [选项] 用户名</span>
选项：
	-l		：列出用户的详细密码状态
	-d 日期	：密码最后一次修改日期（ /etc/shadow 文件的第三个字段<span class="token punctuation">)</span>。格式为 YYYY-MM-DD
	-m 天数	：密码的两次修改间隔时间（第四个字段）
	-M 天数	：密码的有效期（第五个字段）
	-W 天数	：密码修改到期前的警告天数（第六个字段）
	-I 天数	：密码过期后的宽限天数（第七个字段）
	-E 日期	：账号失效时间（第八个字段<span class="token punctuation">)</span>，格式为 YYYY-MM-DD
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>举几个例子，先看看查看状态。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 例子 1：</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># chage -l lamp</span>
<span class="token comment">#查看一下用户密码状态</span>
Last password change								<span class="token builtin class-name">:</span> Jan 06, <span class="token number">2013</span>
Password expires									<span class="token builtin class-name">:</span> never
Password inactive									<span class="token builtin class-name">:</span> never
Account expires										<span class="token builtin class-name">:</span> never
Minimum number of days between password change		<span class="token builtin class-name">:</span> <span class="token number">0</span>
Maximum number of days between password change		<span class="token builtin class-name">:</span> <span class="token number">99999</span>
Number of days of warning before password expires	<span class="token builtin class-name">:</span> <span class="token number">7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>我们强制 lamp 用户在第一次登录时必须修改密码。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 例子 2:</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># chage -d O lamp</span>
<span class="token comment">#这个命令其实是把密码修改日期归零了，这样用户一登录就要修改密码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>然后我们以 lamp 用户登录一下系统。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>localhost login: lamp
Password:
<span class="token comment">#输入密码登录</span>
You are required to change your password immediately <span class="token punctuation">(</span>root enforced<span class="token punctuation">)</span>
changing password <span class="token keyword">for</span> lamp.
<span class="token comment">#有一些提示，就是说明 root 强制你登录后修改密码</span>
<span class="token punctuation">(</span>current<span class="token punctuation">)</span> UNIX password:
<span class="token comment">#输入旧密码</span>
New password:
Retype new password:
<span class="token comment">#输入两次新密码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>这项功能在进行批量用户管理时还是非常有用的。</p>
<h3 id="删除用户-userdel" tabindex="-1"><a class="header-anchor" href="#删除用户-userdel" aria-hidden="true">#</a> 删除用户：userdel</h3>
<p>这个命令比较简单，就是删除用户。命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span> <span class="token function">userdel</span> <span class="token punctuation">[</span>-r<span class="token punctuation">]</span> 用户名
选项：
	-r	：在删除用户的同时删除用户的家目录

<span class="token comment"># 例如：</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># userdel -r lamp</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>在删除用户的同时如果不删除用户的家目录，那么家目录就会变成没有属主和属组的目录，也就是垃圾文件。</p>
<p>前面我们说过，可以手工修改用户的相关文件来建立用户，但在实际工作中，这样做没有实际的意义，因为用户管理命令可以更简单地完成这项工作。在学习时，手工添加用户是有助于加深我们对用户相关文件的理解的。不过手工添加用户还是比较麻烦的，我们变通一下，手工删除用户，原理是一样的，能够手工删除当然也可以手工建立。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 例如：</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># useradd lamp</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># passwd lamp</span>
<span class="token comment">#重新建立 lamp 用户</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/passwd</span>
lamp:x:501:501::/home/lamp:/bin/bash			<span class="token operator">&lt;</span>---删除此行
<span class="token comment">#修改用户信息文件，删除 lamp 用户行</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/shadow</span>
lamp:<span class="token variable">$6</span><span class="token variable">$KooYtcQJ</span><span class="token variable">$56Xk9vp3D2vMRBxibNon</span>,21cVJ9onbW81Hx4WrOx6qBqfGa9u3mjMsGjqYnjL/4t3zt3YxElce2X8rbb12x4a0:15716:0:99999:7:::		<span class="token operator">&lt;</span>---删除此行
<span class="token comment">#修改影子文件，删除 lamp 用户行。注意：这个文件的权限是 000，所以要强制保存</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/group</span>
lamp<span class="token punctuation">;</span>x:501:										<span class="token operator">&lt;</span>---删除此行
<span class="token comment">#修改组信息文件，删除 lamp 组的行</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># vi /etc/gshadow</span>
lamp:<span class="token operator">!</span>::										<span class="token operator">&lt;</span>---删除此行
<span class="token comment">#修改组影子文件，删除 lamp 组的行。同样注意需要强制保存</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># rm -rf /var/spool/mail/lamp</span>
<span class="token comment">#删除用户邮箱</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># rm -rf /home/lamp/</span>
<span class="token comment">#删除用户的家目录</span>
<span class="token comment">#至此，用户彻底删除，再新建用户lamp。如果可以正常建立，则说明我们手工删除干净了</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># useradd lamp</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># passwd lamp</span>
<span class="token comment">#重新建立同名用户，没有报错，说明前面的手工删除是可以完全删除用户的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>这个实验很有趣吧，不过命令比较多，大家通过这个实验应该可以清楚地了解到这几个用户相关文件的作用。</p>
<h3 id="查看用户的-uid-和-gid-id" tabindex="-1"><a class="header-anchor" href="#查看用户的-uid-和-gid-id" aria-hidden="true">#</a> 查看用户的 UID 和 GID：id</h3>
<p><code>id</code> 命令可以查询用户的 UID、GID 和附加组的信息。命令比较简单，格式如下:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># id 用户名</span>

<span class="token comment"># 例子 1：</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># id lamp</span>
<span class="token assign-left variable">uid</span><span class="token operator">=</span><span class="token number">501</span><span class="token punctuation">(</span>lamp<span class="token punctuation">)</span>	<span class="token assign-left variable">gid</span><span class="token operator">=</span><span class="token number">501</span><span class="token punctuation">(</span>lamp<span class="token punctuation">)</span>	<span class="token assign-left variable">groups</span><span class="token operator">=</span><span class="token number">501</span><span class="token punctuation">(</span>lamp<span class="token punctuation">)</span>
<span class="token comment">#能看到 uid（用户ID）、gid（初始组ID）、groups 是用户所在组，这里既可以看到初始组，如果有附加组，则也能看到附加组</span>

<span class="token comment"># 例子 2：</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># usermod -G root lamp</span>
<span class="token comment">#把用户加入 root 组</span>
<span class="token punctuation">[</span>root@localnost ~<span class="token punctuation">]</span><span class="token comment"># id lamp</span>
<span class="token assign-left variable">uid</span><span class="token operator">=</span><span class="token number">501</span><span class="token punctuation">(</span>lamp<span class="token punctuation">)</span>	<span class="token assign-left variable">gid</span><span class="token operator">=</span><span class="token number">501</span><span class="token punctuation">(</span>lamp<span class="token punctuation">)</span>	<span class="token assign-left variable">groups</span><span class="token operator">=</span><span class="token number">501</span><span class="token punctuation">(</span>lamp<span class="token punctuation">)</span>,0<span class="token punctuation">(</span>root<span class="token punctuation">)</span>
<span class="token comment">#大家发现 root 组中加入了 lamp 用户的附加组信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="切换用户身份-su" tabindex="-1"><a class="header-anchor" href="#切换用户身份-su" aria-hidden="true">#</a> 切换用户身份：su</h3>
<p><code>su</code> 命令可以切换成不同的用户身份，命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># su [选项] 用户名</span>
选项：
	-		：选项只使用“-”代表连带用户的环境变量一起切换
	-c 命令	：仅执行一次命令，而不切换用户身份
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>“-”不能省略，它代表切换用户身份时，用户的环境变量也要切换成新用户的环境变量。大家知道环境变量是用来定义用户的操作环境的，如果环境变量没有随用户身份切换，那么很多操作将无法正确执行。比如普通用户 lamp 切换成超级用户 root，但是没有加入“-”，那么虽然是 root 用户，但是 <code>$PATH</code> 环境变量还是 lamp 用户的，不包含 <code>/sbin</code>、<code>/usr/sbin</code> 等超级用户命令保存路径，所以无法使用管理员命令；而且 root 用户在接收邮件时，还会发现收到的是 lamp 用户的邮件，因为环境变量 <code>$MAIL</code> 没有切换过来。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 例子 1：</span>
<span class="token punctuation">[</span>lamp@localhost ~<span class="token punctuation">]</span>$ <span class="token function">whoami</span>
lamp
<span class="token comment">#查询用户身份，我是lamp</span>
<span class="token punctuation">[</span>lamp@localhost ~<span class="token punctuation">]</span>$ <span class="token function">su</span> root
密码：								<span class="token operator">&lt;</span>---输入 root 密码
<span class="token comment">#切換到 root，但是没有切换环境变量。注意：普通用户切换到 root 需要密码</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># env | grep lamp</span>
<span class="token comment">#查看环境变量，提取包含 lamp 的行</span>
<span class="token assign-left variable"><span class="token environment constant">USER</span></span><span class="token operator">=</span>lamp 
<span class="token comment">#用户名还是 lamp，而不是 root</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span>/usr/lib/qt-3.3/bin:/usr/local/bin:/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/sbin:/home/lamp/bin
<span class="token comment">#命令查找的路径不包含超级用户路径</span>
<span class="token assign-left variable">MAIL</span><span class="token operator">=</span>/var/spool/mail/lamp
<span class="token assign-left variable"><span class="token environment constant">PWD</span></span><span class="token operator">=</span>/home/lamp
<span class="token assign-left variable"><span class="token environment constant">LOGNAME</span></span><span class="token operator">=</span>lamp
<span class="token comment">#邮箱、家目录、目前用户名还是 lamp</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>通过例子 ！ 我们已经注意到，切换用户时如果没有加入“-”，那么切换是不完全的。要想完整切换，可以使用如下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 例子 2：</span>
<span class="token punctuation">[</span>lamp@localhost ~<span class="token punctuation">]</span>$ <span class="token function">su</span> - root
密码：
<span class="token comment">#”-”代表连带环境变量一起切換，不能有省略</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>有些系统命令只有 root 可以执行，比如添加用户的命令 <code>useradd</code>，所以我们需要使用 root 身份执行。但是我们只想执行一次，而不想切换身份，可以做到吗？当然可以，命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 例子 3：</span>
<span class="token punctuation">[</span>lamp@localhost ~<span class="token punctuation">]</span>$ <span class="token function">whoami</span>
lamp
<span class="token comment">#当前我是 lamp</span>
<span class="token punctuation">[</span>lamp@localhout ~<span class="token punctuation">]</span>$ <span class="token function">su</span> - root -c <span class="token string">"uneradd user1"</span>
密码：
<span class="token comment">#不切換成 root，但是执行 useradd 命今添加 userl 用户</span>
<span class="token punctuation">[</span>lamp@localhost ~<span class="token punctuation">]</span>$ <span class="token function">whoami</span>
lamp
<span class="token comment">#我还是1amp</span>
<span class="token punctuation">[</span>lamp@localhost ~<span class="token punctuation">]</span>$ <span class="token function">grep</span> <span class="token string">"userl"</span> /etc/passwd
user1:x:502:504::/home/user1:/bin/bash
<span class="token comment">#user1 用户已经添加了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>总之，切换用户时“-”代表连带环境变量一起切换，不能省略，否则用户身份切换不完全。</p>
<h2 id="用户组管理命令" tabindex="-1"><a class="header-anchor" href="#用户组管理命令" aria-hidden="true">#</a> 用户组管理命令</h2>
<h3 id="添加用户组-groupadd" tabindex="-1"><a class="header-anchor" href="#添加用户组-groupadd" aria-hidden="true">#</a> 添加用户组：groupadd</h3>
<p>添加用户组的命令是 <code>groupadd</code>，命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># groupadd [选项] 组名</span>
选项：
	-g GID		：指定组ID
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>添加用户组的命令比较简单，举个例子：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># groupadd groupl</span>
<span class="token comment">#添加 group1 组</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># grep "groupl" /etc/group</span>
group1:x:502:
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="修改用户组-groupmod" tabindex="-1"><a class="header-anchor" href="#修改用户组-groupmod" aria-hidden="true">#</a> 修改用户组：groupmod</h3>
<p><code>groupmod</code> 命令用于修改用户组的相关信息，命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># groupmod [选项] 组名</span>
选项：
	-g GID		：修改组ID
	-n 新组名	：修改组名

例子：
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># groupmod -n testgrp group1</span>
<span class="token comment">#把组名 group1 修改为 testgrp</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># grep "testgrp" /etc/group</span>
testgrp:x:502：
<span class="token comment">#注意 GID 还是 502，但是组名已经改变</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>不过大家还是要注意，用户名不要随意修改，组名和 GID 也不要随意修改，因为非常容易导致管理员逻辑混乱。如果非要修改用户名或组名，则建议大家先删除旧的，再建立新的。</p>
<h3 id="删除用户组-groupdel" tabindex="-1"><a class="header-anchor" href="#删除用户组-groupdel" aria-hidden="true">#</a> 删除用户组：groupdel</h3>
<p><code>groupdel</code> 命令用于删除用户组，命令格式如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[root@localhost ~]# groupdel 组名

#例子：
[root@localhost ~]# groupdel testgrp
#删除 testgrp 组
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>不过大家要注意，要删除的组不能是其他用户的初始组，也就是说这个组中没有初始用户才可以删除。如果组中有附加用户，则删除组时不受影响。</p>
<h3 id="把用户添加进组或从组中删除-gpasswd" tabindex="-1"><a class="header-anchor" href="#把用户添加进组或从组中删除-gpasswd" aria-hidden="true">#</a> 把用户添加进组或从组中删除：gpasswd</h3>
<p>其实 <code>gpasswd</code> 命令是用来设定组密码并指定组管理员的，不过我们在前面已经说了，组密码和组管理员功能很少使用，而且完全可以被 <code>sudo</code> 命令取代，所以 <code>gpasswd</code> 命令现在主要用于把用户添加进组或从组中删除。命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># gpasswd [选项] 组名</span>
选项：
	-a 用户名		：把用户加入组
	-d 用户名		：把用户从组中删除

<span class="token comment"># 例子：</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># groupadd grouptest</span>
<span class="token comment">#添加组 grouptest</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># gpasswd -a lamp grouptest</span>
Adding user lamp to group grouptest 
<span class="token comment">#把用户 lamp 加入 grouptest 组</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># grep "lamp" /etc/group</span>
lamp:x:501：
grouptest:x:505:lamp
<span class="token comment">#查看一下，lamp 用户已经作为附加用户加入 grouptest 组</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># gpasswd -d lamp grouptest</span>
Removing user lamp from group grouptest
<span class="token comment">#把用户 lamp 从组中删除</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># grep "grouptest" /etc/group</span>
grouptest:x:505:
<span class="token comment">#组中没有 lamp 用户了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>大家注意，也可以使用 <code>usermod</code> 命令把用户加入某个组，不过 <code>usermod</code> 命令的操作对象是用户，命令是 <code>usenmod -G grouptest lamp</code>，把用户名作为参数放在最后；而 <code>gpasswd</code> 命令的操作对象是组，命令是 <code>gpasswd -a lamp grouptest</code>，把组名作为参数放在最后。</p>
<p>推荐大家使用 <code>gpasswd</code> 命令，因为这个命令不仅可以把用户加入用户组，也可以把用户从用户组中删除。</p>
<h3 id="改变有效组-newgrp" tabindex="-1"><a class="header-anchor" href="#改变有效组-newgrp" aria-hidden="true">#</a> 改变有效组：newgrp</h3>
<p>我们说过，每个用户可以属于一个初始组（用户是这个组的初始用户），也可以属于多个附加组（用户是这个组的附加用户）。既然用户可以属于这么多用户组，那么用户在创建文件后，默认生效的组身份是哪个呢？当然是初始用户组的组身份生效了，因为初始组是用户一旦登录就直接获得的组身份。也就是说，用户在创建文件后，文件的属组是用户的初始组，因为用户的有效组默认是初始组。既然用户属于多个用户组，那么能不能改变用户的有效组呢？使用命令 <code>newgrp</code> 就可以切换用户的有效组。命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># newgrp 组名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>举个例子，我们已经有了普通用户 lamp，默认会建立 lamp 用户组，lamp 组是 lamp 用户的初始组。我们再把 lamp 用户加入 group1 组，那么 group1 组就是 lamp 用户的附加组。当 lamp 用户创建文件 test1 时，test1 文件的属组是 lamp 组，因为 lamp 组是 lamp 用户的有效组。通过 <code>newgp</code> 命令就可以把 lamp 用户的有效组变成 group1 组，当 lamp 用户创建文件 test2 时，就会发现 test2 文件的属组就是 group1 组。命令如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># groupadd group1</span>
<span class="token comment">#添加组 group1</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># gpasswd -a lamp groupl</span>
Adding user lamp to group groupl
<span class="token comment">#把 lamp 用户加入 group1 组</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># grep "lamp" /ete/group</span>
lamp:x<span class="token punctuation">;</span><span class="token number">501</span>：
group1:x:503:lamp
<span class="token comment"># lamp 用户既属于 lamp 组，也属于 group1 组</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># su - lamp</span>
<span class="token comment">#切換成 lamp 身份，超级用户切换成普通用户不用密码</span>
<span class="token punctuation">[</span>lamp@localhost ~<span class="token punctuation">]</span>$ <span class="token function">touch</span> test1
<span class="token comment">#创建文件 test1</span>
<span class="token punctuation">[</span>lamp@localhost ~<span class="token punctuation">]</span>$ ll testl
-rw-rw-r-- <span class="token number">1</span> lamp lamp <span class="token number">0</span> <span class="token number">1</span>月 <span class="token number">14</span> 05:43 test1
<span class="token comment"># test1 文件的默认属组是 lamp 组</span>
<span class="token punctuation">[</span>lamp@localhost ~<span class="token punctuation">]</span>$ newgrp groupl
<span class="token comment">#切换 lamp 用户的有效组为 group1 组</span>
<span class="token punctuation">[</span>lamp@localhost ~<span class="token punctuation">]</span>$ <span class="token function">touch</span> test2
<span class="token comment">#创建文件 test2</span>
<span class="token punctuation">[</span>lamp@localhost ~<span class="token punctuation">]</span>$ <span class="token number">11</span> test2
-rw-r--r-- <span class="token number">1</span> lamp groupl <span class="token number">0</span> <span class="token number">1</span>月 <span class="token number">14</span> 05:44 test2
<span class="token comment">#test2 文件的默认属组是 group1 组</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>通过这个例子明白有效组的作用了吗？其实就是当用户属于多个组时，在创建文件是哪个组身份生效。使用 <code>nwegrp</code> 命令可以在多个组身份之间切换。</p>
</template>
