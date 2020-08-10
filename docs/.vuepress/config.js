module.exports = {
  title: "bilili",
  description: "🍻 bilibili video and danmaku downloader | B站视频、弹幕下载器",
  locales: {
    "/": {
      lang: "zh-CN"
    }
  },

  head: [
    ["meta", { property: "og:url", content: "https://bilili.sigure.xyz" }],
    ["meta", { property: "og:site_name", content: "bilili" }],
    ["meta", { property: "og:image", content: "/logo.png" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "🍻 bilibili video and danmaku downloader | B站视频、弹幕下载器"
      }
    ],
    ["meta", { property: "og:title", content: "bilili" }]
  ],

  plugins: [
    // 返回顶部
    ["@vuepress/back-to-top"],
    // 鼠标特效插件
    [
      "cursor-effects",
      {
        size: 1.75,
        shape: "star"
      }
    ],
    // 离开页面标题变化
    [
      "dynamic-title",
      {
        showText: "(๑‾᷅^‾᷅๑)哼，还知道回来！",
        hideText: "(〟-_・)ﾝ?这就走了？",
        recoverTime: 2000
      }
    ]
  ],

  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/" },
      { text: "参数", link: "/options/" }
    ],
    sidebarDepth: 1,
    sidebar: {
      "/guide/": [
        "",
        "getting-started",
        "work-process",
        "faq",
        "knack",
        "sponsor",
        "notice"
      ],
      "/options/": ["", "cli", "usage"]
    },
    repo: "SigureMo/bilili",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: true,
    editLinkText: "帮我改进我的风格！"
  }
};
