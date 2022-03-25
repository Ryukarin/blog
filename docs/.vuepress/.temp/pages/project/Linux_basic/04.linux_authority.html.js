export const data = {
  "key": "v-afecf3a0",
  "path": "/project/Linux_basic/04.linux_authority.html",
  "title": "linux权限管理命令",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "linux权限管理命令",
    "date": "2021-05-07T00:00:00.000Z",
    "summary": "权限介绍 为什么需要权限 我们发现，初学者并不是不能理解权限命令，而是不能理解为什么需要设定不同的权限。所有的人都直接使用管理员身份，不可以吗？这是由于绝大多数用户使用的是个人计算机，而使用个人计算机的用户一般都是被信任的用户（如家人、朋友等）。在这种情况下，大家都可 以使用管理员身份直接登录。又因为管理员拥有最大权限，所以给我们带来了错觉，以为在计算机中不",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://ryukarin.github.io/blog/project/Linux_basic/04.linux_authority.html"
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
          "content": "linux权限管理命令"
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
          "content": "linux权限管理命令"
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
          "content": "2021-05-07T00:00:00.000Z"
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
      "title": "权限介绍",
      "slug": "权限介绍",
      "children": [
        {
          "level": 3,
          "title": "为什么需要权限",
          "slug": "为什么需要权限",
          "children": []
        },
        {
          "level": 3,
          "title": "所有者、所属组和其他人",
          "slug": "所有者、所属组和其他人",
          "children": []
        },
        {
          "level": 3,
          "title": "权限位的含义",
          "slug": "权限位的含义",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "chmod 命令",
      "slug": "chmod-命令",
      "children": [
        {
          "level": 3,
          "title": "权限模式",
          "slug": "权限模式",
          "children": []
        },
        {
          "level": 3,
          "title": "数字权限",
          "slug": "数字权限",
          "children": []
        },
        {
          "level": 3,
          "title": "基本权限的含义",
          "slug": "基本权限的含义",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "chown 命令",
      "slug": "chown-命令",
      "children": [
        {
          "level": 3,
          "title": "常见用法",
          "slug": "常见用法",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "chgrp 命令",
      "slug": "chgrp-命令",
      "children": [
        {
          "level": 3,
          "title": "常见用法",
          "slug": "常见用法-1",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "umask 命令",
      "slug": "umask-命令",
      "children": [
        {
          "level": 3,
          "title": "umask 默认权的作用",
          "slug": "umask-默认权的作用",
          "children": []
        },
        {
          "level": 3,
          "title": "umask 默认权限的计算方法",
          "slug": "umask-默认权限的计算方法",
          "children": []
        },
        {
          "level": 3,
          "title": "umask 默认权限的修改方法",
          "slug": "umask-默认权限的修改方法",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 17.94,
    "words": 5381
  },
  "filePathRelative": "project/Linux_basic/04.linux_authority.md"
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
