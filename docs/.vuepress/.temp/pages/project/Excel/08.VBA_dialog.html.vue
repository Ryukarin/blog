<template><h2 id="_73、使用-msgbox-函数" tabindex="-1"><a class="header-anchor" href="#_73、使用-msgbox-函数" aria-hidden="true">#</a> 73、使用 Msgbox 函数</h2>
<h3 id="_1-显示简单的提示信息" tabindex="-1"><a class="header-anchor" href="#_1-显示简单的提示信息" aria-hidden="true">#</a> 1）显示简单的提示信息</h3>
<p>在使用Excel的过程中，如果需要向用户显示简单的提示信息，可以使用MsgBox函数显示一个消息框，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> mymsgbox<span class="token punctuation">(</span><span class="token punctuation">)</span>
	MsgBox <span class="token string">"欢迎光临Excel Home!"</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>代码解析：</p>
<p>Mymsgbox 过程使用 MsgBox 函数显示一个消息框。MsgBox 函数用于显示提示信息，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>MsgBox<span class="token punctuation">(</span>prompt[<span class="token punctuation">,</span> buttons] [<span class="token punctuation">,</span> title] [<span class="token punctuation">,</span> helpfile<span class="token punctuation">,</span> context]<span class="token punctuation">)</span>

参数prompt是必需的，代表在消息框中作为信息显示的字符或字符串，最多只能接受约<span class="token number">1024</span>个字符，取决于所使用字符的宽度。
参数buttons是可选的，用于指定消息框中显示按钮的数目及类型、使用的图标样式、缺省按钮以及消息框的强制回应等。如果省略，则buttons参数的缺省值为<span class="token number">0</span>，消息框只显示<span class="token string">“确定”</span>按钮。
参数title是可选的，代表在消息框标题栏中作为标题的字符或字符串。如果省略，则在标题栏中显示<span class="token string">“Microsoft Excel”</span>。
参数helpfile和参数context是可选的，用来为消息框提供上下文相关帮助的帮助文件和帮助主题。如果提供了其中一个参数，则必须提供另一个参数，两者缺一不可。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>运行 Mymsgbox 过程，显示如图 73-1 所示的消息框。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/73-1.png" alt="" loading="lazy"></p>
<p><u>图 73-1</u>	简单的信息提示</p>
</div>
<h3 id="_2-定制个性化的消息框" tabindex="-1"><a class="header-anchor" href="#_2-定制个性化的消息框" aria-hidden="true">#</a> 2）定制个性化的消息框</h3>
<p>如果希望 MsgBox 函数显示的消息框具有特定的按钮、图标和标题栏，那么可以使用 MsgBox 函数的 buttons 参数和 title 参数，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> Specialmsbox<span class="token punctuation">(</span><span class="token punctuation">)</span>
	MsgBox Prompt<span class="token punctuation">:</span><span class="token operator">=</span><span class="token string">"欢迎光临 Excel Home!"</span><span class="token punctuation">,</span> <span class="token operator">_</span>
	Buttons<span class="token punctuation">:</span><span class="token operator">=</span>vbOKCancel <span class="token operator">+</span> vbInformation<span class="token punctuation">,</span> <span class="token operator">_</span>
	Title<span class="token punctuation">:</span><span class="token operator">=</span><span class="token string">"Excel Home"</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>代码解析：</p>
<p>Specialmsbox 过程使用 MsgBox 函数显示一个具有特定的按钮、图标和标题栏的消息框。</p>
<p>第 3 行代码设置消息框的 Buttons 参数，使消息框显示时具有“确定”、“取消”按钮和信息消息图标。MsgBox 函数的 buttons 参数设置值如表格 73-1 所示。</p>
<p><u>表格 73-1</u>	MsgBox 函数的 buttons 参数值</p>
<table border="1">
<tr>
  <th>参数组</th>
  <th>常数</th>
  <th>值</th>
  <th>描述</th>
</tr>
<tr>
  <td rowspan="6">第一组设置消息框按钮数目和类型</td>
  <td>vbOKOnly</td>
  <td>0</td>
  <td>只显示“确定”按钮（默认设置）</td>
</tr>
<tr>
  <td>VbOKCancel</td>
  <td>1</td>
  <td>显示“确定”和“取消”按钮</td>
</tr>
<tr>
  <td>VbAbortRetryIgnore</td>
  <td>2</td>
  <td>显示“放弃”、“重试”、和“忽略”按钮</td>
</tr>
<tr>
  <td>VbYesNoCancel</td>
  <td>3</td>
  <td>显示“是”、“否”和“取消”按钮</td>
</tr>
<tr>
  <td>VbYesNo</td>
  <td>4</td>
  <td>显示“是”和“否”按钮</td>
</tr>
<tr>
  <td>VbRetryCancel</td>
  <td>5</td>
  <td>显示“重试”和“取消”按钮</td>
</tr>
<tr>
  <td rowspan="4">第二组设置图标的风格</td>
  <td>VbCritical</td>
  <td>16</td>
  <td>显示危险消息图标</td>
</tr>
<tr>
  <td>VbQuestion</td>
  <td>32</td>
  <td>显示警告询问图标</td>
</tr>
<tr>
  <td>VbExclamation</td>
  <td>48</td>
  <td>显示警告消息图标</td>
</tr>
<tr>
  <td>VbInformation</td>
  <td>64</td>
  <td>显示信息消息图标</td>
</tr>
<tr>
  <td rowspan="4">第三组设置默认按钮</td>
  <td>vbDefaultButton1</td>
  <td>0</td>
  <td>第一个按钮为默认按钮</td>
</tr>
<tr>
  <td>vbDefaultButton2</td>
  <td>256</td>
  <td>第二个按钮为默认按钮</td>
</tr>
<tr>
  <td>vbDefaultButton3</td>
  <td>512</td>
  <td>第三个按钮为默认按钮</td>
</tr>
<tr>
  <td>vbDefaultButton4</td>
  <td>768</td>
  <td>第四个按钮为默认按钮</td>
</tr>
<tr>
  <td rowspan="2">第四组设置消息框特征</td>
  <td>vbApplicationModal</td>
  <td>0</td>
  <td>应用程序模式：用户必须对消息框作出响应才能继续使用当前的应用程序</td>
</tr>
<tr>
  <td>vbSystemModal</td>
  <td>4096</td>
  <td>系统模式：应用程序都被挂起直至用户对消息框作出响应</td>
</tr>
<tr>
  <td rowspan="4">第五组附加选项</td>
  <td>vbMsgBoxHelpButton</td>
  <td>16384</td>
  <td>在消息框上添加“帮助”按钮</td>
</tr>
<tr>
  <td>VbMsgBoxSetForeground</td>
  <td>65536</td>
  <td>将消息框设置为前景窗口</td>
</tr>
<tr>
  <td>vbMsgBoxRight</td>
  <td>524288</td>
  <td>显示右对齐的消息框</td>
</tr>
<tr>
  <td>vbMsgBoxRtlReading</td>
  <td>1048576</td>
  <td>指定在希伯来和阿拉伯语系统中显示的文本应当从右到左阅读</td>
