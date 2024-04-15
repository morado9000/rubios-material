import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

const NewsBox = ({image, title, description, link}) => {
    return (
        <Grid container direction="column" sx={{
            height: "100%",
            backgroundColor: "white",
            borderRadius: "10px", 
            overflow: "hidden",}}>
            <Grid item>
                <img src={image} style={{ maxWidth: "100%"}} />
            </Grid>
            <Grid item>
                <Typography variant="h5" component="div" sx={{p: "10px"}}>
                    {title}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="p" component="div" sx={{p: "10px"}}>
                    {description}
                </Typography>
            </Grid>
            <Grid item>
                <Link href={link} variant="h5" sx={{p: "10px"}}>Read More</Link>
            </Grid>
        </Grid>
    )
}

export default NewsBox