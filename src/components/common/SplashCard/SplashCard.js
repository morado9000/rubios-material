import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';

const SplashCard = ({items, outerItem, sx}) => {

    const splashCardStyle = {
        content: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }
    }
    return (
        <Card sx={sx}>
            <CardContent sx={splashCardStyle.content}>
                {items ? (
                    items.map((item) => (
                        <Box sx={{mt:2, mb:1}}>
                            {item}
                        </Box>
                    ))
                ) : <></>}
                {outerItem ? (
                    <Box sx={{position: "absolute", pt:50, zIndex:1300}}>
                        {outerItem}
                    </Box>
                ) : <></>}
            </CardContent>
        </Card>
    )
}

export default SplashCard