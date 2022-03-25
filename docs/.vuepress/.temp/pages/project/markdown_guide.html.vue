<template><h1 id="markdown-介绍" tabindex="-1"><a class="header-anchor" href="#markdown-介绍" aria-hidden="true">#</a> Markdown 介绍</h1>
<p>Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档。<br>
Markdown 编写的文档后缀为 .md, .markdown。</p>
<h1 id="markdown-应用" tabindex="-1"><a class="header-anchor" href="#markdown-应用" aria-hidden="true">#</a> Markdown 应用</h1>
<p>Markdown 能被使用来撰写电子书，如：Gitbook。<br>
当前许多网站都广泛使用 Markdown 来撰写帮助文档或是用于论坛上发表消息。例如：GitHub、简书、reddit、Diaspora、Stack Exchange、OpenStreetMap 、SourceForge等。</p>
<h1 id="markdown-编辑器" tabindex="-1"><a class="header-anchor" href="#markdown-编辑器" aria-hidden="true">#</a> Markdown 编辑器</h1>
<p>本教程将使用 Typora 编辑器来讲解 Markdown 的语法，Typora 支持 MacOS 、Windows、Linux 平台，且包含多种主题，编辑后直接渲染出效果。
支持导出HTML、PDF、Word、图片等多种类型文件。<br>
Typora 官网：https://typora.io/</p>
<h1 id="markdown-语法" tabindex="-1"><a class="header-anchor" href="#markdown-语法" aria-hidden="true">#</a> Markdown 语法</h1>
<h2 id="一、标题" tabindex="-1"><a class="header-anchor" href="#一、标题" aria-hidden="true">#</a> 一、标题</h2>
<p>使用 # 号可表示 1-6 级标题，一级标题对应一个 # 号，二级标题对应两个 # 号，以此类推。<br>
注：标准语法一般在 # 后跟个空格再写文字</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 这是一级标题
## 这是二级标题
### 这是三级标题
#### 这是四级标题
##### 这是五级标题
###### 这是六级标题
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>效果如下：</p>
<h1 id="这是一级标题" tabindex="-1"><a class="header-anchor" href="#这是一级标题" aria-hidden="true">#</a> 这是一级标题</h1>
<h2 id="这是二级标题" tabindex="-1"><a class="header-anchor" href="#这是二级标题" aria-hidden="true">#</a> 这是二级标题</h2>
<h3 id="这是三级标题" tabindex="-1"><a class="header-anchor" href="#这是三级标题" aria-hidden="true">#</a> 这是三级标题</h3>
<h4 id="这是四级标题" tabindex="-1"><a class="header-anchor" href="#这是四级标题" aria-hidden="true">#</a> 这是四级标题</h4>
<h5 id="这是五级标题" tabindex="-1"><a class="header-anchor" href="#这是五级标题" aria-hidden="true">#</a> 这是五级标题</h5>
<h6 id="这是六级标题" tabindex="-1"><a class="header-anchor" href="#这是六级标题" aria-hidden="true">#</a> 这是六级标题</h6>
<h2 id="二、字体" tabindex="-1"><a class="header-anchor" href="#二、字体" aria-hidden="true">#</a> 二、字体</h2>
<blockquote>
<p>加粗：文字左右分别用两个<em>号包起来（或者_）<br>
倾斜：文字左右分别用一个</em>号包起来（或者_）<br>
倾斜并加粗：文字左右分别用三个*号包起来（或者_）<br>
删除线：文字左右分别用两个~~号包起来<br>
下划线：下划线可以通过 HTML 的 &lt;u&gt; 标签来实现</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>**这是加粗的文字**  
__粗体文本__  
*这是倾斜的文字*  
_斜体文本_  
***这是斜体加粗的文字***  
___斜体加粗文本___  
~~这是加删除线的文字~~  
&lt;u>这是带下划线文本&lt;/u>  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>效果如下：</p>
<p><strong>这是加粗的文字</strong><br>
<strong>粗体文本</strong><br>
<em>这是倾斜的文字</em><br>
<em>斜体文本</em><br>
<em><strong>这是斜体加粗的文字</strong></em><br>
<em><strong>斜体加粗文本</strong></em><br>
<s>这是加删除线的文字</s><br>
<u>这是带下划线文本</u></p>
<h2 id="三、段落" tabindex="-1"><a class="header-anchor" href="#三、段落" aria-hidden="true">#</a> 三、段落</h2>
<p>Markdown 段落没有特殊的格式，直接编写文字就好，段落的换行是使用两个以上空格加上回车。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>这是段落格式  
这也是段落格式
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>效果如下：</p>
<p>这是段落格式<br>
这也是段落格式</p>
<h2 id="四、分割线" tabindex="-1"><a class="header-anchor" href="#四、分割线" aria-hidden="true">#</a> 四、分割线</h2>
<p>三个或者三个以上的 - 或者 * 都可以。显示效果是一样的。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>---
-----
***
*****
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>效果如下：</p>
<hr>
<hr>
<hr>
<hr>
<h2 id="五、列表" tabindex="-1"><a class="header-anchor" href="#五、列表" aria-hidden="true">#</a> 五、列表</h2>
<p>Markdown 支持有序列表和无序列表。</p>
<ul>
<li><strong>无序列表</strong></li>
</ul>
<p>无序列表使用星号(*)、加号(+)或是减号(-)作为列表标记，这些标记后面要添加一个空格，然后再填写内容。
无序列表用 - + * 任何一种都可以。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>* 第一项
+ 第二项
- 第三项
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>效果如下：</p>
<blockquote>
<ul>
<li>第一项</li>
</ul>
<ul>
<li>第二项</li>
</ul>
<ul>
<li>第三项</li>
</ul>
</blockquote>
<ul>
<li><strong>有序列表</strong></li>
</ul>
<p>有序列表使用数字并加上 . 号来表示，如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1. 第一项
2. 第二项
3. 第三项
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>效果如下：</p>
<ol>
<li>第一项</li>
<li>第二项</li>
<li>第三项</li>
</ol>
<ul>
<li><strong>列表嵌套</strong></li>
</ul>
<p>列表嵌套只需在子列表中的选项前面添加四个空格即可。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1. 第一项：
    - 第一项嵌套的第一个元素
    - 第一项嵌套的第二个元素
