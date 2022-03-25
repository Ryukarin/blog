<template><h2 id="_79、在菜单中添加菜单项" tabindex="-1"><a class="header-anchor" href="#_79、在菜单中添加菜单项" aria-hidden="true">#</a> 79、在菜单中添加菜单项</h2>
<p>在 Excel 工作表的菜单中可以添加新的菜单项和子菜单，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> myTools<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> myTools <span class="token keyword">As</span> CommandBarPopup
	<span class="token keyword">Dim</span> myCap <span class="token keyword">As</span> <span class="token keyword">Variant</span>
	<span class="token keyword">Dim</span> myid <span class="token keyword">As</span> <span class="token keyword">Variant</span>
	<span class="token keyword">Dim</span> i <span class="token keyword">As</span> <span class="token keyword">Byte</span>
	myCap <span class="token operator">=</span> Array<span class="token punctuation">(</span><span class="token string">"基础应用"</span><span class="token punctuation">,</span> <span class="token string">"VBA程序开发"</span><span class="token punctuation">,</span> <span class="token string">"函数与公式"</span><span class="token punctuation">,</span> <span class="token string">"图表与图形"</span><span class="token punctuation">,</span> <span class="token string">"数据透视表"</span><span class="token punctuation">)</span>
	myid <span class="token operator">=</span> Array<span class="token punctuation">(</span><span class="token number">281</span><span class="token punctuation">,</span> <span class="token number">283</span><span class="token punctuation">,</span> <span class="token number">285</span><span class="token punctuation">,</span> <span class="token number">287</span><span class="token punctuation">,</span> <span class="token number">292</span><span class="token punctuation">)</span>
	<span class="token keyword">With</span> Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">(</span><span class="token string">"Worksheet menu bar"</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span>Reset
		<span class="token keyword">Set</span> myTools <span class="token operator">=</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">(</span><span class="token string">"帮助(&amp;H)"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlPopup<span class="token punctuation">,</span> Before<span class="token punctuation">:</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token keyword">With</span> myTools
			<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"Excel Home 技术论坛"</span>
			<span class="token punctuation">.</span>BeginGroup <span class="token operator">=</span> <span class="token boolean">True</span>
			<span class="token keyword">For</span> i <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">To</span> <span class="token number">5</span>
				<span class="token keyword">With</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlButton<span class="token punctuation">)</span>
					<span class="token punctuation">.</span>Caption <span class="token operator">=</span> myCap<span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
					<span class="token punctuation">.</span>FaceId <span class="token operator">=</span> myid<span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
					<span class="token punctuation">.</span>OnAction <span class="token operator">=</span> <span class="token string">"myC"</span>
			<span class="token keyword">End</span> <span class="token keyword">With</span>
			<span class="token keyword">Next</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
	<span class="token keyword">Set</span> myTools <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>代码解析：</p>
<p>myTools 过程使用 Add 方法在 Excel 工作表菜单栏中的“帮助”菜单中添加一个标题为“Excel Home 技术论坛”的菜单项和 5 个子菜单。</p>
<p>第 2 行到第 5 行代码声明变量类型。</p>
<p>第 6、7 行代码使用 Array 函数创建两个数组用于保存子菜单的名称和图标 ID。</p>
<p>第 9 行代码，在添加菜单项前先使用 Reset 方法重置菜单栏以免重复添加菜单项。Reset 方法重置一个内置控件，恢复该控件原来对应的动作，并将各属性恢复成初始状态，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>Reset

参数expression 是必需的，返回一个命令栏或命令栏控件对象。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>第 10 行代码，使用 Add 方法在 Excel 工作表菜单栏中的“帮助”菜单中添加菜单项。Add 方法应用于 CommandBarControls 对象时，新建一个 CommandBarControl 对象并添加到指定命令栏上的控件集合，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">,</span> Id<span class="token punctuation">,</span> Parameter<span class="token punctuation">,</span> Before<span class="token punctuation">,</span> Temporary<span class="token punctuation">)</span>

参数expression 是必需的，返回一个CommandBarControls对象，代表命令栏中的所有控件。
参数<span class="token keyword">Type</span>是可选的，添加到指定命令栏的控件类型，可以为表格 <span class="token number">79</span><span class="token number">1</span>所列的MsoControlType常数之一。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><u>表格 79-1</u>	MsoControlType 常数</p>
<table>
<thead>
<tr>
<th>常数</th>
<th>值</th>
<th>控件类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>msoControlButton</td>
<td>1</td>
<td>命令按钮</td>
</tr>
<tr>
<td>msoControlEdit</td>
<td>2</td>
<td>文本框</td>
</tr>
<tr>
<td>msoControlDropdown</td>
<td>3</td>
<td>下拉列表控制框</td>
</tr>
<tr>
<td>msoControlComboBox</td>
<td>4</td>
<td>下拉组合控制框</td>
</tr>
<tr>
<td>msoControlPopup</td>
<td>10</td>
<td>弹出式控件</td>
</tr>
</tbody>
</table>
<p>因为在本例中将添加的是带有子菜单的菜单项，所以将参数 Type 设置为弹出式控件。</p>
<p>参数 Id 是可选的，标识整数。如果将该参数设置为 1 或者忽略，将在命令栏中添加一个空的指定类型的自定义控件。</p>
<p>参数 Parameter 是可选的，对于内置控件，该参数用于容器应用程序运行命令。对于自定义控件，可以使用该参数向 Visual Basic 过程传递信息，或用其存储控件信息。</p>
<p>参数 Before 是可选的，表示新控件在命令栏上位置的数字。新控件将插入到该位置控件之前。如果忽略该参数，控件将添加到指定命令栏的末端。本例中将 Before 参数设置为 1，菜单项添加到“帮助”菜单的顶端。</p>
<p>参数 Temporary 是可选的。设置为 True 将使添加的菜单项为临时的，在关闭应用程序时删除。默认值为 False。</p>
<p>第 12 行代码，设定新添加菜单项的 Caption 属性为“Excel Home 技术论坛”。Caption 属性返回或设置命令栏控件的标题。</p>
<p>第 13 行代码，设置新添加菜单项的 BeginGroup 属性为 True，分组显示。</p>
<p>第 14 行到第 19 行代码，在“Excel Home 技术论坛”菜单项上添加五个子菜单并设置其 Caption 属性、FaceId 属性和 OnAction 属性。</p>
<p>FaceId 属性设置出现在菜单标题左侧的图标，以数字表示，一个数字代表一个内置的图标。</p>
<p>OnAction 属性设置一个 VBA 的过程名，该过程在用户单击子菜单时运行，本例中设置为下面的过程。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Public</span> <span class="token keyword">Sub</span> myC<span class="token punctuation">(</span><span class="token punctuation">)</span>
	MsgBox <span class="token string">"您选择了： "</span> <span class="token operator">&amp;</span> Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">.</span>ActionControl<span class="token punctuation">.</span>Caption
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>代码解析：</p>
<p>myC 过程是单击新添加子菜单所运行过程，为了演示方便在这里只使用 MsgBox 函数显示所其 Caption 属性。</p>
<p>删除新添加的菜单项及子菜单的代码如下所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> DelmyTools<span class="token punctuation">(</span><span class="token punctuation">)</span>
	Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">(</span><span class="token string">"Worksheet menu bar"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Reset
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>代码解析：</p>
<p>DelmyTools 过程使用 Reset 方法重置菜单栏，删除添加的菜单项及子菜单。</p>
<p>为了在打开工作簿时自动添加菜单项，需要在工作簿的 Activate 事件中调用 myTools 过程，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> Workbook_Activate<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Call</span> myTools
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>为了在关闭工作簿时删除新添加的菜单项，还需要在工作簿的 Deactivate 事件中调用 DelmyTools 过程，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> Workbook_Deactivate<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Call</span> DelmyTools
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>如果希望这个菜单为所有工作簿使用，那么就应该在工作簿的 Open 事件中调用 myTools 过程，在 BeforeClose 事件中调用 DelmyTools 过程。</p>
<p>运行 myTools 过程，将在 Excel 工作表菜单栏中的“帮助”菜单中添加一个名为“Excel Home 技术论坛”的菜单项及五个子菜单，如图 79-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/79-1.png" alt="" loading="lazy"></p>
<p><u>图 79-1</u>	在“帮助”菜单中添加菜单项及子菜单</p>
</div>
<h2 id="_80、在菜单栏指定位置添加菜单" tabindex="-1"><a class="header-anchor" href="#_80、在菜单栏指定位置添加菜单" aria-hidden="true">#</a> 80、在菜单栏指定位置添加菜单</h2>
<p>除了可以在工作表菜单中添加菜单项外，还可以在工作表菜单栏的指定位置添加菜单，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> AddNewMenu<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> HelpMenu <span class="token keyword">As</span> CommandBarControl
	<span class="token keyword">Dim</span> NewMenu <span class="token keyword">As</span> CommandBarPopup
	<span class="token keyword">With</span> Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">(</span><span class="token string">"Worksheet menu bar"</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span>Reset
		<span class="token keyword">Set</span> HelpMenu <span class="token operator">=</span> <span class="token punctuation">.</span>FindControl<span class="token punctuation">(</span>ID<span class="token punctuation">:</span><span class="token operator">=</span><span class="token punctuation">.</span>Controls<span class="token punctuation">(</span><span class="token string">"帮助(&amp;H)"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>ID<span class="token punctuation">)</span>
		<span class="token keyword">If</span> HelpMenu <span class="token keyword">Is</span> <span class="token boolean">Nothing</span> <span class="token keyword">Then</span>
			<span class="token keyword">Set</span> NewMenu <span class="token operator">=</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlPopup<span class="token punctuation">)</span>
		<span class="token keyword">Else</span>
			<span class="token keyword">Set</span> NewMenu <span class="token operator">=</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlPopup<span class="token punctuation">,</span> <span class="token operator">_</span>
				Before<span class="token punctuation">:</span><span class="token operator">=</span>HelpMenu<span class="token punctuation">.</span>Index<span class="token punctuation">)</span>
		<span class="token keyword">End</span> <span class="token keyword">If</span>
		<span class="token keyword">With</span> NewMenu
			<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"统计(&amp;S)"</span>
			<span class="token keyword">With</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlButton<span class="token punctuation">)</span>
				<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"输入数据(&amp;D)"</span>
				<span class="token punctuation">.</span>FaceId <span class="token operator">=</span> <span class="token number">162</span>
				<span class="token punctuation">.</span>OnAction <span class="token operator">=</span> <span class="token string">""</span>
			<span class="token keyword">End</span> <span class="token keyword">With</span>
			<span class="token keyword">With</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlButton<span class="token punctuation">)</span>
				<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"汇总数据(&amp;T)"</span>
				<span class="token punctuation">.</span>FaceId <span class="token operator">=</span> <span class="token number">590</span>
				<span class="token punctuation">.</span>OnAction <span class="token operator">=</span> <span class="token string">""</span>
			<span class="token keyword">End</span> <span class="token keyword">With</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
	<span class="token keyword">Set</span> HelpMenu <span class="token operator">=</span> <span class="token boolean">Nothing</span>
	<span class="token keyword">Set</span> NewMenu <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>代码解析：</p>
