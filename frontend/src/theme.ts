export interface ThemeVars {
  primary: string;
  secondary: string;
  surface: string;
  text: string;
}

export const THEMES: Record<string, ThemeVars> = {
  "Erdő":    { primary: "#2d6a4f", secondary: "#4a8f6e", surface: "#1d3528", text: "#86d0a8" },
  "Piros":   { primary: "#9b2226", secondary: "#c44040", surface: "#2e1315", text: "#e08080" },
  "Narancs": { primary: "#ae2012", secondary: "#d44030", surface: "#321208", text: "#e89070" },
  "Citrom":  { primary: "#8a7d00", secondary: "#b5a710", surface: "#282500", text: "#d4c840" },
  "Kék":     { primary: "#1d3557", secondary: "#2e5080", surface: "#111e32", text: "#80a8d4" },
  "Lila":    { primary: "#4a1c6e", secondary: "#6e3a98", surface: "#1e1030", text: "#c090e0" },
  "Szürke":  { primary: "#3d3d3d", secondary: "#666666", surface: "#252525", text: "#aaaaaa" },
};

export const THEME_NAMES = Object.keys(THEMES) as string[];

function hexToRgb(hex: string): string {
  const c = hex.replace("#", "");
  const r = parseInt(c.slice(0, 2), 16);
  const g = parseInt(c.slice(2, 4), 16);
  const b = parseInt(c.slice(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}

export function applyTheme(themeName: string): void {
  const theme = THEMES[themeName] ?? THEMES["Erdő"];
  const root = document.documentElement;
  root.style.setProperty("--accent-primary",   theme.primary);
  root.style.setProperty("--accent-secondary",  theme.secondary);
  root.style.setProperty("--accent-surface",    theme.surface);
  root.style.setProperty("--accent-text",       theme.text);
  root.style.setProperty("--accent-rgb",        hexToRgb(theme.primary));
  root.style.setProperty("--accent",            theme.primary);
}
