(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1122:function(t,e,a){"use strict";a.r(e);var l=a(1),i=Object(l.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h2",{attrs:{id:"git-基本操作"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#git-基本操作"}},[t._v("#")]),t._v(" Git 基本操作")]),t._v(" "),l("p",[t._v("Git 的工作就是创建和保存你项目的快照及与之后的快照进行对比。")]),t._v(" "),l("p",[t._v("本节将对有关创建与提交你的项目快照的命令作介绍。")]),t._v(" "),l("p",[t._v("Git 常用的是以下 6 个命令："),l("code",[t._v("git clone")]),t._v("、"),l("code",[t._v("git push")]),t._v("、"),l("code",[t._v("git add")]),t._v("、"),l("code",[t._v("git commit")]),t._v("、"),l("code",[t._v("git checkout")]),t._v("、"),l("code",[t._v("git pull")]),t._v("，后面我们会详细介绍。")]),t._v(" "),l("p",[l("img",{attrs:{src:a(849),alt:"git_command",loading:"lazy"}})]),t._v(" "),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),l("ul",[l("li",[t._v("workspace：工作区")]),t._v(" "),l("li",[t._v("staging area：暂存区/缓存区")]),t._v(" "),l("li",[t._v("local repository：版本库或本地仓库")]),t._v(" "),l("li",[t._v("remote repository：远程仓库")])])]),t._v(" "),l("p",[t._v("一个简单的操作步骤：")]),t._v(" "),l("div",{staticClass:"language-shell line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-shell"}},[l("code",[t._v("$ "),l("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n$ "),l("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),l("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),l("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n$ "),l("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit\n")])]),t._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[t._v("1")]),l("br"),l("span",{staticClass:"line-number"},[t._v("2")]),l("br"),l("span",{staticClass:"line-number"},[t._v("3")]),l("br")])]),l("ul",[l("li",[l("code",[t._v("git init")]),t._v(" ：初始化仓库。")]),t._v(" "),l("li",[l("code",[t._v("git add .")]),t._v(" ：添加文件到暂存区。")]),t._v(" "),l("li",[l("code",[t._v("git commit")]),t._v(" ：将暂存区内容添加到仓库中。")])]),t._v(" "),l("h3",{attrs:{id:"创建仓库命令"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#创建仓库命令"}},[t._v("#")]),t._v(" 创建仓库命令")]),t._v(" "),l("p",[t._v("下表列出了 git 创建仓库的命令：")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("命令")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("git init")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("初始化仓库")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("git clone")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("拷贝一份远程仓库，也就是下载一个项目。")])])])]),t._v(" "),l("h3",{attrs:{id:"提交与修改"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#提交与修改"}},[t._v("#")]),t._v(" 提交与修改")]),t._v(" "),l("p",[t._v("Git 的工作就是创建和保存你的项目的快照及与之后的快照进行对比。")]),t._v(" "),l("p",[t._v("下表列出了有关创建与提交你的项目的快照的命令：")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("命令")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("git add")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("添加文件到仓库")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("git status")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("查看仓库当前的状态，显示有变更的文件。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("git diff")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("比较文件的不同，即暂存区和工作区的差异。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("git commit")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("提交暂存区到本地仓库。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("git reset")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("回退版本。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("git rm")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("删除工作区文件。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("git mv")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("移动或重命名工作区文件。")])])])]),t._v(" "),l("h3",{attrs:{id:"提交日志"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#提交日志"}},[t._v("#")]),t._v(" 提交日志")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("命令")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("git log")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("查看历史提交记录")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("git blame <file>")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("以列表形式查看指定文件的历史修改记录")])])])]),t._v(" "),l("h3",{attrs:{id:"远程操作"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#远程操作"}},[t._v("#")]),t._v(" 远程操作")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("命令")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("git remote")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("远程仓库操作")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("git fetch")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("从远程获取代码库")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("git pull")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("下载远程代码并合并")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[l("code",[t._v("git push")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("上传远程代码并合并")])])])])])}),[],!1,null,null,null);e.default=i.exports},849:function(t,e,a){t.exports=a.p+"assets/img/git-command.7d2c016c.jpg"}}]);