<p>AddNewMenu 过程使用 Add 方法在工作表“帮助”菜单前添加一个标题为“统计”的菜单和两个菜单项。</p>
<p>第 6 行代码，使用 FindControl 方法在工作表菜单栏中查找“帮助”菜单。应用于 CommandBars 对象的 FindControl 方法返回一个符合指定条件的 CommandBarControl 对象。语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>FindControl<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">,</span> Id<span class="token punctuation">,</span> Tag<span class="token punctuation">,</span> Visible<span class="token punctuation">,</span> Recursive<span class="token punctuation">)</span>

参数expression是必需的，返回一个CommandBars对象。
参数<span class="token keyword">Type</span>是可选的，要查找控件的类型。
参数Id是可选的，要查找控件的标识符。
参数Tag是可选的，要查找控件的标记值。
参数Visible是可选，如果该值为<span class="token boolean">True</span>，那么只查找屏幕上显示的命令栏控件。默认值为<span class="token boolean">False</span>。
参数Recursive是可选的，如果该值为<span class="token boolean">True</span>，那么将在命令栏及其全部弹出式子工具栏中查找。此参数仅应用于CommandBar对象。默认值为<span class="token boolean">False</span>。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>如果没有控件符合搜索条件，那么 FindControl 方法返回 Nothing。</p>
<p>第 7 行到第 12 行代码，如果工作表菜单栏中存在“帮助”菜单，将“统计”菜单添加到“帮助”菜单之前，否则添加到工作表菜单栏末尾。</p>
<p>第 12 行到第 25 行代码，在“统计”菜单中添加两个子菜单并设置其各种属性。</p>
<p>运行 AddNewMenu 过程，将在工作表菜单栏的“帮助”菜单之前添加一个“统计”菜单，如图 80-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/80-1.png" alt="" loading="lazy"></p>
<p><u>图 80-1</u>	在工作表菜单栏中添加菜单</p>
</div>
<h2 id="_81、屏蔽和删除工作表菜单" tabindex="-1"><a class="header-anchor" href="#_81、屏蔽和删除工作表菜单" aria-hidden="true">#</a> 81、屏蔽和删除工作表菜单</h2>
<p>如果不希望用户使用工作表菜单栏的部分功能，可以把菜单或菜单项屏蔽或删除，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> Shibar<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">With</span> Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">(</span><span class="token string">"Worksheet menu bar"</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span>Reset
		<span class="token punctuation">.</span>Controls<span class="token punctuation">(</span><span class="token string">"工具(&amp;T)"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Controls<span class="token punctuation">(</span><span class="token string">"宏(&amp;M)"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Enabled <span class="token operator">=</span> <span class="token boolean">False</span>
		<span class="token punctuation">.</span>Controls<span class="token punctuation">(</span><span class="token string">"数据(&amp;D)"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Delete
	<span class="token keyword">End</span> <span class="token keyword">With</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>代码解析：</p>
<p>Shibar 过程屏蔽 “工具”菜单中的“宏”菜单项，删除菜单栏中的“数据”菜单。</p>
<p>第 3 行代码，使用 Reset 方法重置工作表菜单栏。</p>
<p>第 4 行代码，将“宏”菜单项的 Enabled 属性设置为 False，使之无效。</p>
<p>Enabled 属性决定命令栏或命令栏控件是否激活，如果将该属性设置为 False，那么该菜单项将无效。</p>
<p>第 5 行代码，使用 Delete 方法将“数据”菜单从工作表菜单栏中删除。</p>
<p>Delete 方法应用于命令栏或命令栏控件时，从集合中删除指定对象，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>Delete<span class="token punctuation">(</span>Temporary<span class="token punctuation">)</span>

参数expression是必需的，返回命令栏或命令栏控件对象之一。
参数Temporary是可选的，设置为<span class="token boolean">True</span>将从当前会话中删除控件，应用程序在下次会话时将再次显示控件。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>运行 Shibar 过程，将屏蔽工作表“工具”菜单中的“宏”菜单项和删除工作表菜单栏中的“数据”菜单，如图 81-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/81-1.png" alt="" loading="lazy"></p>
<p><u>图 81-1</u>	屏蔽和删除工作表菜单</p>
</div>
<h2 id="_82、改变系统菜单的操作" tabindex="-1"><a class="header-anchor" href="#_82、改变系统菜单的操作" aria-hidden="true">#</a> 82、改变系统菜单的操作</h2>
<p>利用 VBA 甚至可以改变系统菜单的默认操作，使之达到自定义菜单的效果，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Dim</span> <span class="token keyword">WithEvents</span> Saveas <span class="token keyword">As</span> CommandBarButton
<span class="token keyword">Private</span> <span class="token keyword">Sub</span> Workbook_Open<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Set</span> Saveas <span class="token operator">=</span> Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">(</span><span class="token string">"File"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Controls<span class="token punctuation">(</span><span class="token string">"另存为(&amp;A)..."</span><span class="token punctuation">)</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
<span class="token keyword">Private</span> <span class="token keyword">Sub</span> Saveas_Click<span class="token punctuation">(</span><span class="token keyword">ByVal</span> Ctrl <span class="token keyword">As</span> Office<span class="token punctuation">.</span>CommandBarButton<span class="token punctuation">,</span> CancelDefault <span class="token keyword">As</span> <span class="token keyword">Boolean</span><span class="token punctuation">)</span>
	CancelDefault <span class="token operator">=</span> <span class="token boolean">True</span>
	MsgBox <span class="token string">"本工作簿禁止另存!"</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>代码解析：</p>
<p>第 1 行代码，在模块级别中使用关键词 WithEvents 声明变量 Saveas 是用来响应由 CommandBarButton 对象触发事件的对象变量。</p>
<p>第 2 行到第 4 代码工作簿的 Open 事件过程，在工作簿打开时将变量 Saveas 赋值为系统菜单的“另存为”菜单。</p>
<p>因为在声明变量 Saveas 时使用了关键词 WithEvents，不能同时使用 New 关键词隐式地创建对象，所以在使用变量 Saveas 之前，必须使用 Set 语句将变量赋值为一个已有对象。</p>
<p>第 5 行到第 8 代码变量 Saveas 的单击事件过程，改变系统菜单“另存为”的默认操作。</p>
<p>变量 Saveas 的 Click 事件在用户单击系统菜单“另存为”时发生，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> CommandBarButton_Click<span class="token punctuation">(</span><span class="token keyword">ByVal</span> Ctrl <span class="token keyword">As</span> CommandBarButton<span class="token punctuation">,</span><span class="token keyword">ByVal</span> CancelDefault <span class="token keyword">As</span> <span class="token keyword">Boolean</span><span class="token punctuation">)</span>

参数Ctrl是必需的，指示初始化该事件的CommandBarButton控件。
参数CancelDefault是必需的，<span class="token keyword">Boolean</span>类型，如果执行了与CommandBarButton控件关联的默认操作，该值为<span class="token boolean">False</span>。除非其他过程或加载项取消了此操作。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>第 6、7 行代码，将 CancelDefault 参数设置为 True，使单击“另存为”菜单时并不执行默认操作而只显示一个消息框。</p>
<p>将工作簿保存、关闭后，重新打开，单击“另存为”菜单并不执行默认操作，只显示一个消息框，如图 82-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/82-1.png" alt="" loading="lazy"></p>
<p><u>图 82-1</u>	改变系统菜单的默认操作</p>
</div>
<h2 id="_83、定制自己的系统菜单" tabindex="-1"><a class="header-anchor" href="#_83、定制自己的系统菜单" aria-hidden="true">#</a> 83、定制自己的系统菜单</h2>
<p>使用 VBA 开发的小型应用系统完成后，Excel 原有的菜单栏完全可以舍弃不用，只使用自定义的菜单栏，更加方便快捷，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> AddNowBar<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> NewBar <span class="token keyword">As</span> CommandBar
	<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">Resume</span> <span class="token keyword">Next</span>
	<span class="token keyword">With</span> Application
		<span class="token punctuation">.</span>CommandBars<span class="token punctuation">(</span><span class="token string">"Standard"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Visible <span class="token operator">=</span> <span class="token boolean">False</span> 
		<span class="token punctuation">.</span>CommandBars<span class="token punctuation">(</span><span class="token string">"Formatting"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Visible <span class="token operator">=</span> <span class="token boolean">False</span> 
		<span class="token punctuation">.</span>CommandBars<span class="token punctuation">(</span><span class="token string">"Stop Recording"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Visible <span class="token operator">=</span> <span class="token boolean">False</span>
		<span class="token punctuation">.</span>CommandBars<span class="token punctuation">(</span><span class="token string">"toolbar list"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Enabled <span class="token operator">=</span> <span class="token boolean">False</span>
		<span class="token punctuation">.</span>CommandBars<span class="token punctuation">.</span>DisableAskAQuestionDropdown <span class="token operator">=</span> <span class="token boolean">True</span>
		<span class="token punctuation">.</span>DisplayFormulaBar <span class="token operator">=</span> <span class="token boolean">False</span> 
		<span class="token punctuation">.</span>CommandBars<span class="token punctuation">(</span><span class="token string">"NewBar"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Delete
	<span class="token keyword">End</span> <span class="token keyword">With</span>
	<span class="token keyword">Set</span> NewBar <span class="token operator">=</span> Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">.</span>Add<span class="token punctuation">(</span>Name<span class="token punctuation">:</span><span class="token operator">=</span><span class="token string">"NewBar"</span><span class="token punctuation">,</span> Position<span class="token punctuation">:</span><span class="token operator">=</span>msoBarTop<span class="token punctuation">,</span> MenuBar<span class="token punctuation">:</span><span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> Temporary<span class="token punctuation">:</span><span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
	<span class="token keyword">With</span> NewBar
		<span class="token punctuation">.</span>Visible <span class="token operator">=</span> <span class="token boolean">True</span>
		<span class="token keyword">With</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlPopup<span class="token punctuation">)</span>
			<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"系统设置(&amp;X)"</span>
			<span class="token punctuation">.</span>BeginGroup <span class="token operator">=</span> <span class="token boolean">True</span>
			<span class="token keyword">With</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlButton<span class="token punctuation">)</span>
				<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"保存(&amp;S)"</span>
				<span class="token punctuation">.</span>BeginGroup <span class="token operator">=</span> <span class="token boolean">True</span>
				<span class="token punctuation">.</span>FaceId <span class="token operator">=</span> <span class="token number">1975</span>
			<span class="token keyword">End</span> <span class="token keyword">With</span>
			<span class="token keyword">With</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlButton<span class="token punctuation">)</span>
				<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"备份(&amp;B)"</span>
				<span class="token punctuation">.</span>BeginGroup <span class="token operator">=</span> <span class="token boolean">True</span>
				<span class="token punctuation">.</span>FaceId <span class="token operator">=</span> <span class="token number">747</span>
			<span class="token keyword">End</span> <span class="token keyword">With</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
		<span class="token keyword">With</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlPopup<span class="token punctuation">)</span>
			<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"会计凭证(&amp;P)"</span>
			<span class="token punctuation">.</span>BeginGroup <span class="token operator">=</span> <span class="token boolean">True</span>
			<span class="token keyword">With</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlButton<span class="token punctuation">)</span>
				<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"录入(&amp;L)"</span>
				<span class="token punctuation">.</span>BeginGroup <span class="token operator">=</span> <span class="token boolean">True</span>
				<span class="token punctuation">.</span>FaceId <span class="token operator">=</span> <span class="token number">197</span>
			<span class="token keyword">End</span> <span class="token keyword">With</span>
			<span class="token keyword">With</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlButton<span class="token punctuation">)</span>
				<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"审核(&amp;S)"</span>
				<span class="token punctuation">.</span>BeginGroup <span class="token operator">=</span> <span class="token boolean">True</span>
				<span class="token punctuation">.</span>FaceId <span class="token operator">=</span> <span class="token number">714</span>
			<span class="token keyword">End</span> <span class="token keyword">With</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
		<span class="token keyword">With</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlPopup<span class="token punctuation">)</span>
			<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"会计账簿(&amp;Z)"</span>
			<span class="token punctuation">.</span>BeginGroup <span class="token operator">=</span> <span class="token boolean">True</span>
			<span class="token keyword">With</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlButton<span class="token punctuation">)</span>
				<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"记账(&amp;L)"</span>
				<span class="token punctuation">.</span>BeginGroup <span class="token operator">=</span> <span class="token boolean">True</span>
				<span class="token punctuation">.</span>FaceId <span class="token operator">=</span> <span class="token number">65</span>
			<span class="token keyword">End</span> <span class="token keyword">With</span>
			<span class="token keyword">With</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlButton<span class="token punctuation">)</span>
				<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"结账(&amp;S)"</span>
				<span class="token punctuation">.</span>BeginGroup <span class="token operator">=</span> <span class="token boolean">True</span>
				<span class="token punctuation">.</span>FaceId <span class="token operator">=</span> <span class="token number">47</span>
			<span class="token keyword">End</span> <span class="token keyword">With</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
		<span class="token keyword">With</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlPopup<span class="token punctuation">)</span>
			<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"会计报表(&amp;B)"</span>
			<span class="token punctuation">.</span>BeginGroup <span class="token operator">=</span> <span class="token boolean">True</span>
			<span class="token keyword">With</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlPopup<span class="token punctuation">)</span>
				<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"资产负债表(&amp;Y)"</span>
				<span class="token punctuation">.</span>BeginGroup <span class="token operator">=</span> <span class="token boolean">True</span>
				<span class="token keyword">With</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlButton<span class="token punctuation">)</span>
					<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"月报(&amp;M)"</span>
					<span class="token punctuation">.</span>BeginGroup <span class="token operator">=</span> <span class="token boolean">True</span>
					<span class="token punctuation">.</span>FaceId <span class="token operator">=</span> <span class="token number">1180</span>
				<span class="token keyword">End</span> <span class="token keyword">With</span>
					<span class="token keyword">With</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlButton<span class="token punctuation">)</span>
						<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"年报(&amp;Y)"</span>
						<span class="token punctuation">.</span>BeginGroup <span class="token operator">=</span> <span class="token boolean">True</span>
						<span class="token punctuation">.</span>FaceId <span class="token operator">=</span> <span class="token number">1188</span>
					<span class="token keyword">End</span> <span class="token keyword">With</span>
				<span class="token keyword">End</span> <span class="token keyword">With</span>
			<span class="token keyword">With</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlPopup<span class="token punctuation">)</span>
				<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"损益表(&amp;S)"</span>
				<span class="token punctuation">.</span>BeginGroup <span class="token operator">=</span> <span class="token boolean">True</span>
				<span class="token keyword">With</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlButton<span class="token punctuation">)</span>
					<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"月报(&amp;M)"</span>
					<span class="token punctuation">.</span>BeginGroup <span class="token operator">=</span> <span class="token boolean">True</span>
					<span class="token punctuation">.</span>FaceId <span class="token operator">=</span> <span class="token number">1180</span>
				<span class="token keyword">End</span> <span class="token keyword">With</span>
				<span class="token keyword">With</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlButton<span class="token punctuation">)</span>
					<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"年报(&amp;Y)"</span>
					<span class="token punctuation">.</span>BeginGroup <span class="token operator">=</span> <span class="token boolean">True</span>
					<span class="token punctuation">.</span>FaceId <span class="token operator">=</span> <span class="token number">1188</span>
				<span class="token keyword">End</span> <span class="token keyword">With</span>
			<span class="token keyword">End</span> <span class="token keyword">With</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
		<span class="token keyword">With</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlButton<span class="token punctuation">)</span>
			<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"退出系统(&amp;C)"</span>
			<span class="token punctuation">.</span>BeginGroup <span class="token operator">=</span> <span class="token boolean">True</span>
			<span class="token punctuation">.</span>Style <span class="token operator">=</span> msoButtonCaption
		<span class="token keyword">End</span> <span class="token keyword">With</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
	<span class="token keyword">Set</span> NewBar <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br></div></div><p>代码解析：</p>
