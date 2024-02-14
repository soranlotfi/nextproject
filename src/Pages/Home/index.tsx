import {Button, Grid, Typography, useTheme} from "@mui/material";
import STypography from "@/Components/STypography";
import {useEffect, useState} from "react";

const Home = ()=>{
    const theme = useTheme()
    const [mode , setMode] = useState('')
    useEffect(() => {
        setMode(theme.palette.mode)
    }, [theme.palette.mode]);
    return(
      /*  <Grid container className={"hello world"} bgcolor={`primary.${mode}`}>
            <Grid item sx={{background:`secondary.${mode}`}}>
            <Button color={`secondary`} sx={{backgroundColor:`secondary.${mode}`}}>asjkdbg</Button>
            </Grid>
        </Grid>*/

    <Grid container bgcolor={`secondary}`}>
        <Grid item sx={{background:`secondary}`}}>
            <Button color={`secondary`} sx={{backgroundColor:`secondary}`}}>asjkdbg</Button>
        </Grid>
    </Grid>
    )
}


export default Home
