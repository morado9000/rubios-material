import React from 'react'
import NewItemCard from '../NewItemCard/NewItemCard'
import Box from '@mui/material/Box';
import { newItemStyle } from './styles'

const NewItem = () => {

    return (
        <Box sx={newItemStyle.wrapper}>
            <NewItemCard 
                title="New Menu Item"
                subtitle="California Bowl With Carnitas"
                description={["Try our new slow-cooked carnitas served with fresh guacamole, citrus rice, black beans,",
                            "romaine, creamy chipotle sauce and salsa fresca, and your choice of roasted chipotle salsa or salsa verde."]}
                innerImage="https://rubios.com/wp-content/uploads/2023/08/Yellow-pattern.png"
                outerImage="https://rubios.com/wp-content/uploads/2023/08/carnitas-bowl.png" />
        </Box>
    )
}

export default NewItem