<p>AddNowBar 过程使用 Add 方法创建自定义菜单栏替换工作表菜单栏。</p>
<p>第 2 行代码定义变量 NwBar 为命令栏。</p>
<p>第 3 行代码忽略错误语句，以免第 11 行代码在删除可能不存在的“NewBar”菜单栏时发生错误。</p>
<p>第 5 行代码隐藏“常用”工具栏。</p>
<p>第 6 行代码隐藏“格式”工具栏。</p>
<p>第 7 行代码隐藏“停止录制”工具栏。</p>
<p>第 8 行代码屏蔽工具栏的右键快捷菜单。</p>
<p>第 9 行代码屏蔽工具栏的“键入需要帮助的问题”下拉框。</p>
<p>第 10 行代码屏蔽工具栏的编辑栏。</p>
<p>第 11 行代码，在添加命令栏前先删除“NewBar”菜单栏，以免重复增加。</p>
<p>第 13 行代码，使用 Add 方法创建命令栏。Add 方法应用于 CommandBars 对象的语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>Add<span class="token punctuation">(</span>Name<span class="token punctuation">,</span> Position<span class="token punctuation">,</span> MenuBar<span class="token punctuation">,</span> Temporary<span class="token punctuation">)</span>

参数expression是必需的，返回一个CommandBars对象，该对象代表应用程序中的命令栏，新建命令栏的控件均以该对象为载体。
参数Name是可选的，设置新建命令栏的标题。如果忽略该参数，则为新建命令栏指定默认标题，本例中设置新建命令栏的标题为<span class="token string">“NewBar”</span>。
参数Position是可选的，设置新建命令栏的位置或类型，可以为表格 <span class="token number">83</span><span class="token number">1</span>所列的 MsoBarPosition常数之一。
参数MenuBar是可选的，设置为<span class="token boolean">True</span> 将以新命令栏替换活动菜单栏，默认值为<span class="token boolean">False</span>。
参数Temporary是可选的，设置为<span class="token boolean">True</span>将使新建命令栏为临时命令栏，在关闭应用程序时删除，默认值为<span class="token boolean">False</span>。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><u>表格 83-1</u>	MsoBarPosition 常数</p>
<table>
<thead>
<tr>
<th>常数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>msoBarLeft、msoBarTop、msoBarRight 和 msoBarBottom</td>
<td>指定新命令栏的左侧、顶部、右侧和底部坐标</td>
</tr>
<tr>
<td>msoBarFloating</td>
<td>指定新命令栏不固定</td>
</tr>
<tr>
<td>msoBarPopup</td>
<td>指定新命令栏为快捷菜单</td>
</tr>
<tr>
<td>msoBarMenuBar</td>
<td>仅适用于 Macintosh 机</td>
</tr>
</tbody>
</table>
<p>本例中设置“NewBar”命令栏的 Position 参数为 msoBarTop，使“NewBar”命令栏位于 Excel 窗口的顶部。</p>
<p>在本例中，设置“NewBar”命令栏的 MenuBar 属性为 True，以“NewBar”命令栏替换活动菜单栏。</p>
<p>在本例中，设置“NewBar”命令栏的 Temporary 属性为 True，使“NewBar”命令栏为临时命令栏，在关闭应用程序时删除。</p>
<p>第 15 行代码，设置“NewBar”命令栏为可见的。</p>
<p>第 16 行到 95 行代码，使用 Add 方法在“NewBar”命令栏中添加菜单、菜单项及子菜单并设置其各项属性，参阅 79 。</p>
<p>恢复 Excel 原有的菜单栏的代码如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> DelNowBar<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">Resume</span> <span class="token keyword">Next</span>
	<span class="token keyword">With</span> Application
		<span class="token punctuation">.</span>CommandBars<span class="token punctuation">(</span><span class="token string">"Standard"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Visible <span class="token operator">=</span> <span class="token boolean">True</span>
		<span class="token punctuation">.</span>CommandBars<span class="token punctuation">(</span><span class="token string">"Formatting"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Visible <span class="token operator">=</span> <span class="token boolean">True</span>
		<span class="token punctuation">.</span>CommandBars<span class="token punctuation">(</span><span class="token string">"Stop Recording"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Visible <span class="token operator">=</span> <span class="token boolean">True</span>
		<span class="token punctuation">.</span>CommandBars<span class="token punctuation">(</span><span class="token string">"toolbar list"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Enabled <span class="token operator">=</span> <span class="token boolean">True</span>
		<span class="token punctuation">.</span>CommandBars<span class="token punctuation">.</span>DisableAskAQuestionDropdown <span class="token operator">=</span> <span class="token boolean">False</span>
		<span class="token punctuation">.</span>DisplayFormulaBar <span class="token operator">=</span> <span class="token boolean">True</span>
		<span class="token punctuation">.</span>CommandBars<span class="token punctuation">(</span><span class="token string">"NewBar"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Delete
	<span class="token keyword">End</span> <span class="token keyword">With</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>代码解析：</p>
<p>DelNowBar 过程取消 “常用”、“格式”和“停止录制”工具栏的的隐藏，恢复“键入需要帮助的问题”下拉框和编辑栏，删除“NewBar”命令栏。</p>
<p>运行 AddNowBar 过程，工作表菜单栏如图 83-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/83-1.png" alt="" loading="lazy"></p>
<p><u>图 83-1</u>	定制自己的系统菜单</p>
</div>
<h2 id="_84、改变菜单按钮图标" tabindex="-1"><a class="header-anchor" href="#_84、改变菜单按钮图标" aria-hidden="true">#</a> 84、改变菜单按钮图标</h2>
<p>利用 VBA 可以改变系统菜单的默认图标，使之达到自定义按钮图标的效果，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> myCbarCnt<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> myCbarCnt <span class="token keyword">As</span> CommandBarControl
	<span class="token keyword">With</span> Sheet1<span class="token punctuation">.</span>Shapes<span class="token punctuation">.</span>AddShape<span class="token punctuation">(</span><span class="token number">17</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span>Fill<span class="token punctuation">.</span>ForeColor<span class="token punctuation">.</span>SchemeColor <span class="token operator">=</span> <span class="token number">29</span>
		<span class="token punctuation">.</span>CopyPicture
		<span class="token punctuation">.</span>Delete
	<span class="token keyword">End</span> <span class="token keyword">With</span>
	<span class="token keyword">Set</span> myCbarCnt <span class="token operator">=</span> Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">(</span><span class="token string">"Standard"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Controls<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	myCbarCnt<span class="token punctuation">.</span>PasteFace
	<span class="token keyword">Set</span> myCbarCnt <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
<span class="token keyword">Sub</span> DelmyCbarCnt<span class="token punctuation">(</span><span class="token punctuation">)</span>
	Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">(</span><span class="token string">"Standard"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Controls<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Reset
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>代码解析：</p>
<p>myCbarCnt 过程改变系统菜单的“新建”按钮的图标。</p>
<p>第 3 行代码使用 Shape 对象的 AddShape 方法在工作表中新建一个自选图形。应用于 Shape 对象的 AddShape 方法请参阅 53 。</p>
<p>在本例中将新建图形的 Left 参数和 Top 参数设置为较大的数值使新建的自选图形不在当前窗口的可视区域内。</p>
<p>第 4 行代码设置新建自选图形的颜色。</p>
<p>第 5 行代码使用 CopyPicture 方法将新建自选图形作为图片复制到剪贴板。CopyPicture 方法的语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>CopyPicture<span class="token punctuation">(</span>Appearance<span class="token punctuation">,</span> Format<span class="token punctuation">)</span>

参数expression是必需的，一个有效的对象。
参数Appearance是可选的，指定图片的复制方式。
参数Format是可选的，图片的格式。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>第 6 行代码使用 Delete 方法删除新建的自选图形。</p>
<p>第 8 行代码使用 Set 语句将系统菜单的“新建”按钮赋给变量 myCbarCnt。</p>
<p>第 9 行代码 PasteFace 方法将新建的自选图形粘贴到“新建”按钮中。PasteFace 方法将“剪贴板”的内容粘贴到指定命令栏按钮控件上，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>PasteFace

参数expression是必需的，返回一个CommandBarButton对象。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>DelmyCbarCnt 过程使用 Reset 方法恢复“新建”按钮的默认图标。</p>
<p>运行 myCbarCnt 过程结果如图 84-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/84-1.png" alt="" loading="lazy"></p>
<p><u>图 84-1</u>	定制自己的系统菜单</p>
</div>
<h2 id="_85、右键快捷菜单增加菜单项" tabindex="-1"><a class="header-anchor" href="#_85、右键快捷菜单增加菜单项" aria-hidden="true">#</a> 85、右键快捷菜单增加菜单项</h2>
<p>在 Excel 的右键快捷菜单中可以添加新的菜单项，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> MyCmb<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> MyCmb <span class="token keyword">As</span> CommandBarButton
	<span class="token keyword">With</span> Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">(</span><span class="token string">"Cell"</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span>Reset
		<span class="token keyword">Set</span> MyCmb <span class="token operator">=</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlButton<span class="token punctuation">,</span> <span class="token operator">_</span>
			ID<span class="token punctuation">:</span><span class="token operator">=</span><span class="token number">2521</span><span class="token punctuation">,</span> Before<span class="token punctuation">:</span><span class="token operator">=</span><span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Count<span class="token punctuation">,</span> Temporary<span class="token punctuation">:</span><span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
			MyCmb<span class="token punctuation">.</span>BeginGroup <span class="token operator">=</span> <span class="token boolean">True</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
	<span class="token keyword">Set</span> MyCmb <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>代码解析：</p>
<p>MyCmb 过程使用 Add 方法在 Excel 的右键快捷菜单中添加内置的“打印”菜单项。</p>
<p>在使用 Add 方法添加菜单项时将 Id 参数设置为 2521，添加的就是内置的“打印”菜单项。将 Before 属性设置成右键快捷菜单中最后一个控件的值，使“打印”菜单项添加到右键快捷菜单中最后一个控件之前。将 Temporary 参数设置成 True，在关闭应用程序时从右键快捷菜单中删除“打印”菜单项。</p>
<p>运行 MyCmb 过程，将在 Excel 右键快捷菜单中添加 “打印”菜单项，如图 85-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/85-1.png" alt="" loading="lazy"></p>
<p><u>图 85-1</u>	在右键快捷菜单中添加菜单项</p>
</div>
<h2 id="_86、自定义右键快捷菜单" tabindex="-1"><a class="header-anchor" href="#_86、自定义右键快捷菜单" aria-hidden="true">#</a> 86、自定义右键快捷菜单</h2>
<p>在工作表中创建自定义的右键快捷菜单替换 Excel 默认的右键快捷菜单，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> Mycell<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">With</span> Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token string">"Mycell"</span><span class="token punctuation">,</span> msoBarPopup<span class="token punctuation">)</span>
		<span class="token keyword">With</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlButton<span class="token punctuation">)</span>
			<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"会计凭证"</span>
			<span class="token punctuation">.</span>FaceId <span class="token operator">=</span> <span class="token number">9893</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
		<span class="token keyword">With</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlButton<span class="token punctuation">)</span>
			<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"会计账簿"</span>
			<span class="token punctuation">.</span>FaceId <span class="token operator">=</span> <span class="token number">284</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
		<span class="token keyword">With</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlPopup<span class="token punctuation">)</span>
			<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"会计报表"</span>
			<span class="token keyword">With</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlButton<span class="token punctuation">)</span>
				<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"月报"</span>
				<span class="token punctuation">.</span>FaceId <span class="token operator">=</span> <span class="token number">9590</span>
			<span class="token keyword">End</span> <span class="token keyword">With</span>
			<span class="token keyword">With</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlButton<span class="token punctuation">)</span>
				<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"季报"</span>
				<span class="token punctuation">.</span>FaceId <span class="token operator">=</span> <span class="token number">9591</span>
			<span class="token keyword">End</span> <span class="token keyword">With</span>
			<span class="token keyword">With</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlButton<span class="token punctuation">)</span>
				<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"年报"</span>
				<span class="token punctuation">.</span>FaceId <span class="token operator">=</span> <span class="token number">9592</span>
			<span class="token keyword">End</span> <span class="token keyword">With</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
		<span class="token keyword">With</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlButton<span class="token punctuation">)</span>
			<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"凭证打印"</span>
			<span class="token punctuation">.</span>FaceId <span class="token operator">=</span> <span class="token number">9614</span>
			<span class="token punctuation">.</span>BeginGroup <span class="token operator">=</span> <span class="token boolean">True</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
		<span class="token keyword">With</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlButton<span class="token punctuation">)</span>
			<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"账簿打印"</span>
			<span class="token punctuation">.</span>FaceId <span class="token operator">=</span> <span class="token number">707</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
		<span class="token keyword">With</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlButton<span class="token punctuation">)</span>
			<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"报表打印"</span>
			<span class="token punctuation">.</span>FaceId <span class="token operator">=</span> <span class="token number">986</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p>代码解析：</p>
