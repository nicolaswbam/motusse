import { createTheme } from "@shopify/restyle";

const palette = {
  blue: "#0e6ab9",
  white: "#ffffff",
  yellow: "#fdb709",
  red: "#ce1429",
  lightGrey: "#c0c0c0",
} as const;

export const theme = createTheme({
  colors: {
    "background.default": palette.lightGrey,
    "background.unused": palette.blue,
    "background.misplaced": palette.yellow,
    "background.correct": palette.red,
    letter: palette.white,
    border: palette.white,
  },
  spacing: {
    s: 4,
    m: 8,
    l: 12,
  },
  breakpoints: {
    phone: 0,
  },
});

export type Theme = typeof theme;
