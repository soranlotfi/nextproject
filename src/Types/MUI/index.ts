import {BorderOptions} from "../../Assets/theme/base/borders";


interface IFunctions {
    hexToRgb: (color: string) => string;
    BoxShadow: (offset: number[], radius: [number, number], color: string | undefined, opacity: number, inset?: string) => string;
    rgba: (color: string, opacity: number) => string;
    linearGradient: (color: string | undefined, colorState: string | undefined, angle: number | undefined) => string;
    gradientChartLine: (chart: HTMLCanvasElement, color: string, opacity: number) => CanvasGradient;
    pxToRem: (number: number) => string

}


declare module '@mui/material/styles' {

    interface Theme {
        border: BorderOptions
        functions: IFunctions
    }

    interface ThemeOptions {
        border?: BorderOptions
        functions?: IFunctions

    }


   /* interface PaletteOptions {
        primary?: SimplePaletteColorOptions
    }


    export interface P {
        light?: string;
        main: string;
        dark?: string;
        contrastText?: string;

    }*/


}