<p>Mycell 过程在 Excel 工作表中创建自定义的右键快捷菜单。</p>
<p>第 2 行代码，使用 Add 方法添加名称为“Mycell”命令栏，设置“Mycell”命令栏的 Position 属性为 msoBarPopup，使“Mycell”命令栏为快捷菜单。关于 Position 参数的 MsoBarPosition 常数请参阅 83 中的表格 83-1。</p>
<p>第 3 行到第 39 行代码，使用 Add 方法在“Mycell”命令栏中添加菜单和菜单项，并设置其各项属性。</p>
<p>为了让自定义右键快捷菜单替换 Excel 默认的右键快捷菜单，并且只在右键单击 Sheet1 工作表时显示，需要在 Sheet1 工作表的 BeforeRightClick 事件中写入下面的代码。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> Worksheet_BeforeRightClick<span class="token punctuation">(</span><span class="token keyword">ByVal</span> Target <span class="token keyword">As</span> Range<span class="token punctuation">,</span> Cancel <span class="token keyword">As</span> <span class="token keyword">Boolean</span><span class="token punctuation">)</span>
	Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">(</span><span class="token string">"Mycell"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>ShowPopup
	Cancel <span class="token operator">=</span> <span class="token boolean">True</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>代码解析：</p>
<p>工作表的 BeforeRightClick 事件过程，在右键单击工作表时，将“Mycell”命令栏作为右键快捷菜单，在当前光标位置显示。</p>
<p>工作表 BeforeRightClick 事件语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> expression_BeforeRightClick<span class="token punctuation">(</span><span class="token keyword">ByVal</span> Target <span class="token keyword">As</span> Range<span class="token punctuation">,</span> Cancel <span class="token keyword">As</span> <span class="token keyword">Boolean</span><span class="token punctuation">)</span>

