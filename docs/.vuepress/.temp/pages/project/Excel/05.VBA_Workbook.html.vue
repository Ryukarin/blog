<template><h2 id="_40、工作簿的引用方法" tabindex="-1"><a class="header-anchor" href="#_40、工作簿的引用方法" aria-hidden="true">#</a> 40、工作簿的引用方法</h2>
<p>VBA 中，在不同的工作簿之间转换需要指定引用的工作簿，通常有下面几种方法。</p>
<h3 id="_1-使用工作簿的名称" tabindex="-1"><a class="header-anchor" href="#_1-使用工作簿的名称" aria-hidden="true">#</a> 1）使用工作簿的名称</h3>
<p>工作簿名称是指 Excel 文件的文件名，可以使用 Workbooks 集合引用方式来引用工作簿，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> WbPath <span class="token punctuation">(</span><span class="token punctuation">)</span>
	MsgBox <span class="token string">"名称为："</span> <span class="token operator">&amp;</span> Workbooks<span class="token punctuation">(</span><span class="token string">"工作簿的引用方法.xls"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Path
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>代码解析：</p>
<p>WbPath 过程显示工作簿“工作簿的引用方法”的路径。应用于 Workbook 对象的 Path 属性将完整路径返回给应用程序，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>Path

参数expression是必需的，一个有效的对象。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>运行 WbPath 过程结果如图 40-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/40-1.png" alt="" loading="lazy"></p>
<p><u>图 40-1</u>	返回工作簿完整路径</p>
</div>
<h3 id="_2-使用工作簿的索引号" tabindex="-1"><a class="header-anchor" href="#_2-使用工作簿的索引号" aria-hidden="true">#</a> 2）使用工作簿的索引号</h3>
<p>工作簿索引号是指工作簿打开的顺序，Excel根据工作簿打开的顺序以1开始进行编号。下面的代码显示应用程序打开的第一个工作簿的名称。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> WbName<span class="token punctuation">(</span><span class="token punctuation">)</span>
	MsgBox <span class="token string">"第一个打开的工作簿名字为："</span> <span class="token operator">&amp;</span> Workbooks<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Name
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>代码解析：</p>
<p>WbName 过程显示应用程序打开的第一个工作簿的名称。应用于 Workbook 对象的 Name 属性返回对象的名称，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>Name

参数expression是必需的，一个有效的对象。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>运行 WbName 过程结果如图 40-2 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/40-2.png" alt="" loading="lazy"></p>
<p><u>图 40-2</u>	返回工作簿名称</p>
</div>
<p>如果需要返回包含完整路径的工作簿名称则使用 Workbook 对象的 FullName 属性，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> WbFullName<span class="token punctuation">(</span><span class="token punctuation">)</span>
	MsgBox <span class="token string">"包括完整路径的工作簿名称为："</span> <span class="token operator">&amp;</span> Workbooks<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>FullName
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>WbFullName 过程显示应用程序打开的第一个工作簿的完整路径和名称。FullName 属性返回对象的名称，包括其磁盘路径的字符串，此属性等价于在 Path 属性后加上当前文件系统的分隔符，然后加上 Name 属性。</p>
<p>运行 WbFullName 过程结果如图 40-3 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/40-3.png" alt="" loading="lazy"></p>
<p><u>图 40-3</u>	返回包含完整路径的工作簿名称</p>
</div>
<h3 id="_3-使用-thisworkbook" tabindex="-1"><a class="header-anchor" href="#_3-使用-thisworkbook" aria-hidden="true">#</a> 3）使用 ThisWorkbook</h3>
<p>使用 ThisWorkbook 代表当前宏代码运行的工作簿，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> WbClose<span class="token punctuation">(</span><span class="token punctuation">)</span>
	ThisWorkbook<span class="token punctuation">.</span>Close SaveChanges<span class="token punctuation">:</span><span class="token operator">=</span><span class="token boolean">False</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>代码解析：</p>
<p>WbThis 过程使用 Close 方法关闭当前宏代码运行的工作簿，不保存对工作簿的任何更改。关于应用于 Workbook 对象的 Close 方法请参阅 45-1。</p>
<div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>本属性仅可在 Microsoft Excel 内使用。不能使用此属性访问任何其他应用程序的工作簿。</p>
</div>
<h3 id="_4-使用-activeworkbook" tabindex="-1"><a class="header-anchor" href="#_4-使用-activeworkbook" aria-hidden="true">#</a> 4）使用 ActiveWorkbook</h3>
<p>使用 ActiveWorkbook 代表活动窗口（最上面的窗口）的工作簿，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> WbActive<span class="token punctuation">(</span><span class="token punctuation">)</span>
	MsgBox <span class="token string">"当前活动工作簿名字为："</span> <span class="token operator">&amp;</span> ActiveWorkbook<span class="token punctuation">.</span>Name
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>代码解析：</p>
<p>WbActive 过程显示活动工作簿的名称，ActiveWorkbook 属性返回一个 Workbook 对象，该对象代表活动窗口（最上面的窗口）的工作簿。如果没有打开任何窗口或者活动窗口为信息窗口或剪贴板窗口，则返回 Nothing。</p>
<p>运行 WbActive 过程结果如图 40-4 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/40-4.png" alt="" loading="lazy"></p>
<p><u>图 40-4</u>	返回活动工作簿名称</p>
</div>
<h2 id="_41、新建工作簿文件" tabindex="-1"><a class="header-anchor" href="#_41、新建工作簿文件" aria-hidden="true">#</a> 41、新建工作簿文件</h2>
<p>在 VBA 中使用 Add 方法新建工作簿，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> AddNowbook<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> Nowbook <span class="token keyword">As</span> Workbook
	<span class="token keyword">Dim</span> ShName <span class="token keyword">As</span> <span class="token keyword">Variant</span>
	<span class="token keyword">Dim</span> Arr <span class="token keyword">As</span> <span class="token keyword">Variant</span>
	<span class="token keyword">Dim</span> i <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">Dim</span> myNewWorkbook <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	myNewWorkbook <span class="token operator">=</span> Application<span class="token punctuation">.</span>SheetsInNewWorkbook
	ShName <span class="token operator">=</span> Array<span class="token punctuation">(</span><span class="token string">"余额"</span><span class="token punctuation">,</span> <span class="token string">"单价"</span><span class="token punctuation">,</span> <span class="token string">"数量"</span><span class="token punctuation">,</span> <span class="token string">"金额"</span><span class="token punctuation">)</span>
	Arr <span class="token operator">=</span> Array<span class="token punctuation">(</span><span class="token string">"01月"</span><span class="token punctuation">,</span> <span class="token string">"02月"</span><span class="token punctuation">,</span> <span class="token string">"03月"</span><span class="token punctuation">,</span> <span class="token string">"04月"</span><span class="token punctuation">,</span> <span class="token string">"05月"</span><span class="token punctuation">,</span> <span class="token string">"06月"</span><span class="token punctuation">,</span> <span class="token string">"07月"</span><span class="token punctuation">,</span> <span class="token string">"08月"</span><span class="token punctuation">,</span> <span class="token string">"09月"</span><span class="token punctuation">,</span> <span class="token string">"10月"</span><span class="token punctuation">,</span> <span class="token string">"11月"</span><span class="token punctuation">,</span> <span class="token string">"12月"</span><span class="token punctuation">)</span>
	Application<span class="token punctuation">.</span>SheetsInNewWorkbook <span class="token operator">=</span> <span class="token number">4</span>
	<span class="token keyword">Set</span> Nowbook <span class="token operator">=</span> Workbooks<span class="token punctuation">.</span>Add
	<span class="token keyword">With</span> Nowbook
		<span class="token keyword">For</span> i <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">To</span> <span class="token number">4</span>
			<span class="token keyword">With</span> <span class="token punctuation">.</span>Sheets<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
				<span class="token punctuation">.</span>Name <span class="token operator">=</span> ShName<span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"B1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Resize<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> UBound<span class="token punctuation">(</span>Arr<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=</span> Arr
				<span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"A2"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"品名"</span>
			<span class="token keyword">End</span> <span class="token keyword">With</span>
		<span class="token keyword">Next</span>
		<span class="token punctuation">.</span>SaveAs Filename<span class="token punctuation">:</span><span class="token operator">=</span>ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\"</span> <span class="token operator">&amp;</span> <span class="token string">"存货明细.xls"</span>
		<span class="token punctuation">.</span>Close Savechanges<span class="token punctuation">:</span><span class="token operator">=</span><span class="token boolean">True</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
	<span class="token keyword">Set</span> Nowbook <span class="token operator">=</span> <span class="token boolean">Nothing</span>
	Application<span class="token punctuation">.</span>SheetsInNewWorkbook <span class="token operator">=</span> myNewWorkbook
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>代码解析：</p>
<p>AddNowbook 过程使用 Add 方法建立新的工作簿并对新建工作簿进行操作。</p>
<p>第 2 行到第 6 行代码声明变量类型。</p>
<p>第 7 行代码保存 Excel 自动插入到新工作簿中的工作表数目。</p>
<p>第 8、9 行代码将数组元素赋值给变量。</p>
<p>第 10 行代码将 Application 对象的 SheetsInNewWorkbook 属性设置为 4，在新建工作簿时插入 4 张工作表。</p>
<p>第 11 行代码使用 Add 方法建立新的工作簿，应用于 Workbooks 对象的 Add 方法新建工作簿，新建的工作簿将成为活动工作簿。</p>
<p>第 12 行到第 22 行代码操作新建工作簿。其中第 15 行到第 17 行代码将新建工作簿的工作表进行重命名并给单元格赋值。第 20 行代码使用 SaveAs 方法将新建工作簿重命名为“存货明细.xls”保存在同一目录中。关于 SaveAs 方法请参阅 47-2。第 21 行代码使用 Close 方法关闭工作簿。关于 Close 方法请参阅 45-1。</p>
<p>第 24 行代码恢复工作簿的默认设置。</p>
<p>运行 AddNowbook 过程将在工作簿同一目录中新建“存货明细.xls”工作簿，新建工作簿格式如图 41-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/41-1.png" alt="" loading="lazy"></p>
<p><u>图 41-1</u>	新建“存货明细.xls”工作簿格式</p>
</div>
<div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>本例中没有考虑工作簿同名因素，如果目录中已有“存货明细.xls”工作簿，运行时会显示如图 41-2 所示的对话框，选择“是”即可，否则将会出错。</p>
</div>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/41-2.png" alt="" loading="lazy"></p>
<p><u>图 41-2</u>	同名提示</p>
</div>
<h2 id="_42、打开指定的工作簿" tabindex="-1"><a class="header-anchor" href="#_42、打开指定的工作簿" aria-hidden="true">#</a> 42、打开指定的工作簿</h2>
<p>VBA 中使用 Open 方法打开一个工作簿，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> Openfile<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> x <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">For</span> x <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">To</span> Workbooks<span class="token punctuation">.</span>Count
		<span class="token keyword">If</span> Workbooks<span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"123.xls"</span> <span class="token keyword">Then</span>
			MsgBox <span class="token string">"""123""工作簿已经打开!"</span>
			<span class="token keyword">Exit</span> <span class="token keyword">Sub</span>
		<span class="token keyword">End</span> <span class="token keyword">If</span>
	<span class="token keyword">Next</span>
	Workbooks<span class="token punctuation">.</span>Open ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\123.xls"</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>代码解析：</p>
<p>Openfile 过程打开同一目录中的“123”工作簿。</p>
<p>第 3 行代码利用 Workbook 对象的 Count 属性取得打开工作簿的数目，使用 For...Next 语句遍历所有打开的工作簿。遍历工作簿除了使用 For...Next 语句外还可以使用 For...Each...Next 语句来遍历 Workbook 对象集合中的所有元素。</p>
<p>第 4 行到第 8 行代码遍历所有打开的工作簿，如果 Workbook 对象集合中存在“123”工作簿，说明“123”工作簿已打开，则显示一条如图 42-1 所示的提示信息。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/42-1.png" alt="" loading="lazy"></p>
<p><u>图 42-1</u>	工作簿已打开提示</p>
</div>
<p>Open 方法应用于 Workbooks 对象时打开一个工作簿，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>Open<span class="token punctuation">(</span>FileName<span class="token punctuation">,</span> UpdateLinks<span class="token punctuation">,</span> <span class="token keyword">ReadOnly</span><span class="token punctuation">,</span> Format<span class="token punctuation">,</span> Password<span class="token punctuation">,</span> WriteResPassword<span class="token punctuation">,</span> IgnoreReadOnlyRecommended<span class="token punctuation">,</span> Origin<span class="token punctuation">,</span> Delimiter<span class="token punctuation">,</span> Editable<span class="token punctuation">,</span> Notify<span class="token punctuation">,</span> Converter<span class="token punctuation">,</span> AddToMru<span class="token punctuation">,</span> Local<span class="token punctuation">,</span> CorruptLoad<span class="token punctuation">)</span>

参数expression是必需的，返回一个Workbooks对象
参数FileName是必需的，要打开的工作簿的文件名。
参数UpdateLinks是可选的，指定文件中链接的更新方式。如果省略本参数，则提示用户选择链接的更新方式。否则，该参数的取值应为表格<span class="token number">42</span><span class="token operator">-</span><span class="token number">1</span>中的某个值。
参数<span class="token keyword">ReadOnly</span>是可选的，如果该值为<span class="token boolean">True</span>，则以只读模式打开工作簿。
参数Format是可选的，如果Microsoft Excel正在打开一个文本文件，则该参数用于指定分隔字符，如表格<span class="token number">42</span><span class="token operator">-</span><span class="token number">2</span>所示。如果省略本参数，则使用当前的分隔符。
参数Password是可选的，该字符串指定打开一个受保护工作簿的密码。如果省略该参数并且指定工作簿已设置密码，则提示用户输入密码。
参数WriteResPassword是可选的，该字符串为一个写保护工作簿的写入权密码。如果省略该参数并且指定工作簿已设置密码，则提示用户输入密码。
参数IgnoreReadOnlyRecommended是可选的，如果该值为<span class="token boolean">True</span>，则设置Microsoft Excel不显示建议只读消息（如果该工作簿以<span class="token string">“建议只读”</span>选项保存）。
参数Origin是可选的，如果文件为文本文件，则该参数用于指示该文件来源于何种操作系统。
参数Delimiter是可选的，如果该文件为文本文件并且Format参数为 <span class="token number">6</span>，则此参数用于指定用作分隔符的字符。
参数Editable是可选的，如果该文件为Microsoft Excel <span class="token number">4.0</span>加载宏，则该参数的值为<span class="token boolean">True</span>时可打开该加载宏以便在窗口中看到。如果该参数的值为<span class="token boolean">False</span>或者省略该参数，则该加载宏以隐藏方式打开，并且无法设为可见。
参数Notify是可选的，当该文件不能以可读写模式打开时，如果该参数的值为<span class="token boolean">True</span>，则可将该文件添加到文件通知列表。
参数Converter是可选的，打开文件时试用的第一个文件转换器的索引号。
参数AddToMru是可选的，如果该值为<span class="token boolean">True</span>，则将该工作簿添加到最近使用的文件列表中。默认值为<span class="token boolean">False</span>。
参数Local是可选的，如果该值为<span class="token boolean">True</span>，则以Microsoft Excel（包括控制面版设置）的语言保存文件。如果该值为<span class="token boolean">False</span>（默认值），则以 Visual Basic <span class="token keyword">for</span> Applications <span class="token punctuation">(</span>VBA<span class="token punctuation">)</span>的语言保存文件，其中Visual Basic <span class="token keyword">for</span> Applications <span class="token punctuation">(</span>VBA<span class="token punctuation">)</span>为典型安装的美国英语版本，除非VBA项目的Workbooks<span class="token punctuation">.</span>Open来自旧的国际化的XL5<span class="token operator">/</span><span class="token number">95</span> VBA项目。
参数CorruptLoad是可选的，可为以下常量之一：xlNormalLoad、xlRepairFile 和 xlExtractData。如果未指定任何值，则默认值通常为普通状态。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p><u>表格 42-1</u>	UpdateLinks 参数值</p>
<table>
<thead>
<tr>
<th>值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>不更新任何引用</td>
</tr>
<tr>
<td>1</td>
<td>更新外部引用，但不更新远程引用</td>
</tr>
<tr>
<td>2</td>
<td>更新远程引用，但不更新外部引用</td>
</tr>
<tr>
<td>3</td>
<td>同时更新远程引用和外部引用</td>
</tr>
</tbody>
</table>
<p><u>表格 42-2</u>	Format 参数值</p>
<table>
<thead>
<tr>
<th>值</th>
<th>分隔符</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>制表符</td>
</tr>
<tr>
<td>2</td>
<td>逗号</td>
</tr>
<tr>
<td>3</td>
<td>空格</td>
</tr>
<tr>
<td>4</td>
<td>分号</td>
</tr>
<tr>
<td>5</td>
<td>没有分隔符</td>
</tr>
<tr>
<td>6</td>
<td>自定义字符(请参阅 Delimiter 参数)</td>
</tr>
</tbody>
</table>
<h2 id="_43、判断指定工作簿是否打开" tabindex="-1"><a class="header-anchor" href="#_43、判断指定工作簿是否打开" aria-hidden="true">#</a> 43、判断指定工作簿是否打开</h2>
<h3 id="_1-遍历-workbooks-集合方法" tabindex="-1"><a class="header-anchor" href="#_1-遍历-workbooks-集合方法" aria-hidden="true">#</a> 1）遍历 Workbooks 集合方法</h3>
<p>通过遍历当前应用程序所有已打开的工作簿文件（Workbooks 集合），判断指定名称的工作簿是否打开，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> WorkbookIsOpen_1<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> Wb <span class="token keyword">As</span> Workbook
	<span class="token keyword">Dim</span> myWb <span class="token keyword">As</span> <span class="token keyword">String</span>
	myWb <span class="token operator">=</span> <span class="token string">"Excel Home.xls"</span>
	<span class="token keyword">For</span> <span class="token keyword">Each</span> Wb <span class="token keyword">In</span> Workbooks
		<span class="token keyword">If</span> Wb<span class="token punctuation">.</span>Name <span class="token operator">=</span> myWb <span class="token keyword">Then</span>
			MsgBox <span class="token string">"工作簿"</span> <span class="token operator">&amp;</span> myWb <span class="token operator">&amp;</span> <span class="token string">"已经被打开!"</span>
			<span class="token keyword">Exit</span> <span class="token keyword">Sub</span>
		<span class="token keyword">End</span> <span class="token keyword">If</span>
	<span class="token keyword">Next</span>
	MsgBox <span class="token string">"工作簿"</span> <span class="token operator">&amp;</span> myWb <span class="token operator">&amp;</span> <span class="token string">"没有被打开!"</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>代码解析：</p>
<p>WorkbookIsOpen_1 过程通过遍历当前应用程序中所有已打开的工作簿文件（Workbooks 集合），判断“Excel Home”工作簿是否打开。</p>
<p>第 5 行代码使用 For...Each...Next 语句来遍历 Workbook 对象集合中的所有元素。</p>
<p>第 6 行到第 8 行代码如果 Workbook 对象集合包含“Excel Home.xls”工作簿名称，说明文件已打开，使用 Exit Sub 语句结束代码的运行。</p>
<p>第 11 行代码如果运行到此行代码说明“Excel Home.xls”工作簿没有被打开。</p>
<h3 id="_2-错误处理方法" tabindex="-1"><a class="header-anchor" href="#_2-错误处理方法" aria-hidden="true">#</a> 2）错误处理方法</h3>
<p>使用错误处理程序判断指定名称的工作簿是否打开，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> WorkbookIsOpen_2<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> Wb <span class="token keyword">As</span> Workbook
	<span class="token keyword">Dim</span> myWb <span class="token keyword">As</span> <span class="token keyword">String</span>
	myWb <span class="token operator">=</span> <span class="token string">"Excel Home.xls"</span>
	Err<span class="token punctuation">.</span>Clear
	<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">GoTo</span> line
	<span class="token keyword">Set</span> Wb <span class="token operator">=</span> Application<span class="token punctuation">.</span>Workbooks<span class="token punctuation">(</span>myWb<span class="token punctuation">)</span>
	MsgBox <span class="token string">"工作簿"</span> <span class="token operator">&amp;</span> myWb <span class="token operator">&amp;</span> <span class="token string">"已经被打开!"</span>
	<span class="token keyword">Set</span> Wb <span class="token operator">=</span> <span class="token boolean">Nothing</span>
	<span class="token keyword">Exit</span> <span class="token keyword">Sub</span>
line<span class="token punctuation">:</span>
	MsgBox <span class="token string">"工作簿"</span> <span class="token operator">&amp;</span> myWb <span class="token operator">&amp;</span> <span class="token string">"没有被打开!"</span>
	<span class="token keyword">Set</span> Wb <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>代码解析：</p>
<p>WorkbookIsOpen_2 过程使用错误处理程序判断“Excel Home”工作簿是否打开。</p>
<p>第 5 行代码使用 Clear 方法清除 Err 对象的所有属性设置。</p>
<p>第 6 行代启动错误处理程序，如果第7行代码发生错误则执行 line 行后面的代码。</p>
<p>第 7 行代码使用 Set 语句将 Workbook 对象引用赋给变量 Wb，如果 “Excel Home.xls”工作簿没有被打开将发生下标越界错误，此时执行第 12、13 行代码，否则执行第 8、9 行代码。</p>
<h2 id="_44、禁用宏则关闭工作簿" tabindex="-1"><a class="header-anchor" href="#_44、禁用宏则关闭工作簿" aria-hidden="true">#</a> 44、禁用宏则关闭工作簿</h2>
<p>通常情况下，当应用程序的宏安全性的安全级别设置为“中”时，打开包含 Microsoft Excel 4.0 版的宏的工作簿，将显示如图 44-1 所示的“安全警告”对话框。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/44-1.png" alt="" loading="lazy"></p>
<p><u>图 44-1</u>	安全警告对话框</p>
</div>
<p>如果用户选择“禁用宏”按钮，则会显示如图 44-2 所示的警告消息框，当用户选择“否”时，不能打开该工作簿；用户选择“是”时，打开该工作簿，但 VBA 宏被禁止，而 Microsoft Excel 4.0 版的宏未被禁止。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/44-2.png" alt="" loading="lazy"></p>
<p><u>图 44-2</u>	Microsoft Excel 4.0 宏警告对话框</p>
</div>
<p>我们可以利用禁用 VBA 宏不能禁止 Microsoft Excel 4.0 版的宏这个特点，使用 Microsoft Excel 4.0 版的宏来实现禁用宏则关闭工作簿的功能。</p>
<ul>
<li>
<p>步骤 1	新建或打开需要添加此项功能的工作簿文件。</p>
</li>
<li>
<p>步骤 2	按 &lt;Ctrl+F11&gt; 组合键为工作簿添加一个宏表，添加的宏表名称默认为“Macro1”。</p>
</li>
<li>
<p>步骤 3	在宏表“Macro1”的 A1 至 A7 单元格中输入下面的内容。</p>
</li>
</ul>
<p>完成后的宏表如图 44-3 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/44-3.png" alt="" loading="lazy"></p>
<p><u>图 44-3</u>	完成输入后的宏表</p>
</div>
<p>代码解析：</p>
<p>Microsoft Excel 4.0 宏函数以等号（=）开始，其他不是由等号开始的内容将被视作注释。通常用作定义的宏名称或者作为宏函数实现功能的注释内容设置为斜体字样以示区别，如图 44-3 中单元格 A1 所示。</p>
<p>第 2 行代码关闭错误检查功能。如果关闭错误检查，那么当宏执行遇到错误时，Microsoft Excel  将不予理会而继续执行。</p>
<p>第 3 行到第 6 行代码使用If函数与 End.If 函数构成条件判断语句。其中，第 3 行中的语句通过检查宏函数 RUN(&quot;TestMacro&quot;) 的返回错误类型是否为 4（禁用宏时的返回结果），判断工作簿是否禁用了宏功能。如果第 3 行的结果为 True，则执行下面的语句。</p>
<p>在第 4、5 行代码，插入几个空格来表示相关代码之间的层次结构。第 4 行中的代码显示一个消息框。第 5 行中的代码关闭当前活动工作簿，设置参数值为 Fasle 表示关闭时工作簿时不保存对其所作的更改。</p>
<p>第 7 行代码终止当前代码的执行。Microsoft Excel 4.0 宏要求每个宏必须使用 RETURN 或 HALT 函数结束。</p>
<ul>
<li>步骤 4	为每个表添加工作表级别的名称“Auto_Activate”，并将引用都指向宏表“Macro1”的 A2 单元格。“Auto_Activate”是一个自动宏，表被激活时自动执行。</li>
</ul>
<p>添加工作表级别的名称的方法如下：选择一张工作表，假设为表“Sheet1”，单击菜单“插入”→“名称”→“定义名称”。在“定义名称”对话框中添加名称，如图 44-4 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/44-4.png" alt="" loading="lazy"></p>
<p><u>图 44-4</u>	定义工作表级别的名称</p>
</div>
<p>输入完成后单击“确定”按钮，完成一张工作表的“Auto_Activate”的定义。完成定义后的名称将在“定义名称”对话框中显示，如图 44-5 所示。依次为每个表添加“Auto_Activate”名称。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/44-5.png" alt="" loading="lazy"></p>
<p><u>图 44-5</u>	名称对话框中的工作表级名称</p>
</div>
<p>此外，使用 VBA 也可以实现同样的操作，并且使用 VBA 的好处是能够隐藏名称，以避免名称被删除或修改。代码如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> AddPrivateNames<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> sht <span class="token keyword">As</span> <span class="token keyword">Object</span>
	<span class="token keyword">For</span> <span class="token keyword">Each</span> sht <span class="token keyword">In</span> Sheets
		ThisWorkbook<span class="token punctuation">.</span>Names<span class="token punctuation">.</span>Add sht<span class="token punctuation">.</span>Name <span class="token operator">&amp;</span> <span class="token string">"!Auto_Activate"</span><span class="token punctuation">,</span> <span class="token operator">_</span>
<span class="token string">"=Macro1!$A$2"</span><span class="token punctuation">,</span> <span class="token boolean">False</span>
	<span class="token keyword">Next</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul>
<li>步骤 5	运行下面的代码，隐藏宏表工作表：</li>
</ul>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> HideMacroSheet<span class="token punctuation">(</span><span class="token punctuation">)</span>
	ThisWorkbook<span class="token punctuation">.</span>Excel4MacroSheets<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Visible <span class="token operator">=</span> xlSheetHidden
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>步骤 6	保存工作簿。</li>
</ul>
<p>当应用程序的宏安全性的安全级设置为“中”时，如果用户打开该工作簿文件并选择“禁用宏”，将显示如图 44-2 所示的警告消息框。当用户选择“是”时，活动工作表上的自动宏“Auto_Activate”将被执行，执行结果显示如图 44-6 所示的消息框，当用户选择“确定”按钮后，将强制关闭该工作簿文件。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/44-6.png" alt="" loading="lazy"></p>
<p><u>图 44-6</u>	警告消息框</p>
</div>
<h2 id="_45、关闭工作簿不显示保存对话框" tabindex="-1"><a class="header-anchor" href="#_45、关闭工作簿不显示保存对话框" aria-hidden="true">#</a> 45、关闭工作簿不显示保存对话框</h2>
<p>当用户更改工作簿后，没有进行保存操作而直接关闭工作簿时，将显示如图 45-1 所示的消息框，提示用户是否保存对工作簿的更改，如果希望不显示该消息框而直接关闭关闭工作簿，可以在关闭时进行相应的设置。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/45-1.png" alt="" loading="lazy"></p>
<p><u>图 45-1</u>	提示保存对话框</p>
</div>
<h3 id="_1-使用-close-方法关闭工作簿" tabindex="-1"><a class="header-anchor" href="#_1-使用-close-方法关闭工作簿" aria-hidden="true">#</a> 1）使用 Close 方法关闭工作簿</h3>
<p>使用 Close 方法关闭工作簿的，可以在 Close 方法中指定相应的参数，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> wbClose_1<span class="token punctuation">(</span><span class="token punctuation">)</span>
	ThisWorkbook<span class="token punctuation">.</span>Close SaveChanges<span class="token punctuation">:</span><span class="token operator">=</span><span class="token boolean">False</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>代码解析：</p>
<p>wbClose_1 过程使用 Close 方法关闭工作簿，并放弃所有对工作簿的更改。</p>
<p>应用于 Workbook 对象的 Close 方法关闭对象，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>Close<span class="token punctuation">(</span>SaveChanges<span class="token punctuation">,</span> Filename<span class="token punctuation">,</span> RouteWorkbook<span class="token punctuation">)</span>

其中SaveChanges参数是可选的，如果工作簿没有改变则忽略此参数；如果工作簿发生了改变并且在另外的窗口中也打开了该工作簿，则仍然忽略此参数；如果工作簿发生了改变并且没有在另外的窗口中打开，则此参数将指定是否在工作簿中保存所发生的更改。取值与操作如表格 <span class="token number">45</span><span class="token number">1</span>所示：
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><u>表格 45-1</u>	SaveChanges 参数值的作用</p>
<table>
<thead>
<tr>
<th>值</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>True</td>
<td>将改变保存到工作簿。如果该工作簿尚未命名，则使用 FileName 指定的名称。如果省略 FileName 参数，则要求用户输入文件名。</td>
</tr>
<tr>
<td>False</td>
<td>不将改变保存到此文件。</td>
</tr>
<tr>
<td>省略</td>
<td>显示一个对话框，要求用户决定是否保存所做的更改。</td>
</tr>
</tbody>
</table>
<p>如果希望在关闭工作簿时自动保存更改，将 SaveChanges 参数值设置为 True 即可。</p>
<p>还可以在使用 Close 方法关闭工作簿时设置 Workbook 对象的 Saved 属性，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> wbClose_2<span class="token punctuation">(</span><span class="token punctuation">)</span>
	ThisWorkbook<span class="token punctuation">.</span>Saved <span class="token operator">=</span> <span class="token boolean">True</span>
	ThisWorkbook<span class="token punctuation">.</span>Close 
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>代码解析：</p>
<p>wbClose_2 过程使用 Close 方法关闭工作簿，并放弃所有对工作簿的更改。</p>
<p>Workbook 对象的 Saved 属性指示工作簿从上次保存至今是否发生过更改，如果工作簿进行了更改，则该属性值为 False，否则为 True。应用程序在关闭工作簿之前判断该属性的值，如果其值为 False，则显示提示是否保存的消息框，询问用户是否保存对工作簿所做的更改。</p>
<p>第 2 行代码将该属性的值设置为 True，使Excel认为已经保存了对工作簿所作的更改（实际上没有保存更改），从而不再显示提示是否保存的消息框。</p>
<p>如果需要保存对工作簿所作的更改，那么应该在 Close 方法之前使用 Save 方法保存工作簿，代码如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> wbClose_3<span class="token punctuation">(</span><span class="token punctuation">)</span>
	ThisWorkbook<span class="token punctuation">.</span>Save
	ThisWorkbook<span class="token punctuation">.</span>Close 
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>代码解析：</p>
<p>wbClose_3 过程使用 Save 方法保存工作簿所做的更改，然后使用 Close 方法关闭工作簿。</p>
<h3 id="_2-单击工作簿关闭按钮关闭工作簿" tabindex="-1"><a class="header-anchor" href="#_2-单击工作簿关闭按钮关闭工作簿" aria-hidden="true">#</a> 2）单击工作簿关闭按钮关闭工作簿</h3>
<p>如果是通过单击工作簿的关闭按钮等操作关闭工作簿的，则使用 BeforeClose 事件过程来控制，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> Workbook_BeforeClose<span class="token punctuation">(</span>Cancel <span class="token keyword">As</span> <span class="token keyword">Boolean</span><span class="token punctuation">)</span>
	<span class="token keyword">Me</span><span class="token punctuation">.</span>Saved <span class="token operator">=</span> <span class="token boolean">True</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>代码解析：</p>
<p>工作簿的 Workbook_BeforeClose 事件，将工作簿的 Saved 属性设置为 True，不保存更改而直接关闭工作簿，且不显示提示保存的消息框。</p>
<p>如果希望保存对工作簿的更改，则在 Workbook_BeforeClose 事件中使用 Save 方法保存工作簿，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> Workbook_BeforeClose<span class="token punctuation">(</span>Cancel <span class="token keyword">As</span> <span class="token keyword">Boolean</span><span class="token punctuation">)</span>
	<span class="token keyword">Me</span><span class="token punctuation">.</span>Save
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_46、禁用工作簿的关闭按钮" tabindex="-1"><a class="header-anchor" href="#_46、禁用工作簿的关闭按钮" aria-hidden="true">#</a> 46、禁用工作簿的关闭按钮</h2>
<p>一般情况下，用户可以通过菜单“文件”→“关闭”、工作簿窗口右上角的“关闭窗口”按钮或者任务栏中图标右键菜单中的“关闭”菜单项关闭工作簿。如果希望禁用上述关闭工作簿的功能，而只能通过代码关闭工作簿，则可以在相应的工作簿事件中实现，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Dim</span> BClose <span class="token keyword">As</span> <span class="token keyword">Boolean</span>
<span class="token keyword">Private</span> <span class="token keyword">Sub</span> Workbook_BeforeClose<span class="token punctuation">(</span>Cancel <span class="token keyword">As</span> <span class="token keyword">Boolean</span><span class="token punctuation">)</span>
	<span class="token keyword">If</span> BClose <span class="token operator">=</span> <span class="token boolean">False</span> <span class="token keyword">Then</span>
		Cancel <span class="token operator">=</span> <span class="token boolean">True</span>
		MsgBox <span class="token string">"此功能已经被禁止，请使用""关闭""按钮关闭工作簿!"</span><span class="token punctuation">,</span> vbExclamation<span class="token punctuation">,</span> <span class="token string">"提示"</span>
	<span class="token keyword">End</span> <span class="token keyword">If</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
<span class="token keyword">Public</span> <span class="token keyword">Sub</span> CloseWorkbook<span class="token punctuation">(</span><span class="token punctuation">)</span>
	BClose <span class="token operator">=</span> <span class="token boolean">True</span>
	<span class="token keyword">Me</span><span class="token punctuation">.</span>Close
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>代码解析：</p>
<p>第 1 行代码在模块顶部声明变量 BClose 为 Boolean 类型，默认初始值为 False。</p>
<p>第 2 行到第 7 行代码工作簿的 BeforeClose 事件过程，通过变量 BClose 的当前值决定是否能够关闭工作簿，只有当 BClose 的值为 True 时，才允许关闭工作簿。如果变量 BClose 的值为 False 时将参数 Cancel 的值设置为 True，以禁止关闭操作。</p>
<p>第 8 行到第 11 行代码 CloseWorkbook 过程，将变量 BClose 的当前值设置为 True 后使用 Close 方法关闭工作簿。关于 Close 方法请参阅 45-1。</p>
<p>在添加以上代码后，用户只能通过调用 CloseWorkbook 过程关闭工作簿。如果通过菜单“文件”→“关闭”或者单击工作簿窗口右上角的“关闭窗口”按钮关闭工作簿，将显示如图 46-1 所示的消息框。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/46-1.png" alt="" loading="lazy"></p>
<p><u>图 46-1</u>	禁用关闭按钮</p>
</div>
<h2 id="_47、保存工作簿的方法" tabindex="-1"><a class="header-anchor" href="#_47、保存工作簿的方法" aria-hidden="true">#</a> 47、保存工作簿的方法</h2>
<h3 id="_1-使用-save-方法" tabindex="-1"><a class="header-anchor" href="#_1-使用-save-方法" aria-hidden="true">#</a> 1）使用 Save 方法</h3>
<p>使用 Workbook 对象的 Save 方法保存工作簿的更改，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> SaveWork<span class="token punctuation">(</span><span class="token punctuation">)</span>
	ThisWorkbook<span class="token punctuation">.</span>Save
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>代码解析：</p>
<p>SaveWork 过程保存代码所在的工作簿的修改。</p>
<p>Save 方法保存指定工作簿所做的更改，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>Save

参数expression是必需的，该表达式返回一个Workbook对象。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>如果是第一次保存工作簿，请使用 SaveAs 方法为该文件指定文件名，请参阅 47-2。</p>
<h3 id="_2-直接保存为另一文件名" tabindex="-1"><a class="header-anchor" href="#_2-直接保存为另一文件名" aria-hidden="true">#</a> 2）直接保存为另一文件名</h3>
<p>如果需要将工作簿另存为另一个文件名，可以使用Workbook对象的 SaveAs 方法，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> SaveAsWork<span class="token punctuation">(</span><span class="token punctuation">)</span>
	ThisWorkbook<span class="token punctuation">.</span>SaveAs Filename<span class="token punctuation">:</span><span class="token operator">=</span>ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\123.xls"</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>代码解析：</p>
<p>SaveAsWork 过程将代码所在的工作簿保存为“123”工作簿文件。</p>
<p>Workbook 对象的 SaveAs 方法使用另外一个不同的文件名保存对工作簿所做的更改，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>SaveAs<span class="token punctuation">(</span>FileName<span class="token punctuation">,</span>FileFormat<span class="token punctuation">,</span>Password<span class="token punctuation">,</span>WriteResPassword<span class="token punctuation">,</span>ReadOnlyRecommended<span class="token punctuation">,</span>CreateBackup<span class="token punctuation">,</span>AccessMode<span class="token punctuation">,</span>ConflictResolution<span class="token punctuation">,</span>AddToMru<span class="token punctuation">,</span>TextCodepage<span class="token punctuation">,</span>TextVisualLayout<span class="token punctuation">,</span>Local<span class="token punctuation">)</span>

其中，参数Filename可选，表示要保存文件的文件名的字符串。可包含完整路径，如果不指定路径，将文件保存到当前文件夹中。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>使用 SaveAs 方法将工作簿另存为新文件后，将关闭原工作簿文件。</p>
<h3 id="_3-保存工作簿副本" tabindex="-1"><a class="header-anchor" href="#_3-保存工作簿副本" aria-hidden="true">#</a> 3）保存工作簿副本</h3>
<p>如果用户希望工作簿在保存为另一文件名后，能继续编辑原工作簿，那么可以使用 SaveCopyAs 方法，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> SaveCopyWork<span class="token punctuation">(</span><span class="token punctuation">)</span>
	ThisWorkbook<span class="token punctuation">.</span>SaveCopyAs ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\123.xls"</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>代码解析：</p>
<p>SaveCopyWork 过程使用 SaveCopyAs 方法保存代码所在的工作簿副本，并指定其名称。</p>
<p>SaveCopyAs 方法将指定工作簿的副本保存到文件，但不修改内存中的打开工作簿，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>SaveCopyAs<span class="token punctuation">(</span>Filename<span class="token punctuation">)</span>

参数Filename是必需的，用于指定工作簿副本的文件名。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_48、保存指定工作表为工作簿文件" tabindex="-1"><a class="header-anchor" href="#_48、保存指定工作表为工作簿文件" aria-hidden="true">#</a> 48、保存指定工作表为工作簿文件</h2>
<p>如果需要将工作簿中的工作表单独保存为一个工作簿文件，可以使用 Worksheet 对象的 Copy 方法，将指定的工作表复制到一个新建的工作簿，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> SheetCopy<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">GoTo</span> line
	ActiveSheet<span class="token punctuation">.</span>Copy
	ActiveWorkbook<span class="token punctuation">.</span>Close SaveChanges<span class="token punctuation">:</span><span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> Filename<span class="token punctuation">:</span><span class="token operator">=</span>ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\SheetCopy.xls"</span>
	<span class="token keyword">Exit</span> <span class="token keyword">Sub</span>
line<span class="token punctuation">:</span>
	ActiveWorkbook<span class="token punctuation">.</span>Close <span class="token boolean">False</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>代码解析：</p>
<p>SheetCopy 过程将活动工作表单独保存为一个工作簿文件。</p>
<p>第 2 行代码错误处理语句。备份过程中，如果已存在同名工作簿，会出现如所示的提示，如果选择了“否”或“取消”，此时新工作簿已经建立，在执行 4 行代码时发生错误，使程序中断，所以使用 GoTo 语句执行第 7 行代码，关闭新建立的工作簿并且不保存。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/48-1.png" alt="" loading="lazy"></p>
<p><u>图 48-1</u>	同名工作簿提示</p>
</div>
<p>第 3 行代码使用 Copy 方法新建一个工作簿，新工作簿中包含复制的工作表。应用于 Worksheet 对象的 Copy 方法将指定工作表复制到工作簿的另一位置，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>Copy <span class="token punctuation">(</span>Before<span class="token punctuation">,</span> After<span class="token punctuation">)</span>

其中，参数Before是可选的，用来指定工作表，复制的工作表将置于此工作表之前。参数After是可选的，用来指定工作表，复制的工作表将置于此工作表之后。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>不能同时指定 Before 参数和 After 参数。当 Copy 方法省略参数时，应用程序将新建一个空工作簿（新建工作簿将成为活动窗口），并将 Copy 方法引用的工作表复制到该空工作簿中。</p>
<p>第 4 行代码使用 Workbook 对象的 Close 方法关闭新建的工作簿。应用于 Workbooks 集合和 Workbook 对象的 Close 方法请参阅 45-1。</p>
<p>如果需要将工作簿中的几个工作表单独保存为一个工作簿文件时，可以以数组的形式指定要复制的工作表，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> ArrSheetCopy<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">GoTo</span> line
	Worksheets<span class="token punctuation">(</span>Array<span class="token punctuation">(</span><span class="token string">"Sheet1"</span><span class="token punctuation">,</span> <span class="token string">"Sheet2"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Copy
	ActiveWorkbook<span class="token punctuation">.</span>SaveAs Filename<span class="token punctuation">:</span><span class="token operator">=</span>ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\ArrSheetCopy.xls"</span>
	ActiveWorkbook<span class="token punctuation">.</span>Close SaveChanges<span class="token punctuation">:</span><span class="token operator">=</span><span class="token boolean">True</span>
	<span class="token keyword">Exit</span> <span class="token keyword">Sub</span>
line<span class="token punctuation">:</span>
	ActiveWorkbook<span class="token punctuation">.</span>Close <span class="token boolean">False</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>代码解析：</p>
<p>ArrSheetCopy 过程将“Sheet1”和“Sheet2”工作表单独保存为一个工作簿文件。</p>
<p>第 4 行代码使用 SaveAs 方法保存活动工作簿，关于 SaveAs 方法请参阅 47-2。</p>
<h2 id="_49、打印预览时不触发事件" tabindex="-1"><a class="header-anchor" href="#_49、打印预览时不触发事件" aria-hidden="true">#</a> 49、打印预览时不触发事件</h2>
<p>在工作表打印之前或进行打印预览时，会触发工作簿的 BeforePrint 事件。在某些情况下希望在打印预览时能禁止触发该事件，例如如图 49-1 所示的工作表中，用户在打印时使用下面的代码将流水号的数值自动加 1。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> Workbook_BeforePrint<span class="token punctuation">(</span>Cancel <span class="token keyword">As</span> <span class="token keyword">Boolean</span><span class="token punctuation">)</span>
	Sheet1<span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"J1"</span><span class="token punctuation">)</span> <span class="token operator">=</span> Sheet1<span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"J1"</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container center">
<p><img src="@source/project/Excel/assets/49-1.png" alt="" loading="lazy"></p>
<p><u>图 49-1</u>	自动增加流水号</p>
</div>
<p>但是在打印预览时并不希望流水号的数值自动加 1，此时，需要修改系统的打印预览功能，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> Workbook_Open<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> CmdCtrls <span class="token keyword">As</span> CommandBarControls
	<span class="token keyword">Dim</span> Cmd <span class="token keyword">As</span> CommandBarControl
	<span class="token keyword">Set</span> CmdCtrls <span class="token operator">=</span> Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">.</span>FindControls<span class="token punctuation">(</span>ID<span class="token punctuation">:</span><span class="token operator">=</span><span class="token number">109</span><span class="token punctuation">)</span>
	<span class="token keyword">For</span> <span class="token keyword">Each</span> Cmd <span class="token keyword">In</span> CmdCtrls
		Cmd<span class="token punctuation">.</span>OnAction <span class="token operator">=</span> <span class="token string">"ThisWorkbook.MyPrint"</span>
	<span class="token keyword">Next</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>代码解析：</p>
<p>工作簿的 Open 事件过程，在打开工作簿时，修改系统中所有打印预览命令按钮和菜单项的动作，指定其 OnAction 属性为 ThisWorkbook 代码窗口中的公用过程 MyPrint。</p>
<p>第 4 行代码使用 FindControls 方法将所有打印预览命令按钮和菜单项赋给变量 CmdCtrls，FindControls 方法返回符合指定条件的 CommandBarControls 集合，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>FindControls<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">,</span> Id<span class="token punctuation">,</span> Tag<span class="token punctuation">,</span> Visible<span class="token punctuation">)</span>

其中参数expression是必需的，该表达式返回一个CommandBars集合。
参数Id是可选的，要查找控件的标识符。打印预览命令控件的标识符为<span class="token number">109</span>。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>第 5 行到第 7 行代码遍历所有打印预览命令控件，指定其 OnAction 属性为 ThisWorkbook 代码窗口中的公用过程 MyPrint。OnAction 属性返回或设置一个 Visual Basic 的过程名，该过程在用户单击或更改某命令栏控件的值时运行。</p>
<p>MyPrint 过程代码如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Public</span> <span class="token keyword">Sub</span> MyPrint<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">With</span> Application
		<span class="token punctuation">.</span>EnableEvents <span class="token operator">=</span> <span class="token boolean">False</span>
		<span class="token punctuation">.</span>ActiveSheet<span class="token punctuation">.</span>PrintPreview EnableChanges<span class="token punctuation">:</span><span class="token operator">=</span><span class="token boolean">False</span>
		<span class="token punctuation">.</span>EnableEvents <span class="token operator">=</span> <span class="token boolean">True</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>代码解析：</p>
<p>MyPrint 过程通过禁止对象事件，使工作表打印预览时不触发工作簿的 BeforePrint 事件。</p>
<p>第 3 行代码将 Application 对象的 EnableEvents 属性设置为 False，禁用事件，使事件不能触发。</p>
<p>第 4 行代码使用 PrintPreview 方法对工作表执行打印预览。PrintPreview 方法以打印效果显示指定的对象，该方法只有一个参数 EnableChanges，用来指定是否可以修改页面设置，当其值为 False 时，禁止在打印预览时修改页面设置，默认值为 True。</p>
<p>第 5 行代码将 Application 对象的 EnableEvents 属性设置为 True，启用事件。</p>
<p>为了在工作簿时恢复默认的打印预览设置，在 ThisWorkbook 代码窗口写入以下代码：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> Workbook_BeforeClose<span class="token punctuation">(</span>Cancel <span class="token keyword">As</span> <span class="token keyword">Boolean</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> CmdCtrls <span class="token keyword">As</span> CommandBarControls
	<span class="token keyword">Dim</span> Cmd <span class="token keyword">As</span> CommandBarControl
	<span class="token keyword">Set</span> CmdCtrls <span class="token operator">=</span> Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">.</span>FindControls<span class="token punctuation">(</span>ID<span class="token punctuation">:</span><span class="token operator">=</span><span class="token number">109</span><span class="token punctuation">)</span>
	<span class="token keyword">For</span> <span class="token keyword">Each</span> Cmd <span class="token keyword">In</span> CmdCtrls
		Cmd<span class="token punctuation">.</span>OnAction <span class="token operator">=</span> <span class="token string">""</span>
	<span class="token keyword">Next</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>代码解析：</p>
<p>工作簿的 BeforeClose 事件过程，关闭工作簿时将所有打印预览命令按钮和菜单项的 OnAction 属性恢复为默认的动作。</p>
<p>经过以上设置，工作表只有在进行打印时“流水号”数值才自动加 1。</p>
<h2 id="_50、设置工作簿文档属性信息" tabindex="-1"><a class="header-anchor" href="#_50、设置工作簿文档属性信息" aria-hidden="true">#</a> 50、设置工作簿文档属性信息</h2>
<p>使用 DocumentProperties 集合对象的 BuiltinDocumentProperties 属性可以设置文档的属性信息，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> WbBuiltin<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">With</span> ThisWorkbook
		<span class="token punctuation">.</span>BuiltinDocumentProperties<span class="token punctuation">(</span><span class="token string">"Title"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"Wordbook（工作簿）对象"</span>
		<span class="token punctuation">.</span>BuiltinDocumentProperties<span class="token punctuation">(</span><span class="token string">"Subject"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"设置工作簿的文档属性信息"</span>
		<span class="token punctuation">.</span>BuiltinDocumentProperties<span class="token punctuation">(</span><span class="token string">"Author"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"yuanzhuping"</span>
		<span class="token punctuation">.</span>BuiltinDocumentProperties<span class="token punctuation">(</span><span class="token string">"Company"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"tzzls"</span>
		<span class="token punctuation">.</span>BuiltinDocumentProperties<span class="token punctuation">(</span><span class="token string">"Comments"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"工作簿文档属性信息"</span>
		<span class="token punctuation">.</span>BuiltinDocumentProperties<span class="token punctuation">(</span><span class="token string">"Keywords"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"Excel VBA"</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
	MsgBox <span class="token string">"工作簿文档属性信息设置完毕！"</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>代码解析：</p>
<p>WbBuiltin 过程设置代码所在工作簿的属性信息，应用于 Workbook 对象的BuiltinDocumentProperties 属性返回一个 DocumentProperties 集合，该集合代表指定工作簿的所有内置文档属性，本属性返回的是内置文档属性的整个集合。通过指定属性的名称或集合中的索引号返回集合中的单个成员（一个 DocumentProperty 对象）。</p>
<p>第 3 行代码设置标题，第 4 行代码设置主题，第 5 行代码设置作者，第 6 行代码设置公司，第 7 行代码设置备注，第 8 行代码设置关键字。</p>
<p>工作簿文档属性信息设置如图 50-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/50-1.png" alt="" loading="lazy"></p>
<p><u>图 50-1</u>	工作簿文档属性信息</p>
</div>
<h2 id="_51、不打开工作簿取得其他工作簿数据" tabindex="-1"><a class="header-anchor" href="#_51、不打开工作簿取得其他工作簿数据" aria-hidden="true">#</a> 51、不打开工作簿取得其他工作簿数据</h2>
<p>在 Excel 的使用过程中，经常需要引用其他工作簿的数据，而用户往往希望能在不打开工作簿或看似不打开工作簿的情况下取得其他工作簿中的数据，有以下几种方法可以实现。</p>
<h3 id="_1-使用公式" tabindex="-1"><a class="header-anchor" href="#_1-使用公式" aria-hidden="true">#</a> 1）使用公式</h3>
<p>如果需要引用的数据不是太多，可以使用公式取得引用工作簿中的工作表数据，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> CopyData_1<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> Temp <span class="token keyword">As</span> <span class="token keyword">String</span>
	Temp <span class="token operator">=</span> <span class="token string">"'"</span> <span class="token operator">&amp;</span> ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\[数据表.xls]Sheet1'!"</span>
	<span class="token keyword">With</span> Sheet1<span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"A1:F22"</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span>FormulaR1C1 <span class="token operator">=</span> <span class="token string">"="</span> <span class="token operator">&amp;</span> Temp <span class="token operator">&amp;</span> <span class="token string">"RC"</span>
		<span class="token punctuation">.</span>Value <span class="token operator">=</span> <span class="token punctuation">.</span>Value
	<span class="token keyword">End</span> <span class="token keyword">With</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>代码解析：</p>
<p>CopyData_1 过程在工作表中写入公式引用“数据表”中同一位置单元格中的数据。</p>
<p>第 3 行代码将引用工作簿的路径赋给变量 Temp。</p>
<p>第 5 行代码在作表中写入公式引用数据。</p>
<p>第 6 行代码将公式转换为数值。</p>
<h3 id="_2-使用-getobject-函数" tabindex="-1"><a class="header-anchor" href="#_2-使用-getobject-函数" aria-hidden="true">#</a> 2）使用 GetObject 函数</h3>
<p>使用 GetObject 函数来获取对指定的 Excel 工作表的引用，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> CopyData_2<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> Wb <span class="token keyword">As</span> Workbook
	<span class="token keyword">Dim</span> Temp <span class="token keyword">As</span> <span class="token keyword">String</span>
	Application<span class="token punctuation">.</span>ScreenUpdating <span class="token operator">=</span> <span class="token boolean">False</span>
	Temp <span class="token operator">=</span> ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\数据表.xls"</span>
	<span class="token keyword">Set</span> Wb <span class="token operator">=</span> GetObject<span class="token punctuation">(</span>Temp<span class="token punctuation">)</span>
		<span class="token keyword">With</span> Wb<span class="token punctuation">.</span>Sheets<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"A1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>CurrentRegion
			Range<span class="token punctuation">(</span><span class="token string">"A1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Resize<span class="token punctuation">(</span><span class="token punctuation">.</span>Rows<span class="token punctuation">.</span>Count<span class="token punctuation">,</span> <span class="token punctuation">.</span>Columns<span class="token punctuation">.</span>Count<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">.</span>Value
			Wb<span class="token punctuation">.</span>Close <span class="token boolean">False</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
	<span class="token keyword">Set</span> Wb <span class="token operator">=</span> <span class="token boolean">Nothing</span>
	Application<span class="token punctuation">.</span>ScreenUpdating <span class="token operator">=</span> <span class="token boolean">True</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>代码解析：</p>
<p>CopyData_2 过程使用 GetObject 函数来获取“数据表”工作簿中的数据。</p>
<p>第 4 行代码关闭屏幕更新加快运行速度。</p>
<p>第 5 行代码将引用工作簿的路径赋给变量 Temp。</p>
<p>第 6 行代码使用 Set 语句将 GetObject 函数返回的对象赋给对象变量 Wb。</p>
<p>GetObject 函数返回文件中的 ActiveX 对象的引用，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>GetObject<span class="token punctuation">(</span>[pathname] [<span class="token punctuation">,</span> <span class="token keyword">class</span>]<span class="token punctuation">)</span>

参数pathname是可选的，包含待检索对象的文件的全路径和名称。如果省略，则<span class="token keyword">class</span>参数是必需的。
参数<span class="token keyword">class</span>是可选的，代表该对象的类的字符串。
<span class="token keyword">Class</span>参数的格式为appname<span class="token punctuation">.</span>objecttype，语法的各个部分如表格 <span class="token number">51</span><span class="token number">1</span>所示。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><u>表格 51-1</u>	Class 参数语法的各个部分</p>
<table>
<thead>
<tr>
<th>部分</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>appname</td>
<td>必需的，提供该对象的应用程序名称。</td>
</tr>
<tr>
<td>objecttype</td>
<td>必需的，待创建对象的类型或类。</td>
</tr>
</tbody>
</table>
<p>第 7 行到第 10 行代码，当 GetObject 函数指定的对象被激活之后，就可以在代码中使用对象变量 Wb 来访问这个对象的属性和方法。</p>
<p>其中第 7、8 行代码将“数据表”工作簿中的第 1 张工作表已使用区域的数据赋给本工作表的单元格，第 9 行代码关闭“数据表”工作簿，使用 GetObject 函数返回对象的引用时，虽然在窗口中看不到对象的实例，但实际上是打开的，所以需用 Close 语句将其关闭。</p>
<p>第 12 行代码开启屏幕更新。</p>
<h3 id="_3-隐藏-application-对象" tabindex="-1"><a class="header-anchor" href="#_3-隐藏-application-对象" aria-hidden="true">#</a> 3）隐藏 Application 对象</h3>
<p>通过隐藏 Application 对象来模拟不打开工作簿取数，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> CopyData_3<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> myApp <span class="token keyword">As</span> <span class="token keyword">New</span> Application
	<span class="token keyword">Dim</span> Sh <span class="token keyword">As</span> Worksheet
	<span class="token keyword">Dim</span> Temp <span class="token keyword">As</span> <span class="token keyword">String</span>
	Temp <span class="token operator">=</span> ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\数据表.xls"</span>
	myApp<span class="token punctuation">.</span>Visible <span class="token operator">=</span> <span class="token boolean">False</span>
	<span class="token keyword">Set</span> Sh <span class="token operator">=</span> myApp<span class="token punctuation">.</span>Workbooks<span class="token punctuation">.</span>Open<span class="token punctuation">(</span>Temp<span class="token punctuation">)</span><span class="token punctuation">.</span>Sheets<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token keyword">With</span> Sh<span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"A1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>CurrentRegion
		Range<span class="token punctuation">(</span><span class="token string">"A1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Resize<span class="token punctuation">(</span><span class="token punctuation">.</span>Rows<span class="token punctuation">.</span>Count<span class="token punctuation">,</span> <span class="token punctuation">.</span>Columns<span class="token punctuation">.</span>Count<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">.</span>Value
	<span class="token keyword">End</span> <span class="token keyword">With</span>
	myApp<span class="token punctuation">.</span>Quit
	<span class="token keyword">Set</span> Sh <span class="token operator">=</span> <span class="token boolean">Nothing</span>
	<span class="token keyword">Set</span> myApp <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>代码解析：</p>
<p>CopyData_3 过程隐藏 Application 对象来模拟不打开工作簿取数。</p>
<p>第 2 行代码使用 New 关键字隐式地创建一个 Application 对象。</p>
<p>第 6 行代码将新创建的 Application 对象的 Visible 属性设置为 False，使之隐藏。</p>
<p>第 7 行代码使用 Open 方法打开“数据表”工作簿（关于 Open 方法请参阅 42 ，因为工作簿是使用新创建的、隐藏的 Application 对象打开的，所以在窗口中是不可视的。</p>
<p>第 8 行到第 10 行代码将“数据表”工作簿中的第 1 张工作表已使用区域的数据赋给本工作表的单元格。</p>
<p>第 11 行代码使用 Quit 方法退出新打开的 Excel 程序。</p>
<h3 id="_4-使用-executeexcel4macro-方法" tabindex="-1"><a class="header-anchor" href="#_4-使用-executeexcel4macro-方法" aria-hidden="true">#</a> 4）使用 ExecuteExcel4Macro 方法</h3>
<p>使用 ExecuteExcel4Macro 方法可以做到不打开工作簿的情况下获取其他工作薄中指定工作表的数据，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> CopyData_4<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> RCount <span class="token keyword">As</span> <span class="token keyword">Long</span>
	<span class="token keyword">Dim</span> CCount <span class="token keyword">As</span> <span class="token keyword">Long</span>
	<span class="token keyword">Dim</span> Temp <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">Dim</span> Temp1 <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">Dim</span> Temp2 <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">Dim</span> Temp3 <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">Dim</span> R <span class="token keyword">As</span> <span class="token keyword">Long</span>
	<span class="token keyword">Dim</span> C <span class="token keyword">As</span> <span class="token keyword">Long</span>
	<span class="token keyword">Dim</span> arr<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Variant</span>
	Temp <span class="token operator">=</span> <span class="token string">"'"</span> <span class="token operator">&amp;</span> ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\[数据表.xls]Sheet1'!"</span>
	Temp1 <span class="token operator">=</span> Temp <span class="token operator">&amp;</span> Rows<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Address<span class="token punctuation">(</span><span class="token punctuation">,</span> <span class="token punctuation">,</span> xlR1C1<span class="token punctuation">)</span>
	Temp1 <span class="token operator">=</span> <span class="token string">"Counta("</span> <span class="token operator">&amp;</span> Temp1 <span class="token operator">&amp;</span> <span class="token string">")"</span>
	CCount <span class="token operator">=</span> Application<span class="token punctuation">.</span>ExecuteExcel4Macro<span class="token punctuation">(</span>Temp1<span class="token punctuation">)</span>
	Temp2 <span class="token operator">=</span> Temp <span class="token operator">&amp;</span> Columns<span class="token punctuation">(</span><span class="token string">"A"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Address<span class="token punctuation">(</span><span class="token punctuation">,</span> <span class="token punctuation">,</span> xlR1C1<span class="token punctuation">)</span>
	Temp2 <span class="token operator">=</span> <span class="token string">"Counta("</span> <span class="token operator">&amp;</span> Temp2 <span class="token operator">&amp;</span> <span class="token string">")"</span>
	RCount <span class="token operator">=</span> Application<span class="token punctuation">.</span>ExecuteExcel4Macro<span class="token punctuation">(</span>Temp2<span class="token punctuation">)</span>
	<span class="token keyword">ReDim</span> arr<span class="token punctuation">(</span><span class="token number">1</span> <span class="token keyword">To</span> RCount<span class="token punctuation">,</span> <span class="token number">1</span> <span class="token keyword">To</span> CCount<span class="token punctuation">)</span>
	<span class="token keyword">For</span> R <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">To</span> RCount
		<span class="token keyword">For</span> C <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">To</span> CCount
			Temp3 <span class="token operator">=</span> Temp <span class="token operator">&amp;</span> Cells<span class="token punctuation">(</span>R<span class="token punctuation">,</span> C<span class="token punctuation">)</span><span class="token punctuation">.</span>Address<span class="token punctuation">(</span><span class="token punctuation">,</span> <span class="token punctuation">,</span> xlR1C1<span class="token punctuation">)</span>
			arr<span class="token punctuation">(</span>R<span class="token punctuation">,</span> C<span class="token punctuation">)</span> <span class="token operator">=</span> Application<span class="token punctuation">.</span>ExecuteExcel4Macro<span class="token punctuation">(</span>Temp3<span class="token punctuation">)</span>
		<span class="token keyword">Next</span>
	<span class="token keyword">Next</span>
	Range<span class="token punctuation">(</span><span class="token string">"A1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Resize<span class="token punctuation">(</span>RCount<span class="token punctuation">,</span> CCount<span class="token punctuation">)</span><span class="token punctuation">.</span>Value <span class="token operator">=</span> arr
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>代码解析：</p>
<p>CopyData_4 过程使用 ExecuteExcel4Macro 方法获取“数据表”工作薄中指定工作表的数据。</p>
<p>第 14、16 行代码使用 ExecuteExcel4Macro 方法执行 Counta 函数取得“数据表”工作薄中指定工作表的行数和列数合计。</p>
<p>ExecuteExcel4Macro 方法执行一个 Microsoft Excel 4.0 宏函数，然后返回此函数的结果，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>ExecuteExcel4Macro<span class="token punctuation">(</span><span class="token keyword">String</span><span class="token punctuation">)</span>

参数expression是可选的，返回一个Application对象。
参数<span class="token keyword">String</span>是必需的，一个不带等号的Microsoft Excel <span class="token number">4.0</span>宏语言函数，所有引用必须是像R1C1这样的字符串。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>因为 Microsoft Excel 4.0 宏不在当前工作簿或工作表的环境中求值，所有的引用都是外部引用，所以无需打开引用工作簿但是需要明确指定工作簿名称。</p>
<p>第 18 行代码使用 ReDim 语句为动态数组 arr 重新分配存储空间。</p>
<p>第 19 行到第 24 行代码循环取值，将“数据表”工作薄中指定工作表的数据赋给动态数组 arr。</p>
<p>第 25 行代码将动态数组 arr 的值赋给工作表的单元格。</p>
<h3 id="_5-使用-sql-连接" tabindex="-1"><a class="header-anchor" href="#_5-使用-sql-连接" aria-hidden="true">#</a> 5）使用 SQL 连接</h3>
<p>使用 SQL 建立与工作簿的连接，查询数据记录后复制到当前工作表中，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> CopyData_5<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> Sql <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">Dim</span> j <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">Dim</span> R <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">Dim</span> Cnn <span class="token keyword">As</span> ADODB<span class="token punctuation">.</span>Connection
	<span class="token keyword">Dim</span> rs <span class="token keyword">As</span> ADODB<span class="token punctuation">.</span>Recordset
	<span class="token keyword">With</span> Sheet5
		<span class="token punctuation">.</span>Cells<span class="token punctuation">.</span>Clear
		<span class="token keyword">Set</span> Cnn <span class="token operator">=</span> <span class="token keyword">New</span> ADODB<span class="token punctuation">.</span>Connection
		<span class="token keyword">With</span> Cnn
			<span class="token punctuation">.</span>Provider <span class="token operator">=</span> <span class="token string">"microsoft.jet.oledb.4.0"</span>
			<span class="token punctuation">.</span>ConnectionString <span class="token operator">=</span> <span class="token string">"Extended Properties=Excel 8.0;"</span> <span class="token operator">_</span>
				<span class="token operator">&amp;</span> <span class="token string">"Data Source="</span> <span class="token operator">&amp;</span> ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\数据表"</span>
			<span class="token punctuation">.</span>Open
		<span class="token keyword">End</span> <span class="token keyword">With</span>
		<span class="token keyword">Set</span> rs <span class="token operator">=</span> <span class="token keyword">New</span> ADODB<span class="token punctuation">.</span>Recordset
		Sql <span class="token operator">=</span> <span class="token string">"select * from [Sheet1$]"</span>
		rs<span class="token punctuation">.</span>Open Sql<span class="token punctuation">,</span> Cnn<span class="token punctuation">,</span> adOpenKeyset<span class="token punctuation">,</span> adLockOptimistic
			<span class="token keyword">For</span> j <span class="token operator">=</span> <span class="token number">0</span> <span class="token keyword">To</span> rs<span class="token punctuation">.</span>Fields<span class="token punctuation">.</span>Count <span class="token operator">-</span> <span class="token number">1</span>
				<span class="token punctuation">.</span>Cells<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=</span> rs<span class="token punctuation">.</span>Fields<span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">.</span>Name
			<span class="token keyword">Next</span>
		R <span class="token operator">=</span> <span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"A65536"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">End</span><span class="token punctuation">(</span>xlUp<span class="token punctuation">)</span><span class="token punctuation">.</span>Row
		<span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"A"</span> <span class="token operator">&amp;</span> R <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>CopyFromRecordset rs
	<span class="token keyword">End</span> <span class="token keyword">With</span>
	rs<span class="token punctuation">.</span>Close
	Cnn<span class="token punctuation">.</span>Close
	<span class="token keyword">Set</span> rs <span class="token operator">=</span> <span class="token boolean">Nothing</span>
	<span class="token keyword">Set</span> Cnn <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>代码解析：</p>
<p>CopyData_5 过程使建立与“数据表”工作簿的连接，查询数据记录后复制到当前工作表中。</p>
<p>第 8 行代码删除当前工作表的所有数据。</p>
<p>第 9 行到第 15 行代码建立与“数据表”工作簿的连接。</p>
<p>第 16 行到第 24 行代码查询“数据表”工作簿的全部数据，并复制到工作表中。其中第 20 行代码将字段名称（标题行）复制到工作表中，第 23 行代码将查询到的数据记录复制到工作表。</p>
<h2 id="_52、返回窗口的可视区域地址" tabindex="-1"><a class="header-anchor" href="#_52、返回窗口的可视区域地址" aria-hidden="true">#</a> 52、返回窗口的可视区域地址</h2>
<p>VBA 中使用 VisibleRange 属性返回当前窗口的可视区域，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> VbRange<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> s <span class="token keyword">As</span> <span class="token keyword">String</span>
	s <span class="token operator">=</span> ActiveWindow<span class="token punctuation">.</span>VisibleRange<span class="token punctuation">.</span>Address<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
	MsgBox <span class="token string">"窗口的可视区域为："</span> <span class="token operator">&amp;</span> s
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>代码解析：</p>
<p>VbRange 过程使用消息框显示当前窗口的可视区域的地址。</p>
<p>应用于当前 Window 对象的 VisibleRange 属性返回一个 Range 对象，代表当前窗口的可视区域。窗口的可视区域就是用户可以在窗口或窗格中看到的单元格区域，如果行或列部分可见，该行或列也包括在可视区域中。</p>
<p>因为 VisibleRange 属性返回的是一个 Range 对象，因此可以直接使用该对象的属性和方法。</p>
<p>当窗口的大小发生变化时，返回的可视区域的地址也会不同，如图 52-1、图 52-2 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/52-1.png" alt="" loading="lazy"></p>
<p><u>图 52-1</u>	自定义大小的窗口</p>
<p><img src="@source/project/Excel/assets/52-2.png" alt="" loading="lazy"></p>
<p><u>图 52-2</u>	最大化时的窗口</p>
</div>
</template>
