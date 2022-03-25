<template><h2 id="_53、在工作表中添加图形" tabindex="-1"><a class="header-anchor" href="#_53、在工作表中添加图形" aria-hidden="true">#</a> 53、在工作表中添加图形</h2>
<p>如果需要在工作表中添加图形对象，可以使用 AddShape 方法，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> AddShape<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> myShape <span class="token keyword">As</span> Shape
	<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">Resume</span> <span class="token keyword">Next</span>
	Sheet1<span class="token punctuation">.</span>Shapes<span class="token punctuation">(</span><span class="token string">"myShape"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Delete
	<span class="token keyword">Set</span> myShape <span class="token operator">=</span> Sheet1<span class="token punctuation">.</span>Shapes<span class="token punctuation">.</span>AddShape<span class="token punctuation">(</span>msoShapeRectangle<span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">280</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>
	<span class="token keyword">With</span> myShape
		<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"myShape"</span>
		<span class="token keyword">With</span> <span class="token punctuation">.</span>TextFrame<span class="token punctuation">.</span>Characters
			<span class="token punctuation">.</span>Text <span class="token operator">=</span> <span class="token string">"单击将选择Sheet2!"</span>
			<span class="token keyword">With</span> <span class="token punctuation">.</span>Font
				<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"华文行楷"</span>
				<span class="token punctuation">.</span>FontStyle <span class="token operator">=</span> <span class="token string">"常规"</span>
				<span class="token punctuation">.</span>Size <span class="token operator">=</span> <span class="token number">22</span>
				<span class="token punctuation">.</span>ColorIndex <span class="token operator">=</span> <span class="token number">7</span>
			<span class="token keyword">End</span> <span class="token keyword">With</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
		<span class="token keyword">With</span> <span class="token punctuation">.</span>TextFrame	
			<span class="token punctuation">.</span>HorizontalAlignment <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">4108</span>
			<span class="token punctuation">.</span>VerticalAlignment <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">4108</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
		<span class="token punctuation">.</span>Placement <span class="token operator">=</span> <span class="token number">3</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
	myShape<span class="token punctuation">.</span><span class="token keyword">Select</span>
	<span class="token keyword">With</span> Selection<span class="token punctuation">.</span>ShapeRange
		<span class="token keyword">With</span> <span class="token punctuation">.</span>Line
			<span class="token punctuation">.</span>Weight <span class="token operator">=</span> <span class="token number">1</span>
			<span class="token punctuation">.</span>DashStyle <span class="token operator">=</span> msoLineSolid
			<span class="token punctuation">.</span>Style <span class="token operator">=</span> msoLineSingle
			<span class="token punctuation">.</span>Transparency <span class="token operator">=</span> <span class="token number">0</span>
			<span class="token punctuation">.</span>Visible <span class="token operator">=</span> msoTrue
			<span class="token punctuation">.</span>ForeColor<span class="token punctuation">.</span>SchemeColor <span class="token operator">=</span> <span class="token number">40</span>
			<span class="token punctuation">.</span>BackColor<span class="token punctuation">.</span>RGB <span class="token operator">=</span> RGB<span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
		<span class="token keyword">With</span> <span class="token punctuation">.</span>Fill
			<span class="token punctuation">.</span>Transparency <span class="token operator">=</span> <span class="token number">0</span>
			<span class="token punctuation">.</span>Visible <span class="token operator">=</span> msoTrue
			<span class="token punctuation">.</span>ForeColor<span class="token punctuation">.</span>SchemeColor <span class="token operator">=</span> <span class="token number">41</span>
			<span class="token punctuation">.</span>OneColorGradient <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">0.23</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
	Sheet1<span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"A1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">Select</span>
	Sheet1<span class="token punctuation">.</span>Hyperlinks<span class="token punctuation">.</span>Add Anchor<span class="token punctuation">:</span><span class="token operator">=</span>myShape<span class="token punctuation">,</span> Address<span class="token punctuation">:</span><span class="token operator">=</span><span class="token string">""</span><span class="token punctuation">,</span> <span class="token operator">_</span>
		SubAddress<span class="token punctuation">:</span><span class="token operator">=</span><span class="token string">"Sheet2!A1"</span><span class="token punctuation">,</span> ScreenTip<span class="token punctuation">:</span><span class="token operator">=</span><span class="token string">"选择Sheet2!"</span>
	<span class="token keyword">Set</span> myShape <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><p>代码解析：</p>
<p>AddShape 过程在工作表中添加一个矩形并设置其外观等属性。</p>
<p>第 2 行代码声明变量 myShape 的对象类型。</p>
<p>第 3、4 行代码删除可能存在的名称为“myShape”的图形对象。</p>
<p>第 5 行代码使用 AddShape 方法在工作表中添加一个矩形。当该方法应用于 Shapes 对象时，返回一个 Shape 对象，该对象代表工作表中的新自选图形，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>AddShape<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">,</span> Left<span class="token punctuation">,</span> Top<span class="token punctuation">,</span> Width<span class="token punctuation">,</span> Height<span class="token punctuation">)</span>

参数expression是必需的，返回一个Shapes对象。
参数<span class="token keyword">Type</span>是必需的，指定要创建的自选图形的类型。
参数Left和Top是必需的，以磅为单位给出自选图形边框左上角的位置。
参数Width和Height是必需的，以磅为单位给出自选图形边框的宽度和高度。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>第 7 行代码将新建图形命名为“myShape”，向 Shapes 集合添加新的图形时，将对新添加的图形赋以默认的名称，若要为图形指定更有意义的名称，可指定其 Name 属性。</p>
<p>第 8 行到第 16 行代码为矩形添加文字，并设定其格式。</p>
<p>其中第 8 行代码使用 TextFrame 属性和 Characters 方法返回该矩形的字符区域。应用于 Shape 对象的 TextFrame 属性返回一个 TextFrame 对象，该对象包含指定图形对象的对齐和定位属性；Characters 方法返回一个 Characters 对象，该对象代表某个图形的文本框中的字符区域，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>Characters<span class="token punctuation">(</span>Start<span class="token punctuation">,</span> Length<span class="token punctuation">)</span>

参数expression是必需的，返回一个指定文本框内Characters对象的表达式。
参数Start是可选的，表示将要返回的第一个字符，如果此参数设置为 <span class="token number">1</span> 或被忽略，则Characters方法会返回以第一个字符为起始字符的字符区域。
参数Length是可选的，表示要返回的字符个数。如果此参数被忽略，则Characters方法会返回该字符串的剩余部分（由Start参数指定的字符以后的所有字符）。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>第 9 行代码为矩形添加文字，应用于 Characters 对象的 Text 属性返回或设置对象的文本，为可读写的 String 类型。</p>
<p>第 10 行到第 15 行代码设置矩形中文字的属性，应用于 Characters 对象 Font 属性返回一个 Font 对象，该对象代表指定对象的字体属性（字体名称、字体大小、字体颜色等），第 11 行代码设置字体名称，第 12 行代码设置字体样式，第 13 行代码设置字体大小，第 14 行代码颜色。</p>
<p>第 17 行到第 20 行代码设定矩形中文字的对齐方式。应用于 TextFrame 对象的 HorizontalAlignment 属性返回或设置指定对象的水平对齐方式，可为表格 53-1 所示的 XlHAlign常量之一。</p>
<p><u>表格 53-1</u>	HorizontalAlignment 属性的 XlHAlign 常量</p>
<table>
<thead>
<tr>
<th>常量</th>
<th>值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>xlHAlignCenter</td>
<td>-4108</td>
<td>居中</td>
</tr>
<tr>
<td>xlHAlignCenterAcrossSelection</td>
<td>7</td>
<td>靠左</td>
</tr>
<tr>
<td>xlHAlignDistributed</td>
<td>-4117</td>
<td>分散对齐</td>
</tr>
<tr>
<td>xlHAlignFill</td>
<td>5</td>
<td>分散对齐</td>
</tr>
<tr>
<td>xlHAlignGeneral</td>
<td>1</td>
<td>靠左</td>
</tr>
<tr>
<td>xlHAlignJustify</td>
<td>-4130</td>
<td>两端对齐</td>
</tr>
<tr>
<td>xlHAlignLeft</td>
<td>-4131</td>
<td>靠左</td>
</tr>
<tr>
<td>xlHAlignRight</td>
<td>-4152</td>
<td>靠右</td>
</tr>
</tbody>
</table>
<p>应用于 TextFrame 对象的 VerticalAlignment 属性返回或设置指定对象的垂直对齐方式，可为表格 53-2 所示的 XlHAlign 常量之一。</p>
<p><u>表格 53-2</u>	VerticalAlignment 属性的 XlHAlign 常量</p>
<table>
<thead>
<tr>
<th>常量</th>
<th>值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>xlVAlignCenter</td>
<td>-4108</td>
<td>居中</td>
</tr>
<tr>
<td>xlVAlignJustify</td>
<td>-4130</td>
<td>两端对齐</td>
</tr>
<tr>
<td>xlVAlignBottom</td>
<td>-4107</td>
<td>靠下</td>
</tr>
<tr>
<td>xlVAlignDistributed</td>
<td>-4117</td>
<td>分散对齐</td>
</tr>
<tr>
<td>xlVAlignTop</td>
<td>-4160</td>
<td>靠上</td>
</tr>
</tbody>
</table>
<p>第 21 行代码设置矩形大小和位置不随单元格而变，应用于 Shape 对象的 Placement 属性返回或设置对象与所在的单元格之间的附属关系，可为表格 53-3 所示的 XlPlacement 常量之一。</p>
<p><u>表格 53-3</u>	XlPlacement 常量</p>
<table>
<thead>
<tr>
<th>常量</th>
<th>值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>xlFreeFloating</td>
<td>3</td>
<td>大小、位置均固定</td>
</tr>
<tr>
<td>xlMove</td>
<td>2</td>
<td>大小固定、位置随单元格而变</td>
</tr>
<tr>
<td>xlMoveAndSize</td>
<td>1</td>
<td>大小、位置随单元格而变</td>
</tr>
</tbody>
</table>
<p>第 24 行到第 32 行代码设置矩形的边框线条格式，应用于 ShapeRange 集合的 Line 属性返回一个 LineFormat 对象，该对象包含指定图形的线条格式属性。</p>
<p>其中第 26 行代码设置矩形线条粗细，第 27 行代码设置矩形线条的虚线样式，第 28 行代码设置矩形填充的透明度，第 29 行代码设置矩形为可见，第 30 行代码设置矩形的前景色，第 31 行代码设置矩形填充背景的颜色。</p>
<p>第 33 行到第 38 行代码设置矩形的内部填充格式，应用于 ShapeRange 集合的 Fill 属性返回 FillFormat 对象，该对象包含指定的图表或图形的填充格式属性。</p>
<p>其中第 35 行代码设置矩形内部的透明度，第 36 行代码设置矩形内部为可见，第 37 行代码设置矩形内部的前景色，第 38 行代码将矩形内部指定填充设为单色渐变，应用于 FillFormat 对象的 OneColorGradient 方法将指定填充设为单色渐变，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>OneColorGradient<span class="token punctuation">(</span>Style<span class="token punctuation">,</span> <span class="token keyword">Variant</span><span class="token punctuation">,</span> Degree<span class="token punctuation">)</span>

其中参数Style是必需的，底纹样式，可为表格 <span class="token number">54</span><span class="token operator">-</span><span class="token number">1</span>所示的MsoGradientStyle常量之一。
参数<span class="token keyword">Variant</span>是必需的，渐变变量。取值范围为 <span class="token number">1</span> 到 <span class="token number">4</span> 之间，分别与<span class="token string">“填充效果”</span>对话框中<span class="token string">“渐变”</span>选项卡的四个渐变变量相对应。如果GradientStyle 设为 msoGradientFromCenter，则<span class="token keyword">Variant</span>参数只能设为 <span class="token number">1</span> 或 <span class="token number">2</span>。
参数Degree是必需的，灰度。取值范围为 <span class="token number">0.0</span>（表示最深）到 <span class="token number">1.0</span>（表示最浅）之间。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><u>表格 53-4</u>	MsoGradientStyle 常量</p>
<table>
<thead>
<tr>
<th>常量</th>
<th>值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>msoGradientDiagonalDown</td>
<td>4</td>
<td>斜下</td>
</tr>
<tr>
<td>msoGradientDiagonalUp</td>
<td>3</td>
<td>斜上</td>
</tr>
<tr>
<td>msoGradientFromCenter</td>
<td>7</td>
<td>无</td>
</tr>
<tr>
<td>msoGradientFromCorner</td>
<td>5</td>
<td>角部幅射</td>
</tr>
<tr>
<td>msoGradientFromTitle</td>
<td>6</td>
<td>中心幅射</td>
</tr>
<tr>
<td>msoGradientHorizontal</td>
<td>1</td>
<td>水平</td>
</tr>
<tr>
<td>msoGradientMixed</td>
<td>-2</td>
<td>无</td>
</tr>
<tr>
<td>msoGradientVertical</td>
<td>2</td>
<td>垂直</td>
</tr>
</tbody>
</table>
<p>第 42、43 行代码为矩形对象添加超链接，应用于 Hyperlinks 对象的 Add 方法向指定的区域或图形添加超链接，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>Add<span class="token punctuation">(</span>Anchor<span class="token punctuation">,</span> Address<span class="token punctuation">,</span> SubAddress<span class="token punctuation">,</span> ScreenTip<span class="token punctuation">,</span> TextToDisplay<span class="token punctuation">)</span>

参数expression是必需的，返回一个Hyperlinks对象。
参数Anchor是必需的，超链接的位置。可为Range对象或Shape对象。
参数Address是必需的，超链接的地址。
参数SubAddress是必需的，超链接的子地址。
参数ScreenTip是可选的，当鼠标指针停留在超链接上时所显示的屏幕提示。
参数TextToDisplay是可选的，要显示的超链接的文本。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>运行 AddShape 过程结果如图 53-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/53-1.png" alt="" loading="lazy"></p>
<p><u>图 53-1</u>	在工作表中添加图形</p>
</div>
<h2 id="_54、导出工作表中的图片" tabindex="-1"><a class="header-anchor" href="#_54、导出工作表中的图片" aria-hidden="true">#</a> 54、导出工作表中的图片</h2>
<p>有时需要将工作表中的图形对象保存为单独的图像文件，可以使用 Export 方法将工作表中的图片以文件形式导出，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> ExportShp<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> Shp <span class="token keyword">As</span> Shape
	<span class="token keyword">Dim</span> FileName <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">For</span> <span class="token keyword">Each</span> Shp <span class="token keyword">In</span> Sheet1<span class="token punctuation">.</span>Shapes
		<span class="token keyword">If</span> Shp<span class="token punctuation">.</span><span class="token keyword">Type</span> <span class="token operator">=</span> msoPicture <span class="token keyword">Then</span>
			FileName <span class="token operator">=</span> ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\"</span> <span class="token operator">&amp;</span> Shp<span class="token punctuation">.</span>Name <span class="token operator">&amp;</span> <span class="token string">".gif"</span>
			Shp<span class="token punctuation">.</span>Copy
			<span class="token keyword">With</span> Sheet1<span class="token punctuation">.</span>ChartObjects<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Shp<span class="token punctuation">.</span>Width <span class="token operator">+</span> <span class="token number">28</span><span class="token punctuation">,</span> Shp<span class="token punctuation">.</span>Height <span class="token operator">+</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Chart
				<span class="token punctuation">.</span>Paste
				<span class="token punctuation">.</span>Export FileName<span class="token punctuation">,</span> <span class="token string">"gif"</span>
				<span class="token punctuation">.</span>Parent<span class="token punctuation">.</span>Delete
			<span class="token keyword">End</span> <span class="token keyword">With</span>
		<span class="token keyword">End</span> <span class="token keyword">If</span>
	<span class="token keyword">Next</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>代码解析：</p>
<p>ExportShp 过程将 Sheet1 工作表的所有图片以文件形式导出到同一目录中。</p>
<p>第 4 行代码使用 For Each...Next 语句遍历 Sheet1 工作表中的所有图形。</p>
<p>第 5 行代码判断图形的类型是否为图片，应用于 Shape 对象的 Type 属性返回或设置图形类型，可以为表格 54-1 所示的 MsoShapeType 常量之一。</p>
<p><u>表格 54-1</u>	MsoShapeType 常量</p>
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
<td>msoShapeTypeMixed</td>
<td>-2</td>
<td>混合型图形</td>
</tr>
<tr>
<td>msoAutoShape</td>
<td>1</td>
<td>自选图形</td>
</tr>
<tr>
<td>msoCallout</td>
<td>2</td>
<td>没有边框线的标注</td>
</tr>
<tr>
<td>msoChart</td>
<td>3</td>
<td>图表</td>
</tr>
<tr>
<td>msoComment</td>
<td>4</td>
<td>批注</td>
</tr>
<tr>
<td>msoFreeform</td>
<td>5</td>
<td>任意多边形</td>
</tr>
<tr>
<td>msoGroup</td>
<td>6</td>
<td>图形组合</td>
</tr>
<tr>
<td>msoFormControl</td>
<td>8</td>
<td>窗体控件</td>
</tr>
<tr>
<td>msoLine</td>
<td>9</td>
<td>线条</td>
</tr>
<tr>
<td>msoLinkedOLEObject</td>
<td>10</td>
<td>链接式或内嵌OLE对象</td>
</tr>
<tr>
<td>msoLinkedPicture</td>
<td>11</td>
<td>剪贴画或图片</td>
</tr>
<tr>
<td>msoOLEControlObject</td>
<td>12</td>
<td>ActiveX 控件</td>
</tr>
<tr>
<td>msoPicture</td>
<td>13</td>
<td>图片</td>
</tr>
<tr>
<td>msoTextEffect</td>
<td>15</td>
<td>艺术字</td>
</tr>
<tr>
<td>msoTextBox</td>
<td>17</td>
<td>文本框</td>
</tr>
<tr>
<td>msoDiagram</td>
<td>21</td>
<td>组织结构图或其他图示</td>
</tr>
</tbody>
</table>
<p>第 6 行代码使用字符串变量 FileName 记录需导出图形的路径和名称。</p>
<p>第 7 行代码复制图形，应用于 Shape 对象的 Copy 方法将对象复制到剪贴板。</p>
<p>第 8 行代码使用 Add 方法在工作表中添加一个图表，应用于 ChartObjects 对象的 Add 方法创建新的嵌入图表，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>Add<span class="token punctuation">(</span>Left<span class="token punctuation">,</span> Top<span class="token punctuation">,</span> Width<span class="token punctuation">,</span> Height<span class="token punctuation">)</span>

参数expression是必需的，返回一个ChartObjects对象。
参数Left、参数Top是必需的，以磅为单位给出新对象的初始坐标，该坐标是相对于工作表上单元格A1的左上角或图表的左上角的坐标。
参数Width、参数Height是必需的，以磅为单位给出新对象的初始大小。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>第 9 行代码使用 Paste 方法将图形粘贴到新的嵌入图表中，应用于 Chart 对象的 Paste 方法将剪贴板中的图表数据粘贴到指定的图表中，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>Paste<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">)</span>

参数expression是必需的，返回一个Chart对象。
参数<span class="token keyword">Type</span>是可选的的，如果剪贴板中有图表，本参数指定要粘贴的图表信息。可为以下XlPasteType常量之一：xlFormats、xlFormulas或xlAll。默认值为xlAll，如果剪贴板中是数据不是图表，则不能使用本参数。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>第 10 行代码使用 Export 方法将图表导出到同一目录中，应用于 Chart 对象的 Export 方法以图形格式导出图表，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>Export<span class="token punctuation">(</span>Filename<span class="token punctuation">,</span> FilterName<span class="token punctuation">,</span> Interactive<span class="token punctuation">)</span>

其中参数Filename是必需的，被导出的文件的名称。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>第 10 行代码删除新建的图表。因为 Chart 对象是不能使用 Delete 方法直接删除的，应先使用 Parent 属性返回指定对象的父对象，然后使用 Delete 方法删除。</p>
<h2 id="_55、在工作表中添加艺术字" tabindex="-1"><a class="header-anchor" href="#_55、在工作表中添加艺术字" aria-hidden="true">#</a> 55、在工作表中添加艺术字</h2>
<p>在工作表中插入艺术字，可以使用 AddTextEffect 方法，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> TextEffect<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> myShape <span class="token keyword">As</span> Shape
	<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">Resume</span> <span class="token keyword">Next</span>
	Sheet1<span class="token punctuation">.</span>Shapes<span class="token punctuation">(</span><span class="token string">"myShape"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Delete
	<span class="token keyword">Set</span> myShape <span class="token operator">=</span> Sheet1<span class="token punctuation">.</span>Shapes<span class="token punctuation">.</span>AddTextEffect <span class="token operator">_</span>
			<span class="token punctuation">(</span>PresetTextEffect<span class="token punctuation">:</span><span class="token operator">=</span>msoTextEffect15<span class="token punctuation">,</span> <span class="token operator">_</span>
			Text<span class="token punctuation">:</span><span class="token operator">=</span><span class="token string">"我爱 Excel Home"</span><span class="token punctuation">,</span> FontName<span class="token punctuation">:</span><span class="token operator">=</span><span class="token string">"宋体"</span><span class="token punctuation">,</span> FontSize<span class="token punctuation">:</span><span class="token operator">=</span><span class="token number">36</span><span class="token punctuation">,</span> <span class="token operator">_</span>
			FontBold<span class="token punctuation">:</span><span class="token operator">=</span>msoFalse<span class="token punctuation">,</span> FontItalic<span class="token punctuation">:</span><span class="token operator">=</span>msoFalse<span class="token punctuation">,</span> <span class="token operator">_</span>
			Left<span class="token punctuation">:</span><span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">,</span> Top<span class="token punctuation">:</span><span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">)</span>
	<span class="token keyword">With</span> myShape
		<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"myShape"</span>
		<span class="token keyword">With</span> <span class="token punctuation">.</span>Fill
			<span class="token punctuation">.</span>Solid
			<span class="token punctuation">.</span>ForeColor<span class="token punctuation">.</span>SchemeColor <span class="token operator">=</span> <span class="token number">55</span>
			<span class="token punctuation">.</span>Transparency <span class="token operator">=</span> <span class="token number">0</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
		<span class="token keyword">With</span> <span class="token punctuation">.</span>Line
			<span class="token punctuation">.</span>Weight <span class="token operator">=</span> <span class="token number">1.5</span>
			<span class="token punctuation">.</span>DashStyle <span class="token operator">=</span> msoLineSolid
			<span class="token punctuation">.</span>Style <span class="token operator">=</span> msoLineSingle
			<span class="token punctuation">.</span>Transparency <span class="token operator">=</span> <span class="token number">0</span>
			<span class="token punctuation">.</span>ForeColor<span class="token punctuation">.</span>SchemeColor <span class="token operator">=</span> <span class="token number">12</span>
			<span class="token punctuation">.</span>BackColor<span class="token punctuation">.</span>RGB <span class="token operator">=</span> RGB<span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
	<span class="token keyword">Set</span> myShape <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>代码解析：</p>
<p>TextEffect 过程在工作表中插入艺术字并设置其格式。</p>
<p>第 3、4 行代码删除工作表中可能存在的艺术字，以免重复添加。</p>
<p>第 5 行到第 9 行代码使用 AddTextEffect 方法在工作表中插入艺术字，AddTextEffect 方法创建艺术字对象。返回一个 Shape 对象，该对象代表新建的艺术字对象，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>AddTextEffect<span class="token punctuation">(</span>PresetTextEffect<span class="token punctuation">,</span> Text<span class="token punctuation">,</span> FontName<span class="token punctuation">,</span> FontSize<span class="token punctuation">,</span> FontBold<span class="token punctuation">,</span> FontItalic<span class="token punctuation">,</span> Left<span class="token punctuation">,</span> Top<span class="token punctuation">)</span>

参数expression是必需的，返回一个Shapes对象。
参数PresetTextEffect是必需的，艺术字预置文本效果，可为MsoPresetTextEffect 常量之一，等同于在工作表中插入艺术字时的样式选项卡，如图<span class="token number">55</span><span class="token operator">-</span><span class="token number">1</span>所示。
参数Text是必需的，艺术字对象中的文字。
参数FontName是必需的，艺术字对象中所用的字体名称。
参数FontSize是必需的，以磅为单位给出艺术字对象中所用的字体大小。
参数FontBold是必需的，在艺术字中要加粗的字体。
参数FontItalic是必需的，在艺术字中要倾斜的字体。
参数Left和参数Top是必需的，相对于文档的左上角、顶部，以磅为单位给出艺术字对象边框左上角的位置。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="custom-container center">
<p><img src="@source/project/Excel/assets/55-1.png" alt="" loading="lazy"></p>
<p><u>图 55-1</u>	艺术字样式</p>
</div>
<p>第 11 行代码将艺术字对象重命名为“myShape”。</p>
<p>第 12 行到第 16 行代码设置艺术字对象的填充格式。其中第 13 行代码将填充格式设置为均一的颜色，应用于 FillFormat 对象的 Solid 方法将指定的填充格式设置为均一的颜色，可用本方法将带有渐进色、纹理、图案或背景的填充格式转换为单色的填充格式。第 14 行代码设置填充的颜色。第 15 行代码设置填充的透明度。</p>
<p>第 17 行到第 24 行代码设置艺术字对象的线条格式属性。其中第 18 行代码设置线条粗细，第 19 行代码设置线条虚线样式，第 20 行代码设置线条区域的样式，第 21 行代码设置线条的透明度，第 22 行代码设置前景色，第 23 行代码设置填充背景的颜色。</p>
<p>运行 TextEffect 过程工作表中如图 55-2 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/55-2.png" alt="" loading="lazy"></p>
<p><u>图 55-2</u>	工作表中插入艺术字</p>
</div>
<h2 id="_56、遍历工作表中的图形" tabindex="-1"><a class="header-anchor" href="#_56、遍历工作表中的图形" aria-hidden="true">#</a> 56、遍历工作表中的图形</h2>
<p>工作表中的多个图形，如果使用系统缺省名称，如“文本框1”、“文本框2”这样前面是固定的字符串，后面是序号的，可以使用 For...Next 语句遍历图形，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> ErgShapes_1<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> i <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">For</span> i <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">To</span> <span class="token number">4</span>
		Sheet1<span class="token punctuation">.</span>Shapes<span class="token punctuation">(</span><span class="token string">"文本框 "</span> <span class="token operator">&amp;</span> i<span class="token punctuation">)</span><span class="token punctuation">.</span>TextFrame<span class="token punctuation">.</span>Characters<span class="token punctuation">.</span>Text <span class="token operator">=</span> <span class="token string">""</span>
	<span class="token keyword">Next</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>代码解析：</p>
<p>ErgShapes_1 过程清除工作表中四个图形文本框中的文字。</p>
<p>第 3 行到第 5 行代码，使用 Shapes 属性在工作表上的三个图形文本框中循环。</p>
<p>Shapes 属性返回 Shapes 对象，代表工作表或图形工作表上的所有图形，可以使用Shapes（index）返回单个的 Shape 对象，其中index是图形的名称或索引号。</p>
<p>返回单个的 Shape 对象后使用 TextFrame 属性和 Characters 方法清除文本框中的字符，关于 Shape 对象的 TextFrame 属性和 Characters 方法请参阅 53 。</p>
<p>如果图形的名称没有规律，可以使用 For Each...Next 语句循环遍历所有图形，根据 Type 属性返回的图形类型进行相应的操作，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> ErgShapes_2<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> myShape <span class="token keyword">As</span> Shape
	<span class="token keyword">Dim</span> i <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	i <span class="token operator">=</span> <span class="token number">1</span>
	<span class="token keyword">For</span> <span class="token keyword">Each</span> myShape <span class="token keyword">In</span> Sheet1<span class="token punctuation">.</span>Shapes
		<span class="token keyword">If</span> myShape<span class="token punctuation">.</span><span class="token keyword">Type</span> <span class="token operator">=</span> msoTextBox <span class="token keyword">Then</span>
			myShape<span class="token punctuation">.</span>TextFrame<span class="token punctuation">.</span>Characters<span class="token punctuation">.</span>Text <span class="token operator">=</span> <span class="token string">"这是第"</span> <span class="token operator">&amp;</span> i <span class="token operator">&amp;</span> <span class="token string">"个文本框"</span>
			i <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span>
		<span class="token keyword">End</span> <span class="token keyword">If</span>
	<span class="token keyword">Next</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>代码解析：</p>
<p>ErgShapes_2 过程在工作表中的所有图形文本框中写入文本。</p>
<p>第 5 行代码使用 For Each...Next 语句循环遍历工作表中所有的图形对象。</p>
<p>第 6 行到第 9 行代码如果图形对象是文本框则在文本框中写入文本。其中第 6 行代码根据 Type 属性判断图形对象是否为文本框，应用于 Shape 对象的 Type 属性返回或设置图形类型， MsoShapeType 类型，请参阅表格 54-1 。</p>
<p>第 7 行代码根据返回的 Type 属性值在所有的文本框内写入相应的文本，如图 56-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/56-1.png" alt="" loading="lazy"></p>
<p><u>图 56-1</u>	遍历所有的文本框</p>
</div>
<h2 id="_57、移动、旋转图片" tabindex="-1"><a class="header-anchor" href="#_57、移动、旋转图片" aria-hidden="true">#</a> 57、移动、旋转图片</h2>
<p>工作表中的图片可以移动、旋转，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> MoveShape<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> i <span class="token keyword">As</span> <span class="token keyword">Long</span>
	<span class="token keyword">Dim</span> j <span class="token keyword">As</span> <span class="token keyword">Long</span>
	<span class="token keyword">With</span> Sheet1<span class="token punctuation">.</span>Shapes<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token keyword">For</span> i <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">To</span> <span class="token number">3000</span> <span class="token keyword">Step</span> <span class="token number">5</span>
		 <span class="token punctuation">.</span>Top <span class="token operator">=</span> Sin<span class="token punctuation">(</span>i <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">3.1416</span> <span class="token operator">/</span> <span class="token number">180</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token number">100</span>
		 <span class="token punctuation">.</span>Left <span class="token operator">=</span> Cos<span class="token punctuation">(</span>i <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">3.1416</span> <span class="token operator">/</span> <span class="token number">180</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token number">100</span>
		 <span class="token punctuation">.</span>Fill<span class="token punctuation">.</span>ForeColor<span class="token punctuation">.</span>RGB <span class="token operator">=</span> i <span class="token operator">*</span> <span class="token number">100</span>
			<span class="token keyword">For</span> j <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">To</span> <span class="token number">10</span>
				<span class="token punctuation">.</span>IncrementRotation <span class="token operator">-</span><span class="token number">2</span>
				DoEvents
			<span class="token keyword">Next</span>
		<span class="token keyword">Next</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>代码解析：</p>
<p>MoveShape 过程移动、旋转工作表中的图片并不断改变其填充的前景色。</p>
<p>第 6 行代码设置图片的 Top 属性值，应用于 Shape 对象的 Top 属性设置图形的顶端到工作表顶端的距离。在循环的过程中使用 Sin 函数将 Top 属性值设置为一个圆形的弧度值。Sin 函数返回指定参数的正弦值，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>Sin<span class="token punctuation">(</span>number<span class="token punctuation">)</span>

参数number表示一个以弧度为单位的角。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Sin 函数取一角度为参数值，并返回角的对边长度除以斜边长度的比值，将角度除以 180 后即能角度转换为弧度。</p>
<p>第 7 行代码设置图片的 Left 属性值，应用于 Shape 对象的 Left 属性设置图形从左边界至 A 列左边界（在工作表中）或图表区左边界（在图表工作表中）的距离。在循环的过程中使用 Cos 函数将 Left 属性值设置为一个圆形的弧度值。Cos 函数返回指定一个角的余弦值，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>Cos<span class="token punctuation">(</span>number<span class="token punctuation">)</span>

参数number表示一个以弧度为单位的角。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Cos 函数的 number 参数为一个角，并返回直角三角形两边的比值，该比值为角的邻边长度除以斜边长度之商，将角度除以 180 后即能角度转换为弧度。</p>
<p>第 8 行代码设置图片填充的前景色随着循环的过程不断的变化。使用Fill属性返回一个 FillFormat 对象，FillFormat 对象代表图形的填充格式，其 ForeColor 属性设置对象填充的前景色。</p>
<p>第 9 行到第 11 行代码在图形移动的过程中使用 IncrementRotation 方法设置图形绕 z 轴的转角，IncrementRotation 方法以指定的度数为增量，更改指定的图形绕 z 轴的转角，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>IncrementRotation<span class="token punctuation">(</span>Increment<span class="token punctuation">)</span>

参数expression是必需的，返回一个Shape对象。
参数Increment是必需的，以度为单位指定图形在水平方向的旋转量，正值使图形按顺时针方向旋转，负值使图形按逆时针方向旋转。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>其中第 11 行是关键的代码，使用 DoEvents 函数转让控制权，否则达不到预计的视觉效果。</p>
<p>运行 MoveShape 过程，工作表的图形在自身进行逆时针方向旋转的同时沿着一个圆形的弧度进行移动，并不断改变其填充的颜色。</p>
<h2 id="_58、工作表中自动插入图片" tabindex="-1"><a class="header-anchor" href="#_58、工作表中自动插入图片" aria-hidden="true">#</a> 58、工作表中自动插入图片</h2>
<p>在日常工作中经常需要在工作表中插入大量图片，比如在如图 58-1 所示的工作表中需要根据 A 列的名称在 C 列插入保存在同一目录中的相应的图片，如果使用手工插入不仅非常繁琐且极易出错，而使用 VBA 代码可以很好的完成操作。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/58-1.png" alt="" loading="lazy"></p>
<p><u>图 58-1</u>	需插入图片的工作表</p>
</div>
<p>示例代码如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> insertPic<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> i <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">Dim</span> FilPath <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">Dim</span> rng <span class="token keyword">As</span> Range
	<span class="token keyword">Dim</span> s <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">With</span> Sheet1
		<span class="token keyword">For</span> i <span class="token operator">=</span> <span class="token number">3</span> <span class="token keyword">To</span> <span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"a65536"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">End</span><span class="token punctuation">(</span>xlUp<span class="token punctuation">)</span><span class="token punctuation">.</span>Row
			FilPath <span class="token operator">=</span> ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\"</span> <span class="token operator">&amp;</span> <span class="token punctuation">.</span>Cells<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Text <span class="token operator">&amp;</span> <span class="token string">".jpg"</span>
			<span class="token keyword">If</span> Dir<span class="token punctuation">(</span>FilPath<span class="token punctuation">)</span> <span class="token operator">&lt;</span><span class="token operator">></span> <span class="token string">""</span> <span class="token keyword">Then</span>
				<span class="token punctuation">.</span>Pictures<span class="token punctuation">.</span>Insert<span class="token punctuation">(</span>FilPath<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">Select</span>
				<span class="token keyword">Set</span> rng <span class="token operator">=</span> <span class="token punctuation">.</span>Cells<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
				<span class="token keyword">With</span> Selection
					<span class="token punctuation">.</span>Top <span class="token operator">=</span> rng<span class="token punctuation">.</span>Top <span class="token operator">+</span> <span class="token number">1</span>
					<span class="token punctuation">.</span>Left <span class="token operator">=</span> rng<span class="token punctuation">.</span>Left <span class="token operator">+</span> <span class="token number">1</span>
					<span class="token punctuation">.</span>Width <span class="token operator">=</span> rng<span class="token punctuation">.</span>Width <span class="token operator">-</span> <span class="token number">1</span>
					<span class="token punctuation">.</span>Height <span class="token operator">=</span> rng<span class="token punctuation">.</span>Height <span class="token operator">-</span> <span class="token number">1</span>
				<span class="token keyword">End</span> <span class="token keyword">With</span>
			<span class="token keyword">Else</span>
				s <span class="token operator">=</span> s <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token punctuation">.</span>Cells<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Text
			<span class="token keyword">End</span> <span class="token keyword">If</span>
		<span class="token keyword">Next</span>
		<span class="token punctuation">.</span>Cells<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">Select</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
	<span class="token keyword">If</span> s <span class="token operator">&lt;</span><span class="token operator">></span> <span class="token string">""</span> <span class="token keyword">Then</span>
		MsgBox s <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"没有照片!"</span>
	<span class="token keyword">End</span> <span class="token keyword">If</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>代码解析：</p>
<p>insertPic 过程使用 Insert 方法在工作表中插入图片。</p>
<p>第 7 行代码开始 For...Next 循环，循环的终值由工作表中 A 列单元格的行数所决定。</p>
<p>第 8 行代码字符串变量FilPath保存A列名称单元格所对应的图片文件的路径和文件名，本例中图片文件的文件名应和A列中的名称一致。</p>
<p>第 9 行到第 11 行代码使用 Dir 函数在同一文件夹中查找与 A 列单元格中的名称相对应的图片文件，如果对应的图片文件存在则使用 Insert 方法将图片插入到工作表中，并将 C 列的单元格赋给变量 rng。</p>
<p>Dir 函数返回一个 String，用以表示一个文件名、目录名或文件夹名称，它必须与指定的模式或文件属性、或磁盘卷标相匹配。如果已没有合乎条件的文件，则 Dir 函数会返回一个零长度字符串 （&quot;&quot;）。</p>
<p>第 12 行到第 17 行代码，当图片片插入到工作表时其实是插入到活动单元格的，此时需设置图片的 Top 属性和 Left 属性将图片移动到 C 列所对应的单元格中，并设置其 Width 属性和 Height 属性使其适应所在单元格的大小。</p>
<p>第 18、19 行代码如果在同一文件夹中没有与 A 列单元格对应的图片文件，则使用字符串变量 s 保存没有图片文件的名称。</p>
<p>第 24 行到第 26 行代码如果字符串变量s不等于空白说明文件夹中缺少图片文件，使用消息框提示。</p>
<p>运行 insertPic 过程工作表如图 58-2 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/58-2.png" alt="" loading="lazy"></p>
<p><u>图 58-2</u>	插入图片后的工作表</p>
</div>
<p>如果文件夹中缺少对应的图片文件，则会进行提示，如图 58-3 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/58-3.png" alt="" loading="lazy"></p>
<p><u>图 58-3</u>	缺少图片文件提示</p>
</div>
<h2 id="_59、固定工作表中图形的位置" tabindex="-1"><a class="header-anchor" href="#_59、固定工作表中图形的位置" aria-hidden="true">#</a> 59、固定工作表中图形的位置</h2>
<p>工作表中插入的图片，一般都是固定的尺寸和固定的单元格区域中的，但在实际使用中可能因一些人为的因素导致图片位置偏移或尺寸变化，此时可以使用 VBA 代码进行调整，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> ShapeAddress<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> rng <span class="token keyword">As</span> Range
	<span class="token keyword">Set</span> rng <span class="token operator">=</span> Sheet1<span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"B4:E22"</span><span class="token punctuation">)</span>
	<span class="token keyword">With</span> Sheet1<span class="token punctuation">.</span>Shapes<span class="token punctuation">(</span><span class="token string">"Picture 1"</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span>Rotation <span class="token operator">=</span> <span class="token number">0</span>
		<span class="token punctuation">.</span><span class="token keyword">Select</span>
		<span class="token keyword">With</span> Selection
			<span class="token punctuation">.</span>Top <span class="token operator">=</span> rng<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Top <span class="token operator">+</span> <span class="token number">1</span>
			<span class="token punctuation">.</span>Left <span class="token operator">=</span> rng<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Left <span class="token operator">+</span> <span class="token number">1</span>
			<span class="token punctuation">.</span>Width <span class="token operator">=</span> rng<span class="token punctuation">.</span>Width <span class="token operator">-</span> <span class="token number">0.5</span>
			<span class="token punctuation">.</span>Height <span class="token operator">=</span> rng<span class="token punctuation">.</span>Height <span class="token operator">-</span> <span class="token number">0.5</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
	Range<span class="token punctuation">(</span><span class="token string">"A1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">Select</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>代码解析：</p>
<p>ShapeAddress 过程调整指定图形在工作表中的位置。</p>
<p>第 3 行代码变量 rng 保存工作表中插入图片的单元格区域。。</p>
<p>第 5 行代码设置图片的转角，应用于 Shape 对象 Rotation 属性以度为单位返回或设置图形的转角，设置为正值向右偏转，设置为负值向左偏转，设置为零图片则保持 90 度垂直。</p>
<p>第 7 行到第 12 行代码设置图片的 Top 属性和 Left 属性将图片移动到变量 rng 所保存的单元格区域中，并设置其 Width 属性和 Height 属性使其适应所在单元格区域的大小。</p>
<p>第 14 行代码选择 <code>A1</code> 单元格，不然图片会处于选中状态。</p>
<p>经过以上设置，工作表中的图片“Picture 1”不管处于什么状态都可以一键恢复其原来的大小、位置。</p>
<h2 id="_60、使用-vba-自动生成图表" tabindex="-1"><a class="header-anchor" href="#_60、使用-vba-自动生成图表" aria-hidden="true">#</a> 60、使用 VBA 自动生成图表</h2>
<p>在实际工作中我们常用图表来表现数据间的某种相对关系，一般采用手工插入的方式，而使用 VBA 代码可以在工作表中自动生成图表，如下面的示例代码。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> ChartAdd<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> myRange <span class="token keyword">As</span> Range
	<span class="token keyword">Dim</span> myChart <span class="token keyword">As</span> ChartObject
	<span class="token keyword">Dim</span> R <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">With</span> Sheet1
		<span class="token punctuation">.</span>ChartObjects<span class="token punctuation">.</span>Delete
		R <span class="token operator">=</span> <span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"A65536"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">End</span><span class="token punctuation">(</span>xlUp<span class="token punctuation">)</span><span class="token punctuation">.</span>Row
		<span class="token keyword">Set</span> myRange <span class="token operator">=</span> <span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"A"</span> <span class="token operator">&amp;</span> <span class="token number">1</span> <span class="token operator">&amp;</span> <span class="token string">":B"</span> <span class="token operator">&amp;</span> R<span class="token punctuation">)</span>
		<span class="token keyword">Set</span> myChart <span class="token operator">=</span> <span class="token punctuation">.</span>ChartObjects<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">250</span><span class="token punctuation">)</span>
		<span class="token keyword">With</span> myChart<span class="token punctuation">.</span>Chart
			<span class="token punctuation">.</span>ChartType <span class="token operator">=</span> xlColumnClustered
			<span class="token punctuation">.</span>SetSourceData Source<span class="token punctuation">:</span><span class="token operator">=</span>myRange<span class="token punctuation">,</span> PlotBy<span class="token punctuation">:</span><span class="token operator">=</span>xlColumns
			<span class="token punctuation">.</span>ApplyDataLabels ShowValue<span class="token punctuation">:</span><span class="token operator">=</span><span class="token boolean">True</span>
			<span class="token punctuation">.</span>HasTitle <span class="token operator">=</span> <span class="token boolean">True</span>
			<span class="token punctuation">.</span>ChartTitle<span class="token punctuation">.</span>Text <span class="token operator">=</span> <span class="token string">"图表制作示例"</span>
			<span class="token keyword">With</span> <span class="token punctuation">.</span>ChartTitle<span class="token punctuation">.</span>Font
				<span class="token punctuation">.</span>Size <span class="token operator">=</span> <span class="token number">20</span>
				<span class="token punctuation">.</span>ColorIndex <span class="token operator">=</span> <span class="token number">3</span>
				<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"华文新魏"</span>
			<span class="token keyword">End</span> <span class="token keyword">With</span>
			<span class="token keyword">With</span> <span class="token punctuation">.</span>ChartArea<span class="token punctuation">.</span>Interior
				<span class="token punctuation">.</span>ColorIndex <span class="token operator">=</span> <span class="token number">8</span>
				<span class="token punctuation">.</span>PatternColorIndex <span class="token operator">=</span> <span class="token number">1</span>
				<span class="token punctuation">.</span>Pattern <span class="token operator">=</span> xlSolid
			<span class="token keyword">End</span> <span class="token keyword">With</span>
			<span class="token keyword">With</span> <span class="token punctuation">.</span>PlotArea<span class="token punctuation">.</span>Interior
				<span class="token punctuation">.</span>ColorIndex <span class="token operator">=</span> <span class="token number">35</span>
				<span class="token punctuation">.</span>PatternColorIndex <span class="token operator">=</span> <span class="token number">1</span>
				<span class="token punctuation">.</span>Pattern <span class="token operator">=</span> xlSolid
			<span class="token keyword">End</span> <span class="token keyword">With</span>
			<span class="token punctuation">.</span>SeriesCollection<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>DataLabels<span class="token punctuation">.</span>Delete
			<span class="token keyword">With</span> <span class="token punctuation">.</span>SeriesCollection<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>DataLabels<span class="token punctuation">.</span>Font
				<span class="token punctuation">.</span>Size <span class="token operator">=</span> <span class="token number">10</span>
				<span class="token punctuation">.</span>ColorIndex <span class="token operator">=</span> <span class="token number">5</span>
			<span class="token keyword">End</span> <span class="token keyword">With</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
	<span class="token keyword">Set</span> myRange <span class="token operator">=</span> <span class="token boolean">Nothing</span>
	<span class="token keyword">Set</span> myChart <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p>代码解析：</p>
<p>ChartAdd 过程在工作表中自动生成图表，图表类型为簇状柱形图。</p>
<p>第 6 行代码使用 Delete 方法删除工作表中已经存在的图表，而 ChartObjects 方法返回代表工作表中单个嵌入图表（ChartObject 对象）或所有嵌入图表的集合（ChartObjects 对象）的对象，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>ChartObjects<span class="token punctuation">(</span>Index<span class="token punctuation">)</span>

其中参数Index是可选的，指定图表的名称或号码。该参数可以是数组，用于指定多个图表，因为示例中只有一个图表，所以无需指定其Index参数。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>第 8 行代码指定图表的数据源。</p>
<p>第 9 行代码使用 Add 方法创建一个新图表，应用于 ChartObjects 对象的 Add 方法创建新的嵌入图表，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>Add<span class="token punctuation">(</span>Left<span class="token punctuation">,</span> Top<span class="token punctuation">,</span> Width<span class="token punctuation">,</span> Height<span class="token punctuation">)</span>

参数Left、Top是必需的，以磅为单位给出新对象的初始坐标，该坐标是相对于工作表上单元格A1的左上角或图表的左上角的坐标。
参数Width、Height是必需，以磅为单位给出新对象的初始大小。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>第 10 行代码使用 Chart 属性返回新创建的图表，应用于 ChartObject 对象的 Chart 属性返回一个 Chart 对象，该对象代表指定对象所包含的图表。</p>
<p>第 11 行代码指定新创建图表的图表类型，应用于 Chart 对象的 ChartType 属性返回或设置图表的类型，可以为 XlChartType 常量之一，具体请参阅 VBA 帮助。本例中设置为 xlColumnClustered 即图表类型为簇状柱形图。</p>
<p>第 12 行代码指定图表的数据源和绘图方式，应用于 Chart 对象的 SetSourceData 方法为指定图表设置源数据区域，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>SetSourceData<span class="token punctuation">(</span>Source<span class="token punctuation">,</span> PlotBy<span class="token punctuation">)</span>

参数expression是必需的，该表达式返回一个Chart对象。
参数Source是可选的，源数据的区域。
参数PlotBy是可选的，指定数据绘制方式，可为xlColumns（系列产生在列）或xlRows（系列产生在行）。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>第 13 行代码使用 ApplyDataLabels 方法使图表显示数据标签和数据点的值，应用于 Chart 对象的 ApplyDataLabels 方法将数据标签应用于图表中的某一数据点、某一数据系列或所有数据系列，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>ApplyDataLabels<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">,</span> LegendKey<span class="token punctuation">,</span> AutoText<span class="token punctuation">,</span> HasLeaderLines<span class="token punctuation">,</span> ShowSeriesName<span class="token punctuation">,</span> ShowCategoryName<span class="token punctuation">,</span> ShowValue<span class="token punctuation">,</span> ShowPercentage<span class="token punctuation">,</span> ShowBubbleSize<span class="token punctuation">,</span> Separator<span class="token punctuation">)</span>

参数expression是必需的，该表达式返回一个Chart对象。
参数<span class="token keyword">Type</span>是可选的，要应用的数据标签的类型，可为表格 <span class="token number">60</span><span class="token operator">-</span><span class="token number">1</span>所列的XlDataLabelsType 常量之一。
参数LegendKey是可选的，如果该值为<span class="token boolean">True</span>，则显示数据点旁的图例项标示。默认值为<span class="token boolean">False</span>。
参数AutoText是可选的，如果对象根据内容自动生成正确的文字，则该值为<span class="token boolean">True</span>。
参数HasLeaderLines是可选的，如果数据系列具有引导线，则该值为<span class="token boolean">True</span>。
参数ShowSeriesName是可选的，数据标签的系列名称。
参数ShowCategoryName是可选的，数据标签的分类名称。
参数ShowValue是可选的，数据标签的值。
参数ShowPercentage是可选的，数据标签的百分比。
参数ShowBubbleSize是可选的，数据标签的气泡尺寸。
参数Separator是可选的，数据标签的分隔符。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><u>表格 60-1</u>	XlDataLabelsType 常量</p>
<table>
<thead>
<tr>
<th>常量</th>
<th>值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>xlDataLabelsShowBubbleSizes</td>
<td>6</td>
<td>无</td>
</tr>
<tr>
<td>xlDataLabelsShowLabelAndPercent</td>
<td>5</td>
<td>占总数的百分比及数据点所属的分类。仅用于饼图或圆环图。</td>
</tr>
<tr>
<td>xlDataLabelsShowPercent</td>
<td>3</td>
<td>占总数的百分比。仅用于饼图或圆环图。</td>
</tr>
<tr>
<td>xlDataLabelsShowLabel</td>
<td>4</td>
<td>数据点所属的分类。</td>
</tr>
<tr>
<td>xlDataLabelsShowNone</td>
<td>-4142</td>
<td>无数据标签。</td>
</tr>
<tr>
<td>xlDataLabelsShowValue</td>
<td>2</td>
<td>数据点的值，若未指定本参数，默认使用此设置。</td>
</tr>
</tbody>
</table>
<p>第 14、15 行代码设置新创建的图表有可见的标题并设置图表标题的文字。应用于 Chart 对象的 HasTitle 属性，如果坐标轴或图表有可见标题，则该值为 True，而 ChartTitle 属性返回一个 ChartTitle 对象，代表指定图表的标题。</p>
<p>第 16 行到第 20 行代码设置图表标题文字的格式。</p>
<p>第 21 行到第 25 行代码设置图表区的颜色。</p>
<p>第 26 行到第 30 行代码设置绘图区的颜色。</p>
<p>第 31 行代码删除图表上第一个数据系列中的数据标签。SeriesCollection 方法返回图表或图表组中单个数据系列（Series 对象)或所有数据系列的集合（SeriesCollection 集合)的对象，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>SeriesCollection<span class="token punctuation">(</span>Index<span class="token punctuation">)</span>

可选的Index参数指定数据系列的名称或编号。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>而 DataLabels 方法则返回代表数据系列中的单个数据标签（DataLabel 对象）或所有数据标签的集合（DataLabels 集合）的对象，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>DataLabels<span class="token punctuation">(</span>Index<span class="token punctuation">)</span>

可选的Index参数指定数据系列中的数据标签的编号。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>第 32 行到第 36 行代码设置图表上第二个数据系列中的数据标签的字体格式。</p>
<p>运行 ChartAdd 过程，在工作表中创建簇状柱形图，如图 60-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/60-1.png" alt="" loading="lazy"></p>
<p><u>图 60-1</u>	创建簇状柱形图</p>
</div>
<h2 id="_61、使用独立窗口显示图表" tabindex="-1"><a class="header-anchor" href="#_61、使用独立窗口显示图表" aria-hidden="true">#</a> 61、使用独立窗口显示图表</h2>
<p>如果需要将工作表中嵌入的图表显示在独立的窗口中，可以使用下面的代码。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> ChartShow<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">With</span> Sheet1<span class="token punctuation">.</span>ChartObjects<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span>Activate
		<span class="token punctuation">.</span>Chart<span class="token punctuation">.</span>ShowWindow <span class="token operator">=</span> <span class="token boolean">True</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
	<span class="token keyword">With</span> ActiveWindow
		<span class="token punctuation">.</span>Top <span class="token operator">=</span> <span class="token number">50</span>
		<span class="token punctuation">.</span>Left <span class="token operator">=</span> <span class="token number">50</span>
		<span class="token punctuation">.</span>Width <span class="token operator">=</span> <span class="token number">400</span>
		<span class="token punctuation">.</span>Height <span class="token operator">=</span> <span class="token number">280</span>
		<span class="token punctuation">.</span>Caption <span class="token operator">=</span> ThisWorkbook<span class="token punctuation">.</span>Name
	<span class="token keyword">End</span> <span class="token keyword">With</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>代码解析：</p>
<p>ChartShow 过程，将工作表中嵌入的图表显示在独立的窗口中。</p>
<p>第 2 行到第 5 行代码将工作表中指定图表的 ShowWindow 属性设置为 True，使用独立的窗口显示该图表。</p>
<p>第 7、8 行代码指定活动窗口显示的位置。</p>
<p>第 9、10 行代码调整活动窗口的大小使之适应图表的大小。</p>
<p>第 11 行代码指定活动窗口标题栏中显示的标题。</p>
<p>运行 ChartShow 过程结果如图 61-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/61-1.png" alt="" loading="lazy"></p>
<p><u>图 61-1</u>	使用独立窗口显示图表</p>
</div>
<h2 id="_62、导出工作表中的图表" tabindex="-1"><a class="header-anchor" href="#_62、导出工作表中的图表" aria-hidden="true">#</a> 62、导出工作表中的图表</h2>
<p>如果需要将工作表中的图表保存为单独的图像文件，可以使用 Export 方法以图形文件格式导出图表，示例代码如下。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> ExportChart<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> myChart <span class="token keyword">As</span> Chart
	<span class="token keyword">Dim</span> myFileName <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">Set</span> myChart <span class="token operator">=</span> Sheet1<span class="token punctuation">.</span>ChartObjects<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Chart
	myFileName <span class="token operator">=</span> <span class="token string">"myChart.jpg"</span>
	<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">Resume</span> <span class="token keyword">Next</span>
	Kill ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\"</span> <span class="token operator">&amp;</span> myFileName
	myChart<span class="token punctuation">.</span>Export Filename<span class="token punctuation">:</span><span class="token operator">=</span>ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">_</span>
		<span class="token operator">&amp;</span> <span class="token string">"\"</span> <span class="token operator">&amp;</span> myFileName<span class="token punctuation">,</span> Filtername<span class="token punctuation">:</span><span class="token operator">=</span><span class="token string">"JPG"</span>
	MsgBox <span class="token string">"图表已保存在["</span> <span class="token operator">&amp;</span> ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"]文件夹中!"</span>
	<span class="token keyword">Set</span> myChart <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>代码解析：</p>
<p>ExportChart 过程使用 Export 方法将工作表中的图表以图形文件的形式导出。</p>
<p>第 4 行代码指定工作表中的图表对象。</p>
<p>第 5 行代码指定图形文件保存的文件名。</p>
<p>第 6、7 行代码使用 Kill 语句删除文件夹中原有的图形文件。当文件夹中指定删除的文件不存在时 Kill 语句会出错所以需要使用 On Error 语句忽略错误。</p>
<p>第 8、9 行代码使用 Export 方法将图表导出到同一目录中，应用于 Chart 对象的 Export 方法以图形文件格式导出图表，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>Export<span class="token punctuation">(</span>Filename<span class="token punctuation">,</span> FilterName<span class="token punctuation">,</span> Interactive<span class="token punctuation">)</span>

其中参数Filename是必需的，被导出的文件的名称，示例中加上了文件保存的路径。
参数FilterName是可选的，被导出的文件的图形格式，示例中文件以JPG文件格式保存。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_63、多图表制作" tabindex="-1"><a class="header-anchor" href="#_63、多图表制作" aria-hidden="true">#</a> 63、多图表制作</h2>
<p>如果需要，我们可以为工作表中的每一个数据区域创建一张图表，在如图 63-1 所示的工作表区域中，需要为每一个员工的全年数据创建一张图表。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/63-1.png" alt="" loading="lazy"></p>
<p><u>图 63-1</u>	数据区域</p>
</div>
<p>示例代码如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> ChartsAdd<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> myChart <span class="token keyword">As</span> ChartObject
	<span class="token keyword">Dim</span> i <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">Dim</span> R <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">Dim</span> m <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	R <span class="token operator">=</span> Sheet1<span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"A65536"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">End</span><span class="token punctuation">(</span>xlUp<span class="token punctuation">)</span><span class="token punctuation">.</span>Row <span class="token operator">-</span> <span class="token number">1</span>
	m <span class="token operator">=</span> Abs<span class="token punctuation">(</span>Int<span class="token punctuation">(</span><span class="token operator">-</span><span class="token punctuation">(</span>R <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	Sheet2<span class="token punctuation">.</span>ChartObjects<span class="token punctuation">.</span>Delete
	<span class="token keyword">For</span> i <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">To</span> R
		<span class="token keyword">Set</span> myChart <span class="token operator">=</span> Sheet2<span class="token punctuation">.</span>ChartObjects<span class="token punctuation">.</span>Add <span class="token operator">_</span>
			<span class="token punctuation">(</span>Left<span class="token punctuation">:</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">Mod</span> m<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">350</span> <span class="token operator">-</span> <span class="token number">320</span><span class="token punctuation">,</span> <span class="token operator">_</span>
			Top<span class="token punctuation">:</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">\</span> m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">220</span> <span class="token operator">-</span> <span class="token number">210</span><span class="token punctuation">,</span> <span class="token operator">_</span>
			Width<span class="token punctuation">:</span><span class="token operator">=</span><span class="token number">330</span><span class="token punctuation">,</span> Height<span class="token punctuation">:</span><span class="token operator">=</span><span class="token number">210</span><span class="token punctuation">)</span>
		<span class="token keyword">With</span> myChart<span class="token punctuation">.</span>Chart
			<span class="token punctuation">.</span>ChartType <span class="token operator">=</span> xlColumnClustered
			<span class="token punctuation">.</span>SetSourceData Source<span class="token punctuation">:</span><span class="token operator">=</span>Sheet1<span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"B2:M2"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Offset<span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">_</span>
			PlotBy<span class="token punctuation">:</span><span class="token operator">=</span>xlRows
			<span class="token keyword">With</span> <span class="token punctuation">.</span>SeriesCollection<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span>XValues <span class="token operator">=</span> Sheet1<span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"B1:M1"</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span>Name <span class="token operator">=</span> Sheet1<span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"A2"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Offset<span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span>ApplyDataLabels AutoText<span class="token punctuation">:</span><span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> ShowValue<span class="token punctuation">:</span><span class="token operator">=</span><span class="token boolean">True</span>
				<span class="token punctuation">.</span>DataLabels<span class="token punctuation">.</span>Font<span class="token punctuation">.</span>Size <span class="token operator">=</span> <span class="token number">10</span>
			<span class="token keyword">End</span> <span class="token keyword">With</span>
			<span class="token punctuation">.</span>HasLegend <span class="token operator">=</span> <span class="token boolean">False</span>
			<span class="token keyword">With</span> <span class="token punctuation">.</span>ChartTitle
				<span class="token punctuation">.</span>Left <span class="token operator">=</span> <span class="token number">5</span>
				<span class="token punctuation">.</span>Top <span class="token operator">=</span> <span class="token number">1</span>
				<span class="token punctuation">.</span>Font<span class="token punctuation">.</span>Size <span class="token operator">=</span> <span class="token number">14</span>
				<span class="token punctuation">.</span>Font<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"华文行楷"</span>
			<span class="token keyword">End</span> <span class="token keyword">With</span>
			<span class="token keyword">With</span> <span class="token punctuation">.</span>PlotArea<span class="token punctuation">.</span>Interior
				<span class="token punctuation">.</span>ColorIndex <span class="token operator">=</span> <span class="token number">2</span>
				<span class="token punctuation">.</span>PatternColorIndex <span class="token operator">=</span> <span class="token number">1</span>
				<span class="token punctuation">.</span>Pattern <span class="token operator">=</span> xlSolid
			<span class="token keyword">End</span> <span class="token keyword">With</span>
			<span class="token punctuation">.</span>Axes<span class="token punctuation">(</span>xlCategory<span class="token punctuation">)</span><span class="token punctuation">.</span>TickLabels<span class="token punctuation">.</span>Font<span class="token punctuation">.</span>Size <span class="token operator">=</span> <span class="token number">10</span>
			<span class="token punctuation">.</span>Axes<span class="token punctuation">(</span>xlValue<span class="token punctuation">)</span><span class="token punctuation">.</span>TickLabels<span class="token punctuation">.</span>Font<span class="token punctuation">.</span>Size <span class="token operator">=</span> <span class="token number">10</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
	<span class="token keyword">Next</span>
	Sheet2<span class="token punctuation">.</span><span class="token keyword">Select</span>
	<span class="token keyword">Set</span> myChart <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><p>代码解析：</p>
<p>ChartsAdd 过程根据数据工作表 A 列的人数在图表工作表中创建图表并分 4 行排列整齐。</p>
<p>第 6 行代码取得数据工作表中需要创建图表的人数。</p>
<p>第 7 行代码计算图表工作表每行需要排列的图表数目，共分 4 行排列。使用 Int 函数返回图表数目除 4 行后的整数部分，使用负值是为了向上取整数，最后使用 Abs 函数返回绝对值，将负值转化为正值。</p>
<p>第 8 行代码使用 Delete 方法删除图表工作表中存在的所有图表。</p>
<p>第 9 行代码开始 For...Next 循环，循环的终值由需要创建的图表数目决定。</p>
<p>第 10 行到第 13 行代码使用 Add 方法在图表工作表中创建嵌入的图表，关于应用于 ChartObjects 对象的 Add 方法请参阅 60 。其中第 11、12 行代码根据循环计数器的数值设置新创建图表的 Left 和 To p属性使之依次排列。第 13 行代码设置图表的大小。</p>
<p>第 15 行代码设置新创建图表的类型。</p>
<p>第 16、17 行代码根据循环计数器的数值分别设置新创建图表的数据源。</p>
<p>第 18 行到第 23 行代码设置图表第一个数据系列的名称、数据标签和字体格式。</p>
<p>第 24 行代码删除图表中的图例。</p>
<p>第 25 行到第 30 行代码设置图表的标题。</p>
<p>第 31 行到第 35 行代码设置图表的绘图区。</p>
<p>第 36、37 行代码设置图表坐标轴的字体大小。</p>
<p>关于图表的设置请参阅 60 。</p>
<p>运行 ChartsAdd 过程如图 63-2 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/63-2.png" alt="" loading="lazy"></p>
<p><u>图 63-2</u>	图表工作表</p>
</div>
</template>