参数expression是必需的，Worksheet类型对象。
参数Target 是可选的，右键单击发生时最靠近鼠标指针的单元格。
参数Cancel是可选的，当事件发生时为<span class="token boolean">False</span>。如果在事件过程中将Cancel参数设为<span class="token boolean">True</span>，则该过程执行结束之后不进行默认的右键单击操作。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>第 2 行代码，使用 ShowPopup 方法将“Mycell”命令栏作为右键快捷菜单，在当前光标位置显示。</p>
<p>ShowPopup 方法的语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>ShowPopup<span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>

参数expression是必需的，返回一个CommandBar对象。
参数x是可选的，快捷菜单所在位置的 x 坐标。如果省略此参数，将使用当前光标位置的x坐标。
参数y是可选的，快捷菜单所在位置的y坐标。如果省略此参数，将使用当前光标位置的y坐标。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>当用鼠标右键单击工作表中任意单元格时激活 BeforeRightClick 事件，此事件先于默认的右键单击操作。在使用 ShowPopup 方法显示“Mycell”命令栏后，将 Cancel 参数设置为 True，过程执行结束之后不进行默认的右键单击操作，Excel 右键快捷菜单就不会显示。</p>
<p>运行 Mycell 过程后，右键单击 Sheet1 工作表，在工作表中显示自定义右键快捷菜单，如图 86-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/86-1.png" alt="" loading="lazy"></p>
<p><u>图 86-1</u>	自定义右键快捷菜单</p>
</div>
<h2 id="_87、使用右键菜单制作数据有效性" tabindex="-1"><a class="header-anchor" href="#_87、使用右键菜单制作数据有效性" aria-hidden="true">#</a> 87、使用右键菜单制作数据有效性</h2>
<p>在工作表中输入数据时可以使用自定义右键菜单制作数据有效性，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> Mycell<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> arr <span class="token keyword">As</span> <span class="token keyword">Variant</span>
	<span class="token keyword">Dim</span> i <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">Dim</span> Mycell <span class="token keyword">As</span> CommandBar
	<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">Resume</span> <span class="token keyword">Next</span>
	Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">(</span><span class="token string">"Mycell"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Delete
	arr <span class="token operator">=</span> Array<span class="token punctuation">(</span><span class="token string">"经理室"</span><span class="token punctuation">,</span> <span class="token string">"办公室"</span><span class="token punctuation">,</span> <span class="token string">"生技科"</span><span class="token punctuation">,</span> <span class="token string">"财务科"</span><span class="token punctuation">,</span> <span class="token string">"营业部"</span><span class="token punctuation">)</span>
	<span class="token keyword">Set</span> Mycell <span class="token operator">=</span> Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token string">"Mycell"</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
	<span class="token keyword">For</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token keyword">To</span> <span class="token number">4</span>
		<span class="token keyword">With</span> Mycell<span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span>Caption <span class="token operator">=</span> arr<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
			<span class="token punctuation">.</span>OnAction <span class="token operator">=</span> <span class="token string">"MyOnAction"</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
	<span class="token keyword">Next</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
<span class="token keyword">Sub</span> MyOnAction<span class="token punctuation">(</span><span class="token punctuation">)</span>
	ActiveCell <span class="token operator">=</span> Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">.</span>ActionControl<span class="token punctuation">.</span>Caption
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>代码解析：</p>
<p>Mycell 过程创建自定义的右键菜单，请参阅 86 。</p>
<p>MyOnAction 过程是点击自定义右键菜单所运行的过程，将所选右键菜单的名称写入活动单元格。</p>
<p>为了使自定义的右键菜单在 Sheet1 工作表的特定区域中显示，需要在 VBE 中双击 Sheet1 表后写入下面的代码。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> Worksheet_BeforeRightClick<span class="token punctuation">(</span><span class="token keyword">ByVal</span> Target <span class="token keyword">As</span> Range<span class="token punctuation">,</span> Cancel <span class="token keyword">As</span> <span class="token keyword">Boolean</span><span class="token punctuation">)</span>
	<span class="token keyword">If</span> Target<span class="token punctuation">.</span>Column <span class="token operator">=</span> <span class="token number">2</span> <span class="token keyword">Then</span>
		<span class="token keyword">Call</span> Mycell
		Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">(</span><span class="token string">"Mycell"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>ShowPopup
		Cancel <span class="token operator">=</span> <span class="token boolean">True</span>
	<span class="token keyword">End</span> <span class="token keyword">If</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>代码解析：</p>
<p>工作表的 BeforeRightClick 事件过程，在右键单击工作表时，将“Mycell”命令栏作为右键快捷菜单，在当前光标位置显示，请参阅 86 。</p>
<p>在工作表的 B 列中点击右键结果如图 87-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/87-1.png" alt="" loading="lazy"></p>
<p><u>图 87-1</u>	使用右键菜单制作数据有效性</p>
</div>
<h2 id="_88、禁用工作表右键菜单" tabindex="-1"><a class="header-anchor" href="#_88、禁用工作表右键菜单" aria-hidden="true">#</a> 88、禁用工作表右键菜单</h2>
<p>有时并不希望用户使用工作表中的右键菜单对工作表进行操作，那么可以使用下面的代码禁用工作表右键菜单。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> DisBar<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> myBar <span class="token keyword">As</span> CommandBar
	<span class="token keyword">For</span> <span class="token keyword">Each</span> myBar <span class="token keyword">In</span> CommandBars
		<span class="token keyword">If</span> myBar<span class="token punctuation">.</span><span class="token keyword">Type</span> <span class="token operator">=</span> msoBarTypePopup <span class="token keyword">Then</span>
			myBar<span class="token punctuation">.</span>Enabled <span class="token operator">=</span> <span class="token boolean">False</span>
		<span class="token keyword">End</span> <span class="token keyword">If</span>
	<span class="token keyword">Next</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>代码解析：</p>
