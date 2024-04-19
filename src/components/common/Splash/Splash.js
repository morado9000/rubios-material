import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SplashCard from '../SplashCard/SplashCard';
import { splashStyle } from './styles';
import { useMediaQuery, useTheme } from "@mui/material";

const Splash = () => {

    const theme = useTheme();
    const isExtraSmallSize =  useMediaQuery((theme) => theme.breakpoints.only('xs'), {noSsr: true});
    
    return (
        <Grid 
            container
            direction={{xs: "column", md: "row"}}
            justifyContent={{xs: "center", md: "space-between"}}
            alignItems="center"
            >
            <Grid item xs>
                    {isExtraSmallSize ? (
                        <img src="https://rubios.com/wp-content/uploads/2024/02/Tacos-Photo-mobile.png" alt="" style={{display: "block", width:"100%"}} />
                    ): (
                        <img src="https://rubios.com/wp-content/uploads/2024/02/TACOS.png" alt="" style={{display: "block"}} />
                    )}                   
            </Grid>
            <Grid 
                item 
                container 
                xs={5} 
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{position:"absolute", zIndex: 1500}}>
                    {isExtraSmallSize ? (
                        <>
                            <Grid item container justifyContent="center" alignItems="center" mb="15px">
                                <img src="https://rubios.com/wp-content/uploads/2024/02/HEADLINE-mobile.png" alt="" style={{width: "65%"}} />
                            </Grid>
                            <Grid item container justifyContent="center" alignItems="center">
                                <img src="https://rubios.com/wp-content/uploads/2024/02/button-order-now.png" alt="" style={{width: "40%"}} />
                            </Grid>
                        </>
                    ) : (
                        <>
                            <Grid item>
                                <img src="https://rubios.com/wp-content/uploads/2024/02/Headline.png" alt="" />
                            </Grid>
                            <Grid item>
                                <img src="https://rubios.com/wp-content/uploads/2024/02/button-order-now.png" alt="" />
                            </Grid>
                        </>
                    )}
                    
            </Grid>
            <Grid item>
                    {isExtraSmallSize ? (
                        <img src="https://rubios.com/wp-content/uploads/2024/02/Bowl-Photo-mobile.png" alt="" style={{display: "block", width:"100%"}} />
                    ): (
                        <img src="https://rubios.com/wp-content/uploads/2024/02/BOWL.png" alt="" style={{display: "block"}} />
                    )}
                    
            </Grid>
        </Grid>
    )
}

export default Splash