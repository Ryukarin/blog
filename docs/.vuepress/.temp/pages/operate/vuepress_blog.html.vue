<template><h2 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> 环境配置</h2>
<p>你需要安装最新的 Node.js 和 Yarn。</p>
<p>在安装过程中，保持所有的默认设置，一路下一步即可。</p>
<h3 id="安装-node-js" tabindex="-1"><a class="header-anchor" href="#安装-node-js" aria-hidden="true">#</a> 安装 node.js</h3>
<ul>
<li>源码安装</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token builtin class-name">cd</span> /usr/local/src/
<span class="token comment">#进入目录 /usr/local/src/</span>
<span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">wget</span> https://nodejs.org/dist/v14.16.1/node-v14.16.1.tar.gz
<span class="token comment">#下载源码包</span>
<span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">tar</span> -zxvf node-v14.16.1.tar.gz
<span class="token comment">#解压</span>
<span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ ./configure
<span class="token comment">#预编译</span>
<span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">make</span>
<span class="token comment">#编译</span>
<span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">make</span> <span class="token function">install</span>
<span class="token comment">#安装</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul>
<li>验证安装结果</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">node</span> -v
<span class="token comment">#查看node版本</span>
<span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">npm</span> -v
<span class="token comment">#查看npm版本</span>
<span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ npx -v
<span class="token comment">#查看npx版本</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>或者</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">curl</span> -fsSL https://deb.nodesource.com/setup_17.x <span class="token operator">|</span> <span class="token function">sudo</span> -E <span class="token function">bash</span> -
<span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nodejs
<span class="token comment">#参考：https://github.com/nodesource/distributions</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="安装-yarn" tabindex="-1"><a class="header-anchor" href="#安装-yarn" aria-hidden="true">#</a> 安装 yarn</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">npm</span> i -g <span class="token function">yarn</span>
<span class="token comment">#安装 yarn</span>
<span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">yarn</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org
<span class="token comment">#添加淘宝源</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>或者</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">curl</span> -sS https://dl.yarnpkg.com/debian/pubkey.gpg <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -
<span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token builtin class-name">echo</span> <span class="token string">"deb https://dl.yarnpkg.com/debian/ stable main"</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/yarn.list
<span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">apt</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="vuepress-搭建" tabindex="-1"><a class="header-anchor" href="#vuepress-搭建" aria-hidden="true">#</a> vuepress 搭建</h2>
<h3 id="创建模板" tabindex="-1"><a class="header-anchor" href="#创建模板" aria-hidden="true">#</a> 创建模板</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token builtin class-name">cd</span> ~
<span class="token comment">#进入家目录</span>
<span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">mkdir</span> blog <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> blog
<span class="token comment">#创建本地工作目录并进入</span>
<span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">yarn</span> create vuepress-theme-hope docs
<span class="token comment">#创建模板，hope的主题</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>创建过程中，需要填写一些信息，等到下载搭建完成</p>
<h3 id="文件结构" tabindex="-1"><a class="header-anchor" href="#文件结构" aria-hidden="true">#</a> 文件结构</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>├── dist → 构建输出目录
│
├── src
│ ├── .vuepress <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span> → 用于存放全局的配置、组件、静态资源等
│ │ ├── components <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span> → 该目录中的 Vue 组件将会被自动注册为全局组件
│ │ │
│ │ ├── theme <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span> → 用于存放本地主题
│ │ │ │
│ │ │ ├── <span class="token punctuation">..</span>. → 在主题部分查看更多详情
│ │ │ │
│ │ │ └── Layout.vue → 布局
│ │ │
│ │ ├── public <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span> → 静态资源目录
│ │ │
│ │ ├── styles <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span> → 用于存放样式相关的文件
│ │ │ ├── index.styl → 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
│ │ │ └── palette.styl → 用于重写默认颜色常量，或者设置新的 stylus 颜色常量
│ │ │
│ │ ├── templates <span class="token punctuation">(</span>可选的, 谨慎配置<span class="token punctuation">)</span> → 存储 HTML 模板文件
│ │ │ ├── dev.html → 用于开发环境的 HTML 模板文件
│ │ │ └── ssr.html → 构建时基于 Vue SSR 的 HTML 模板文件
│ │ │
│ │ ├── config.js <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span> → 配置文件的入口文件
│ │ │
│ │ └── enhanceApp.js <span class="token punctuation">(</span>可选的<span class="token punctuation">)</span> → 客户端应用的增强
│ │
│ ├── readme.md → 主页
│ ├── vuepress
│ │ ├── <span class="token punctuation">..</span>.
│ │ └── readme.md
│ ├── markdown
│ │ ├── <span class="token punctuation">..</span>.
│ │ └── readme.md
│ │
│ └── en → English Folder → 英文语言文件夹
│ ├── readme.md → 主页
│ │
│ ├── vuepress
│ │ ├── <span class="token punctuation">..</span>.
│ │ └── readme.md
│ │
│ └── markdown
│ ├── <span class="token punctuation">..</span>.
│ └── readme.md
│
├─── readme.md → 项目中文说明
├─── readme.en-US.md → 项目英文说明
│
├── LICENSE → 许可证文件
│
├── package-lock.json → 项目实际使用的 package 结构
└── package.json → Nodejs 配置文件，也是项目的声明文件
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3>
<p>一个 VuePress 网站必要的配置文件是 <code>.vuepress/config.js</code>，它应该导出一个 JavaScript 对象：</p>
<p><a href="https://vuepress.vuejs.org/zh/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE" target="_blank" rel="noopener noreferrer">参考链接<ExternalLinkIcon/></a></p>
<h3 id="主题配置" tabindex="-1"><a class="header-anchor" href="#主题配置" aria-hidden="true">#</a> 主题配置</h3>
<p>一个 VuePress 主题应该负责整个网站的布局和交互细节。在 VuePress  中，目前自带了一个默认的主题，它是为技术文档而设计的。同时，默认主题提供了一些选项，让你可以去自定义导航栏（navbar）、 侧边栏（sidebar）和 首页（homepage） 等</p>
<h3 id="开启测试" tabindex="-1"><a class="header-anchor" href="#开启测试" aria-hidden="true">#</a> 开启测试</h3>
<p>创建完成后，开启本地服务</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">yarn</span> run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>浏览器地址栏输入 <code>localhost:8080/</code> 就可以访问服务器了。看看搭建的网站效果。</p>
<p>如果要终止开发服务器，连续两次按下 <code>Ctrl + C</code>。</p>
<h2 id="部署网站" tabindex="-1"><a class="header-anchor" href="#部署网站" aria-hidden="true">#</a> 部署网站</h2>
<h3 id="本地创建-ssh-keys" tabindex="-1"><a class="header-anchor" href="#本地创建-ssh-keys" aria-hidden="true">#</a> 本地创建 ssh keys</h3>
<p>本地 git 项目与远程的 GitHub 建立联系 ------&gt; 用 SSH keys</p>
<ul>
<li>检查 SSH keys的设置</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token builtin class-name">cd</span> ~/.ssh
<span class="token comment">#果提示：No such file or directory 说明你是第一次使用 git或没有ssh远程连接过其他机器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul>
<li>生成新的 SSH Key</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ ssh-keygen -t rsa -C <span class="token string">"邮件地址@youremail.com"</span>					<span class="token comment">#你的github注册使用的邮箱</span>
    Generating public/private rsa key pair.
    Enter <span class="token function">file</span> <span class="token keyword">in</span> <span class="token function">which</span> to save the key <span class="token punctuation">(</span>/Users/your_user_directory/.ssh/id_rsa<span class="token punctuation">)</span>:  <span class="token comment">#&lt;回车就好></span>
