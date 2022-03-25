<template><p>Excel 的常用函数大致可分为以下几大类：</p>
<ul>
<li>统计函数</li>
<li>逻辑函数</li>
<li>文本函数</li>
<li>数学函数</li>
<li>查找引用函数</li>
<li>日期时间函数</li>
<li>信息函数</li>
<li>......</li>
</ul>
<p>当然，工作中很多问题不是单单一个函数就可以解决的，而是多个函数的组合才能沟解决问题的，这就要我们灵活的运用函数套嵌，或者需要辅助列等等。同一个问题也不是只有一个方法，可以有多种方法，具体情况具体对待。</p>
<h2 id="统计函数" tabindex="-1"><a class="header-anchor" href="#统计函数" aria-hidden="true">#</a> 统计函数</h2>
<table>
<thead>
<tr>
<th>函数</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/average-%E5%87%BD%E6%95%B0-047bac88-d466-426c-a32b-8f33eb960cf6" target="_blank" rel="noopener noreferrer">AVERAGE 函数<ExternalLinkIcon/></a></td>
<td>返回其参数的平均值</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/averageif-%E5%87%BD%E6%95%B0-faec8e2e-0dec-4308-af69-f5576d8ac642" target="_blank" rel="noopener noreferrer">AVERAGEIF 函数<ExternalLinkIcon/></a></td>
<td>返回区域中满足给定条件的所有单元格的平均值（算术平均值）</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/averageifs-%E5%87%BD%E6%95%B0-48910c45-1fc0-4389-a028-f7c5c3001690" target="_blank" rel="noopener noreferrer">AVERAGEIFS 函数<ExternalLinkIcon/></a></td>
<td>返回满足多个条件的所有单元格的平均值（算术平均值）</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/count-%E5%87%BD%E6%95%B0-a59cd7fc-b623-4d93-87a4-d23bf411294c" target="_blank" rel="noopener noreferrer">COUNT 函数<ExternalLinkIcon/></a></td>
<td>计算参数列表中数字的个数</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/counta-%E5%87%BD%E6%95%B0-7dc98875-d5c1-46f1-9a82-53f3219e2509" target="_blank" rel="noopener noreferrer">COUNTA 函数<ExternalLinkIcon/></a></td>
<td>计算参数列表中值的个数</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/countblank-%E5%87%BD%E6%95%B0-6a92d772-675c-4bee-b346-24af6bd3ac22" target="_blank" rel="noopener noreferrer">COUNTBLANK 函数<ExternalLinkIcon/></a></td>
<td>计算区域内空白单元格的数量</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/countif-%E5%87%BD%E6%95%B0-e0de10c6-f885-4e71-abb4-1f464816df34" target="_blank" rel="noopener noreferrer">COUNTIF 函数<ExternalLinkIcon/></a></td>
<td>计算区域内符合给定条件的单元格的数量</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/countifs-%E5%87%BD%E6%95%B0-dda3dc6e-f74e-4aee-88bc-aa8c2a866842" target="_blank" rel="noopener noreferrer">COUNTIFS 函数<ExternalLinkIcon/></a></td>
<td>计算区域内符合多个条件的单元格的数量</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/large-%E5%87%BD%E6%95%B0-3af0af19-1190-42bb-bb8b-01672ec00a64" target="_blank" rel="noopener noreferrer">LARGE 函数<ExternalLinkIcon/></a></td>
<td>返回数据集中第 k 个最大值</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/small-%E5%87%BD%E6%95%B0-17da8222-7c82-42b2-961b-14c45384df07" target="_blank" rel="noopener noreferrer">SMALL 函数<ExternalLinkIcon/></a></td>
<td>返回数据集中的第 k 个最小值</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/max-%E5%87%BD%E6%95%B0-e0012414-9ac8-4b34-9a47-73e662c08098" target="_blank" rel="noopener noreferrer">MAX 函数<ExternalLinkIcon/></a></td>
<td>返回参数列表中的最大值</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/median-%E5%87%BD%E6%95%B0-d0916313-4753-414c-8537-ce85bdd967d2" target="_blank" rel="noopener noreferrer">MEDIAN 函数<ExternalLinkIcon/></a></td>
<td>返回给定数值集合的中值</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/min-%E5%87%BD%E6%95%B0-61635d12-920f-4ce2-a70f-96f202dcc152" target="_blank" rel="noopener noreferrer">MIN 函数<ExternalLinkIcon/></a></td>
<td>返回参数列表中的最小值</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/subtotal-%E5%87%BD%E6%95%B0-7b027003-f060-4ade-9040-e478765b9939" target="_blank" rel="noopener noreferrer">SUBTOTAL 函数<ExternalLinkIcon/></a></td>
<td>返回列表或数据库中的分类汇总</td>
</tr>
</tbody>
</table>
<h2 id="逻辑函数" tabindex="-1"><a class="header-anchor" href="#逻辑函数" aria-hidden="true">#</a> 逻辑函数</h2>
<table>
<thead>
<tr>
<th>函数</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/if-%E5%87%BD%E6%95%B0-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2" target="_blank" rel="noopener noreferrer">IF 函数<ExternalLinkIcon/></a></td>
<td>指定要执行的逻辑检测</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/ifs-%E5%87%BD%E6%95%B0-36329a26-37b2-467c-972b-4a39bd951d45" target="_blank" rel="noopener noreferrer">IFS 函数<ExternalLinkIcon/></a></td>
<td>检查是否满足一个或多个条件，且是否返回与第一个 TRUE 条件对应的值。</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/iferror-%E5%87%BD%E6%95%B0-c526fd07-caeb-47b8-8bb6-63f3e417f611" target="_blank" rel="noopener noreferrer">IFERROR 函数<ExternalLinkIcon/></a></td>
<td>如果公式的计算结果错误，则返回您指定的值；否则返回公式的结果</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/ifna-%E5%87%BD%E6%95%B0-6626c961-a569-42fc-a49d-79b4951fd461" target="_blank" rel="noopener noreferrer">IFNA 函数<ExternalLinkIcon/></a></td>
<td>如果该表达式解析为 #N/A，则返回指定值；否则返回该表达式的结果</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/and-%E5%87%BD%E6%95%B0-5f19b2e8-e1df-4408-897a-ce285a19e9d9" target="_blank" rel="noopener noreferrer">AND 函数<ExternalLinkIcon/></a></td>
<td>如果其所有参数均为 TRUE，则返回 TRUE</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/or-%E5%87%BD%E6%95%B0-7d17ad14-8700-4281-b308-00b131e22af0" target="_blank" rel="noopener noreferrer">OR 函数<ExternalLinkIcon/></a></td>
<td>如果任一参数为 TRUE，则返回 TRUE</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/not-%E5%87%BD%E6%95%B0-9cfc6011-a054-40c7-a140-cd4ba2d87d77" target="_blank" rel="noopener noreferrer">NOT 函数<ExternalLinkIcon/></a></td>
<td>对其参数的逻辑求反</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/true-%E5%87%BD%E6%95%B0-7652c6e3-8987-48d0-97cd-ef223246b3fb" target="_blank" rel="noopener noreferrer">TRUE 函数<ExternalLinkIcon/></a></td>
<td>返回逻辑值 TRUE</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/false-%E5%87%BD%E6%95%B0-2d58dfa5-9c03-4259-bf8f-f0ae14346904" target="_blank" rel="noopener noreferrer">FALSE 函数<ExternalLinkIcon/></a></td>
<td>返回逻辑值 FALSE</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/switch-%E5%87%BD%E6%95%B0-47ab33c0-28ce-4530-8a45-d532ec4aa25e" target="_blank" rel="noopener noreferrer">SWITCH 函数<ExternalLinkIcon/></a></td>
<td>根据值列表计算表达式，并返回与第一个匹配值对应的结果。 <br />如果不匹配，则可能返回可选默认值。</td>
</tr>
</tbody>
</table>
<h2 id="文本函数" tabindex="-1"><a class="header-anchor" href="#文本函数" aria-hidden="true">#</a> 文本函数</h2>
<table>
<thead>
<tr>
<th>函数</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/asc-%E5%87%BD%E6%95%B0-0b6abf1c-c663-4004-a964-ebc00b723266" target="_blank" rel="noopener noreferrer">ASC 函数<ExternalLinkIcon/></a></td>
<td>将字符串中的全角（双字节）英文字母或片假名更改为半角（单字节）字符</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/dbcs-%E5%87%BD%E6%95%B0-a4025e73-63d2-4958-9423-21a24794c9e5" target="_blank" rel="noopener noreferrer">DBCS 函数<ExternalLinkIcon/></a></td>
<td>将字符串中的半角（单字节）英文字母或片假名更改为全角（双字节）字符</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/char-%E5%87%BD%E6%95%B0-bbd249c8-b36e-4a91-8017-1c133f9b837a" target="_blank" rel="noopener noreferrer">CHAR 函数<ExternalLinkIcon/></a></td>
<td>返回由代码数字指定的字符</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/concat-%E5%87%BD%E6%95%B0-9b1a9a3f-94ff-41af-9736-694cbd6b4ca2" target="_blank" rel="noopener noreferrer">CONCAT 函数<ExternalLinkIcon/></a></td>
<td>将多个区域和/或字符串的文本组合起来，<br />但不提供分隔符或 IgnoreEmpty 参数。</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/concatenate-%E5%87%BD%E6%95%B0-8f8ae884-2ca8-4f7a-b093-75d702bea31d" target="_blank" rel="noopener noreferrer">CONCATENATE 函数<ExternalLinkIcon/></a></td>
<td>将几个文本项合并为一个文本项</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/dollar-%E5%87%BD%E6%95%B0-a6cd05d9-9740-4ad3-a469-8109d18ff611" target="_blank" rel="noopener noreferrer">DOLLAR 函数<ExternalLinkIcon/></a></td>
<td>使用 ￥（人民币）货币格式将数字转换为文本</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/exact-%E5%87%BD%E6%95%B0-d3087698-fc15-4a15-9631-12575cf29926" target="_blank" rel="noopener noreferrer">EXACT 函数<ExternalLinkIcon/></a></td>
<td>检查两个文本值是否相同</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/fixed-%E5%87%BD%E6%95%B0-ffd5723c-324c-45e9-8b96-e41be2a8274a" target="_blank" rel="noopener noreferrer">FIXED 函数<ExternalLinkIcon/></a></td>
<td>将数字格式设置为具有固定小数位数的文本</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/find%E3%80%81findb-%E5%87%BD%E6%95%B0-c7912941-af2a-4bdf-a553-d0d89b0a0628" target="_blank" rel="noopener noreferrer">FIND、FINDB 函数<ExternalLinkIcon/></a></td>
<td>在一个文本值中查找另一个文本值（区分大小写）</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/left%E3%80%81leftb-%E5%87%BD%E6%95%B0-9203d2d2-7960-479b-84c6-1ea52b99640c" target="_blank" rel="noopener noreferrer">LEFT、LEFTB 函数<ExternalLinkIcon/></a></td>
<td>返回文本值中最左边的字符</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/right%E3%80%81rightb-%E5%87%BD%E6%95%B0-240267ee-9afa-4639-a02b-f19e1786cf2f" target="_blank" rel="noopener noreferrer">RIGHT、RIGHTB 函数<ExternalLinkIcon/></a></td>
<td>返回文本值中最右边的字符</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/mid%E3%80%81midb-%E5%87%BD%E6%95%B0-d5f9e25c-d7d6-472e-b568-4ecb12433028" target="_blank" rel="noopener noreferrer">MID、MIDB 函数<ExternalLinkIcon/></a></td>
<td>从文本字符串中的指定位置起返回特定个数的字符</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/len%E3%80%81lenb-%E5%87%BD%E6%95%B0-29236f94-cedc-429d-affd-b5e33d2c67cb" target="_blank" rel="noopener noreferrer">LEN、LENB 函数<ExternalLinkIcon/></a></td>
<td>返回文本值中最左边的字符</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/lower-%E5%87%BD%E6%95%B0-3f21df02-a80c-44b2-afaf-81358f9fdeb4" target="_blank" rel="noopener noreferrer">LOWER 函数<ExternalLinkIcon/></a></td>
<td>将文本转换为小写</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/upper-%E5%87%BD%E6%95%B0-c11f29b3-d1a3-4537-8df6-04d0049963d6" target="_blank" rel="noopener noreferrer">UPPER 函数<ExternalLinkIcon/></a></td>
<td>将文本转换为大写形式</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/proper-%E5%87%BD%E6%95%B0-52a5a283-e8b2-49be-8506-b2887b889f94" target="_blank" rel="noopener noreferrer">PROPER 函数<ExternalLinkIcon/></a></td>
<td>将文本值的每个字的首字母大写</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/phonetic-%E5%87%BD%E6%95%B0-9a329dac-0c0f-42f8-9a55-639086988554" target="_blank" rel="noopener noreferrer">PHONETIC 函数<ExternalLinkIcon/></a></td>
<td>提取文本字符串中的拼音（汉字注音）字符</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/replace%E3%80%81replaceb-%E5%87%BD%E6%95%B0-8d799074-2425-4a8a-84bc-82472868878a" target="_blank" rel="noopener noreferrer">REPLACE、REPLACEB 函数<ExternalLinkIcon/></a></td>
<td>替换文本中的字符</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/search%E3%80%81searchb-%E5%87%BD%E6%95%B0-9ab04538-0e55-4719-a72e-b6f54513b495" target="_blank" rel="noopener noreferrer">SEARCH、SEARCHB 函数<ExternalLinkIcon/></a></td>
<td>在一个文本值中查找另一个文本值（不区分大小写）</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/text-%E5%87%BD%E6%95%B0-20d5ac4d-7b94-49fd-bb38-93d29371225c" target="_blank" rel="noopener noreferrer">TEXT 函数<ExternalLinkIcon/></a></td>
<td>设置数字格式并将其转换为文本</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/textjoin-%E5%87%BD%E6%95%B0-357b449a-ec91-49d0-80c3-0e8fc845691c" target="_blank" rel="noopener noreferrer">TEXTJOIN 函数<ExternalLinkIcon/></a></td>
<td>将多个区域和/或字符串的文本组合起来，并包括你在要组合的<br />各文本值之间指定的分隔符。 如果分隔符是空的文本字符串，<br />则此函数将有效连接这些区域。</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/substitute-%E5%87%BD%E6%95%B0-6434944e-a904-4336-a9b0-1e58df3bc332" target="_blank" rel="noopener noreferrer">SUBSTITUTE 函数<ExternalLinkIcon/></a></td>
<td>在文本字符串中用新文本替换旧文本</td>
</tr>
</tbody>
</table>
<h2 id="数学函数" tabindex="-1"><a class="header-anchor" href="#数学函数" aria-hidden="true">#</a> 数学函数</h2>
<table>
<thead>
<tr>
<th>函数</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/abs-%E5%87%BD%E6%95%B0-3420200f-5628-4e8c-99da-c99d7c87713c" target="_blank" rel="noopener noreferrer">ABS 函数<ExternalLinkIcon/></a></td>
<td>返回数字的绝对值</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/int-%E5%87%BD%E6%95%B0-a6c4af9e-356d-4369-ab6a-cb1fd9d343ef" target="_blank" rel="noopener noreferrer">INT 函数<ExternalLinkIcon/></a></td>
<td>将数字向下舍入到最接近的整数</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/mod-%E5%87%BD%E6%95%B0-9b6cd169-b6ee-406a-a97b-edf2a9dc24f3" target="_blank" rel="noopener noreferrer">MOD 函数<ExternalLinkIcon/></a></td>
<td>返回除法的余数</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/pi-%E5%87%BD%E6%95%B0-264199d0-a3ba-46b8-975a-c4a04608989b" target="_blank" rel="noopener noreferrer">PI 函数<ExternalLinkIcon/></a></td>
<td>返回 pi 的值</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/rand-%E5%87%BD%E6%95%B0-4cbfa695-8869-4788-8d90-021ea9f5be73" target="_blank" rel="noopener noreferrer">RAND 函数<ExternalLinkIcon/></a></td>
<td>返回 0 和 1 之间的一个随机数</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/randbetween-%E5%87%BD%E6%95%B0-4cc7f0d1-87dc-4eb7-987f-a469ab381685" target="_blank" rel="noopener noreferrer">RANDBETWEEN 函数<ExternalLinkIcon/></a></td>
<td>返回位于两个指定数之间的一个随机数</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/round-%E5%87%BD%E6%95%B0-c018c5d8-40fb-4053-90b1-b3e7f61a213c" target="_blank" rel="noopener noreferrer">ROUND 函数<ExternalLinkIcon/></a></td>
<td>将数字按指定位数舍入</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/rounddown-%E5%87%BD%E6%95%B0-2ec94c73-241f-4b01-8c6f-17e6d7968f53" target="_blank" rel="noopener noreferrer">ROUNDDOWN 函数<ExternalLinkIcon/></a></td>
<td>向绝对值减小的方向舍入数字</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/roundup-%E5%87%BD%E6%95%B0-f8bc9b23-e795-47db-8703-db171d0c42a7" target="_blank" rel="noopener noreferrer">ROUNDUP 函数<ExternalLinkIcon/></a></td>
<td>向绝对值增大的方向舍入数字</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/sum-%E5%87%BD%E6%95%B0-043e1c7d-7726-4e80-8f32-07b23e057f89" target="_blank" rel="noopener noreferrer">SUM 函数<ExternalLinkIcon/></a></td>
<td>求参数的和</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/sumif-%E5%87%BD%E6%95%B0-169b8c99-c05c-4483-a712-1697a653039b" target="_blank" rel="noopener noreferrer">SUMIF 函数<ExternalLinkIcon/></a></td>
<td>按给定条件对指定单元格求和</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/sumifs-%E5%87%BD%E6%95%B0-c9e748f5-7ea7-455d-9406-611cebce642b" target="_blank" rel="noopener noreferrer">SUMIFS 函数<ExternalLinkIcon/></a></td>
<td>在区域中添加满足多个条件的单元格</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/sumproduct-%E5%87%BD%E6%95%B0-16753e75-9f68-4874-94ac-4d2145a2fd2e" target="_blank" rel="noopener noreferrer">SUMPRODUCT 函数<ExternalLinkIcon/></a></td>
<td>返回对应的数组元素的乘积和</td>
</tr>
</tbody>
</table>
<h2 id="查找引用函数" tabindex="-1"><a class="header-anchor" href="#查找引用函数" aria-hidden="true">#</a> 查找引用函数</h2>
<table>
<thead>
<tr>
<th>函数</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/address-%E5%87%BD%E6%95%B0-d0c26c0d-3991-446b-8de4-ab46431d4f89" target="_blank" rel="noopener noreferrer">ADDRESS 函数<ExternalLinkIcon/></a></td>
<td>以文本形式将引用值返回到工作表的单个单元格</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/choose-%E5%87%BD%E6%95%B0-fc5c184f-cb62-4ec7-a46e-38653b98f5bc" target="_blank" rel="noopener noreferrer">CHOOSE 函数<ExternalLinkIcon/></a></td>
<td>从值的列表中选择值</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/filter-%E5%87%BD%E6%95%B0-f4f7cb66-82eb-4767-8f7c-4877ad80c759" target="_blank" rel="noopener noreferrer">FILTER 函数<ExternalLinkIcon/></a></td>
<td>FILTER 函数可以基于定义的条件筛选一系列数据。</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/index-%E5%87%BD%E6%95%B0-a5dcf0dd-996d-40a4-a822-b56b061328bd" target="_blank" rel="noopener noreferrer">INDEX 函数<ExternalLinkIcon/></a></td>
<td>使用索引从引用或数组中选择值</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/indirect-%E5%87%BD%E6%95%B0-474b3a3a-8a26-4f44-b491-92b6306fa261" target="_blank" rel="noopener noreferrer">INDIRECT 函数<ExternalLinkIcon/></a></td>
<td>返回由文本值指定的引用</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/lookup-%E5%87%BD%E6%95%B0-446d94af-663b-451d-8251-369d5e3864cb" target="_blank" rel="noopener noreferrer">LOOKUP 函数<ExternalLinkIcon/></a></td>
<td>在向量或数组中查找值</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/vlookup-%E5%87%BD%E6%95%B0-0bbc8083-26fe-4963-8ab8-93a18ad188a1" target="_blank" rel="noopener noreferrer">VLOOKUP 函数<ExternalLinkIcon/></a></td>
<td>在数组第一列中查找，然后在行之间移动以返回单元格的值</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/match-%E5%87%BD%E6%95%B0-e8dffd45-c762-47d6-bf89-533f4a37673a" target="_blank" rel="noopener noreferrer">MATCH 函数<ExternalLinkIcon/></a></td>
<td>在引用或数组中查找值</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/offset-%E5%87%BD%E6%95%B0-c8de19ae-dd79-4b9b-a14e-b4d906d11b66" target="_blank" rel="noopener noreferrer">OFFSET 函数<ExternalLinkIcon/></a></td>
<td>从给定引用中返回引用偏移量</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/sort-%E5%87%BD%E6%95%B0-22f63bd0-ccc8-492f-953d-c20e8e44b86c" target="_blank" rel="noopener noreferrer">SORT 函数<ExternalLinkIcon/></a></td>
<td>对区域或数组的内容进行排序</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/row-%E5%87%BD%E6%95%B0-3a63b74a-c4d0-4093-b49a-e76eb49a6d8d" target="_blank" rel="noopener noreferrer">ROW 函数<ExternalLinkIcon/></a></td>
<td>返回引用的行号</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/rows-%E5%87%BD%E6%95%B0-b592593e-3fc2-47f2-bec1-bda493811597" target="_blank" rel="noopener noreferrer">ROWS 函数<ExternalLinkIcon/></a></td>
<td>返回引用中的行数</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/column-%E5%87%BD%E6%95%B0-44e8c754-711c-4df3-9da4-47a55042554b" target="_blank" rel="noopener noreferrer">COLUMN 函数<ExternalLinkIcon/></a></td>
<td>返回引用的列号</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/columns-%E5%87%BD%E6%95%B0-4e8e7b4e-e603-43e8-b177-956088fa48ca" target="_blank" rel="noopener noreferrer">COLUMNS 函数<ExternalLinkIcon/></a></td>
<td>返回引用中包含的列数</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/transpose-%E5%87%BD%E6%95%B0-ed039415-ed8a-4a81-93e9-4b6dfac76027" target="_blank" rel="noopener noreferrer">TRANSPOSE 函数<ExternalLinkIcon/></a></td>
<td>返回数组的转置</td>
</tr>
</tbody>
</table>
<h2 id="日期时间函数" tabindex="-1"><a class="header-anchor" href="#日期时间函数" aria-hidden="true">#</a> 日期时间函数</h2>
<table>
<thead>
<tr>
<th>函数</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/date-%E5%87%BD%E6%95%B0-e36c0c8c-4104-49da-ab83-82328b832349" target="_blank" rel="noopener noreferrer">DATE 函数<ExternalLinkIcon/></a></td>
<td>返回特定日期的序列号</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/year-%E5%87%BD%E6%95%B0-c64f017a-1354-490d-981f-578e8ec8d3b9" target="_blank" rel="noopener noreferrer">YEAR 函数<ExternalLinkIcon/></a></td>
<td>将序列号转换为年</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/month-%E5%87%BD%E6%95%B0-579a2881-199b-48b2-ab90-ddba0eba86e8" target="_blank" rel="noopener noreferrer">MONTH 函数<ExternalLinkIcon/></a></td>
<td>将序列号转换为月</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/day-%E5%87%BD%E6%95%B0-8a7d1cbb-6c7d-4ba1-8aea-25c134d03101" target="_blank" rel="noopener noreferrer">DAY 函数<ExternalLinkIcon/></a></td>
<td>将序列号转换为月份日期</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/time-%E5%87%BD%E6%95%B0-9a5aff99-8f7d-4611-845e-747d0b8d5457" target="_blank" rel="noopener noreferrer">TIME 函数<ExternalLinkIcon/></a></td>
<td>返回特定时间的序列号</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/hour-%E5%87%BD%E6%95%B0-a3afa879-86cb-4339-b1b5-2dd2d7310ac7" target="_blank" rel="noopener noreferrer">HOUR 函数<ExternalLinkIcon/></a></td>
<td>将序列号转换为小时</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/minute-%E5%87%BD%E6%95%B0-af728df0-05c4-4b07-9eed-a84801a60589" target="_blank" rel="noopener noreferrer">MINUTE 函数<ExternalLinkIcon/></a></td>
<td>将序列号转换为分钟</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/second-%E5%87%BD%E6%95%B0-740d1cfc-553c-4099-b668-80eaa24e8af1" target="_blank" rel="noopener noreferrer">SECOND 函数<ExternalLinkIcon/></a></td>
<td>将序列号转换为秒</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/today-%E5%87%BD%E6%95%B0-5eb3078d-a82c-4736-8930-2f51a028fdd9" target="_blank" rel="noopener noreferrer">TODAY 函数<ExternalLinkIcon/></a></td>
<td>返回今天日期的序列号</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/now-%E5%87%BD%E6%95%B0-3337fd29-145a-4347-b2e6-20c904739c46" target="_blank" rel="noopener noreferrer">NOW 函数<ExternalLinkIcon/></a></td>
<td>返回当前日期和时间的序列号</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/weekday-%E5%87%BD%E6%95%B0-60e44483-2ed1-439f-8bd0-e404c190949a" target="_blank" rel="noopener noreferrer">WEEKDAY 函数<ExternalLinkIcon/></a></td>
<td>将序列号转换为星期日期</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/weeknum-%E5%87%BD%E6%95%B0-e5c43a03-b4ab-426c-b411-b18c13c75340" target="_blank" rel="noopener noreferrer">WEEKNUM 函数<ExternalLinkIcon/></a></td>
<td>将序列号转换为代表该星期为一年中第几周的数字</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/datedif-%E5%87%BD%E6%95%B0-25dba1a4-2812-480b-84dd-8b32a451b35c" target="_blank" rel="noopener noreferrer">DATEDIF 函数<ExternalLinkIcon/></a></td>
<td>计算两个日期之间的天数、月数或年数。 此函数在用于计算年龄的公式中很有用。</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/days-%E5%87%BD%E6%95%B0-57740535-d549-4395-8728-0f07bff0b9df" target="_blank" rel="noopener noreferrer">DAYS 函数<ExternalLinkIcon/></a></td>
<td>返回两个日期之间的天数</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/edate-%E5%87%BD%E6%95%B0-3c920eb2-6e66-44e7-a1f5-753ae47ee4f5" target="_blank" rel="noopener noreferrer">EDATE 函数<ExternalLinkIcon/></a></td>
<td>返回用于表示开始日期之前或之后月数的日期的序列号</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/eomonth-%E5%87%BD%E6%95%B0-7314ffa1-2bc9-4005-9d66-f49db127d628" target="_blank" rel="noopener noreferrer">EOMONTH 函数<ExternalLinkIcon/></a></td>
<td>返回指定月数之前或之后的月份的最后一天的序列号</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/networkdays-%E5%87%BD%E6%95%B0-48e717bf-a7a3-495f-969e-5005e3eb18e7" target="_blank" rel="noopener noreferrer">NETWORKDAYS 函数<ExternalLinkIcon/></a></td>
<td>返回两个日期间的完整工作日的天数</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/networkdays-intl-%E5%87%BD%E6%95%B0-a9b26239-4f20-46a1-9ab8-4e925bfd5e28" target="_blank" rel="noopener noreferrer">NETWORKDAYS.INTL 函数<ExternalLinkIcon/></a></td>
<td>返回两个日期之间的完整工作日的天数（使用参数指明周末有几天并指明是哪几天）</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/workday-%E5%87%BD%E6%95%B0-f764a5b7-05fc-4494-9486-60d494efbf33" target="_blank" rel="noopener noreferrer">WORKDAY 函数<ExternalLinkIcon/></a></td>
<td>返回指定的若干个工作日之前或之后的日期的序列号</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/workday-intl-%E5%87%BD%E6%95%B0-a378391c-9ba7-4678-8a39-39611a9bf81d" target="_blank" rel="noopener noreferrer">WORKDAY.INTL 函数<ExternalLinkIcon/></a></td>
<td>返回日期在指定的工作日天数之前或之后的序列号（使用参数指明周末有几天并指明是哪几天）</td>
</tr>
</tbody>
</table>
<h2 id="信息函数" tabindex="-1"><a class="header-anchor" href="#信息函数" aria-hidden="true">#</a> 信息函数</h2>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/cell-%E5%87%BD%E6%95%B0-51bd39a5-f338-4dbe-a33f-955d67c2b2cf" target="_blank" rel="noopener noreferrer">CELL 函数<ExternalLinkIcon/></a></td>
<td>返回有关单元格格式、位置或内容的信息</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/is-%E5%87%BD%E6%95%B0-0f2d7971-6019-40a0-a171-f2d869135665" target="_blank" rel="noopener noreferrer">ISBLANK 函数<ExternalLinkIcon/></a></td>
<td>如果值为空，则返回 TRUE</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/is-%E5%87%BD%E6%95%B0-0f2d7971-6019-40a0-a171-f2d869135665" target="_blank" rel="noopener noreferrer">ISERR 函数<ExternalLinkIcon/></a></td>
<td>如果值为除 #N/A 以外的任何错误值，则返回 TRUE</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/is-%E5%87%BD%E6%95%B0-0f2d7971-6019-40a0-a171-f2d869135665" target="_blank" rel="noopener noreferrer">ISERROR 函数<ExternalLinkIcon/></a></td>
<td>如果值为任何错误值，则返回 TRUE</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/iseven-%E5%87%BD%E6%95%B0-aa15929a-d77b-4fbb-92f4-2f479af55356" target="_blank" rel="noopener noreferrer">ISEVEN 函数<ExternalLinkIcon/></a></td>
<td>如果数字为偶数，则返回 TRUE</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/is-%E5%87%BD%E6%95%B0-0f2d7971-6019-40a0-a171-f2d869135665" target="_blank" rel="noopener noreferrer">ISODD 函数<ExternalLinkIcon/></a></td>
<td>如果数字为奇数，则返回 TRUE</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/is-%E5%87%BD%E6%95%B0-0f2d7971-6019-40a0-a171-f2d869135665" target="_blank" rel="noopener noreferrer">ISLOGICAL 函数<ExternalLinkIcon/></a></td>
<td>如果值为逻辑值，则返回 TRUE</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/is-%E5%87%BD%E6%95%B0-0f2d7971-6019-40a0-a171-f2d869135665" target="_blank" rel="noopener noreferrer">ISNA 函数<ExternalLinkIcon/></a></td>
<td>如果值为错误值 #N/A，则返回 TRUE</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/is-%E5%87%BD%E6%95%B0-0f2d7971-6019-40a0-a171-f2d869135665" target="_blank" rel="noopener noreferrer">ISNUMBER 函数<ExternalLinkIcon/></a></td>
<td>如果值为数字，则返回 TRUE</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/is-%E5%87%BD%E6%95%B0-0f2d7971-6019-40a0-a171-f2d869135665" target="_blank" rel="noopener noreferrer">ISTEXT 函数<ExternalLinkIcon/></a></td>
<td>如果值为文本，则返回 TRUE</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/n-%E5%87%BD%E6%95%B0-a624cad1-3635-4208-b54a-29733d1278c9" target="_blank" rel="noopener noreferrer">N 函数<ExternalLinkIcon/></a></td>
<td>返回转换为数字的值</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/t-%E5%87%BD%E6%95%B0-fb83aeec-45e7-4924-af95-53e073541228" target="_blank" rel="noopener noreferrer">T 函数<ExternalLinkIcon/></a></td>
<td>将参数转换为文本</td>
</tr>
<tr>
<td><a href="https://support.microsoft.com/zh-cn/office/type-%E5%87%BD%E6%95%B0-45b4e688-4bc3-48b3-a105-ffa892995899" target="_blank" rel="noopener noreferrer">TYPE 函数<ExternalLinkIcon/></a></td>
<td>返回表示值的数据类型的数字</td>
</tr>
</tbody>
</table>
<p>更多的函数分类及其详细用法，请参考<a href="https://support.microsoft.com/zh-cn/office/excel-%E5%87%BD%E6%95%B0%EF%BC%88%E6%8C%89%E7%B1%BB%E5%88%AB%E5%88%97%E5%87%BA%EF%BC%89-5f91f4e9-7b42-46d2-9bd1-63f26a86c0eb" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a></p>
</template>
