export const data = {
  "key": "v-50d0a791",
  "path": "/project/Linux_basic/12.linux_user_group.html",
  "title": "linux用户和用户组管理",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "linux用户和用户组管理",
    "date": "2013-05-06T00:00:00.000Z",
    "summary": "用户和用户组管理，顾名思义就是添加用户和用户组、更改密码和设定权限等操作。可能有很多人觉得用户管理没有意义，因为我们在使用个人计算机的时候，不管执行什么操作，都以管理员账户登录，而从来没有添加和使用过其他普通用户。这样做对个人计算机来讲问题不大，不过在服务器上是行不通的。大家想象一下，我们是一个管理团队，共同维护一组服务器，难道每个人都能够被赋子管理员权限吗",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://ryukarin.github.io/blog/project/Linux_basic/12.linux_user_group.html"
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
          "content": "linux用户和用户组管理"
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
          "content": "2013-05-06T00:00:00.000Z"
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
      "title": "用户配置文件和管理相关文件",
      "slug": "用户配置文件和管理相关文件",
      "children": [
        {
          "level": 3,
          "title": "用户信息文件 /etc/passwd",
          "slug": "用户信息文件-etc-passwd",
          "children": []
        },
        {
          "level": 3,
          "title": "影子文件 /etc/shadow",
          "slug": "影子文件-etc-shadow",
          "children": []
        },
        {
          "level": 3,
          "title": "组信息文件 /etc/group",
          "slug": "组信息文件-etc-group",
          "children": []
        },
        {
          "level": 3,
          "title": "组密码文件 /etc/gshadow",
          "slug": "组密码文件-etc-gshadow",
          "children": []
        },
        {
          "level": 3,
          "title": "用户管理相关文件",
          "slug": "用户管理相关文件",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "用户管理命令",
      "slug": "用户管理命令",
      "children": [
        {
          "level": 3,
          "title": "添加用户：useradd",
          "slug": "添加用户-useradd",
          "children": []
        },
        {
          "level": 3,
          "title": "修改用户密码：passwd",
          "slug": "修改用户密码-passwd",
          "children": []
        },
        {
          "level": 3,
          "title": "修改用户信息：usermod",
          "slug": "修改用户信息-usermod",
          "children": []
        },
        {
          "level": 3,
          "title": "修改用户密码状态：chage",
          "slug": "修改用户密码状态-chage",
          "children": []
        },
        {
          "level": 3,
          "title": "删除用户：userdel",
          "slug": "删除用户-userdel",
          "children": []
        },
        {
          "level": 3,
          "title": "查看用户的 UID 和 GID：id",
          "slug": "查看用户的-uid-和-gid-id",
          "children": []
        },
        {
          "level": 3,
          "title": "切换用户身份：su",
          "slug": "切换用户身份-su",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "用户组管理命令",
      "slug": "用户组管理命令",
      "children": [
        {
          "level": 3,
          "title": "添加用户组：groupadd",
          "slug": "添加用户组-groupadd",
          "children": []
        },
        {
          "level": 3,
          "title": "修改用户组：groupmod",
          "slug": "修改用户组-groupmod",
          "children": []
        },
        {
          "level": 3,
          "title": "删除用户组：groupdel",
          "slug": "删除用户组-groupdel",
          "children": []
        },
        {
          "level": 3,
          "title": "把用户添加进组或从组中删除：gpasswd",
          "slug": "把用户添加进组或从组中删除-gpasswd",
          "children": []
        },
        {
          "level": 3,
          "title": "改变有效组：newgrp",
          "slug": "改变有效组-newgrp",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 49.11,
    "words": 14733
  },
  "filePathRelative": "project/Linux_basic/12.linux_user_group.md"
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
