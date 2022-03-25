import{_ as s,a as n}from"./app.893f8b81.js";const a={},e=n(`<p>\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u4F7F\u7528 Docker\uFF0C\u5F80\u5F80\u9700\u8981\u5BF9\u6570\u636E\u8FDB\u884C\u6301\u4E45\u5316\uFF0C\u6216\u8005\u9700\u8981\u5728\u591A\u4E2A\u5BB9\u5668\u4E4B\u95F4\u8FDB\u884C\u6570\u636E\u5171\u4EAB\uFF0C\u8FD9\u5FC5\u7136\u6D89\u53CA\u5BB9\u5668\u7684\u6570\u636E\u7BA1\u7406\u64CD\u4F5C\u3002</p><p>\u5BB9\u5668\u4E2D\u7684\u7BA1\u7406\u6570\u636E\u4E3B\u8981\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A</p><ul><li><p><strong>\u6570\u636E\u5377\uFF08Data Volumes\uFF09</strong>\uFF1A\u5BB9\u5668\u5185\u6570\u636E\u76F4\u63A5\u6620\u5C04\u5230\u672C\u5730\u4E3B\u673A\u73AF\u5883\uFF1B</p></li><li><p><strong>\u6570\u636E\u5377\u5BB9\u5668\uFF08Data Volume Containers\uFF09</strong>\uFF1A\u4F7F\u7528\u7279\u5B9A\u5BB9\u5668\u7EF4\u62A4\u6570\u636E\u5377\u3002</p></li></ul><p>\u5C06\u9996\u5148\u4ECB\u7ECD\u5982\u4F55\u5728\u5BB9\u5668\u5185\u521B\u5EFA\u6570\u636E\u5377\uFF0C\u5E76\u4E14\u628A\u672C\u5730\u7684\u76EE\u5F55\u6216\u6587\u4EF6\u6302\u8F7D\u5230\u5BB9\u5668\u5185\u7684\u6570\u636E\u5377\u4E2D\u3002\u63A5\u4E0B\u6765\uFF0C\u4ECB\u7ECD\u5982\u4F55\u4F7F\u7528\u6570\u636E\u5377\u5BB9\u5668\u5728\u5BB9\u5668\u548C\u4E3B\u673A\u3001\u5BB9\u5668\u548C\u5BB9\u5668\u4E4B\u95F4\u5171\u4EAB\u6570\u636E\uFF0C\u5E76\u5B9E\u73B0\u6570\u636E\u7684\u5907\u4EFD\u548C\u6062\u590D\u3002</p><h2 id="\u6570\u636E\u5377" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5377" aria-hidden="true">#</a> \u6570\u636E\u5377</h2><p>\u6570\u636E\u5377\uFF08Data Volumes\uFF09\u662F\u4E00\u4E2A\u53EF\u4F9B\u5BB9\u5668\u4F7F\u7528\u7684\u7279\u6B8A\u76EE\u5F55\uFF0C\u5B83\u5C06\u4E3B\u673A\u64CD\u4F5C\u7CFB\u7EDF\u76EE\u5F55\u76F4\u63A5\u6620\u5C04\u8FDB\u5BB9\u5668\uFF0C\u7C7B\u4F3C\u4E8E Linux \u4E2D\u7684 <code>mount</code> \u884C\u4E3A\u3002</p><p>\u6570\u636E\u5377\u53EF\u4EE5\u63D0\u4F9B\u5F88\u591A\u6709\u7528\u7684\u7279\u6027\uFF1A</p><ul><li>\u6570\u636E\u5377\u53EF\u4EE5\u5728\u5BB9\u5668\u4E4B\u95F4\u5171\u4EAB\u548C\u91CD\u7528\uFF0C\u5BB9\u5668\u95F4\u4F20\u9012\u6570\u636E\u5C06\u53D8\u5F97\u9AD8\u6548\u4E0E\u65B9\u4FBF\uFF1B</li><li>\u5BF9\u6570\u636E\u5377\u5185\u6570\u636E\u7684\u4FEE\u6539\u4F1A\u7ACB\u9A6C\u751F\u6548\uFF0C\u65E0\u8BBA\u662F\u5BB9\u5668\u5185\u64CD\u4F5C\u8FD8\u662F\u672C\u5730\u64CD\u4F5C\uFF1B</li><li>\u5BF9\u6570\u636E\u5377\u7684\u66F4\u65B0\u4E0D\u4F1A\u5F71\u54CD\u955C\u50CF\uFF0C\u89E3\u8026\u5F00\u5E94\u7528\u548C\u6570\u636E \uFF1B</li><li>\u5377\u4F1A\u4E00\u76F4\u5B58\u5728\uFF0C\u76F4\u5230\u6CA1\u6709\u5BB9\u5668\u4F7F\u7528\uFF0C\u53EF\u4EE5\u5B89\u5168\u5730\u5378\u8F7D\u5B83\u3002</li></ul><h3 id="_1\u3001\u521B\u5EFA\u6570\u636E\u5377" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u521B\u5EFA\u6570\u636E\u5377" aria-hidden="true">#</a> 1\u3001\u521B\u5EFA\u6570\u636E\u5377</h3><p>Docker \u63D0\u4F9B\u4E86 <code>volume</code> \u5B50\u547D\u4EE4\u6765\u7BA1\u7406\u6570\u636E\u5377\uFF0C\u5982\u4E0B\u547D\u4EE4\u53EF\u4EE5\u5FEB\u901F\u5728\u672C\u5730\u521B\u5EFA\u4E00\u4E2A\u6570\u636E\u5377\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> volume create -d <span class="token builtin class-name">local</span> <span class="token builtin class-name">test</span>
<span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6B64\u65F6\uFF0C<code>docker volume ls</code> \u547D\u4EE4\u53EF\u4EE5\u67E5\u770B\u5DF2\u6709\u7684\u6570\u636E\u5377\uFF0C<code>docker inspect test</code> \u53EF\u4EE5\u67E5\u770B\u6570\u636E\u5377 test \u7684\u5177\u4F53\u4FE1\u606F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker</span> volume <span class="token function">ls</span>
DRIVER    VOLUME NAME
<span class="token builtin class-name">local</span>     <span class="token builtin class-name">test</span>
$ <span class="token function">docker</span> inspect <span class="token builtin class-name">test</span> 
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;CreatedAt&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2021-09-22T15:06:05+08:00&quot;</span>,
        <span class="token string">&quot;Driver&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;local&quot;</span>,
        <span class="token string">&quot;Labels&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>,
        <span class="token string">&quot;Mountpoint&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;/var/lib/docker/volumes/test/_data&quot;</span>,
        <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;test&quot;</span>,
        <span class="token string">&quot;Options&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>,
        <span class="token string">&quot;Scope&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;local&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u9664\u4E86 <code>create</code> \u5B50\u547D\u4EE4\u5916\uFF0C<code>docker volume</code> \u8FD8\u652F\u6301 <code>inspect</code>\uFF08\u67E5\u770B\u8BE6\u7EC6\u4FE1\u606F\uFF09\u3001<code>ls</code>\uFF08\u5217\u51FA\u5DF2\u6709\u6570\u636E\u5377\uFF09\u3001<code>prune</code>\uFF08\u6E05\u7406\u65E0\u7528\u6570\u636E\u5377\uFF09\u3001<code>rm</code>\uFF08\u5220\u9664\u6570\u636E\u5377\uFF09\u7B49\uFF0C\u5927\u5BB6\u53EF\u4EE5\u81EA\u884C\u5B9E\u8DF5\u3002</p><h3 id="_2\u3001\u7ED1\u5B9A\u6570\u636E\u5377" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u7ED1\u5B9A\u6570\u636E\u5377" aria-hidden="true">#</a> 2\u3001\u7ED1\u5B9A\u6570\u636E\u5377</h3><p>\u9664\u4E86\u4F7F\u7528 <code>volume</code> \u5B50\u547D\u4EE4\u6765\u7BA1\u7406\u6570\u636E\u5377\u5916\uFF0C\u8FD8\u53EF\u4EE5\u5728\u521B\u5EFA\u5BB9\u5668\u65F6\u5C06\u4E3B\u673A\u672C\u5730\u7684\u4EFB\u610F\u8DEF\u5F84\u6302\u8F7D\u5230\u5BB9\u5668\u5185\u4F5C\u4E3A\u6570\u636E\u5377\uFF0C\u8FD9\u79CD\u5F62\u5F0F\u521B\u5EFA\u7684\u6570\u636E\u5377\u79F0\u4E3A\u7ED1\u5B9A\u6570\u636E\u5377\u3002</p><p>\u5728\u7528 <code>docker [container] run</code> \u547D\u4EE4\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u4F7F\u7528 -mount \u9009\u9879\u6765\u4F7F\u7528\u6570\u636E\u5377\u3002</p><p>-mount \u9009\u9879\u652F\u6301\u4E09\u79CD\u7C7B\u578B\u7684\u6570\u636E\u5377\uFF0C\u5305\u62EC\uFF1A</p><ul><li>volume\uFF1A\u666E\u901A\u6570\u636E\u5377\uFF0C\u6620\u5C04\u5230\u4E3B\u673A <code>/var/lib/docker/volumes</code> \u8DEF\u5F84\u4E0B\uFF1B</li><li>bind\uFF1A\u7ED1\u5B9A\u6570\u636E\u5377\uFF0C\u6620\u5C04\u5230\u4E3B\u673A\u6307\u5B9A\u8DEF\u5F84\u4E0B\uFF1B</li><li>tmpfs \uFF1A\u4E34\u65F6\u6570\u636E\u5377\uFF0C\u53EA\u5B58\u5728\u4E8E\u5185\u5B58\u4E2D\u3002</li></ul><p>\u4E0B\u9762\u4F7F\u7528 training/webapp \u955C\u50CF\u521B\u5EFA\u4E00\u4E2A Web \u5BB9\u5668\uFF0C\u5E76\u521B\u5EFA\u4E00\u4E2A\u6570\u636E\u5377\u6302\u8F7D\u5230\u5BB9\u5668\u7684 <code>/opt/webapp</code> \u76EE\u5F55\uFF1A</p>`,20);function t(l,p){return e}var c=s(a,[["render",t]]);export{c as default};