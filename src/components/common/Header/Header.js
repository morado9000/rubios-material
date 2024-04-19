import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { headerStyle } from './styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import MenuIcon from '@mui/icons-material/Menu';
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import { useMediaQuery, useTheme } from "@mui/material";
import { useState } from 'react';

export default function Header({ logo, midLinks, midEndLinks, button}) {
    const [anchorEl, setAnchorEl] = useState(null);

    const theme = useTheme();
    const isExtraSmallSize =  useMediaQuery((theme) => theme.breakpoints.only('xs'), {noSsr: true});

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const MobileBar = () => {
        return (
            <>
                <AppBar sx={{display: {md: "none"}, zIndex: 1501}}>
                    <Toolbar disableGutters sx={headerStyle.wrapper}>
                        <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", width:"100%" }}>
                            <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                                <Box>
                                    <img src={logo} alt="" />
                                </Box>  
                                <IconButton
                                    id="fade-button"
                                    aria-controls={open ? 'fade-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="fade-menu"
                                    aria-labelledby='fade-button'
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    TransitionComponent={Fade}
                                    marginThreshold={0}
                                    disableScrollLock={true}
                                    anchorReference="anchorPosition"
                                    anchorPosition={{ top: 50, left: 0 }}
                                    slotProps={{
                                        paper: {
                                        sx: {
                                            width: '100%',
                                            maxWidth: '100%',

                                        },
                                        }
                                    }}
                                    sx={{
                                        zIndex: 1501
                                    }}
                                >
                                {midLinks.map((link) => (
                                    <MenuItem sx={{fontSize: "30px", fontWeight: 1000}}>
                                        {link}
                                    </MenuItem>
                                ))}
                            </Menu>   
                            </Box>
                            {/*<Box sx={{ 
                                display: "flex", 
                                flexDirection: "column", 
                                justifyContent: "center", 
                                alignItems: "flex-start", 
                                backgroundColor: "white", 
                                color: "#196db6"}}>
                                {midLinks.map((link) => (
                                <Button sx={{fontSize: "20px", fontWeight: 1000}}>
                                    {link}
                                </Button>
                                ))}
                                </Box>*/}

                            
                        </Box>
                    </Toolbar>
                </AppBar>
            </>
        )
    }
    const DesktopBar = () => {
        return (
            <>
                <AppBar sx={{zIndex:3000, display: {xs: "none", md: "inline"}}}>
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
            </>
        )
    }

    return (
        <Box>
           <DesktopBar />
           <MobileBar />
        </Box>
    );
}