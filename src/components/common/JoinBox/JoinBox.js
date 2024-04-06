import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

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
        <Box sx={joinStyles.wrapper}>
            <Box sx={{width:"50%"}}>
                <img src="https://rubios.com/wp-content/uploads/2022/12/20221028_RCG_Brand_Serving_2082.jpg" style={{ width: "100%", objectFit: "contain"}} />
            </Box>
            <Box sx={{...joinStyles.innerBox, width:"50%"}}>
                <Typography variant="h3" component="div" color="white" marginBottom="10px" paddingLeft="100px" >
                    BRING YOUR FLAVOR
                </Typography>
                <Typography variant="p" component="div" color="white" marginBottom="10px" paddingRight="100px" paddingLeft="100px">
                    Check out our team for yourself. Rubio’s is a great place to work if you need flexible, part-time hours or want to begin a rewarding career. Either way, it would be great to meet you.
                </Typography>
                <Link href="https://rubios.com/careers/" marginBottom="10px" paddingLeft="100px">
                    <img src="https://rubios.com/wp-content/uploads/2022/12/btn-join-our-team.png" />
                </Link>
            </Box>
        </Box>
    )
}

export default JoinBox