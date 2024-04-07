import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


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

    return (
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
        </Box>
    )
}

export default Footer;