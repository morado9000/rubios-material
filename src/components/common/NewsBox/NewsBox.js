import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const NewsBox = ({image, title, description, link}) => {
    return (
        <Box>
            <Box>
                <img src={image} style={{ maxWidth: "100%"}} />
            </Box>
            <Typography variant="h5" component="div" sx={{p: "10px"}}>
                {title}
            </Typography>
            <Typography variant="p" component="div" sx={{p: "10px"}}>
                {description}
            </Typography>
            <Link href={link} variant="h5" sx={{p: "10px"}}>Read More</Link>
        </Box>
    )
}

export default NewsBox