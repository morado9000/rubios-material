import React from 'react';
import Box from '@mui/material/Box';
import CateringBox from '../CateringBox/CateringBox';
import { orderStyles } from './styles';

const OrderCatering = () => {

    return (
        <Box sx={orderStyles.wrapper}>
            <Box sx={{ml: "20%"}}>
                <CateringBox 
                    title={["the best parties", "happen in baja"]}
                    description="From game-day watch parties, to large corporate meetings, to the small get togethers in between—Rubio’s makes it easy to cater your every gathering."
                    image="https://rubios.com/wp-content/uploads/2023/03/Order-Catering-button-2.png" />
            </Box>
        </Box>
    )
}

export default OrderCatering