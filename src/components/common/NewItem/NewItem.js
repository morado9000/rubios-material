import React from 'react'
import NewItemCard from '../NewItemCard/NewItemCard'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { newItemStyle } from './styles'
import { Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'

const NewItem = () => {
    
    const isExtraSmallSize =  useMediaQuery((theme) => theme.breakpoints.only('xs'), {noSsr: true});

    return (
        <Box sx={newItemStyle.wrapper}>
            {/*<Box sx={newItemStyle.wrapper}>
                <NewItemCard 
                    title="New Menu Item"
                    subtitle="California Bowl With Carnitas"
                    description={["Try our new slow-cooked carnitas served with fresh guacamole, citrus rice, black beans,",
                                "romaine, creamy chipotle sauce and salsa fresca, and your choice of roasted chipotle salsa or salsa verde."]}
                    innerImage="https://rubios.com/wp-content/uploads/2023/08/Yellow-pattern.png"
                    outerImage="https://rubios.com/wp-content/uploads/2023/08/carnitas-bowl.png" />
    </Box>*/}

            <Grid 
                container 
                direction={{
                    xs: "column",
                    md:"row" 
                }}
                justifyContent={{xs: "flex-start", md:"center"}} 
                alignItems={{xs: "flex-start", md:"center"}} 
                width={{xs: "300px", md:"1030px"}} 
                height={{xs: "427px", md: "535px"}} 
                sx={{backgroundColor: "#0a6fb8",
                    borderRadius: "25px"}}>
                <Grid item md={6} container direction="column" rowSpacing={2} sx={{p: {xs: 3, md:10}}}>
                    <Grid item md={2}>
                        <Typography variant="p" component="div" color="#FFF" >New Menu Item</Typography>
                    </Grid>
                    <Grid item md={2}>
                        <Typography variant="h4" component="div" color="#FFF">
                            California Bowl With Carnitas
                        </Typography>
                    </Grid>
                    <Grid item md={2}>
                        <Typography variant="p" component="div" color="#FFF">
                            Try our new slow-cooked carnitas served with fresh guacamole, citrus rice, black beans, romaine, creamy chipotle sauce and salsa fresca, and your choice of roasted chipotle salsa or salsa verde.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item md={6} container direction="column" sx={{alignSelf:{xs: "center", md: "flex-start"}}}>
                    {isExtraSmallSize ? (
                        <>
                            <Grid item container justifyContent="center" xs={6}>
                                <img src="https://rubios.com/wp-content/uploads/2023/08/Yellow-pattern.png" alt="" style={{position:"absolute", width:"75%"}} />
                            </Grid>
                            <Grid item container justifyContent="center">
                                <img src="https://rubios.com/wp-content/uploads/2023/08/carnitas-bowl.png" alt="" style={{position:"absolute", width:"75%"}} />
                            </Grid>
                        </>
                    ) : (
                        <>
                            <Grid item xs={6}>
                                <img src="https://rubios.com/wp-content/uploads/2023/08/Yellow-pattern.png" alt="" style={{position:"absolute"}} />
                            </Grid>
                            <Grid item>
                                <img src="https://rubios.com/wp-content/uploads/2023/08/carnitas-bowl.png" alt="" style={{position:"absolute"}} />
                            </Grid>
                        </>
                    )}
                    
                </Grid>
            </Grid>
        </Box>
    )
}

export default NewItem