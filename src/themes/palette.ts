import {} from 'styled-components/cssprop';

export const theme = {
  palette: {
    text: {
      primary: '#191B21',
      primaryOpacity: 'rgba(25, 27, 33, 0.6)',
      secondary: '#F7F5F9',
      secondaryOpacity: 'rgba(255, 255, 255, 0.6)',
      light: '#ffffff',
      blue: '#2278D4',
      green: '#22A75D',
    },
    colors: {
      body: '#F7F5F9',
      serviceCardsGradient:
        'linear-gradient(#f2f0f4 40%, rgba(242, 240, 244, 0.97) 40%)',
      footerBackground: '#1D1534',
      timelineDots: '#2278D4',
      mainBtn: '#22A75D',
      lightBtn: '#FFFFFF',
    },
  },
} as const;

export type Palette = typeof theme.palette;
