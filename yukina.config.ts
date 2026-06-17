import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "はいてくおーぱーつ　再構築中",
  subTitle: "hi-tech-ooparts",
  brandTitle: "hi-tech-ooparts",

  description: "はいてくおーぱーつ,hi-tech-ooparts",

  site: "https://hi-tech-ooparts.com",

  locale: "ja", // set for website language and date format

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_archive,
      href: "/archive",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
    {
      nameKey: I18nKeys.nav_bar_line,
      href: "https://store.line.me/stickershop/author/33766/ja",
    },
    {
      nameKey: I18nKeys.nav_bar_booth,
      href: "https://hi-tech-o.booth.pm/items",
    },
    {
      nameKey: I18nKeys.nav_bar_bandcamp,
      href: "https://mana02.bandcamp.com",
    },
    {
      nameKey: I18nKeys.nav_bar_googleplay,
      href: "https://play.google.com/store/apps/developer?id=MANA02",
    },    
    /*{
      nameKey: I18nKeys.nav_bar_github,
      href: "https://github.com/mana02",
    }*/
  ],

  username: "mana02",
  sign: "デザイン、動画、音楽、アプリとか",
  avatarUrl: "https://yt3.googleusercontent.com/_V0oFKYisPeJgschvC-oi8Eta0T1zeDvco-S5D_JCEK4VxSUjG7M52Trr3xXLIS4n0djVMXg=s160-c-k-c0x00ffffff-no-rj",
  socialLinks: [
    {
      icon: "mdi:storefront",
      link: "https://hi-tech-o.booth.pm/items",
    },
    {
      icon: "mdi:bandcamp",
      link: "https://mana02.bandcamp.com",
    },
    {
      icon: "mdi:soundcloud",
      link: "https://soundcloud.com/manamana_02",
    },
    {
      icon: "line-md:youtube",
      link: "https://www.youtube.com/channel/UCsZVIqg7q6iR0Bm49c12omQ",
    },
    {
      icon: "mdi:google-play",
      link: "https://play.google.com/store/apps/developer?id=MANA02",
    },
    {
      icon: "mdi:chat",
      link: "https://store.line.me/stickershop/author/33766/ja",
    },
  ],
  maxSidebarCategoryChip: 6, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "https://s2.loli.net/2025/01/25/PBvHFjr5yDu6t4a.webp",
    "https://s2.loli.net/2025/01/25/6bKcwHZigzlM4mJ.webp",
    "https://s2.loli.net/2025/01/25/H9WgEK6qNTcpFiS.webp",
    "https://s2.loli.net/2025/01/25/njNVtuUMzxs81RI.webp",
    "https://s2.loli.net/2025/01/25/tozsJ8QHAjFN3Mm.webp",
    "https://s2.loli.net/2025/01/25/Pm89OveZq7NWUxF.webp",
    "https://s2.loli.net/2025/01/25/UCYKvc1ZhgPHB9m.webp",
    "https://s2.loli.net/2025/01/25/JjpLOW8VSmufzlA.webp",
  ],

  slugMode: "HASH", // 'RAW' | 'HASH'

  license: {
    name: null,
    url: null,
  },

  // WIP functions
  bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

export default YukinaConfig;
