import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Grid from '@mui/material/Grid'
import useMediaQuery from '@mui/material/useMediaQuery'

const Footer = ({ logo, midLinks, copyrightLinks}) => {

    const headerStyle = {
        wrapper: {
            width: "100%",
            backgroundColor: "#0075bf",
            backgroundImage: "url('https://rubios.com/wp-content/uploads/2022/12/white-distressing.png')",
            paddingTop: "60px",
            paddingBottom: "64px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
        },
        footer: {
            width: "75%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
        navigation: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            height: "100%",
            padding: "0",
            margin:"0",
            mb: 5
        },
        navitems: {
            textTransform: "uppercase",
            mr: 5
        },
        navborder: {
            textTransform: "uppercase",
            mr: 2.5,
            paddingRight: 2.5,
            borderStyle: "solid",
            borderWidth: "0px 1px 0px 0px"
        },
        links: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
        },
        copyright: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        },
        innerCopyright: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
        }
    }

    const isExtraSmallSize =  useMediaQuery((theme) => theme.breakpoints.only('xs'), {noSsr: true});

    function logoProps() {
        if(isExtraSmallSize){
            return {
                xs: "12"
              };
        }
        return {};
    }

    function footerProps(){
        if(isExtraSmallSize){
            return {
                xs: "6"
            };
        }
        return {};
    }

    return (
        <>
            <Grid container sx={{
                 width: "100%",
                 backgroundColor: "#0075bf",
                 backgroundImage: "url('https://rubios.com/wp-content/uploads/2022/12/white-distressing.png')",
                 paddingTop: "60px",
                 paddingBottom: "64px",
                }}>
                <Grid item container direction="column" spacing={3} sx={{width: "100%"}}>
                    <Grid item container direction="row" justifyContent="center" alignItems="center" spacing={3}>
                        <Grid item {...logoProps()} px={5}>
                            <img src={logo} alt="" />
                        </Grid>
                        {midLinks ? (
                            midLinks.map((link) => (
                                <Grid item {...footerProps()}>
                                    <Typography variant="boldInvert" component="div" sx={headerStyle.navitems}>
                                        {link}
                                    </Typography>
                                </Grid>
                            ))
                            ) : (<></>)}
                    </Grid>
                    <Grid item container direction={{xs: "column", md: "row"}}>
                        <Grid item xs={4.5} container direction="column" alignItems="center">
                            <Grid item container direction="row" justifyContent={{md: "center"}}>
                                <Grid item>
                                    <Typography variant="boldInvert" component="div" sx={{textTransform:"uppercase"}}>
                                        Connect with us
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item container direction="row" justifyContent={{md: "center"}}>
                                <Grid item >
                                    <FacebookIcon fontSize='large' />
                                </Grid>
                                <Grid item>
                                    <InstagramIcon fontSize='large' />
                                </Grid>
                                <Grid item>
                                    <TwitterIcon fontSize='large'/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3} container direction="column" >
                            <Grid item container direction="row" >
                                <Grid item>
                                    <Typography variant="boldInvert" component="div" sx={{textTransform:"uppercase"}}>
                                        Get the rubios app
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item container direction="row" >
                                <Grid item><img src="https://rubios.com/wp-content/uploads/2021/12/button-apple.png" /></Grid>
                                <Grid item><img src="https://rubios.com/wp-content/uploads/2021/12/button-google.png" /></Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container sx={{
                width: "100%",
                backgroundColor: "#0075bf",
                backgroundImage: "url('https://rubios.com/wp-content/uploads/2022/12/white-distressing.png')",
                paddingTop: "60px",
                paddingBottom: "64px",}}>
                <Grid item container direction={{xs: "column-reverse", md:"row"}} rowSpacing={1} justifyContent="center">
                    <Grid item md={5}>
                        <Typography variant="boldInvert" fontSize="8px" sx={{textTransform:"uppercase"}}
                            >Copyright© 2023 Rubio’s Restaurants, Inc. All Rights reserved.
                        </Typography>
                    </Grid>
                    <Grid item md={3} container direction="row" columnSpacing={3} rowSpacing={1}>
                        <Grid item>
                            <Typography variant="boldInvert" fontSize="8px" sx={{textTransform:"uppercase"}}>
                                Do Not Sell My Personal Infomation
                            </Typography>
                        </Grid>
                        <Grid item>
                        <Typography variant="boldInvert" fontSize="8px" sx={{textTransform:"uppercase"}}>
                            Website Accessibility
                        </Typography>
                        </Grid>
                        <Grid item>
                        <Typography variant="boldInvert" fontSize="8px" sx={{textTransform:"uppercase"}}>
                            Terms of Use
                        </Typography>
                        </Grid>
                        <Grid item>
                        <Typography variant="boldInvert" fontSize="8px" sx={{textTransform:"uppercase"}}>
                            Privacy
                        </Typography>
                        </Grid>
                        <Grid item>
                        <Typography variant="boldInvert" fontSize="8px" sx={{textTransform:"uppercase"}}>
                            Cookies
                        </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        {/*
        <Box sx={headerStyle.wrapper}>
            <Box sx={headerStyle.footer}>
                <Box sx={headerStyle.navigation}>
                    <Box sx={headerStyle.navitems}>
                        <img src={logo} alt="" />
                    </Box>   
                    {midLinks ? (
                        midLinks.map((link) => (
                            <Typography variant="boldInvert" component="div" sx={headerStyle.navitems}>
                                {link}
                            </Typography>
                        ))
                    ) : (<></>)}
                </Box>
                <Box sx={headerStyle.links}>
                    <Typography variant="boldInvert" component="div" sx={{...headerStyle.navitems, mr:50}}>
                        Connect with us
                    </Typography>
                    <Typography variant="boldInvert" component="div" sx={headerStyle.navitems}>
                        Get the rubios app
                    </Typography>
                </Box>
                <Box sx={{...headerStyle.links, mb:10}}>
                    <FacebookIcon fontSize='large' sx={{mr:1}} />
                    <InstagramIcon fontSize='large' sx={{mr:1}} />
                    <TwitterIcon fontSize='large' sx={{mr:50}} />
                                
                    <Box sx={{mr:5}}><img src="https://rubios.com/wp-content/uploads/2021/12/button-apple.png" /></Box>
                    <Box><img src="https://rubios.com/wp-content/uploads/2021/12/button-google.png" /></Box>
                </Box>

                <Box sx={headerStyle.copyright}>
                        <Typography variant="boldInvert" fontSize="10px">Copyright© 2023 Rubio’s Restaurants, Inc. All Rights reserved.</Typography>
                        <Box sx={headerStyle.innerCopyright}>
                            {copyrightLinks ? (
                                copyrightLinks.map((link) => (
                                    <Typography variant="boldInvert" fontSize="10px" sx={headerStyle.navitems}>{link}</Typography>
                                ))
                            ) : (<></>)}
                        </Box>
                </Box>
            </Box>
                                </Box>*/}
        </>
    )
}

export default Footer;