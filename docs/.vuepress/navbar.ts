import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  "/",
  "/project",
  { text: "知识要点", icon: "edit", link: "/IT" },
  { text: "捣鼓折腾", icon: "operate", link: "/operate" },
  { text: "linux", icon: "linux", prefix: "/project", children: [
    { text: "linux基础知识", icon: "linux", link: "/Linux/Linux_basic" },
    { text: "linux系统管理", icon: "linux", link: "/Linux/Linux_manage" },
    { text: "linux大杂烩", icon: "linux", link: "/Linux/Linux_mix" },
    { text: "shell脚本笔记", icon: "shell", link: "/Linux/Shell" },
    ]},
  { text: "Git笔记", icon: "hot", link: "/project/Git" },
  { text: "Excel修炼秘籍", icon: "table", link: "/project/Excel" },
]);
