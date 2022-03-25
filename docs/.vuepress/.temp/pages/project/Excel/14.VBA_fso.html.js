export const data = {
  "key": "v-28a84265",
  "path": "/project/Excel/14.VBA_fso.html",
  "title": "VBA 之 文件操作",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "VBA 之 文件操作",
    "date": "2021-07-02T00:00:00.000Z",
    "tag": [
      "Excel"
    ],
    "category": [
      "笔记"
    ],
    "summary": "170、导入文本文件 在实际应用中，我们经常从软件中将数据导出为文本文件，在需要将这些文本文件导入到 Excel 中时可以使用以下的方法。 1）使用查询表导入 代码解析： AddQuery 过程使用 QueryTable 对象的 Add 方法新建查询表后将文本文件“工资表.txt”的内容导入到工作表中。 应用于 QueryTable 对象的 Add 方法新建",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://ryukarin.github.io/blog/blog/project/Excel/14.VBA_fso.html"
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
          "content": "VBA 之 文件操作"
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
          "content": "VBA 之 文件操作"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "Excel"
        }
      ],
      [
        "meta",
        {
          "property": "article:published_time",
          "content": "2021-07-02T00:00:00.000Z"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "170、导入文本文件",
      "slug": "_170、导入文本文件",
      "children": [
        {
          "level": 3,
          "title": "1）使用查询表导入",
          "slug": "_1-使用查询表导入",
          "children": []
        },
        {
          "level": 3,
          "title": "2）使用 Open 语句导入",
          "slug": "_2-使用-open-语句导入",
          "children": []
        },
        {
          "level": 3,
          "title": "3）使用 OpenText 方法",
          "slug": "_3-使用-opentext-方法",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "171、将数据写入文本文件",
      "slug": "_171、将数据写入文本文件",
      "children": [
        {
          "level": 3,
          "title": "1）使用 Print # 语句",
          "slug": "_1-使用-print-语句",
          "children": []
        },
        {
          "level": 3,
          "title": "2）另存为文本文件",
          "slug": "_2-另存为文本文件",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "172、文件修改的日期和时间",
      "slug": "_172、文件修改的日期和时间",
      "children": []
    },
    {
      "level": 2,
      "title": "173、查找文件或文件夹",
      "slug": "_173、查找文件或文件夹",
      "children": []
    },
    {
      "level": 2,
      "title": "174、获得当前文件夹的名称",
      "slug": "_174、获得当前文件夹的名称",
      "children": []
    },
    {
      "level": 2,
      "title": "175、创建和删除文件夹",
      "slug": "_175、创建和删除文件夹",
      "children": []
    },
    {
      "level": 2,
      "title": "176、重命名文件或文件夹",
      "slug": "_176、重命名文件或文件夹",
      "children": []
    },
    {
      "level": 2,
      "title": "177、复制指定的文件",
      "slug": "_177、复制指定的文件",
      "children": []
    },
    {
      "level": 2,
      "title": "178、删除指定的文件",
      "slug": "_178、删除指定的文件",
      "children": []
    },
    {
      "level": 2,
      "title": "179、搜索特定的文件",
      "slug": "_179、搜索特定的文件",
      "children": []
    },
    {
      "level": 2,
      "title": "180、使用 WSH 处理文件",
      "slug": "_180、使用-wsh-处理文件",
      "children": [
        {
          "level": 3,
          "title": "1）获取文件信息",
          "slug": "_1-获取文件信息",
          "children": []
        },
        {
          "level": 3,
          "title": "2）查找文件",
          "slug": "_2-查找文件",
          "children": []
        },
        {
          "level": 3,
          "title": "3）移动文件",
          "slug": "_3-移动文件",
          "children": []
        },
        {
          "level": 3,
          "title": "4）复制文件",
          "slug": "_4-复制文件",
          "children": []
        },
        {
          "level": 3,
          "title": "5）删除文件",
          "slug": "_5-删除文件",
          "children": []
        },
        {
          "level": 3,
          "title": "6）创建文件夹",
          "slug": "_6-创建文件夹",
          "children": []
        },
        {
          "level": 3,
          "title": "7）复制文件夹",
          "slug": "_7-复制文件夹",
          "children": []
        },
        {
          "level": 3,
          "title": "8）移动文件夹",
          "slug": "_8-移动文件夹",
          "children": []
        },
        {
          "level": 3,
          "title": "9）删除文件夹",
          "slug": "_9-删除文件夹",
          "children": []
        },
        {
          "level": 3,
          "title": "10）导入文本文件",
          "slug": "_10-导入文本文件",
          "children": []
        },
        {
          "level": 3,
          "title": "11）创建文本文件",
          "slug": "_11-创建文本文件",
          "children": []
        }
      ]
    }
  ],
  "git": {},
  "readingTime": {
    "minutes": 35.49,
    "words": 10647
  },
  "filePathRelative": "project/Excel/14.VBA_fso.md"
}
