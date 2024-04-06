import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const SignDivider = () => {

    const dividerStyles = {
        wrapper: {
            width: "100%",
            height: "100px",
            backgroundColor: "#062c43",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
        },
        innerWrapper: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
        }
    }
    return (
        <Box sx={dividerStyles.wrapper}>
            <Box sx={dividerStyles.innerWrapper}>
                <Box sx={{alignSelf: "end",  zIndex:1300}}>
                    <img src="https://rubios.com/wp-content/uploads/2022/12/rewards-new.png" alt="" />
                </Box>
                <Typography variant="h6" component="div" sx={{color: "#fcb900", width: "50%", ml: 5}}>
                    Sign Up for Rewards and Earn points for free Rubio's!
                </Typography>
            </Box>
            <Box sx={dividerStyles.innerWrapper}>
                <Button>
                    <Typography variant="h7" component="div" sx={{color: "#FFF", mr: 2}}>
                        Sign in
                    </Typography>
                </Button>
                <Button>
                    <img src="https://rubios.com/wp-content/uploads/2023/01/CreateAccountButton-200x45.png" alt="" />
                </Button>
            </Box>
        </Box>
    )
}

export default SignDivider