export const data = {
  "key": "v-4eaf9f84",
  "path": "/guide/page.html",
  "title": "page config",
  "lang": "zh-CN",
  "frontmatter": {
    "icon": "page",
    "title": "page config",
    "author": "Ms.Hope",
    "category": [
      "Guide"
    ],
    "tag": [
      "Page config",
      "Guide"
    ],
    "sticky": true,
    "star": true,
    "footer": "Footer content for test",
    "summary": "Page information You can set page information in Markdown’s Frontmatter. The author is set to Ms.Hope.; The writing time should be January 1, 2020; Category is \"Guide\"; Tags are \"P",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/guide/page.html"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "主题演示"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "page config"
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
          "property": "article:author",
          "content": "Ms.Hope"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "Page config"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "Guide"
        }
      ],
      [
        "meta",
        {
          "property": "article:published_time",
          "content": "2020-01-01T00:00:00.000Z"
        }
      ]
    ],
    "date": "2020-01-01T00:00:00.000Z"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Page information",
      "slug": "page-information",
      "children": []
    },
    {
      "level": 2,
      "title": "Page content",
      "slug": "page-content",
      "children": []
    },
    {
      "level": 2,
      "title": "Page structure",
      "slug": "page-structure",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 0.35,
    "words": 106
  },
  "filePathRelative": "guide/page.md"
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
