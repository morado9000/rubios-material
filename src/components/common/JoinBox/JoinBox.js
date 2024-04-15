import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';


const JoinBox = () => {

    const joinStyles = {
        wrapper: {
            width: "100%",
            height: "511px",
            display: "flex",
            flexDirection: "row",
            justifyContent:"center",
            overflow: "hidden",
        },
        innerBox: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#0075bf",
            backgroundImage: "url('https://rubios.com/wp-content/uploads/2022/12/white-distressing.png')",
        }
    }

    return (
        <Grid container direction={{sx: "column", md:"row"}} justifyContent="center" sx={{width: "100%", height:{md: "511px"}, overflow:"hidden"}}>
            <Grid item md={6}>
                <img src="https://rubios.com/wp-content/uploads/2022/12/20221028_RCG_Brand_Serving_2082.jpg" style={{ width: "100%", objectFit: "contain", display: "block"}} />
            </Grid>
            <Grid item xs container sx={{height: "100%", backgroundColor: "#0075bf", backgroundImage: "url('https://rubios.com/wp-content/uploads/2022/12/white-distressing.png')" }}>
                <Grid item container spacing={3} px={10} direction="column" justifyContent="center">
                    <Grid item>
                        <Typography variant="h3" component="div" color="white" >
                            BRING YOUR FLAVOR
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="p" component="div" color="white">
                            Check out our team for yourself. Rubio’s is a great place to work if you need flexible, part-time hours or want to begin a rewarding career. Either way, it would be great to meet you.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Link href="https://rubios.com/careers/">
                            <img src="https://rubios.com/wp-content/uploads/2022/12/btn-join-our-team.png" />
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default JoinBox