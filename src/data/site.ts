export const siteConfig = {
  name: "Marchen",
  title: "Marchen 的数字花园",
  description: "记录技术、日常、项目与探索，构建属于自己的知识宇宙。",
  avatar: "/images/avatar.svg",
  privateCookieKey: "marchen_private",
  privateCookieValue: "marchen_orz",
  socials: [
    { name: "GitHub", href: "https://github.com/marchen", icon: "Github" },
    { name: "Bilibili", href: "https://space.bilibili.com/", icon: "Tv" },
    { name: "X", href: "https://x.com/", icon: "MessageCircle" },
    { name: "Email", href: "mailto:hello@marchen.dev", icon: "Mail" },
    { name: "RSS", href: "/rss.xml", icon: "Rss" },
  ],
  musicPlaylist: [
    {
      title: "Quiet Desk",
      artist: "Marchen",
      src: "/audio/quiet-desk.wav",
    },
    {
      title: "Late Night Notes",
      artist: "Marchen",
      src: "/audio/late-night-notes.wav",
    },
  ],
};

export const nowItems = [
  "梳理 Astro 个人站的内容结构",
  "补齐 React、系统设计和算法基础",
  "整理值得长期收藏的工具和链接",
];

export const timeline = [
  { date: "2026 May", title: "个人博客启动", description: "把技术写作、项目记录和知识库整理到一个长期维护的站点中。" },
  { date: "2026 Apr", title: "知识库路线确认", description: "确定公开内容静态化，私有问答使用第三方知识库 API。" },
  { date: "2025 Dec", title: "第一个效率工具", description: "开始把重复工作沉淀成脚本、小工具和可复用流程。" },
  { date: "2025", title: "持续学习与公开记录", description: "把学习过程、踩坑和复盘变成可回看的内容资产。" },
];
