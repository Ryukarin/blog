<template><h2 id="_170、导入文本文件" tabindex="-1"><a class="header-anchor" href="#_170、导入文本文件" aria-hidden="true">#</a> 170、导入文本文件</h2>
<p>在实际应用中，我们经常从软件中将数据导出为文本文件，在需要将这些文本文件导入到 Excel 中时可以使用以下的方法。</p>
<h3 id="_1-使用查询表导入" tabindex="-1"><a class="header-anchor" href="#_1-使用查询表导入" aria-hidden="true">#</a> 1）使用查询表导入</h3>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> AddQuery<span class="token punctuation">(</span><span class="token punctuation">)</span>
	Sheet1<span class="token punctuation">.</span>UsedRange<span class="token punctuation">.</span>ClearContents
	<span class="token keyword">With</span> Sheet1<span class="token punctuation">.</span>QueryTables<span class="token punctuation">.</span>Add<span class="token punctuation">(</span> <span class="token operator">_</span>
		Connection<span class="token punctuation">:</span><span class="token operator">=</span><span class="token string">"TEXT;"</span> <span class="token operator">&amp;</span> ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\工资表.txt"</span><span class="token punctuation">,</span> <span class="token operator">_</span>
		Destination<span class="token punctuation">:</span><span class="token operator">=</span>Range<span class="token punctuation">(</span><span class="token string">"A1"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span>TextFilePlatform <span class="token operator">=</span> <span class="token number">936</span>
		<span class="token punctuation">.</span>TextFileCommaDelimiter <span class="token operator">=</span> <span class="token boolean">True</span>
		<span class="token punctuation">.</span>Refresh
	<span class="token keyword">End</span> <span class="token keyword">With</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>代码解析：</p>
<p>AddQuery 过程使用 QueryTable 对象的 Add 方法新建查询表后将文本文件“工资表.txt”的内容导入到工作表中。</p>
<p>应用于 QueryTable 对象的 Add 方法新建一个查询表，返回 QueryTable 对象，该对象代表新建的查询表，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>Add<span class="token punctuation">(</span>Connection<span class="token punctuation">,</span> Destination<span class="token punctuation">,</span> Sql<span class="token punctuation">)</span>

参数expression是必需的，返回一个QueryTables对象。
参数Connection是必需的，查询表的数据源。如果数据源是文本文件，是<span class="token string">“TEXT;&lt;文本文件路径和名称>”</span>形式的字符串，其他数据源请参阅帮助。
参数Destination是必需的，Range类型，查询表目标区域左上角单元格用于放置生成的查询表的区域。目标区域必须在包含expression 指定的QueryTables对象的工作表上。
参数Sql是可选的，在ODBC数据源上运行的SQL查询字符串，当将QueryTable对象、文本文件、或是ADO或DAO Recordset对象指定为数据源时不能使用该参数。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>第 3 行到第 5 行代码在工作表中建立对位于同一目录中的“工资表.txt”文本文件的查询，并将查询结果放置到工作表中。</p>
<p>第 6 行代码设置导入的文本文件的原始格式，QueryTables 对象的 TextFilePlatform 属性返回或设置正向查询表中导入的文本文件的原始格式，默认值是在“文本导入向导”的“文件原始格式”选项中的当前设置。</p>
<p>第 7 行代码设置文本文件导入查询表中时，是以逗号作为分隔符。</p>
<p>第 8 行代码使用 Refresh 方法更新外部数据区域，应用于 QueryTable 对象的 Refresh 方法更新外部数据区域，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>Refresh<span class="token punctuation">(</span>BackgroundQuery<span class="token punctuation">)</span>

参数expression是必需的，返回一个QueryTable对象。
参数BackgroundQuery是可选的的，只用于基于SQL查询结果的QueryTable。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_2-使用-open-语句导入" tabindex="-1"><a class="header-anchor" href="#_2-使用-open-语句导入" aria-hidden="true">#</a> 2）使用 Open 语句导入</h3>
<p>使用 Open 语句输入文本文件，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> OpenText<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> Filename <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">Dim</span> myText <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">Dim</span> mArr<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">Dim</span> i <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">Dim</span> j <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	Filename <span class="token operator">=</span> ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\工资表.txt"</span>
	j <span class="token operator">=</span> <span class="token number">1</span>
	Sheet1<span class="token punctuation">.</span>UsedRange<span class="token punctuation">.</span>ClearContents
	Open Filename <span class="token keyword">For</span> Input <span class="token keyword">As</span> <span class="token number">1</span>
	<span class="token keyword">Do</span> <span class="token keyword">While</span> <span class="token keyword">Not</span> EOF<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
		Line Input <span class="token number">1</span><span class="token punctuation">,</span> myText
		mArr <span class="token operator">=</span> Split<span class="token punctuation">(</span>myText<span class="token punctuation">,</span> <span class="token string">","</span><span class="token punctuation">)</span>
		<span class="token keyword">For</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token keyword">To</span> UBound<span class="token punctuation">(</span>mArr<span class="token punctuation">)</span>
			Sheet1<span class="token punctuation">.</span>Cells<span class="token punctuation">(</span>j<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=</span> mArr<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
		<span class="token keyword">Next</span>
		j <span class="token operator">=</span> j <span class="token operator">+</span> <span class="token number">1</span>
	<span class="token keyword">Loop</span>
	Close <span class="token number">1</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>代码解析：</p>
<p>OpenText 过程使用 Open 语句将文本“工资表.txt”的内容输入到工作表中。</p>
<p>第 10 行代码使用 Open 语句打开文本文件以完成对文本文件的输入。Open 语句能够对文件输入/输出（I/O），语法如下：。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Open pathname For mode [Access access] [lock] As [#]filenumber [Len=reclength]

Pathname是必需的，指定文件名，该文件名可能还包括目录、文件夹及驱动器。
mode是必需的，指定文件方式，有Append、Binary、Input、Output、或Random方式。如果未指定方式，则以Random访问方式打开文件。
Access是可选的，说明打开的文件可以进行的操作，有Read、Write、或Read Write操作。
lock是可选的，说明限定于其它进程打开的文件的操作，有Shared、Lock Read、Lock Write、和Lock Read Write操作。
filenumber是必需的，一个有效的文件号，范围在 1 到 511 之间。使用FreeFile函数可得到下一个可用的文件号。
reclength是可选的，小于或等于 32，767（字节）的一个数。对于用随机访问方式打开的文件，该值就是记录长度。对于顺序文件，该值就是缓冲字符数。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>第 11 行代码使用 Do...Loop 语句重复执行第 12 行到第 17 行代码，直到文本文件的结尾。EOF 函数返回一个 Integer，它返回 Boolean 值 True，表明已经到达为 Random 或顺序 Input 打开的文件结尾，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>EOF<span class="token punctuation">(</span>filenumber<span class="token punctuation">)</span>

参数filenumber是必需的，是一个<span class="token keyword">Integer</span>，包含任何有效的文件号。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>第 12 行代码使用 Line Input # 语句读入一行数据并将其赋予变量 myText。Line Input # 语句从已打开的顺序文件中读出一行并将它分配给 String 变量，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>Line Input <span class="token operator">#</span>filenumber<span class="token punctuation">,</span> varname

Filenumber是必需的，任何有效的文件号。
varnamer是必需的，有效的<span class="token keyword">Variant</span>或<span class="token keyword">String</span>变量名。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>第 13 行代码使用 Split 函数按逗号作为分隔符分开这行字符，赋值数组 mArr。关于 Split 函数请参阅 169-2。</p>
<p>第 14 行到第 16 行代码将数组 mArr 循环赋值给单元格，请参阅 169-1。</p>
<p>第 19 行代码关闭文本文件。Close 语句关闭 Open 语句所打开的输入/输出 (I/O) 文件，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>Close [filenumberlist]

参数filenumberlist是可选的，为一个或多个文件号，如省略则将关闭所有由Open语句打开的活动文件。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_3-使用-opentext-方法" tabindex="-1"><a class="header-anchor" href="#_3-使用-opentext-方法" aria-hidden="true">#</a> 3）使用 OpenText 方法</h3>
<p>使用 OpenText 方法载入一个文本文件并将其作为包含单个工作表的工作簿处理，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> OpenText<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> myFileName <span class="token keyword">As</span> <span class="token keyword">String</span>
	myFileName <span class="token operator">=</span> <span class="token string">"工资表.txt"</span>
	Sheet1<span class="token punctuation">.</span>UsedRange<span class="token punctuation">.</span>ClearContents
	Workbooks<span class="token punctuation">.</span>OpenText <span class="token operator">_</span>
		Filename<span class="token punctuation">:</span><span class="token operator">=</span>ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\"</span> <span class="token operator">&amp;</span> myFileName<span class="token punctuation">,</span> <span class="token operator">_</span>
		StartRow<span class="token punctuation">:</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> DataType<span class="token punctuation">:</span><span class="token operator">=</span>xlDelimited<span class="token punctuation">,</span> Comma<span class="token punctuation">:</span><span class="token operator">=</span><span class="token boolean">True</span>
	<span class="token keyword">With</span> ActiveWorkbook
		<span class="token keyword">With</span> <span class="token punctuation">.</span>Sheets<span class="token punctuation">(</span><span class="token string">"工资表"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"A1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>CurrentRegion
			ThisWorkbook<span class="token punctuation">.</span>Sheets<span class="token punctuation">(</span><span class="token string">"Sheet1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"A1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Resize<span class="token punctuation">(</span><span class="token punctuation">.</span>Rows<span class="token punctuation">.</span>Count<span class="token punctuation">,</span> <span class="token punctuation">.</span>Columns<span class="token punctuation">.</span>Count<span class="token punctuation">)</span><span class="token punctuation">.</span>Value <span class="token operator">=</span> <span class="token punctuation">.</span>Value
		<span class="token keyword">End</span> <span class="token keyword">With</span>
		<span class="token punctuation">.</span>Close <span class="token boolean">False</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>代码解析：</p>
<p>OpenText 过程使用 OpenText 方法载入“工资表.txt”文本文件并将其数据写入到工作表中。</p>
<p>第 5 行到第 7 行代码使用 OpenText 方法载入“工资表.txt”文本文件。OpenText 方法载入一个文本文件，并将其作为包含单个工作表的工作簿进行分列处理，然后在此工作表中放入经过分列处理的文本文件数据，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>OpenText<span class="token punctuation">(</span>FileName<span class="token punctuation">,</span> Origin<span class="token punctuation">,</span> StartRow<span class="token punctuation">,</span> DataType<span class="token punctuation">,</span> TextQualifier<span class="token punctuation">,</span> ConsecutiveDelimiter<span class="token punctuation">,</span> Tab<span class="token punctuation">,</span> Semicolon<span class="token punctuation">,</span> Comma<span class="token punctuation">,</span> Space<span class="token punctuation">,</span> Other<span class="token punctuation">,</span> OtherChar<span class="token punctuation">,</span> FieldInfo<span class="token punctuation">,</span> TextVisualLayout<span class="token punctuation">,</span> DecimalSeparator<span class="token punctuation">,</span> ThousandsSeparator<span class="token punctuation">,</span> TrailingMinusNumbers<span class="token punctuation">,</span> Local<span class="token punctuation">)</span>

其中参数FileName是必需的，指定要载入并作分列处理的文件名称。
参数StartRow是可选的，作分列处理的起始行号，默认值为 <span class="token number">1</span>。
参数DataType是可选的，在文件中指定数据的列格式。
参数Comma是可选的，如果该值为<span class="token boolean">True</span>，则将分隔符设为逗号。
其他参数请参阅VBA中的帮助文档。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>第 9 行到第 11 行代码将作为工作表打开的文本文件中的数据写入到工作表中。</p>
<p>第 13 行代码使用 Close 方法关闭打开的文本文件。</p>
<h2 id="_171、将数据写入文本文件" tabindex="-1"><a class="header-anchor" href="#_171、将数据写入文本文件" aria-hidden="true">#</a> 171、将数据写入文本文件</h2>
<p>在需要时可以将 Excel 中的数据写入到文本文件中，有以下方法可以实现。</p>
<h3 id="_1-使用-print-语句" tabindex="-1"><a class="header-anchor" href="#_1-使用-print-语句" aria-hidden="true">#</a> 1）使用 Print # 语句</h3>
<p>使用 Print # 语句将数据写入文本文件中，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> PrintText<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> myFileName <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">Dim</span> myDataAr<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Variant</span>
	<span class="token keyword">Dim</span> myStr <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">Dim</span> myRow <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">Dim</span> myCol <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">Dim</span> i <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">Dim</span> j <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">Resume</span> <span class="token keyword">Next</span>
	myFileName <span class="token operator">=</span> <span class="token string">"工资表.txt"</span>
	Kill ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\"</span> <span class="token operator">&amp;</span> myFileName
	<span class="token keyword">With</span> Sheet1
		myRow <span class="token operator">=</span> <span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"A65536"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">End</span><span class="token punctuation">(</span>xlUp<span class="token punctuation">)</span><span class="token punctuation">.</span>Row
		myCol <span class="token operator">=</span> <span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"IV1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">End</span><span class="token punctuation">(</span>xlToLeft<span class="token punctuation">)</span><span class="token punctuation">.</span>Column
		<span class="token keyword">ReDim</span> myDataAr<span class="token punctuation">(</span><span class="token number">1</span> <span class="token keyword">To</span> myRow<span class="token punctuation">,</span> <span class="token number">1</span> <span class="token keyword">To</span> myCol<span class="token punctuation">)</span>
		<span class="token keyword">For</span> i <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">To</span> myRow
			<span class="token keyword">For</span> j <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">To</span> myCol
				myDataAr<span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">.</span>Cells<span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">.</span>Value
			<span class="token keyword">Next</span>
		<span class="token keyword">Next</span>
		Open ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\"</span> <span class="token operator">&amp;</span> myFileName <span class="token keyword">For</span> Output <span class="token keyword">As</span> <span class="token number">1</span>
		<span class="token keyword">For</span> i <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">To</span> UBound<span class="token punctuation">(</span>myDataAr<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
			myStr <span class="token operator">=</span> <span class="token string">""</span>
			<span class="token keyword">For</span> j <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">To</span> UBound<span class="token punctuation">(</span>myDataAr<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
				myStr <span class="token operator">=</span> myStr <span class="token operator">&amp;</span> <span class="token keyword">CStr</span><span class="token punctuation">(</span>myDataAr<span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">","</span>
			<span class="token keyword">Next</span>
			myStr <span class="token operator">=</span> Left<span class="token punctuation">(</span>myStr<span class="token punctuation">,</span> <span class="token punctuation">(</span>Len<span class="token punctuation">(</span>myStr<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			Print <span class="token number">1</span><span class="token punctuation">,</span> myStr
		<span class="token keyword">Next</span>
		Close <span class="token number">1</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
	MsgBox <span class="token string">"文件保存成功!"</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>代码解析：</p>
<p>PrintText 过程将工作表中数据写入到文本文件“工资表.txt”中。</p>
<p>第 11 行代码使用 Kill 方法删除同一目录中可能存在的同名文本文件。</p>
<p>第 13、14 行使用单元格的 End 属性取得工作表中已使用数据的行、列号，关于 End 属性请参阅 3 。</p>
<p>第 15 行代码重新定义动态数组 myDataAr 的大小。关于动态数组请参阅技巧169-3。</p>
<p>第 16 行到第 20 行代码将工作表数据赋给数组 myDataAr。</p>
<p>第 21 行代码使用 Open 语句打开文本文件以完成对文本文件的输入。关于 Open 语句请参阅 170-2。</p>
<p>第 22 行到第 29 行代码使用 Print # 语句将数组 myDataAr中的所有元素写入到文本文件中。Print # 语句将格式化显示的数据写入顺序文件中，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>Print <span class="token operator">#</span>filenumber<span class="token punctuation">,</span> [outputlist]

Filenumber是必需的，任何有效的文件号。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>第 30 行代码 Close 语句关闭文本文件。</p>
<h3 id="_2-另存为文本文件" tabindex="-1"><a class="header-anchor" href="#_2-另存为文本文件" aria-hidden="true">#</a> 2）另存为文本文件</h3>
<p>使用 SaveAs 方法将工作表另存为文本文件，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> SaveText<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> myFileName <span class="token keyword">As</span> <span class="token keyword">String</span>
	myFileName <span class="token operator">=</span> <span class="token string">"工资表.txt"</span>
	<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">Resume</span> <span class="token keyword">Next</span>
	Kill ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\"</span> <span class="token operator">&amp;</span> myFileName
	Application<span class="token punctuation">.</span>ScreenUpdating <span class="token operator">=</span> <span class="token boolean">False</span>
	Worksheets<span class="token punctuation">(</span><span class="token string">"Sheet1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Copy
	ActiveWorkbook<span class="token punctuation">.</span>SaveAs Filename<span class="token punctuation">:</span><span class="token operator">=</span>ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">_</span>
		<span class="token operator">&amp;</span> <span class="token string">"\"</span> <span class="token operator">&amp;</span> myFileName<span class="token punctuation">,</span> <span class="token operator">_</span>
		FileFormat<span class="token punctuation">:</span><span class="token operator">=</span>xlCSV
	MsgBox <span class="token string">"文件保存成功!"</span>
	ActiveWorkbook<span class="token punctuation">.</span>Close SaveChanges<span class="token punctuation">:</span><span class="token operator">=</span><span class="token boolean">False</span>
	Application<span class="token punctuation">.</span>ScreenUpdating <span class="token operator">=</span> <span class="token boolean">True</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>代码解析：</p>
<p>SaveText 过程将工作表“Sheet1”保存为文本文件。</p>
<p>第 4、5 行代码使用 Kill 方法删除同一目录中可能存在的同名文本文件。</p>
<p>第 7 行代码使用 Copy 方法复制工作表“Sheet1”。</p>
<p>第 8 行到第 10 行代码使用 SaveAs 方法将文件保存为文本文件。应用于 Workbook 对象的 SaveAs 方法保存对不同文件中的工作表的更改，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>SaveAs<span class="token punctuation">(</span>FileName<span class="token punctuation">,</span> FileFormat<span class="token punctuation">,</span> Password<span class="token punctuation">,</span> WriteResPassword<span class="token punctuation">,</span> ReadOnlyRecommended<span class="token punctuation">,</span> CreateBackup<span class="token punctuation">,</span> AccessMode<span class="token punctuation">,</span> ConflictResolution<span class="token punctuation">,</span> AddToMru<span class="token punctuation">,</span> TextCodepage<span class="token punctuation">,</span> TextVisualLayout<span class="token punctuation">,</span> Local<span class="token punctuation">)</span>

其中参数Filename表示要保存的文件名。可包含完整路径。如果不指定路径，Microsoft Excel 将文件保存到当前文件夹中。
其中参数FileFormat指定保存文件时使用的文件格式，在本例中指定为xlCSV即保存为文本文件。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>第 12 行代码使用 Close 方法关闭活动工作簿。</p>
<h2 id="_172、文件修改的日期和时间" tabindex="-1"><a class="header-anchor" href="#_172、文件修改的日期和时间" aria-hidden="true">#</a> 172、文件修改的日期和时间</h2>
<p>在 VBA 过程中如果需要获得文件最后修改的日期和时间，可以使用 FileDateTime 函数，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> myDateTime<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> Stmp <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">Dim</span> myDateTime <span class="token keyword">As</span> <span class="token keyword">Date</span>
	Stmp <span class="token operator">=</span> ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\"</span> <span class="token operator">&amp;</span> ThisWorkbook<span class="token punctuation">.</span>Name
	myDateTime <span class="token operator">=</span> FileDateTime<span class="token punctuation">(</span>Stmp<span class="token punctuation">)</span>
	MsgBox Stmp <span class="token operator">&amp;</span> <span class="token string">"最后修改时间是："</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> myDateTime
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>代码解析：</p>
<p>myDateTime 过程使用消息框显示文件最后修改的日期和时间。</p>
<p>FileDateTime 函数返回一个文件被创建或最后修改后的日期和时间，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>FileDateTime<span class="token punctuation">(</span>pathname<span class="token punctuation">)</span>

pathname 参数是必需的，用来指定文件名的字符串表达式。pathname 可以包含目录或文件夹、以及驱动器。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>第 4 行代码使用变量 Stmp 保存代码所在工作簿的路径和名称。</p>
<p>第 5 行代码使用变量 myDateTime 保存 FileDateTime 函数返回的日期和时间。</p>
<p>运行 myDateTime 过程结果如图 172-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/172-1.png" alt="" loading="lazy"></p>
<p><u>图 172-1</u>	文件最后修改的日期和时间</p>
</div>
<h2 id="_173、查找文件或文件夹" tabindex="-1"><a class="header-anchor" href="#_173、查找文件或文件夹" aria-hidden="true">#</a> 173、查找文件或文件夹</h2>
<p>在磁盘中查找文件或文件夹，可以使用 Dir 函数，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> mydir<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> mydir <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">Dim</span> b <span class="token keyword">As</span> <span class="token keyword">Byte</span>
	b <span class="token operator">=</span> <span class="token number">1</span>
	Range<span class="token punctuation">(</span><span class="token string">"A:A"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>ClearContents
	mydir <span class="token operator">=</span> Dir<span class="token punctuation">(</span>ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\*.xls"</span><span class="token punctuation">,</span> vbNormal<span class="token punctuation">)</span>
	<span class="token keyword">Do</span> <span class="token keyword">While</span> mydir <span class="token operator">&lt;</span><span class="token operator">></span> <span class="token string">""</span>
		Cells<span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=</span> mydir
		mydir <span class="token operator">=</span> Dir
		b <span class="token operator">=</span> b <span class="token operator">+</span> <span class="token number">1</span>
	<span class="token keyword">Loop</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>代码解析：</p>
<p>Mydir 过程使用 Dir 函数在代码所在工作簿的文件夹中查找所有的 Excel 文件，找到后写入到工作表的 A 列单元格中。</p>
<p>第 2 行代码声明变量 mydir 保存返回的文件名称。</p>
<p>第 3 行代码声明变量 b 保存返回的文件数目。</p>
<p>第 4 行代码设置变量 b 的初始值。</p>
<p>第 5 行代码清除 A 列所有数据。</p>
<p>第 6 行代码使用 Dir 函数在代码所在工作簿的文件夹中查找 Excel 文件。Dir 函数返回一个 String，用以表示一个文件名、目录名或文件夹名称，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>Dir[<span class="token punctuation">(</span>pathname[<span class="token punctuation">,</span> attributes]<span class="token punctuation">)</span>]

参数pathname是可选的，用来指定文件名的字符串表达式，可能包含目录或文件夹、以及驱动器。如果没有找到pathname，则会返回零长度字符串 <span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span>。
参数attributes是可选的，常数或数值表达式，其总和用来指定文件属性，如表格 <span class="token number">173</span><span class="token number">1</span>所示。如果省略，则会返回不包含属性的匹配文件。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><u>表格 173-1</u>	attributes设置值</p>
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
<td>vbNormal</td>
<td>0</td>
<td>(缺省) 指定没有属性的文件。</td>
</tr>
<tr>
<td>vbReadOnly</td>
<td>1</td>
<td>指定无属性的只读文件。</td>
</tr>
<tr>
<td>vbHidden</td>
<td>2</td>
<td>指定无属性的隐藏文件。</td>
</tr>
<tr>
<td>VbSystem</td>
<td>4</td>
<td>指定无属性的系统文件，在Macintosh中不可用。</td>
</tr>
<tr>
<td>vbVolume</td>
<td>8</td>
<td>指定卷标文件；如果指定了其它属性，则忽略。vbVolume 在Macintosh中不可用。</td>
</tr>
<tr>
<td>vbDirectory</td>
<td>16</td>
<td>指定无属性文件及其路径和文件夹。</td>
</tr>
<tr>
<td>vbAlias</td>
<td>64</td>
<td>指定的文件名是别名，只在Macintosh上可用。</td>
</tr>
</tbody>
</table>
<div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>在第一次调用 Dir 函数时，必须指定 pathname，否则会产生错误。</p>
</div>
<p>第 7 行到第 11 行代码将返回的文件名称写入到 A 列单元格中。Dir 函数会返回匹配 pathname 参数的第一个文件名，若想得到其他匹配 pathname 参数的文件名，需再一次调用 Dir 函数，且不要使用参数。如果已没有合乎条件的文件，则 Dir 函数会返回一个零长度字符串 (&quot;&quot;)。</p>
<p>运行 Mydir 过程工作表中如图 173-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/173-1.png" alt="" loading="lazy"></p>
<p><u>图 173-1</u>	使用 Dir 函数返回文件名称</p>
</div>
<h2 id="_174、获得当前文件夹的名称" tabindex="-1"><a class="header-anchor" href="#_174、获得当前文件夹的名称" aria-hidden="true">#</a> 174、获得当前文件夹的名称</h2>
<p>在处理文件时经常需要获得当前文件夹的名称，此时可以使用 CurDir 函数，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> CurFolder<span class="token punctuation">(</span><span class="token punctuation">)</span>
	MsgBox CurDir<span class="token punctuation">(</span><span class="token string">"F"</span><span class="token punctuation">)</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>CurFolder 过程使用消息框显示F盘中的当前文件夹名称。</p>
<p>CurDir 函数返回一个 Variant 类型的文件路径。如果需要返回字符串类型的文件路径则使用 CurDir$，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>CurDir[<span class="token punctuation">(</span>drive<span class="token punctuation">)</span>]

参数drive是可选的，字符串表达式，指定一个存在的驱动器。如果没有指定驱动器，或参数drive 是零长度字符串 <span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span>，则CurDir函数会返回当前驱动器的路径。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>假设示例文件保存在 F 盘的“VBA常用技巧\示例文件\第10章 文件操作”文件夹中，运行 CurFolder 过程结果如图 174-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/174-1.png" alt="" loading="lazy"></p>
<p><u>图 174-1</u>	获得当前文件夹的名称</p>
</div>
<h2 id="_175、创建和删除文件夹" tabindex="-1"><a class="header-anchor" href="#_175、创建和删除文件夹" aria-hidden="true">#</a> 175、创建和删除文件夹</h2>
<p>可以在程序运行时创建和删除文件夹，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> TempFolder<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">Resume</span> <span class="token keyword">Next</span>
	MkDir ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\Temp"</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>代码解析：</p>
<p>TempFolder 过程使用 MkDir 语句在示例所在的文件夹中创建“Temp”文件夹。MkDir 语句创建一个新的目录或文件夹，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>MkDir path

参数path是必需的，指定所要创建的目录或文件夹的字符串表达式，可以包含驱动器。如果没有指定驱动器，则在当前驱动器上创建新的目录或文件夹。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>第 2 行代码启动错误处理程序，因为在创建过程中如果文件夹中已存在相同名称的“Temp”文件夹会发生 “路径未找到”错误，所以使用 On Error Resume Next 语句忽略错误。</p>
<p>第 3 行代码使用 MkDir 语句创建“Temp”文件夹。</p>
<p>如果需要删除不需要的文件夹可以使用 RmDir 语句，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> RmFolder<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">Resume</span> <span class="token keyword">Next</span>
	RmDir ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\Temp"</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>代码解析：</p>
<p>RmFolder 过程使用 RmDir 语句删除在示例所在的文件夹中创建“Temp”文件夹。RmDir 语句删除一个存在的目录或文件夹，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>RmDir path

参数path是必需的，指定所要创建的目录或文件夹的字符串表达式，可以包含驱动器。如果没有指定驱动器，则在当前驱动器上创建新的目录或文件夹。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>第 2 行代码启动错误处理程序，因为在使用 RmDir 语句删除并不存在的文件夹或删除含有文件的文件夹时会发生 “路径未找到”错误，所以使用 On Error Resume Next 语句忽略错误。</p>
<p>第 3 行代码使用 RmDir 语句删除“Temp”文件夹。如果“Temp”文件夹中含有文件可以在删除文件夹之前，先使用 Kill 语句来删除所有文件，请参阅 178 。</p>
<h2 id="_176、重命名文件或文件夹" tabindex="-1"><a class="header-anchor" href="#_176、重命名文件或文件夹" aria-hidden="true">#</a> 176、重命名文件或文件夹</h2>
<p>使用 Name 语句可以重命名文件或文件夹，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> Filename<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">Resume</span> <span class="token keyword">Next</span>
	Name ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\123"</span> <span class="token keyword">As</span> ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\ABC"</span>
	Name ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\123.xls"</span> <span class="token keyword">As</span> ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\ABC\ABC.xls"</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Filename 过程使用 Name 语句重命名示例文件所在文件夹中的“123”文件夹和“123.xls” Excel 文件并将重命名后的 Excel 文件移动到重命名后的文件夹中。</p>
<p>Name 语句重新命名一个文件、目录、或文件夹，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>Name oldpathname <span class="token keyword">As</span> newpathname

参数oldpathname是必需的，字符串表达式，指定已存在的文件名和位置，可以包含目录或文件夹、以及驱动器。
参数newpathname是必需的，字符串表达式，指定新的文件名和位置，可以包含目录或文件夹、以及驱动器。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>第 2 行代码启动错误处理程序，因为在重命名过程中如果参数 oldpathname 指定的文件或文件夹不存在会发生 “文件未找到”错误，所以使用 On Error Resume Next 语句忽略错误。</p>
<p>第 3 行代码使用 Name 语句将示例文件所在文件夹中的“123”文件夹重命名为“ABC”文件夹。</p>
<p>第 4 行代码使用 Name 语句将示例文件所在文件夹中的“123.xls”Excel文件重命名为“ABC.xls”文件并移动到“ABC”文件夹中。</p>
<p>在运行 Filename 过程前请确认示例文件所在文件夹中包含一个“123”文件夹和一个“123.xls” Excel 文件。</p>
<h2 id="_177、复制指定的文件" tabindex="-1"><a class="header-anchor" href="#_177、复制指定的文件" aria-hidden="true">#</a> 177、复制指定的文件</h2>
<p>如果需要把文件从一个地方复制到另一个地方，可以使用 FileCopy 语句复制文件，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> CopyFile<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> SourceFile <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">Dim</span> DestinationFile <span class="token keyword">As</span> <span class="token keyword">String</span>
	SourceFile <span class="token operator">=</span> ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\123.xls"</span>
	DestinationFile <span class="token operator">=</span> ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\ABC\abc.xls"</span>
	FileCopy SourceFile<span class="token punctuation">,</span> DestinationFile
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>代码解析：</p>
<p>CopyFile 过程使用 FileCopy 语句将示例文件所在文件夹中的“123.xls”Excel文件复制到示例文件目录下的“ABC”文件夹中并重新命名为“abc.xls”。</p>
<p>FileCopy 语句复制一个文件，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>FileCopy source<span class="token punctuation">,</span> destination

Source参数是必需的，字符串表达式，用来表示要被复制的文件名。source参数可以包含目录或文件夹、以及驱动器。
destination参数是必需的，字符串表达式，用来指定要复制的目地文件名。destination参数 可以包含目录或文件夹、以及驱动器。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>不能对一个已打开的文件使用 FileCopy 语句，否则会产生错误。</p>
</div>
<p>第 4 行代码指定被复制的文件名称和路径。</p>
<p>第 5 行代码指定目的文件名称和路径，如果已存在相同名称的文件则会覆盖原文件。</p>
<p>第 6 行代码使用 FileCopy 语句复制文件。</p>
<h2 id="_178、删除指定的文件" tabindex="-1"><a class="header-anchor" href="#_178、删除指定的文件" aria-hidden="true">#</a> 178、删除指定的文件</h2>
<p>使用 Kill 方法删除指定的文件，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> KillFile<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> myFile <span class="token keyword">As</span> <span class="token keyword">String</span>
	myFile <span class="token operator">=</span> ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\123.xls"</span>
	<span class="token keyword">If</span> Dir<span class="token punctuation">(</span>myFile<span class="token punctuation">)</span> <span class="token operator">&lt;</span><span class="token operator">></span> <span class="token string">""</span> <span class="token keyword">Then</span> Kill myFile
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>代码解析：</p>
<p>KillFile 过程使用 Kill 方法示例文件所在文件夹中的“123.xls”文件。</p>
<p>第 3 行代码指定所要删除文件的路径和文件名称。</p>
<p>第 4 行代码使用 Dir 函数返回指定文件名，（关于 Dir 函数请参阅 173 ）如果存在该文件则使用 Kill 语句删除。Kill 语句从磁盘中删除文件，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>Kill pathname

参数pathname是必需的，用来指定一个文件名的字符串表达式，可以包含目录或文件夹、以及驱动器。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>在 Microsoft Windows 中，Kill 方法支持多字符 (*) 和单字符 (?) 的统配符来指定多重文件，如需要删除当前目录下所有 *. Xls 文件可以使用下面的代码：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>Kill <span class="token string">"*.xls"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>使用 Kill 方法不能删除已打开的文件，否则会产生错误。</p>
</div>
<h2 id="_179、搜索特定的文件" tabindex="-1"><a class="header-anchor" href="#_179、搜索特定的文件" aria-hidden="true">#</a> 179、搜索特定的文件</h2>
<p>如果需要对文件夹中所有的 Excel 文件进行相同的操作，那么可以使用 Execute 方法进行文件搜索，示例代码如下所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> Sort<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> i <span class="token keyword">As</span> <span class="token keyword">Byte</span>
	Application<span class="token punctuation">.</span>ScreenUpdating <span class="token operator">=</span> <span class="token boolean">False</span>
	<span class="token keyword">With</span> Application<span class="token punctuation">.</span>FileSearch
		<span class="token punctuation">.</span>LookIn <span class="token operator">=</span> ThisWorkbook<span class="token punctuation">.</span>Path
		<span class="token punctuation">.</span>FileType <span class="token operator">=</span> msoFileTypeExcelWorkbooks
		<span class="token keyword">If</span> <span class="token punctuation">.</span>Execute <span class="token operator">></span> <span class="token number">0</span> <span class="token keyword">Then</span>
			<span class="token keyword">For</span> i <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">To</span> <span class="token punctuation">.</span>FoundFiles<span class="token punctuation">.</span>Count
				<span class="token keyword">If</span> <span class="token punctuation">.</span>FoundFiles<span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">&lt;</span><span class="token operator">></span> ThisWorkbook<span class="token punctuation">.</span>FullName <span class="token keyword">Then</span>
					Workbooks<span class="token punctuation">.</span>Open <span class="token punctuation">.</span>FoundFiles<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
					<span class="token keyword">With</span> ActiveWorkbook
						<span class="token punctuation">.</span>Sheets<span class="token punctuation">(</span><span class="token string">"Sheet1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"A1"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"最后打开时间："</span> <span class="token operator">&amp;</span> Now
						<span class="token punctuation">.</span>Close <span class="token boolean">True</span>
					<span class="token keyword">End</span> <span class="token keyword">With</span>
				<span class="token keyword">End</span> <span class="token keyword">If</span>
			<span class="token keyword">Next</span>
		<span class="token keyword">End</span> <span class="token keyword">If</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
	Application<span class="token punctuation">.</span>ScreenUpdating <span class="token operator">=</span> <span class="token boolean">True</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>代码解析：</p>
<p>Sort 过程搜索同一目录中的所有 Excel 文件并对其进行操作。</p>
<p>第 3 行代码关闭屏幕更新功能，加快代码的运行速度。</p>
<p>第 4 行代码为文件搜索创建一个 FoundFiles 对象。</p>
<p>第 5 行代码设置要搜索的文件夹，应用于 FoundFiles 对象的 LookIn 属性返回或设置在指定的文件搜索过程中要搜索的文件夹。</p>
<p>第 6 行代码设置搜索的文件类型为 Excel 文件，应用于 FoundFiles 对象的 FileType 属性返回或设置文件搜索过程中要查找的文件类型，设置为 msoFileTypeExcelWorkbooks 返回 Excel 文件。</p>
<p>第 7 行代码开始对指定文件进行搜索，应用于 FoundFiles 对象的 Execute 方法用于搜索文件，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>Execute<span class="token punctuation">(</span>SortBy<span class="token punctuation">,</span> SortOrder<span class="token punctuation">,</span> AlwaysAccurate<span class="token punctuation">)</span>

参数expression是必需的，返回一个FoundFiles对象。
参数SortBy是可选的，用于对返回的文件进行排序。
参数SortOrder是可选的，表明所返回文件的排序顺序。
参数AlwaysAccurate是可选的，设置为<span class="token boolean">True</span>使文件搜索包括上次更新文件索引以来添加、修改或删除的文件。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>在使用 Execute 方法搜索文件时，如果没有找到文件，则返回零 (0)，如果找到一个或多个文件，则返回一个正数。</p>
<p>第 8 行代码使用 For...Next 语句遍历 Execute 方法返回的返回的文件列表。应用于FoundFiles对象的 FoundFiles 属性返回一个 FoundFiles 对象，代表由文件搜索过程中返回的文件列表。</p>
<p>第 9 行代码判断返回的单个 FoundFiles 对象的名称是否是示例文件的名称，如果否则执行后续代码。</p>
<p>第 10 行代码使用应用于 Workbooks 对象的 Open 方法打开由返回的单个 FoundFiles 对象代表的工作簿。</p>
<p>第 11 行到第 14 行代码在打开的活动工作簿的工作表中写入打开时间后保存、关闭活动工作簿。</p>
<p>运行 Sort 过程将打开示例所在文件夹中所有的 Excel 文件并对其进行相应的操作。</p>
<h2 id="_180、使用-wsh-处理文件" tabindex="-1"><a class="header-anchor" href="#_180、使用-wsh-处理文件" aria-hidden="true">#</a> 180、使用 WSH 处理文件</h2>
<p>Windows Scripting Hos（WSH）可以创建一些控制 Windows 操作系统和应用程序以及从操作系统中获取信息的小程序，而使用 WSH 的 FileSystemObject 对象可以用来处理文件系统。</p>
<p>在使用 WSH 处理文件时，必需使用 CreateObject 函数创建一个 ActiveX 对象（FileSystemObject 对象），用来提供访问计算机的文件系统，如下面的代码所示：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Dim</span> MyFile <span class="token keyword">As</span> <span class="token keyword">Object</span>
<span class="token keyword">Set</span> MyFile <span class="token operator">=</span> CreateObject<span class="token punctuation">(</span><span class="token string">"Scripting.FileSystemObject"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>上面的代码首先声明一个名为 MyFile 的对象变量，然后使用 CreateObject 函数创建一个 ActiveX 对象并将该对象赋给对象变量。</p>
<p>CreateObject 函数创建并返回一个对 ActiveX 对象的引用，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>CreateObject<span class="token punctuation">(</span><span class="token keyword">class</span><span class="token punctuation">,</span>[servername]<span class="token punctuation">)</span>

其中参数<span class="token keyword">class</span>是必需的，要创建的应用程序名称和类，使用appname<span class="token punctuation">.</span>objecttype这种语法，appname指定该对象的应用程序名称，objecttype指定该对象的类型或类。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>在声明了对象变量 MyFile 为 Windows Scripting 库的 FileSystemObject 对象后就能使用该对象的属性、方法来处理文件系统。</p>
<h3 id="_1-获取文件信息" tabindex="-1"><a class="header-anchor" href="#_1-获取文件信息" aria-hidden="true">#</a> 1）获取文件信息</h3>
<p>如果需要获得指定文件的信息，可以使用 File 对象的 Getfile 方法，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> Fileinfo<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> MyFile <span class="token keyword">As</span> <span class="token keyword">Object</span>
	<span class="token keyword">Dim</span> Str <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">Dim</span> StrMsg <span class="token keyword">As</span> <span class="token keyword">String</span>
	Str <span class="token operator">=</span> ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\123.xls"</span>
	<span class="token keyword">Set</span> MyFile <span class="token operator">=</span> CreateObject<span class="token punctuation">(</span><span class="token string">"Scripting.FileSystemObject"</span><span class="token punctuation">)</span>
	<span class="token keyword">With</span> MyFile<span class="token punctuation">.</span>Getfile<span class="token punctuation">(</span>Str<span class="token punctuation">)</span>
		StrMsg <span class="token operator">=</span> StrMsg <span class="token operator">&amp;</span> <span class="token string">"文件名称："</span> <span class="token operator">&amp;</span> <span class="token punctuation">.</span>Name <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">_</span>
			<span class="token operator">&amp;</span> <span class="token string">"文件创建日期："</span> <span class="token operator">&amp;</span> <span class="token punctuation">.</span>DateCreated <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">_</span>
			<span class="token operator">&amp;</span> <span class="token string">"文件修改日期："</span> <span class="token operator">&amp;</span> <span class="token punctuation">.</span>DateLastModified <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">_</span>
			<span class="token operator">&amp;</span> <span class="token string">"文件访问日期："</span> <span class="token operator">&amp;</span> <span class="token punctuation">.</span>DateLastAccessed <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">_</span>
			<span class="token operator">&amp;</span> <span class="token string">"文件保存路径："</span> <span class="token operator">&amp;</span> <span class="token punctuation">.</span>ParentFolder
	<span class="token keyword">End</span> <span class="token keyword">With</span>
	MsgBox StrMsg
	<span class="token keyword">Set</span> MyFile <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>代码解析：</p>
<p>Fileinfo 过程使用 Getfile 方法获取示例所在文件夹中的“123.xls”文件的信息。</p>
<p>第 5 行代码将文件路径名称赋给变量 Str。</p>
<p>第 6 行代码使用 CreateObject 函数创建 FileSystemObject 对象并将该对象赋给变量 MyFile。</p>
<p>第 7 行代码使用 Getfile 方法返回一个 File 对象。Getfile 方法返回一个和指定路径中文件相对应的 File 对象，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">object</span><span class="token punctuation">.</span>GetFile<span class="token punctuation">(</span>filespec<span class="token punctuation">)</span>

参数<span class="token keyword">object</span>是必需的，FileSystemObject对象的名称。
参数filespec是必需的，指定文件的路径。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>第 8 行到第 12 行代码根据 File 对象的属性取得文件信息，File 对象的常用属性如表格 180-1 所示。</p>
<p><u>表格 180-1</u>	File 对象的常用属性</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>Name</td>
<td>文件名称</td>
</tr>
<tr>
<td>DateCreated</td>
<td>文件创建日期</td>
</tr>
<tr>
<td>DateLastModified</td>
<td>文件最后修改日期</td>
</tr>
<tr>
<td>DateLastAccessed</td>
<td>文件最后访问日期</td>
</tr>
<tr>
<td>ParentFolder</td>
<td>文件的父文件夹</td>
</tr>
<tr>
<td>Path</td>
<td>文件的完整路径</td>
</tr>
<tr>
<td>Type</td>
<td>文件类型</td>
</tr>
<tr>
<td>Size</td>
<td>以字节表示的文件大小</td>
</tr>
</tbody>
</table>
<p>运行 Fileinfo 过程使用消息框显示“123.xls”文件的信息，如图 180-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/180-1.png" alt="" loading="lazy"></p>
<p><u>图 180-1</u>	获取文件信息</p>
</div>
<h3 id="_2-查找文件" tabindex="-1"><a class="header-anchor" href="#_2-查找文件" aria-hidden="true">#</a> 2）查找文件</h3>
<p>使用 FileSystemObject 对象的 FileExists 方法可以查找指定的文件，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> FileExis<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> MyFile <span class="token keyword">As</span> <span class="token keyword">Object</span>
	<span class="token keyword">Dim</span> Str <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">Dim</span> StrMsg <span class="token keyword">As</span> <span class="token keyword">String</span>
	Str <span class="token operator">=</span> ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\123.xls"</span>
	<span class="token keyword">Set</span> MyFile <span class="token operator">=</span> CreateObject<span class="token punctuation">(</span><span class="token string">"Scripting.FileSystemObject"</span><span class="token punctuation">)</span>
	<span class="token keyword">If</span> MyFile<span class="token punctuation">.</span>FileExists<span class="token punctuation">(</span>Str<span class="token punctuation">)</span> <span class="token keyword">Then</span>
		MsgBox <span class="token string">"文件已找到!"</span>
	<span class="token keyword">Else</span>
		MsgBox <span class="token string">"文件不存在!"</span>
	<span class="token keyword">End</span> <span class="token keyword">If</span>
	<span class="token keyword">Set</span> MyFile <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>代码解析：</p>
<p>FileExis 过程使用 FileExists 方法查找示例所在文件夹中是否存在“123.xls”文件。</p>
<p>第 6 行代码使用 CreateObject 函数创建 FileSystemObject 对象并将该对象赋给变量 MyFile。</p>
<p>第 7 行代码使用 FileExists 方法可以查找文件。应用于 FileSystemObject 对象的 FileExists 方法查找指定的文件，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">object</span><span class="token punctuation">.</span>FileExists<span class="token punctuation">(</span>filespec<span class="token punctuation">)</span>

参数<span class="token keyword">object</span>是必需的，FileSystemObject对象的名称。
参数filespec是必需的，要确定是否存在的文件的名字。如果文件不在当前文件夹中，必须提供一个完整的路径说明。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>使用 FileExists 方法查找文件时如果指定的文件存在，返回 True，若不存在，则返回 False，根据返回值可以确定所要查找的文件是否存在。</p>
<h3 id="_3-移动文件" tabindex="-1"><a class="header-anchor" href="#_3-移动文件" aria-hidden="true">#</a> 3）移动文件</h3>
<p>如果需要把文件从一个地方移动到另一个地方，可以使用 FileSystemObject 对象的 MoveFile 方法，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> MoveFile<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> MyFile <span class="token keyword">As</span> <span class="token keyword">Object</span>
	<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">Resume</span> <span class="token keyword">Next</span>
	<span class="token keyword">Set</span> MyFile <span class="token operator">=</span> CreateObject<span class="token punctuation">(</span><span class="token string">"Scripting.FileSystemObject"</span><span class="token punctuation">)</span>
	MyFile<span class="token punctuation">.</span>MoveFile ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\123.xls"</span><span class="token punctuation">,</span> ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\ABC\"</span>
	<span class="token keyword">Set</span> MyFile <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>代码解析：</p>
<p>MoveFile 过程使用 MoveFile 方法将示例文件所在文件夹中的“123.xls”文件移动到“ABC”文件夹中。</p>
<p>第 4 行代码使用 CreateObject 函数创建 FileSystemObject 对象并将该对象赋给变量 MyFile。</p>
<p>第 5 行代码使用 MoveFile 方法移动文件。应用于 FileSystemObject 对象的 MoveFile 方法将一个或多个文件从一个地方移动到另一个地方，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">object</span><span class="token punctuation">.</span>MoveFile source<span class="token punctuation">,</span> destination 

参数<span class="token keyword">object</span>是必需的， FileSystemObject对象的名称。
参数source是必需的，一个或多个要移动文件的路径，source参数字符串在路径的最后部件中可以使用通配符。
参数destinatio是必需的，一个或多个文件要移动到的目标路径，不能使用通配符。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>运行 MoveFile 过程将示例文件所在文件夹中的“123.xls”文件移动到同一目录中的“ABC”文件夹。</p>
<h3 id="_4-复制文件" tabindex="-1"><a class="header-anchor" href="#_4-复制文件" aria-hidden="true">#</a> 4）复制文件</h3>
<p>如果需要把文件从一个地方复制到另一个地方，可以使用 CopyFile 方法，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> CopyFile<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> MyFile <span class="token keyword">As</span> <span class="token keyword">Object</span>
	<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">Resume</span> <span class="token keyword">Next</span>
	<span class="token keyword">Set</span> MyFile <span class="token operator">=</span> CreateObject<span class="token punctuation">(</span><span class="token string">"Scripting.FileSystemObject"</span><span class="token punctuation">)</span>
	MyFile<span class="token punctuation">.</span>CopyFile ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\123.xls"</span><span class="token punctuation">,</span> ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\ABC\"</span>
	<span class="token keyword">Set</span> MyFile <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>代码解析：</p>
<p>CopyFile 过程使用 CopyFile 方法将示例文件所在文件夹中的“123.xls”文件复制到“ABC”文件夹中。</p>
<p>第 4 行代码使用 CreateObject 函数创建 FileSystemObject 对象并将该对象赋给变量 MyFile。</p>
<p>第 5 行代码使用 CopyFile 方法复制文件。应用于 FileSystemObject 对象的 CopyFile 方法把一个或多个文件从一个地方复制到另一个地方，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">object</span><span class="token punctuation">.</span>CopyFile source<span class="token punctuation">,</span> destination[<span class="token punctuation">,</span> overwrite]

参数<span class="token keyword">object</span>是必需的， FileSystemObject对象的名字。
参数source是必需的，指明一个或多个要被复制文件的字符串文件说明，可以包括通配符。
参数destination是必需的，指明参数source中的一个或多个文件要被复制到的接受端的字符串，不允许有通配符。
参数overwrite是可选的，表示存在的文件是否被覆盖。如果是<span class="token boolean">True</span>，文件将被覆盖；如果是<span class="token boolean">False</span>，它们不被覆盖，缺省值是<span class="token boolean">True</span>。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>如果参数 destination 指定的接受端具有只读属性设置，不论参数 overwrite 的值如何设置，CopyFile 方法都将失败。</p>
</div>
<p>运行 CopyFile 过程将示例文件所在文件夹中的“123.xls”文件复制到“ABC”文件夹中。</p>
<h3 id="_5-删除文件" tabindex="-1"><a class="header-anchor" href="#_5-删除文件" aria-hidden="true">#</a> 5）删除文件</h3>
<p>如果需要删除一个指定的文件，可以使用 DeleteFile 方法，如下面的代码所示</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> DelFile<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> MyFile <span class="token keyword">As</span> <span class="token keyword">Object</span>
	<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">Resume</span> <span class="token keyword">Next</span>
	<span class="token keyword">Set</span> MyFile <span class="token operator">=</span> CreateObject<span class="token punctuation">(</span><span class="token string">"Scripting.FileSystemObject"</span><span class="token punctuation">)</span>
	MyFile<span class="token punctuation">.</span>DeleteFile ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\123.xls"</span>
	<span class="token keyword">Set</span> MyFile <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>代码解析：</p>
<p>DelFile 过程使 DeleteFile 方法删除示例文件所在文件夹中的“123.xls”文件。</p>
<p>第 4 行代码使用 CreateObject 函数创建 FileSystemObject 对象并将该对象赋给变量 MyFile。</p>
<p>第 5 行代码使用 DeleteFile 方法复制文件。应用于 FileSystemObject 对象的 DeleteFile 方法删除一个指定的文件，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">object</span><span class="token punctuation">.</span>DeleteFile filespec[<span class="token punctuation">,</span> force]

参数<span class="token keyword">object</span>是必需的， FileSystemObject对象的名字。
参数filespec是必需的，指明要删除文件的名字，可以在最后的路径部件中包含通配符。
参数force是可选的，如果要删除具有只读属性设置的文件，其值为<span class="token boolean">True</span>。如果其值为<span class="token boolean">False</span>（缺省），则不能删除具有只读属性设置的文件。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>运行 DelFile 过程删除示例文件所在文件夹中的“123.xls”文件。</p>
<h3 id="_6-创建文件夹" tabindex="-1"><a class="header-anchor" href="#_6-创建文件夹" aria-hidden="true">#</a> 6）创建文件夹</h3>
<p>如果需要创建一个文件夹，可以使用 CreateFolder 方法，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> CreFolder<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> MyFile <span class="token keyword">As</span> <span class="token keyword">Object</span>
	<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">Resume</span> <span class="token keyword">Next</span>
	<span class="token keyword">Set</span> MyFile <span class="token operator">=</span> CreateObject<span class="token punctuation">(</span><span class="token string">"Scripting.FileSystemObject"</span><span class="token punctuation">)</span>
	MyFile<span class="token punctuation">.</span>CreateFolder <span class="token punctuation">(</span>ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\ABC"</span><span class="token punctuation">)</span>
	<span class="token keyword">Set</span> MyFile <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>代码解析：</p>
<p>CreFolder 过程使 CreateFolder 方法在示例文件所在文件夹中创建一个“ABC”文件夹。</p>
<p>第 4 行代码使用 CreateObject 函数创建 FileSystemObject 对象并将该对象赋给变量 MyFile。</p>
<p>第 5 行代码使用 CreateFolder 方法创建文件夹。应用于 FileSystemObject 对象的 CreateFolder 方法创建一个文件夹，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">object</span><span class="token punctuation">.</span>CreateFolder<span class="token punctuation">(</span>foldername<span class="token punctuation">)</span>

参数<span class="token keyword">object</span>是必需的， FileSystemObject对象的名字。
参数foldername是必需的，字符串表达式，指明要创建文件夹的名称和路径。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>运行 CreFolder 过程将在示例文件所在文件夹中创建一个“ABC”文件夹。</p>
<h3 id="_7-复制文件夹" tabindex="-1"><a class="header-anchor" href="#_7-复制文件夹" aria-hidden="true">#</a> 7）复制文件夹</h3>
<p>如果需要复制文件夹，可以使用 CopyFolder 方法，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> CopyFolder<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> MyFile <span class="token keyword">As</span> <span class="token keyword">Object</span>
	<span class="token keyword">Set</span> MyFile <span class="token operator">=</span> CreateObject<span class="token punctuation">(</span><span class="token string">"Scripting.FileSystemObject"</span><span class="token punctuation">)</span>
	MyFile<span class="token punctuation">.</span>CopyFolder ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\ABC"</span><span class="token punctuation">,</span> ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\123"</span>
	<span class="token keyword">Set</span> MyFile <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>代码解析：</p>
<p>CopyFolder 过程使 CopyFolder 方法将示例文件所在文件夹中的“ABC”文件夹复制并改名为“123”文件夹。</p>
<p>第 3 行代码使用 CreateObject 函数创建 FileSystemObject 对象并将该对象赋给变量 MyFile。</p>
<p>第 4 行代码使用 CopyFolder 方法复制文件夹。应用于 FileSystemObject 对象的 CreateObject 方法从一个地方递归地复制一个文件夹到另一个地方，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">object</span><span class="token punctuation">.</span>CopyFolder source<span class="token punctuation">,</span> destination[<span class="token punctuation">,</span> overwrite]

参数<span class="token keyword">object</span>是必需的， FileSystemObject对象的名字。
参数source是必需的，指明一个或多个被复制文件夹的字符串文件夹说明，可以包括通配符。
参数destination是必需的，被复制文件夹和子文件夹的接受端的字符串，不允许有通配符。
参数overwrite是可选的，表示已存在的文件夹是否被覆盖。如果为<span class="token boolean">True</span>，文件被覆盖，如果为<span class="token boolean">False</span>，文件不被覆盖。缺省值为<span class="token boolean">True</span>。
如果参数source中包含通配符或参数destination以路径分隔符（<span class="token operator">\</span>）为结尾，则认为参数destination是一个已存在的文件夹，在其中复制相匹配的文件夹和子文件夹。否则认为参数destination是一个要创建的文件夹的名字。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>运行 CopyFolder 过程将示例文件所在文件夹中的“ABC”文件夹复制并改名为“123”文件夹。</p>
<h3 id="_8-移动文件夹" tabindex="-1"><a class="header-anchor" href="#_8-移动文件夹" aria-hidden="true">#</a> 8）移动文件夹</h3>
<p>如果需要移动文件夹，可以使用 MoveFolder 方法，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> MoveFolder<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> MyFile <span class="token keyword">As</span> <span class="token keyword">Object</span>
	<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">Resume</span> <span class="token keyword">Next</span>
	<span class="token keyword">Set</span> MyFile <span class="token operator">=</span> CreateObject<span class="token punctuation">(</span><span class="token string">"Scripting.FileSystemObject"</span><span class="token punctuation">)</span>
	MyFile<span class="token punctuation">.</span>MoveFolder ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\123"</span><span class="token punctuation">,</span> <span class="token string">"F:\123"</span>
	<span class="token keyword">Set</span> MyFile <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>代码解析：</p>
<p>MoveFolder 过程使 MoveFolder 方法将示例文件所在文件夹中的“123”文件夹移动到F盘中。</p>
<p>第 4 行代码使用 CreateObject 函数创建 FileSystemObject 对象并将该对象赋给变量 MyFile。</p>
<p>第 5 行代码使 MoveFolder 方法移动文件夹。应用于 FileSystemObject 对象的 MoveFolder 方法将一个或多个文件夹从一个地方移动到另一个地方，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">object</span><span class="token punctuation">.</span>MoveFolder source<span class="token punctuation">,</span> destination

参数<span class="token keyword">object</span>是必需的， FileSystemObject对象的名字。
参数source是必需的，指明一个或多个要移动文件夹的字符串文件夹说明，在路径的最后部件中可以包括通配符。
参数destination是必需的，一个或多个文件夹要移动到的目标路径，不能包含通配符。
如果参数source中包含通配符或参数destination以路径分隔符（<span class="token operator">\</span>）为结尾，则认为参数destination是一个已存在的文件夹，在此文件夹中移动相匹配的文件。否则认为参数destination是一个要创建的文件夹的名字。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>运行 MoveFolder 过程将示例文件所在文件夹中的“123”文件夹移动到F盘中。</p>
<h3 id="_9-删除文件夹" tabindex="-1"><a class="header-anchor" href="#_9-删除文件夹" aria-hidden="true">#</a> 9）删除文件夹</h3>
<p>如果需要删除一个文件夹，可以使用 DeleteFolder 方法，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> DelFolder<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> MyFile <span class="token keyword">As</span> <span class="token keyword">Object</span>
	<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">Resume</span> <span class="token keyword">Next</span>
	<span class="token keyword">Set</span> MyFile <span class="token operator">=</span> CreateObject<span class="token punctuation">(</span><span class="token string">"Scripting.FileSystemObject"</span><span class="token punctuation">)</span>
	MyFile<span class="token punctuation">.</span>DeleteFolder ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\123"</span>
	<span class="token keyword">Set</span> MyFile <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>代码解析：</p>
<p>DelFolder 过程使 DeleteFolder 方法删除示例文件所在文件夹中的“123”文件夹。</p>
<p>第 4 行代码使用 CreateObject 函数创建 FileSystemObject 对象并将该对象赋给变量 MyFile。</p>
<p>第 5 行代码使用 DeleteFolder 方法删除文件。应用于 FileSystemObject 对象的 DeleteFolder 方法删除一个指定的文件夹和其中的内容，语法如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>object.DeleteFolder folderspec[, force]

参数object是必需的， FileSystemObject对象的名字。
参数filespec是必需的，指明要删除的文件夹的名称，可以在最后的路径部件中包含通配符。
参数force是可选的，如果要删除具有只读属性设置的文件夹，其值为True。如果其值为False（缺省），则不能删除具有只读属性设置的文件夹。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>运行 DelFolder 过程删除示例文件所在文件夹中的“123.xls”文件夹。</p>
<h3 id="_10-导入文本文件" tabindex="-1"><a class="header-anchor" href="#_10-导入文本文件" aria-hidden="true">#</a> 10）导入文本文件</h3>
<p>如果需要从文本文件中导入数据，可以使用 OpenTextFile 方法，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> OpenText<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> MyFile <span class="token keyword">As</span> <span class="token keyword">Object</span>
	<span class="token keyword">Dim</span> mArr<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">Dim</span> j <span class="token keyword">As</span> <span class="token keyword">Integer</span><span class="token punctuation">,</span> i <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	j <span class="token operator">=</span> <span class="token number">1</span>
	Sheet1<span class="token punctuation">.</span>UsedRange<span class="token punctuation">.</span>ClearContents
	<span class="token keyword">Set</span> MyFile <span class="token operator">=</span> CreateObject<span class="token punctuation">(</span><span class="token string">"Scripting.FileSystemObject"</span><span class="token punctuation">)</span> <span class="token operator">_</span>
		<span class="token punctuation">.</span>OpenTextFile<span class="token punctuation">(</span>ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\"</span> <span class="token operator">&amp;</span> <span class="token string">"工资表.txt"</span><span class="token punctuation">)</span>
	<span class="token keyword">Do</span> <span class="token keyword">While</span> <span class="token keyword">Not</span> MyFile<span class="token punctuation">.</span>AtEndOfStream
		mArr <span class="token operator">=</span> Split<span class="token punctuation">(</span>MyFile<span class="token punctuation">.</span>ReadLine<span class="token punctuation">,</span> <span class="token string">","</span><span class="token punctuation">)</span>
		<span class="token keyword">For</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token keyword">To</span> UBound<span class="token punctuation">(</span>mArr<span class="token punctuation">)</span>
			Sheet1<span class="token punctuation">.</span>Cells<span class="token punctuation">(</span>j<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=</span> mArr<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
		<span class="token keyword">Next</span>
		j <span class="token operator">=</span> j <span class="token operator">+</span> <span class="token number">1</span>
	<span class="token keyword">Loop</span>
	MyFile<span class="token punctuation">.</span>Close
	<span class="token keyword">Set</span> MyFile <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>代码解析：</p>
<p>OpenText 过程使用 OpenTextFile 方法打开示例文件所在文件夹中的“工资表.txt”文件并将数据导入到工作表中。</p>
<p>第 7、8 行代码使用 OpenTextFile 方法打开文本文件。应用于 FileSystemObject 对象的 OpenTextFile 方法打开一个指定的文件并返回一个 TextStream 对象，该对象可用于对文件进行读操作或追加操作，语法如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>object.OpenTextFile(filename[, iomode[, create[, format]]])

参数object是必需的，FileSystemObject对象的名字。
参数filename是必需的，需要打开的文件名称。
参数iomode是可选的，表示输入/输出方式，设置值如表格180-2所示。
参数create是可选的，它表示如果指定的参数filename不存在是否可以创建一个新文件。如果创建新文件，其值为True。若不创建文件其值为False。缺省值为False。
参数format是可选的，打开文件的格式，设置值如表格180-3所示。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><u>表格 180-2</u>	iomode 参数设置值</p>
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
<td>ForReading</td>
<td>1</td>
<td>打开一个只读文件，不能对此文件进行写操作。</td>
</tr>
<tr>
<td>ForAppending</td>
<td>8</td>
<td>打开一个文件并写到文件的尾部。</td>
</tr>
</tbody>
</table>
<p><u>表格 180-3</u>	format 参数设置值</p>
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
<td>TristateUseDefault</td>
<td>-2</td>
<td>使用系统缺省打开文件</td>
</tr>
<tr>
<td>TristateTrue</td>
<td>-1</td>
<td>以 Unicode 格式打开文件</td>
</tr>
<tr>
<td>TristateFalse</td>
<td>0</td>
<td>以 ASCII 格式打开文件</td>
</tr>
</tbody>
</table>
<p>第 9 行代码开始对文本文件进行读操作。应用于 TextStream 对象的 AtEndOfStream 属性指示文件指针是否位于 TextStream 文件中的结尾，如果是返回 True，否则返回 False。</p>
<p>第 10 行代码使用 Split 函数将逐行读取的字符串以逗号进行分隔后赋给数组 mArr。关于 Split 函数请参阅 169-2。</p>
<p>应用于 TextStream 对象的 ReadLine 方法从一个 TextStream 文件读取一整行（到换行符但不包括换行符）并返回得到的字符串，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">object</span><span class="token punctuation">.</span>ReadLine

参数<span class="token keyword">object</span>是必需的，TextStream对象的名字。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>第 11 行到第 14 行代码将数组元素写入到工作表的单元格。</p>
<p>第 15 行代码重新读取下一行数据。</p>
<p>第 16 行使用 Close 方法关闭打开的文本文件。</p>
<p>运行 OpenText 过程将“工资表.txt”文件的数据导入到工作表中。</p>
<h3 id="_11-创建文本文件" tabindex="-1"><a class="header-anchor" href="#_11-创建文本文件" aria-hidden="true">#</a> 11）创建文本文件</h3>
<p>如果需要将工作表中的数据保存为文本文件，可以创建一个文本文件用于保存数据。</p>
<p>使用 CreateTextFile 方法创建文本文件，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> CreText<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> MyFile <span class="token keyword">As</span> <span class="token keyword">Object</span>
	<span class="token keyword">Dim</span> myStr <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">Dim</span> j <span class="token keyword">As</span> <span class="token keyword">Integer</span><span class="token punctuation">,</span> i <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">Set</span> MyFile <span class="token operator">=</span> CreateObject<span class="token punctuation">(</span><span class="token string">"Scripting.FileSystemObject"</span><span class="token punctuation">)</span> <span class="token operator">_</span>
		<span class="token punctuation">.</span>CreateTextFile<span class="token punctuation">(</span>ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\"</span> <span class="token operator">&amp;</span> <span class="token string">"工资表.txt"</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">)</span>
		<span class="token keyword">For</span> i <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">To</span> Range<span class="token punctuation">(</span><span class="token string">"A65536"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">End</span><span class="token punctuation">(</span>xlUp<span class="token punctuation">)</span><span class="token punctuation">.</span>Row
			myStr <span class="token operator">=</span> <span class="token string">""</span>
			<span class="token keyword">For</span> j <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">To</span> Range<span class="token punctuation">(</span><span class="token string">"IV"</span><span class="token operator">&amp;</span> i<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">End</span><span class="token punctuation">(</span>xlToLeft<span class="token punctuation">)</span><span class="token punctuation">.</span>Column
				myStr <span class="token operator">=</span> myStr <span class="token operator">&amp;</span> Cells<span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">","</span>
			<span class="token keyword">Next</span>
			myStr <span class="token operator">=</span> Left<span class="token punctuation">(</span>myStr<span class="token punctuation">,</span> <span class="token punctuation">(</span>Len<span class="token punctuation">(</span>myStr<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			MyFile<span class="token punctuation">.</span>WriteLine <span class="token punctuation">(</span>myStr<span class="token punctuation">)</span>
		<span class="token keyword">Next</span>
	MyFile<span class="token punctuation">.</span>Close
	<span class="token keyword">Set</span> MyFile <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>代码解析：</p>
<p>CreText 过程使 CreateTextFile 方法创建一个指定名称的文本文件并将工作表数据写入到文件内。</p>
<p>第 5、6 行代码使用 CreateObject 函数创建 FileSystemObject 对象并将该对象赋给变量 MyFile 后使用 CreateTextFile 方法创建一个指定名称的文本文件。</p>
<p>应用于 FileSystemObject 对象的 CreateTextFile 方法创建一个指定的文件并且返回一个用于该文件读写的 TextStream 对象，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">object</span><span class="token punctuation">.</span>CreateTextFile<span class="token punctuation">(</span>filename[<span class="token punctuation">,</span> overwrite[<span class="token punctuation">,</span> unicode]]<span class="token punctuation">)</span>

参数<span class="token keyword">object</span>是必需的，FileSystemObject对象的名字。
参数filename是必需的，需要创建的文件名称。
参数overwrite是可选的，表示是否覆盖已存在文件。如果可被覆盖其值为<span class="token boolean">True</span>，其值为<span class="token boolean">False</span>时不能覆盖，如果省略，则已存在文件不能覆盖。
参数unicode是可选的，表示文件是作为一个Unicode文件创建的还是作为一个ASCII文件创建的。如果作为一个Unicode文件创建，其值为<span class="token boolean">True</span>，作为一个ASCII文件创建，其值为<span class="token boolean">False</span>，如果省略，则认为是一个ASCII文件。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>第 7 行代码逐行读取工作表数据。</p>
<p>第 8 行代码清空字符串变量 myStr 的内容，用来保存下一行的数据。</p>
<p>第 9 行代码遍历当前行的所有单元格。</p>
<p>第 10 行代码将当前行的所有单元格保存到字符串变量 myStr 中并以逗号进行分隔。</p>
<p>第 12 行代码去除保存在字符串变量 myStr 中当前行数据的最后一个逗号。</p>
<p>第 13 行代码使用 WriteLine 方法将当前行数据写入到创建的文本文件。</p>
<p>应用于 TextStream 对象的 WriteLine 方法写入一个指定的字符串和换行符到一个 TextStream 文件中，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">object</span><span class="token punctuation">.</span>WriteLine<span class="token punctuation">(</span>[<span class="token keyword">string</span>]<span class="token punctuation">)</span>

参数<span class="token keyword">object</span>是必需的，TextStream对象的名字。
参数<span class="token keyword">string</span>是可选的，要写入文件的正文。如果省略，写入一个换行符。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>第 15 行使用 Close 方法关闭打开的文本文件。</p>
<p>还可以使用 OpenTextFile 方法创建文本文件，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> OpenText<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> MyFile <span class="token keyword">As</span> <span class="token keyword">Object</span>
	<span class="token keyword">Dim</span> myStr <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">Dim</span> j <span class="token keyword">As</span> <span class="token keyword">Integer</span><span class="token punctuation">,</span> i <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">Set</span> MyFile <span class="token operator">=</span> CreateObject<span class="token punctuation">(</span><span class="token string">"Scripting.FileSystemObject"</span><span class="token punctuation">)</span> <span class="token operator">_</span>
		<span class="token punctuation">.</span>OpenTextFile<span class="token punctuation">(</span>ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\"</span> <span class="token operator">&amp;</span> <span class="token string">"工资表.txt"</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">)</span>
		<span class="token keyword">For</span> i <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">To</span> Range<span class="token punctuation">(</span><span class="token string">"A65536"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">End</span><span class="token punctuation">(</span>xlUp<span class="token punctuation">)</span><span class="token punctuation">.</span>Row
			myStr <span class="token operator">=</span> <span class="token string">""</span>
			<span class="token keyword">For</span> j <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">To</span> Range<span class="token punctuation">(</span><span class="token string">"IV"</span> <span class="token operator">&amp;</span> i<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">End</span><span class="token punctuation">(</span>xlToLeft<span class="token punctuation">)</span><span class="token punctuation">.</span>Column
				myStr <span class="token operator">=</span> myStr <span class="token operator">&amp;</span> Cells<span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">","</span>
			<span class="token keyword">Next</span>
			myStr <span class="token operator">=</span> Left<span class="token punctuation">(</span>myStr<span class="token punctuation">,</span> <span class="token punctuation">(</span>Len<span class="token punctuation">(</span>myStr<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			MyFile<span class="token punctuation">.</span>WriteLine <span class="token punctuation">(</span>myStr<span class="token punctuation">)</span>
		<span class="token keyword">Next</span>
	MyFile<span class="token punctuation">.</span>Close
	<span class="token keyword">Set</span> MyFile <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>代码解析：</p>
<p>OpenText 过程使 OpenTextFile 方法创建一个指定名称的文本文件并将工作表数据写入到文件内。</p>
<p>应用于 FileSystemObject 对象的 OpenTextFile 方法打开一个指定的文件并返回一个  TextStream 对象，该对象可用于对文件进行读操作或追加操作，请参阅 180-10。</p>
<p>示例中将 OpenTextFile 方法的 iomode 参数设置为 8，打开文本文件后在文件的尾部进行追加操作；将 create 参数设置为 True，如果指定的文本文件不存在则创建一个新文件。</p>
<div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>如果重复运行 OpenText 过程将在文本文件中重复写入工作表数据，所以 OpenTextFile 方法更适用于对文本文件进行追加操作。</p>
</div>
<p>OpenText 过程的其他代码请参阅 CreText 过程的代码解析。</p>
<p>运行 CreText 过程和 OpenText 过程将在示例所在的文件夹中创建一个名称为“工资表”的文本文件并将工作表数据读入到文件内。</p>
</template>
