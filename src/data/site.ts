const privateCookieKey = import.meta.env.PRIVATE_COOKIE_KEY ?? "marchen_private";
const privateCookieValue = import.meta.env.PRIVATE_COOKIE_VALUE ?? "";

export const siteConfig = {
  name: "Marchen",
  title: "Marchen的小站",
  description: "记录灵感、收藏美好、折腾有趣的小东西",
  avatar: "/images/personal.jpg",
  privateCookieKey,
  privateCookieValue,
  socials: [
    { name: "GitHub", href: "https://github.com/marchen-orz", icon: "Github" },
    { name: "Bilibili", href: "https://space.bilibili.com/", icon: "Tv" },
    { name: "X", href: "https://x.com/", icon: "MessageCircle" },
    { name: "Email", href: "mailto:hello@marchen.dev", icon: "Mail" },
    { name: "RSS", href: "/rss.xml", icon: "Rss" },
  ],
  music: {
    provider: "qq",
    playlistId: "7881036180",
    metingApi: "/api/music/meting?server=:server&type=:type&id=:id&r=:r",
  },
};

export const nowItems = [
  "给小站换了一套清爽的新皮肤",
  "在研究更有趣的交互和动效",
  "收藏夹里攒了不少好东西准备整理",
];

export const timeline = [
  { date: "2026 May", title: "小站重启", description: "把文章、项目、碎念和工具重新整理成更顺手的入口" },
  { date: "2026 Apr", title: "知识库路线确认", description: "公开内容走静态路线，私有问答交给 API 小助手" },
  { date: "2025 Dec", title: "第一个效率工具", description: "把重复动作做成脚本，少点手工活，多点时间做有趣的事" },
  { date: "2025", title: "开始公开记录", description: "学习、踩坑、复盘都留下来，之后的自己会谢谢现在的自己" },
];
