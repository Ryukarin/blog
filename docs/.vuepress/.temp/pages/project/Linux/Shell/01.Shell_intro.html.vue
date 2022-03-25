<template><h2 id="什么是-shell" tabindex="-1"><a class="header-anchor" href="#什么是-shell" aria-hidden="true">#</a> 什么是 Shell</h2>
<p>shell 是一个程序，采用 C 语言编写，是用户和 linux 内核沟通的桥梁。它既是一种命令语言，又是一种解释性的编程语言。通过一个图来查看一下 shell 的作用。</p>
<div class="custom-container center">
<p><img src="@source/project/Linux/Shell/assets/shell.png" alt="shell" loading="lazy"></p>
</div>
<ul>
<li>Kernel：为软件服务，接收用户或软件指令驱动硬件，完成工作；</li>
<li>shell：命令解释器；</li>
<li>user：用户接口，对接用户。</li>
</ul>
<p>上图可以看出，shell 在操作系统中起到了承接用户和系统内核的作用。那为什么不直接用户对内核呢？</p>
<p>原因很简单，因为内核处理的都是二进制，而用户处理的都是高级语言。简而言之，如果没有 shell，你希望告诉妹子：我爱你。你需要经过以下步骤：</p>
<ol>
<li>将“我爱你”翻译成二进制</li>
<li>告诉内核</li>
<li>内核通过网卡发送给你的妹子</li>
<li>妹子计算机网卡收到你发送的二进制信息</li>
<li>网卡交给内核</li>
<li>内核再交给妹子</li>
<li>妹子看到的信息都是一串 01 组成的数字，什么鬼？</li>
</ol>
<p>妹子的计算机没有 shell，就没有把二进制信息解释为高级语言，你的表白也就石沉大海了。为了让所有人都能快速，方便的使用计算机，我们的系统开发人员通过 shell 解决了这个问题。使任何一个希望通过计算机来工作，娱乐的人都能够快速操作计算机。</p>
<h2 id="shell-功能" tabindex="-1"><a class="header-anchor" href="#shell-功能" aria-hidden="true">#</a> Shell 功能</h2>
<ul>
<li>命令行解释功能</li>
<li>启动程序</li>
<li>输入输出重定向</li>
<li>管道连接</li>
<li>文件名替换</li>
<li>变量维护</li>
<li>环境控制</li>
<li>shell编程</li>
</ul>
</template>
