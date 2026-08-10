import type { SiteConfig, ThemeConfig, SettingsConfig, UmamiAnalyticsConfig, AnalyticsConfig } from "../types";

export const SITE: SiteConfig = {
    website: "https://forminju.github.io/",
    author: "MinJu Jeon",
    desc: "Personal academic portfolio of MinJu Jeon, M.S. student in Data Science at Hanyang University and Research Intern at LG AI Research (EXAONE Lab). Multimodal learning, vision-language, and multilingual speech.",
    title: "MinJu Jeon",
    ogImage: "me.jpg",
    postPerPage: 5,
    favicon: "/favicon.svg",
    lang: "en",
};

export const THEME_CONFIG: ThemeConfig = {
    lightAndDark: true,
    themeLight: "light_default",
    themeDark: "dark_default",
};

export const SETTINGS: SettingsConfig = {
    showTagsInNavbar: false,
    showRSSInFooter: false,
    addDevToolsInProduction: false,
};

const umami: UmamiAnalyticsConfig = {
    websiteId: "",
    src: "https://cloud.umami.is/script.js",
}

export const ANALYTICS: AnalyticsConfig = {
    ga4Id: "",
    umami: umami
};
