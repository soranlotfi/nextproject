import {AppProps} from "next/app";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import rtlPlugin from "stylis-plugin-rtl"
import {useEffect} from "react";
import {CssBaseline, ThemeProvider, useTheme} from "@mui/material";
import lightTheme from "@/Assets/theme/themeFiles/lightTheme";
import {AppMuiProvider} from "@/Context/Mui";
import darkTheme from "@/Assets/theme/themeFiles/darkTheme";

export default function App({Component, pageProps}: AppProps) {
    const cacheRtl = createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin],
        prepend: true
    })
    const cacheLtr = createCache({
        key: 'muiltr',
        prepend: true,
    })

    useEffect(() => {
        document.body.dir = "rtl"
    }, []);
    return (
        <AppMuiProvider>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <Component  {...pageProps} />
            </ThemeProvider>
        </AppMuiProvider>
    )
}