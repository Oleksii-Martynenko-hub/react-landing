import 'styled-components';

import { Palette } from 'src/themes/palette';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: Palette;
  }
}
