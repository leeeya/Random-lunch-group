import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSize: {
      large: string,
      medium: string,
      regular: string,
      small: string,
    },
    fontWeight: {
      bold: number,
      reqular: number,
      light: number,
    },
    color: {
      black: string,
      white: string,
      grey: string,
      lightGrey: string,
      darkGrey: string,
      navy: string,
      green: string,
      red: string,
    },
    borderRadius: string,
    boxShadow: {
      deep: string,
    }
  }
}
