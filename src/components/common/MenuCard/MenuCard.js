import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Grid from '@mui/material/Grid'
import { menuCardStyles } from './styles';

const MenuCard = ({image, title, description}) => {

    const [openDes, setOpenDes] = useState(false);

    const showDescription = () => {
        setOpenDes(!openDes);
    }

    return (
        <Card sx={menuCardStyles.content}>
            <CardContent>
                <Box sx={menuCardStyles.wrapper}>
                    <Box>
                        <img src={image} alt="" style={{width: "273px", height: "250px"}} />
                    </Box>
                    <Box sx={menuCardStyles.innerWrapper}>
                        <Typography>
                            {title}
                        </Typography>
                        <IconButton color="primary" onClick={showDescription} sx={menuCardStyles.buttonStyle}>
                            {openDes ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </Box>
                    {openDes ? (
                        <Typography>
                            {description}
                        </Typography>
                    ) : <></>}
                    <Button variant="outlined">
                        Order
                    </Button>
                </Box>
            </CardContent>
        </Card>
    )
}

export default MenuCard