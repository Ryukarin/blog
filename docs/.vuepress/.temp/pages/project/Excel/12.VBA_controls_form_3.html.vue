<template><h2 id="_134、使用-treeview-控件显示层次" tabindex="-1"><a class="header-anchor" href="#_134、使用-treeview-控件显示层次" aria-hidden="true">#</a> 134、使用 TreeView 控件显示层次</h2>
<p>TreeView 控件是一个树形结构的控件，该控件用于显示分层数据，如目录或文件目录，使程序的表现更为灵活，用户的操作更加方便，示例代码如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> UserForm_Initialize<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> c <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">Dim</span> r <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">Dim</span> rng <span class="token keyword">As</span> <span class="token keyword">Variant</span>
	rng <span class="token operator">=</span> Sheet1<span class="token punctuation">.</span>UsedRange
	<span class="token keyword">With</span> <span class="token keyword">Me</span><span class="token punctuation">.</span>TreeView1
		<span class="token punctuation">.</span>Style <span class="token operator">=</span> tvwTreelinesPlusMinusPictureText
		<span class="token punctuation">.</span>LineStyle <span class="token operator">=</span> tvwRootLines
		<span class="token punctuation">.</span>CheckBoxes <span class="token operator">=</span> <span class="token boolean">False</span>
		<span class="token keyword">With</span> <span class="token punctuation">.</span>Nodes
			<span class="token punctuation">.</span>Clear
			<span class="token punctuation">.</span>Add Key<span class="token punctuation">:</span><span class="token operator">=</span><span class="token string">"科目"</span><span class="token punctuation">,</span> Text<span class="token punctuation">:</span><span class="token operator">=</span><span class="token string">"科目名称"</span>
			<span class="token keyword">For</span> c <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">To</span> Sheet1<span class="token punctuation">.</span>UsedRange<span class="token punctuation">.</span>Columns<span class="token punctuation">.</span>Count
				<span class="token keyword">For</span> r <span class="token operator">=</span> <span class="token number">2</span> <span class="token keyword">To</span> Sheet1<span class="token punctuation">.</span>UsedRange<span class="token punctuation">.</span>Rows<span class="token punctuation">.</span>Count
					<span class="token keyword">If</span> <span class="token keyword">Not</span> IsEmpty<span class="token punctuation">(</span>rng<span class="token punctuation">(</span>r<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">Then</span>
						<span class="token keyword">If</span> c <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">Then</span>
							<span class="token punctuation">.</span>Add relative<span class="token punctuation">:</span><span class="token operator">=</span><span class="token string">"科目"</span><span class="token punctuation">,</span> relationship<span class="token punctuation">:</span><span class="token operator">=</span>tvwChild<span class="token punctuation">,</span> Key<span class="token punctuation">:</span><span class="token operator">=</span>rng<span class="token punctuation">(</span>r<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">,</span> Text<span class="token punctuation">:</span><span class="token operator">=</span>rng<span class="token punctuation">(</span>r<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
						<span class="token keyword">ElseIf</span> <span class="token keyword">Not</span> IsEmpty<span class="token punctuation">(</span>rng<span class="token punctuation">(</span>r<span class="token punctuation">,</span> c <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">Then</span>
							<span class="token punctuation">.</span>Add relative<span class="token punctuation">:</span><span class="token operator">=</span>rng<span class="token punctuation">(</span>r<span class="token punctuation">,</span> c <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> relationship<span class="token punctuation">:</span><span class="token operator">=</span>tvwChild<span class="token punctuation">,</span> Key<span class="token punctuation">:</span><span class="token operator">=</span>rng<span class="token punctuation">(</span>r<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">,</span> Text<span class="token punctuation">:</span><span class="token operator">=</span>rng<span class="token punctuation">(</span>r<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
						<span class="token keyword">Else</span>
							<span class="token punctuation">.</span>Add relative<span class="token punctuation">:</span><span class="token operator">=</span><span class="token keyword">CStr</span><span class="token punctuation">(</span>Sheet1<span class="token punctuation">.</span>Cells<span class="token punctuation">(</span>r<span class="token punctuation">,</span> c <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">End</span><span class="token punctuation">(</span>xlUp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> relationship<span class="token punctuation">:</span><span class="token operator">=</span>tvwChild<span class="token punctuation">,</span> Key<span class="token punctuation">:</span><span class="token operator">=</span>rng<span class="token punctuation">(</span>r<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">,</span> Text<span class="token punctuation">:</span><span class="token operator">=</span>rng<span class="token punctuation">(</span>r<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
						<span class="token keyword">End</span> <span class="token keyword">If</span>
					<span class="token keyword">End</span> <span class="token keyword">If</span>
				<span class="token keyword">Next</span>
			<span class="token keyword">Next</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>代码解析：</p>
<p>在窗体初始化时将工作表中的科目名称填充 TreeView 控件。</p>
<p>第 7 行代码，设置 TreeView 控件每个列表的组成方式。Style 属性设置值如表格 131-2 所示。</p>
<p><u>表格 134-1</u>	Style 属性设置值</p>
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
<td>tvwTextOnly</td>
<td>0</td>
<td>文本</td>
</tr>
<tr>
<td>tvwPictureText</td>
<td>1</td>
<td>图像文本</td>
</tr>
<tr>
<td>tvwPlusMinusText</td>
<td>2</td>
<td>符号文本</td>
</tr>
<tr>
<td>tvwTreelinesText</td>
<td>4</td>
<td>直线文本</td>
</tr>
<tr>
<td>tvwTreelinesPlusMinusPictureText</td>
<td>7</td>
<td>正常显示</td>
</tr>
</tbody>
</table>
<p>第 8 行代码，设置 TreeView 控件显示根节点连线。TreeView 控件的 LineStyle 属性设置为 tvwRootLines 显示根节点连线，设置为 tvwTreeLines 则隐藏根节点连线。</p>
<p>第 9 行代码，设置 TreeView 控件不显示复选框。</p>
<p>第 10 行代码使用 Nodes 属性返回对 TreeView 控件的 Node 对象的集合的引用。</p>
<p>第 11 行代码，清除 TreeView 控件所有的节点。</p>
<p>第 12 行代码，使用 Add 方法在 Treeview 控件的 Nodes 集合中添加一个 Node 对象。Add 方法语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">object</span><span class="token punctuation">.</span>Add<span class="token punctuation">(</span>relative<span class="token punctuation">,</span> relationship<span class="token punctuation">,</span> key<span class="token punctuation">,</span> text<span class="token punctuation">,</span> image<span class="token punctuation">,</span> selectedimage<span class="token punctuation">)</span>

参数<span class="token keyword">Object</span>是必需的，一个有效的对象。
参数Relative是可选的，代表已存在的Node对象的索引号或键值。
参数relationship是可选的，代表新节点与已存在的节点间的关系，指定的Node对象的相对位置。relationship的设置值如表格 <span class="token number">134</span><span class="token operator">-</span><span class="token number">2</span>所示。
参数key是可选的，唯一的字符串，可用于用Item方法检索Node。
参数text 是必需的，在Node中出现的字符串。
参数image是可选的，代表一个图像或在ImageList控件中图象的索引。
参数selectedimage是可选的，代表一个图像或在ImageList控件中图象的索引，在 Node被选中时显示。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><u>表格 134-2</u>	relationship 的设置值</p>
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
<td>tvwFirst</td>
<td>0</td>
<td>首节点，该Node和在relative中被命名的节点位于同一层，并位于所有同层节点之前。</td>
</tr>
<tr>
<td>tvwLast</td>
<td>1</td>
<td>最后的节点，该Node和在relative中被命名的节点位于同一层，并位于所有同层节点之后。任何连续地添加的节点可能位于最后添加的节点之后。</td>
</tr>
<tr>
<td>tvwNext</td>
<td>2</td>
<td>下一个节点，该Node位于在relative中被命名的节点之后。</td>
</tr>
<tr>
<td>tvwPrevious</td>
<td>3</td>
<td>前一个节点，该Node位于在relative中被命名的节点之前。</td>
</tr>
<tr>
<td>tvwChild</td>
<td>4</td>
<td>子节点。该Node 为在relative中被命名的节点的子节点。</td>
</tr>
</tbody>
</table>
<p>第 13 行到第 25 行代码代，在根节点下添加子节点。添加子节点仍然使用 Add 方法，需要一个唯一的 Key 值，必须提供根节点的 Key 值（参数 relative）和参数 relationship 值（tvwChild）。要将子节点链接到根节点的下面，参数 relative 必须与根节点的 Key 值一致，参数 relationship 必须设置为 tvwchild。要使子节点有效，子节点必须也有自已唯一的 Key 值。</p>
<p>获得双击 TreeView 控件后的返回值的代码如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> TreeView1_DblClick<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">If</span> TreeView1<span class="token punctuation">.</span>SelectedItem<span class="token punctuation">.</span>Children <span class="token operator">=</span> <span class="token number">0</span> <span class="token keyword">Then</span>
		Sheet1<span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"A65536"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">End</span><span class="token punctuation">(</span>xlUp<span class="token punctuation">)</span><span class="token punctuation">.</span>Offset<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=</span> TreeView1<span class="token punctuation">.</span>SelectedItem<span class="token punctuation">.</span>Text
	<span class="token keyword">Else</span>
		MsgBox <span class="token string">"所选择的不是末级科目,请重新选择科目!"</span>
	<span class="token keyword">End</span> <span class="token keyword">If</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>代码解析：</p>
<p>TreeView1_ DblClick过程是 TreeView 控件的双击事件，将所选的科目名称写入到工作表中。</p>
<p>第 2 行代码判断所选节点是否是末级科目。TreeView 控件的 SelectedItem 属性返回当前所选择的节点，而 Children 属性检查所选节点是否还有子节点，如没有子节点则返回 0。</p>
<p>运行窗体效果如图 134-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/134-1.png" alt="" loading="lazy"></p>
<p><u>图 134-1</u>	使用 TreeView 控件显示层次</p>
</div>
<h2 id="_135、用户窗体添加图标" tabindex="-1"><a class="header-anchor" href="#_135、用户窗体添加图标" aria-hidden="true">#</a> 135、用户窗体添加图标</h2>
<p>窗体在显示时标题栏上是没有图标的，如果希望在窗体上添加图标，可以借助 API 函数在窗体显示时添加自定义的图标。</p>
<p>在 VBE 窗口中单击菜单“插入”→“用户窗体”，插入一个窗体，在窗体中添加一个 Image 控件，设置 Image 控件 Picture 属性为自定义图标的位图，并将 Image 控件的 Visible 属性设置为 False，使窗体运行时隐藏 Image 控件，如图 135-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/135-1.png" alt="" loading="lazy"></p>
<p><u>图 135-1</u>	窗体中添加 Image 控件</p>
</div>
<p>在 VBE 中双击窗体，写入下面的代码。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> SendMessage <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token keyword">Alias</span> <span class="token string">"SendMessageA"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> hWnd <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> wMsg <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> wParam <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> lParam <span class="token keyword">As</span> Any<span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> DrawMenuBar <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> hWnd <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> FindWindow <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token keyword">Alias</span> <span class="token string">"FindWindowA"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> lpClassName <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> lpWindowName <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Const</span> WM_SETICON <span class="token operator">=</span> <span class="token number">&amp;H80</span>
<span class="token keyword">Private</span> <span class="token keyword">Const</span> ICON_SMALL <span class="token operator">=</span> <span class="token number">0</span><span class="token operator">&amp;</span>
<span class="token keyword">Private</span> <span class="token keyword">Const</span> ICON_BIG <span class="token operator">=</span> <span class="token number">1</span><span class="token operator">&amp;</span>
<span class="token keyword">Sub</span> ChangeIcon<span class="token punctuation">(</span><span class="token keyword">ByVal</span> hWnd <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">Optional</span> <span class="token keyword">ByVal</span> hicon <span class="token keyword">As</span> <span class="token keyword">Long</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token operator">&amp;</span><span class="token punctuation">)</span>
	SendMessage hWnd<span class="token punctuation">,</span> WM_SETICON<span class="token punctuation">,</span> ICON_SMALL<span class="token punctuation">,</span> <span class="token keyword">ByVal</span> hicon
	SendMessage hWnd<span class="token punctuation">,</span> WM_SETICON<span class="token punctuation">,</span> ICON_BIG<span class="token punctuation">,</span> <span class="token keyword">ByVal</span> hicon
	DrawMenuBar hWnd
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
<span class="token keyword">Private</span> <span class="token keyword">Sub</span> UserForm_Initialize<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> hWnd <span class="token keyword">As</span> <span class="token keyword">Long</span>
	hWnd <span class="token operator">=</span> FindWindow<span class="token punctuation">(</span>vbNullString<span class="token punctuation">,</span> <span class="token keyword">Me</span><span class="token punctuation">.</span>Caption<span class="token punctuation">)</span>
	<span class="token keyword">Call</span> ChangeIcon<span class="token punctuation">(</span>hWnd<span class="token punctuation">,</span> Image1<span class="token punctuation">.</span>Picture<span class="token punctuation">.</span>Handle<span class="token punctuation">)</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>代码解析：</p>
<p>窗体的初始化事件，窗体在显示时运行 ChangeIcon 函数，在标题栏中添加图标。</p>
<p>第 1 行到第 6 行代码， API 函数声明。</p>
<p>第 7 行到第 11 行代码，ChangeIcon 过程，用于转换图标。</p>
<p>第 14 行代码，获得窗口句柄。</p>
<p>第 15 行代码，运行 ChangeIcon 过程，将 Image 控件中的位图显示在窗体的标题栏上。</p>
<p>运行窗体后，在窗体标题栏上添加图标，如图 135-2 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/135-2.png" alt="" loading="lazy"></p>
<p><u>图 135-2</u>	在窗体标题栏中添加图标</p>
</div>
<h2 id="_136、用户窗体添加最大最小化按纽" tabindex="-1"><a class="header-anchor" href="#_136、用户窗体添加最大最小化按纽" aria-hidden="true">#</a> 136、用户窗体添加最大最小化按纽</h2>
<p>VBA 中的窗体标题栏上只有关闭按纽，没有最大最小化按纽的，可以使用 API 函数在窗体的标题栏上添加最大最小化按纽，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> FindWindow <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token keyword">Alias</span> <span class="token string">"FindWindowA"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> lpClassName <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> lpWindowName <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> GetWindowLong <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token keyword">Alias</span> <span class="token string">"GetWindowLongA"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> hWnd <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> nIndex <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> SetWindowLong <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token keyword">Alias</span> <span class="token string">"SetWindowLongA"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> hWnd <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> nIndex <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> dwNewLong <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Const</span> WS_MAXIMIZEBOX <span class="token operator">=</span> <span class="token number">&amp;H10000</span>
<span class="token keyword">Private</span> <span class="token keyword">Const</span> WS_MINIMIZEBOX <span class="token operator">=</span> <span class="token number">&amp;H20000</span>
<span class="token keyword">Private</span> <span class="token keyword">Const</span> GWL_STYLE <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">16</span><span class="token punctuation">)</span>
<span class="token keyword">Private</span> <span class="token keyword">Sub</span> UserForm_Initialize<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> hWndForm <span class="token keyword">As</span> <span class="token keyword">Long</span>
	<span class="token keyword">Dim</span> iStyle <span class="token keyword">As</span> <span class="token keyword">Long</span>
	hWndForm <span class="token operator">=</span> FindWindow<span class="token punctuation">(</span><span class="token string">"ThunderDFrame"</span><span class="token punctuation">,</span> <span class="token keyword">Me</span><span class="token punctuation">.</span>Caption<span class="token punctuation">)</span>
	iStyle <span class="token operator">=</span> GetWindowLong<span class="token punctuation">(</span>hWndForm<span class="token punctuation">,</span> GWL_STYLE<span class="token punctuation">)</span>
	iStyle <span class="token operator">=</span> iStyle <span class="token keyword">Or</span> WS_MINIMIZEBOX
	iStyle <span class="token operator">=</span> iStyle <span class="token keyword">Or</span> WS_MAXIMIZEBOX
	SetWindowLong hWndForm<span class="token punctuation">,</span> GWL_STYLE<span class="token punctuation">,</span> iStyle
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>代码解析：</p>
<p>窗体初始化时使用 API 函数在标题栏上添加最大最小化按纽。</p>
<p>第 1 行到第 6 行代码，API 函数声明。</p>
<p>第 10 行代码，获取窗口句柄。</p>
<p>第 11 行到第 14 行代码，在标题栏上添加最大最小化按纽。</p>
<p>运行窗体后效果如图 136-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/136-1.png" alt="" loading="lazy"></p>
<p><u>图 136-1</u>	标题栏上添加最大最小化按纽</p>
</div>
<h2 id="_137、禁用窗体标题栏的关闭按钮" tabindex="-1"><a class="header-anchor" href="#_137、禁用窗体标题栏的关闭按钮" aria-hidden="true">#</a> 137、禁用窗体标题栏的关闭按钮</h2>
<p>如果不希望用户通过窗体标题栏的关闭命令来关闭窗体，可以禁用窗体标题栏上的关闭按钮，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> UserForm_QueryClose<span class="token punctuation">(</span>Cancel <span class="token keyword">As</span> <span class="token keyword">Integer</span><span class="token punctuation">,</span> CloseMode <span class="token keyword">As</span> <span class="token keyword">Integer</span><span class="token punctuation">)</span>
	<span class="token keyword">If</span> CloseMode <span class="token operator">&lt;</span><span class="token operator">></span> <span class="token number">1</span> <span class="token keyword">Then</span>
		Cancel <span class="token operator">=</span> <span class="token boolean">True</span>
		MsgBox <span class="token string">"请点击按钮关闭窗体!"</span>
	<span class="token keyword">End</span> <span class="token keyword">If</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>代码解析：</p>
<p>窗体的 QueryClose 事件，禁用窗体标题栏上的关闭按钮。</p>
<p>窗体的 QueryClose 事件发生在窗体关闭之前，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> UserForm_QueryClose<span class="token punctuation">(</span>cancel <span class="token keyword">As</span> <span class="token keyword">Integer</span><span class="token punctuation">,</span> closemode <span class="token keyword">As</span> <span class="token keyword">Integer</span><span class="token punctuation">)</span>

参数Cance是可选的，整数。将此[参数]<span class="token punctuation">(</span>JavaScript<span class="token punctuation">:</span>hhobj_5<span class="token punctuation">.</span>Click<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>设置成 <span class="token number">0</span> 以外的任意值，在所有加载的用户窗体中停止QueryClose事件，并防止关闭窗体与应用程序。
参数closemode是可选的，一个值或常数，用来指示引起QueryClose事件的原因。
closemode参数的设置值如表格 <span class="token number">137</span><span class="token operator">-</span><span class="token number">1</span>所示。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><u>表格 137-1</u>	closemode 参数</p>
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
<td>vbFormControlMenu</td>
<td>0</td>
<td>用户在 UserForm上选择“控制”菜单中的“关闭”命令</td>
</tr>
<tr>
<td>VbFormCode</td>
<td>1</td>
<td>由代码调用 Unload 语句</td>
</tr>
<tr>
<td>vbAppWindows</td>
<td>2</td>
<td>正在结束当前 Windows 操作环境的过程。(仅用于Visual Basic 5.0 )</td>
</tr>
<tr>
<td>vbAppTaskManager</td>
<td>3</td>
<td>Windows 的“任务管理器”正在关闭这个应用。(仅用于Visual Basic 5.0 )</td>
</tr>
</tbody>
</table>
<p>第 2、3 行代码，如果窗体不是由代码调用 Unload 语句关闭，则停止关闭过程，从而禁用窗体标题栏的关闭按钮。</p>
<p>需要注意的是，一定要在窗体上设置关闭窗体的途径，否则会使窗体无法关闭。</p>
<p>窗体运行后，禁用窗体上的关闭按钮关闭窗体，只能使用按钮关闭窗体，如图 137-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/137-1.png" alt="" loading="lazy"></p>
<p><u>图 137-1</u>	禁用窗体标题栏的关闭命令</p>
</div>
<h2 id="_138、屏蔽窗体标题栏的关闭按钮" tabindex="-1"><a class="header-anchor" href="#_138、屏蔽窗体标题栏的关闭按钮" aria-hidden="true">#</a> 138、屏蔽窗体标题栏的关闭按钮</h2>
<p>使用 API 函数可以屏蔽窗体标题栏的关闭按钮，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> FindWindow <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token keyword">Alias</span> <span class="token string">"FindWindowA"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> lpClassName <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> lpWindowName <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> GetWindowLong <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token keyword">Alias</span> <span class="token string">"GetWindowLongA"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> Hwnd <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> nIndex <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> SetWindowLong <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token keyword">Alias</span> <span class="token string">"SetWindowLongA"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> Hwnd <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> nIndex <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> dwNewLong <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> DrawMenuBar <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> Hwnd <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Const</span> GWL_STYLE <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">16</span><span class="token punctuation">)</span>
<span class="token keyword">Private</span> <span class="token keyword">Const</span> WS_SYSMENU <span class="token operator">=</span> <span class="token number">&amp;H80000</span>
<span class="token keyword">Private</span> Hwnd <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Sub</span> UserForm_Initialize<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> Istype <span class="token keyword">As</span> <span class="token keyword">Long</span>
	Hwnd <span class="token operator">=</span> FindWindow<span class="token punctuation">(</span><span class="token string">"ThunderDFrame"</span><span class="token punctuation">,</span> <span class="token keyword">Me</span><span class="token punctuation">.</span>Caption<span class="token punctuation">)</span>
	Istype <span class="token operator">=</span> GetWindowLong<span class="token punctuation">(</span>Hwnd<span class="token punctuation">,</span> GWL_STYLE<span class="token punctuation">)</span>
	Istype <span class="token operator">=</span> Istype <span class="token keyword">And</span> <span class="token keyword">Not</span> WS_SYSMENU
	SetWindowLong Hwnd<span class="token punctuation">,</span> GWL_STYLE<span class="token punctuation">,</span> Istype
	DrawMenuBar Hwnd
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>代码解析：</p>
<p>第 1 行到第 7 行代码是 API 函数声明。</p>
<p>第 8 行到第 15 行代码是窗体的 Initialize 事件，当窗体显示时屏蔽窗体标题栏的关闭按钮。</p>
<p>窗体运行后，屏蔽窗体上的关闭按钮，只能使用按钮关闭窗体，如图 138-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/138-1.png" alt="" loading="lazy"></p>
<p><u>图 138-1</u>	屏蔽窗体标题栏的关闭按钮</p>
</div>
<h2 id="_139、无标题栏和边框的窗体" tabindex="-1"><a class="header-anchor" href="#_139、无标题栏和边框的窗体" aria-hidden="true">#</a> 139、无标题栏和边框的窗体</h2>
<p>如果希望制作无标题栏和边框的窗体，那么可以使用 API 函数。</p>
<p>在 VBE 窗口中单击菜单“插入”→“用户窗体”，双击窗体，在其代码窗口中输入下面的代码：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> DrawMenuBar <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> Hwnd <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> GetWindowLong <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token keyword">Alias</span> <span class="token string">"GetWindowLongA"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> Hwnd <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> nIndex <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> SetWindowLong <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token keyword">Alias</span> <span class="token string">"SetWindowLongA"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> Hwnd <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> nIndex <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> dwNewLong <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> FindWindow <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token keyword">Alias</span> <span class="token string">"FindWindowA"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> lpClassName <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> lpWindowName <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Const</span> GWL_STYLE <span class="token keyword">As</span> <span class="token keyword">Long</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">16</span><span class="token punctuation">)</span>
<span class="token keyword">Private</span> <span class="token keyword">Const</span> GWL_EXSTYLE <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token keyword">Private</span> <span class="token keyword">Const</span> WS_CAPTION <span class="token keyword">As</span> <span class="token keyword">Long</span> <span class="token operator">=</span> <span class="token number">&amp;HC00000</span>
<span class="token keyword">Private</span> <span class="token keyword">Const</span> WS_EX_DLGMODALFRAME <span class="token operator">=</span> <span class="token number">&amp;H1</span><span class="token operator">&amp;</span>
<span class="token keyword">Private</span> <span class="token keyword">Sub</span> UserForm_Initialize<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> IStyle <span class="token keyword">As</span> <span class="token keyword">Long</span>
	<span class="token keyword">Dim</span> Hwnd <span class="token keyword">As</span> <span class="token keyword">Long</span>
	<span class="token keyword">If</span> Val<span class="token punctuation">(</span>Application<span class="token punctuation">.</span>Version<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">9</span> <span class="token keyword">Then</span>
		Hwnd <span class="token operator">=</span> FindWindow<span class="token punctuation">(</span><span class="token string">"ThunderXFrame"</span><span class="token punctuation">,</span> <span class="token keyword">Me</span><span class="token punctuation">.</span>Caption<span class="token punctuation">)</span>
	<span class="token keyword">Else</span>
		Hwnd <span class="token operator">=</span> FindWindow<span class="token punctuation">(</span><span class="token string">"ThunderDFrame"</span><span class="token punctuation">,</span> <span class="token keyword">Me</span><span class="token punctuation">.</span>Caption<span class="token punctuation">)</span>
	<span class="token keyword">End</span> <span class="token keyword">If</span>
	IStyle <span class="token operator">=</span> GetWindowLong<span class="token punctuation">(</span>Hwnd<span class="token punctuation">,</span> GWL_STYLE<span class="token punctuation">)</span>
	IStyle <span class="token operator">=</span> IStyle <span class="token keyword">And</span> <span class="token keyword">Not</span> WS_CAPTION
	SetWindowLong Hwnd<span class="token punctuation">,</span> GWL_STYLE<span class="token punctuation">,</span> IStyle
	DrawMenuBar Hwnd
	IStyle <span class="token operator">=</span> GetWindowLong<span class="token punctuation">(</span>Hwnd<span class="token punctuation">,</span> GWL_EXSTYLE<span class="token punctuation">)</span> <span class="token keyword">And</span> <span class="token keyword">Not</span> WS_EX_DLGMODALFRAME
	SetWindowLong Hwnd<span class="token punctuation">,</span> GWL_EXSTYLE<span class="token punctuation">,</span> IStyle
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
<span class="token keyword">Private</span> <span class="token keyword">Sub</span> UserForm_Click<span class="token punctuation">(</span><span class="token punctuation">)</span>
	Unload <span class="token keyword">Me</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>代码解析：</p>
<p>窗体初始化时使用 API 函数去除其标题栏和边框。</p>
<p>第 1 行到第 8 行代码，API 函数的声明。</p>
<p>第 12 行到第 16 行代码，获取窗口句柄。</p>
<p>第 17 行到第 20 行代码，去除窗体标题栏。</p>
<p>第 21、22 行代码，去除窗体边框。</p>
<p>第 24 行到第 26 行代码，窗体的单击事件，单击窗体后关闭该窗体。</p>
<p>窗体运行后如图 139-1 所示，单击后关闭该窗体。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/139-1.png" alt="" loading="lazy"></p>
<p><u>图 139-1</u>	无标题栏和边框的窗体</p>
</div>
<h2 id="_140、制作年月选择窗体" tabindex="-1"><a class="header-anchor" href="#_140、制作年月选择窗体" aria-hidden="true">#</a> 140、制作年月选择窗体</h2>
<p>在工作表中需要输入日期时，可以使用日期时间控件（Microsoft Date and Time Picker Control 6.0，简称 DTP 控件），请参阅 116 。但有时只需要输入年份和月份，使用 DTP 控件选择月份并不方便，此时可以使用文本框结合微调框做一个年月选择窗体供用户输入年份和月份。</p>
<ul>
<li>
<p>步骤 1，在 VBE 窗口中单击菜单“插入”→“用户窗体”，将窗体的 Caption 属性设置为“请选择年月”。</p>
</li>
<li>
<p>步骤 2，在窗体上添加一个框架控件和两个命令按纽控件。在框架控件中添加两个文本框控件和两个 SpinButton 控件，并把命令按纽的 Caption 属性分别设置为“确定”和“取消”。</p>
</li>
<li>
<p>步骤 3，调整好控件位置，双击窗体写入下面的代码。</p>
</li>
</ul>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> UserForm_Initialize<span class="token punctuation">(</span><span class="token punctuation">)</span>
	SpinButton1<span class="token punctuation">.</span>Value <span class="token operator">=</span> Year<span class="token punctuation">(</span><span class="token keyword">Date</span><span class="token punctuation">)</span>
	SpinButton2<span class="token punctuation">.</span>Value <span class="token operator">=</span> Month<span class="token punctuation">(</span><span class="token keyword">Date</span><span class="token punctuation">)</span>
	TextBox1<span class="token punctuation">.</span>Text <span class="token operator">=</span> Year<span class="token punctuation">(</span><span class="token keyword">Date</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"年"</span>
	TextBox2<span class="token punctuation">.</span>Text <span class="token operator">=</span> Month<span class="token punctuation">(</span><span class="token keyword">Date</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"月份"</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
<span class="token keyword">Private</span> <span class="token keyword">Sub</span> SpinButton1_Change<span class="token punctuation">(</span><span class="token punctuation">)</span>
	TextBox1<span class="token punctuation">.</span>Text <span class="token operator">=</span> SpinButton1<span class="token punctuation">.</span>Value <span class="token operator">&amp;</span> <span class="token string">"年"</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
<span class="token keyword">Private</span> <span class="token keyword">Sub</span> SpinButton2_Change<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">With</span> SpinButton2
		<span class="token keyword">Select</span> <span class="token keyword">Case</span> <span class="token punctuation">.</span>Value
			<span class="token keyword">Case</span> <span class="token number">1</span> <span class="token keyword">To</span> <span class="token number">12</span>
				TextBox2<span class="token punctuation">.</span>Text <span class="token operator">=</span> <span class="token punctuation">.</span>Value <span class="token operator">&amp;</span> <span class="token string">"月份"</span>
			<span class="token keyword">Case</span> <span class="token keyword">Is</span> <span class="token operator">></span> <span class="token number">12</span>
				TextBox1<span class="token punctuation">.</span>Text <span class="token operator">=</span> Left<span class="token punctuation">(</span>TextBox1<span class="token punctuation">.</span>Text<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&amp;</span> <span class="token string">"年"</span>
				<span class="token punctuation">.</span>Value <span class="token operator">=</span> <span class="token number">1</span>
			<span class="token keyword">Case</span> <span class="token keyword">Is</span> <span class="token operator">&lt;</span> <span class="token number">1</span>
				TextBox1<span class="token punctuation">.</span>Text <span class="token operator">=</span> Left<span class="token punctuation">(</span>TextBox1<span class="token punctuation">.</span>Text<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&amp;</span> <span class="token string">"年"</span>
				<span class="token punctuation">.</span>Value <span class="token operator">=</span> <span class="token number">12</span>
		<span class="token keyword">End</span> <span class="token keyword">Select</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
<span class="token keyword">Private</span> <span class="token keyword">Sub</span> CommandButton1_Click<span class="token punctuation">(</span><span class="token punctuation">)</span>
	Sheet1<span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"A65536"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">End</span><span class="token punctuation">(</span>xlUp<span class="token punctuation">)</span><span class="token punctuation">.</span>Offset<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=</span> TextBox1<span class="token punctuation">.</span>Text <span class="token operator">&amp;</span> TextBox2<span class="token punctuation">.</span>Text
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
<span class="token keyword">Private</span> <span class="token keyword">Sub</span> CommandButton2_Click<span class="token punctuation">(</span><span class="token punctuation">)</span>
	Unload <span class="token keyword">Me</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>代码解析：</p>
<p>第 1 行到第 6 行代码，窗体的初始化事件，在窗体加载时设置文本框和微调框的初始值。</p>
<p>第 2 行代码，设置微调框1 的初始值为当前年份。Year 函数返回年份的整数，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>Year<span class="token punctuation">(</span><span class="token keyword">date</span><span class="token punctuation">)</span>

参数<span class="token keyword">date</span>是必需的，可以是任何能够表示日期的<span class="token keyword">Variant</span>、数值表达式、字符串表达式或它们的组合。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>第 3 行代码，设置微调框2 的初始值为当前月份。Mont 函数返回值为 1 到 12 之间的整数，表示一年中的某月，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>Month<span class="token punctuation">(</span><span class="token keyword">date</span><span class="token punctuation">)</span>

参数<span class="token keyword">date</span>与Year函数的参数<span class="token keyword">date</span>相同。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>第 4 行代码，设置文本框1 显示的文本为当前年份。</p>
<p>第 5 行代码，设置文本框2 显示的文本为当前月份。</p>
<p>第 7 行到第 9 行代码，微调框1 的 Change 事件过程。当单击微调框1 数值调节钮的向上键或向下键调节年份时，文本框1 显示的年份等于调节后的年份。</p>
<p>第 10 行到第 23 行代码，微调框2 的 Change 事件过程。当单击微调框2 数值调节钮的向上键或向下键调节月份时，文本框2 显示的月份等于调节后的月份。如果是一年以内的调节，只调节文本框2 显示的月份，否则还需要调节文本框1 显示的年份。</p>
<p>第 25 行代码，“确定”按钮的单击过程，将选择好的年月写入工作表中。</p>
<p>第 28 行代码，使用 Unload 语句卸载窗体。</p>
<p>运行窗体后效果如图 140-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/140-1.png" alt="" loading="lazy"></p>
<p><u>图 140-1</u>	年月选择窗体</p>
</div>
<h2 id="_141、自定义窗体中的鼠标指针类型" tabindex="-1"><a class="header-anchor" href="#_141、自定义窗体中的鼠标指针类型" aria-hidden="true">#</a> 141、自定义窗体中的鼠标指针类型</h2>
<p>使用对象的 MousePointer 属性可以自定义鼠标掠过窗体控件时的指针类型，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> UserForm_Initialize<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">With</span> <span class="token keyword">Me</span><span class="token punctuation">.</span>TextBox1
		<span class="token punctuation">.</span>MousePointer <span class="token operator">=</span> <span class="token number">99</span>
		<span class="token punctuation">.</span>MouseIcon <span class="token operator">=</span> LoadPicture<span class="token punctuation">(</span>ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\myMouse.ico"</span><span class="token punctuation">)</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>代码解析：</p>
<p>当用户把鼠标放到窗体的文本框上时，所显示的鼠标指针的类型为自定义图标。</p>
<p>第3行代码设置文本框的 MousePointer 属性。MousePointer 属性指定当用户把鼠标放到特定对象上时，所显示鼠标指针的类型，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">object</span><span class="token punctuation">.</span>MousePointer [<span class="token operator">=</span> fmMousePointer]

参数<span class="token keyword">object</span>是必需的，一个有效对象。
参数fmMousePointer是可选的，所需鼠标指针的形状。fmMousePointer的设置值如表格 <span class="token number">141</span><span class="token operator">-</span><span class="token number">1</span>所示。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><u>表格 141-1</u>	fmMousePointer 的设置值</p>
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
<td>fmMousePointerDefault</td>
<td>0</td>
<td>标准指针。根据对象来决定指针的图像（默认）</td>
</tr>
<tr>
<td>fmMousePointerArrow</td>
<td>1</td>
<td>箭头</td>
</tr>
<tr>
<td>fmMousePointerCross</td>
<td>2</td>
<td>十字线指针</td>
</tr>
<tr>
<td>fmMousePointerIBeam</td>
<td>3</td>
<td>I 形标</td>
</tr>
<tr>
<td>fmMousePointerSizeNESW</td>
<td>6</td>
<td>斜下的双箭头</td>
</tr>
<tr>
<td>fmMousePointerSizeNS</td>
<td>7</td>
<td>南北向的双箭头</td>
</tr>
<tr>
<td>mMousePointerSizeNWSE</td>
<td>8</td>
<td>斜上的双箭头</td>
</tr>
<tr>
<td>fmMousePointerSizeWE</td>
<td>9</td>
<td>东西向的双箭头</td>
</tr>
<tr>
<td>fmMousePointerUpArrow</td>
<td>10</td>
<td>向上键</td>
</tr>
<tr>
<td>fmMousePointerHourglass</td>
<td>11</td>
<td>沙漏</td>
</tr>
<tr>
<td>fmMousePointerNoDrop</td>
<td>12</td>
<td>在被拖动的对象上有 “Not”符号（有一条斜线的圆）。表示是无效的放置目标。</td>
</tr>
<tr>
<td>fmMousePointerAppStarting</td>
<td>13</td>
<td>带沙漏的箭头</td>
</tr>
<tr>
<td>fmMousePointerHelp</td>
<td>14</td>
<td>带问号的箭头</td>
</tr>
<tr>
<td>fmMousePointerSizeAll</td>
<td>15</td>
<td>调整所有尺寸的光标（四向箭头）</td>
</tr>
<tr>
<td>fmMousePointerCustom</td>
<td>99</td>
<td>使用由MouseIcon属性指定的图标</td>
</tr>
</tbody>
</table>
<p>第 3 行代码将文本框的 MousePointer 属性设置为 99，使用由 MouseIcon 属性指定的自定义图标。MouseIcon 属性为对象指定一个自定义的图标，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">object</span><span class="token punctuation">.</span>MouseIcon <span class="token operator">=</span> LoadPicture<span class="token punctuation">(</span> pathname <span class="token punctuation">)</span>

参数<span class="token keyword">object</span>是必需的，一个有效的对象。
参数pathname是必需的，指定包含自定义图标的文件的路径和文件名。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>设置后的鼠标指针的形状如图 141-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/141-1.png" alt="" loading="lazy"></p>
<p><u>图 141-1</u>	自定义鼠标指针类型</p>
</div>
<h2 id="_142、调整窗体的显示位置" tabindex="-1"><a class="header-anchor" href="#_142、调整窗体的显示位置" aria-hidden="true">#</a> 142、调整窗体的显示位置</h2>
<p>用户窗体显示时，默认的位置是窗体所在 Excel 文件的中央。如果需要调整，可以在窗体加载时对其进行设置，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> UserForm_Initialize<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">With</span> <span class="token keyword">Me</span>
		<span class="token punctuation">.</span>StartUpPosition <span class="token operator">=</span> <span class="token number">0</span>
		<span class="token punctuation">.</span>Left <span class="token operator">=</span> <span class="token number">500</span>
		<span class="token punctuation">.</span>Top <span class="token operator">=</span> <span class="token number">300</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>代码解析：</p>
<p>窗体的初始化事件，在窗体加载时设置其显示位置。</p>
<p>第 3 行代码，将窗体的 StartUpPosition 属性设置成手动。</p>
<p>StartUpPosition 属性返回或设置一个值，用来指定窗体第一次出现时的位置，设置值如表格 142-1 所示。</p>
<p><u>表格 142-1</u>	StartUpPosition 属性设置值</p>
<table>
<thead>
<tr>
<th>设置</th>
<th>值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>手动</td>
<td>0</td>
<td>没有初始设置指定</td>
</tr>
<tr>
<td>所有者中心</td>
<td>1</td>
<td>在 UserForm 所属项目的中央</td>
</tr>
<tr>
<td>屏幕中心</td>
<td>2</td>
<td>在整个屏幕的中央</td>
</tr>
<tr>
<td>窗口缺省</td>
<td>3</td>
<td>在屏幕的左上角</td>
</tr>
</tbody>
</table>
<p>StartUpPosition 属性可以在程序中设置，也可以在窗体的属性窗口中设置。</p>
<p>第 4、5 行代码，设置窗体的 Left 属性和 Top 属性，使其加载时显示在屏幕的右下角。</p>
<p>经过设置后的窗体加载时显示位置如图 142-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/142-1.png" alt="" loading="lazy"></p>
<p><u>图 142-1</u>	调整窗体的显示位置</p>
</div>
<h2 id="_143、由鼠标确定窗体显示位置" tabindex="-1"><a class="header-anchor" href="#_143、由鼠标确定窗体显示位置" aria-hidden="true">#</a> 143、由鼠标确定窗体显示位置</h2>
<p>窗体加载时其显示位置还可以由鼠标的坐标来确定，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> CommandButton1_Click<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> ActiveCellX <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">Dim</span> ActiveCellY <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	ActiveCellX <span class="token operator">=</span> ExecuteExcel4Macro<span class="token punctuation">(</span><span class="token string">"GET.CELL(44)"</span><span class="token punctuation">)</span>
	ActiveCellY <span class="token operator">=</span> ExecuteExcel4Macro<span class="token punctuation">(</span><span class="token string">"GET.CELL(43)"</span><span class="token punctuation">)</span>
	<span class="token keyword">With</span> UserForm1
		<span class="token punctuation">.</span>Show <span class="token number">0</span>
		<span class="token punctuation">.</span>Top <span class="token operator">=</span> ActiveCellY
		<span class="token punctuation">.</span>Left <span class="token operator">=</span> ActiveCellX
	<span class="token keyword">End</span> <span class="token keyword">With</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>代码解析：</p>
<p>使用 ExecuteExcel4Macro 方法执行 Microsoft Excel 4.0 宏函数取得鼠标的坐标，ExecuteExcel4Macro 方法的语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>ExecuteExcel4Macro<span class="token punctuation">(</span><span class="token keyword">String</span><span class="token punctuation">)</span>

expression参数是可选的，返回一个Application对象。
<span class="token keyword">String</span>参数是必需的，一个不带等号的Microsoft Excel <span class="token number">4.0</span>宏语言函数。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>第 4 行代码使用 GET.CELL(44) 宏函数取得鼠标的 X 坐标，第 5 行代码使用 GET.CELL(43) 宏函数取得鼠标的 Y 坐标。</p>
<p>第 6 行到第 10 行代码显示窗体并设置其 Top 属性和 Left 属性，调整其显示的位置。</p>
<p>还可以利用工作表 SelectionChange 事件的 Target 参数取得鼠标的坐标，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> Worksheet_SelectionChange<span class="token punctuation">(</span><span class="token keyword">ByVal</span> Target <span class="token keyword">As</span> Range<span class="token punctuation">)</span>
	<span class="token keyword">With</span> UserForm1
		<span class="token punctuation">.</span>Show <span class="token number">0</span>
		<span class="token punctuation">.</span>Top <span class="token operator">=</span> Target<span class="token punctuation">.</span>Top
		<span class="token punctuation">.</span>Left <span class="token operator">=</span> Target<span class="token punctuation">.</span>Left
	<span class="token keyword">End</span> <span class="token keyword">With</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>代码解析：</p>
<p>工作表的 SelectionChange 事件过程，Target 参数代表新选定的区域，返回一个 Range 对象，在显示窗体时取得其 Top 和 Left 属性后设置窗体显示的 Top 和 Left 属性。</p>
<h2 id="_144、用户窗体的打印" tabindex="-1"><a class="header-anchor" href="#_144、用户窗体的打印" aria-hidden="true">#</a> 144、用户窗体的打印</h2>
<p>在使用如图 144-1 所示的窗体录入数据时，如果需要把窗体打印出来，可以使用 PrintForm 方法，如下面的代码所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/144-1.png" alt="" loading="lazy"></p>
<p><u>图 144-1</u>	录入窗体</p>
</div>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> CommandButton7_Click<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> myHeight <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	Application<span class="token punctuation">.</span>ScreenUpdating <span class="token operator">=</span> <span class="token boolean">False</span>
	<span class="token keyword">With</span> UserForm1
		myHeight <span class="token operator">=</span> <span class="token punctuation">.</span>Height
		<span class="token punctuation">.</span>DTPicker1<span class="token punctuation">.</span>Visible <span class="token operator">=</span> <span class="token boolean">False</span>
		<span class="token punctuation">.</span>Frame1<span class="token punctuation">.</span>Visible <span class="token operator">=</span> <span class="token boolean">False</span>
		<span class="token punctuation">.</span>Height <span class="token operator">=</span> myHeight <span class="token operator">-</span> <span class="token number">30</span>
		<span class="token punctuation">.</span>PrintForm
		<span class="token punctuation">.</span>Height <span class="token operator">=</span> myHeight
		<span class="token punctuation">.</span>DTPicker1<span class="token punctuation">.</span>Visible <span class="token operator">=</span> <span class="token boolean">True</span>
		<span class="token punctuation">.</span>Frame1<span class="token punctuation">.</span>Visible <span class="token operator">=</span> <span class="token boolean">True</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
	Application<span class="token punctuation">.</span>ScreenUpdating <span class="token operator">=</span> <span class="token boolean">True</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>代码解析：</p>
<p>录入窗体中的“打印”按钮的单击代码，使用 PrintForm 方法打印窗体。</p>
<p>第 5 行代码使用变量 myHeight 记录窗体的 Height 属性值，以便在第 10 行代码中恢复窗体原有的高度。</p>
<p>第 6、7 行代码将窗体中的 DTP 日历控件和功能按钮的 Visible 属性设置为 False，使之隐藏，这样在打印时就不会被打印出来。</p>
<p>第 9 行代码使用 PrintForm 方法打印窗体，PrintForm 方法将 UserForm 对象的图象逐位发送到打印机，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">object</span><span class="token punctuation">.</span>PrintForm

参数<span class="token keyword">object</span>代表对象表达式，其值为<span class="token string">“应用于”</span>列表中的对象。如果省略该参数，则把焦点所在的窗体当做<span class="token keyword">object</span>。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>第 11、12 行代码重新显示窗体中的 DTP 日历控件和功能按钮。</p>
<p>窗体打印后的效果如图 144-2 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/144-2.png" alt="" loading="lazy"></p>
<p><u>图 144-2</u>	窗体打印效果</p>
</div>
<h2 id="_145、使用自定义颜色设置窗体颜色" tabindex="-1"><a class="header-anchor" href="#_145、使用自定义颜色设置窗体颜色" aria-hidden="true">#</a> 145、使用自定义颜色设置窗体颜色</h2>
<p>在用 VBA 进行设计时，会发现控件与颜色相关的属性中系统提供可选择的颜色太少。比如窗体的 BackColor 属性，如果需要把窗体的背景颜色设置为淡蓝色 RGB(52,150,203)，可以在窗体初始化过程中对之进行设置，可以实现想要的效果，但是在设计时却不能看到最终效果。</p>
<p>其实窗体的 BackColor 属性（包括 ForeColor 以及 BorderColor 等等这些设置颜色的属性）允许输入一个以十六进制表示的长整型数值，这样在设计时就看到效果。</p>
<p>首先获取所需要的颜色值并以十六进制表示。还以上面的颜色为例，在立即窗口输入<code>“? Hex(RGB(52,150,203))”</code>可得到一个十六进制数据 CB9634，然后把光标定位在窗体属性窗口的 BackColor 属性值中，删除原来的数值后，输入<code>“&amp;HCB9634&amp;”</code>后按 <kbd>Enter</kbd> 键，窗体颜色效果立即就出现了，如图 145-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/145-1.png" alt="" loading="lazy"></p>
<p><u>图 145-1</u>	在窗体设计时显示自定义颜色</p>
</div>
<h2 id="_146、在窗体中显示图表" tabindex="-1"><a class="header-anchor" href="#_146、在窗体中显示图表" aria-hidden="true">#</a> 146、在窗体中显示图表</h2>
<p>工作表中的图表是不能直接显示在窗体中的，如果需要在窗体上显示图表，除了使用 61 介绍的使用 ShowWindow 属性将工作表中嵌入的图表显示在独立的窗口中，还可以使用以下的方法。</p>
<h3 id="_1-使用-export-方法" tabindex="-1"><a class="header-anchor" href="#_1-使用-export-方法" aria-hidden="true">#</a> 1）使用 Export 方法</h3>
<p>可以把图表以图形格式从工作表中导出，再用窗体上的 Image 控件把图表显示出来，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> UserForm_Initialize<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> Charts <span class="token keyword">As</span> Chart
	<span class="token keyword">Dim</span> cName <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">Set</span> Charts <span class="token operator">=</span> Sheets<span class="token punctuation">(</span><span class="token string">"Sheet2"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>ChartObjects<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Chart
	cName <span class="token operator">=</span> ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\Temp.gif"</span>
	Charts<span class="token punctuation">.</span>Export Filename<span class="token punctuation">:</span><span class="token operator">=</span>cName<span class="token punctuation">,</span> FilterName<span class="token punctuation">:</span><span class="token operator">=</span><span class="token string">"GIF"</span>
	Image1<span class="token punctuation">.</span>Picture <span class="token operator">=</span> LoadPicture<span class="token punctuation">(</span>cName<span class="token punctuation">)</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>代码解析：</p>
<p>窗体的初始化事件过程，窗体加载时将工作表中的图表显示在窗体中。</p>
<p>第 4 行到第 6 行代码，使用 Export 方法把 Sheet2 表中的第一个图表导出到工作簿的同一目录下。</p>
<p>Export 方法以图形格式导出图表，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>expression<span class="token punctuation">.</span>Export<span class="token punctuation">(</span>Filename<span class="token punctuation">,</span> FilterName<span class="token punctuation">,</span> Interactive<span class="token punctuation">)</span>

参数expression是必需的，一个有效的对象。
参数Filename是必需的，导出的文件的名称。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>本例中设置 Filename 参数时加上了导出路径，将图形导出到同一文件夹下。</p>
<p>参数 FilterName 是可选的，导出文件的格式。</p>
<p>第 7 行代码，设置窗体中 Image 控件的 Picture 属性为导出文件的完整路径。</p>
<p>Picture 属性指定显示在对象上的位图，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">object</span><span class="token punctuation">.</span>Picture <span class="token operator">=</span> LoadPicture<span class="token punctuation">(</span> pathname <span class="token punctuation">)</span>

参数expression是必需的，一个有效的对象。
参数pathname是必需的，一个图片文件的完整路径。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>为了使窗体关闭时删除导出的图片文件，在窗体的 QueryClose 事件中写入下面的代码。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> UserForm_QueryClose<span class="token punctuation">(</span>Cancel <span class="token keyword">As</span> <span class="token keyword">Integer</span><span class="token punctuation">,</span> CloseMode <span class="token keyword">As</span> <span class="token keyword">Integer</span><span class="token punctuation">)</span>
	Kill ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\Temp.gif"</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>代码解析：</p>
<p>窗体关闭时使用 Kill 方法删除导出的图片文件。Kill 方法的语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>Kill pathname

参数Pathname是必需的，用来指定一个文件名的字符串表达式。Pathname参数可以包含目录或文件夹、以及驱动器。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>运行窗体，将工作表的图表显示在窗体中，如图 146-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/146-1.png" alt="" loading="lazy"></p>
<p><u>图 146-1</u>	在窗体上显示图表</p>
</div>
<h3 id="_2-使用-api-函数" tabindex="-1"><a class="header-anchor" href="#_2-使用-api-函数" aria-hidden="true">#</a> 2）使用 API 函数</h3>
<p>可以使用 API 函数把图表从工作表中导出，再用窗体上的 Image 控件把图表显示出来，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> CreateStreamOnHGlobal <span class="token keyword">Lib</span> <span class="token string">"ole32"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> hGlobal <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> fDeleteOnRelease <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> ppstm <span class="token keyword">As</span> Any<span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> OleLoadPicture <span class="token keyword">Lib</span> <span class="token string">"olepro32"</span> <span class="token punctuation">(</span>pStream <span class="token keyword">As</span> Any<span class="token punctuation">,</span> <span class="token keyword">ByVal</span> lSize <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> fRunmode <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> riid <span class="token keyword">As</span> Any<span class="token punctuation">,</span> ppvObj <span class="token keyword">As</span> Any<span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
………代码略详见附件
<span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> GetClipboardFormatName <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token keyword">Alias</span> <span class="token string">"GetClipboardFormatNameA"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> wFormat <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> lpString <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> nMaxCount <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Public</span> <span class="token keyword">Function</span> LoadShapePicture<span class="token punctuation">(</span>shp <span class="token keyword">As</span> <span class="token keyword">Object</span><span class="token punctuation">)</span> <span class="token keyword">As</span> IPictureDisp
	<span class="token keyword">Dim</span> nClipsize <span class="token keyword">As</span> <span class="token keyword">Long</span>
	<span class="token keyword">Dim</span> hMem <span class="token keyword">As</span> <span class="token keyword">Long</span>
	<span class="token keyword">Dim</span> lpData <span class="token keyword">As</span> <span class="token keyword">Long</span>
	<span class="token keyword">Dim</span> sdata<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Byte</span>
	<span class="token keyword">Dim</span> fmt <span class="token keyword">As</span> <span class="token keyword">Long</span>
	<span class="token keyword">Dim</span> fmtName <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">Dim</span> iClipBoardFormatNumber <span class="token keyword">As</span> <span class="token keyword">Long</span>
	<span class="token keyword">Dim</span> IID_IPicture<span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span>
……代码略详见附件
	EmptyClipboard
	CloseClipboard
<span class="token keyword">End</span> <span class="token keyword">Function</span>
 <span class="token keyword">Private</span> <span class="token keyword">Sub</span> UserForm_Initialize<span class="token punctuation">(</span><span class="token punctuation">)</span>
	Image1<span class="token punctuation">.</span>Picture <span class="token operator">=</span> LoadShapePicture<span class="token punctuation">(</span>Sheet1<span class="token punctuation">.</span>ChartObjects<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>代码解析：</p>
<p>第 1 行到第 12 行代码 API 函数声明。</p>
<p>第 13 行到第 60 行代码 LoadShapePicture 函数，导出工作表中的图表。</p>
<p>第 61 行到第 63 行代码窗体的初始化事件过程，窗体加载时将工作表中的图表显示在窗体中，如图 146-2 所示。关于 Image 控件的 Picture 属性请参阅 146-1。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/146-2.png" alt="" loading="lazy"></p>
<p><u>图 146-2</u>	在窗体上显示图表</p>
</div>
<h2 id="_147、窗体运行时调整控件大小" tabindex="-1"><a class="header-anchor" href="#_147、窗体运行时调整控件大小" aria-hidden="true">#</a> 147、窗体运行时调整控件大小</h2>
<p>用户窗体中的控件在运行时是不能调整大小的，而在某些情况下需要在窗体运行时调整控件的大小，此时可以利用控件的 MouseMove 事件。</p>
<ul>
<li>步骤 1，在 VBE 窗口中单击菜单“插入”→“用户窗体”，在窗体中添加两个框架控件，在框架控件中间添加一个 Image 控件，如图 147-1 所示。</li>
</ul>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/147-1.png" alt="" loading="lazy"></p>
<p><u>图 147-1</u>	添加控件</p>
</div>
<ul>
<li>
<p>步骤 2，Image 控件是用来在窗体运行时拖动调整框架控件大小的，所以需要在 Image 控件的属性窗口将 BackStyle 属性设置为 fmBackStyleTransparent，使控件的背景为透明；将 BorderStyle 属性设置为 fmBorderStyleNone，使控件无可见的边框线；MousePointer 属性设置为 fmMousePointerSizeWE，当用户把鼠标放到 Image 控件上时，鼠标指针的类型为东西向的双箭头。关于控件的 MousePointer 属性请参阅 141 中的表格 141-1。</p>
</li>
<li>
<p>步骤 3，在窗体中调整好控件的位置后双击 Image 控件写入下面的代码：</p>
</li>
</ul>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Dim</span> Abscissa <span class="token keyword">As</span> <span class="token keyword">Single</span>
<span class="token keyword">Private</span> <span class="token keyword">Sub</span> Image1_MouseDown<span class="token punctuation">(</span><span class="token keyword">ByVal</span> Button <span class="token keyword">As</span> <span class="token keyword">Integer</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> Shift <span class="token keyword">As</span> <span class="token keyword">Integer</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> x <span class="token keyword">As</span> <span class="token keyword">Single</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> y <span class="token keyword">As</span> <span class="token keyword">Single</span><span class="token punctuation">)</span>
	Abscissa <span class="token operator">=</span> x
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
<span class="token keyword">Private</span> <span class="token keyword">Sub</span> Image1_MouseMove<span class="token punctuation">(</span><span class="token keyword">ByVal</span> Button <span class="token keyword">As</span> <span class="token keyword">Integer</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> Shift <span class="token keyword">As</span> <span class="token keyword">Integer</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> x <span class="token keyword">As</span> <span class="token keyword">Single</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> y <span class="token keyword">As</span> <span class="token keyword">Single</span><span class="token punctuation">)</span>
	<span class="token keyword">If</span> Button <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">Then</span>
		<span class="token keyword">If</span> Abscissa <span class="token operator">-</span> x <span class="token operator">></span> Frame1<span class="token punctuation">.</span>Width <span class="token keyword">Or</span> x <span class="token operator">></span> Frame2<span class="token punctuation">.</span>Width <span class="token keyword">Then</span> <span class="token keyword">Exit</span> <span class="token keyword">Sub</span>
		Frame1<span class="token punctuation">.</span>Width <span class="token operator">=</span> Frame1<span class="token punctuation">.</span>Width <span class="token operator">-</span> Abscissa <span class="token operator">+</span> x
		Image1<span class="token punctuation">.</span>Left <span class="token operator">=</span> Image1<span class="token punctuation">.</span>Left <span class="token operator">-</span> Abscissa <span class="token operator">+</span> x
		Frame2<span class="token punctuation">.</span>Left <span class="token operator">=</span> Frame2<span class="token punctuation">.</span>Left <span class="token operator">-</span> Abscissa <span class="token operator">+</span> x
		Frame2<span class="token punctuation">.</span>Width <span class="token operator">=</span> Frame2<span class="token punctuation">.</span>Width <span class="token operator">+</span> Abscissa <span class="token operator">-</span> x
	<span class="token keyword">End</span> <span class="token keyword">If</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>代码解析：</p>
<p>第 2 行到第 4 行代码，Image 控件的 MouseDown 事件过程，用户按下鼠标按键时发生，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> object_MouseDown<span class="token punctuation">(</span> <span class="token keyword">ByVal</span> Button <span class="token keyword">As</span> fmButton<span class="token punctuation">,</span> <span class="token keyword">ByVal</span> Shift <span class="token keyword">As</span> fmShiftState<span class="token punctuation">,</span> <span class="token keyword">ByVal</span> X <span class="token keyword">As</span> <span class="token keyword">Single</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> Y <span class="token keyword">As</span> <span class="token keyword">Single</span><span class="token punctuation">)</span>

其中参数x是可选的，控件位置的横坐标，以磅为单位，从左边开始测量。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>第 3 行代码将控件的横坐标赋给变量 Abscissa。</p>
<p>第 5 行到第 12 行代码，Image 控件的 MouseMove 事件过程，用户移动鼠标时该事件发生，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> object_MouseMove<span class="token punctuation">(</span> <span class="token keyword">ByVal</span> Button <span class="token keyword">As</span> fmButton<span class="token punctuation">,</span> <span class="token keyword">ByVal</span> Shift <span class="token keyword">As</span> fmShiftState<span class="token punctuation">,</span> <span class="token keyword">ByVal</span> X <span class="token keyword">As</span> <span class="token keyword">Single</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> Y <span class="token keyword">As</span> <span class="token keyword">Single</span><span class="token punctuation">)</span>

其中参数Button是必需的，标识鼠标按键状态的整数值，其设置值如表格 <span class="token number">147</span><span class="token operator">-</span><span class="token number">1</span>所示。
参数x是可选的，控件位置的水平坐标，以磅为单位，从左边开始测量。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><u>表格 147-1</u>	Button 参数的设置值</p>
<table>
<thead>
<tr>
<th>值</th>
<th>说明</th>
<th>值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>按键未被按下</td>
<td>4</td>
<td>按下中键</td>
</tr>
<tr>
<td>1</td>
<td>按下左键</td>
<td>5</td>
<td>同时按下左键和中键</td>
</tr>
<tr>
<td>2</td>
<td>按下右键</td>
<td>6</td>
<td>同时按下中键和右键</td>
</tr>
<tr>
<td>3</td>
<td>同时按下左键和右键</td>
<td>7</td>
<td>三个按键全都按下</td>
</tr>
</tbody>
</table>
<p>在 MouseMove 事件过程中，当用户在窗体上按下左键移动鼠标时，调整两个框架控件的 Width属性和框架 2 的 Left 属性，使其达到窗体运行时可以进行拖动调整大小的效果。</p>
<p>当鼠标指针在对象上移动时，MouseMove 事件是连续发生的，只要鼠标位于对象的边界之内，对象就会不断的识别 MouseMove 事件，所以框架控件可以连续的进行拖动调整大小。</p>
<p>运行窗体的，选择两个框架控件的中间位置，当鼠标指针变成东西向的双箭头时按下鼠标左键拖动可以进行拖动调整框架控件的大小，如图 147-2 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/147-2.png" alt="" loading="lazy"></p>
<p><u>图 147-2</u>	窗体运行时调整控件大小</p>
</div>
<h2 id="_148、在用户窗体上添加菜单" tabindex="-1"><a class="header-anchor" href="#_148、在用户窗体上添加菜单" aria-hidden="true">#</a> 148、在用户窗体上添加菜单</h2>
<p>在 VBA 中，用户窗体上是没有菜单的，为了使用方便，我们可以使用 API 函数在用户窗体上添加菜单，示例代码如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> FindWindow <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token keyword">Alias</span> <span class="token string">"FindWindowA"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> lpClassName <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> lpWindowName <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> SetMenu <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> hwnd <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> hMenu <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> CreateMenu <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> AppendMenu <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token keyword">Alias</span> <span class="token string">"AppendMenuA"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> hMenu <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> wFlags <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> wIDNewItem <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> lpNewItem <span class="token keyword">As</span> Any<span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> DestroyMenu <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> hMenu <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> CreatePopupMenu <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> SetWindowLong <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token keyword">Alias</span> <span class="token string">"SetWindowLongA"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> hwnd <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> nIndex <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> dwNewLong <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> GetWindowLong <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token keyword">Alias</span> <span class="token string">"GetWindowLongA"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> hwnd <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> nIndex <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Const</span> GWL_WNDPROC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">)</span>
<span class="token keyword">Private</span> <span class="token keyword">Const</span> MF_STRING <span class="token operator">=</span> <span class="token number">&amp;H0</span><span class="token operator">&amp;</span>
<span class="token keyword">Private</span> <span class="token keyword">Const</span> MF_POPUP <span class="token operator">=</span> <span class="token number">&amp;H10</span><span class="token operator">&amp;</span>
<span class="token keyword">Private</span> <span class="token keyword">Const</span> MF_SEPARATOR <span class="token operator">=</span> <span class="token number">&amp;H800</span><span class="token operator">&amp;</span>
<span class="token keyword">Dim</span> MenuWnd <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> Dump <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> PopupMenuID <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> PopupMenuWnd <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> MenuID <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Sub</span> UserForm_Initialize<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">If</span> Val<span class="token punctuation">(</span>Application<span class="token punctuation">.</span>Version<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">9</span> <span class="token keyword">Then</span>
		hwnd <span class="token operator">=</span> FindWindow<span class="token punctuation">(</span><span class="token string">"ThunderXFrame"</span><span class="token punctuation">,</span> <span class="token keyword">Me</span><span class="token punctuation">.</span>Caption<span class="token punctuation">)</span>
	<span class="token keyword">Else</span>
		hwnd <span class="token operator">=</span> FindWindow<span class="token punctuation">(</span><span class="token string">"ThunderDFrame"</span><span class="token punctuation">,</span> <span class="token keyword">Me</span><span class="token punctuation">.</span>Caption<span class="token punctuation">)</span>
	<span class="token keyword">End</span> <span class="token keyword">If</span>
	MenuWnd <span class="token operator">=</span> CreateMenu<span class="token punctuation">(</span><span class="token punctuation">)</span>
	PopupMenuID <span class="token operator">=</span> CreatePopupMenu<span class="token punctuation">(</span><span class="token punctuation">)</span>
	Dump <span class="token operator">=</span> AppendMenu<span class="token punctuation">(</span>MenuWnd<span class="token punctuation">,</span> MF_STRING <span class="token operator">+</span> MF_POPUP<span class="token punctuation">,</span> PopupMenuID<span class="token punctuation">,</span> <span class="token string">"系统设置(&amp;X)"</span><span class="token punctuation">)</span>
	Dump <span class="token operator">=</span> AppendMenu<span class="token punctuation">(</span>PopupMenuID<span class="token punctuation">,</span> MF_STRING<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">"保存(&amp;S)..."</span><span class="token punctuation">)</span>
	Dump <span class="token operator">=</span> AppendMenu<span class="token punctuation">(</span>PopupMenuID<span class="token punctuation">,</span> MF_STRING<span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">,</span> <span class="token string">"备份(&amp;E)"</span><span class="token punctuation">)</span>
	Dump <span class="token operator">=</span> AppendMenu<span class="token punctuation">(</span>PopupMenuID<span class="token punctuation">,</span> MF_STRING<span class="token punctuation">,</span> <span class="token number">102</span><span class="token punctuation">,</span> <span class="token string">"退出(&amp;X)"</span><span class="token punctuation">)</span>
	PopupMenuID <span class="token operator">=</span> CreatePopupMenu<span class="token punctuation">(</span><span class="token punctuation">)</span>
	Dump <span class="token operator">=</span> AppendMenu<span class="token punctuation">(</span>MenuWnd<span class="token punctuation">,</span> MF_STRING <span class="token operator">+</span> MF_POPUP<span class="token punctuation">,</span> PopupMenuID<span class="token punctuation">,</span> <span class="token string">"会计凭证(&amp;P)"</span><span class="token punctuation">)</span>
	Dump <span class="token operator">=</span> AppendMenu<span class="token punctuation">(</span>PopupMenuID<span class="token punctuation">,</span> MF_STRING<span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">,</span> <span class="token string">"录入(&amp;L)"</span><span class="token punctuation">)</span>
	Dump <span class="token operator">=</span> AppendMenu<span class="token punctuation">(</span>PopupMenuID<span class="token punctuation">,</span> MF_STRING<span class="token punctuation">,</span> <span class="token number">111</span><span class="token punctuation">,</span> <span class="token string">"审核(&amp;C)"</span><span class="token punctuation">)</span>
	PopupMenuID <span class="token operator">=</span> CreatePopupMenu<span class="token punctuation">(</span><span class="token punctuation">)</span>
	Dump <span class="token operator">=</span> AppendMenu<span class="token punctuation">(</span>MenuWnd<span class="token punctuation">,</span> MF_STRING <span class="token operator">+</span> MF_POPUP<span class="token punctuation">,</span> PopupMenuID<span class="token punctuation">,</span> <span class="token string">"会计账簿(&amp;Z)"</span><span class="token punctuation">)</span>
	Dump <span class="token operator">=</span> AppendMenu<span class="token punctuation">(</span>PopupMenuID<span class="token punctuation">,</span> MF_STRING<span class="token punctuation">,</span> <span class="token number">112</span><span class="token punctuation">,</span> <span class="token string">"记账(&amp;T)"</span><span class="token punctuation">)</span>
	Dump <span class="token operator">=</span> AppendMenu<span class="token punctuation">(</span>PopupMenuID<span class="token punctuation">,</span> MF_STRING<span class="token punctuation">,</span> <span class="token number">113</span><span class="token punctuation">,</span> <span class="token string">"结账(&amp;J)"</span><span class="token punctuation">)</span>
	PopupMenuID <span class="token operator">=</span> CreatePopupMenu<span class="token punctuation">(</span><span class="token punctuation">)</span>
	Dump <span class="token operator">=</span> AppendMenu<span class="token punctuation">(</span>MenuWnd<span class="token punctuation">,</span> MF_STRING <span class="token operator">+</span> MF_POPUP<span class="token punctuation">,</span> PopupMenuID<span class="token punctuation">,</span> <span class="token string">"会计报表(&amp;B)"</span><span class="token punctuation">)</span>
	Dump <span class="token operator">=</span> AppendMenu<span class="token punctuation">(</span>PopupMenuID<span class="token punctuation">,</span> MF_STRING<span class="token punctuation">,</span> <span class="token number">114</span><span class="token punctuation">,</span> <span class="token string">"资产负债表(&amp;F)"</span><span class="token punctuation">)</span>
	Dump <span class="token operator">=</span> AppendMenu<span class="token punctuation">(</span>PopupMenuID<span class="token punctuation">,</span> MF_STRING<span class="token punctuation">,</span> <span class="token number">115</span><span class="token punctuation">,</span> <span class="token string">"损益表(&amp;Y)"</span><span class="token punctuation">)</span>
	Dump <span class="token operator">=</span> SetMenu<span class="token punctuation">(</span>hwnd<span class="token punctuation">,</span> MenuWnd<span class="token punctuation">)</span>
	PreWinProc <span class="token operator">=</span> GetWindowLong<span class="token punctuation">(</span>hwnd<span class="token punctuation">,</span> GWL_WNDPROC<span class="token punctuation">)</span>
	SetWindowLong hwnd<span class="token punctuation">,</span> GWL_WNDPROC<span class="token punctuation">,</span> <span class="token keyword">AddressOf</span> MsgProcess
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
<span class="token keyword">Private</span> <span class="token keyword">Sub</span> UserForm_Terminate<span class="token punctuation">(</span><span class="token punctuation">)</span>
	DestroyMenu MenuWnd
	DestroyMenu PopupMenuID
	DestroyMenu PopupMenuWnd
	SetWindowLong hwnd<span class="token punctuation">,</span> GWL_WNDPROC<span class="token punctuation">,</span> PreWinProc
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><p>代码解析：</p>
<p>第 1 行到第 13 行代码，API 函数声明。</p>
<p>第 14 行到第 41 代码，用户窗体的 Initialize 事件过程，在窗体显示时使用 API 函数在窗体上添加菜单。其中第 22 行代码添加第一个“系统设置”菜单，第 23、24、25 行代码在“系统设置”菜单中添加三个子菜单，第 26 行代码往下继续添加其他菜单。</p>
<p>第 40 行代码，为窗体中添加的菜单指定所执行的过程名称为“MsgProcess”函数过程。</p>
<p>第 42 行到第 47 行代码，用户窗体的 Terminate 事件过程，将所有引用对象的变量设置成 Nothing，从而删除对象的所有引用。</p>
<p>为了能够使用窗体中添加的菜单，需要在模块中写入下面的代码：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Public</span> PreWinProc <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> hwnd <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Public</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> CheckMenuRadioItem <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> hMenu <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> un1 <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> un2 <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> un3 <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> un4 <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Public</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> CheckMenuItem <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> hMenu <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> wIDCheckItem <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> wCheck <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Public</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> EnableMenuItem <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> hMenu <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> wIDEnableItem <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> wEnable <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Public</span> <span class="token keyword">Const</span> MF_UNCHECKED <span class="token operator">=</span> <span class="token number">&amp;H0</span><span class="token operator">&amp;</span>
<span class="token keyword">Public</span> <span class="token keyword">Const</span> MF_CHECKED <span class="token operator">=</span> <span class="token number">&amp;H8</span><span class="token operator">&amp;</span>
<span class="token keyword">Public</span> <span class="token keyword">Const</span> MF_DISABLED <span class="token operator">=</span> <span class="token number">&amp;H2</span><span class="token operator">&amp;</span>
<span class="token keyword">Public</span> <span class="token keyword">Const</span> MF_GRAYED <span class="token operator">=</span> <span class="token number">&amp;H1</span><span class="token operator">&amp;</span>
<span class="token keyword">Public</span> <span class="token keyword">Const</span> MF_ENABLED <span class="token operator">=</span> <span class="token number">&amp;H0</span><span class="token operator">&amp;</span>
<span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> CallWindowProc <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token keyword">Alias</span> <span class="token string">"CallWindowProcA"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> lpPrevWndFunc <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> hwnd <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> Msg <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> wParam <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> lParam <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> GetMenu <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> hwnd <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> GetSubMenu <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> hMenu <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> nPos <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Private</span> <span class="token keyword">Const</span> MF_BYCOMMAND <span class="token operator">=</span> <span class="token number">&amp;H0</span><span class="token operator">&amp;</span>
<span class="token keyword">Public</span> <span class="token keyword">Function</span> MsgProcess<span class="token punctuation">(</span><span class="token keyword">ByVal</span> hwnd <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> Msg <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> wParam <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">,</span> <span class="token keyword">ByVal</span> lParam <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
	<span class="token keyword">Dim</span> SubMenu_hWnd <span class="token keyword">As</span> <span class="token keyword">Long</span>
	<span class="token keyword">Select</span> <span class="token keyword">Case</span> wParam
		<span class="token keyword">Case</span> <span class="token number">100</span>
			MsgBox <span class="token string">"你选择的是""保存""按钮!"</span>
		<span class="token keyword">Case</span> <span class="token number">101</span>
			MsgBox <span class="token string">"你选择的是""备份""按钮!"</span>
		<span class="token keyword">Case</span> <span class="token number">102</span>
			Unload UserForm1
		<span class="token keyword">Case</span> <span class="token number">110</span>
			MsgBox <span class="token string">"你选择的是""录入""按钮!"</span>
		<span class="token keyword">Case</span> <span class="token number">111</span>
			MsgBox <span class="token string">"你选择的是""审核""按钮!"</span>
		<span class="token keyword">Case</span> <span class="token number">112</span>
			MsgBox <span class="token string">"你选择的是""记账""按钮!"</span>
		<span class="token keyword">Case</span> <span class="token number">113</span>
			MsgBox <span class="token string">"你选择的是""结账""按钮!"</span>
		<span class="token keyword">Case</span> <span class="token number">114</span>
			MsgBox <span class="token string">"你选择的是""资产负债表""按钮!"</span>
		<span class="token keyword">Case</span> <span class="token number">115</span>
			MsgBox <span class="token string">"你选择的是""损益表""按钮!"</span>
		<span class="token keyword">Case</span> <span class="token keyword">Else</span>
			MsgProcess <span class="token operator">=</span> CallWindowProc<span class="token punctuation">(</span>PreWinProc<span class="token punctuation">,</span> hwnd<span class="token punctuation">,</span> Msg<span class="token punctuation">,</span> wParam<span class="token punctuation">,</span> lParam<span class="token punctuation">)</span>
	<span class="token keyword">End</span> <span class="token keyword">Select</span>
<span class="token keyword">End</span> <span class="token keyword">Function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div><p>代码解析：</p>
<p>第 1 行到第 13 行代码，API 函数声明。</p>
<p>第 14 行到第 36 行代码，MsgProcess 函数过程，根据参数 wParam 的值为窗体中的菜单指定所执行的操作，为了演示方便只使用 MsgBox 函数显示一个消息框，在实际应用中可以为菜单写入代码或指定过程名称。</p>
<p>运行窗体后在窗体上添加菜单，如图 148-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/148-1.png" alt="" loading="lazy"></p>
<p><u>图 148-1</u>	用户窗体上添加菜单</p>
</div>
<h2 id="_149、在用户窗体上添加工具栏" tabindex="-1"><a class="header-anchor" href="#_149、在用户窗体上添加工具栏" aria-hidden="true">#</a> 149、在用户窗体上添加工具栏</h2>
<p>在 148 中我们在用户窗体上使用 API 函数添加了菜单，还可以在用户窗体上继续添加工具栏用以显示一列下拉菜单的位图按钮，单击一个工具栏按钮等于选择一个菜单命令，以提供对常用功能和命令的快速访问。</p>
<p>在用户窗体上添加工具栏可以使用 Toolbar 控件，在设计模式下右键单击“工具箱”，在显示的右键菜单中选择“附加控件”，在显示的对话框中选择“Microsoft Toolbar Control， veision 6.0”控件，在用户窗体上添加一个 Toolbar 控件。如图 149-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/149-1.png" alt="" loading="lazy"></p>
<p><u>图 149-1</u>	选择 Toolbar 控件</p>
</div>
<p>因为需要在 Toolbar 控件按钮中使用图标，所以还需要在用户窗体中添加一个 ImageList 控件保存所需要的图像文件，在 ImageList 控件的属性页中插入 6 张图片，如图 149-2 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/149-2.png" alt="" loading="lazy"></p>
<p><u>图 149-2</u>	ImageList 控件插入图片</p>
</div>
<p>用户窗体上添加了 Toolbar 控件后还需要设置其属性和添加按钮控件，可以在 Toolbar 控件的属性页中进行设置和添加，如图 149-3 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/149-3.png" alt="" loading="lazy"></p>
<p><u>图 149-3</u>	设置 Toolbar 控件属性</p>
</div>
<p>还可以在代码运行时对其进行设置和添加按钮，双击用户窗体写入下面的代码：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> UserForm_Initialize<span class="token punctuation">(</span><span class="token punctuation">)</span>
	……使用API函数添加菜单代码略，详见附件
	<span class="token keyword">Dim</span> arr <span class="token keyword">As</span> <span class="token keyword">Variant</span>
	<span class="token keyword">Dim</span> i <span class="token keyword">As</span> <span class="token keyword">Byte</span>
	arr <span class="token operator">=</span> Array<span class="token punctuation">(</span><span class="token string">" 录入 "</span><span class="token punctuation">,</span> <span class="token string">" 审核"</span><span class="token punctuation">,</span> <span class="token string">" 记账 "</span><span class="token punctuation">,</span> <span class="token string">" 结账 "</span><span class="token punctuation">,</span> <span class="token string">"负债表"</span><span class="token punctuation">,</span> <span class="token string">"损益表"</span><span class="token punctuation">)</span>
	<span class="token keyword">With</span> Toolbar1
		<span class="token punctuation">.</span>ImageList <span class="token operator">=</span> ImageList1
		<span class="token punctuation">.</span>Appearance <span class="token operator">=</span> ccFlat
		<span class="token punctuation">.</span>BorderStyle <span class="token operator">=</span> ccNone
		<span class="token punctuation">.</span>TextAlignment <span class="token operator">=</span> tbrTextAlignBottom
		<span class="token keyword">With</span> <span class="token punctuation">.</span>Buttons
			<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Style <span class="token operator">=</span> tbrPlaceholder
			<span class="token keyword">For</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token keyword">To</span> UBound<span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
				<span class="token punctuation">.</span>Add<span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Caption <span class="token operator">=</span> arr<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
			<span class="token keyword">Next</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>代码解析：</p>
<p>第 5 行代码数组 arr 用来保存按钮的标题文字。</p>
<p>第 7 行代码建立 Toolbar 控件和 ImageList 控件的关联。</p>
<p>第 8 行代码设置 Toolbar 控件的外观效果，Appearance 属性获得或设置控件的外观效果，设置值如表格 149-1 所示。</p>
<p><u>表格 149-1</u>	Appearance 属性值</p>
<table>
<thead>
<tr>
<th>设置值</th>
<th>值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>ccFlat</td>
<td>0</td>
<td>平面</td>
</tr>
<tr>
<td>cc3D</td>
<td>1</td>
<td>立体</td>
</tr>
</tbody>
</table>
<p>第 9 行代码设置 Toolbar 控件的边界样式，BorderStyle 属性获得或设置边界样式，设置值如表格 149-2 所示。</p>
<p><u>表格 149-2</u>	BorderStyle 属性值</p>
<table>
<thead>
<tr>
<th>设置值</th>
<th>值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>ccNone</td>
<td>0</td>
<td>无边界线</td>
</tr>
<tr>
<td>ccFixedSingle</td>
<td>1</td>
<td>固定单线框</td>
</tr>
</tbody>
</table>
<p>第 10 行代码设置按钮文本显示在按钮图像下方，TextAlignment 属性获得或设置一个值，决定按钮文本显示在按钮图像下方还是右侧，设置值如表格 149-3 所示。</p>
<p><u>表格 149-3</u>	TextAlignment 属性值</p>
<table>
<thead>
<tr>
<th>设置值</th>
<th>值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>tbrTextAlignBottom</td>
<td>0</td>
<td>下方</td>
</tr>
<tr>
<td>tbrTextAlignRight</td>
<td>1</td>
<td>右侧</td>
</tr>
</tbody>
</table>
<p>第 11 行到第 15 行代码在 Toolbar 控件中添加按钮，添加按钮需要在 Buttons 的集合对象中使用 Add 方法，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">object</span><span class="token punctuation">.</span>Buttons<span class="token punctuation">.</span>Add<span class="token punctuation">(</span>index<span class="token punctuation">,</span> key<span class="token punctuation">,</span> caption<span class="token punctuation">,</span> style<span class="token punctuation">,</span> image<span class="token punctuation">)</span>

参数<span class="token keyword">object</span>是必需的，代表Toolbar对象。
参数index是可选的，指定新增按钮的索引值，该索引值决定了按钮在Toolbar控件中的位置。如果省略index参数新增按钮添加到Butons集合的最后。
参数key是可选的，指定新增按钮的关键字。
参数caption是可选的，指定新增按钮的标题文本。
参数style是可选的，指定新增按钮的样式，设置值如表格 <span class="token number">149</span><span class="token operator">-</span><span class="token number">1</span>所示。
参数image是可选的，指定新增按钮载入的图像，图像必须是与该Toolbar控件相关联的ImageList控件图像库中的一个。image参数可以是一个整数，对应ImageList图像库中某个图片的Index值也可以是一个字符串，对应图片的关键字Key。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><u>表格 149-4</u>	Style 参数值</p>
<table>
<thead>
<tr>
<th>属性值</th>
<th>值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>tbrDefault</td>
<td>0</td>
<td>一般按钮</td>
</tr>
<tr>
<td>tbrCheck</td>
<td>1</td>
<td>开关按钮</td>
</tr>
<tr>
<td>tbrButtonGroup</td>
<td>2</td>
<td>编组按钮</td>
</tr>
<tr>
<td>tbrSeparator</td>
<td>3</td>
<td>分隔按钮</td>
</tr>
<tr>
<td>tbrPlaceholder</td>
<td>4</td>
<td>占位按钮</td>
</tr>
</tbody>
</table>
<p>第 12 行代码代码首先在 Toolbar 控件中添加占位按钮，设置其 style 属性为 tbrPlaceholder，添加的就是占位按钮，在 Toolbar 控件中是不显示的，仅仅起到占位的作用。</p>
<p>第 14 行代码在占位按钮后继续添加 6 个按钮，设置其标题文本和图像在 ImageList 控件中的编号。</p>
<p>为了响应 Toolbar 控件，双击 Toolbar 控件写入下面的代码：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> Toolbar1_ButtonClick<span class="token punctuation">(</span><span class="token keyword">ByVal</span> Button <span class="token keyword">As</span> MSComctlLib<span class="token punctuation">.</span>Button<span class="token punctuation">)</span>
	<span class="token keyword">Select</span> <span class="token keyword">Case</span> Button<span class="token punctuation">.</span>Index
		<span class="token keyword">Case</span> <span class="token number">2</span>
			MsgBox <span class="token string">"录入"</span>
		<span class="token keyword">Case</span> <span class="token number">3</span>
			MsgBox <span class="token string">"审核"</span>
		<span class="token keyword">Case</span> <span class="token number">4</span>
			MsgBox <span class="token string">"记账"</span>
		<span class="token keyword">Case</span> <span class="token number">5</span>
			MsgBox <span class="token string">"结账"</span>
		<span class="token keyword">Case</span> <span class="token number">6</span>
			MsgBox <span class="token string">"资产负债表"</span>
		<span class="token keyword">Case</span> <span class="token number">7</span>
			MsgBox <span class="token string">"损益表"</span>
	<span class="token keyword">End</span> <span class="token keyword">Select</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>代码解析：</p>
<p>Toolbar 控件的 ButtonClick 事件，在单击 Toolbar 控件的按钮时发生，参数 Button 代表单击的按钮。为了演示方便，根据其 Index 属性值使用消息框显示按钮标题文本，在实际应用中可以为菜单写入代码或指定过程名称。</p>
<p>运行窗体后在窗体上添加工具栏，如图 149-4 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/149-4.png" alt="" loading="lazy"></p>
<p><u>图 149-4</u>	在用户窗体上添加工具栏</p>
</div>
<h2 id="_150、使用代码添加窗体及控件" tabindex="-1"><a class="header-anchor" href="#_150、使用代码添加窗体及控件" aria-hidden="true">#</a> 150、使用代码添加窗体及控件</h2>
<p>VBA 中的用户窗体为用户提供了可视化的操作界面，在用户窗体中一般都包含控件以便与用户进行交互。我们通常是在 VBE 中使用菜单“插入”→“用户窗体”来创建用户窗体，然后拖动工具箱中的控件到用户窗体中，也可以使用代码来添加用户窗体及其控件，代码如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> CommandButton1_Click<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> myForm <span class="token keyword">As</span> VBComponent
	<span class="token keyword">Dim</span> myTextBox <span class="token keyword">As</span> Control
	<span class="token keyword">Dim</span> myButton <span class="token keyword">As</span> Control
	<span class="token keyword">Dim</span> i <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">Set</span> myForm <span class="token operator">=</span> ThisWorkbook<span class="token punctuation">.</span>VBProject<span class="token punctuation">.</span>VBComponents<span class="token punctuation">.</span>Add<span class="token punctuation">(</span>vbext_ct_MSForm<span class="token punctuation">)</span>
	<span class="token keyword">With</span> myForm
		<span class="token punctuation">.</span>Properties<span class="token punctuation">(</span><span class="token string">"Name"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"Formtest"</span>
		<span class="token punctuation">.</span>Properties<span class="token punctuation">(</span><span class="token string">"Caption"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"演示窗体"</span>
		<span class="token punctuation">.</span>Properties<span class="token punctuation">(</span><span class="token string">"Height"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"180"</span>
		<span class="token punctuation">.</span>Properties<span class="token punctuation">(</span><span class="token string">"Width"</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"240"</span>
		<span class="token keyword">Set</span> myTextBox <span class="token operator">=</span> <span class="token punctuation">.</span>Designer<span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token string">"Forms.CommandButton.1"</span><span class="token punctuation">)</span>
		<span class="token keyword">With</span> myTextBox
			<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"myTextBox"</span>
			<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"新建文本框"</span>
			<span class="token punctuation">.</span>Top <span class="token operator">=</span> <span class="token number">40</span>
			<span class="token punctuation">.</span>Left <span class="token operator">=</span> <span class="token number">138</span>
			<span class="token punctuation">.</span>Height <span class="token operator">=</span> <span class="token number">20</span>
			<span class="token punctuation">.</span>Width <span class="token operator">=</span> <span class="token number">70</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
		<span class="token keyword">Set</span> myButton <span class="token operator">=</span> <span class="token punctuation">.</span>Designer<span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token string">"Forms.CommandButton.1"</span><span class="token punctuation">)</span>
		<span class="token keyword">With</span> myButton
			<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"myButton"</span>
			<span class="token punctuation">.</span>Caption <span class="token operator">=</span> <span class="token string">"删除文本框"</span>
			<span class="token punctuation">.</span>Top <span class="token operator">=</span> <span class="token number">70</span>
			<span class="token punctuation">.</span>Left <span class="token operator">=</span> <span class="token number">138</span>
			<span class="token punctuation">.</span>Height <span class="token operator">=</span> <span class="token number">20</span>
			<span class="token punctuation">.</span>Width <span class="token operator">=</span> <span class="token number">70</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
		<span class="token keyword">With</span> <span class="token punctuation">.</span>CodeModule
			i <span class="token operator">=</span> <span class="token punctuation">.</span>CreateEventProc<span class="token punctuation">(</span><span class="token string">"Click"</span><span class="token punctuation">,</span> <span class="token string">"myTextBox"</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span>ReplaceLine i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> Space<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"Dim myTextBox As Control"</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Space<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"Dim i As Integer"</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Space<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"Dim k As Integer"</span> <span class="token operator">_</span>
				<span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Space<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"k = 10"</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Space<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"For i = 1 To 5"</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Space<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"Set myTextBox = Me.Controls.Add(bstrprogid:=""Forms.TextBox.1"")"</span> <span class="token operator">_</span>
				<span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Space<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"With myTextBox"</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Space<span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">".Name = ""myTextBox"" &amp; i"</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Space<span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">".Left = 20"</span> <span class="token operator">_</span>
				<span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Space<span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">".Top = k"</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Space<span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">".Height = 18"</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Space<span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">".Width = 80"</span> <span class="token operator">_</span>
				<span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Space<span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"k = .Top + 28"</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Space<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"End With"</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Space<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"Next"</span>
			i <span class="token operator">=</span> <span class="token punctuation">.</span>CreateEventProc<span class="token punctuation">(</span><span class="token string">"Click"</span><span class="token punctuation">,</span> <span class="token string">"myButton"</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span>ReplaceLine i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> Space<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"Dim i As Integer"</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Space<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"On Error Resume Next"</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Space<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"For i = 1 To 5"</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Space<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"Formtest.Controls.Remove ""myTextBox"" &amp; i"</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Space<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"Next"</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p>代码解析：</p>
<p>使用代码添加一个用户窗体及其两个按钮控件，并为按钮控件添加单击事件及其相应的代码。</p>
<p>第 2 行到第 5 行代码声明变量类型，如果发生错误请在菜单“工具”→“引用”中引用“Microsoft Visual Basic for Applications Extensibility 5.3”，如图 150-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/150-1.png" alt="" loading="lazy"></p>
<p><u>图 150-1</u>	引用</p>
</div>
<p>第 6 行代码，使用 Add 方法添加用户窗体，应用于 VBComponents 集合的 Add 方法将一个对象添加到集合，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">object</span><span class="token punctuation">.</span>Add<span class="token punctuation">(</span>component<span class="token punctuation">)</span>

参数<span class="token keyword">object</span>是必需的，一个有效的对象名。
参数component是必需的，对于VBComponents集合，则为表示类模块、窗体、标准模块的列举常数，可以为表格 <span class="token number">150</span><span class="token number">1</span>所示的常量之一。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><u>表格 150-1</u>	component 参数值</p>
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
<td>vbext_ct_ClassModule</td>
<td>2</td>
<td>将一个类模块添加到集合</td>
</tr>
<tr>
<td>Vbext_ct_MSForm</td>
<td>3</td>
<td>将窗体添加到集合</td>
</tr>
<tr>
<td>vbext_ct_StdModule</td>
<td>1</td>
<td>将标准模块添加到集合</td>
</tr>
</tbody>
</table>
<p>第 8 行到第 11 行代码，使用 VBComponent 对象的 Properties 属性设置用户窗体的相关属性。</p>
<p>第 12 行代码，使用 Add 方法添加在用户窗体上添加一个按钮控件。VBComponent 对象的 Designer 属性返回一个设计器对象，其 Controls 属性返回 Controls 集合，代表用户窗体中所有的控件。应用于 Controls 集合对象的 Add 方法在用户窗体中添加控件，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">object</span><span class="token punctuation">.</span>Add<span class="token punctuation">(</span> ProgID [<span class="token punctuation">,</span> Name [<span class="token punctuation">,</span> Visible]]<span class="token punctuation">)</span>

参数<span class="token keyword">object</span>是必需的，一个有效的对象名。
参数ProgID是必需的，程序设计标识符。是用于标识对象类的、没有空格的文本串。关于程序设计标识符请参阅技巧<span class="token number">119</span><span class="token operator">-</span><span class="token number">3</span>中的表格 <span class="token number">119</span><span class="token number">1</span>。
参数Name是可选的，指定被添加的对象的名称。
参数Visible是可选的，若对象为可见的为<span class="token boolean">True</span>，若对象为隐藏的则为<span class="token boolean">False</span>。默认值为<span class="token boolean">True</span>。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>第 13 行到第 20 行代码设置添加的按钮控件的相关属性。</p>
<p>第 21 行到第 29 行代码继续添加一个按钮控件并设置其相关属性。</p>
<p>第 30 行到第 40 行代码为添加的按钮控件创建单击事件过程并在其单击事件中添加代码。</p>
<p>其中第 30、39 行代码使用 CreateEventProc 方法为按钮控件创建单击事件过程，应用于 CodeModule 对象的 CreateEventProc 方法创建一个事件过程，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">object</span><span class="token punctuation">.</span>CreateEventProc<span class="token punctuation">(</span>eventname<span class="token punctuation">,</span> objectname<span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>

参数<span class="token keyword">object</span>是必需的，一个有效的对象名。
参数eventname是必需的，字符串表达式，用来指定欲添加到模块的事件名称。
参数objectname是必需的，字符串表达式，用来指定事件源的对象名称。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>CreateEventProc 方法可返回事件过程的开始行，所以使用变量i保存开始行。</p>
<p>第 32 行代码使用 ReplaceLine 方法在按钮控件的单击事件过程中添加代码，应用于CodeModule对象的 ReplaceLine 方法用特定的代码代替原代码，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">object</span><span class="token punctuation">.</span>ReplaceLine<span class="token punctuation">(</span>line<span class="token punctuation">,</span> code<span class="token punctuation">)</span>

参数<span class="token keyword">object</span>是必需的，一个有效的对象名。
参数line是必需的，用来指定所要代替的行。
参数code是必需的，用来指定要插入的代码。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>在使用 ReplaceLine 方法时将 line 参数设置为变量i加 1，也就是在单击事件过程的第 2 行开始添加代码，在添加代码时使用 Space 函数插入空格，使用 Chr 函数进行换行。</p>
<p>运行 CommandButton1_Click 过程，添加一个用户窗体及两个按钮控件，并在用户窗体中添加以下的代码：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> myTextBox_Click<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> myTextBox <span class="token keyword">As</span> Control
	<span class="token keyword">Dim</span> i <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">Dim</span> k <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	k <span class="token operator">=</span> <span class="token number">10</span>
	<span class="token keyword">For</span> i <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">To</span> <span class="token number">5</span>
		<span class="token keyword">Set</span> myTextBox <span class="token operator">=</span> <span class="token keyword">Me</span><span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Add<span class="token punctuation">(</span><span class="token string">"Forms.TextBox.1"</span><span class="token punctuation">)</span>
		<span class="token keyword">With</span> myTextBox
			<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">"myTextBox"</span> <span class="token operator">&amp;</span> i
			<span class="token punctuation">.</span>Left <span class="token operator">=</span> <span class="token number">20</span>
			<span class="token punctuation">.</span>Top <span class="token operator">=</span> k
			<span class="token punctuation">.</span>Height <span class="token operator">=</span> <span class="token number">18</span>
			<span class="token punctuation">.</span>Width <span class="token operator">=</span> <span class="token number">80</span>
			k <span class="token operator">=</span> <span class="token punctuation">.</span>Top <span class="token operator">+</span> <span class="token number">28</span>
		<span class="token keyword">End</span> <span class="token keyword">With</span>
	<span class="token keyword">Next</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
<span class="token keyword">Private</span> <span class="token keyword">Sub</span> myButton_Click<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> i <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">Resume</span> <span class="token keyword">Next</span>
	<span class="token keyword">For</span> i <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">To</span> <span class="token number">5</span>
		Formtest<span class="token punctuation">.</span>Controls<span class="token punctuation">.</span>Remove <span class="token string">"myTextBox"</span> <span class="token operator">&amp;</span> i
	<span class="token keyword">Next</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>代码解析：</p>
<p>第 1 行到第 17 行代码，用户窗体中“添加文本框”按钮的单击事件，在用户窗体运行时使用 Add 方法在用户窗体中添加5个文本框控件并设置其相关属性。</p>
<p>第 18 行到第 24 行代码，用户窗体中“删除文本框”按钮的单击事件，在用户窗体运行时使用 Remove 方法删除文本框控件。应用于 Controls 集合的 Remove 方法从集合中删除一个成员，或者从框架、页面或窗体中删除一个控件，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">object</span><span class="token punctuation">.</span>Remove<span class="token punctuation">(</span> collectionindex<span class="token punctuation">)</span>

参数<span class="token keyword">object</span>是必需的，一个有效的对象名。
参数collectionindex是必需的，成员在集合内的位置或索引。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>Remove 方法只能删除在运行时间添加的控件，如果想删除在设计时间添加的控件则会出错。</p>
</div>
<p>运行 CommandButton1_Click 过程添加的用户窗体如图 150-2 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/150-2.png" alt="" loading="lazy"></p>
<p><u>图 150-2</u>	添加的用户窗体</p>
</div>
<p>单击“新建文本框”按钮在用户窗体中添加5个文本框控件，如图 150-3 所示，而单击“删除文本框”按钮则删除用户窗体中添加的文本框控件。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/150-3.png" alt="" loading="lazy"></p>
<p><u>图 150-3</u>	在用户窗体上添加文本框</p>
</div>
<h2 id="_151、用户窗体的全屏显示" tabindex="-1"><a class="header-anchor" href="#_151、用户窗体的全屏显示" aria-hidden="true">#</a> 151、用户窗体的全屏显示</h2>
<p>在需要用户窗体全屏显示时，可以将窗体的 Height 属性和 Width 属性设置为一定的数值，使之显示时和显示器一样大小。</p>
<p>使用这种方法虽然可以达到全屏显示的要求，但是如果换台显示器不一样的电脑时，此种方法便会失效。为了使用户窗体达到真正的全屏显示，可以使用以下的方法。</p>
<h3 id="_1-设置用户窗体为应用程序的大小" tabindex="-1"><a class="header-anchor" href="#_1-设置用户窗体为应用程序的大小" aria-hidden="true">#</a> 1）设置用户窗体为应用程序的大小</h3>
<p>将用户窗体的高度和宽度设置为应用程序的高度和宽度，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> UserForm_Initialize<span class="token punctuation">(</span><span class="token punctuation">)</span>
	Application<span class="token punctuation">.</span>WindowState <span class="token operator">=</span> xlMaximized
	<span class="token keyword">With</span> <span class="token keyword">Me</span>
		<span class="token punctuation">.</span>Width <span class="token operator">=</span> Application<span class="token punctuation">.</span>Width
		<span class="token punctuation">.</span>Height <span class="token operator">=</span> Application<span class="token punctuation">.</span>Height
		<span class="token punctuation">.</span>Left <span class="token operator">=</span> Application<span class="token punctuation">.</span>Left
		<span class="token punctuation">.</span>Top <span class="token operator">=</span> Application<span class="token punctuation">.</span>Top
	<span class="token keyword">End</span> <span class="token keyword">With</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>代码解析：</p>
<p>用户窗体初始化时，将高度和宽度设置成与 Excel 应用程序窗口一样。</p>
<p>第 2 行代码，将 Excel 应用程序的 WindowState 属性设置为 xlMaximized，使 Excel 应用程序最大化显示。</p>
<p>不使用对象识别符时 Application 属性返回一个 Application 对象，代表 Excel 应用程序。WindowState 属性返回或设置窗口的状态，可以为表格 151-1 所示的 XlWindowState 常量之一。</p>
<p><u>表格 151-1</u>	XlWindowState 常量</p>
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
<td>xlMaximized</td>
<td>-4137</td>
<td>最大化</td>
</tr>
<tr>
<td>xlNormal</td>
<td>-4143</td>
<td>不变化</td>
</tr>
<tr>
<td>xlMinimized</td>
<td>-4140</td>
<td>最小化</td>
</tr>
</tbody>
</table>
<p>第 3 行到第 8 行代码将用户窗体的 Width 属性、Height 属性设置为 Excel 应用程序的高度和宽度，Width 属性、Height 属性以磅为单位返回或设置对象的高度和宽度。将用户窗体的 Left 属性、Top 属性设置为和最大化后的 Excel 应用程序的一样。</p>
<h3 id="_2-根据屏幕分辨率进行设置" tabindex="-1"><a class="header-anchor" href="#_2-根据屏幕分辨率进行设置" aria-hidden="true">#</a> 2）根据屏幕分辨率进行设置</h3>
<p>根据屏幕分辨率的大小自动调整用户窗体的高度和宽度，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Declare</span> <span class="token keyword">Function</span> GetSystemMetrics <span class="token keyword">Lib</span> <span class="token string">"user32"</span> <span class="token punctuation">(</span><span class="token keyword">ByVal</span> nIndex <span class="token keyword">As</span> <span class="token keyword">Long</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Long</span>
<span class="token keyword">Const</span> SM_CXSCREEN <span class="token keyword">As</span> <span class="token keyword">Long</span> <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">Const</span> SM_CYSCREEN <span class="token keyword">As</span> <span class="token keyword">Long</span> <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">Private</span> <span class="token keyword">Sub</span> UserForm_Initialize<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">With</span> <span class="token keyword">Me</span>
		<span class="token punctuation">.</span>Height <span class="token operator">=</span> GetSystemMetrics<span class="token punctuation">(</span>SM_CYSCREEN<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.72</span> 
		<span class="token punctuation">.</span>Width <span class="token operator">=</span> GetSystemMetrics<span class="token punctuation">(</span>SM_CXSCREEN<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.75</span>
		<span class="token punctuation">.</span>Left <span class="token operator">=</span> <span class="token number">0</span>
		<span class="token punctuation">.</span>Top <span class="token operator">=</span> <span class="token number">0</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>代码解析：</p>
<p>用户窗体初始化时根据屏幕分辨率的大小自动调整用户窗体的高度和宽度。</p>
<p>第 1 行到第 3 行代码，API 函数声明。</p>
<p>第 6 行代码设置用户窗体的高度，屏幕分辨率的Y坐标值乘以 0.72 将其换算成以磅为单位的数值。</p>
<p>第 7 行代码设置用户窗体的宽度，屏幕分辨率的X坐标值乘以 0.75 将其换算成以磅为单位的数值。</p>
<p>经过以上两种方法的设置，用户窗体显示时始终以全屏显示。</p>
<h2 id="_152、在用户窗体上添加状态栏" tabindex="-1"><a class="header-anchor" href="#_152、在用户窗体上添加状态栏" aria-hidden="true">#</a> 152、在用户窗体上添加状态栏</h2>
<p>在 148 、 149 中我们在用户窗体上添加了菜单和工具栏，为了使窗体更像正规的软件，还需要在用户窗体的底部添加一个状态栏，用于显示程序的各种状态信息。</p>
<p>在用户窗体上添加状态栏使用 StatusBar 控件，StatusBar 控件用于设计窗体状态栏，状态栏由一组连续的窗格（最多 16 个）对象组合而成，用于显示应用程序当前的工作状态，其位置通常在应用程序窗体的底部。在设计模式下右键单击“工具箱”，在显示的右键菜单中选择“附加控件”，在显示的对话框中选择“Microsoft StatusBar Control， veision 6.0”控件如图 152-1 所示，拖动后就可以在用户窗体上添加一个 StatusBar 控件。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/152-1.png" alt="" loading="lazy"></p>
<p><u>图 152-1</u>	选择 StatusBar 控件</p>
</div>
<p>在用户窗体上添加了 StatusBar 控件后还需要添加窗格，可以在 StatusBar 控件的属性页中进行设置和添加，在 StatusBar 控件的属性窗口中选择“自定义”按钮，在显示的属性页中设置属性和添加窗格，如图 152-2 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/152-2.png" alt="" loading="lazy"></p>
<p><u>图 152-2</u>	添加 StatusBar 控件的窗格</p>
</div>
<p>也可以在代码运行时对其进行属性设置和添加窗格，双击用户窗体写入下面的代码：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> UserForm_Initialize<span class="token punctuation">(</span><span class="token punctuation">)</span>
	……使用API函数添加菜单代码略，详见附件。
	<span class="token keyword">Dim</span> arr <span class="token keyword">As</span> <span class="token keyword">Variant</span>
	<span class="token keyword">Dim</span> i <span class="token keyword">As</span> <span class="token keyword">Byte</span>
	……使用Toolbar控件添加工具栏代码略，详见附件。
	arr <span class="token operator">=</span> Array<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
	<span class="token keyword">With</span> StatusBar1
		<span class="token punctuation">.</span>Width <span class="token operator">=</span> <span class="token keyword">Me</span><span class="token punctuation">.</span>Width <span class="token operator">-</span> <span class="token number">10</span>
		<span class="token keyword">For</span> i <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">To</span> <span class="token number">3</span>
			<span class="token punctuation">.</span>Panels<span class="token punctuation">.</span>Add<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Style <span class="token operator">=</span> arr<span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token keyword">Next</span>
		<span class="token punctuation">.</span>Panels<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Text <span class="token operator">=</span> <span class="token string">"准备就绪!"</span>
		<span class="token punctuation">.</span>Panels<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Width <span class="token operator">=</span> <span class="token number">60</span>
		<span class="token punctuation">.</span>Panels<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Width <span class="token operator">=</span> <span class="token number">75</span>
		<span class="token punctuation">.</span>Panels<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Width <span class="token operator">=</span> <span class="token keyword">Me</span><span class="token punctuation">.</span>Width <span class="token operator">-</span> <span class="token punctuation">.</span>Panels<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Width <span class="token operator">-</span> <span class="token punctuation">.</span>Panels<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Width
		<span class="token punctuation">.</span>Panels<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Picture <span class="token operator">=</span> LoadPicture<span class="token punctuation">(</span>ThisWorkbook<span class="token punctuation">.</span>Path <span class="token operator">&amp;</span> <span class="token string">"\123.BMP"</span><span class="token punctuation">)</span>
		<span class="token keyword">For</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token keyword">To</span> <span class="token number">2</span>
			<span class="token punctuation">.</span>Panels<span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Alignment <span class="token operator">=</span> i
		<span class="token keyword">Next</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>代码解析：</p>
<p>第 8 行代码设置 StatusBar 控件的宽度比用户窗体略小一点。</p>
<p>第 9 行到第 11 行代码在 StatusBar 控件中添加三个窗格并指定窗格的样式。添加窗格需要在 Panels 集合对象中使用 Add 方法，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">object</span><span class="token punctuation">.</span>Panels<span class="token punctuation">.</span>Add<span class="token punctuation">(</span>index<span class="token punctuation">,</span> key<span class="token punctuation">,</span> text<span class="token punctuation">,</span> style<span class="token punctuation">,</span> picture<span class="token punctuation">)</span>

参数<span class="token keyword">object</span>是必需的，代表StatusBar对象。
参数index是可选的，指定新增窗格的索引值，该索引值决定了窗格在StatusBar控件中的位置。如果省略index参数新增窗格添加到Panels集合的最后。
参数key是可选的，指定新增窗格的关键字。
参数text是可选的，指定新增窗格中显示的文本。
参数style是可选的，指定新增窗格的样式，设置值如表格 <span class="token number">152</span><span class="token operator">-</span><span class="token number">1</span>所示。
参数picture是可选的，指定新增窗格载入的图像。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><u>表格 152-1</u>	Style 参数值</p>
<table>
<thead>
<tr>
<th>属性值</th>
<th>值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>sbrText</td>
<td>0</td>
<td>显示文本与图形</td>
</tr>
<tr>
<td>sbrCaps</td>
<td>1</td>
<td>显示大小写状态</td>
</tr>
<tr>
<td>sbrNum</td>
<td>2</td>
<td>显示numlock键状态</td>
</tr>
<tr>
<td>sbrIns</td>
<td>3</td>
<td>显示Insert状态</td>
</tr>
<tr>
<td>sbrScrl</td>
<td>4</td>
<td>显示Scroll键状态</td>
</tr>
<tr>
<td>sbrtime</td>
<td>5</td>
<td>按系统格式显示时间</td>
</tr>
<tr>
<td>sbrDate</td>
<td>6</td>
<td>按系统格式显示日期</td>
</tr>
</tbody>
</table>
<p>第 12 行代码设置第一个窗格显示的文本。</p>
<p>第 13 行到第 15 行代码设置三个窗格的宽度。</p>
<p>第 16 行代码为第三个窗格加载指定的图像。</p>
<p>第 17 行到第 19 行代码设置三个窗格中文本的对齐方式。Panels 对象的 Alignment 属性返回或设置窗格中文本的对齐方式，设置值如表格 152-2 所示。</p>
<p><u>表格 152-2</u>	Alignment 属性值</p>
<table>
<thead>
<tr>
<th>属性值</th>
<th>值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>sbrLeft</td>
<td>0</td>
<td>文本左对齐</td>
</tr>
<tr>
<td>sbrCenter</td>
<td>1</td>
<td>文本居中对齐</td>
</tr>
<tr>
<td>sbrRight</td>
<td>3</td>
<td>文本右对齐</td>
</tr>
</tbody>
</table>
<p>在示例中使用 StatusBar 控件的第一个窗格在用户窗体的文本框输入时显示所输入的内容，需要在文本框中写入下面的代码。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> TextBox1_Change<span class="token punctuation">(</span><span class="token punctuation">)</span>
	StatusBar1<span class="token punctuation">.</span>Panels<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Text <span class="token operator">=</span> <span class="token string">"正在录入:"</span> <span class="token operator">&amp;</span> TextBox1<span class="token punctuation">.</span>Text
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>代码解析：</p>
<p>文本框的 Change 事件过程，将文本框中输入的内容显示在 StatusBar 控件的第一个窗格中。</p>
<p>运行窗体后在窗体上添加状态栏，如图 152-3 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/152-3.png" alt="" loading="lazy"></p>
<p><u>图 152-3</u>	在用户窗体上添加状态栏</p>
</div>
</template>
