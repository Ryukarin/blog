<template><h2 id="_153、调用工作表函数求和" tabindex="-1"><a class="header-anchor" href="#_153、调用工作表函数求和" aria-hidden="true">#</a> 153、调用工作表函数求和</h2>
<p>在对工作表的单元格区域进行求和计算时，使用工作表 Sum 函数比使用 VBA 代码遍历单元格进行累加求和效率要高得多，代码如下所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> rngSum<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> rng <span class="token keyword">As</span> Range
	<span class="token keyword">Dim</span> d <span class="token keyword">As</span> <span class="token keyword">Double</span>
	<span class="token keyword">Set</span> rng <span class="token operator">=</span> Range<span class="token punctuation">(</span><span class="token string">"A1:F7"</span><span class="token punctuation">)</span>
	d <span class="token operator">=</span> Application<span class="token punctuation">.</span>WorksheetFunction<span class="token punctuation">.</span>Sum<span class="token punctuation">(</span>rng<span class="token punctuation">)</span>
	MsgBox rng<span class="token punctuation">.</span>Address<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"单元格的和为"</span> <span class="token operator">&amp;</span> d
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>代码解析：</p>
<p>rngSum 过程调用工作表 Sum 函数对工作表的单元格区域进行求和计算。</p>
<p>在 VBA 中调用工作表函数需要在工作表函数前加上 WorksheetFunction 属性。应用于 Application 对象的 WorksheetFunction 属性返回 WorksheetFunction 对象，作为 VBA 中调用工作表函数的容器，在实际应用中可省略 Application 对象识别符。</p>
<h2 id="_154、查找最大、最小值" tabindex="-1"><a class="header-anchor" href="#_154、查找最大、最小值" aria-hidden="true">#</a> 154、查找最大、最小值</h2>
<p>在 VBA 中没有内置的函数可以进行最大、最小值的查找，借助工作表 Max、Min 函数可以快速地在工作表区域中查找最大、最小值，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> seeks<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> rng <span class="token keyword">As</span> Range
	<span class="token keyword">Dim</span> myRng <span class="token keyword">As</span> Range
	<span class="token keyword">Dim</span> k1 <span class="token keyword">As</span> <span class="token keyword">Integer</span><span class="token punctuation">,</span> k2 <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">Dim</span> max <span class="token keyword">As</span> <span class="token keyword">Double</span><span class="token punctuation">,</span> min <span class="token keyword">As</span> <span class="token keyword">Double</span>
	<span class="token keyword">Set</span> myRng <span class="token operator">=</span> Sheet1<span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"A1:F30"</span><span class="token punctuation">)</span>
	<span class="token keyword">For</span> <span class="token keyword">Each</span> rng <span class="token keyword">In</span> myRng
		<span class="token keyword">If</span> rng<span class="token punctuation">.</span>Value <span class="token operator">=</span> WorksheetFunction<span class="token punctuation">.</span>max<span class="token punctuation">(</span>myRng<span class="token punctuation">)</span> <span class="token keyword">Then</span>
			rng<span class="token punctuation">.</span>Interior<span class="token punctuation">.</span>ColorIndex <span class="token operator">=</span> <span class="token number">3</span>
			k1 <span class="token operator">=</span> k1 <span class="token operator">+</span> <span class="token number">1</span>
			max <span class="token operator">=</span> rng<span class="token punctuation">.</span>Value
		<span class="token keyword">ElseIf</span> rng<span class="token punctuation">.</span>Value <span class="token operator">=</span> WorksheetFunction<span class="token punctuation">.</span>min<span class="token punctuation">(</span>myRng<span class="token punctuation">)</span> <span class="token keyword">Then</span>
			rng<span class="token punctuation">.</span>Interior<span class="token punctuation">.</span>ColorIndex <span class="token operator">=</span> <span class="token number">5</span>
			k2 <span class="token operator">=</span> k2 <span class="token operator">+</span> <span class="token number">1</span>
			min <span class="token operator">=</span> rng<span class="token punctuation">.</span>Value
		<span class="token keyword">Else</span>
			rng<span class="token punctuation">.</span>Interior<span class="token punctuation">.</span>ColorIndex <span class="token operator">=</span> <span class="token number">0</span>
		<span class="token keyword">End</span> <span class="token keyword">If</span>
	<span class="token keyword">Next</span>
	MsgBox <span class="token string">"最大值是:"</span> <span class="token operator">&amp;</span> max <span class="token operator">&amp;</span> <span class="token string">"共有 "</span> <span class="token operator">&amp;</span> k1 <span class="token operator">&amp;</span> <span class="token string">"个"</span> <span class="token operator">_</span>
		<span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"最小值是:"</span> <span class="token operator">&amp;</span> min <span class="token operator">&amp;</span> <span class="token string">"共有 "</span> <span class="token operator">&amp;</span> k2 <span class="token operator">&amp;</span> <span class="token string">"个"</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>代码解析：</p>
