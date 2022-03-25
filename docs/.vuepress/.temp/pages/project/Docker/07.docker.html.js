export const data = {
  "key": "v-7f8e7232",
  "path": "/project/Docker/07.docker.html",
  "title": "端口映射与容器互联",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "端口映射与容器互联",
    "date": "2021-08-23T00:00:00.000Z",
    "tag": [
      "docker"
    ],
    "category": [
      "笔记"
    ],
    "summary": "通过前面的学习，相信你已经掌握了单个容器的管理操作。在实践中，经常会碰到需要多个服务组件容器共同协作的情况，这往往需要多个容器之间能够互相访问到对方的服务。 Docker 除了通过网络访间外，还提供了两个很方便的功能来满足服务访问的基本需求：一个是允许映射容器内应用的服务端口到本地宿主主机；另一个是互联机制实现多个容器间通过容器名来快速访问。下面将分别讲解这",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://ryukarin.github.io/blog/blog/project/Docker/07.docker.html"
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
          "content": "端口映射与容器互联"
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
          "content": "端口映射与容器互联"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "docker"
        }
      ],
      [
        "meta",
        {
          "property": "article:published_time",
          "content": "2021-08-23T00:00:00.000Z"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "端口映射实现容器访问",
      "slug": "端口映射实现容器访问",
      "children": [
        {
          "level": 3,
          "title": "1、从外部访问容器应用",
          "slug": "_1、从外部访问容器应用",
          "children": []
        },
        {
          "level": 3,
          "title": "2、映射所有接口地址",
          "slug": "_2、映射所有接口地址",
          "children": []
        },
        {
          "level": 3,
          "title": "3、映射到指定地址的指定端口",
          "slug": "_3、映射到指定地址的指定端口",
          "children": []
        },
        {
          "level": 3,
          "title": "4、映射到指定地址的任意端口",
          "slug": "_4、映射到指定地址的任意端口",
          "children": []
        },
        {
          "level": 3,
          "title": "5、查看映射端口配置",
          "slug": "_5、查看映射端口配置",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "互联机制实现便捷互访",
      "slug": "互联机制实现便捷互访",
      "children": [
        {
          "level": 3,
          "title": "1、自定义容器命名",
          "slug": "_1、自定义容器命名",
          "children": []
        },
        {
          "level": 3,
          "title": "2、容器互联",
          "slug": "_2、容器互联",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "小结",
      "slug": "小结",
      "children": []
    }
  ],
  "git": {},
  "readingTime": {
    "minutes": 8.83,
    "words": 2648
  },
  "filePathRelative": "project/Docker/07.docker.md"
}
