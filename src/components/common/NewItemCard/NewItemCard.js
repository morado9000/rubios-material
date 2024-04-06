import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { newItemCardStyle } from './styles';


const NewItemCard = ({title, subtitle, description, innerImage, outerImage}) => {

    return (
        <Card sx={newItemCardStyle.box}>
            <CardContent sx={newItemCardStyle.wrapper}>
                <Box sx={newItemCardStyle.innerWrapper}>
                    <Box sx={{width:"50%"}}>
                        <Typography variant="p" component="div" sx={newItemCardStyle.itemFont}>
                            {title}
                        </Typography>
                        <Typography variant="h3" component="div"  sx={newItemCardStyle.itemFont}>
                            {subtitle}
                        </Typography>
                        <Typography variant="p" component="div" sx={newItemCardStyle.itemFont}>
                            {description ? (
                                description.map((line) => (
                                    <Box>
                                        {line}
                                    </Box>
                                ))
                            ) : <></>}
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Box sx={{position: "absolute", zIndex:1500, left:"50%",}}>
                        <img src={innerImage} alt="" />
                    </Box>
                    <Box sx={{position: "absolute", zIndex:2000, left:"50%",}}>
                        <img src={outerImage} alt="" />
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}

export default NewItemCard