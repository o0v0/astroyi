/**
 * title {string} website title
 * favicon {string} website favicon url
 * description {string} website description
 * author {string} author
 * avatar {string} Avatar used in the profile
 * motto {string} used in the profile
 * url {string} Website link
 * recentBlogSize {number} Number of recent articles displayed in the sidebar
 * archivePageSize {number} Number of articles on archive pages
 * postPageSize {number} Number of articles on blog pages
 * feedPageSize {number} Number of articles on feed pages
 * beian {string} Chinese policy
 */
export const site = {
    title: '冬菇',
    favicon: '/favicon.svg',
    description: 'Welcome to my independent blog website! ',
    author: "冬菇",
    avatar: '/avatar.png',
    motto: '冬菇.',
    url: 'https://astro-yi-nu.vercel.app',
    recentBlogSize: 5,
    archivePageSize: 25,
    postPageSize: 10,
    feedPageSize: 20,
    beian: ''
  }

/**
 * busuanzi {boolean} Enable Busuanzi Statistics Functionality
 * lang {string} Default website language: English
 * codeFoldingStartLines {number}
 */
export const config = {
  busuanzi: false,
  lang: 'zh', // English: en | 简体中文: zh-cn
  codeFoldingStartLines: 16, // Need to re-run the project to take effect
}

/**
 * Navigator
 */
export const categories = [
  {
    name: "Homepage",
    iconClass: "ri-home-4-line",
    href: "/",
  },
  {
    name: "Blog",
    iconClass: "ri-draft-line",
    href: "/blog/1",
  },
  {
    name: "Feed",
    iconClass: "ri-lightbulb-flash-line",
    href: "/feed/1",
  },
  {
    name: "Archive",
    iconClass: "ri-archive-line",
    href: "/archive/1",
  },
  {
    name: "Message",
    iconClass: "ri-chat-1-line",
    href: "/message/",
  },
  {
    name: "Search",
    iconClass: "ri-search-line",
    href: "/search",
  },
  {
    name: "More",
    iconClass: "ri-more-fill",
    href: "javascript:void(0);",
    children: [
      {
        name: 'About',
        iconClass: 'ri-information-line',
        href: '/about',
      },
      {
        name: 'Friends',
        iconClass: 'ri-user-5-line',
        href: '/friends',
        target: '_self', // _self | _blank
      },
    ]
  }
]

/**
 * Personal link address
 */
export const infoLinks = [
  {
    icon: 'ri-telegram-fill',
    name: 'telegram',
    outlink: 'xxxxxxx',
  },
  {
    icon: 'ri-twitter-fill',
    name: 'twitter',
    outlink: 'xxxxxxx',
  },
  {
    icon: 'ri-instagram-fill',
    name: 'instagram',
    outlink: 'xxxxxxx',
  },
  {
    icon: 'ri-github-fill',
    name: 'github',
    outlink: 'https://github.com/cirry',
  },
  {
    icon: 'ri-mail-fill',
    name: 'xxxxxxx@gmail.com',
    outlink: 'mailto:xxxxxxx@gmail.com',
  },
  {
    icon: 'ri-rss-fill',
    name: 'rss',
    outlink: 'https://xxxxx.com/rss.xml',
  }
]

/**
 * Donation feature
 * Please replace the image and paypal link before use.
 * enable {boolean}
 * tip {string}
 */
export const donate = {
  enable: false,
  tip: "Thanks for the coffee !!!☕",
  wechatQRCode: "/WeChatQR.png",
  alipayQRCode: "/AliPayQR.png",
  paypalUrl: "https://paypal.me/xxxxxxxx",
}

/**
 * Friends Links Page
 * name {string}
 * url {string}
 * avatar {string}
 * description {string}
 */
export const friendshipLinks =
  [
    {
      name: "Cirry's Blog",
      url: 'https://cirry.cn',
      avatar: "https://cirry.cn/avatar.png",
      description: 'frontend development'
    },
  ]

/**
 * Comment Feature
 * enable {boolean}
 * type {string} giscus and waline are currently supported.
 * walineConfig.serverUrl {string} server link
 * walineConfig.pageSize {number} number of comments per page. default 10
 * walineConfig.wordLimit {number} Comment word s limit. When a single number is filled in, it 's the maximum number of comment words. No limit when set to 0
 * walineConfig.count {number} recent comment numbers
 * walineConfig.pageview {boolean} display the number of page views and comments of the article
 * walineConfig.reaction {string | string[]} Add emoji interaction function to the article
 * walineConfig.requiredMeta {string[]}  Set required fields, default anonymous
 */
export const comment = {
  enable: false,
  type: 'giscus', // waline | giscus,
  walineConfig:{
    serverUrl: "https://xxxxx.xxxxx.app",
    lang: 'en',
    pageSize: 20,
    wordLimit: '',
    count: 5,
    pageview: true,
    reaction: true,
    requiredMeta: ["nick", "mail"],
    whiteList: ['/message/', '/friends/'],
  },

  // giscus config
  giscusConfig: {
    'data-repo': "xxxxxxx",
    'data-repo-id': "xxxxxx",
    'data-category': "Announcements",
    'data-category-id': "xxxxxxxxx",
    'data-mapping': "pathname",
    'data-strict': "0",
    'data-reactions-enabled': "1",
    'data-emit-metadata': "0",
    'data-input-position': "bottom",
    'data-theme': "light",
    'data-lang': "xxxxxxxxxxx",
    'crossorigin': "anonymous",
  }
}
