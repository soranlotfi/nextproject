import {SxProps, Theme} from "@mui/material";
import * as CSS from "csstype";

export interface ISBox {
    userstate?:boolean
    backUrl?:any
    bgColor?: CSS.Property.BackgroundColor
    sx?: SxProps
    borderRadius?:string;
    width?: CSS.Property.Width | number;
    height?: CSS.Property.Height | number
    logo?:boolean
    hGradient?:boolean
    backProp?:"cover" | "contain" |"repeat"
    coverBackground?:boolean
    backgroundImage?:boolean
    blueCover?:boolean
    yellowCover?:boolean
    gradient?:boolean
    blurBackground?:boolean
    shadowedbox?:boolean
    overLayStyle?:"bluefill" | "yellowfill" | "blurCover"
    gradientColor?:"yellowGradient" | "blueGradient"
    position?: CSS.Property.Position
    children?: React.ReactNode
    circlebox?:boolean
}

export interface ISboxRoot {
    customstats: ISBox,
    theme?:Theme
}
export interface ColorStop {
    color?: string;
    position?: number;
}