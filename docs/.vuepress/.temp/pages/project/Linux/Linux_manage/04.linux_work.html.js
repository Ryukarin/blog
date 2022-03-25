export const data = {
  "key": "v-2a0c23b0",
  "path": "/project/Linux/Linux_manage/04.linux_work.html",
  "title": "linux系统工作管理",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "linux系统工作管理",
    "date": "2021-06-01T00:00:00.000Z",
    "tag": [
      "linux"
    ],
    "category": [
      "笔记"
    ],
    "summary": "工作管理简介 工作管理指的是在单个登录终端（也就是登录的 Shell 界面）同时管理多个工作的行为。也就是说，我们登陆了一个终端，已经在执行一个操作，那么是否可以在不关闭当前操作的情况下执行其他操作呢？ 当然可以，我们可以再启动一个终端，然后执行其他的操作。不过，是否可以在一个终端执行不同的操作呢？这就需要通过工作管理来实现了。 例如，我在当前终端正在 vi",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://ryukarin.github.io/blog/blog/project/Linux/Linux_manage/04.linux_work.html"
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
          "content": "linux系统工作管理"
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
          "content": "2021-06-01T00:00:00.000Z"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "工作管理简介",
      "slug": "工作管理简介",
      "children": []
    },
    {
      "level": 2,
      "title": "如何把命令放入后台",
      "slug": "如何把命令放入后台",
      "children": [
        {
          "level": 3,
          "title": "命令 &，把命令放入后台执行",
          "slug": "命令-把命令放入后台执行",
          "children": []
        },
        {
          "level": 3,
          "title": "命令执行过程中按 Ctrl+z 快捷键，命令在后台处于暂停状态",
          "slug": "命令执行过程中按-ctrl-z-快捷键-命令在后台处于暂停状态",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "后台命令管理",
      "slug": "后台命令管理",
      "children": [
        {
          "level": 3,
          "title": "jobs 命令：查看后台的工作",
          "slug": "jobs-命令-查看后台的工作",
          "children": []
        },
        {
          "level": 3,
          "title": "gf 命令：把后台命令恢复到前台执行",
          "slug": "gf-命令-把后台命令恢复到前台执行",
          "children": []
        },
        {
          "level": 3,
          "title": "bg 命令：把后台暂停的工作恢复到后台执行",
          "slug": "bg-命令-把后台暂停的工作恢复到后台执行",
          "children": []
        },
        {
          "level": 3,
          "title": "nohup 命令：后台命令脱离终端运行",
          "slug": "nohup-命令-后台命令脱离终端运行",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "系统定时任务",
      "slug": "系统定时任务",
      "children": [
        {
          "level": 3,
          "title": "at 命令：一次性执行定时任务",
          "slug": "at-命令-一次性执行定时任务",
          "children": []
        },
        {
          "level": 3,
          "title": "crontab 命令：循环执行定时任务",
          "slug": "crontab-命令-循环执行定时任务",
          "children": []
        },
        {
          "level": 3,
          "title": "anacron 命令：异步执行定时任务",
          "slug": "anacron-命令-异步执行定时任务",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "系统资源查看",
      "slug": "系统资源查看",
      "children": [
        {
          "level": 3,
          "title": "vmstat 命令：监控系统资源",
          "slug": "vmstat-命令-监控系统资源",
          "children": []
        },
        {
          "level": 3,
          "title": "dmesg 命令：显示开机信息",
          "slug": "dmesg-命令-显示开机信息",
          "children": []
        },
        {
          "level": 3,
          "title": "free 命令：查看内存使用状态",
          "slug": "free-命令-查看内存使用状态",
          "children": []
        },
        {
          "level": 3,
          "title": "/proc/cpuinfo：查看 CPU 信息",
          "slug": "proc-cpuinfo-查看-cpu-信息",
          "children": []
        },
        {
          "level": 3,
          "title": "w 和 who 命令：查看本机登录用户信息",
          "slug": "w-和-who-命令-查看本机登录用户信息",
          "children": []
        },
        {
          "level": 3,
          "title": "last 和 lastlog 命令：查看过去登陆的用户信息",
          "slug": "last-和-lastlog-命令-查看过去登陆的用户信息",
          "children": []
        },
        {
          "level": 3,
          "title": "uptime 命令：显示系统时间和平均负载",
          "slug": "uptime-命令-显示系统时间和平均负载",
          "children": []
        },
        {
          "level": 3,
          "title": "uname命令：查看系统与内核的相关信息",
          "slug": "uname命令-查看系统与内核的相关信息",
          "children": []
        }
      ]
    }
  ],
  "git": {},
  "readingTime": {
    "minutes": 47.15,
    "words": 14145
  },
  "filePathRelative": "project/Linux/Linux_manage/04.linux_work.md"
}