</tr>
</table>
<p>在设定 buttons 参数值时，这些值可以相加使用，但每一组中只能选择一个值。在程序代码中也可以使用 buttons 参数的常数名称，而不必使用实际数值。</p>
<p>第 4 行代码将消息框的 Title 参数设置为“Excel Home”，使消息框的标题栏显示“Excel Home”。</p>
<p>运行 Specialmsbox 过程后，显示一个如图 73-2 所示的消息框，该消息框具有“Excel Home”标题、信息消息图标和“确定”、“取消”按钮并以“确定”按钮作为默认按钮。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/73-2.png" alt="" loading="lazy"></p>
<p><u>图 73-2</u>	具有特定按钮、图标和标题栏的消息框</p>
</div>
<h3 id="_3-获得消息框的返回值" tabindex="-1"><a class="header-anchor" href="#_3-获得消息框的返回值" aria-hidden="true">#</a> 3）获得消息框的返回值</h3>
<p>如果希望能根据用户对于消息框的不同选择，进行相应的操作，可以对消息框的返回值进行判断，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> Workbook_BeforeClose<span class="token punctuation">(</span>Cancel <span class="token keyword">As</span> <span class="token keyword">Boolean</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> iMsg <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	iMsg <span class="token operator">=</span> MsgBox<span class="token punctuation">(</span><span class="token string">"文件即将关闭,是否保存?"</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token operator">+</span> <span class="token number">32</span><span class="token punctuation">)</span>
	<span class="token keyword">Select</span> <span class="token keyword">Case</span> iMsg
		<span class="token keyword">Case</span> <span class="token number">6</span>
			<span class="token keyword">Me</span><span class="token punctuation">.</span>Save
		<span class="token keyword">Case</span> <span class="token number">7</span>
			<span class="token keyword">Me</span><span class="token punctuation">.</span>Saved <span class="token operator">=</span> <span class="token boolean">True</span>
		<span class="token keyword">Case</span> <span class="token number">2</span>
			Cancel <span class="token operator">=</span> <span class="token boolean">True</span>
	<span class="token keyword">End</span> <span class="token keyword">Select</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>代码解析：</p>
<p>工作簿的 BeforeClose 过程，在关闭工作簿前使用 MsgBox 函数显示一个消息框，并根据用户的回应用进行相应的操作。</p>
<p>第 3 行代码，使用 MsgBox 函数显示一个具有“是”、“否”和“否”按钮的消息框，并把用户的回应，即消息框的返回值赋给变量 iMsg。MsgBox 是一个函数，这意味着它将返回一个值，如果希望获得返回值，可使用和第 3 行相似的代码，此时如果不使用括号将参数封闭起来，则会提示编译错误，如图 73-3 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/73-3.png" alt="" loading="lazy"></p>
<p><u>图 73-3</u>	提示编译错误</p>
</div>
<p>第 4 行到第 11 行代码，Select Case 结构语句，根据变量 iMsg 的值判断用户的回应，如果变量 iMsg 的值为 6，说明用户选择了“是”按钮，则使用 Save 方法保存工作簿；如果变量 iMsg 的值为 7，说明用户选择了“否”按钮，则将工作簿的 Saved 属性设置为 True，不保存更改而直接关闭工作簿。关于 Save 方法和 Saved 属性请参阅 45-2。如果变量 iMsg 的值为 2，说明用户选择了“取消”按钮，是将 BeforeClose 过程的 Cancel 参数设置为 True，取消关闭工作簿操作。</p>
<p>MsgBox 函数的返回值如表格 73-2 所示，在程序代码中也可以使用常数名称，而不必使用实际数值。</p>
<p><u>表格 73-2</u>	MsgBox 函数的返回值</p>
<table>
<thead>
<tr>
<th>常数</th>
<th>值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>vbOK</td>
<td>1</td>
<td>确定</td>
</tr>
<tr>
<td>vbCancel</td>
<td>2</td>
<td>取消</td>
</tr>
<tr>
<td>vbAbort</td>
<td>3</td>
<td>放弃</td>
</tr>
<tr>
<td>vbRetry</td>
<td>4</td>
<td>重试</td>
</tr>
<tr>
<td>vbIgnore</td>
<td>5</td>
<td>忽略</td>
</tr>
<tr>
<td>vbYes</td>
<td>6</td>
<td>是</td>
</tr>
<tr>
<td>vbNo</td>
<td>7</td>
<td>否</td>
</tr>
</tbody>
</table>
<p>在关闭本工作簿时将显示一个如图 73-4 所示的消息框，询问用户是否保存，并根据用户的回应用进行相应的操作。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/73-4.png" alt="" loading="lazy"></p>
<p><u>图 73-4</u>	询问消息框</p>
</div>
<h3 id="_4-在消息框中排版" tabindex="-1"><a class="header-anchor" href="#_4-在消息框中排版" aria-hidden="true">#</a> 4）在消息框中排版</h3>
<p>如果在消息框中显示的字符串很长，比如是一段多行的文字内容，为了达到美观的效果，需要首字缩进，并将各行分隔开来，如下面代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> Newlinemsbox<span class="token punctuation">(</span><span class="token punctuation">)</span>
	MsgBox Space<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"欢迎来到 ExcelHome 技术论坛，全球最领先的 Excel 技术论坛之一。"</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">_</span>
		<span class="token operator">&amp;</span> Space<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"在这里，我们讨论 Microsoft	Office 系列产品的应用技术，重点讨论"</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">_</span>
		<span class="token operator">&amp;</span> <span class="token string">"Microsoft Excel。"</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">_</span>
		<span class="token operator">&amp;</span> Space<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"本论坛从属于 Excel Home 这一全球最大的华语 Excel 技术门户，目前"</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">_</span>
		<span class="token operator">&amp;</span> <span class="token string">"是个人、非营利性质的网站学习平台。"</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">_</span>
		<span class="token operator">&amp;</span> Space<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"Let’s do it better! 这是 Excel Home 的口号，我们的宗旨是帮助大"</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">_</span>
		<span class="token operator">&amp;</span> <span class="token string">"家解决在使用Office软件中的问题，提升自己的应用技能。"</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>代码解析：</p>
<p>Newlinemsbox 过程使用消息框显示一段经过排版后的文本内容。</p>
<p>代码中使用 Space 函数在每段的首字前插入 4 个空格，使首字缩进，在需要换行的地方插入换行符 &lt; Chr(10) &gt; 将各行分隔开来。也可以使用回车符 &lt; Chr(13) &gt;、或是回车与换行符的组合 &lt; Chr(13) &amp; Chr(10) &gt; 换行。</p>
<p>在程序代码中也可以使用 vbCrLf、vbNewLine 等常数，而不必使用 Chr 函数，如表格 73-3 所示。</p>
<p><u>表格 73-3</u>	回车符与换行符</p>
<table>
<thead>
<tr>
<th>常数</th>
<th>等于</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>vbCrLf</td>
<td>Chr(13) + Chr(10)</td>
<td>回车符与换行符结合</td>
</tr>
<tr>
<td>vbCr</td>
<td>Chr(13)</td>
<td>回车符</td>
</tr>
<tr>
<td>vbLf</td>
<td>Chr(10)</td>
<td>换行符</td>
</tr>
<tr>
<td>vbNewLine</td>
<td>Chr(13) + Chr(10) or, on the Macintosh, Chr(13)</td>
<td>平台指定的新行字符</td>
</tr>
</tbody>
</table>
<p>运行 Newlinemsbox 过程，用消息框显示一段经过排版后的文本内容，效果如图 73-5 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/73-5.png" alt="" loading="lazy"></p>
<p><u>图 73-5</u>	在消息框中排版</p>
</div>
<h3 id="_5-对齐消息框中显示的信息" tabindex="-1"><a class="header-anchor" href="#_5-对齐消息框中显示的信息" aria-hidden="true">#</a> 5）对齐消息框中显示的信息</h3>
<p>在用消息框显示如图 73-6 所示的工作表中多行多列的单元格区域时，如果只用换行符 &lt; Chr(10) &gt;等进行换行，而数据列没有对齐，会使显示的信息显得杂乱无章，缺乏可读性，如图 73-7 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/73-6.png" alt="" loading="lazy"></p>
<p><u>图 73-6</u>	工作表单元格区域</p>
<p><img src="@source/project/Excel/assets/73-7.png" alt="" loading="lazy"></p>
<p><u>图 73-7</u>	没有对列进行分隔的消息框</p>
</div>
<p>为了达到消息框中显示信息各列对齐的效果，在使用换行符 &lt; Chr(10) &gt; 等进行换行的基础上，还需要使用制表符 &lt; Chr(9) &gt; 或常数 vbTab，对数据列进行分隔，使之排列整齐，如下面代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> Outmsbox<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> sMsg <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">Dim</span> iRow <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">Dim</span> iCom <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">For</span> iRow <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">To</span> <span class="token number">11</span>
		<span class="token keyword">For</span> iCom <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">To</span> <span class="token number">5</span>
			sMsg <span class="token operator">=</span> sMsg <span class="token operator">&amp;</span> Cells<span class="token punctuation">(</span>iRow<span class="token punctuation">,</span> iCom<span class="token punctuation">)</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span>
		<span class="token keyword">Next</span>
		sMsg <span class="token operator">=</span> sMsg <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
	<span class="token keyword">Next</span>
	MsgBox sMsg
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>代码解析：</p>
<p>Outmsbox 过程使用两层循环读取当前工作表中 <code>A1:E11</code> 单元格的内容，并用消息框显示出来。</p>
<p>第 7 行代码，iCom 循环中在把逐列读取的单元格内容赋给变量 myMsg 时插入一个制表符 &lt; Chr(9) &gt;，对列进行分隔。</p>
<p>第 9 行代码，iRow 循环中在读取下一行单元格内容赋给变量 myMsg 时插入一个换行符 &lt; Chr(10) &gt;，对行进行换行。</p>
<p>运行 Outmsbox 过程将用消息框显示当前工作表中 <code>A1:E11</code> 单元格区域中的内容，并排列整齐，如图 73-8 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/73-8.png" alt="" loading="lazy"></p>
<p><u>图 73-8</u>	分列显示数据的消息框</p>
</div>
<h2 id="_74、自动关闭的消息框" tabindex="-1"><a class="header-anchor" href="#_74、自动关闭的消息框" aria-hidden="true">#</a> 74、自动关闭的消息框</h2>
<p>在程序执行完毕后给用户一个提示信息，但用 MsgBox 函数显示的消息框将一直保持，需要用户单击“确定”或“关闭”按钮才会关闭。如果希望显示的消息框自动关闭，那么可以使用以下方法显示消息框。</p>
<h3 id="_1-使用-wshshell-popup-方法显示消息框" tabindex="-1"><a class="header-anchor" href="#_1-使用-wshshell-popup-方法显示消息框" aria-hidden="true">#</a> 1）使用 WshShell.Popup 方法显示消息框</h3>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> WshShell<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> WshShell <span class="token keyword">As</span> <span class="token keyword">Object</span>
	<span class="token keyword">Set</span> WshShell <span class="token operator">=</span> CreateObject<span class="token punctuation">(</span><span class="token string">"Wscript.Shell"</span><span class="token punctuation">)</span>
	WshShell<span class="token punctuation">.</span>popup <span class="token string">"执行完毕!"</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"提示"</span><span class="token punctuation">,</span> <span class="token number">64</span>
	<span class="token keyword">Set</span> WshShell <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>代码解析：</p>
<p>WshShell 过程使用 WshShell.Popup 方法显示消息框，2 秒后自动关闭。</p>
<p>WshShell.Popup 方法的语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>WshShell<span class="token punctuation">.</span>Popup<span class="token punctuation">(</span>strText<span class="token punctuation">,</span> [natSecondsToWait]<span class="token punctuation">,</span> [strTitle]<span class="token punctuation">,</span> [natType]<span class="token punctuation">)</span> <span class="token operator">=</span> intButton

参数strText是必需的，与Msgbox的Prompt参数类似，代表在消息框中作为信息显示的字符或字符串。如果显示的内容超过一行，可以在每一行之间用换行符（Chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>）等将各行分隔开来。
参数natSecondsToWait是可选的，其时间单位为妙。如果提供natSecondsToWait参数且其值大于零，则消息框在natSecondsToWait 参数指定的秒数后关闭。
参数strTitle是可选的，代表在消息框标题栏中作为标题的字符或字符串，若省略，则窗口标题为<span class="token string">“Windows 脚本宿主”</span>。
参数natType是可选的，指定消息框中显示按钮的数目及类型、使用的图标样式、缺省按钮以及消息框的强制回应等，与MsgBox函数buttons参数相同，请参阅技巧<span class="token number">73</span><span class="token operator">-</span><span class="token number">2</span>中的表格<span class="token number">73</span><span class="token operator">-</span><span class="token number">1</span>。
参数intButton指示用户所单击的按扭编号，与MsgBox函数的返回值相同，请参阅<span class="token number">73</span><span class="token operator">-</span><span class="token number">3</span>中的表格<span class="token number">73</span><span class="token operator">-</span><span class="token number">2</span>。若用户在natSecondsToWait 秒之前不单击按扭，则返回值为<span class="token operator">-</span><span class="token number">1</span> 。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>运行 WshShell 过程显示一个如图 74-1 所示消息框，无需点击“确定”按纽，2 秒后自动关闭。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/74-1.png" alt="" loading="lazy"></p>
<p><u>图 74-1</u>	自动关闭的消息框</p>
</div>
<h3 id="_2-使用-api-函数显示消息框" tabindex="-1"><a class="header-anchor" href="#_2-使用-api-函数显示消息框" aria-hidden="true">#</a> 2）使用 API 函数显示消息框</h3>
<p>使用 API 函数也可以达到这一效果，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Public</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> SetTimer <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token punctuation">(</span> <span class="token operator">_</span>
	<span class="token keyword">ByVal</span> hWnd <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token operator">_</span>
	<span class="token keyword">ByVal</span> nIDEvent <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token operator">_</span>
	<span class="token keyword">ByVal</span> uElaspe <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token operator">_</span>
	<span class="token keyword">ByVal</span> lpTimerFunc <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Public</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> KillTimer <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token punctuation">(</span> <span class="token operator">_</span>
	<span class="token keyword">ByVal</span> hWnd <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token operator">_</span>
	<span class="token keyword">ByVal</span> nIDEvent <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
	<span class="token keyword">Dim</span> TID <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Sub</span> Test<span class="token punctuation">(</span><span class="token punctuation">)</span>
	TID <span class="token operator">=</span> SetTimer<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">,</span> <span class="token keyword">AddressOf</span> CloseTest<span class="token punctuation">)</span>
	MsgBox <span class="token string">"执行完毕!"</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
<span class="token keyword">Sub</span> CloseTest<span class="token punctuation">(</span><span class="token keyword">ByVal</span> hWnd <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> uMsg <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> idevent <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token operator">_</span>
	<span class="token keyword">ByVal</span> Systime <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span>
	Application<span class="token punctuation">.</span>SendKeys <span class="token string">"~"</span><span class="token punctuation">,</span> <span class="token boolean">True</span>
	KillTimer <span class="token number">0</span><span class="token punctuation">,</span> TID
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>代码解析：</p>
<p>第 1 行代码到第 9 行代码是 API 函数声明。</p>
<p>Test 过程显示一个消息框并在 3 秒钟后运行 CloseTest 过程。</p>
<p>CloseTest 过程发送一个确定键给 Excel 程序关闭显示的消息框。</p>
<p>运行 Test 过程显示一个如图 74-2 所示的消息框并在 2 秒钟后关闭。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/74-2.png" alt="" loading="lazy"></p>
<p><u>图 74-2</u>	自动关闭的消息框</p>
</div>
<h2 id="_75、使用-inputbox-函数" tabindex="-1"><a class="header-anchor" href="#_75、使用-inputbox-函数" aria-hidden="true">#</a> 75、使用 InputBox 函数</h2>
<h3 id="_1-简单的数据输入" tabindex="-1"><a class="header-anchor" href="#_1-简单的数据输入" aria-hidden="true">#</a> 1）简单的数据输入</h3>
<p>Excel 的使用过程中，有时需要用户输入简单的数据，此时可以使用 InputBox 函数显示一个对话框，供用户在对话框中输入数据信息，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> myInputBox<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> sInt <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">Dim</span> r <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	r <span class="token operator">=</span> Sheet1<span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"A65536"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">End</span><span class="token punctuation">(</span>xlUp<span class="token punctuation">)</span><span class="token punctuation">.</span>Row
	sInt <span class="token operator">=</span> InputBox<span class="token punctuation">(</span><span class="token string">"请输入人员姓名："</span><span class="token punctuation">)</span>
	<span class="token keyword">If</span> Len<span class="token punctuation">(</span>Trim<span class="token punctuation">(</span>sInt<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span> <span class="token keyword">Then</span>
		Sheet1<span class="token punctuation">.</span>Cells<span class="token punctuation">(</span>r <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=</span> sInt
	<span class="token keyword">Else</span>
		MsgBox <span class="token string">"您没有输入内容!"</span>
	<span class="token keyword">End</span> <span class="token keyword">If</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>代码解析：</p>
<p>myInputBox 过程使用 InputBox 函数显示一个对话框供用户在对话框中输入数据，InputBox 函数显示一个对话框，等待用户输入正文或按下按钮，并返回包含文本框内容的字符串，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>InputBox<span class="token punctuation">(</span>prompt[<span class="token punctuation">,</span> title] [<span class="token punctuation">,</span> <span class="token keyword">default</span>] [<span class="token punctuation">,</span> xpos] [<span class="token punctuation">,</span> ypos] [<span class="token punctuation">,</span> helpfile<span class="token punctuation">,</span> context]<span class="token punctuation">)</span>

参数prompt是必需的，作为对话框消息出现的字符串表达式。
参数title是可选的，作为显示在对话框标题栏中的字符串表达式，如果省略title参数，则在标题栏中显示<span class="token string">“Microsoft Excel”</span>。
参数<span class="token keyword">default</span>是可选的，显示在文本框中的字符串表达式，在没有其它输入时作为缺省值，如果省略<span class="token keyword">default</span>参数，则文本框为空。
参数xpos是可选的，指定对话框的左边与屏幕左边的水平距离。如果省略xpos参数，则对话框会在水平方向居中。
参数ypos是可选的，指定对话框的上边与屏幕上边的距离。如果省略ypos参数，则对话框被放置在屏幕垂直方向距下边大约三分之一的位置。
参数helpfile和参数context是可选的，为对话框提供上下文相关的帮助和编号，如果提供了其中一个参数，则必须提供另一个参数，两者缺一不可。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>第 5 行代码，使用 InputBox 函数显示一个提示用户输入邮政编码的对话框，其中“请输入人员姓名：”是必需的 prompt 参数，其他参数使用缺省值。</p>
<p>第 4 行代码，使用 Len 函数和 Trim 函数判断返回的去除空格后的字符串长度。如果字符串长度大于零，说明用户单击了对话框的“确定”按钮，则将用户输入的数据写到工作表的 A 列单元格。如果返回的是长度为零的字符串，说明用户单击了对话框的“取消”按钮，则显示一条提示消息。</p>
<p>因为当用户单击对话框的“确定”按钮后，InputBox 函数返回包含文本框内容的字符串，如果用户单击对话框的“取消”按钮则返回一个长度为零的字符串（&quot;&quot;），通过返回的字符串长度可以判断用户做出的选择。</p>
<p>运行 sInput 过程将显示一个提示用户输入数据的对话框，如图 75-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/75-1.png" alt="" loading="lazy"></p>
<p><u>图 75-1</u>	InputBox 函数显示的对话框</p>
</div>
<h3 id="_2-使用对话框输入密码" tabindex="-1"><a class="header-anchor" href="#_2-使用对话框输入密码" aria-hidden="true">#</a> 2）使用对话框输入密码</h3>
<p>使用 InputBox 函数显示的对话框输入密码简单方便，但有个明显的缺陷，就是输入过程中不能用占位符显示密码，不够安全。借助 API 函数可以在输入密码过程中以占位符“*”号来显示密码，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Public</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> FindWindow <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token keyword">Alias</span> <span class="token string">"FindWindowA"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> lpClassName <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> lpWindowName <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Public</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> FindWindowEx <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token keyword">Alias</span> <span class="token string">"FindWindowExA"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> hWnd1 <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> hWnd2 <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> lpsz1 <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> lpsz2 <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Public</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> SendMessage <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token keyword">Alias</span> <span class="token string">"SendMessageA"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> hwnd <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> wMsg <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> wParam <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> lParam <span class="token keyword">As</span> Any<span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Public</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> timeSetEvent <span class="token keyword">Lib</span> <span class="token string">"winmm.dll"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> uDelay <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> uResolution <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> lpFunction <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> dwUser <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> uFlags <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Public</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> timeKillEvent <span class="token keyword">Lib</span> <span class="token string">"winmm.dll"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> uID <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Public</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> GetTickCount <span class="token keyword">Lib</span> <span class="token string">"kernel32"</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Public</span> <span class="token keyword">Const</span> EM_SETPASSWORDCHAR <span class="token operator">=</span> <span class="token number">&amp;HCC</span>
<span class="token keyword">Public</span> lTimeID <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Sub</span> TimeProc<span class="token punctuation">(</span><span class="token keyword">ByVal</span> uID <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> uMsg <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> dwUser <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> dw1 <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> dw2 <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> hwd <span class="token keyword">As</span> <span class="token keyword">Long</span>
	hwd <span class="token operator">=</span> FindWindow<span class="token punctuation">(</span><span class="token string">"32770"</span><span class="token punctuation">,</span> <span class="token string">"密码"</span><span class="token punctuation">)</span>
	<span class="token keyword">If</span> hwd <span class="token operator">&lt;</span><span class="token operator">></span> <span class="token number">0</span> <span class="token keyword">Then</span>
		hwd <span class="token operator">=</span> FindWindowEx<span class="token punctuation">(</span>hwd<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"edit"</span><span class="token punctuation">,</span> vbNullString<span class="token punctuation">)</span>
		SendMessage hwd<span class="token punctuation">,</span> EM_SETPASSWORDCHAR<span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">,</span> <span class="token number">0</span>
		timeKillEvent lTimeID
	<span class="token keyword">End</span> <span class="token keyword">If</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
<span class="token keyword">Sub</span> Password<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> Password <span class="token keyword">As</span> <span class="token keyword">Variant</span>
	lTimeID <span class="token operator">=</span> timeSetEvent<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">AddressOf</span> TimeProc<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
	Password <span class="token operator">=</span> InputBox<span class="token punctuation">(</span><span class="token string">"请输入密码："</span><span class="token punctuation">,</span> <span class="token string">"密码"</span><span class="token punctuation">)</span>
	<span class="token keyword">If</span> Password <span class="token operator">=</span> <span class="token string">"123456"</span> <span class="token keyword">Then</span>
		MsgBox <span class="token string">"密码正确!"</span>
	<span class="token keyword">Else</span>
		MsgBox <span class="token string">"密码错误!"</span>
	<span class="token keyword">End</span> <span class="token keyword">If</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>代码解析：</p>
<p>Password 程使用 InputBox 函数显示一个输入密码的对话框，并且以占位符“*”号显示输入的密码。</p>
<p>第 1 行到第 8 行代码，API 函数声明。</p>
<p>第 9 行到第 17 行代码，TimeProc 过程是 timeSetEvent 的回调函数，获得对话框句柄。</p>
<p>第 18 行到第 27 行代码，Password 过程显示一个提示用户输入密码的对话框。</p>
<p>运行 Password 过程将显示一个密码输入框，输入的密码以占位符“*”号代替，如图 75-2 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/75-2.png" alt="" loading="lazy"></p>
<p><u>图 75-2</u>	密码输入框</p>
</div>
<h2 id="_76、使用-inputbox-方法" tabindex="-1"><a class="header-anchor" href="#_76、使用-inputbox-方法" aria-hidden="true">#</a> 76、使用 InputBox 方法</h2>
<p>在 Excel 中输入简单的数据可以使用 InputBox 函数显示的对话框，但是如果输入的数据类型不匹配时，过程运行时会产生意外错误。为了避免此类情况发生，可以使用另一种获得用户输入的方式——InputBox 方法。</p>
<h3 id="_1-输入指定类型的数据" tabindex="-1"><a class="header-anchor" href="#_1-输入指定类型的数据" aria-hidden="true">#</a> 1）输入指定类型的数据</h3>
<p>使用 InputBox 方法输入数据时可以指定数据的类型，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> dInput<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> dInput <span class="token keyword">As</span> <span class="token keyword">Double</span>
	<span class="token keyword">Dim</span> r <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	r <span class="token operator">=</span> Sheet1<span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"A65536"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">End</span><span class="token punctuation">(</span>xlUp<span class="token punctuation">)</span><span class="token punctuation">.</span>Row
	dInput <span class="token operator">=</span> Application<span class="token punctuation">.</span>InputBox<span class="token punctuation">(</span>Prompt<span class="token punctuation">:</span><span class="token operator">=</span><span class="token string">"请输入数字："</span><span class="token punctuation">,</span> <span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token keyword">If</span> dInput <span class="token operator">&lt;</span><span class="token operator">></span> <span class="token boolean">False</span> <span class="token keyword">Then</span>
		Sheet1<span class="token punctuation">.</span>Cells<span class="token punctuation">(</span>r <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Value <span class="token operator">=</span> dInput
	<span class="token keyword">Else</span>
		MsgBox <span class="token string">"你已取消了输入!"</span>
	<span class="token keyword">End</span> <span class="token keyword">If</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>代码解析：</p>
<p>dInput 过程使用 InputBox 方法显示一个提示用户输入数字的对话框。</p>
<p>InputBox 方法显示一个接收用户输入的对话框，返回此对话框中输入的信息，语法如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>expression.InputBox(Prompt, Title, Default, Left, Top, HelpFile, HelpContextId, Type)

参数expression是必需的，返回一个Application对象。
参数Prompt是必需的，作为对话框消息显示的字符串表达式。
参数Title是可选的，作为显示在对话框标题栏中的字符串表达式。如果省略Title参数，将使用默认的标题。
参数Default是可选的，在对话框显示时出现在文本框中的初始值。如果省略Default参数，则文本框为空。
参数Left是可选的，指定对话框相对于屏幕左上角的 x 坐标。
参数Top是可选的，指定对话框相对于屏幕左上角的 y 坐标。
参数HelpFile和参数HelpContextId是可选的，为对话框提供上下文相关的帮助和编号，如果提供了其中一个参数，则必须提供另一个参数，两者缺一不可。
参数Type是可选的，指定返回的数据类型。如果省略Type参数，对话框将返回文本。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>InputBox 方法的语法和 InputBox 函数的语法相似，最大的区别在于最后一个参数——Type。通过 Type 参数可以指定返回值的数据类型，表格 76-1 列出了 Type 参数可以使用的数值。</p>
<p><u>表格 76-1</u>	Type 参数的值</p>
<table>
<thead>
<tr>
<th>数值</th>
<th>期望的返回值</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>一个公式</td>
</tr>
<tr>
<td>1</td>
<td>一个数字</td>
</tr>
<tr>
<td>2</td>
<td>文本（字符串）</td>
</tr>
<tr>
<td>4</td>
<td>一个逻辑值，例如true或false</td>
</tr>
<tr>
<td>8</td>
<td>一个单元格引用</td>
</tr>
<tr>
<td>16</td>
<td>一个错误值</td>
</tr>
<tr>
<td>64</td>
<td>一个值的数组</td>
</tr>
</tbody>
</table>
<p>这些数值可以相加使用，如果希望返回数字和文本，可以将 Type 参数设置为 1+2。</p>
<p>InputBox 方法与 InputBox 函数相比，优点是内置的出错处理。在第 5 行代码中将 Type 参数值设置为 1，这意味着对话框只能输入数值。当用户输入的不是数值时，显示一个如图 76-1 所示的消息框提示输入错误。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/76-1.png" alt="" loading="lazy"></p>
<p><u>图 76-1</u>	提示输入错误</p>
</div>
<p>第 6 行到第 10 行代码，如果用户单击对话框的“确定”按钮，将用户输入的数字写入工作表的 A 列单元格。如果用户单击对话框的“取消”按钮，则显示一条提示消息。</p>
<p>InputBox 方法和 InputBox 函数的另一个区别是，当用户单击“取消”按纽时返回 False 而不是长度为零的字符串。</p>
<p>运行 dInput 过程将显示一个提示用户输入数字的对话框，如图 76-2 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/76-2.png" alt="" loading="lazy"></p>
<p><u>图 76-2</u>	InputBox 方法显示的对话框</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>在 VBA 代码中，Application.InputBox 调用的是 InputBox 方法，不带对象识别符的 InputBox 调用的是 InputBox 函数。</p>
</div>
<h3 id="_2-获得单元格区域地址" tabindex="-1"><a class="header-anchor" href="#_2-获得单元格区域地址" aria-hidden="true">#</a> 2）获得单元格区域地址</h3>
<p>InputBox 方法很适合用户选择工作表单元格区域，并对所选择的单元格区域进行操作，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> RngInput<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> rng <span class="token keyword">As</span> Range
	<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">GoTo</span> line
	<span class="token keyword">Set</span> rng <span class="token operator">=</span> Application<span class="token punctuation">.</span>InputBox<span class="token punctuation">(</span><span class="token string">"请使用鼠标选择单元格区域："</span><span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>
	rng<span class="token punctuation">.</span>Interior<span class="token punctuation">.</span>ColorIndex <span class="token operator">=</span> <span class="token number">15</span>
line<span class="token punctuation">:</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>代码解析：</p>
<p>RngInput 过程使用 InputBox 方法显示一个对话框，提示用户在工作表中选择一个单元格区域，并改变所选单元格区域内部的颜色。</p>
<p>第 3 行代码，错误处理语句。因为当对话框显示后，如果用户单击“取消”按钮，将显示一错误信息，如图 76-3 所示，所以必需使用 On Error GoTo 语句来绕过错误。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/76-3.png" alt="" loading="lazy"></p>
<p><u>图 76-3</u>	提示运行错误</p>
</div>
<p>第 4 行代码，使用 Set 语句将用户选择的单元格区域赋给变量 rng。当 Type 参数设置为 8 时，将返回一个 Range 对象，必须用 Set 语句将结果指定给一个 Range 对象。</p>
<p>第 5 行代码，改变用户所选单元格区域内部的颜色。</p>
<p>运行 RngInput 过程，将显示一个对话框，提示用户在工作表中选择一个单元格区域，并改变所选单元格区域内部的颜色，如图 76 4 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/76-4.png" alt="" loading="lazy"></p>
<p><u>图 76-4</u>	使用 InputBox 方法获得区域地址</p>
</div>
<h2 id="_77、内置对话框" tabindex="-1"><a class="header-anchor" href="#_77、内置对话框" aria-hidden="true">#</a> 77、内置对话框</h2>
<h3 id="_1-调用内置的对话框" tabindex="-1"><a class="header-anchor" href="#_1-调用内置的对话框" aria-hidden="true">#</a> 1）调用内置的对话框</h3>
<p>如果需要使用“打开”、“打印”等 Excel 内置对话框已经具有的功能，可以使用代码直接调用这些内置的对话框，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> DialogOpen<span class="token punctuation">(</span><span class="token punctuation">)</span>
	Application<span class="token punctuation">.</span>Dialogs<span class="token punctuation">(</span>xlDialogOpen<span class="token punctuation">)</span><span class="token punctuation">.</span>Show arg1<span class="token punctuation">:</span><span class="token operator">=</span>ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\*.xls"</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>代码解析：</p>
<p>DialogOpen 过程显示内置的“打开”对话框并选定示例所在的文件夹。</p>
<p>显示内置对话框语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>Application<span class="token punctuation">.</span>Dialogs<span class="token punctuation">(</span>xlDialogConst<span class="token punctuation">)</span><span class="token punctuation">.</span>Show

Dialogs集合代表所有的内置对话框，每个Dialog对象代表一个内置对话框，不能新建内置对话框或向该集合中添加内置对话框。
参数xlDialogConst是内置对话框的内置常量，每个常量都以<span class="token string">“xlDialog”</span>开头，其后是对话框的名称，如<span class="token string">“打开”</span>对话框的常量为<span class="token string">“xlDialogOpen”</span>。常用内置对话框的内置常量如表格<span class="token number">77</span><span class="token operator">-</span><span class="token number">1</span>所示。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><u>表格 77-1</u>	内置对话框的内置常量</p>
<table>
<thead>
<tr>
<th>常量</th>
<th>值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>xlDialogActiveCellFont</td>
<td>476</td>
<td>单元格格式(字体）</td>
</tr>
<tr>
<td>xlDialogBorder</td>
<td>45</td>
<td>单元格格式(边框）</td>
</tr>
<tr>
<td>xlDialogCellProtection</td>
<td>46</td>
<td>单元格格式(保护）</td>
</tr>
<tr>
<td>xlDialogDeleteFormat</td>
<td>111</td>
<td>单元格格式(数字）</td>
</tr>
<tr>
<td>xlDialogFormatNumber</td>
<td>42</td>
<td>单元格格式(数字）</td>
</tr>
<tr>
<td>xlDialogPatterns</td>
<td>84</td>
<td>单元格格式(图案）</td>
</tr>
<tr>
<td>xlDialogClear</td>
<td>52</td>
<td>清除</td>
</tr>
<tr>
<td>xlDialogColumnWidth</td>
<td>47</td>
<td>列宽</td>
</tr>
<tr>
<td>xlDialogRowHeight</td>
<td>127</td>
<td>行高</td>
</tr>
<tr>
<td>xlDialogConditionalFormatting</td>
<td>583</td>
<td>条件格式</td>
</tr>
<tr>
<td>xlDialogDefineName</td>
<td>61</td>
<td>定义名称</td>
</tr>
<tr>
<td>xlDialogDefineStyle</td>
<td>229</td>
<td>样式</td>
</tr>
<tr>
<td>xlDialogDisplay</td>
<td>27</td>
<td>显示选项</td>
</tr>
<tr>
<td>xlDialogFont</td>
<td>26</td>
<td>字体</td>
</tr>
<tr>
<td>xlDialogSetBackgroundPicture</td>
<td>509</td>
<td>工作表背景</td>
</tr>
<tr>
<td>xlDialogInsert</td>
<td>55</td>
<td>插入</td>
</tr>
<tr>
<td>xlDialogInsertHyperlink</td>
<td>596</td>
<td>插入超链接</td>
</tr>
<tr>
<td>xlDialogInsertPicture</td>
<td>342</td>
<td>插入图片</td>
</tr>
<tr>
<td>xlDialogNew</td>
<td>119</td>
<td>新建工作簿</td>
</tr>
<tr>
<td>xlDialogOpen</td>
<td>1</td>
<td>打开</td>
</tr>
<tr>
<td>xlDialogSaveAs</td>
<td>5</td>
<td>另存为</td>
</tr>
<tr>
<td>xlDialogWorkbookCopy</td>
<td>283</td>
<td>移动或复制工作表（建立副本）</td>
</tr>
<tr>
<td>xlDialogWorkbookInsert</td>
<td>354</td>
<td>插入工作表</td>
</tr>
<tr>
<td>xlDialogWorkbookMove</td>
<td>282</td>
<td>移动或复制工作表</td>
</tr>
<tr>
<td>xlDialogWorkbookName</td>
<td>386</td>
<td>重命名工作表</td>
</tr>
<tr>
<td>xlDialogWorkbookNew</td>
<td>302</td>
<td>新建工作表</td>
</tr>
<tr>
<td>xlDialogWorkbookProtect</td>
<td>417</td>
<td>保护工作簿</td>
</tr>
<tr>
<td>xlDialogPageSetup</td>
<td>7</td>
<td>页面设置</td>
</tr>
<tr>
<td>xlDialogPrint</td>
<td>8</td>
<td>打印内容</td>
</tr>
<tr>
<td>xlDialogPrinterSetup</td>
<td>9</td>
<td>打印机设置</td>
</tr>
<tr>
<td>xlDialogPrintPreview</td>
<td>222</td>
<td>打印预览</td>
</tr>
<tr>
<td>xlDialogSetPrintTitles</td>
<td>23</td>
<td>设置打印标题</td>
</tr>
<tr>
<td>xlDialogRun</td>
<td>17</td>
<td>宏</td>
</tr>
<tr>
<td>xlDialogTable</td>
<td>41</td>
<td>模拟运算表</td>
</tr>
<tr>
<td>xlDialogSendMail</td>
<td>189</td>
<td>发送邮件</td>
</tr>
</tbody>
</table>
<p>显示内置对话框使用 Show 方法，应用于 Dialog 对象的 Show 方法语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>Show<span class="token punctuation">(</span>Arg1<span class="token punctuation">,</span> Arg2<span class="token punctuation">,</span> Arg3<span class="token punctuation">,</span> Arg4<span class="token punctuation">,</span> Arg5<span class="token punctuation">,</span> Arg6<span class="token punctuation">,</span> Arg7<span class="token punctuation">,</span> Arg8<span class="token punctuation">,</span> Arg9<span class="token punctuation">,</span> Arg10<span class="token punctuation">,</span> Arg11<span class="token punctuation">,</span> Arg12<span class="token punctuation">,</span> Arg13<span class="token punctuation">,</span> Arg14<span class="token punctuation">,</span> Arg15<span class="token punctuation">,</span> Arg16<span class="token punctuation">,</span> Arg17<span class="token punctuation">,</span> Arg18<span class="token punctuation">,</span> Arg19<span class="token punctuation">,</span> Arg20<span class="token punctuation">,</span> Arg21<span class="token punctuation">,</span> Arg22<span class="token punctuation">,</span> Arg23<span class="token punctuation">,</span> Arg24<span class="token punctuation">,</span> Arg25<span class="token punctuation">,</span> Arg26<span class="token punctuation">,</span> Arg27<span class="token punctuation">,</span> Arg28<span class="token punctuation">,</span> Arg29<span class="token punctuation">,</span> Arg30<span class="token punctuation">)</span>

参数expression是必需的，返回Dialog对象之一。
参数arg1到参数arg30是可选的，仅应用于内置对话框，是命令的初始参数。若要查找要设置的参数，请在内置对话框参数列表中查找对应的对话框常量。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>运行 alogOpen 过程，显示内置的“打开”对话框，并且直接选定示例所在的文件夹，如图 77-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/77-1.png" alt="" loading="lazy"></p>
<p><u>图 77-1</u>	使用内置对话框</p>
</div>
<h3 id="_2-获取选定文件的文件名" tabindex="-1"><a class="header-anchor" href="#_2-获取选定文件的文件名" aria-hidden="true">#</a> 2）获取选定文件的文件名</h3>
<p>如果只希望获取用户在显示的内置 “打开”对话框中选定文件的文件名，而不想真正打开该文件，那么可以使用 GetOpenFilename 方法，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> OpenFilename<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> Filename <span class="token keyword">As</span> <span class="token keyword">Variant</span>
	<span class="token keyword">Dim</span> mymsg <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">Dim</span> i <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	Filename <span class="token operator">=</span> Application<span class="token punctuation">.</span>GetOpenFilename<span class="token punctuation">(</span>Title<span class="token punctuation">:</span><span class="token operator">=</span><span class="token string">"删除文件"</span><span class="token punctuation">,</span> MultiSelect<span class="token punctuation">:</span><span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
	<span class="token keyword">If</span> IsArray<span class="token punctuation">(</span>Filename<span class="token punctuation">)</span> <span class="token keyword">Then</span>
		mymsg <span class="token operator">=</span> MsgBox<span class="token punctuation">(</span><span class="token string">"是否删除所选文件?"</span><span class="token punctuation">,</span> vbYesNo<span class="token punctuation">,</span> <span class="token string">"提示"</span><span class="token punctuation">)</span>
		<span class="token keyword">If</span> mymsg <span class="token operator">=</span> vbYes <span class="token keyword">Then</span>
			<span class="token keyword">For</span> i <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">To</span> UBound<span class="token punctuation">(</span>Filename<span class="token punctuation">)</span>
				Kill Filename<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
			<span class="token keyword">Next</span>
		<span class="token keyword">End</span> <span class="token keyword">If</span>
	<span class="token keyword">End</span> <span class="token keyword">If</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>代码解析：</p>
<p>OpenFilename 过程使用 GetOpenFilename 方法显示标准的内置“打开”对话框，获取用户选定文件的文件名后使用 Kill 语句删除。</p>
<p>GetOpenFilename 方法显示标准的内置“打开”对话框，获取文件名，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>GetOpenFilename<span class="token punctuation">(</span>FileFilter<span class="token punctuation">,</span> FilterIndex<span class="token punctuation">,</span> Title<span class="token punctuation">,</span> ButtonText<span class="token punctuation">,</span> MultiSelect<span class="token punctuation">)</span>

参数expression是必需的，返回一个Application对象。
参数FileFilter是可选的，指定文件筛选条件的字符串。如果省略，则默认参数值为<span class="token string">“所有文件(*.*)”</span>。
参数FilterIndex是可选的，指定默认文件筛选条件的索引号，取值范围为 <span class="token number">1</span> 到由 FileFilter 所指定的筛选条件数目。如果省略，或者取值大于可用筛选数目，则采用第一个文件筛选条件。
参数Title是可选的，指定对话框的标题。如果省略，则使用<span class="token string">“打开”</span>作为标题。
参数ButtonText是可选的，仅用于Macintosh。
参数MultiSelect是可选的，如果该值为<span class="token boolean">True</span>，则允许选定多个文件名，如果该值为<span class="token boolean">False</span>，则只允许选定单个文件名。默认值为<span class="token boolean">False</span>。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>第 5 行代码显示标准的“打开”对话框，将对话框的标题设置为“删除文件”，将 MultiSelect 参数设置为 True，允许选定多个文件。</p>
<p>第 6 行代码，获得返回值。当用户选定文件后，返回的是选定的文件名或用户输入的文件名。因为 MultiSelect 参数已设置为 True，所以返回值将是一个包含所有选定文件名的数组（即使仅选定了一个文件名）。如果用户取消了对话框，则该值为 False。</p>
<p>第 8 行到第 12 行代码，经询问用户后使用 Kill 语句从磁盘中删除用户选定的文件。</p>
<p>运行 OpenFilename 过程，显示标准的内置“打开”对话框，删除用户选定的文件，如所图 77-2示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/77-2.png" alt="" loading="lazy"></p>
<p><u>图 77-2</u>	使用内置对话框</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>VBA 中数组下界默认从 0 开始，但使用 GetOpenFilename 方法选择多个文件时返回的包含选定文件名的数组下界是从 1 开始。</p>
</div>
<h3 id="_3-使用-另存为-对话框" tabindex="-1"><a class="header-anchor" href="#_3-使用-另存为-对话框" aria-hidden="true">#</a> 3）使用“另存为”对话框</h3>
<p>在备份文件时可以使用 GetSaveAsFilename 方法显示标准的内置“另存为”对话框，获取备份文件的文件名和保存路径，而无须真正保存任何文件。如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> CopyFilename<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> NowWorkbook <span class="token keyword">As</span> Workbook
	<span class="token keyword">Dim</span> FileName <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">GoTo</span> line
	FileName <span class="token operator">=</span> Application<span class="token punctuation">.</span>GetSaveAsFilename <span class="token operator">_</span>
		<span class="token punctuation">(</span>InitialFileName<span class="token punctuation">:</span><span class="token operator">=</span><span class="token string">"D:\"</span> <span class="token operator">&amp;</span> <span class="token keyword">Date</span> <span class="token operator">&amp;</span> <span class="token string">" "</span> <span class="token operator">&amp;</span> ThisWorkbook<span class="token punctuation">.</span>Name<span class="token punctuation">,</span> <span class="token operator">_</span>
		fileFilter<span class="token punctuation">:</span><span class="token operator">=</span><span class="token string">"Excel files(*.xls),*.xls,All files (*.*),*.*"</span><span class="token punctuation">,</span> <span class="token operator">_</span>
		Title<span class="token punctuation">:</span><span class="token operator">=</span><span class="token string">"数据备份"</span><span class="token punctuation">)</span>
	<span class="token keyword">If</span> FileName <span class="token operator">&lt;</span><span class="token operator">></span> <span class="token string">"False"</span> <span class="token keyword">Then</span>
		<span class="token keyword">Set</span> NowWorkbook <span class="token operator">=</span> Workbooks<span class="token punctuation">.</span>Add
		<span class="token keyword">With</span> NowWorkbook
			<span class="token punctuation">.</span>SaveAs FileName
			ThisWorkbook<span class="token punctuation">.</span>Sheets<span class="token punctuation">(</span><span class="token string">"Sheet2"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>UsedRange<span class="token punctuation">.</span>Copy <span class="token operator">_</span>
			<span class="token punctuation">.</span>Sheets<span class="token punctuation">(</span><span class="token string">"Sheet1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Range <span class="token punctuation">(</span><span class="token string">"A1"</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span>Save
		<span class="token keyword">End</span> <span class="token keyword">With</span>
		<span class="token keyword">GoTo</span> line
	<span class="token keyword">End</span> <span class="token keyword">If</span>
	<span class="token keyword">Exit</span> <span class="token keyword">Sub</span>
line<span class="token punctuation">:</span>
	ActiveWorkbook<span class="token punctuation">.</span>Close
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>代码解析：</p>
<p>CopyFilename 过程使用 GetSaveAsFilename 方法显示标准的内置“另存为”对话框，获取备份文件的文件名和保存路径，新建工作簿保存备份数据。</p>
<p>第 4 行代码，错误处理语句。备份过程中，如果已存在同名工作簿，会出现如图 77-3 所示的提示，如果选择了“否”，此时新工作簿已经建立，在执行第 12 行代码时发生错误，使程序中断，所以使用 GoTo 语句执行第 21 行代码，关闭新建立的工作簿。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/77-3.png" alt="" loading="lazy"></p>
<p><u>图 77-3</u>	文件已存在提示</p>
</div>
<p>第 5 行代码，使用 GetSaveAsFilename 方法显示标准的内置“另存为”对话框。GetSaveAsFilename 方法的语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>GetSaveAsFilename<span class="token punctuation">(</span>InitialFilename<span class="token punctuation">,</span> FileFilter<span class="token punctuation">,</span> FilterIndex<span class="token punctuation">,</span> Title<span class="token punctuation">,</span> ButtonText<span class="token punctuation">)</span>

参数expression是必需的，返回一个Application对象。
参数InitialFilename是可选的，指定建议的文件名。如果省略，将活动工作簿的名称作为建议的文件名。
参数FileFilter是可选的，指定文件筛选条件的字符串。
参数FilterIndex是可选的，指定默认文件筛选条件的索引号，取值范围为 <span class="token number">1</span> 到 FileFilter 指定的筛选条件数目之间。如果省略，或者取值大于可用筛选数目，则采用第一个文件筛选条件。
参数Title是可选的，指定对话框标题。如果省略，则使用默认标题。
参数ButtonText是可选的，仅用于 Macintosh。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>第 6 行代码，设置对话框的保存路径为 D 盘，保存文件名为日期加工作簿名称。</p>
<p>第 7 行代码，设置对话框文件保存类型为 Excel 文件类型。如果需要设置为文本类型需设置为“文本文件(*.txt), *.txt”，而如果是图片文件则需设置为“图片文件(*.bmp;*.jpg),*.bmp;*.jpg”。</p>
<p>第 8 行代码，设置对话框的标题为“数据备份”。</p>
<p>第 9 行代码，如果用户没有取消操作。</p>
<p>第 10 行到第 16 行代码，使用 Add 方法新建工作簿保存到对话框选定的路径中，将数据备份到新工作簿中。</p>
<p>第 17 行代码，使用 GoTo 语句执行第 21 行代码，关闭新建工作簿和开启屏幕刷新。</p>
<p>运行 CopyFilename 过程，显示内置“另存为”对话框，供用户备份工作簿数据，如图 77-4 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/77-4.png" alt="" loading="lazy"></p>
<p><u>图 77-4</u>	使用“另存为”对话框备份文件</p>
</div>
<h2 id="_78、调用操作系统-关于-对话框" tabindex="-1"><a class="header-anchor" href="#_78、调用操作系统-关于-对话框" aria-hidden="true">#</a> 78、调用操作系统“关于”对话框</h2>
<p>VBA 程序开发完成后，有时需要一个“关于”对话框，除了使用窗体外，还可以调用操作系统的“关于”对话框，显示自定义的内容，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> ShellAbout <span class="token keyword">Lib</span> <span class="token string">"shell32.dll"</span> <span class="token keyword">Alias</span> <span class="token string">"ShellAboutA"</span> <span class="token punctuation">(</span> <span class="token operator">_</span>
		<span class="token keyword">ByVal</span> hwnd <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> szApp <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">,</span> <span class="token operator">_</span>
		<span class="token keyword">ByVal</span> szOtherStuff <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> hIcon <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> FindWindow <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token keyword">Alias</span> <span class="token string">"FindWindowA"</span> <span class="token punctuation">(</span> <span class="token operator">_</span>
		<span class="token keyword">ByVal</span> lpClassName <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> lpWindowName <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Sub</span> CommandButton1_Click<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> ApphWnd <span class="token keyword">As</span> <span class="token keyword">Long</span>
	ApphWnd <span class="token operator">=</span> FindWindow<span class="token punctuation">(</span><span class="token string">"XLMAIN"</span><span class="token punctuation">,</span> Application<span class="token punctuation">.</span>Caption<span class="token punctuation">)</span>
	ShellAbout ApphWnd<span class="token punctuation">,</span> <span class="token string">"财务处理系统"</span><span class="token punctuation">,</span> <span class="token string">"yuanzhuping@yeah.net	0513-86548930"</span><span class="token punctuation">,</span> <span class="token number">0</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>代码解析：</p>
<p>第 1 行到第 5 行代码是 API 函数声明。</p>
<p>第 8、9 行代码调用操作系统的“关于”对话框并显示自定义的内容。</p>
<p>代码运行后显示如图 78-1 所示的对话框。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/78-1.png" alt="" loading="lazy"></p>
<p><u>图 78-1</u>	调用操作系统的“关于”对话框</p>
</div>
</template>
