import {} from 'styled-components/cssprop';

const devices = {
  mobile: 360,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
};

export const media = {
  lg: `@media (max-width: ${devices.desktop - 1}px)`,
  md: `@media (max-width: ${devices.laptop - 1}px)`,
  sm: `@media (max-width: ${devices.tablet - 1}px)`,
  xs: `@media (max-width: ${devices.mobile - 1}px)`,
} as const;

export type Media = typeof media;
