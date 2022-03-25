<template><h2 id="git-基本操作" tabindex="-1"><a class="header-anchor" href="#git-基本操作" aria-hidden="true">#</a> Git 基本操作</h2>
<p>Git 的工作就是创建和保存你项目的快照及与之后的快照进行对比。</p>
<p>本节将对有关创建与提交你的项目快照的命令作介绍。</p>
<p>Git 常用的是以下 6 个命令：<code>git clone</code>、<code>git push</code>、<code>git add</code>、<code>git commit</code>、<code>git checkout</code>、<code>git pull</code>，后面我们会详细介绍。</p>
<p><img src="@source/project/Git/assets/git-command.jpg" alt="git_command" loading="lazy"></p>
<div class="custom-container tip"><p class="custom-container-title">说明</p>
<ul>
<li>workspace：工作区</li>
<li>staging area：暂存区/缓存区</li>
<li>local repository：版本库或本地仓库</li>
<li>remote repository：远程仓库</li>
</ul>
</div>
<p>一个简单的操作步骤：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">git</span> init
$ <span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
$ <span class="token function">git</span> commit
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li><code>git init</code> ：初始化仓库。</li>
<li><code>git add .</code> ：添加文件到暂存区。</li>
<li><code>git commit</code> ：将暂存区内容添加到仓库中。</li>
</ul>
<h3 id="创建仓库命令" tabindex="-1"><a class="header-anchor" href="#创建仓库命令" aria-hidden="true">#</a> 创建仓库命令</h3>
<p>下表列出了 git 创建仓库的命令：</p>
<table>
<thead>
<tr>
<th style="text-align:left">命令</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>git init</code></td>
<td style="text-align:left">初始化仓库</td>
</tr>
<tr>
<td style="text-align:left"><code>git clone</code></td>
<td style="text-align:left">拷贝一份远程仓库，也就是下载一个项目。</td>
</tr>
</tbody>
</table>
<h3 id="提交与修改" tabindex="-1"><a class="header-anchor" href="#提交与修改" aria-hidden="true">#</a> 提交与修改</h3>
<p>Git 的工作就是创建和保存你的项目的快照及与之后的快照进行对比。</p>
<p>下表列出了有关创建与提交你的项目的快照的命令：</p>
<table>
<thead>
<tr>
<th style="text-align:left">命令</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>git add</code></td>
<td style="text-align:left">添加文件到仓库</td>
</tr>
<tr>
<td style="text-align:left"><code>git status</code></td>
<td style="text-align:left">查看仓库当前的状态，显示有变更的文件。</td>
</tr>
<tr>
<td style="text-align:left"><code>git diff</code></td>
<td style="text-align:left">比较文件的不同，即暂存区和工作区的差异。</td>
</tr>
<tr>
<td style="text-align:left"><code>git commit</code></td>
<td style="text-align:left">提交暂存区到本地仓库。</td>
</tr>
<tr>
<td style="text-align:left"><code>git reset</code></td>
<td style="text-align:left">回退版本。</td>
</tr>
<tr>
<td style="text-align:left"><code>git rm</code></td>
<td style="text-align:left">删除工作区文件。</td>
</tr>
<tr>
<td style="text-align:left"><code>git mv</code></td>
<td style="text-align:left">移动或重命名工作区文件。</td>
</tr>
</tbody>
</table>
<h3 id="提交日志" tabindex="-1"><a class="header-anchor" href="#提交日志" aria-hidden="true">#</a> 提交日志</h3>
<table>
<thead>
<tr>
<th style="text-align:left">命令</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>git log</code></td>
<td style="text-align:left">查看历史提交记录</td>
</tr>
<tr>
<td style="text-align:left"><code>git blame &lt;file&gt;</code></td>
<td style="text-align:left">以列表形式查看指定文件的历史修改记录</td>
</tr>
</tbody>
</table>
<h3 id="远程操作" tabindex="-1"><a class="header-anchor" href="#远程操作" aria-hidden="true">#</a> 远程操作</h3>
<table>
<thead>
<tr>
<th style="text-align:left">命令</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>git remote</code></td>
<td style="text-align:left">远程仓库操作</td>
</tr>
<tr>
<td style="text-align:left"><code>git fetch</code></td>
<td style="text-align:left">从远程获取代码库</td>
</tr>
<tr>
<td style="text-align:left"><code>git pull</code></td>
<td style="text-align:left">下载远程代码并合并</td>
</tr>
<tr>
<td style="text-align:left"><code>git push</code></td>
<td style="text-align:left">上传远程代码并合并</td>
</tr>
</tbody>
</table>
</template>
