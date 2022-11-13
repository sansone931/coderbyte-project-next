import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      primary: string;
      danger: string;
      border: string;
      grayText: string;
      buttonDisabled: string;
    };
  }
}