Enter passphrase <span class="token punctuation">(</span>empty <span class="token keyword">for</span> no passphrase<span class="token punctuation">)</span>: 	<span class="token comment">#&lt;输入加密串></span>
Enter same passphrase  again:					<span class="token comment">#&lt;再次输入加密串></span>
Your identification has been saved <span class="token keyword">in</span> /Users/tianqixin/.ssh/id_rsa.
Your public key has been saved <span class="token keyword">in</span> /Users/tianqixin/.ssh/id_rsa.pub.
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
<span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">ls</span> ~/.ssh					<span class="token comment">#查看生成的密钥文件  id_rsa 、 id_rsa.pub</span>
id_rsa    id_rsa.pub    known_hosts
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="添加-ssh-key-到-github" tabindex="-1"><a class="header-anchor" href="#添加-ssh-key-到-github" aria-hidden="true">#</a> 添加 ssh key 到 github</h3>
<ul>
<li>打开本地 <code>id_rsa.pub</code> 文件，里面是刚才生成的秘钥。</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">cat</span> id_rsa.pub
    ssh-rsa AAAAB3NzaC1yc······mIdnXExvYlmLeLKRuh ryuukaringo@gmail.com
<span class="token comment">#复制id_rsa.pub文件里的内容备用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>
<p>回到 github 上，进入 <strong>Account =&gt; Settings</strong>（账户配置）。</p>
<p><img src="@source/operate/assets/Account_settings.png" alt="Account_settings" loading="lazy"></p>
</li>
<li>
<p>左边选择 <strong>SSH and GPG keys</strong>，然后点击 <strong>New SSH key</strong> 按钮。</p>
<p><img src="@source/operate/assets/SSH_and_GPG_keys.png" alt="SSH and GPG keys" loading="lazy"></p>
</li>
<li>
<p>title 设置标题，可以随便填，key 粘贴在你电脑上生成的 <strong>key</strong>（ 上面生成的<code>~/.ssh/id_rsa.pub</code>文件内容），最后点击 <strong>Add SSH key</strong> 按钮添加。</p>
</li>
</ul>
<p><img src="@source/operate/assets/add_key.png" alt="add_key" loading="lazy"></p>
<ul>
<li>
<p>添加成功后界面如下所示</p>
<p><img src="@source/operate/assets/SSH_and_GPG_keys.png" alt="SSH and GPG keys" loading="lazy"></p>
</li>
</ul>
<h3 id="测试-ssh-到-github" tabindex="-1"><a class="header-anchor" href="#测试-ssh-到-github" aria-hidden="true">#</a> 测试 ssh 到 github</h3>
<p>输入下面的命令，看看设置是否成功，git@GitHub.com 的部分不要修改：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">ssh</span> -T git@GitHub.com
<span class="token comment">#看到以下内容说明以上操作没毛病</span>
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
Hi Ryukarin<span class="token operator">!</span> You've successfully authenticated, but GitHub does not provide shell access.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="github-新建仓库" tabindex="-1"><a class="header-anchor" href="#github-新建仓库" aria-hidden="true">#</a> github 新建仓库</h3>
<p>在 github上创建一个新的仓库</p>
<ul>
<li>
<p>如果打算发布到 <code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code>（也就是说你的仓库在 <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>），则将 base 设置为 <code>/&lt;REPO&gt;/</code>，例如设置为 /blog/ 。</p>
</li>
<li>
<p>如果打算发布到 <code>https://&lt;USERNAME&gt;.github.io/&lt;USERNAME&gt;/</code>（也就是说你的仓库在 <code>https://github.com/&lt;USERNAME&gt;/&lt;USERNAME&gt;</code>），则将 base 默认设置为 <code>/&lt;USERNAME&gt;/</code>，不用理会。</p>
</li>
</ul>
<p>之后点击 <strong>New repository</strong> 如下图所示：</p>
<p><img src="@source/operate/assets/New_repository.png" alt="New_repository" loading="lazy"></p>
<p>之后在在 <strong>Repository name</strong> 填入 myblog（远程仓库名） ，其他保持默认设置，点击<strong>Create repository</strong>按钮，就成功地创建了一个新的Git仓库：</p>
<p><img src="@source/operate/assets/repository_name.png" alt="repository_name" loading="lazy"></p>
<p>创建成功后，显示如下信息：</p>
<p><img src="@source/operate/assets/created_repository.png" alt="created_repository" loading="lazy"></p>
<p>以上信息告诉我们可以从这个仓库克隆出新的仓库，也可以把本地仓库的内容推送到 GitHub 仓库。</p>
<h3 id="本地仓库配置" tabindex="-1"><a class="header-anchor" href="#本地仓库配置" aria-hidden="true">#</a> 本地仓库配置</h3>
<p>在项目根目录中（docs 同一目录），创建一个 deploy.sh 脚本文件，请自行修改github仓库地址</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">git</span>           
    Command <span class="token string">'git'</span> not found, but can be installed with:
    <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">git</span>
