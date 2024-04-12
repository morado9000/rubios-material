import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { headerStyle } from './styles';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header({ logo, midLinks, midEndLinks, button}) {

    return (
        <Box>
            <AppBar sx={{zIndex:3000}}>
                <Toolbar disableGutters sx={headerStyle.wrapper}>
                    <Box sx={{paddingLeft: { xs: "5%", md: "10%"}}}>
                        <img src={logo} alt="" />
                    </Box>       
                    <Box sx={{...headerStyle.navigation, visibility: {xs: "hidden", md: "visible"}}}>
                        {midLinks ? (
                            midLinks.map((link) => (
                                <Typography variant="bold" component="div" sx={headerStyle.navitems}>
                                    {link}
                                </Typography>
                            ))
                        ) : (<></>)}
                    </Box>
                    <Box sx={{...headerStyle.navigation}}>
                        {midLinks ? (
                        <>
                           {midEndLinks.slice(0,midEndLinks.length-1).map((link) => (
                                <Typography variant="bold" component="div" sx={headerStyle.navborder}>
                                    {link}
                                </Typography>
                            ))}
                                <Typography variant="bold" component="div" sx={headerStyle.navitems}>
                                    {midEndLinks[midEndLinks.length-1]}
                                </Typography>
                        </>
                        ) : (<></>)}
                        <Box sx={headerStyle.buttonBox}>
                            <Typography variant="boldInvert" component="div" sx={headerStyle.buttonItem}>
                                {button}
                            </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}