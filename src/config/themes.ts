import type { Theme, ThemeColors, ThemeName } from "../types/themes";

export { type Theme, type ThemeName, type ThemeColors };

export const THEMES: Record<string, Theme> = {
    light_default: {
        background: "#ffffff",
        foreground: "#0f172a",
        accent: "#4f46e5",
        muted: "#64748b",
        border: "#e2e8f0",
        surface: "#f8fafc",
        isDark: false,
    },
    dark_default: {
        background: "#0f172a",
        foreground: "#e2e8f0",
        accent: "#818cf8",
        muted: "#94a3b8",
        border: "#243449",
        surface: "#172033",
        isDark: true,
    },
    light_notepad: {
        isDark: false,
        background: '#fdf8e9',
        surface: '#fdf8e9',
        foreground: '#29231c',
        muted: '#736658',
        border: '#eaddc6',
        accent: '#b84c30',
    },
    dark_notepad: {
        isDark: true,
        background: '#241f1c',
        surface: '#241f1c',
        foreground: '#e6dfd3',
        muted: '#8a7d71',
        border: '#3d342d',
        accent: '#d97757',
    }
};