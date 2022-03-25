<template><h2 id="_64、取得-excel-版本信息" tabindex="-1"><a class="header-anchor" href="#_64、取得-excel-版本信息" aria-hidden="true">#</a> 64、取得 Excel 版本信息</h2>
<p>Application 对象的 Version 属性可以返回 Excel 的版本号，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> AppVersion<span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">Dim</span> myVersion <span class="token keyword">As</span> <span class="token keyword">String</span>
  <span class="token keyword">Select</span> <span class="token keyword">Case</span> Application<span class="token punctuation">.</span>Version
	  <span class="token keyword">Case</span> <span class="token string">"8.0"</span>
		  myVersion <span class="token operator">=</span> <span class="token string">"97"</span>
	  <span class="token keyword">Case</span> <span class="token string">"9.0"</span>
		  myVersion <span class="token operator">=</span> <span class="token string">"2000"</span>
	  <span class="token keyword">Case</span> <span class="token string">"10.0"</span>
		  myVersion <span class="token operator">=</span> <span class="token string">"2002"</span>
	  <span class="token keyword">Case</span> <span class="token string">"11.0"</span>
		  myVersion <span class="token operator">=</span> <span class="token string">"2003"</span>
	  <span class="token keyword">Case</span> <span class="token keyword">Else</span>
		  myVersion <span class="token operator">=</span> <span class="token string">"版本未知"</span>
  <span class="token keyword">End</span> <span class="token keyword">Select</span>
  MsgBox <span class="token string">"Excel 版本是： "</span> <span class="token operator">&amp;</span> myVersion
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>代码解析：</p>
<p>AppVersion 过程返回 Application 对象的 Version 属性值来取得 Excel 版本号。</p>
<p>应用于 Application 对象的 Version 属性返回 Excel 版本号，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>Version

