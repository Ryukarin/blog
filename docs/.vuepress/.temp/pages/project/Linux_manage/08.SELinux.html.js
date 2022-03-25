export const data = {
  "key": "v-10c0f74d",
  "path": "/project/Linux_manage/08.SELinux.html",
  "title": "SELinux管理",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "SELinux管理",
    "summary": "root 用户实在是一个超人，它在 Linux 系统当中就是无所不能的，而且读、写和执行权限对 root 用户完全没有作用。root 用户的存在极大地方便了 Linux 的管理，但是也造成了一定的安全隐患。 大家想象一下，如果 root 用户被盗用了，或者 root 用户本身对 Linux 并不熟悉，在管理 Linux 的过程中产生了误操作，则会造成什么样的",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://ryukarin.github.io/blog/project/Linux_manage/08.SELinux.html"
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
          "content": "SELinux管理"
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
          "property": "og:image",
          "content": "https://ryukarin.github.io/blog/"
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
          "name": "twitter:card",
          "content": "summary_large_image"
        }
      ],
      [
        "meta",
        {
          "name": "twitter:image:alt",
          "content": "SELinux管理"
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
      "title": "SELinux 是什么",
      "slug": "selinux-是什么",
      "children": []
    },
    {
      "level": 2,
      "title": "SELinux的主要作用",
      "slug": "selinux的主要作用",
      "children": []
    },
    {
      "level": 2,
      "title": "SELinux 的运行模式",
      "slug": "selinux-的运行模式",
      "children": []
    },
    {
      "level": 2,
      "title": "SELinux 的工作模式",
      "slug": "selinux-的工作模式",
      "children": [
        {
          "level": 3,
          "title": "Disable 工作模式（关闭模式）",
          "slug": "disable-工作模式-关闭模式",
          "children": []
        },
        {
          "level": 3,
          "title": "Permissive 工作模式（宽容模式）",
          "slug": "permissive-工作模式-宽容模式",
          "children": []
        },
        {
          "level": 3,
          "title": "Enforcing 工作模式（强制模式）",
          "slug": "enforcing-工作模式-强制模式",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "SELinux 配置文件",
      "slug": "selinux-配置文件",
      "children": []
    },
    {
      "level": 2,
      "title": "SELinux 工作模式设置",
      "slug": "selinux-工作模式设置",
      "children": []
    },
    {
      "level": 2,
      "title": "SELinux 安全上下文管理",
      "slug": "selinux-安全上下文管理",
      "children": [
        {
          "level": 3,
          "title": "1) 身份字段（user)",
          "slug": "_1-身份字段-user",
          "children": []
        },
        {
          "level": 3,
          "title": "2) 角色（role）",
          "slug": "_2-角色-role",
          "children": []
        },
        {
          "level": 3,
          "title": "3) 类型（type）",
          "slug": "_3-类型-type",
          "children": []
        },
        {
          "level": 3,
          "title": "4) 灵敏度",
          "slug": "_4-灵敏度",
          "children": []
        },
        {
          "level": 3,
          "title": "5) 类别",
          "slug": "_5-类别",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "修改和设置安全上下文的",
      "slug": "修改和设置安全上下文的",
      "children": []
    },
    {
      "level": 2,
      "title": "查询和修改默认安全上下文",
      "slug": "查询和修改默认安全上下文",
      "children": [
        {
          "level": 3,
          "title": "查询默认安全上下文",
          "slug": "查询默认安全上下文",
          "children": []
        },
        {
          "level": 3,
          "title": "修改默认安全上下文",
          "slug": "修改默认安全上下文",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "SELinux 日志查看",
      "slug": "selinux-日志查看",
      "children": [
        {
          "level": 3,
          "title": "auditd 的安装与启动",
          "slug": "auditd-的安装与启动",
          "children": []
        },
        {
          "level": 3,
          "title": "auditd 日志使用",
          "slug": "auditd-日志使用",
          "children": []
        },
        {
          "level": 3,
          "title": "audit2why 命令",
          "slug": "audit2why-命令",
          "children": []
        },
        {
          "level": 3,
          "title": "audit2allow 命令",
          "slug": "audit2allow-命令",
          "children": []
        },
        {
          "level": 3,
          "title": "sealert 命令",
          "slug": "sealert-命令",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "SELinux 策略规则",
      "slug": "selinux-策略规则",
      "children": [
        {
          "level": 3,
          "title": "Target 策略",
          "slug": "target-策略",
          "children": []
        },
        {
          "level": 3,
          "title": "MLS 策略",
          "slug": "mls-策略",
          "children": []
        },
        {
          "level": 3,
          "title": "Minimum 策略",
          "slug": "minimum-策略",
          "children": []
        },
        {
          "level": 3,
          "title": "策略规则查看",
          "slug": "策略规则查看",
          "children": []
        },
        {
          "level": 3,
          "title": "策略规则的开启和关闭",
          "slug": "策略规则的开启和关闭",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 39.85,
    "words": 11954
  },
  "filePathRelative": "project/Linux_manage/08.SELinux.md"
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
