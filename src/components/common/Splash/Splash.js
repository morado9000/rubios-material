import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SplashCard from '../SplashCard/SplashCard';
import { splashStyle } from './styles';

const Splash = () => {
    return (
        <Grid sx={splashStyle.wrapper} container>
            <Grid item xs={6}>
                <Box>
                    <img src="https://rubios.com/wp-content/uploads/2023/08/shrimp.png" alt="" />
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box>
                    <SplashCard 
                        items={[<img src="https://rubios.com/wp-content/uploads/2023/08/New.png" alt="" />,
                                <img src="https://rubios.com/wp-content/uploads/2023/08/BAJA-BEER-_.png" alt="" />,
                                <img src="https://rubios.com/wp-content/uploads/2023/08/Sustainable-Shrimp.-Rubios-Signature-Beer-Batter_.png" alt="" />]}
                        outerItem={<img src="https://rubios.com/wp-content/uploads/2023/08/Only-8.png" alt="" />}
                        sx={splashStyle.cardWrapper} />
                </Box>
            </Grid>
        </Grid>
    )
}

export default Splash