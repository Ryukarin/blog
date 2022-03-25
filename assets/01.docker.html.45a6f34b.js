import{_ as r,a as t}from"./app.893f8b81.js";var e="/blog/assets/docker_1-1.ece73607.png";const o={},n=t('<h2 id="\u4EC0\u4E48\u662F-docker" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F-docker" aria-hidden="true">#</a> \u4EC0\u4E48\u662F Docker</h2><h3 id="_1\u3001docker-\u5F00\u6E90\u9879\u76EE\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1\u3001docker-\u5F00\u6E90\u9879\u76EE\u80CC\u666F" aria-hidden="true">#</a> 1\u3001Docker \u5F00\u6E90\u9879\u76EE\u80CC\u666F</h3><p>Docker \u662F\u57FA\u4E8E Go \u8BED\u8A00\u5B9E\u73B0\u7684\u5F00\u6E90\u5BB9\u5668\u9879\u76EE\u3002\u5B83\u8BDE\u751F\u4E8E 2013 \u5E74\u5E74\u521D\uFF0C\u6700\u521D\u53D1\u8D77\u8005\u662F dotCloud \u516C\u53F8\u3002Docker \u81EA\u5F00\u6E90\u540E\u53D7\u5230\u4E1A\u754C\u5E7F\u6CDB\u7684\u5173\u6CE8\u548C\u53C2\u4E0E\uFF0C\u76EE\u524D\u5DF2\u6709 80 \u591A\u4E2A\u76F8\u5173\u5F00\u6E90\u7EC4\u4EF6\u9879\u76EE\uFF08\u5305\u62EC Containerd\u3001Moby\u3001Swarm \u7B49\uFF09\uFF0C\u9010\u6E10\u5F62\u6210\u4E86\u56F4\u7ED5 Docker \u5BB9\u5668\u7684\u5B8C\u6574\u7684\u751F\u6001\u4F53\u7CFB\u3002</p><p>Docker \u7684\u6784\u60F3\u662F\u8981\u5B9E\u73B0\u201CBuild\uFF0CShip and Run Any App\uFF0CAnywhere\u201D\uFF0C\u5373\u901A\u8FC7\u5BF9\u5E94\u7528\u7684\u5C01\u88C5\uFF08Packaging\uFF09\u3001\u5206\u53D1\uFF08Distribution\uFF09\u3001\u90E8\u7F72\uFF08Deployment\uFF09\u3001\u8FD0\u884C\uFF08Runtime\uFF09\u751F\u547D\u5468\u671F\u8FDB\u884C\u7BA1\u7406\uFF0C\u8FBE\u5230\u5E94\u7528\u7EC4\u4EF6\u7EA7\u522B\u7684\u201C<strong>\u4E00\u6B21\u5C01\u88C5\uFF0C\u5230\u5904\u8FD0\u884C</strong>\u201D\u3002\u8FD9\u91CC\u7684\u5E94\u7528\u7EC4\u4EF6\uFF0C\u65E2\u53EF\u4EE5\u662F\u4E00\u4E2A Web \u5E94\u7528\u3001\u4E00\u4E2A\u7F16\u8BD1\u73AF\u5883\u3001\u4E5F\u53EF\u4EE5\u662F\u4E00\u5957\u6570\u636E\u5E93\u5E73\u53F0\u670D\u52A1\uFF0C\u751A\u81F3\u662F\u4E00\u4E2A\u64CD\u4F5C\u7CFB\u7EDF\u6216\u96C6\u7FA4\u3002</p><p>\u57FA\u4E8E Linux \u5E73\u53F0\u4E0A\u7684\u591A\u9879\u5F00\u6E90\u6280\u672F\uFF0CDocker \u63D0\u4F9B\u4E86\u9AD8\u6548\u3001\u654F\u6377\u548C\u8F7B\u91CF\u7EA7\u7684\u5BB9\u5668\u65B9\u6848\uFF0C\u5E76 \u652F\u6301\u90E8\u7F72\u5230\u672C\u5730\u73AF\u5883\u548C\u591A\u79CD\u4E3B\u6D41\u4E91\u5E73\u53F0\u3002\u53EF\u4EE5\u8BF4\uFF0CDocker \u9996\u6B21\u4E3A\u5E94\u7528\u7684\u5F00\u53D1\u3001\u8FD0\u884C\u548C\u90E8\u7F72\u63D0\u4F9B\u4E86\u201C\u4E00\u7AD9\u5F0F\u201D\u7684\u5B9E\u7528\u89E3\u51B3\u65B9\u6848\u3002</p><p>\u73B0\u5728\u4E3B\u6D41\u7684\u64CD\u4F5C\u7CFB\u7EDF\u5305\u62EC Linux \u5404\u5927\u53D1\u884C\u7248\u3001macOS\u3001Windows \u7B49\u90FD\u5DF2\u7ECF\u652F\u6301 Docker\u3002</p><h3 id="_2\u3001linux-\u5BB9\u5668\u6280\u672F-\u5DE8\u4EBA\u7684\u80A9\u8180" tabindex="-1"><a class="header-anchor" href="#_2\u3001linux-\u5BB9\u5668\u6280\u672F-\u5DE8\u4EBA\u7684\u80A9\u8180" aria-hidden="true">#</a> 2\u3001Linux \u5BB9\u5668\u6280\u672F---\u5DE8\u4EBA\u7684\u80A9\u8180</h3><p>\u4E0E\u5927\u90E8\u5206\u65B0\u5174\u6280\u672F\u7684\u8BDE\u751F\u4E00\u6837\uFF0CDocker \u4E5F\u5E76\u975E\u201C\u4ECE\u77F3\u5934\u7F1D\u91CC\u8E66\u51FA\u6765\u7684\u201D\uFF0C\u800C\u662F\u7AD9 \u5728\u524D\u4EBA\u7684\u80A9\u8180\u4E0A\u3002\u5176\u4E2D\u6700\u91CD\u8981\u7684\u5C31\u662F Linux \u5BB9\u5668\uFF08Linux Containers\uFF0CLXC\uFF09\u6280\u672F\u3002IBM DeveloperWorks \u7F51\u7AD9\u5173\u4E8E\u5BB9\u5668\u6280\u672F\u7684\u63CF\u8FF0\u5341\u5206\u51C6\u786E\uFF1A<u>\u201C\u5BB9\u5668\u6709\u6548\u5730\u5C06\u7531\u5355\u4E2A\u64CD\u4F5C\u7CFB\u7EDF\u7BA1\u7406\u7684\u8D44\u6E90\u5212\u5206\u5230\u5B64\u7ACB\u7684\u7EC4\u4E2D\uFF0C\u4EE5\u66F4\u597D\u5730\u5728\u5B64\u7ACB\u7684\u7EC4\u4E4B\u95F4\u5E73\u8861\u6709\u51B0\u7A81\u7684\u8D44\u6E90\u4F7F\u7528\u9700\u6C42\u3002\u4E0E\u865A\u62DF\u5316\u76F8\u6BD4\uFF0C\u8FD9\u6837\u65E2\u4E0D\u9700\u8981\u6307\u4EE4\u7EA7\u6A21\u62DF\uFF0C\u4E5F\u4E0D\u9700\u8981\u5373\u65F6\u7F16\u8BD1\u3002\u5BB9\u5668\u53EF\u4EE5\u5728\u6838\u5FC3 CPU \u672C\u5730\u8FD0\u884C\u6307\u4EE4\uFF0C\u800C\u4E0D\u9700\u8981\u4EFB\u4F55\u4E13\u95E8\u7684\u89E3\u91CA\u673A\u5236\u3002\u6B64\u5916\uFF0C\u4E5F\u907F\u514D\u4E86\u51C6\u865A\u62DF\u5316\uFF08para-virtualization\uFF09\u548C\u7CFB\u7EDF\u8C03\u7528\u66FF\u6362\u4E2D\u7684\u590D\u6742\u6027\u3002\u201C</u></p><p>\u5F53\u7136\uFF0CLXC \u4E5F\u7ECF\u5386\u4E86\u957F\u671F\u7684\u6F14\u5316\u3002\u6700\u65E9\u7684\u5BB9\u5668\u6280\u672F\u53EF\u4EE5\u8FFD\u6EAF\u5230 1982 \u5E74 Unix \u7CFB\u5217\u64CD\u4F5C \u7CFB\u7EDF\u4E0A\u7684 chroot \u5DE5\u5177\uFF08\u76F4\u5230\u4ECA\u5929\uFF0C\u4E3B\u6D41\u7684 Unix\u3001Linux \u64CD\u4F5C\u7CFB\u7EDF\u4ECD\u7136\u652F\u6301\u548C\u5E26\u6709\u8BE5\u5DE5\u5177\uFF09\u3002</p><p>\u5728 LXC \u4E4B\u524D\uFF0C\u8FD9\u4E9B\u76F8\u5173\u6280\u672F\u7ECF\u8FC7\u591A\u5E74\u7684\u6F14\u5316\u5DF2\u7ECF\u5341\u5206\u6210\u719F\u548C\u7A33\u5B9A\uFF0C\u4F46\u662F\u7531\u4E8E\u79CD\u79CD\u539F\u56E0\uFF0C\u5B83\u4EEC\u5E76\u6CA1\u6709\u88AB\u5F88\u597D\u5730\u96C6\u6210\u5230\u4E3B\u6D41\u7684 Linux \u5185\u6838\u4E2D\uFF0C\u4F7F\u7528\u8D77\u6765\u5E76\u4E0D\u65B9\u4FBF\u3002</p><p>\u540E\u6765 LXC \u9879\u76EE\u501F\u9274\u4E86\u524D\u4EBA\u6210\u719F\u7684\u5BB9\u5668\u8BBE\u8BA1\u7406\u5FF5\uFF0C\u5E76\u57FA\u4E8E\u4E00\u7CFB\u5217\u65B0\u5F15\u5165\u7684\u5185\u6838\u7279\u6027\uFF0C\u5B9E\u73B0\u4E86\u66F4\u5177\u6269\u5C55\u6027\u7684\u865A\u62DF\u5316\u5BB9\u5668\u65B9\u6848\u3002\u66F4\u52A0\u5173\u952E\u7684\u662F\uFF0CLXC \u7EC8\u4E8E\u88AB\u96C6\u6210\u5230\u5230\u4E3B\u6D41 Linux \u5185\u6838\u4E2D\uFF0C\u8FDB\u800C\u6210\u4E3A Linux \u7CFB\u7EDF\u8F7B\u91CF\u7EA7\u5BB9\u5668\u6280\u672F\u7684\u4E8B\u5B9E\u6807\u51C6\u3002\u4ECE\u6280\u672F\u5C42\u9762\u6765\u770B\uFF0CLXC \u5DF2\u7ECF\u8D9F\u8FC7\u4E86\u7EDD\u5927\u90E8\u5206\u7684\u201C\u5751\u201D\uFF0C\u5B8C\u6210\u4E86\u5BB9\u5668\u6280\u672F\u5B9E\u7528\u5316\u7684\u5927\u534A\u5386\u7A0B\u3002</p><h3 id="_3\u3001\u4ECE-linux-\u5BB9\u5668\u5230-docker" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u4ECE-linux-\u5BB9\u5668\u5230-docker" aria-hidden="true">#</a> 3\u3001\u4ECE Linux \u5BB9\u5668\u5230 Docker</h3><p>\u5728 LXC \u7684\u57FA\u7840\u4E0A\uFF0CDocker \u8FDB\u4E00\u6B65\u4F18\u5316\u4E86\u5BB9\u5668\u7684\u4F7F\u7528\u4F53\u9A8C\uFF0C\u8BA9\u5B83\u8FDB\u4EBA\u5BFB\u5E38\u767E\u59D3\u5BB6\u3002\u9996\u5148\uFF0CDocker \u63D0\u4F9B\u4E86\u5404\u79CD\u5BB9\u5668\u7BA1\u7406\u5DE5\u5177\uFF08\u5982\u5206\u53D1\u3001\u7248\u672C\u3001\u79FB\u690D\u7B49\uFF09\uFF0C\u8BA9\u7528\u6237\u65E0\u987B\u5173\u6CE8\u5E95\u5C42\u7684\u64CD\u4F5C\uFF0C\u66F4\u52A0\u7B80\u5355\u660E\u4E86\u5730\u7BA1\u7406\u548C\u4F7F\u7528\u5BB9\u5668\uFF1A\u5176\u6B21\uFF0CDocker \u901A\u8FC7\u5F15\u5165\u5206\u5C42\u6587\u4EF6\u7CFB\u7EDF\u6784\u5EFA\u548C\u9AD8\u6548\u7684\u955C\u50CF\u673A\u5236\uFF0C\u964D\u4F4E\u4E86\u8FC1\u79FB\u96BE\u5EA6\uFF0C\u6781\u5927\u5730\u6539\u5584\u4E86\u7528\u6237\u4F53\u9A8C\u3002\u7528\u6237\u64CD\u4F5C Docker \u5BB9\u5668\u5C31\u50CF\u64CD\u4F5C\u5E94\u7528\u81EA\u8EAB\u4E00\u6837\u7B80\u5355\u3002</p><p>\u7B80\u5355\u5730\u8BB2\uFF0C\u53EF\u4EE5\u5C06 Docker \u5BB9\u5668\u7406\u89E3\u4E3A\u4E00\u79CD\u8F7B\u91CF\u7EA7\u7684\u6C99\u76D2\uFF08sandbox\uFF09\u3002\u6BCF\u4E2A\u5BB9\u5668\u5185\u8FD0\u884C\u7740\u4E00\u4E2A\u5E94\u7528\uFF0C\u4E0D\u540C\u7684\u5BB9\u5668\u76F8\u4E92\u9694\u79BB\u3001\u5BB9\u5668\u4E4B\u95F4\u4E5F\u53EF\u4EE5\u901A\u8FC7\u7F51\u7EDC\u4E92\u76F8\u901A\u4FE1\u3002\u5BB9\u5668\u7684\u521B\u5EFA\u548C\u505C\u6B62\u5341\u5206\u5FEB\u901F\uFF0C\u51E0\u4E4E\u8DEF\u521B\u5EFA\u548C\u7EC8\u6B62\u539F\u751F\u5E94\u7528\u4E00\u81F4\uFF1A\u53E6\u5916\uFF0C\u5BB9\u5668\u81EA\u8EAB\u5BF9\u7CFB\u7EDF\u8D44\u6E90\u7684\u989D\u5916\u9700\u6C42\u4E5F\u5341\u5206\u6709\u9650\uFF0C\u8FDC\u8FDC\u4F4E\u4E8E\u4F20\u7EDF\u865A\u62DF\u673A\u3002\u5F88\u591A\u65F6\u5019\uFF0C\u751A\u81F3\u76F4\u63A5\u628A\u5BB9\u5668\u5F53\u4F5C\u5E94\u7528\u672C\u8EAB\u4E5F\u6CA1\u6709\u4EFB\u4F55\u95EE\u9898\u3002</p><p>\u76F8\u4FE1\u968F\u7740 Docker \u6280\u672F\u7684\u8FDB\u4E00\u6B65\u6210\u719F\uFF0C\u5B83\u5C06\u6210\u4E3A\u66F4\u53D7\u6B22\u8FCE\u7684\u5BB9\u5668\u865A\u62DF\u5316\u6280\u672F\u5B9E\u73B0\uFF0C\u5E76\u5728\u4E91\u8BA1\u7B97\u548C DevOps \u7B49\u9886\u57DF\u5F97\u5230\u66F4\u5E7F\u6CDB\u7684\u5E94\u7528\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528-docker" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528-docker" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528 Docker</h2><h3 id="_1\u3001docker-\u5BB9\u5668\u865A\u62DF\u5316\u7684\u597D\u5904" tabindex="-1"><a class="header-anchor" href="#_1\u3001docker-\u5BB9\u5668\u865A\u62DF\u5316\u7684\u597D\u5904" aria-hidden="true">#</a> 1\u3001Docker \u5BB9\u5668\u865A\u62DF\u5316\u7684\u597D\u5904</h3><p>Docker \u9879\u76EE\u7684\u53D1\u8D77\u4EBA\u3001Docker \u516C\u53F8 CTO Solomon Hykes \u8BA4\u4E3A\uFF0CDocker \u5728\u6B63\u786E\u7684\u5730\u70B9\u3001\u6B63\u786E\u7684\u65F6\u95F4\u987A\u5E94\u4E86\u6B63\u786E\u7684\u8D8B\u52BF---\u5982\u4F55\u6B63\u786E\u5730\u6784\u5EFA\u5E94\u7528\u3002</p><p>\u5728\u4E91\u65F6\u4EE3\uFF0C\u5F00\u53D1\u8005\u521B\u5EFA\u7684\u5E94\u7528\u5FC5\u987B\u8981\u80FD\u5F88\u65B9\u4FBF\u5730\u5728\u7F51\u7EDC\u4E0A\u4F20\u64AD\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5E94\u7528\u5FC5\u987B\u8131\u79BB\u5E95\u5C42\u7269\u7406\u786C\u4EF6\u7684\u9650\u5236\uFF1B\u540C\u65F6\u5FC5\u987B\u662F\u201C\u4EFB\u4F55\u65F6\u95F4\u4EFB\u4F55\u5730\u70B9\u201D\u53EF\u83B7\u53D6\u7684\u3002\u56E0\u6B64\uFF0C\u5F00\u53D1\u8005\u4EEC\u9700\u8981\u4E00\u79CD\u65B0\u578B\u7684\u521B\u5EFA\u5206\u5E03\u5F0F\u5E94\u7528\u7A0B\u5E8F\u7684\u65B9\u5F0F\uFF0C\u5FEB\u901F\u5206\u53D1\u548C\u90E8\u7F72\uFF0C\u800C\u8FD9\u6B63\u662F Docker \u6240\u80FD\u591F\u63D0\u4F9B\u7684\u6700\u5927\u4F18\u52BF\u3002</p><p>\u4E3E\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF0C\u5047\u8BBE\u7528\u6237\u8BD5\u56FE\u57FA\u4E8E\u6700\u5E38\u89C1\u7684 LAMP\uFF08Linux+Apache+MySQL+PHP\uFF09\u7EC4\u5408\u6765\u6784\u5EFA\u7F51\u7AD9\u3002\u6309\u7167\u4F20\u7EDF\u7684\u505A\u6CD5\uFF0C\u9996\u5148\u9700\u8981\u5B89\u88C5 Apache\u3001MySQL \u548C PHP \u4EE5\u53CA\u5B83\u4EEC\u5404\u81EA\u8FD0\u884C\u6240\u4F9D\u8D56\u7684\u73AF\u5883\uFF1B\u4E4B\u540E\u5206\u522B\u5BF9\u5B83\u4EEC\u8FDB\u884C\u914D\u7F6E\uFF08\u5305\u62EC\u521B\u5EFA\u5408\u9002\u7684\u7528\u6237\u3001\u914D\u7F6E\u53C2\u6570\u7B49\uFF09\uFF1B\u7ECF\u8FC7\u5927\u91CF\u7684\u64CD\u4F5C\u540E\uFF0C\u8FD8\u9700\u8981\u8FDB\u884C\u529F\u80FD\u6D4B\u8BD5\uFF0C\u770B\u662F\u5426\u5DE5\u4F5C\u6B63\u5E38\uFF1B\u5982\u679C\u4E0D\u6B63\u5E38\uFF0C\u5219\u8FDB\u884C\u8C03\u8BD5\u8FFD\u8E2A\uFF0C\u610F\u5473\u7740\u66F4\u591A\u7684\u65F6\u95F4\u4EE3\u4EF7\u548C\u4E0D\u53EF\u63A7\u7684\u98CE\u9669\u3002\u53EF\u4EE5\u60F3\u8C61\uFF0C\u5982\u679C\u5E94\u7528\u6570\u76EE\u53D8\u591A\uFF0C\u4E8B\u60C5\u4F1A\u53D8\u5F97\u66F4\u52A0\u96BE\u4EE5 \u5904\u7406\u3002</p><p>\u66F4\u4E3A\u53EF\u6015\u7684\u662F\uFF0C\u4E00\u65E6\u9700\u8981\u670D\u52A1\u5668\u8FC1\u79FB\uFF08\u4F8B\u5982\u4ECE\u4E9A\u9A6C\u900A\u4E91\u8FC1\u79FB\u5230\u5176\u4ED6\u4E91\uFF09\uFF0C\u5F80\u5F80\u9700\u8981\u5BF9\u6BCF\u4E2A\u5E94\u7528\u90FD\u8FDB\u884C\u91CD\u65B0\u90E8\u7F72\u548C\u8C03\u8BD5\u3002\u8FD9\u4E9B\u7410\u788E\u800C\u65E0\u8DA3\u7684\u201C\u4F53\u529B\u6D3B\u201D\uFF0C\u6781\u5927\u5730\u964D\u4F4E\u4E86\u7528\u6237\u7684\u5DE5\u4F5C\u6548\u7387\u3002\u7A76\u5176\u6839\u6E90\uFF0C\u662F\u8FD9\u4E9B\u5E94\u7528\u76F4\u63A5\u8FD0\u884C\u5728\u5E95\u5C42\u64CD\u4F5C\u7CFB\u7EDF\u4E0A\uFF0C\u65E0\u6CD5\u4FDD\u8BC1\u540C\u4E00\u4EFD\u5E94\u7528\u5728\u4E0D\u540C\u7684\u73AF\u5883\u4E2D\u884C\u4E3A\u4E00\u81F4\u3002</p><p>\u800C Docker \u63D0\u4F9B\u4E86\u4E00\u79CD\u66F4\u4E3A\u806A\u660E\u7684\u65B9\u5F0F\uFF0C\u901A\u8FC7\u5BB9\u5668\u6765\u6253\u5305\u5E94\u7528\u3001\u89E3\u8026\u5E94\u7528\u548C\u8FD0\u884C\u5E73\u53F0\u3002\u8FD9\u610F\u6627\u7740\u8FC1\u79FB\u7684\u65F6\u5019\uFF0C\u53EA\u9700\u8981\u5728\u65B0\u7684\u670D\u52A1\u5668\u4E0A\u542F\u52A8\u9700\u8981\u7684\u5BB9\u5668\u5C31\u53EF\u4EE5\u4E86\uFF0C\u65E0\u8BBA\u65B0\u65E7\u670D\u52A1\u5668\u662F\u5426\u662F\u540C\u4E00\u7C7B\u578B\u7684\u5E73\u53F0\u3002\u8FD9\u65E0\u7591\u5C06\u5E2E\u52A9\u6211\u4EEC\u8282\u7EA6\u5927\u91CF\u7684\u5B9D\u8D35\u65F6\u95F4\uFF0C\u5E76\u964D\u4F4E\u90E8\u7F72\u8FC7\u7A0B\u51FA\u73B0\u95EE\u9898\u7684\u98CE\u9669\u3002</p><h3 id="_2\u3001docker-\u5728\u5F00\u53D1\u548C\u8FD0\u7EF4\u4E2D\u7684\u4F18\u52BF" tabindex="-1"><a class="header-anchor" href="#_2\u3001docker-\u5728\u5F00\u53D1\u548C\u8FD0\u7EF4\u4E2D\u7684\u4F18\u52BF" aria-hidden="true">#</a> 2\u3001Docker \u5728\u5F00\u53D1\u548C\u8FD0\u7EF4\u4E2D\u7684\u4F18\u52BF</h3><p>\u5BF9\u5F00\u53D1\u548C\u8FD0\u7EF4\uFF08DevOps\uFF09\u4EBA\u5458\u6765\u8BF4\uFF0C\u6700\u68A6\u5BD0\u4EE5\u6C42\u7684\u6548\u679C\u53EF\u80FD\u5C31\u662F\u4E00\u6B21\u521B\u5EFA\u6216\u914D\u7F6E\uFF0C\u4E4B\u540E\u53EF\u4EE5\u5728\u4EFB\u610F\u5730\u65B9\u3001\u4EFB\u610F\u65F6\u95F4\u8BA9\u5E94\u7528\u6B63\u5E38\u8FD0\u884C\uFF0C\u800C Docker \u6070\u6070\u662F\u53EF\u4EE5\u5B9E\u73B0\u8FD9\u4E00\u7EC8\u6781\u76EE\u6807\u7684\u201C\u745E\u58EB\u519B\u5200\u201D\u3002\u5177\u4F53\u8BF4\u6765\uFF0C\u5728\u5F00\u53D1\u548C\u8FD0\u7EF4\u8FC7\u7A0B\u4E2D\uFF0CDocker \u5177\u6709\u5982\u4E0B\u51E0\u4E2A\u65B9\u9762\u7684\u4F18\u52BF\uFF1A</p><ul><li><p><strong>\u66F4\u5FEB\u901F\u7684\u4EA4\u4ED8\u548C\u90E8\u7F72</strong>\u3002\u4F7F\u7528 Docker\uFF0C\u5F00\u53D1\u4EBA\u5458\u53EF\u4EE5\u4F7F\u7528\u955C\u50CF\u6765\u5FEB\u901F\u6784\u5EFA\u4E00\u5957\u6807\u51C6\u7684\u5F00\u53D1\u73AF\u5883\uFF1A\u5F00\u53D1\u5B8C\u6210\u4E4B\u540E\uFF0C\u6D4B\u8BD5\u548C\u8FD0\u7EF4\u4EBA\u5458\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u5B8C\u5168\u76F8\u540C\u7684\u73AF\u5883\u6765\u90E8\u7F72\u4EE3\u7801\u3002\u53EA\u8981\u662F\u5F00\u53D1\u6D4B\u8BD5\u8FC7\u7684\u4EE3\u7801\uFF0C\u5C31\u53EF\u4EE5\u786E\u4FDD\u5728\u751F\u4EA7\u73AF\u5883\u65E0\u7F1D\u8FD0\u884C\u3002Docker\u53EF\u4EE5\u5FEB\u901F\u521B\u5EFA\u548C\u5220\u9664\u5BB9\u5668\uFF0C\u5B9E\u73B0\u5FEB\u901F\u8FED\u4EE3\uFF0C\u8282\u7EA6\u5F00\u53D1\u3001\u6D4B\u8BD5\u3001\u90E8\u7F72\u7684\u5927\u91CF\u65F6\u95F4\u3002\u5E76\u4E14\uFF0C\u6574\u4E2A\u8FC7\u7A0B\u5168\u7A0B\u53EF\u89C1\uFF0C\u4F7F\u56E2\u961F\u66F4\u5BB9\u6613\u7406\u89E3\u5E94\u7528\u7684\u521B\u5EFA\u548C\u5DE5\u4F5C\u8FC7\u7A0B\u3002</p></li><li><p><strong>\u66F4\u9AD8\u6548\u7684\u8D44\u6E90\u5229\u7528</strong>\u3002\u8FD0\u884C Docker \u5BB9\u5668\u4E0D\u9700\u8981\u989D\u5916\u7684\u865A\u62DF\u5316\u7BA1\u7406\u7A0B\u5E8F\uFF08Virtual Machine Manager\uFF0CVMM\uFF0C\u4EE5\u53CA Hypervisor\uFF09\u7684\u652F\u6301\uFF0CDocker \u662F\u5185\u6838\u7EA7\u7684\u865A\u62DF\u5316\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u66F4\u9AD8\u7684\u6027\u80FD\uFF0C\u540C\u65F6\u5BF9\u8D44\u6E90\u7684\u9891\u5916\u9700\u6C42\u5F88\u4F4E\u3002\u4E0E\u4F20\u7EDF\u865A\u62DF\u673A\u65B9\u5F0F\u76F8\u6BD4\uFF0CDocker \u7684\u6027\u80FD\u8981\u63D0\u9AD8 1-2 \u4E2A\u6570\u91CF\u7EA7\u3002</p></li><li><p><strong>\u66F4\u8F7B\u677E\u7684\u8FC1\u79FB\u548C\u6269\u5C55</strong>\u3002Docker \u5BB9\u5668\u51E0\u4E4E\u53EF\u4EE5\u5728\u4EFB\u610F\u7684\u5E73\u53F0\u4E0A\u8FD0\u884C\uFF0C\u5305\u6320\u7269\u7406\u673A\u3001\u865A\u62DF\u673A\u3001\u516C\u6709\u4E91\u3001\u79C1\u6709\u4E91\u3001\u4E2A\u4EBA\u7535\u8111\u3001\u670D\u52A1\u5668\u7B49\uFF0C\u540C\u65F6\u652F\u6301\u4E3B\u6D41\u7684\u64CD\u4F5C\u7CFB\u7EDF\u53D1\u884C\u7248\u672C\u3002\u8FD9\u79CD\u517C\u5BB9\u6027\u8BA9\u7528\u6237\u53EF\u4EE5\u5728\u4E0D\u540C\u5E73\u53F0\u4E4B\u95F4\u8F7B\u677E\u5730\u8FC1\u79FB\u5E94\u7528\u3002</p></li><li><p><strong>\u66F4\u7B80\u5355\u7684\u66F4\u65B0\u7BA1\u7406</strong>\u3002\u4F7F\u7528 Dockerfile\uFF0C\u53EA\u9700\u8981\u5C0F\u5C0F\u7684\u914D\u7F6E\u4FEE\u653F\uFF0C\u5C31\u53EF\u4EE5\u66FF\u4EE3\u4EE5\u5F80\u5927\u91CF\u7684\u66F4\u65B0\u5DE5\u4F5C\u3002\u6240\u6709\u4FEE\u6539\u90FD\u4EE5\u589E\u91CF\u7684\u65B9\u5F0F\u88AB\u5206\u53D1\u548C\u66F4\u65B0\uFF0C\u4ECE\u800C\u5B9E\u73B0\u81EA\u52A8\u5316\u5E76\u4E14\u9AD8\u6548\u7684\u5BB9\u5668\u7BA1\u7406\u3002</p></li></ul><h3 id="_3\u3001docker-\u4E0E\u865A\u62DF\u673A\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#_3\u3001docker-\u4E0E\u865A\u62DF\u673A\u6BD4\u8F83" aria-hidden="true">#</a> 3\u3001Docker \u4E0E\u865A\u62DF\u673A\u6BD4\u8F83</h3><p>\u4F5C\u4E3A\u4E00\u79CD\u8F7B\u91CF\u7EA7\u7684\u865A\u62DF\u5316\u65B9\u5F0F\uFF0CDocker \u5728\u8FD0\u884C\u5E94\u7528\u4E0A\u8DDF\u4F20\u7EDF\u7684\u865A\u62DF\u673A\u65B9\u5F0F\u76F8\u6BD4\u5177\u6709\u5982\u4E0B\u663E\u8457\u4F18\u52BF\uFF1A</p><ul><li><p><strong>Docker \u5BB9\u5668\u5F88\u5FEB</strong>\uFF0C\u542F\u52A8\u548C\u505C\u6B62\u53EF\u4EE5\u5728\u79D2\u7EA7\u5B9E\u73B0\uFF0C\u8FD9\u76F8\u6BD4\u4F20\u7EDF\u7684\u865A\u62DF\u673A\u65B9\u5F0F\uFF08\u6570\u5206\u949F\uFF09\u8981\u5FEB\u5F97\u591A\uFF1B</p></li><li><p><strong>Docker \u5BB9\u5668\u5BF9\u7CFB\u7EDF\u8D44\u6E90\u9700\u6C42\u5F88\u5C11</strong>\uFF0C\u4E00\u53F0\u4E3B\u673A\u4E0A\u53EF\u4EE5\u540C\u65F6\u8FD0\u884C\u6570\u5343\u4E2A Docker \u5BB9\u5668\uFF08\u5728 IBM \u670D\u52A1\u5668\u4E0A\u5DF2\u7ECF\u5B9E\u73B0\u4E86\u540C\u65F6\u8FD0\u884C 10K \u91CF\u7EA7\u7684\u5BB9\u5668\u5B9E\u4F8B\uFF09\uFF1B</p></li><li><p><strong>Docker</strong> \u901A\u8FC7\u7C7B\u4F3C Git \u8BBE\u8BA1\u7406\u5FF5\u7684\u64CD\u4F5C\u6765<strong>\u65B9\u4FBF\u7528\u6237\u83B7\u53D6\u3001\u5206\u53D1\u548C\u66F4\u65B0\u5E94\u7528\u955C\u50CF\uFF0C\u5B58\u50A8\u590D\u7528\uFF0C\u589E\u91CF\u66F4\u65B0</strong>\uFF1B</p></li><li><p><strong>Docker</strong> \u901A\u8FC7 Dockerfile <strong>\u652F\u6301\u7075\u6D3B\u7684\u81EA\u52A8\u5316\u521B\u5EFA\u548C\u90E8\u7F72\u673A\u5236</strong>\uFF0C\u4EE5\u63D0\u9AD8\u5DE5\u4F5C\u6548\u7387\uFF0C\u5E76\u6807\u51C6\u5316\u6D41\u7A0B\u3002</p></li></ul><p>Docker \u5BB9\u5668\u9664\u4E86\u8FD0\u884C\u5176\u4E2D\u7684\u5E94\u7528\u5916\uFF0C\u57FA\u672C\u4E0D\u6D88\u8017\u989D\u5916\u7684\u7CFB\u7EDF\u8D44\u6E90\uFF0C\u5728\u4FDD\u8BC1\u5E94\u7528\u6027\u80FD\u7684\u540C\u65F6\uFF0C\u5C3D\u91CF\u51CF\u5C0F\u7CFB\u7EDF\u5F00\u9500\u3002\u4F20\u7EDF\u865A\u62DF\u673A\u65B9\u5F0F\u8FD0\u884C N \u4E2A\u4E0D\u540C\u7684\u5E94\u7528\u5C31\u8981\u542F\u7528 N \u4E2A\u865A\u62DF\u673A\uFF08\u6BCF\u4E2A\u865A\u62DF\u673A\u9700\u8981\u5355\u72E1\u5206\u914D\u72EC\u5360\u7684\u5185\u5B58\u3001\u78C1\u76D8\u7B49\u8D44\u6E90\uFF09\uFF0C\u800C Docker \u53EA\u9700\u8981\u542F\u52A8 N \u4E2A\u9694\u79BB\u5F97\u201C\u5F88\u8584\u7684\u201D\u5BB9\u5668\uFF0C\u5E76\u5C06\u5E94\u7528\u653E\u8FDB\u5BB9\u5668\u5185\u5373\u53EF\u3002\u5E94\u7528\u83B7\u5F97\u7684\u662F\u63A5\u8FD1\u539F\u751F\u7684\u8FD0\u884C\u6027\u80FD\u3002</p><p>\u5F53\u7136\uFF0C\u5728\u9694\u79BB\u6027\u65B9\u9762\uFF0C\u4F20\u7EDF\u7684\u865A\u62DF\u673A\u65B9\u5F0F\u63D0\u4F9B\u7684\u662F\u76F8\u5BF9\u5C01\u95ED\u7684\u9694\u79BB\u3002\u4F46\u8FD9\u5E76\u4E0D\u610F\u5473\u7740 Docker \u4E0D\u5B89\u5168\u3002Docker \u5229\u7528 Linux \u7CFB\u7EDF\u4E0A\u7684\u591A\u79CD\u9632\u62A4\u6280\u672F\u5B9E\u73B0\u4E86\u4E25\u683C\u7684\u9694\u79BB\u53EF\u9760\u6027\uFF0C\u5E76\u76EE\u53EF\u4EE5\u6574\u5408\u4F17\u591A\u5B89\u5168\u5DE5\u5177\u3002\u4ECE 1.3.0 \u7248\u672C\u5F00\u59CB\uFF0CDocker \u91CD\u70B9\u6539\u5584\u4E86\u5BB9\u5668\u7684\u5B89\u5168\u63A7\u5236\u548C\u955C\u50CF\u7684\u5B89\u5168\u673A\u5236\uFF0C\u6781\u5927\u5730\u63D0\u9AD8\u4E86\u4F7F\u7528 Docker \u7684\u5B89\u5168\u6027\u3002\u5728\u5DF2\u77E5\u7684\u5927\u89C4\u6A21\u5E94\u7528\u4E2D\uFF0C\u76EE\u524D\u5C1A\u672A\u51FA\u73B0\u503C\u5F97\u62C5\u5FE7\u7684\u5B89\u5168\u9690\u60A3\u3002</p><p>\u4E0B\u8868\u6BD4\u8F83\u4E86\u4F7F\u7528 Docker \u5BB9\u5668\u6280\u672F\u4E0E\u4F20\u7EDF\u865A\u62DF\u673A\u6280\u672F\u7684\u5404\u79CD\u7279\u6027\uFF0C\u53EF\u89C1\u5BB9\u5668\u6280\u672F\u5728\u5F88\u591A\u5E94\u7528\u573A\u666F\u4E0B\u90FD\u5177\u6709\u5DE8\u5927\u7684\u4F18\u52BF\u3002</p><p><u>\u8868 1-1</u> Docker \u5BB9\u5668\u6280\u672F\u4E0E\u4F20\u7EDF\u865A\u62DF\u673A\u6280\u672F\u7684\u6BD4\u8F83</p><table><thead><tr><th><u>\u7279\u6027</u></th><th><u>\u5BB9\u5668</u></th><th><u>\u865A\u62DF\u673A</u></th></tr></thead><tbody><tr><td><strong>\u542F\u52A8\u901F\u5EA6</strong></td><td>\u79D2\u7EA7</td><td>\u5206\u949F\u7EA7</td></tr><tr><td><strong>\u6027\u80FD</strong></td><td>\u63A5\u8FD1\u539F\u751F</td><td>\u8F83\u5F31</td></tr><tr><td><strong>\u5185\u5B58\u4EE3\u4EF7</strong></td><td>\u5F88\u5C0F</td><td>\u8F83\u591A</td></tr><tr><td><strong>\u786C\u76D8\u4F7F\u7528</strong></td><td>\u4E00\u822C\u4E3A MB</td><td>\u4E00\u822C\u4E3A GB</td></tr><tr><td><strong>\u8FD0\u884C\u5BC6\u5EA6</strong></td><td>\u5355\u673A\u652F\u6301\u4E0A\u5343\u4E2A\u5BB9\u5668</td><td>\u4E00\u822C\u51E0\u5341\u4E2A</td></tr><tr><td><strong>\u9694\u79BB\u6027</strong></td><td>\u5B89\u5168\u9694\u79BB</td><td>\u5B8C\u5168\u9694\u79BB</td></tr><tr><td><strong>\u8FC1\u79FB\u6027</strong></td><td>\u4F18\u79C0</td><td>\u4E00\u822C</td></tr></tbody></table><h2 id="docker-\u4E0E\u865A\u62DF\u5316" tabindex="-1"><a class="header-anchor" href="#docker-\u4E0E\u865A\u62DF\u5316" aria-hidden="true">#</a> Docker \u4E0E\u865A\u62DF\u5316</h2><p>\u865A\u62DF\u5316\uFF08virtualization\uFF09\u6280\u672F\u662F\u4E00\u4E2A\u901A\u7528\u7684\u6982\u5FF5\uFF0C\u5728\u4E0D\u540C\u9886\u57DF\u6709\u4E0D\u540C\u7684\u7406\u89E3\u3002\u5728\u8BA1\u7B97\u9886\u57DF\uFF0C\u4E00\u822C\u6307\u7684\u662F\u8BA1\u7B97\u865A\u62DF\u5316\uFF08computing virtualization\uFF09\uFF0C\u6216\u901A\u5E38\u8BF4\u7684\u670D\u52A1\u5668\u865A\u62DF\u5316\u3002\u7EF4\u57FA\u767E\u79D1\u4E0A\u7684\u5B9A\u4E49\u5982\u4E0B\uFF1A</p><blockquote><p>\u201C\u5728\u8BA1\u7B97\u673A\u6280\u672F\u4E2D\uFF0C\u865A\u62DF\u5316\u662F\u4E00\u79CD\u8D44\u6E90\u7BA1\u7406\u6280\u672F\uFF0C\u662F\u5C06\u8BA1\u7B97\u673A\u7684\u5404\u79CD\u5B9E\u4F53\u8D44 \u6E90\uFF0C\u5982\u670D\u52A1\u5668\u3001\u7F51\u7EDC\u3001\u5185\u5B58\u53CA\u5B58\u50A8\u7B49\uFF0C\u4E88\u4EE5\u62BD\u8C61\u3001\u8F6C\u6362\u540E\u5448\u73B0\u51FA\u6765\uFF0C\u6253\u7834\u5B9E\u4F53\u7ED3\u6784\u95F4\u7684\u4E0D\u53EF\u5207\u5272\u7684\u969C\u788D\uFF0C\u4F7F\u7528\u6237\u53EF\u4EE5\u7528\u6BD4\u539F\u672C\u7684\u7EC4\u6001\u66F4\u597D\u7684\u65B9\u5F0F\u6765\u5E94\u7528\u8FD9\u4E9B\u8D44\u6E90\u3002\u201C</p></blockquote><p>\u53EF\u89C1\uFF0C\u865A\u62DF\u5316\u7684\u6838\u5FC3\u662F\u5BF9\u8D44\u6E90\u7684\u62BD\u8C61\uFF0C\u76EE\u6807\u5F80\u5F80\u662F\u4E3A\u4E86\u5728\u540C\u4E00\u4E2A\u4E3B\u673A\u4E0A\u540C\u65F6\u8FD0\u884C\u591A\u4E2A\u7CFB\u7EDF\u6216\u5E94\u7528\uFF0C\u4ECE\u800C\u63D0\u9AD8\u7CFB\u7EDF\u8D44\u6E90\u7684\u5229\u7528\u7387\uFF0C\u5E76\u4E01\u5E26\u6765\u964D\u4F4E\u6210\u672C\u3001\u65B9\u4FBF\u7BA1\u7406\u548C\u5BB9\u9519\u5BB9\u707E\u7B49\u597D\u5904\u3002</p><p>\u4ECE\u5927\u7C7B\u4E0A\u5206\uFF0C\u865A\u62DF\u5316\u6280\u672F\u53EF\u5206\u4E3A\u57FA\u4E8E<strong>\u786C\u4EF6\u7684\u865A\u62DF\u5316</strong>\u548C\u57FA\u4E8E<strong>\u8F6F\u4EF6\u7684\u865A\u62DF\u5316</strong>\u3002\u5176\u4E2D\uFF0C\u771F\u6B63\u610F\u4E49\u4E0A\u7684\u57FA\u4E8E\u786C\u4EF6\u7684\u865A\u62DF\u5316\u6280\u672F\u4E0D\u591A\u89C1\uFF0C\u57FA\u4E8E\u8F6F\u4EF6\u7684\u865A\u62DF\u5316\u4ECE\u5BF9\u8C61\u6240\u5728\u7684\u5C42\u6B21\uFF0C\u53C8\u53EF\u4EE5\u5206\u4E3A<strong>\u5E94\u7528\u865A\u62DF\u5316</strong>\u548C<strong>\u5E73\u53F0\u865A\u62DF\u5316</strong>\uFF08\u901A\u5E38\u8BF4\u7684\u865A\u62DF\u673A\u6280\u672F\u5373\u5C5E\u4E8E\u8FD9\u4E2A\u8303\u7574\uFF09\u3002\u524D\u8005\u4E00\u822C\u6307\u7684\u662F\u4E00\u4E9B\u6A21\u62DF\u8BBE\u5907\u6216\u8BF8\u5982 Wine \u8FD9\u6837\u7684\u8F6F\u4EF6\uFF0C\u540E\u8005\u53C8\u53EF\u4EE5\u7EC6\u5206\u4E3A\u51E0\u4E2A\u5B50\u7C7B\uFF1A</p><ul><li><p><strong>\u5B8C\u5168\u865A\u62DF\u5316</strong>\u3002\u8651\u62DF\u673A\u6A21\u62DF\u5B8C\u6574\u7684\u5E95\u5C42\u786C\u4EF6\u73AF\u5883\u548C\u7279\u6743\u6307\u4EE4\u7684\u6267\u884C\u8FC7\u7A0B\uFF0C\u5BA2\u6237\u64CD\u4F5C\u7CFB\u7EDF\u65E0\u987B\u8FDB\u884C\u4FEE\u6539\u3002\u4F8B\u5982 IBM p \u548C z \u7CFB\u5217\u7684\u5EB7\u62DF\u5316\u3001VMware Workstation\u3001VirtualBox\u3001QEMU \u7B49\uFF1B</p></li><li><p><strong>\u786C\u4EF6\u8F85\u52A9\u865A\u62DF\u5316</strong>\u3002\u5229\u7528\u786C\u4EF6\uFF08\u4E3B\u8981\u662F CPU\uFF09\u8F85\u52A9\u652F\u6301\uFF08\u76EE\u524D x86 \u4F53\u7CFB\u7ED3\u6784\u4E0A\u53EF\u7528\u7684\u786C\u4EF6\u8F85\u52A9\u865A\u62DF\u5316\u6280\u672F\u5305\u62EC Intel-VT \u548C AMD-V\uFF09\u5904\u7406\u654F\u611F\u6307\u4EE4\u6765\u5B9E\u73B0\u5B8C\u5168\u865A\u62DF\u5316\u7684\u529F\u80FD\uFF0C\u5BA2\u6237\u64CD\u4F5C\u7CFB\u7EDF\u65E0\u987B\u4FEE\u653F\uFF0C\u4F8B\u5982 VMware Workstation\uFF0CXen\uFF0CKVM\uFF1B</p></li><li><p><strong>\u90E8\u5206\u865A\u62DF\u5316</strong>\u3002\u53EA\u9488\u5BF9\u90E8\u5206\u786C\u4EF6\u8D44\u6E90\u8FDB\u884C\u865A\u62DF\u5316\uFF0C\u5BA2\u6237\u64CD\u4F5C\u7CFB\u7EDF\u9700\u8981\u8FDB\u884C\u4FEE\u6539\u3002\u73B0\u5728\u6709\u4E9B\u865A\u62DF\u5316\u6280\u672F\u7684\u65E9\u671F\u7248\u672C\u4EC5\u652F\u6301\u90E8\u5206\u865A\u62DF\u5316\uFF1B</p></li><li><p><strong>\u8D85\u865A\u62DF\u5316\uFF08paravirtualization\uFF09</strong>\u3002\u90E8\u5206\u786C\u4EF6\u63A5\u53E3\u4EE5\u8F6F\u4EF6\u7684\u5F62\u5F0F\u63D0\u4F9B\u7ED9\u5BA2\u6237\u673A\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u5BA2\u6237\u64CD\u4F5C\u7CFB\u7EDF\u9700\u8981\u8FDB\u884C\u4FEE\u6539\uFF0C\u4F8B\u5982\u65E9\u671F\u7684 Xen\uFF1B</p></li><li><p><strong>\u64CD\u4F5C\u7CFB\u7EDF\u7EA7\u865A\u62DF\u5316</strong>\u3002\u5185\u6838\u901A\u8FC7\u521B\u5EFA\u591A\u4E2A\u865A\u62DF\u7684\u64CD\u4F5C\u7CFB\u7EDF\u5B9E\u4F8B\uFF08\u5185\u6838\u548C\u5E93\uFF09\u6765\u9694\u79BB\u4E0D\u540C\u7684\u8FDB\u7A0B\u3002\u5BB9\u5668\u76F8\u5173\u6280\u672F\u5373\u5728\u8FD9\u4E2A\u8303\u7574\u3002</p></li></ul><p>\u53EF\u89C1\uFF0CDocker \u4EE5\u53CA\u5176\u4ED6\u5BB9\u5668\u6280\u672F\u90FD\u5C5E\u4E8E\u64CD\u4F5C\u7CFB\u7EDF\u865A\u62DF\u5316\u8FD9\u4E2A\u8303\u7574\uFF0C\u64CD\u4F5C\u7CFB\u7EDF\u865A\u62DF\u5316\u6700\u5927\u7684\u7279\u70B9\u5C31\u662F\u4E0D\u9700\u8981\u989D\u5916\u7684 supervisor \u652F\u6301\u3002Docker \u865A\u62DF\u5316\u65B9\u5F0F\u4E4B\u6240\u4EE5\u6709\u4F17\u591A\u4F18\u52BF\uFF0C\u8DDF\u64CD\u4F5C\u7CFB\u7EDF\u865A\u62DF\u5316\u6280\u672F\u81EA\u8EAB\u7684\u8BBE\u8BA1\u548C\u5B9E\u73B0\u662F\u5206\u4E0D\u5F00\u7684\u3002</p><p>\u4E0B\u56FE\u6BD4\u8F83\u4E86 Docker \u548C\u5E38\u89C1\u7684\u865A\u62C9\u673A\u65B9\u5F0F\u7684\u4E0D\u540C\u4E4B\u5904\u3002</p><div class="custom-container center"><p><img src="'+e+'" alt="" loading="lazy"></p><p><u>\u56FE 1-1</u> Docker \u548C\u4F20\u7EDF\u7684\u865A\u62DF\u5316\u65B9\u5F0F\u7684\u4E0D\u540C\u4E4B\u5904</p></div><p>\u4F20\u7EDF\u65B9\u5F0F\u662F\u5728\u786C\u4EF6\u5C42\u9762\u5B9E\u73B0\u865A\u62DF\u5316\uFF0C\u9700\u8981\u6709\u989D\u5916\u7684\u864E\u62DF\u673A\u7BA1\u7406\u5E94\u7528\u548C\u865A\u62DF\u673A\u64CD\u4F5C\u7CFB\u7EDF\u5C42\u3002Docker \u5BB9\u5668\u662F\u5728\u64CD\u4F5C\u7CFB\u7EDF\u5C42\u9762\u4E0A\u5B9E\u73B0\u865A\u62DF\u5316\uFF0C\u76F4\u63A5\u590D\u7528\u672C\u5730\u4E3B\u673A\u7684\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u56E0\u6B64\u66F4\u52A0\u8F7B\u91CF\u7EA7\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><p>\u4ECB\u7ECD\u4E86\u5BB9\u5668\u865A\u62DF\u5316\u7684\u57FA\u672C\u6982\u5FF5\u3001Docker \u7684\u8BDE\u751F\u5386\u53F2\uFF0C\u4EE5\u53CA\u5BB9\u5668\u5728\u4E91\u65F6\u4EE3\u5E94\u7528\u5206\u53D1\u573A\u666F\u4E0B\u7684\u5DE8\u5927\u4F18\u52BF\u3002</p><p>\u4E0E\u4F20\u7EDF\u7684\u865A\u62DF\u673A\u65B9\u5F0F\u76F8\u6BD4\uFF0C\u5BB9\u5668\u865A\u62DF\u5316\u65B9\u5F0F\u5728\u5F88\u591A\u573A\u666F\u4E0B\u90FD\u5B58\u5728\u6781\u4E3A\u660E\u663E\u7684\u4F18\u52BF\u3002\u65E0\u8BBA\u662F\u7CFB\u7EDF\u7BA1\u7406\u5458\u3001\u5E94\u7528\u5F00\u53D1\u4EBA\u5458\u3001\u6D4B\u8BD5\u4EBA\u5458\uFF0C\u8FD8\u662F\u8FD0\u7EF4\u7BA1\u7406\u4EBA\u5458\uFF0C\u90FD\u5E94\u8BE5\u5C3D\u5FEB\u638C\u63E1 Docker\uFF0C\u5C3D\u65E9\u4EAB\u53D7\u5176\u5E26\u6765\u7684\u5DE8\u5927\u4FBF\u5229\u3002</p>',46);function a(d,i){return n}var p=r(o,[["render",a]]);export{p as default};
