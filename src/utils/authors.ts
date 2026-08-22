import { SITE } from "../config";

export interface AuthorPart {
    name: string;
    isSelf: boolean;
}

function normalize(name: string): string {
    return name.toLowerCase().replace(/[^a-z]/g, "");
}

/**
 * Splits a comma-separated author string so the site owner can be rendered
 * with emphasis, making author position readable at a glance.
 */
export function splitAuthors(authors: string): AuthorPart[] {
    const self = normalize(SITE.author);
    return authors
        .split(",")
        .map((name) => name.trim())
        .filter(Boolean)
        .map((name) => ({ name, isSelf: normalize(name) === self }));
}