参数expression是必需的，Application对象。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>运行 AppVersion 过程结果如图 64-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/64-1.png" alt="" loading="lazy"></p>
<p><u>图 64-1</u>	取得 Excel 版本号</p>
</div>
<h2 id="_65、取得当前用户名称" tabindex="-1"><a class="header-anchor" href="#_65、取得当前用户名称" aria-hidden="true">#</a> 65、取得当前用户名称</h2>
<p>使用 Application 对象的 UserName 属性可以取得当前用户名称，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> UserName<span class="token punctuation">(</span><span class="token punctuation">)</span>
	MsgBox <span class="token string">"当前用户名是: "</span> <span class="token operator">&amp;</span> Application<span class="token punctuation">.</span>UserName
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>代码解析：</p>
<p>UserName 过程使用消息框显示当前用户名称。</p>
<p>Application 对象的 UserName 属性返回或设置当前用户的名称。</p>
<p>运行 UserName 过程效果如图 65-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/65-1.png" alt="" loading="lazy"></p>
<p><u>图 65-1</u>	显示当前用户名称</p>
</div>
<h2 id="_66、excel-中的-定时器" tabindex="-1"><a class="header-anchor" href="#_66、excel-中的-定时器" aria-hidden="true">#</a> 66、Excel 中的“定时器“</h2>
<p>Excel VBA 并没有提供定时器控件，但是用户可以通过 Application 对象的 OnTime 方法实现简单的定时器功能，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> StartTimer<span class="token punctuation">(</span><span class="token punctuation">)</span>
	Sheet1<span class="token punctuation">.</span>Cells<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">=</span> Sheet1<span class="token punctuation">.</span>Cells<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
	Application<span class="token punctuation">.</span>OnTime Now <span class="token operator">+</span> TimeValue<span class="token punctuation">(</span><span class="token string">"00:00:01"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"StartTimer"</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>代码解析：</p>
<p>StartTimer 过程，使用 Application 对象的 OnTime 方法循环调用 StartTimer 过程实现每隔一秒钟运行一次 StartTimer 过程，从而在B1单元格中不断地显示程序累计运行时间，如图 66-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/66-1.png" alt="" loading="lazy"></p>
<p><u>图 66-1</u>	简单的定时器</p>
</div>
<p>第 2 行代码将 <code>B1</code> 单元格的值在原有的数字上加 1。</p>
<p>第 3 行代码使用 OnTime 方法在 1 秒后重新调用 StartTimer 过程，使 <code>B1</code> 单元格的值不断的加 1，从而显示程序累计运行时间。</p>
<p>应用于 Application 对象的 OnTime 方法能够安排一个过程在将来的特定时间运行，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>OnTime<span class="token punctuation">(</span>EarliestTime<span class="token punctuation">,</span> Procedure<span class="token punctuation">,</span> LatestTime<span class="token punctuation">,</span> Schedule<span class="token punctuation">)</span>

参数expression是必需的，返回一个Application对象。
参数EarliestTime是必需的，设置指定的过程开始运行的时间。使用Now <span class="token operator">+</span> TimeValue<span class="token punctuation">(</span>time<span class="token punctuation">)</span>可以安排从现在开始经过一段时间之后运行某个过程，使用TimeValue<span class="token punctuation">(</span>time<span class="token punctuation">)</span>可以安排在指定的时间运行某个过程。
参数Procedure是必需的，设置要运行的过程名称。
参数LatestTime是可选的，设置过程开始运行的最晚时间。例如将参数LatestTime设置为EarliestTime<span class="token operator">+</span><span class="token number">10</span>，当时间到了EarliestTime时如果Excel不处于空闲状态，那么Excel将等待<span class="token number">10</span>秒，如果在<span class="token number">10</span>秒内Excel不能回到空闲状态，则不运行该过程。如果省略该参数，Excel将一直等待到可以运行该过程为止。
参数Schedule是可选的，如果其值为<span class="token boolean">True</span>（默认值），则安排一个新的OnTime过程，如果其值为<span class="token boolean">False</span>，则清除先前设置的过程。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>取消定时的代码如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> EndTimer<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">GoTo</span> Line
	Application<span class="token punctuation">.</span>OnTime Now <span class="token operator">+</span> TimeValue<span class="token punctuation">(</span><span class="token string">"00:00:01"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"StartTimer"</span><span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token boolean">False</span>
	Sheet1<span class="token punctuation">.</span>Cells<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span>
	<span class="token keyword">Exit</span> <span class="token keyword">Sub</span>
Line<span class="token punctuation">:</span>
	MsgBox <span class="token string">"请先按[开始]按钮!"</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>代码解析：</p>
<p>EndTimer 过程取消 StartTimer 过程的定时。</p>
<p>第 2 行代码错误处理语句，因为如果还没有运行 StartTimer 过程而先运行 EndTimer 过程取消定时，程序会提示错误，如图 66-2 所示，因此使用 On Error GoTo Line 语句在错误发生时执行第 7 行代码显示一个如图 66-3 所示的提示消息框。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/66-2.png" alt="" loading="lazy"></p>
<p><u>图 66-2</u>	运行错误</p>
<p><img src="@source/project/Excel/assets/66-3.png" alt="" loading="lazy"></p>
<p><u>图 66-3</u>	提示消息框</p>
</div>
<p>第 3 行代码将 StartTimer 过程的 Schedule 参数设置为 False，取消定时设置。</p>
<h2 id="_67、设置活动打印机的名称" tabindex="-1"><a class="header-anchor" href="#_67、设置活动打印机的名称" aria-hidden="true">#</a> 67、设置活动打印机的名称</h2>
<p>使用 Application 对象的 ActivePrinter 属性可以设置活动打印机的名称，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> myPrinter<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> myPrinter <span class="token keyword">As</span> <span class="token keyword">String</span>
	myPrinter <span class="token operator">=</span> <span class="token string">"HP LaserJet P1008 在 Ne04:"</span>
	Application<span class="token punctuation">.</span>ActivePrinter <span class="token operator">=</span> myPrinter
	MsgBox <span class="token string">"活动打印机为："</span> <span class="token operator">&amp;</span> Left<span class="token punctuation">(</span>myPrinter<span class="token punctuation">,</span> InStr<span class="token punctuation">(</span>myPrinter<span class="token punctuation">,</span> <span class="token string">"在"</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>代码解析：</p>
<p>myPrinter 过程将活动打印机设置为“HP LaserJet P1008”。</p>
<p>第 3 行代码指定需要设置为活动打印机的名称，第 4 行代码通过设置 Application 对象的ActivePrinter 属性将活动打印机设置为“HP LaserJet P1008”。</p>
<p>第 5 行代码使用消息框显示活动打印机的名称及型号。</p>
<p>运行 myPrinter 过程结果如图 67-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/67-1.png" alt="" loading="lazy"></p>
<p><u>图 67-1</u>	设置活动打印机</p>
</div>
<h2 id="_68、屏蔽、改变组合键的功能" tabindex="-1"><a class="header-anchor" href="#_68、屏蔽、改变组合键的功能" aria-hidden="true">#</a> 68、屏蔽、改变组合键的功能</h2>
<p>使用 Application 对象的 OnKey 方法可以屏蔽或改变组合键的默认操作，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> Workbook_Open<span class="token punctuation">(</span><span class="token punctuation">)</span>
	Application<span class="token punctuation">.</span>OnKey <span class="token string">"^{c}"</span><span class="token punctuation">,</span> <span class="token string">"myOnKey"</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
<span class="token keyword">Sub</span> myOnKey<span class="token punctuation">(</span><span class="token punctuation">)</span>
	MsgBox <span class="token string">"本工作表禁止复制数据!"</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>代码解析：</p>
<p>第 1 行到第 3 行代码工作簿的 Open 事件，在工作簿打开时使用 OnKey 方法改变 &lt;Ctrl +C&gt; 组合键的功能。</p>
<p>应用于 Application 对象的 OnKey 方法指定特定键或特定的组合键运行的过程，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>OnKey<span class="token punctuation">(</span>Key<span class="token punctuation">,</span> Procedure<span class="token punctuation">)</span>

参数expression是必需的，该表达式返回一个Application 对象。
参数Key是必需的，用于表示要按的键的字符串，具体请参阅VBA中的帮助。
参数Procedure是可选的，表示要运行的过程名称的字符串。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>本示例中将过程名称指定为第 4 行到第 6 行代码的“myOnKey”过程，当按下 &lt;Ctrl +C&gt; 组合键时并不会执行复制操作而只显示一个消息框。如果将 Procedure 参数指定为空文本（&quot;&quot;），则按 &lt;Ctrl +C&gt; 组合键时不发生任何操作，达到屏蔽组合键的效果。</p>
<p>如果省略 Procedure 参数，则按下 &lt;Ctrl +C&gt; 组合键时产生 Microsoft Excel 中的正常结果，同时清除先前使用 OnKey 方法所做的特殊击键设置，所以恢复 &lt;Ctrl +C&gt; 组合键的代码如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Application.OnKey "^{c}"
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>为了不影响其他工作簿的功能，恢复代码就放在工作簿的 Deactivate 事件中，如下面的代码所示：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> Workbook_Deactivate<span class="token punctuation">(</span><span class="token punctuation">)</span>
	Application<span class="token punctuation">.</span>OnKey <span class="token string">"^{c}"</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>代码解析：</p>
<p>当工作簿从活动状态转为非活动状态时恢复 &lt;Ctrl +C&gt; 组合键的正常功能。</p>
<h2 id="_69、设置-excel-窗口标题栏" tabindex="-1"><a class="header-anchor" href="#_69、设置-excel-窗口标题栏" aria-hidden="true">#</a> 69、设置 Excel 窗口标题栏</h2>
<p>Excel 主窗口标题栏默认的名称是“Microsoft Excel”，通过设置 Application 对象的 Caption 属性可以改变 Excel 主窗口的标题栏，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> AppCaption<span class="token punctuation">(</span><span class="token punctuation">)</span>
	Application<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"修改标题栏名称"</span>
	MsgBox <span class="token string">"下面将恢复默认的标题栏名称!"</span>
	Application<span class="token punctuation">.</span>Caption <span class="token operator">=</span> Empty
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>代码解析：</p>
<p>第 2 行代码将 Excel 窗口标题设置为“修改标题栏名称”，如图 69-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/69-1.png" alt="" loading="lazy"></p>
<p><u>图 69-1</u>	设置 Excel 窗口标题</p>
</div>
<p>应用于 Application 对象的 Caption 属性设置显示在 Microsoft Excel 主窗口标题栏中的名称，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>Caption
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>第 3 行代码恢复 Microsoft Excel 主窗口标题栏中的名称。如果未设置 Caption 属性（&quot;&quot;）或将其设置为 Empty（表示未初始化的变量值），则本属性返回默认的“Microsoft Excel”。</p>
<p>将 Caption 属性设置为常数 vbNullChar（表示值为 0 的字符）可以删除标题栏中的名称，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> DleCaption<span class="token punctuation">(</span><span class="token punctuation">)</span>
	Application<span class="token punctuation">.</span>Caption <span class="token operator">=</span> vbNullChar
	MsgBox <span class="token string">"下面将恢复默认的标题栏名称!"</span>
	Application<span class="token punctuation">.</span>Caption <span class="token operator">=</span>Empty
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>代码解析：</p>
<p>第 2 行代码删除 Excel 主窗口标题栏，结果如图 69-2 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/69-2.png" alt="" loading="lazy"></p>
<p><u>图 69-2</u>	删除 Excel 窗口标题栏的名称</p>
</div>
<h2 id="_70、自定义-excel-状态栏" tabindex="-1"><a class="header-anchor" href="#_70、自定义-excel-状态栏" aria-hidden="true">#</a> 70、自定义 Excel 状态栏</h2>
<p>Excel 状态栏显示应用程序的当前状态（例如就绪、输入等）或上下文提示信息，通过设置 Application 对象的 Statusbar 属性可以修改状态栏，以显示用户自定义的信息，代码如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> myStatusBar<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> rng <span class="token keyword">As</span> Range
	<span class="token keyword">For</span> <span class="token keyword">Each</span> rng <span class="token keyword">In</span> Sheet1<span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"A1:D10000"</span><span class="token punctuation">)</span>
		Application<span class="token punctuation">.</span>StatusBar <span class="token operator">=</span> <span class="token string">"正在计算单元格 "</span> <span class="token operator">&amp;</span> rng<span class="token punctuation">.</span>Address<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">" 的数据..."</span>
		rng <span class="token operator">=</span> <span class="token number">100</span>
	<span class="token keyword">Next</span>
	Application<span class="token punctuation">.</span>StatusBar <span class="token operator">=</span> <span class="token boolean">False</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>代码解析：</p>
<p>myStatusBar 过程在给选定单元格区域赋值的同时，将 Excel 状态栏中的文字设置为正在赋值的单元格地址。</p>
<p>应用于 Application 对象的 StatusBar 属性返回或设置状态栏中的文字，如果需要恢复默认的状态栏文字，将本属性设为 False 即可。</p>
<p>运行 myStatusBar 过程 Excel 状态栏如图 70-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/70-1.png" alt="" loading="lazy"></p>
<p><u>图 70-1</u>	自定义 Excel 状态栏</p>
</div>
<h2 id="_71、灵活退出-excel" tabindex="-1"><a class="header-anchor" href="#_71、灵活退出-excel" aria-hidden="true">#</a> 71、灵活退出 Excel</h2>
<p>在使用 Close 方法关闭工作簿时，既使当前只有一个打开的工作簿，也只能关闭工作簿而不能关闭 Excel 程序，而使用 Application 对象的 Quit 方法则会关闭所有打开的工作簿，下面的代码可以做到两者兼顾。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> myQuit<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">If</span> Workbooks<span class="token punctuation">.</span>Count <span class="token operator">></span> <span class="token number">1</span> <span class="token keyword">Then</span>
		ThisWorkbook<span class="token punctuation">.</span>Close
	<span class="token keyword">Else</span>
		Application<span class="token punctuation">.</span>Quit
	<span class="token keyword">End</span> <span class="token keyword">If</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>代码解析：</p>
<p>myQuit 过程在关闭 Excel 程序时根据当前打开的工作簿数量决定采用何种方法关闭工作簿。</p>
<p>第 2 行代码使用 Workbook 集合的 Count 属性判断当前打开的工作簿文件数量。</p>
<p>第 3 行代码如当前打开两个或两个以上工作簿，使用 Close 方法关闭代码所在的工作簿。关于 Close 方法请参阅 45-1。</p>
<p>第 5 行代码如果当前只有一个打开的工作簿文件则使用 Quit 方法关闭 Excel 程序。应用于 Application 对象的 Quit 方法退出 Excel 程序，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>Quit

参数expression是必需的，返回一个Application对象。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>使用 Quit 方法关闭 Excel 程序时，如果有未保存的工作簿处于打开状态，则将弹出一个询问是否要保存所作更改的对话框，为避免对话框出现，可在使用 Quit 方法前保存所有的工作簿，或者将 Application 对象的 DisplayAlerts 属性设置为 False，在退出 Excel 程序时，即使有未保存的工作簿，也不会显示对话框，而且不保存就退出。</p>
<p>如果一个工作簿的 Saved 属性值为 True，但是并没有将工作簿保存到磁盘上，则 Excel 程序在退出时不会提示保存该工作簿。</p>
<h2 id="_72、隐藏-excel-主窗口" tabindex="-1"><a class="header-anchor" href="#_72、隐藏-excel-主窗口" aria-hidden="true">#</a> 72、隐藏 Excel 主窗口</h2>
<p>如果希望在程序启动时或运行过程中隐藏 Excel 主窗口，有以下几种实现方法。</p>
<h3 id="_1-设置-application-对象的-visible-属性" tabindex="-1"><a class="header-anchor" href="#_1-设置-application-对象的-visible-属性" aria-hidden="true">#</a> 1）设置 Application 对象的 Visible 属性</h3>
<p>当 Application 对象的 Visible 属性设置为 False 时，Application 对象不可见，即能隐藏 Excel 主窗口，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> Workbook_Open<span class="token punctuation">(</span><span class="token punctuation">)</span>
	Application<span class="token punctuation">.</span>Visible <span class="token operator">=</span> <span class="token boolean">False</span>
	UserForm1<span class="token punctuation">.</span>Show
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>代码解析：</p>
<p>代码工作簿的 Open 事件，在工作簿打开时将 Application 对象的 Visible 属性设置为 False 隐藏 Excel 主窗口。</p>
<p>显示 Excel 主窗口的方法是将 Application 对象的 Visible 属性重新设置为 True。</p>
<p>当工作簿文件打开时，隐藏 Excel 主窗口，只显示用户登录窗体，如图 72-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/72-1.png" alt="" loading="lazy"></p>
<p><u>图 72-1</u>	隐藏 Excel 主窗口</p>
</div>
<h3 id="_2-将窗口移出屏幕" tabindex="-1"><a class="header-anchor" href="#_2-将窗口移出屏幕" aria-hidden="true">#</a> 2）将窗口移出屏幕</h3>
<p>设置 Application 对象的 Left 属性（从屏幕左边界至 Microsoft Excel 主窗口左边界的距离）和 Top 属性（从屏幕顶端到 Microsoft Excel 主窗口顶端的距离）将 Application 对象移出屏幕外，实现隐藏 Excel 主窗口，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> Workbook_Open<span class="token punctuation">(</span><span class="token punctuation">)</span>
	Application<span class="token punctuation">.</span>WindowState <span class="token operator">=</span> xlNormal
	Application<span class="token punctuation">.</span>Left <span class="token operator">=</span> <span class="token number">10000</span>
	UserForm1<span class="token punctuation">.</span>StartUpPosition <span class="token operator">=</span> <span class="token number">2</span>
	UserForm1<span class="token punctuation">.</span>Show
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>代码解析：</p>
<p>工作簿的 Open 事件过程，设置 Application 对象的 Left 属性为一个大的数值，从而将应用程序窗口移出屏幕。</p>
<p>第 2 行代码将应用程序窗口设置为正常状态，只有当应用程序窗口正常显示时才能够设置 Application 对象的 Left 属性。</p>
<p>第 2 行代码将 Application 对象的 Left 属性设置为一个大的数值，从而隐藏 Excel 主窗口。</p>
<p>第 4 行代码设置用户窗体的 StartUpPosition 属性值为 2，使窗体显示在屏幕的中央。StartUpPosition 属性返回或设置一个值，用来指定用户窗体第一次出现时的位置，请参阅 142 。</p>
<p>重新显示 Excel 主窗口的方法是将应用程序窗口设置为最大化状态代码如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>Application<span class="token punctuation">.</span>WindowState <span class="token operator">=</span> xlMaximized
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>当工作簿文件打开时，隐藏 Excel 主窗口，只显示用户登录窗体，如图 72-2 所示，与通过设置 Visible 属性实现的效果不同，设置 Left 属性在任务栏中仍然会显示应用程序窗口按钮。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/72-2.png" alt="" loading="lazy"></p>
<p><u>图 72-2</u>	隐藏 Excel 主窗口</p>
</div>
<h3 id="_3-设置工作簿作为加载宏运行" tabindex="-1"><a class="header-anchor" href="#_3-设置工作簿作为加载宏运行" aria-hidden="true">#</a> 3）设置工作簿作为加载宏运行</h3>
<p>利用加载宏不显示工作簿窗口的特点，设置工作簿作为加载宏运行来隐藏工作簿窗口，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> Workbook_Open<span class="token punctuation">(</span><span class="token punctuation">)</span>
	ThisWorkbook<span class="token punctuation">.</span>IsAddin <span class="token operator">=</span> <span class="token boolean">True</span>
	UserForm1<span class="token punctuation">.</span>Show
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>代码解析：</p>
<p>工作簿的 Open 事件，在工作簿打开时设置其 IsAddin 属性值为 True，指定工作簿作为加载宏运行。</p>
<p>当工作簿作为加载宏运行时，将有工作薄窗口不可见的特征，从而实现隐藏工作簿窗口的目的，如图 72-3 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/72-3.png" alt="" loading="lazy"></p>
<p><u>图 72-3</u>	隐藏工作簿窗口</p>
</div>
<p>重新显示 Excel 主窗口的方法是将工作簿的 IsAddin 属性值设置为 False，以显示工作簿窗口。</p>
</template>
