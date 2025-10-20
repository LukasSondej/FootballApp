import "styled-components"
declare module "Styled-Components"  {
    export interface DefaultTheme {
      colors: {
            primary: string;
            background: string;
            textPrimary: string;
            textBackground: string;
        }
    }
}