import { createTheme } from '@shopify/restyle';

const palette = {
  blue: '#0e6ab9',
  white: '#ffffff',
  yellow: '#fdb709',
  red: '#ce1429',
  lightGrey: '#c0c0c0',
  translucidBlack: '#000000c0',
} as const;

export const theme = createTheme({
  colors: {
    'background.default': palette.lightGrey,
    'background.unused': palette.blue,
    'background.misplaced': palette.yellow,
    'background.correct': palette.red,
    'background.keys': palette.white,
    'background.overlay': palette.translucidBlack,
    letter: palette.white,
    border: palette.white,
  },
  spacing: {
    xs: 2,
    s: 4,
    m: 8,
    l: 12,
    xxxl: 24,
  },
  breakpoints: {
    phone: 0,
  },
});

export type Theme = typeof theme;
