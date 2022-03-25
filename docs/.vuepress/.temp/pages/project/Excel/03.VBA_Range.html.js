export const data = {
  "key": "v-413fd00a",
  "path": "/project/Excel/03.VBA_Range.html",
  "title": "VBA 之 Range 对象",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "VBA 之 Range 对象",
    "date": "2021-07-02T00:00:00.000Z",
    "tag": [
      "Excel"
    ],
    "category": [
      "笔记"
    ],
    "summary": "Range 对象是 Excel 应用程序中最常用的对象，一个 Range 对象代表一个单元格、一行、一列、包含一个或者更多单元格区域（可以是连续的单元格，也可以是不连续的单元格）中选定的单元格，甚至是多个工作表上的一组单元格，在操作 Excel 内的任何区域之前都需要将其表示为一个 Range 对象，然后使用该 Range 对象的方法和属性。 1、单元格的引",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://ryukarin.github.io/blog/blog/project/Excel/03.VBA_Range.html"
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
          "content": "VBA 之 Range 对象"
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
          "content": "VBA 之 Range 对象"
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
      "title": "1、单元格的引用方法",
      "slug": "_1、单元格的引用方法",
      "children": [
        {
          "level": 3,
          "title": "1）使用 Range 属性",
          "slug": "_1-使用-range-属性",
          "children": []
        },
        {
          "level": 3,
          "title": "2）使用 Cells 属性",
          "slug": "_2-使用-cells-属性",
          "children": []
        },
        {
          "level": 3,
          "title": "3）使用快捷记号",
          "slug": "_3-使用快捷记号",
          "children": []
        },
        {
          "level": 3,
          "title": "4）使用 Offset 属性",
          "slug": "_4-使用-offset-属性",
          "children": []
        },
        {
          "level": 3,
          "title": "5）使用 Resize 属性",
          "slug": "_5-使用-resize-属性",
          "children": []
        },
        {
          "level": 3,
          "title": "6）使用 Union 方法",
          "slug": "_6-使用-union-方法",
          "children": []
        },
        {
          "level": 3,
          "title": "7）使用 UsedRange 属性",
          "slug": "_7-使用-usedrange-属性",
          "children": []
        },
        {
          "level": 3,
          "title": "8）使用 CurrentRegion 属性",
          "slug": "_8-使用-currentregion-属性",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "2、选定单元格区域的方法",
      "slug": "_2、选定单元格区域的方法",
      "children": [
        {
          "level": 3,
          "title": "1）使用 Select 方法",
          "slug": "_1-使用-select-方法",
          "children": []
        },
        {
          "level": 3,
          "title": "2）使用 Activate 方法",
          "slug": "_2-使用-activate-方法",
          "children": []
        },
        {
          "level": 3,
          "title": "3）使用 Goto 方法",
          "slug": "_3-使用-goto-方法",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "3、获得行、列中的最后一个非空单元格",
      "slug": "_3、获得行、列中的最后一个非空单元格",
      "children": []
    },
    {
      "level": 2,
      "title": "4、定位单元格",
      "slug": "_4、定位单元格",
      "children": []
    },
    {
      "level": 2,
      "title": "5、查找单元格",
      "slug": "_5、查找单元格",
      "children": [
        {
          "level": 3,
          "title": "1）使用 Find 方法",
          "slug": "_1-使用-find-方法",
          "children": []
        },
        {
          "level": 3,
          "title": "2）使用 Like 运算符",
          "slug": "_2-使用-like-运算符",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "6、替换单元格内字符串",
      "slug": "_6、替换单元格内字符串",
      "children": []
    },
    {
      "level": 2,
      "title": "7、复制单元格区域",
      "slug": "_7、复制单元格区域",
      "children": []
    },
    {
      "level": 2,
      "title": "8、仅复制数值到另一区域",
      "slug": "_8、仅复制数值到另一区域",
      "children": [
        {
          "level": 3,
          "title": "1）使用选择性粘贴",
          "slug": "_1-使用选择性粘贴",
          "children": []
        },
        {
          "level": 3,
          "title": "2）直接赋值的方法",
          "slug": "_2-直接赋值的方法",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "9、单元格自动进入编辑状态",
      "slug": "_9、单元格自动进入编辑状态",
      "children": []
    },
    {
      "level": 2,
      "title": "10、禁用单元格拖放功能",
      "slug": "_10、禁用单元格拖放功能",
      "children": []
    },
    {
      "level": 2,
      "title": "11、单元格格式操作",
      "slug": "_11、单元格格式操作",
      "children": [
        {
          "level": 3,
          "title": "1）单元格字体格式设置",
          "slug": "_1-单元格字体格式设置",
          "children": []
        },
        {
          "level": 3,
          "title": "2）设置单元格内部格式",
          "slug": "_2-设置单元格内部格式",
          "children": []
        },
        {
          "level": 3,
          "title": "3）为单元格区域添加边框",
          "slug": "_3-为单元格区域添加边框",
          "children": []
        },
        {
          "level": 3,
          "title": "4）灵活设置单元格的行高列宽",
          "slug": "_4-灵活设置单元格的行高列宽",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "12、单元格中的数据有效性",
      "slug": "_12、单元格中的数据有效性",
      "children": [
        {
          "level": 3,
          "title": "1）在单元格中建立数据有效性",
          "slug": "_1-在单元格中建立数据有效性",
          "children": []
        },
        {
          "level": 3,
          "title": "2）判断单元格是否存在数据有效性",
          "slug": "_2-判断单元格是否存在数据有效性",
          "children": []
        },
        {
          "level": 3,
          "title": "3）动态的数据有效性",
          "slug": "_3-动态的数据有效性",
          "children": []
        },
        {
          "level": 3,
          "title": "4）自动展开数据有效性下拉列表",
          "slug": "_4-自动展开数据有效性下拉列表",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "13、单元格中的公式",
      "slug": "_13、单元格中的公式",
      "children": [
        {
          "level": 3,
          "title": "1）在单元格中写入公式",
          "slug": "_1-在单元格中写入公式",
          "children": []
        },
        {
          "level": 3,
          "title": "2）检查单元格是否含有公式",
          "slug": "_2-检查单元格是否含有公式",
          "children": []
        },
        {
          "level": 3,
          "title": "3）判断单元格公式是否存在错误",
          "slug": "_3-判断单元格公式是否存在错误",
          "children": []
        },
        {
          "level": 3,
          "title": "4）取得单元格中公式的引用单元格",
          "slug": "_4-取得单元格中公式的引用单元格",
          "children": []
        },
        {
          "level": 3,
          "title": "5）将单元格中的公式转换为数值",
          "slug": "_5-将单元格中的公式转换为数值",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "14、单元格中的批注",
      "slug": "_14、单元格中的批注",
      "children": [
        {
          "level": 3,
          "title": "1）判断单元格是否存在批注",
          "slug": "_1-判断单元格是否存在批注",
          "children": []
        },
        {
          "level": 3,
          "title": "2）为单元格添加批注",
          "slug": "_2-为单元格添加批注",
          "children": []
        },
        {
          "level": 3,
          "title": "3）删除单元格中的批注",
          "slug": "_3-删除单元格中的批注",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "15、合并单元格操作",
      "slug": "_15、合并单元格操作",
      "children": [
        {
          "level": 3,
          "title": "1）判断单元格区域是否存在合并单元格",
          "slug": "_1-判断单元格区域是否存在合并单元格",
          "children": []
        },
        {
          "level": 3,
          "title": "2）合并单元格时连接每个单元格的文本",
          "slug": "_2-合并单元格时连接每个单元格的文本",
          "children": []
        },
        {
          "level": 3,
          "title": "3）合并内容相同的连续单元格",
          "slug": "_3-合并内容相同的连续单元格",
          "children": []
        },
        {
          "level": 3,
          "title": "4）取消合并单元格时在每个单元格中保留内容",
          "slug": "_4-取消合并单元格时在每个单元格中保留内容",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "16、高亮显示单元格区域",
      "slug": "_16、高亮显示单元格区域",
      "children": []
    },
    {
      "level": 2,
      "title": "17、双击被保护单元格时不显示提示消息框",
      "slug": "_17、双击被保护单元格时不显示提示消息框",
      "children": []
    },
    {
      "level": 2,
      "title": "18、重新计算工作表指定区域",
      "slug": "_18、重新计算工作表指定区域",
      "children": []
    },
    {
      "level": 2,
      "title": "19、录入数据后单元格自动保护",
      "slug": "_19、录入数据后单元格自动保护",
      "children": []
    },
    {
      "level": 2,
      "title": "20、工作表事件 Target 参数的使用方法",
      "slug": "_20、工作表事件-target-参数的使用方法",
      "children": [
        {
          "level": 3,
          "title": "1）使用单元格的 Address 属性",
          "slug": "_1-使用单元格的-address-属性",
          "children": []
        },
        {
          "level": 3,
          "title": "2）使用 Column 属性和 Row 属性",
          "slug": "_2-使用-column-属性和-row-属性",
          "children": []
        },
        {
          "level": 3,
          "title": "3）使用 Intersect 方法",
          "slug": "_3-使用-intersect-方法",
          "children": []
        }
      ]
    }
  ],
  "git": {},
  "readingTime": {
    "minutes": 55.2,
    "words": 16559
  },
  "filePathRelative": "project/Excel/03.VBA_Range.md"
}
