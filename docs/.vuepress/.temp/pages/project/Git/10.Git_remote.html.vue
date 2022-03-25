<template><h2 id="git-远程仓库-github" tabindex="-1"><a class="header-anchor" href="#git-远程仓库-github" aria-hidden="true">#</a> Git 远程仓库（GitHub）</h2>
<p>目前我们使用到的 Git 命令都是在本地执行，如果你想通过 Git 分享你的代码或者与其他开发人员合作。 你就需要将数据放到一台其他开发人员能够连接的服务器上。</p>
<p>本例使用了 Github 作为远程仓库，你可以先阅读的 <a href="https://www.runoob.com/w3cnote/git-guide.html" target="_blank" rel="noopener noreferrer">Github 简明教程。<ExternalLinkIcon/></a></p>
<p><img src="@source/project/Git/assets/Git-push-command.jpg" alt="Git-push-command" loading="lazy"></p>
<h3 id="添加远程库" tabindex="-1"><a class="header-anchor" href="#添加远程库" aria-hidden="true">#</a> 添加远程库</h3>
<p>要添加一个新的远程仓库，可以指定一个简单的名字，以便将来引用,命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> <span class="token punctuation">[</span>shortname<span class="token punctuation">]</span> <span class="token punctuation">[</span>url<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>本例以 Github 为例作为远程仓库，如果你没有 Github 可以在官网 https://github.com/注册。</p>
<p>由于你的本地 Git 仓库和 GitHub 仓库之间的传输是通过SSH加密的，所以我们需要配置验证信息：</p>
<p>使用以下命令生成 SSH Key：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ ssh-keygen -t rsa -C <span class="token string">"youremail@example.com"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>后面的 <em>your_email@youremail.com</em> 改为你在 Github 上注册的邮箱，之后会要求确认路径和输入密码，我们这使用默认的一路回车就行。</p>
<p>成功的话会生成 <code>~/.ssh/id_rsa.pub</code>，打开复制里面的 <strong>key</strong>。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ ssh-keygen -t rsa -C <span class="token string">"429240967@qq.com"</span>
Generating public/private rsa key pair.
Enter <span class="token function">file</span> <span class="token keyword">in</span> <span class="token function">which</span> to save the key <span class="token punctuation">(</span>/Users/tianqixin/.ssh/id_rsa<span class="token punctuation">)</span>: 
Enter passphrase <span class="token punctuation">(</span>empty <span class="token keyword">for</span> no passphrase<span class="token punctuation">)</span>:    <span class="token comment"># 直接回车</span>
Enter same passphrase again:                   <span class="token comment"># 直接回车</span>
Your identification has been saved <span class="token keyword">in</span> ~/.ssh/id_rsa.
Your public key has been saved <span class="token keyword">in</span> ~/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:MDKVidPTDXIQoJwoqUmI4LBAsg5XByBlrOEzkxrwARI <span class="token number">429240967</span>@qq.com
The key's randomart image is:
+---<span class="token punctuation">[</span>RSA <span class="token number">3072</span><span class="token punctuation">]</span>----+
<span class="token operator">|</span>E*+.<span class="token operator">+=</span>**oo       <span class="token operator">|</span>
<span class="token operator">|</span>%Oo+oo<span class="token operator">=</span>o. <span class="token builtin class-name">.</span>      <span class="token operator">|</span>
<span class="token operator">|</span>%**.o.o.         <span class="token operator">|</span>
<span class="token operator">|</span>OO.  o o         <span class="token operator">|</span>
<span class="token operator">|</span>+o+     S        <span class="token operator">|</span>
<span class="token operator">|</span><span class="token builtin class-name">.</span>                <span class="token operator">|</span>
<span class="token operator">|</span>                 <span class="token operator">|</span>
<span class="token operator">|</span>                 <span class="token operator">|</span>
<span class="token operator">|</span>                 <span class="token operator">|</span>
+----<span class="token punctuation">[</span>SHA256<span class="token punctuation">]</span>-----+
$ <span class="token function">cat</span> ~/.ssh/id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>回到 github 上，进入 <strong>Account =&gt; Settings</strong>（账户配置）。</p>
<p><img src="@source/project/Git/assets/Account_settings.png" alt="Account_settings" loading="lazy"></p>
<p>左边选择 <strong>SSH and GPG keys</strong>，然后点击 <strong>New SSH key</strong> 按钮。</p>
<p><img src="@source/project/Git/assets/SSH_and_PGP_keys.png" alt="SSH and GPG keys" loading="lazy"></p>
<p><em>title</em> 设置标题，可以随便填，<em>key</em> 粘贴在你电脑上生成的 <strong>key</strong>（ 上面生成的<code>~/.ssh/id_rsa.pub</code>文件内容），最后点击<strong>Add SSH key</strong>按钮添加。</p>
<p><img src="@source/project/Git/assets/add_key.png" alt="add_key" loading="lazy"></p>
<p>添加成功后界面如下所示</p>
<p><img src="@source/project/Git/assets/SSH_and_PGP_keys.png" alt="SSH and GPG keys" loading="lazy"></p>
<p>为了验证是否成功，输入以下命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">ssh</span> -T git@github.com
The authenticity of <span class="token function">host</span> <span class="token string">'github.com (52.74.223.119)'</span> can<span class="token string">'t be established.
RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes                   # 输入 yes
Warning: Permanently added '</span>github.com,52.74.223.119<span class="token string">' (RSA) to the list of known hosts.
Hi tianqixin! You'</span>ve successfully authenticated, but GitHub does not provide shell access. <span class="token comment"># 成功信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>以上命令说明我们已成功连上 Github。</p>
<p>之后点击 <strong>New repository</strong> 如下图所示：</p>
<p><img src="@source/project/Git/assets/New_repository.png" alt="New_repository" loading="lazy"></p>
<p>之后在在 <strong>Repository name</strong> 填入 myblog（远程仓库名） ，其他保持默认设置，点击<strong>Create repository</strong>按钮，就成功地创建了一个新的Git仓库：</p>
<p><img src="@source/project/Git/assets/repository_name.png" alt="repository_name" loading="lazy"></p>
<p>创建成功后，显示如下信息：</p>
<p><img src="@source/project/Git/assets/created_repository.png" alt="created_repository" loading="lazy"></p>
<p>以上信息告诉我们可以从这个仓库克隆出新的仓库，也可以把本地仓库的内容推送到 GitHub 仓库。</p>
<p>现在，我们根据 GitHub 的提示，在本地的仓库下运行命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">mkdir</span> myblog		                        <span class="token comment"># 创建测试目录</span>
$ <span class="token builtin class-name">cd</span> myblog/                    		    <span class="token comment"># 进入测试目录</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">"# Git 测试"</span> <span class="token operator">>></span> README.md     <span class="token comment"># 创建 README.md 文件并写入内容</span>
$ <span class="token function">ls</span>                                        <span class="token comment"># 查看目录下的文件</span>
README
$ <span class="token function">git</span> init                                  <span class="token comment"># 初始化</span>
$ <span class="token function">git</span> <span class="token function">add</span> README.md                         <span class="token comment"># 添加文件</span>
$ <span class="token function">git</span> commit -m <span class="token string">"添加 README.md 文件"</span>        <span class="token comment"># 提交并备注信息</span>
<span class="token punctuation">[</span>master <span class="token punctuation">(</span>root-commit<span class="token punctuation">)</span> 0205aab<span class="token punctuation">]</span> 添加 README.md 文件
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> README.md

<span class="token comment"># 提交到 Github</span>
$ <span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:Ryukarin/myblog.git
$ <span class="token function">git</span> push -u origin master
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>以下命令请根据你在 Github 成功创建新仓库的地方复制，而不是根据我提供的命令，因为我们的 Github 用户名不一样，仓库名也不一样。</p>
<p>接下来我们返回 Github 创建的仓库，就可以看到文件已上传到 Github上：</p>
<p><img src="@source/project/Git/assets/push.png" alt="push" loading="lazy"></p>
<h3 id="查看当前的远程库" tabindex="-1"><a class="header-anchor" href="#查看当前的远程库" aria-hidden="true">#</a> 查看当前的远程库</h3>
<p>要查看当前配置有哪些远程仓库，可以用命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> remote
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>实例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> remote
origin
$ <span class="token function">git</span> remote -v
origin	git@github.com:Ryukarin/myblog.git <span class="token punctuation">(</span>fetch<span class="token punctuation">)</span>
origin	git@github.com:Ryukarin/myblog.git <span class="token punctuation">(</span>push<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>执行时加上 <strong>-v</strong> 参数，你还可以看到每个别名的实际链接地址。</p>
<h3 id="提取远程仓库" tabindex="-1"><a class="header-anchor" href="#提取远程仓库" aria-hidden="true">#</a> 提取远程仓库</h3>
<p>Git 有两个命令用来提取远程仓库的更新。</p>
<ol>
<li>从远程仓库下载新分支与数据：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> fetch
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>该命令执行完后需要执行 <code>git merge</code> 远程分支到你所在的分支。</p>
<ol start="2">
<li>从远端仓库提取数据并尝试合并到当前分支：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> merge
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>该命令就是在执行 <code>git fetch</code> 之后紧接着执行 <code>git merge</code> 远程分支到你所在的任意分支。</p>
<p>假设你配置好了一个远程仓库，并且你想要提取更新的数据，你可以首先执行 <code>git fetch [alias]</code> 告诉 Git 去获取它有你没有的数据，然后你可以执行 <code>git merge [alias]/[branch]</code> 以将服务器上的任何更新（假设有人这时候推送到服务器了）合并到你的当前分支。</p>
<p>接下来我们在 Github 上点击 <strong>README.md</strong> 并在线修改它:</p>
<p><img src="@source/project/Git/assets/edit_readme.png" alt="edit readme" loading="lazy"></p>
<p>修改好 <strong>README.md</strong> 之后，点击底部的 <strong>Commit changes</strong> 按钮。</p>
<p><img src="@source/project/Git/assets/Commit_changes.png" alt="Commit changes" loading="lazy"></p>
<p>然后我们在本地更新修改。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> fetch origin
remote: Counting objects: <span class="token number">3</span>, done.
remote: Compressing objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">2</span>/2<span class="token punctuation">)</span>, done.
remote: Total <span class="token number">3</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, reused <span class="token number">0</span> <span class="token punctuation">(</span>delta <span class="token number">0</span><span class="token punctuation">)</span>, pack-reused <span class="token number">0</span>
Unpacking objects: <span class="token number">100</span>% <span class="token punctuation">(</span><span class="token number">3</span>/3<span class="token punctuation">)</span>, done.
From github.com:Ryukarin/myblog
   0205aab<span class="token punctuation">..</span>febd8ed  master     -<span class="token operator">></span> origin/main
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>以上信息&quot;0205aab..febd8ed master -&gt; origin/master&quot; 说明 main 分支已被更新，我们可以使用以下命令将更新同步到本地：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> merge origin/main
Updating 0205aab<span class="token punctuation">..</span>febd8ed
Fast-forward
 README.md <span class="token operator">|</span> <span class="token number">1</span> +
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">1</span> insertion<span class="token punctuation">(</span>+<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>查看 README.md 文件内容：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">cat</span> README.md 
<span class="token comment"># Git 测试</span>
---
<span class="token comment">## 第一次修改内容（二级标题）</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="推送到远程仓库" tabindex="-1"><a class="header-anchor" href="#推送到远程仓库" aria-hidden="true">#</a> 推送到远程仓库</h3>
<p>推送你的新分支与数据到某个远端仓库命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> push <span class="token punctuation">[</span>alias<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>以上命令将你的 [branch] 分支推送成为 [alias] 远程仓库上的 [branch] 分支，实例如下。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">touch</span> test.txt      <span class="token comment"># 添加文件</span>
$ <span class="token function">git</span> <span class="token function">add</span> test.txt 
$ <span class="token function">git</span> commit -m <span class="token string">"添加到远程"</span>
master 69e702d<span class="token punctuation">]</span> 添加到远程
 <span class="token number">1</span> <span class="token function">file</span> changed, <span class="token number">0</span> insertions<span class="token punctuation">(</span>+<span class="token punctuation">)</span>, <span class="token number">0</span> deletions<span class="token punctuation">(</span>-<span class="token punctuation">)</span>
 create mode <span class="token number">100644</span> test.txt

$ <span class="token function">git</span> push origin master    <span class="token comment"># 推送到 Github</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>重新回到我们的 Github 仓库，可以看到文件已经提交上来了：</p>
<p><img src="@source/project/Git/assets/add_remote.png" alt="add remote" loading="lazy"></p>
<h3 id="删除远程仓库" tabindex="-1"><a class="header-anchor" href="#删除远程仓库" aria-hidden="true">#</a> 删除远程仓库</h3>
<p>删除远程仓库你可以使用命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">rm</span> <span class="token punctuation">[</span>别名<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>实例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> remote -v
origin    git@github.com:Ryukarin/myblog.git <span class="token punctuation">(</span>fetch<span class="token punctuation">)</span>
origin    git@github.com:Ryukarin/myblog.git <span class="token punctuation">(</span>push<span class="token punctuation">)</span>

<span class="token comment"># 添加仓库 origin2</span>
$ <span class="token function">git</span> remote <span class="token function">add</span> origin2 git@github.com:Ryukarin/myblog.git

$ <span class="token function">git</span> remote -v
origin    git@github.com:Ryukarin/myblog.git <span class="token punctuation">(</span>fetch<span class="token punctuation">)</span>
origin    git@github.com:Ryukarin/myblog.git <span class="token punctuation">(</span>push<span class="token punctuation">)</span>
origin2    git@github.com:Ryukarin/myblog.git <span class="token punctuation">(</span>fetch<span class="token punctuation">)</span>
origin2    git@github.com:Ryukarin/myblog.git <span class="token punctuation">(</span>push<span class="token punctuation">)</span>

<span class="token comment"># 删除仓库 origin2</span>
$ <span class="token function">git</span> remote <span class="token function">rm</span> origin2
$ <span class="token function">git</span> remote -v
origin    git@github.com:Ryukarin/myblog.git <span class="token punctuation">(</span>fetch<span class="token punctuation">)</span>
origin    git@github.com:Ryukarin/myblog.git <span class="token punctuation">(</span>push<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">码云（Gitee）</p>
<p>大家都知道国内访问 Github 速度比较慢，很影响我们的使用。</p>
<p>如果你希望体验到 Git 飞一般的速度，可以使用国内的 Git 托管服务——<a href="https://gitee.com/?utm_source=remote_blog_cnjc" target="_blank" rel="noopener noreferrer">Gitee（gitee.com）<ExternalLinkIcon/></a>。</p>
<p>Gitee 提供免费的 Git 仓库，还集成了代码质量检测、项目演示等功能。对于团队协作开发，Gitee 还提供了项目管理、代码托管、文档管理的服务，5 人以下小团队免费。</p>
<p>使用方法和  Github 大同小异，具体就不展开说了。</p>
</div>
</template>