<p>seeks 过程在工作表单元格区域中查找最大、最小值，并将其所在的单元格底色分别设置为红色和蓝色。</p>
<p>第 2 行到第 5 行代码声明变量类型。</p>
<p>第 6 行代码使用关键字 Set 将单元格引用赋给变量 myRng。</p>
<p>第 7 行到第 19 行代码遍历单元格区域，使用工作表 Max、Min 函数判断单元格数值是否是所在区域的最大、最小值，如果是，将其所在的单元格底色设置为红色或蓝色，并保存其数值和数量。</p>
<p>第 20、21 行代码使用消息框显示最大、最小值数值和数量。</p>
<p>运行 seeks 过程后将工作表区域最大、最小值所在的单元格的底色设置为红色或蓝色并用消息框显示其数值和数量，如图 154-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/154-1.png" alt="" loading="lazy"></p>
<p><u>图 154-1</u>	查找最大、最小值</p>
</div>
<h2 id="_155、不重复值的录入" tabindex="-1"><a class="header-anchor" href="#_155、不重复值的录入" aria-hidden="true">#</a> 155、不重复值的录入</h2>
<p>在工作表中录入数据时，有时希望能限制重复值的录入，比如在示例的 A 列单元格只能录入唯一的人员编号，此时可以利用工作表的 Change 事件结合工作表的 CountIf  函数来判断所录入的人员编号是否重复，示例代码如下。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> Worksheet_Change<span class="token punctuation">(</span><span class="token keyword">ByVal</span> Target <span class="token keyword">As</span> Range<span class="token punctuation">)</span>
	<span class="token keyword">With</span> Target
		<span class="token keyword">If</span> <span class="token punctuation">.</span>Column <span class="token operator">&lt;</span><span class="token operator">></span> <span class="token number">1</span> <span class="token keyword">Or</span> <span class="token punctuation">.</span>Count <span class="token operator">></span> <span class="token number">1</span> <span class="token keyword">Then</span> <span class="token keyword">Exit</span> <span class="token keyword">Sub</span>
		<span class="token keyword">If</span> Application<span class="token punctuation">.</span>CountIf<span class="token punctuation">(</span>Range<span class="token punctuation">(</span><span class="token string">"A:A"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">.</span>Value<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">1</span> <span class="token keyword">Then</span>
			<span class="token punctuation">.</span><span class="token keyword">Select</span>
			MsgBox <span class="token string">"不能输入重复的人员编号!"</span><span class="token punctuation">,</span> <span class="token number">64</span>
			Application<span class="token punctuation">.</span>EnableEvents <span class="token operator">=</span> <span class="token boolean">False</span>
			<span class="token punctuation">.</span>Value <span class="token operator">=</span> <span class="token string">""</span>
			Application<span class="token punctuation">.</span>EnableEvents <span class="token operator">=</span> <span class="token boolean">True</span>
		<span class="token keyword">End</span> <span class="token keyword">If</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>代码解析：</p>
<p>工作表的 Change 事件过程，使A列单元格只能录入唯一的人员编号。</p>
<p>第 4 行代码使用工作表的 CountIf 函数来判断在A列单元格输入的人员编号是否重复。工作表的 CountIf 函数计算区域中满足给定条件的单元格的个数，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>COUNTIF<span class="token punctuation">(</span>range<span class="token punctuation">,</span> criteria<span class="token punctuation">)</span>

参数range为需要计算其中满足条件的单元格数目的单元格区域。
参数criteria为确定哪些单元格将被计算在内的条件，其形式可以为数字、表达式、单元格引用或文本。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>在示例中以所录入的人员编号与A列单元格区域进行比较，如果 CountIf 函数的返回值大于 1，说明录入的是重复编号。</p>
<p>第 5 行代码，重新选择该单元格便于下一步清空后重新录入。</p>
<p>第 7、8、9 行代码，清除录入的重复编号，在清除前将 Application 对象的 EnableEvents 属性设置为 False，禁用事件。因为如果不禁用事件，那么在清除重复值的过程中会不断地触发工作表的 Change 事件，从而造成代码运行的死循环。</p>
<p>经过以上的设置，在工作表的A列中只能录入唯一的人员编号，如果录入重复值会进行提示，如图 155-1 所示，点击确定后自动清除录入的重复编号。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/155-1.png" alt="" loading="lazy"></p>
<p><u>图 155-1</u>	限制重复值的录入</p>
</div>
<h2 id="_156、获得当月的最后一天" tabindex="-1"><a class="header-anchor" href="#_156、获得当月的最后一天" aria-hidden="true">#</a> 156、获得当月的最后一天</h2>
<p>在实际工作中经常需要根据给定的日期计算其所属月份的最后一天，此时可以使用 DateSerial 函数完成计算，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> Serial<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> DateStr <span class="token keyword">As</span> <span class="token keyword">Byte</span>
	DateStr <span class="token operator">=</span> Day<span class="token punctuation">(</span>DateSerial<span class="token punctuation">(</span>Year<span class="token punctuation">(</span><span class="token keyword">Date</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Month<span class="token punctuation">(</span><span class="token keyword">Date</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	MsgBox <span class="token string">"本月的最后一天是"</span> <span class="token operator">&amp;</span> Month<span class="token punctuation">(</span><span class="token keyword">Date</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"月"</span> <span class="token operator">&amp;</span> DateStr <span class="token operator">&amp;</span> <span class="token string">"号"</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>代码解析：</p>
<p>Serial 过程配合使用了 4 个 VBA 内置函数 Year、Month、Day 和 DateSerial 完成计算并使用消息框显示当月最后一天的日期。</p>
<p>Year、Month 和 Day 函数分别返回代表指定日期的年、月、日的整数，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>Year<span class="token punctuation">(</span><span class="token keyword">Date</span><span class="token punctuation">)</span>
Month<span class="token punctuation">(</span><span class="token keyword">Date</span><span class="token punctuation">)</span>
Day<span class="token punctuation">(</span><span class="token keyword">Date</span><span class="token punctuation">)</span>

其中参数<span class="token keyword">Date</span>可以是任何能够表示日期的<span class="token keyword">Variant</span>、数值表达式、字符串表达式或它们的组合。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>DateSerial 函数返回包含指定的年、月、日的 Variant(Date)，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>DateSerial<span class="token punctuation">(</span>year<span class="token punctuation">,</span> month<span class="token punctuation">,</span> day<span class="token punctuation">)</span>

其中参数year、 month、day分别表示指定的年、月、日。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>为了指定某个日期， DateSerial 函数中的每个参数的取值范围应该是可接受的，即日的取值范围应在 1-31 之间，而月的取值范围应在 1-12 之间。但是，当一个数值表达式表示某日之前或其后的年、月、日数时，也可以为每个使用这个数值表达式的参数指定相对日期。当任何一个参数的取值超出可接受的范围时，它会自动地在可接受的时间单位进行调整，例如本例中的 day 参数设置为 0，则被解释成 month 参数指定月的前一天，即表达式 Month(Date) + 1 指定的下一个月的前一天，也就是本月的最后一天。</p>
<p>运行 Serial 过程结果如图 156-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/156-1.png" alt="" loading="lazy"></p>
<p><u>图 156-1</u>	获得当月的最后一天</p>
</div>
<h2 id="_157、四舍五入运算" tabindex="-1"><a class="header-anchor" href="#_157、四舍五入运算" aria-hidden="true">#</a> 157、四舍五入运算</h2>
<p>在实际工作中经常需要对数值或计算结果进行四舍五入运算，此时可以使用 VBA 内置的 Round 函数。Round 函数返回一个数值，该数值是按照指定的小数位数进行四舍五入运算的结果，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>Round<span class="token punctuation">(</span>expression [<span class="token punctuation">,</span>numdecimalplaces]<span class="token punctuation">)</span>

参数expression是必需的，要进行四舍五入运算的数值表达式。
参数numdecimalplaces是可选的，数字值，表示进行四舍五入运算时，小数点右边应保留的位数。如果忽略，则Round函数返回整数。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>但是 VBA 内置的 Round 函数在对数值进行四舍五入运算时实行的是 Bankre 舍入，而不是算术舍入。按 Bankre 舍入规则，如果保留位数的下一个数字正好是 5 则其后没有其他有效数字，则按保留位最后一位“偶舍奇入”的方法进行处理。比如 Round(1.5) 的保留位最后为 1，是奇数，小数位的 5 入上去，因此 Round(1.5) 的运算结果是 2；而 Round(4.5) 的保留位最后为 4，是偶数，小数位的 5 舍去，因此 Round(4.5) 的运算结果是 4 而不是 5。</p>
<p>Bankre 舍入规则虽然有其合理性，但不符合实际工作的需要。在实际应用中使用以下两种方法避免 Bankre 舍入：</p>
<h3 id="_1-极小值修正法" tabindex="-1"><a class="header-anchor" href="#_1-极小值修正法" aria-hidden="true">#</a> 1）极小值修正法</h3>
<p>在使用 Round 函数时对需要舍入的数值先加上极小值再调用 VBA 内置的 Round 函数，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> aTestRound<span class="token punctuation">(</span><span class="token punctuation">)</span>
	MsgBox <span class="token string">"Round(4.5)="</span> <span class="token operator">&amp;</span> Round<span class="token punctuation">(</span><span class="token number">4.5</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"Round(4.5)="</span> <span class="token operator">&amp;</span> Round<span class="token punctuation">(</span><span class="token number">4.5</span> <span class="token operator">+</span> <span class="token number">0.0000001</span><span class="token punctuation">)</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>代码解析：</p>
<p>aTestRound 过程分别调用 VBA 内置的 Round 函数和加上极小值再调用 VBA 内置的 Round 函数在洗染店框中显示两者运算结果，如图 157-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/157-1.png" alt="" loading="lazy"></p>
<p><u>图 157-1</u>	加上极小值进行运算结果</p>
</div>
<p>从运算结果中可以发现，加上极小值后 Round(4.5) 已正确运算为 5 而不是 4。</p>
<h3 id="_2-调用工作表函数法" tabindex="-1"><a class="header-anchor" href="#_2-调用工作表函数法" aria-hidden="true">#</a> 2）调用工作表函数法</h3>
<p>还可以使用工作表函数 Round 代替 VBA 内置的 Round 函数。工作表函数 Round 和 VBA 内置的 Round 函数的用法相同，但它采用算术舍入而不是 Bankre 舍入，所以不会有“偶舍奇入”的问题，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> bTestRound<span class="token punctuation">(</span><span class="token punctuation">)</span>
	MsgBox <span class="token string">"Round(4.5)="</span> <span class="token operator">&amp;</span> Round<span class="token punctuation">(</span><span class="token number">4.5</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"Round(4.5)="</span> <span class="token operator">&amp;</span> Application<span class="token punctuation">.</span>Round<span class="token punctuation">(</span><span class="token number">4.5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>代码解析：</p>
<p>bTestRound 过程分别调用 VBA 内置的 Round 函数和工作表 Round 函数在消息框中显示两者运算结果，如图 157-2 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/157-2.png" alt="" loading="lazy"></p>
<p><u>图 157-2</u>	工作表函数运算结果</p>
</div>
<p>从运算结果中可以发现，使用工作表 Round 函数后 Round(4.5) 已正确运算为 5 而不是 4。</p>
<h2 id="_158、使用字符串函数" tabindex="-1"><a class="header-anchor" href="#_158、使用字符串函数" aria-hidden="true">#</a> 158、使用字符串函数</h2>
<p>使用 VBA 的字符串函数可以对字符串进行各种操作，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> StrFunctions<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> Str <span class="token keyword">As</span> <span class="token keyword">String</span>
	Str <span class="token operator">=</span> <span class="token string">"AbcD EFG hijk Lmn"</span>
	MsgBox <span class="token string">"原始字符串为："</span> <span class="token operator">&amp;</span> Str <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">_</span>
		<span class="token operator">&amp;</span> <span class="token string">"字符串长度为："</span> <span class="token operator">&amp;</span> Len<span class="token punctuation">(</span>Str<span class="token punctuation">)</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">_</span>
		<span class="token operator">&amp;</span> <span class="token string">"左边8个字符为："</span> <span class="token operator">&amp;</span> Left<span class="token punctuation">(</span>Str<span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">_</span>
		<span class="token operator">&amp;</span> <span class="token string">"右边6个字符为："</span> <span class="token operator">&amp;</span> Right<span class="token punctuation">(</span>Str<span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">_</span>
		<span class="token operator">&amp;</span> <span class="token string">"从左边第2个开始取5个字符为："</span> <span class="token operator">&amp;</span> Mid<span class="token punctuation">(</span>Str<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">_</span>
		<span class="token operator">&amp;</span> <span class="token string">"转换为大写："</span> <span class="token operator">&amp;</span> UCase<span class="token punctuation">(</span>Str<span class="token punctuation">)</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">_</span>
		<span class="token operator">&amp;</span> <span class="token string">"转换为小写："</span> <span class="token operator">&amp;</span> LCase<span class="token punctuation">(</span>Str<span class="token punctuation">)</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>代码解析：</p>
<p>StrFunctions 过程使用字符串函数对字符串进行各种操作，如计算字符数、取得一定数量的字符、大小写转换等。</p>
<p>第 5 行代码使用 Len 函数返回字符串内字符的数目，Len 函数语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>Len<span class="token punctuation">(</span><span class="token keyword">string</span> | varname<span class="token punctuation">)</span>

参数<span class="token keyword">string</span>为任何有效的字符串表达式。
参数varname为任何有效的变量名称。
两个可能的参数必须有一个，而且只能有一个参数。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>第 6 行代码使用 Left 函数从字符串左边起返回 8 个字符。</p>
<p>第 7 行代码使用 Right 函数从字符串右边起返回 6 个字符</p>
<p>Left 和 rigth 函数语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>Left<span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">,</span> length<span class="token punctuation">)</span>
Right<span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">,</span> length<span class="token punctuation">)</span>

参数<span class="token keyword">string</span>是必需的，字符串表达式。
参数length是必需的，数值表达式，将返回的字符数量。如果为<span class="token number">0</span>，返回零长度字符串 <span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span>；如果大于或等于参数<span class="token keyword">string</span>的字符数，则返回整个字符串
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>第 8 行代码使用 Mid 函数从字符串第 2 位起返回 5 个字符。Mid 函数语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>Mid<span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">,</span> start[<span class="token punctuation">,</span> length]<span class="token punctuation">)</span>

参数<span class="token keyword">string</span>是必需的，字符串表达式。
参数start是必需的，<span class="token keyword">string</span>中被取出部分的字符位置。如果超过<span class="token keyword">string</span>的字符数，将返回零长度字符串 <span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span>。
参数length是可选的，要返回的字符数。如果省略或超过<span class="token keyword">string</span>的字符数，将返回字符串中所有字符。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>第 9 行代码使用 UCase 函数将字符串转换成大写的字符串。</p>
<p>第 10 行代码使用 LCase 函数将字符串转换成小写的字符串。</p>
<p>UCase 和 LCase 函数的语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>UCase<span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">)</span>
LCase<span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">)</span>

参数<span class="token keyword">string</span>是必需的，任何有效的字符串表达式。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>运行 StrFunctions 过程结果如图 158-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/158-1.png" alt="" loading="lazy"></p>
<p><u>图 158-1</u>	使用字符串函数</p>
</div>
<h2 id="_159、使用日期函数" tabindex="-1"><a class="header-anchor" href="#_159、使用日期函数" aria-hidden="true">#</a> 159、使用日期函数</h2>
<p>使用 VBA 的日期函数可以对日期进行各种计算，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> DatFunctions<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> Str <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">Dim</span> Week <span class="token keyword">As</span> <span class="token keyword">String</span>
	Str <span class="token operator">=</span> InputBox<span class="token punctuation">(</span><span class="token string">"请输入日期："</span><span class="token punctuation">)</span>
	<span class="token keyword">If</span> Len<span class="token punctuation">(</span>Str<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span> <span class="token keyword">Then</span>
		<span class="token keyword">If</span> IsDate<span class="token punctuation">(</span>Str<span class="token punctuation">)</span> <span class="token keyword">Then</span>
			<span class="token keyword">Select</span> <span class="token keyword">Case</span> Weekday<span class="token punctuation">(</span>Str<span class="token punctuation">,</span> vbMonday<span class="token punctuation">)</span>
				<span class="token keyword">Case</span> <span class="token number">1</span>
					Week <span class="token operator">=</span> <span class="token string">"一"</span>
				<span class="token keyword">Case</span> <span class="token number">2</span>
					Week <span class="token operator">=</span> <span class="token string">"二"</span>
				<span class="token keyword">Case</span> <span class="token number">3</span>
					Week <span class="token operator">=</span> <span class="token string">"三"</span>
				<span class="token keyword">Case</span> <span class="token number">4</span>
					Week <span class="token operator">=</span> <span class="token string">"四"</span>
				<span class="token keyword">Case</span> <span class="token number">5</span>
					Week <span class="token operator">=</span> <span class="token string">"五"</span>
				<span class="token keyword">Case</span> <span class="token number">6</span>
					Week <span class="token operator">=</span> <span class="token string">"六"</span>
				<span class="token keyword">Case</span> <span class="token number">7</span>
					Week <span class="token operator">=</span> <span class="token string">"日"</span>
			<span class="token keyword">End</span> <span class="token keyword">Select</span>
			MsgBox <span class="token string">"你输入的日期是"</span> <span class="token operator">&amp;</span> DateValue<span class="token punctuation">(</span>Str<span class="token punctuation">)</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">_</span>
				<span class="token operator">&amp;</span> <span class="token string">"是"</span> <span class="token operator">&amp;</span> Year<span class="token punctuation">(</span>Str<span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"年的第"</span> <span class="token operator">&amp;</span> DatePart<span class="token punctuation">(</span><span class="token string">"q"</span><span class="token punctuation">,</span> Str<span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"季度"</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">_</span>
				<span class="token operator">&amp;</span> <span class="token string">"是星期"</span> <span class="token operator">&amp;</span> Week <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">_</span>
				<span class="token operator">&amp;</span> <span class="token string">"距离今天有"</span> <span class="token operator">&amp;</span> Abs<span class="token punctuation">(</span>DateDiff<span class="token punctuation">(</span><span class="token string">"d"</span><span class="token punctuation">,</span> <span class="token keyword">Date</span><span class="token punctuation">,</span> Str<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"天"</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">_</span>
				<span class="token operator">&amp;</span> <span class="token string">"60天后的日期是"</span> <span class="token operator">&amp;</span> DateAdd<span class="token punctuation">(</span><span class="token string">"d"</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> Str<span class="token punctuation">)</span>
		<span class="token keyword">Else</span>
			MsgBox <span class="token string">"请输入正确格式的日期!"</span>
		<span class="token keyword">End</span> <span class="token keyword">If</span>
	<span class="token keyword">End</span> <span class="token keyword">If</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>代码解析：</p>
<p>DatFunctions 过程在对话框中输入日期后使用各种日期函数对其进行计算并用消息框显示。</p>
<p>第 4、5 行代码使用 InputBox 函数显示一个对话框，供用户在对话框中输入一个日期。</p>
<p>第 6 行代码使用 IsDate 函数判断输入的日期是否正确。IsDate 函数返回 Boolean 值，指出一个表达式是否可以转换成日期，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>IsDate<span class="token punctuation">(</span>expression<span class="token punctuation">)</span>

参数expression是必需的，日期表达式或字符串表达式，如果表达式是一个日期，或者可以作为有效日期识别，则IsDate函数返回<span class="token boolean">True</span>，否则返回<span class="token boolean">False</span>。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>第 7 行到第 22 行代码使用 Weekday 函数判断所输入的日期是星期几。Weekday 函数返回一个整数，代表某个日期是星期几，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>Weekday<span class="token punctuation">(</span><span class="token keyword">date</span><span class="token punctuation">,</span> [firstdayofweek]<span class="token punctuation">)</span>

参数<span class="token keyword">date</span>是必需的，能够表示日期的 <span class="token keyword">Variant</span>、数值表达式、字符串表达式或它们的组合。
参数firstdayofweek是可选的，指定一星期第一天的常数，如表格 <span class="token number">159</span><span class="token operator">-</span><span class="token number">1</span>所示。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><u>表格 159-1</u>	firstdayofweek 参数值</p>
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
<td>vbUseSystem</td>
<td>0</td>
<td>使用 NLS API 设置</td>
</tr>
<tr>
<td>VbSunday</td>
<td>1</td>
<td>星期日（缺省值）</td>
</tr>
<tr>
<td>vbMonday</td>
<td>2</td>
<td>星期一</td>
</tr>
<tr>
<td>vbTuesday</td>
<td>3</td>
<td>星期二</td>
</tr>
<tr>
<td>vbWednesday</td>
<td>4</td>
<td>星期三</td>
</tr>
<tr>
<td>vbThursday</td>
<td>5</td>
<td>星期四</td>
</tr>
<tr>
<td>vbFriday</td>
<td>6</td>
<td>星期五</td>
</tr>
<tr>
<td>vbSaturday</td>
<td>7</td>
<td>星期六</td>
</tr>
</tbody>
</table>
<p>Weekday 函数返回一个 1 到 7 之间的整数，当 firstdayofweek 参数设置为 vbMonday（2）时，返回 1 时说明是星期一，以此类推。</p>
<p>第 23 行代码根据系统中指定的短日期格式来显示所输入的日期。DateValue 函数的语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>DateValue<span class="token punctuation">(</span><span class="token keyword">date</span><span class="token punctuation">)</span>

参数<span class="token keyword">date</span>是必需的，任何表达式，表示从 <span class="token number">100</span> 年 <span class="token number">1</span> 月 <span class="token number">1</span> 日到 <span class="token number">9999</span> 年 <span class="token number">12</span> 月 <span class="token number">31</span> 日之间的一个日期。如果是一个字符串，且其内容只有数字以及分隔数字的日期分隔符，则 DateValue函数就会根据系统中指定的短日期格式来识别月、日、年的顺序。DateValue函数也识别明确的英文月份名称，全名或缩写均可。例如，除了<span class="token number">12</span><span class="token operator">/</span><span class="token number">30</span><span class="token operator">/</span><span class="token number">1991</span> 和<span class="token number">12</span><span class="token operator">/</span><span class="token number">30</span><span class="token operator">/</span><span class="token number">91</span> 之外，DateValue函数也能识别December <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">1991</span> 和Dec <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">1991</span>。

如果<span class="token keyword">date</span>参数中略去了年这一部分，DateValue函数就会使用由计算机系统日期设置的当前年份。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>第 24 行代码判断输入的日期的季度。DatePart 函数返回一个包含已知日期的指定时间部分的值，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>DatePart<span class="token punctuation">(</span>interval<span class="token punctuation">,</span> <span class="token keyword">date</span>[<span class="token punctuation">,</span>firstdayofweek[<span class="token punctuation">,</span> firstweekofyear]]<span class="token punctuation">)</span>

其中参数interval是必需的，字符串表达式，是要返回的时间间隔，设定值如表格 <span class="token number">159</span><span class="token operator">-</span><span class="token number">2</span>所示。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><u>表格 159-2</u>	interval 参数设定值</p>
<table>
<thead>
<tr>
<th>设置</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>yyyy</td>
<td>年</td>
</tr>
<tr>
<td>q</td>
<td>季</td>
</tr>
<tr>
<td>m</td>
<td>日</td>
</tr>
<tr>
<td>y</td>
<td>一年的日数</td>
</tr>
<tr>
<td>d</td>
<td>日</td>
</tr>
<tr>
<td>w</td>
<td>一周的日数</td>
</tr>
<tr>
<td>ww</td>
<td>周</td>
</tr>
<tr>
<td>h</td>
<td>时</td>
</tr>
<tr>
<td>n</td>
<td>分钟</td>
</tr>
<tr>
<td>s</td>
<td>秒</td>
</tr>
</tbody>
</table>
<p>第 26 行代码计算所输入的日期距当天的天数。DateDiff 函数返回两个指定日期间的时间间隔数目，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>DateDiff<span class="token punctuation">(</span>interval<span class="token punctuation">,</span> date1<span class="token punctuation">,</span> date2[<span class="token punctuation">,</span> firstdayofweek[<span class="token punctuation">,</span> firstweekofyear]]<span class="token punctuation">)</span>

其中参数interval是必需的，字符串表达式，表示用来计算date1和date2的时间差的时间间隔，设定值如表格 <span class="token number">159</span><span class="token number">2</span>所示。
参数date1和date2是必需的，计算中要用到的两个日期。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>因为如果输入的日期是当前日期以前的日期，DateDiff 函数会返回负值，所以使用 Abs 函数返回绝对值将其转换为正值。</p>
<p>第 27 行代码计算所输入的日期距当天的天数，DateAdd 返回加上了一段时间间隔的一个日期，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>DateAdd<span class="token punctuation">(</span>interval<span class="token punctuation">,</span> number<span class="token punctuation">,</span> <span class="token keyword">date</span><span class="token punctuation">)</span>

参数interval是必需的，字符串表达式，是所要加上去的时间间隔，设定值如表格 <span class="token number">159</span><span class="token operator">-</span><span class="token number">2</span>所示。
参数number是必需的，是要加上的时间间隔的数目。其数值可以为正数（得到未来的日期），也可以为负数（得到过去的日期）。
参数<span class="token keyword">date</span>是必需的，需要加上时间间隔的字符串表达式。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>运行 DatFunctions 过程，在显示的对话框中输入一个日期，结果如图 159-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/159-1.png" alt="" loading="lazy"></p>
<p><u>图 159-1</u>	使用日期函数</p>
</div>
<h2 id="_160、判断是否为数值" tabindex="-1"><a class="header-anchor" href="#_160、判断是否为数值" aria-hidden="true">#</a> 160、判断是否为数值</h2>
<p>使用 IsNumeric 函数可以判断表达式的运算结果是否为数值，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> Numeric<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> i <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">Dim</span> n <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">Dim</span> s <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">With</span> Sheet1
		<span class="token keyword">For</span> i <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">To</span> <span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"A65536"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">End</span><span class="token punctuation">(</span>xlUp<span class="token punctuation">)</span><span class="token punctuation">.</span>Row
			<span class="token keyword">If</span> IsNumeric<span class="token punctuation">(</span><span class="token punctuation">.</span>Cells<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">Then</span>
				n <span class="token operator">=</span> n <span class="token operator">&amp;</span> <span class="token punctuation">.</span>Cells<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Address<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token punctuation">.</span>Cells<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span>
			<span class="token keyword">Else</span>
				s <span class="token operator">=</span> s <span class="token operator">&amp;</span> <span class="token punctuation">.</span>Cells<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Address<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token punctuation">.</span>Cells<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span>
			<span class="token keyword">End</span> <span class="token keyword">If</span>
		<span class="token keyword">Next</span>
	<span class="token keyword">End</span> <span class="token keyword">With</span>
	MsgBox <span class="token string">"A列中数值单元格："</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> n <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">_</span>
		<span class="token operator">&amp;</span> <span class="token string">"A列中非数值单元格："</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> s
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>代码解析：</p>
<p>Numeric 过程使用 IsNumeric 函数判断工作表的A列单元格是否为数值，并使用消息框显示。</p>
<p>第 7 行代码判断工作表的 A 列单元格是否为数值。IsNumeric 函数返回 Boolean 值，指出表达式的运算结果是否为数，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>IsNumeric<span class="token punctuation">(</span>expression<span class="token punctuation">)</span>

参数expression是必需的，<span class="token keyword">Variant</span>类型，包含数值表达式或字符串表达式。
如果参数expression的运算结果为数字，则IsNumeric返回<span class="token boolean">True</span>，否则返回<span class="token boolean">False</span>。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>第 8 行代码将数值单元格的地址和数值保存在变量 e 中。</p>
<p>第 10 行代码将非数值单元格的地址和内容保存在变量 s 中。在保存时插入制表符对数据列进行分隔，使之排列整齐，请参阅 73-5。</p>
<p>运行 Numeric 过程结果如图 160-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/160-1.png" alt="" loading="lazy"></p>
<p><u>图 160-1</u>	判断是否为数值</p>
</div>
<h2 id="_161、格式化数值、日期和时间" tabindex="-1"><a class="header-anchor" href="#_161、格式化数值、日期和时间" aria-hidden="true">#</a> 161、格式化数值、日期和时间</h2>
<p>Format 函数是 VBA 中的常用函数，可以实现数值、日期和时间格式的转变，示例代码如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> FromatCurrent<span class="token punctuation">(</span><span class="token punctuation">)</span>
	MsgBox Format<span class="token punctuation">(</span><span class="token number">123456.789</span><span class="token punctuation">,</span> <span class="token string">"0.00"</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">_</span>
		<span class="token operator">&amp;</span> Format<span class="token punctuation">(</span><span class="token number">123456.789</span><span class="token punctuation">,</span> <span class="token string">"0.00%"</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">_</span>
		<span class="token operator">&amp;</span> Format<span class="token punctuation">(</span><span class="token number">123456.789</span><span class="token punctuation">,</span> <span class="token string">"##,##0.00"</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">_</span>
		<span class="token operator">&amp;</span> Format<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">123456.789</span><span class="token punctuation">,</span> <span class="token string">"$#,##0.00;($#,##0.00)"</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">_</span>
		<span class="token operator">&amp;</span> Format<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">123456.789</span><span class="token punctuation">,</span> <span class="token string">"￥#,##0.00;(￥#,##0.00)"</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">_</span>
		<span class="token operator">&amp;</span> Format<span class="token punctuation">(</span><span class="token keyword">Date</span><span class="token punctuation">,</span> <span class="token string">"yyyy-mm-dd"</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">_</span>
		<span class="token operator">&amp;</span> Format<span class="token punctuation">(</span><span class="token keyword">Date</span><span class="token punctuation">,</span> <span class="token string">"yyyymmdd"</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">_</span>
		<span class="token operator">&amp;</span> Format<span class="token punctuation">(</span><span class="token keyword">Date</span><span class="token punctuation">,</span> <span class="token string">"Long Date"</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">_</span>
		<span class="token operator">&amp;</span> Format<span class="token punctuation">(</span>Now<span class="token punctuation">,</span> <span class="token string">"hh:mm:ss"</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> Chr<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">)</span> <span class="token operator">_</span>
		<span class="token operator">&amp;</span> Format<span class="token punctuation">(</span>Now<span class="token punctuation">,</span> <span class="token string">"hh:mm:ss AMPM"</span><span class="token punctuation">)</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>代码解析：</p>
<p>FromatCurrent 过程使用消息框显示格式化后的数值、日期和时间。</p>
<p>Format 函数根据格式表达式中的指令来格式化的数值、日期和时间，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>Format<span class="token punctuation">(</span>expression[<span class="token punctuation">,</span> format[<span class="token punctuation">,</span> firstdayofweek[<span class="token punctuation">,</span> firstweekofyear]]]<span class="token punctuation">)</span>

其中参数expression是必需的，任何有效的表达式。
参数format是可选的，有效的命名表达式或用户自定义格式表达式。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>第 2 行代码将数值格式化为两位小数格式显示。</p>
<p>第 3 行代码将数值格式化为两位小数的百分比格式显示。</p>
<p>第 4 行代码将数值格式化为千位分隔符显示。</p>
<p>第 5 行代码将数值格式化为以美元符号显示的两位小数，以千位分隔符分隔，如果是负值则以小括号显示。</p>
<p>第 6 行代码将数值格式化为以人民币符号显示的两位小数，以千位分隔符分隔，如果是负值则以小括号显示。</p>
<p>第 7 行代码将系统日期格式化为“yyyy-mm-dd”格式显示。</p>
<p>第 8 行代码将系统日期格式化为“yyyymmdd”格式显示。</p>
<p>第 9 行代码将系统日期格式化为长日期格式显示。</p>
<p>第 10 行代码将系统时间格式化为 24 小时、分钟和秒的格式显示。</p>
<p>第 11 行代码将系统时间格式化为分 12 小时、分钟和秒的格式显示。</p>
<p>运行 FromatCurrent 过程结果如图 161-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/161-1.png" alt="" loading="lazy"></p>
<p><u>图 161-1</u>	格式化数值、日期和时间</p>
</div>
<h2 id="_162、个人所得税自定义函数" tabindex="-1"><a class="header-anchor" href="#_162、个人所得税自定义函数" aria-hidden="true">#</a> 162、个人所得税自定义函数</h2>
<p>在财务工作中经常需要计算个人所得税，而在 Excel 中没有计算个人所得税的函数，此时可以使用自定义函数来计算，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Public</span> <span class="token keyword">Function</span> PITax<span class="token punctuation">(</span>Income<span class="token punctuation">,</span> <span class="token keyword">Optional</span> Threshold<span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Single</span>
	<span class="token keyword">Dim</span> Rate <span class="token keyword">As</span> <span class="token keyword">Single</span>
	<span class="token keyword">Dim</span> Debit <span class="token keyword">As</span> <span class="token keyword">Single</span>
	<span class="token keyword">Dim</span> Taxliability <span class="token keyword">As</span> <span class="token keyword">Single</span>
	<span class="token keyword">If</span> IsMissing<span class="token punctuation">(</span>Threshold<span class="token punctuation">)</span> <span class="token keyword">Then</span> Threshold <span class="token operator">=</span> <span class="token number">2000</span>
	Taxliability <span class="token operator">=</span> Income <span class="token operator">-</span> Threshold
	<span class="token keyword">Select</span> <span class="token keyword">Case</span> Taxliability
		<span class="token keyword">Case</span> <span class="token number">0</span> <span class="token keyword">To</span> <span class="token number">500</span>
			Rate <span class="token operator">=</span> <span class="token number">0.05</span>
			Debit <span class="token operator">=</span> <span class="token number">0</span>
		<span class="token keyword">Case</span> <span class="token number">500.01</span> <span class="token keyword">To</span> <span class="token number">2000</span>
			Rate <span class="token operator">=</span> <span class="token number">0.1</span>
			Debit <span class="token operator">=</span> <span class="token number">25</span>
		<span class="token keyword">Case</span> <span class="token number">2000.01</span> <span class="token keyword">To</span> <span class="token number">5000</span>
			Rate <span class="token operator">=</span> <span class="token number">0.15</span>
			Debit <span class="token operator">=</span> <span class="token number">125</span>
		<span class="token keyword">Case</span> <span class="token number">5000.01</span> <span class="token keyword">To</span> <span class="token number">20000</span>
			Rate <span class="token operator">=</span> <span class="token number">0.2</span>
			Debit <span class="token operator">=</span> <span class="token number">375</span>
		<span class="token keyword">Case</span> <span class="token number">20000.01</span> <span class="token keyword">To</span> <span class="token number">40000</span>
			Rate <span class="token operator">=</span> <span class="token number">0.25</span>
			Debit <span class="token operator">=</span> <span class="token number">1375</span>
		<span class="token keyword">Case</span> <span class="token number">40000.01</span> <span class="token keyword">To</span> <span class="token number">60000</span>
			Rate <span class="token operator">=</span> <span class="token number">0.3</span>
			Debit <span class="token operator">=</span> <span class="token number">3375</span>
		<span class="token keyword">Case</span> <span class="token number">60000.01</span> <span class="token keyword">To</span> <span class="token number">80000</span>
			Rate <span class="token operator">=</span> <span class="token number">0.35</span>
			Debit <span class="token operator">=</span> <span class="token number">6375</span>
		<span class="token keyword">Case</span> <span class="token number">80000.01</span> <span class="token keyword">To</span> <span class="token number">10000</span>
			Rate <span class="token operator">=</span> <span class="token number">0.4</span>
			Debit <span class="token operator">=</span> <span class="token number">10375</span>
		<span class="token keyword">Case</span> <span class="token keyword">Else</span>
			Rate <span class="token operator">=</span> <span class="token number">0.45</span>
			Debit <span class="token operator">=</span> <span class="token number">15375</span>
	<span class="token keyword">End</span> <span class="token keyword">Select</span>
	<span class="token keyword">If</span> Taxliability <span class="token operator">&lt;</span><span class="token operator">=</span> <span class="token number">0</span> <span class="token keyword">Then</span>
		PITax <span class="token operator">=</span> <span class="token number">0</span>
	<span class="token keyword">Else</span>
		PITax <span class="token operator">=</span> Application<span class="token punctuation">.</span>Round<span class="token punctuation">(</span>Taxliability <span class="token operator">*</span> Rate <span class="token operator">-</span> Debit<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
	<span class="token keyword">End</span> <span class="token keyword">If</span>
<span class="token keyword">End</span> <span class="token keyword">Function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p>代码解析：</p>
<p>自定义 PITax 函数根据应纳税额计算应纳的个人所得税额。</p>
<p>第 5 行代码设置个人所得税的起征点为 2000 元，如果以后需要调整起征点，可把 2000 元改为调整后的起征点。</p>
<p>第 6 行代码设置全月应纳税所得额等于应纳税收入减去起征点。</p>
<p>第 7 行到第 35 行代码根据全月应纳税所得额取得税率和速算扣除数。税率和速算扣除数根据如表格 162-1 所示的工资、薪金所得适用个人所得税九级超额累进税率表计算。</p>
<p><u>表格 162-1</u>	个人所得税九级超额累进税率表</p>
<table>
<thead>
<tr>
<th>级数</th>
<th>全月应纳税所得额（含税所得额）</th>
<th>税率%</th>
<th>速算扣除数（元）</th>
</tr>
</thead>
<tbody>
<tr>
<td>一</td>
<td>不超过500元</td>
<td>5</td>
<td>0</td>
</tr>
<tr>
<td>二</td>
<td>超过500元至2000元</td>
<td>10</td>
<td>25</td>
</tr>
<tr>
<td>三</td>
<td>超过2000元至5000元</td>
<td>15</td>
<td>125</td>
</tr>
<tr>
<td>四</td>
<td>超过5000元至20000元</td>
<td>20</td>
<td>375</td>
</tr>
<tr>
<td>五</td>
<td>超过20000元至40000元</td>
<td>25</td>
<td>1375</td>
</tr>
<tr>
<td>六</td>
<td>超过40000元至60000元</td>
<td>30</td>
<td>3375</td>
</tr>
<tr>
<td>七</td>
<td>超过60000元至80000元</td>
<td>35</td>
<td>6375</td>
</tr>
<tr>
<td>八</td>
<td>超过80000元至100000元</td>
<td>40</td>
<td>10375</td>
</tr>
<tr>
<td>九</td>
<td>超过100000元</td>
<td>45</td>
<td>15375</td>
</tr>
</tbody>
</table>
<p>第 36 行到第 40 行代码根据应纳税所得额、税率和速算扣除数计算应纳的个人所得税额。其中第 39 行代码中使用工作表函数 Round 对计算结果进行四舍五入运算，请参阅 157-2。</p>
<p>在工作表中使用自定义 PITax 函数结果如图 162-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/162-1.png" alt="" loading="lazy"></p>
<p><u>图 162-1</u>	工作表中使用自定义 PITax 函数</p>
</div>
<h2 id="_163、人民币大写函数" tabindex="-1"><a class="header-anchor" href="#_163、人民币大写函数" aria-hidden="true">#</a> 163、人民币大写函数</h2>
<p>在 VBA 中没有内置的函数进行人民币大写转换，此时可以编写自定义函数进行人民币大写转换，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Public</span> <span class="token keyword">Function</span> RMBDX<span class="token punctuation">(</span>M<span class="token punctuation">)</span>
	RMBDX <span class="token operator">=</span> Replace<span class="token punctuation">(</span>Application<span class="token punctuation">.</span>Text<span class="token punctuation">(</span>Round<span class="token punctuation">(</span>M <span class="token operator">+</span> <span class="token number">0.00000001</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"[DBnum2]"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"."</span><span class="token punctuation">,</span> <span class="token string">"元"</span><span class="token punctuation">)</span>
	RMBDX <span class="token operator">=</span> IIf<span class="token punctuation">(</span>Left<span class="token punctuation">(</span>Right<span class="token punctuation">(</span>RMBDX<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"元"</span><span class="token punctuation">,</span> Left<span class="token punctuation">(</span>RMBDX<span class="token punctuation">,</span> Len<span class="token punctuation">(</span>RMBDX<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"角"</span> <span class="token operator">&amp;</span> Right<span class="token punctuation">(</span>RMBDX<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token string">"分"</span><span class="token punctuation">,</span> IIf<span class="token punctuation">(</span>Left<span class="token punctuation">(</span>Right<span class="token punctuation">(</span>RMBDX<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"元"</span><span class="token punctuation">,</span> RMBDX <span class="token operator">&amp;</span> <span class="token string">"角整"</span><span class="token punctuation">,</span> IIf<span class="token punctuation">(</span>RMBDX <span class="token operator">=</span> <span class="token string">"零"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">,</span> RMBDX <span class="token operator">&amp;</span> <span class="token string">"元整"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	RMBDX <span class="token operator">=</span> Replace<span class="token punctuation">(</span>Replace<span class="token punctuation">(</span>Replace<span class="token punctuation">(</span>Replace<span class="token punctuation">(</span>RMBDX<span class="token punctuation">,</span> <span class="token string">"零元零角"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"零元"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"零角"</span><span class="token punctuation">,</span> <span class="token string">"零"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"-"</span><span class="token punctuation">,</span> <span class="token string">"负"</span><span class="token punctuation">)</span>
<span class="token keyword">End</span> <span class="token keyword">Function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>代码解析：</p>
<p>第 2 行代码首先使用 Round 函数对小写数字加上极小值后进行四舍五入运算，关于 Round 函数请参阅 157-1。其次使用工作表 Text 函数将数值转换成人民币大写格式表示的文本。Text 函数将数值转换为按指定数字格式表示的文本，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>TEXT<span class="token punctuation">(</span>value<span class="token punctuation">,</span>format_text<span class="token punctuation">)</span>

Value参数为数值、计算结果为数值的公式，或对包含数值的单元格的引用。
Format_text参数为<span class="token string">“单元格格式“</span>对话框中<span class="token string">”数字“</span>选项卡上”分类框中的文本形式的数字格式。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>最后使用 Replace 函数将人民币大写格式表示的文本中的小数点替换成“元”。 Replace 函数返回一个字符串，该字符串中指定的子字符串已被替换成另一子字符串，并且替换发生的次数也是指定的，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>Replace<span class="token punctuation">(</span>expression<span class="token punctuation">,</span> find<span class="token punctuation">,</span> replace[<span class="token punctuation">,</span> start[<span class="token punctuation">,</span> count[<span class="token punctuation">,</span> compare]]]<span class="token punctuation">)</span>

其中参数expression是必需的，包含要替换的子字符串。
参数find是必需的，要搜索到的子字符串。
参数replace是必需的，用来替换的子字符串。
参数start是可选的，在表达式中子字符串搜索的开始位置。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>第 3 行代码使用了 IIF 函数、Left 函数、Right 函数根据第 2 行代码返回的人民币大写格式表示的文本中的“元”的位置在文本中插入正确的“元”、“角”、“分”字符，使之符合人民币大写习惯。</p>
<p>IIf 函数根据表达式的值，来返回两部分中的其中一个，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>IIf<span class="token punctuation">(</span>expr<span class="token punctuation">,</span> truepart<span class="token punctuation">,</span> falsepart<span class="token punctuation">)</span>

参数expr是必需的，用来判断真伪的表达式。
参数truepart是必需的，如果expr为<span class="token boolean">True</span>，则返回这部分的值或表达式。
参数falsepart是必需的，如果expr为<span class="token boolean">False</span>，则返回这部分的值或表达式。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Left、Right 函数请参阅 158 。</p>
<p>第 4 行代码使用 Replace 函数将人民币大写格式表示的文本中可能出现的“零元零角”、“零元”替换成空白字符；可能出现的“零角”替换成“零”。如果输入负数的话，将“-”替换成“负”。</p>
<p>在工作表中使用自定义 RMBDX 函数转换人民币大写的效果如图 163-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/163-1.png" alt="" loading="lazy"></p>
<p><u>图 163-1</u>	人民币大写转换</p>
</div>
<h2 id="_164、列号转换为列标" tabindex="-1"><a class="header-anchor" href="#_164、列号转换为列标" aria-hidden="true">#</a> 164、列号转换为列标</h2>
<p>使用 VBA 获取单元格的列号时，只能返回一个数值。如果需要获取以字符表示的列标，可以使用下面的自定义 GetColumn 函数过程。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token number">001</span>  <span class="token keyword">Function</span> GetColumn<span class="token punctuation">(</span>C <span class="token keyword">As</span> <span class="token keyword">Integer</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">String</span>
<span class="token number">002</span>    GetColumn <span class="token operator">=</span> Split<span class="token punctuation">(</span>Cells<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> C<span class="token punctuation">)</span><span class="token punctuation">.</span>Address<span class="token punctuation">,</span> <span class="token string">"$"</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token number">003</span>  <span class="token keyword">End</span> <span class="token keyword">Function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>代码解析：</p>
<p>GetColumn 函数过程代码中，将参数 iCol 作为列号传递给 Cells 属性，并获取其绝对地址字串符，然后以“$”字符为分隔符，通过Split函数返回一个一维数组。</p>
<p>Split 函数返回一个下标从零开始的一维数组，它包含指定数目的子字符串，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>Split<span class="token punctuation">(</span>expression[<span class="token punctuation">,</span> delimiter[<span class="token punctuation">,</span> limit[<span class="token punctuation">,</span> compare]]]<span class="token punctuation">)</span>

其中参数expression是必需的，包含子字符串和分隔符的字符串表达式 。如果expression是一个长度为零的字符串<span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span>，则返回一个空数组，即没有元素和数据的数组。
参数delimiter是可选的，用于标识子字符串边界的字符串字符。如果忽略，则使用空格字符<span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span>作为分隔符。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>返回一维数组后获取该数组的第 2 个元素（下标为 1），即该列号的字符列标。</p>
<p>下面的代码使用 GetColumn 函数过程获得所选单元格的字符列标。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Private</span> <span class="token keyword">Sub</span> Worksheet_SelectionChange<span class="token punctuation">(</span><span class="token keyword">ByVal</span> Target <span class="token keyword">As</span> Range<span class="token punctuation">)</span>
	MsgBox GetColumn<span class="token punctuation">(</span>Selection<span class="token punctuation">.</span>Column<span class="token punctuation">)</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>在工作表中选择单元格后结果如图 164-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/164-1.png" alt="" loading="lazy"></p>
<p><u>图 164-1</u>	返回列标字符串</p>
</div>
<h2 id="_165、判断工作表是否为空表" tabindex="-1"><a class="header-anchor" href="#_165、判断工作表是否为空表" aria-hidden="true">#</a> 165、判断工作表是否为空表</h2>
<p>VBA 中没有专门的属性或函数可以判断工作表是否为空白工作表，可以使用自定义函数返回指定工作表是否为空工作表，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Function</span> IsBlankSht<span class="token punctuation">(</span>Sh <span class="token keyword">As</span> <span class="token keyword">Variant</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Boolean</span>
	<span class="token keyword">If</span> TypeName<span class="token punctuation">(</span>Sh<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string">"String"</span> <span class="token keyword">Then</span> <span class="token keyword">Set</span> Sh <span class="token operator">=</span> Worksheets<span class="token punctuation">(</span>Sh<span class="token punctuation">)</span>
	<span class="token keyword">If</span> Application<span class="token punctuation">.</span>CountA<span class="token punctuation">(</span>Sh<span class="token punctuation">.</span>UsedRange<span class="token punctuation">.</span>Cells<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span> <span class="token keyword">Then</span>
		IsBlankSht <span class="token operator">=</span> <span class="token boolean">True</span>
	<span class="token keyword">End</span> <span class="token keyword">If</span>
<span class="token keyword">End</span> <span class="token keyword">Function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>代码解析：</p>
<p>自定义 IsBlankSht 函数包含一个 Variant 变量类型的参数，代表工作表名称或者对象名称。如果指定的工作表为空工作表，则该函数返回 True。</p>
<p>第 2 行代码使用 TypeName 函数判断参数 Sh 是否为字符串类型（“String”），如果是字符串，则将以该字符串作为名称的工作表赋值给变量 Sh。</p>
<p>第 3 行代码通过工作表函数 CountA 统计工作表已使用区域的非空单元格个数，如果统计结果为 0，则表示该工作表为空工作表。</p>
<p>现在就可以像使用 VBA 函数一样使用自定义的 IsBlankSht 函数，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> DelBlankSht<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> Sh <span class="token keyword">As</span> Worksheet
	Application<span class="token punctuation">.</span>DisplayAlerts <span class="token operator">=</span> <span class="token boolean">False</span>
	<span class="token keyword">For</span> <span class="token keyword">Each</span> Sh <span class="token keyword">In</span> ThisWorkbook<span class="token punctuation">.</span>Sheets
		<span class="token keyword">If</span> IsBlankSht<span class="token punctuation">(</span>Sh<span class="token punctuation">)</span> <span class="token keyword">Then</span> Sh<span class="token punctuation">.</span>Delete
	<span class="token keyword">Next</span>
	Application<span class="token punctuation">.</span>DisplayAlerts <span class="token operator">=</span> <span class="token boolean">True</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>代码解析：</p>
<p>使用自定义的 IsBlankSht 函数删除工作簿中所有空工作表。</p>
<p>第 3 行代码将 Application 对象的 DisplayAlerts 属性设置为 False，使删除时不显示系统警告对话框。</p>
<p>第 4 行到第 6 行代码，使用 For Each...Next 语句遍历所有工作表，使用自定义的 IsBlankSht 函数判断是否为空表，如果为空表则使用 Delete 方法删除。</p>
<div class="custom-container tip"><p class="custom-container-title">注意</p>
<p>自定义 IsBlankSht 函数仅仅判断工作表单元格区域内容是否为空，如果工作表中存在其它对象（如图形对象、数据有效性、单元格批注等），还需要再进一步判断。</p>
</div>
<h2 id="_166、查找指定工作表" tabindex="-1"><a class="header-anchor" href="#_166、查找指定工作表" aria-hidden="true">#</a> 166、查找指定工作表</h2>
<p>判断工作簿中是否存在指定名称的工作表，除了使用遍历工作簿中所有工作表的方法外，还可以使用自定义函数，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Function</span> ExistSh<span class="token punctuation">(</span>Sh <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Boolean</span>
	<span class="token keyword">Dim</span> Sht <span class="token keyword">As</span> <span class="token keyword">Object</span>
	<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">Resume</span> <span class="token keyword">Next</span>
	<span class="token keyword">Set</span> Sht <span class="token operator">=</span> Sheets<span class="token punctuation">(</span>Sh<span class="token punctuation">)</span>
	<span class="token keyword">If</span> Err<span class="token punctuation">.</span>Number <span class="token operator">=</span> <span class="token number">0</span> <span class="token keyword">Then</span> ExistSh <span class="token operator">=</span> <span class="token boolean">True</span>
	<span class="token keyword">Set</span> Sht <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>代码解析：</p>
<p>自定义 ExistSh 函数包含一个 String 类型的参数，代表需要判断的工作表名称。如果该工作表存在，则返回 True。</p>
<p>第 5 行代码判断前面的代码是否出错，如果前面的代码存在错误，则表示不存在指定名称的表。</p>
<p>使用自定义 ExistSheet 函数判断工作簿中是否存在指定名称的工作表，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> NotSht<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> Sh <span class="token keyword">As</span> <span class="token keyword">String</span>
	Sh <span class="token operator">=</span> InputBox<span class="token punctuation">(</span><span class="token string">"请输入工作表名称："</span><span class="token punctuation">)</span>
	<span class="token keyword">If</span> Len<span class="token punctuation">(</span>Sh<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span> <span class="token keyword">Then</span>
		<span class="token keyword">If</span> <span class="token keyword">Not</span> ExistSh<span class="token punctuation">(</span>Sh<span class="token punctuation">)</span> <span class="token keyword">Then</span>
			MsgBox <span class="token string">"对不起,"</span> <span class="token operator">&amp;</span> Sh <span class="token operator">&amp;</span> <span class="token string">"表不存在!"</span>
		<span class="token keyword">Else</span>
			Sheets<span class="token punctuation">(</span>Sh<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">Select</span>
		<span class="token keyword">End</span> <span class="token keyword">If</span>
	<span class="token keyword">End</span> <span class="token keyword">If</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>代码解析：</p>
<p>NotSht 过程使用自定义的 ExistSh 函数判断工作簿中是否存在指定名称的工作表，如果不存在则使用消息框进行提示，如图 166-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/166-1.png" alt="" loading="lazy"></p>
<p><u>图 166-1</u>	查找指定工作表</p>
</div>
<h2 id="_167、查找指定工作簿是否打开" tabindex="-1"><a class="header-anchor" href="#_167、查找指定工作簿是否打开" aria-hidden="true">#</a> 167、查找指定工作簿是否打开</h2>
<p>如果需要判断指定名称的工作簿是否已经打开，除了使用 43 的方法外，还可以使用与 166 类似的自定义函数，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Function</span> ExistWorkbook<span class="token punctuation">(</span>WbName <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">Boolean</span>
	<span class="token keyword">Dim</span> wb <span class="token keyword">As</span> Workbook
	<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">Resume</span> <span class="token keyword">Next</span>
	<span class="token keyword">Set</span> wb <span class="token operator">=</span> Workbooks<span class="token punctuation">(</span>WbName<span class="token punctuation">)</span>
	<span class="token keyword">If</span> Err<span class="token punctuation">.</span>Number <span class="token operator">=</span> <span class="token number">0</span> <span class="token keyword">Then</span> ExistWorkbook <span class="token operator">=</span> <span class="token boolean">True</span>
	<span class="token keyword">Set</span> wb <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Function</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>代码解析：</p>
<p>自定义 ExistWorkbook 函数判断指定名称的工作簿是否已经打开。</p>
<p>第 5 行代码判断前面的赋值语句是否存在错误。如果没有指定名称的工作簿，则第 4 行代码会产生错误，自定义 ExistWorkbook 函数返回 False。</p>
<p>下面使用自定义 ExistWorkbook 函数判断名称为“Excel Home”的工作簿是否已经打开，如果没有打开则使用消息框进行提示，如图 167-1 所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> NotWorkbook<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">If</span> <span class="token keyword">Not</span> <span class="token punctuation">(</span>ExistWorkbook<span class="token punctuation">(</span><span class="token string">"Excel Home"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">Then</span> MsgBox <span class="token string">"对不起,Excel Home工作簿没有打开!"</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container center">
<p><img src="@source/project/Excel/assets/167-1.png" alt="" loading="lazy"></p>
<p><u>图 167-1</u>	消息框提示</p>
</div>
<h2 id="_168、取得应用程序的安装路径" tabindex="-1"><a class="header-anchor" href="#_168、取得应用程序的安装路径" aria-hidden="true">#</a> 168、取得应用程序的安装路径</h2>
<p>使用自定义函数取得应用程序的安装路径，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Function</span> GetSetupPath<span class="token punctuation">(</span>AppName <span class="token keyword">As</span> <span class="token keyword">String</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> WSH <span class="token keyword">As</span> <span class="token keyword">Object</span>
	<span class="token keyword">Set</span> WSH <span class="token operator">=</span> CreateObject<span class="token punctuation">(</span><span class="token string">"Wscript.Shell"</span><span class="token punctuation">)</span>
	GetSetupPath <span class="token operator">=</span> WSH<span class="token punctuation">.</span>RegRead<span class="token punctuation">(</span><span class="token string">"HKEY_LOCAL_MACHINE\Software"</span> <span class="token operator">_</span>
		<span class="token operator">&amp;</span> <span class="token string">"\Microsoft\Windows\CurrentVersion\App Paths\"</span> <span class="token operator">_</span>
		<span class="token operator">&amp;</span> AppName <span class="token operator">&amp;</span> <span class="token string">"\Path"</span><span class="token punctuation">)</span>
	<span class="token keyword">Set</span> WSH <span class="token operator">=</span> <span class="token boolean">Nothing</span>
<span class="token keyword">End</span> <span class="token keyword">Function</span>
<span class="token keyword">Sub</span> WinRARPath<span class="token punctuation">(</span><span class="token punctuation">)</span>
	MsgBox GetSetupPath<span class="token punctuation">(</span><span class="token string">"WinRAR.exe"</span><span class="token punctuation">)</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>代码解析：</p>
<p>自定义 GetSetupPath 函数取得应用程序的安装路径，其中参数 AppName 代表指定的应用程序的名称。</p>
<p>第 3 行代码使用 CreateObject 函数将 Wscript.Shell 对象的引用赋给变量 WSH。</p>
<p>CreateObject 函数创建并返回一个对 ActiveX 对象的引用，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>CreateObject<span class="token punctuation">(</span><span class="token keyword">class</span><span class="token punctuation">,</span>[servername]<span class="token punctuation">)</span>

参数<span class="token keyword">class</span>是必需的，<span class="token keyword">Variant</span> <span class="token punctuation">(</span><span class="token keyword">String</span><span class="token punctuation">)</span>，要创建的应用程序名称和类。
参数servername是可选的，<span class="token keyword">Variant</span> <span class="token punctuation">(</span><span class="token keyword">String</span><span class="token punctuation">)</span>，要在其上创建对象的网络服务器名称。如果servername是一个空字符串<span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span>，即使用本地机器。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>第 4 行代码取得 AppName 参数指定的应用程序在注册表中的路径。</p>
<p>WinRARPath 过程使用消息框显示由自定义的 GetSetupPath 函数取得的应用程序“WinRAR”的安装路径。</p>
<p>运行 WinRARPath 过程结果如图 168-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/168-1.png" alt="" loading="lazy"></p>
<p><u>图 168-1</u>	应用程序安装路径</p>
</div>
<h2 id="_169、数组的使用" tabindex="-1"><a class="header-anchor" href="#_169、数组的使用" aria-hidden="true">#</a> 169、数组的使用</h2>
<h3 id="_1-代码运行时创建数组" tabindex="-1"><a class="header-anchor" href="#_1-代码运行时创建数组" aria-hidden="true">#</a> 1）代码运行时创建数组</h3>
<p>使用 Array 函数可以在代码运行时创建数组并把一系列数据保存在数组中，示例代码如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Option</span> Base <span class="token number">1</span>
<span class="token keyword">Sub</span> arr<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> arr <span class="token keyword">As</span> <span class="token keyword">Variant</span>
	<span class="token keyword">Dim</span> i <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	arr <span class="token operator">=</span> Array<span class="token punctuation">(</span><span class="token string">"王晓明"</span><span class="token punctuation">,</span> <span class="token string">"吴胜玉"</span><span class="token punctuation">,</span> <span class="token string">"周志国"</span><span class="token punctuation">,</span> <span class="token string">"曹武伟"</span><span class="token punctuation">,</span> <span class="token string">"张新发"</span><span class="token punctuation">,</span> <span class="token string">"卓雪梅"</span><span class="token punctuation">,</span> <span class="token string">"沈煜婷"</span><span class="token punctuation">,</span> <span class="token string">"丁林平"</span><span class="token punctuation">)</span>
	<span class="token keyword">For</span> i <span class="token operator">=</span> LBound<span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token keyword">To</span> UBound<span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
		Cells<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=</span> arr<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
	<span class="token keyword">Next</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>代码解析：</p>
<p>Arr 过程使用 Array 函数创建一个数组用来保存数据并将其写入到工作表的单元格区域。</p>
<p>第 1 行代码使用 Option Base 语句声明数组下标的缺省下界为 1，数组下标的缺省下界默认为 0。</p>
<p>第 5 行代码使用 Array 函数创建数组用来保存数据。Array 函数返回一个包含数组的 Variant，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>Array<span class="token punctuation">(</span>arglist<span class="token punctuation">)</span>

Arglist参数是一个用逗号隔开的值表，这些值用于给<span class="token keyword">Variant</span>所包含的数组的各元素赋值。如果不提供Arglist参数，则创建一个长度为 <span class="token number">0</span> 的数组。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>第 6 行代码使用 LBound 函数和 UBound 函数取得数组的最小和最大下标。</p>
<p>LBound 函数返回一个 Long 型数据，其值为指定数组维可用的最小下标，语法如下：</p>
<p>UBound 函数返回一个 Long 型数据，其值为指定数组维可用的最大下标，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>LBound<span class="token punctuation">(</span>arrayname[<span class="token punctuation">,</span> dimension]<span class="token punctuation">)</span>
UBound<span class="token punctuation">(</span>arrayname[<span class="token punctuation">,</span> dimension]<span class="token punctuation">)</span>

参数arrayname是必需的，数组变量的名称。
参数dimension是可选的，指定返回哪一维的下界，<span class="token number">1</span>表示第一维，<span class="token number">2</span>表示第二维，如此类推。默认为<span class="token number">1</span>。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>UBound 函数与 LBound 函数一起使用，可以用来确定数组的大小。</p>
<p>第 7 行代码确定数组的大小后使用 For...Next 语句遍历数组元素并将数组元素依次写入到工作表的 A 列单元格中，如图 169-1 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/169-1.png" alt="" loading="lazy"></p>
<p><u>图 169-1</u>	将数组元素写入工作表</p>
</div>
<h3 id="_2-文本转换为数组" tabindex="-1"><a class="header-anchor" href="#_2-文本转换为数组" aria-hidden="true">#</a> 2）文本转换为数组</h3>
<p>在处理字符串时可以使用 Split 函数将字符串按指定的分隔符分开并以数组返回，代码如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> Splitarr<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> Arr <span class="token keyword">As</span> <span class="token keyword">Variant</span>
	Arr <span class="token operator">=</span> Split<span class="token punctuation">(</span>Sheet2<span class="token punctuation">.</span>Cells<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">","</span><span class="token punctuation">)</span>
	Sheet1<span class="token punctuation">.</span>Cells<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Resize<span class="token punctuation">(</span>UBound<span class="token punctuation">(</span>Arr<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=</span> Application<span class="token punctuation">.</span>Transpose<span class="token punctuation">(</span>Arr<span class="token punctuation">)</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>代码解析：</p>
<p>Splitarr 过程使用 Split 函数将工作表 Sheet2 中 <code>A1</code> 单元格的姓名分别写入到工作表 Sheet1 中的 A 列单元格。</p>
<p>Split 函数返回一个下标从零开始的一维数组，包含指定数目的子字符串，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>Split<span class="token punctuation">(</span>expression[<span class="token punctuation">,</span> delimiter[<span class="token punctuation">,</span> limit[<span class="token punctuation">,</span> compare]]]<span class="token punctuation">)</span>

参数expression是必需的，包含子字符串和分隔符的字符串表达式。
参数delimiter是必需的，用来标识子字符串边界的字符串字符。如果忽略，则使用空格字符<span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span>作为分隔符。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>第 4 行代码，首先使用 UBound 函数取得返回数组的最大下标后调整单元格区域，因为数组下标的缺省下界默认为 0，所以在使用 Resize 属性调整单元格区域时参数 RowSize 需要在返回数组的最大下标上加一。</p>
<p>然后使用工作表 Transpose 函数将返回数组转置后写入到工作表调整后的单元格区域中。</p>
<p>工作表 Transpose 函数返回转置单元格区域，即将一行单元格区域转置成一列单元格区域，反之亦然，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>TRANSPOSE<span class="token punctuation">(</span>array<span class="token punctuation">)</span>

参数 array 为需要进行转置的数组或工作表中的单元格区域。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Splitarr 过程将如图 169-2 所示的工作表单元格中的字符串以逗号分隔后依次写入到工作表的 A 列单元格中，如图 169-3 所示。</p>
<div class="custom-container center">
<p><img src="@source/project/Excel/assets/169-2.png" alt="" loading="lazy"></p>
<p><u>图 169-2</u>	工作表单元格中的字符串</p>
<p><img src="@source/project/Excel/assets/169-3.png" alt="" loading="lazy"></p>
<p><u>图 169-3</u>	文本转换为数组写入单元格</p>
</div>
<h3 id="_3-使用动态数组去除重复值" tabindex="-1"><a class="header-anchor" href="#_3-使用动态数组去除重复值" aria-hidden="true">#</a> 3）使用动态数组去除重复值</h3>
<p>在 169-2 中使用数组函数将单元格中的文本进行分隔后写入到工作表 Sheet1 中的 A 列单元格，但是如果文本中含有大量的重复值，在写入时也会将重复值写入到工作表中，此时可以使用动态数组去除文本中的重复值，如下面的代码所示。</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">Sub</span> Splitarr<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">Dim</span> Splarr<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">Dim</span> Arr<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">Dim</span> Temp<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">As</span> <span class="token keyword">String</span>
	<span class="token keyword">Dim</span> r <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">Dim</span> i <span class="token keyword">As</span> <span class="token keyword">Integer</span>
	<span class="token keyword">On</span> <span class="token keyword">Error</span> <span class="token keyword">Resume</span> <span class="token keyword">Next</span>
	Splarr <span class="token operator">=</span> Split<span class="token punctuation">(</span>Sheet2<span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"a1"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">","</span><span class="token punctuation">)</span>
	<span class="token keyword">For</span> i <span class="token operator">=</span> <span class="token number">0</span> <span class="token keyword">To</span> UBound<span class="token punctuation">(</span>Splarr<span class="token punctuation">)</span>
		Temp <span class="token operator">=</span> Filter<span class="token punctuation">(</span>Arr<span class="token punctuation">,</span> Splarr<span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">If</span> UBound<span class="token punctuation">(</span>Temp<span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token keyword">Then</span>
			r <span class="token operator">=</span> r <span class="token operator">+</span> <span class="token number">1</span>
			<span class="token keyword">ReDim</span> Preserve Arr<span class="token punctuation">(</span><span class="token number">1</span> <span class="token keyword">To</span> r<span class="token punctuation">)</span>
			Arr<span class="token punctuation">(</span>r<span class="token punctuation">)</span> <span class="token operator">=</span> Splarr<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
		<span class="token keyword">End</span> <span class="token keyword">If</span>
	<span class="token keyword">Next</span>
	Sheet1<span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"a1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Resize<span class="token punctuation">(</span>r<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">=</span> Application<span class="token punctuation">.</span>Transpose<span class="token punctuation">(</span>Arr<span class="token punctuation">)</span>
<span class="token keyword">End</span> <span class="token keyword">Sub</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>代码解析：</p>
<p>Splitarr 过程将工作表 Sheet2 中 <code>A1</code> 单元格的文本去除重复值后写入到工作表 Sheet1 中的 A 列单元格。</p>
<p>第 2 行代码声明数组 Splarr 用来保存 Sheet2 中 <code>A1</code> 单元格的文本。</p>
<p>第 3 行代码声明数组 Arr 用来保存去除重复值后的文本。</p>
<p>第 4 行代码声明数组 Temp 用来判断文本是否重复。</p>
<p>第 5 行代码声明变量 r 用来保存去除重复值后的文本数量。</p>
<p>第 7 行代码启动错误处理程序来忽略错误，因为在程序运行到第 11 行代码会发生下标越界错误。</p>
<p>第 8 行代码使用 Split 函数以 Sheet2 中 <code>A1</code> 单元格的文本创建一个下标从零开始的一维数组。关于 Split 函数请参阅 169-2。</p>
<p>第 9 行代码使用 For...Next 语句遍历数组 Splarr 的所有元素。</p>
<p>第 10 行代码使用 Filter 函数创建一个数组 Temp 用来保存以当前 Splarr 数组的值在 Arr 数组中的搜索结果。Filter 函数返回一个下标从零开始的数组，该数组包含基于指定筛选条件的一个字符串数组的子集，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>Filter<span class="token punctuation">(</span>sourcesrray<span class="token punctuation">,</span> match[<span class="token punctuation">,</span> include[<span class="token punctuation">,</span> compare]]<span class="token punctuation">)</span>

参数sourcesrray是必需的，要执行搜索的一维字符串数组。
参数match是必需的，要搜索的字符串。
参数include是可选的，<span class="token keyword">Boolean</span>值，表示返回子串是否包含match字符串。如果参数include是<span class="token boolean">True</span>，Filter函数返回的是包含match参数子字符串的数组子集。如果参数include是<span class="token boolean">False</span>，Filter函数返回的是不包含match参数子字符串的数组子集。
参数compare是可选的，所使用的字符串比较类型。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>第 11 行代码根据返回的数组 Temp 的最大下标来判断当前 Splarr 数组的值是否重复。在使用使用 Filter 函数时如果没有相匹配的值，将返回一个空数组，最大下标小于 0。</p>
<p>第 12 行代码如果当前 Splarr 数组的值不重复则将变量 r 的值加 1。</p>
<p>第 13 行代码重新定义动态数组大小。ReDim 语句，在过程级别中使用，用于为动态数组变量重新分配存储空间，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code><span class="token keyword">ReDim</span> [Preserve] varname<span class="token punctuation">(</span>subscripts<span class="token punctuation">)</span> [<span class="token keyword">As</span> <span class="token keyword">type</span>] [<span class="token punctuation">,</span> varname<span class="token punctuation">(</span>subscripts<span class="token punctuation">)</span> [<span class="token keyword">As</span> <span class="token keyword">type</span>]]

参数Preserve是可选的，关键字，当改变原有数组最末维的大小时，使用此关键字可以保持数组中原来的数据。
参数varname是必需的，变量的名称。
参数subscripts是必需的，数组变量的维数，最多可以定义 <span class="token number">60</span> 维的多维数组，使用下面的语法；

[lower <span class="token keyword">To</span>] upper [<span class="token punctuation">,</span>[lower <span class="token keyword">To</span>] upper]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>第 14 行代码将不重复值添加到数组 Arr 中。</p>
<p>第 15 行代码使用工作表 Transpose 函数将去除重复值的的文本转置后写入到工作表的 A 列单元格中。</p>
<p>如果需要将去除重复值的的文本写入到第一行单元格中，可以将第 15 行代码改成下面的代码：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>Sheet1<span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"a1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Resize<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> r<span class="token punctuation">)</span> <span class="token operator">=</span> Arr
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果需要将去除重复值的的文本还是以逗号作为分隔符写入到 <code>A1</code> 单元格中，可以将第 15 行代码改成下面的代码：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>Sheet1<span class="token punctuation">.</span>Range<span class="token punctuation">(</span><span class="token string">"a1"</span><span class="token punctuation">)</span> <span class="token operator">=</span> Join<span class="token punctuation">(</span>Arr<span class="token punctuation">,</span> <span class="token string">","</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Join 函数返回一个字符串，该字符串是通过连接某个数组中的多个子字符串而创建的，语法如下：</p>
<div class="language-vb ext-vb line-numbers-mode"><pre v-pre class="language-vb"><code>Join<span class="token punctuation">(</span>sourcearray[<span class="token punctuation">,</span> delimiter]<span class="token punctuation">)</span>

参数sourcearray是必需的，包含被连接子字符串的一维数组。
参数delimiter是可选的，在返回字符串中用于分隔子字符串的字符，如果忽略则使用空格<span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span>来分隔子字符串。
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></template>
