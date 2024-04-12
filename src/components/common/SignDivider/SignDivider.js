import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';

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

    const isExtraSmallSize =  useMediaQuery((theme) => theme.breakpoints.only('xs'), {noSsr: true});

    const DesktopGrid =  () => {
        return (
            <Grid 
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{width: "100%",
                    height:"100px",
                    backgroundColor: "#062c43",}}>
                <Grid
                    item
                    container
                    xs={8}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    height="100%"
                    >
                        <Grid item md={3} sx={{zIndex:1300,maxHeight: "100%", maxWidth: "100%"}}>
                            <img src="https://rubios.com/wp-content/uploads/2022/12/rewards-new.png" alt="" style={{display: "block",  position:"relative", bottom:21}}  />
                        </Grid>
                        <Grid item md={5} sx={{alignSelf: "center"}}>
                            <Typography variant="bold" component="div" sx={{color: "#fcb900", fontSize: "25px"}}>
                                Sign Up for Rewards and Earn points for free Rubio's!
                            </Typography>
                        </Grid>
                </Grid>
                <Grid
                    item
                    xs={4}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item md={2}>
                        <Button>
                            <Typography variant="bold" component="div" sx={{color: "#FFF"}}>
                                Sign in
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item md>
                        <Button>
                            <img src="https://rubios.com/wp-content/uploads/2023/01/CreateAccountButton-200x45.png" alt="" style={{display: "block"}} />
                        </Button>
                    </Grid>

                </Grid>
            </Grid>
        )
    }

    const MobileGrid = () => {
        return (
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{
                    width: "100%",
                    backgroundColor: "#062c43"
                }}
                rowSpacing={1}>
                <Grid item>
                    <Typography variant="bold" component="div" sx={{color: "#fcb900", fontSize: "24px", textAlign: "center", mt:5}}>
                        Sign Up for Rewards and Earn points for free Rubio's!
                    </Typography>
                </Grid>
                <Grid item>
                    <Button>
                        <img src="https://rubios.com/wp-content/uploads/2023/01/CreateAccountButton-200x45.png" alt="" style={{display: "block"}} />
                    </Button>
                </Grid>
                <Grid item>
                    <Button>
                        <Typography variant="bold" component="div" sx={{color: "#FFF"}}>
                            Sign in
                        </Typography>
                    </Button>
                </Grid>
                <Grid item>
                            <img src="https://rubios.com/wp-content/uploads/2022/12/rewards-new.png" alt="" style={{display: "block"}}  />
                    </Grid>
            </Grid>
        )
    }

    return (
        <>
        { isExtraSmallSize ? <MobileGrid /> : <DesktopGrid />}
        </>
    )
}

export default SignDivider