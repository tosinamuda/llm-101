declare module '@carbon/colors' {
  export interface ColorScale {
    10: string;
    20: string;
    30: string;
    40: string;
    50: string;
    60: string;
    70: string;
    80: string;
    90: string;
    100: string;
    [key: number]: string;
  }

  export interface CarbonColors {
    black: string;
    white: string;
    gray: ColorScale;
    blue: ColorScale;
    teal: ColorScale;
    green: ColorScale;
    purple: ColorScale;
    magenta: ColorScale;
    red: ColorScale;
    orange: ColorScale;
    yellow: ColorScale;
    warmGray: ColorScale;
    coolGray: ColorScale;
    [key: string]: string | ColorScale;
  }

  const colors: CarbonColors;
  export default colors;
} 