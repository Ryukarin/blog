export const data = {
  "key": "v-400824e4",
  "path": "/project/Linux/Linux_manage/01.linux_boot.html",
  "title": "linux系统启动管理",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "linux系统启动管理",
    "date": "2021-06-01T00:00:00.000Z",
    "tag": [
      "linux"
    ],
    "category": [
      "笔记"
    ],
    "summary": "Linux 系统的启动是不需要人为参与和控制的，只要按下电源，系统就会按照设定好的方式进行启动。不过，了解系统的启动有助于我们在系统出现问题时能够快速地修复 Linux 系统。 在 CentOS 6.x 中，系统的启动过程和以前的系统相比变化较大，CentOS 6.x 系统使用 Upstart 启动服务取代了原先的 System V init 启动服务。Up",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://ryukarin.github.io/blog/blog/project/Linux/Linux_manage/01.linux_boot.html"
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
          "content": "linux系统启动管理"
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
          "content": "https://ryukarin.github.io/blog/blog/"
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
          "content": "linux系统启动管理"
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
      "title": "Linux 系统启动流程",
      "slug": "linux-系统启动流程",
      "children": [
        {
          "level": 3,
          "title": "BIOS 开机自检",
          "slug": "bios-开机自检",
          "children": []
        },
        {
          "level": 3,
          "title": "主引导目录（MBR）结构及作用",
          "slug": "主引导目录-mbr-结构及作用",
          "children": []
        },
        {
          "level": 3,
          "title": "启动引导程序的作用",
          "slug": "启动引导程序的作用",
          "children": []
        },
        {
          "level": 3,
          "title": "内核（内核模块）的加载过程",
          "slug": "内核-内核模块-的加载过程",
          "children": []
        },
        {
          "level": 3,
          "title": "/sbin/init 进程调用",
          "slug": "sbin-init-进程调用",
          "children": []
        },
        {
          "level": 3,
          "title": "/etc/rc.d/rc.sysinit：系统初始化",
          "slug": "etc-rc-d-rc-sysinit-系统初始化",
          "children": []
        },
        {
          "level": 3,
          "title": "/etc/inittab：设置系统默认运行级别",
          "slug": "etc-inittab-设置系统默认运行级别",
          "children": []
        },
        {
          "level": 3,
          "title": "先 /etc/initrc.conf 后 /etc/rc.drc 脚本文件",
          "slug": "先-etc-initrc-conf-后-etc-rc-drc-脚本文件",
          "children": []
        },
        {
          "level": 3,
          "title": "/etc/rc.d/rc.local 配置文件",
          "slug": "etc-rc-d-rc-local-配置文件",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "启动引导程序（BootLoader）",
      "slug": "启动引导程序-bootloader",
      "children": [
        {
          "level": 3,
          "title": "GRUB 加载内核的过程",
          "slug": "grub-加载内核的过程",
          "children": []
        },
        {
          "level": 3,
          "title": "/boot/grub/ 目录",
          "slug": "boot-grub-目录",
          "children": []
        },
        {
          "level": 3,
          "title": "GRUB 配置文件",
          "slug": "grub-配置文件",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "内核模块管理",
      "slug": "内核模块管理",
      "children": [
        {
          "level": 3,
          "title": "内核模块保存位置与模块保存文件",
          "slug": "内核模块保存位置与模块保存文件",
          "children": []
        },
        {
          "level": 3,
          "title": "内核模块的查看",
          "slug": "内核模块的查看",
          "children": []
        },
        {
          "level": 3,
          "title": "内核模块的添加与删除",
          "slug": "内核模块的添加与删除",
          "children": []
        },
        {
          "level": 3,
          "title": "安装NTFS文件系统模块",
          "slug": "安装ntfs文件系统模块",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "系统修复模式",
      "slug": "系统修复模式",
      "children": [
        {
          "level": 3,
          "title": "单用户模式",
          "slug": "单用户模式",
          "children": []
        }
      ]
    }
  ],
  "git": {},
  "readingTime": {
    "minutes": 53.05,
    "words": 15914
  },
  "filePathRelative": "project/Linux/Linux_manage/01.linux_boot.md"
}
