import {} from 'styled-components/cssprop';

import { palette } from './palette';
import { media } from './media';

export const theme = {
  palette,
  media,
} as const;

export type CustomTheme = typeof theme;
