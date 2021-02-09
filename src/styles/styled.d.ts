import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontSize:{
      large: string,
      medium: string,
      regular: string,
      small: string,
      micro: string,
    },
    fontWeight: {
      bold: number,
      reqular: number,
      light: number,
    },
    color : {
      black: string,
      white: string,
      grey: string,
      lightGrey: string,
      darkGrey:string,
      navy:string,
      green:string,
      orange: string,
      red:string,
    },
    duration: string,
    borderRadius: string,
    boxShadow : {
      default: string,
      deep: string,
    }
  }
}
