'use client';
import { createTheme } from '@mui/material/styles';
import { Kanit } from 'next/font/google';

// Color Palette
export const COLORS = {
  PRIMARY: '#80339A',
  SECONDARY: '#2D308F',
  TERTIARY: '#343C97',
  BACKGROUND: '#343C97',
  BACKGROUND_PAPER: '#E6E6E8',
  YELLOW_TEXT: '#F4ED23',
  GREY_TEXT: '#5A5A5A',
  BLACK: '#000000',
  WHITE: '#FFFFFF',
  TITLE: '#e6d292',
};

const kanit = Kanit({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'thai'],
});

const theme = createTheme({
  typography: {
    fontFamily: kanit.style.fontFamily,
  },
  palette: {
    primary: {
      main: COLORS.TERTIARY,
    },
    secondary: {
      main: COLORS.SECONDARY,
    },
    tertiary: {
      main: COLORS.TERTIARY,
    },
    background: {
      default: COLORS.BACKGROUND,
      paper: COLORS.BACKGROUND_PAPER,
    },
    yellowText: {
      main: COLORS.YELLOW_TEXT,
    },
    greyText: {
      main: COLORS.GREY_TEXT,
    },
    white: {
      main: COLORS.WHITE,
    },
    black: {
      main: COLORS.BLACK,
    },
  },
  components: {
    MuiPaper: {
      defaultProps: {
        sx: {
          backgroundColor: COLORS.WHITE,
        },
      },
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    yellowText: Palette['primary'];
    greyText: Palette['primary'];
    white: Palette['primary'];
    black: Palette['primary'];
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
    yellowText?: PaletteOptions['primary'];
    greyText?: PaletteOptions['primary'];
    white?: PaletteOptions['primary'];
    black?: PaletteOptions['primary'];
  }
}

export default theme;
