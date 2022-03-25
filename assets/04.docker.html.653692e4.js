const e={key:"v-97f542a2",path:"/project/Docker/04.docker.html",title:"\u64CD\u4F5C Docker \u5BB9\u5668",lang:"zh-CN",frontmatter:{title:"\u64CD\u4F5C Docker \u5BB9\u5668",date:"2021-08-23T00:00:00.000Z",tag:["docker"],category:["\u7B14\u8BB0"],summary:"\u5BB9\u5668\u662F Docker \u7684\u53E6 \u4E00\u4E2A\u6838\u5FC3\u6982\u5FF5\u3002\u7B80\u5355\u6765\u8BF4\uFF0C\u5BB9\u5668\u662F\u955C\u50CF\u7684\u4E00\u4E2A\u8FD0\u884C\u5B9E\u4F8B\u3002\u6240\u4E0D\u540C\u7684\u662F\uFF0C\u955C\u50CF\u662F\u9759\u6001\u7684\u53EA\u8BFB\u6587\u4EF6\uFF0C\u800C\u5BB9\u5668\u5E26\u6709\u8FD0\u884C\u65F6\u9700\u8981\u7684\u53EF\u5199\u6587\u4EF6\u5C42\uFF0C\u540C\u65F6\uFF0C\u5BB9\u5668\u4E2D\u7684\u5E94\u7528\u8FDB\u7A0B\u5904\u4E8E\u8FD0\u884C\u72B6\u6001\u3002 \u5982\u679C\u8BA4\u4E3A\u865A\u62DF\u673A\u662F\u6A21\u62DF\u8FD0\u884C\u7684\u4E00\u6574\u5957\u64CD\u4F5C\u7CFB\u7EDF\uFF08\u5305\u62EC\u5185\u6838\u3001\u5E94\u7528\u8FD0\u884C\u6001\u73AF\u5883\u548C\u5176\u4ED6\u7CFB\u7EDF\u73AF\u5883\uFF09\u548C\u8DD1\u5728\u4E0A\u9762\u7684\u5E94\u7528\u3002\u90A3\u4E48 Docker \u5BB9\u5668\u5C31\u662F\u72EC\u7ACB\u8FD0\u884C\u7684\u4E00\u4E2A\uFF08\u6216\u4E00\u7EC4\uFF09\u5E94\u7528\uFF0C\u4EE5\u53CA\u5B83\u4EEC\u5FC5\u9700\u7684\u8FD0\u884C",head:[["meta",{property:"og:url",content:"https://ryukarin.github.io/blog/blog/project/Docker/04.docker.html"}],["meta",{property:"og:site_name",content:"KARIN"}],["meta",{property:"og:title",content:"\u64CD\u4F5C Docker \u5BB9\u5668"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"article:tag",content:"docker"}],["meta",{property:"article:published_time",content:"2021-08-23T00:00:00.000Z"}]]},excerpt:"",headers:[{level:2,title:"\u521B\u5EFA\u5BB9\u5668",slug:"\u521B\u5EFA\u5BB9\u5668",children:[{level:3,title:"1\u3001\u65B0\u5EFA\u5BB9\u5668",slug:"_1\u3001\u65B0\u5EFA\u5BB9\u5668",children:[]},{level:3,title:"2\u3001\u542F\u52A8\u5BB9\u5668",slug:"_2\u3001\u542F\u52A8\u5BB9\u5668",children:[]},{level:3,title:"3\u3001\u65B0\u5EFA\u4E95\u542F\u52A8\u5BB9\u5668",slug:"_3\u3001\u65B0\u5EFA\u4E95\u542F\u52A8\u5BB9\u5668",children:[]},{level:3,title:"4\u3001\u5B88\u62A4\u6001\u8FD0\u884C",slug:"_4\u3001\u5B88\u62A4\u6001\u8FD0\u884C",children:[]},{level:3,title:"5\u3001\u67E5\u770B\u5BB9\u5668\u8F93\u51FA",slug:"_5\u3001\u67E5\u770B\u5BB9\u5668\u8F93\u51FA",children:[]}]},{level:2,title:"\u505C\u6B62\u5BB9\u5668",slug:"\u505C\u6B62\u5BB9\u5668",children:[{level:3,title:"1\u3001\u6682\u505C\u5BB9\u5668",slug:"_1\u3001\u6682\u505C\u5BB9\u5668",children:[]},{level:3,title:"2\u3001\u7EC8\u6B62\u5BB9\u5668",slug:"_2\u3001\u7EC8\u6B62\u5BB9\u5668",children:[]}]},{level:2,title:"\u8FDB\u4EBA\u5BB9\u5668",slug:"\u8FDB\u4EBA\u5BB9\u5668",children:[{level:3,title:"1\u3001attach \u547D\u4EE4",slug:"_1\u3001attach-\u547D\u4EE4",children:[]},{level:3,title:"2\u3001exec \u547D\u4EE4",slug:"_2\u3001exec-\u547D\u4EE4",children:[]}]},{level:2,title:"\u5220\u9664\u5BB9\u5668",slug:"\u5220\u9664\u5BB9\u5668",children:[]},{level:2,title:"\u5BFC\u4EBA\u548C\u5BFC\u51FA\u5BB9\u5668",slug:"\u5BFC\u4EBA\u548C\u5BFC\u51FA\u5BB9\u5668",children:[{level:3,title:"1\u3001\u5BFC\u51FA\u5BB9\u5668",slug:"_1\u3001\u5BFC\u51FA\u5BB9\u5668",children:[]},{level:3,title:"2\u3001\u5BFC\u5165\u5BB9\u5668",slug:"_2\u3001\u5BFC\u5165\u5BB9\u5668",children:[]}]},{level:2,title:"\u67E5\u770B\u5BB9\u5668",slug:"\u67E5\u770B\u5BB9\u5668",children:[{level:3,title:"1\u3001\u67E5\u770B\u5BB9\u5668\u8BE6\u60C5",slug:"_1\u3001\u67E5\u770B\u5BB9\u5668\u8BE6\u60C5",children:[]},{level:3,title:"2\u3001\u67E5\u770B\u5BB9\u5668\u5185\u8FDB\u7A0B",slug:"_2\u3001\u67E5\u770B\u5BB9\u5668\u5185\u8FDB\u7A0B",children:[]},{level:3,title:"3\u3001\u67E5\u770B\u7EDF\u8BA1\u4FE1\u606F",slug:"_3\u3001\u67E5\u770B\u7EDF\u8BA1\u4FE1\u606F",children:[]}]},{level:2,title:"\u5176\u4ED6\u5BB9\u5668\u547D\u4EE4",slug:"\u5176\u4ED6\u5BB9\u5668\u547D\u4EE4",children:[{level:3,title:"1\u3001\u590D\u5236\u6587\u4EF6",slug:"_1\u3001\u590D\u5236\u6587\u4EF6",children:[]},{level:3,title:"2\u3001\u67E5\u770B\u53D8\u66F4",slug:"_2\u3001\u67E5\u770B\u53D8\u66F4",children:[]},{level:3,title:"3\u3001\u67E5\u770B\u7AEF\u53E3\u6620\u5C04",slug:"_3\u3001\u67E5\u770B\u7AEF\u53E3\u6620\u5C04",children:[]},{level:3,title:"4\u3001\u66F4\u65B0\u914D\u7F6E",slug:"_4\u3001\u66F4\u65B0\u914D\u7F6E",children:[]}]},{level:2,title:"\u5C0F\u7ED3",slug:"\u5C0F\u7ED3",children:[]}],git:{},readingTime:{minutes:21.7,words:6510},filePathRelative:"project/Docker/04.docker.md"};export{e as data};