export const data = {
  "key": "v-7b6cf3fb",
  "path": "/project/Linux_basic/14.linux_filesystem_manage.html",
  "title": "linux文件系统管理",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "linux文件系统管理",
    "date": "2021-05-06T00:00:00.000Z",
    "summary": "文件系统这个名词大家都很陌生，不过如果说成分区，大家就比较容易理解了。原先每个分区只能格式化为一个文件系统，所以我们可以认为文件系统就是指分区。不过随着技术的进步，现在一个文件系统可以由几个分区组成，或者一个分区可以格式化为几个不同的文件系统，所以我们已经不能把文件系统和分区等同对待了。不过，为了便于理解，大家可以把文件系统想象成分区。下面会介绍硬盘的基本结",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://ryukarin.github.io/blog/project/Linux_basic/14.linux_filesystem_manage.html"
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
          "content": "linux文件系统管理"
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
          "content": "linux文件系统管理"
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
          "content": "2021-05-06T00:00:00.000Z"
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
      "title": "硬盘结构",
      "slug": "硬盘结构",
      "children": [
        {
          "level": 3,
          "title": "机械硬盘",
          "slug": "机械硬盘",
          "children": []
        },
        {
          "level": 3,
          "title": "固态硬盘",
          "slug": "固态硬盘",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Linux 中常见的文件系统",
      "slug": "linux-中常见的文件系统",
      "children": [
        {
          "level": 3,
          "title": "文件系统的特性",
          "slug": "文件系统的特性",
          "children": []
        },
        {
          "level": 3,
          "title": "Linux 支持的常见文件系统",
          "slug": "linux-支持的常见文件系统",
          "children": []
        },
        {
          "level": 3,
          "title": "硬盘分区",
          "slug": "硬盘分区",
          "children": []
        },
        {
          "level": 3,
          "title": "Linux 中硬盘与分区的表示方式",
          "slug": "linux-中硬盘与分区的表示方式",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "文件系统常用命令",
      "slug": "文件系统常用命令",
      "children": [
        {
          "level": 3,
          "title": "文件系统查看命令：df",
          "slug": "文件系统查看命令-df",
          "children": []
        },
        {
          "level": 3,
          "title": "统计目录或文件所占磁盘空间大小命令：du",
          "slug": "统计目录或文件所占磁盘空间大小命令-du",
          "children": []
        },
        {
          "level": 3,
          "title": "挂载和卸载命令：mount 和 umount",
          "slug": "挂载和卸载命令-mount-和-umount",
          "children": []
        },
        {
          "level": 3,
          "title": "文件系统检测与修复命令： fsck",
          "slug": "文件系统检测与修复命令-fsck",
          "children": []
        },
        {
          "level": 3,
          "title": "显示磁盘状态命令：dumpe2fs",
          "slug": "显示磁盘状态命令-dumpe2fs",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "硬盘分区命令：fdisk",
      "slug": "硬盘分区命令-fdisk",
      "children": [
        {
          "level": 3,
          "title": "命令格式",
          "slug": "命令格式",
          "children": []
        },
        {
          "level": 3,
          "title": "格式化分区",
          "slug": "格式化分区",
          "children": []
        },
        {
          "level": 3,
          "title": "建立挂载点并挂载",
          "slug": "建立挂载点并挂载",
          "children": []
        },
        {
          "level": 3,
          "title": "实现开机后自动挂载",
          "slug": "实现开机后自动挂载",
          "children": []
        },
        {
          "level": 3,
          "title": "/etc/fstab 文件修复",
          "slug": "etc-fstab-文件修复",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "parted 命令分区",
      "slug": "parted-命令分区",
      "children": [
        {
          "level": 3,
          "title": "parted 交互模式",
          "slug": "parted-交互模式",
          "children": []
        },
        {
          "level": 3,
          "title": "parted 命令的使用",
          "slug": "parted-命令的使用",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "分配 swap 分区",
      "slug": "分配-swap-分区",
      "children": [
        {
          "level": 3,
          "title": "虚拟内存和物理内存",
          "slug": "虚拟内存和物理内存",
          "children": []
        },
        {
          "level": 3,
          "title": "分区",
          "slug": "分区",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 65.96,
    "words": 19787
  },
  "filePathRelative": "project/Linux_basic/14.linux_filesystem_manage.md"
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
