<template><h2 id="数组介绍" tabindex="-1"><a class="header-anchor" href="#数组介绍" aria-hidden="true">#</a> 数组介绍</h2>
<p>一个变量只能存一个值，但是现实中又有很多值需要存储，那么变量就有些拘谨了。比如做一个学员信息表，一个班 50 个人，每个人 6 条信息，我们需要定义 300 个变量才能完成。恐怖恐怖，这只是一个班的学生，如果一个学校呢？一个市呢？......我想静静了！</p>
<h2 id="基本数组" tabindex="-1"><a class="header-anchor" href="#基本数组" aria-hidden="true">#</a> 基本数组</h2>
<p>数组可以让用户一次赋予多个值，需要读取数据时只需要通过索引调用就可以方便读出了。</p>
<h3 id="数组语法" tabindex="-1"><a class="header-anchor" href="#数组语法" aria-hidden="true">#</a> 数组语法</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>数组名称<span class="token operator">=</span><span class="token punctuation">(</span>元素1 元素2 元素3 <span class="token punctuation">..</span>.<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="数组读出" tabindex="-1"><a class="header-anchor" href="#数组读出" aria-hidden="true">#</a> 数组读出</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token variable">${数组名称<span class="token punctuation">[</span>索引<span class="token punctuation">]</span>}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>索引是元素在数组中的排队编号，默认索引是从 0 开始</p>
<h3 id="数组赋值" tabindex="-1"><a class="header-anchor" href="#数组赋值" aria-hidden="true">#</a> 数组赋值</h3>
<p>方法一：一次赋一个值</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># array0[0]='tom'</span>
<span class="token comment"># array0[1]='jarry'</span>
<span class="token comment"># array0[2]='natasha'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>方法二：一次赋多个值</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># array1=(tom jaky alice)</span>
<span class="token comment"># array2=(`ls ~`)</span>
<span class="token comment"># array3=(`cat /etc/passwd`)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="查看数组" tabindex="-1"><a class="header-anchor" href="#查看数组" aria-hidden="true">#</a> 查看数组</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># declare -a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>例如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># declare -a</span>
<span class="token builtin class-name">declare</span> -a <span class="token assign-left variable">array0</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"tom"</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"jarry"</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"natasha"</span><span class="token punctuation">)</span>
<span class="token builtin class-name">declare</span> -a <span class="token assign-left variable">array1</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"pear"</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"apple"</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"orange"</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"peach"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="访问数组元素" tabindex="-1"><a class="header-anchor" href="#访问数组元素" aria-hidden="true">#</a> 访问数组元素</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># echo ${array1[0]}					访问数组中的第一个元素</span>
<span class="token comment"># echo ${array1[*]}					访问数组中所有有元素</span>
<span class="token comment"># echo ${array1[@]}					访问数组中所有有元素</span>
<span class="token comment"># echo ${#array1[@]}				统计数组元素的个数</span>
<span class="token comment"># echo ${!array1[@]}				获取数组元素的索引</span>
<span class="token comment"># echo ${array1[@]:1}				从数组下标1开始到最后一个元素</span>
<span class="token comment"># echo ${array1[@]:1:3}				从数组下标1开始，访问3个元素</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="遍历数组" tabindex="-1"><a class="header-anchor" href="#遍历数组" aria-hidden="true">#</a> 遍历数组</h3>
<p>方法一：通过数组元素进行逐个遍历</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo ${array1[0]}</span>
peay
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo ${array1[1]}</span>
apple
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo ${array1[2]}</span>
orange
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo ${array1[3]}</span>
peach
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>方法二：通过数组元素的索引进行循环遍历</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">fruits</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"pear"</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"apple"</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"orange"</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"peach"</span><span class="token punctuation">)</span>
<span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>${#fruits[@]}<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
<span class="token builtin class-name">echo</span> <span class="token variable">${fruits<span class="token punctuation">[</span>$i<span class="token punctuation">]</span>}</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="关联数组" tabindex="-1"><a class="header-anchor" href="#关联数组" aria-hidden="true">#</a> 关联数组</h2>
<p>关联数组可以允许用户自定义数组的索引,这样使用起来更加方便、高效.</p>
<h3 id="定义关联数组" tabindex="-1"><a class="header-anchor" href="#定义关联数组" aria-hidden="true">#</a> 定义关联数组</h3>
<p>声明关联数组变量</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># declare -a ass_array1</span>
<span class="token comment"># declare -a ass_array2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="关联数组赋值" tabindex="-1"><a class="header-anchor" href="#关联数组赋值" aria-hidden="true">#</a> 关联数组赋值</h3>
<p>方法一：一次赋一个值</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># ass_array1[index1]=pear</span>
<span class="token comment"># ass_array1[index2]=apple</span>
<span class="token comment"># ass_array1[index3]=orange</span>
<span class="token comment"># ass_array1[index4]=peach</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>方法二：一次赋多个值</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># ass_array2=([index1]=tom [index2]=jack [index3]=alice [index4]='bash shell')</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>查看数组</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># declare -a</span>
<span class="token assign-left variable">ass_array1</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">[</span>index1<span class="token punctuation">]</span><span class="token operator">=</span>pear <span class="token punctuation">[</span>index2<span class="token punctuation">]</span><span class="token operator">=</span>apple <span class="token punctuation">[</span>index3<span class="token punctuation">]</span><span class="token operator">=</span>orange <span class="token punctuation">[</span>index4<span class="token punctuation">]</span><span class="token operator">=</span>beach<span class="token punctuation">)</span>
<span class="token assign-left variable">ass_array2</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">[</span>index1<span class="token punctuation">]</span><span class="token operator">=</span>tom <span class="token punctuation">[</span>index2<span class="token punctuation">]</span><span class="token operator">=</span>jack <span class="token punctuation">[</span>index3<span class="token punctuation">]</span><span class="token operator">=</span>alice <span class="token punctuation">[</span>index4<span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">'bash shell'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>访问数组元素</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># echo ${ass_array2[index2]}			访问数组中的第二个元素</span>
<span class="token comment"># echo ${ass_array2[@]}					访问数组中所有元素</span>
<span class="token comment"># echo ${#ass_array2[@]}				获取数组元素的个数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>遍历数组</li>
</ul>
<p>针对关联数组可以通过数组元素的索引进行遍历</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo ${ass_array2[index1]}</span>
tom
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo ${ass_array2[index2]}</span>
jack
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo ${ass_array2[index3]}</span>
alice
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo ${ass_array2[index4]}</span>
<span class="token function">bash</span> shell
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="案例分享-学员信息系统" tabindex="-1"><a class="header-anchor" href="#案例分享-学员信息系统" aria-hidden="true">#</a> 案例分享---学员信息系统</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">3</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span>
<span class="token keyword">do</span>
<span class="token builtin class-name">read</span> -p <span class="token string">"输入第<span class="token variable"><span class="token variable">$((</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token variable">))</span></span>个人名:"</span> name<span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span>
<span class="token builtin class-name">read</span> -p <span class="token string">"输入第<span class="token variable"><span class="token variable">$((</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token variable">))</span></span>个年龄:"</span> age<span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span>
<span class="token builtin class-name">read</span> -p <span class="token string">"输入第<span class="token variable"><span class="token variable">$((</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token variable">))</span></span>个性别:"</span> name<span class="token punctuation">[</span><span class="token variable">$i</span><span class="token punctuation">]</span>
<span class="token keyword">done</span>
<span class="token function">clear</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\t">\t</span><span class="token entity" title="\t">\t</span><span class="token entity" title="\t">\t</span><span class="token entity" title="\t">\t</span>学员查询系统"</span>
<span class="token keyword">while</span> <span class="token builtin class-name">:</span>
<span class="token keyword">do</span>
<span class="token assign-left variable">cp</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\t">\t</span><span class="token entity" title="\t">\t</span><span class="token entity" title="\t">\t</span><span class="token entity" title="\t">\t</span>学员查询系统"</span>
<span class="token builtin class-name">read</span> -p <span class="token string">"输入要查询的姓名："</span> xm
<span class="token punctuation">[</span> <span class="token variable">$xm</span> <span class="token operator">==</span> <span class="token string">"Q"</span> <span class="token punctuation">]</span><span class="token operator">&amp;&amp;</span><span class="token builtin class-name">exit</span>
<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">3</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$xm</span>"</span> <span class="token operator">==</span> <span class="token string">"<span class="token variable">${name<span class="token punctuation">[</span>$i<span class="token punctuation">]</span>}</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
<span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">${name<span class="token punctuation">[</span>$i<span class="token punctuation">]</span>}</span> <span class="token variable">${age<span class="token punctuation">[</span>$i<span class="token punctuation">]</span>}</span> <span class="token variable">${gender<span class="token punctuation">[</span>$i<span class="token punctuation">]</span>}</span>"</span>
<span class="token assign-left variable">cp</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">fi</span>
<span class="token keyword">done</span>
<span class="token punctuation">[</span> <span class="token variable">$cp</span> -eq <span class="token number">0</span> <span class="token punctuation">]</span><span class="token operator">&amp;&amp;</span><span class="token builtin class-name">echo</span> <span class="token string">"not found student"</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></template>
