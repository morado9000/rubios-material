import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { cateringStyles } from './styles';

const CateringBox = ({title, description, image}) => {

    return (
        <Box sx={cateringStyles.overlay}>
            <Box sx={cateringStyles.wrapper}>
                {title ? (
                    title.map((line) => (
                        <Typography variant="h3" component="div" sx={{textTransform: "uppercase", fontWeight: "1000"}}>
                            {line}
                        </Typography>
                    ))
                ) : (<></>)}

                {description ? (
                    <Typography variant="p" compnent="div" sx={{marginY: "20px"}}>
                        {description}
                    </Typography>
                ) : (<></>)}
                
                {image ? (
                    <Box>
                        <img src="https://rubios.com/wp-content/uploads/2023/03/Order-Catering-button-2.png" />
                    </Box>
                ) : <></>}
            </Box>
        </Box>
    )
}

export default CateringBox