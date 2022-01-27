(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1125:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"git-标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-标签"}},[s._v("#")]),s._v(" Git 标签")]),s._v(" "),t("p",[s._v("如果你达到一个重要的阶段，并希望永远记住那个特别的提交快照，你可以使用 "),t("code",[s._v("git tag")]),s._v(" 给它打上标签。")]),s._v(" "),t("p",[s._v('比如说，我们想为我们的 runoob 项目发布一个"1.0"版本。 我们可以用 '),t("code",[s._v("git tag -a v1.0")]),s._v(' 命令给最新一次提交打上（HEAD）"v1.0"的标签。')]),s._v(" "),t("p",[t("strong",[s._v("-a")]),s._v(' 选项意为"创建一个带注解的标签"。 不用 -a 选项也可以执行的，但它不会记录这标签是啥时候打的，谁打的，也不会让你添加个标签的注解。 我推荐一直创建带注解的标签。')]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -a v1.0 \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("当你执行 "),t("code",[s._v("git tag -a")]),s._v(" 命令时，Git 会打开你的编辑器，让你写一句标签注解，就像你给提交写注解一样。")]),s._v(" "),t("p",[s._v("现在，注意当我们执行 "),t("code",[s._v("git log --decorate")]),s._v(" 时，我们可以看到我们的标签了：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --decorate\n*   d5e9fc2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Merge branch "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'change_site'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" * "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7774248")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("change_site"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" changed the runoob.php\n* "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" c68142b 修改代码\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("/  \n* c1501a2 removed test.txt、add runoob.php\n* 3e92c19 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" test.txt\n* 3b58100 第一次版本提交\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("如果我们忘了给某个提交打标签，又将它发布了，我们可以给它追加标签。")]),s._v(" "),t("p",[s._v("例如，假设我们发布了提交 85fc7e7(上面实例最后一行)，但是那时候忘了给它打标签。 我们现在也可以：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag -a v0.9 85fc7e7\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --oneline --decorate --graph\n*   d5e9fc2 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Merge branch "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'change_site'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("  \n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" * "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7774248")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("change_site"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" changed the runoob.php\n* "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" c68142b 修改代码\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("/  \n* c1501a2 removed test.txt、add runoob.php\n* 3e92c19 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" test.txt\n* 3b58100 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tag: v0.9"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 第一次版本提交\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("如果我们要查看所有标签可以使用以下命令：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ git tag\nv0.9\nv1.0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("指定标签信息命令：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('git tag -a <tagname> -m "runoob.com标签"\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("PGP签名标签命令：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('git tag -s <tagname> -m "runoob.com标签"\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])])])}),[],!1,null,null,null);a.default=e.exports}}]);