<p>DisBar 过程禁用工作表中所有的右键菜单。</p>
<p>第 3 行代码使用 For Each...Next 语句遍历 CommandBars 集合。CommandBars 集合代表应用程序中所有的命令栏。</p>
<p>第 4 行代码根据命令栏的 Type 属性判断命令栏是否为右键菜单。应用于 CommandBar 对象的 Type 属性返回命令栏的类型，可以为表格 88-1 所列的 MsoBarType 常量之一。</p>
<p>表格 88-1	MsoBarType 常量</p>
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
<td>msoBarTypeMenuBar</td>
<td>1</td>
<td>菜单栏</td>
</tr>
<tr>
<td>msoBarTypeNormal</td>
<td>0</td>
<td>工具栏</td>
</tr>
<tr>
<td>msoBarTypePopup</td>
<td>2</td>
<td>右键快捷菜单</td>
</tr>
</tbody>
</table>
<p>第 5 行代码将 CommandBars 集合中右键快捷菜的 Enabled 属性设置为 False，使之无效。</p>
<p>运行 DisBar 过程将禁用工作表中所有的右键菜单，需要恢复时只需将其 Enabled 属性设置为 True 即可。</p>
<h2 id="_89、创建自定义工具栏" tabindex="-1"><a class="header-anchor" href="#_89、创建自定义工具栏" aria-hidden="true">#</a> 89、创建自定义工具栏</h2>
<p>为了方便用户操作，在 Excel 原有的的工具栏上，还可以创建自定义的工具栏，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> NowToolbar<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> arr <span class="token keyword">As</span> <span class="token keyword">Variant</span>
	<span class="token keyword">Dim</span> id <span class="token keyword">As</span> <span class="token keyword">Variant</span>
	<span class="token keyword">Dim</span> i <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">Dim</span> Toolbar <span class="token keyword">As</span> CommandBar
	<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">Resume</span> <span class="token keyword">Next</span>
	Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">(</span><span class="token string">"MyToolbar"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Delete
	arr <span class="token operator">=</span> Array<span class="token punctuation">(</span><span class="token string">"会计凭证"</span><span class="token punctuation">,</span> <span class="token string">"会计账簿"</span><span class="token punctuation">,</span> <span class="token string">"会计报表"</span><span class="token punctuation">,</span> <span class="token string">"凭证打印"</span><span class="token punctuation">,</span> <span class="token string">"账簿打印"</span><span class="token punctuation">,</span> <span class="token string">"报表打印"</span><span class="token punctuation">)</span>
	id <span class="token operator">=</span> Array<span class="token punctuation">(</span><span class="token number">9893</span><span class="token punctuation">,</span> <span class="token number">284</span><span class="token punctuation">,</span> <span class="token number">9590</span><span class="token punctuation">,</span> <span class="token number">9614</span><span class="token punctuation">,</span> <span class="token number">707</span><span class="token punctuation">,</span> <span class="token number">986</span><span class="token punctuation">)</span>
	<span class="token keyword">Set</span> Toolbar <span class="token operator">=</span> Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token string">"MyToolbar"</span><span class="token punctuation">,</span> msoBarTop<span class="token punctuation">)</span>
		<span class="token keyword">With</span> Toolbar
			<span class="token punctuation">.</span>Protection <span class="token operator">=</span> msoBarNoResize
			<span class="token punctuation">.</span>Visible <span class="token operator">=</span> <span class="token boolean">True</span>
			<span class="token keyword">For</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token keyword">To</span> <span class="token number">5</span>
				<span class="token keyword">With</span> <span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlButton<span class="token punctuation">)</span>
					<span class="token punctuation">.</span>Caption <span class="token operator">=</span> arr<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
					<span class="token punctuation">.</span>FaceId <span class="token operator">=</span> id<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
					<span class="token punctuation">.</span>BeginGroup <span class="token operator">=</span> <span class="token boolean">True</span>
					<span class="token punctuation">.</span>Style <span class="token operator">=</span> msoButtonIconAndCaptionBelow
				<span class="token keyword">End</span> <span class="token keyword">With</span>
			<span class="token keyword">Next</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
	<span class="token keyword">Set</span> Toolbar <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>代码解析：</p>
