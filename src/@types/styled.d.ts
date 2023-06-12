import 'styled-components';

import { Palette } from 'src/themes/palette';
import { Media } from 'src/themes/media';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: Palette;
    media: Media;
  }
}
