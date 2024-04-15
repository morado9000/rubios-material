import React from 'react';
import Box from '@mui/material/Box';
import CateringBox from '../CateringBox/CateringBox';
import Typography from '@mui/material/Typography';
import { orderStyles } from './styles';
import { Grid } from '@mui/material';

const OrderCatering = () => {

    return (
        <>
            <Box sx={{
                mt: "200px",
                width: "100%",
                height: "707px",
                backgroundImage: "url('https://rubios.com/wp-content/uploads/2022/12/background-catering-1920.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
                <Grid container direction="column" justifyContent="center" alignItems="center"  sx={{width: {md: "75%"}, height: "100%"}}>
                    <Grid item container direction="column" justifyContent="center" spacing={{xs: 1, md:3}} sx={{
                        width: {xs: "90%", md: "633px"},
                        height: {md: "357px"},
                        backgroundColor: "#6ac7bd",
                        backgroundImage: "url('https://rubios.com/wp-content/uploads/2022/12/white-distressing-over-green.png')",
                        px: {xs: 3, md: 6},
                        py: 3,
                        borderRadius: "10px"
                    }}>
                        <Grid item>
                            <Typography variant="h3" component="div" sx={{textTransform: "uppercase", fontWeight: "1000", fontSize: {xs: "32px", md: "48px"}}}>
                                the best parties happen in baja
                            </Typography>
                        </Grid>
                        <Grid item>
                                <Typography variant="p" compnent="div" sx={{fontSize: "20px"}} >
                                    From game-day watch parties, to large corporate meetings, to the small get togethers in between—Rubio’s makes it easy to cater your every gathering.
                                </Typography>
                        </Grid>
                        <Grid item>
                            <img src="https://rubios.com/wp-content/uploads/2023/03/Order-Catering-button-2.png" />
                        </Grid>
                    </Grid>
                </Grid>
            </Box> 
        </>
    )
}

export default OrderCatering