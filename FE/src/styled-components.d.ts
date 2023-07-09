import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends BaseDefaultTheme {
    borderRadius: string;
    colors: {
      main: string;
      secondary: string;
    };
  }
}