import type Emoji from "./components/OgImage/Emoji.vue";

export default defineAppConfig({
  general: {
    title: 'Турфирма "Столица"',
    logo: "logo.png",
    iconLogo: "",
  },
  site: {
    // override the general settings for seo tags.
    // leave empty for general priority.
    // url is necessary for correct function of seo module.
    name: 'Туристская фирма "Столица"',
    description: "Туры по Башкирии и России",
    url: "https://stolitsa-turfirma.ru",
    favicon: {
      image: "/favicon.ico",
      emoji: "",
    },
  },
  directory: {
    search: {
      placeholder: "Search among {0} tools",
      icon: "tabler:bow",
      tags: {
        // options: none,select,show-all,
        display: "select",
        intersection: false,
      },
    },
    grid: {
      list: false,
      emptyState: {
        text: "Seems that this entry is missing from the archives.",
        // options: button, simple, link
        type: "button",
        icon: "tabler:exclamation-mark",
      },
      card: {
        image: true,
        // options: dashed, shadow, outline, bullet
        type: "shadow",
      },
      submit: {
        show: true,
        first: false,
        title: "Submit a template",
        description:
          "Submit a template to show off a good project to other people.",
        hideable: true,
      },
    },
    featured: {
      showOnAllPages: true,
      showOnSide: true,
      icon: "tabler:star",
      labelForCard: "Избранное ✨",
    },
    tags: [
      { name: "Тур выходного для", color: "blue" },
      { name: "Уникальное место", color: "green" },
      { name: "Известная достопримечательность" },
      { name: "Уфа" },
      { name: "Башкирия" },
      { name: "Россия" },
      { name: "Индивидуальный тур", color: "indigo" },
    ],
    tagPages: {
      title: "Available {0} products:",
      description:
        "View all available tools and templates in the {0} category...",
    },
  },
  header: {
    banner: {
      show: false,
      text: "Проведи незабываемый Новый год с нами!",
      link: "/event202412",
      brandText: "31 декабря 2024 года",
    },
    navbar: {
      colorModeSelector: true,
      links: [
//      { name: "Главная", to: "/" },
        { name: "Экскурсии", name2: "по Уфе", to: "/tour_ufa" },
        { name: "Маршруты",  name2: "по Башкирии", to: "/tour_bashkortostan" },
        { name: "Туры",      name2: "по России", to: "/tour_russia" },
        { name: "Приём",     name2: "гостей", to: "/welcome" },
        { name: "О нас", to: "/about" },
      ],
    },
    actionButton: {
      text: "Авторизоваться",
      href: "/login",
    },
  },
  footer: {
    description: "Best directory for my niche.",
    socials: {
      vk: {
        link: "https://vk.com/turfirma_stolitsa",
        icon: "tabler:brand-vk",
      },
      facebook: {
        link: "",
        icon: "tabler:brand-facebook",
      },
      instagram: {
        link: "https://instagram.com/stolitsaufa",
        icon: "tabler:brand-instagram",
      },
      x: {
        link: "",
        icon: "tabler:brand-twitter",
      },
      youtube: {
        link: "",
        icon: "tabler:brand-youtube",
      },
    },
  },
  ui: {
    icons: {
      dark: "tabler:moon",
      light: "tabler:sun",
    },
  },
});
