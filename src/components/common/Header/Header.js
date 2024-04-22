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
import Link from "@mui/material/Link";
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
                <Box sx={{display: {xs: "flex", md: "none"}, ...headerStyle.wrapper}}>
                    <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", px:1, height: "50%", borderBottom: "1px solid #d6d6d6"}}>
                        <Box sx={{paddingLeft: "10%"}}>
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
                                    zIndex: 1502
                                },
                                }
                            }}
                            sx={{
                                zIndex: 1502
                            }}
                        >
                        {midLinks.map((link) => (
                            <MenuItem sx={{fontSize: "30px", fontWeight: 1000}}>
                                {link}
                            </MenuItem>
                        ))}
                    </Menu>   
                    </Box>
                    <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-end", height: "50px"}}>
                        <Box display="flex" justifyContent="center" alignItems="center" height="100%" width="50%" >
                            <Link color="#0069aa" underline="none">
                                Locations
                            </Link>
                        </Box>
                        <Box display="flex" justifyContent="center" alignItems="center" height="100%" width="50%"  sx={{backgroundColor: "#0069aa"}}>
                            <Link color="#FFFFFF" underline="none">
                                Order Now
                            </Link>
                        </Box>
                    </Box>                  
                </Box>
            </>
        )
    }
    const DesktopBar = () => {
        return (
            <>
                <Box sx={{display: {xs: "none", md: "flex"}, ...headerStyle.wrapper}}>
                    <Box sx={{paddingLeft: "10%"}}>
                        <img src={logo} alt="" style={{display:"block"}} />
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
                        {midEndLinks ? (
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
                </Box>
            </>
        )
    }

    return (
        <Box>
            <AppBar elevation={0} sx={{zIndex: 1501, boxShadow: "3px 0px 5px #d6d6d6"}}>
                <Toolbar disableGutters sx={headerStyle.toolBarStyle}>
                    <MobileBar />
                    <DesktopBar />
                </Toolbar>
            </AppBar>
        </Box>
    );
}