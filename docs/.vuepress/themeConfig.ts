import { defineThemeConfig } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default defineThemeConfig({
  hostname: "https://ryukarin.github.io/blog/",

  author: {
    name: "karin",
    url: "https://ryukarin.github.io/blog/",
  },

  iconPrefix: "iconfont icon-",

  logo: "/logo.png",

  repo: "https://github.com/Ryukarin/blog",

  docsDir: "",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "MIT Licensed",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "不学无术",
    intro: "/intro.html",
    medias: {
      Gitee: "https://gitee.com/ryuukarin",
      GitHub: "https://github.com/Ryukarin",
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },
    search: {
      maxSuggestions: 20,
      isSearchable: (page) => page.path !== '/',
      getExtraFields: (page) => page.frontmatter.tags ?? [],
      locales: {
        "/": {
          placeholder: "搜索文档",
        },
      },
    },

    // 你也可以使用 Waline
    comment: {
      type: "giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
