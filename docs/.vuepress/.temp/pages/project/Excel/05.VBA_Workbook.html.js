export const data = {
  "key": "v-0fc50bda",
  "path": "/project/Excel/05.VBA_Workbook.html",
  "title": "VBA 之 Workbook 对象",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "VBA 之 Workbook 对象",
    "date": "2021-07-02T00:00:00.000Z",
    "tag": [
      "Excel"
    ],
    "category": [
      "笔记"
    ],
    "summary": "40、工作簿的引用方法 VBA 中，在不同的工作簿之间转换需要指定引用的工作簿，通常有下面几种方法。 1）使用工作簿的名称 工作簿名称是指 Excel 文件的文件名，可以使用 Workbooks 集合引用方式来引用工作簿，如下面的代码所示。 代码解析： WbPath 过程显示工作簿“工作簿的引用方法”的路径。应用于 Workbook 对象的 Path 属性将",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://ryukarin.github.io/blog/blog/project/Excel/05.VBA_Workbook.html"
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
          "content": "VBA 之 Workbook 对象"
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
          "content": "VBA 之 Workbook 对象"
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
      "title": "40、工作簿的引用方法",
      "slug": "_40、工作簿的引用方法",
      "children": [
        {
          "level": 3,
          "title": "1）使用工作簿的名称",
          "slug": "_1-使用工作簿的名称",
          "children": []
        },
        {
          "level": 3,
          "title": "2）使用工作簿的索引号",
          "slug": "_2-使用工作簿的索引号",
          "children": []
        },
        {
          "level": 3,
          "title": "3）使用 ThisWorkbook",
          "slug": "_3-使用-thisworkbook",
          "children": []
        },
        {
          "level": 3,
          "title": "4）使用 ActiveWorkbook",
          "slug": "_4-使用-activeworkbook",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "41、新建工作簿文件",
      "slug": "_41、新建工作簿文件",
      "children": []
    },
    {
      "level": 2,
      "title": "42、打开指定的工作簿",
      "slug": "_42、打开指定的工作簿",
      "children": []
    },
    {
      "level": 2,
      "title": "43、判断指定工作簿是否打开",
      "slug": "_43、判断指定工作簿是否打开",
      "children": [
        {
          "level": 3,
          "title": "1）遍历 Workbooks 集合方法",
          "slug": "_1-遍历-workbooks-集合方法",
          "children": []
        },
        {
          "level": 3,
          "title": "2）错误处理方法",
          "slug": "_2-错误处理方法",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "44、禁用宏则关闭工作簿",
      "slug": "_44、禁用宏则关闭工作簿",
      "children": []
    },
    {
      "level": 2,
      "title": "45、关闭工作簿不显示保存对话框",
      "slug": "_45、关闭工作簿不显示保存对话框",
      "children": [
        {
          "level": 3,
          "title": "1）使用 Close 方法关闭工作簿",
          "slug": "_1-使用-close-方法关闭工作簿",
          "children": []
        },
        {
          "level": 3,
          "title": "2）单击工作簿关闭按钮关闭工作簿",
          "slug": "_2-单击工作簿关闭按钮关闭工作簿",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "46、禁用工作簿的关闭按钮",
      "slug": "_46、禁用工作簿的关闭按钮",
      "children": []
    },
    {
      "level": 2,
      "title": "47、保存工作簿的方法",
      "slug": "_47、保存工作簿的方法",
      "children": [
        {
          "level": 3,
          "title": "1）使用 Save 方法",
          "slug": "_1-使用-save-方法",
          "children": []
        },
        {
          "level": 3,
          "title": "2）直接保存为另一文件名",
          "slug": "_2-直接保存为另一文件名",
          "children": []
        },
        {
          "level": 3,
          "title": "3）保存工作簿副本",
          "slug": "_3-保存工作簿副本",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "48、保存指定工作表为工作簿文件",
      "slug": "_48、保存指定工作表为工作簿文件",
      "children": []
    },
    {
      "level": 2,
      "title": "49、打印预览时不触发事件",
      "slug": "_49、打印预览时不触发事件",
      "children": []
    },
    {
      "level": 2,
      "title": "50、设置工作簿文档属性信息",
      "slug": "_50、设置工作簿文档属性信息",
      "children": []
    },
    {
      "level": 2,
      "title": "51、不打开工作簿取得其他工作簿数据",
      "slug": "_51、不打开工作簿取得其他工作簿数据",
      "children": [
        {
          "level": 3,
          "title": "1）使用公式",
          "slug": "_1-使用公式",
          "children": []
        },
        {
          "level": 3,
          "title": "2）使用 GetObject 函数",
          "slug": "_2-使用-getobject-函数",
          "children": []
        },
        {
          "level": 3,
          "title": "3）隐藏 Application 对象",
          "slug": "_3-隐藏-application-对象",
          "children": []
        },
        {
          "level": 3,
          "title": "4）使用 ExecuteExcel4Macro 方法",
          "slug": "_4-使用-executeexcel4macro-方法",
          "children": []
        },
        {
          "level": 3,
          "title": "5）使用 SQL 连接",
          "slug": "_5-使用-sql-连接",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "52、返回窗口的可视区域地址",
      "slug": "_52、返回窗口的可视区域地址",
      "children": []
    }
  ],
  "git": {},
  "readingTime": {
    "minutes": 32.07,
    "words": 9622
  },
  "filePathRelative": "project/Excel/05.VBA_Workbook.md"
}
