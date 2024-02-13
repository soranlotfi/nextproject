import {styled} from "@mui/system";
import {Typography, useTheme} from "@mui/material";
import {ISTypographyRoot} from "../../Types/MUI/Components/STypography.types";

const STypographyRoot = styled(Typography)<ISTypographyRoot>(({customstats,theme}) => {
    const {
        yellowText, blueText, fontSize, fontFamily, fontWeight, color, lineHeight, letterSpacing, boxtitle,
        boxname,englishText
    } = customstats
    const {palette} = theme
    console.log(palette.primary)
    const {blue, yellow,  primary} = palette

    /*function HeaderGradientStyles() {
        return {}
    }*/
    function yellowTextStyles() {
        return {
            color: 'error'
        }
    }

    function blueTextStyles() {
        return {
            color: blue.A750
        }
    }
    function boxTitleStyles() {
        return {
            color:'rgba(0,0,0,.73)',
            fontSize:"1rem"
        }
    }
    function boxNameStyles() {
        return{
            fontSize:"1rem",
            color:"#000",
            fontWeight:"bold"
        }
    }
    function englishTextStyles() {
        return{
            fontSize:"1rem",
            fontWeight:"bold",
            fontFamily:"sans-serif !important",

        }
    }
        return {
            // fontSize,
            // fontWeight,
            // fontFamily,
            // color,
            // letterSpacing,
            // lineHeight: lineHeight,
            // ...(yellowText && yellowTextStyles()),
            // ...(blueText && blueTextStyles()),
            // ...(boxtitle && boxTitleStyles()),
            // ...(boxname && boxNameStyles()),
            // ...(englishText && englishTextStyles()),
            // color:primary
        }
    }

)

    export default STypographyRoot