<span class="token comment">#此命令如果出现上面内容，说明没有安装git</span>
<span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">git</span>
<span class="token comment">#执行安装git命令</span>
<span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">touch</span> deploy.sh
<span class="token comment">#新建脚本文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>脚本文件写入如下内容：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>


<span class="token builtin class-name">set</span> -e
<span class="token comment"># 确保脚本抛出遇到的错误</span>

<span class="token function">yarn</span> run docs:build
<span class="token comment"># 生成静态文件</span>

<span class="token builtin class-name">cd</span> docs/.vuepress/dist
<span class="token comment"># 进入生成的文件夹</span>

<span class="token comment"># 如果是发布到自定义域名</span>
<span class="token comment"># echo 'www.example.com' > CNAME</span>

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> -A
<span class="token function">git</span> commit -m <span class="token string">'deploy'</span>

<span class="token comment"># 如果发布到 https://&lt;USERNAME>.github.io</span>
<span class="token function">git</span> push -f git@github.com:Ryukarin/Ryuukarin.git master

<span class="token comment"># 如果发布到 https://&lt;USERNAME>.github.io/&lt;REPO></span>
<span class="token comment"># git push -f git@github.com:&lt;USERNAME>/&lt;REPO>.git master:gh-pages</span>

<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h3 id="运行脚本" tabindex="-1"><a class="header-anchor" href="#运行脚本" aria-hidden="true">#</a> 运行脚本</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">git</span> config --global user.email <span class="token string">"ryuukaringo@gmail.com"</span>
<span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">git</span> config --global user.name <span class="token string">"Ryuukarin"</span>
<span class="token comment">#设置git自己的名字和电子邮件</span>

