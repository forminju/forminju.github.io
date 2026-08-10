import type { PagesConfig } from "../types";

export const PAGES: PagesConfig = {
    home: {
        title: "About Me",
        subtitle: "",
        isActive: true,
    },
    blog: {
        title: "Blog",
        subtitle: "",
        isActive: false,
    },
    publications: {
        title: "Publications",
        subtitle: "Peer-reviewed papers and preprints in multimodal learning.",
        isActive: true,
    },
    talks: {
        title: "Talks & Presentations",
        subtitle: "",
        isActive: false,
    },
    projects: {
        title: "Projects",
        subtitle: "Industry-funded research and applied projects.",
        isActive: true,
    },
    teaching: {
        title: "Teaching",
        subtitle: "",
        isActive: false,
    },
    tags: {
        title: "Tags",
        subtitle: "Explore content by topic.",
        isActive: false,
    },
    cv: {
        title: "Curriculum Vitae",
        subtitle: "Academic and professional history.",
        isActive: true,
    },
};
