export const data = {
  "key": "v-306322d9",
  "path": "/project/Linux_manage/05.linux_log.html",
  "title": "linux系统日志管理",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "linux系统日志管理",
    "summary": "系统日志详细地记录了在什么时间，哪台服务器、哪个程序或服务出现了什么情况。不管是哪种操作系统，都详细地记录了重要程序和服务的日志，只是我们很少养成查看日志的习惯。 日志是系统信息最详细、最准确的记录者，如果大家能够善用日志，那么当系统出现问题时，我们就能在第一时间发现问题，也能够从日志中找到解决问题的方法。 很多人都觉得查看日志比较枯燥，甚至干脆看不懂，那么",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://ryukarin.github.io/blog/project/Linux_manage/05.linux_log.html"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "KARIN"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "linux系统日志管理"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "linux"
        }
      ],
      [
        "meta",
        {
          "property": "article:published_time",
          "content": "2021-05-31T16:00:00.000Z"
        }
      ]
    ],
    "tag": [
      "linux"
    ],
    "category": [
      "笔记"
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "日志简介",
      "slug": "日志简介",
      "children": [
        {
          "level": 3,
          "title": "日志相关服务",
          "slug": "日志相关服务",
          "children": []
        },
        {
          "level": 3,
          "title": "系统中常见的日志文件",
          "slug": "系统中常见的日志文件",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "日志服务 rsyslogd",
      "slug": "日志服务-rsyslogd",
      "children": [
        {
          "level": 3,
          "title": "日志文件的格式",
          "slug": "日志文件的格式",
          "children": []
        },
        {
          "level": 3,
          "title": "rsyslogd 服务的配置文件",
          "slug": "rsyslogd-服务的配置文件",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "日志轮替",
      "slug": "日志轮替",
      "children": [
        {
          "level": 3,
          "title": "日志文件的命名规则",
          "slug": "日志文件的命名规则",
          "children": []
        },
        {
          "level": 3,
          "title": "logrotate 配置文件",
          "slug": "logrotate-配置文件",
          "children": []
        },
        {
          "level": 3,
          "title": "把自己的日志加入日志轮替",
          "slug": "把自己的日志加入日志轮替",
          "children": []
        },
        {
          "level": 3,
          "title": "logrotate 命令",
          "slug": "logrotate-命令",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "日志分析工具",
      "slug": "日志分析工具",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 38.5,
    "words": 11551
  },
  "filePathRelative": "project/Linux_manage/05.linux_log.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
