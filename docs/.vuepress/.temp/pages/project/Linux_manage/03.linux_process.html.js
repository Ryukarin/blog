export const data = {
  "key": "v-2f163bd0",
  "path": "/project/Linux_manage/03.linux_process.html",
  "title": "linux系统进程管理",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "linux系统进程管理",
    "summary": "很多人一看要学习系统管理了，策一感觉就是\"虽然不知道你在说什么，但是看起来很高端\"。 其实，系统管理只是一个统称，软件管理、文件系统管理、启动管理和服务管理都可以归入系统管理当中。 这次，我们主要学习进程管理、工作管理和系统定时任务。同时解决一些问题，如什么是进程、进程的管理方式是什么、工作管理的作用是什么、系统定时任务如何实现。 进程的简介 无论是 Lin",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://ryukarin.github.io/blog/project/Linux_manage/03.linux_process.html"
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
          "content": "linux系统进程管理"
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
      "title": "进程的简介",
      "slug": "进程的简介",
      "children": [
        {
          "level": 3,
          "title": "什么是进程和程序",
          "slug": "什么是进程和程序",
          "children": []
        },
        {
          "level": 3,
          "title": "进程管理的作用",
          "slug": "进程管理的作用",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "进程的启动",
      "slug": "进程的启动",
      "children": [
        {
          "level": 3,
          "title": "手工启动",
          "slug": "手工启动",
          "children": []
        },
        {
          "level": 3,
          "title": "调度启动进程",
          "slug": "调度启动进程",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "进程的查看",
      "slug": "进程的查看",
      "children": [
        {
          "level": 3,
          "title": "ps 命令：静态查看进程",
          "slug": "ps-命令-静态查看进程",
          "children": []
        },
        {
          "level": 3,
          "title": "top 命令：动态查看进程",
          "slug": "top-命令-动态查看进程",
          "children": []
        },
        {
          "level": 3,
          "title": "pstree 命令：树形查看进程",
          "slug": "pstree-命令-树形查看进程",
          "children": []
        },
        {
          "level": 3,
          "title": "lsof 命令：查看进程调用信息",
          "slug": "lsof-命令-查看进程调用信息",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "进程的管理",
      "slug": "进程的管理",
      "children": [
        {
          "level": 3,
          "title": "进程优先级",
          "slug": "进程优先级",
          "children": []
        },
        {
          "level": 3,
          "title": "nice 命令",
          "slug": "nice-命令",
          "children": []
        },
        {
          "level": 3,
          "title": "renice 命令",
          "slug": "renice-命令",
          "children": []
        },
        {
          "level": 3,
          "title": "进程间通信",
          "slug": "进程间通信",
          "children": []
        },
        {
          "level": 3,
          "title": "kill 命令：终止进程",
          "slug": "kill-命令-终止进程",
          "children": []
        },
        {
          "level": 3,
          "title": "killall 命令：终止特定的一类进程",
          "slug": "killall-命令-终止特定的一类进程",
          "children": []
        },
        {
          "level": 3,
          "title": "pkill 命令：终止进程，踢出用户",
          "slug": "pkill-命令-终止进程-踢出用户",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 46.07,
    "words": 13822
  },
  "filePathRelative": "project/Linux_manage/03.linux_process.md"
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
