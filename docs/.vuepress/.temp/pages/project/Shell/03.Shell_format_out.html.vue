<template><p>一个程序需要有 0 个或以上输入，1 个或以上输出。</p>
<h2 id="echo-命令介绍" tabindex="-1"><a class="header-anchor" href="#echo-命令介绍" aria-hidden="true">#</a> echo 命令介绍</h2>
<p><strong>功能：将内容输出到默认显示设备。</strong></p>
<p><code>echo</code> 命令的功能是在显示器上显示一段文件，一般起到一个提示的作用。</p>
<p>命令格式如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo [选项] [字符串]</span>
选项：
	-n：不要在最后换行
	-e：若字符串中出 现以下转义字符，则特别加以处理，而不会将它当成一般字符串输出。
	
转义字符：
	<span class="token punctuation">\</span>a	：发出警告声；
	<span class="token punctuation">\</span>b	：删除前一个字符；
	<span class="token punctuation">\</span>c	：最后不加上换行；
	<span class="token punctuation">\</span>f	：换行但光标仍旧停留在原来的位置；
	<span class="token punctuation">\</span>n	：换行且光标移至行首；
	<span class="token punctuation">\</span>t	：插入制表符tab；
	<span class="token punctuation">\</span>v	：与 <span class="token punctuation">\</span>f 相同；
	<span class="token punctuation">\</span><span class="token punctuation">\</span>	：插入 <span class="token punctuation">\</span>字符；
	<span class="token punctuation">\</span>nnn：插入 nnn（八进制）所代表的ASCII字符；
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>补充说明：echo会将输入的字符串送往标准输出。输出的字符串以空白字符隔开，并在最后加上换行号。</p>
<p><strong>举例说明：输出一个菜单</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cat fruits_shop.sh</span>
<span class="token comment">#!/bin/bash</span>
<span class="token comment">#Author: Admin</span>
<span class="token comment">#created Time: 2021/02/03 16:25</span>
<span class="token comment">#Script Description: shpo view script</span>

ehco -e <span class="token string">"<span class="token entity" title="\t">\t</span><span class="token entity" title="\t">\t</span><span class="token entity" title="\t">\t</span>Fruits Shop"</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\t">\t</span>1) Apple"</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\t">\t</span>2) Orange"</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\t">\t</span>3) Banana<span class="token entity" title="\n">\n</span>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>执行脚本输出如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># bash fruits_shop.sh</span>
	Fruits Shop
	<span class="token number">1</span><span class="token punctuation">)</span> Apple
	<span class="token number">2</span><span class="token punctuation">)</span> Orange
	<span class="token number">3</span><span class="token punctuation">)</span> Banana
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="颜色代码" tabindex="-1"><a class="header-anchor" href="#颜色代码" aria-hidden="true">#</a> 颜色代码</h2>
<p>脚本中 <code>echo</code> 显示内容带颜色，<code>echo</code> 显示背景带颜色，需要使用参数 -e</p>
<p><strong>格式如下：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo -e "\033[字背景颜色;字体颜色m字符串\033[特效m"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo -e "\033[41;34msomething here\033[0m"</span>

说明：其中41的位置代表背景色，34的位置是代表字体颜色，0的位置代表效果

a. 背景颜色和字体颜色之间是英文的分号<span class="token string">";"</span>
b. 字体颜色后面有个m
c. 字符串前后没有空格，如果有的话，输出也是同样有空格
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>下面是相应的字体和背景颜色，可以自己来尝试搭配</p>
<ul>
<li>字体颜色：30-37</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\033">\033</span>[30m黑色字体<span class="token entity" title="\033">\033</span>[0m"</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\033">\033</span>[31m红色字体<span class="token entity" title="\033">\033</span>[0m"</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\033">\033</span>[32m绿色字体<span class="token entity" title="\033">\033</span>[0m"</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\033">\033</span>[33m黄色字体<span class="token entity" title="\033">\033</span>[0m"</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\033">\033</span>[34m蓝色字体<span class="token entity" title="\033">\033</span>[0m"</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\033">\033</span>[35m紫色字体<span class="token entity" title="\033">\033</span>[0m"</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\033">\033</span>[36m天蓝色字体<span class="token entity" title="\033">\033</span>[0m"</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\033">\033</span>[37m白色字体<span class="token entity" title="\033">\033</span>[0m"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul>
<li>字体背景颜色：40-47</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\033">\033</span>[40;37m黑底白字<span class="token entity" title="\033">\033</span>[0m"</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\033">\033</span>[41;37m红底白字<span class="token entity" title="\033">\033</span>[0m"</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\033">\033</span>[42;37m绿底白字<span class="token entity" title="\033">\033</span>[0m"</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\033">\033</span>[43;37m黄底白字<span class="token entity" title="\033">\033</span>[0m"</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\033">\033</span>[44;37m蓝底白字<span class="token entity" title="\033">\033</span>[0m"</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\033">\033</span>[45;37m紫底白字<span class="token entity" title="\033">\033</span>[0m"</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\033">\033</span>[46;37m天蓝底白字<span class="token entity" title="\033">\033</span>[0m"</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\033">\033</span>[47;30m白底黑字<span class="token entity" title="\033">\033</span>[0m"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul>
<li>输出效果格式控制：</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">\</span>033<span class="token punctuation">[</span>0m					关闭所有效果属性
<span class="token punctuation">\</span>033<span class="token punctuation">[</span>1m					设置高亮度
<span class="token punctuation">\</span>033<span class="token punctuation">[</span>4m					下划线
<span class="token punctuation">\</span>033<span class="token punctuation">[</span>5m					闪烁
<span class="token punctuation">\</span>033<span class="token punctuation">[</span>7m					反显
<span class="token punctuation">\</span>033<span class="token punctuation">[</span>8m					消隐
<span class="token punctuation">\</span>033<span class="token punctuation">[</span>30m -- <span class="token punctuation">\</span>033<span class="token punctuation">[</span>37m	设置前景色
<span class="token punctuation">\</span>033<span class="token punctuation">[</span>40m -- <span class="token punctuation">\</span>033<span class="token punctuation">[</span>37m	设置背景色
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul>
<li>光标位置相关格式控制：</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">\</span>033<span class="token punctuation">[</span>nA					光标上移n行
<span class="token punctuation">\</span>033<span class="token punctuation">[</span>nB					光标下移n行
<span class="token punctuation">\</span>033<span class="token punctuation">[</span>nC					光标右移n行
<span class="token punctuation">\</span>033<span class="token punctuation">[</span>nD					光标左移n行
<span class="token punctuation">\</span>033<span class="token punctuation">[</span>y<span class="token punctuation">;</span>xH				设置光标位置
<span class="token punctuation">\</span>033<span class="token punctuation">[</span>2J					清屏
<span class="token punctuation">\</span>033<span class="token punctuation">[</span>K					清除从光标到行尾的内容
<span class="token punctuation">\</span>033<span class="token punctuation">[</span>s					保存光标位置
<span class="token punctuation">\</span>033<span class="token punctuation">[</span>u					恢复光标位置
<span class="token punctuation">\</span>033<span class="token punctuation">[</span>?25l				隐藏光标
<span class="token punctuation">\</span>033<span class="token punctuation">[</span>?25h				显示光标
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></template>
