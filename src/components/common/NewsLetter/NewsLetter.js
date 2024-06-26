import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import NewsBox from '../NewsBox/NewsBox';
import { letterStyles } from './styles';

const NewsLetter = () => {

    return (
        <Grid container direction="column" alignItems="center" sx={letterStyles.wrapper}>
            <Grid item container direction="column" justifyContent="center"  sx={{width: {xs: "90%", md: "1260px"}}}>
                <Grid item>
                    <Typography variant="h3" component="div">
                        WHAT’S COOKIN’?
                    </Typography>
                </Grid>
                <Grid item container spacing={2} direction={{xs: "column", md: "row"}}>
                    <Grid item xs={9}>
                        <NewsBox 
                            image="https://rubios.com/wp-content/uploads/2023/09/Fish-Taco-Battle_WEB_2000x1378.jpg"
                            title="Rubio’s Announces Winner of First Battle for the Next Fish Taco"
                            description="Rubio’s Coastal Grill is pleased to announce the winner of the first-ever battle for the next fish taco -- Cynthia Phillips, from Phoenix, Ariz., took home the winning title for her Coconut Shrimp Mango Salsa Taco. Click here to learn more."
                            link="https://rubios.com/press/rubios-announces-winner-of-first-battle-for-the-next-fish-taco/"/>
                    </Grid>
                    <Grid item xs={3} container rowSpacing={2} direction="column">
                        <Grid item >
                            <NewsBox 
                                image="https://rubios.com/wp-content/uploads/2023/04/Padres-Promo_1024x573-1.png"
                                title="Rubio’s Partners with San Diego Padres to Give Free Tacos For 2023 Season"
                                description="Rubio’s Coastal Grill and the San Diego Padres are giving fans something extra tasty during the 2023 MLB season. Each time the Padres steal a base at Petco Park, fans will score a free, à la carte Rubio’s taco, with any purchase, the day after the game."
                                link="https://rubios.com/press/rubios-partners-with-san-diego-padres-to-give-free-tacos-for-2023-season/"/>
                        </Grid>
                        <Grid item>
                            <NewsBox 
                                image="https://rubios.com/wp-content/uploads/2023/03/ALTA0F6A8339Barra-de-la-Cruz-scaled.jpg"
                                title="Rubio’s Coastal Grill Donates to WILDCOAST on Behalf of 40th Anniversary"
                                description="Rubio’s is pleased to donate $54,846 to WILDCOAST, proceeds from the company’s 40th anniversary celebration on January 25th where guests enjoyed a total of 55,400 Original Fish Tacos®  for 99¢, the original price when Rubio’s first opened in 1983."
                                link="https://rubios.com/press/rubios-coastal-grill-donates-to-wildcoast-on-behalf-of-40th-anniversary/"/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default NewsLetter