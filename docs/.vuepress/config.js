const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "KARIN",
  description: "KARIN的学习笔记",
  base: "/blog/",
  dest: "./dist",

  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
    },
  },

  themeConfig: {
    logo: "/logo.png",
    hostname: "https://vuepress-theme-hope-demo.mrhope.site",

    author: "karin",
    repo: "https://github.com/Ryukarin/blog",

    nav: [
      { text: "主页", link: "/", icon: "home" },
      { text: "项目总览", link: "/project/", icon: "folder" },
      { text: "IT 基础", link: "/IT/", icon: "blog" },
      { text: "瞎折腾", link: "/operate/", icon: "operate" },
    ],

    sidebar: {
      "/": [
        "",
        "project",

        { title: "IT基础", icon: "blog", prefix: "IT/", children: ["", "FTP","SFTP", "git" ]},
        
        { title: "瞎折腾", icon: "operate", prefix: "operate/", children: ["", "padavan", "openwrt", "flippy_openWRT", "N1_armbian", "N1_logo_PARTITION", "bky_P1", "XY_C1C5", "XY_C1C5_sj", "AC_RM2100", "Q5", "MSG1500", "vuepress_blog", "mkbootimg","squashfs"]},
        
        	{ title: "Linux基础知识", icon: "linux", prefix: "project/Linux_basic/", children: ["", "01.linux_atten", "02.linux_dir", "03.linux_basic" ,"04.linux_authority", "05.linux_help", "06.linux_search", "07.linux_compress", "08.linux_shutdown_reboot", "09.linux_net", "10.linux_text_edit", "11.linux_soft_install", "12.linux_user_group", "13.linux_other_auth", "14.linux_filesystem_manage"]},

	{ title: "Linux系统管理", icon: "linux", prefix: "project/Linux_manage/", children: ["", "01.linux_boot", "02.linux_service", "03.linux_process", "04.linux_work", "05.linux_log", "06.LAMP_LNMP_evn", "07.linux_backup_recover", "08.SELinux"]},

	{ title: "Linux大杂烩", icon: "linux", prefix: "project/Linux_mix/", children: ["", "Linux_sed_grep_awk", ]},

	{ title: "Shell笔记", icon: "shell", prefix: "project/Shell/", sidebarDepth: 3,  children: ["", "01.Shell_intro", "02.Shell_grammar", "03.Shell_format_out", "04.Shell_format_in", "05.Shell_var", "06.Shell_array", "07.Shell_operation", "08.Shell_if", "09.Shell_for", "10.Shell_while", "11.Shell_until", "12.Shell_case", "13.Shell_function", "14.Shell_regular", "15.Shell_grep", "16.Shell_sed", "17.Shell_awk", "18.Shell_monitor_script", "19.Shell_lamp_install_script"]},

	{ title: "Docker笔记", icon: "geometry", prefix: "project/Docker/", children: ["", "01.docker", "02.docker", "03.docker", "04.docker", "05.docker", "06.docker", "07.docker", "08.docker"],},

	{ title: "Git笔记", icon: "git", prefix: "project/Git/", children:["", "01.Git_install", "02.Git_config", "03.Git_workfllow", "04.Git_work_stage_git", "05.Git_init_repo", "06.Git_basic_opera" ,"07.Git_branch_manage", "08.Git_log", "09.Git_tag", "10.Git_remote", "11.Git_server"]},

	{ title: "Excel修炼秘籍", icon: "note", prefix: "project/Excel/", children: ["", "01.Excel_hotkey", "02.Excel_function", "03.VBA_Range", "04.VBA_Sheet", "05.VBA_Workbook", "06.VBA_Shape_Chart", "07.VBA_Application", "08.VBA_dialog", "09.VBA_menu_toolbar", "10.VBA_controls_form_1", "11.VBA_controls_form_2" , "12.VBA_controls_form_3", "13.VBA_function", "14.VBA_fso"]},
      ],
    },

    blog: {
      intro: "/intro/",
      sidebarDisplay: "mobile",
      links: {
        Gitee: "https://gitee.com/ryuukarin",
        Github: "https://github.com/Ryukarin",
      },
    },

    footer: {
      display: true,
      content: "MIT Licensed",
    },

    comment: {
      type: "waline",
      serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    copyright: {
      status: "global",
    },

    git: {
      timezone: "Asia/Shanghai",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/favicon.png",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
