import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Github",
        href: "https://github.com/forminju",
        linkTitle: `MinJu Jeon on GitHub`,
        isActive: true,
    },
    {
        name: "Mail",
        href: "mailto:mnju5026@naver.com",
        linkTitle: `Email MinJu Jeon`,
        isActive: true,
    },
    {
        name: "Google Scholar",
        href: "https://scholar.google.com/citations?user=FdinrVsAAAAJ",
        linkTitle: `MinJu Jeon on Google Scholar`,
        isActive: true,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/minju36/",
        linkTitle: `MinJu Jeon on LinkedIn`,
        isActive: true,
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    Mail: "Mail",
    Linkedin: "LinkedIn",
    "Google Scholar": "GoogleScholar",
    ORCID: "ORCID",
    RSS: "RSS",
};