<p>NowToolbar 过程使用 Add 方法在 Excel 窗口中创建自定义工具栏。应用于 CommandBars 对象的 Add 方法请参阅 83 。</p>
<p>第 10 行代码，使用 Add 方法在菜单栏上创建名称为“MyToolbar”的命令栏，创建时设置新命令栏的 Position 参数为 msoBarTop，使新命令栏位于应用程序窗口的顶部。如果将 Position 参数设置成 msoBarFloating，新命令栏为浮动工具栏，如图 89-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/89-1.png" alt="" loading="lazy"></p>
<p><u>图 89-1</u>	浮动命令栏</p>
</div>
<p>关于 Position 参数的 MsoBarPosition 常数请参阅 83 中的表格 83-1。</p>
<p>第 12 行代码，设置“MyToolbar”命令栏的 Protection 属性为 msoBarNoResize。应用于 CommandBar 对象的 Protection 属性指定命令栏的保护类型，可以为表格 89-1 所列的 MsoBarProtection 常数之一。</p>
<p><u>表格 89-1</u>	MsoBarProtection常数</p>
<table>
<thead>
<tr>
<th>常数</th>
<th>值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>msoBarNoProtection</td>
<td>0</td>
<td>不受保护，可自定义(缺省值)</td>
</tr>
<tr>
<td>msoBarNoCustomize</td>
<td>1</td>
<td>不能自定义</td>
</tr>
<tr>
<td>msoBarNoResize</td>
<td>2</td>
<td>不能调整大小</td>
</tr>
<tr>
<td>msoBarNoMove</td>
<td>4</td>
<td>不能移动</td>
</tr>
<tr>
<td>msoBarNoChangeVisible</td>
<td>8</td>
<td>不能更改可见状态</td>
</tr>
<tr>
<td>msoBarNoChangeDock</td>
<td>16</td>
<td>不能改变停靠的位置</td>
</tr>
<tr>
<td>msoBarNoVerticalDock</td>
<td>32</td>
<td>不能沿窗口左侧或右侧停放</td>
</tr>
<tr>
<td>msoBarNoHorizontalDock</td>
<td>64</td>
<td>不能沿窗口顶部或底部停放</td>
</tr>
</tbody>
</table>
<p>第 14 行到第 21 代码，使用 Add 方法在新命令栏中添加按钮控件，设置按钮控件的各项属性。其中第 19 行代码，设置按钮控件的 Style 属性为 msoButtonIconAndCaptionBelow，使工具栏按钮显示时包含图标和标题，且标题位于图标之下。</p>
<p>应用于 CommandBar 对象的 Style 属性返回或设置工具栏按钮的显示方式，可以为表格 89-2 所列的 MsoButtonStyle 常数之一。</p>
<p><u>表格 89-2</u>	MsoButtonStyle 常数</p>
<table>
<thead>
<tr>
<th>常数</th>
<th>值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>msoButtonIcon</td>
<td>1</td>
<td>包含图标的按钮</td>
</tr>
<tr>
<td>msoButtonCaption</td>
<td>2</td>
<td>包含标题的按钮</td>
</tr>
<tr>
<td>ButtonIconandCaption</td>
<td>3</td>
<td>包含图标和标题的按钮</td>
</tr>
<tr>
<td>msoButtonIconAndCaptionBelow</td>
<td>11</td>
<td>包含图标和标题，且标题位于底部的按钮</td>
</tr>
<tr>
<td>msoButtonIconAndWrapCaption</td>
<td>7</td>
<td>包含图标和标题，且标题自动换行的按钮</td>
</tr>
<tr>
<td>msoButtonWrapCaption</td>
<td>14</td>
<td>包含标题，且标题自动换行的按钮</td>
</tr>
</tbody>
</table>
<p>运行 NowToolbar 过程，将在 Excel 窗口的顶部创建一个自定义的工具栏，如图 89-2 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/89-2.png" alt="" loading="lazy"></p>
<p><u>图 89-2</u>	创建自定义工具栏</p>
</div>
<h2 id="_90、自定义工具栏按钮图标" tabindex="-1"><a class="header-anchor" href="#_90、自定义工具栏按钮图标" aria-hidden="true">#</a> 90、自定义工具栏按钮图标</h2>
<p>在创建自定义的工具栏时，除了可以为工具栏按钮添加 Excel 内置的图标外，还能为工具栏按钮添加自定义的图标，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> AddCustomButton<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> xBar <span class="token keyword">As</span> CommandBar
	<span class="token keyword">Dim</span> xButton <span class="token keyword">As</span> CommandBarButton
	<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">Resume</span> <span class="token keyword">Next</span>
	Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">(</span><span class="token string">"CustomBar"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Delete
	<span class="token keyword">Set</span> xBar <span class="token operator">=</span> CommandBars<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token string">"CustomBar"</span><span class="token punctuation">,</span> msoBarTop<span class="token punctuation">)</span>
	<span class="token keyword">Set</span> xButton <span class="token operator">=</span> xBar<span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span>msoControlButton<span class="token punctuation">)</span>
	<span class="token keyword">With</span> xButton
		<span class="token punctuation">.</span>Picture <span class="token operator">=</span> LoadPicture<span class="token punctuation">(</span>ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\P.BMP"</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span>Mask <span class="token operator">=</span> LoadPicture<span class="token punctuation">(</span>ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\M.BMP"</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span>TooltipText <span class="token operator">=</span> <span class="token string">"Excel Home 论坛"</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
	xBar<span class="token punctuation">.</span>Visible <span class="token operator">=</span> <span class="token boolean">True</span>
	<span class="token keyword">Set</span> xBar <span class="token operator">=</span> <span class="token boolean">Nothing</span>
	<span class="token keyword">Set</span> xButton <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>代码解析：</p>
<p>AddCustomButton 过程创建自定义工具栏，并设置工具栏的按钮自定义图标。</p>
<p>第 6、7 行代码，使用 Add 方法在 Excel 窗口中添加自定义工具栏和按钮。请参阅 89 。</p>
<p>第 9 行代码，设置工具栏按钮的 Picture 属性为同一目录中的 p.bmp 图片。</p>
<p>应用于 CommandBarButton 对象的 Picture 属性返回一个 IPictureDisp 对象，表示  CommandBarButton 对象的图像，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>Picture

参数是必需的，返回一个CommandBarButton对象。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>指定对象的 Picture 属性就能设置对象的图像。</p>
<p>第 10 行代码，设置工具栏按钮的 Mask 属性为同一目录中的 m.bmp 图片。</p>
<p>为了使工具栏按钮图标透明显示，在指定对象的 Picture 属性后，还需要指定对象的 Mask 属性。</p>
<p>应用于 CommandBarButton 对象的 Mask 属性返回表示 CommandBarButton 对象的屏蔽图像的 IPictureDisp 对象，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>Mask

参数是必需的，返回一个CommandBarButton对象。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>屏蔽图像决定按钮图像透明的部分。在创建作为屏蔽图像使用的图像时，所有要透明的区域应该为白色，所有要显示的区域应该为黑色。</p>
<p>第 11 行代码，设置按钮的“屏幕提示”为“ExcelHome论坛”。</p>
<p>运行 AddCustomButton 过程，创建自定义工具栏，并设置工具栏按钮的图标，如图 90-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/90-1.png" alt="" loading="lazy"></p>
<p><u>图 90-1</u>	自定义工具栏图标</p>
</div>
<h2 id="_91、自定义工作簿图标" tabindex="-1"><a class="header-anchor" href="#_91、自定义工作簿图标" aria-hidden="true">#</a> 91、自定义工作簿图标</h2>
<p>Excel 标题栏的图标是默认的，而借助 API 函数可以自定义工作簿标题栏图标，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> FindWindow <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token keyword">Alias</span> <span class="token string">"FindWindowA"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> lpClassName <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> lpWindowName <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> DrawMenuBar <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> hWnd <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> SetFocus <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> hWnd <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> SendMessage <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token keyword">Alias</span> <span class="token string">"SendMessageA"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> hWnd <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> wMsg <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> wParam <span class="token keyword">As</span> <span class="token keyword">Integer</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> lParam <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> ExtractIcon <span class="token keyword">Lib</span> <span class="token string">"shell32.dll"</span> <span class="token keyword">Alias</span> <span class="token string">"ExtractIconA"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> hInst <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> lpszExeFileName <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> nIconIndex <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Const</span> WM_SETICON <span class="token operator">=</span> <span class="token number">&amp;H80</span>
<span class="token keyword">Private</span> <span class="token keyword">Sub</span> Workbook_Open<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> IStyle <span class="token keyword">As</span> <span class="token keyword">Long</span>
	<span class="token keyword">Dim</span> hIcon <span class="token keyword">As</span> <span class="token keyword">Long</span>
	<span class="token keyword">Dim</span> hWndForm <span class="token keyword">As</span> <span class="token keyword">Long</span>
	hWndForm <span class="token operator">=</span> FindWindow<span class="token punctuation">(</span>vbNullString<span class="token punctuation">,</span> Application<span class="token punctuation">.</span>Caption<span class="token punctuation">)</span>
	hIcon <span class="token operator">=</span> ExtractIcon<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> ActiveWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\p.bmp"</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
	SendMessage hWndForm<span class="token punctuation">,</span> WM_SETICON<span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">,</span> hIcon
	SendMessage hWndForm<span class="token punctuation">,</span> WM_SETICON<span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">,</span> hIcon
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>代码解析：</p>
<p>工作簿打开后使用 API 函数自定义工作簿标题栏的图标。</p>
<p>第 1 行到第 6 行代码，API 函数声明。</p>
<p>第 7 行到第 15 行代码，工作簿的 Open 事件过程，把工作簿标题栏默认的图标更改为同一文件夹下的 p.bmp 图片。</p>
<p>工作簿打开后标题栏如图 91-1 所示，任务栏图标如图 91-2 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/91-1.png" alt="" loading="lazy"></p>
<p><u>图 91-1</u>	自定义工作簿标题和图标</p>
<p><img src="@source/project/Excel/assets/91-2.png" alt="" loading="lazy"></p>
<p><u>图 91-2</u>	任务栏图标</p>
</div>
<h2 id="_92、移除工作表的最小最大化和关闭按钮" tabindex="-1"><a class="header-anchor" href="#_92、移除工作表的最小最大化和关闭按钮" aria-hidden="true">#</a> 92、移除工作表的最小最大化和关闭按钮</h2>
<p>如果不希望工作表的最小、最大化和关闭按钮出现在菜单栏中，可以使用以下代码去除：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>ActiveWorkbook<span class="token punctuation">.</span>Protect <span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>代码解析：</p>
<p>使用 Protect 方法对工作簿进行保护。Protect 方法应用于 Workbook 对象的时保护工作簿使其不至被修改，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>Protect<span class="token punctuation">(</span>Password<span class="token punctuation">,</span> <span class="token keyword">Structure</span><span class="token punctuation">,</span> Windows<span class="token punctuation">)</span>

参数expression是必需的，该表达式返回一个Workbook对象。
参数Password是可选的，为工作表或工作簿指定区分大小写的密码。
参数<span class="token keyword">Structure</span>是可选的，如果为<span class="token boolean">True</span>，则保护工作簿结构（工作表的相对位置）。默认值为<span class="token boolean">False</span>。
参数Windows是可选的，如果为<span class="token boolean">True</span>，则保护工作簿窗口。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>恢复工作表的最大、最小化和关闭按钮的代码如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>ActiveWorkbook<span class="token punctuation">.</span>Protect <span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在本例中将 Windows 参数设置为 True，使工作簿窗口受到保护，工作表的最小、最大化和关闭按钮及图标不出现在菜单栏中，如图 92-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/92-1.png" alt="" loading="lazy"></p>
<p><u>图 92-1</u>	移除工作表最小、最大化和关闭按钮</p>
</div>
<h2 id="_93、在工具栏上添加下拉列表框" tabindex="-1"><a class="header-anchor" href="#_93、在工具栏上添加下拉列表框" aria-hidden="true">#</a> 93、在工具栏上添加下拉列表框</h2>
<p>如果需要在工具栏中添加类似“字体”这样的下拉列表控制框控件，那么可以使用下面的代码。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> AddDropdown<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> myDropdown <span class="token keyword">As</span> <span class="token keyword">Object</span>
	<span class="token keyword">Dim</span> myCap <span class="token keyword">As</span> <span class="token keyword">Variant</span>
	<span class="token keyword">Dim</span> i <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	myCap <span class="token operator">=</span> Array<span class="token punctuation">(</span><span class="token string">"基础应用"</span><span class="token punctuation">,</span> <span class="token string">"VBA程序开发"</span><span class="token punctuation">,</span> <span class="token string">"函数与公式"</span><span class="token punctuation">)</span>
	<span class="token keyword">Call</span> DeleteButton
	<span class="token keyword">Set</span> myDropdown <span class="token operator">=</span> Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">(</span><span class="token string">"Formatting"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Controls <span class="token operator">_</span>
		<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token keyword">Type</span><span class="token punctuation">:</span><span class="token operator">=</span>msoControlDropdown<span class="token punctuation">,</span> Before<span class="token punctuation">:</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token keyword">With</span> myDropdown
		<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"请选择版块"</span>
		<span class="token punctuation">.</span>OnAction <span class="token operator">=</span> <span class="token string">"myOnA"</span>
		<span class="token punctuation">.</span>Style <span class="token operator">=</span> msoComboNormal
		<span class="token keyword">For</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token keyword">To</span> UBound<span class="token punctuation">(</span>myCap<span class="token punctuation">)</span>
			<span class="token punctuation">.</span>AddItem myCap<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
		<span class="token keyword">Next</span>
		<span class="token punctuation">.</span>ListIndex <span class="token operator">=</span> <span class="token number">1</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
<span class="token keyword">Sub</span> DeleteButton<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">With</span> Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">(</span><span class="token string">"Formatting"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Controls<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token keyword">If</span> <span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"请选择版块"</span> <span class="token keyword">Then</span> <span class="token punctuation">.</span>Delete
	<span class="token keyword">End</span> <span class="token keyword">With</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
<span class="token keyword">Sub</span> myOnA<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> myList <span class="token keyword">As</span> <span class="token keyword">Byte</span>
	myList <span class="token operator">=</span> Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">(</span><span class="token string">"Formatting"</span><span class="token punctuation">)</span> <span class="token operator">_</span>
		<span class="token punctuation">.</span>Controls<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>ListIndex
	ActiveWorkbook<span class="token punctuation">.</span>FollowHyperlink <span class="token operator">_</span>
	Address<span class="token punctuation">:</span><span class="token operator">=</span><span class="token string">"http://club.excelhome.net/forum-"</span> <span class="token operator">&amp;</span> myList <span class="token operator">&amp;</span> <span class="token string">"-1.html"</span><span class="token punctuation">,</span> NewWindow<span class="token punctuation">:</span><span class="token operator">=</span><span class="token boolean">True</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>代码解析：</p>
<p>AddDropdown 过程使用 Add 方法在工具栏中添加下拉列表控制框控件。</p>
<p>第 5 行代码使用 Array 函数创建一个数组用于保存下拉列表控制框控件加载列表项所需的元素。</p>
<p>第 6 行代码先运行第 19 行到第 23 行的 DeleteButton 过程删除可能存在的下拉列表控制框控件，以免重复添加。DeleteButton 过程判断工具栏中第一个控件的 Caption 属性是否为“请选择版块”，如果是则删除该下拉列表控制框控件。</p>
<p>第 7、8 行代码使用 Add 方法在工具栏中添加下拉列表控制框控件。应用于  CommandBarControls 对象的 Add 方法请参阅 79 。示例中将其参数 Type 设置为 msoControlDropdown，添加的就是下拉列表控制框控件。</p>
<p>第 10 行代码设置下拉列表控制框控件的 Caption 属性，应用于 CommandBarControls 对象的 Caption 属性返回或设置指定命令栏控件的题注文字，也可作为默认的“屏幕提示”显示。</p>
<p>第 11 行代码设置改变下拉列表控制框控件的内容时要运行的过程为第 24 行到第 30 行代码的 myOnA 过程。myOnA 过程根据下拉列表控制框控件的 ListIndex 属性值打开 Excel Home 论坛中相应的版块。</p>
<p>第 12 行代码设置下拉列表控制框控件的样式。Style 属性返回或设置命令栏控件的显示方式，该属性值可设置为表格 93-1 所列 MsoComboStyle 常量之一。</p>
<p>表格 93-1	MsoComboStyle 常量</p>
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
<td>msoComboLabel</td>
<td>1</td>
<td>显示标签</td>
</tr>
<tr>
<td>msoComboNormal</td>
<td>0</td>
<td>不显示标签</td>
</tr>
</tbody>
</table>
<p>第 13 行到第 15 行代码使用 AddItem 方法将数组中的元素添加到下拉列表控制框控件的列表项中。</p>
<p>第 16 行代码将下拉列表控制框控件的 ListIndex 属性设置为 1，使其显示第一条列表项。</p>
<p>运行 AddDropdown 过程，工具栏如图 93-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/93-1.png" alt="" loading="lazy"></p>
<p><u>图 93-1</u>	添加下拉列表控制框控件</p>
</div>
<h2 id="_94、屏蔽工作表的复制功能" tabindex="-1"><a class="header-anchor" href="#_94、屏蔽工作表的复制功能" aria-hidden="true">#</a> 94、屏蔽工作表的复制功能</h2>
<p>有时我们并不希望用户对工作表中的数据进行复制粘贴操作，此时可以把所有的复制功能都屏蔽，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>	<span class="token keyword">Dim</span> CmdCtrls <span class="token keyword">As</span> CommandBarControls
	<span class="token keyword">Dim</span> Cmd <span class="token keyword">As</span> CommandBarControl
<span class="token keyword">Sub</span> ProCopy<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Set</span> CmdCtrls <span class="token operator">=</span> Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">.</span>FindControls<span class="token punctuation">(</span>ID<span class="token punctuation">:</span><span class="token operator">=</span><span class="token number">19</span><span class="token punctuation">)</span>
	<span class="token keyword">For</span> <span class="token keyword">Each</span> Cmd <span class="token keyword">In</span> CmdCtrls
		Cmd<span class="token punctuation">.</span>Enabled <span class="token operator">=</span> <span class="token boolean">False</span>
	<span class="token keyword">Next</span>
	Application<span class="token punctuation">.</span>CellDragAndDrop <span class="token operator">=</span> <span class="token boolean">False</span>
	Application<span class="token punctuation">.</span>OnKey <span class="token punctuation">(</span><span class="token string">"^c"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">""</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
<span class="token keyword">Sub</span> StaCopy<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Set</span> CmdCtrls <span class="token operator">=</span> Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">.</span>FindControls<span class="token punctuation">(</span>ID<span class="token punctuation">:</span><span class="token operator">=</span><span class="token number">19</span><span class="token punctuation">)</span>
	<span class="token keyword">For</span> <span class="token keyword">Each</span> Cmd <span class="token keyword">In</span> CmdCtrls
		Cmd<span class="token punctuation">.</span>Enabled <span class="token operator">=</span> <span class="token boolean">True</span>
	<span class="token keyword">Next</span>
	Application<span class="token punctuation">.</span>CellDragAndDrop <span class="token operator">=</span> <span class="token boolean">True</span>
	Application<span class="token punctuation">.</span>OnKey <span class="token punctuation">(</span><span class="token string">"^c"</span><span class="token punctuation">)</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>代码解析：</p>
<p>第 1、2 行代码在模块顶部声明两个模块级的变量。</p>
<p>第 3 行到第 10 行代码 ProCopy 过程，屏蔽工作表中所有的复制功能。其中第 4 行到第 7 行代码使用 FindControls 方法将所有与“复制”相关的命令栏控件赋给变量 CmdCtrls 后将其 Enabled 设置为 False。关于 FindControls 方法请参阅 80 。</p>
<p>第 8 行代码屏蔽单元格拖放功能，关于应用于 Application 对象的 CellDragAndDrop 属性请参阅 10 。</p>
<p>第 9 行代码屏蔽 &lt;Ctrl+C&gt; 组合键功能，关于应用于 Application 对象的 OnKey 方法请参阅 68 。</p>
<p>第 11 行到第 18 行代码 StaCopy 过程，恢复所有的复制功能。</p>
<h2 id="_95、禁用工具栏的自定义" tabindex="-1"><a class="header-anchor" href="#_95、禁用工具栏的自定义" aria-hidden="true">#</a> 95、禁用工具栏的自定义</h2>
<p>在 Excel 中，用户可以通过依次单击菜单“视图”→“工具栏”→“自定义”，显示“自定义”选项卡来调整菜单栏和工具栏，如图 95-1、图 95-2 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/95-1.png" alt="" loading="lazy"></p>
<p><u>图 95-1</u>	自定义功能</p>
<p><img src="@source/project/Excel/assets/95-2.png" alt="" loading="lazy"></p>
<p><u>图 95-2</u>	自定义选项卡</p>
</div>
<p>如果不希望用户使用“自定义”选项卡来调整菜单栏和工具栏，可以禁用工具栏的自定义功能，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> nCustomize<span class="token punctuation">(</span><span class="token punctuation">)</span>
	Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">.</span>DisableCustomize <span class="token operator">=</span> <span class="token boolean">True</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>代码解析：</p>
<p>nCustomize 过程禁用工具栏的自定义功能，应用于 CommandBars 集合对象的DisableCustomize 属性设置是否禁用工具栏的自定义。如果禁用，返回 True，否则返回 False。</p>
<p>用于启用工具栏的自定义的代码是：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> yCustomize<span class="token punctuation">(</span><span class="token punctuation">)</span>
	Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">.</span>DisableCustomize <span class="token operator">=</span> <span class="token boolean">False</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>运行 nCustomize 过程，禁用工具栏的自定义对话框，自定义菜单项消失,如图 95-3 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/95-3.png" alt="" loading="lazy"></p>
<p><u>图 95-3</u>	禁用工具栏的自定义</p>
<h2 id="_96、屏蔽所有的命令栏" tabindex="-1"><a class="header-anchor" href="#_96、屏蔽所有的命令栏" aria-hidden="true">#</a> 96、屏蔽所有的命令栏</h2>
<p>在使用自定义的操作界面时，需要屏蔽 Excel 中所有的命令栏，可以使用下面的代码。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> Shielding_1<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> i <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">For</span> i <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">To</span> Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">.</span>Count
		Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span>Enabled <span class="token operator">=</span> <span class="token boolean">False</span>
	<span class="token keyword">Next</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>代码解析：</p>
<p>Shielding_1 过程使用 For...Next 语句遍历 Excel 命令栏，并将其 Enabled 属性设置为 False，使之无效。</p>
<p>还可以使用 For Each...Next 语句遍历所有的 CommandBars 对象，代码如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> Shielding_2<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> Cmd <span class="token keyword">As</span> CommandBar
	<span class="token keyword">For</span> <span class="token keyword">Each</span> Cmd <span class="token keyword">In</span> Application<span class="token punctuation">.</span>CommandBars
		Cmd<span class="token punctuation">.</span>Enabled <span class="token operator">=</span> <span class="token boolean">False</span>
	<span class="token keyword">Next</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>运行 Shielding_1 或 Shielding_2 过程工作簿如图 96-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/96-1.png" alt="" loading="lazy"></p>
<p><u>图 96-1</u>	屏蔽所有的命令栏</p>
</div>
</div>
<p>在需要恢复时只需将 Enabled 属性设置为 True 即可，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> Recovery_1<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> i <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">For</span> i <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">To</span> Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">.</span>Count
		Application<span class="token punctuation">.</span>CommandBars<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span>Enabled <span class="token operator">=</span> <span class="token boolean">True</span>
	<span class="token keyword">Next</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
<span class="token keyword">Sub</span> Recover_2<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> Cmd <span class="token keyword">As</span> CommandBar
	<span class="token keyword">For</span> <span class="token keyword">Each</span> Cmd <span class="token keyword">In</span> Application<span class="token punctuation">.</span>CommandBars
		Cmd<span class="token punctuation">.</span>Enabled <span class="token operator">=</span> <span class="token boolean">True</span>
	<span class="token keyword">Next</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>代码解析：</p>
<p>Recovery_1 和 Recover_2 过程分别使用 For...Next 语句和 For Each...Next 语句遍历所有的 CommandBars 对象，设置其 Enabled 属性为 True，显示所有的命令栏。</p>
<h2 id="_97、恢复-excel-的命令栏" tabindex="-1"><a class="header-anchor" href="#_97、恢复-excel-的命令栏" aria-hidden="true">#</a> 97、恢复 Excel 的命令栏</h2>
<p>如果用户经常添加、删除 Excel 的菜单和工具栏而又没有及时恢复的话，有时会破坏 Excel 默认的用户界面，即使用 Reset 方法也不能恢复成初始状态。</p>
<p>此时可以在电脑的本地硬盘中查找扩展名为 *.xlb 的文件，该文件在电脑中的位置会因 Excel 版本的不同而不同，在 XP 操作系统中，该文件位于系统盘的 <code>Documents and Settings\Administrator\Application Data\Microsoft\Excel</code> 文件夹，其中 Administrator 是电脑的用户名。找到它最简单的方法是使用 Windows 的搜索功能。按 &lt;Win+F&gt; 组合键调出 Windows 的搜索窗口，然后用 *.xlb 为目标在本地硬盘中进行搜索，如图 97-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/97-1.png" alt="" loading="lazy"></p>
<p><u>图 97-1</u>	搜索 *.xlb 文件</p>
</div>
<p>如果搜索没有结果，请检查“更多高级选项”中是否选中“搜索隐藏的文件和文件夹”选项，如图 97-2 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/97-2.png" alt="" loading="lazy"></p>
<p><u>图 97-2</u>	搜索隐藏的文件和文件夹</p>
</div>
<p>对 Excel 用户界面的任何修改都会保存在 *.xlb 文件中，找到后删除该文件，然后重新启动 Excel。Excel 会重新创建一个 *.xlb 文件，而菜单和工具栏也会全部恢复成初始状态。</p>
</template>
