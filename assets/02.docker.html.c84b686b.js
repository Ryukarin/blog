import{_ as c,r as o,o as p,b as r,d as s,e as t,F as l,a,f as n}from"./app.893f8b81.js";var i="/blog/assets/docker_2-1.b242d9a8.png",u="/blog/assets/docker_2-2.1721cdd1.png";const d={},b=a('<p>\u9996\u5148\u4ECB\u7ECD Docker \u7684\u4E09\u5927\u6838\u5FC3\u6982\u5FF5\uFF1A</p><ul><li>\u955C\u50CF\uFF08Image\uFF09</li><li>\u53E3\u5BB9\u5668\uFF08Container\uFF09</li><li>\u53E3\u4ED3\u5E93\uFF08Reposit\uFF09</li></ul><p>\u53EA\u6709\u7406\u89E3\u4E86\u8FD9\u4E09\u4E2A\u6838\u5FC3\u6982\u5FF5\uFF0C\u624D\u80FD\u987A\u5229\u5730\u7406\u89E3 Docker \u5BB9\u5668\u7684\u6574\u4E2A\u751F\u547D\u5468\u671F \u3002 \u968F\u540E\uFF0C\u5C06\u4ECB\u7ECD\u5982\u4F55\u5728\u5E38\u89C1\u7684\u64CD\u4F5C\u7CFB\u7EDF\u5E73\u53F0\u4E0A\u5B89\u88C5 Docker \uFF0C\u5305\u62EC Ubuntu\u3001CentOS \u3001 MacOS \u548C Windows \u7B49\u4E3B\u6D41\u64CD\u4F5C\u7CFB\u7EDF \u3002</p><h2 id="\u6838\u5FC3\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u6838\u5FC3\u6982\u5FF5" aria-hidden="true">#</a> \u6838\u5FC3\u6982\u5FF5</h2><p>Docker \u5927\u90E8\u5206\u7684\u64CD\u4F5C\u90FD\u56F4\u7ED5\u7740\u5B83\u7684\u4E09\u5927\u6838\u5FC3\u6982\u5FF5\uFF1A<strong>\u955C\u50CF</strong>\u3001<strong>\u5BB9\u5668</strong>\u548C<strong>\u4ED3\u5E93</strong>\u3002\u56E0\u6B64\uFF0C\u51C6\u786E\u628A\u63E1\u8FD9\u4E09\u5927\u6838\u5FC3\u6982\u5FF5\u5BF9\u4E8E\u638C\u63E1 Docker \u6280\u672F\u5C24\u4E3A\u91CD\u8981\u3002</p><h3 id="_1\u3001docker-\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#_1\u3001docker-\u955C\u50CF" aria-hidden="true">#</a> 1\u3001Docker \u955C\u50CF</h3><p>Docker \u955C\u50CF\u7C7B\u4F3C\u4E8E\u865A\u62DF\u673A\u955C\u50CF\uFF0C\u53EF\u4EE5\u5C06\u5B83\u7406\u89E3\u4E3A\u4E00\u4E2A\u53EA\u8BFB\u7684\u6A21\u677F \u3002</p><p>\u4F8B\u5982\uFF0C\u4E00\u4E2A\u955C\u50CF\u53EF\u4EE5\u5305\u542B\u4E00\u4E2A\u57FA\u672C\u7684\u64CD\u4F5C\u7CFB\u7EDF\u73AF\u5883\uFF0C\u91CC\u9762\u4EC5\u5B89\u88C5\u4E86 Apache \u5E94\u7528\u7A0B\u5E8F\uFF08\u6216\u7528\u6237\u9700\u8981\u7684\u5176\u4ED6\u8F6F\u4EF6\uFF09\u3002\u53EF\u4EE5\u628A\u5B83\u79F0\u4E3A\u4E00\u4E2A Apache \u955C\u50CF \u3002</p><p>\u955C\u50CF\u662F\u521B\u5EFA Docker \u5BB9\u5668\u7684\u57FA\u7840 \u3002</p><p>\u901A\u8FC7\u7248\u672C\u7BA1\u7406\u548C\u589E\u91CF\u7684\u6587\u4EF6\u7CFB\u7EDF\uFF0CDocker \u63D0\u4F9B\u4E86\u4E00\u5957\u5341\u5206\u7B80\u5355\u7684\u673A\u5236\u6765\u521B\u5EFA\u548C\u66F4\u65B0\u73B0\u6709 \u7684\u955C\u50CF\uFF0C\u7528\u6237\u751A\u81F3\u53EF\u4EE5\u4ECE\u7F51\u4E0A\u4E0B\u8F7D\u4E00\u4E2A\u5DF2\u7ECF\u505A\u597D\u7684\u5E94\u7528\u955C\u50CF\uFF0C\u5E76\u76F4\u63A5\u4F7F\u7528 \u3002</p><h3 id="_2\u3001docker-\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#_2\u3001docker-\u5BB9\u5668" aria-hidden="true">#</a> 2\u3001Docker \u5BB9\u5668</h3><p>Docker \u5BB9\u5668\u7C7B\u4F3C\u4E8E\u4E00\u4E2A\u8F7B\u91CF\u7EA7\u7684\u6C99\u7BB1\uFF0C Docker \u5229\u7528\u5BB9\u5668\u6765\u8FD0\u884C\u548C\u9694\u79BB\u5E94\u7528 \u3002</p><p>\u5BB9\u5668\u662F\u4ECE\u955C\u50CF\u521B\u5EFA\u7684\u5E94\u7528\u8FD0\u884C\u5B9E\u4F8B \u3002\u5B83\u53EF\u4EE5\u542F\u52A8\u3001\u5F00\u59CB\u3001\u505C\u6B62\u3001\u5220\u9664\uFF0C\u800C\u8FD9\u4E9B\u5BB9\u5668\u90FD\u662F\u5F7C\u6B64\u76F8\u4E92\u9694\u79BB\u3001\u4E92\u4E0D\u53EF\u89C1\u7684\u3002</p><p>\u53EF\u4EE5\u628A\u5BB9\u5668\u770B\u4F5C\u4E00\u4E2A\u7B80\u6613\u7248\u7684 Linux \u7CFB\u7EDF\u73AF\u5883\uFF08\u5305\u62EC root \u7528\u6237\u6743\u9650\u3001\u8FDB\u7A0B\u7A7A\u95F4\u3001\u7528\u6237\u7A7A\u95F4\u548C\u7F51\u7EDC\u7A7A\u95F4\u7B49\uFF09\u4EE5\u53CA\u8FD0\u884C\u5728\u5176\u4E2D\u7684\u5E94\u7528\u7A0B\u5E8F\u6253\u5305\u800C\u6210\u7684\u76D2\u5B50\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F</p><p>\u955C\u50CF\u81EA\u8EAB\u662F\u53EA\u8BFB\u7684 \u3002 \u5BB9\u5668\u4ECE\u955C\u50CF\u542F\u52A8\u7684\u65F6\u5019\uFF0C\u4F1A\u5728\u955C\u50CF\u7684\u6700\u4E0A\u5C42\u521B\u5EFA\u4E00\u4E2A\u53EF\u5199\u5C42 \u3002</p></div><h3 id="_3\u3001docker-\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#_3\u3001docker-\u4ED3\u5E93" aria-hidden="true">#</a> 3\u3001Docker \u4ED3\u5E93</h3><p>Docker \u4ED3\u5E93\u7C7B\u4F3C\u4E8E\u4EE3\u7801\u4ED3\u5E93\uFF0C\u662F Docker \u96C6\u4E2D\u5B58\u653E\u955C\u50CF\u6587\u4EF6\u7684\u573A\u6240\u3002</p><p>\u6709\u65F6\u5019\u6211\u4EEC\u4F1A\u5C06 Docker \u4ED3\u5E93\u548C\u4ED3\u5E93\u6CE8\u518C\u670D\u52A1\u5668\uFF08Registry\uFF09\u6DF7\u4E3A\u4E00\u8C08\uFF0C\u5E76\u4E0D\u4E25\u683C\u533A\u5206\u3002\u5B9E\u9645\u4E0A\uFF0C\u4ED3\u5E93\u6CE8\u518C\u670D\u52A1\u5668\u662F\u5B58\u653E\u4ED3\u5E93\u7684\u5730\u65B9\uFF0C\u5176\u4E0A\u5F80\u5F80\u5B58\u653E\u7740\u591A\u4E2A\u4ED3\u5E93\u3002\u6BCF\u4E2A\u4ED3\u5E93\u96C6\u4E2D\u5B58\u653E\u67D0\u4E00\u7C7B\u955C\u50CF\uFF0C\u5F80\u5F80\u5305\u62EC\u591A\u4E2A\u955C\u50CF\u6587\u4EF6\uFF0C\u901A\u8FC7\u4E0D\u540C\u7684\u6807\u7B7E\uFF08tag\uFF09\u6765\u8FDB\u884C\u533A\u5206\u3002\u4F8B\u5982\u5B58\u653E Ubuntu \u64CD\u4F5C\u7CFB\u7EDF\u955C\u50CF\u7684\u4ED3\u5E93\uFF0C\u88AB\u79F0\u4E3A Ubuntu \u4ED3\u5E93\uFF0C\u5176\u4E2D\u53EF\u80FD\u5305\u62EC 16.04\u300118.04 \u7B49\u4E0D\u540C\u7248\u672C\u7684\u955C\u50CF\u3002\u4ED3\u5E93\u6CE8\u518C\u670D\u52A1\u5668\u7684\u793A\u4F8B\u5982\u4E0B\u56FE\u6240\u793A\u3002</p><div class="custom-container center"><p><img src="'+i+'" alt="" loading="lazy"></p><p><u>\u56FE 2-1</u> \u6CE8\u518C\u670D\u52A1\u5668\u4E0E\u4ED3\u5E93</p></div><p>\u6839\u636E\u6240\u5B58\u50A8\u7684\u955C\u50CF\u516C\u5F00\u5206\u4EAB\u4E0E\u5426\uFF0C Docker \u4ED3\u5E93\u53EF\u4EE5\u5206\u4E3A<strong>\u516C\u5F00\u4ED3\u5E93</strong>\uFF08Public\uFF09\u548C<strong>\u79C1\u6709\u4ED3\u5E93</strong>\uFF08Private\uFF09\u4E24\u79CD\u5F62\u5F0F \u3002</p><p>\u76EE\u524D\uFF0C\u6700\u5927\u7684\u516C\u5F00\u4ED3\u5E93\u662F\u5B98\u65B9\u63D0\u4F9B\u7684 Docker Hub\uFF0C\u5176\u4E2D\u5B58\u653E\u7740\u6570\u91CF\u5E9E\u5927\u7684\u955C\u50CF\u4F9B\u7528\u6237\u4E0B\u8F7D\u3002\u56FD\u5185\u4E0D\u5C11\u4E91\u670D\u52A1\u63D0\u4F9B\u5546\uFF08\u5982\u817E\u8BAF\u4E91\u3001\u963F\u91CC\u4E91\u7B49\uFF09\u4E5F\u63D0\u4F9B\u4E86\u4ED3\u5E93\u7684\u672C\u5730\u6E90\uFF0C\u53EF\u4EE5\u63D0\u4F9B\u7A33\u5B9A\u7684\u56FD\u5185\u8BBF\u95EE \u3002</p><p>\u5F53\u7136\uFF0C\u7528\u6237\u5982\u679C\u4E0D\u5E0C\u671B\u516C\u5F00\u5206\u4EAB\u81EA\u5DF1\u7684\u955C\u50CF\u6587\u4EF6\uFF0CDocker \u4E5F\u652F\u6301\u7528\u6237\u5728\u672C\u5730\u7F51\u7EDC\u5185\u521B\u5EFA\u4E00\u4E2A\u53EA\u80FD\u81EA\u5DF1\u8BBF\u95EE\u7684\u79C1\u6709\u4ED3\u5E93\u3002</p><p>\u5F53\u7528\u6237\u521B\u5EFA\u4E86\u81EA\u5DF1\u7684\u955C\u50CF\u4E4B\u540E\u5C31\u53EF\u4EE5\u4F7F\u7528 push \u547D\u4EE4\u5C06\u5B83\u4E0A\u4F20\u5230\u6307\u5B9A\u7684\u516C\u6709\u6216\u8005\u79C1\u6709\u4ED3\u5E93\u3002\u8FD9\u6837\u7528\u6237\u4E0B\u6B21\u5728\u53E6\u5916\u4E00\u53F0\u673A\u5668\u4E0A\u4F7F\u7528\u8BE5\u955C\u50CF\u65F6\uFF0C\u53EA\u9700\u8981\u5C06\u5176\u4ECE\u4ED3\u5E93\u4E0A pull \u4E0B\u6765\u5C31\u53EF\u4EE5\u4E86\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F</p><p>\u53EF\u4EE5\u770B\u51FA\uFF0CDocker \u5229\u7528\u4ED3\u5E93\u7BA1\u7406\u955C\u50CF\u7684\u8BBE\u8BA1\u7406\u5FF5\u4E0E Git \u4EE3\u7801\u4ED3\u5E93\u7684\u6982\u5FF5\u975E\u5E38\u76F8\u4F3C\uFF0C\u5B9E\u9645\u4E0A Docker \u8BBE\u8BA1\u4E0A\u501F\u9274\u4E86 Git \u7684\u5F88\u591A\u4F18\u79C0\u601D\u60F3\u3002</p></div><h2 id="\u5B89\u88C5-docker-\u5F15\u64CE" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-docker-\u5F15\u64CE" aria-hidden="true">#</a> \u5B89\u88C5 Docker \u5F15\u64CE</h2><p>Docker \u5F15\u64CE\u662F\u4F7F\u7528 Docker \u5BB9\u5668\u7684\u6838\u5FC3\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u5728\u4E3B\u6D41\u7684\u64CD\u4F5C\u7CFB\u7EDF\u548C\u4E91\u5E73\u53F0\u4E0A\u4F7F\u7528\uFF0C\u5305\u62EC Linux \u64CD\u4F5C\u7CFB\u7EDF\uFF08\u5982 Ubuntu\u3001Debian\u3001CentOS\u3001Redhat \u7B49)\uFF0CmacOS \u548C Windows \u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u4EE5\u53CA IBM\u3001\u4E9A\u9A6C\u900A\u3001\u5FAE\u8F6F\u7B49\u77E5\u540D\u4E91\u5E73\u53F0\u3002</p>',26),k=n("\u7528\u6237\u53EF\u4EE5\u8BBF\u95EE Docker \u5B98\u7F51\u7684 "),m={href:"https://www.docker.com/get-docker",target:"_blank",rel:"noopener noreferrer"},h=n("Get Docker"),g=n(" \u9875\u9762\uFF0C\u67E5\u770B\u83B7\u53D6 Docker \u7684\u65B9\u5F0F\uFF0C\u4EE5\u53CA Docker \u652F\u6301\u7684\u5E73\u53F0\u7C7B\u578B\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002"),v=a('<div class="custom-container center"><p><img src="'+u+`" alt="" loading="lazy"></p><p><u>\u56FE 2-2</u> \u83B7\u53D6 Docker</p></div><p>\u76EE\u524D Docker \u652F\u6301 Docker \u5F15\u64CE\u3001Docker Hub\u3001Docker Cloud \u7B49\u591A\u79CD\u670D\u52A1 \u3002</p><ul><li><p>Docker \u5F15\u64CE\uFF1A\u5305\u62EC\u652F\u6301\u5728\u684C\u9762\u7CFB\u7EDF\u6216\u4E91\u5E73\u53F0\u5B89\u88C5 Docker\uFF0C\u4EE5\u53CA\u4E3A\u4F01\u4E1A\u63D0\u4F9B\u7B80\u5355\u5B89\u5168\u5F39\u6027\u7684\u5BB9\u5668\u96C6\u7FA4\u7F16\u6392\u548C\u7BA1\u7406\uFF1B</p></li><li><p>Docker Hub\uFF1A\u5B98\u65B9\u63D0\u4F9B\u7684\u4E91\u6258\u7BA1\u670D\u52A1\uFF0C\u53EF\u4EE5\u63D0\u4F9B\u516C\u6709\u6216\u79C1\u6709\u7684\u955C\u50CF\u4ED3\u5E93\uFF1B</p></li><li><p>Docker Cloud\uFF1A\u5B98\u65B9\u63D0\u4F9B\u7684\u5BB9\u5668\u4E91\u670D\u52A1\uFF0C\u53EF\u4EE5\u5B8C\u6210\u5BB9\u5668\u7684\u90E8\u7F72\u4E0E\u7BA1\u7406\uFF0C\u53EF\u4EE5\u5B8C\u6574\u5730\u652F\u6301\u5BB9\u5668\u5316\u9879\u76EE\uFF0C\u8FD8\u6709 CI\u3001CD \u529F\u80FD\u3002</p></li></ul><p>Docker \u5F15\u64CE\u76EE\u524D\u5206\u4E3A\u4E24\u4E2A\u7248\u672C\uFF1A\u793E\u533A\u7248\u672C\uFF08Community Edition\uFF0CCE\uFF09\u548C\u4F01\u4E1A\u7248\u672C\uFF08Enterprise Edition\uFF0CEE\uFF09\u3002\u793E\u533A\u7248\u672C\u5305\u62EC\u5927\u90E8\u5206\u7684\u6838\u5FC3\u529F\u80FD\uFF0C\u4F01\u4E1A\u7248\u672C\u5219\u901A\u8FC7\u4ED8\u8D39\u5F62\u5F0F\u63D0\u4F9B\u8BA4\u8BC1\u652F\u6301\u3001\u955C\u50CF\u7BA1\u7406\u3001\u5BB9\u5668\u6258\u7BA1\u3001\u5B89\u5168\u626B\u63CF\u7B49\u9AD8\u7EA7\u670D\u52A1\u3002\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u7528\u6237\u4F7F\u7528\u793E\u533A\u7248\u672C\u53EF\u4EE5\u6EE1\u8DB3\u5927\u90E8\u5206\u9700\u6C42\uFF1B\u82E5\u6709\u66F4\u82DB\u523B\u7684\u9700\u6C42\uFF0C\u53EF\u4EE5\u8D2D\u4E70\u4F01\u4E1A\u7248\u672C\u670D\u52A1\u3002\u793E\u533A\u7248\u672C\u6BCF\u4E2A\u6708\u4F1A\u53D1\u5E03\u4E00\u6B21\u5C1D\u9C9C\uFF08Edge\uFF09\u7248\u672C\uFF0C\u6BCF\u4E2A\u5B63\u5EA6\uFF08 3\u30016\u30019\u300112 \u6708\uFF09\u4F1A\u53D1\u884C\u4E00\u6B21\u7A33\u5B9A\uFF08Stable\uFF09\u7248\u672C\u3002\u7248\u672C\u53F7\u547D\u540D\u683C\u5F0F\u4E3A\u201C\u5E74\u4EFD.\u6708\u4EFD\u201D\uFF0C\u5982 2018 \u5E74 6 \u6708\u53D1\u5E03\u7684\u7248\u672C\u53F7\u4E3A vl8.06 \u3002</p><p>\u6211\u4EEC\u9996\u9009\u5728 Linux \u73AF\u5883\u4E2D\u4F7F\u7528 Docker \u793E\u533A\u7A33\u5B9A\u7248\u672C\uFF0C\u4EE5\u83B7\u53D6\u6700\u4F73\u7684\u539F\u751F\u652F\u6301\u4F53\u9A8C\u3002</p><h3 id="_1\u3001ubuntu-\u73AF\u5883\u4E0B\u5B89\u88C5-dokeer" tabindex="-1"><a class="header-anchor" href="#_1\u3001ubuntu-\u73AF\u5883\u4E0B\u5B89\u88C5-dokeer" aria-hidden="true">#</a> 1\u3001Ubuntu \u73AF\u5883\u4E0B\u5B89\u88C5 Dokeer</h3><ul><li>\u7CFB\u7EDF\u8981\u6C42</li></ul><p>Ubuntu \u64CD\u4F5C\u7CFB\u7EDF\u5BF9 Docker \u7684\u652F\u6301\u5341\u5206\u6210\u719F\uFF0C\u53EF\u4EE5\u652F\u6301\u5305\u62EC x86_64\u3001armhf\u3001s390x\uFF08IBM Z)\u3001ppc64le \u7B49\u7CFB\u7EDF\u67B6\u6784\uFF0C\u53EA\u8981\u662F 64 \u4F4D\u5373\u53EF\u3002</p><p>Docker \u76EE\u524D\u652F\u6301\u7684\u6700\u4F4E Ubuntu \u7248\u672C\u4E3A 14.04 LTS\uFF0C\u4F46\u5B9E\u9645\u4E0A\u4ECE\u7A33\u5B9A\u6027\u4E0A\u8003\u8651\uFF0C\u63A8\u8350\u4F7F\u7528 16.04 LTS \u6216 18.0.4 LTS \u7248\u672C\uFF0C\u5E76\u4E14\u7CFB\u7EDF\u5185\u6838\u8D8A\u65B0\u8D8A\u597D\uFF0C\u4EE5\u652F\u6301 Docker \u6700\u65B0\u7684\u7279\u6027 \u3002</p><p>\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u68C0\u67E5\u81EA\u5DF1\u7684\u5185\u6838\u7248\u672C\u8BE6\u7EC6\u4FE1\u606F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">uname</span> -a
Linux localhost <span class="token number">4.9</span>.36-x86_64-generic
<span class="token comment">#\u6216\u8005 :</span>
$ <span class="token function">cat</span> /proc/version
Linux version <span class="token number">4.9</span>.36-x86_64-generic <span class="token punctuation">(</span>maker@linux.com<span class="token punctuation">)</span> <span class="token punctuation">(</span>gcc version <span class="token number">4.9</span>.2 <span class="token punctuation">(</span>Debian <span class="token number">4.9</span>.2-10<span class="token punctuation">))</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5982\u679C\u4F7F\u7528 Ubuntu 16.04 LTS \u7248\u672C\uFF0C\u4E3A\u4E86\u8BA9 Docker \u4F7F\u7528 aufs \u5B58\u50A8\uFF0C\u63A8\u8350\u5B89\u88C5\u5982\u4E0B\u4E24\u4E2A\u8F6F\u4EF6\u5305\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">apt-get</span> update
$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y linux-image-extra-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> -r<span class="token variable">)</span></span> linux image-extra-virtual
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u6CE8\u610F</p><p>Ubuntu \u53D1\u884C\u7248\u4E2D\uFF0CLTS\uFF08Long-Term- Support\uFF09\u610F\u5473\u7740\u66F4\u7A33\u5B9A\u7684\u529F\u80FD\u548C\u66F4\u957F\u671F\uFF08\u76EE\u524D\u4E3A 5 \u5E74\uFF09\u7684\u5347\u7EA7\u652F\u6301\uFF0C\u751F\u4EA7\u73AF\u5883\u4E2D\u63A8\u8350\u5C3D\u91CF\u4F7F\u7528 LTS \u7248\u672C\u3002</p></div><ul><li>\u6DFB\u52A0\u955C\u50CF\u6E90</li></ul><p>\u9996\u5148\u9700\u8981\u5B89\u88C5 <code>apt-transport-https</code> \u7B49\u8F6F\u4EF6\u5305\u652F\u6301 https \u534F\u8BAE\u7684\u6E90\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">apt-get</span> update
$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> apt-transport-https ca-certificates <span class="token function">curl</span> software-properties-common
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6DFB\u52A0\u6E90\u7684 gpg \u5BC6\u94A5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">curl</span> -fsSL https://download.docker.com/linux/ubuntu/gpg <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -
OK
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u786E\u8BA4\u5BFC\u5165\u6307\u7EB9\u4E3A\u201C<u>9DC8 5822 9FC7 DD38 854A E2D8 8D81 803C 0EBF CD88</u>\u201D\u7684 GPG\u516C\u94A5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> apt-key fingerprint 0EBFCD88
pub   rsa4096 <span class="token number">2017</span>-02-22 <span class="token punctuation">[</span>SCEA<span class="token punctuation">]</span>
      9DC8 <span class="token number">5822</span> 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
uid           <span class="token punctuation">[</span> \u672A\u77E5 <span class="token punctuation">]</span> Docker Release <span class="token punctuation">(</span>CE deb<span class="token punctuation">)</span> <span class="token operator">&lt;</span>docker@docker.com<span class="token operator">&gt;</span>
sub   rsa4096 <span class="token number">2017</span>-02-22 <span class="token punctuation">[</span>S<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u83B7\u53D6\u5F53\u524D\u64CD\u4F5C\u7CFB\u7EDF\u7684\u4EE3\u53F7 :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ lsb_release -cs
bionic
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0CUbuntu 16.04 LTS \u4EE3\u53F7\u4E3A xenial\uFF0CUbuntu 18.04 LTS \u4EE3\u53F7\u4E3A bionic \u3002</p><p>\u63A5\u4E0B\u6765\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u6DFB\u52A0 Docker \u7A33\u5B9A\u7248\u7684\u5B98\u65B9\u8F6F\u4EF6\u6E90\uFF0C\u975E bionic \u7248\u672C\u7684\u7CFB\u7EDF\u6CE8\u610F\u4FEE\u6539\u4E3A\u81EA\u5DF1\u5BF9\u5E94\u7684\u4EE3\u53F7\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> add-apt-repository <span class="token string">&quot;deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6DFB\u52A0\u6210\u529F\u540E\uFF0C\u518D\u6B21\u66F4\u65B0 apt \u8F6F\u4EF6\u5305\u7F13\u5B58\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u5F00\u59CB\u5B89\u88C5 Docker</li></ul><p>\u5728\u6210\u529F\u6DFB\u52A0\u6E90\u4E4B\u540E\uFF0C\u5C31\u53EF\u4EE5\u5B89\u88C5\u6700\u65B0\u7248\u672C\u7684 Docker \u4E86\uFF0C\u8F6F\u4EF6\u5305\u540D\u79F0\u4E3A docker-ce\uFF0C\u4EE3\u8868\u662F\u793E\u533A\u7248\u672C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y docker-ce
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u7CFB\u7EDF\u4E2D\u5B58\u5728\u8F83\u65E7\u7248\u672C\u7684 Docker\uFF0C\u4F1A\u63D0\u793A\u662F\u5426\u5148\u5220\u9664\uFF0C\u9009\u62E9\u662F\u5373\u53EF\u3002</p><p>\u9664\u4E86\u57FA\u4E8E\u624B\u52A8\u6DFB\u52A0\u8F6F\u4EF6\u6E90\u7684\u65B9\u5F0F\u4E4B\u5916\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B98\u65B9\u63D0\u4F9B\u7684\u811A\u672C\u6765\u81EA\u52A8\u5316\u5B89\u88C5 Docker\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">curl</span> - sSL https://get.docker.com/ <span class="token operator">|</span> <span class="token function">sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5B89\u88C5\u6210\u529F\u540E\uFF0C\u4F1A\u81EA\u52A8\u542F\u52A8 Docker \u670D\u52A1 \u3002</p><p>\u7528\u6237\u4E5F\u53EF\u4EE5\u6307\u5B9A\u5B89\u88C5\u8F6F\u4EF6\u6E90\u4E2D\u5176\u4ED6\u7248\u672C\u7684 Docker\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">apt-cache</span> madison docker-ce
 docker-ce <span class="token operator">|</span> <span class="token number">5</span>:20.10.8~3-0~ubuntu-bionic <span class="token operator">|</span> https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
 docker-ce <span class="token operator">|</span> <span class="token number">5</span>:20.10.7~3-0~ubuntu-bionic <span class="token operator">|</span> https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
<span class="token punctuation">..</span>.
 docker-ce <span class="token operator">|</span> <span class="token number">18.06</span>.0~ce~3-0~ubuntu <span class="token operator">|</span> https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
 docker-ce <span class="token operator">|</span> <span class="token number">18.03</span>.1~ce~3-0~ubuntu <span class="token operator">|</span> https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token number">18.03</span>.1~ce~3-0~ubuntu
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_2\u3001centos-\u73AF\u5883\u4E0B\u5B89\u88C5-docker" tabindex="-1"><a class="header-anchor" href="#_2\u3001centos-\u73AF\u5883\u4E0B\u5B89\u88C5-docker" aria-hidden="true">#</a> 2\u3001CentOS \u73AF\u5883\u4E0B\u5B89\u88C5 Docker</h3><p>Docker \u76EE\u524D\u652F\u6301 CentOS 7 \u53CA\u4EE5\u540E\u7684\u7248\u672C\u3002\u7CFB\u7EDF\u7684\u8981\u6C42\u8DDF Ubuntu \u60C5\u51B5\u7C7B\u4F3C\uFF0C64 \u4F4D\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u5185\u6838\u7248\u672C\u81F3\u5C11\u4E3A 3.10 \u3002</p><p>\u9996\u5148\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u6DFB\u52A0\u8F6F\u4EF6\u6E90\uFF0C\u4EE5\u53CA\u652F\u6301 devicemapper \u5B58\u50A8\u7C7B\u578B\uFF0C\u5B89\u88C5\u5982\u4E0B\u8F6F\u4EF6\u5305\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> yum update
$ <span class="token function">sudo</span> yum <span class="token function">install</span> -y yum-utils device-mapper-persistent-data lvm2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6DFB\u52A0 Docker \u7A33\u5B9A\u7248\u672C\u7684 yum \u8F6F\u4EF6\u6E90\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> yum-config-manager --add-repo https://download.docker.corn/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E4B\u540E\u66F4\u65B0 yum \u8F6F\u4EF6\u6E90\u7F13\u5B58\uFF0C\u5E76\u5B89\u88C5 Docker\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> yum update
$ <span class="token function">sudo</span> yum <span class="token function">install</span> -y docker-ce
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6700\u540E\uFF0C\u786E\u8BA4 Docker \u670D\u52A1\u542F\u52A8\u6B63\u5E38 :</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> systernctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_3\u3001\u901A\u8FC7\u811A\u672C\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u901A\u8FC7\u811A\u672C\u5B89\u88C5" aria-hidden="true">#</a> 3\u3001\u901A\u8FC7\u811A\u672C\u5B89\u88C5</h3><p>\u7528\u6237\u8FD8\u53EF\u4EE5\u4F7F\u7528\u5B98\u65B9\u63D0\u4F9B\u7684 shell \u811A\u672C\u6765\u5728 Linux \u7CFB\u7EDF\uFF08\u76EE\u524D\u652F\u6301 Ubuntu\u3001Debian\u3001Oracleserver\u3001Fedora\u3001Centos\u3001OpenSuse\u3001Gentoo \u7B49\u5E38\u89C1\u53D1\u884C\u7248\uFF09\u4E0A\u5B89\u88C5 Docker \u7684\u6700\u65B0\u6B63\u5F0F\u7248\u672C\uFF0C\u8BE5\u811A\u672C\u4F1A\u81EA\u52A8\u68C0\u6D4B\u7CFB\u7EDF\u4FE1\u606F\u5E76\u8FDB\u884C\u76F8\u5E94\u914D\u7F6E\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">curl</span> -fsSL https://get.docker.com/ <span class="token operator">|</span> <span class="token function">sh</span>
\u6216\u8005\uFF1A
$ <span class="token function">wget</span> -qO- https://get.docker.com/ <span class="token operator">|</span> <span class="token function">sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5982\u679C\u60F3\u5C1D\u9C9C\u6700\u65B0\u529F\u80FD\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u7684\u811A\u672C\u6765\u5B89\u88C5\u6700\u65B0\u7684\u201C\u5C1D\u9C9C\u201D\u7248\u672C\u3002\u4F46\u8981\u6CE8\u610F\uFF0C\u975E\u7A33\u5B9A\u7248\u672C\u5F80\u5F80\u610F\u5473\u7740\u529F\u80FD\u8FD8\u4E0D\u591F\u7A33\u5B9A\uFF0C\u4E0D\u8981\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u4F7F\u7528\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">curl</span> -fsSL https://test.docker.com/ <span class="token operator">|</span> <span class="token function">sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u53E6\u5916\uFF0C\u4E5F\u53EF\u4EE5\u4ECE store.docker.com/search?offering=community&amp;q=&amp;type=edition \u627E\u5230\u5404\u4E2A\u5E73\u53F0\u4E0A\u7684 Docker \u5B89\u88C5\u5305\uFF0C\u81EA\u884C\u4E0B\u8F7D\u4F7F\u7528\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u8BF4\u660E</p><p>\u5173\u4E8E macOS \u548C Windows \u7CFB\u7EDF\u7684 Docker \u5B89\u88C5\u65B9\u6CD5\uFF0C\u6B64\u5904\u7701\u7565\uFF0C\u4E0D\u8FDB\u884C\u8BF4\u660E\u3002</p></div><h2 id="\u914D\u7F6E-docker-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-docker-\u670D\u52A1" aria-hidden="true">#</a> \u914D\u7F6E Docker \u670D\u52A1</h2><p>\u4E3A\u4E86\u907F\u514D\u6BCF\u6B21\u4F7F\u7528 Docker \u547D\u4EE4\u65F6\u90FD\u9700\u8981\u5207\u6362\u5230\u7279\u6743\u8EAB\u4EFD\uFF0C\u53EF\u4EE5\u5C06\u5F53\u524D\u7528\u6237\u52A0\u5165\u5B89\u88C5\u4E2D\u81EA\u52A8\u521B\u5EFA\u7684 docker \u7528\u6237\u7EC4\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">usermod</span> -aG <span class="token function">docker</span> USER_NAME
<span class="token comment">#USER_NAME\u662F\u4F60\u4F7F\u7528\u7684\u7528\u6237\u540D\uFF0C\u53EF\u4EE5 echo $USER \u547D\u4EE4\u67E5\u770B</span>
<span class="token comment">#\u6216\u8005\u76F4\u63A5\u7528\u4E0B\u9762\u547D\u4EE4\uFF0C\u5C06\u5F53\u524D\u7528\u6237\u52A0\u5165\u5230docker\u7EC4</span>
$ <span class="token function">sudo</span> <span class="token function">usermod</span> -aG <span class="token function">docker</span> <span class="token environment constant">$USER</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u7528\u6237\u66F4\u65B0\u7EC4\u4FE1\u606F\uFF0C\u9000\u51FA\u5E76\u91CD\u65B0\u767B\u5F55\u540E\u5373\u53EF\u751F\u6548\u3002</p><p>Docker \u670D\u52A1\u542F\u52A8\u65F6\u5B9E\u9645\u4E0A\u662F\u8C03\u7528\u4E86 <code>dockerd</code> \u547D\u4EE4\uFF0C\u652F\u6301\u591A\u79CD\u542F\u52A8\u53C2\u6570\u3002\u56E0\u6B64\uFF0C\u7528\u6237\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u6267\u884C <code>dockerd</code> \u547D\u4EE4\u6765\u542F\u52A8 Docker \u670D\u52A1\uFF0C\u5982\u4E0B\u9762\u7684\u547D\u4EE4\u542F\u52A8 Docker \u670D\u52A1\uFF0C\u5F00\u542F Debug \u6A21\u5F0F\uFF0C\u5E76\u76D1\u542C\u5728\u672C\u5730\u7684 2376 \u7AEF\u53E3\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ dockerd -D -H tcp://127.0.0.1:2376
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FD9\u4E9B\u9009\u9879\u53EF\u4EE5\u5199\u5165 <code>/etc/docker/</code> \u8DEF\u5F84\u4E0B\u7684 <code>daemon.json</code> \u6587\u4EF6\u4E2D\uFF0C\u7531 dockerd \u670D\u52A1\u542F\u52A8\u65F6\u8BFB\u53D6\uFF1A</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
		<span class="token property">&quot;debug&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token property">&quot;hosts&quot;</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;tcp://127.0.0.1:2376&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5F53\u7136\uFF0C\u64CD\u4F5C\u7CFB\u7EDF\u4E5F\u5BF9 Docker \u670D\u52A1\u8FDB\u884C\u4E86\u5C01\u88C5\uFF0C\u4EE5\u4F7F\u7528 Upstart \u6765\u7BA1\u7406\u542F\u52A8\u670D\u52A1\u7684 Ubuntu \u7CFB\u7EDF\u4E3A\u4F8B\uFF0CDocker \u670D\u52A1\u7684\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u4E3A <code>/etc/default/docker</code> \uFF0C\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539\u5176\u4E2D\u7684 DOCKER_OPTS \u6765\u4FEE\u6539\u670D\u52A1\u542F\u52A8\u7684\u53C2\u6570\uFF0C\u4F8B\u5982\u8BA9 Docker \u670D\u52A1\u5F00\u542F\u7F51\u7EDC 2375 \u7AEF\u53E3\u7684\u76D1\u6615\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">DOCKER_OPTS</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$DOCKER_OPTS</span> -H tcp://0.0.0.0:2375 -H unix:///var/run/docker.sock&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4FEE\u6539\u4E4B\u540E\uFF0C\u901A\u8FC7 <code>service</code> \u547D\u4EE4\u6765\u91CD\u542F Docker \u670D\u52A1\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">service</span> <span class="token function">docker</span> restart
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5BF9\u4E8E CentOS\u3001RedHat \u7B49\u7CFB\u7EDF\uFF0C\u670D\u52A1\u901A\u8FC7 systemd \u6765\u7BA1\u7406\uFF0C\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84\u4E3A <code>/etc/systemd/system/docker.service.d/docker.conf</code>\u3002\u66F4\u65B0\u914D\u7F6E\u540E\u9700\u8981\u901A\u8FC7 <code>systemctl</code> \u547D\u4EE4\u6765\u7BA1\u7406 Docker \u670D\u52A1\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> systemctl daemon-reload
$ <span class="token function">sudo</span> systemctl start docker.service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6B64\u5916\uFF0C\u5982\u679C\u670D\u52A1\u5DE5\u4F5C\u4E0D\u6B63\u5E38\uFF0C\u53EF\u4EE5\u901A\u8FC7\u67E5\u770B Docker \u670D\u52A1\u7684\u65E5\u5FD7\u4FE1\u606F\u6765\u786E\u5B9A\u95EE\u9898\uFF0C\u4F8B\u5982\u5728 RedHat \u7CFB\u7EDF\u4E0A\u65E5\u5FD7\u6587\u4EF6\u53EF\u80FD\u4E3A <code>/var/log/messages</code>\uFF0C\u5728 Ubuntu \u6216 CentOS \u7CFB\u7EDF\u4E0A\u53EF\u4EE5\u6267\u884C\u547D\u4EE4 <code>journalctl -u docker.service</code>\u3002</p><p>\u6BCF\u6B21\u91CD\u542F Docker \u670D\u52A1\u540E\uFF0C\u53EF\u4EE5\u901A\u8FC7\u67E5\u770B Docker \u4FE1\u606F\uFF08docker info \u547D\u4EE4\uFF09\uFF0C\u786E\u4FDD\u670D\u52A1\u5DF2\u7ECF\u6B63\u5E38\u8FD0\u884C \u3002</p><h2 id="\u63A8\u8350\u5B9E\u8DF5\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u63A8\u8350\u5B9E\u8DF5\u73AF\u5883" aria-hidden="true">#</a> \u63A8\u8350\u5B9E\u8DF5\u73AF\u5883</h2><p>\u4ECE\u7A33\u5B9A\u6027\u4E0A\u8003\u8651\uFF0C\u63A8\u8350\u5B9E\u8DF5\u73AF\u5883\u7684\u64CD\u4F5C\u7CFB\u7EDF\u662F Ubuntu 18.04 LTS \u7CFB\u7EDF\u6216 Debian \u7A33 \u5B9A\u7248\u672C\u7CFB\u7EDF\uFF0C\u4F7F\u7528 Linux 4.0 \u4EE5\u4E0A\u5185\u6838 \u3002 Docker \u4E0D\u540C\u7248\u672C\u7684 API \u4F1A\u7565\u6709\u5DEE\u5F02\uFF0C\u63A8\u8350\u6839\u636E\u9700\u6C42\u9009\u62E9\u8F83\u65B0\u7684\u7A33\u5B9A\u7248\u672C \u3002</p><p>\u5982\u65E0\u7279\u6B8A\u8BF4\u660E\uFF0C\u9ED8\u8BA4\u6570\u636E\u7F51\u6BB5\u5730\u5740\u8303\u56F4\u4E3A 10.0.0.0/24\uFF0C\u7BA1\u7406\u7F51\u6BB5\u5730\u5740\u8303\u56F4\u4E3A 192.168.0.0/24 \u3002</p><p>\u53E6\u5916\uFF0C\u6267\u884C\u547D\u4EE4\u4EE3\u7801\u4E2D\u4EE5 <strong>$</strong> \u5F00\u5934\u7684\uFF0C\u8868\u660E\u4E3A\u666E\u901A\u7528\u6237\uFF1B\u4EE5 <strong>#</strong> \u5F00\u5934\u7684\uFF0C\u8868\u660E\u4E3A\u7279\u6743\u7528\u6237\uFF08root\uFF09\u3002\u5982\u679C\u7528\u6237\u5DF2\u7ECF\u6DFB\u52A0\u5230\u4E86 docker \u7528\u6237\u7EC4\uFF0C\u5927\u90E8\u5206\u65F6\u5019\u90FD\u65E0\u987B\u7BA1\u7406\u5458\u6743\u9650\uFF0C\u5426\u5219\u9700\u8981\u5728\u547D\u4EE4\u524D\u4F7F\u7528 sudo \u6765\u4E34\u65F6\u63D0\u5347\u6743\u9650\u3002</p><p>\u90E8\u5206\u547D\u4EE4\u6267\u884C\u7ED3\u679C\u8F93\u51FA\u5185\u5BB9\u8F83\u957F\u7684\uFF0C\u53EA\u7ED9\u51FA\u5173\u952E\u90E8\u5206\u8F93\u51FA\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><p>\u4ECB\u7ECD\u4E86 Docker \u7684\u4E09\u5927\u6838\u5FC3\u6982\u5FF5\uFF1A\u955C\u50CF\u3001\u5BB9\u5668\u548C\u4ED3\u5E93\uFF0C\u4EE5\u53CA\u5982\u4F55\u5B89\u88C5\u548C\u914D\u7F6E Docker \u5F15\u64CE\u670D\u52A1\u3002</p><p>\u5728\u540E\u9762\u7684\u5B9E\u8DF5\u4E2D\uFF0C\u4F60\u4F1A\u611F\u53D7\u5230\uFF0C\u57FA\u4E8E\u4E09\u5927\u6838\u5FC3\u6982\u5FF5\u6240\u6784\u5EFA\u7684\u9AD8\u6548\u5DE5\u4F5C\u6D41\u7A0B\uFF0C\u6B63\u662F Docker \u4ECE\u4F17\u591A\u5BB9\u5668\u865A\u62DF\u5316\u65B9\u6848\u4E2D\u8131\u9896\u800C\u51FA\u7684\u91CD\u8981\u539F\u56E0\u3002\u5B9E\u9645\u4E0A\uFF0CDocker \u548C Docker Hub \u7684\u5DE5\u4F5C\u6D41\u4E5F\u5E76\u975E\u51ED\u7A7A\u521B\u9020\u7684\uFF0C\u5F88\u5927\u7A0B\u5EA6\u4E0A\u53C2\u8003\u4E86 Git \u548C Github \u7684\u8BBE\u8BA1\u7406\u5FF5\uFF0C\u4ECE\u800C\u4E3A\u5E94\u7528\u5206\u53D1\u548C\u56E2\u961F\u5408\u4F5C\u90FD\u5E26\u6765\u4E86\u4F17\u591A\u4F18\u52BF\u3002</p>`,78);function D(f,x){const e=o("ExternalLinkIcon");return p(),r(l,null,[b,s("p",null,[k,s("a",m,[h,t(e)]),g]),v],64)}var S=c(d,[["render",D]]);export{S as default};