<span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">git</span> config -l
<span class="token comment">#查看配置</span>

<span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">chmod</span> u+x deploy.sh
<span class="token comment">#赋予执行权限</span>

<span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ ./deploy.sh
<span class="token comment">#执行脚本</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="开启-github-pages-部署" tabindex="-1"><a class="header-anchor" href="#开启-github-pages-部署" aria-hidden="true">#</a> 开启 github pages 部署</h3>
<p>在 GitHub 项目点击 Setting 按钮，找到 GitHub Pages - Source，选择 master 分支，点击 Save 按钮后，静静地等待它部署完成即可。</p>
<p><img src="@source/operate/assets/settings.png" alt="settings" loading="lazy"></p>
<h3 id="备份源文件" tabindex="-1"><a class="header-anchor" href="#备份源文件" aria-hidden="true">#</a> 备份源文件</h3>
<p>当然，编译好的 pages 源文件用脚本 <code>deploy.sh</code> 就可以上传部署了。那么我想把部署网页之前的文件备份上传到仓库要怎么作呢？当然，脚本修改以下，很简单。但是，这次我想手动推送到仓库。方便练习以下 Git 的用法。具体如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">ls</span> -a ~/blog
<span class="token builtin class-name">.</span>  <span class="token punctuation">..</span>  deploy.sh  dist  docs  .git  node_modules  package.json  package-lock.json
<span class="token comment"># ~/blog 是我搭建 vuepress 的目录，所有文件都在这里，.git 是仓库 pages 初始化生成的，所以在此目录下不好再次推送其他内容</span>
<span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">mkdir</span> ~/blog_md
<span class="token comment">#新建一个目录</span>
<span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token builtin class-name">cd</span> ~/blog
<span class="token comment">#进入 ~/blog 目录</span>
<span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">cp</span> -r docs/ deploy.sh package.json package-lock.json ~/blog_md/
<span class="token comment">#把 ~/blog/ 目录里的文件复制到 ~/blog_md/目录下</span>
<span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token builtin class-name">cd</span> ~/blog_md
<span class="token comment">#进入 ~/blog_md 目录</span>
<span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">git</span> init
<span class="token comment">#初始化本地仓库，会在当前目录下生成一个 .git 目录</span>
<span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">git</span> <span class="token function">add</span> -A
<span class="token comment">#把所有文件及其修改部分提交到本地暂存区，即上面复制的所有文件</span>
<span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">git</span> commit -m <span class="token string">'备注信息，随意写'</span>
<span class="token comment"># git commit 命令将暂存区内容添加到本地仓库中，-m 是备注信息，后面随意写</span>
<span class="token punctuation">[</span>karin@karin-KVM<span class="token punctuation">]</span>$ <span class="token function">git</span> push -f git@github.com:Ryukarin/blog.git main
<span class="token comment">#强制推送更新到你的仓库</span>
<span class="token comment">#你的仓库：git@github.com:Ryukarin/blog.git</span>
<span class="token comment">#你的仓库分支：main</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>好了，上面的操作就把你的本地的源文件推送到仓库的 main 分支了。gh-pages 分支用于 blog 的静态页面。当然，上面的操作你也可以改成脚本，执行一下，也很方便。</p>
</template>
