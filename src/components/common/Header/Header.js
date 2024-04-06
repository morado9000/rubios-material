import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { headerStyle } from './styles';


export default function Header({ logo, midLinks, midEndLinks, button}) {

    return (
        <Box>
            <AppBar>
                <Toolbar disableGutters sx={headerStyle.wrapper}>
                    <Box sx={{paddingLeft: "10%"}}>
                        <img src={logo} alt="" />
                    </Box>       
                    <Box sx={headerStyle.navigation}>
                        {midLinks ? (
                            midLinks.map((link) => (
                                <Typography variant="bold" component="div" sx={headerStyle.navitems}>
                                    {link}
                                </Typography>
                            ))
                        ) : (<></>)}
                    </Box>
                    <Box sx={headerStyle.navigation}>
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