2. 第二项：
    + 第二项嵌套的第一个元素
    + 第二项嵌套的第二个元素
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>效果如下：</p>
<ol>
<li>第一项：
<ul>
<li>第一项嵌套的第一个元素</li>
<li>第一项嵌套的第二个元素</li>
</ul>
</li>
<li>第二项：
<ul>
<li>第二项嵌套的第一个元素</li>
<li>第二项嵌套的第二个元素</li>
</ul>
</li>
</ol>
<h2 id="六、引用" tabindex="-1"><a class="header-anchor" href="#六、引用" aria-hidden="true">#</a> 六、引用</h2>
<p>Markdown 引用是在段落开头使用 &gt; 符号 ，然后后面紧跟一个空格符号。<br>
引用也可以嵌套，如加两个&gt;&gt;、三个&gt;&gt;&gt;、n个...<br>
引用和列表也可以嵌套使用，此处不举例说明。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>> 最外层
>> 第一层嵌套
>>> 第二层嵌套
>>>>> 第五层嵌套
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>效果如下：</p>
<blockquote>
<p>最外层</p>
<blockquote>
<p>第一层嵌套</p>
<blockquote>
<p>第二层嵌套</p>
<blockquote>
<blockquote>
<p>第五层嵌套</p>
</blockquote>
</blockquote>
</blockquote>
</blockquote>
</blockquote>
<h2 id="七、代码" tabindex="-1"><a class="header-anchor" href="#七、代码" aria-hidden="true">#</a> 七、代码</h2>
<ul>
<li><strong>单行代码</strong></li>
</ul>
<p>代码之间分别用一对反引号 ` 包起来</p>
<blockquote>
<p>比如说这行的 `printf()` 函数</p>
</blockquote>
<p>效果如下：</p>
<p>比如说这行的 <code>printf()</code> 函数</p>
<ul>
<li><strong>代码区块</strong></li>
</ul>
<p>你也可以用一对 ``` 包裹一段代码，并指定一种语言（也可以不指定），且反引号单独占一行</p>
<blockquote>
<p>```javascript<br>
$(document).ready(function () {<br>
alert('RUNOOB');<br>
});<br>
```</p>
</blockquote>
<p>效果如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'RUNOOB'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="八、超链接" tabindex="-1"><a class="header-anchor" href="#八、超链接" aria-hidden="true">#</a> 八、超链接</h2>
<p>链接使用方法如下：</p>
<blockquote>
<p><em><strong>[链接名称](链接地址)</strong></em><br>
或者<br>
<em><strong>&lt;链接地址&gt;</strong></em></p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>这是一个Typora官网链接 [Typora](https://typora.io/)
这是Typora的官网地址链接&lt;https://typora.io/>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>效果如下：</p>
<p>这是一个Typora官网链接 <a href="https://typora.io/" target="_blank" rel="noopener noreferrer">Typora<ExternalLinkIcon/></a><br>
这是Typora的官网地址链接<a href="https://typora.io/" target="_blank" rel="noopener noreferrer">https://typora.io/<ExternalLinkIcon/></a></p>
<h2 id="九、图片" tabindex="-1"><a class="header-anchor" href="#九、图片" aria-hidden="true">#</a> 九、图片</h2>
<p>图片语法格式如下：</p>
<blockquote>
<p>![alt 属性文本](图片地址)<br>
![alt 属性文本](图片地址 &quot;可选标题&quot;)</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png)
![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png "RUNOOB")
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>效果如下：</p>
<p><img src="http://static.runoob.com/images/runoob-logo.png" alt="RUNOOB 图标" loading="lazy"></p>
<p><img src="http://static.runoob.com/images/runoob-logo.png" alt="RUNOOB 图标" title="RUNOOB" loading="lazy"></p>
<p>Markdown 还没有办法指定图片的高度与宽度，如果你需要的话，你可以使用普通的 <code>&lt;img&gt;</code> 标签。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;img src="http://static.runoob.com/images/runoob-logo.png" width="50%">
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>效果如下：</p>
<img src="http://static.runoob.com/images/runoob-logo.png" alt="图像的替代文本" width="50%" height="50%">
<h2 id="十、表格" tabindex="-1"><a class="header-anchor" href="#十、表格" aria-hidden="true">#</a> 十、表格</h2>
<p>Markdown 制作表格使用 | 来分隔不同的单元格，使用 - 来分隔表头和其他行。<br>
语法格式如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>效果如下：</p>
<table>
<thead>
<tr>
<th>表头</th>
<th>表头</th>
</tr>
</thead>
<tbody>
<tr>
<td>单元格</td>
<td>单元格</td>
</tr>
<tr>
<td>单元格</td>
<td>单元格</td>
</tr>
</tbody>
</table>
<ul>
<li>对齐方式</li>
</ul>
<p><strong>我们可以设置表格的对齐方式：</strong></p>
<ul>
<li>--:   设置内容和标题栏居右对齐。</li>
<li>:--   设置内容和标题栏居左对齐。</li>
<li>:-:   设置内容和标题栏居中对齐。</li>
</ul>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>| 左对齐 | 右对齐 | 居中对齐 |
| :-----| -----: | :-----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>效果如下：</p>
<table>
<thead>
<tr>
<th style="text-align:left">左对齐</th>
<th style="text-align:right">右对齐</th>
<th style="text-align:center">居中对齐</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">单元格</td>
<td style="text-align:right">单元格</td>
<td style="text-align:center">单元格</td>
</tr>
<tr>
<td style="text-align:left">单元格</td>
<td style="text-align:right">单元格</td>
<td style="text-align:center">单元格</td>
</tr>
</tbody>
</table>
<h2 id="十一、高级用法" tabindex="-1"><a class="header-anchor" href="#十一、高级用法" aria-hidden="true">#</a> 十一、高级用法</h2>
<ul>
<li><strong>支持的 HTML 元素</strong></li>
</ul>
<p>不在 Markdown 涵盖范围之内的标签，都可以直接在文档里面用 HTML 撰写。
目前支持的 HTML 元素有：<code>&lt;kbd&gt; &lt;b&gt; &lt;i&gt; &lt;em&gt; &lt;sup&gt; &lt;sub&gt; &lt;br&gt;</code> 等 ，如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>使用 &lt;kbd>Ctrl&lt;/kbd>+&lt;kbd>Alt&lt;/kbd>+&lt;kbd>Del&lt;/kbd> 重启电脑
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>效果如下：</p>
<p>使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑</p>
<ul>
<li><strong>转义</strong></li>
</ul>
<p>Markdown 使用了很多特殊符号来表示特定的意义，如果需要显示特定的符号则需要使用转义字符，Markdown 使用反斜杠 \ 转义特殊字符：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>**文本加粗**  
\*\* 正常显示星号 \*\*
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>效果如下：</p>
<p><strong>文本加粗</strong><br>
** 正常显示星号 **</p>
<ul>
<li><strong>公式</strong></li>
</ul>
<p>当你需要在编辑器中插入数学公式时，可以使用两个美元符 $$ 包裹 TeX 或 LaTeX 格式的数学公式来实现。
有点复杂，网上有很多教程，此处不进行说明。</p>
<ul>
<li><strong>流程图</strong></li>
</ul>
<p>当然，还有流程图，时序图，甘特图。也有点复杂，此处不做详解，网上可以查找相关内容。</p>
<h1 id="markdown用后感" tabindex="-1"><a class="header-anchor" href="#markdown用后感" aria-hidden="true">#</a> Markdown用后感</h1>
<p>使用Markdown之后，总体感觉就是语法简单，格式清爽，是一个很好用的文本格式编辑语言。Markdown文件不支持内嵌图片，所有的图片都以外部链接的方式插入。</p>
<blockquote>
<p>markdown一时爽, 分享火葬场</p>
</blockquote>
<p>所以分享Markdown文件的时候就不得不和图片一起发送，同时还得注意设置图片路径，让强迫症患者难以接受。<br>
解决方法就是设置图床，此处就不展开说明了。</p>
</template>
